
Usage
=====

You need to declare a char field::

    icon = fields.Char(
        string="Icon",
        help="Choose your Icon"
    )


In the view declaration, put widget='iconpicker' attribute in the field tag::

    ...
    <field name="arch" type="xml">
        <form string="View name">
            ...
            <field name="icon" widget="iconpicker"/>
            ...
        </form>
    </field>
    ...


Authors
~~~~~~~

* Mostafa Mohamed
