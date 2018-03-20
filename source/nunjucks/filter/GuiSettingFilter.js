'use strict';

/**
 * Requirements
 * @ignore
 */
const Filter = require('entoj-system').nunjucks.filter.Filter;


/**
 * A filter that is used to get options from the gui.
 *
 * @memberOf nunjucks.filter
 */
class GuiSettingFilter extends Filter
{
    /**
     */
    constructor()
    {
        super();
        this._name = 'guiSetting';
    }


    /**
     * @inheritDocs
     */
    static get className()
    {
        return 'nunjucks.filter/GuiSettingFilter';
    }


    /**
     * @inheritDocs
     */
    filter()
    {
        const scope = this;
        return function (value)
        {
            const globals = (this && this.env && this.env.globals)
                ? this.env.globals
                : { location: {} };

            // Get the request
            const request = (globals.request)
                ? globals.request
                : false;
            if (!request)
            {
                return false;
            }

            // Get the current entity
            const entity = globals.location
                ? globals.location.entity || false
                : false;
            if (!entity)
            {
                return false;
            }

            // Get settings
            const settings = entity.properties.getByPath('examples.settings', []);
            if (!settings.length)
            {
                return false;
            }

            // Get setting
            const setting = settings.find((item) => item.name == value);
            if (!setting)
            {
                return false;
            }

            // Get current value
            const result = request.query[setting.name] || setting.default;
            return result;
        };
    }
}

/**
 * Exports
 * @ignore
 */
module.exports.GuiSettingFilter = GuiSettingFilter;
