var globalDominioBase = "";

$(document).ready(function () {
    _global_token_crf = document.getElementById("_token").value;
    globalDominioBase = window.location.origin;
    console.log("globalDominioBase > ", globalDominioBase);
    console.log("_global_token_crf > ", _global_token_crf);
    $("#tableListClientes").html(
        "<tr><td colspan='11' class='text-center'>No hay empleados disponibles.</td></tr>"
    );

    listaClientes();
});

$("#btnRegistrarCliente").click(function () {
    var cliDNI = $("#txtClienteDNI").val().trim();
    var cliNombres = $("#txtClienteNombres").val().trim().toUpperCase();
    var cliApellidos = $("#txtClienteApellidos").val().trim().toUpperCase();
    var cliSexo = $("#selectSexoCliente").val().trim().toUpperCase();
    var cliEmail = $("#txtClienteEmail").val().trim();
    var cliTelef = $("#txtClienteTelefono").val().trim();
    var cliDirec = $("#txtClienteDireccion").val().trim().toUpperCase();
    var cliRUC = $("#txtClienteRUC").val().trim();

    if (cliNombres != "" && cliApellidos != "" && cliDNI != "") {
        console.log(
            " cliDNI > " +
                cliDNI +
                "cliNombre > " +
                cliNombres +
                "cliApellidos > " +
                cliApellidos +
                " cliSexo > " +
                cliSexo +
                " cliEmail > " +
                cliEmail +
                " cliTelef > " +
                cliTelef +
                " cliDirec > " +
                cliDirec +
                " cliRUC > " +
                cliRUC
        );
        var data = {
            _token: _global_token_crf,
            _cliDNI: cliDNI,
            _cliNombre: cliNombres,
            _cliApellidos: cliApellidos,
            _cliSexo: cliSexo,
            _cliEmail: cliEmail,
            _cliTelef: cliTelef,
            _cliDirec: cliDirec,
            _cliRUC: cliRUC,
        };

        registrarCliente(data);
    } else {
        Swal.fire({
            title: "Upps!",
            text: "Debe completar los datos del cliente !",
            icon: "warning",
            showConfirmButton: false,
            timer: 1500,
        });
    }
});

$("#btnActualizarCliente").click(function () {
    var cliId = $("#txtEditCliId").val().trim();
    var cliDNI = $("#txtEditCliDNI").val().trim();
    var cliNombre = $("#txtEditCliName").val().trim().toUpperCase();
    var cliApellidos = $("#txtEditCliApellidos").val().trim().toUpperCase();
    var cliEmail = $("#txtEditCliEmail").val().trim();
    var cliTelef = $("#txtEditCliTelef").val().trim();
    var cliSexo = $("#selectEditSexoCliente").val().trim().toUpperCase();
    var cliDirec = $("#txtEditCliDireccion").val().trim().toUpperCase();
    var cliRUC = $("#txtEditCliRUC").val().trim();
    var cliEstado = $("#selectEditEstadoCliente").val().trim();

    if (cliNombre != "" && cliApellidos != "" && cliDNI != "") {
        console.log(
            "cliId > " +
                cliId +
                "cliDNI > " +
                cliDNI +
                "cliNombre > " +
                cliNombre +
                " cliApellidos > " +
                cliApellidos +
                " cliEmail > " +
                cliEmail +
                " cliTelef > " +
                cliTelef +
                " cliSexo > " +
                cliSexo +
                " cliDirec > " +
                cliDirec +
                " cliRUC > " +
                cliRUC +
                " cliEstado > " +
                cliEstado
        );

        var data = {
            _token: _global_token_crf,
            _cliId: cliId,
            _cliDNI: cliDNI,
            _cliNombre: cliNombre,
            _cliApellidos: cliApellidos,
            _cliEmail: cliEmail,
            _cliTelef: cliTelef,
            _cliSexo: cliSexo,
            _cliDirec: cliDirec,
            _cliRUC: cliRUC,
            _cliEstado: cliEstado,
        };

        editarCliente(data);
    } else {
        Swal.fire({
            title: "Upps!",
            text: "Debe completar los datos del cliente !",
            icon: "warning",
            showConfirmButton: false,
            timer: 1500,
        });
    }
});

