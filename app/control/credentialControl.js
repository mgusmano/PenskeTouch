Ext.define('PenskeTouch.control.CredentialControl', {
    extend: 'Ext.Container',
    alias: 'widget.credentialcontrol',
    requires: [],

    constructor: function (config) {
        var me = this;
        me.callParent(arguments);
        me.addCls('secondary-background-color face-text-color');
    },

    config: {
        style: 'xheight:100px;width: 100%;color:white;padding-left:20px;padding-top:30px;padding-bottom:30px;padding-right:60px;font-family:Roboto;',
        layout: 'hbox',
        items: [
            { xtype: 'button', ui: 'plain', cls: 'face-text-color', iconCls: 'add', style: 'padding-left:1px;' },
            {
                xtype: 'component',
                itemId: 'circuitmap',
                cls: 'face-text-color',
                style: 'width: 100%;padding-top:5px;font-size:18px;font-family:Roboto;',
                html: 'Credential location and info'
            }
        ]
    }
});