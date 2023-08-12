function muestra_oculta(id){
    let div = document.getElementById(id);
    if(div.style.display == "none"){
        div.style.display="flex";
    }
    else{
        div.style.display = "none"
    }
}

function toggle_mnu() {
    let div = document.getElementById("mnu");
    if(div.style.left == "-200%"){
        div.style.left = "0";
    }else{
        div.style.left = "-200%";
    }
}