

let productDetails = document.getElementById("product-details");


async function fetchProductDetail() {
    const productId = new URLSearchParams(window.location.search).get("id");

    const response = await fetch(`https://5d76bf96515d1a0014085cf9.mockapi.io/product/${productId}`);
    const product = await response.json();
    console.log(product, productId)

    LoadProductDetail(product);

}
fetchProductDetail();



function LoadProductDetail(product) {

    Id = product.id;
    const prewImg = product.photos;
    prewImg.forEach(function (item) {
        img = document.createElement("img");
        img.src = item;
        img.className = "previewImg";
        var div = document.getElementById("preview-wrapper");
        div.appendChild(img);
        (function (item) {
            img.addEventListener("click", function () {
                preview.src = item;
                if (item == 0) { //if last iteration 
                    img.classList.add("green-color");
                }


            })
        })(item);

        x = document.querySelectorAll(".previewImg");
        x.forEach(check => {
            check.addEventListener('click', () => {
                document.querySelector(".active-image")?.classList.remove('active-image');

                check.classList.add("active-image")

            })
        })

    });





    var preview = document.createElement("img");
    preview.src = product.preview;
    var div = document.getElementById("product-preview");
    div.appendChild(preview);


    var title = document.createElement('h1');
    title.innerText = product.name;
    document.getElementById("title").appendChild(title);

    var brand = document.createElement('p');
    brand.innerText = product.brand;
    document.getElementById("title").appendChild(brand);

    var price = document.createElement('p');
    price.innerText = 'Rs ' + product.price;
    document.getElementById("title").appendChild(price);

    var description = document.createElement('p');
    description.innerText = product.description;
    document.getElementById("title").appendChild(description);






    var x = document.createElement("BUTTON");
    var t = document.createTextNode("Click me");
    var btn = document.getElementById("button");
    x.appendChild(t);
    btn.appendChild(x);



    var namesArr = [];

  


    x.onclick = function demo() {
        // console.log(product.name)

        var cardData = [{
            preview: product.preview,
            name: product.name,
            price: product.price,
            id:product.id
        }];
        namesArr.push(cardData);
        localStorage.setItem("userDetails", JSON.stringify(namesArr));

       

        alert("Product is added")


    }

}





