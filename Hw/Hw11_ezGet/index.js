import getStarPage from "./getStarPage.js"

window.onload = function(){
    let root = document.getElementById("root")
    root.innerHTML = getStarPage()

    let name = document.getElementById("name")

    name.onkeyup = function(){
        let data = name.value

        axios.get("http://localhost/Hw/Hw11_ezGet/Sinput.php",{params:{data}})
        .then(res => {
            let inpText = res['data'];
            const Sans = document.getElementById("Sans");
            Sans.innerHTML = inpText;
        })
        .catch(err =>{
            console.error(err);
        })
    }
}
