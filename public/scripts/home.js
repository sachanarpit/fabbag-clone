//search bar button start
function popupToggle() {
  const popup = document.getElementById("popup");
  popup.classList.toggle("active");
}
// search bar button ends

//search api fetcing

async function searchProduct(name) {
  let res = await fetch(`http://localhost:2349/products/search/${name}`);
  let data = await res.json();
  return data;
}

let main_div = document.getElementById("search_main");

function appendProducts(m) {
  main_div.innerHTML = null;
  m.forEach(({ name, _id, price, price_sign, image_link }) => {
    //   let p = document.createElement("p");
    //   p.innerText = _id;
    let a = document.createElement("a");
    a.href = `http://localhost:2349/products/${_id}`;
    a.innerHTML = `  <div class="search-products">
            <img
              src="${image_link}"
              alt=""
            />
            <p>${name}</p>
            <p>${price_sign} ${price}</p>
          </div><br />`;
    main_div.append(a);
  });
}

async function main() {
  let name = document.getElementById("query").value;
  let products = await searchProduct(name);
  if (products == undefined) {
    return false;
  }
  appendProducts(products);
  console.log(products);
}

function Debaunce(func, delay) {
  main_div.innerHTML = null;
  let name = document.getElementById("query").value;
  if (name.lenght != 0) {
    let img = document.createElement("img");
    img.setAttribute("id", "loader");
    img.src =
      "https://cdn.shopify.com/s/files/1/0052/7551/6995/t/3/assets/s-loading.gif";
    main_div.append(img);
  }
  if (name.lenght < 2) {
    return false;
  }
  setTimeout(() => {
    func();
  }, delay);
}
