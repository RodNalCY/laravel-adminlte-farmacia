@extends('adminlte::page')

@section('title', 'Compras')

@section('content_header')
<!-- <h1>Compras</h1> -->
@stop

@section('content')
<input type="hidden" name="_token" id="_token" value="<?php echo csrf_token(); ?>">
<div class="row">
    <div class="col-md-12 d-flex justify-content-end">
        <p class="mr-2"> </i><strong> <span id="fechaHora"></span></strong> <i class="fas fa-fw fa-calendar"></i></p>
    </div>
    <div class="col-md-6">
        <div class="card">
            <div class="card-header bg-header-purple">
                DATOS DEL PROVEEDOR
                <sup class="icon_obligatorio"><i class="fas fa-asterisk fa-xs"></i></sup>
            </div>
            <div class="card-body">
                <div class="row">
                    <div class="col-sm-4 col-md-4 mb-2">
                        <label class="col-form-label">PROVEEDOR:</label>
                        <input type="hidden" id="txtIdProveedor" readonly>
                        <input type="text" class="form-control form-control-sm" id="txtProveedor" readonly>
                    </div>

                    <div class="col-sm-4 col-md-4 mb-2">
                        <label class="col-form-label">RUC:</label>
                        <input type="text" class="form-control form-control-sm" id="txtRUC" readonly>
                    </div>

                    <div class="col-sm-4 col-md-4">
                        <label class="col-form-label"><br></label>
                        <div class="d-flex">
                            <button type="button" class="btn btn-info mr-2 btn-sm" id="btnBuscarProveedores"><i class="fas fa-fw fa-search"></i> Buscar</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="col-md-6">
        <div class="card">
            <div class="card-header bg-header-purple">
                COMPROBANTE
                <sup class="icon_obligatorio"><i class="fas fa-asterisk fa-xs"></i></sup>
            </div>
            <div class="card-body">
                <div class="row">
                    <div class="col-sm-6 col-md-4 mb-2">
                        <label class="col-form-label">TIPO : </label>
                        <input type="hidden" id="txtIdTipoComprobante" readonly>
                        <input type="text" class="form-control form-control-sm" id="txtTipoComprobante" readonly>
                    </div>

                    <div class="col-sm-6 col-md-4 mb-2">
                        <label class="col-form-label">N° COMPRA : </label>
                        <input type="text" class="form-control form-control-sm" id="txtNumCompra" readonly>
                    </div>

                    <div class="col-sm-12 col-md-4">
                        <label class="col-form-label"><br></label>
                        <div class="d-flex">
                            <button type="button" class="btn btn-info btn-sm mr-2" id="btnBuscarComprobante"><i class="fas fa-fw fa-search"></i> Buscar</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

<div class="row">
    <div class="col-md-6">
        <div class="card">
            <div class="card-header bg-header-purple">
                DATOS DEL PRODUCTO
                <sup class="icon_obligatorio"><i class="fas fa-asterisk fa-xs"></i></sup>
            </div>
            <div class="card-body">
                <div class="row">
                    <div class="col-sm-6 col-md-3 mb-2">
                        <label class="col-form-label">PRODUCTO: </label>
                        <input type="hidden" id="txtIdProducto" readonly>
                        <input type="text" class="form-control" id="txtNombreProducto" readonly>
                    </div>
                    <div class="col-sm-6 col-md-3 mb-2" style="display: none;">
                        <label class="col-form-label">Presentación: </label>
                        <input type="text" class="form-control" id="txtPresentacion" readonly>
                    </div>
                    <div class="col-sm-6 col-md-3 mb-2">
                        <label class="col-form-label">CONCETRACIÓN: </label>
                        <input type="text" class="form-control" id="txtConcentracion" readonly>
                    </div>
                    <div class="col-sm-6 col-md-3 mb-2">
                        <label class="col-form-label">STOCK: </label>
                        <input type="text" class="form-control" id="txtStock" readonly>
                    </div>
                    <div class="col-sm-6 col-md-3 mb-2">
                        <label class="col-form-label">COSTO: </label>
                        <input type="text" class="form-control" id="txtCosto" readonly>
                    </div>

                    <div class="col-sm-6 col-md-12">
                        <div class="d-flex ">
                            <button type="button" class="btn btn-info btn-sm" id="btnBuscarProducto"><i class="fas fa-fw fa-search"></i> Buscar</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="col-md-6">
        <div class="card">
            <div class="card-header bg-header-purple">
                CALCULAR
                <sup class="icon_obligatorio"><i class="fas fa-asterisk fa-xs"></i></sup>
            </div>
            <div class="card-body">
                <div class="row">
                    <div class="col-sm-6 col-md-4 mb-2">
                        <label class="col-form-label">CANTIDAD: </label>
                        <input type="number" class="form-control" id="txtCantidad" min="1">
                    </div>

                    <div class="col-sm-12 col-md-4 mb-2">
                        <label class="col-form-label">TOTAL : </label>
                        <input type="text" class="form-control" id="txtTotal" style="background-color: lightyellow;" readonly>
                    </div>

                    <div class="col-sm-12 col-md-12">
                        <div class="d-flex">
                            <button type="button" class="btn btn-primary btn-sm" id="btnAgregarVenta"><i class="fas fa-fw fa-plus"></i> Agregar </button>
                        </div>
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
                <table class="table table-hover table-bordered" id="tableCompras">
                    <thead class="header-table text-center">
                        <tr>
                            <th scope="col">OPCIONES</th>
                            <th scope="col">PRODUCTOS</th>
                            <th scope="col">DESCRIPCIÓN</th>
                            <th scope="col">CATEGORÍA</th>
                            <th scope="col">CANTIDAD</th>
                            <th scope="col">PRECIO</th>
                            <th scope="col">TOTAL</th>
                        </tr>
                    </thead>
                    <tbody id="tableListCompras">
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</div>

