const Koa = require("koa");
const app = new Koa();

app.use(async (ctx, next) => {
  // console.log(ctx.URL);
  // console.log(ctx.params);
  console.log(ctx.query);
  console.log(ctx.querystring);
  next();
});

const Router = require("@koa/router");
const router = new Router();
let count = 0;
router.get("/ping", async (ctx) => {
  ctx.body = "Pong:" + count++;
});

const db = require("./db");
db.forEach((data) => {
  data.test_data.forEach((test_data) => {
    // console.log(test_data);
    if (data.method === "GET") {
      router.get(test_data.url || data.url, (ctx) => {
        ctx.body = test_data.response;
      });
    } else if (data.method === "POST") {
      router.post(test_data.url || data.url, (ctx) => {
        ctx.body = test_data.response;
      });
    }
  });
});

app.use(router.routes()); /*启动路由*/
app.use(router.allowedMethods());

app.listen(3000);
