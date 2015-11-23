module.exports = function () {
    var config ={
        //all js to vet
        alljs: [
            './*.js',
            './**/*.js'
        ],

        temp: './.temp',
        less: './src/'
    };

    return config;
};

