<?php

namespace Database\Factories;

use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Order>
 */
class OrderFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'name' => fake()->name(),
            'email' => fake()->safeEmail(),
            'phone' => $this->faker->phoneNumber,
            'total_price' => $this->faker->randomFloat(2, 50, 1000),
            'status' => $this->faker->randomElement(['pending', 'delivered', 'cancelled', 'autre']),
            'products' => json_encode([
                [
                    'product_id' => $this->faker->randomNumber(),
                    'quantity' => $this->faker->numberBetween(1, 5),
                    'price' => $this->faker->randomFloat(2, 10, 500),
                ],
            ]),
        ];
    }
}
