<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Support\Facades\Hash;
use Illuminate\Http\Request;

class UserController extends Controller
{
    public function index()
    {
        $users = User::all();
        return response()->json($users);
    }

    public function show($id)
    {
        $user = User::findOrFail($id);
        return response()->json($user);
    }

    // دالة للتحقق من صحة البيانات
    private function validateUser(Request $request, $ignoreId = null)
    {
        return $request->validate([
            'name' => 'sometimes|required|string|max:255',
            'email' => [
                'sometimes',
                'required',
                'email',
                'unique:users,email' . ($ignoreId ? ',' . $ignoreId : ''),
            ],
            'password' => 'nullable|string|min:8|confirmed',
            'address' => 'nullable|string',
            'phone' => 'nullable|string|max:20',
            'role' => 'sometimes|required|in:admin,customer',
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, $id)
    {
        // تحقق مما إذا كان المستخدم المصدق عليه هو مسؤول
        if (auth()->user()->role !== 'admin') {
            return response()->json(['message' => 'Unauthorized'], 403);
        }

        // العثور على المستخدم بواسطة ID
        $user = User::findOrFail($id);

        // التحقق من صحة بيانات الطلب
        $validated = $this->validateUser($request, $user->id);

        // تشفير كلمة المرور إذا كانت موجودة في الطلب
        if ($request->filled('password')) {
            $validated['password'] = Hash::make($request->password);
        }

        // تحديث بيانات المستخدم
        $user->update($validated);

        return response()->json(['message' => 'User updated successfully.', 'user' => $user]);
    }

    /**
     * Update user data by admin.
     */
    public function updateByAdmin(Request $request, $id)
    {
        // تحقق مما إذا كان المستخدم المصدق عليه هو مسؤول
        if (auth()->user()->role !== 'admin') {
            return response()->json(['message' => 'Unauthorized'], 403);
        }

        // العثور على المستخدم بواسطة ID
        $user = User::findOrFail($id);

        // التحقق من صحة بيانات الطلب
        $validated = $this->validateUser($request, $user->id);

        // تشفير كلمة المرور إذا كانت موجودة في الطلب
        if ($request->filled('password')) {
            $validated['password'] = Hash::make($request->password);
        }

        // تحديث بيانات المستخدم
        $user->update($validated);

        return response()->json(['message' => 'User updated successfully.', 'user' => $user]);
    }

    public function destroy($id)
    {
        $user = User::findOrFail($id);
        $user->delete();

        return response()->json($user);
    }
}
