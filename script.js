console.log("connected")

// script.js
document.addEventListener('DOMContentLoaded', function () {
    const heading = document.getElementById('heading');
    const droplets = document.querySelectorAll('.droplet');

    heading.addEventListener('mouseover', function () {
        droplets.forEach(droplet => droplet.classList.add('blue-drops'));
    });

    heading.addEventListener('mouseout', function () {
        droplets.forEach(droplet => droplet.classList.remove('blue-drops'));
    });
});




