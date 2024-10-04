<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UpdateOrderRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return false;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'user_id' => 'sometimes|required|exists:users,id',
            'total_price' => 'sometimes|required|numeric|min:0',
            'status' => 'sometimes|required|in:pending,confirmed,shipped,delivered,cancelled',
            'products' => 'sometimes|required|array',
            'products.*.product_id' => 'sometimes|required|exists:products,id',
            'products.*.quantity' => 'sometimes|required|integer|min:1',
            'products.*.price' => 'sometimes|required|numeric|min:0',
        ];
    }
}
