/**
 * Created by mayn on 2018/8/6.
 */
Ext.define('SimpleERP.view.main.WeekStar.rankgrid.RankGridController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.rankgrid',

    /**
     * Called when the view is created
     */
    init: function() {

    },
    afterRender: function () {
        let girdhide = Ext.getCmp('rankcontainer').isHidden();
        girdhide = !girdhide;
        if (!girdhide){
            let store = Ext.getStore('rankgridstoreId');
            let me = store;
            const PAGE_SIZE = 14;
            const RESULTS = 28;
            let starNum = 0;
            setInterval(function(){
                if (starNum >= RESULTS){
                    starNum = 0;
                    me.reload({params:{start:starNum, limit:PAGE_SIZE }});
                    // console.log('11111starNum:'+starNum+'|||results:'+results);
                }else {
                    starNum = PAGE_SIZE;
                    me.reload({params:{start:starNum, limit:PAGE_SIZE }});
                    starNum+=PAGE_SIZE;
                    // console.log('2222starNum:'+starNum+'|||results:'+results);
                }
            },4000)
        }
    }
});