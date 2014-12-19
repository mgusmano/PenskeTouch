Ext.define('PenskeTouch.view.LocalGuideView', {
    extend: 'PenskeTouch.view.BaseView',
    alias: 'widget.localguideview',
    constructor: function (config) {
        var me = this;
        me.callParent(arguments);
        me.setTitle('Local Guide');
    },
    config: {
        padding: 10,
        contentEl: 'localGuide' ,
        scrollable: {
            direction: 'vertical',
            directionLock: true
        }
    }
});