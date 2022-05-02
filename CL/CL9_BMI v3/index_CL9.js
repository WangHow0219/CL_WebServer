import startPage from './startPage.js'
import {getBMI} from './getBMI_9.js'

window.onload = function(){
    let root = this.document.getElementById("root")
    root.innerHTML = startPage()

    let cal7 = document.getElementById("but7")
        cal7.onclick = function(){
            let bmi = 0
            let w7 = document.getElementById("w7").value
            let h7 = document.getElementById("h7").value
            bmi = getBMI(w7, h7)
            let Sans7 = document.getElementById("Sans7")
            Sans7.innerHTML = bmi
        }
}
