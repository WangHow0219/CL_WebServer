window.onload = function(){
    // CL3
    let but3 = document.getElementById("but3")
    but3.onclick = function(){
        let a3 = document.getElementById("a3")
        let b3 = document.getElementById("b3")
        let Vans3 = 0
        let dx3 = 0.00001
        let x3 = 0
        for(x3=parseInt(a3.value); x3<parseInt(b3.value); x3=x3+dx3){
            Vans3 = Vans3 + (x3*x3+1)*dx3
        }
        let Sans3 = document.getElementById("Sans3")
        Sans3.innerHTML = Vans3
    }
    // CL4
    let but4 = document.getElementById("but4")
    but4.onclick = function(){
        let a4 = document.getElementById("a4")
        let b4 = document.getElementById("b4")
        let Vans4 = 0            
        a4 = parseInt(a4.value)
        b4 = parseInt(b4.value)
        do{
            r4 = a4 % b4
            a4 = b4
            b4 = r4
        } while(r4 != 0)
        Vans4 = a4
        let Sans4 = document.getElementById("Sans4")
        Sans4.innerHTML = Vans4
    }
    // CL5
    let but5 = document.getElementById("but5")
    but5.onclick = function(){            
        let score5 = document.getElementsByName("score5")
        let scoreAry5 = new Array()
        for (let i = 0; i < score5.length; i++){
            scoreAry5.push(parseInt(score5[i].value))
        }
        let sum5 = 0
        for (let k = 0; k < scoreAry5.length; k++){
            sum5 = sum5 + scoreAry5[k]
        }
        let avgV5 = sum5 / scoreAry5.length
        let Sans5 = document.getElementById("Sans5")
        Sans5.innerHTML = avgV5
    }
}
