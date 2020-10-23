# Web Toolbox
Web Toolbox is a deadsimple web app that is meant to provide an easy way for users to convert different types of data into different formats in order to ease stress about finding a tool online they could use. Since it just uses vanilla HTML, CSS and Javascript, it can be easily extended to support new and different type of conversions.

# How to Use
Node is a requirement and it's recommended to use Webstorm without tabbing and installing is as simple as running `npm i`
Afterwards, to run the developer server, run `npm run dev`

You can also export as a static site by running `npm run export` and then using the files in `__sapper__/export`.

# How to Contribute
Contributing is very easy! Navigate to the file `/src/routes/tools/_tools.js` and open that up inside of a new Webstorm tab.
Using this template:
```svelte
{
        title: 'Example Title',
        slug: 'theURL-cannothavespaces',
        description: 'Example Description',
        html: `
          <html>
            <head>
              <script>
                
              </script>
              <style>
              
              </style>
            </head>
            <body>
              
            </body>
          </html>
        `
    },
```
Copy and paste that to the top of the array and use that as your starting point for creating your converter.
Afterwards, use simple HTML, CSS and Javascript to finish creating your page and make a Pull Request on Github where me, and possibly others, can review the code, add suggestion and eventually push it through into production.

# PWA and Extra Features
This website is almost 100% PWA ready and is almost ready to be shipped to the Progressive Web App Store, however I'm running into some issues with the cache not working after you close the app, which means no offline access, and help would be very much appreciated.

The web app also should be mostly mobile friendly, however I do not have any modern day devices to test out how it performs and looks on real hardware.

# To Do
* [ ] Dark Mode
- [ ] Fully Offline PWA
- - [x] PWA Support
* [ ] Switching from the Sapper template
- [ ] Switching from Webpack to Rollup
- [ ] Make Example Converters
