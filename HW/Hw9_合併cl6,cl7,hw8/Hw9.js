window.onload = function(){
// CL6
    let cal6 = document.getElementById("but6")
    cal6.onclick = function(){
        let chi6 = document.getElementsByName("chi6")
        let eng6 = document.getElementsByName("eng6")
        let math6 = document.getElementsByName("math6")
        let com6 = document.getElementsByName("com6")

        let chiAry6 = new Array()
        for (let i = 0; i < chi6.length; i++){
            chiAry6.push(parseInt(chi6[i].value))}
        let engAry6 = new Array()
        for (let i = 0; i < eng6.length; i++){
            engAry6.push(parseInt(eng6[i].value))}
        let mathAry6 = new Array()
        for (let i = 0; i < math6.length; i++){
            mathAry6.push(parseInt(math6[i].value))}
        let comAry6 = new Array()
        for (let i = 0; i < com6.length; i++){
            comAry6.push(parseInt(com6[i].value))}
        
        let chiSum6 = 0
        for (let k = 0; k < chiAry6.length; k++){
            chiSum6 = chiSum6 + chiAry6[k]}
        let engSum6 = 0
        for (let k = 0; k < engAry6.length; k++){
            engSum6 = engSum6 + engAry6[k]}
        let mathSum6 = 0
        for (let k = 0; k < mathAry6.length; k++){
            mathSum6 = mathSum6 + mathAry6[k]}
        let comSum6 = 0
        for (let k = 0; k < comAry6.length; k++){
            comSum6 = comSum6 + comAry6[k]}
        
        let chiAvg6 = 0
        chiAvg6 = chiSum6 / chiAry6.length;
        let engAvg6 = 0
        engAvg6 = engSum6 / engAry6.length;
        let mathAvg6 = 0
        mathAvg6 = mathSum6 / mathAry6.length;
        let comAvg6 = 0
        comAvg6 = comSum6 / comAry6.length;

        let SchiAvg = document.getElementById("avg_chi6")
        SchiAvg.innerHTML = chiAvg6
        let SengAvg = document.getElementById("avg_eng6")
        SengAvg.innerHTML = engAvg6
        let SmathAvg = document.getElementById("avg_math6")
        SmathAvg.innerHTML = mathAvg6
        let ScomAvg = document.getElementById("avg_com6")
        ScomAvg.innerHTML = comAvg6

        let sumP6 = document.getElementsByName("sum6")  
        let sumPAry6 = new Array()
        let avgP6 = document.getElementsByName("avg6")
        let avgPAry6 = new Array()

        for (i = 0; i < 5; i++){
            sumPAry6[i] = chiAry6[i] + engAry6[i] + mathAry6[i] + comAry6[i]}
        for (i = 0; i < 5; i++){
            avgPAry6[i] = sumPAry6[i] / 4}
        
        for (i = 0; i < sumP6.length; i++){
            sumP6[i].innerHTML = sumPAry6[i]}
        for (i = 0; i < avgP6.length; i++){
            avgP6[i].innerHTML = sumPAry6[i] / 4}
        
        let sumSum6 = 0
        let SavgSum6 = document.getElementById("avg_sum6")
        for (i = 0; i < sumP6.length; i++){
            sumSum6 = sumSum6 + sumPAry6[i]}
        SavgSum6.innerHTML = sumSum6 / sumP6.length
    }

    // CL7
    let cal7 = document.getElementById("but7")
    cal7.onclick = function(){
        let bmi7 = 0
        let w7 = document.getElementById("w7")
        let h7 = document.getElementById("h7")
        bmi7 = getBMI(w7.value, h7.value)
        let Sans7 = document.getElementById("Sans7")
        Sans7.innerHTML = bmi7
    }
    function getBMI(w7, h7){        
        let bmi7 = w7/(h7*h7)
        bmi7 = Math.round(bmi7)
        return bmi7
    }

    // Hw8
    let cal8 = document.getElementById("but8")
    cal8.onclick = function(){
        calculate()
    }
    function calculate(){
        let a8 = document.getElementById("numA_8")
        let b8 = document.getElementById("numB_8")
        let c8 = document.getElementById("numC_8")
        let radio_num = document.getElementById("radio_list").option
        
        let S_a = document.getElementById("S_a")
        let S_b = document.getElementById("S_b")
        let S_c = document.getElementById("S_c")
        S_a.innerHTML = a8.value
        S_b.innerHTML = b8.value
        S_c.innerHTML = c8.value
    
        let smal_total8 = 0
        smal_total8 = 30 * parseInt(a8.value) + 40 * parseInt(b8.value) + 50 * parseInt(c8.value)
        let S_smal_total8 = document.getElementById("S_smal_total8")
        S_smal_total8.innerHTML = smal_total8
    
        let S_ismb = document.getElementById("S_ismb")
        let total8 = smal_total8
        let S_total8 = document.getElementById("S_total8")
    
        // 判斷會員
        if(radio_num[1].checked){
            S_ismb.innerHTML = "會員打八折 !"
            total8 = smal_total8 * 0.8
            S_total8.innerHTML = total8
        }
        else{
            S_ismb.innerHTML = "( 不是會員，原價計算 )"
            S_total8.innerHTML = total8
        }
    }
}
