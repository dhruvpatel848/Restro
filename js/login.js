
function validation() {

    let user = document.getElementById('userName').value
    let email = document.getElementById('email').value
    let pass = document.getElementById('pwd').value

    console.log(localStorage.getItem('user'))
    console.log(user)
    if (localStorage.getItem('user') != user) {
        swal({
            title: "Username not found!",
            text: "Login failed!",
            icon: "warning",
        });
        return false
    }

    if (localStorage.getItem('email')!=email) {
        swal({
            title: "Email not found!",
            text: "Login failed!",
            icon: "warning",
        });
        return false
    }

    if (localStorage.getItem('pass')!=pass) {
        swal({
            title: "Incorrect Password!",
            text: "Login failed!",
            icon: "warning",
        });
        return false
    }

    swal({
        title: "Logged!",
        text: "Successfully.!",
        icon: "success",
    }).then(() => {
        window.location.href = "home.html";
      });;

}