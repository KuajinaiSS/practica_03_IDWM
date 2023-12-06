<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Framework extends Model
{
    protected $fillable = [
        'name',
        'level',
        'year',
    ];

    public function profile()
    {
        return $this->belongsTo(Profile::class);
    }



    use HasFactory;
}
