/*
 Copyright (c) 2013 [Web App Solution, Inc.](mailto:admin@webappsolution.com)

 CafeTownsend Sencha Touch DeftJS PoC is free software: you can redistribute it and/or modify
 it under the terms of the GNU General Public License as published by
 the Free Software Foundation, either version 3 of the License, or
 (at your option) any later version.

 CafeTownsend Sencha Touch DeftJS PoC is distributed in the hope that it will be useful,
 but WITHOUT ANY WARRANTY; without even the implied warranty of
 MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 GNU General Public License for more details.

 You should have received a copy of the GNU General Public License
 along with CafeTownsend Sencha Touch DeftJS PoC.  If not, see <http://www.gnu.org/licenses/>.
 */

/**
 * The domain object representing a user.
 */
Ext.define("CafeTownsend.model.UserModel", {
    extend: "Ext.data.Model",

    config: {

        idProperty: "id",

        fields: [
            { name: "id",           type: "int" },
            { name: "username",     type: "string" },
            { name: "password",     type: "string" },
            { name: "firstName",    type: "string" },
            { name: "lastName",     type: "string" },
            { name: "email",        type: "string" }
        ]
    }
});
