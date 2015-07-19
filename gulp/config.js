module.exports = {
    browser_support: [
        "ie >= 9",
        "ie_mob >= 10",
        "ff >= 30",
        "chrome >= 34",
        "safari >= 7",
        "opera >= 23",
        "ios >= 7",
        "android >= 4.4",
        "bb >= 10"
    ],
    loadplugins: {
        pattern: ["gulp-*", "gulp.*"],
        config: "package.json",
        scope: ["devDependencies"],
        replaceString: /^gulp(-|\.)/,
        camelize: true,
        lazy: true,
        rename: {}
    },
    bower: {
        directory: './bower_components'
    }
}
