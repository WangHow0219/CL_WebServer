// http://localhost/CL/CL12_phpDB/index.js
import getStarPage from "http://localhost/CL/CL12_phpDB/getStartPage.js";
import showAddPage from "http://localhost/CL/CL12_phpDB/showAddPage.js";
import showUpdPage from "http://localhost/CL/CL12_phpDB/showUpdPage.js"

window.onload = function(){
    let root = document.getElementById("root")
    root.innerHTML = getStarPage()
// ADD
    let add = document.getElementById("add")
    add.onclick = function(){
        showAddPage()
    }
// UPD
    let upd = document.getElementById("upd")
    upd.onclick = function(){
        showUpdPage()
    }

// DEL
    let del = document.getElementById("del")
    del.onclick = function(){
        console.log("del")
        axios.post("http://localhost/CL/CL12_phpDB/DoSek.php")
        .then(res => {
            let response = res['data'];
            switch (response['status']) {
                case 200:
                 // 查詢
                    console.log("DoSek")
                    let rows = response['result'];
                    let str = `<table>`;
                    str += "<div>* 請選擇要'<b>刪除</b>'的資料 *</div>";
                    rows.forEach(element => {
                        str += "<tr>";
                        str += "<td>" + `<input type="radio" name="id" value="` + element['id'] + `">` + "</td>";
                        str += "<td>" + element['name'] + "</td>";
                        str += "<td>" + element['tel'] + "</td>";
                        str += "<td>" + element['addr'] + "</td>";
                        str += "</tr>";
                    });
                    str += `</table>`;
                    str += `<button id="Dodel">刪除</button>`
                    document.getElementById("content").innerHTML = str
                // 刪除
                    document.getElementById("Dodel").onclick = function(){
                        let id = document.getElementsByName("id")
                        let idValue
                        for (let i = 0; i < id.length; i++) {
                            if (id[i].checked) {
                                idValue = id[i].value
                            }
                        }
                        let data = {
                            "id":idValue
                        }
                        axios.post("http://localhost/CL/CL12_phpDB/DoDel.php",Qs.stringify(data))
                        .then(res => {
                            console.log("DoDel")
                            let response = res['data']
                            content.innerHTML = response['message']
                        })
                        .catch(err => {
                            console.error(err);
                        })
                    }
                    break;
                default:
                    document.getElementById("content").innerHTML = response['message']
                    break;
            }
        })
        .catch(err => {
            console.error(err); 
        })
    }
// SEK
    let sek = document.getElementById("sek")
    sek.onclick = function(){
        console.log("sek")
        axios.get("http://localhost/CL/CL12_phpDB/DoSek.php")
        .then(res => {
            let response = res['data']
            let str;
            switch (response['status']) {
                case 200:
                    let rows = response['result']
                    str = `<table>`
                    rows.forEach(element => {
                        str += "<tr>"
                        str += "<td>" + element['id'] + "</td>"
                        str += "<td>" + element['name'] + "</td>"
                        str += "<td>" + element['tel'] + "</td>"
                        str += "<td>" + element['addr'] + "</td>"
                        str += "</tr>"
                    });
                    str += `</table>`
                    break;
                default:
                    str = response['message']
                    break;
            }
            const content = document.getElementById("content")
            content.innerHTML = str
        })
        .catch(err => {
            console.error(err); 
        })
    }
}
