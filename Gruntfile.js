module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    // minify all src css files in src/ -> dist dir
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
  			banner : "/* Minified Gasket stylesheet Copyright (c) 2013 @_voidPirate*/"
  		}, 
			files: {
      	'dist/view.min.css': 'css/view.css'
    	}
  	}
	}, 
  uglify: {
    my_target: {
      files: {
        "dist/view.min.js": "js/view.js"
      }
    } 
  }
});

  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-uglify');

  grunt.registerTask('compileJS', ['uglify']);
  grunt.registerTask('compileCSS', ['cssmin']);

};