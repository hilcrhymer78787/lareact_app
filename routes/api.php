<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;


Route::post('/task/create', 'TaskController@create');
Route::get('/task/read', 'TaskController@read');
Route::put('/task/update', 'TaskController@update');
Route::delete('/task/delete/{id}', 'TaskController@delete');
// Route::post('/task/search', 'TaskController@search');

// Route::middleware('auth:api')->get('/user', function (Request $request) {
//     return $request->user();
// });

// Route::middleware('auth')->get('loginuser', 'UserController@loginuser');
Route::get('/loginuser', 'UserController@loginuser');