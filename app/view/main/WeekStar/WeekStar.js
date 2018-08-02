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
        'SimpleERP.view.main.WeekStar.WeekStarViewModel'
    ],

    layout: 'vbox',

    items: [
        /* include child components here */
        {//第一行--------------保留区域
            xtype: 'panel',
            width: '100%',
            flex: 1,
            style: 'margin-top: 3px;'
        },
        {//第二行---------------每周之星区域
            xtype: 'panel',
            width: '100%',
            flex: 3,
            layout: 'vbox',
            style: 'margin-top: 50px;',
            items: [
                {
                    //标题栏
                    xtype: 'label',
                    width: '100%',
                    flex: 2,
                    text: '每周之星',
                    style: 'font-size: 30px;text-align: center;padding-top: 20px;font-weight:bold;'
                },{
                    //每周之星
                    xtype: 'panel',
                    width: '100%',
                    flex: 8,
                    style: 'margin: 5px',
                    layout: 'hbox',

                    items: [{
                        xtype: 'panel',//--------------------第一周
                        width: 260,
                        height: '100%',
                        style: 'border-radius: 10px; margin-left: 160px;',
                        bodyStyle: 'background: #46C1F5',
                        html: `<table style="width: 260px;text-align: center;color: #fff;"> 
                                    <tr style="font-size: 20px; height: 50px; line-height: 50px;">
                                        <td>第一周</td> 
                                    </tr>
                                    <tr style="font-size: 20px; height: 40px; line-height: 40px;">
                                        <td>4月30 - 5月6号</td> 
                                    </tr>
                                    <tr style="font-size: 25px;">
                                        <td style="padding-top: 10px"><b>发货：张三</b></td> 
                                    </tr>
                                    <tr style="font-size: 25px;">
                                        <td style="padding-top: 10px"><b>配货：李四</b></td> 
                                    </tr>
                                </table>`
                    },{
                        xtype: 'panel',//--------------------第二周
                        width: 260,
                        height: '100%',
                        style: 'border-radius: 10px; margin-left: 160px;',
                        bodyStyle: 'background: #46C1F5',
                        html: `<table style="width: 260px;text-align: center;color: #fff;"> 
                                    <tr style="font-size: 20px; height: 50px; line-height: 50px;">
                                        <td>第二周</td> 
                                    </tr>
                                    <tr style="font-size: 20px; height: 40px; line-height: 40px;">
                                        <td>4月30 - 5月6号</td> 
                                    </tr>
                                    <tr style="font-size: 25px;">
                                        <td style="padding-top: 10px"><b>发货：张三</b></td> 
                                    </tr>
                                    <tr style="font-size: 25px;">
                                        <td style="padding-top: 10px"><b>配货：李四</b></td> 
                                    </tr>
                                </table>`
                    },{
                        xtype: 'panel',//---------------------第三周
                        width: 260,
                        height: '100%',
                        style: 'border-radius: 10px; margin-left: 160px;',
                        bodyStyle: 'background: #46C1F5',
                        html: `<table style="width: 260px;text-align: center;color: #fff;"> 
                                    <tr style="font-size: 20px; height: 50px; line-height: 50px;">
                                        <td>第三周</td> 
                                    </tr>
                                    <tr style="font-size: 20px; height: 40px; line-height: 40px;">
                                        <td>4月30 - 5月6号</td> 
                                    </tr>
                                    <tr style="font-size: 25px;">
                                        <td style="padding-top: 10px"><b>发货：张三</b></td> 
                                    </tr>
                                    <tr style="font-size: 25px;">
                                        <td style="padding-top: 10px"><b>配货：李四</b></td> 
                                    </tr>
                                </table>`
                    },{
                        xtype: 'panel',//---------------------第四周
                        width: 260,
                        height: '100%',
                        style: 'border-radius: 10px; margin-left: 160px;',
                        bodyStyle: 'background: #46C1F5',
                        html: `<table style="width: 260px;text-align: center;color: #fff;"> 
                                    <tr style="font-size: 20px; height: 50px; line-height: 50px;">
                                        <td>第四周</td> 
                                    </tr>
                                    <tr style="font-size: 20px; height: 40px; line-height: 40px;">
                                        <td>4月30 - 5月6号</td> 
                                    </tr>
                                    <tr style="font-size: 25px;">
                                        <td style="padding-top: 10px"><b>发货：张三</b></td> 
                                    </tr>
                                    <tr style="font-size: 25px;">
                                        <td style="padding-top: 10px"><b>配货：李四</b></td> 
                                    </tr>
                                </table>`
                    }]
                }

            ]
        },
        {//第三行---------------------每月之星区域
            xtype: 'panel',
            width: '100%',
            flex: 6,
            style: 'margin-top: 50px;',
            html:
                `
                    <table style="width: 100%;table-layout:fixed" cellspacing="30px">
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
                                    <div>发货：张三</div>
                                    <br/>
                                    <div>配货：李四</div>
                            </td>
                            <td style="height: 270px;border-radius: 10px;background:#ffb148;text-align: center;>
                                    <div style="font-size: 20px">一月</div>
                                    <br/>
                                    <br/>
                                    <div>发货：张三</div>
                                    <br/>
                                    <div>配货：李四</div>
                            </td>
                            <td style="height: 270px;border-radius: 10px;background:#ffb148;text-align: center;>
                                    <div style="font-size: 20px">一月</div>
                                    <br/>
                                    <br/>
                                    <div>发货：张三</div>
                                    <br/>
                                    <div>配货：李四</div>
                            </td>
                            <td style="height: 270px;border-radius: 10px;background:#ffb148;text-align: center;>
                                    <div style="font-size: 20px">一月</div>
                                    <br/>
                                    <br/>
                                    <div>发货：张三</div>
                                    <br/>
                                    <div>配货：李四</div>
                            </td>
                            <td style="height: 270px;border-radius: 10px;background:#ffb148;text-align: center;>
                                    <div style="font-size: 20px">一月</div>
                                    <br/>
                                    <br/>
                                    <div>发货：张三</div>
                                    <br/>
                                    <div>配货：李四</div>
                            </td>
                            <td style="height: 270px;border-radius: 10px;background:#ffb148;text-align: center;>
                                    <div style="font-size: 20px">一月</div>
                                    <br/>
                                    <br/>
                                    <div>发货：张三</div>
                                    <br/>
                                    <div>配货：李四</div>
                            </td>
                            <td style="height: 270px;border-radius: 10px;background:#ffb148;text-align: center;>
                                    <div style="font-size: 20px">一月</div>
                                    <br/>
                                    <br/>
                                    <div>发货：张三</div>
                                    <br/>
                                    <div>配货：李四</div>
                            </td>
                            <td style="height: 270px;border-radius: 10px;background:#ffb148;text-align: center;>
                                    <div style="font-size: 20px">一月</div>
                                    <br/>
                                    <br/>
                                    <div>发货：张三</div>
                                    <br/>
                                    <div>配货：李四</div>
                            </td>
                            <td style="height: 270px;border-radius: 10px;background:#ffb148;text-align: center;>
                                    <div style="font-size: 20px">一月</div>
                                    <br/>
                                    <br/>
                                    <div>发货：张三</div>
                                    <br/>
                                    <div>配货：李四</div>
                            </td>
                            <td style="height: 270px;border-radius: 10px;background:#ffb148;text-align: center;>
                                    <div style="font-size: 20px">一月</div>
                                    <br/>
                                    <br/>
                                    <div>发货：张三</div>
                                    <br/>
                                    <div>配货：李四</div>
                            </td>
                            <td style="height: 270px;border-radius: 10px;background:#ffb148;text-align: center;>
                                    <div style="font-size: 20px">一月</div>
                                    <br/>
                                    <br/>
                                    <div>发货：张三</div>
                                    <br/>
                                    <div>配货：李四</div>
                            </td>
                            <td style="height: 270px;border-radius: 10px;background:#ffb148;text-align: center;>
                                    <div style="font-size: 20px">一月</div>
                                    <br/>
                                    <br/>
                                    <div>发货：张三</div>
                                    <br/>
                                    <div>配货：李四</div>
                            </td>
                        </tr>
                    </table>
                `
        }
    ],

    listeners: {
        afterrender: function () {
            // console.log(Ext.getCmp('weekstarpanel').getViewModel().getStore  ());
        }
    }
});