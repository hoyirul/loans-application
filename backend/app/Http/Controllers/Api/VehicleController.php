<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\VehicleRequest;
use App\Models\Vehicle;
use App\Traits\ApiResponse;
use Illuminate\Http\Response;

class VehicleController extends Controller
{
    use ApiResponse;

    public function index()
    {
        try {
            $response = Vehicle::orderBy('id', 'asc')->get();
            return $this->apiSuccess($response, Response::HTTP_OK);
        } catch (\Throwable $e) {
            return $this->apiError(
                $e->getMessage(),
                Response::HTTP_INTERNAL_SERVER_ERROR
            );
        }
    }

    public function store(VehicleRequest $request)
    {
        try {
            $validated = $request->validated();
            $response = Vehicle::create($validated);
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
            $response = Vehicle::find($id);
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

    public function update(VehicleRequest $request, $id)
    {
        try {
            $validated = $request->validated();
            $response = Vehicle::find($id);
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

    public function destroy($id)
    {
        try {
            $response = Vehicle::find($id);
            if ($response == null) {
                return $this->apiError(
                    'Data not found',
                    Response::HTTP_NOT_FOUND
                );
            }
            $response->delete();
            return $this->apiSuccess($response, Response::HTTP_OK);
        } catch (\Throwable $e) {
            return $this->apiError(
                $e->getMessage(),
                Response::HTTP_INTERNAL_SERVER_ERROR
            );
        }
    }
}
