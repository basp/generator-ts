'use strict';

var Generator = require('yeoman-generator');
var yosay = require('yosay');
var path = require('path');

// var Generator = require('yeoman-generator');

// initializing
// prompting
// configuring
// default
// writing
// conflicts
// install
// end

class TypeScriptGenerator extends Generator {
    constructor(args, opts) {
        super(args, opts);

        this.argument('appname', {
            type: String,
            required: false
        });

        this.appname = this.options.appname || path.basename(process.cwd());
    }

    initializing() {
        this.log(yosay('Welcome to the TypeScript generator!'));
    }

    prompting() {
        return this.prompt([{
            type: 'input',
            name: 'appname',
            message: 'Application name',
            default: this.appname
        }
        ]).then(answers => {
            this.log('app name', answers.appname);
        });
    }
}

module.exports = TypeScriptGenerator;

/*
module.exports = Generator.extend({
    writing: {
        'html': function () {
            this.fs.copyTpl(
                this.templatePath('src/index.html'),
                this.destinationPath('src/index.html')
            );
        },

        'script': function () {
            this.fs.copyTpl(
                this.templatePath('src/*.ts'),
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

        'karma.conf.js': function () {
            this.fs.copyTpl(
                this.templatePath('_karma.conf.js'),
                this.destinationPath('karma.conf.js')
            );
        },

        'gulpfile.js': function () {
            this.fs.copyTpl(
                this.templatePath('gulpfile.js'),
                this.destinationPath('gulpfile.js')
            );
        }
    },

    install: function () {
        const devDependencies = [
            '@types/jasmine',
            '@types/jquery',
            'babel-preset-es2015',
            'babelify',
            'browserify',
            'gulp',
            'gulp-sourcemaps',
            'gulp-uglify',
            'gulp-util',
            'jasmine-core',
            'karma',
            'karma-chrome-launcher',
            'karma-jasmine',
            'karma-typescript',
            'tsify',
            'typescript',
            'vinyl-buffer',
            'vinyl-source-stream',
            'watchify'
        ];

        this.npmInstall(devDependencies, { 'save-dev': true });
    }
});
*/