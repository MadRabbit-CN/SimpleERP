/**
 * Created by mayn on 2018/7/31.
 */
Ext.define('SimpleERP.model.WeekStarModel', {
    extend: 'Ext.data.Model',
    xtype: 'weekstarmodel',
    alias: 'widget.weekStarModel',

    fields: [
        { name: 'date1',    type: 'string' },
        { name: 'date2',    type: 'string' },
        { name: 'week',     type: 'string' },
        { name: 'alloc',    type: 'string' },
        { name: 'pack',     type: 'string' },
        { name: 'month',    type: 'string' }
    ]
});
