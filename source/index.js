
/**
 * API
 */
module.exports =
{
    templateRoot: require('path').resolve(__dirname + '/template'),
    navigation: require('./navigation.js'),
    nunjucks: require('./nunjucks/index.js'),

    GuiTemplateRoute: require('./GuiTemplateRoute.js').GuiTemplateRoute
};
