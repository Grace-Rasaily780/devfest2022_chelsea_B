import React from 'react';

function ToTop() {
     window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.querySelector(".scrolltop").style.display = "block";
  } else {
    document.querySelector(".scrolltop").style.display = "none";
  }
}
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    
  }
  
    return (
        <div className="scrolltop float-right">
            <button onClick={topFunction} id="mybtn" title="Go to top"><i className="fa fa-arrow-up"></i></button>
        </div>
    )
}

export default ToTop;
