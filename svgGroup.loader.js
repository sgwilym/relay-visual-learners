module.exports = function(content) {
    return (
        'module.exports = require("react").createElement("g", {' +
            'dangerouslySetInnerHTML: {' +
                '__html: ' + JSON.stringify(content) +
            '}' +
        '});'
    );
};
