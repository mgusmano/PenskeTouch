Ext.define('PenskeTouch.control.TileControl', {
    extend: 'Ext.Container',
    alias: 'widget.tilecontrol',
    requires: [],

    constructor: function (config) {
        var me = this;
        me.callParent(config);

        //var Table = $L.client.getTable('event');
        //var query = Table.where({ active: true });
        //query.orderBy('seq').read().then(function (data) {
        //    me.down('carousel').add(data);
        //}, function handleError(error) {
        //    alert(error);
        //});
    },

    config: {

        style: 'background-color:#F4F4F4;height:150px;width: 100%;color:white;font-family:Roboto;',
        layout: 'hbox',
        items: [
            {
                xtype: 'container',
                itemId: 'promotionalblock',
                style: 'background-color:#A7AFB0;xheight:100px;width: 50%;color:white',
                layout: {
                    type: 'vbox',
                    pack: 'center'
                },
                items: [
                    { xtype: 'image', style: 'margin-top:15px;margin-bottom:10px;', src: 'resources/images/promotionalblock.png', height: 45 },
                    { xtype: 'label', style: 'text-align:center;margin-bottom:10px;', html: 'Promotional<br>Block' }
                ]
            },
            {
                xtype: 'container',
                itemId: 'shareyourexperience',
                style: 'background-color:#FFFFFF;xheight:100px;width: 50%;color:black;',
                layout: {
                    type: 'vbox',
                    pack: 'center'
                },
                items: [
                    { xtype: 'image', style: 'margin-top:15px;margin-bottom:10px;', src: 'resources/images/shareyourexperience.png', height: 45 },
                    { xtype: 'label', style: 'text-align:center;margin-bottom:10px;', html: 'Share Your<br>Experience' }
                ]
            }
        ]
    }
});