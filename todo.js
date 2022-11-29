const todoform = document.querySelector("#todoform")
const btn = document.querySelector("#btn")

btn.addEventListener("click", function(e){
    e.preventDefault();
   
    const form = new FormData(todoform);
    console.log(form);
    
}

)