var View = (function(options) {
    
    "use strict"; // jshint ;_;
    
    // get slides
    var nl = document.getElementsByClassName('slide');

    // convert NodeList with slides to array
    var slides = [];
    for (var i = 0, n; n = nl[i]; ++i) {
        slides.push(n);
    }

    // add listener to dblclick event to request fullscreen
    addEventListener("dblclick", toggleFullScreen, false);

    // get slides count
    var slides_count = slides.length;
    // get current slide
    var current_slide = slides[0];

    // add listener to keydown
    document.addEventListener('keydown', move, false);
    //mouse scroll
    document.addEventListener('mousewheel', mouse_scroll, false);
    //support for firefox
    document.addEventListener('DOMMouseScroll', mouse_scroll, false);

    // get next slide after current
    var next_slide = function(){
        var current_slide_index = slides.indexOf(current_slide);
        if (current_slide_index === slides_count - 1){
            return slides[current_slide_index];
        }
        else{
            slides[current_slide_index + 1].scrollIntoView(true);
            return slides[current_slide_index + 1];
        }
    };
    
    // get previous slide after current
    var prev_slide = function(){
        var current_slide_index = slides.indexOf(current_slide);
        if (current_slide_index === 0){
            return slides[current_slide_index];
        }
        else{
            slides[current_slide_index - 1].scrollIntoView(true);
            return slides[current_slide_index - 1]; 
        }
    };

    // mouse scrolling
    function mouse_scroll(e){
        //scroll test
        //console.log("Mouse scrolled...");

        //get delta of mouse whell
        var delta = e.wheelDelta;

        if(delta === -120 || delta === -3){
            return current_slide = next_slide();
        } else{
            return current_slide = prev_slide();
        }
    }

    // move slide with keyboard
    function move(e){
        // check key code
        switch( e.keyCode ) {
            // up
            case 40:
                return current_slide = next_slide();
            // down
            case 38:
                // go to previous slide
                return current_slide = prev_slide();
        }  
    }

    // toggles full screen in presentation
    function toggleFullScreen(){
    if ((!document.mozFullScreen && !document.webkitIsFullScreen)) {              
        if (document.documentElement.requestFullScreen) {
                document.documentElement.requestFullScreen();
        }   else if (document.documentElement.mozRequestFullScreen) {
                document.documentElement.mozRequestFullScreen();
        }   else if (document.documentElement.webkitRequestFullScreen) {
            document.documentElement.webkitRequestFullScreen();
    }
    } else {
            if (document.cancelFullScreen) {
                document.cancelFullScreen();
        }   else if (document.mozCancelFullScreen) {
                document.mozCancelFullScreen();
        }   else if (document.webkitCancelFullScreen) {
                document.webkitCancelFullScreen();
        }
    }
}

    // slide show
    function presentation_start(){
        current_slide = next_slide();
    }

    // play slide show
    function play_presentation(slide_show_timeout){
        setInterval(presentation_start, slide_show_timeout);
    }

    // check options and start presentation
    check_slide_show(options);

    /*
     * Check presentation options
     */
    function check_slide_show(options){
        if (options.slide_show === true && options.slide_show_timeout > 0){
            play_presentation(options.slide_show_timeout);
        }
    }
});

/*
 * Example of usage:
 * remove 'slide_show_timeout: 10000' to have automatic presentation start disabled
 */
    View(options = {
        slide_show : true, 
        slide_show_timeout : 10000
    });
