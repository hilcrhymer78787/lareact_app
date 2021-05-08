<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\User;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        User::create([
            'name' => '今野 龍之介',
            'email' => 'test@gmail.com',
            'password' => \Hash::make('test1234'),
        ]);
        User::factory()->count(10)->create();
    }
}
