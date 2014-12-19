Ext.define('PenskeTouch.view.TbdView', {
    extend: 'PenskeTouch.view.BaseView',
    xtype: 'tbdview',
    requires: [
        'PenskeTouch.control.TbdControl'
    ],
    activate: function () {
        //var me = this;
        //me.setMasked({ xtype: 'loadmask', message: '' });
        ////me.down('dataview').setStore(Ext.create('Ext.data.Store', {
        ////    fields: ['logoText', 'sponsorType', 'sponsorCode', 'logoName', 'sponsorName'],
        ////    data: $L.diamond
        ////}));
        //me.setMasked(false);
    },
    constructor: function (config) {
        var me = this;
        me.callParent(arguments);
        me.setTitle('TBD');
        me.add([
            { xtype: 'tbdcontrol' }
        ])
    },
    config: {
    }
});