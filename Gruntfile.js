module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		
		qunit: {
			all: ['tests/qunit.html']
		},
		blanket_qunit: {
			all: {
				options: {
					urls: ['tests/qunit.html?coverage=true&gruntReport'],
					threshold: 90,
					globalThreshold: 95
				}
			}
		}
	});
	grunt.loadNpmTasks('grunt-contrib-qunit');
	grunt.loadNpmTasks('grunt-blanket-qunit');
	grunt.registerTask('unit', ['qunit:all']);
	grunt.registerTask('coverage', ['blanket_qunit:all']);
}
