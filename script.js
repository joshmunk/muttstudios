function refreshPage() {
    window.location.reload(true);
}

function toggleList(listId) {
    var list = document.getElementById(listId);
    var homepageImage = document.querySelector('.homepage-image img');
    var youtubePlayer = document.getElementById('youtube-player');
    var photoGallery = document.getElementById('photos-list');
    var body = document.body; // Get the body element
    var allLists = document.querySelectorAll('.hidden-list');

    // Close all other lists
    allLists.forEach(function(item) {
        if (item !== list) {
            item.style.display = 'none';
        }
    });

    // Toggle the display of the clicked list
    if (list.style.display === '' || list.style.display === 'none') {
        list.style.display = 'block';
        homepageImage.classList.add('blur-background'); // Add the class to blur the image

        if (listId === 'music-list') {
            youtubePlayer.style.display = 'block'; // Show the YouTube player
        } else {
            youtubePlayer.style.display = 'none'; // Hide the YouTube player
        }

        if (listId === 'photos-list') {
            photoGallery.style.display = 'block'; // Show the photo gallery
        } else {
            photoGallery.style.display = 'none'; // Hide the photo gallery
        }
    } else {
        list.style.display = 'none';
        homepageImage.classList.remove('blur-background'); // Remove the class to remove blur from the image
        youtubePlayer.style.display = 'none'; // Hide the YouTube player
        photoGallery.style.display = 'none'; // Hide the photo gallery
    }
}


/*set initial homepage image as not blurred*/
var homepageImage = document.querySelector('.homepage-image img');
homepageImage.classList.remove('blur-background');
