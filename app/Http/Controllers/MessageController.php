<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreMessageRequest;
use App\Models\message;
use Illuminate\Http\Request;

class MessageController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $messages = message::all();
        return response()->json($messages);
    }


    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreMessageRequest $request)
    {
        $validated = $request->validated();
        Message::create($validated);
        return response()->json([
            'message' => 'Message created successfully',
        ], 201);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        $message = Message::findOrFail($id);
        $message->delete();
        return response()->json([
            'message' => 'Message deleted successfully'
        ], 200);
    }
}
