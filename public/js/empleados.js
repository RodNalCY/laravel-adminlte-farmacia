var globalDominioBase = "";

$(document).ready(function () {
    _global_token_crf = document.getElementById("_token").value;
    console.log("_global_token_crf > ", _global_token_crf);
    globalDominioBase = window.location.origin;
    console.log("globalDominioBase > ", globalDominioBase);
    $("#tableListEmpleados").html(
        "<tr><td colspan='14' class='text-center'>No hay empleados disponibles.</td></tr>"
    );

    listaEmpleados();
});

$("#btnRegistrarEmpleado").click(function () {
    var empNombre = $("#txtEmpleadoNombre").val().trim().toUpperCase();
    var empApellidos = $("#txtEmpleadoApellidos").val().trim().toUpperCase();
    var empDNI = $("#txtEmpleadoDNI").val().trim();
    var empSexo = $("#selectSexoEmpleado").val().trim();
    var empEspecial = $("#selectEspecialidadEmpleado").val().trim();
    var empEmail = $("#txtEmpleadoEmail").val().trim();
    var empTelef = $("#txtEmpleadoTelefono").val().trim();
    var empDirec = $("#txtEmpleadoDireccion").val().trim().toUpperCase();
    var empHIngreso = $("#txtEmpleadoHIngreso").val().trim();
    var empHSalida = $("#txtEmpleadoHSalida").val().trim();
    var empSueldo = $("#txtEmpleadoSueldo").val().trim();

    if (empNombre != "" && empApellidos != "" && empDNI != "") {
        console.log(
            "empNombre > " +
                empNombre +
                "empApellidos > " +
                empApellidos +
                " empDNI > " +
                empDNI +
                " empSexo > " +
                empSexo +
                " empEspecial > " +
                empEspecial +
                " empEmail > " +
                empEmail +
                " empTelef > " +
                empTelef +
                " empDirec > " +
                empDirec +
                " empHIngreso > " +
                empHIngreso +
                " empHSalida > " +
                empHSalida +
                " empSueldo > " +
                empSueldo
        );
        var data = {
            _token: _global_token_crf,
            _empNombre: empNombre,
            _empApellidos: empApellidos,
            _empDNI: empDNI,
            _empSexo: empSexo,
            _empEspecial: empEspecial,
            _empEmail: empEmail,
            _empTelef: empTelef,
            _empDirec: empDirec,
            _empHIngreso: empHIngreso,
            _empHSalida: empHSalida,
            _empSueldo: empSueldo,
        };

        registrarEmpleado(data);
    } else {
        Swal.fire({
            title: "Upps!",
            text: "Debe completar el nombre de la presentación !",
            icon: "warning",
            showConfirmButton: false,
            timer: 1500,
        });
    }
});

$("#btnActualizarEmpleado").click(function () {
    var empId = $("#txtEditEmpId").val().trim();
    var empNombre = $("#txtEditEmpName").val().trim().toUpperCase();
    var empApellidos = $("#txtEditEmpApellidos").val().trim().toUpperCase();
    var empDNI = $("#txtEditEmpDNI").val().trim();
    var empSexo = $("#selectEditSexoEmpleado").val().trim();
    var empEspecial = $("#selectEditEspecialidadEmpleado").val().trim();
    var empEmail = $("#txtEditEmpEmail").val().trim();
    var empTelef = $("#txtEditEmpTelef").val().trim();
    var empDirec = $("#txtEditEmpDireccion").val().trim().toUpperCase();
    var empHIngreso = $("#txtEditEmpHIngreso").val().trim();
    var empHSalida = $("#txtEditEmpHSalida").val().trim();
    var empSueldo = $("#txtEditEmpSueldo").val().trim();
    var empEstado = $("#selectEditEstadoEmpleado").val().trim();

    if (empNombre != "" && empApellidos != "" && empDNI != "") {
        console.log(
            "empId > " +
                empId +
                "empNombre > " +
                empNombre +
                "empApellidos > " +
                empApellidos +
                " empDNI > " +
                empDNI +
                " empSexo > " +
                empSexo +
                " empEspecial > " +
                empEspecial +
                " empEmail > " +
                empEmail +
                " empTelef > " +
                empTelef +
                " empDirec > " +
                empDirec +
                " empHIngreso > " +
                empHIngreso +
                " empHSalida > " +
                empHSalida +
                " empSueldo > " +
                empSueldo +
                " empEstado > " +
                empEstado
        );

        var data = {
            _token: _global_token_crf,
            _empId: empId,
            _empNombre: empNombre,
            _empApellidos: empApellidos,
            _empDNI: empDNI,
            _empSexo: empSexo,
            _empEspecial: empEspecial,
            _empEmail: empEmail,
            _empTelef: empTelef,
            _empDirec: empDirec,
            _empHIngreso: empHIngreso,
            _empHSalida: empHSalida,
            _empSueldo: empSueldo,
            _empEstado: empEstado,
        };

        editarEmpleado(data);
    } else {
        Swal.fire({
            title: "Upps!",
            text: "Debe completar los datos del empleado !",
            icon: "warning",
            showConfirmButton: false,
            timer: 1500,
        });
    }
});

