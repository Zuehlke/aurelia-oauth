"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var aurelia_router_1 = require("aurelia-router");
var aurelia_http_client_1 = require("aurelia-http-client");
var oauth_service_1 = require("./oauth-service");
exports.OAuthService = oauth_service_1.OAuthService;
var oauth_token_service_1 = require("./oauth-token-service");
exports.OAuthTokenService = oauth_token_service_1.OAuthTokenService;
var oauth_interceptor_1 = require("./oauth-interceptor");
var oauth_authorize_step_1 = require("./oauth-authorize-step");
function configure(framework, config) {
    var oauthService = framework.container.get(oauth_service_1.OAuthService);
    var oauthTokenService = framework.container.get(oauth_token_service_1.OAuthTokenService);
    var httpClient = framework.container.get(aurelia_http_client_1.HttpClient);
    var oauthInterceptor = framework.container.get(oauth_interceptor_1.default);
    config(oauthService, oauthTokenService);
    httpClient.configure(function (builder) { return builder.withInterceptor(oauthInterceptor); });
    framework.aurelia.start().then(function () {
        oauthService.setTokenOnRedirect();
        var appRouter = framework.container.get(aurelia_router_1.AppRouter);
        appRouter.pipelineProvider.steps.splice(2, 0, oauth_authorize_step_1.OAuthAuthorizeStep);
    });
}
exports.configure = configure;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImF1cmVsaWEtb2F1dGgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFDQSxpREFBZ0U7QUFDaEUsMkRBQWlEO0FBRWpELGlEQUErQztBQTBCN0Msb0RBQVk7QUF6QmQsNkRBQTBEO0FBMEJ4RCxvRUFBaUI7QUF6Qm5CLHlEQUFtRDtBQUNuRCwrREFBNEQ7QUFFNUQsbUJBQTBCLFNBQWlDLEVBQUUsTUFBaUQ7SUFFMUcsSUFBSSxZQUFZLEdBQWlCLFNBQVMsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLDRCQUFZLENBQUMsQ0FBQztJQUN2RSxJQUFJLGlCQUFpQixHQUFzQixTQUFTLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyx1Q0FBaUIsQ0FBQyxDQUFDO0lBQ3RGLElBQUksVUFBVSxHQUFlLFNBQVMsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLGdDQUFVLENBQUMsQ0FBQztJQUNqRSxJQUFJLGdCQUFnQixHQUFxQixTQUFTLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQywyQkFBZ0IsQ0FBQyxDQUFDO0lBRW5GLE1BQU0sQ0FBQyxZQUFZLEVBQUUsaUJBQWlCLENBQUMsQ0FBQztJQUV4QyxVQUFVLENBQUMsU0FBUyxDQUFDLFVBQUEsT0FBTyxJQUFJLE9BQUEsT0FBTyxDQUFDLGVBQWUsQ0FBQyxnQkFBZ0IsQ0FBQyxFQUF6QyxDQUF5QyxDQUFDLENBQUM7SUFFM0UsU0FBUyxDQUFDLE9BQU8sQ0FBQyxLQUFLLEVBQUUsQ0FBQyxJQUFJLENBQUM7UUFDN0IsWUFBWSxDQUFDLGtCQUFrQixFQUFFLENBQUM7UUFHbEMsSUFBSSxTQUFTLEdBQWMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsMEJBQVMsQ0FBQyxDQUFDO1FBQ3hELFNBQVUsQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUseUNBQWtCLENBQUMsQ0FBQztJQUMzRSxDQUFDLENBQUMsQ0FBQztBQUNQLENBQUM7QUFsQkQsOEJBa0JDIiwiZmlsZSI6ImF1cmVsaWEtb2F1dGguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBGcmFtZXdvcmtDb25maWd1cmF0aW9uIH0gZnJvbSAnYXVyZWxpYS1mcmFtZXdvcmsnO1xyXG5pbXBvcnQgeyBBcHBSb3V0ZXIsIFJvdXRlckNvbmZpZ3VyYXRpb24gfSBmcm9tICdhdXJlbGlhLXJvdXRlcic7XHJcbmltcG9ydCB7IEh0dHBDbGllbnQgfSBmcm9tICdhdXJlbGlhLWh0dHAtY2xpZW50JztcclxuXHJcbmltcG9ydCB7IE9BdXRoU2VydmljZSB9IGZyb20gJy4vb2F1dGgtc2VydmljZSc7XHJcbmltcG9ydCB7IE9BdXRoVG9rZW5TZXJ2aWNlIH0gZnJvbSAnLi9vYXV0aC10b2tlbi1zZXJ2aWNlJztcclxuaW1wb3J0IE9BdXRoSW50ZXJjZXB0b3IgZnJvbSAnLi9vYXV0aC1pbnRlcmNlcHRvcic7XHJcbmltcG9ydCB7IE9BdXRoQXV0aG9yaXplU3RlcCB9IGZyb20gJy4vb2F1dGgtYXV0aG9yaXplLXN0ZXAnO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNvbmZpZ3VyZShmcmFtZXdvcms6IEZyYW1ld29ya0NvbmZpZ3VyYXRpb24sIGNvbmZpZzogKG9hdXRoU2VydmljZSwgb2F1dGhUb2tlblNlcnZpY2UpID0+IHZvaWQpIHtcclxuXHJcbiAgICB2YXIgb2F1dGhTZXJ2aWNlID0gPE9BdXRoU2VydmljZT5mcmFtZXdvcmsuY29udGFpbmVyLmdldChPQXV0aFNlcnZpY2UpO1xyXG4gICAgdmFyIG9hdXRoVG9rZW5TZXJ2aWNlID0gPE9BdXRoVG9rZW5TZXJ2aWNlPmZyYW1ld29yay5jb250YWluZXIuZ2V0KE9BdXRoVG9rZW5TZXJ2aWNlKTtcclxuICAgIHZhciBodHRwQ2xpZW50ID0gPEh0dHBDbGllbnQ+ZnJhbWV3b3JrLmNvbnRhaW5lci5nZXQoSHR0cENsaWVudCk7XHJcbiAgICB2YXIgb2F1dGhJbnRlcmNlcHRvciA9IDxPQXV0aEludGVyY2VwdG9yPmZyYW1ld29yay5jb250YWluZXIuZ2V0KE9BdXRoSW50ZXJjZXB0b3IpO1xyXG5cclxuICAgIGNvbmZpZyhvYXV0aFNlcnZpY2UsIG9hdXRoVG9rZW5TZXJ2aWNlKTtcclxuXHJcbiAgICBodHRwQ2xpZW50LmNvbmZpZ3VyZShidWlsZGVyID0+IGJ1aWxkZXIud2l0aEludGVyY2VwdG9yKG9hdXRoSW50ZXJjZXB0b3IpKTtcclxuXHJcbiAgICBmcmFtZXdvcmsuYXVyZWxpYS5zdGFydCgpLnRoZW4oKCkgPT4ge1xyXG4gICAgICBvYXV0aFNlcnZpY2Uuc2V0VG9rZW5PblJlZGlyZWN0KCk7XHJcblxyXG4gICAgICAvLyBBZGQgYXV0aG9yaXplIHN0ZXAgYmVmb3JlIHZpZXctbW9kZWwgYWN0aXZhdGUgcHJlZGVmaW5lZCBwaXBlbGluZSBzdGVwXHJcbiAgICAgIGxldCBhcHBSb3V0ZXIgPSA8QXBwUm91dGVyPmZyYW1ld29yay5jb250YWluZXIuZ2V0KEFwcFJvdXRlcik7XHJcbiAgICAgICg8YW55PmFwcFJvdXRlcikucGlwZWxpbmVQcm92aWRlci5zdGVwcy5zcGxpY2UoMiwgMCwgT0F1dGhBdXRob3JpemVTdGVwKTtcclxuICAgIH0pO1xyXG59XHJcblxyXG5leHBvcnQge1xyXG4gIE9BdXRoU2VydmljZSxcclxuICBPQXV0aFRva2VuU2VydmljZVxyXG59Il19
