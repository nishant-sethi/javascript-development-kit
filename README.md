# JavaScript Development Environment Starter Kit

This is a generic JavaScript development environment that can be used to kickstart any of javascript project.

**NOTE**: This isn't tied to any specific JS framework.

## Get Started

1. **Install [Latest Node](https://nodejs.org)**. Need to run multiple versions of Node? Use [nvm](https://github.com/creationix/nvm) or [nvm-windows](https://github.com/coreybutler/nvm-windows)
2. **Clone this repository.** - `git clone https://github.com/nishant-sethi/javascript-development-kit` or [download the zip](https://github.com/nishant-sethi/javascript-development-kit/archive/master.zip)
3. **Make sure you're in the directory you just created.** - `cd javascript-development-kit`
4. **Install Node Packages.** - `npm install`
5. **Run the app.** - `npm start -s`
   This will run the automated build process, start up a webserver, and open the application in your default browser. When doing development with this kit, this command will continue watching files all your files. Every time you hit save the code is rebuilt, linting runs, and tests run automatically.

   **Note**: The -s flag is optional. It enables silent mode which suppresses unnecessary messages during the build.

## Having Issues?

1. Run `npm install` - If you forget to do this, you'll see this: `babel-node: command not found`.
2. Try running the latest version of Node.
3. Make sure files with names that begin with a dot (.babelrc, .editorconfig, .eslintrc) are copied to the project directory root. This is easy to overlook if you copy this repository manually.
4. Don't run the project from a symbolic link. It will cause issues with file watches.
5. Having linting issues? Delete any .eslintrc that you're storing in your user directory. Also, disable any ESLint plugin / custom rules that you've enabled within your editor. These will conflict with the ESLint rules defined in the course.
6. Seeing `Error: listen EADDRINUSE :::3000`? That means port 3000 is already in use on your machine. You probably have another instance of this project running on your machine in a different window. So find that window and kill the other instance using Ctrl+C.
