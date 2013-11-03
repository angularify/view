module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    // minify all src css/js files in src/ -> dist dir
    cssmin: {
	  	minify: {
	    expand: true,
	    cwd: 'src/',
	    src: ['*.css', '!*.min.css'],
	    dest: 'dist/',
	    ext: '.min.css'
  	}, 
  	add_banner : {
  		options : {
  			banner : "/* Minified view stylesheet Copyright (c) 2013 @0xAX & @_voidpirate*/"
  		}, 
			files: {
      	'dist/view.min.css': 'src/css/view.css'
    	}
  	}
	}, 
  uglify: {
    my_target: {
      files: {
        "dist/view.min.js": "src/js/view.js"
      }
    } 
  }
});

  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-uglify');

  grunt.registerTask('compileJS', ['uglify']);
  grunt.registerTask('compileCSS', ['cssmin']);

};