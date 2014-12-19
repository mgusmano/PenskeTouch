Ext.define('PenskeTouch.view.AgendaView', {
    extend: 'PenskeTouch.view.BaseView',
    alias: 'widget.agendaview',
    constructor: function (config) {
        var me = this;
        me.callParent(arguments);
        me.setTitle('Agenda');
        //me.setHeight('100%');
        me.setHtml('<iframe style="width:100%;height:100%;display:block" frameborder="0" scrolling="yes" src="http://landrysleap.com/leap_agenda/html/employeeagenda.html" > </iframe>');


        //me.add([
        //    {
        //        xtype: 'container',
        //        height: '100%',
        //        html: '<iframe id="AGENDA_FRAME" class="ui-iframe" style="width:100%;height:100%;display:block" src="http://landrysleap.com/leap_agenda/html/employeeagenda.html" name="DBox" frameborder="0" scrolling="yes" > </iframe>'
        //    }
        //]);
    },
    config: {
    }
});