const Koa = require("koa");
const app = new Koa();

const Router = require("@koa/router");
const router = new Router();
let count = 0;
router.get("/ping", async (ctx) => {
  ctx.body = "Pong:" + count++;
});

const data = require("./data");
router.get(data.url, (ctx) => {
  ctx.body = data.response;
});
app.use(router.routes()); /*启动路由*/
app.use(router.allowedMethods());

app.listen(3000);
