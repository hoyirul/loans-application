<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Vehicle extends Model
{
    use HasFactory;

    protected $fillable = ['category', 'type', 'name', 'police_number', 'amount', 'bbm_consume', 'service_schedule'];

    protected $casts = [
        'amount' => 'integer',
        'bbm_consume' => 'double',
        'service_schedule' => 'date'
    ];

    public function order()
    {
        return $this->hasMany(Order::class);
    }
}
