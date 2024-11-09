//To do Make 

let string="";
let buttons=document.querySelectorAll('.button');

Array.from(buttons).forEach((button)=>{
    button.addEventListener('click',(e)=>{
        //For calculation
        if(e.target.innerHTML=='='){
            string=eval(string);
            document.querySelector('input').value=string;
        }
        //For clear
        else if(e.target.innerHTML=='C'){
            string="";
            document.querySelector('input').value=string;
        }
        //For general flow
        else{
            console.log(e.target);
            string=string+ e.target.innerHTML;
            document.querySelector('input').value=string;
        }
       
    })
})