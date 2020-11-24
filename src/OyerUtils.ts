export class JSONUtils {
    public static isEmpty(json: string) {
        if (json == "{}" || JSON.stringify(json) == "{}") return true
        return false
    }

    public static print(key: string, value?: string) {
        return `{"${key}": "${value}"}`
    }
}

export class StringUtils {

    public static compareArray(a: Array<string>, b: Array<string>) {
        return Array.isArray(a) && Array.isArray(b) && a.length === b.length && a.every((val, index) => val === b[index]);
    }
}

export class FunctionUtils {

    public static isFunction(fun: string) {
        return typeof fun == "function" ? true : false
    }

}