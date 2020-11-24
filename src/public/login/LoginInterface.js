import Connector from "/public/common/OyerConnector.js"
import { OnPress, FocusOut } from "/public/common/OyerRegex.js"

export default {

    init: function () {
        let modulo = this
        $("#login_email, #login_senha").on("keydown", function (e) {
            if (e.which == 13) {
                if (this.id == "login_email") $("#login_senha").focus()
                if (this.id == "login_senha") {
                    $("#botaoLogar").focus();
                }
            }
        });
        $("#botaoLogar").click(function () {
            modulo.logar()
        });
        $("#login_email, #criar_id").on("input", OnPress.userID);
        $("#criar_id").on("input", FocusOut.userID);
        this.preencherAnos()
    },

    logar: function () {
        $("#botaoLogar").disable()
        $("#botaoLogar > img").show()
        $("#botaoLogar > div").hide()
        Connector.send({
            recurso: "logar",
            data: {
                user: $("#login_email").val(),
                senha: $("#login_senha").val()
            }
        }, function (res) {
            if (res.retorno == "ok") return location.reload()
            $("#botaoLogar").enable()
            $("#botaoLogar > img").hide()
            $("#botaoLogar > div").show()
            Swal.fire({
                position: 'top-end',
                icon: 'error',
                title: res.retorno,
                showConfirmButton: false,
                timer: 1500
            })
        }, function (code, err, data) {
            console.error(code, err, data)
        })
    },

    preencherAnos: function () {
        var atual = moment().format('YYYY');
        for (var i = 1; i < 100; i++) {
            var ano = atual--
            $("#criar_ano").append(`<option>${ano}</option>`)
        }
    }
}