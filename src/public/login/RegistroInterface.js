export default {

    init() {
        var modulo = this
        $("#link-inscricao").click(function () {
            modulo.open()
        });
    },

    open() {
        Swal.fire({
            progressSteps: ['1', '2', '3'],
            html: ``
        })
    }
}