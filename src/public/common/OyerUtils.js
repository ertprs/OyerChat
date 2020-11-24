export class JSONUtils {
    static isEmpty(json) {
        if (json == "{}" || JSON.stringify(json) == "{}") return true
        return false
    }
}

export class StringUtils {


    static compareArray(a, b) {
        return Array.isArray(a) &&
            Array.isArray(b) &&
            a.length === b.length &&
            a.every((val, index) => val === b[index]);
    }
}

export class FunctionUtils {

    static isFunction(fun) {
        return typeof fun == "function" ? true : false
    }
    
}

export class URLUtils {

    static getAllParans(url) {
        if (url == undefined) url = window.location.href
        var split = url.split("?")
        if (split[1] != undefined) {
            var array = []
            var multiples = split[1].split("&")
            for (var i = 0; i < multiples.length; i++) {
                var par = multiples[i].split("=")
                array.push([par[0], par[1]])
            }
            return array;
        }
    }

    static getAllKeys(url) {
        if (url == undefined) url = window.location.href
        var split = url.split("?")
        if (split[1] != undefined) {
            var array = []
            var multiples = split[1].split("&")
            for (var i = 0; i < multiples.length; i++) array.push(multiples[i].split("=")[0])
            return array;
        }
    }
}