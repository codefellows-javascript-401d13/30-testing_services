'use strict';

describe('Edit Gallery Component', function() {
  beforeEach(() => {
    angular.mock.module('cfgram');
    angular.mock.inject(($rootScope, $componentController, $httpBackend, authService) => {
      this.$rootScope = $rootScope;
      this.$componentController = $componentController;
      this.$httpBackend = $httpBackend;
      this.authService = authService;
    });
  });
  it('should contain the proper component bindings', () => {
    let bindings = {
      gallery: {
        name: 'test gallery name',
        desc: 'test gallery description'
      }
    };
    let editGalleryCtrl = this.$componentController('editGallery', null, bindings);
    expect(editGalleryCtrl.gallery.name).toEqual(bindings.gallery.name);
    expect(editGalleryCtrl.gallery.desc).toEqual(bindings.gallery.desc);
    this.$rootScope.$apply();
  });
  describe('editGalleryCtrl.updateGallery()', () => {
    it('should make a valid PUT request', () => {
      let url = 'http://localhost:3000/api/gallery/7';
      let headers = {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: 'Bearer test token'
      };
      let tempGallery = {
        _id: '7',
        name: 'updated name',
        desc: 'updated desc'
      };
      this.$httpBackend.expectPUT(url, tempGallery, headers).respond(200);

      let bindings = { gallery: tempGallery };
      let editGalleryCtrl = this.$componentController('editGallery', null, bindings);
      editGalleryCtrl.updateGallery();
      expect(editGalleryCtrl.gallery.name).toEqual('updated name');
      expect(editGalleryCtrl.gallery.desc).toEqual('updated desc');
      this.$rootScope.$apply();
    });
  })
});
