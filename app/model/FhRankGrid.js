/**
 * Created by mayn on 2018/8/6.
 */
Ext.define('SimpleERP.model.FhRankGrid', {
    extend: 'Ext.data.Model',
    alias: 'widget.fhRankGridModel',
    xtype: 'fhrankgridmodel',

    fields: [
        { name: 'worker', type: 'string' },
        { name: 'jrpack', type: 'string' },
        { name: 'bzpack', type: 'string' },
        { name: 'bypack', type: 'string' },
    ]

});