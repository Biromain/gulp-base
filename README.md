# Gulp with Bower base for starting project

### Why this ?
I'm so bored to make all times same things to get a gulp project.
![](http://i.imgur.com/SvVIX4w.gif)

### Why not more ?
Because *(It's just a basic project)*
I will try to make another repo with bulletproof tasks but gradually.

### Plugins List
- [gulp](https://www.npmjs.com/package/gulp): ofc
- [gulp-load-plugins](https://www.npmjs.com/package/gulp-load-plugins): Why require all tasks :)
- [require-dir](https://www.npmjs.com/package/require-dir): To load all tasks in folder
- [gulp-if-else](https://www.npmjs.com/package/gulp-if-else): Why not just modify task comportment in stream ? (Ex: env || prod, ...)
- [gulp-plumber](https://www.npmjs.com/package/gulp-plumber): Stop break my cli, please gulp
- [bower](https://www.npmjs.com/package/bower): Manage assets/libs
- [gulp-bower](https://www.npmjs.com/package/gulp-bower): Bower in gulp, what else ?

### Why config file and tasks separatly?
Usually, a task in differents projects is same, just paths and filenames are changed, right?
You must make an action already written in another project? Just copy/paste the file of task and set configuration, path and filename in config.

### How to start ?
Oh, yes! You need to install deps.
`npm install` It's so hard.

You have some tasks in project for exemple or whatever you want:
- default: Empty but you can make your [watch](https://www.npmjs.com/package/gulp-watch) or [browsersync](http://www.browsersync.io/docs/gulp/) tasks. :D
- bower: Install bower assets
- boweru: Update assets

*You are now ready to write your own tasks!*
![](http://i.imgur.com/vkK6YrI.gif)
