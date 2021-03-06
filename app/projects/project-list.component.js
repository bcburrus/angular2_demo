"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var project_service_1 = require("./project.service");
var ProjectListComponent = (function () {
    function ProjectListComponent(_projectService) {
        this._projectService = _projectService;
        this.pageTitle = 'Projects';
        this.showComplete = false;
        this.listFilter = '';
        this.orderBy = 'project_name';
        this.orderDesc = false;
    }
    ProjectListComponent.prototype.toggleComplete = function () {
        this.showComplete = !this.showComplete;
    };
    ProjectListComponent.prototype.onOrderBy = function (field) {
        console.log(this.orderBy + " " + this.orderDesc);
        if (this.orderBy === field) {
            this.orderBy = field;
            this.orderDesc = !this.orderDesc;
            return;
        }
        this.orderBy = field;
        this.orderDesc = false;
    };
    ProjectListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._projectService.getProjects()
            .subscribe(function (projects) { return _this.projects = projects; }, function (error) { return _this.errorMessage = error; });
    };
    return ProjectListComponent;
}());
ProjectListComponent = __decorate([
    core_1.Component({
        selector: 'pm-projects',
        templateUrl: 'app/projects/project-list.component.html',
        styleUrls: ['app/projects/project-list.component.css'],
        providers: [project_service_1.ProjectService]
    }),
    __metadata("design:paramtypes", [project_service_1.ProjectService])
], ProjectListComponent);
exports.ProjectListComponent = ProjectListComponent;
//# sourceMappingURL=project-list.component.js.map