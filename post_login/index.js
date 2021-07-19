function notify(){
	var message= "No new Notifications";
    alert(message);
}

//----------------------- open quote of the day modal ---------------------

function openQuoteOfTheDayDialog() {

    var modal = document.getElementById("quote_of_day_dialog");

    // Get the button that opens the modal
    // Get the <span> element that closes the modal
    var span = document.getElementById("close_quote_dialog");

    // When the user clicks on the button, open the modal
    modal.style.display = "flex";
    modal.style.justifyContent = "center";
    modal.style.alignItems = "center";


    // When the user clicks on <span> (x), close the modal
    span.onclick = function () {
        modal.style.display = "none";
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
}

$("#main_search").on("input", function () {
    // Print entered value in a div box

    let search = $("#main_search").val();

   /* if (search.length > 0) {
        $('#search_results').css('display', 'block');

    } else {
        $('#search_results').css('display', 'none');
    }*/

   
});

function closeSearchBox() {
    $('#search_results').css('display', 'none');
    $("#main_search").val("")
}


function searchingStatus() {

    let searchText = $('#searching').val();

    let hasSpecialCharacter = /[&\/\\#,+()$~%.'":*?<>{}]/g;

    if (searchText == "") {
        alert("Search field can't be empty")
        return false;
    }

    if (hasSpecialCharacter.test(searchText) === true) {

        alert("Please enter valid search text.")
        return false;

    }

    $('#search > i').addClass('fa fa-spinner');

    $('#search > i').css({
        'animation': "rotate360 2s linear infinite"
    })
}

 
var Page_ValidationActive = false;
if (typeof(ValidatorOnLoad) == "function") {
    ValidatorOnLoad();
}

function ValidatorOnSubmit() {
    if (Page_ValidationActive) {
        return ValidatorCommonOnSubmit();
    }
    else {
        return true;
    }
}
        
document.getElementById('MainContent_RequiredFieldValidator1').dispose = function() {
    Array.remove(Page_Validators, document.getElementById('MainContent_RequiredFieldValidator1'));
}

document.getElementById('MainContent_RequiredFieldValidator2').dispose = function() {
    Array.remove(Page_Validators, document.getElementById('MainContent_RequiredFieldValidator2'));
}

document.getElementById('MainContent_RequiredFieldValidator3').dispose = function() {
    Array.remove(Page_Validators, document.getElementById('MainContent_RequiredFieldValidator3'));
}

document.getElementById('MainContent_RequiredFieldValidator4').dispose = function() {
    Array.remove(Page_Validators, document.getElementById('MainContent_RequiredFieldValidator4'));
}

document.getElementById('MainContent_RequiredFieldValidator5').dispose = function() {
    Array.remove(Page_Validators, document.getElementById('MainContent_RequiredFieldValidator5'));
}



$('.carousel').carousel({
    interval: 2000
})
//------------------------------  scroll horizontal in the images -----------------------
function scrollToRight(scrollFor) {

  



    if (scrollFor == 'IMAGE') {
        let imgContainer = document.getElementById('image_video_container');


        $('#image_video_container').animate({
            scrollLeft: $('#image_video_container').scrollLeft() + 400
        });

    }


    if (scrollFor == 'VIDEO') {

        let imgContainer = document.getElementById('image_video_container_for_video');


        $('#image_video_container_for_video').animate({
            scrollLeft: $('#image_video_container_for_video').scrollLeft() + 400
        });
    }
}


function scrollToLeft(scrollFor) {

    if (scrollFor == 'IMAGE') {
        let imgContainer = document.getElementById('image_video_container');

        let scroll =  imgContainer.scrollLeft - 400;

        $('#image_video_container').animate({
            scrollLeft: $('#image_video_container').scrollLeft() - 400
        });

    }


    if (scrollFor == 'VIDEO') {
        
        let imgContainer = document.getElementById('image_video_container_for_video');

        let scroll = imgContainer.scrollLeft - 400;

        $('#image_video_container_for_video').animate({
            scrollLeft: $('#image_video_container_for_video').scrollLeft() - 400
        });
    }
}

