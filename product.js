const urlParams = new URLSearchParams(window.location.search);
const productId = urlParams.get("productId");

console.log(productId);

const product = document.getElementById("card");

axios
  .get(`https://fakestoreapi.com/products/${productId}`)
  .then((res) => {
    product.innerHTML = `
     <div class="card-content">
        <div class="product-image">
          <img
            src="${res.data.image}"
            alt="product photo"
          />
        </div>
        <div class="product-info">
          <h1 class="product-title">${res.data.title}</h1>
          <p class="product-price">
            ${res.data.price}
          </p>
          <div class="product-description">
            <h2>PRODUCT DESCRIPTION</h2>
            <p>
              ${res.data.description}
            </p>
          </div>
          <div class="product-details">
            <p><span>Category</span> ${res.data.category}</p>
            <p><span>Rate -</span> ${res.data.rating.rate}</p>
            <p><span>Count</span> ${res.data.rating.count}</p>
          </div>
          
        </div>
      </div>
`;
  })
  .catch((err) => {
    console.log(err);
  });
