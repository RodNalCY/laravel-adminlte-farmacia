$(document).ready(function () {
    _globa_token_crf = document.getElementById("_token").value;
    console.log("_globa_token_crf > ", _globa_token_crf);
    $("#tableListUsuarios").html(
        "<tr><td colspan='6' class='text-center'>No hay productos disponibles.</td></tr>"
    );
    listUsuariosAll();
    listEmpleadosAll();
    listRolesAll();
});

$("#btnBuscarEmpleados").click(function () {
    $("#mdUserEmpleados").modal("show");
});

$("#btnBuscarRoles").click(function () {
    $("#mdUserRoles").modal("show");
});

function listUsuariosAll() {
    $.ajax({
        type: "GET",
        url: "/list/usuarios",
        data: {
            _token: _globa_token_crf,
        },
        dataType: "json",
        beforeSend: function () {},
        success: function (response) {
            console.log("RDX> ", response);
            var html_tabla_usuarios = "";

            response.data.forEach(function (user) {
                html_tabla_usuarios =
                    html_tabla_usuarios +
                    "<tr>" +
                    "<td class='text-center' scope='row'>" +
                    user.id +
                    "</td>" +
                    "<th>" +
                    user.name +
                    "</th>" +
                    "<td>" +
                    user.email +
                    "</td>" +
                    "<td>" +
                    user.role +
                    "</td>" +
                    "<td>" +
                    user.fecha +
                    "</td>" +
                    "<td>" +
                    "   <center>" +
                    "      <button type='button' class='btn btn-primary btn-sm'><i class='fas fa-eye'></i></button>" +
                    "      <button type='button' class='btn btn-warning btn-sm'><i class='fas fa-pen'></i></button>" +
                    "      <button type='button' class='btn btn-danger btn-sm'><i class='fas fa-trash'></i></button>" +
                    "    </center>" +
                    "</td>" +
                    "</tr>";
            });

            $("#tableListUsuarios").html(html_tabla_usuarios);
            $("#tableUsuarios").DataTable({
                order: [[0, "asc"]],
                language: {
                    url: "//cdn.datatables.net/plug-ins/9dcbecd42ad/i18n/Spanish.json",
                },
            });
        },
        complete: function () {},
        error: function (response) {
            console.log("Error", response);
        },
    });
}

function listEmpleadosAll() {
    $.ajax({
        type: "GET",
        url: "/list/empleados",
        data: {
            _token: _globa_token_crf,
        },
        dataType: "json",
        beforeSend: function () {},
        success: function (response) {
            console.log("RDX> ", response);
            var html_tabla_empleados = "";

            response.data.forEach(function (empleado) {
                if (empleado.idUsuario == 0) {
                    html_tabla_empleados =
                        html_tabla_empleados +
                        "<tr>" +
                        "<td class='text-center' scope='row'>" +
                        empleado.idEmpleado +
                        "</td>" +
                        "<th>" +
                        empleado.Nombres +
                        " " +
                        empleado.Apellidos +
                        "</th>" +
                        "<td>" +
                        empleado.Especialidad +
                        "</td>" +
                        "<td>" +
                        empleado.Sexo +
                        "</td>" +
                        "<td>" +
                        empleado.Dni +
                        "</td>" +
                        "<td>" +
                        empleado.Email +
                        "</td>" +
                        "<td>" +
                        "<center>" +
                        "<button type='button' class='btn btn-success btn-sm btn-select-empleado'" +
                        " data-id='" +
                        empleado.idEmpleado +
                        "' data-name='" +
                        empleado.Nombres +
                        " " +
                        empleado.Apellidos +
                        "' data-email='" +
                        empleado.Email +
                        "'>" +
                        "<i class='fas fa-check'></i></button>" +
                        "</center>" +
                        "</td>" +
                        "</tr>";
                } else {
                    html_tabla_empleados =
                        html_tabla_empleados +
                        "<tr class='table-active'>" +
                        "<td class='text-center' scope='row'>" +
                        empleado.idEmpleado +
                        "</td>" +
                        "<th>" +
                        empleado.Nombres +
                        " " +
                        empleado.Apellidos +
                        "</th>" +
                        "<td>" +
                        empleado.Especialidad +
                        "</td>" +
                        "<td>" +
                        empleado.Sexo +
                        "</td>" +
                        "<td>" +
                        empleado.Dni +
                        "</td>" +
                        "<td>" +
                        empleado.Email +
                        "</td>" +
                        "<td>" +
                        "   <center>" +
                        "      <button type='button' class='btn btn-danger btn-sm'><i class='fas fa-times'></i></button>" +
                        "    </center>" +
                        "</td>" +
                        "</tr>";
                }
            });

            $("#tbl_row_empleados").html(html_tabla_empleados);
            $("#tableEmpleados").DataTable({
                order: [[0, "asc"]],
                language: {
                    url: "//cdn.datatables.net/plug-ins/9dcbecd42ad/i18n/Spanish.json",
                },
            });
        },
        complete: function () {},
        error: function (response) {
            console.log("Error", response);
        },
    });
}

