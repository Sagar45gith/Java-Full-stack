function register() {
    let user = document.getElementById("reguser").value;
    let pass = document.getElementById("regpass").value;
    if(user===""||pass===""){
        alert("Fill the details nga");
        return ;
    }
    localStorage.setItem("username",user);
    localStorage.setItem("password",pass);
    alert("Registered successfully");
    window.location.href="index.html";
}

function login(){
    let user = document.getElementById("loginuser").value;
    let pass = document.getElementById("loginpass").value;

    let suser = localStorage.getItem("username",user);
    let spass = localStorage.getItem("password",pass);

    if(user === suser && pass === spass){
        
        window.location.href="dashboard.html";
    }
    else{
        alert("Vote chorii");
    }
}

//dashboard username show
window.onload = function(){
    let user = localStorage.getItem("username");
    document.getElementById("welcomeuser").innerText="hello"+" "+user;
}

setInterval(() => {
    let now = new Date();
    document.getElementById("clock").innerText=now.toLocaleTimeString();
}, 1000);

//todo list
let input=document.getElementById("task-input");
let btn=document.getElementById("add-btn");
let todoList=document.getElementById("task-list");

function logout(){
    localStorage.removeItem("loginuser");
    window.location.href="index.html";
}


btn.addEventListener("click",function(){
    if(input.value===""){
        alert("Enter a task");
        return ;
    }
    let li=document.createElement("li");
    li.innerText=input.value;
    li.addEventListener("click",function(){
        li.classList.toggle("done");
    });
    todoList.appendChild(li);
    input.value="";
});


//ENETR KEY Support
document.addEventListener("keydown",(e)=>{
    if(e.key==="Enter"){
        btn.click();
    }
});

//dark mode
document.getElementById("modeBtn").addEventListener("click",function(){
    document.body.classList.toggle("dark-mode");
});