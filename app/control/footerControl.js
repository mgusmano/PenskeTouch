Ext.define('PenskeTouch.control.FooterControl', {
    extend: 'Ext.Container',
    alias: 'widget.footercontrol',
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
        xtype: 'container',
        itemId: 'footer',
        style: 'background-color:#A7AFB0;color:#FFFFFF;height:150px;font-family:Roboto;font-size:14px;padding-top:20px;padding-left:20px;',
        html: 'Penske Team Official Page<br><br>Verizon IndyCar 2015<br><br>Brasilia Indy 300'
    }
});