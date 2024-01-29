<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateVehiclesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('vehicles', function (Blueprint $table) {
            $table->id();
            $table->enum('category', ['goods', 'people'])->default('goods');
            $table->enum('type', ['mine', 'rent'])->default('mine');
            $table->string('name', 50);
            $table->string('police_number', 10);
            $table->integer('amount')->default(0);
            $table->double('bbm_consume', 10, 2)->default(0);
            $table->date('service_schedule')->nullable();
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
        Schema::dropIfExists('vehicles');
    }
}
