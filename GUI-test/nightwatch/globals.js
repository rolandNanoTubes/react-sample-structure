var chromedriver = require('chromedriver');  // for chrome testing

module.exports = {
    before: function(done) {
        chromedriver.start();
        done();
    },
    after: function(done) {
        chromedriver.stop();
        done();
    },
    clickElement: function (browser, selector, callback) {
        console.log(selector);
        return browser.waitForElementPresent(selector, 2000, function() {
            browser.click(selector, function (res) {
                if (res.status === 0 && typeof callback === "function") {
                    callback();
                }
            })
        })
    }
};