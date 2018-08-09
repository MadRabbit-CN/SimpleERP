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
                text: '空页面',
                viewType: 'pageblank',
                leaf: true,
                visible: false
            },
            {
                text: '500页面',
                viewType: 'page500',
                leaf: true,
                visible: false
            },
            {
                text: '登陆页面',
                viewType: 'login',
                leaf: true,
                visible: false
            },
            {
                text: '重置密码页面',
                viewType: 'passwordreset',
                leaf: true,
                visible: false
            },
            {
                text: '每周之星',
                viewType: 'weekstar',
                leaf: true,
                visible: true
            }
        ]
    }
});
