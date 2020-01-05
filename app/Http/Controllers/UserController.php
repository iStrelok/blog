<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\User;
use Illuminate\Support\Facades\Hash;
class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */


    public function __construct(){
        $this->middleware('jwt',["only"=>['index','update','destroy','show']]);
    }



    public function index()
    {
        $users=User::all();
        return response()->json([$users],200);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $json=$request->input('json',null);
        $params=json_decode($json);
        $params_array=json_decode($json,true);

        $validate=\Validator::make($params_array,[
            'name'=>'required|min:3|max:100',
            'surname'=>'required|min:3|max:100',
            'email'=>'required|email|unique:users',
            'password'=>'required|min:6|max:10',
            'role'=>'required'
        ]);

        if($validate->fails()){
            return response()->json($validate->errors(),400);
        }

        $user=new User();
        $user->name=$params->name;
        $user->surname=$params->surname;
        $user->email=$params->email;


        //Encriptando password
        $passwordHash=Hash::make($params->password);
        $user->password=$passwordHash;
        $user->role=$params->role;
        $user->status=true;
        $user->save();

        $data=array([
            'status'=>'success',
            'message'=>'Usuario  creado correctactamente.'
        ]);
        return response()->json($data,201);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $user=User::findOrFail($id);
        return response()->json(['user'=>$user],200);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $user=User::findOrFail($id);
        $json=$request->input('json',null);
        $params=json_decode($json);
        $params_array=json_decode($json,true);

        $validate=\Validator::make($params_array,[
            'name'=>'required|string',
            'surname'=>'required|string',
            'email'=>'required|email|unique:users,email,'.$id,
            'role'=>'required'
        ]);

        if($validate->fails()){
            return response()->json($validate->errors(),400);
        }
        $user->name=$params->name;
        $user->surname=$params->surname;
        $user->email=$params->email;
        $user->role=$params->role;
        $user->update();
        return response()->json(['status'=>"success","message"=>"Usuario actualizado con éxito"],200);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $user=User::findOrFail($id);
        $user->delete();
        return response()->json(['status'=>'success','message'=>'Usuario eliminada con éxito'],201);

    }
}
