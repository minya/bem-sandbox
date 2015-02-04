var bh = new (require('bh').BH);

bh.match('bh-block', function (ctx) {
    ctx.tag('div');
});

bh.match('bh-block__caption', function (ctx) {
    ctx.tag('h1');
});

bh.match('bh-block__btn', function (ctx) {
    ctx.tag('input');
    ctx.attr('type', 'button');
});

bh.processBemJson({block: 'bh-block'});
bh.apply({block: 'bh-block'});
