export default function startPage(){
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
    return startPage
}