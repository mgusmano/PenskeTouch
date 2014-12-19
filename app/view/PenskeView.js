Ext.define('PenskeTouch.view.PenskeView', {
    extend: 'PenskeTouch.view.BaseView',
    alias: "widget.penskeview",
    requires: [
        'PenskeTouch.control.EventsControl',
        'PenskeTouch.control.CredentialControl',
        'PenskeTouch.control.CircuitControl',
        'PenskeTouch.control.TileControl',
        'PenskeTouch.control.TabsControl',
        'PenskeTouch.control.FooterControl'
    ],
    //activate: function () {
    //    var me = this;
    //    me.setMasked({ xtype: 'loadmask', message: '' });
    //    me.setMasked(false);
    //},
    constructor: function (config) {
        var me = this;
        me.callParent(arguments);
        me.setTitle('Home');
        me.add([
            { xtype: 'eventscontrol' },
            { xtype: 'credentialcontrol' },
            { xtype: 'circuitcontrol' },
            { xtype: 'tilecontrol' },
            { xtype: 'tabscontrol' },
            { xtype: 'footercontrol' }
        ])
    },
    config: {
        scrollable: {
            direction: 'vertical',
            directionLock: true
        }
    }
});