/**
 * Created by mayn on 2018/8/6.
 */
Ext.define('SimpleERP.view.main.WeekStar.rankgrid.FhRankGrid', {
    extend: 'Ext.grid.Panel',
    alias : 'widget.fhrankgrid',
    xtype: 'fhrankgrid',

    requires: [
        'Ext.toolbar.Paging',
        'SimpleERP.store.FhRankGrid',
        'SimpleERP.view.main.WeekStar.rankgrid.FhRankGridController',
        'SimpleERP.view.main.WeekStar.rankgrid.FhRankGridModel'
    ],

    controller: 'fhrankgrid',
    viewModel: {
        type: 'fhrankgrid'
    },
    bind: {
        store: '{fhrank}'
    },

    height: 640,
    columnLines: false,
    margin: 20,


    columns: [
        { text: '排名', dataIndex: 'rank', flex: 2},
        { text: '姓名', dataIndex: 'worker', flex: 2 },
        { text: '今日', dataIndex: 'jrpack', flex: 2 },
        { text: '本周', dataIndex: 'bzpack', flex: 2 },
        { text: '本月', dataIndex: 'bypack', flex: 2 }
    ],

    bbar: [{
        width:'100%',
        height: 50,
        xtype: 'pagingtoolbar',
        bind: {
            store: '{fhrank}'
        },
        // dock: 'bottom',
        displayInfo: true,
        displayMsg: '位置：{0}-{1} of {2}',
    }],

    listeners: {
        'afterrender' : function(grid) {
            let elments = Ext.select("#fhrankgridID_header",true);
            elments.each(function(el) {
                el.setStyle("background", '#6EBE77');
            }, this);
        }
    }

});