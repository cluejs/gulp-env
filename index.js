const gutil = require('gulp-util');

const $ENV_PRODUCTION = 'production';
const $ENV_DEVELOPMENT = 'development';

let ENV = $ENV_PRODUCTION;

const isProduction = () => {
    return ENV === $ENV_PRODUCTION
};

const isDevelopment = () => {
    return ENV === $ENV_DEVELOPMENT
};

const setProduction = () => {
    ENV = $ENV_PRODUCTION;
    // noinspection JSUnresolvedFunction
    gutil.log(`${gutil.colors.green('Set Environment')}: ${gutil.colors.yellow($ENV_PRODUCTION)}`, gutil.colors.magenta(isProduction()));
    return isProduction();
};

const setDevelopment = () => {
    ENV = $ENV_DEVELOPMENT;
    // noinspection JSUnresolvedFunction
    gutil.log(`${gutil.colors.green('Set Environment')}: ${gutil.colors.yellow($ENV_DEVELOPMENT)}`, gutil.colors.magenta(isDevelopment()));
    return isDevelopment();
};

module.exports.isProduction = isProduction;
module.exports.isDevelopment = isDevelopment;
module.exports.setProduction = setProduction;
module.exports.setDevelopment = setDevelopment;