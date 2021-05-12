<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Storage;
use Illuminate\Http\Request;
use App\Models\User;
use Auth;

class UserController extends Controller
{
    public function index()
    {
        return User::all();
    }

    public function show(User $user)
    {
        return $user;
    }

    public function store(Request $request, User $user)
    {
        if(isset($request->file)){
            $request->file->storeAs('public/', $request->img_name);
            $user["img_name"] = $request->img_name;
        }
        $user["name"] = $request->name;
        $user["email"] = $request->email;
        $user["password"] = $request->password;
        $user["salary"] = $request->salary;
        $user["img_name"] = $request->img_name;
        $user->save();
    }
    public function update(Request $request, User $user)
    {
        if(isset($request->file)){
            $request->file->storeAs('public/', $request->img_name);
            Storage::delete('public/' . $request->img_oldname);
            $user->where("id", $request->id)->update([
                "img_name" => $request->img_name,
            ]);
        }

        $user->where("id", $request->id)->update([
            "name" => $request->name,
            "email" => $request->email,
            "salary" => $request->salary,
        ]);
    }
    public function destroy(User $user)
    {
        Storage::delete('public/' . $user->img_name);
        $user->delete();
    }
    
    public function loginuser()
    {
        $loginuser = Auth::user();
        return $loginuser;
    }
}


