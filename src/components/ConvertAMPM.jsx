export function convertAMPM() {
    const date = new Date()
    const arr = date.toString().split(" ").slice(0, 4)

    const AMPM = date.getHours() >= 12 ? "PM" : "AM"
    const hours = date.getHours() % 12 || 12
    const minutes = date.getMinutes()
    const seconds = date.getSeconds()

    return arr.concat([`${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")} ${AMPM}`]).join(" ")
}