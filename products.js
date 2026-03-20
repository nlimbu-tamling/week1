const products =[
    {
        id: 1,
        name:"UCLan Red T-shirt",
        price:20,
        stock:10,
        image:"resources/images/tshirts/tshirt1.jpg",
        description:"Offficil red UCLan T-sirt"
    },
    {
        id: 2,
        name:"UCLan Green T-shirt",
        price:20,
        stock:8,
        image:"resources/images/tshirts/tshirt2.jpg",
        description:"Offficil green UCLan T-sirt"
    },
    {
        id: 3,
        name:"UCLan Dark Blue T-shirt",
        price:22,
        stock:6,
        image:"resources/images/tshirts/tshirt3.jpg",
        description:"Premium dark blue UCLan T-sirt"
    },
    {
        id: 4,
        name:"UCLan Light Blue Cotton T-shirt",
        price:18,
        stock:12,
        image:"resources/images/tshirts/tshirt4.jpg",
        description:"Light Blue cotton UCLan T-sirt"
    },
    {
        id: 5,
        name:"UCLan Pink T-shirt",
        price:21,
        stock:5,
        image:"resources/images/tshirts/tshirt5.jpg",
        description:"Limited edition pink UCLan T-sirt"
    },
    {
        id: 6,
        name:"UCLan Yellow T-shirt",
        price:19,
        stock:0,
        image:"resources/images/tshirts/tshirt6.jpg",
        description:"Bright yellow summer UCLan T-sirt"
    },
    {
        id: 7,
        name:"UCLan Navy T-shirt",
        price:20,
        stock:7,
        image:"resources/images/tshirts/tshirt7.jpg",
        description:"Classic Navy UCLan T-sirt"
    },
    {
        id: 8,
        name:"UCLan Grey T-shirt",
        price:20,
        stock:9,
        image:"resources/images/tshirts/tshirt8.jpg",
        description:"Soft Grey everyday UCLan T-sirt"
    },
    {
        id: 9,
        name:"UCLan MaroonT-shirt",
        price:23,
        stock:4,
        image:"resources/images/tshirts/tshirt9.jpg",
        description:"Premiunm Maroon UCLan T-sirt"
    }];
    
    const productList = document .getElementById("product-list");
    products.forEach(product => {
        function viewItem(name, price, image) {
            const product={
                name: name,
                price: price,
                image:image,
            };
            localStorage.setItem("selectProduct", JSON.stringify(product));
            window.location.href ="item.html";
        }
        const productCard = document.createElement("div");
        productCard.classList.add("product-card");

        productCard.innerHTML = `
        <img src="${product.image}" width="200">
        <h3>${product.name}</h3>
        <p>Price:€${product.price}</p>
        <p>${product.description}</p>
        <p>
            ${product.stock >0 ? "In Stock" : "Out of Stock"}
        </p>
        <button
         ${product.stock  ===0 ?  "disabled" : ""}
         onclick="addToCart(${product.id}, '${product.name}', ${product.price}, '${product.image}')">
        Add to Cart
        </button>
        `;
productList.appendChild(productCard);
        });

        function addToCart(id, name, price, image) {

            let cart=JSON.parse(localStorage.getItem("cart")) || [];

            const existingItem=cart.find(item => item.id === id);
            
            if (existingItem) {
             existingItem.quantity += 1;
            } else {
                cart.push({
                    id:id,
                    name:name,
                    price:Number(price),
                    image:image,
                    quantity: 1
                });
            }
            localStorage.setItem("cart", JSON.stringify(cart));

            alert("Product added to cart!");
        }

