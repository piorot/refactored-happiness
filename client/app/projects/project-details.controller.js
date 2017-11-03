(function () {
    "angular strict";
    angular.module("projects")
        .controller("ProjectDetailsController", ProjectDetailsController);

    ProjectDetailsController.$inject = ["projectsService", "$stateParams"];

    function ProjectDetailsController(projectsService, $stateParams) {
        var vm = this;
        activate();

        function activate() {
            projectsService.getProjectDetails($stateParams.id)
                .then(function (projectDetails) {
                    vm.project = projectDetails;
                })
        }



    }

})();