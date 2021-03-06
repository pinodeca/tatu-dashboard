/*
 *    (c) Copyright 2016 Hewlett-Packard Development Company, L.P.
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

  /**
   * @ngdoc overview
   * @name tatudashboard.resources
   * @description
   *
   * # tatudashboard.resources
   *
   * This module hosts registered resource types.  This module file may
   * contain individual registrations, or may have sub-modules that
   * more fully contain registrations.
   */
  angular
    .module('tatudashboard.resources', [
      'tatudashboard.resources.os-tatu-ca',
      'tatudashboard.resources.os-tatu-user',
      'tatudashboard.resources.os-tatu-host',
      'tatudashboard.resources.os-tatu-host-cert',
      'tatudashboard.resources.os-tatu-pat'
    ]);
})();
