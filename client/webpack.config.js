const {
    constants: {
        ROOT_DIR,
        DIST_DIR,
        SCSS_DIR,
        ASSETS_DIR,
        COMPONENTS_DIR,
        INTERFACES_DIR,
        PAGES_DIR,
        ROUTES_DIR,
        STORAGE_DIR,
        REACT_HOOKS_DIR,
        UTILS_DIR,
        LOCAL_IP_MACHINE
    },
    methods: {
        defineMode,
        defineFilename,
        optimization,
        getPlugins,
        cleanCssLoader,
        cssLoaders,
        babelOptions
    }
} = require('./webpackUtils');
const { isDev, isProd } = defineMode();

module.exports = {
    target: 'web',
    context: ROOT_DIR,
    entry: './index.tsx',
    output: {
        filename: defineFilename('js'),
        path: DIST_DIR,
        publicPath: (isProd) ? './' : '/',
    },
    resolve: {
        extensions: ['.js', '.png', '.jpg', '.jpeg', '.scss', '.tsx', '.ts', '.svg'],
        alias: {
            '@': ROOT_DIR,
            '@styles': SCSS_DIR,
            '@assets': ASSETS_DIR,
            '@components': COMPONENTS_DIR,
            '@interfaces': INTERFACES_DIR,
            '@pages': PAGES_DIR,
            '@routes': ROUTES_DIR,
            '@storage': STORAGE_DIR,
            '@hooks': REACT_HOOKS_DIR,
            '@utils': UTILS_DIR,

            // @WEB3
            'stream': require.resolve('stream-browserify'),
            'assert': require.resolve('assert/'),
            'http': require.resolve('stream-http'),
            'https': require.resolve('https-browserify'),
            'os': require.resolve('os-browserify/browser'),
            'buffer': require.resolve('buffer'),
            'crypto': require.resolve('crypto-browserify'),
            'events': require.resolve('events/')
        }
    },
    devtool: isDev ? 'inline-source-map' : false,
    devServer: {
        host: LOCAL_IP_MACHINE,
        port: 3000,
        historyApiFallback: true,
        hot: isDev,
        liveReload: isDev,
        open: isDev,
        static: isDev
    },
    optimization: optimization(isProd),
    plugins: getPlugins(isProd),
    module: {
        rules: [
            {
                test: /\.(tsx|ts)$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.s[ac]ss$/,
                use: cssLoaders(isDev)
            },
            {
                test: /\.css$/,
                use: cleanCssLoader(isDev)
            },
            {
                test: /\.(png|jpg|svg|gif|ttf|woff|woff2|eot|pdf)$/,
                use: ['file-loader']
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: babelOptions('@babel/preset-react')
                }
            }
        ]
    }
};