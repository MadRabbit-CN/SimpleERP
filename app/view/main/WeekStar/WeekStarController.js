/**
 * Created by mayn on 2018/7/30.
 */
Ext.define('SimpleERP.view.main.WeekStar.WeekStarController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.weekstar',

    /**
     * Called when the view is created
     */
    init: function() {
        let Url = 'erp/fhrank.php';
        let me = this;
        Ext.Ajax.request({
            url: Url,
            timeout : 50000,
            dataType : "json",
            async: false,
            success: function(response) {
                let data = Ext.decode(response.responseText);
                let t = data.monthdata[0].alloc;
                console.log(t);
            },
            failure: function(response) {
                console.log('server-side failure with status code ' + response.status);
            }
        });
    }
});