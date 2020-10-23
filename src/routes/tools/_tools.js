const tools = [
    {
        title: 'Storage Calculator',
        slug: 'storageconvert',
        description: 'Convert between various different file sizes such as GBytes to Mbits',
        html: `
<html>

</html>
`
    },

    {
        title: 'Temperature Converter',
        slug: 'tempconvert',
        description: 'Convert between Kelvin, Celsius and Fahrenheit',
        html: `
<html>

</html>
        `
    },

    {
        title: 'Download/Upload Time Estimator',
        slug: 'downloadestimator',
        description: 'Estimate the amount of time you will have to wait for a download to incur with the size of the download and your current internet speed',
        html: `
<html>

</html>
        `
    },

    {
        title: 'ASCII Art Generator',
        slug: 'asciiart',
        description: 'Generate ascii art from an image',
        html: `
<html>

</html>
`
    },

    {
        title: 'Test if Website is Down',
        slug: 'pingwebsite',
        description: 'Ping a website and see what status they return',
        html: `
<html>

</html>
`
    }
];

tools.forEach(tool => {
    tool.html = tool.html.replace(/^\t{3}/gm, '');
});

export default tools;
