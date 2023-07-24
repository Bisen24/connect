fetch('https://5fc1a1c9cb4d020016fe6b07.mockapi.io/api/v1/orders')
    .then(response => response.json())
    .then(json => DisplayList(json))

let orderListContainer = document.getElementById("tbody");
let checkBox = document.getElementById("myCheck");
let chk = document.querySelector('.chk');

const DisplayList = (orderList) => {
    // console.log(orderList)
    orderList.map((orderList) => {
        orderListContainer.innerHTML += `
        
        <td class="one">${orderList.id}</td>
        <td class="two">${orderList.customerName}</td>
        <td class="three">${orderList.orderDate}<p class="time">${orderList.orderTime}</p></td>
        <td class="one">$${orderList.amount}</td>
        <td>${orderList.orderStatus}</td>
        
    `;

    })
    filter_type(orderList)
}

let countRow = document.getElementById("countRow");

function filter_type(temp) {
    var cbs = document.getElementsByTagName('input');
    var all_checked_types = [];
    for (var i = 0; i < cbs.length; i++) {
        if (cbs[i].type == "checkbox") {
            if (cbs[i].name.match(/^filter/)) {
                if (cbs[i].checked) {
                    all_checked_types.push(cbs[i].value);
                }
            }
        }
    }
    if (all_checked_types.length > 0) {
        $('#le-Table-1 tr').each(function (i, row) {
            var $tds = $(this).find('td')
            if ($tds.length) {
                var type = $tds[4].innerText;
                if (!(type && all_checked_types.indexOf(type) >= 0)) {
                    $(this).hide();
                }
                else {
                    $(this).show();
                }
            }

        });

    }
    else {
        $('#le-Table-1 tr').each(function (i, row) {
            var $tds = $(this).find('td'),
                type = $tds.eq(2).text();
            $(this).show();

        });
    }
    return true;

}


$('a').click(function(){
    $('a[class="clickedLink"]').removeClass('clickedLink');
    $(this).addClass('clickedLink');
  });