
$("#submit-button").on("click",function(event){
    event.preventDefault()
    if ($("#name").val() == "" || $("#phone-number").val() == "" || $("#email").val() == "" || $("#Id").val() == ""){
        alert("Please enter a value for each field")
        return
    }
    let name = $("#name").val()
    let phoneNumber = $("#phone-number").val()
    let email = $("#email").val()
    let Id = $("#id").val()
    $.ajax({
        url:"http://localhost:1729/api/tables",
        data:{
            name: name,
            phoneNumber: phoneNumber,
            email: email,
            Id: Id
        },
        type:"POST"
    }).then(console.log("Done!"))
})