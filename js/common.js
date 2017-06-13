$(document).ready(function(){
    var modal = document.getElementById('id01');

        var modalDetails1 = document.getElementById('modalDetails1'),
            modalDetails2 = document.getElementById('modalDetails2'),
            modalDetails3 = document.getElementById('modalDetails3');

        
        var btn1 = document.getElementById("btnDetails1"),
            btn2 = document.getElementById("btnDetails2"),
            btn3 = document.getElementById("btnDetails3");

        var span1 = document.getElementsByClassName("close-details-1")[0],
            span2 = document.getElementsByClassName("close-details-2")[0],
            span3 = document.getElementsByClassName("close-details-3")[0];

        btn1.onclick = function() {
            modalDetails1.style.display = "block";
            }
        btn2.onclick = function() {
            modalDetails2.style.display = "block";
            }
        btn3.onclick = function() {
            modalDetails3.style.display = "block";
            }

        span1.onclick = function() {
           modalDetails1.style.display = "none";
        }
        span2.onclick = function() {
            modalDetails2.style.display = "none";
        }
        span3.onclick = function() {
            modalDetails3.style.display = "none";
        }

        window.onclick = function(event) {
            if (event.target == modal) {
                modal.style.display = "none";
            }
            else if (event.target == modalDetails1) {
                modalDetails1.style.display = "none";
            }else if (event.target == modalDetails2) {
                modalDetails2.style.display = "none";
            } else if (event.target == modalDetails3) {
                modalDetails3.style.display = "none";
            }
        }
});
        window.onscroll = function() {scrollFunction()};

        function scrollFunction() {
            if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
                document.getElementById("topBtn").style.display = "block";
            } else {
                document.getElementById("topBtn").style.display = "none";
            }
        }

        // When the user clicks on the button, scroll to the top of the document
        function topFunction() {
            document.body.scrollTop = 0;
            document.documentElement.scrollTop = 0;
        }



