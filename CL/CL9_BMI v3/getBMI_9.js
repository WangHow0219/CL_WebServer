function getBMI(w7, h7){
    let bmi = w7/(h7*h7)
    bmi = Math.round(bmi)
    return bmi
}
export { getBMI }
