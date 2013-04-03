(function() {
    
    // get slides
    var nl = document.getElementsByClassName('slide');
    var play_btn = document.getElementById('play-btn');
    // convert NodeList with slides to array
    var slides = [];
    for (var i = 0, ref = slides.length = nl.length; i < ref; i++) {
        slides[i] = nl[i];
    };

    // get slides count
    var slides_count = slides.length;
    // get current slide
    var current_slide = slides[0];

    // add listener to keydown
    document.addEventListener('keydown', move, false);

    // return element by id
    var el = function(id){
        return document.getElementById(id);
    };

    // get next slide after current
    var next_slide = function(){
        var current_slide_index = slides.indexOf(current_slide);
        if (current_slide_index == slides_count - 1)
            return slides[current_slide_index];
        else{
            slides[current_slide_index + 1].scrollIntoView(true);
            return slides[current_slide_index + 1];
        }
    };
    
    // get previous slide after current
    var prev_slide = function(){
        var current_slide_index = slides.indexOf(current_slide);
        if (current_slide_index == 0)
            return slides[current_slide_index];
        else{
            slides[current_slide_index - 1].scrollIntoView(true);
            return slides[current_slide_index - 1]; 
        }
    };

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
        };  
    };

    function presentation_start(){
        current_slide = next_slide();
    }

    function play_presentation(){
        setInterval(presentation_start, 4000);
    }

    //play_presentation(); // uncomment this line to add automatic play feature in presentation 

}());