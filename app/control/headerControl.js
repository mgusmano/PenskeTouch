Ext.define('PenskeTouch.control.HeaderControl', {
    extend: 'Ext.Toolbar',
    alias: 'widget.headercontrol',
    requires: [],
    constructor: function (config) {
        var me = this;
        me.callParent(arguments);
        var menu = {
            xtype: 'button',
            ui: 'plain',
            cls: 'face-text-color',
            iconCls: 'list',
            handler: function () {
                var theMenu;
                if ($L.menu === 'right') {
                    theMenu = Ext.Viewport.getMenus().right;
                }
                else {
                    theMenu = Ext.Viewport.getMenus().left;
                };
                if (theMenu.isHidden()) {
                    Ext.Viewport.showMenu($L.menu);
                }
                else {
                    Ext.Viewport.hideMenu($L.menu);
                }
            }
        };
        var back = {
            xtype: 'button',
            ui: 'plain',
            cls: 'face-text-color',
            iconCls: 'arrow_left',
            itemId: 'backButton',
            listeners: {
                tap: function () {
                    var view = this.up('container').up('container').getBackView();
                    if (view === null) {
                        view = 'menuview';
                    }
                    $L.showView(view, 'right');
                }
            }
        };
        if ($L.menu === 'right') {
            this.add([
                back,
                { xtype: 'spacer' },
                menu
            ]);
        }
        else {
            this.add([
                menu,
                { xtype: 'spacer' },
                back
            ]);
        };
    },
    config: {
        itemId: 'theHeader',
        docked: 'top',
        height: 50,
        //cls: 'header-background-color',
        style: 'font-size:14px;font-family:Roboto;',
        title: ''
    }
});