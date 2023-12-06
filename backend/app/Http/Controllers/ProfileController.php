<?php
namespace App\Http\Controllers;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\Profile;
use App\Models\Hobby;
use App\Models\Framework;

class ProfileController extends Controller
{
    // metodo obtener datos del usuario
    public function getData()
    {
        try{
            $profile = Profile::with('frameworks','hobbies')
            ->where('id', 1)
            ->first();

            return response()->json(
                $profile
            , 200);
        }catch (Exeption $e){
            throw new Exeption($e->getMessage());
        }
    }


    // metodo actualizar datos del usuario
    public function update(Request $request, int $id)
    {
        // Encontrar el perfil único por el ID
        $profile = Profile::with('frameworks', 'hobbies')->find($id);
        // return $profile; // Buscar por el ID 1

        if (!$profile) {
            return response()->json(['message' => 'Perfil no encontrado'], 404);
        }

        // return $request->input('rut', $profile->rut);

        // Actualizar campos específicos del perfil con los nuevos valores proporcionados
        $profile->rut = $request->input('rut', $profile->rut);
        $profile->name = $request->input('name', $profile->name);
        $profile->Lastname = $request->input('lastname', $profile->Lastname);
        $profile->email = $request->input('email', $profile->email);
        $profile->city = $request->input('city', $profile->city);
        $profile->country = $request->input('country', $profile->country);
        $profile->summary = $request->input('summary', $profile->summary);

        // Guardar el perfil actualizado en la base de datos
        $profile->save();

        return response()->json($profile);
    }


    // metodo actualizar framework
    public function updateFramework(Request $request, int $profileId, int $frameworkId)
    {
        $profile = Profile::find($profileId);

        if (!$profile) {
            return response()->json(['message' => 'Perfil no encontrado'], 404);
        }

        $framework = Framework::find($frameworkId);

        if (!$framework) {
            return response()->json(['message' => 'Framework no encontrado'], 404);
        }

        // Actualizar los datos del framework
        $framework->name = $request->input('name', $framework->name);
        $framework->level = $request->input('level', $framework->level);
        $framework->year = $request->input('year', $framework->year);

        $framework->save();

        return response()->json($framework);
    }




    // metodo eliminar framework
    public function deleteFramework(int $profileId, int $frameworkId)
    {
        $profile = Profile::find($profileId);

        if (!$profile) {
            return response()->json(['message' => 'Perfil no encontrado'], 404);
        }

        $framework = Framework::find($frameworkId);

        if (!$framework) {
            return response()->json(['message' => 'Framework no encontrado'], 404);
        }

        // Eliminar el framework asociado al perfil
        $framework->delete();

        return response()->json(['message' => 'Framework eliminado']);
    }


    // metodo agregar framework
    public function addFramework(int $profileId, Request $request)
    {
        $profile = Profile::find($profileId);

        if (!$profile) {
            return response()->json(['message' => 'Perfil no encontrado'], 404);
        }

        $framework = new Framework();

        $framework->name = $request->input('name');
        $framework->level = $request->input('level');
        $framework->year = $request->input('year');

        $profile->frameworks()->save($framework);

        return response()->json($framework);
    }



}
