<?php

namespace Database\Seeders;

use App\Models\Approval;
use Illuminate\Database\Seeder;

class ApprovalSeeder extends Seeder
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
                'user_id' => 2,
                'order_id' => 'TRX000001',
                'approval_date' => '2024-01-10',
                'status' => 'approved',
                'information' => 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
            ],
            [
                'user_id' => 3,
                'order_id' => 'TRX000001',
                'approval_date' => '2024-01-10',
                'status' => 'approved',
                'information' => 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
            ],
            [
                'user_id' => 2,
                'order_id' => 'TRX000002',
                'approval_date' => '2024-01-11',
                'status' => 'rejected',
                'information' => 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
            ],
            [
                'user_id' => 3,
                'order_id' => 'TRX000002',
                'approval_date' => '2024-01-11',
                'status' => 'pending',
                'information' => 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
            ],
            [
                'user_id' => 2,
                'order_id' => 'TRX000003',
                'approval_date' => '2024-01-12',
                'status' => 'rejected',
                'information' => 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
            ],
            [
                'user_id' => 3,
                'order_id' => 'TRX000003',
                'approval_date' => '2024-01-12',
                'status' => 'rejected',
                'information' => 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
            ],
            [
                'user_id' => 2,
                'order_id' => 'TRX000004',
                'approval_date' => null,
                'status' => 'pending',
                'information' => null
            ],
            [
                'user_id' => 3,
                'order_id' => 'TRX000004',
                'approval_date' => null,
                'status' => 'pending',
                'information' => null
            ]
        ];

        foreach($data as $row){
            Approval::create([
                'user_id' => $row['user_id'],
                'order_id' => $row['order_id'],
                'approval_date' => $row['approval_date'],
                'status' => $row['status'],
                'information' => $row['information']
            ]);
        }
    }
}
