import getStarPage from "http://localhost/CL/CL10_ezPost/getStarPage.js"

window.onload = function(){
    let root = document.getElementById("root")
    root.innerHTML = getStarPage()

    let name = document.getElementById("name")
    name.onkeyup = function(){
        let data1 = { "Name1" : name.value }
        axios.post("http://localhost/CL/CL10_ezPost/sayHello.php",Qs.stringify(data1))
        .then(res => {
            let inpText = res['data'];
            let Sans = document.getElementById('Sans');
            Sans.innerHTML = inpText;
        })
        .catch(err => {
            console.error(err); 
        })
    }
}
