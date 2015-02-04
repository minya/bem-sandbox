({
    block: 'page',
    title: 'Hello world!',
    head: [
        {elem: 'css', url: '_hw.css'}
    ],

    scripts: [{elem: 'js', url: '_hw.js'}],

    content: [
        {
            block: 'mishgans-first-block',
            text: 'Hello from Mishgan!',
        },
        {
            block: 'mishgans-second-block',
            text: 'Ololo'
        },
        {
            block: 'bh-block'
        }
    ]
})
