module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      build: {
        src: [
	        '../../aok-relax/www/framework/fastclick.min.js',
	        '../../aok-relax/www/framework/jquery-2.0.3.min.js',
	        '../../aok-relax/www/framework/jquery-ui.min.js',
	        '../../aok-relax/www/framework/jquery.ui.touch-punch.min.js',
	        '../../aok-relax/www/js/_lang.js',
	        '../../aok-relax/www/js/chart_point.js',
	        '../../aok-relax/www/js/chart_mountain.js',
	        '../../aok-relax/www/framework/ajaxPageSystem.js',
	        '../../aok-relax/www/js/helperGlobal.js',
	        '../../aok-relax/www/js/helperDb.js',
	        '../../aok-relax/www/js/helperSync.js',
	        '../../aok-relax/www/js/helperLesson.js',
	        '../../aok-relax/www/js/helperKontakt.js',
	        '../../aok-relax/www/js/ajaxPageSystem-tasks.js',
	        '../../aok-relax/www/js/app.js'
        ],
        dest: '../../aok-relax/www/aok-relax.min.js'
      }
    }
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-uglify');

  // Default task(s).
  grunt.registerTask('default', ['uglify']);

};