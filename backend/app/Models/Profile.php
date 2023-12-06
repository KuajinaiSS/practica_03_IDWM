<?php

namespace App\Models;

use App\Models\Hobbie;
use App\Models\Framework;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Profile extends Model
{
    protected $fillable = [
        'name',
        'Lastname',
        'email',
        'city',
        'country',
        'summary',
    ];
    use HasFactory;

    public function frameworks()
    {
        return $this->hasMany(Framework::class);
    }

    public function hobbies()
    {
        return $this->hasMany(Hobbie::class);
    }

}
