'use strict';
var LIVERELOAD_PORT = 35729;
var lrSnippet = require('connect-livereload')({port: LIVERELOAD_PORT});
var mountFolder = function (connect, dir) {
  return connect.static(require('path').resolve(dir));
};

module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        appDir: 'app',
        concat: {
          release: {
            options: {
            },
            dist: {
              src: ['<%= appDir %>/js/**/*.js'],
              dest: '<%= appDir %>/js/hookah.js',
            }
          }
        },

        uglify: {
          release: {
            options: {
              banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n',
              mangle: {
                except: []
              },
              compress: {
                drop_console: true
              }
            },
            files: {
              "<%= appDir %>/js/hookah.min.js": ["<%= appDir %>/js/hookah.js"]
            }
          }
        },

        jshint: {
          options: {
            curly: true,
            eqeqeq: true,
            latedef:true,
            nonbsp:true,
            undef:true,
            unused:true,
            asi:true,
            boss:true,
            lastsemic:true,
            multistr: true,
            notypeof: true,
            shadow:true,
            sub: true,
            globals:{
              "angular": true
            }
          },
          files: [
            '<%= appDir %>/js/**/*.js'
          ]
        },

        sass: {
          develop:{
            options: {
              style: 'expanded'
            },
            files: {
              '<%= appDir %>/css/main.css': '<%= appDir %>/scss/main.scss'
            }
          }
        },

        watch: {
          develop:{
            options: {
              nospawn: true,
              livereload: true
            },
            files: [
              '<%= appDir %>/*.html',
              '<%= appDir %>/css/**/*.css',
              '<%= appDir %>/templates/**/*.html',
              '<%= appDir %>/scss/**/*.scss',
              '<%= appDir %>/js/**/*.js',
              '<%= appDir %>/data/**/*.json',
              '<%= appDir %>/images/**/*.{png,jpg,jpeg,gif,webp,svg}'
            ], 
            tasks: ['jshint', 'sass:develop'],
            release: {
              tasks: ['jshint', 'concat:release', 'uglify:release']
            }
          }
        },

        connect: {
          options: {
            port: 9000,
            // change this to '0.0.0.0' to access the server from outside
            hostname: 'localhost'
          },
          livereload: {
            options: {
              middleware: function (connect) {
                return [
                  mountFolder(connect, 'app'),
                  lrSnippet
                ];
              }
            }
          }
        }, 
        open: {
          server: {
            path: 'http://localhost:<%= connect.options.port %>'
          }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-open');


    grunt.registerTask('server', function (target) {

        grunt.task.run([
            'connect:livereload',
            'open',
            'watch:develop'
        ]);
    });
};