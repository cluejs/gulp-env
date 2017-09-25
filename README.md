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
$$.env = require('gulp-env');

gulp.task('watch', (callback) => {
    
    $$.env.setDevelopment();
    
    // code
    callback()
})

gulp.task('build:css', () => {
    return gulp.src(['**/**/*.css'], {cwd: './src/sass'})
        .pipe(require('gulp-error-handler')({exitOnError: $$.env.isProduction()}))
        .pipe(require('gulp-if')($$.env.isDevelopment(), require('gulp-changed')('./dest/css', {extension: '.css'})))
})

```
####