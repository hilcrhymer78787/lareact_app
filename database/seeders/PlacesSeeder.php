<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Place;

class PlacesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        // for ($i = 1; $i <= 4; $i++) {
        //     DB::table('places')->insert([
        //         'name' => '出勤場所' . $i,
        //         'address' => '東京都港区芝公園４丁目２−' . $i,
        //         'tel' => '0465858000' . $i,
        //     ]);
        // }
        Place::factory()->count(30)->create();
    }
}