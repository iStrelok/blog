<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Notepad extends Model
{

    //Estructura Revisar las relaciones
    protected $table = "notepads";

    public function NoteTopics(){
        return $this->belongsToMany('App\Topic', 'note_topics');
    }
}
