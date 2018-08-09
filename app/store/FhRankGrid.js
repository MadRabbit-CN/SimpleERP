/**
 * Created by mayn on 2018/8/6.
 */
Ext.define('SimpleERP.store.FhRankGrid', {
    extend: 'Ext.data.Store',
    alias: 'store.fhrankgrid',
    storeId: 'fhrankgridstoreId',

    requires: [
        'SimpleERP.model.FhRankGrid'
    ],

    model: 'SimpleERP.model.FhRankGrid',

    autoLoad: true,
    pageSize: 14,

    proxy: {
        type: "ajax",
        url: 'erp/fhtong.php?type='+2,
        reader: {
            rootProperty: "rows",
            totalProperty: 'results'
        }
    },

    listeners:{

    }
})