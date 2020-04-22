const { watch, series, src, dest } = require('gulp');

function restartServer(cb) {
    console.log("restartServer");
    cb();
}
function defaultTask(cb) {
    watch('*.js, *.*.js', restartServer);
    console.log("default")
    cb();
}

exports.default = defaultTask;