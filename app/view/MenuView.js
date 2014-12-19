Ext.define('PenskeTouch.view.MenuView', {
    extend: 'Ext.Menu',
    alias: "widget.menuview",
    requires: [
    ],
    config: {
        width: 250,
        //bodyStyle:'border-color:#99BBE8;background-color:#D3E1F1 !important;',
        scrollable: 'vertical',

        defaults: {
            xtype: 'button',
            ui: 'plain',
            cls: 'face-text-color',
            style: 'height:40px;font-size:18px;font-family:Roboto;cursor:pointer;text-transform: uppercase;',
            handler: function (button) {
                $L.showView(button.config.view, $L.menu);
                Ext.Viewport.hideMenu($L.menu);
            }
        },
        items: [
            { xtype: 'container', html: 'menu' },
            { text: 'home', view: 'penskeview' },
            { text: 'drivers', view: 'driversview' },
            { text: 'agenda', view: 'agendaview' },
            { text: 'Local Guide', view: 'localguideview' },
            { text: 'photos', view: 'photosview' },
            { text: 'sponsors', view: 'sponsorsview' },
            { text: 'admin', view: 'adminview' }
            //{ text: 'restaurants' },
            //{ text: 'event' }
        ]
    }
});