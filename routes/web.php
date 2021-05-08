<?php

use Illuminate\Support\Facades\Route;


Route::get('/login', 'Auth\LoginController@showLoginForm')->name('login');
Route::post('/login', 'Auth\LoginController@login');
Route::get('/logout', 'Auth\LoginController@logout')->name('logout');
Route::post('/logout', 'Auth\LoginController@logout', 'logout');
Route::group(['middleware' => 'auth:web'], function () {
    Route::get('/web/{all}', function () {
        return view('index');
    })->where(['all' => '.*']);
});
Route::group(['middleware' => 'auth:web'], function () {
    Route::get('/', function () {
        return redirect('/web/task');
    });
});
Route::group(['middleware' => 'auth:web'], function () {
    Route::get('/web', function () {
        return redirect('/web/task');
    });
});

Route::middleware('auth')->get('api/loginuser', 'UserController@loginuser');