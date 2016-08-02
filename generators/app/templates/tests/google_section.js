'use strict';

module.exports = {
  'Test Google Section': function (client) {
    var google = client.page.google_section();

    google.navigate()
          .expect.section('@menu').to.be.visible;

    google.click('#gbwa');

    var menuSection = google.section.menu;
    menuSection.expect.element('@mail').to.be.visible;
    menuSection.expect.element('@calendar').to.be.visible;

    menuSection.click('@mail');

    client.end();
  }
};