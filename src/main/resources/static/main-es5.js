(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar color=\"primary\">\n  <span>User Data</span>\n  <span class=\"spacer\"></span>\n  Reload data:\n  <button mat-icon-button (click)=\"refresh()\">\n    <mat-icon>refresh</mat-icon>\n  </button>\n</mat-toolbar>\n\n<div class=\"container mat-elevation-z8\">\n\n  <div class=\"form\">\n    <mat-form-field floatPlaceholder=\"never\" color=\"accent\">\n      <input matInput #filter placeholder=\"Filter users\">\n    </mat-form-field>\n  </div>\n\n  <mat-table #table [dataSource]=\"dataSource\" matSort class=\"mat-cell\">\n    ng update @angular/cli @angular/core\n    <!--- Note that these columns can be defined in any order.\n          The actual rendered columns are set as a property on the row definition\" -->\n\n    <!-- ID Column -->\n    <ng-container matColumnDef=\"id\">\n      <mat-header-cell *matHeaderCellDef mat-sort-header>Id</mat-header-cell>\n      <mat-cell *matCellDef=\"let row\" >{{row.id}}</mat-cell>\n    </ng-container>\n\n    <ng-container matColumnDef=\"name\">\n      <mat-header-cell *matHeaderCellDef mat-sort-header>Name</mat-header-cell>\n      <mat-cell *matCellDef=\"let row\"> {{row.name}}</mat-cell>\n    </ng-container>\n\n    <ng-container matColumnDef=\"email\">\n      <mat-header-cell *matHeaderCellDef mat-sort-header>Email</mat-header-cell>\n      <mat-cell *matCellDef=\"let row\"> {{row.email}}</mat-cell>\n    </ng-container>\n\n    <ng-container matColumnDef=\"phone\">\n      <mat-header-cell *matHeaderCellDef mat-sort-header>Phone</mat-header-cell>\n      <mat-cell *matCellDef=\"let row\"> {{row.phone}}</mat-cell>\n    </ng-container>\n\n    <ng-container matColumnDef=\"address\">\n      <mat-header-cell *matHeaderCellDef mat-sort-header>Address</mat-header-cell>\n      <mat-cell *matCellDef=\"let row\"> {{row.address}}</mat-cell>\n    </ng-container>\n\n    <ng-container matColumnDef=\"city\">\n      <mat-header-cell *matHeaderCellDef mat-sort-header>City</mat-header-cell>\n      <mat-cell *matCellDef=\"let row\"> {{row.city}}</mat-cell>\n    </ng-container>\n\n    <!-- actions -->\n    <ng-container matColumnDef=\"actions\">\n      <mat-header-cell *matHeaderCellDef>\n        <button mat-icon-button color=\"primary\" (click)=\"addNew()\">\n          <mat-icon aria-label=\"Example icon-button with a heart icon\">add</mat-icon>\n        </button>\n      </mat-header-cell>\n\n      <mat-cell *matCellDef=\"let row; let i=index;\">\n        <button mat-icon-button color=\"accent\" (click)=\"startEdit(i, row.id, row.name, row.email, row.phone, row.address, row.city)\">\n          <mat-icon aria-label=\"Edit\">edit</mat-icon>\n        </button>\n\n        <button mat-icon-button color=\"accent\" (click)=\"deleteItem(i, row.id, row.name, row.email, row.phone)\">\n          <mat-icon aria-label=\"Delete\">delete</mat-icon>\n        </button>\n      </mat-cell>\n    </ng-container>\n\n    <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n    <mat-row *matRowDef=\"let row; columns: displayedColumns;\"></mat-row>\n  </mat-table>\n\n\n  <div class=\"no-results\" [style.display]=\"dataSource.renderedData.length == 0 ? '' : 'none'\">\n    No results\n  </div>\n\n  <mat-paginator #paginators\n    [length]=\"dataSource.filteredData.length\"\n    [pageIndex]=\"0\"\n    [pageSize]=\"10\"\n    [pageSizeOptions]=\"[5, 10, 25, 100]\">\n  </mat-paginator>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/dialogs/add/add.dialog.html":
/*!***********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/dialogs/add/add.dialog.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <h3 mat-dialog-title>Add new User</h3>\n\n  <form class=\"mat-dialog-content\" (ngSubmit)=\"submit\" #formControl=\"ngForm\">\n\n    <!--Textarea for demo purposes-->\n    <div class=\"form\">\n      <mat-form-field color=\"accent\">\n        <textarea matInput #input class=\"form-control\" placeholder=\"Name\" [(ngModel)]=\"data.name\" name=\"name\" required ></textarea>\n        <mat-error *ngIf=\"formControl.invalid\">{{getErrorMessage()}}</mat-error>\n      </mat-form-field>\n    </div>\n\n    <!--Contains mat-hint for characters count and has maxLengt set-->\n    <div class=\"form\">\n      <mat-form-field color=\"accent\">\n        <input matInput class=\"form-control\" placeholder=\"Email\" [(ngModel)]=\"data.email\" name=\"email\" required >\n        <mat-error *ngIf=\"formControl.invalid\">{{getErrorMessage()}}</mat-error>\n      </mat-form-field>\n    </div>\n\n    <div class=\"form\">\n      <mat-form-field color=\"accent\">\n        <input matInput #inputphone placeholder=\"Phone\" [(ngModel)]=\"data.phone\" name=\"phone\" required>\n        <mat-error *ngIf=\"formControl.invalid\">{{getErrorMessage()}}</mat-error>\n        <mat-hint align=\"end\">{{inputphone.value?.length || 0}}/10</mat-hint>\n      </mat-form-field>\n    </div>\n\n    <div class=\"form\">\n      <mat-form-field color=\"accent\">\n        <input matInput placeholder=\"Address\" [(ngModel)]=\"data.address\" name=\"address\">\n      </mat-form-field>\n    </div>\n\n    <div class=\"form\">\n      <mat-form-field color=\"accent\">\n        <input matInput placeholder=\"City\" [(ngModel)]=\"data.city\" name=\"city\">\n      </mat-form-field>\n    </div>\n\n    <div mat-dialog-actions>\n      <button mat-button [type]=\"submit\" [disabled]=\"!formControl.valid\" [mat-dialog-close]=\"1\" (click)=\"confirmAdd()\">Save</button>\n      <button mat-button (click)=\"onNoClick()\" tabindex=\"-1\">Cancel</button>\n    </div>\n  </form>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/dialogs/delete/delete.dialog.html":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/dialogs/delete/delete.dialog.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <h3 mat-dialog-title>Are you sure?</h3>\n  <div mat-dialog-content>\n    Id: {{data.id}}\n    <p></p>\n    Name: {{data.name}}\n    <p></p>\n    Email: {{data.email}}\n    <p></p>\n    Phone: {{data.phone}}\n    <p></p>\n  </div>\n\n  <div mat-dialog-actions>\n    <button mat-button [mat-dialog-close]=\"1\" (click)=\"confirmDelete()\">Delete</button>\n    <button mat-button (click)=\"onNoClick()\" tabindex=\"-1\">Cancel</button>\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/dialogs/edit/edit.dialog.html":
/*!*************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/dialogs/edit/edit.dialog.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <h3 mat-dialog-title>User ID: {{data.id}}</h3>\n\n  <form class=\"mat-dialog-content\" (ngSubmit)=\"submit\" #formControl=\"ngForm\">\n\n    <div class=\"form\">\n      <mat-form-field color=\"accent\">\n        <input matInput #input class=\"form-control\" placeholder=\"Id\" [(ngModel)]=\"data.id\" name=\"id\" required disabled>\n        <input matInput #input class=\"form-control\" placeholder=\"Id\" [(ngModel)]=\"data.id\" name=\"id\" required hidden>\n      </mat-form-field>\n    </div>\n\n    <!--Textarea for demo purposes-->\n    <div class=\"form\">\n      <mat-form-field color=\"accent\">\n        <textarea matInput #input class=\"form-control\" placeholder=\"Name\" [(ngModel)]=\"data.name\" name=\"name\" required ></textarea>\n        <mat-error *ngIf=\"formControl.invalid\">{{getErrorMessage()}}</mat-error>\n      </mat-form-field>\n    </div>\n\n    <!--Contains mat-hint for characters count and has maxLengt set-->\n    <div class=\"form\">\n      <mat-form-field color=\"accent\">\n        <input matInput class=\"form-control\" placeholder=\"Email\" [(ngModel)]=\"data.email\" name=\"email\" required >\n        <mat-error *ngIf=\"formControl.invalid\">{{getErrorMessage()}}</mat-error>\n      </mat-form-field>\n    </div>\n\n    <div class=\"form\">\n        <mat-form-field color=\"accent\">\n          <input matInput #inputphone placeholder=\"Phone\" [(ngModel)]=\"data.phone\" name=\"phone\" maxlength=\"10\" required> \n          <mat-error *ngIf=\"formControl.invalid\">{{getErrorMessage()}}</mat-error>\n          <mat-hint align=\"end\">{{inputphone.value?.length || 0}}/10</mat-hint>  \n        </mat-form-field>\n    </div>\n\n    <div class=\"form\">\n      <mat-form-field color=\"accent\">\n        <input matInput placeholder=\"Address\" [(ngModel)]=\"data.address\" name=\"address\">\n      </mat-form-field>\n    </div>\n\n    <div class=\"form\">\n      <mat-form-field color=\"accent\">\n        <input matInput placeholder=\"City\" [(ngModel)]=\"data.city\" name=\"city\">\n      </mat-form-field>\n    </div>\n\n    <div mat-dialog-actions>\n      <button mat-button [type]=\"submit\" [disabled]=\"!formControl.valid\" [mat-dialog-close]=\"1\" (click)=\"stopEdit()\">Save</button>\n      <button mat-button (click)=\"onNoClick()\" tabindex=\"-1\">Cancel</button>\n    </div>\n  </form>\n</div>\n"

/***/ }),

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* Structure */\n.container {\n  display: flex;\n  flex-direction: column;\n}\n/* Toolbar */\n.spacer {\n  flex: 1 1 auto;\n}\n/* Filter */\n.form {\n  min-height: 56px;\n  max-height: 56px;\n  display: flex;\n  align-items: center;\n  padding: 8px 24px 0;\n  font-size: 20px;\n  justify-content: space-between;\n  border-bottom: 1px solid transparent;\n}\n.mat-form-field {\n  font-size: 14px;\n  flex-grow: 1;\n  margin-top: 8px;\n}\n/* Mat table */\n.no-results {\n  display: flex;\n  justify-content: center;\n  padding: 14px;\n  font-size: 14px;\n  font-style: italic;\n}\n.mat-cell:nth-child(1),\n.mat-header-cell:nth-child(1){\n  flex: 0 0 6%;\n}\n.mat-cell:nth-child(2),\n.mat-header-cell:nth-child(2){\n  flex: 0 0 16%;\n}\n.mat-cell:nth-child(3),\n.mat-header-cell:nth-child(3){\n  flex: 0 0 20%;\n}\n.mat-cell:nth-child(7),\n.mat-header-cell:nth-child(7){\n  flex: 0 0 7%;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsY0FBYztBQUNkO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtBQUN4QjtBQUVBLFlBQVk7QUFDWjtFQUNFLGNBQWM7QUFDaEI7QUFFQSxXQUFXO0FBQ1g7RUFDRSxnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsbUJBQW1CO0VBQ25CLGVBQWU7RUFDZiw4QkFBOEI7RUFDOUIsb0NBQW9DO0FBQ3RDO0FBRUE7RUFDRSxlQUFlO0VBQ2YsWUFBWTtFQUNaLGVBQWU7QUFDakI7QUFFQSxjQUFjO0FBQ2Q7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLGFBQWE7RUFDYixlQUFlO0VBQ2Ysa0JBQWtCO0FBQ3BCO0FBRUE7O0VBRUUsWUFBWTtBQUNkO0FBRUE7O0VBRUUsYUFBYTtBQUNmO0FBRUE7O0VBRUUsYUFBYTtBQUNmO0FBRUE7O0VBRUUsWUFBWTtBQUNkIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBTdHJ1Y3R1cmUgKi9cbi5jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG4vKiBUb29sYmFyICovXG4uc3BhY2VyIHtcbiAgZmxleDogMSAxIGF1dG87XG59XG5cbi8qIEZpbHRlciAqL1xuLmZvcm0ge1xuICBtaW4taGVpZ2h0OiA1NnB4O1xuICBtYXgtaGVpZ2h0OiA1NnB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nOiA4cHggMjRweCAwO1xuICBmb250LXNpemU6IDIwcHg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xufVxuXG4ubWF0LWZvcm0tZmllbGQge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZsZXgtZ3JvdzogMTtcbiAgbWFyZ2luLXRvcDogOHB4O1xufVxuXG4vKiBNYXQgdGFibGUgKi9cbi5uby1yZXN1bHRzIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHBhZGRpbmc6IDE0cHg7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC1zdHlsZTogaXRhbGljO1xufVxuXG4ubWF0LWNlbGw6bnRoLWNoaWxkKDEpLFxuLm1hdC1oZWFkZXItY2VsbDpudGgtY2hpbGQoMSl7XG4gIGZsZXg6IDAgMCA2JTtcbn1cblxuLm1hdC1jZWxsOm50aC1jaGlsZCgyKSxcbi5tYXQtaGVhZGVyLWNlbGw6bnRoLWNoaWxkKDIpe1xuICBmbGV4OiAwIDAgMTYlO1xufVxuXG4ubWF0LWNlbGw6bnRoLWNoaWxkKDMpLFxuLm1hdC1oZWFkZXItY2VsbDpudGgtY2hpbGQoMyl7XG4gIGZsZXg6IDAgMCAyMCU7XG59XG5cbi5tYXQtY2VsbDpudGgtY2hpbGQoNyksXG4ubWF0LWhlYWRlci1jZWxsOm50aC1jaGlsZCg3KXtcbiAgZmxleDogMCAwIDclO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent, ExampleDataSource */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExampleDataSource", function() { return ExampleDataSource; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/data.service */ "./src/app/services/data.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/esm5/paginator.es5.js");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/sort */ "./node_modules/@angular/material/esm5/sort.es5.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/esm5/snack-bar.es5.js");
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/cdk/collections */ "./node_modules/@angular/cdk/esm5/collections.es5.js");
/* harmony import */ var _dialogs_add_add_dialog_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./dialogs/add/add.dialog.component */ "./src/app/dialogs/add/add.dialog.component.ts");
/* harmony import */ var _dialogs_edit_edit_dialog_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./dialogs/edit/edit.dialog.component */ "./src/app/dialogs/edit/edit.dialog.component.ts");
/* harmony import */ var _dialogs_delete_delete_dialog_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./dialogs/delete/delete.dialog.component */ "./src/app/dialogs/delete/delete.dialog.component.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");














