Ext.define('PenskeTouch.view.SponsorsView', {
    extend: 'PenskeTouch.view.BaseView',
    alias: 'widget.sponsorsview',

    sponsorData: [
        { image: 'Ic_All.png', view: 'tbdview', viewx: 'allsponsorsview', text: 'View All Sponsors' },
        { image: 'platinum.png', view: 'platinumsponsorsview', text: '2015 Platinum Sponsors' },
        { image: 'diamond.png', view: 'diamondsponsorsview', text: '2015 Diamond Sponsors' },
        { image: 'silver.png', view: 'silversponsorsview', text: '2015 Silver Sponsors' },
        { image: 'bronze.png', view: 'bronzesponsorsview', text: '2015 Bronze Sponsors' }
    ],

    activate: function () {
        var me = this;
        me.setMasked({ xtype: 'loadmask', message: '' });
        me.down('#list').setStore(Ext.create('Ext.data.Store', {
            fields: ['id', 'view', 'image', 'text'],
            data: me.sponsorData
        }));
        me.setMasked(false);
    },

    constructor: function (config) {
        var me = this;
        me.callParent(arguments);
        me.setTitle('Sponsors');
        me.setBackView('penskeview');
        me.add([
            {
                xtype: 'list',
                itemId: 'list',
                height: '100%',
                //itemHeight: 70,
                border: 3,
                //style: 'padding:10px;background-color:#D67272;xheight:1000px;width: 100%;color:white;font-family:Roboto;',
                style: 'background-color:#D67272;',
                emptyText: 'Loading list of Sponsors...',
                itemTpl: [
                    '<div style="padding:2px 5px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;" xclass="sponsor-list-item">',
                    '<span style="background-size:cover;background-repeat: no-repeat;background-image: url(resources/images/sponsors/{image});display:inline-block;vertical-align:-17px;width:50px;height:50px;margin-right:15px;background-position:center center;" xclass="sponsor-pic" ></span>',
                    '<span style="color:white;font-family:Roboto;font-size:16px;font-weight:bold;">{text}</span>',
                    '<span  style="top: -33px;float: right;left: 30px;margin: 20px 0px 0px 0px;" xclass="ui-allsponsors-arrowright"><img src="resources/images/sponsors/arrow_right.png"></span>',
                    '</div>'
                ],
                listeners: {
                    itemtap: function (list, idx, target, record, evt) {
                        $L.showView(record.get('view'), 'left');
                    }
                } 
            }
        ]);
    },
    config: {
        //bodyPadding: 10,
        //style: 'padding:10px;background-color:#D67272;xheight:1000px;width: 100%;color:white;font-family:Roboto;'
    }
});