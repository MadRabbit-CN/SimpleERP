/**
 * Created by mayn on 2018/7/27.
 * 重写Ajax failed
 */
Ext.define('SimpleERP.util.Failed', {
    requires: [
        'SimpleERP.locale.*'
    ],

    singleton: true,
    alternateClassName: 'FAILED',

    ajax: function (response, options) {
        let title = I18N.FailedTitle;
        if (response.status === 404) {
            Ext.Msg.alert(title, I18N.Failed404);
        } else if (response.status === 500) {
            Ext.Msg.alert(title, I18N.Failed404);
        } else if (!Ext.isEmpty(response.responseText)){
            Ext.Msg.alert(title, Ext.String.format(I18N.FailedOtherCode,response.status, response.responseText))
        }
    },
    
    proxy: function (proxy, response, options, epots) {
        let status = response.status;
        if (status === 200 & !Ext.isEmpty(options.error)) {
            Ext.Msg.alert(I18n.FailedTitle, options.error);
        } else {
            FAILED.ajax(response, options);
        }
    },

    form: function (form, action) {
        if (action.result) {
            if (action.result.errors) return;
            if (!Ext.isEmpty(action.result.msg)) {
                Ext.Msg.alert(I18N.FailureProcessTitle, action.result.msg);
                return;
            }
        }
        FAILED.ajax(action.response);
    }

});