var AppComponent = /** @class */ (function () {
    function AppComponent(httpClient, dialog, dataService, snackBar) {
        this.httpClient = httpClient;
        this.dialog = dialog;
        this.dataService = dataService;
        this.snackBar = snackBar;
        this.displayedColumns = ['id', 'name', 'email', 'phone', 'address', 'city', 'actions'];
    }
    AppComponent.prototype.ngOnInit = function () {
        this.loadData();
    };
    AppComponent.prototype.refresh = function () {
        this.loadData();
    };
    AppComponent.prototype.addNew = function (user) {
        var _this = this;
        var dialogRef = this.dialog.open(_dialogs_add_add_dialog_component__WEBPACK_IMPORTED_MODULE_9__["AddDialogComponent"], {
            data: { user: user }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            if (result === 1) {
                // After dialog is closed we're doing frontend updates
                // For add we're just pushing a new row inside DataService
                _this.exampleDatabase.dataChange.value.push(_this.dataService.getDialogData());
                _this.refreshTable();
            }
        });
    };
    AppComponent.prototype.startEdit = function (i, id, name, email, phone, address, city) {
        var _this = this;
        this.id = id;
        // index row is used just for debugging proposes and can be removed
        this.index = i;
        console.log(this.index);
        var dialogRef = this.dialog.open(_dialogs_edit_edit_dialog_component__WEBPACK_IMPORTED_MODULE_10__["EditDialogComponent"], {
            data: { id: id, name: name, email: email, phone: phone, address: address, city: city }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            if (result === 1) {
                // When using an edit things are little different, firstly we find record inside DataService by id
                var foundIndex = _this.exampleDatabase.dataChange.value.findIndex(function (x) { return x.id === _this.id; });
                // Then you update that record using data from dialogData (values you enetered)
                _this.exampleDatabase.dataChange.value[foundIndex] = _this.dataService.getDialogData();
                // And lastly refresh table
                _this.refreshTable();
            }
        });
    };
    AppComponent.prototype.deleteItem = function (i, id, name, email, phone) {
        var _this = this;
        this.index = i;
        this.id = id;
        var dialogRef = this.dialog.open(_dialogs_delete_delete_dialog_component__WEBPACK_IMPORTED_MODULE_11__["DeleteDialogComponent"], {
            data: { id: id, name: name, email: email, phone: phone }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            if (result === 1) {
                var foundIndex = _this.exampleDatabase.dataChange.value.findIndex(function (x) { return x.id === _this.id; });
                // for delete we use splice in order to remove single object from DataService
                _this.exampleDatabase.dataChange.value.splice(foundIndex, 1);
                _this.refreshTable();
            }
        });
    };
    AppComponent.prototype.refreshTable = function () {
        // Refreshing table using paginator
        // Thanks yeager-j for tips
        // https://github.com/marinantonio/angular-mat-table-crud/issues/12
        this.paginator._changePageSize(this.paginator.pageSize);
    };
    /*   // If you don't need a filter or a pagination this can be simplified, you just use code from else block
      // OLD METHOD:
      // if there's a paginator active we're using it for refresh
      if (this.dataSource._paginator.hasNextPage()) {
        this.dataSource._paginator.nextPage();
        this.dataSource._paginator.previousPage();
        // in case we're on last page this if will tick
      } else if (this.dataSource._paginator.hasPreviousPage()) {
        this.dataSource._paginator.previousPage();
        this.dataSource._paginator.nextPage();
        // in all other cases including active filter we do it like this
      } else {
        this.dataSource.filter = '';
        this.dataSource.filter = this.filter.nativeElement.value;
      }*/
    AppComponent.prototype.loadData = function () {
        var _this = this;
        this.exampleDatabase = new _services_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"](this.httpClient, this.snackBar);
        this.dataSource = new ExampleDataSource(this.exampleDatabase, this.paginator, this.sort);
        Object(rxjs__WEBPACK_IMPORTED_MODULE_12__["fromEvent"])(this.filter.nativeElement, 'keyup')
            // .debounceTime(150)
            // .distinctUntilChanged()
            .subscribe(function () {
            if (!_this.dataSource) {
                return;
            }
            _this.dataSource.filter = _this.filter.nativeElement.value;
        });
    };
    AppComponent.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
        { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"] },
        { type: _services_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"] },
        { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__["MatSnackBar"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material_paginator__WEBPACK_IMPORTED_MODULE_5__["MatPaginator"], { static: true }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material_paginator__WEBPACK_IMPORTED_MODULE_5__["MatPaginator"])
    ], AppComponent.prototype, "paginator", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material_sort__WEBPACK_IMPORTED_MODULE_6__["MatSort"], { static: true }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material_sort__WEBPACK_IMPORTED_MODULE_6__["MatSort"])
    ], AppComponent.prototype, "sort", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('filter', { static: true }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], AppComponent.prototype, "filter", void 0);
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"],
            _services_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"],
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__["MatSnackBar"]])
    ], AppComponent);
    return AppComponent;
}());

