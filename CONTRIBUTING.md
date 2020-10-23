# How to Contribute
Contributing is very easy, just create your single page tool in the `_tools.json` file located `/src/routes/tools/_tools.js` as another object in the Tools array.
Please try and follow this style in the beginning and then minimize your assets afterwards to save space.
```javascript
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
# Style Guide
Please keep in my mind that we use 2 space indentations and not tabs or 4 space indentations, so if you are going to contribute please readjust your IDE accordingly
