modules.define('i-bem__dom', function(provide, BEMDOM) {

BEMDOM.decl('mishgans-second-block',
    {
        /* методы экземпляра */
        onSetMod: {
            'js': {
                'inited': function() {
                    this.bindTo(
                        'click', function() {
                            alert(this.ctx.text);
                        });
                }
            }
        }
    },
    {
        /* статические методы */
    }
);

provide(BEMDOM);

});
