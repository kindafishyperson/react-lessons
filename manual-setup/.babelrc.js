module.exports = {
    presets: [
        '@babel/preset-react',
        ["@babel/preset-env", { "modules": false }]
    ],
    targets: {
        esmodules: true,
        browsers: "> 2%"
    }
}