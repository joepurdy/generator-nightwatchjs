'use strict';

module.exports = {
  'Test': function (client) {
    var google = client.page.google();

    google.navigate()
      .assert.title('Google')
      .assert.visible('@searchBar')
      .setValue('@searchBar', 'nightwatch')
      .click('@submit');

    client.end();
  }
};