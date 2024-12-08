let products;
const wrapper = document.getElementById("products_wrapper");
const loading = document.getElementById("loading");
loading.style.display = "block";
axios
  .get("https://fakestoreapi.com/products")
  .then((res) => {
    products = res.data;
    products.map((info) => {
      wrapper.innerHTML += `
            <div class="card" style="width: 18rem;cursor:pointer" onclick="getProduct(${info.id})">
                <img style="height: 210px;" src="${info.image}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${info.title}</h5>
                    <button href="" class="btn btn-primary">Buy</button>
                </div>
            </div>
        `;
    });
    loading.style.display = "none";
  })
  .catch((err) => {
    console.log(err);

    loading.style.display = "none";
    wrapper.innerHTML = `<p style="color: red;">Xatolik yuz berdi, ma'lumotni yuklab bo'lmadi.</p>`;
  });

function getProduct(id) {
  window.location.href = "product.html?productId=" + id;
}
