import { FunctionUtils } from "/public/common/OyerUtils.js"

export default {

    send: function (data, ok, erro) {
        $.ajax({
            type: "GET",
            url: `/api/${data.recurso}`,
            data: data.data,
            dataType: "json",
            success: function (data) {
                if(FunctionUtils.isFunction(ok)) ok(data)
            },
            error: function (xhr, err) {
                if(FunctionUtils.isFunction(ok)) erro(xhr.status, err, xhr.responseText)
            }
        });
    }
}