
//File Uploaded Code//
let uploadfile = document.getElementById('uploadfile');
var imgurl;

uploadfile.addEventListener('change', (event) => {
    const image = event.target.files[0];

    const reader = new FileReader();

    reader.readAsDataURL(image);

    reader.addEventListener('load', () => {
        imgurl = reader.result;

        img = new Image();
        img.src = imgurl;
        console.log(imgurl);
        thumbnail.src = imgurl;

    });

});



//Global DOM ID'S



let edit_id = null;
let ids = '';

let count = 1;

let product = document.getElementById("product");
let price = document.getElementById("price");
let desc = document.getElementById("desc");

let localget = localStorage.getItem("cart");
let array = localget ? JSON.parse(localget) : []


let quantity = document.getElementById("quantity");
let totals = 0;

let totalarray = [];

let plist = document.getElementById("plist");







//From here you can add product list item//

function AddToList(value, i) {

    if (product.value == "") {
        alert("Please Enter Product");
        return false;
    }
    if (price.value == "") {
        alert("Please Enter Price ");
        return false;
    }
    if (desc.value == "") {
        alert("Please Enter Description ");
        return false;
    }
    if (quantity.value == "") {
        alert("Please Enter Quantity ");
        return false;
    }

    let newarray = [];
    if (edit_id != null) {
        newarray = ({
            price: price.value,
            product: product.value,
            desc: desc.value,
            quantity: quantity.value,
            thumbnail: imgurl,

        });
        array[currentIndex] = newarray
        localStorage.setItem("cart", JSON.stringify(array))
        location.reload();
        console.log(thumbnail.imgurl)


    }

    else {
        array.push({
            price: price.value,
            product: product.value,
            desc: desc.value,
            quantity: quantity.value,
            thumbnail: imgurl == undefined ? "placeholder-image.png" : imgurl,
        });
        localStorage.setItem("cart", JSON.stringify(array))
        location.reload();
    }


}

plist.style.backgroundImage = "url('empty.png')";



//From here after adding product, product will displaying in table //

array.forEach(function (value, i) {


    if (document.querySelector(".product-list") != null) {

        plist.style.background = 'none';


        document.querySelector(".product-list").innerHTML += `
    
    <div class="cart-body" id="dcalc">


    <div class="pimg">
    <img src="${value.thumbnail}" width:"100%" height:"auto" class="product-image">
    </div>
    <div class="cart-data-body">
    <div class="pname">
    ${value.product}
    </div>
    <div class="pdesc">
    ${value.desc}
    </div>
    <div class="pprice-pquantity">
    <div class="pprice">
    $${value.price}
    </div>
    <div class="pquantity">
    ${value.quantity}
    </div>
    </div>
    </div>
  
    <span onclick="Update(${i})" class="update"><i class="fa fa-pencil-square-o" aria-hidden="true"></i></span>
    <span onclick="Delete(${i})" class="delete"><i class="fa fa-trash-o" aria-hidden="true"></i></span>
    <button class="Addtocart" onclick="Addtocart(${i})"><i class="fa fa-shopping-cart" aria-hidden="true"></i></button>
    </div>
    
    `};


});

