Ext.define('PenskeTouch.view.DriversView', {
    extend: 'PenskeTouch.view.BaseView',
    xtype: 'driversview',
    requires: [
        'PenskeTouch.control.TbdControl'
    ],
    activate: function() {
        //alert('activate');
    },
    constructor: function (config) {
        var me = this;
        me.callParent(arguments);
        me.setTitle('Drivers');
        me.add([
            {
                xtype: 'dataview',
                listeners: {
                    itemtap: function (dataview, index, target, record, e, eOpts ) {
                        //alert(record.data.driver);
                        $L.driver = record.data.driver;
                        $L.showView('driverview', 'left');
                    }
                },
                height: '100%',
                scrollable: true,
                inline: true,
                data: [
                    { driver: 'keselowski', logoName: 'http://www.teampenske.com/images/driver_nav_keselowski.png' },
                    { driver: 'logano', logoName: 'http://www.teampenske.com/images/driver_nav_logano.png' },
                    { driver: 'blaney', logoName: 'http://www.teampenske.com/images/driver_nav_blaney.png' },
                    { driver: 'castroneves', logoName: 'http://www.teampenske.com/images/driver_nav_castroneves.png' },
                    { driver: 'power', logoName: 'http://www.teampenske.com/images/driver_nav_power.png' },
                    { driver: 'montoya', logoName: 'http://www.teampenske.com/images/driver_nav_montoya.png' }
                ],
                itemTpl: '<img style="cursor:pointer;background-color:#D6727;height:80px;margin:10px 10px 10px 10px;" src="{logoName}" />'
            }
        ])
    }
});