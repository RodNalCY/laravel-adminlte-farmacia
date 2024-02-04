<?php

namespace App\Http\Controllers;

use App\Models\Comprobante;
use App\Models\Laboratorio;
use App\Models\Producto;
use Illuminate\Http\Request;

class MantenimientoController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('auth');
    }
    /**
     * Display a listing of the resource.
     */


    public function index_productos()
    {
        return view('pages.mantenimiento.productos');
    }

    public function index_clientes()
    {
        return view('pages.mantenimiento.clientes');
    }

    public function index_empleados()
    {
        return view('pages.mantenimiento.empleados');
    }

    public function index_proveedores()
    {
        return view('pages.mantenimiento.proveedores');
    }

    public function index_presentaciones()
    {
        return view('pages.mantenimiento.presentaciones');
    }

    public function index_laboratorios()
    {
        return view('pages.mantenimiento.laboratorios');
    }

    public function index_comprobantes()
    {
        return view('pages.mantenimiento.comprobantes');
    }

    public function listComprobantes()
    {
        try {
            $comprobantes = Comprobante::all();

            return response()->json([
                'message' => 'lista de comprobantes',
                'status' => true,
                'data' => $comprobantes
            ]);
        } catch (\Exception $ex) {
            return response()->json([
                'status' => false,
                'message' => $ex->getMessage(),
            ], 500);
        }
    }

    public function editComprobante(Request $request)
    {
        try {
            $comprobante = Comprobante::find($request->_comprobanteId);
            $comprobante->Estado = $request->_comprobanteState;

            if ($comprobante->update()) {
                return response()->json([
                    'message' => 'Comprobante editado correctamente',
                    'status' => true,
                    'data' => $comprobante
                ]);
            }
        } catch (\Exception $ex) {
            return response()->json([
                'status' => false,
                'message' => $ex->getMessage(),
            ], 500);
        }
    }

    public function listLaboratorios()
    {
        try {
            $laboratorios = Laboratorio::all();

            return response()->json([
                'message' => 'lista de laboratorios',
                'status' => true,
                'data' => $laboratorios
            ]);
        } catch (\Exception $ex) {
            return response()->json([
                'status' => false,
                'message' => $ex->getMessage(),
            ], 500);
        }
    }

    public function save_laboratorio(Request $request)
    {
        try {
            $lab = new Laboratorio;
            $lab->Nombre = $request->_labsNombre;
            $lab->Direccion = $request->_labsDireccion;
            $lab->Telefono = $request->_labsTelefono;
            $lab->Estado = 'Activo';

            if ($lab->save()) {
                return response()->json([
                    'message' => 'Se creo el laboratorio correctamente',
                    'status' => true,
                    'data' => $lab
                ]);
            }
        } catch (\Exception $ex) {
            return response()->json([
                'status' => false,
                'message' => $ex->getMessage(),
            ], 500);
        }
    }

    public function delete_laboratorio(Request $request)
    {
        try {
            $labs = Laboratorio::find($request->_laboratorioId);
            $labs->Estado = "Inactivo";

            if ($labs->update()) {
                return response()->json([
                    'message' => 'Se elimino el laboratorio correctamente',
                    'status' => true,
                ]);
            }
        } catch (\Exception $ex) {
            return response()->json([
                'status' => false,
                'message' => $ex->getMessage(),
            ], 500);
        }
    }
}
