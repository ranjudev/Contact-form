function sendEmail(){
    Email.send({
        Host : "smtp.gmail.com",
        Username : "admin@gmail.com",
        Password : "12345",
        To : 'admin2@gmail.com',
        From : document.getElementById("email").value,
        Subject : "New Contact Form Enquiry",
        Body : "Name: "+document.getElementById("name").value
        +"<br> Email: "+document.getElementById("email").value
        +"<br> Mobile No: "+document.getElementById("mobile").value
        +"<br> Message: "+document.getElementById("message").value
    }).then(
        message => alert("Message Sent Successfully")
    );
}