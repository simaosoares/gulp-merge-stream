'use strict';

const gulpfile = require('gulp');
const es = require('event-stream');
const fs = require('fs');
const mergeStream = require('merge-stream');

gulpfile.task('event-stream', function () {
    es.merge([
        fs.createReadStream('input1.txt'),
        fs.createReadStream('input2.txt')
    ]).pipe(fs.createWriteStream('output-event-stream.log'));
});

gulpfile.task('merge-stream', function () {
    mergeStream(
        fs.createReadStream('input1.txt'),
        fs.createReadStream('input2.txt'))
        .pipe(fs.createWriteStream('output-merge-stream.log'));
});

gulpfile.task('default', ['event-stream', 'merge-stream']);
