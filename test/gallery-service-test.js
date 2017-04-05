'use strict';

describe('FRONT END TESTS FOR GALLERY TESTS', function() {

  beforeEach(() => {
    angular.mock.module('cfram');
    angular.mock.inject('$rootScope', authService, galleryService, $window, $httpBackend) => {
      this.$window = $window;
      this.$rootScope = $rootScope;
      this.authService = authService;
      this.galleryService = galleryService;
      this.$httpBackend = $httpBackend;
    })
  })

  describe('galleryService.creategallery', () => {
    it('NEW GALLERY MADE! o_o', () => {
      let galleryData = {
        name: 'funky gallery',
        desc: 'its super funkay'
      };

      let headers = {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: 'Bearer test token'
      };

      this.$httpBackend.expectPOST('http://localhost:8000/api/gallery', galleryData, headers)
      .respond(200, {
        _id: '1234',
        username: 'BRO GOD DAMN TRAFFIC',
        name: galleryData.name,
        desc: galleryData.desc,
        pics: []
      });

      this.galleryService.createGallery(galleryData);
      this.$httpBackend.flush();
      this.$rootScope.$apply();
    });
  });

  this.$httpBackend.expectDELETE('http://localhost:8000/api/gallery/1234', galleryData, headers)
  .respond(200, {
    _id: null,
    username: null,
    name: null,
    desc: null,
    pics: []
  });

  this.$httpBackend.flush();
  this.$rootScope.$apply();
})
