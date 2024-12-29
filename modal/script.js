let openModal = document.getElementById("openModal");
let modal = document.getElementById("modal-content");
let cancel = document.getElementById("cancel")
let closeModal = document.getElementById("closeModal")


openModal.onclick = function(){
    modal.style.display = "block";
    setTimeout(function(){
        modal.classList.add('show');
    },10)
}

cancel.onclick = function(){
    modal.classList.remove('show');
    setTimeout(function(){
        modal.style.display = "none";
       
    },500)
}

closeModal.onclick = function(){
    modal.classList.remove('show');
    setTimeout(function(){
        modal.style.display = "none";
       
    },500)
}

window.onclick = function(event){
    if(event.target == modal){
        modal.classList.remove('show');
        setTimeout(function(){
            modal.style.display = "none";
           
        },500)
    }
}