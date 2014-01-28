module.exports = function (grunt) {

  'use strict';

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    less: {
      all: {
        files: {
          "dist/main.css": "src/main.less",
        }
      }
    },
    htmlbuild: {
      dist: {
        src: 'src/tumblr.html',
        dest: 'tumblr.html',
        options: {
          styles: {
            libs: [
              'libs/bootstrap.css',
            ],
            main: ['dist/main.css'] 
          },
          scripts: {
            minified: 'dist/<%= pkg.name %>.min.js'
          }
        },
      }
    },
    watch: {
      files: ['<%= concat.dist.src %>'],
      tasks: ['less', 'htmlbuild']
    }
  });

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-html-build');

  grunt.registerTask('default', ['less', 'htmlbuild']);
};
