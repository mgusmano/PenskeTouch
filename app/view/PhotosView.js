Ext.define('PenskeTouch.view.PhotosView', {
    extend: 'PenskeTouch.view.BaseView',
    alias: 'widget.photosview',

    requires: [
        'Ext.SegmentedButton',
        'Ext.carousel.Carousel',
        'Ext.util.DelayedTask',
        'Ext.data.Store',
        'Ext.dataview.DataView',
        'Ext.dataview.List',
        'Ext.draw.Component'
],

    api_key_leap: 'b999973b4543f532d99b9b9f8e175fa3',
    user_id: '111636227@N03',
    flickerUrl: 'https://api.flickr.com/services/rest/',

    g: function (url, sCallback, eCallback) {
        var me = this;
        Ext.Ajax.request({
            withCredentials: false,
            useDefaultXhrHeader: false,
            disableCaching: true,
            dataType: "json",
            url: url,
            success: function (result, status, xhr) {
                if (result && result != '') {
                    if (sCallback) {
                        sCallback(result, status, xhr);
                    } else {
                        return [result, status, xhr];
                    }
                } else {
                    alert('error');
                }
            },
            error: function (xhr, status, error) {
                alert('error');
            }
        });
    },

    activate: function () {
        var me = this;
        me.setMasked({ xtype: 'loadmask', message: '' });
        me.down('segmentedbutton').removeAll(true, true);
        me.down('list').setStore(Ext.create('Ext.data.Store', {
            fields: ['text', 'eventId'],
            data: []
        }));
        me.down('carousel').setItems([]);
        var getDaysURL = me.flickerUrl + '?method=flickr.collections.getTree' + '&api_key=' + me.api_key_leap + '&user_id=' + me.user_id + '&format=json&nojsoncallback=1';
        me.g(getDaysURL, function (result, status, xhr) {
            //$L.days = result.collections.collection;
            $L.days = Ext.decode(result.responseText).collections.collection;
            var items = [];
            for (j = 0; j < $L.days.length; j++) {
                var o = {
                    text: $L.days[j].title,
                    desc: $L.days[j].description,
                    dayset: $L.days[j].set
                };
                me.down('segmentedbutton').add(o);
            };
            me.setMasked(false);
        });
    },

    doToggle: function (container, button, pressed) {
        var me = this.up('container').up('container');
        if (pressed === true) {
            me.down('carousel').setItems([]);

            me.setTitle('Photos' + ' - ' + button.config.desc);
            var getEventsData = me.flickerUrl + '?&method=flickr.photosets.getList' + '&api_key=' + me.api_key_leap + '&user_id=' + me.user_id + '&format=json&nojsoncallback=1';
            me.g(getEventsData, function (result, status, xhr) {
                //$L.photoset = result.photosets.photoset;
                $L.photoset = Ext.decode(result.responseText).photosets.photoset;
                var items = [];
                console.log(button.config);
                for (var i = 0; i < $L.photoset.length; i++) {
                    for (var j = 0; j < button.config.dayset.length; j++) {
                        if (button.config.dayset[j].id === $L.photoset[i].id) {
                            //pURL = 'http://farm' + $L.photoset[i].farm + '.static.flickr.com/' + $L.photoset[i].server + '/' + $L.photoset[i].primary + '_' + $L.photoset[i].secret + '_m.jpg';
                            items.push(
                                {
                                    text: $L.photoset[i].title._content,
                                    eventId: $L.photoset[i].id
                                }
                            );
                        }
                    }
                };
                me.down('list').setStore(Ext.create('Ext.data.Store', {
                    fields: ['text', 'eventId'],
                    data: items
                }));
            });
        }
    },

    onItemTap: function (list, idx, target, record, evt) {
        var me = this.up('container');
        me.setMasked({ xtype: 'loadmask', message: '' });
        var getPhotosURL = me.flickerUrl + '?&method=flickr.photosets.getPhotos' + '&api_key=' + me.api_key_leap + '&photoset_id=' + record.get('eventId') + '&format=json&nojsoncallback=1';
        me.g(getPhotosURL, function (result, status, xhr) {
            //var op = result.photoset.photo;
            var op = Ext.decode(result.responseText).photoset.photo;
            var items = [];
            for (var i = 0; i < op.length; i++) {
                pURL = 'http://farm' + op[i].farm + '.static.flickr.com/' + op[i].server + '/' + op[i].id + '_' + op[i].secret + '_b.jpg';
                items.push(
                    {
                        xtype: 'image',
                        height: '100%',
                        src: pURL
                    }
                );
            }
            me.down('carousel').setItems(items);
            me.setMasked(false);
        });
    },

    constructor: function (config) {
        var me = this;
        me.callParent(arguments);
        me.setTitle('Photos');
        me.add([
            //{
            //    xtype: 'draw',
            //    //viewBox: false,
            //   // autoSize: true,
            //    height: 350,
            //    width: 200,
            //    padding: 20,
            //    //rotation: {
            //    //    degrees: 90
            //    //},
            //    items: [

            //        {
            //            type: 'circle',
            //            fill: 'black',
            //            radius: 100,
            //            x: 100,
            //            y: 100
            //        }

            //        //{
            //        //    type: 'text',
            //        //    text: 'Creating a rotated Text component',
            //        //    fill: '#000',
            //        //    font: '18px Arial'
            //        //}

            //    ]
            //},
            {
                xtype: 'toolbar',
                itemId: 'theDays',
                docked: 'top',
                layout: {pack: 'center'},
                items: [
                    {
                        xtype: 'segmentedbutton',
                        cls: 'face-text-color',
                        allowDepress: true,
                        listeners: {
                            toggle: this.doToggle
                        }
                    }
                ]
            },
            {
                xtype: 'list',
                height: '30%',
                itemId: 'theEvents',
                itemTpl: '{text}',
                listeners: {
                    itemtap: this.onItemTap
                }
            },
            {
                xtype: 'carousel',
                id: 'theCarousel',
                bufferSize: 2,
                height: '70%',
                direction: 'horizontal'
            }
        ]);
    },
    config: {
        listeners: {
            resize: function (element, eOpts) {
                var me = this;
                var element = this.element.dom;
                if (element.clientHeight > element.clientWidth) {
                    //me.setOrientation('portrait');
                    me.down('#theHeader').setHidden(false);
                    me.down('#theDays').setHidden(false);
                    me.down('#theEvents').setHidden(false);
                    me.down('#theCarousel').setHeight('70%');
                }
                else {
                    //me.setOrientation('landscape');
                    me.down('#theHeader').setHidden(true);
                    me.down('#theDays').setHidden(true);
                    me.down('#theEvents').setHidden(true);
                    me.down('#theCarousel').setHeight('100%');
                }
            }
        }
    }
});