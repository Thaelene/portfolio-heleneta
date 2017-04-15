document.addEventListener("DOMContentLoaded", function() {

    var body = document.querySelector('body');

    //var app = new App();

    if (body.classList.contains('homepage')) {
        var projects_thumbnails = new ProjectThumbnail();
        var illustrations_thumnails = new IllustrationThumbnail();
    }

    else if (body.classList.contains('project')) {
        var projects_thumbnails = new ProjectThumbnail();
    }
 });
