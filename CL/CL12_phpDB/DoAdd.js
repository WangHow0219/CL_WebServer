export default function DoAdd_js(){
    console.log("DoAdd_js")
        let data = {
            "id":document.getElementById("id").value,
            "name":document.getElementById("name").value,
            "tel":document.getElementById("tel").value,
            "addr":document.getElementById("addr").value,
        }
        let str
        axios.post("http://localhost/CL/CL12_phpDB/DoAdd.php",Qs.stringify(data))
        .then(res => {
            let response = res['data']
            str = response['message']
            console.log(str)
            content.innerHTML = str
        })
        .catch(err => {
            console.error(err); 
            content.innerHTML = err
        })
}