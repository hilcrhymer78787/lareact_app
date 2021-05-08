<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Task;

class TaskController extends Controller
{
    public function read()
    {
        $data = Task::get();
        return $data;
    }
    
    public function create(Request $request)
    {
        Task::create([
            'title' => $request->title,
            'is_done' => false,
        ]);
    }

    public function update(Request $request)
    {
        Task::where("id", $request->id)->update([
            "title" => $request->title,
            "is_done" => $request->done,
        ]);
        return $request->done;
    }


    public function delete($id)
    {
        Task::where("id", $id)->delete();
    }
}
