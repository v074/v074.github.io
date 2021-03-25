function openAbout(){
    // document.getElementById("about").style.width = "80%";
    // document.getElementById("about").style.borderWidth = "5px";
    document.getElementById("about").classList.add("opened");
}

function closeAbout(){
    // document.getElementById("about").style.width = "0";
    // document.getElementById("about").style.borderWidth = "0px";
    document.getElementById("about").classList.remove("opened");
}

function openTech(){
    // document.getElementById("technologies").style.width = "80%";
    // document.getElementById("technologies").style.borderWidth = "5px";
    document.getElementById("technologies").classList.add("opened");
}

function closeTech(){
    // document.getElementById("technologies").style.width = "0";
    // document.getElementById("technologies").style.borderWidth = "0px";
    document.getElementById("technologies").classList.remove("opened");
}

function openProjects(){
    // document.getElementById("projects").style.width = "80%";
    // document.getElementById("projects").style.borderWidth = "5px";
    document.getElementById("projects").classList.add("opened");
}

function closeProjects(){
    // document.getElementById("projects").style.width = "0";
    // document.getElementById("projects").style.borderWidth = "0px";
    document.getElementById("projects").classList.remove("opened");
}

// As contact form handling via PHP is not possible on Github, these are being commented out and left in for legacy reference.
// function openContact(){
//     document.getElementById("contact").style.width = "80%";
//     document.getElementById("contact").style.borderWidth = "5px";
// }

// function closeContact(){
//     document.getElementById("contact").style.width = "0";
//     document.getElementById("contact").style.borderWidth = "0px";
// }
