/**
 * The list of employees view for the application.
 *
 * <p>
 * All views are purely layout and don't contain event handling,
 * application or business logic; this is all done in the view's corresponding mediator.
 * </p>
 *
 *  TODO: BMR: 02/22/13: Add support for search. The search input isn't currently in the view.
 */
Ext.define("CafeTownsend.view.EmployeeListView", {
    extend: "Ext.Panel",

    requires: [
        "Ext.TitleBar",
        "Ext.dataview.List",
        "Ext.field.Search"
    ],

    alias: "widget.employeeListView",

    config: {

        layout: {
            type: "fit"
        },

        items: [
            {
                xtype: "titlebar",
                title: "Employees",
                docked: "top",
                items: [
                    {
                        xtype: "button",
                        itemId: "logoutButton",
                        text: "Log Off",
                        align: "left"
                    },
                    {
                        xtype: "button",
                        itemId: "newEmployeeButton",
                        text: "New",
                        align: "right",
                        ui: "action"
                    }
                ]
            },
            {
                xtype: "list",
                itemId: "list",
                fullscreen: true,
                itemTpl: "<div class='contact'>{firstName} <strong>{lastName}</strong></div>",
                loadingText: "Loading Employees...",
                emptyText: "No Employees found.",
                grouped: true,
                onItemDisclosure: true,

                items: [
                    {
                        xtype: "titlebar" ,
                        itemId:"titlebar",
                        id:"titlebar",
                        docked: 'top',

                        items: [
                            {
                                xtype: "searchfield" ,
                                itemId:"searchInput",
                                id:"searchInput"
                            }
                        ]
                    }
                ]
            }
        ]
    }
});
