<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

/*Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});*/


/*
|--------------------------------------------------------------------------
| RUTAS DE LOGIN
|--------------------------------------------------------------------------
*/
Route::group(['prefix' => 'auth'], function ($router) {
    Route::post('login', 'AuthController@login');//iniciar sesion
    Route::post('logout', 'AuthController@logout');//cerrar sesion
    Route::post('refresh', 'AuthController@refresh');//te retorna un nuevo token
    Route::post('me', 'AuthController@me');//te devuelves lo datos del usuario que inicio sesión
});


/*
|--------------------------------------------------------------------------
| RUTAS DE USER
|--------------------------------------------------------------------------
*/



