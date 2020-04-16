const router = require('koa-router')();
const Project = require('../db/models/project');
const Admin = require('../db/models/admin');

router.post('/publish', async (ctx) => {
  const data = ctx.request.body;
  await Project.create(data, (error, doc) => {
    if (error) {
      console.log(error);
    } else {
      console.log(doc);
    }
  });
  ctx.body = 'ok';
});

module.exports = router;
