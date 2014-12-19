Ext.define('PenskeTouch.view.AdminView', {
    extend: 'PenskeTouch.view.BaseView',
    alias: 'widget.adminview',

    onDeleteLS: function () {
        alert('HI');

        //localStorage.removeItem($L.key);
        //alert('Deleted: ' + $L.key)
        //var data = { attendeeEmail: 'kng@hitachiconsulting.com' };
        //LDRY.ajax.call('GetMobileSponsors', data, me.sponsorsSuccess);
    },

    constructor: function (config) {
        var me = this;
        me.callParent(arguments);
        me.setTitle('Admin');
        me.add([
            {
                xtype: 'button', margin: 10, text: 'Clear LS', handler: function () {
                    localStorage.clear();
                    alert('Cleared...');
                    //for (var i = 0; i < localStorage.length; i++) {
                    //    alert(localStorage.getItem(localStorage.key(i)));
                    //}
                    //alert('HI');
                    //localStorage.removeItem($L.key);
                    //alert('Deleted: ' + $L.key)
                    //var data = { attendeeEmail: 'kng@hitachiconsulting.com' };
                    //LDRY.ajax.call('GetMobileSponsors', data, me.sponsorsSuccess);
                }
            },
            {
                xtype: 'button', margin: 10, text: 'Orientation', handler: function () {
                    alert(Ext.Viewport.getOrientation());
                }
            }

        ]);
    },
    config: {
    }
});