var ExampleDataSource = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](ExampleDataSource, _super);
    function ExampleDataSource(_exampleDatabase, _paginator, _sort) {
        var _this = _super.call(this) || this;
        _this._exampleDatabase = _exampleDatabase;
        _this._paginator = _paginator;
        _this._sort = _sort;
        _this._filterChange = new rxjs__WEBPACK_IMPORTED_MODULE_12__["BehaviorSubject"]('');
        _this.filteredData = [];
        _this.renderedData = [];
        // Reset to the first page when the user changes the filter.
        _this._filterChange.subscribe(function () { return _this._paginator.pageIndex = 0; });
        return _this;
    }
    Object.defineProperty(ExampleDataSource.prototype, "filter", {
        get: function () {
            return this._filterChange.value;
        },
        set: function (filter) {
            this._filterChange.next(filter);
        },
        enumerable: true,
        configurable: true
    });
    /** Connect function called by the table to retrieve one stream containing the data to render. */
    ExampleDataSource.prototype.connect = function () {
        var _this = this;
        // Listen for any changes in the base data, sorting, filtering, or pagination
        var displayDataChanges = [
            this._exampleDatabase.dataChange,
            this._sort.sortChange,
            this._filterChange,
            this._paginator.page
        ];
        this._exampleDatabase.getAllUsers();
        return rxjs__WEBPACK_IMPORTED_MODULE_12__["merge"].apply(void 0, tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"](displayDataChanges)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["map"])(function () {
            // Filter data
            _this.filteredData = _this._exampleDatabase.data.slice().filter(function (user) {
                var searchStr = (user.id + user.name + user.email + user.phone).toLowerCase();
                return searchStr.indexOf(_this.filter.toLowerCase()) !== -1;
            });
            // Sort filtered data
            var sortedData = _this.sortData(_this.filteredData.slice());
            // Grab the page's slice of the filtered sorted data.
            var startIndex = _this._paginator.pageIndex * _this._paginator.pageSize;
            _this.renderedData = sortedData.splice(startIndex, _this._paginator.pageSize);
            return _this.renderedData;
        }));
    };
    ExampleDataSource.prototype.disconnect = function () { };
    /** Returns a sorted copy of the database data. */
    ExampleDataSource.prototype.sortData = function (data) {
        var _this = this;
        if (!this._sort.active || this._sort.direction === '') {
            return data;
        }
        return data.sort(function (a, b) {
            var _a, _b, _c, _d, _e, _f;
            var propertyA = '';
            var propertyB = '';
            switch (_this._sort.active) {
                case 'id':
                    _a = tslib__WEBPACK_IMPORTED_MODULE_0__["__read"]([a.id, b.id], 2), propertyA = _a[0], propertyB = _a[1];
                    break;
                case 'name':
                    _b = tslib__WEBPACK_IMPORTED_MODULE_0__["__read"]([a.name, b.name], 2), propertyA = _b[0], propertyB = _b[1];
                    break;
                case 'email':
                    _c = tslib__WEBPACK_IMPORTED_MODULE_0__["__read"]([a.email, b.email], 2), propertyA = _c[0], propertyB = _c[1];
                    break;
                case 'city':
                    _d = tslib__WEBPACK_IMPORTED_MODULE_0__["__read"]([a.city, b.city], 2), propertyA = _d[0], propertyB = _d[1];
                    break;
                case 'address':
                    _e = tslib__WEBPACK_IMPORTED_MODULE_0__["__read"]([a.address, b.address], 2), propertyA = _e[0], propertyB = _e[1];
                    break;
                case 'phone':
                    _f = tslib__WEBPACK_IMPORTED_MODULE_0__["__read"]([a.phone, b.phone], 2), propertyA = _f[0], propertyB = _f[1];
                    break;
            }
            var valueA = isNaN(+propertyA) ? propertyA : +propertyA;
            var valueB = isNaN(+propertyB) ? propertyB : +propertyB;
            return (valueA < valueB ? -1 : 1) * (_this._sort.direction === 'asc' ? 1 : -1);
        });
    };
    ExampleDataSource.ctorParameters = function () { return [
        { type: _services_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"] },
        { type: _angular_material_paginator__WEBPACK_IMPORTED_MODULE_5__["MatPaginator"] },
        { type: _angular_material_sort__WEBPACK_IMPORTED_MODULE_6__["MatSort"] }
    ]; };
    return ExampleDataSource;
}(_angular_cdk_collections__WEBPACK_IMPORTED_MODULE_8__["DataSource"]));



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm5/button.es5.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm5/icon.es5.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm5/input.es5.js");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/esm5/paginator.es5.js");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/sort */ "./node_modules/@angular/material/esm5/sort.es5.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm5/table.es5.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/esm5/toolbar.es5.js");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./services/data.service */ "./src/app/services/data.service.ts");
/* harmony import */ var _dialogs_add_add_dialog_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./dialogs/add/add.dialog.component */ "./src/app/dialogs/add/add.dialog.component.ts");
/* harmony import */ var _dialogs_edit_edit_dialog_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./dialogs/edit/edit.dialog.component */ "./src/app/dialogs/edit/edit.dialog.component.ts");
/* harmony import */ var _dialogs_delete_delete_dialog_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./dialogs/delete/delete.dialog.component */ "./src/app/dialogs/delete/delete.dialog.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");




















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _dialogs_add_add_dialog_component__WEBPACK_IMPORTED_MODULE_15__["AddDialogComponent"],
                _dialogs_edit_edit_dialog_component__WEBPACK_IMPORTED_MODULE_16__["EditDialogComponent"],
                _dialogs_delete_delete_dialog_component__WEBPACK_IMPORTED_MODULE_17__["DeleteDialogComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_18__["BrowserAnimationsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialogModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_19__["FormsModule"],
                _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"],
                _angular_material_input__WEBPACK_IMPORTED_MODULE_8__["MatInputModule"],
                _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIconModule"],
                _angular_material_sort__WEBPACK_IMPORTED_MODULE_10__["MatSortModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatSnackBarModule"],
                _angular_material_table__WEBPACK_IMPORTED_MODULE_12__["MatTableModule"],
                _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_13__["MatToolbarModule"],
                _angular_material_paginator__WEBPACK_IMPORTED_MODULE_9__["MatPaginatorModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_19__["ReactiveFormsModule"]
            ],
            entryComponents: [
                _dialogs_add_add_dialog_component__WEBPACK_IMPORTED_MODULE_15__["AddDialogComponent"],
                _dialogs_edit_edit_dialog_component__WEBPACK_IMPORTED_MODULE_16__["EditDialogComponent"],
                _dialogs_delete_delete_dialog_component__WEBPACK_IMPORTED_MODULE_17__["DeleteDialogComponent"]
            ],
            providers: [
                _services_data_service__WEBPACK_IMPORTED_MODULE_14__["DataService"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/dialogs/add/add.dialog.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/dialogs/add/add.dialog.component.ts ***!
  \*****************************************************/
/*! exports provided: AddDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddDialogComponent", function() { return AddDialogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/data.service */ "./src/app/services/data.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _models_user__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../models/user */ "./src/app/models/user.ts");






var AddDialogComponent = /** @class */ (function () {
    function AddDialogComponent(dialogRef, data, dataService) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.dataService = dataService;
        this.formControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', [
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required
            // Validators.email,
        ]);
    }
    AddDialogComponent.prototype.getErrorMessage = function () {
        return this.formControl.hasError('required') ? 'Required field' :
            this.formControl.hasError('email') ? 'Not a valid email' :
                '';
    };
    AddDialogComponent.prototype.submit = function () {
        // emppty stuff
    };
    AddDialogComponent.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    AddDialogComponent.prototype.confirmAdd = function () {
        this.dataService.addUser(this.data);
    };
    AddDialogComponent.ctorParameters = function () { return [
        { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"] },
        { type: _models_user__WEBPACK_IMPORTED_MODULE_5__["User"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"], args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"],] }] },
        { type: _services_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"] }
    ]; };
    AddDialogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-add.dialog',
            template: __webpack_require__(/*! raw-loader!../../dialogs/add/add.dialog.html */ "./node_modules/raw-loader/index.js!./src/app/dialogs/add/add.dialog.html"),
            styles: [__webpack_require__(/*! ../../dialogs/add/add.dialog.css */ "./src/app/dialogs/add/add.dialog.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"],
            _models_user__WEBPACK_IMPORTED_MODULE_5__["User"],
            _services_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"]])
    ], AddDialogComponent);
    return AddDialogComponent;
}());