<div class="card">
    <div class="card-body">
        <div class="row d-flex justify-content-end">

            <div class="col-sm-6 col-md-2 mb-2">
                <label class="col-form-label">SUB TOTAL: </label>
                <input type="text" class="form-control form-control-lg" id="txtValorSubtotal" style="background-color: lightyellow;">
            </div>

            <div class="col-sm-6 col-md-2 mb-2">
                <label class="col-form-label">I.G.V (18 %) : </label>
                <input type="text" class="form-control form-control-lg" id="txtValorIGV" style="background-color: lightyellow;">
            </div>
            <div class="col-sm-6 col-md-2 mb-2">
                <label class="col-form-label">TOTAL A PAGAR : </label>
                <input type="text" class="form-control form-control-lg" id="txtTotalPagar" style="background-color: cyan;">
            </div>

            <div class="col-sm-12 col-md-12 mt-4 text-right">
                <button type="button" class="btn btn-primary btn-lg" id="btnRegistrarCompra"><i class="fas fa-fw fa-plus"></i> Registrar Compra</button>
            </div>
        </div>


    </div>
</div>
<br>
<br>

<!----------------------------------------------------------------------------------------------->
<div class="modal fade" id="mdListProveedores" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="mdListProveedoresLabel" aria-hidden="true">
    <div class="modal-dialog modal-lg">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="mdListProveedoresLabel">Lista de Proveedores</h5>
            </div>
            <div class="modal-body">
                <div class="row m-2">
                    <div class="table-responsive">
                        <table class="table table-hover table-bordered" id="tableProveedores">
                            <thead class="header-table text-center">
                                <tr>
                                    <th scope="col">ID</th>
                                    <th scope="col">NOMBRE</th>
                                    <th scope="col">RUC</th>
                                    <th scope="col">OPCIONES</th>
                                </tr>
                            </thead>
                            <tbody id="tbl_row_proveedores">

                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-danger" data-bs-dismiss="modal"><i class="fas fa-times"></i> Cerrar</button>
                <!-- <button type="button" class="btn btn-secondary"><i class="fas fa-user-plus"></i> Añadir Proveedor</button> -->
            </div>
        </div>
    </div>
</div>
<!----------------------------------------------------------------------------------------------->
<div class="modal fade" id="mdListComprobante" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="mdListComprobanteLabel" aria-hidden="true">
    <div class="modal-dialog modal-lg">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="mdListComprobanteLabel">Lista de Comprobantes</h5>
            </div>
            <div class="modal-body">
                <div class="row m-2">
                    <div class="table-responsive">
                        <table class="table table-hover table-bordered table-sm" id="tableComprobantes">
                            <thead class="header-table text-center">
                                <tr>
                                    <th scope="col">ID</th>
                                    <th scope="col">DESCRIPCIÓN</th>
                                    <th scope="col">ESTADO</th>
                                    <th scope="col">OPCIONES</th>
                                </tr>
                            </thead>
                            <tbody id="tbl_row_comprobantes">
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-danger" data-bs-dismiss="modal"><i class="fas fa-times"></i> Cerrar</button>
            </div>
        </div>
    </div>
</div>
<!----------------------------------------------------------------------------------------------->
<div class="modal fade" id="mdListProducto" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="mdListProductoLabel" aria-hidden="true">
    <div class="modal-dialog modal-xl">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="mdListProductoLabel">Lista de Productos</h5>
            </div>
            <div class="modal-body">
                <div class="col-md-12">
                    <div class="alert alert-light" role="alert" style="padding: 15px 0px 0px 10px;">
                        <sup style="top: 0;">
                            <p><strong>NOTA:</strong> Los siguientes colores en la lista de productos tienen el siguiente significado:</p>
                            <p style="color:#ff5454; font-weight: bold;">ROJO : El producto esta agotado.</p>
                            <p style="color:#cccc00; font-weight: bold;">AMARILLO : El producto esta por agotarse.</p>
                        </sup>
                    </div>
                </div>
                <div class="row m-2 mb-4">
                    <div class="input-group">
                        <div class="input-group-text" style="background-color: #4a3fff; color:white; "> <i class="fas fa-fw fa-search"></i> </div>
                        <input type="search" class="form-control" id="btnBuscarListProducto" placeholder="Ingrese el nombre del producto" style="background-color: azure;">
                    </div>
                </div>

                <div class="row m-2">
                    <div class="table-responsive">
                        <table class="table table-hover table-bordered table-sm" id="tableProductos">
                            <thead class="header-table text-center">
                                <tr>
                                    <th scope="col">ID</th>
                                    <th scope="col">DESCRIPCIÓN</th>
                                    <th scope="col">LABORATORIO</th>
                                    <th scope="col">PRESENTACIÓN</th>
                                    <th scope="col">CONCENTRACIÓN</th>
                                    <th scope="col">STOCK</th>
                                    <th scope="col" style="width: 100px;">COSTO</th>
                                    <th scope="col">OPCIONES</th>
                                </tr>
                            </thead>
                            <tbody id="tbl_row_productos">
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <div class="modal-footer">
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
<script src="{{ asset('js/compras.js') }}"></script>
@stop