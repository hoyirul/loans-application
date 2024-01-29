<?php

namespace Database\Seeders;

use App\Models\Role;
use Illuminate\Database\Seeder;

class RoleSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $data = [
            ['role' => 'administrator'],
            ['role' => 'superior']
        ];

        foreach($data as $row){
            Role::create([
                'role' => $row['role']
            ]);
        }
    }
}
