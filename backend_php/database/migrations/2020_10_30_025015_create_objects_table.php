<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateObjectsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('objects', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('lon');
            $table->string('lat');
            $table->string('type');
            $table->string('address');
            $table->string('area');
            $table->string('cost');
            $table->longText('description');
            $table->integer('transport');
            $table->integer('density');
            $table->integer('income');
            $table->json('images');
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
        Schema::dropIfExists('objects');
    }
}
