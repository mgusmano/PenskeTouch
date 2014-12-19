Ext.application({
    name: 'PenskeTouch',

    requires: [
        'Ext.Menu',
        'Ext.MessageBox',
        'Ext.field.Search',
        'Ext.tab.Panel',
        'Ext.util.DelayedTask',
        'Ext.data.Store',
        'Ext.dataview.DataView',
        'Ext.dataview.List'
    ],

    views: [
        'StartView',
        'PenskeView',
        'AgendaView',
        'AdminView',
        'SponsorsView',
        'LocalGuideView',
        'DriversView',
        'DriverView',
        'PhotosView',
        'TbdView',

        'BaseView',
        'MenuView',
        '$L'
    ],


    getParameterByName: function (name) {
        name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
        var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
        results = regex.exec(location.search);
        return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
    },

    launch: function () {
        Ext.fly('appLoadingIndicator').destroy();

        var homescreen = this.getParameterByName('homescreen');
        if (homescreen != 'true') {
            //alert('NOT running from home screen');
            Ext.Viewport.add([
                { xtype: 'startview' }
            ]);
        }
        else {
            //alert('running from home screen');
            $L.client = new WindowsAzure.MobileServiceClient('https://touchazure.azure-mobile.net/', 'RWoarrhdtvpsDSrmoBLOIxTgqDXyiY10');
            Ext.Viewport.setMenu(Ext.create('PenskeTouch.view.MenuView', {}), { side: $L.menu, reveal: true });
            Ext.Viewport.add([
                { xtype: 'penskeview' },
                { xtype: 'agendaview' },
                { xtype: 'adminview' },
                { xtype: 'sponsorsview' },
                { xtype: 'localguideview' },
                { xtype: 'driversview' },
                { xtype: 'driverview' },
                { xtype: 'photosview' },
                { xtype: 'tbdview' }
            ]);
        }
    },

    onUpdated: function() {
        Ext.Msg.confirm(
            "Application Update",
            "This application has just successfully been updated to the latest version. Reload now?",
            function(buttonId) {
                if (buttonId === 'yes') {
                    window.location.reload();
                }
            }
        );
    }
});
