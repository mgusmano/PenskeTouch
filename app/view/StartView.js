Ext.define('PenskeTouch.view.StartView', {
    extend: 'PenskeTouch.view.BaseView',
    xtype: 'startview',
    requires: [
    ],
    constructor: function (config) {
        var me = this;
        me.callParent(arguments);
        me.setTitle('Welcome');
        me.setHtml('<div style="padding:10px;color:white;">Start View... (use menu to add to homescreen)</div>');
    },
    config: {
    }
});