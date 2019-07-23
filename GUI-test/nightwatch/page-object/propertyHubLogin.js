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

    // 'Should be able to navigate to facebook page': function (browser) {
    //     var globals = browser.globals;
    //     var pageObjectGlobal = browser.page.general();
    //
    //     globals.clickElement(browser, pageObjectGlobal.elements.navFacebookBtn.selector, function() {
    //         browser.assert.urlEquals('http://localhost:3000/fb');
    //         browser.pause(2000);
    //     });
    // }

    'Should see landing page': function (browser) {
        var globals = browser.globals;

        browser.assert.urlEquals('http://localhost:3000/');
        browser.expect.element('.text-center.account-logo-box > h2').to.be.present.before(5000);
    },

    'Should be able to login and navigate to ': function (browser) {
        var globals = browser.globals;

        browser.setValue('input[name="email"]', 'schyron.delrosario@tooltwist.com', (res) => {
            if (res.status === 0) {
                browser.assert.value("input[name=email]", "schyron.delrosario@tooltwist.com");
                // browser.expect.element('input[name=email]').text.to.equal('schyron.delrosario@tooltwist.com');

                browser.click('button[type="submit"]', () => {
                    browser.expect.element('div.pt35').to.be.present.before(10000);
                    browser.assert.urlEquals('https://access-uat-api.corelogic.asia/access/loginPage.html');
                })
            }
        })
    },

    'Should be able to login in clapi': function (browser) {
        browser.expect.element('input[type="text"]').to.be.present.before(10000);
        browser.expect.element('input[type="password"]').to.be.present.before(10000);

        browser.setValue('input[name="username"]', 'rssibug');
        browser.setValue('input[name="password"]', 'Kashmir80!!');

        browser.pause(2000);
        browser.assert.value("input[name=username]", "rssibug");
        browser.assert.value("input[name=password]", "Kashmir80!!");

        browser.click('input[type="submit"]', () => {
            browser.expect.element('div.pt35.container').to.be.present.before(10000);
            browser.assert.urlEquals('https://access-uat-api.corelogic.asia/access/account/selection');
        })
    },
    'Should be able to select/chose acoount': function (browser) {
        browser.expect.element('ul.list-anchor').to.be.present.before(10000);
        browser.expect.element('ul.list-anchor > div > a:nth-child(4) > span').text.to.equal('CoreLogic PropertyHub AU').before(5000);

        browser.click('ul.list-anchor > div > a:nth-child(4) > span', () => {
            browser.expect.element('#page-title-box > div.DASHBOARD > h1').to.be.present.before(10000);
            browser.assert.urlEquals('http://localhost:3000/dashboard');
        })

    }
};