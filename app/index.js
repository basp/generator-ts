var Generator = require('yeoman-generator');

module.exports = class extends Generator {
    constructor(args, opts) {
        super(args, opts);
    }

    writing() {
        this.fs.copyTpl(
            this.templatePath('index.html'),
            this.destinationPath('src/index.html'),
            { title: 'TypeScript Application' }
        )
    }

    // initializing
    // prompting
    // configuring
    // default
    // writing
    // conflicts
    // install
    // end
};