'use strict';

const GuiTemplateRoute = require('entoj-system').server.route.GuiTemplateRoute;


/**
 * Storage
 *
 * @type {Object}
 */
if (!GuiTemplateRoute.model)
{
    GuiTemplateRoute.model = {};
}
GuiTemplateRoute.model.navigation =
{
    site: [],
    global: []
};


function addSiteNavigation(icon, text, link)
{
    GuiTemplateRoute.model.navigation.site.push(
    {
        icon: icon,
        text: text,
        link: link
    });
}


function addGlobalNavigation(icon, text, link)
{
    GuiTemplateRoute.model.navigation.global.push(
    {
        icon: icon,
        text: text,
        link: link
    });
}


/**
 */
module.exports.addSiteNavigation = addSiteNavigation;
module.exports.addGlobalNavigation = addGlobalNavigation;
