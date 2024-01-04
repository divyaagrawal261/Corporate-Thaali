const storedToken = localStorage.getItem('accessToken');
const token=JSON.parse(storedToken).token;

fetch("http://localhost:5010/food/my",{
method:"POST",
        headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
        }})
  .then((res) => res.json())
  .then((foodItems)=>{
    const parent=document.querySelector(".cardsContainer");
    foodItems.forEach((food)=>{
    const card=document.createElement("div");
    card.className="cook_card";
    card.innerHTML=`<div class="food_cook">
    <img src="../src/assets/carrothalwa.jpg" alt="">
</div>
<br>
<div class="food_tit">${food.title}</div>
<br>
<div class="cook_des">${food.description}</div>`

parent.append(card);
  })})