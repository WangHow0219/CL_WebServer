export default function UpdInputPage(){
    console.log("UpdInputPage")
    let id = document.getElementsByName("id")
    let idValue
    for (let i = 0; i < id.length; i++) {
        if (id[i].checked) {
            idValue = id[i].value
        }
    }
    console.log("id:" + idValue)
    
// 顯示修改畫面 (post查詢要修改的ID)
    console.log("Show Upd")
    let data = {
        "id":idValue
    }
    console.log("EEEEE")
    axios.post("http://localhost/CL/CL12_phpDB/DoSek.php",Qs.stringify(data))
    .then(res => {
        console.log("999")
        let response = res['data'];
        switch (response['status']) {
            case 200:
            
            let rows = response['result'];
            console.log(rows)

            let UpdPage = `* 請輸入新的資料 *<br>`
            rows.forEach(element => {
                UpdPage += `姓名 : <input type="text" id="name" value=` + element['name'] + `><br>`
                UpdPage += `電話 : <input type="text" id="tel" value=` + element['tel'] + `><br>`
                UpdPage += `住址 : <input type="text" id="addr" value=` + element['addr'] + `><br>`
            })
            UpdPage += `<button id="DoUpd">確認修改</button>`

            let content = document.getElementById("content")
            content.innerHTML = UpdPage
            console.log(document.getElementById("DoUpd"))

            // 修改資料
            let DoUpd = document.getElementById("DoUpd")
            console.log(DoUpd)
            DoUpd.onclick = function(){
                console.log("Do Update")
                let data = {
                    "id":idValue,
                    "name":document.getElementById("name").value,
                    "tel":document.getElementById("tel").value,
                    "addr":document.getElementById("addr").value,
                }
                axios.post("http://localhost/CL/CL12_phpDB/DoUpd.php",Qs.stringify(data))
                .then(res => {
                    console.log("DoUpd")
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
        console.log("ERRO")
        console.error(err); 
    })
}