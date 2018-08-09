/**
 * Created by mayn on 2018/7/30.
 * 每周之星
 */
Ext.define('SimpleERP.view.main.WeekStar.WeekStar', {
    extend: 'Ext.Container',
    xtype: 'weekstar',
    controller: 'weekstar',
    viewModel: 'weekstarviewmodel',
    store: 'weekStartStore',
    id: 'weekstarpanel',

    requires: [
        'Ext.form.Label',
        'Ext.layout.container.HBox',
        'Ext.layout.container.VBox',
        'Ext.panel.Panel',
        'SimpleERP.store.WeekStarStore',
        'SimpleERP.view.main.WeekStar.WeekStarController',
        'SimpleERP.view.main.WeekStar.WeekStarViewModel',
        'SimpleERP.view.main.WeekStar.rankgrid.ErrRankGrid',
        'SimpleERP.view.main.WeekStar.rankgrid.FhRankGrid',
        'SimpleERP.view.main.WeekStar.rankgrid.RankGrid'
    ],

    layout: 'vbox',

    items: [
        /* include child components here */
        {//第一行--------------保留区域
            xtype: 'panel',
            width: '100%',
            id:'titleId',
            flex: 1,
            style: 'margin-top: 3px;'
        },
        {//第二行---------------每周之星区域
            xtype: 'panel',
            width: '100%',
            flex: 4,
            layout: 'vbox',
            id: 'weekStarId',
            hidden: false,
            style: 'margin-top: 50px;',
            items: [
                {
                    //标题栏
                    xtype: 'label',
                    width: '100%',
                    flex: 2,
                    text: '每周之星',
                    style: 'font-size: 30px;text-align: center;padding-top: 20px;font-weight:bold;color: #46C1F5'
                },{
                    //每周之星
                    xtype: 'panel',
                    width: '100%',
                    flex: 8,
                    style: 'margin: 5px',
                    layout: 'hbox',
                    items: [
                        {
                            xtype: 'panel',//--------------------第一周
                            width: 260,
                            height: '80%',
                            style: 'border-radius: 10px; margin-left: 160px;',
                            bodyStyle: 'background: #46C1F5',
                            bind: {
                                html: `<table style="width: 260px;text-align: center;color: #fff;">
                                            <tr style="font-size: 20px; height: 50px; line-height: 50px;">
                                                <td><b>第一周</b></td>
                                            </tr>
                                            <tr style="font-size: 20px; height: 40px; line-height: 40px;">
                                                <td>{firstWeekDateStart} - {firstWeekDateEnd}</td>
                                            </tr>
                                            <tr style="font-size: 25px;">
                                                <td style="padding-top: 10px"><b>发货：{firstWeekPack}</b></td>
                                            </tr>
                                            <tr style="font-size: 25px;">
                                                <td style="padding-top: 10px"><b>配货：{firstWeekAlloc}</b></td>
                                            </tr>
                                        </table>`
                            }
                        },//第一周
                        {
                            xtype: 'panel',//--------------------第二周
                            width: 260,
                            height: '80%',
                            style: 'border-radius: 10px; margin-left: 160px;',
                            bodyStyle: 'background: #46C1F5',
                            bind:{
                                html: `<table style="width: 260px;text-align: center;color: #fff;">
                                            <tr style="font-size: 20px; height: 50px; line-height: 50px;">
                                                <td><b>第二周</b></td>
                                            </tr>
                                            <tr style="font-size: 20px; height: 40px; line-height: 40px;">
                                                <td>{secondWeekDateStart} - {secondWeekDateEnd}</td>
                                            </tr>
                                            <tr style="font-size: 25px;">
                                                <td style="padding-top: 10px"><b>发货：{secondWeekPack}</b></td>
                                            </tr>
                                            <tr style="font-size: 25px;">
                                                <td style="padding-top: 10px"><b>配货：{secondWeekAlloc}</b></td>
                                            </tr>
                                        </table>`
                            }
                        },//第二周
                        {
                            xtype: 'panel',//---------------------第三周
                            width: 260,
                            height: '80%',
                            style: 'border-radius: 10px; margin-left: 160px;',
                            bodyStyle: 'background: #46C1F5',
                            bind: {
                                html: `<table style="width: 260px;text-align: center;color: #fff;">
                                    <tr style="font-size: 20px; height: 50px; line-height: 50px;">
                                        <td><b>第三周</b></td>
                                    </tr>
                                    <tr style="font-size: 20px; height: 40px; line-height: 40px;">
                                        <td>{thirdWeekDateStart} - {thirdWeekDateEnd}</td>
                                    </tr>
                                    <tr style="font-size: 25px;">
                                        <td style="padding-top: 10px"><b>发货：{thirdWeekPack}</b></td>
                                    </tr>
                                    <tr style="font-size: 25px;">
                                        <td style="padding-top: 10px"><b>配货：{thirdWeekAlloc}</b></td>
                                    </tr>
                                </table>`
                            }
                        },//第三周
                        {
                            xtype: 'panel',//---------------------第四周
                            width: 260,
                            height: '80%',
                            style: 'border-radius: 10px; margin-left: 160px;',
                            bodyStyle: 'background: #46C1F5',
                            bind: {
                                html: `<table style="width: 260px;text-align: center;color: #fff;">
                                        <tr style="font-size: 20px; height: 50px; line-height: 50px;">
                                            <td><b>第四周</b></td>
                                        </tr>
                                        <tr style="font-size: 20px; height: 40px; line-height: 40px;">
                                            <td>{fouthWeekDateStart} - {fouthWeekDateEnd}</td>
                                        </tr>
                                        <tr style="font-size: 25px;">
                                            <td style="padding-top: 10px"><b>发货：{fouthWeekPack}</b></td>
                                        </tr>
                                        <tr style="font-size: 25px;">
                                            <td style="padding-top: 10px"><b>配货：{fouthWeekAlloc}</b></td>
                                        </tr>
                                    </table>`
                            }
                        }//第四周
                    ]
                }
            ]
        },
        {//第三行---------------------每月之星区域
            xtype: 'panel',
            width: '100%',
            flex: 5,
            id: 'monthStarId',
            style: 'margin-top: 50px;',
            hidden: false,
            bind: {
                html:
                    `
                        <table style="width: 100%;table-layout:fixed;color:#ffb148" cellspacing="30px">
                            <tr style="width:100%;height: 50px;line-height: 50px;font-size: 30px;text-align: center">
                                <td colspan="12">
                                    <b>每月之星</b>
                                </td>
                            </tr>
                            <tr style="height: 100%; color: #ffffff;font-weight:bold;font-size: 15px">
                                <td style="height: 270px;border-radius: 10px;background:#ffb148;text-align: center;>
                                        <div style="font-size: 20px">一月</div>
                                        <br/>
                                        <br/>
                                        <br/>
                                        <div>发货：{januaryPack}</div>
                                        <br/>
                                        <div>配货：{januaryAlloc}</div>
                                </td>
                                <td style="height: 270px;border-radius: 10px;background:#ffb148;text-align: center;>
                                        <div style="font-size: 20px">二月</div>
                                        <br/>
                                        <br/>
                                        <br/>
                                        <div>发货：{februaryPack}</div>
                                        <br/>
                                        <div>配货：{februaryAlloc}</div>
                                </td>
                                <td style="height: 270px;border-radius: 10px;background:#ffb148;text-align: center;>
                                       <div style="font-size: 20px">三月</div>
                                        <br/>
                                        <br/>
                                        <br/>
                                        <div>发货：{marchPack}</div>
                                        <br/>
                                        <div>配货：{marchAlloc}</div>
                                </td>
                                <td style="height: 270px;border-radius: 10px;background:#ffb148;text-align: center;>
                                        <div style="font-size: 20px">四月</div>
                                        <br/>
                                        <br/>
                                        <br/>
                                        <div>发货：{aprilPack}</div>
                                        <br/>
                                        <div>配货：{aprilAlloc}</div>
                                </td>
                                <td style="height: 270px;border-radius: 10px;background:#ffb148;text-align: center;>
                                        <div style="font-size: 20px">五月</div>
                                        <br/>
                                        <br/>
                                        <br/>
                                        <div>发货：{mayPack}</div>
                                        <br/>
                                        <div>配货：{mayAlloc}</div>
                                </td>
                                <td style="height: 270px;border-radius: 10px;background:#ffb148;text-align: center;>
                                        <div style="font-size: 20px">六月</div>
                                        <br/>
                                        <br/>
                                        <br/>
                                        <div>发货：{junePack}</div>
                                        <br/>
                                        <div>配货：{juneAlloc}</div>
                                </td>
                                <td style="height: 270px;border-radius: 10px;background:#ffb148;text-align: center;>
                                        <div style="font-size: 20px">七月</div>
                                        <br/>
                                        <br/>
                                        <br/>
                                        <div>发货：{julyPack}</div>
                                        <br/>
                                        <div>配货：{julyAlloc}</div>
                                </td>
                                <td style="height: 270px;border-radius: 10px;background:#ffb148;text-align: center;>
                                        <div style="font-size: 20px">八月</div>
                                        <br/>
                                        <br/>
                                        <br/>
                                        <div>发货：{augustPack}</div>
                                        <br/>
                                        <div>配货：{augustAlloc}</div>
                                </td>
                                <td style="height: 270px;border-radius: 10px;background:#ffb148;text-align: center;>
                                        <div style="font-size: 20px">九月</div>
                                        <br/>
                                        <br/>
                                        <br/>
                                        <div>发货：{septemberPack}</div>
                                        <br/>
                                        <div>配货：{septemberAlloc}</div>
                                </td>
                                <td style="height: 270px;border-radius: 10px;background:#ffb148;text-align: center;>
                                        <div style="font-size: 20px">十月</div>
                                        <br/>
                                        <br/>
                                        <br/>
                                        <div>发货：{octoberPack}</div>
                                        <br/>
                                        <div>配货：{octoberAlloc}</div>
                                </td>
                                <td style="height: 270px;border-radius: 10px;background:#ffb148;text-align: center;>
                                        <div style="font-size: 20px">十一月</div>
                                        <br/>
                                        <br/>
                                        <br/>
                                        <div>发货：{novemberPack}</div>
                                        <br/>
                                        <div>配货：{novemberAlloc}</div>
                                </td>
                                <td style="height: 270px;border-radius: 10px;background:#ffb148;text-align: center;>
                                        <div style="font-size: 20px">十二月</div>
                                        <br/>
                                        <br/>
                                        <br/>
                                        <div>发货：{decemberPack}</div>
                                        <br/>
                                        <div>配货：{decemberAlloc}</div>
                                </td>
                            </tr>
                        </table>
                    `
            }
        },
        {
            xtype: 'container',
            id: 'rankcontainer',
            flex: 9,
            width: '100%',
            layout: 'hbox',
            hidden: true,
            items: [
                {
                    xtype: 'rankgrid',
                    id: 'rankgridID',
                    width: '33%',
                    title: '配货排行榜'
                },
                {
                    xtype: 'fhrankgrid',
                    id: 'fhrankgridID',
                    width: '33%',
                    title: '发货排行榜'
                },
                {
                    xtype: 'errrankgrid',
                    id: 'errrankgridID',
                    width: '33%',
                    title: '发错排行榜'
                }
            ]

        }
    ],

    listeners: {
        afterrender: function () {
            let girdhide = Ext.getCmp('rankcontainer').isHidden();
            setInterval(function(){
                Ext.getCmp('weekStarId').setHidden(!girdhide);
                Ext.getCmp('monthStarId').setHidden(!girdhide);
                Ext.getCmp('rankcontainer').setHidden(girdhide);
                if (girdhide === true){
                    girdhide = !girdhide;
                }else {
                    girdhide = !girdhide;
                }
            },5000);

            // Ext.getCmp('rankcontainer').setHidden(false);
            // Ext.getCmp('weekStarId').setHidden(true);
            // Ext.getCmp('monthStarId').setHidden(true);
        }
    }
});