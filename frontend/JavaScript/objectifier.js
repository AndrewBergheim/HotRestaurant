$("#submit-button").on("click",function(){
    if ($("#name").val() == "" || $("#phone-number").val() == "" || $("#email").val() == "" || $("#Id").val() == ""){
        alert("Please enter a value for each field")
        return
    }
    let name = $("#name").val()
    let phoneNumber = $("#phone-number").val()
    let email = $("#email").val()
    let Id = $("#id").val()
/*
    let toPush;
    toPush.name = name;
    toPush.phoneNumber = phoneNumber;
    toPush.email = email;
    toPush.Id = Id
*/
    $.ajax({
        url:"http://localhost:1729/api/tables",
        data:{
            name: name,
            phoneNumber: phoneNumber,
            email: email,
            Id: Id
        },
        type:"POST"

    })
})