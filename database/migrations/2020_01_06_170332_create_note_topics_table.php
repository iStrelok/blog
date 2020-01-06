<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateNoteTopicsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('note_topics', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('notepad_id')->unsigned();;
            $table->foreign('notepad_id')->references('id')->on('notepads')->onDelete('cascade')->onUpdate('cascade');
            $table->integer('topic_id')->unsigned();;
            $table->foreign('topic_id')->references('id')->on('topics')->onDelete('cascade')->onUpdate('cascade');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('note_topics');
    }
}
