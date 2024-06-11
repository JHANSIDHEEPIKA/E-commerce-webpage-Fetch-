const productsBtn = document.querySelector(".products-btn");

const productsContainer = document.querySelector('.products-container')

const API = "https://fakestoreapi.com/products";

productsBtn.addEventListener('click', async () => {
    // alert('hello')
    try {
        const dbData = await fetch(API);
        const result = await dbData.json();
        
        // const firstProduct = result[0]
        // console.log(firstProduct)
        
        result.forEach((product) =>{
            let {category, description, image, price, rating, title } = product;

            let html = 
        `
        <div class = "content-container rounded p-3">
           <h4>Name: ${title}</h4>
           <hr /> 
           <div class = "d-flex justify-content-aroundS">
              
              <strong>Category: ${category}</strong>
              <strong>Price: &#8377 ${price} </strong>
              <strong>Rating: ${rating}</strong>
              
           </div>
           <hr />
           <img  class = "product-image" src = ${image} alt ="product-image" />
           <p class = "mt-3"> <span class= "text-danger">About: </span> ${description} </p>
        </div>
        `;
        productsContainer.innerHTML += html;
        }
    )
    // console.log(product);
        

        
    } catch (error) {
        console.log(error);
    }


    

});



