fetch('https://5fc1a1c9cb4d020016fe6b07.mockapi.io/api/v1/products')
    .then(response => response.json())
    .then(json => ProductsList(json))

let orderListContainerone = document.getElementById("tbody");
let checkBoxone = document.getElementById("myCheck");
let chkone = document.querySelector('.chk');

const ProductsList = (productsList) => {
    productsList.map((productsList, index) => {


        let sum;
        sum = index++
        // document.getElementById("productsCount").innerText = + sum + 1;
        const date = new Date();

        let currentDay = String(date.getDate()).padStart(2, '0');

        let currentMonth = String(date.getMonth() + 1).padStart(2, "0");

        let currentYear = date.getFullYear();

        let currentDate = `${currentDay}-${currentMonth}-${currentYear}`;
        const expiryDateOld = productsList.expiryDate;
        if (productsList.expiryDate < currentDate) {
            // console.log("expiry date" + productsList.expiryDate)
        }
        orderListContainerone.innerHTML += `
        
        <td class="one">${productsList.id}</td>
        <td class="two">${productsList.medicineName}</td>
        <td class="three">${productsList.medicineBrand}</td>
        <td class="one">$${productsList.expiryDate}</td>
        <td>${productsList.unitPrice}</td>
        <td>${productsList.stock}</td>
        
        
    `;
        ;


    })

}


$(document).ready(function () {
    $('#expiryFilter').on('change', function () {
        if ($(this).is(':checked')) {
            var currentDate = new Date();
            $('#le-Table-1 tbody tr').each(function () {
                var expiryDate = new Date($(this).find('td:eq(3)').text());
                if (expiryDate >= currentDate) {
                    $(this).hide();
                } else {
                    $(this).show();
                }
            });
        } else {
            $('#le-Table-1 tbody tr').show();
        }
    });
});

$(document).ready(function () {
    function filterTable() {
        var showLessThan100 = $('#filterCheckbox').is(':checked');

        $('#le-Table-1 tbody tr').each(function () {
            var stockCount = parseInt($(this).find('td:eq(5)').text());
            if (showLessThan100 && stockCount > 100) {
                $(this).hide();
            } else {
                $(this).show();
            }
            console.log(stockCount)
        });
        
    }
    $('#filterCheckbox').on('change', filterTable);
    filterTable();
});



$('a').click(function () {
    $('a[class="clickedLink"]').removeClass('clickedLink');
    $(this).addClass('clickedLink');
});