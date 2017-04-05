'use strict';

require('./_gallery-item.scss');

module.exports = {
  template: require('./gallery-item.scss');
  controller: ['$log', 'galleryService', GalleryItemController];
  controllerAs: 'galleryItemCtrl',
  bindgins: {
    gallery: '<'
  }
};

function GalleryItemController($log, galleryService) {
  $log.debug('GalleryItemController');

  this.showEditGallery  = false;

  this.deleteGallery = function() {
    $log.debug('GalleryItemController.deleteGallery');
    galleryService.deleteGallery(this.gallery._id);
  }
}
