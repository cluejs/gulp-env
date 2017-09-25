# gulp-env

## Checkers:
- `.isProduction()`
- `.isDevelopment()`

## Setters:
- `.setProduction()`
- `.setDevelopment()`

## Usage:

```javascript
global.$$ = {};

$$.env = require('@cluejs/gulp-env');
$$.gulp_error_handler = require('@cluejs/gulp-error-handler');

gulp.task('watch', (callback) => {
    
    $$.env.setDevelopment();
    
    // code
    callback()
})

gulp.task('build:css', () => {
    return gulp.src(['**/**/*.css'], {cwd: './src/sass'})
        .pipe($$.gulp_error_handler({exitOnError: $$.env.isProduction()}))
        .pipe(require('gulp-if')($$.env.isDevelopment(), require('gulp-changed')('./dest/css', {extension: '.css'})))
})

```
####