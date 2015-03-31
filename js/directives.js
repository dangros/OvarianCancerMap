angular.module('SvgMapApp').directive('svgMap', ['$compile', function ($compile) {
    return {
        restrict: 'A',
        templateUrl: 'img/Blank_US_Map.svg',
        link: function (scope, element, attrs) {
            var regions = element[0].querySelectorAll('.state');
            angular.forEach(regions, function (path, key) {
                var regionElement = angular.element(path);
                regionElement.attr("region", "");
                regionElement.attr("dummy-data", "dummyData");
                regionElement.attr("hover-region", "hoverRegion");
                $compile(regionElement)(scope);
            })
        }
    }
}]);

angular.module('SvgMapApp').directive('region', ['$compile', function ($compile) {
    return {
        restrict: 'A',
        scope: {
            dummyData: "=",
            hoverRegion: "="
        },
        link: function (scope, element, attrs) {
            scope.elementId = element.attr("id");
            scope.regionClick = function () {
                alert(scope.elementId + " ==> " + element.attr("dummy-data"));

            };
            scope.regionMouseOver = function () {               //<
                scope.hoverRegion = scope.elementId;            //<--- hover over region highlight grid
                element[0].parentNode.appendChild(element[0]);  //<
            };
            element.attr("ng-click", "regionClick()");
            element.attr("ng-attr-fill", "{{dummyData[elementId].value | map_color}}");
            element.attr("ng-mouseover", "regionMouseOver()");
            element.attr("ng-class", "{active:hoverRegion==elementId}");
            element.removeAttr("region");
            $compile(element)(scope);
            event.preventDefault();
            event.stopPropagation();
        }
    }
}]);