/***/ }),

/***/ "./src/app/dialogs/add/add.dialog.css":
/*!********************************************!*\
  !*** ./src/app/dialogs/add/add.dialog.css ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n  display: flex;\n  flex-direction: column;\n  min-width: 450px;\n}\n\n.container > * {\n  width: 100%;\n}\n\n.form {\n  display: flex;\n  padding-top: 6px;\n}\n\n.mat-form-field {\n  font-size: 16px;\n  flex-grow: 1;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGlhbG9ncy9hZGQvYWRkLmRpYWxvZy5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGFBQWE7RUFDYixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsWUFBWTtBQUNkIiwiZmlsZSI6InNyYy9hcHAvZGlhbG9ncy9hZGQvYWRkLmRpYWxvZy5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgbWluLXdpZHRoOiA0NTBweDtcbn1cblxuLmNvbnRhaW5lciA+ICoge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmZvcm0ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBwYWRkaW5nLXRvcDogNnB4O1xufVxuXG4ubWF0LWZvcm0tZmllbGQge1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZsZXgtZ3JvdzogMTtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/dialogs/delete/delete.dialog.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/dialogs/delete/delete.dialog.component.ts ***!
  \***********************************************************/
/*! exports provided: DeleteDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteDialogComponent", function() { return DeleteDialogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/data.service */ "./src/app/services/data.service.ts");




