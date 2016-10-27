/*
 * grunt-writefile
 * https://github.com/lunsdorf/grunt-writefile
 *
 * Copyright (c) 2014 Sören Lünsdorf
 * Licensed under the MIT license.
 */
module.exports = function (grunt) {
    'use strict';
    grunt.initConfig({
        typescript: {
            base: {
                src: ['development/**/*.ts'],
                options: {
                    "target": "es5",
                    "module": "commonjs",
                    "moduleResolution": "node",
                    "sourceMap": true,
                    "emitDecoratorMetadata": true,
                    "experimentalDecorators": true,
                    "removeComments": false,
                    "noImplicitAny": false
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-typescript');
    grunt.registerTask('default',['typescript:base']);
};
