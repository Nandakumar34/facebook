function validateForm() {
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    if (email === "" || password === "") {
        alert("Email and password are required.");
        return false;
    }

    // You can add more validations if needed
    alert("Login Successful");
    return false; // Prevent form submission for demo purposes
}
