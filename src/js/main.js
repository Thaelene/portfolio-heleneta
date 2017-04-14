// Show content when DOM content is loaded
var loader = document.querySelector('.loader');
var content = document.querySelector('.container');
document.addEventListener("DOMContentLoaded", function(event)
{
    loader.style.display = "none";
    content.style.display = "block";
    console.log('hi');
});

// Changing thumbnail when hover on projects links
var projects = {};
projects.element = {};
projects.element.charlotte = document.querySelector('.charlotte-domingos');
projects.element.elodie = document.querySelector('.elodie-cottin');
projects.element.space_traveler = document.querySelector('.space-traveler');
projects.element.discover = document.querySelector('.discover-mars');
projects.element.tales = document.querySelector('.tales-from-the-loop');
projects.element.thumbnail = document.querySelector('.projects-thumbnails');

projects.element.charlotte.addEventListener('mouseover', function()
{
    projects.element.thumbnail.style.backgroundImage = "url(assets/img/charlotte-domingos.png)";
})
projects.element.elodie.addEventListener('mouseover', function()
{
    projects.element.thumbnail.style.backgroundImage = "url(assets/img/elodie-cottin-homepage.png)";
})
projects.element.space_traveler.addEventListener('mouseover', function()
{
    projects.element.thumbnail.style.backgroundImage = "url(assets/img/space-traveler.png)";
})
projects.element.discover.addEventListener('mouseover', function()
{
    projects.element.thumbnail.style.backgroundImage = "url(assets/img/discover-mars.png)";
})
projects.element.tales.addEventListener('mouseover', function()
{
    projects.element.thumbnail.style.backgroundImage = "url(assets/img/tales.png)";
})

// Changing thumbnail when hover on illustrations links
var illustrations = {};
illustrations.element = {};
illustrations.element.chinese = document.querySelector('.mandala');
illustrations.element.mattepainting = document.querySelector('.mattepainting');
illustrations.element.thumbnail = document.querySelector('.illustrations-thumbnails');

illustrations.element.chinese.addEventListener('mouseover', function()
{
    illustrations.element.thumbnail.style.backgroundImage = "url(assets/img/chinese-mandala.png)";
})
illustrations.element.mattepainting.addEventListener('mouseover', function()
{
    illustrations.element.thumbnail.style.backgroundImage = "url(assets/img/sci-fi.png)";
})
