/**
 * Created by mayn on 2018/8/6.
 */
Ext.define('SimpleERP.view.main.WeekStar.rankgrid.RankGrid', {
    extend: 'Ext.grid.Panel',
    alias : 'widget.rankgrid',
    xtype: 'rankgrid',

    requires: [
        'Ext.toolbar.Paging',
        'SimpleERP.store.RankGrid',
        'SimpleERP.view.main.WeekStar.rankgrid.RankGridController',
        'SimpleERP.view.main.WeekStar.rankgrid.RankGridModel'
    ],


    bind: '{rank}',

    viewModel: {
        type: 'rankgrid'
    },

    reference: 'rankgridreference',
    controller: 'rankgrid',
    columnLines: false,
    margin: 20,
    height: 640,

    columns: [
        { text: '排名', dataIndex: 'rank', flex: 1},
        { text: '姓名', dataIndex: 'worker', flex: 1 },
        { text: '今日', dataIndex: 'jralloc', flex: 1 },
        { text: '本周', dataIndex: 'bzalloc', flex: 1 },
        { text: '本月', dataIndex: 'byalloc', flex: 1 }
    ],

    bbar: [{
        width:'100%',
        height: 50,
        xtype: 'pagingtoolbar',
        bind: {
          store: '{rank}'
        },
        displayInfo: true,
        displayMsg: '位置：{0}-{1} of {2}'
    }],

    listeners: {
        'afterrender' : function() {
            let rankgrid = this.up().down('rankgrid').bind.store;
            // let rankpanelgrid = Ext.getCmp('rankgridID').getView().getStore('rankgrid');
            // console.log(rankgrid);
            // let pageCount = rankpanelgrid.getTotalCount();
            // let cursor = 0;
            // setInterval(function(){
            //     rankpanelgrid.load({params:{start:cursor, limit:14 }});
            //     cursor++;
            //     if (pageCount === cursor){
            //         cursor = 0;
            //     }
            // },5000)
        }
    }
});