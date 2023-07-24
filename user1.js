fetch('https://5fc1a1c9cb4d020016fe6b07.mockapi.io/api/v1/users')
    .then(response => response.json())
    .then(json => UserList(json))

let UserListContainer = document.getElementById("tbody");
const UserList = (UserList) => {
    console.log(UserList)
    UserList.map((UserList) => {
        UserListContainer.innerHTML += `
        <td class="one">${UserList.id}</td>
        <td class="one"><img src="${UserList.profilePic}"/></td>
        <td class="one">${UserList.fullName}</td>
        <td class="one">${UserList.dob}</td>
        <td class="one">${UserList.gender}</td>
        <td class="one">${UserList.currentCity}, ${UserList.currentCountry}</td>
        

        
    `;

    })

}



$(document).ready(function () {
    $("#searchForm").submit(function (event) {
        event.preventDefault();
        var searchString = $("#searchInput").val().trim();
        if (searchString.length >= 2) {
            $("#le-Table-1 tbody tr").each(function () {
                var rowData = $(this).text().toLowerCase();
                if (rowData.indexOf(searchString.toLowerCase()) !== -1) {
                    $(this).show();
                } else {
                    $(this).hide();
                }
            });
        } else {
            $("#le-Table-1 tbody tr").show();
        }
    });
});

let resetSearchData = document.getElementById("reset");

resetSearchData.addEventListener('click', function () {
    location.reload();
})

$('a').click(function(){
    $('a[class="clickedLink"]').removeClass('clickedLink');
    $(this).addClass('clickedLink');
  });








