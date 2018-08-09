/**
 * Created by mayn on 2018/8/6.
 */
Ext.define('SimpleERP.view.main.WeekStar.rankgrid.ErrRankGrid', {
    extend: 'Ext.grid.Panel',
    alias : 'widget.errrankgrid',
    xtype: 'errrankgrid',

    requires: [
        'Ext.toolbar.Paging',
        'SimpleERP.store.ErrRankGrid',
        'SimpleERP.view.main.WeekStar.rankgrid.ErrRankGridController',
        'SimpleERP.view.main.WeekStar.rankgrid.ErrRankGridModel'
    ],

    bind: {
        store: '{errrank}'
    },
    viewModel: {
        type: 'errrankgrid'
    },

    controller: 'errrankgrid',
    columnLines: false,
    margin: 20,
    height: 640,

    columns: [
        { text: '排名', dataIndex: 'rank', flex: 1},
        { text: '姓名', dataIndex: 'Worker', flex: 2 },
        { text: '配货', dataIndex: 'pherr', flex: 2 },
        { text: '漏验', dataIndex: 'qterr', flex: 2 },
        { text: '发错', dataIndex: 'fherr', flex: 2 }
    ],

    bbar: [{
        width:'100%',
        height: 50,
        xtype: 'pagingtoolbar',
        bind: {
            store: '{errrank}'
        },
        // dock: 'bottom',
        displayInfo: true,
        displayMsg: '位置：{0}-{1} of {2}',
    }],

    listeners: {
        'afterrender' : function(grid) {
            let elments = Ext.select("#errrankgridID_header",true);
            elments.each(function(el) {
                el.setStyle("background", '#F3A6AE');
            }, this);
        }
    }
});