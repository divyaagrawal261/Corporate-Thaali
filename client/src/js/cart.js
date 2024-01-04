const storedToken = localStorage.getItem("accessToken");
const token = JSON.parse(storedToken).token;
const container=document.querySelector(".cart_list_1");

fetch("http://localhost:5010/cart/show", {
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
          
          <div class="quants">
              <div class="quantity">
                  Quantity
              </div>
              <div class="number">
                  <input type="number" name="" id="" value="${element.quantity}">
              </div>
          </div>
          
          <div class="price">
              <div class="rupees">
                  <img src="/client/src/assets/rupee.png" alt="">
              </div>
              <div class="rate">${element.price}</div>
          </div>
  
          <button class="cook_id">Cook Id : ${element.cookId}</button>
      </div>
  `;
        container.append(card)
    });
  });
