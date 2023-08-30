<!DOCTYPE html>
<html>
<head>
    <link rel="stylesheet" type="text/css" href="styles.css">
    <style>
        /* Your existing CSS styles here */
        
         /* Style for header link and menu items */
         .header-link,
         .menu-item {
             text-decoration: none;
             color: #000; /* Change to your desired color */
             font-family: "Jacques Francois", sans-serif;
             font-size: 48px;
             font-weight: 400;
             cursor: pointer; /* Add a cursor pointer on hover */
         }
     
         .header-link:hover,
         .menu-item:hover {
             text-decoration: underline;
         }
     
         .header-link.clicked,
         .menu-item.clicked {
             color: red; /* Change to your desired color */
             text-decoration: none;
         }
    </style>
</head>
<body class="body">
    </body>
</div>

<div class="header">
    <h1><a class="header-link" href="javascript:void(0)" onclick="refreshPage();">M u TT</a></h1>
    <div class="menu">
        <div class="menu-B">
            <span class="menu-item" onclick="toggleList('music-list')">Music</span>
            <span class="menu-item" onclick="toggleList('design-list')">Design</span>
            <span class="menu-item" onclick="toggleList('photos-list')">Photos</span>
            <span class="menu-item" onclick="toggleList('connect-list')">Connect</span>
        </div>
    </div>
</div>


    <div id="music-list" class="hidden-list">
        <p>*music*
        </p>      
   
<iframe width="560" height="315" src="https://www.youtube.com/embed/PruMPJTsqvo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    </div>

    <div id="design-list" class="hidden-list">
        <!-- Content for Design list here -->
        *loading*
        <div class="photo-gallery">
            <img src="photos 2/dog-face-copy.jpg" alt="Photo dog face">
    </div>
    </div>
    
    <div id="photos-list" class="hidden-list">        
        <div class="photo-gallery"> 
            <img src="photos 2/Park Trees.jpg" alt="Photo 1">
            <img src="photos 2/25.jpg" alt="Photo 2">
            <img src="photos 2/14.jpg" alt="Photo 3">
            <img src="photos 2/21.jpg" alt="Photo 4">
            <img src="photos 2/15.jpg" alt="Photo 6">

            <!-- Add more <img> elements for each photo -->
        </div>
    </div>
    
    <div id="connect-list" class="hidden-list">
        <!-- Content for Connect list here -->
        <p><a href="https://www.instagram.com/mutt.studios/">instagram</a>
            <br>info@mutt.studios</p>

    </div>    

    <div class="homepage-image"> 
        <img src="photos 2/mutts copy.jpg" alt="Photo dog face" class="blur-background">
    </div>

    <body class="body blur-background"></body>

    <footer class="footer">
        <p>&copy; 2023 MuTT Studios. All rights reserved.</p>
        
    </footer>
    


<script>
   
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


</script>
 
</body>
</html>

