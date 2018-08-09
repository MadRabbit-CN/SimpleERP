/**
 * Created by mayn on 2018/8/6.
 */
Ext.define('SimpleERP.model.RankGridModel', {
    extend: 'Ext.data.Model',
    alias: 'widget.rankGridModel',
    xtype: 'rankgridmodel',

    fields: [
        { name: 'worker', type: 'string' },
        { name: 'byalloc', type: 'string' },
        { name: 'jralloc', type: 'string' },
        { name: 'bzalloc', type: 'string' },
    ]

});
