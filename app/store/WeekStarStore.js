/**
 * Created by mayn on 2018/7/31.
 */
Ext.define('SimpleERP.store.WeekStarStore', {
    extend: 'Ext.data.Store',
    xtype: 'weekstarstore',
    alias: 'store.weekStartStore',
    storeId: 'weekStartStore',
    model: 'SimpleERP.model.WeekStarModel',

    requires: [
        'SimpleERP.model.WeekStarModel'
    ],

    // proxy: {
    //     type: 'ajax',
    //     url: 'erp/fhrank.php',
    //     reader: {
    //         type: 'json'
    //     }
    // },

    autoLoad: true
});