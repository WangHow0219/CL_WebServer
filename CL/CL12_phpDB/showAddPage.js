import DoAdd_js from "http://localhost/CL/CL12_phpDB/DoAdd.js"
export default function showAddPage(){
    console.log("Sadd")
        let addPage = `
        學號 : <input type="text" id="id"><br>
        姓名 : <input type="text" id="name"><br>
        電話 : <input type="text" id="tel"><br>
        住址 : <input type="text" id="addr"><br>
        <button id="DoAdd">新增</button>    
        `
        let content = document.getElementById("content")
        content.innerHTML = addPage
// DoAdd
        let DoAdd = document.getElementById("DoAdd")
        DoAdd.onclick = function(){
            DoAdd_js()
    }
}