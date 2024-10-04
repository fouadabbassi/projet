<?php

use App\Http\Controllers\MessageController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\SubcategoryController;
use App\Http\Controllers\OrderController;
use App\Http\Controllers\UserController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
require __DIR__ . '/auth.php';

Route::middleware(['auth:sanctum'])->get('/user', function (Request $request) {
    return $request->user();
});



Route::prefix('users')->group(function () {
    Route::put('/{id}', [UserController::class, 'update']); //تحديث
});
Route::prefix('users')->group(function () {
    Route::get('/', [UserController::class, 'index']); // عرض قائمة
    Route::delete('/{id}', [UserController::class, 'destroy']); // حذف
    Route::put('/admin-update', [UserController::class, 'updateByAdmin']);
})->middleware('auth');

Route::prefix('messages')->group(function () {
    Route::post('/', [MessageController::class, 'store']);
});
Route::prefix('messages')->group(function () {
    Route::get('/', [MessageController::class, 'index']); // عرض قائمة
    Route::delete('/{id}', [MessageController::class, 'destroy']); // حذف
})->middleware('auth');

Route::prefix('products')->group(function () {
    Route::get('/bysubcategory/{id}', [ProductController::class, 'indexBySubcategory']);
    Route::get('/bycategory/{id}', [ProductController::class, 'indexBycategory']);
    Route::get('/', [ProductController::class, 'index']); // عرض قائمة المنتجات
    Route::get('/{id}', [ProductController::class, 'show']); // عرض منتج محدد
});
Route::prefix('products')->group(function () {
    Route::post('/', [ProductController::class, 'store']); // تخزين منتج جديد
    Route::put('/{id}', [ProductController::class, 'update']); // تحديث منتج
    Route::delete('/{id}', [ProductController::class, 'destroy']); // حذف منتج
})->middleware('auth');

Route::prefix('categories')->group(function () {
    Route::get('/', [CategoryController::class, 'index']); // عرض قائمة الفئات
    Route::get('/{id}', [CategoryController::class, 'show']); // عرض فئة محددة
});
Route::prefix('categories')->group(function () {
    Route::post('/', [CategoryController::class, 'store']); // تخزين فئة جديدة
    Route::put('/{id}', [CategoryController::class, 'update']); // تحديث فئة
    Route::delete('/{id}', [CategoryController::class, 'destroy']); // حذف فئة
})->middleware('auth');

Route::prefix('subcategories')->group(function () {
    Route::get('/bycategory/{id}', [SubcategoryController::class, 'indexByCategory']); // عرض قائمة الفئات الفرعية
    Route::get('/', [SubcategoryController::class, 'index']); // عرض قائمة الفئات الفرعية
    Route::get('/{id}', [SubcategoryController::class, 'show']); // عرض فئة فرعية محددة
});
Route::prefix('subcategories')->group(function () {
    Route::post('/', [SubcategoryController::class, 'store']); // تخزين فئة فرعية جديدة
    Route::put('/{id}', [SubcategoryController::class, 'update']); // تحديث فئة فرعية
    Route::delete('/{id}', [SubcategoryController::class, 'destroy']); // حذف فئة فرعية
})->middleware('auth');

Route::prefix('orders')->group(function () {
    Route::post('/', [OrderController::class, 'store']); // تخزين طلب جديد
});
Route::prefix('orders')->group(function () {
    Route::get('/', [OrderController::class, 'index']); // عرض قائمة الطلبات
    Route::get('/{id}', [OrderController::class, 'show']); // عرض طلب محدد
    Route::put('/{id}', [OrderController::class, 'update']); // تحديث طلب
    Route::delete('/{id}', [OrderController::class, 'destroy']); // حذف طلب
})->middleware('auth');