const Addtocart = (i, value) => {

    modelwrap = document.createElement('div');
    modelwrap.innerHTML = `
    <div class="modal fade model1" tabindex="-1" role="dialog">
<div class="modal-dialog" role="document">
<div class="modal-content">
<div class="modal-header">
<h5 class="modal-title">Add To Cart</h5>
<button type="button" class="close" data-dismiss="modal" aria-label="Close">
  <span aria-hidden="true">&times;</span>
</button>
</div>
<div class="modal-body">
<form action="" class="form">
<div class="mb-1">
<p class="PID">Product ID's ${i + 1}</p>
    <label for="product" class="form-label">Product Name</label>
    <input type="text" class="form-control" id="products" placeholder="#shoes" value=${array[i].product} disabled>
</div>
<div class="mb-1">
    <label for="product" class="form-label">Product Price</label>
    <input type="number" class="form-control" id="price" placeholder="$20" value=${array[i].price} disabled>
</div>
<div class="mb-1">
<label class="desc-title">Product Description</label>
<label class="label-desc">${array[i].desc}</label>
</div>

<div class="mb-1">
    <label for="product" class="form-label">Product Quantity</label> 
    <input type="number" class="form-control" id="quantity" placeholder="quantity" value="${array[i].quantity}" disabled>
</div>

<div class="mb-1 mb">
    <label for="formFile" class="form-label">Product Image</label>
    <div class="pimage">
        <img class="product-image " src="${array[i].thumbnail}" alt="" id="thumbnail" width="100%"
            height="auto">
    </div>
</div>


</form>
</div>
<div class="modal-footer">
<button type="button" class="btn btn-primary" data-dismiss="modal" onclick="CartList(${i})">Add to cart</button>
<button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
</div>
</div>
</div>
</div>
    `;

    document.body.appendChild(modelwrap);

    var modal = new bootstrap.Modal(modelwrap.querySelector('.modal'));
    modal.show();
    console.log(i)





}

let dafaultsum = '';





//This is cart list item showing function//
const CartList = (i, value) => {

    let pid = i;





    let heading = document.getElementById("atc");
    document.getElementById("atc").disabled = false;
    document.getElementById("atc").innerHTML = "Check Your cart"
    heading.classList.add('pink');

    if (document.getElementById("box").style.display == "none") {
        document.getElementById("box").style.display = "block";

    }
    else {
        document.getElementById("box").style.display = "none";
    }

    let totalsum = array[i].quantity * array[i].price;
    totalarray.push(totalsum);
    console.log(totalarray);



    var sum = 0;
    totalarray.forEach(item => {
        sum += item;
    });

    document.getElementById("totalproductprice").innerHTML = sum;


    document.getElementById("box").innerHTML +=
        `
   
<div class="main-div">
<div class="cart-body-form-body">
<form>
<ul>
<li><img src="${array[i].thumbnail}" width:"100%" height:"auto" class="product-image add-to-cart"></li>
<li>${array[i].product}</li>
<li>$${array[i].price}</li>
<li>Q${array[i].quantity}</li>
<li class="totalsum">Total ${totalsum}</li>
</ul>
</form>
</div>
</div>



`

    console.log("hello");
    alert(i + 1 + " ID's Product Is Add To Cart!!");
    // dafaultsum = array[i].price * array[i].quantity;


    // document.querySelector(".Addtocart").disabled += true;
    // document.querySelector(".Addtocart").innerHTML = '✔';

    var elems = document.getElementsByClassName("Addtocart");
    for (var i = 0; i < elems.length; i++) {
        if (pid == i) {
            elems[i].disabled = true;
            elems[i].innerHTML = '✔';
            console.log("disabled" + pid)
        }

    }




}


//This is product update code//

function Update(i, value) {

    edit_id = i;

    currentIndex = i
    product.value = array[currentIndex].product
    price.value = array[currentIndex].price
    desc.value = array[currentIndex].desc
    quantity.value = array[currentIndex].quantity
    thumbnail = array[currentIndex].thumbnail

    console.log(array[i].thumbnail)

    document.getElementById("price").value = array[i].price;
    document.getElementById("desc").value = array[i].desc;
    document.getElementById("quantity").value = array[i].quantity;
    document.getElementById("product").value = array[i].product;

    document.getElementById("thumbnail").value = array[i].thumbnail;

    btn.innerHTML = 'Edit List';


}


//This is product delete code//

function Delete(e) {

    let removeitem = array.filter((value, i) => {
        return i !== e;



    })

    localStorage.setItem("cart", JSON.stringify(removeitem));
    location.reload();
}

function proceed() {
    if (alert('Thank you for order from here!!😊 Have a good day!!!!')) {


    }
    else window.location.reload();

}

function ClosePopup() {
    document.getElementById("box").style.display = 'none';
}



