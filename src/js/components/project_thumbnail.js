"use strict";

function ProjectThumbnail ()
{
    this.init();
};

ProjectThumbnail.prototype.init = function ()
{


    this.projects = {};
    this.projects.all_projects = document.querySelectorAll('.single-project');
    this.projects.thumbnail = document.querySelector('.projects-thumbnails');

    this.init_events();
};

ProjectThumbnail.prototype.init_events = function ()
{

    var that = this;

    for (i = 0; i < this.projects.all_projects.length; i++)
    {
        this.projects.all_projects[i].addEventListener('mouseover', function (e)
        {
            that.change_thumbnail(e);
        });
    };
};

ProjectThumbnail.prototype.change_thumbnail = function (e)
{

    var project_name = e.target.dataset.name;

    if (project_name === 'charlotte-domingos')
    {
        this.projects.thumbnail.style.backgroundImage = "url(assets/img/charlotte-domingos.png)";
    }

    else if (project_name === 'elodie-cottin')
    {
        this.projects.thumbnail.style.backgroundImage = "url(assets/img/elodie-cottin-homepage.png)";
    }

    else if (project_name === 'space-traveler')
    {
        this.projects.thumbnail.style.backgroundImage = "url(assets/img/space-traveler.png)";
    }

    else if (project_name === 'discover-mars')
    {
        this.projects.thumbnail.style.backgroundImage = "url(assets/img/discover-mars.png)";
    }

    else if (project_name === 'tales-from-the-loop')
    {
        this.projects.thumbnail.style.backgroundImage = "url(assets/img/tales.png)";
    }
};
