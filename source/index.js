
/**
 * @namespace server
 */
module.exports =
{
    templateRoot: require('path').resolve(__dirname + '/template'),
    navigation: require('./navigation.js'),
    model: require('./model.js'),
    GuiTemplateRoute: require('./GuiTemplateRoute.js').GuiTemplateRoute
};
