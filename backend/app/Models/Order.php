<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Order extends Model
{
    use HasFactory;

    public $primaryKey = 'order_id';
    public $incrementing = false;
    protected $fillable =
    [
        'order_id', 'user_id', 'vehicle_id', 'employee_name',
        'driver_name', 'order_date', 'date_of_return',
        'approval_status', 'loan_status', 'information'
    ];

    protected $casts =
    [
        'user_id' => 'integer',
        'vehicle_id' => 'integer'
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function vehicle()
    {
        return $this->belongsTo(Vehicle::class);
    }

    public function approval()
    {
        return $this->hasMany(Approval::class);
    }
}
