Ext.define('PenskeTouch.view.BaseView', {
    extend: 'Ext.Container',
    alias: 'widget.baseview',
    requires: [
        'PenskeTouch.control.HeaderControl'
    ],
    initialize: function () {
        var me = this;
        this.on('activate', function () {
            if (this.activate != undefined) {
                this.activate();
            }
        });
        this.callParent(arguments);
    },
    setTitle: function (title) {
        this.down('#theHeader').setTitle(title);
    },
    config: {
        view: null,
        backView: null,
        cls: 'primary-background-color',
        layout: {
            type: 'vbox'
        },
        items: [
            { xtype: 'headercontrol' }
        ]
    }
});