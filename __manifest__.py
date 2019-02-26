# Odoo, Open Source Web Widget Color
{
    'name': "Web Widget Icon",
    'category': "web",
    'version': "11.0.1.0.0",
    "author": "",
    'depends': ['base', 'web'],
    'data': [
        'view/web_widget_icon_view.xml'
    ],
    'qweb': [
        'static/src/xml/widget.xml',
    ],
    'auto_install': False,
    'installable': True,
    'web_preload': True,
}