function listRolesAll() {
    $.ajax({
        type: "GET",
        url: "/list/roles",
        data: {
            _token: _globa_token_crf,
        },
        dataType: "json",
        beforeSend: function () {},
        success: function (response) {
            console.log("RDX> ", response);
            var html_tabla_roles = "";

            response.data.forEach(function (role) {
                html_tabla_roles =
                    html_tabla_roles +
                    "<tr>" +
                    "<td scope='row'>" +
                    role.id +
                    "</td>" +
                    "<th>" +
                    role.name +
                    "</th>" +
                    "<td>" +
                    role.fecha +
                    "</td>" +
                    "<td>" +
                    "<center>" +
                    "<button type='button' class='btn btn-success btn-sm btn-select-role'" +
                    " data-id='" +
                    role.id +
                    "' data-name='" +
                    role.name +
                    "'>" +
                    "<i class='fas fa-check'></i></button>" +
                    "</center>" +
                    "</td>" +
                    "</tr>";
            });

            $("#tbl_row_roles").html(html_tabla_roles);
            $("#tableRoles").DataTable({
                order: [[0, "asc"]],
                language: {
                    url: "//cdn.datatables.net/plug-ins/9dcbecd42ad/i18n/Spanish.json",
                },
            });
        },
        complete: function () {},
        error: function (response) {
            console.log("Error", response);
        },
    });
}

$(document).on("click", ".btn-select-empleado", function () {
    var id = $(this).data("id");
    var name = $(this).data("name");
    var email = $(this).data("email");
    console.log("id > " + id + " name > " + name + " email > " + email);
    // Encontrar el índice del objeto en la lista con el ID correspondiente

    // Pintar en los inputs
    $("#txtUserId").val(id);
    $("#txtNombresApellidos").val(name);
    $("#txtEmail").val(email);
    $("#mdUserEmpleados").modal("hide");
});

$(document).on("click", ".btn-select-role", function () {
    var id = $(this).data("id");
    var name = $(this).data("name");
    console.log("id > " + id + " name > " + name);
    // Encontrar el índice del objeto en la lista con el ID correspondiente

    // Pintar en los inputs
    $("#txtRoleId").val(id);
    $("#txtRole").val(name);
    $("#mdUserRoles").modal("hide");
});

$("#btnRegistrarUsuario").click(function () {
    var userId = $("#txtUserId").val();
    var userName = $("#txtNombresApellidos").val();
    var userEmail = $("#txtEmail").val();
    var userPassword = $("#txtPassword").val();
    var userVerifPassword = $("#txtPasswordVerified").val();

    var roleId = $("#txtRoleId").val();
    var roleName = $("#txtRole").val();

    console.log(
        "userId > " +
            userId +
            " userName > " +
            userName +
            " userEmail > " +
            userEmail +
            " userPassword > " +
            userPassword +
            " userVerifPassword > " +
            userVerifPassword +
            " roleId > " +
            roleId +
            " roleName > " +
            roleName
    );

    if (userPassword === userVerifPassword) {
        var data = {
            _token: _globa_token_crf,
            _userId: userId,
            _userName: userName,
            _userEmail: userEmail,
            _userPassword: userPassword,
            _roleId: roleId,
        };

        saveUsuario(data);
    } else {
        Swal.fire({
            title: "Upps!",
            text: "Las contraseñas no conciden verificalo nuevamente !",
            icon: "warning",
            showConfirmButton: false,
            timer: 1500,
        });
    }
});

function saveUsuario(data) {
    $.ajax({
        type: "POST",
        url: "/save/usuario",
        data: data,
        dataType: "json",
        beforeSend: function () {},
        success: function (response) {
            console.log("success()");
            console.log("RDXXX> ", response);
            let status = response.status;
            console.log("status > ", status);
            if (status) {
                Swal.fire({
                    title: "Correcto!",
                    text: "Se creo correctamente el usuario !",
                    icon: "success",
                    showConfirmButton: false,
                    timer: 1500,
                });
            } else {
                Swal.fire({
                    title: "Upps!",
                    text: "Algo paso, no se creo correctamente el usuario !",
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
