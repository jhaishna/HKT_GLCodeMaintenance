define([
    'jquery',
    'knockout'
], function ($, ko) {
    function CustomFullPageViewModel() {
        var self = this;
        self.title = 'GL Code Maintenance';

        self.close = function (data, event) {
            location.hash = '';
        };
    }
    return CustomFullPageViewModel;
});