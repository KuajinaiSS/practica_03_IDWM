<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Hobbie extends Model
{
    protected $fillable = [
        'name',
        'description',
    ];

    public function profile()
    {
        return $this->belongsTo(Profile::class);
    }

    use HasFactory;
}
