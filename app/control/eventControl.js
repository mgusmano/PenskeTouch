Ext.define('PenskeTouch.control.EventControl', {
    extend: 'Ext.Container',
    alias: 'widget.eventcontrol',
    requires: [
        'Ext.Img',
        'Ext.Label'
    ],
    constructor: function (config) {
        //var me = this;
        this.callParent(config);
        this.add([
            { xtype: 'image', style: 'margin-top:15px;margin-bottom:10px;', src: config.image, height: 45 },
            { xtype: 'label', cls: 'face-text-color', style: 'font-size:16px;text-align:center;margin-bottom:10px;', html: config.name },
            { xtype: 'label', cls: 'header-text-color', style: 'font-size:16px;text-align:center;margin-bottom:10px;', html: config.time },
            { xtype: 'label', cls: 'face-text-color', style: 'font-size:14px;text-align:center;', html: '102DAYS 15HRS 32MINS 59SECS' }
        ]);
    },
    config: {
        name: ''
    }
});