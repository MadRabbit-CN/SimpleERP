/**
 * Created by mayn on 2018/8/6.
 */
Ext.define('SimpleERP.view.main.WeekStar.rankgrid.RankGridModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.rankgrid',

    requires: [
        'SimpleERP.store.RankGrid'
    ],

    stores: {
        rank: {
            type: 'rankgrid',
            autoLoad: true
        }
    },

    data: {
        /* This object holds the arbitrary data that populates the ViewModel and is then available for binding. */
    }
});