function listaClientes() {
    $.ajax({
        type: "GET",
        url: "/list/clientes",
        data: {
            _token: _global_token_crf,
        },
        dataType: "json",
        beforeSend: function (response) {},
        success: function (response) {
            console.log("RDX> ", response);
            var html_tabla_clientes = "";

            var html_select_sexo_options =
                "<select class='form-control' id='selectSexoCliente'>" +
                "<option value='M'>Masculino</option>" +
                "<option value='F'>Femenino</option>" +
                "</select>";

            var html_select_edit_sexo_options =
                "<select class='form-control' id='selectEditSexoCliente'>" +
                "<option value='M'>Masculino</option>" +
                "<option value='F'>Femenino</option>" +
                "</select>";

            var html_select_edit_options =
                "<select class='form-control' id='selectEditEstadoCliente'>" +
                "<option value='Activo'>Activo</option>" +
                "<option value='Inactivo'>Inactivo</option>" +
                "</select>";

            response.data.forEach(function (cli) {
                if (cli.Estado == "Inactivo") {
                    html_tabla_clientes =
                        html_tabla_clientes +
                        "<tr style='background-color: #ff22221f;'>" +
                        "<th class='text-center' scope='row'>" +
                        cli.idCliente +
                        "</th>" +
                        "<td>" +
                        cli.Nombres +
                        "</td>" +
                        "<td>" +
                        cli.Apellidos +
                        "</td>" +
                        "<td class='text-center'>" +
                        cli.Sexo +
                        "</td>" +
                        "<td class='text-center'>" +
                        cli.Dni +
                        "</td>" +
                        "<td class='text-center'>" +
                        cli.Telefono +
                        "</td>" +
                        "<td class='text-center'>" +
                        cli.Ruc +
                        "</td>" +
                        "<td>" +
                        cli.Email +
                        "</td>" +
                        "<td>" +
                        cli.Direccion +
                        "</td>" +
                        "<td class='text-center'>" +
                        "<button type='button' class='btn btn-danger btn-sm btn-estado-size'>" +
                        cli.Estado +
                        "</button>" +
                        "</td>" +
                        "<td>" +
                        "<center>" +
                        " <button type='button' class='btn btn-warning btn-sm btn-edit-cliente'" +
                        " data-id='" +
                        cli.idCliente +
                        "' data-name='" +
                        cli.Nombres +
                        "' data-apellidos='" +
                        cli.Apellidos +
                        "' data-sexo='" +
                        cli.Sexo +
                        "' data-dni='" +
                        cli.Dni +
                        "' data-telefono='" +
                        cli.Telefono +
                        "' data-ruc='" +
                        cli.Ruc +
                        "' data-email='" +
                        cli.Email +
                        "' data-direccion='" +
                        cli.Direccion +
                        "' data-state='" +
                        cli.Estado +
                        "'><i class='fas fa-pen'></i></button>" +
                        " <button type='button' class='btn btn-success btn-sm btn-estado-cliente'" +
                        " data-id='" +
                        cli.idCliente +
                        "' data-name='" +
                        cli.Nombres +
                        " " +
                        cli.Apellidos +
                        "' data-active='1'><i class='fas fa-unlock'></i></button>" +
                        "</center>" +
                        "</td>" +
                        "</tr>";
                } else {
                    html_tabla_clientes =
                        html_tabla_clientes +
                        "<tr>" +
                        "<th class='text-center' scope='row'>" +
                        cli.idCliente +
                        "</th>" +
                        "<td>" +
                        cli.Nombres +
                        "</td>" +
                        "<td>" +
                        cli.Apellidos +
                        "</td>" +
                        "<td class='text-center'>" +
                        cli.Sexo +
                        "</td>" +
                        "<td class='text-center'>" +
                        cli.Dni +
                        "</td>" +
                        "<td class='text-center'>" +
                        cli.Telefono +
                        "</td>" +
                        "<td class='text-center'>" +
                        cli.Ruc +
                        "</td>" +
                        "<td>" +
                        cli.Email +
                        "</td>" +
                        "<td>" +
                        cli.Direccion +
                        "</td>" +
                        "<td class='text-center'>" +
                        "<button type='button' class='btn btn-success btn-sm btn-estado-size'>" +
                        cli.Estado +
                        "</button>" +
                        "</td>" +
                        "<td>" +
                        "<center>" +
                        " <button type='button' class='btn btn-warning btn-sm btn-edit-cliente'" +
                        " data-id='" +
                        cli.idCliente +
                        "' data-name='" +
                        cli.Nombres +
                        "' data-apellidos='" +
                        cli.Apellidos +
                        "' data-sexo='" +
                        cli.Sexo +
                        "' data-dni='" +
                        cli.Dni +
                        "' data-telefono='" +
                        cli.Telefono +
                        "' data-ruc='" +
                        cli.Ruc +
                        "' data-email='" +
                        cli.Email +
                        "' data-direccion='" +
                        cli.Direccion +
                        "' data-state='" +
                        cli.Estado +
                        "'><i class='fas fa-pen'></i></button>" +
                        " <button type='button' class='btn btn-danger btn-sm btn-estado-cliente'" +
                        " data-id='" +
                        cli.idCliente +
                        "' data-name='" +
                        cli.Nombres +
                        " " +
                        cli.Apellidos +
                        "' data-active='0'><i class='fas fa-lock'></i></button>" +
                        "</center>" +
                        "</td>" +
                        "</tr>";
                }
            });

            $("#tableListClientes").html(html_tabla_clientes);

            $("#selectHTMLSexo").html(html_select_sexo_options);
            $("#selectEditHTMLSexo").html(html_select_edit_sexo_options);
            $("#selectEditHTMLEstado").html(html_select_edit_options);

            // Reinicializar DataTables
            $("#tableClientes").DataTable({
                order: [[0, "desc"]],
                language: {
                    url: globalDominioBase+"/js/local/Spanish.json",
                },
            });

            $("#btnBuscarListCliente").on("input", function () {
                var searchText = $(this).val().toLowerCase(); // Obtener el texto ingresado en minúsculas
                // Obtener instancia de DataTables de la tabla
                var table = $("#tableClientes").DataTable();
                // Realizar la búsqueda en la tabla utilizando el texto ingresado
                table.search(searchText).draw();
            });
        },
        complete: function (response) {},
        error: function (response) {
            console.log("Error", response);
        },
    });
}

