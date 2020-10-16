const Koa = require("koa");
const app = new Koa();

const Router = require("@koa/router");
const router = new Router();
let count = 0;
router.get("/ping", async (ctx) => {
  ctx.body = "Pong:" + count++;
});

const db = require("./db");
db.forEach((data) => {
  data.test_data.forEach((test_data) => {
    router.get(test_data.url || data.url, (ctx) => {
      ctx.body = test_data.response;
    });
  });
});

app.use(router.routes()); /*启动路由*/
app.use(router.allowedMethods());

app.listen(3000);
