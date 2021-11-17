'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/api/news', controller.news.list);
  router.get('*', controller.home.index);
};
