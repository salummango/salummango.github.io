// FIRST SPAN IMS PROJECT
function newContent() {
    let content = document.getElementById("additional-content");
    let btn = document.getElementById("read-more");

    if (content.style.display === "none") {
        content.style.display = "block";
        btn.innerHTML = "Read Less";
    } else {
        content.style.display = "none";
        btn.innerHTML = "Read More";
    }
}
// SECOND SPAN TO-DO PROJECT
function anotherContent() {
    let content = document.getElementById("another-content");
    let btn = document.getElementById("ReadMore");

    if (content.style.display = "none") {
        content.style.display = "block";
        btn.innerHTML = "Read Less";
    } else {
        content.style.display = "none";
        btn.innerHTML = "Read More";
    }
}

// form script
let contactForm = document.getElementById("contact-form");
contactForm.addEventListener("submit", function(event) {
    event.preventDefault();
    let name = document.getElementById("name").value;
    let address = document.getElementById("address").value;
    let email = document.getElementById("email").value;
    let comments = document.getElementById("comments").value;
    let contact = { name: name, address: address, email: email, comments: comments };
    let contacts = JSON.parse(localStorage.getItem("contacts")) || [];
    contacts.push(contact);
    localStorage.setItem("contacts", JSON.stringify(contacts));
    alert("Thank you for your submission!");
    contactForm.reset();
});

//MAP
function initMap() {
    let myLatLng = {
        lat: 39.30754138332805,
        lng: -6.19957557474592

    };
    let map = new google.maps.Map(document.getElementById('map'), {
        center: myLatLng,
        zoom: 12
    });
    let marker = new google.maps.Marker({
        map: map,
        position: myLatLng,
        title: 'My Location'
    });
};