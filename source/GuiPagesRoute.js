'use strict';

/**
 * Requirements
 * @ignore
 */
const PagesRoute = require('entoj-system').server.routes.PagesRoute;
const UrlsConfiguration = require('entoj-system').model.configuration.UrlsConfiguration;
const GlobalConfiguration = require('entoj-system').model.configuration.GlobalConfiguration;
const PathesConfiguration = require('entoj-system').model.configuration.PathesConfiguration;
const BuildConfiguration = require('entoj-system').model.configuration.BuildConfiguration;
const EntitiesRepository = require('entoj-system').model.entity.EntitiesRepository;
const EntityCategoriesRepository = require('entoj-system').model.entity.EntityCategoriesRepository;
const SitesRepository = require('entoj-system').model.site.SitesRepository;
const CliLogger = require('entoj-system').cli.CliLogger;
const Environment = require('entoj-system').nunjucks.Environment;
const path = require('path');


/**
 * @memberOf server.routes
 */
class GuiPagesRoute extends PagesRoute
{
    /**
     * @param {cli.CliLogger} cliLogger
     * @param {model.site.SitesRepository} sitesRepository
     * @param {model.entity.EntityCategoriesRepository} entityCategoriesRepository
     * @param {model.entity.EntitiesRepository} entitiesRepository
     * @param {model.configuration.GlobalConfiguration} globalConfiguration
     * @param {model.configuration.UrlsConfiguration} urlsConfiguration
     * @param {model.configuration.PathesConfiguration} pathesConfiguration
     * @param {model.configuration.BuildConfiguration} buildConfiguration
     * @param {nunjucks.Environment} nunjucks
     */
    constructor(cliLogger, sitesRepository, entityCategoriesRepository, entitiesRepository, globalConfiguration,
                urlsConfiguration, pathesConfiguration, buildConfiguration, nunjucks)
    {
        const routes =
        [
            {
                url: '/',
                template: 'sites.j2'
            },
            {
                url: '/:site',
                template: 'entityCategories.j2'
            },
            {
                url: '/:site/:entityCategory',
                template: 'entityCategory.j2'
            },
            {
                url: '/:site/:entityCategory/:entityId',
                template: 'entity.j2'
            },
            {
                url: '/:site/:entityCategory/:entityId/examples',
                template: 'entityExamples.j2'
            },
            {
                url: '/:site/:entityCategory/:entityId/documentation',
                template: 'entityDocumentation.j2'
            },
            {
                url: '/:site/:entityCategory/:entityId/datamodel/:modelFile',
                template: 'entityDataModel.j2'
            }
        ];
        const options =
        {
            templateRoot: path.resolve(__dirname + '/template'),
            staticRoute: '/_'
        };
        super(cliLogger.createPrefixed('gui'), sitesRepository, entityCategoriesRepository, entitiesRepository, globalConfiguration,
                urlsConfiguration, pathesConfiguration, buildConfiguration, nunjucks, routes, options);
    }


    /**
     * @inheritDoc
     */
    static get injections()
    {
        return { 'parameters': [CliLogger, SitesRepository, EntityCategoriesRepository, EntitiesRepository,
                                GlobalConfiguration, UrlsConfiguration, PathesConfiguration, BuildConfiguration, Environment] };
    }


    /**
     * @inheritDocs
     */
    static get className()
    {
        return 'server.routes/GuiPagesRoute';
    }
}


/**
 * Exports
 * @ignore
 */
module.exports.GuiPagesRoute = GuiPagesRoute;
