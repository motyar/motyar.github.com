angular.service('Wine', function ($resource) {
    return $resource('http://motyar.info/wine/api/wines/:wineId', {}, {
        update: {method:'PUT'}
    });
});
