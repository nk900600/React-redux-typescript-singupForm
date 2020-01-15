
export function isValidEmail(val: string) {
    return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(val) ?
        { isValid: true, errorMessage: null } :
        { isValid: false, errorMessage: "Enter Valid Email"}
}

export function isValidMobile(val: string) {
    return /^\d{10}$/.test(val) ?
        { isValid: true, errorMessage: null } :
        { isValid: false, errorMessage: "Enter Valid Mobile Number"}
}