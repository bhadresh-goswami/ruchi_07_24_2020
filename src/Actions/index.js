export function add(val) {
    return {
        type: "ADD",
        val
    }
}

export function clear() {
    return {
        type: "CLEAR"
    }
}
export function display() {
    return {
        type: "DISPLAY"
    }
}