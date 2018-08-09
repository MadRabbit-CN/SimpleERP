/**
 * Created by mayn on 2018/8/6.
 */
Ext.define('SimpleERP.view.main.WeekStar.rankgrid.ErrRankGridModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.errrankgrid',

    requires: [
        'SimpleERP.store.ErrRankGrid'
    ],

    stores: {
        errrank: {
            type: 'errrankgrid',
            autoLoad: true
        }
    },

    data: {
        /* This object holds the arbitrary data that populates the ViewModel and is then available for binding. */
    }
});