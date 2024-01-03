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
<div class="description">${description}</div>
<div class="buy_add">
<button class="cook_id">Cook Id : ${cookId}</button>
<button class="add_cart">Add to Cart</button>
</div>`;
foodCardsContainer.append(card);
}

);
  });
