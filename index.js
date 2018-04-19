var koa = require('koa');
var route = require('koa-route');

var app = new koa();

app.use(route.get('/', function(ctx, next) {
    ctx.body = "<h1>!!!***PIWOT work has started***!!!</h1>";
}));

var port = 8055;
app.listen(port);
console.log('[PIWOT] server started on URL: http://localhost:' + port);