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
