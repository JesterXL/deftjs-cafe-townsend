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
 * The authentication service object. Contains concrete Ajax calls.
 */
Ext.define("CafeTownsend.service.AuthenticationService", {
    extend: "SenchaExtensions.mvc.service.AbstractService",

    /**
     * The login ajax service call. Hits a json service and handles the success and fault accordingly.
     *
     * @param username      The username being authenticated.
     * @param password      The password being authenticated.
     */
    authenticate: function(username, password) {
        logger.debug("AuthenticationService.authenticate: username = " + username + ", password = " + password);

        Ext.Ajax.request({
            url: "data/login-success.json",
            method: "post",
            params: {
                user: username,
                pwd: password
            },

            success: function(response) {
                logger.debug("AuthenticationService.authenticate.success");

                var response = Ext.JSON.decode(response.responseText);
                this.success(response);
            },

            failure: function(response) {
                logger.debug("AuthenticationService.authenticate.failure");
                this.failure(response);
            }
        });
    },

    /**
     * The logout ajax service call. Hits a json service and handles the success and fault accordingly.
     */
    logout: function() {
        logger.debug("AuthenticationService.logout");

        Ext.Ajax.request({
            url: "data/logout-success.json",
            method: "post",

            success: function(response) {
                logger.debug("AuthenticationService.logout.success");

                var response = Ext.JSON.decode(response.responseText);
                this.success(response);
            },

            failure: function(response) {
                logger.debug("AuthenticationService.logout.failure");
                this.failure(response);
            }
        });
    }

});

