/* eslint-disable strict */
module.exports = app => {
  const { router, controller } = app;
  const auth = app.middleware.customAuth();
  router.get('/admin/index', auth, controller.admin.main.index);
  router.post('/admin/checkLogin', controller.admin.main.checkLogin);
  router.get('/admin/getTypeInfo', auth, controller.admin.main.getTypeInfo);
  router.post('/admin/addArticle', auth, controller.admin.main.addArticle);
  router.post('/admin/updateArticle', auth, controller.admin.main.updateArticle);
  router.post('/admin/getArticleList', auth, controller.admin.main.getArticleList);
  router.get('/admin/delArticle/:id', auth, controller.admin.main.delArticle);
  router.get('/admin/getArticleById/:id', auth, controller.admin.main.getArticleById);
};
