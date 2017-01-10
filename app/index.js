var Generator = require('yeoman-generator');

// initializing
// prompting
// configuring
// default
// writing
// conflicts
// install
// end

module.exports = Generator.extend({
    writing: {
        'html': function () {
            this.fs.copyTpl(
                this.templatePath('index.html'),
                this.destinationPath('src/index.html')
            );
        },

        'script': function () {
            this.fs.copyTpl(
                this.templatePath('*.ts'),
                this.destinationPath('src')
            );
        },

        'package.json': function () {
            this.fs.writeJSON(this.destinationPath('package.json'), {
                name: 'frotz',
                version: '0.1.0',
                private: true,
                scripts: {
                    test: 'echo \"Error: no test specified\" && exit 1'
                },
                devDependencies: {
                    'babel-preset-es2015': '^6.18.0',
                    'babelify': '^7.3.0',
                    'browserify': '^13.3.0',
                    'gulp': '^3.9.1',
                    'gulp-sourcemaps': '^2.3.0',
                    'gulp-uglify': '^2.0.0',
                    'gulp-util': '^3.0.8',
                    'tsify': '^3.0.0',
                    'typescript': '^2.1.4',
                    'vinyl-buffer': '^1.0.0',
                    'vinyl-source-stream': '^1.1.0',
                    'watchify': '^3.8.0'
                }
            });  
        },

        'tsconfig.json': function () {
            this.fs.writeJSON(this.destinationPath('tsconfig.json'), {
                files: [
                    'src/main.ts'
                ],
                compilerOptions: {
                    noImplicitAny: true,
                    target: 'es2015'
                }
            });
        },

        'gulpfile.js': function () {
            this.fs.copyTpl(
                this.templatePath('gulpfile.js'),
                this.destinationPath('gulpfile.js')
            );
        }
    }
});