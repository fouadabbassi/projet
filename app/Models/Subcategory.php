<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Subcategory extends Model
{
    use HasFactory;
    protected $fillable = [
        'name',
        'description',
        'category_id',
    ];

    // علاقة مع الفئة (categories)
    public function category()
    {
        return $this->belongsTo(Category::class);
    }

    // علاقة مع المنتجات (products)
    public function products()
    {
        return $this->hasMany(Product::class);
    }
}
