'use strict';

/**
 * Requirements
 * @ignore
 */
const GuiTemplateRoute = require('entoj-system').server.route.GuiTemplateRoute;


/**
 * Prepare storage for navigation entries
 */
GuiTemplateRoute.model.navigation =
{
    site: []
};


/**
 * Adds a navigation entry (displayed in the sidebar)
 *
 * @param {String} icon
 * @param {String} text
 * @param {String} link
 */
function add(icon, text, link)
{
    GuiTemplateRoute.model.navigation.site.push(
    {
        icon: icon,
        text: text,
        link: link
    });
}


/**
 */
module.exports.add = add;
