const Koa = require('koa');
const Router = require('koa-router');
const nunjucks = require('nunjucks');
const knex = require('./config');
const port = 3000;

const app = new Koa();
const router = new Router();

router.get('/search/:name', async (ctx) => {

    let users = await knex.select('*').from('guitarist').where('name', 'like', '%' + ctx.params.name + '%' );

    if (users) {
        ctx.body = nunjucks.render('user.html', { users });
    }
        ctx.body = { message : 'Not found' }

});

app.use(router.routes());
app.listen(port, () => console.log(`App running in port ${port}`));
