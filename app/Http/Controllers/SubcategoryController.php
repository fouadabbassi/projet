<?php

namespace App\Http\Controllers;

use App\Models\Subcategory;
use Illuminate\Http\Request; // تأكد من استخدام هذا
use Illuminate\Support\Facades\Validator; // إذا كنت بحاجة للتحقق الإضافي

class SubcategoryController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function indexByCategory($category_id)
    {
        $subcategories = Subcategory::where('category_id', $category_id)->get();
        return response()->json($subcategories);
    }

    public function index()
    {
        $subcategories = Subcategory::all();
        return response()->json($subcategories);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255|unique:subcategories,name',
            'description' => 'nullable|string',
            'category_id' => 'required|integer|exists:categories,id',
        ]);

        $subcategory = Subcategory::create($validated);
        return response()->json($subcategory, 201);
    }

    /**
     * Display the specified resource.
     */
    public function show(Subcategory $subcategory)
    {
        return response()->json($subcategory);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, $id)
    {
        $subcategory = Subcategory::findOrFail($id);

        $validated = $request->validate([
            'name' => 'sometimes|required|string|max:255|unique:subcategories,name,' ,
            'description' => 'nullable|string',
            'category_id' => 'sometimes|required|exists:categories,id',
        ]);

        $subcategory->update($validated);
        return response()->json($subcategory);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        $subcategory = Subcategory::findOrFail($id);
        return response()->json($subcategory->delete()); // Return 204 No Content for a successful delete
    }
}
