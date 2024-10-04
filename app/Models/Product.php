<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    use HasFactory;
    protected $fillable = ['name', 'description', 'price', 'stock', 'image', 'subcategory_id'];


    // علاقة مع التصنيف الفرعي (subcategories)
    public function subcategory()
    {
        return $this->belongsTo(Subcategory::class);
    }

    // علاقة مع الطلبات (orders) عبر الـ JSON
    public function orders()
    {
        return $this->belongsToMany(Order::class)->withPivot('quantity', 'price');
    }
}
