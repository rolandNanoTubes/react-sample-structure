module.exports = {
    before: function (browser) {
        browser.pause(2000);
        var pageObjectGlobal = browser.page.general();
        console.log(pageObjectGlobal.homeUrl());
        browser.url('localhost:3000'); // navigate to home

        browser.pause(2000);
    },
    after: function () {

    },

    'Should be able to navigate to facebook page': function (browser) {
        var globals = browser.globals;
        var pageObjectGlobal = browser.page.general();

        globals.clickElement(browser, pageObjectGlobal.elements.navFacebookBtn.selector, function() {
            browser.assert.urlEquals('http://localhost:3000/fb');
            browser.pause(2000);
        });
    }
};