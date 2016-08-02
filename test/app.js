'use strict';
var path = require('path');
var assert = require('yeoman-assert');
var helpers = require('yeoman-test');

describe('generator-nightwatchjs:app', function () {
  describe('when suite is generated with default values', function () {
    before(function () {
      return helpers.run(path.join(__dirname, '../generators/app'))
        .withPrompts({suiteName: 'e2e', suiteDescription: 'My awesome E2E test suite', authorName: ''})
        .toPromise();
    });

    it('creates default package.json', function () {
      assert.jsonFileContent(
        'package.json', {name: 'e2e', description: 'My awesome E2E test suite', author: ''}
      );
    });

    it('creates static template files', function () {
      assert.file([
        'assertions/customValue.js',
        'commands/resizePicture.js',
        'output/logs/.gitignore',
        'output/screenshots/.gitignore',
        'pages/google.js',
        'pages/google_section.js',
        'reports/.gitignore',
        'tests/google.js',
        'tests/google_section.js',
        '.editorconfig',
        '.gitignore',
        '.jshintrc',
        'globals.js',
        'nightwatch.json'
      ]);
    });
  });
});
