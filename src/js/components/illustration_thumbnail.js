"use strict";

function IllustrationThumbnail ()
{
    this.init();
};

IllustrationThumbnail.prototype.init = function ()
{

    this.illustrations = {};
    this.illustrations.all_illustrations = document.querySelectorAll('.single-illustration');
    this.illustrations.thumbnail = document.querySelector('.illustrations-thumbnails');

    this.init_events();
};

IllustrationThumbnail.prototype.init_events = function ()
{

    var that = this;

    // Changing thumbnail when hover on illustrations links

    for (i = 0; i < this.illustrations.all_illustrations.length; i++)
    {
        this.illustrations.all_illustrations[i].addEventListener('mouseover', function (e)
        {
            that.change_thumbnail(e);
        });
    };
};

IllustrationThumbnail.prototype.change_thumbnail = function (e)
{

    var illustration_name = e.target.dataset.name;

    if (illustration_name === 'mandala')
    {
        this.illustrations.thumbnail.style.backgroundImage = "url(assets/img/chinese-mandala.png)";
    }

    else if (illustration_name === 'mattepainting')
    {
        this.illustrations.thumbnail.style.backgroundImage = "url(assets/img/sci-fi.png)";
    }
};
