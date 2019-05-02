// Gruntfile.js

// our wrapper function (required by grunt and its plugins)
// all configuration goes inside this function
module.exports = function(grunt) {

  // ===========================================================================
  // CONFIGURE GRUNT ===========================================================
  // ===========================================================================
  grunt.initConfig({

    // get the configuration info from package.json ----------------------------
    // this way we can use things like name and version (pkg.name)
    pkg: grunt.file.readJSON('package.json'),

    bower: {
        install: {
        	options: {
        		targetDir: './assets/lib/'
        	}
        }
    },
    useminPrepare: {
        html: ['index.html'],
        options: {
            dest: './'
        }
    },

    usemin: {
    	html: ['index.html'],
        options: {
            blockReplacements: {
            	css: function( block ) {
            		return '<link rel="stylesheet" href="' + block.dest + '"/>';
            	},
            	js: function( block ) {
            		return '<script src="' + block.dest + '"></script>';
            	}
            }
        }
    }
  });

//Load the plugin that provides the "less" task.
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-filerev');
  grunt.loadNpmTasks('grunt-usemin');
  grunt.loadNpmTasks('grunt-bower-task');
 
  // Prod task(s).
  grunt.registerTask('build', [
	  'useminPrepare',
	  'concat:generated',
	  'cssmin:generated',
	  'uglify:generated',
	  'usemin'
  ]);

};