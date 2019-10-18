function expandMobileNav() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

$(document).ready(function () {
    $('.dropdown-toggle').dropdown();
    if ($(window).width() <= 500) {
        //To change the class, you have to refresh the page!
        //change the style, not to use dropdown on mobile anymore
        // alert("this is <=500");
        document.getElementById("dropbox1").className = "dropleft";
        document.getElementById("dropbox2").className = "dropleft";

    } else {
        // alert("hey you >500");
        document.getElementById("dropbox1").className = "dropdown";
        document.getElementById("dropbox2").className = "dropdown";
    }
});