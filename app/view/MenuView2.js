Ext.define('PenskeTouch.view.MenuView2', {
    extend: 'Ext.Container',
    alias: "widget.menuview",
    requires: [
        'PenskeTouch.control.EventsControl',
        'PenskeTouch.control.CredentialControl',
        'PenskeTouch.control.CircuitControl',
        'PenskeTouch.control.TileControl',
        'PenskeTouch.control.TabsControl',
        'PenskeTouch.control.FooterControl'
    ],

    //createMenu: function(){
 
    //    var menu = Ext.create('Ext.Menu', {
    //        width: 250,
    //        scrollable: 'vertical',
    //        items: [
    //            {
    //                xtype: 'button',
    //                text: 'Option 1',
    //                handler: function () {
    //                    alert("Option 1 Tapped");
    //                }

    //            },
    //            {
    //                xtype: 'button',
    //                text: 'Option 2',
    //                handler: function () {
    //                    alert("Option 1 Tapped");
    //                }
    //            }
    //        ]
    //    });
 
    //    return menu;
    //},

    //initialize: function () {
    //    Ext.Viewport.setMenu(this.createMenu(), {
    //        side: 'left',
    //        reveal: true
    //    });
    //},

    config: {
        scrollable: {
            direction: 'vertical',
            directionLock: true
        },
        items: [
            {
                xtype: 'toolbar',
                docked: 'top',
                title: 'Sliding Menu',
                items: [
                    {
                        ui: 'plain',
                        iconCls: 'list',
                        handler: function () {
                            if (Ext.Viewport.getMenus().left.isHidden()) {
                                Ext.Viewport.showMenu('left');
                            }
                            else {
                                Ext.Viewport.hideMenu('left');
                            }
                        }
                    }
                ]
            }
        ]
    }
});