var DeleteDialogComponent = /** @class */ (function () {
    function DeleteDialogComponent(dialogRef, data, dataService) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.dataService = dataService;
    }
    DeleteDialogComponent.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    DeleteDialogComponent.prototype.confirmDelete = function () {
        this.dataService.deleteUser(this.data.id);
    };
    DeleteDialogComponent.ctorParameters = function () { return [
        { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"] },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"], args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"],] }] },
        { type: _services_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"] }
    ]; };
    DeleteDialogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-delete.dialog',
            template: __webpack_require__(/*! raw-loader!../../dialogs/delete/delete.dialog.html */ "./node_modules/raw-loader/index.js!./src/app/dialogs/delete/delete.dialog.html"),
            styles: [__webpack_require__(/*! ../../dialogs/delete/delete.dialog.css */ "./src/app/dialogs/delete/delete.dialog.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"], Object, _services_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"]])
    ], DeleteDialogComponent);
    return DeleteDialogComponent;
}());



/***/ }),

/***/ "./src/app/dialogs/delete/delete.dialog.css":
/*!**************************************************!*\
  !*** ./src/app/dialogs/delete/delete.dialog.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n  display: flex;\n  flex-direction: column;\n}\n\n.container > * {\n  width: 100%;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGlhbG9ncy9kZWxldGUvZGVsZXRlLmRpYWxvZy5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsV0FBVztBQUNiIiwiZmlsZSI6InNyYy9hcHAvZGlhbG9ncy9kZWxldGUvZGVsZXRlLmRpYWxvZy5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuLmNvbnRhaW5lciA+ICoge1xuICB3aWR0aDogMTAwJTtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/dialogs/edit/edit.dialog.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/dialogs/edit/edit.dialog.component.ts ***!
  \*******************************************************/
