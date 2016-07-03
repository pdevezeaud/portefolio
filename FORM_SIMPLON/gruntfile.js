/** Gruntfile.js */
module.exports = function(grunt) {
    // Project configuration.
    grunt.initConfig({
            pkg: grunt.file.readJSON('package.json'),
            //Configuration for watch
            watch: {
                // ****************  H T M L CSS JS ************/
                //and reload the page when they changed
                front: {
                    files: ['css/**/*.css','**/*.html','!**/node_modules/**'],
                    options: {
                        livereload: true,
                    },
                },
         

            /********** S A S S  *********************/
            scss: {
                files: 'scss/**/*.scss',
                tasks: ['sass'],
            },   
        },

        //The sass task
        sass: {
            dev: {
                src: ['scss/*.scss'],
                dest: 'css/main.css',
            },
        },


    });

    // Load the plugin that provides the "watch" task.
    grunt.loadNpmTasks('grunt-contrib-watch');

    // Default task(s).
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.registerTask('default',['watch']);

};