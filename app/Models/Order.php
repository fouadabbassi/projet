<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Order extends Model
{
    use HasFactory;
    protected $fillable = [
        'name',
        'email',
        'phone',
        'total_price',
        'status',
        'products', // سيتم تخزين المنتجات على شكل JSON
    ];

    protected $casts = [
        'products' => 'array', // تحويل JSON إلى array
    ];

    // علاقة مع المستخدم (users)
    public function user()
    {
        return $this->belongsTo(User::class);
    }

    // علاقة مع المنتجات (products) باستخدام pivot table لتخزين الكميات والأسعار
    public function products()
    {
        return $this->belongsToMany(Product::class)->withPivot('quantity', 'price');
    }
}
