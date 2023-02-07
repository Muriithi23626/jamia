   // Render products to HTML
   function renderProducts(products) {
    var productList = document.getElementById("productContainer");
    for (var i = 0; i < products.length; i++) {
      var product = products[i];
      
      // Create the product container
      var productContainer = document.createElement("div");
      productContainer.classList.add("product-container");
      
      // Add the product image
      var productImage = document.createElement("img");
      productImage.src = product.image;
      productImage.alt = product.name;
      productContainer.appendChild(productImage);
      
      // Add the product name
      var productName = document.createElement("h3");
      productName.textContent = product.name;
      productContainer.appendChild(productName);
      
      // Add the product price
      var productPrice = document.createElement("p");
      productPrice.textContent = "$" + product.price;
      productContainer.appendChild(productPrice);
      
      // Add the product container to the product list
      productList.appendChild(productContainer);
    }
  }
  
    // On page load, render all products
    $(document).ready(function () {
      renderProducts(products);
    });



    var products = [
      { name: "Piano", image: "https://github.com/Muriithi23626/jamia/raw/main/WhatsApp%20Image%202023-02-07%20at%2017.26.27.jpeg", price: 10, category: "Electronics", location: "USA" },
      { name: " Personal cars",image: "https://github.com/Muriithi23626/jamia/raw/main/WhatsApp%20Image%202023-02-07%20at%2017.26.32.jpeg", price: 20, category: "Vehicles", location: "UK" },
      { name: " Generator",image: "https://github.com/Muriithi23626/jamia/raw/main/WhatsApp%20Image%202023-02-07%20at%2017.26.30%20(1).jpeg", price: 30, category: "Electronics", location: "Canada" },
      { name: "Power Generator", image: "https://github.com/Muriithi23626/jamia/raw/main/WhatsApp%20Image%202023-02-07%20at%2017.26.29.jpeg", price: 10, category: "Electronics", location: "USA" },
      { name: "Ladies Dress",image: "https://github.com/Muriithi23626/jamia/raw/main/WhatsApp%20Image%202023-02-07%20at%2017.26.30.jpeg", price: 20, category: "Fashion", location: "UK" },
      { name: "Woofer",image: "https://github.com/Muriithi23626/jamia/raw/main/WhatsApp%20Image%202023-02-07%20at%2017.26.31%20(2).jpeg", price: 30, category: "Clothings", location: "Canada" },
      { name: "Men suit",image: "https://github.com/Muriithi23626/jamia/raw/main/WhatsApp%20Image%202023-02-07%20at%2017.26.31%20(1).jpeg", price: 40, category: "Electronics", location: "USA" },
      { name: "Generator", image: "https://github.com/Muriithi23626/jamia/raw/main/WhatsApp%20Image%202023-02-07%20at%2017.26.31%20(1).jpeg", price: 10, category: "Electronics", location: "USA" },
      { name: " Men shoes",image: "https://www.example.com/product1.jpg", price: 20, category: "Fashion", location: "UK" },
      { name: " Spoons",image: "https://www.example.com/product1.jpg", price: 30, category: "Home & Kitchen", location: "Canada" },
      { name: " Sockets",image: "https://www.example.com/product1.jpg", price: 40, category: "Electronics", location: "USA" },
      { name: " Piano",image: "https://www.example.com/product1.jpg", price: 40, category: "Electronics", location: "USA" },
    ];

   // sorting products
   

   const searchInput = document.getElementById("searchInput");
   const searchButton = document.getElementById("searchButton");
   const resultsList = document.getElementById("results");
   
   searchButton.addEventListener("click", function() {
     const query = searchInput.value;
     const results = searchProducts(products, query);
     resultsList.innerHTML = "";
     results.forEach(product => {
       const item = document.createElement("li");
       item.innerText = `${product.name} (${product.category})`;
       resultsList.appendChild(item);
     });
   });
  

  
  

    


   
   
    







  

  



