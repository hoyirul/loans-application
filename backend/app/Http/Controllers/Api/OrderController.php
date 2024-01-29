<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\OrderRequest;
use App\Models\Order;
use App\Traits\ApiResponse;
use Carbon\Carbon;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Auth;

class OrderController extends Controller
{
    use ApiResponse;

    public function index()
    {
        try {
            $orders = Order::with('vehicle', 'user')->orderBy('order_id', 'asc')->get();
            $response = $orders->map(function ($item) {
                $item->approval = $item->approval->map(function ($item) {
                    $item->user;
                    return $item;
                });
                return $item;
            });

            return $this->apiSuccess($response, Response::HTTP_OK);
        } catch (\Throwable $e) {
            return $this->apiError(
                $e->getMessage(),
                Response::HTTP_INTERNAL_SERVER_ERROR
            );
        }
    }

    public function store(OrderRequest $request)
    {
        try {
            $validated = $request->validated();
            $latest = Order::orderBy('order_id', 'DESC')->first();
            $id_number = $latest ? (int)substr($latest->order_id, 6) + 1 : 1;
            $id = 'TRX' . str_pad($id_number, 6, '0', STR_PAD_LEFT);

            $orders = Order::create([
                'order_id' => $id,
                'user_id' => Auth::user()->id,
                'vehicle_id' => $validated['vehicle_id'],
                'employee_name' => $validated['employee_name'],
                'driver_name' => $validated['driver_name'],
                'order_date' => Carbon::now(),
                'date_of_return' => NULL,
                'approval_status' => 'pending',
                'loan_status' => '-',
                'information' => $validated['information']
            ]);

            $users = explode(',', $validated['approval_user_id']);
            foreach ($users as $user) {
                $orders->approval()->create([
                    'user_id' => $user,
                    'order_id' => $id,
                    'approval_date' => NULL,
                    'status' => 'pending',
                    'information' => NULL
                ]);
            }

            $response = Order::with('vehicle', 'user')->find($id);

            return $this->apiSuccess($response, Response::HTTP_CREATED);
        } catch (\Throwable $e) {
            return $this->apiError(
                $e->getMessage(),
                Response::HTTP_INTERNAL_SERVER_ERROR
            );
        }
    }

    public function show($id)
    {
        try {
            $response = Order::find($id);
            if ($response == null) {
                return $this->apiError(
                    'Data not found',
                    Response::HTTP_NOT_FOUND
                );
            }
            return $this->apiSuccess($response);
        } catch (\Throwable $e) {
            return $this->apiError(
                $e->getMessage(),
                Response::HTTP_INTERNAL_SERVER_ERROR
            );
        }
    }

    public function update(OrderRequest $request, $id)
    {
        try {
            $validated = $request->validated();
            $response = Order::find($id);
            if ($response == null) {
                return $this->apiError(
                    'Data not found',
                    Response::HTTP_NOT_FOUND
                );
            }
            $response->update($validated);
            return $this->apiSuccess($response, Response::HTTP_OK);
        } catch (\Throwable $e) {
            return $this->apiError(
                $e->getMessage(),
                Response::HTTP_INTERNAL_SERVER_ERROR
            );
        }
    }

    public function destroy($id){
        try{
            $response = Order::find($id);
            if($response == null){
                return $this->apiError(
                    'Data not found',
                    Response::HTTP_NOT_FOUND
                );
            }
            $response->delete();
            return $this->apiSuccess($response, Response::HTTP_OK);
        } catch(\Throwable $e){
            return $this->apiError(
                $e->getMessage(),
                Response::HTTP_INTERNAL_SERVER_ERROR
            );
        }
    }
}
