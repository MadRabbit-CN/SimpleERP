/**
 * Created by mayn on 2018/7/31.
 */
Ext.define('SimpleERP.model.WeekStarModel', {
    extend: 'Ext.data.Model',
    xtype: 'weekstarmodel',
    alias: 'widget.weekStarModel',

    fields: [
        { name: 'firstWeekDateStart', type: 'string' },//每周起始日期
        { name: 'firstWeekDateEnd', type: 'string' },
        { name: 'secondWeekDateStart', type: 'string' },
        { name: 'secondWeekDateEnd', type: 'string' },
        { name: 'thirdWeekDateStart', type: 'string' },
        { name: 'thirdWeekDateEnd', type: 'string' },
        { name: 'fouthWeekDateStart', type: 'string' },
        { name: 'fouthWeekDateEnd', type: 'string' },

        { name: 'firstWeekAlloc', type: 'string' },  //第一周配货之星
        { name: 'secondWeekAlloc', type: 'string' }, //第二周配货之星
        { name: 'thirdWeekAlloc', type: 'string' },  //第三周配货之星
        { name: 'fouthWeekAlloc', type: 'string' },

        { name: 'firstWeekPack', type: 'string' },  //第一周发货之星
        { name: 'secondWeekPack', type: 'string' }, //第二周发货之星
        { name: 'thirdWeekPack', type: 'string' },  //第三周发货之星
        { name: 'fouthWeekPack', type: 'string' },   //第四周发货之星

        { name: 'januaryPack', type: 'string'},     //1-12月发货之星
        { name: 'februaryPack', type: 'string'},
        { name: 'marchPack', type: 'string'},
        { name: 'aprilPack', type: 'string'},
        { name: 'mayPack', type: 'string'},
        { name: 'junePack', type: 'string'},
        { name: 'julyPack', type: 'string'},
        { name: 'augustPack', type: 'string'},
        { name: 'septemberPack', type: 'string'},
        { name: 'octoberPack', type: 'string'},
        { name: 'novemberPack', type: 'string'},
        { name: 'decemberPack', type: 'string'},

        { name: 'januaryAlloc', type: 'string'},     //1-12月配货之星
        { name: 'februaryAlloc', type: 'string'},
        { name: 'marchAlloc', type: 'string'},
        { name: 'aprilAlloc', type: 'string'},
        { name: 'mayAlloc', type: 'string'},
        { name: 'juneAlloc', type: 'string'},
        { name: 'julyAlloc', type: 'string'},
        { name: 'augustAlloc', type: 'string'},
        { name: 'septemberAlloc', type: 'string'},
        { name: 'octoberAlloc', type: 'string'},
        { name: 'novemberAlloc', type: 'string'},
        { name: 'decemberAlloc', type: 'string'}
    ]
});
