var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define(["require", "exports", "aurelia-dependency-injection", "./oauth-service"], function (require, exports, aurelia_dependency_injection_1, oauth_service_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var OAuthAuthorizeStep = (function () {
        function OAuthAuthorizeStep(oauthService) {
            this.oauthService = oauthService;
        }
        OAuthAuthorizeStep.prototype.run = function (routingContext, next) {
            var toState = routingContext.config;
            if (this.oauthService.loginOnStateChange(toState)) {
                return next.complete('Redirect');
            }
            return next();
        };
        return OAuthAuthorizeStep;
    }());
    OAuthAuthorizeStep = __decorate([
        aurelia_dependency_injection_1.autoinject(),
        __metadata("design:paramtypes", [oauth_service_1.OAuthService])
    ], OAuthAuthorizeStep);
    exports.OAuthAuthorizeStep = OAuthAuthorizeStep;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm9hdXRoLWF1dGhvcml6ZS1zdGVwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztJQU1BLElBQWEsa0JBQWtCO1FBQzdCLDRCQUFvQixZQUEwQjtZQUExQixpQkFBWSxHQUFaLFlBQVksQ0FBYztRQUFJLENBQUM7UUFFbkQsZ0NBQUcsR0FBSCxVQUFJLGNBQWMsRUFBRSxJQUFVO1lBQzVCLElBQUksT0FBTyxHQUFHLGNBQWMsQ0FBQyxNQUFNLENBQUM7WUFFcEMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxrQkFBa0IsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ2xELE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1lBQ25DLENBQUM7WUFFRCxNQUFNLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDaEIsQ0FBQztRQUNILHlCQUFDO0lBQUQsQ0FaQSxBQVlDLElBQUE7SUFaWSxrQkFBa0I7UUFEOUIseUNBQVUsRUFBRTt5Q0FFdUIsNEJBQVk7T0FEbkMsa0JBQWtCLENBWTlCO0lBWlksZ0RBQWtCIiwiZmlsZSI6Im9hdXRoLWF1dGhvcml6ZS1zdGVwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUmVkaXJlY3QsIE5leHQgfSBmcm9tICdhdXJlbGlhLXJvdXRlcic7XHJcbmltcG9ydCB7IGF1dG9pbmplY3QgfSBmcm9tICdhdXJlbGlhLWRlcGVuZGVuY3ktaW5qZWN0aW9uJztcclxuXHJcbmltcG9ydCB7IE9BdXRoU2VydmljZSB9IGZyb20gJy4vb2F1dGgtc2VydmljZSc7XHJcblxyXG5AYXV0b2luamVjdCgpXHJcbmV4cG9ydCBjbGFzcyBPQXV0aEF1dGhvcml6ZVN0ZXAge1xyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgb2F1dGhTZXJ2aWNlOiBPQXV0aFNlcnZpY2UpIHsgfVxyXG5cclxuICBydW4ocm91dGluZ0NvbnRleHQsIG5leHQ6IE5leHQpIHtcclxuICAgIGxldCB0b1N0YXRlID0gcm91dGluZ0NvbnRleHQuY29uZmlnOyAgICBcclxuICAgIFxyXG4gICAgaWYgKHRoaXMub2F1dGhTZXJ2aWNlLmxvZ2luT25TdGF0ZUNoYW5nZSh0b1N0YXRlKSkge1xyXG4gICAgICByZXR1cm4gbmV4dC5jb21wbGV0ZSgnUmVkaXJlY3QnKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gbmV4dCgpO1xyXG4gIH0gIFxyXG59Il19
