(function () {
    "angular strict";
    angular.module("projects")
        .controller("ProjectDetailsController", ProjectDetailsController);

    ProjectDetailsController.$inject = ["projectsService", "$stateParams", "$state"];

    function ProjectDetailsController(projectsService, $stateParams, $states) {
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