function registrarCliente(data) {
    $.ajax({
        type: "POST",
        url: "/save/cliente",
        data: data,
        dataType: "json",
        beforeSend: function () {},
        success: function (response) {
            console.log("success()");
            console.log(response);
            let status = response.status;
            console.log("status > ", status);
            if (status) {
                Swal.fire({
                    title: "Registrado!",
                    text: "El cliente fue registrado con exito !",
                    icon: "success",
                    showConfirmButton: false,
                    timer: 1500,
                });
            } else {
                Swal.fire({
                    title: "Upps!",
                    text: "Algo paso, no se registro el cliente !",
                    icon: "error",
                    showConfirmButton: false,
                    timer: 1500,
                });
            }
        },
        complete: function () {
            console.log("complete()");
            setTimeout(() => {
                location.reload();
            }, 1500);
        },
        error: function (response) {
            console.log("Error", response);
            Swal.fire({
                title: "Upps!",
                text: "Algo paso, no se registro el cliente !",
                icon: "error",
                showConfirmButton: false,
                timer: 1500,
            });
        },
    });
}

function editarCliente(data) {
    $.ajax({
        type: "POST",
        url: "/edit/cliente",
        data: data,
        dataType: "json",
        beforeSend: function () {},
        success: function (response) {
            console.log("success()");
            console.log(response);
            let status = response.status;
            console.log("status > ", status);
            if (status) {
                Swal.fire({
                    title: "Actualizado!",
                    text: "El cliente fue actualizado con exito !",
                    icon: "success",
                    showConfirmButton: false,
                    timer: 1500,
                });
            } else {
                Swal.fire({
                    title: "Upps!",
                    text: "Algo paso, no se actualizo el cliente !",
                    icon: "error",
                    showConfirmButton: false,
                    timer: 1500,
                });
            }
        },
        complete: function () {
            console.log("complete()");
            setTimeout(() => {
                location.reload();
            }, 1500);
        },
        error: function (response) {
            console.log("Error", response);
            Swal.fire({
                title: "Error!",
                text: "Algo paso, no se actualizo el cliente !",
                icon: "error",
                showConfirmButton: false,
                timer: 1500,
            });
        },
    });
}

function deleteCliente(data) {
    $.ajax({
        type: "POST",
        url: "/delete/cliente",
        data: data,
        dataType: "json",
        beforeSend: function () {},
        success: function (response) {
            console.log("success()");
            console.log(response);
            let status = response.status;
            console.log("status > ", status);
            if (status) {
                Swal.fire({
                    title: "Actualizado!",
                    text: "El estado del cliente fue actualizado con exito !",
                    icon: "success",
                    showConfirmButton: false,
                    timer: 1500,
                });
            } else {
                Swal.fire({
                    title: "Upps!",
                    text: "Algo paso, no se actualizo el estado del cliente !",
                    icon: "error",
                    showConfirmButton: false,
                    timer: 1500,
                });
            }
        },
        complete: function () {
            console.log("complete()");
            setTimeout(() => {
                location.reload();
            }, 1500);
        },
        error: function (response) {
            console.log("Error", response);
        },
    });
}