/*! exports provided: EditDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditDialogComponent", function() { return EditDialogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/data.service */ "./src/app/services/data.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _models_user__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../models/user */ "./src/app/models/user.ts");






var EditDialogComponent = /** @class */ (function () {
    function EditDialogComponent(dialogRef, data, dataService) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.dataService = dataService;
        this.formControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', [
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required
            // Validators.email,
        ]);
    }
    EditDialogComponent.prototype.getErrorMessage = function () {
        return this.formControl.hasError('required') ? 'Required field' :
            this.formControl.hasError('email') ? 'Not a valid email' :
                '';
    };
    EditDialogComponent.prototype.submit = function () {
        // emppty stuff
    };
    EditDialogComponent.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    EditDialogComponent.prototype.stopEdit = function () {
        console.log(this.data);
        this.dataService.updateUser(this.data);
    };
    EditDialogComponent.ctorParameters = function () { return [
        { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"] },
        { type: _models_user__WEBPACK_IMPORTED_MODULE_5__["User"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"], args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"],] }] },
        { type: _services_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"] }
    ]; };
    EditDialogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-baza.dialog',
            template: __webpack_require__(/*! raw-loader!../../dialogs/edit/edit.dialog.html */ "./node_modules/raw-loader/index.js!./src/app/dialogs/edit/edit.dialog.html"),
            styles: [__webpack_require__(/*! ../../dialogs/edit/edit.dialog.css */ "./src/app/dialogs/edit/edit.dialog.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"],
            _models_user__WEBPACK_IMPORTED_MODULE_5__["User"], _services_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"]])
    ], EditDialogComponent);
    return EditDialogComponent;
}());



