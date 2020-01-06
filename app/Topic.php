<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Topic extends Model
{
    //revisar relaciones
    protected $table = "topics";

    public function NoteTopics(){
        return $this->belongsToMany('App\Notepad', 'note_topics');
    }
}
