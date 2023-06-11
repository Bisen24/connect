const productData = [
    {
        "id": "1",
        "name": "Men Navy Blue Solid Sweatshirt",
        "preview": "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/08a7b230-ee8f-46c0-a945-4e835a3c01c01541402833619-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-1.jpg",
        "photos": [
            "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/08a7b230-ee8f-46c0-a945-4e835a3c01c01541402833619-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-1.jpg",
            "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/efc3d5b9-1bb3-4427-af53-7acae7af98951541402833591-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-2.jpg",
            "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/c7e58861-3431-4189-9903-9880f5eebd181541402833566-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-3.jpg",
            "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/66490b64-32de-44b4-a6e4-fe36f1c040051541402833548-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-4.jpg",
            "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/957be784-7c5d-4e90-ab9f-0928015b22891541402833645-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-5.jpg"
        ],
        "description": "Navy solid sweatshirt with patchwork, has a round neck, long sleeves, straight hem",
        "size": [
            1,
            1,
            0,
            1,
            0
        ],
        "isAccessory": false,
        "brand": "United Colors of Benetton",
        "price": 2599
    }
]



productData.map((list) => {
    document.getElementById('product').innerHTML += `
    <div class="left-column" id="lf">
            <img id="productImg" src=${list.preview} alt="">
          </div>
          <div class="right-column">
            <div class="product-description">
              <h1 id="name">${list.name}</h1>
              <h4 id="brand">${list.name}</h4>
              <h3>Price: Rs <span id="price">${list.price}</span></h3>
              <div class="description">
                <h3>Description</h3>
                <p id="description">${list.description}</p>
              </div>
              <div class="product-preview">
                <h3>Product Preview</h3>
                <div class="previewImg">
                    <img id="img0" src=${list.photos[0]} alt="" class="active">
                    <img id="img1" src=${list.photos[1]} alt="" class="">
                    <img id="img2" src=${list.photos[2]} alt="" class="">
                    <img id="img3" src=${list.photos[3]} alt="" class="">
                    <img id="img4" src=${list.photos[4]} alt="" class="">
                   
                </div>
              </div>
            </div>
          </div>

          
    
     `
    var element = document.getElementById('img0');
    var element1 = document.getElementById('img1');
    var element2 = document.getElementById('img2');
    var element3 = document.getElementById('img3');
    var element4 = document.getElementById('img4');
    function zero() {
        var el = document.getElementById("lf");
        el.innerHTML = `<img src=${list.photos[0]}>`;
        element4.classList.remove('active');
        element.classList.add('active');
        element2.classList.remove('active');
        element1.classList.remove('active');
        element3.classList.remove('active');
    }
    function one() {
        var el = document.getElementById("lf");
        el.innerHTML = `<img src=${list.photos[1]}>`;
        element1.classList.add('active');
        element.classList.remove('active');
        element4.classList.remove('active');
        element3.classList.remove('active');
        element2.classList.remove('active');

    }
    function two() {
        var el = document.getElementById("lf");
        el.innerHTML = `<img src=${list.photos[2]}>`;

        element2.classList.add('active');
        element1.classList.remove('active');
        element3.classList.remove('active');
        element4.classList.remove('active');
        element.classList.remove('active');
    }
    function three() {
        var el = document.getElementById("lf");
        el.innerHTML = `<img src=${list.photos[3]}>`;

        element3.classList.add('active');
        element2.classList.remove('active');
        element4.classList.remove('active');
        element1.classList.remove('active');
        element.classList.remove('active');
    }
    function four() {
        var el = document.getElementById("lf");
        el.innerHTML = `<img src=${list.photos[4]}>`;

        element4.classList.add('active');
        element3.classList.remove('active');
        element2.classList.remove('active');
        element1.classList.remove('active');
        element.classList.remove('active');
    }
    element.addEventListener("click", zero, false);
    element1.addEventListener("click", one, false);
    element2.addEventListener("click", two, false);
    element3.addEventListener("click", three, false);
    element4.addEventListener("click", four, false);
})





