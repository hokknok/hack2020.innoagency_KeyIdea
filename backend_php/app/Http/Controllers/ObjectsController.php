<?php

namespace App\Http\Controllers;

use App\Models\Objects;
use Illuminate\Http\Client\Request;

class ObjectsController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        //
    }

    public function show(\Illuminate\Http\Request $request)
    {
        $data = $request->all();
        $query = Objects::query();

        if ($request->has('type')) {
            $query->where('type', '=', $data['type']);
        }

        if ($request->has('lon_min') && $request->has('lon_max')) {
            $query->whereBetween('lat',[$data['lat_min'],$data['lat_max']]);
        }

        if ($request->has('lat_min') && $request->has('lat_max')) {
            $query->whereBetween('lat',[$data['lat_min'],$data['lat_max']]);
        }

        return [
            'data' =>$query->get(),
            'types' => [ 'bar', 'cafe', 'pharmacy', 'restaurant' ]
        ];
    }
}
