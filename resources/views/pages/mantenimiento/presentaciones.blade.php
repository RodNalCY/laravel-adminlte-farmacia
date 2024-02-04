@extends('adminlte::page')

@section('title', 'Presentacion')

@section('content_header')
<!-- <h1>Presentacion</h1> -->
@stop

@section('content')
<input type="hidden" name="_token" id="_token" value="<?php echo csrf_token(); ?>">
<div class="row">
    <div class="col-md-12">
        <div class="card">
            <div class="card-header  bg-header-purple">
                REGISTRAR PRESENTACIONES
            </div>
            <div class="card-body">
                <div class="row mb-2">
                    <div class="col-sm-6 col-md-6 mb-2">
                        <label class="col-form-label">NOMBRE: </label>
                        <input type="text" class="form-control form-control-sm" id="txtPresentacionNombre">
                    </div>                  
                </div>
                <div class="row">
                    <div class="col-md-12 d-flex justify-content-end">
                        <button type="button" class="btn btn-success" id="btnRegistrarPresentacion"> <i class="fas fa-fw fa-plus"></i> REGISTRAR </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

<div class="card">
    <div class="card-body">
        <div class="row">
            <div class="table-responsive">
                <table class="table table-hover table-bordered" id="tablePresentacion">
                    <thead class="header-table">
                        <tr>
                            <th scope="col">ID</th>
                            <th scope="col">Nombre</th>
                            <th scope="col">Estado</th>
                            <th scope="col">Opciones</th>
                        </tr>
                    </thead>
                    <tbody id="tableListPresentacion">
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</div>

<!------------------------------------------------------------------------------------------------------------------------------>
<div class="modal fade" id="mdEditPresentacion" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="mdListRolesLabel" aria-hidden="true">
    <div class="modal-dialog modal-lg">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title"><span id="txtTitleEditarPre"> </span> </h5>
            </div>
            <div class="modal-body">
                <div class="row m-2">
                    <div class="col-sm-6 col-md-12 mb-2">
                        <label class="col-form-label">NOMBRE : </label>
                        <input type="hidden" id="txtEditIdPre">
                        <input type="text" class="form-control form-control-sm" id="txtEditNamePre">
                    </div>
                    <div class="col-sm-6 col-md-12 mb-2">
                        <label class="col-form-label">ESTADO: </label>
                        <div id="selectHTMLEstado"></div>

                    </div>
                </div>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-success" id="btnActualizarPresentacion"><i class="fas fa-pen"></i> Editar</button>
                <button type="button" class="btn btn-danger" data-bs-dismiss="modal"><i class="fas fa-times"></i> Cerrar</button>
            </div>
        </div>
    </div>
</div>

@stop

@section('css')
<link rel="stylesheet" href="/css/admin_custom.css">
@stop

@section('js')
<script src="{{ asset('js/presentacion.js') }}"></script>
@stop