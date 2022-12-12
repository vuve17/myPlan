
var character = document.getElementById("character");

var blurDiv = document.getElementById("blure_div_on_open_nav");

var ellipse = character.getElementsByTagName("ellipse"); //queryselectorall
var ry = 6;
var ryBool = true;

$(document).ready(function () {

        setInterval(function()
        {
            let eyes = setInterval(function()
            {
                if(ryBool)
                {
                    ry -= 0.5
                    ellipse[0].setAttribute("ry", ry);
                    ellipse[1].setAttribute("ry", ry);
                    if(ry == 0)
                    {
                        ryBool = false
                    }
                    
                }
                else
                {
                    ry += 0.5
                    ellipse[0].setAttribute("ry", ry)
                    ellipse[1].setAttribute("ry", ry)
            
                    if(ry >= 6)
                    {
                        ryBool = true
                        clearInterval(eyes)
                    }
            
                }
            }, 20)
                    
        },7000)



    $('#hamburger_menu').on('click', function(event) 
    {
        $('#sidebar').toggleClass('active');

        // $('#sidebar').animate(
        //     {
        //         left : "250px"
        //     }, 500) 
        event.stopPropagation();

        blurDivVisibility()

    });


    $('#sidebar').on('click', function(event) {
        event.stopPropagation();
    });

    


});

function blurDivVisibility() {
    if($("#sidebar").hasClass("active"))
    {
        blurDiv.style.visibility = "visible";
        $(document).on('click', function() {
            $('#sidebar').removeClass('active');
            blurDiv.style.visibility = "hidden"
        });
    }
    else
    {
        blurDiv.style.visibility = "hidden"
    }
  }