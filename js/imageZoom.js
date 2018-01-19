// Get the image and insert it inside the modal - use its "alt" text as a caption
var modal;
var img;
var modalImg;
var captionText;

function zoomImg(e) {
    console.log(e.id);
    modal = document.getElementById('myModal');
    img = document.getElementById(e.id);
    modalImg = document.getElementById("img01");
    captionText = document.getElementById("caption");
    modal.style.display = "block";
    modalImg.src = e.src;
    //document.getElementById("caption").innerHTML = e.alt;
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
    modal.style.display = "none";
}