module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %>  <%= pkg.version %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      build: {
        src: [
	        '../../cPager/src/cPager.js',

        ],
        dest: '../../cPager/src/cPager.min.js'
      }
    },
    jshint: {}
	  
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-uglify');


  
  // Default task(s).
  grunt.registerTask('default', ['uglify']);

};