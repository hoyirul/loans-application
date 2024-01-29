<?php

namespace Database\Seeders;

use App\Models\Vehicle;
use Illuminate\Database\Seeder;

class VehicleSeeder extends Seeder
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
                'category' => 'goods', // people or goods
                'type' => 'mine', // mine or rent
                'name' => 'Toyota Truck Container',
                'police_number' => 'B 1234 ABC',
                'amount' => 5,
                'bbm_consume' => 10.5,
                'service_schedule' => '2024-01-01'
            ],
            [
                'category' => 'people', // people or goods
                'type' => 'mine', // mine or rent
                'name' => 'Toyota Avanza',
                'police_number' => 'B 1233 ABC',
                'amount' => 10,
                'bbm_consume' => 10.5,
                'service_schedule' => '2024-01-01'
            ],
            [
                'category' => 'goods', // people or goods
                'type' => 'rent', // mine or rent
                'name' => 'Hino Truck Box',
                'police_number' => 'B 1232 ABC',
                'amount' => 10,
                'bbm_consume' => 10.5,
                'service_schedule' => '2024-01-01'
            ],
            [
                'category' => 'people', // people or goods
                'type' => 'mine', // mine or rent
                'name' => 'Toyota Fortuner',
                'police_number' => 'B 1231 ABC',
                'amount' => 10,
                'bbm_consume' => 10.5,
                'service_schedule' => '2024-01-01'
            ],
            [
                'category' => 'people', // people or goods
                'type' => 'mine', // mine or rent
                'name' => 'Toyota Alphard',
                'police_number' => 'B 1230 ABC',
                'amount' => 10,
                'bbm_consume' => 10.5,
                'service_schedule' => '2024-01-01'
            ],
            [
                'category' => 'people', // people or goods
                'type' => 'mine', // mine or rent
                'name' => 'Toyota Hiace',
                'police_number' => 'B 1229 ABC',
                'amount' => 10,
                'bbm_consume' => 10.5,
                'service_schedule' => '2024-01-01'
            ],
            [
                'category' => 'goods', // people or goods
                'type' => 'rent', // mine or rent
                'name' => 'Mercedes Truck Box',
                'police_number' => 'B 1228 ABC',
                'amount' => 10,
                'bbm_consume' => 10.5,
                'service_schedule' => '2024-01-01'
            ],
            [
                'category' => 'goods', // people or goods
                'type' => 'rent', // mine or rent
                'name' => 'Mobil Box',
                'police_number' => 'B 1227 ABC',
                'amount' => 10,
                'bbm_consume' => 10.5,
                'service_schedule' => '2024-01-01'
            ],
        ];

        foreach($data as $row){
            Vehicle::create([
                'category' => $row['category'],
                'type' => $row['type'],
                'name' => $row['name'],
                'police_number' => $row['police_number'],
                'amount' => $row['amount'],
                'bbm_consume' => $row['bbm_consume'],
                'service_schedule' => $row['service_schedule']
            ]);
        }
    }
}
