fetch('https://5d76bf96515d1a0014085cf9.mockapi.io/product')
    .then(response => response.json())
    .then(productData => productData.forEach(element => {
        console.log(productData)
        if (element.id <= 5) {
            document.getElementById("clothing-grid").innerHTML += `
        <div class="product-card">
        <a href="details.html?id=${element.id}">
        <img class="product-image" src="${element.preview}" alt="Women Blue Solid Shirt Dress Pic"></a>
        <div class="product-meta">
        <h4>${element.name}</h4>
        <h5>${element.brand}</h5>
        <p>Rs ${element.price}</p>
        </div>
        </div>
       `
        }
        else {
            document.getElementById("accessory-grid").innerHTML += `
            <div class="product-card">
            <a href="details.html?id=${element.id}">
            <img class="product-image" src="${element.preview}" alt="Women Blue Solid Shirt Dress Pic"></a>
            <div class="product-meta">
            <h4>${element.name}</h4>
            <h5>${element.brand}</h5>
            <p>Rs ${element.price}</p>
            </div>
            </div>
           `

        }

    }));


let sliderImg = document.getElementById("sliderImg");

let btn = document.getElementById("btn");

let arrayOfImages = [];
arrayOfImages.push('96OnkX7.png');
arrayOfImages.push('KtGxwnN.png');
arrayOfImages.push('sfjg9R8.png');


arrayOfImages.push('p0wdadG.png');





arrayOfImages.forEach(function (item, id) {
    img = document.createElement("p");
    img.className = "SliderImg";
    img.src = id;
    var div = document.getElementById("slider");
    div.appendChild(img);
    (function (item) {
        img.addEventListener("click", function () {

            sliderImg.src = item;

        })
    })(item);


    x = document.querySelectorAll(".SliderImg");
    x.forEach(check => {
        check.addEventListener('click', () => {
            document.querySelector(".activeslide")?.classList.remove('activeslide');

            check.classList.add("activeslide")

        })
    })
})


let show = document.getElementById("hamburger");

show.addEventListener("click", () => {
    let box = document.getElementById("sidebar");
    if (box.style.display === 'none') {
        box.style.display = 'block'
        box.classList.add("active")
    }
    else {
        box.style.display = 'none'
        box.classList.remove("active")
    }
})