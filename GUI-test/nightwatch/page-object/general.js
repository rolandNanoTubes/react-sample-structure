module.exports = {
    elements: {
        navHomeBtn: "#navigation > header > a:nth-child(1)",
        navFacebookBtn: "#navigation > header > a:nth-child(2)",
        navGoogleBtn: "#navigation > header > a:nth-child(3)",
    },
    commands: [
        {
            homeUrl: function () {
                return this.api.launchUrl;
            },
        }
    ]
};