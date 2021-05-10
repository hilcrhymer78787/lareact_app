<?php

namespace Database\Factories;

use App\Models\Calendar;
use Illuminate\Database\Eloquent\Factories\Factory;

class CalendarFactory extends Factory
{
    protected $model = Calendar::class;

    public function definition()
    {
        return [
            'date' => $this->faker->dateTimeBetween($startDate = '-2 week', $endDate = '+20 week'),
            'price' => 10000,
            'members_id' => $this->faker->numberBetween(1,30),
            'places_id' => $this->faker->numberBetween(1,30),
        ];
    }
}