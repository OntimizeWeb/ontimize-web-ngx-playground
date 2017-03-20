/***********************************************************************************************
 * User Configuration.
 **********************************************************************************************/
/** Map relative paths to URLs. */
var map = {
    'main': 'main.js',
    '@angular/core': 'vendor/@angular/core/bundles/core.umd.js',
    '@angular/common': 'vendor/@angular/common/bundles/common.umd.js',
    '@angular/compiler': 'vendor/@angular/compiler/bundles/compiler.umd.js',
    '@angular/platform-browser': 'vendor/@angular/platform-browser/bundles/platform-browser.umd.js',
    '@angular/platform-browser-dynamic': 'vendor/@angular/platform-browser-dynamic/bundles/platform-browser-dynamic.umd.js',
    '@angular/http': 'vendor/@angular/http/bundles/http.umd.js',
    '@angular/router': 'vendor/@angular/router/bundles/router.umd.js',
    '@angular/forms': 'vendor/@angular/forms/bundles/forms.umd.js',
    '@angular/material': 'vendor/@angular/material/bundles/material.umd.js'
};
/** User packages configuration. */
var packages = {};
////////////////////////////////////////////////////////////////////////////////////////////////
/***********************************************************************************************
 * Everything underneath this line is managed by the CLI.
 **********************************************************************************************/
