/**
 * Created by mayn on 2018/7/31.
 */
Ext.define('SimpleERP.view.main.WeekStar.WeekStarViewModel', {
    extend: 'Ext.app.ViewModel',
    xtype: 'weekstarviewmodel',
    alias: 'viewmodel.weekstarviewmodel',

    requires: [
        'SimpleERP.store.WeekStarStore'
    ],

    data: {
        week:  "第一周",
        alloc: "赵六",
        pack:  "王五",
        januaryPack:'———',
        januaryAlloc: '———',
        februaryPack:'———',
        februaryAlloc: '———',
        marchPack:'———',
        marchAlloc: '———',
        aprilPack:'———',
        aprilAlloc: '———',
        mayPack:'———',
        mayAlloc: '———',
        junePack:'———',
        juneAlloc: '———',
        julyPack:'———',
        julyAlloc: '———',
        augustPack:'———',
        augustAlloc: '———',
        septemberPack:'———',
        septemberAlloc: '———',
        octoberPack:'———',
        octoberAlloc: '———',
        novemberPack:'———',
        novemberAlloc: '———',
        decemberPack:'———',
        decemberAlloc: '———',

    },


    stores: {
        monthdata: {
            type: 'weekStartStore'
        }
    },

    listeners: {
        // load: 'onWeekStarStoreLoad'
    }

});
