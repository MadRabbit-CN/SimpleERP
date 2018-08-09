/**
 * Created by mayn on 2018/7/30.
 */
Ext.define('SimpleERP.view.main.WeekStar.WeekStarController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.weekstar',

    requires: [
        'Ext.panel.Panel'
    ],

    /**
     * Called when the view is created
     */

    // beforeRender : function() {
    //     let Url = 'erp/fhrank.php';
    //     Ext.Ajax.request({
    //         url: Url,
    //         timeout : 50000,
    //         dataType : "json",
    //         async: false,
    //         success: function(response) {
    //             const data = Ext.decode(response.responseText);
    //             let viewModel = Ext.getCmp('weekstar').getViewModel();
    //             let weekData  = data.weekdata;
    //             let monthData  = data.monthdata;
    //             //每周起始时间设置
    //             viewModel.set('firstWeekDateStart',weekData[3].date1);
    //             viewModel.set('firstWeekDateEnd',weekData[3].date2);
    //             viewModel.set('secondWeekDateStart',weekData[2].date1);
    //             viewModel.set('secondWeekDateEnd',weekData[2].date2);
    //             viewModel.set('thirdWeekDateStart',weekData[1].date1);
    //             viewModel.set('thirdWeekDateEnd',weekData[1].date2);
    //             viewModel.set('fouthWeekDateStart',weekData[0].date1);
    //             viewModel.set('fouthWeekDateEnd',weekData[0].date2);
    //
    //             //每周配货之星
    //             viewModel.set('firstWeekAlloc',weekData[3].alloc);
    //             viewModel.set('secondWeekAlloc',weekData[2].alloc);
    //             viewModel.set('thirdWeekAlloc',weekData[1].alloc);
    //             viewModel.set('fouthWeekAlloc',weekData[0].alloc);
    //
    //             //每周发货之星
    //             viewModel.set('firstWeekPack',weekData[3].pack);
    //             viewModel.set('secondWeekPack',weekData[2].pack);
    //             viewModel.set('thirdWeekPack',weekData[1].pack);
    //             viewModel.set('fouthWeekPack',weekData[0].pack);
    //             // console.log(weekData);
    //
    //             //每月配、发货之星
    //             for (let i=0; i<monthData.length;i++){
    //                 let monthString = monthData[i].month;
    //                 let monthAlloc = monthData[i].alloc;
    //                 let monthPack = monthData[i].pack;
    //                 switch (monthString) {
    //                     case '1':{
    //                         viewModel.set('januaryAlloc',monthAlloc);
    //                         viewModel.set('januaryPack',monthPack);
    //                         break;
    //                     }
    //                     case '2':{
    //                         viewModel.set('februaryPack',monthAlloc);
    //                         viewModel.set('februaryPack',monthPack);
    //                         break;
    //                     }
    //                     case '3':{
    //                         viewModel.set('marchPack',monthAlloc);
    //                         viewModel.set('marchPack',monthPack);
    //                         break;
    //                     }
    //                     case '4':{
    //                         viewModel.set('aprilAlloc',monthAlloc);
    //                         viewModel.set('aprilPack',monthPack);
    //                         break;
    //                     }
    //                     case '5':{
    //                         viewModel.set('mayAlloc',monthAlloc);
    //                         viewModel.set('mayPack',monthPack);
    //                         break;
    //                     }
    //                     case '6':{
    //                         viewModel.set('juneAlloc',monthAlloc);
    //                         viewModel.set('junePack',monthPack);
    //                         break;
    //                     }
    //                     case '7':{
    //                         viewModel.set('julyAlloc',monthAlloc);
    //                         viewModel.set('julyPack',monthPack);
    //                         break;
    //                     }
    //                     case '8':{
    //                         viewModel.set('augustAlloc',monthAlloc);
    //                         viewModel.set('augustPack',monthPack);
    //                         break;
    //                     }
    //                     case '9':{
    //                         viewModel.set('septemberAlloc',monthAlloc);
    //                         viewModel.set('septemberPack',monthPack);
    //                         break;
    //                     }
    //                     case '10':{
    //                         viewModel.set('octoberAlloc',monthAlloc);
    //                         viewModel.set('octoberPack',monthPack);
    //                         break;
    //                     }
    //                     case '11':{
    //                         viewModel.set('novemberAlloc',monthAlloc);
    //                         viewModel.set('novemberPack',monthPack);
    //                         break;
    //                     }
    //                     case '12':{
    //                         viewModel.set('decemberAlloc',monthAlloc);
    //                         viewModel.set('decemberPack',monthPack);
    //                         break;
    //                     }
    //                 }
    //             }
    //
    //         },
    //         failure: function(response) {
    //             console.log('WeekStarController：server-side failure with status code ' + response.status);
    //         }
    //     });
    // }
});