function listaEmpleados() {
    $.ajax({
        type: "GET",
        url: "/list/empleados",
        data: {
            _token: _global_token_crf,
        },
        dataType: "json",
        beforeSend: function (response) {},
        success: function (response) {
            console.log("RDX> ", response);
            var html_tabla_empleados = "";
            var html_select_sexo_options =
                "<select class='form-control' id='selectSexoEmpleado'>" +
                "<option value='M'>Masculino</option>" +
                "<option value='F'>Femenino</option>" +
                "</select>";

            var html_select_edit_sexo_options =
                "<select class='form-control' id='selectEditSexoEmpleado'>" +
                "<option value='M'>Masculino</option>" +
                "<option value='F'>Femenino</option>" +
                "</select>";

            var html_select_especialidad_options =
                "<select class='form-control' id='selectEspecialidadEmpleado'>" +
                "<option value='Practicante'>Practicante</option>" +
                "<option value='Enfermer@'>Enfermer@</option>" +
                "<option value='Técnic@ Enfermer@'>Técnic@ Enfermer@</option>" +
                "<option value='Otros'>Otros</option>" +
                "</select>";

            var html_select_edit_especialidad_options =
                "<select class='form-control' id='selectEditEspecialidadEmpleado'>" +
                "<option value='Practicante'>Practicante</option>" +
                "<option value='Enfermer@'>Enfermer@</option>" +
                "<option value='Técnic@ Enfermer@'>Técnic@ Enfermer@</option>" +
                "<option value='Otros'>Otros</option>" +
                "</select>";

            var html_select_edit_options =
                "<select class='form-control' id='selectEditEstadoEmpleado'>" +
                "<option value='Activo'>Activo</option>" +
                "<option value='Inactivo'>Inactivo</option>" +
                "</select>";

            response.data.forEach(function (emp) {
                if (emp.Estado == "Inactivo") {
                    html_tabla_empleados =
                        html_tabla_empleados +
                        "<tr style='background-color: #ff22221f;'>" +
                        "<th class='text-center' scope='row'>" +
                        emp.idEmpleado +
                        "</th>" +
                        "<td>" +
                        emp.Nombres +
                        "</td>" +
                        "<td>" +
                        emp.Apellidos +
                        "</td>" +
                        "<td>" +
                        emp.Especialidad +
                        "</td>" +
                        "<td class='text-center'>" +
                        emp.Sexo +
                        "</td>" +
                        "<td class='text-center'>" +
                        emp.Dni +
                        "</td>" +
                        "<td>" +
                        emp.Email +
                        "</td>" +
                        "<td class='text-center'>" +
                        emp.Telefono +
                        "</td>" +
                        "<td>" +
                        emp.Direccion +
                        "</td>" +
                        "<td class='text-center'>" +
                        emp.HoraIngreso +
                        "</td>" +
                        "<td class='text-center'>" +
                        emp.HoraSalida +
                        "</td>" +
                        "<td class='text-center'>" +
                        emp.Sueldo +
                        "</td>" +
                        "<td class='text-center'>" +
                        "<button type='button' class='btn btn-danger btn-sm btn-estado-size'>" +
                        emp.Estado +
                        "</button>" +
                        "</td>" +
                        "<td>" +
                        "<center>" +
                        " <button type='button' class='btn btn-warning btn-sm btn-edit-empleado'" +
                        " data-id='" +
                        emp.idEmpleado +
                        "' data-name='" +
                        emp.Nombres +
                        "' data-apellidos='" +
                        emp.Apellidos +
                        "' data-especialidad='" +
                        emp.Especialidad +
                        "' data-sexo='" +
                        emp.Sexo +
                        "' data-dni='" +
                        emp.Dni +
                        "' data-email='" +
                        emp.Email +
                        "' data-telefono='" +
                        emp.Telefono +
                        "' data-direccion='" +
                        emp.Direccion +
                        "' data-hingreso='" +
                        emp.HoraIngreso +
                        "' data-hsalida='" +
                        emp.HoraSalida +
                        "' data-sueldo='" +
                        emp.Sueldo +
                        "' data-state='" +
                        emp.Estado +
                        "'><i class='fas fa-pen'></i></button>" +
                        " <button type='button' class='btn btn-success btn-sm btn-estado-empleado'" +
                        " data-id='" +
                        emp.idEmpleado +
                        "' data-name='" +
                        emp.Nombres +
                        "' data-idusuario='" +
                        emp.idUsuario +
                        "' data-active='1'><i class='fas fa-unlock'></i></button>" +
                        "</center>" +
                        "</td>" +
                        "</tr>";
                } else {
                    html_tabla_empleados =
                        html_tabla_empleados +
                        "<tr>" +
                        "<th class='text-center' scope='row'>" +
                        emp.idEmpleado +
                        "</th>" +
                        "<td>" +
                        emp.Nombres +
                        "</td>" +
                        "<td>" +
                        emp.Apellidos +
                        "</td>" +
                        "<td>" +
                        emp.Especialidad +
                        "</td>" +
                        "<td class='text-center'>" +
                        emp.Sexo +
                        "</td>" +
                        "<td class='text-center'>" +
                        emp.Dni +
                        "</td>" +
                        "<td>" +
                        emp.Email +
                        "</td>" +
                        "<td class='text-center'>" +
                        emp.Telefono +
                        "</td>" +
                        "<td>" +
                        emp.Direccion +
                        "</td>" +
                        "<td class='text-center'>" +
                        emp.HoraIngreso +
                        "</td>" +
                        "<td class='text-center'>" +
                        emp.HoraSalida +
                        "</td>" +
                        "<td class='text-center'>" +
                        emp.Sueldo +
                        "</td>" +
                        "<td class='text-center'>" +
                        "<button type='button' class='btn btn-success btn-sm btn-estado-size'>" +
                        emp.Estado +
                        "</button>" +
                        "</td>" +
                        "<td>" +
                        "<center>" +
                        " <button type='button' class='btn btn-warning btn-sm btn-edit-empleado'" +
                        " data-id='" +
                        emp.idEmpleado +
                        "' data-name='" +
                        emp.Nombres +
                        "' data-apellidos='" +
                        emp.Apellidos +
                        "' data-especialidad='" +
                        emp.Especialidad +
                        "' data-sexo='" +
                        emp.Sexo +
                        "' data-dni='" +
                        emp.Dni +
                        "' data-email='" +
                        emp.Email +
                        "' data-telefono='" +
                        emp.Telefono +
                        "' data-direccion='" +
                        emp.Direccion +
                        "' data-hingreso='" +
                        emp.HoraIngreso +
                        "' data-hsalida='" +
                        emp.HoraSalida +
                        "' data-sueldo='" +
                        emp.Sueldo +
                        "' data-state='" +
                        emp.Estado +
                        "'><i class='fas fa-pen'></i></button>" +
                        " <button type='button' class='btn btn-danger btn-sm btn-estado-empleado'" +
                        " data-id='" +
                        emp.idEmpleado +
                        "' data-name='" +
                        emp.Nombres +
                        "' data-idusuario='" +
                        emp.idUsuario +
                        "' data-active='0'><i class='fas fa-lock'></i></button>" +
                        "</center>" +
                        "</td>" +
                        "</tr>";
                }
            });

            $("#tableListEmpleados").html(html_tabla_empleados);
            $("#selectHTMLSexo").html(html_select_sexo_options);
            $("#selectHTMLEspecialidad").html(html_select_especialidad_options);

            $("#selectEditHTMLSexo").html(html_select_edit_sexo_options);
            $("#selectEditHTMLEspecialidad").html(
                html_select_edit_especialidad_options
            );
            $("#selectEditHTMLEstado").html(html_select_edit_options);
            // Reinicializar DataTables
            $("#tableEmpleados").DataTable({
                order: [[0, "desc"]],
                language: {
                    url: globalDominioBase+"/js/local/Spanish.json",
                },
            });
        },
        complete: function (response) {},
        error: function (response) {
            console.log("Error", response);
        },
    });
}

