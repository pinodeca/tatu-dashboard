/**
 * (c) Copyright 2016 Hewlett Packard Enterprise Development LP
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
(function () {
  'use strict';

  angular
    .module('tatudashboard.resources.os-tatu-host')
    .factory('tatudashboard.resources.os-tatu-host.api', apiService);

  apiService.$inject = [
    'tatudashboard.apiPassthroughUrl',
    'horizon.framework.util.http.service',
    'horizon.framework.widgets.toast.service'
  ];

  /**
   * @ngdoc service
   * @param {Object} httpService
   * @param {Object} toastService
   * @name apiService
   * @description Provides direct access to Tatu host APIs.
   * @returns {Object} The service
   */
  function apiService(apiPassthroughUrl, httpService, toastService) {
    var service = {
      get: get,
      list: list
    };

    return service;

    ///////////////
    
    /**
     * @name list
     * @description
     * Get a list of hosts.
     *
     * The listing result is an object with property "items." Each item is
     * a host.
     *
     * @param {Object} params
     * Query parameters. Optional.
     * 
     * @returns {Object} The result of the API call
     */
    function list(params) {
      var config = params ? {'params': params} : {};
      return httpService.get(apiPassthroughUrl + 'hosts/', config)
        .error(function () {
          toastService.add('error', gettext('Unable to retrieve the hosts.'));
        });
    }

    /**
     * @name get
     * @description
     * Get a single host by ID.
     *
     * @param {string} id
     * Specifies the id of the host to request.
     *
     * @returns {Object} The result of the API call
     */
    function get(id) {
      return httpService.get(apiPassthroughUrl + 'hosts/' + id + '/')
        .error(function () {
          toastService.add('error', gettext('Unable to retrieve the host.'));
        });
    }

  }
}());
