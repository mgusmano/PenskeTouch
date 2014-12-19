Ext.define('PenskeTouch.control.EventsControl', {
    extend: 'Ext.Container',
    alias: 'widget.eventscontrol',
    requires: ['Ext.carousel.Carousel', 'PenskeTouch.control.EventControl'],

    initialize: function () {
        var me = this;
        me.addCls('primary-background-color secondary-text-color');
        me.callParent(arguments);
    },

    constructor: function (config) {
        var me = this;
        me.callParent(arguments);
        me.addCls('primary-background-color secondary-text-color');
        me.setMasked({ xtype: 'loadmask', message: '' });
        var Table = $L.client.getTable('event');
        var query = Table.where({ active: true });
        query.orderBy('seq').read().then(function (data) {
            me.down('carousel').add(data);
            me.setMasked(false);
        }, function handleError(error) {
            alert(error);
        });
    },

    config: {
        style: 'height:200px;width: 100%;font-family:Roboto;',
        //cls: 'secondary-background-color',
        layout: {
            type: 'hbox',
            pack: 'center'
        },
        items: [
            {
                xtype: 'button', cls: 'face-text-color', style: 'height:100%;', ui: 'plain', iconCls: 'arrow_left',
                handler: function () {
                    this.up('container').down('carousel').previous();
                }
            },
            {
                xtype: 'carousel',
                bufferSize: 2,
                width: '70%',
                height: '100%',
                direction: 'horizontal',
                defaults: { xtype: 'eventcontrol' }
            },
            {
                xtype: 'button', cls: 'face-text-color', style: 'height:100%;', ui: 'plain', iconCls: 'arrow_right',
                handler: function () {
                    this.up('container').down('carousel').next();
                }
            }
        ]
    }
});