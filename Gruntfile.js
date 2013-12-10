module.exports = function(grunt) {

    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-requirejs');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-less');

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        meta: {
            vendor: [
                'vendor/bootstrap/js/bootstrap-dropdown.js',
                'vendor/bootstrap/js/bootstrap-tab.js',
                'vendor/bootstrap/js/bootstrap-tooltip.js',
                'vendor/bootstrap/js/bootstrap-popover.js',
                'vendor/bootstrap/js/bootstrap-modal.js'
            ],
            vendor_css: [
            ],
            app: [
                'app/**/**/*.js',
                'app/**/*.js'
            ],
            css: [
                'style/less/**/*.less'
            ]
        },
        connect: {
            server: {
                options: {
                    port: 8000,
                    base: '.',
                    keepalive: false
                }
            }
        },
        mocha: {
            all: {
                options: {
                    urls: [
                        'http://localhost:<%= connect.server.options.port %>/test/'
                    ]
                }
            }
        },
        jshint: {
            options: {
                jshintrc: '.jshintrc'
            },
            files: {
                src: '<%= meta.app %>'
            }
        },
        less: {
            production: {
                options: {
                    compress: true
                },
                files: {
                    'style/css/style.css': 'style/less/style.less'
                }
            }
        },
        requirejs: {
            compile: {
                options: {
                    baseUrl: ".",
                    name: 'app/main',
                    mainConfigFile: 'require.conf.js',
                    preserveLicenseComments: false,
                    optimize: 'none',
                    out: "dist/app.js",
                    stubModules: ['text', 'json'],
                    insertRequire: ['app/main']
                }
            }
        },
        concat: {
            vendor: {
                src: '<%= meta.vendor %>',
                dest: 'dist/vendor.js'
            },
            vendor_css: {
                src: '<%= meta.vendor_css %>',
                dest: 'dist/vendor.css'
            }
        },
        uglify: {
            vendor: {
                options: {
                    sourceMap:'dist/vendor.map',
                    report: 'min'
                },
                files: {
                    'dist/vendor.min.js': ['dist/vendor.js']
                }
            },
            app: {
                options: {
                    report: 'min'
                },
                files: {
                    'dist/app.min.js': ['dist/app.js']
                }
            }
        },
        watch: {
            vendor: {
                files: '<%= meta.vendor %>',
                tasks: ['build:vendor']
            },
            app: {
                files: '<%= meta.app %>',
                tasks: ['default']
            },
            css: {
                files: '<%= meta.css %>',
                tasks: ['build:css']
            }
        }
    });


    grunt.registerTask('default',['jshint','build:vendor','build:app','build:css']);
    grunt.registerTask('build:vendor',['concat:vendor','uglify:vendor']);
    grunt.registerTask('build:app',['requirejs','uglify:app']);
    grunt.registerTask('build:css',['less','concat:vendor_css']);

};