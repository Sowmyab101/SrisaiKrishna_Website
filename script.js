// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});


// Loader Fade
window.addEventListener("load", function() {
  const loader = document.getElementById("loader");

  if(loader){
    loader.style.opacity = "0";
    setTimeout(() => loader.style.display = "none", 600);
  }

});


// Header Shrink On Scroll
window.addEventListener("scroll", function() {
  const header = document.querySelector("header");

  if(header){
    header.classList.toggle("scrolled", window.scrollY > 50);
  }

});


// Floating Contact Toggle
const toggle = document.querySelector(".contact-toggle");
const floating = document.querySelector(".floating-contact");

if(toggle && floating){
  toggle.addEventListener("click", () => {
      floating.classList.toggle("active");
  });
}


// ADMIN LOGIN
function login(){

let username = document.getElementById("username").value;
let password = document.getElementById("password").value;

if(username === "Admin" && password === "1234"){

localStorage.setItem("adminLoggedIn","true");

document.getElementById("loginPage").style.display = "none";
document.getElementById("dashboard").style.display = "flex";
document.querySelector("header").style.display = "none";

}
else{
alert("Invalid Login");
}

}


// LOGOUT
function logout(){

localStorage.removeItem("adminLoggedIn");

location.reload();

}


// CHECK LOGIN STATUS
window.addEventListener("load", function(){

if(localStorage.getItem("adminLoggedIn") === "true"){

const loginPage = document.getElementById("loginPage");
const dashboard = document.getElementById("dashboard");

if(loginPage && dashboard){
loginPage.style.display = "none";
dashboard.style.display = "block";
}

}

});


const bookingForm = document.getElementById("bookingForm");

if(bookingForm){

bookingForm.addEventListener("submit", function(e){

e.preventDefault();

let name = document.getElementById("name").value;
let phone = document.getElementById("phone").value;
let date = document.getElementById("date").value;

let booking = {
name: name,
phone: phone,
date: date
};

let bookings = JSON.parse(localStorage.getItem("bookings")) || [];

bookings.push(booking);

localStorage.setItem("bookings", JSON.stringify(bookings));

alert("Your enquiry has been sent successfully!");

bookingForm.reset();

});

}


function loadBookings(){

let bookings = JSON.parse(localStorage.getItem("bookings")) || [];

let table = document.querySelector("#bookingTable tbody");


if(!table) return;

table.innerHTML = "";

bookings.forEach(b => {

let row = `<tr>
<td>${b.name}</td>
<td>${b.phone}</td>
<td>${b.date}</td>
<td>
<a href="https://wa.me/91${b.phone}" target="_blank">WhatsApp</a>
</td>
</tr>`;

table.innerHTML += row;

});

}

window.addEventListener("load", loadBookings);

let bookings = JSON.parse(localStorage.getItem("bookings")) || [];

let bookingCount = document.getElementById("totalBookings");

if(bookingCount){
bookingCount.innerText = bookings.length;
}

if(!localStorage.getItem("adminLoggedIn")){
let dashboard = document.getElementById("dashboard");
if(dashboard){
dashboard.style.display = "none";
}
}
