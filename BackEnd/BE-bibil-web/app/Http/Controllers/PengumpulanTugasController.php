<?php

namespace App\Http\Controllers;

use App\Models\PengumpulanTugas;
use Illuminate\Http\Request;

class PengumpulanTugasController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $pengumpulanTugas = PengumpulanTugas::paginate(10);
        return response()->json([
            'data' => $pengumpulanTugas
        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request, PengumpulanTugas $pengumpulanTugas)
    {
        $file_tugas = $request->file_tugas;
        $name = $file_tugas->getClientOriginalName();
        $file_tugas->storeAs('assets/Pengumpulan', $name, 'public');
        $pengumpulanTugas = PengumpulanTugas::create([
            "tugas_id" => $request->tugas_id,
            "mahasiswa_id" => $request->mahasiswa_id,
            "kumpulan_tugas" => $name
        ]);
        return response()->json([
            'data' => $pengumpulanTugas
        ]);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\PengumpulanTugas  $pengumpulanTugas
     * @return \Illuminate\Http\Response
     */
    public function show(PengumpulanTugas $pengumpulanTugas)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\PengumpulanTugas  $pengumpulanTugas
     * @return \Illuminate\Http\Response
     */
    public function edit(PengumpulanTugas $pengumpulanTugas)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\PengumpulanTugas  $pengumpulanTugas
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, PengumpulanTugas $pengumpulanTugas)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\PengumpulanTugas  $pengumpulanTugas
     * @return \Illuminate\Http\Response
     */
    public function destroy(PengumpulanTugas $pengumpulanTugas)
    {
        //
    }
}
