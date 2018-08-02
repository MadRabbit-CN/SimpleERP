Ext.define('SimpleERP.view.main.Main', {
    extend: 'Ext.container.Viewport',

    requires: [
        'Ext.layout.container.VBox',
        'Ext.list.Tree',
        'Ext.toolbar.*',
        'SimpleERP.locale.Locale',
        'SimpleERP.util.Url',
        'SimpleERP.view.main.MainContainerWrap',
        'SimpleERP.view.main.MainController',
        'SimpleERP.view.main.MainModel',
        'SimpleERP.view.main.WeekStar.WeekStar'
    ],

    controller: 'main',
    viewModel: 'main',

    cls: 'sencha-dash-viewport',
    itemId: 'mainView',

    layout: {
        type: 'vbox',
        align: 'stretch'
    },

    listeners: {
        render: 'onMainViewRender'
    },

    items: [
        {
            //Header导航区--垂直布局——上
            xtype: 'toolbar',
            cls: 'sencha-dash-dash-headerbar shadow',
            height: 64,
            itemId: 'headerBar',
            items: [
                {
                    xtype: 'component',
                    reference: 'senchaLogo',
                    cls: 'sencha-logo',
                    html: '<div class="main-logo"><img src="'+ URI.getResource('logo') + '">' + I18N.AppTitle + '</div>',
                    width: 250
                },
                {
                    margin: '0 0 0 8',
                    ui: 'header',
                    iconCls:'x-fa fa-navicon',
                    id: 'main-navigation-btn',
                    handler: 'onToggleNavigationSize'
                },
                '->',
                {
                    iconCls: 'x-fa fa-key',
                    ui: 'header',
                    tooltip: I18N.PasswordResetTitle,
                    href: '#passwordreset',
                    hrefTarget: '_self'
                },
                {
                    ui: 'header',
                    iconCls: 'x-fa fa-power-off',
                    handler: 'onLogout',
                    tooltip: I18N.Logout
                },
                {
                    xtype: 'tbtext',
                    bind: { text: '{UserName}' },
                    cls: 'top-user-name'
                }
            ]
        },
        {
            //主视图容器——垂直布局——下
            xtype: 'maincontainerwrap',
            id: 'main-view-detail-wrap',
            reference: 'mainContainerWrap',
            flex: 10,
            items: [
                {
                    xtype: 'treelist',
                    reference: 'navigationTreeList',
                    itemId: 'navigationTreeList',
                    ui: 'navigation',
                    store: 'NavigationTree',
                    width: 250,
                    expanderFirst: false,
                    expanderOnly: false,
                    listeners: {
                        selectionchange: 'onNavigationTreeSelectionChange'
                    }
                },
                {
                    //主页center页面
                    xtype: 'weekstar',
                    flex: 1,
                    reference: 'weekstar',
                    itemId: 'weekstarPanel',
                }
            ]
        }
    ]
});