$(document).on("click", ".btn-edit-cliente", function () {
    var cliId = $(this).data("id");
    var cliName = $(this).data("name");
    var cliApellidos = $(this).data("apellidos");
    var cliSexo = $(this).data("sexo");
    var cliDNI = $(this).data("dni");
    var cliTelef = $(this).data("telefono");
    var cliRUC = $(this).data("ruc");
    var cliEmail = $(this).data("email");
    var cliDireccion = $(this).data("direccion");
    var cliEstado = $(this).data("state");

    $("#txtEditCliId").val(cliId);
    $("#txtEditCliDNI").val(cliDNI);
    $("#txtEditCliName").val(cliName);
    $("#txtEditCliApellidos").val(cliApellidos);
    $("#selectEditSexoCliente").val(cliSexo);
    $("#txtEditCliTelef").val(cliTelef);
    $("#txtEditCliRUC").val(cliRUC);
    $("#txtEditCliEmail").val(cliEmail);
    $("#txtEditCliDireccion").val(cliDireccion);
    $("#selectEditEstadoCliente").val(cliEstado);

    $("#txtTitleEditarCliente").html(
        "<strong><i class='fas fa-fw fa-users'></i> " + cliName + "</strong>"
    );

    $("#mdEditCliente").modal("show");
});

$(document).on("click", ".btn-estado-cliente", function () {
    var clienteId = $(this).data("id");
    var clienteName = $(this).data("name");
    var clienteEstado = $(this).data("active");

    console.log(
        "clienteId > " +
            clienteId +
            " clienteName > " +
            clienteName +
            " clienteEstado > " +
            clienteEstado
    );

    var message = "Desea desactivar el cliente: ";
    var btnText = "Si, desactivar!";
    var btnTitle = "Desactivar!";

    if (clienteEstado == 1) {
        message = "Desea activar el cliente: ";
        btnText = "Si, Activar!";
        btnTitle = "Activar!";
    }

    Swal.fire({
        title: btnTitle,
        html: "<p>" + message + "<strong>" + clienteName + "</strong></p>",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: btnText,
        cancelButtonText: "No, cancelar!",
    }).then((result) => {
        if (result.isConfirmed) {
            var data = {
                _token: _global_token_crf,
                _clienteId: clienteId,
                _estado: clienteEstado,
            };

            deleteCliente(data);
        }
    });
});

$("#btnGetAPIDNI").click(function () {
    var setDNI = $("#txtClienteDNI").val().trim();
    if (setDNI != "") {
        var data = {
            _token: _global_token_crf,
            _DNI: setDNI,
        };

        getDataAPIReniecDNI(data);
    } else {
        Swal.fire({
            title: "Upps!",
            text: "Por favor, Ingrese el número de DNI !",
            icon: "warning",
            showConfirmButton: false,
            timer: 1500,
        });
    }
});

function getDataAPIReniecDNI(data) {
    $.ajax({
        type: "POST",
        url: "/reniec/dni/api",
        data: data,
        dataType: "json",
        beforeSend: function () {
            $(document).ready(function () {
                // Ocultar el div con clase "row"
                $("#loading").css("display", "block");
            });
        },
        success: function (response) {
            console.log("success()");
            console.log(response);
            let status = response.status;
            if (status) {
                $("#txtClienteNombres").val(response.data.nombres);
                $("#txtClienteApellidos").val(
                    response.data.apellidoPaterno +
                        " " +
                        response.data.apellidoMaterno
                );
            } else {
                Swal.fire({
                    title: "Upps !",
                    text: "Algo paso, no se registro el cliente, ingrese manualmente !",
                    icon: "error",
                    showConfirmButton: false,
                    timer: 1500,
                });
            }
        },
        complete: function () {
            $(document).ready(function () {
                // Ocultar el div con clase "row"
                $("#loading").css("display", "none");
            });
        },
        error: function (response) {
            console.log("Error", response);
            Swal.fire({
                title: "Upps !",
                text: "Algo paso, no se registro el cliente !",
                icon: "error",
                showConfirmButton: false,
                timer: 1500,
            });
        },
    });
}

$("#btnExportarExcelClientes").click(function () {
    Swal.fire({
        title: "Exportar (.xlsx)",
        html: "<p>¿Desea exportar los clientes en un archivo Excel?</p>",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#28a745",
        cancelButtonColor: "#d33",
        confirmButtonText: "Si, exportar!",
        cancelButtonText: "No, cancelar!",
    }).then((result) => {
        if (result.isConfirmed) {
            $.ajax({
                type: "GET",
                url: "/exportar/excel/clientes",
                data: {
                    _token: _global_token_crf,
                },
                dataType: "json",
                beforeSend: function () {},
                success: function (response) {
                    console.log("RDX> ", response);
                    // Obtener el dominio base de la página actual
                    var dominioBase = window.location.origin;
                    // Obtener la ruta del archivo Excel desde la respuesta
                    var filePath = dominioBase + "/" + response.data;
                    // Redireccionar a la ruta del archivo Excel para descargarlo
                    window.location.href = filePath;
                },
                complete: function () {},
                error: function (response) {
                    console.log("Error", response);
                },
            });
        }
    });
});
