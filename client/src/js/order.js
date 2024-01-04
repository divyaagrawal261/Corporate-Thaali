const storedToken = localStorage.getItem('accessToken');
const token=JSON.parse(storedToken).token;
const container=document.querySelector(".ordersContainer");

fetch("https://corporate-thaali-backend.onrender.com/order/all",{
    method:"POST",
    headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
    }
})
  .then((res) => res.json())
  .then((foodItems) => 
    {
        foodItems.forEach(order=>{
            const card=document.createElement("div")

            const table=document.createElement("table");
            table.className="tablee";
            table.innerHTML=`<tr class="table_head">
            <th class="food_id">Food ID</th>
            <th class="cook_id">Cook ID</th>
            <th class="title">Title</th>
            <th class="quantity">Quantity</th>
            <th class="price">Price(1)</th>
            <th class="amount">Amount</th>
        </tr>`
            
        order.items.forEach(item=>{
            const Amt=item.quantity*item.price
            const tableRow=`<tr>
            <td class="food_id_det">${item.foodId}</td> 
            <td class="cook_id_det">${item.cookId}</td>
            <td class="title_det">${item.title}</td>
            <td class="quantity_det">${item.quantity}</td>
            <td class="price_det">${item.price}</td>
            <td class="amount_det">${Amt}</td>
        </tr>`
        table.innerHTML=table.innerHTML+tableRow;
        })

            card.className="order_table";
            card.innerHTML=`<div class="order_head">
            <div class="order_id">Order ID : ${order.orderId} </div>
            <div class="date">Date : ${order.createdAt}</div>
            <div class="tot_amount">Total Amount : ${order.amount} Rupees only </div>
        </div>`

        card.append(table);

        container.append(card);
        })
    })
