function mostrarDropDown(){
    document.getElementsByClassName("menudropdown-conteudo")[0].classList.toggle("mostrarMenuDropdown");
    window.onclick = function(event){
        if(!event.target.matches('.btndropdown')){
            var dropdons = document.getElementsByClassName("menudropdown-conteudo");
            var i;
            for(i=0; i<dropdons.length; i++){
                var opened = dropdons[i];
                if(opened.classList.contains('mostrarMenuDropdown')){
                    opened.classList.remove('mostrarMenuDropdown');
                }
            }
        }
    };
    
}



//Segundo DropDown

function mostrarDropDown2(){
    document.getElementsByClassName("menudropdown-conteudo2")[0].classList.toggle("mostrarMenuDropdown2");
    window.onclick = function(events){
    if(!events.target.matches('.btndropdown2')){
        var iteen = document.getElementsByClassName("menudropdown-conteudo2");
        var a;
        for(a=0; a<iteen.length; a++){
            var abert = iteen[a];
            if(abert.classList.contains('mostrarMenuDropdown2')){
                abert.classList.remove('mostrarMenuDropdown2');
            }
        }
    }
}
}