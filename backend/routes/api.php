<?php

use App\Http\Controllers\Api\AuthController;
use App\Http\Controllers\Api\RoleController;
use App\Http\Controllers\Api\VehicleController;
use App\Http\Controllers\Api\OrderController;
use App\Http\Controllers\Api\ApprovalController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::prefix('/auth')->group(function(){
    Route::post('/login', [AuthController::class, 'login']);
    Route::post('/register', [AuthController::class, 'register']);
});

Route::middleware('auth:sanctum')->group(function(){
    Route::prefix('/auth')->group(function(){
        Route::post('/logout', [AuthController::class, 'logout']);
    });

    Route::apiResource('/roles', RoleController::class);
    Route::apiResource('/vehicles', VehicleController::class);
    Route::apiResource('/orders', OrderController::class);
    Route::get('/orders/reports/approved-orders/', [OrderController::class, 'reportApprovedOrders']);
    Route::get('/orders/reports/vehicle-orders/', [OrderController::class, 'reportVehicleOrders']);
    Route::prefix('/approvals')->group(function(){
        Route::get('/', [ApprovalController::class, 'index']);
        Route::get('/{id}', [ApprovalController::class, 'show']);
        Route::put('/{id}', [ApprovalController::class, 'updateStatusApproval']);
        Route::delete('/{id}', [ApprovalController::class, 'destroy']);
    });

});
