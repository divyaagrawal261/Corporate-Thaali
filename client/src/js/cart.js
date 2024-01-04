const storedToken = localStorage.getItem("accessToken");
const token = JSON.parse(storedToken).token;
const container=document.querySelector(".cart_list_1");

fetch("https://corporate-thaali-backend.onrender.com/cart/show", {
  method: "POST",
  headers: {
    Authorization: `Bearer ${token}`,
    "Content-Type": "application/json",
  },
})
  .then((res) => res.json())
  .then((foodItems) => {
    
    foodItems.items.forEach(element => {
        console.log(element)

        const card = document.createElement("div");
        card.className = "cart_1";
        card.innerHTML = `<div class="cart_left">
          <img src="/client/src/assets/paneer.jpg" alt="">
      </div>
      <div class="cart_right">
  
          <div class="food_name">${element.title}</div>
          <div class="food_name" id="foodId">Food ID: ${element.foodId}</div>

          
          <div class="quants">
              <div class="quantity">
                  Quantity
              </div>
              <div class="number">
                  <input type="number" name="" id="foodQuantity" value="${element.quantity}">
              </div>
          </div>
          
          <div class="price">
              <div class="rupees">
                  <img src="/client/src/assets/rupee.png" alt="">
              </div>
              <div class="rate">${element.price}</div>
          </div>
  
          <button class="cook_id">Cook Id: ${element.cookId}</button>
      </div>
  `;
        container.append(card)
    });
  });

const orderBtn=document.querySelector(".sign");
orderBtn.addEventListener("click",placeOrder);

function placeOrder()
{
  const items=[];
  const foodItems=document.querySelectorAll(".cart_1");
  foodItems.forEach((item)=>{
    var foodId=item.querySelector("#foodId");
    foodId=(foodId.innerHTML).split(" ")[2];
    var title=item.querySelector(".food_name").innerHTML;
    var quantity=item.querySelector("#foodQuantity").value;
    var price=item.querySelector(".rate").innerHTML;
    var cookId=(item.querySelector(".cook_id").innerHTML).split(" ")[2];

    const food={foodId,cookId,title,price,quantity};
    items.push(food);

  })
  console.log(items);

  fetch("https://corporate-thaali-backend.onrender.com/order/create",{
    method:"POST",
    headers: {
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json'
  },
  body: JSON.stringify({items:items})
  }).then((res)=>res.json()).then((data)=>console.log(data));
}
