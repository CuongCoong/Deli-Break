$(document).ready(function () {
  
  // show menu rps
  
  $(".icon-bar").click(function () {
    $(".menu").toggleClass("menu1");
    $(".icon-click").toggleClass("fa-x")
    $(".icon-click").toggleClass("fa-bars")
  });

  // page scroll
  
  $(window).scroll(function () {
    var pos_body = $("html,body").scrollTop(); // check how much page scroll position
    // console.log(pos_body)
    if (pos_body > 1000) {
      $(".back-to-top").addClass("show");
    } else {
      $(".back-to-top").removeClass("show");
    }
  });
  $(".back-to-top").click(function () {
    $("html , body").animate(
      {
        scrollTop: 0,
      },
      10
    );
  });
 // end page
});

// show password
var x = true;
function showPass() {
  var iconShowPass = document.querySelector(".icon-form");
  if (x) {
    iconShowPass.classList.toggle("cl-b68"); // color
    document.getElementById("password").type = "text";
    x = false;
  } else {
    iconShowPass.classList.toggle("cl-b68");
    document.getElementById("password").type = "password";
    x = true;
  }
}

// show form login
function showFormLogin() {
  var formLogin = document.querySelector(".form-login");
  formLogin.style.display = "flex";
}

// đóng form
function clickClose() {
  var formLogin = document.querySelector(".form-login");
  formLogin.style.display = "none";
}

// validate
function check(e) {
  if (e.value == "") {
    e.style.borderColor = "red";
    e.placeholder = "không được để trống";
  } else {
    e.style.borderColor = null;
  }
}
