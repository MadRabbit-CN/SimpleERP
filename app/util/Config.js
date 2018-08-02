/**
 * Created by mayn on 2018/7/26.
 * 配置类
 */
Ext.define('SimpleERP.util.Config', {
    alternateClassName: 'CFG',
    singleton: true,

    config: {
        userInfo: null
    },

    constructor: function (config) {
        this.initConfig(config);
        this.callParent(arguments);
    }
});