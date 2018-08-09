/**
 * Created by mayn on 2018/8/6.
 */
Ext.define('SimpleERP.view.main.WeekStar.rankgrid.FhRankGridModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.fhrankgrid',

    requires: [
        'SimpleERP.store.FhRankGrid'
    ],

    stores: {
        fhrank: {
            type: 'fhrankgrid',
            autoLoad: true
        }
    },

    data: {
        /* This object holds the arbitrary data that populates the ViewModel and is then available for binding. */
    }
});