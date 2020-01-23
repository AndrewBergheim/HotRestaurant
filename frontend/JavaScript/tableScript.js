$.ajax({
    url:"http://localhost:1729/GetReservations",
    type:"GET"

}).then(function(response){
    for (let i = 0; i < response.length;i++){
        if (i < 5){ 
            $("#reserved-tables").append(
            `
            <li>
            <h2>Table #${i+1}</h2>
            <h2>ID: ${response[i].Id}</h2>
            <h2>Name: ${response[i].name}</h2>
            <h2>Email: ${response[i].email}</h2>
            <h2>Phone: ${response[i].phoneNumber}</h2>
            </li>
            <br>
            `
            )
        }else{ 
            $("#waiting-list").append(
            `
            <li>
            <h2>ID: ${response[i].Id}</h2>
            <h2>Name: ${response[i].name}</h2>
            <h2>Email: ${response[i].email}</h2>
            <h2>Phone: ${response[i].phoneNumber}</h2>
            </li>
            <br>
            `
            )
        }
    }
})