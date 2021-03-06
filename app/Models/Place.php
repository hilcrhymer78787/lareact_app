<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Place extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'address',
        'tel',
        'img_name',
    ];
    public function calendars(){
        return $this->hasMany('App\Calendar');
    }
}
