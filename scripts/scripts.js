function toggleMenu() {
    var x = document.getElementById("nav");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

function toggleSize(y) {
    if (y.matches && document.getElementById("nav").style.display === "none") { // If media query matches
        document.getElementById("nav").style.display = "block";
    } else {
        document.body.style.backgroundColor = "none";
    }
}

var y = window.matchMedia("(min-width: 900px)")
toggleSize(y) // Call listener function at run time
y.addListener(toggleSize) // Attach listener function on state changes