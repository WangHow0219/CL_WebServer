window.onload = function(){
    let startPage = `
    <center>    
    <div class="box_7">
        <h2>計算BMI v2</h2>
        體重 : <input type="text" class="inp7" id="w7" value="50"><br>
        身高 : <input type="text" class="inp7" id="h7" value="1.7"><br>
        --------------------------------------<br>
        你的BMI約為 : <br>
        <div id="Sans7"></div><br>
        <button id="but7">計算</button>
    </div>
    </center>
    `
    let root = this.document.getElementById("root")
    root.innerHTML = startPage

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

function getBMI(w7, h7){
    let bmi = w7/(h7*h7)
    bmi = Math.round(bmi)
    return bmi
}