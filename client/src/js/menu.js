const storedToken = localStorage.getItem('accessToken');
const token=JSON.parse(storedToken).token;

fetch("http://localhost:5010/food/all")
  .then((res) => res.json())
  .then((foodItems) => {
    console.log(foodItems);

    const foodCardsContainer = document.querySelector(".food_1");
    foodItems.forEach((foodItem) => {
      const { foodId, cookId, description, price, title } = foodItem;
      const card = document.createElement("div");
      card.className = "card_1";
      card.innerHTML = `<div class="food_img">
<img src="https://source.unsplash.com/600x400/?${title}" alt="">
</div>
<div class="title">
<div class="food_name">${title}</div>
<div class="price">
<div class="rupees">
<img src="../src/assets/rupee.png" alt="">
</div>
<div class="rate">${price}</div>
</div>
</div>
<div class="food_name" id="foodId">Food ID: ${foodId}</div>
<div class="description">${description}</div>
<div class="buy_add">
<button class="cook_id">Cook Id : ${cookId}</button>
<button class="add_cart" onclick="addToCart(this)">Add to Cart</button>
</div>`;
foodCardsContainer.append(card);
}

);
  });

const cartBtn=document.querySelector(".cart");
const myOrderBtn=document.querySelector(".my_orders");
const profileBtn=document.querySelector(".profile");

cartBtn.addEventListener("click",(event)=>
{
    event.preventDefault();

if(!localStorage.getItem('accessToken'))
{
    window.location.href="../public/page2.html";
}
else
{
    window.location.href="../public/cart.html"
}

})

myOrderBtn.addEventListener("click",(event)=>
{
    event.preventDefault();

if(!localStorage.getItem('accessToken'))
{
    window.location.href="../public/page2.html";
}
else
{
    window.location.href="../public/order.html"
}

})
profileBtn.addEventListener("click",(event)=>
{
    event.preventDefault();

if(!localStorage.getItem('accessToken'))
{
    window.location.href="../public/page2.html";
}
else
{
    window.location.href="../public/profilePage.html"
}

})

function addToCart(button)
{
  const parent=(button.parentElement).parentElement;
  var foodId=parent.querySelector("#foodId").innerHTML;
  foodId=foodId.split(" ")[2];
  fetch("http://localhost:5010/cart/add",{
    method:"POST",
    headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
    },
    body:JSON.stringify({foodId})
  }).then((res)=>res.json()).then((data)=>console.log(data))
}