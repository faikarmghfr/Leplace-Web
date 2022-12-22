<?php

use App\Http\Controllers\DosenController;
use App\Http\Controllers\LoginController;
use App\Http\Controllers\MahasiswaController;
use App\Http\Controllers\MateriController;
use App\Http\Controllers\PengumpulanTugasController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\RegisterDosenController;
use App\Http\Controllers\TugasController;

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

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::apiResource('dosen', DosenController::class);
Route::apiResource('mahasiswa', MahasiswaController::class);
Route::apiResource('materi', MateriController::class);
Route::apiResource('tugas', TugasController::class);



//untuk registrasi mahasiswa
Route::Post('mahasiswa', [MahasiswaController::class, "store"]);

//untuk upload foto mahasiswa
Route::Post('mahasiswa/upload_foto/{id}', [MahasiswaController::class, "upload_foto"]);

//untuk registrasi dosen
Route::Post('dosen', [DosenController::class, "store"]);

//upload foto dosen
Route::Post('dosen/upload_foto/{id}', [DosenController::class, "upload_foto"]);

//login
Route::Post('login', [LoginController::class, "login"]);

//mengumpulkan tugas
Route::Post('pengumpulanTugas', [PengumpulanTugasController::class, "store"]);

//melihat data pengumpulan tugas
Route::Get('pengumpulanTugas', [PengumpulanTugasController::class, "index"]);

//mengirimkan bahan ajar
Route::Post('materi', [MateriController::class, "store"]);

//Route::Post('tugas/upload_tugas', [TugasController::class, "upload_tugas"]);
//Route::Put('mahasiswa/update_data', [MahasiswaController::class, "update_data"]);
//Route::Post('mahasiswa/upload_foto', [MahasiswaController::class, "update"]);
//Route::Post('registerDosen', RegisterDosenController::class);
