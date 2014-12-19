Ext.define('PenskeTouch.control.CircuitControl', {
    extend: 'Ext.Container',
    alias: 'widget.circuitcontrol',
    requires: [],

    constructor: function (config) {
        var me = this;
        me.callParent(config);
        me.addCls('third-background-color header-text-color');

        //var Table = $L.client.getTable('event');
        //var query = Table.where({ active: true });
        //query.orderBy('seq').read().then(function (data) {
        //    me.down('carousel').add(data);
        //}, function handleError(error) {
        //    alert(error);
        //});
    },

    config: {

        itemId: 'circuitmap',
        layout: 'hbox',

        style: 'height:100px;width: 100%;font-family:Roboto Thin 100;',
        items: [
            { xtype: 'component', style: 'padding-left:10px;padding-top:30px;', html: 'Circuit<br>map', width: '25%' },
            { xtype: 'image', style: 'margin-top:0px;margin-bottom:10px;', src: 'resources/images/PR_TRACK_ALMS_STPETE.png', width: '25%' },
            {
                xtype: 'container', width: '50%', style: 'padding-top:20px;',
                items: [
                    { xtype: 'button', text: 'Track Information', style: 'font-size:14px;padding-bottom:10px;text-align:left;color:black;', height: '100%', ui: 'plain', handler: function () { alert('clicked'); } },
                    { xtype: 'component', style: 'padding-left:10px;width:150px;height:1px;border-bottom: 1px solid black;', height: '100%' },
                    { xtype: 'button', text: 'Spotter Guide', style: 'font-size:14px;padding-top:10px;text-align:left;color:black;', height: '100%', ui: 'plain', handler: function () { alert('clicked'); } }
                ]
            }
        ]
    }
});