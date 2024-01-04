const loginBtn = document.querySelector(".log_butt");

loginBtn.addEventListener("click",signUp);
function signUp()
{
    const name=document.querySelector("#name").value;
    const place=document.querySelector("#place").value;
    const contact=document.querySelector("#tell").value;
    const email=document.querySelector("#email").value;
    const password=document.querySelector("#password").value;
    const role=document.querySelector("#role").value;

    fetch("http://localhost:5010/users/register",{
        method:"POST",
        headers: {
                "Content-Type": "application/json",
              },
        body:JSON.stringify({username:name, email, contact, place, password, role})
    }).then((res)=>res.json()).then((data)=>window.location.href="../public/page2.html")

}



