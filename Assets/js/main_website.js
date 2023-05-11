
       //show dropdowns//

       function myFunction(a) {
        a.parentNode.getElementsByClassName('dropdown-content_custom')[0].classList.toggle("show");
                   }
        
        //click anywhere to hide dropdown//
        window.onclick = function(event) {
        if (!event.target.matches('.dropbtn_custom')) {
        var dropdowns = document.getElementsByClassName("dropdown-content_custom");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
        }
        }
        }
        };
      
        
      
        window.onscroll = function () {
        myFunction2();
      };
      
      function myFunction2() {
        if (document.documentElement.scrollTop > 50) {
          document.getElementById("tph").className = "scrolled";
        } else {
          document.getElementById("tph").className = "header_top";
        }
      }
      
   



      $(document).ready( function changbtnbkcolor() {
        if ($(this).hasClass("btn_custom")) {
            $(this).removeClass("btn_custom").addClass("active_custom");
        }
    });




// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

// Get the modal
var modal = document.getElementById("myModal-two");

// Get the button that opens the modal
var btn = document.getElementById("myBtntwo");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function myFunction3() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function myFunction3() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function myFunction3(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}