/***/ }),

/***/ "./src/app/dialogs/edit/edit.dialog.css":
/*!**********************************************!*\
  !*** ./src/app/dialogs/edit/edit.dialog.css ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n  display: flex;\n  flex-direction: column;\n  min-width: 450px;\n}\n\n.container > * {\n  width: 100%;\n}\n\n.form {\n  display: flex;\n  padding-top: 6px;\n}\n\n.mat-form-field {\n  font-size: 16px;\n  flex-grow: 1;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGlhbG9ncy9lZGl0L2VkaXQuZGlhbG9nLmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsV0FBVztBQUNiOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixZQUFZO0FBQ2QiLCJmaWxlIjoic3JjL2FwcC9kaWFsb2dzL2VkaXQvZWRpdC5kaWFsb2cuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIG1pbi13aWR0aDogNDUwcHg7XG59XG5cbi5jb250YWluZXIgPiAqIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5mb3JtIHtcbiAgZGlzcGxheTogZmxleDtcbiAgcGFkZGluZy10b3A6IDZweDtcbn1cblxuLm1hdC1mb3JtLWZpZWxkIHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmbGV4LWdyb3c6IDE7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/models/user.ts":
/*!********************************!*\
  !*** ./src/app/models/user.ts ***!
  \********************************/
