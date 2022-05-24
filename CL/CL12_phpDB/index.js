// http://localhost/CL/CL12_phpDB/index.js
import getStarPage from "http://localhost/CL/CL12_phpDB/getStartPage.js";
window.onload = function(){
    let root = document.getElementById("root")
    root.innerHTML = getStarPage()

    let ins = document.getElementById("ins")
    ins.onclick = function(){
        console.log("insF")
    }
    let upd = document.getElementById("upd")
    upd.onclick = function(){
        console.log("updF")
    }
    let del = document.getElementById("del")
    del.onclick = function(){
        console.log("delF")
    }
    let sek = document.getElementById("sek")
    sek.onclick = function(){
        console.log("sekF")
        axios.get("http://localhost/CL/CL12_phpDB/DoSek.php")
        .then(res => {
            let response = res['data']
            console.log(response)
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
