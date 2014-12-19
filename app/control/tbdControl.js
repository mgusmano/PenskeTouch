Ext.define('PenskeTouch.control.TbdControl', {
    extend: 'Ext.Container',
    alias: 'widget.tbdcontrol',
    requires: [],
    activate: function () {
        var me = this;
        me.setMasked({ xtype: 'loadmask', message: '' });
        //me.down('dataview').setStore(Ext.create('Ext.data.Store', {
        //    fields: ['logoText', 'sponsorType', 'sponsorCode', 'logoName', 'sponsorName'],
        //    data: $L.diamond
        //}));
        me.setMasked(false);
    },
    //initialize: function () {
    //    //Ext.applyIf(newOptions, options);
    //    var me = this;
    //    me.callParent(arguments);
    //    //console.log('TbdControl-initialize');
    //},
    constructor: function (config) {
        var me = this;
        me.callParent(arguments);
        //console.log('TbdControl-constructor');
        //console.log(config);
    },
    config: {
        style: 'padding:10px;background-color:#D67272;height:1000px;width: 100%;color:white;font-family:Roboto;',
        html: 'TBD'
    }
});