/*! exports provided: User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
var User = /** @class */ (function () {
    function User() {
    }
    return User;
}());



/***/ }),

/***/ "./src/app/services/data.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/data.service.ts ***!
  \******************************************/
/*! exports provided: DataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataService", function() { return DataService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/esm5/snack-bar.es5.js");





var DataService = /** @class */ (function () {
    function DataService(httpClient, snackBar) {
        this.httpClient = httpClient;
        this.snackBar = snackBar;
        this.API_URL = '/api/users/';
        this.dataChange = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]([]);
    }
    DataService.prototype.showToaster = function (message, duration) {
        this.snackBar.open(message, null, {
            duration: duration,
        });
    };
    Object.defineProperty(DataService.prototype, "data", {
        get: function () {
            return this.dataChange.value;
        },
        enumerable: true,
        configurable: true
    });
    DataService.prototype.getDialogData = function () {
        return this.dialogData;
    };
    /** CRUD METHODS */
    DataService.prototype.getAllUsers = function () {
        var _this = this;
        this.httpClient.get(this.API_URL).subscribe(function (data) {
            _this.dataChange.next(data);
        }, function (error) {
            console.log(error.name + ' ' + error.message);
        });
    };
    DataService.prototype.addUser = function (user) {
        var _this = this;
        this.httpClient.post(this.API_URL, user).subscribe(function (data) {
            _this.dialogData = data;
            _this.showToaster('Successfully added', 3000);
        }, function (err) {
            _this.showToaster('Error occurred. Details: ' + err.name + ' ' + err.message, 8000);
        });
    };
    DataService.prototype.updateUser = function (user) {
        var _this = this;
        this.httpClient.put(this.API_URL + user.id, user).subscribe(function (data) {
            _this.dialogData = user;
            _this.showToaster('Successfully edited', 3000);
        }, function (err) {
            _this.showToaster('Error occurred. Details: ' + err.name + ' ' + err.message, 8000);
        });
    };
    DataService.prototype.deleteUser = function (id) {
        var _this = this;
        this.httpClient.delete(this.API_URL + id).subscribe(function (data) {
            console.log(data['']);
            _this.showToaster('Successfully deleted', 3000);
        }, function (err) {
            _this.showToaster('Error occurred. Details: ' + err.name + ' ' + err.message, 8000);
        });
    };
    DataService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
        { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"] }
    ]; };
    DataService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"]])
    ], DataService);
    return DataService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\ARAjeev\Documents\TARUN\angular-mat-table-crud-master\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es5.js.map