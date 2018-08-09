/**
 * Created by mayn on 2018/8/6.
 */
Ext.define('SimpleERP.store.ErrRankGrid', {
    extend: 'Ext.data.Store',
    alias: 'store.errrankgrid',
    storeId: 'errrankgridstoreId',

    requires: [
        'SimpleERP.model.ErrRankGridModel'
    ],

    model: 'SimpleERP.model.ErrRankGridModel',

    autoLoad: true,
    pageSize: 14,

    proxy: {
        type: "ajax",
        url: 'erp/fhtong.php?type='+3,
        reader: {
            rootProperty: "rows",
            totalProperty: 'results'
        }
    },

    listeners:{

    }

});