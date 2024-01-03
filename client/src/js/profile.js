const storedToken = localStorage.getItem('accessToken');
const token=JSON.parse(storedToken).token;

fetch("http://localhost:5010/users/current",{
    method:"POST",
    headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
    }
}).then((res)=>res.json()).then((data)=>{
    const parent=document.querySelector(".profile-info")
    parent.innerHTML=`<h2>${data.username}</h2>
    <p>${data.uniqueId}</p>
    <p>Email: ${data.email}</p>
    <p>Location: ${data.place}</p>
    <p>Contact: ${data.contact}</p>
    <p>Role: ${data.role}</p>`
});





