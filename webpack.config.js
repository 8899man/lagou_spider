module.exports = {
    entry: "./views/index.js",
    output: {
        path: "./views/build/",
        filename: "index.build.js"
    },
    "scripts": {
        "dev": "webpaack -- waitch"
    }

};
