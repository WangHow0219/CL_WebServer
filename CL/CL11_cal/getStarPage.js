export default function getStarPage(){
    let starPage = `
    <div id="box1">
        <h1>加減乘除計算機</h1>
        <input type="text" id="a1" class="inpbox1">
        <select id="op1">
            <option value="+">+</option>
            <option value="-">-</option>
            <option value="*">*</option>
            <option value="/">/</option>
        </select>
        <input type="text" id="b1" class="inpbox1">
        = 
        <span id="Sans1"></span>
    </div>
    `
    return starPage
}
