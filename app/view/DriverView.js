Ext.define('PenskeTouch.view.DriverView', {
    extend: 'PenskeTouch.view.BaseView',
    xtype: 'driverview',
    requires: [
        'PenskeTouch.control.TbdControl'
    ],
    activate: function() {
        //alert('activate');
        this.setTitle($L.driver);
        this.setBackView('driversview');
    },
    constructor: function (config) {
        var me = this;
        me.callParent(arguments);
        me.setTitle('Driver');
        me.add([
            { xtype: 'tbdcontrol' }
        ])
    }
});