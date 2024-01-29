<?php

namespace Database\Seeders;

use Carbon\Carbon;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('users')->insert(
            [
                'name' => 'Administrator',
                'email' => 'admin@test.com',
                'email_verified_at' => null,
                'password' => Hash::make('password'),
                'role_id' => 1,
                'remember_token' => null,
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now()
            ],
        );

        DB::table('users')->insert(
            [
                'name' => 'Superior 1',
                'email' => 'sup1@test.com',
                'email_verified_at' => null,
                'password' => Hash::make('password'),
                'role_id' => 2,
                'remember_token' => null,
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now()
            ],
        );

        DB::table('users')->insert(
            [
                'name' => 'Superior 2',
                'email' => 'sup2@test.com',
                'email_verified_at' => null,
                'password' => Hash::make('password'),
                'role_id' => 2,
                'remember_token' => null,
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now()
            ],
        );
    }
}
