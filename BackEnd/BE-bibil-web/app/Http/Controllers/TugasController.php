<?php

namespace App\Http\Controllers;

use App\Models\Tugas;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class TugasController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $tugas = Tugas::all();
        return response()->json([
            'data' => $tugas
        ]);
    }

    // /**
    //  * Show the form for creating a new resource.
    //  *
    //  * @return \Illuminate\Http\Response
    //  */
    // public function create()
    // {
    //     //
    // }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request, Tugas $tugas)
    {

        $file_tugas = $request->file_tugas;
        $name = $file_tugas->getClientOriginalName();
        $file_tugas->storeAs('assets/tugas', $name, 'public');
        $tugas = Tugas::create([
            'judul' => $request->judul,
            'deskripsi' => $request->deskripsi,
            'file_tugas' => $name
        ]);
        return response()->json([
            'data' => $tugas
        ]);
    }

    // public function upload_tugas(Request $request, Tugas $tugas)
    // {
    //     $this->validate($request, [
    //         'file_tugas'     => 'mimes:pdf, docx, pptx, xlsx'
    //     ]);
    //     //error_log('hei');
    //     //check if image is uploaded
    //     if ($request->hasFile('file_tugas')) {
    //         //error_log('Masuk sini');
    //         //upload new image
    //         $file_tugas = $request->file('file_tugas');
    //         $tugasHash = $file_tugas->storeAs('public/assets/tugas');
    //         //error_log($fotoHash);
    //         //delete old image
    //         Storage::delete('public/assets/tugas' . $tugas->file_tugas);

    //         //update post with new image
    //         $tugas->update([
    //             'file_tugas'     => $tugasHash,
    //         ]);
    //     }
    //     return response()->json([
    //         'data' => $tugas
    //     ]);
    // }


    /**
     * Display the specified resource.
     *
     * @param  id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {

        return response()->json([
            'data' => Tugas::findOrFail($id)
        ]);
    }


    // /**
    //  * Show the form for editing the specified resource.
    //  *
    //  * @param  \App\Models\Tugas  $tugas
    //  * @return \Illuminate\Http\Response
    //  */
    // public function edit(Tugas $tugas)
    // {
    //     //
    // }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Tugas  $tugas
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Tugas $tugas)
    {
        $tugas->judul = $request->judul;
        $tugas->deskripsi = $request->deskripsi;
        $tugas->file_tugas = $request->file_tugas;
        $tugas->save();

        return response()->json([
            'data' => $tugas
        ]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Tugas  $tugas
     * @return \Illuminate\Http\Response
     */
    public function destroy(Tugas $tugas)
    {
        $tugas->delete();
        return response()->json([
            'message' => 'Tugas Telah Dihapus'
        ], 204);
    }
}
