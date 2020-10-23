import tools from "../routes/tools/_tools";

function getName(i) {
    return tools[i].title
}

function getLink(i) {
    return tools[i].slug
}

function getDesc(i) {
    return tools[i].description
}

function fill(len, fn) {
    return Array(len).fill().map((_, i) => fn(i));
}

export default fill(tools.length, (i) => {
    return {
        name: getName(i),
        content: getDesc(i),
        link: getLink(i),
    };
});