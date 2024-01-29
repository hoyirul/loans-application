<?php

namespace Database\Seeders;

use App\Models\Order;
use Illuminate\Database\Seeder;

class OrderSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $data = [
            [
                'order_id' => 'TRX000001',
                'user_id' => 1,
                'vehicle_id' => 1,
                'employee_name' => 'John Doe',
                'driver_name' => 'Smith Lee',
                'order_date' => '2024-01-10',
                'date_of_return' => '2021-01-02',
                'approval_status' => 'approved',
                'loan_status' => 'returned',
                'information' => 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
            ],
            [
                'order_id' => 'TRX000002',
                'user_id' => 1,
                'vehicle_id' => 2,
                'employee_name' => 'Arhan Fauzan',
                'driver_name' => 'Randi Pratama',
                'order_date' => '2024-01-11',
                'date_of_return' => null,
                'approval_status' => 'approved',
                'loan_status' => 'being borrowed',
                'information' => 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
            ],
            [
                'order_id' => 'TRX000003',
                'user_id' => 1,
                'vehicle_id' => 6,
                'employee_name' => 'Asep Sutisna',
                'driver_name' => 'Saepul Anwar',
                'order_date' => '2024-01-12',
                'date_of_return' => null,
                'approval_status' => 'rejected',
                'loan_status' => '-',
                'information' => 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
            ],
            [
                'order_id' => 'TRX000004',
                'user_id' => 1,
                'vehicle_id' => 7,
                'employee_name' => 'Saeed Al-Masri',
                'driver_name' => 'Abdul Rahman',
                'order_date' => '2024-01-13',
                'date_of_return' => null,
                'approval_status' => 'pending',
                'loan_status' => '-',
                'information' => 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
            ]
        ];

        foreach($data as $row){
            Order::create([
                'order_id' => $row['order_id'],
                'user_id' => $row['user_id'],
                'vehicle_id' => $row['vehicle_id'],
                'employee_name' => $row['employee_name'],
                'driver_name' => $row['driver_name'],
                'order_date' => $row['order_date'],
                'date_of_return' => $row['date_of_return'],
                'approval_status' => $row['approval_status'],
                'loan_status' => $row['loan_status'],
                'information' => $row['information']
            ]);

            if ($row['loan_status'] != 'returned' || $row['loan_status'] != '-' && $row['approval_status'] != 'rejected'){
                $vehicle = \App\Models\Vehicle::find($row['vehicle_id']);
                $vehicle->amount = $vehicle->amount - 1;
                $vehicle->save();
            }
        }
    }
}
