'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');
var path = require('path');
var mkdirp = require('mkdirp');

function slugify(text)
{
  return text.toString().toLowerCase()
    .replace(/\s+/g, '-')           // Replace spaces with -
    .replace(/[^\w\-]+/g, '')       // Remove all non-word chars
    .replace(/\-\-+/g, '-')         // Replace multiple - with single -
    .replace(/^-+/, '')             // Trim - from start of text
    .replace(/-+$/, '');            // Trim - from end of text
}

module.exports = yeoman.Base.extend({
  prompting: function () {
    // Have Yeoman greet the user.
    this.log(yosay(
      'Welcome to the nightwatch.js test suite generator!'
    ));

    var prompts = [
      {
        type: 'input',
        name: 'suiteName',
        message: 'Test suite name?',
        default: 'e2e'
      },
      {
        type: 'input',
        name: 'suiteDescription',
        message: 'Test suite description?',
        default: 'My awesome E2E test suite'
      },
      {
        type: 'input',
        name: 'authorName',
        message: 'Author name?',
        store: true
      }
    ];

    return this.prompt(prompts).then(function (props) {
      this.props = props;
      this.props.nameSlug = slugify(props.suiteName); 
    }.bind(this));
  },

  default: function () {
    if (path.basename(this.destinationPath()) !== this.props.nameSlug) {
      this.log(
        'Your generator must be inside a folder named ' + this.props.nameSlug + '\n' +
        'I\'ll automatically create this folder.'
      );
      mkdirp(this.props.nameSlug);
      this.destinationRoot(this.destinationPath(this.props.nameSlug));
    }
  },

  writing: function () {
    var context = {
      "name": this.props.nameSlug,
      "description": this.props.suiteDescription,
      "author": this.props.authorName
    }
    this.template('_package.json', 'package.json', context);

    this.copy('_nightwatch.json', 'nightwatch.json');
    this.copy('_globals.js', 'globals.js');
    this.copy('_jshintrc', '.jshintrc');
    this.copy('_gitignore', '.gitignore');
    this.copy('_editorconfig', '.editorconfig');

    this.bulkDirectory('assertions', 'assertions');
    this.directory('commands', 'commands');
    this.directory('output', 'output');
    this.directory('pages', 'pages');
    this.directory('reports', 'reports');
    this.directory('tests', 'tests');
  },

  install: function () {
    this.installDependencies({
      "bower": false
    });
  }
});
