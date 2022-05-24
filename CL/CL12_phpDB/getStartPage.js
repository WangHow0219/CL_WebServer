// http://localhost/CL/CL12_phpDB/getStartPage.js
export default function getStarPage(){
    let StartPage = `
    <button id="ins">新增</button>
    <button id="upd">修改</button>
    <button id="del">刪除</button>
    <button id="sek">查詢</button>
    <br>
    ------------------------------------------
    <br>
    <div id="content"></div>
    `
    return StartPage
}
