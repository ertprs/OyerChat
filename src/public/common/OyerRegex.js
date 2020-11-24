export class OnPress {

    static userIDRegex = /[^a-z.[1-9]]/g
    
    static userID(e) {
        e.target.value = e.target.value.replace(new RegExp(" ", "gim"), ".").toLowerCase()
        if (OnPress.userIDRegex.test($(this).val())) {
            e.target.value = (e.target.value.replace(OnPress.userIDRegex, ""));
        }
    }
}

export class FocusOut {

    static userID(e) {
        e.target.value = e.target.value.replace(new RegExp(" ", "gim"), ".").toLowerCase()
        if (/[^a-z.][1-9]/g.test($(this).val())) {
            e.target.value = (e.target.value.replace(/[^a-z1-9.]/g, ""));
        }
    }
}