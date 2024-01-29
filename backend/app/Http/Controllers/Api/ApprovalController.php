<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\ApprovalRequest;
use App\Http\Requests\UpdateApprovalRequest;
use App\Http\Requests\UpdateApprovalStatusRequest;
use App\Models\Approval;
use App\Traits\ApiResponse;
use Carbon\Carbon;
use Illuminate\Http\Response;

class ApprovalController extends Controller
{
    use ApiResponse;

    public function index()
    {
        try {
            $response = Approval::with('user', 'order')->orderBy('id', 'asc')->get();
            return $this->apiSuccess($response, Response::HTTP_OK);
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
            $response = Approval::find($id);
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

    public function updateStatusApproval(UpdateApprovalStatusRequest $request, $id)
    {
        try {
            $validated = $request->validated();
            $response = Approval::find($id);
            if ($response == null) {
                return $this->apiError(
                    'Data not found',
                    Response::HTTP_NOT_FOUND
                );
            }

            $response->update([
                'approval_date' => Carbon::now(),
                'status' => $validated['status'],
                'information' => $validated['information']
            ]);

            // update orders
            $response->order->update([
                'approval_status' => $validated['status'],
                'loan_status' => $validated['status'] == 'approved' ? 'being borrowed' : '-',
            ]);

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
            $response = Approval::find($id);
            if($response == null){
                return $this->apiError(
                    'Data not found',
                    Response::HTTP_NOT_FOUND
                );
            }
            $response->delete();
            return $this->apiSuccess($response, Response::HTTP_OK);
        }catch(\Throwable $e){
            return $this->apiError(
                $e->getMessage(),
                Response::HTTP_INTERNAL_SERVER_ERROR
            );
        }
    }
}
