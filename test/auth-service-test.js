'use strict';

describe('FRONT END AUTH SERVICE TESTING =================', function() {

  beforeEach(() => {
    angular.mock.module('cfgram');
    angular.mock.inject(($rootScope, authService, $window, $httpBackend, resStatus) => {
      this.$window = $window;
      this.$rootScope = $rootScope;
      this.authService = authService;
      this.$httpBackend = $httpBackend;
      this.resStatus = null; // mock requests so eff it, let me try this way
    });
  };

  describe('GET THE TOKEN OF THAT AUTHORIZATION SON', () => (
    it('happy tests get a chuck e cheese token back', () => {
      this.authService.token = null;
      this.$window.localStorage('token', 'test token');

      this.authService.getToken()
      .then( token => {
        this.resStatus = 200;
        expect(this.resStatus).toEqual(200); // kind of meaningless test, and may not even work but I want to replicate back end
        expect(token).toBe('string'); // have to look up notation
        expect(token).toEqual('test token');
      })
      .catch( err => {
        this.resStatus = 400;
        expect(token).toEqual(null);
        expect(token).toEqual(400);
      });

      this.$rootScope.$apply();
    })
  ));

  describe('JOIN THE PARTY WITH A DANK SIGN UP', () => {
    it('party time with a new user post', () => {
      this.$window.lcoalStorage('token', 'test token');

      this.authService.getToken()
      .then( token => {
        this.resStatus = 200;
        expect(this.resStatus).toEqual(200);
        expect(token).toEqual(200);
      })
      .catch( err => {
        this.resStatus = 400;
        expect(this.resStatus).toEqual(400);
        expect(token).toEqual(null);
      })
    })
  })
})
