module.exports = (grunt) ->

  grunt.initConfig

    pkg: grunt.file.readJSON('package.json')

    clean:
      src:
        ['generated']

    concat:
      less:
        src: ['less/**/*.less']
        dest: 'generated/style.less'

    less:
      build:
        src:  ['generated/style.less']
        dest: 'css/style.css'

    watch:
      styles:
        files: ['less/**/*.less']
        tasks: ['concat', 'less', 'clean']
        options: livereload: true


  grunt.loadNpmTasks 'grunt-contrib-concat'
  grunt.loadNpmTasks 'grunt-contrib-clean'
  grunt.loadNpmTasks 'grunt-contrib-less'
  grunt.loadNpmTasks 'grunt-contrib-watch'

  # make tasks
  grunt.registerTask 'build', ['concat', 'less']

  # default
  grunt.registerTask 'default', ['build', 'clean']

# todos
# minify css
# concat lib css files
# concat, minify, uglify js