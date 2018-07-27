Ext.define('SimpleERP.store.NavigationTree', {
    extend: 'Ext.data.TreeStore',

    storeId: 'NavigationTree',

    fields: [{
        name: 'text'
    }],

    root: {
        expanded: true,
        children: [
            //子节点
            {
                text: '왕겜女',
                viewType: 'pageblank',
                leaf: true,
                visible: false
            },
            {
                text: '500柬暠',
                viewType: 'page500',
                leaf: true,
                visible: false
            },
            {
                text: '되쩌柬暠',
                viewType: 'login',
                leaf: true,
                visible: false
            },
            {
                text: '錦맣쵱쯤柬暠',
                viewType: 'passwordreset',
                leaf: true,
                visible: false
            }
        ]
    }
});
