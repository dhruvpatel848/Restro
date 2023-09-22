function validation() {
    let name = document.getElementById('name').value;
    let user = document.getElementById('userName').value;
    let email = document.getElementById('email').value;
    let pwd = document.getElementById('pwd').value;
    let copwd = document.getElementById('coPwd').value;
    let phone = document.getElementById('phoneNo').value;
  
    if (!validationofPhone(phone)) {
      return false;
    }
    if (!validationOfPass(pwd)) {
      return false;
    }
    if (pwd == "") {
      alert("Password field should not be empty.");
      return false;
    }
    if (copwd == "") {
      alert("Confirm password field should not be empty.");
      return false;
    }
    if (pwd != copwd) {
      alert("Password and confirm password must be the same.");
      return false;
    }
  
    localStorage.setItem('name', name);
    localStorage.setItem('user', user);
    localStorage.setItem('email', email);
    localStorage.setItem('pass', pwd);
    swal({
      title: "Registered",
      text: "Successfully!",
      icon: "success",
    }).then(() => {
      window.location.href = "login.html";
    });
  
    return true;
  }
  
let redirectlogin = localStorage

function validationofPhone(n) {
    var phoneno = /^\d{10}$/;
    if((n.match(phoneno))) return true
    alert("Phone no not valid");
    return false
}

function validationOfPass(str) {
	let f1=false,f2=false,f3=false;
	for (let i = 0; i < str.length; i++) {
		if (str[i]>='A' && str[i]<='Z') f1=true;
		if (str[i]>='a' && str[i]<='z') f2=true;
		if (str[i]>='0' && str[i]<='9') f3=true;
	}
	if (str.length<8) {
		alert("Password must be a minimum of eight characters.");
		return false;	
	}
	if (!f1 || !f2 || !f3) {
		alert("Password must be combination of uppercase letter, lowercase letter, and digits.");
		return false;
	}
	return true;	
}