function registrarEmpleado(data) {
    $.ajax({
        type: "POST",
        url: "/save/empleado",
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
                    text: "El empleado fue registrado con exito !",
                    icon: "success",
                    showConfirmButton: false,
                    timer: 1500,
                });
            } else {
                Swal.fire({
                    title: "Upps!",
                    text: "Algo paso, no se registro el empleado !",
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
                text: "Algo paso, no se registro el empleado !",
                icon: "error",
                showConfirmButton: false,
                timer: 1500,
            });
        },
    });
}

function editarEmpleado(data) {
    $.ajax({
        type: "POST",
        url: "/edit/empleado",
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
                    text: "El empleado fue actualizado con exito !",
                    icon: "success",
                    showConfirmButton: false,
                    timer: 1500,
                });
            } else {
                Swal.fire({
                    title: "Upps!",
                    text: "Algo paso, no se actualizo el empleado !",
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
                text: "Algo paso, no se actualizo el empleado !",
                icon: "error",
                showConfirmButton: false,
                timer: 1500,
            });
        },
    });
}

function deleteEmpleado(data) {
    $.ajax({
        type: "POST",
        url: "/delete/empleado",
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
                    text: "El estado del empleado fue actualizado con exito !",
                    icon: "success",
                    showConfirmButton: false,
                    timer: 1500,
                });
            } else {
                Swal.fire({
                    title: "Upps!",
                    text: "Algo paso, no se actualizo el estado del empleado !",
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

$(document).on("click", ".btn-edit-empleado", function () {
    var empId = $(this).data("id");
    var empName = $(this).data("name");
    var empApellidos = $(this).data("apellidos");
    var empEspecialidad = $(this).data("especialidad");
    var empSexo = $(this).data("sexo");
    var empDNI = $(this).data("dni");
    var empEmail = $(this).data("email");
    var empTelef = $(this).data("telefono");
    var empDireccion = $(this).data("direccion");
    var empHIngreso = $(this).data("hingreso");
    var empHSalida = $(this).data("hsalida");
    var empSueldo = $(this).data("sueldo");
    var empEstado = $(this).data("state");

    $("#txtEditEmpId").val(empId);
    $("#txtEditEmpName").val(empName);
    $("#txtEditEmpApellidos").val(empApellidos);
    $("#selectEditEspecialidadEmpleado").val(empEspecialidad);
    $("#selectEditSexoEmpleado").val(empSexo);
    $("#txtEditEmpDNI").val(empDNI);
    $("#txtEditEmpEmail").val(empEmail);
    $("#txtEditEmpTelef").val(empTelef);
    $("#txtEditEmpDireccion").val(empDireccion);
    $("#txtEditEmpHIngreso").val(empHIngreso);
    $("#txtEditEmpHSalida").val(empHSalida);
    $("#txtEditEmpSueldo").val(empSueldo);
    $("#selectEditEstadoEmpleado").val(empEstado);

    $("#txtTitleEditarEmpleado").html(
        "<strong><i class='fas fa-fw fa-address-card'></i> " +
            empName +
            "</strong>"
    );

    $("#mdEditEmpleado").modal("show");
});

$(document).on("click", ".btn-estado-empleado", function () {
    var empleadoId = $(this).data("id");
    var empleadoName = $(this).data("name");
    var empleadoActive = $(this).data("active");
    var empleadoIdUsuario = $(this).data("idusuario");

    console.log(
        "empleadoId > " +
            empleadoId +
            " empleadoName > " +
            empleadoName +
            " empleadoActive > " +
            empleadoActive +
            " empleadoIdUsuario > " +
            empleadoIdUsuario
    );

    if (empleadoIdUsuario != 0) {
        Swal.fire({
            title: "Atento!",
            text: "Antes de desactivar a un empleado, asegúrate de desactivar su cuenta de usuario en el sistema!",
            icon: "warning",
            confirmButtonColor: "#3085d6",
            confirmButtonText: "Entendido!",
        });
    } else {
        var message = "Desea desactivar el Empleado: ";
        var btnText = "Si, desactivar!";
        var textTitle = "Desactivar!";

        if (empleadoActive == 1) {
            message = "Desea activar el Empleado: ";
            btnText = "Si, Activar!";
            textTitle = "Activar!";
        }

        Swal.fire({
            title: textTitle,
            html: "<p>" + message + "<strong>" + empleadoName + "</strong></p>",
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
                    _empleadoId: empleadoId,
                    _estado: empleadoActive,
                };

                deleteEmpleado(data);
            }
        });
    }
});

$("#btnGetAPIDNI").click(function () {
    var setDNI = $("#txtEmpleadoDNI").val().trim();
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
                $("#txtEmpleadoNombre").val(response.data.nombres);
                $("#txtEmpleadoApellidos").val(
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
