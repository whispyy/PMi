(function(){
    'use strict';
    
    angular
    .module('fjs.home')
    .controller('HomeController', homeController);
    
    function homeController($filter) {
        var vm = this;
        
        vm.message = "home World !!";
        vm.types = [
            {
                name: 'INFO',
                style: {'color':'blue'}
            },
            {
                name: 'DANGER',
                style: {'color':'red'}
            },
            {
                name: 'SUCCES',
                style: {'color':'green'}
            }
        ];
        vm.selectedType = vm.types[0];
        
    }
    
})();