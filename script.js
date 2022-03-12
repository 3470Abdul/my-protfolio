    
$(document).ready(function () {
  $("#all").click(function () {
    $("#categoryA").show("fast")
    $("#categoryB").hide("fast")
    $("#categoryC").hide("fast")
    $("#categoryD").hide("fast")
    $("#all").css("background-color","rgb(61, 61, 61)")
    $("#all").css("color","white")
    $("#photo").css("background-color","rgb(253, 251, 251)")
    $("#photo").css("color","black")
    $("#design").css("background-color","rgb(253, 251, 251)")
    $("#design").css("color","black")
    $("#develop").css("background-color","rgb(253, 251, 251)")
    $("#develop").css("color","black")
  })
  $("#design").click(function () {
    $("#design").css("background-color","rgb(61, 61, 61)")
    $("#design").css("color","white")
    $("#all").css("background-color","rgb(253, 251, 251)")
    $("#all").css("color","black")
    $("#photo").css("background-color","rgb(253, 251, 251)")
    $("#photo").css("color","black")
    $("#develop").css("background-color","rgb(253, 251, 251)")
    $("#develop").css("color","black")
    $("#categoryB").show("fast")
    $("#categoryA").hide("fast")
    $("#categoryC").hide("fast")
    $("#categoryD").hide("fast")
  })
  $("#develop").click(function () {
    $("#develop").css("background-color","rgb(61, 61, 61)")
    $("#develop").css("color","white")
    $("#all").css("background-color","rgb(253, 251, 251)")
    $("#all").css("color","black")
    $("#design").css("background-color","rgb(253, 251, 251)")
    $("#design").css("color","black")
    $("#photo").css("background-color","rgb(253, 251, 251)")
    $("#photo").css("color","black")
    $("#categoryB").hide("fast")
    $("#categoryA").hide("fast")
    $("#categoryC").show("fast")
    $("#categoryD").hide("fast")
  })
  $("#photo").click(function () {
    $("#photo").css("background-color","rgb(61, 61, 61)")
    $("#photo").css("color","white")
    $("#all").css("background-color","rgb(253, 251, 251)")
    $("#all").css("color","black")
    $("#design").css("background-color","rgb(253, 251, 251)")
    $("#design").css("color","black")
    $("#develop").css("background-color","rgb(253, 251, 251)")
    $("#develop").css("color","black")
    $("#categoryB").hide("fast")
    $("#categoryA").hide("fast")
    $("#categoryC").hide("fast")
    $("#categoryD").show("fast")
  })
  
})


var i = 0;
var txt = 'I am Mohammad Taha';
var speed = 100;

typeWriter();
function typeWriter() {
  if (i < txt.length) {
    document.getElementById("text").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}
