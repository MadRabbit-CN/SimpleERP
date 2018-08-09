/**
 * Created by mayn on 2018/8/6.
 */
Ext.define('SimpleERP.model.ErrRankGridModel', {
    extend: 'Ext.data.Model',
    alias: 'widget.errrankGridModel',
    xtype: 'errrankgridmodel',

    fields: [
        { name: 'rank', type: 'int' },
        { name: 'Worker', type: 'string' },
        { name: 'pherr', type: 'int' },
        { name: 'fherr', type: 'int' },
        { name: 'qterr', type: 'int' }
    ]

});
