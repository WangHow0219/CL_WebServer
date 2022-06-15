import UpdInputPage from "http://localhost/CL/CL12_phpDB/DoUpd.js";

export default function showUpdPage(){
    console.log("sUpdP")
    axios.post("http://localhost/CL/CL12_phpDB/DoSek.php")

    .then(res => {
        let response = res['data'];
        switch (response['status']) {
            case 200:
             // 顯示表單
                console.log("DoSek")
                let rows = response['result'];
                let str = `<table>`;
                str += "<div>* 請選擇要'<b>修改</b>'的資料 *</div>";
                rows.forEach(element => {
                    str += "<tr>";
                    str += "<td>" + `<input type="radio" name="id" value="` + element['id'] + `">` + "</td>";
                    str += "<td>" + element['name'] + "</td>";
                    str += "<td>" + element['tel'] + "</td>";
                    str += "<td>" + element['addr'] + "</td>";
                    str += "</tr>";
                });
                str += `</table>`;
                str += `<button id="SUpd">選擇</button>`
                document.getElementById("content").innerHTML = str
             // 修改頁面
                document.getElementById("SUpd").onclick = function(){
                    console.log("ASDASD")
                    UpdInputPage()
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
