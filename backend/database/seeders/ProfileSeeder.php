<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Hobbie;
use App\Models\Profile;
use App\Models\Framework;


class ProfileSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run()
    {

        // Crear el perfil
        $profile = Profile::create([
            'rut' => '207344842',
            'name' => 'Ignacio Felipe',
            'Lastname' => 'Umana Morel',
            'email' => 'correo@gmail.com',
            'city' => 'Chile',
            'country' => 'Calama',
            'summary' => 'lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat at quo porro, voluptas, placeat numquam consequuntur veniam quaerat ea laboriosam maxime praesentium ipsam, tempora nemo labore explicabo eos inventore minus',
        ]);


        $profileId = $profile->id;

        // Crear 3 hobbies para el perfil
        $profile->hobbies()->createMany([
            ['name' => 'Basquetball', 'description' => 'Jugar basquetball', 'profile_id' => $profileId],
            ['name' => 'Musica','description' => 'Escuchar musica', 'profile_id' => $profileId],
            ['name' => 'Mangas','description' => 'Leer mangas', 'profile_id' => $profileId],
        ]);


        // Crear 3 frameworks asociados al perfil
        $profile->frameworks()->createMany([
            ['name' => 'Laravel', 'level' => 'Beginner', 'year' => '2022', 'profile_id' => $profileId],
            ['name' => 'React', 'level' => 'Beginner', 'year' => '2023', 'profile_id' => $profileId],
            ['name' => 'dotnet', 'level' => 'Beginner', 'year' => '2023', 'profile_id' => $profileId],
        ]);
    }
}
