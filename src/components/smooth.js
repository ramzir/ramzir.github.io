
var homeNav = document.getElementById('homeNav');
console.log(homeNav)
if (homeNav){
    homeNav.addEventListener('click', () => window.scrollTo({
        top: 0,
        behavior: 'smooth',
    }));
}
var aboutNav = document.getElementById('aboutNav');
if (aboutNav){
    aboutNav.addEventListener('click', () => window.scrollTo({
        top: document.getElementById("about").offsetTop - 10,
        behavior: 'smooth',
    }));
}

// document.getElementById("resumeNav").addEventListener('click', () => window.scrollTo({
//     top: document.getElementById("resume").offsetTop - 10,
//     behavior: 'smooth',
// }));

// document.getElementById("contactNav").addEventListener('click', () => window.scrollTo({
//     top: document.body.offsetHeight,
//     behavior: 'smooth',
// }));