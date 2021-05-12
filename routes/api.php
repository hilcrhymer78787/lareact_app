<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;


Route::get('/users', 'UserController@index');
Route::post('/users', 'UserController@store');
Route::post('/usersUpdate', 'UserController@update');
Route::delete('/users/{user}', 'UserController@destroy');


Route::get('/places', 'PlaceController@index');
Route::post('/places', 'PlaceController@store');
Route::post('/placesUpdate', 'PlaceController@update');
Route::delete('/places/{place}', 'PlaceController@destroy');


Route::get('/calendars', 'CalendarController@index');
Route::post('/calendars', 'CalendarController@store');
Route::get('/calendars/{year}/{month}', 'CalendarController@show');
Route::put('/calendars/{calendar}', 'CalendarController@update');
Route::delete('/calendars/{date}', 'CalendarController@destroy');


Route::post('/search', 'CalendarController@search');


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