//gruntfile

module.exports = function(grunt) {

  grunt.initConfig({
    jshint: {
      files: ['Gruntfile.js', 'app/**/*.js', 'index.js', 'server.js'],
      options: {
        globals: {
          jQuery: true
        }
      }
    },
    watch: {
      files: ['<%= jshint.files %>'],
      tasks: ['jshint']
    },
    'ftp-deploy': {
      build: {
        auth: {
          host: 'ftp.moore-interactive.net',
          port: 21,
          authKey: 'key1'
        },
        src: './public',
        dest: '/public_html/js/vevo',
        exclusions: ['./public/**/.DS_Store', './public/**/Thumbs.db', './public/tmp']
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-ftp-deploy');

  grunt.registerTask('default', ['jshint']);



};