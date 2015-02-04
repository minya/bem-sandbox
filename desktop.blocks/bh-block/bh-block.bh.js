module.exports = function(bh) {
    bh.match('bh-block', function (ctx) {
        ctx.tag('h1');
        ctx.content('content');
    });
}
