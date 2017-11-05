(function () {
    "use strict";
    angular
        .module("projects")
        .controller('ProjectsListController', ProjectsListController);

        ProjectsListController.$inject = ["$state", "projectsService"];

    function ProjectsListController($state, projectsService) {
        var vm = this;
        vm.showProjectDetails = showProjectDetails;
        vm.list;

        activate();

        function activate(){
            projectsService.getProjectsList()
            .then(function(projectsList){
                vm.list = projectsList;
            });
        }

        function showProjectDetails(project){
            $state.go("projectsDetails", {id : project.id});
        }


    }
})();