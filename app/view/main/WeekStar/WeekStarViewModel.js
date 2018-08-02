/**
 * Created by mayn on 2018/7/31.
 */
Ext.define('SimpleERP.view.main.WeekStar.WeekStarViewModel', {
    extend: 'Ext.app.ViewModel',
    xtype: 'weekstarviewmodel',
    alias: 'viewmodel.weekstarviewmodel',

    requires: [
        'Ext.data.proxy.Rest',
        'Ext.data.reader.Json',
        'Ext.data.writer.Json'
    ],

    data: {
        date1: null,
        date2: null,
        week:  null,
        alloc: null,
        pack:  null,
        month: null
    },

    stores: {
        monthdata: {
            fields: [
                {name: 'month',type: 'string'},
                {name: 'alloc',type: 'string'},
                {name: 'pack',type: 'string'}
             ],
            autoLoad: false,
            proxy: {
                type: 'rest',
                url: 'erp/fhrank.php',
                reader: {
                    type: 'json',
                },
                writer: {
                    type: 'json'
                }
            }
        }
    }

});