var barrels = [
    // App specific barrels.
    'app',
    'app/shared',
    'app/+main/+buttons',
    'app/+main/+checkbox',
    'app/+main/+combo',
    'app/+main/+containers',
    'app/+main/+dialogs',
    'app/+main/+inputs',
    'app/+main/+home',
    'app/+main/+lists',
    // 'app/+main/+tables',
    'app/+main'
];
var cliSystemConfigPackages = {};
// add package entries for angular packages in the form '@angular/common': { main: 'index.js', defaultExtension: 'js' }
barrels.forEach(function (barrelName) {
    cliSystemConfigPackages[barrelName] = { main: 'index', defaultExtension: 'js' };
});
cliSystemConfigPackages['rxjs'] = { defaultExtension: 'js' };
cliSystemConfigPackages['moment'] = { main: 'moment' };
cliSystemConfigPackages['jquery'] = { main: 'dist/jquery.min' };
cliSystemConfigPackages['jquery-ui'] = { main: 'ui/widgets/datepicker' };
cliSystemConfigPackages['datatables.net'] = { main: 'js/jquery.dataTables' };
cliSystemConfigPackages['datatables.net-buttons'] = { main: 'js/dataTables.buttons' };
cliSystemConfigPackages['datatables.net-colreorder'] = { main: 'js/dataTables.colReorder' };
cliSystemConfigPackages['datatables.net-select'] = { main: 'js/dataTables.select' };
cliSystemConfigPackages['colresizable'] = { main: 'colResizable-1.6.min' };
cliSystemConfigPackages['pdfmake'] = { main: 'build/pdfmake.min' };
cliSystemConfigPackages['ng2-translate'] = { main: 'bundles/ng2-translate.umd.js', defaultExtension: 'js' };
cliSystemConfigPackages['ontimize-web-ng2'] = { main: 'ontimize' };
cliSystemConfigPackages['angular2-highlight-js'] = { main: 'highlight-js.module', defaultExtension: 'js' };
// Apply the CLI SystemJS configuration.
System.config({
    map: {
        'rxjs': 'vendor/rxjs',
        'moment': 'vendor/moment',
        'jquery': 'vendor/jquery',
        'jquery-ui': 'vendor/jquery-ui',
        'datatables.net': 'vendor/datatables.net',
        'datatables.net-buttons': 'vendor/datatables.net-buttons',
        'datatables.net-colreorder': 'vendor/datatables.net-colreorder',
        'datatables.net-select': 'vendor/datatables.net-select',
        'colresizable': 'vendor/colresizable',
        'pdfmake': 'vendor/pdfmake',
        'ng2-translate': 'vendor/ng2-translate',
        'ontimize-web-ng2': 'vendor/ontimize-web-ng2',
        'angular2-highlight-js': 'vendor/angular2-highlight-js/lib'
    },
    packages: cliSystemConfigPackages
});
// Apply the user's configuration.
System.config({ map: map, packages: packages });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3lzdGVtLWNvbmZpZy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInN0ZW0tY29uZmlnLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztnR0FFZ0c7QUFDaEcsa0NBQWtDO0FBQ2xDLElBQU0sR0FBRyxHQUFRO0lBQ2YsTUFBTSxFQUFFLFNBQVM7SUFFakIsZUFBZSxFQUFFLDBDQUEwQztJQUMzRCxpQkFBaUIsRUFBRSw4Q0FBOEM7SUFDakUsbUJBQW1CLEVBQUUsa0RBQWtEO0lBQ3ZFLDJCQUEyQixFQUFFLGtFQUFrRTtJQUMvRixtQ0FBbUMsRUFBRSxrRkFBa0Y7SUFDdkgsZUFBZSxFQUFFLDBDQUEwQztJQUMzRCxpQkFBaUIsRUFBRSw4Q0FBOEM7SUFDakUsZ0JBQWdCLEVBQUUsNENBQTRDO0lBRTlELG1CQUFtQixFQUFFLGtEQUFrRDtDQUV4RSxDQUFDO0FBRUYsbUNBQW1DO0FBQ25DLElBQU0sUUFBUSxHQUFRLEVBQ3JCLENBQUM7QUFFRixnR0FBZ0c7QUFDaEc7O2dHQUVnRztBQUNoRyxJQUFNLE9BQU8sR0FBYTtJQUN4Qix3QkFBd0I7SUFDeEIsS0FBSztJQUNMLFlBQVk7SUFDWixvQkFBb0I7SUFDcEIscUJBQXFCO0lBQ3JCLGtCQUFrQjtJQUNsQix1QkFBdUI7SUFDdkIsb0JBQW9CO0lBQ3BCLG1CQUFtQjtJQUNuQixpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLHVCQUF1QjtJQUN2QixXQUFXO0NBRVosQ0FBQztBQUVGLElBQU0sdUJBQXVCLEdBQVEsRUFDcEMsQ0FBQztBQUVGLHVIQUF1SDtBQUN2SCxPQUFPLENBQUMsT0FBTyxDQUFDLFVBQUMsVUFBa0I7SUFDakMsdUJBQXVCLENBQUMsVUFBVSxDQUFDLEdBQUcsRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLGdCQUFnQixFQUFFLElBQUksRUFBRSxDQUFDO0FBQ2xGLENBQUMsQ0FBQyxDQUFDO0FBR0gsdUJBQXVCLENBQUMsTUFBTSxDQUFDLEdBQUcsRUFBRSxnQkFBZ0IsRUFBRSxJQUFJLEVBQUUsQ0FBQztBQUM3RCx1QkFBdUIsQ0FBQyxRQUFRLENBQUMsR0FBRyxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsQ0FBQztBQUN2RCx1QkFBdUIsQ0FBQyxRQUFRLENBQUMsR0FBRyxFQUFFLElBQUksRUFBRSxpQkFBaUIsRUFBRSxDQUFDO0FBQ2hFLHVCQUF1QixDQUFDLFdBQVcsQ0FBQyxHQUFHLEVBQUUsSUFBSSxFQUFFLHVCQUF1QixFQUFFLENBQUM7QUFDekUsdUJBQXVCLENBQUMsZ0JBQWdCLENBQUMsR0FBRyxFQUFFLElBQUksRUFBRSxzQkFBc0IsRUFBRSxDQUFDO0FBQzdFLHVCQUF1QixDQUFDLHdCQUF3QixDQUFDLEdBQUcsRUFBRSxJQUFJLEVBQUUsdUJBQXVCLEVBQUUsQ0FBQztBQUN0Rix1QkFBdUIsQ0FBQywyQkFBMkIsQ0FBQyxHQUFHLEVBQUUsSUFBSSxFQUFFLDBCQUEwQixFQUFFLENBQUM7QUFDNUYsdUJBQXVCLENBQUMsdUJBQXVCLENBQUMsR0FBRyxFQUFFLElBQUksRUFBRSxzQkFBc0IsRUFBRSxDQUFDO0FBQ3BGLHVCQUF1QixDQUFDLGNBQWMsQ0FBQyxHQUFHLEVBQUUsSUFBSSxFQUFFLHNCQUFzQixFQUFFLENBQUM7QUFDM0UsdUJBQXVCLENBQUMsU0FBUyxDQUFDLEdBQUcsRUFBRSxJQUFJLEVBQUUsbUJBQW1CLEVBQUUsQ0FBQztBQUNuRSx1QkFBdUIsQ0FBQyxlQUFlLENBQUMsR0FBRyxFQUFDLElBQUksRUFBRSw4QkFBOEIsRUFBRSxnQkFBZ0IsRUFBRSxJQUFJLEVBQUMsQ0FBQztBQUMxRyx1QkFBdUIsQ0FBQyxrQkFBa0IsQ0FBQyxHQUFHLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRSxDQUFDO0FBQ25FLHVCQUF1QixDQUFDLHVCQUF1QixDQUFDLEdBQUcsRUFBRSxJQUFJLEVBQUUscUJBQXFCLEVBQUUsZ0JBQWdCLEVBQUUsSUFBSSxFQUFFLENBQUM7QUFLM0csd0NBQXdDO0FBQ3hDLE1BQU0sQ0FBQyxNQUFNLENBQUM7SUFDWixHQUFHLEVBQUU7UUFDSCxNQUFNLEVBQUUsYUFBYTtRQUNyQixRQUFRLEVBQUUsZUFBZTtRQUN6QixRQUFRLEVBQUUsZUFBZTtRQUN6QixXQUFXLEVBQUUsa0JBQWtCO1FBQy9CLGdCQUFnQixFQUFFLHVCQUF1QjtRQUN6Qyx3QkFBd0IsRUFBRSwrQkFBK0I7UUFDekQsMkJBQTJCLEVBQUUsa0NBQWtDO1FBQy9ELHVCQUF1QixFQUFFLDhCQUE4QjtRQUN2RCxjQUFjLEVBQUUscUJBQXFCO1FBQ3JDLFNBQVMsRUFBRSxnQkFBZ0I7UUFDM0IsZUFBZSxFQUFFLHNCQUFzQjtRQUN2QyxrQkFBa0IsRUFBRSx5QkFBeUI7UUFDN0MsdUJBQXVCLEVBQUUsa0NBQWtDO0tBQzVEO0lBQ0QsUUFBUSxFQUFFLHVCQUF1QjtDQUNsQyxDQUFDLENBQUM7QUFFSCxrQ0FBa0M7QUFDbEMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFFLEtBQUEsR0FBRyxFQUFFLFVBQUEsUUFBUSxFQUFFLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG4gKiBVc2VyIENvbmZpZ3VyYXRpb24uXHJcbiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG4vKiogTWFwIHJlbGF0aXZlIHBhdGhzIHRvIFVSTHMuICovXHJcbmNvbnN0IG1hcDogYW55ID0ge1xyXG4gICdtYWluJzogJ21haW4uanMnLFxyXG5cclxuICAnQGFuZ3VsYXIvY29yZSc6ICd2ZW5kb3IvQGFuZ3VsYXIvY29yZS9idW5kbGVzL2NvcmUudW1kLmpzJyxcclxuICAnQGFuZ3VsYXIvY29tbW9uJzogJ3ZlbmRvci9AYW5ndWxhci9jb21tb24vYnVuZGxlcy9jb21tb24udW1kLmpzJyxcclxuICAnQGFuZ3VsYXIvY29tcGlsZXInOiAndmVuZG9yL0Bhbmd1bGFyL2NvbXBpbGVyL2J1bmRsZXMvY29tcGlsZXIudW1kLmpzJyxcclxuICAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic6ICd2ZW5kb3IvQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlci9idW5kbGVzL3BsYXRmb3JtLWJyb3dzZXIudW1kLmpzJyxcclxuICAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlci1keW5hbWljJzogJ3ZlbmRvci9AYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyLWR5bmFtaWMvYnVuZGxlcy9wbGF0Zm9ybS1icm93c2VyLWR5bmFtaWMudW1kLmpzJyxcclxuICAnQGFuZ3VsYXIvaHR0cCc6ICd2ZW5kb3IvQGFuZ3VsYXIvaHR0cC9idW5kbGVzL2h0dHAudW1kLmpzJyxcclxuICAnQGFuZ3VsYXIvcm91dGVyJzogJ3ZlbmRvci9AYW5ndWxhci9yb3V0ZXIvYnVuZGxlcy9yb3V0ZXIudW1kLmpzJyxcclxuICAnQGFuZ3VsYXIvZm9ybXMnOiAndmVuZG9yL0Bhbmd1bGFyL2Zvcm1zL2J1bmRsZXMvZm9ybXMudW1kLmpzJyxcclxuXHJcbiAgJ0Bhbmd1bGFyL21hdGVyaWFsJzogJ3ZlbmRvci9AYW5ndWxhci9tYXRlcmlhbC9idW5kbGVzL21hdGVyaWFsLnVtZC5qcydcclxuXHJcbn07XHJcblxyXG4vKiogVXNlciBwYWNrYWdlcyBjb25maWd1cmF0aW9uLiAqL1xyXG5jb25zdCBwYWNrYWdlczogYW55ID0ge1xyXG59O1xyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG4gKiBFdmVyeXRoaW5nIHVuZGVybmVhdGggdGhpcyBsaW5lIGlzIG1hbmFnZWQgYnkgdGhlIENMSS5cclxuICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXHJcbmNvbnN0IGJhcnJlbHM6IHN0cmluZ1tdID0gW1xyXG4gIC8vIEFwcCBzcGVjaWZpYyBiYXJyZWxzLlxyXG4gICdhcHAnLFxyXG4gICdhcHAvc2hhcmVkJyxcclxuICAnYXBwLyttYWluLytidXR0b25zJyxcclxuICAnYXBwLyttYWluLytjaGVja2JveCcsXHJcbiAgJ2FwcC8rbWFpbi8rY29tYm8nLFxyXG4gICdhcHAvK21haW4vK2NvbnRhaW5lcnMnLFxyXG4gICdhcHAvK21haW4vK2RpYWxvZ3MnLFxyXG4gICdhcHAvK21haW4vK2lucHV0cycsXHJcbiAgJ2FwcC8rbWFpbi8raG9tZScsXHJcbiAgJ2FwcC8rbWFpbi8rbGlzdHMnLFxyXG4gIC8vICdhcHAvK21haW4vK3RhYmxlcycsXHJcbiAgJ2FwcC8rbWFpbidcclxuICAvKiogQGNsaS1iYXJyZWwgKi9cclxuXTtcclxuXHJcbmNvbnN0IGNsaVN5c3RlbUNvbmZpZ1BhY2thZ2VzOiBhbnkgPSB7XHJcbn07XHJcblxyXG4vLyBhZGQgcGFja2FnZSBlbnRyaWVzIGZvciBhbmd1bGFyIHBhY2thZ2VzIGluIHRoZSBmb3JtICdAYW5ndWxhci9jb21tb24nOiB7IG1haW46ICdpbmRleC5qcycsIGRlZmF1bHRFeHRlbnNpb246ICdqcycgfVxyXG5iYXJyZWxzLmZvckVhY2goKGJhcnJlbE5hbWU6IHN0cmluZykgPT4ge1xyXG4gIGNsaVN5c3RlbUNvbmZpZ1BhY2thZ2VzW2JhcnJlbE5hbWVdID0geyBtYWluOiAnaW5kZXgnLCBkZWZhdWx0RXh0ZW5zaW9uOiAnanMnIH07XHJcbn0pO1xyXG5cclxuXHJcbmNsaVN5c3RlbUNvbmZpZ1BhY2thZ2VzWydyeGpzJ10gPSB7IGRlZmF1bHRFeHRlbnNpb246ICdqcycgfTtcclxuY2xpU3lzdGVtQ29uZmlnUGFja2FnZXNbJ21vbWVudCddID0geyBtYWluOiAnbW9tZW50JyB9O1xyXG5jbGlTeXN0ZW1Db25maWdQYWNrYWdlc1snanF1ZXJ5J10gPSB7IG1haW46ICdkaXN0L2pxdWVyeS5taW4nIH07XHJcbmNsaVN5c3RlbUNvbmZpZ1BhY2thZ2VzWydqcXVlcnktdWknXSA9IHsgbWFpbjogJ3VpL3dpZGdldHMvZGF0ZXBpY2tlcicgfTtcclxuY2xpU3lzdGVtQ29uZmlnUGFja2FnZXNbJ2RhdGF0YWJsZXMubmV0J10gPSB7IG1haW46ICdqcy9qcXVlcnkuZGF0YVRhYmxlcycgfTtcclxuY2xpU3lzdGVtQ29uZmlnUGFja2FnZXNbJ2RhdGF0YWJsZXMubmV0LWJ1dHRvbnMnXSA9IHsgbWFpbjogJ2pzL2RhdGFUYWJsZXMuYnV0dG9ucycgfTtcclxuY2xpU3lzdGVtQ29uZmlnUGFja2FnZXNbJ2RhdGF0YWJsZXMubmV0LWNvbHJlb3JkZXInXSA9IHsgbWFpbjogJ2pzL2RhdGFUYWJsZXMuY29sUmVvcmRlcicgfTtcclxuY2xpU3lzdGVtQ29uZmlnUGFja2FnZXNbJ2RhdGF0YWJsZXMubmV0LXNlbGVjdCddID0geyBtYWluOiAnanMvZGF0YVRhYmxlcy5zZWxlY3QnIH07XHJcbmNsaVN5c3RlbUNvbmZpZ1BhY2thZ2VzWydjb2xyZXNpemFibGUnXSA9IHsgbWFpbjogJ2NvbFJlc2l6YWJsZS0xLjYubWluJyB9O1xyXG5jbGlTeXN0ZW1Db25maWdQYWNrYWdlc1sncGRmbWFrZSddID0geyBtYWluOiAnYnVpbGQvcGRmbWFrZS5taW4nIH07XHJcbmNsaVN5c3RlbUNvbmZpZ1BhY2thZ2VzWyduZzItdHJhbnNsYXRlJ10gPSB7bWFpbjogJ2J1bmRsZXMvbmcyLXRyYW5zbGF0ZS51bWQuanMnLCBkZWZhdWx0RXh0ZW5zaW9uOiAnanMnfTtcclxuY2xpU3lzdGVtQ29uZmlnUGFja2FnZXNbJ29udGltaXplLXdlYi1uZzInXSA9IHsgbWFpbjogJ29udGltaXplJyB9O1xyXG5jbGlTeXN0ZW1Db25maWdQYWNrYWdlc1snYW5ndWxhcjItaGlnaGxpZ2h0LWpzJ10gPSB7IG1haW46ICdoaWdobGlnaHQtanMubW9kdWxlJywgZGVmYXVsdEV4dGVuc2lvbjogJ2pzJyB9O1xyXG5cclxuLyoqIFR5cGUgZGVjbGFyYXRpb24gZm9yIGFtYmllbnQgU3lzdGVtLiAqL1xyXG5kZWNsYXJlIHZhciBTeXN0ZW06IGFueTtcclxuXHJcbi8vIEFwcGx5IHRoZSBDTEkgU3lzdGVtSlMgY29uZmlndXJhdGlvbi5cclxuU3lzdGVtLmNvbmZpZyh7XHJcbiAgbWFwOiB7XHJcbiAgICAncnhqcyc6ICd2ZW5kb3IvcnhqcycsXHJcbiAgICAnbW9tZW50JzogJ3ZlbmRvci9tb21lbnQnLFxyXG4gICAgJ2pxdWVyeSc6ICd2ZW5kb3IvanF1ZXJ5JyxcclxuICAgICdqcXVlcnktdWknOiAndmVuZG9yL2pxdWVyeS11aScsXHJcbiAgICAnZGF0YXRhYmxlcy5uZXQnOiAndmVuZG9yL2RhdGF0YWJsZXMubmV0JyxcclxuICAgICdkYXRhdGFibGVzLm5ldC1idXR0b25zJzogJ3ZlbmRvci9kYXRhdGFibGVzLm5ldC1idXR0b25zJyxcclxuICAgICdkYXRhdGFibGVzLm5ldC1jb2xyZW9yZGVyJzogJ3ZlbmRvci9kYXRhdGFibGVzLm5ldC1jb2xyZW9yZGVyJyxcclxuICAgICdkYXRhdGFibGVzLm5ldC1zZWxlY3QnOiAndmVuZG9yL2RhdGF0YWJsZXMubmV0LXNlbGVjdCcsXHJcbiAgICAnY29scmVzaXphYmxlJzogJ3ZlbmRvci9jb2xyZXNpemFibGUnLFxyXG4gICAgJ3BkZm1ha2UnOiAndmVuZG9yL3BkZm1ha2UnLFxyXG4gICAgJ25nMi10cmFuc2xhdGUnOiAndmVuZG9yL25nMi10cmFuc2xhdGUnLFxyXG4gICAgJ29udGltaXplLXdlYi1uZzInOiAndmVuZG9yL29udGltaXplLXdlYi1uZzInLFxyXG4gICAgJ2FuZ3VsYXIyLWhpZ2hsaWdodC1qcyc6ICd2ZW5kb3IvYW5ndWxhcjItaGlnaGxpZ2h0LWpzL2xpYidcclxuICB9LFxyXG4gIHBhY2thZ2VzOiBjbGlTeXN0ZW1Db25maWdQYWNrYWdlc1xyXG59KTtcclxuXHJcbi8vIEFwcGx5IHRoZSB1c2VyJ3MgY29uZmlndXJhdGlvbi5cclxuU3lzdGVtLmNvbmZpZyh7IG1hcCwgcGFja2FnZXMgfSk7XHJcbiJdfQ==