// http://localhost/Hw/Hw12_CalAvg/index.js
import getStarPage from "http://localhost/Hw/Hw12_CalAvg/getStarPage.js";

window.onload = function(){
    let root = document.getElementById("root")
    root.innerHTML = getStarPage()
    
    // 加減乘除計算機
    let but1 = document.getElementById("but1")
    but1.onclick = function(){
        let a1 = parseInt(document.getElementById("a1").value)
        let b1 = parseInt(document.getElementById("b1").value)
        let op1 = document.getElementById("op1").value

        let data = {
            "a1" : a1,
            "b1" : b1,
            "op1" : op1
        }

        axios.post("http://localhost/Hw/Hw12_CalAvg/cal1.php",Qs.stringify(data))
        .then(res => {
            let re_cal1 = res['data']
            console.log(re_cal1)

            let Sans1 =  document.getElementById("Sans1")
            Sans1.innerHTML = re_cal1

        })
        .catch(err => {
            console.error(err); 
        })
    }

    // 成績判斷
    let but2 = document.getElementById("but2")
    but2.onclick = function(){
        let a2 = parseInt(document.getElementById("a2").value)
        let b2 = parseInt(document.getElementById("b2").value)
        let c2 = parseInt(document.getElementById("c2").value)

        let data = {
            "a2" : a2,
            "b2" : b2,
            "c2" : c2
        }

        axios.post("http://localhost/Hw/Hw12_CalAvg/avg1.php",Qs.stringify(data))
        .then(res => {
            let re_avg1 = res['data']
            console.log(re_avg1)

            let Sans2 = document.getElementById("Sans2")
            Sans2.innerHTML = re_avg1
            
            if (re_avg1 >= 60) {
                Sans2.style.borderColor = "rgb(52, 255, 29)"
                Sans2.style.color = "rgb(52, 255, 29)"
            } else {
                Sans2.style.borderColor = "red"
                Sans2.style.color = "rgb(255, 149, 149)"
            }
        })
        .catch(err => {
            console.error(err); 
        })
    }

    // 累加
    let but3 = document.getElementById("but3")
    but3.onclick = function(){
        let a3 = parseInt(document.getElementById("a3").value)
        let b3 = parseInt(document.getElementById("b3").value)

        let data = {
            "a3" : a3,
            "b3" : b3
        }

        axios.post("http://localhost/Hw/Hw12_CalAvg/adder.php",Qs.stringify(data))
        .then(res => {
            let re_adder = res['data']
            console.log(re_adder)

            let Sans3 = document.getElementById("Sans3")
            Sans3.innerHTML = re_adder
        })
        .catch(err => {
            console.error(err); 
        })
    }

    // 最大公因數
    let but4 = document.getElementById("but4")
    but4.onclick = function(){
        let a4 = parseInt(document.getElementById("a4").value)
        let b4 = parseInt(document.getElementById("b4").value)

        let data = {
            "a4" : a4,
            "b4" : b4
        }

        axios.post("http://localhost/Hw/Hw12_CalAvg/factor.php",Qs.stringify(data))
        .then(res => {
            let re_factor = res['data']
            console.log(re_factor)

            let Sans4 = document.getElementById("Sans4")
            Sans4.innerHTML = re_factor
        })
        .catch(err => {
            console.error(err); 
        })
    }
}
