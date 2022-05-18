# Web Toolbox
Web Toolbox is a deadsimple web app that is meant to provide an easy way for users to convert different types of data into different formats in order to ease stress about finding a tool online they could use. Since it just uses vanilla HTML, CSS and Javascript, it can be easily extended to support new and different type of conversions.

<!-- ## 🚀 Demo 
<a href="https://callowaysutton.github.io/WebToolBox" target="blank">
<img src="https://img.shields.io/website?url=https%3A%2F%2Fcallowaysutton.github.io%2FWebToolBox&logo=github&style=flat-square" />
</a> -->

## 🧐 Features

- Fully responsive
- Supports PWA installation
- Easily etendable
- Simple and intuitive workflow
- Lightning fast browsing speeds thanks to prefetching

## 🛠️ Installation Steps

1. Clone the repository

```bash
git clone https://github.com/callowaysutton/WebToolBox.git
```

2. Change the working directory

```bash
cd WebToolBox
```

3. Install dependencies

```bash
npm install
```

4. Run the app

```bash
npm run dev
```

5. You can also export as a static site to the `__sapper__/export` directory

```bash
npm run export
```

🌟 You are all set!

## 🍰 Contributing

[![DeepSource](https://deepsource.io/gh/callowaysutton/WebToolBox.svg/?label=active+issues&show_trend=true)](https://deepsource.io/gh/callowaysutton/WebToolBox/?ref=repository-badge)

Navigate to the file `/src/routes/tools/_tools.js` and open that up inside of a new Webstorm tab.
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

Please contribute using [GitHub Flow](https://guides.github.com/introduction/flow). Create a branch, add commits, and [open a pull request](https://github.com/callowaysutton/WebToolBox/compare).

Please read [`CONTRIBUTING`](CONTRIBUTING.md) for details on our [`CODE OF CONDUCT`](CODE_OF_CONDUCT.md), and the process for submitting pull requests to us.

## PWA and Extra Features
This website is almost 100% PWA ready and is almost ready to be shipped to the Progressive Web App Store, however I'm running into some issues with the cache not working after you close the app, which means no offline access, and help would be very much appreciated.

The web app also should be mostly mobile friendly, however I do not have any modern day devices to test out how it performs and looks on real hardware.

## TODO
* [ ] Dark Mode
- [ ] Fully Offline PWA
- - [x] PWA Support
- [ ] Switching from Webpack to Rollup
- [ ] Make Example Converters
