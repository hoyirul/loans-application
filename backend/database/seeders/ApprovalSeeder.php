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
                'level' => '1',
            ],
            [
                'user_id' => 3,
                'order_id' => 'TRX000001',
                'approval_date' => '2024-01-10',
                'status' => 'approved',
                'level' => '2',
            ],
            [
                'user_id' => 2,
                'order_id' => 'TRX000002',
                'approval_date' => '2024-01-11',
                'status' => 'approved',
                'level' => '1',
            ],
            [
                'user_id' => 3,
                'order_id' => 'TRX000002',
                'approval_date' => '2024-01-11',
                'status' => 'approved',
                'level' => '2',
            ],
            [
                'user_id' => 2,
                'order_id' => 'TRX000003',
                'approval_date' => '2024-01-12',
                'status' => 'rejected',
                'level' => '1',
            ],
            [
                'user_id' => 3,
                'order_id' => 'TRX000003',
                'approval_date' => '2024-01-12',
                'status' => 'rejected',
                'level' => '2',
            ],
            [
                'user_id' => 2,
                'order_id' => 'TRX000004',
                'approval_date' => null,
                'status' => 'pending',
                'level' => '1',
            ],
            [
                'user_id' => 3,
                'order_id' => 'TRX000004',
                'approval_date' => null,
                'status' => 'waiting',
                'level' => '2',
            ]
        ];

        foreach($data as $row){
            Approval::create([
                'user_id' => $row['user_id'],
                'order_id' => $row['order_id'],
                'approval_date' => $row['approval_date'],
                'status' => $row['status'],
                'level' => $row['level']
            ]);
        }
    }
}
