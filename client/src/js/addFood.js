const storedToken = localStorage.getItem('accessToken');
const token=JSON.parse(storedToken).token;

const submitBtn=document.querySelector(".submitBtn");
submitBtn.addEventListener("click",addFood);
function addFood(event)
{
    event.preventDefault();
    const title=document.querySelector("#productName").value;
    const description=document.querySelector("#productDescription").value;
    const price=document.querySelector("#productPrice").value;

    fetch("http://localhost:5010/food/create",{
        method: "POST",
        headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({title,description,price})
    }).then((res)=>res.json()).then(data=>console.log(data))
}