// http://localhost/Hw/Hw12_CalAvg/getStarPage.js
export default function getStarPage(){
    let starPage = `
    <div id="box1" class="box">
    <h1>加減乘除計算機</h1>
        <input type="text" id="a1" class="inpbox" value="6">
        <select id="op1" class="select">
            <option value="+">+</option>
            <option value="-">-</option>
            <option value="*">*</option>
            <option value="/">/</option>
        </select>
        <input type="text" id="b1" class="inpbox" value="3">
        = 
        <span id="Sans1"  class="Sans">0</span>
        <br>
        <button id="but1" class="but">計算</button>
    </div>

    <div id="box2" class="box">
    <h1>成績判斷</h1>
        國文 : <input type="text" class="inpbox" id="a2" value="60"><br>
        英文 : <input type="text" class="inpbox" id="b2" value="70"><br>
        數學 : <input type="text" class="inpbox" id="c2" value="80"><br>
        -------------------------------------
        <br>
        平均 : <div id="Sans2" class="Sans">0</div><br>
        <button id="but2" class="but">計算</button>
    </div>

    <div id="box3" class="box">
    <h1>累加器</h1>
        頭 : <input type="text" class="inpbox" id="a3" value="1"><br>
        尾 : <input type="text" class="inpbox" id="b3" value="5"><br>
        -------------------------------------
        <br>
        結果 : <div id="Sans3" class="Sans">0</div><br>
        <button id="but3" class="but">計算</button>
    </div>

    <div id="box4" class="box">
    <h1>最大公因數</h1>
        A = <input type="text" class="inpbox" id="a4" value="24"><br>
        B = <input type="text" class="inpbox" id="b4" value="16"><br>
        ------------------------------------<br>
        最大公因數為 : <br>
        <div id="Sans4" class="Sans">0</div><br>
        <button id="but4" class="but">計算</button>
    </div>

    `
    return starPage
}
