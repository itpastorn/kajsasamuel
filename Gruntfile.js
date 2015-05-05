module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        autoprefixer: {
            dist: {
                files: {
                    'build/style.css': 'style.css'
                }
            }
        },
        watch: {
            styles: {
                files: ['placeholder.css'],
                tasks: ['autoprefixer']
            }
        }
    });

    // task setup 
    grunt.registerTask('default', []);
};
