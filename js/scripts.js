function openAbout(){
    document.getElementById("about").classList.add(`opened`);
}

function closeAbout(){
    document.getElementById("about").classList.remove(`opened`);
}

function openTech(){    
    document.getElementById("technologies").classList.add(`opened`);
}

function closeTech(){
    document.getElementById("technologies").classList.add(`opened`);
}

function openProjects(){
    document.getElementById("projects").classList.add(`opened`);
}

function closeProjects(){
    document.getElementById("projects").classList.remove(`opened`);
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
