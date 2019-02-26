odoo.define('web.web_widget_icon', function (require) {
    "use strict";

    var basic_fields = require('web.basic_fields');
    var field_registry = require('web.field_registry');
    var ListRenderer = require('web.ListRenderer');

    var FieldIcon = basic_fields.FieldChar.extend({
        template: 'FieldIcon',
        widget_class: 'oe_form_field_icon',

        _renderReadonly: function () {
            // Do Nothing
        },
        _renderEdit: function () {
            var self = this;
            this.$input = this.$el.find('input');
            this.$input.iconpicker({
                title: 'اختر ايقونة', hideOnSelect: true,
                input: 'input,.iconpicker-input',
                fullClassFormatter: function (val) {
                    return 'fa ' + val;
                },
            });
            this.$input.on('iconpickerSelected', function (e) {
                self._setValue(e.iconpickerValue.replace('fas', 'fa').replace('fab', 'fa').replace('far', 'fa'),{forceChange: true,doNotSetDirty: true});

            });
        },
    });
    field_registry.add('iconpicker', FieldIcon);


    return FieldIcon;
});
