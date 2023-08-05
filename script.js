
window.onload=function(){
let task = document.querySelector(".BOX2");

let list = document.querySelector(".line");

let addTask = document.querySelector(".btn");


addTask.addEventListener("click" , ()=>{
    
    list.insertAdjacentHTML(`afterbegin` , `<li>
    
                <i class="fas fa-trash-alt deleteTask"><svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M268 416h24a12 12 0 0 0 12-12V188a12 12 0 0 0-12-12h-24a12 12 0 0 0-12 12v216a12 12 0 0 0 12 12zM432 80h-82.41l-34-56.7A48 48 0 0 0 274.41 0H173.59a48 48 0 0 0-41.16 23.3L98.41 80H16A16 16 0 0 0 0 96v16a16 16 0 0 0 16 16h16v336a48 48 0 0 0 48 48h288a48 48 0 0 0 48-48V128h16a16 16 0 0 0 16-16V96a16 16 0 0 0-16-16zM171.84 50.91A6 6 0 0 1 177 48h94a6 6 0 0 1 5.15 2.91L293.61 80H154.39zM368 464H80V128h288zm-212-48h24a12 12 0 0 0 12-12V188a12 12 0 0 0-12-12h-24a12 12 0 0 0-12 12v216a12 12 0 0 0 12 12z"/></svg></i>
                
                
                <h4>${task.value}</h4>
                
            </li>`);
            
            task.value = "";
            
            let deleteTask = document.querySelectorAll(".deleteTask");
            
            deleteTask.forEach(del =>{
                
                del.addEventListener("click" , ()=>{
                    
                    del.parentElement.remove();
                    
                })
                
            })
            
})}

