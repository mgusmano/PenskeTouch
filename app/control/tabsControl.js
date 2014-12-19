Ext.define('PenskeTouch.control.TabsControl', {
    extend: 'Ext.Container',
    alias: 'widget.tabscontrol',
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

        items: [
            {
                xtype: 'container',
                style: 'background-color:#F4F4F4;height:50px;width: 100%;color:white;font-family:Roboto;',
                layout: 'hbox',
                items: [
                    {
                        xtype: 'button', style: 'background-color:#F4F4F4;color:#000000;', width: '50%', height: '100%', ui: 'plain', text: 'Events Roster', handler: function () {
                            this.up('container').down('carousel').prev();
                        }
                    },

                    {
                        xtype: 'button', style: 'background-color:#E3E3E3;color:#B6B6B6;', width: '50%', height: '100%', ui: 'plain', text: 'News/Updates', handler: function () {
                            this.up('container').down('carousel').prev();
                        }
                    }
                ]
            },
            {
                xtype: 'image',
                itemId: 'eventsrostercontainer',
                style: 'width:100%;height:400px;',
                src: 'resources/images/eventsroster.png'
            },
            {
                xtype: 'container',
                itemId: 'newsupdatescontainer',
                hidden: true,
                html: 'newsupdatescontainer<br>a<br>a<br>a<br>a<br>a<br>a<br>a<br>a<br>a<br>a<br>a<br>a<br>a<br>a<br>a<br>a<br>a<br>a<br>a<br>a<br>a<br>a<br>a<br>'
            }
        ]
    }
});