module.exports = {
    entry: ['./src/main.js'],

    output: {
        path: __dirname,
        publicPath: '/',
        filename: 'bundle.js'
    },
    devServer: {
        inline: true,
        port: 1337
    },
    module: {
        loaders: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            query: {
                presets: ['react','es2015', 'stage-1']
            }

        }]
    }
}