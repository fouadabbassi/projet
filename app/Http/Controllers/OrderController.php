<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreOrderRequest;
use App\Http\Requests\UpdateOrderRequest;
use App\Models\Order;
use Illuminate\Http\Request;

class OrderController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $orders = Order::all(); // عرض الطلبات مع Pagination
        return response()->json($orders);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validated = $request->validated();
        $order = Order::create($validated);
        return response()->json([
            'message' => 'Order created successfully',
            'order' => $order
        ], 201);
    }

    /**
     * Display the specified resource.
     */
    public function show(Order $order)
    {
        $order = Order::findOrFail($order);
        return response()->json($order);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Order $order)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Order $order)
    {
        $order = Order::findOrFail($order);
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|email|unique:users,email',
            'total_price' => 'sometimes|required|numeric|min:0',
            'status' => 'sometimes|required|in:pending,confirmed,shipped,delivered,cancelled',
            'products' => 'sometimes|required|array',
            'products.*.product_id' => 'sometimes|required|exists:products,id',
            'products.*.quantity' => 'sometimes|required|integer|min:1',
            'products.*.price' => 'sometimes|required|numeric|min:0',
        ]);
        $order->update($validated);
        return response()->json([
            'message' => 'Order updated successfully',
            'order' => $order
        ], 200);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        $order = Order::findOrFail($id);
        $order->delete();
        return response()->json($order);
    }
}
