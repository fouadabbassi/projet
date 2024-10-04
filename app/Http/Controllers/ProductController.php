<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class ProductController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $products = Product::all();
        return response()->json($products);
    }

    public function indexByCategory($category_id)
    {
        $products = Product::whereHas('subcategory', function ($query) use ($category_id) {
            $query->where('category_id', $category_id);
        })->paginate(9);

        return response()->json($products);
    }

    public function indexBySubcategory($subcategory_id)
    {
        $products = Product::where('subcategory_id', $subcategory_id)->paginate(9);
        return response()->json($products);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        try {
            $validated = $request->validate([
                'name' => 'required|string|max:255|unique:products,name',
                'description' => 'nullable|string',
                'price' => 'required|numeric|min:0',
                'stock' => 'required|integer|min:0',
                'image' => 'nullable|max:40048',
                'subcategory_id' => 'required|exists:subcategories,id',
            ]);

            // معالجة الصورة إذا تم رفعها
            if ($request->hasFile('image')) {
                $path = $request->file('image')->store('product_images', 'public');
                $validated['image'] = $path;
            }

            // إنشاء المنتج
            $product = Product::create($validated);
            return response()->json($product, 201);
        } catch (\Illuminate\Validation\ValidationException $e) {
            return response()->json($e->errors(), 422);
        }
    }


    /**
     * Display the specified resource.
     */
    public function show($id)
    {
        $product = Product::findOrFail($id);
        return response()->json($product);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, $id)
    {
        $product = Product::findOrFail($id);

        $validated = $request->validate([
            'name' => 'sometimes|required|string|max:255|unique:products,name,' . $product->id,
            'description' => 'nullable|string',
            'price' => 'sometimes|required|numeric|min:0',
            'stock' => 'sometimes|required|integer|min:0',
            'image' => 'nullable|image|mimes:jpeg,png,jpg|max:2048',
            'subcategory_id' => 'sometimes|required|exists:subcategories,id',
        ]);

        if ($request->hasFile('image')) {
            if ($product->image) {
                Storage::disk('public')->delete($product->image);
            }

            $path = $request->file('image')->store('product_images', 'public');
            $validated['image'] = $path;
        }

        $product->update($validated);

        return response()->json($product);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        $product = Product::findOrFail($id);

        if ($product->image) {
            Storage::disk('public')->delete($product->image);
        }
        return response()->json($product->delete()); // Return 204 No Content for a successful delete
    }
}
