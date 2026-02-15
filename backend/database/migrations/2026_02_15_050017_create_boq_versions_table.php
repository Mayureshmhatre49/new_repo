<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('boq_versions', function (Blueprint $table) {
            $table->id();
            $table->foreignId('boq_id')->constrained()->onDelete('cascade');
            $table->string('version_number');
            $table->text('notes')->nullable();
            $table->json('data_snapshot');
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('boq_versions');
    }
};
