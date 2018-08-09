/**
 * Created by mayn on 2018/8/6.
 */
Ext.define('SimpleERP.store.RankGrid', {
    extend: 'Ext.data.Store',
    alias: 'store.rankgrid',
    xtype: 'rankgridstore',
    storeId: 'rankgridstoreId',

    requires: [
        'SimpleERP.model.RankGridModel'
    ],

    model: 'SimpleERP.model.RankGridModel',

    autoLoad: true,
    pageSize: 14,

    proxy: {
        type: "ajax",
        url: 'erp/fhtong.php?type='+1,
        reader: {
            rootProperty: "rows",
            totalProperty: 'results'
        }
    },

    listeners:{

    }
});