let shop = document.getElementById('shop'); 

let shopItemsData = [
    {
        id : 0,
        name : "Men's Cap",
        price : 45,
        desc : "claudio-schwarz",
        img : "images/claudio-schwarz-PH8GUKG-Do0-unsplash.jpg"
    },
    {
        id : 1,
        name : "Leather Cap",
        price : 100,
        desc : "adrian-ordonez",
        img : "images/adrian-ordonez-P0W27GRvyww-unsplash.jpg"
    },
    {
        id : 2,
        name : "Jeans",
        price : 120,
        desc : "eduardo-pastor-3oejsU5OQVk",
        img : "images/eduardo-pastor-3oejsU5OQVk-unsplash.jpg"
    },
    {
        id : 3,
        name : "Men's Cap",
        price : 145,
        desc : "claudio-schwarz",
        img : "images/claudio-schwarz-PH8GUKG-Do0-unsplash.jpg"
    },
    {
        id : 4,
        name : "Men's Cap",
        price : 145,
        desc : "claudio-schwarz",
        img : "images/claudio-schwarz-PH8GUKG-Do0-unsplash.jpg"
    },
]
let basket = JSON.parse(localStorage.getItem("data")) || [];
let generateShop = ()=>{
    return shop.innerHTML = shopItemsData.map((x)=>{
        let {id, name, price, desc, img} = x;
        let search = basket.find((x)=> x.id === id) || [];
        return ` <div id = product-id-${id} class="item">
        <img width="219" src=${img} alt="">
        <div class="details">
            <h3>${name}</h3>
            <p>${desc}</p>
            <div class="price-quantity">
                <h2>$ ${price}</h2>
                <div class="buttons">
                    <i onclick = "decrement(${id})" class="bi bi-dash-lg"></i>
                    <div id = ${id} class="quantity">
                    ${search.item === undefined ? 0 : search.item}
                    </div>
                    <i onclick = "increment(${id})" class="bi bi-plus-lg"></i>
                </div>
            </div>
        </div>
    </div>`
    }).join("")
}
generateShop();

let increment = (id)=>{
    // let selectedItem = id;
    let search = basket.find((x)=> x.id === id);
    
    if(search === undefined){
        basket.push({
            id : id,
            item : 1
        })
    }else{
        search.item += 1;
    }
    localStorage.setItem("data", JSON.stringify(basket));
    update(id);
}

let decrement = (id)=>{
    // let selectedItem = id;
    let search = basket.find((x)=> x.id === id);
    
    if(search === undefined || search.item === 0) return;
    else{
        search.item -= 1;
    }
    // console.log(basket); 
    localStorage.setItem("data", JSON.stringify(basket))
    update(id);
}

let update = (id)=>{
    let search = basket.find((x)=> x.id === id);
    document.getElementById(id).innerHTML = search.item;
    calculation();
}

let calculation = ()=>{
    let catIcon = document.getElementById('cartCount');
    catIcon.innerHTML = basket.map((x)=> x.item).reduce((x,y)=> x+y,0);
}

calculation();