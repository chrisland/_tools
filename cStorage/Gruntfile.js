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
	        '../../cljs_tools/src/cStorage.js',

        ],
        dest: '../../cljs_tools/src/cStorage.min.js'
      }
    }
	  
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-uglify');


  
  // Default task(s).
  grunt.registerTask('default', ['uglify']);

};