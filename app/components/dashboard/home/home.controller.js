angular.module('campaignApp')

    //=========================================================================
    // Home Controller
    //=========================================================================

    .controller('HomeController', ['Service', '$timeout', '$scope',
        function (Service, $timeout, $scope) {
            var vm = this;

            angular.element(document.querySelector('.lds-ring')).addClass('flex')

            vm.myDate = new Date();
            vm.isOpen = false;

            vm.viewCampaign = function (item) {
                angular.element(document.querySelector('.modal')).addClass('displayBlock')
                vm.currentCampaign = item;
            }

            vm.closePopup = function () {
                angular.element(document.querySelector('.modal')).removeClass('displayBlock')
            }

            vm.openDatePicker = function (index) {
                console.log(index)
                vm.currentDateSelection = index;
            }

            Service.getUpcomingCampain()
                .then((data) => {
                    data.forEach(element => {
                        element.daysDiff = calculateDiff(element.date)
                    });
                    vm.data = data;
                    angular.element(document.querySelector('.lds-ring')).removeClass('flex')
                    $timeout(function () {
                        for(let i=0; i<vm.data.length ; i++) {
                            var input = $('.date-' + i).pickadate();
                            picker = input.pickadate('picker');
                            picker.on({
                                set: function (date) {
                                    let dt = new Date(date.select);
                                    dt = (dt.getMonth() + 1) + '/' + dt.getDate() + '/' +  dt.getFullYear()
                                    let currentItem = vm.data[vm.currentDateSelection];
                                    currentItem.date = dt
                                    currentItem.daysDiff = calculateDiff(dt)
                                    $scope.$apply();
                                }
                            })
    
                        }
                    }, 1000)
                })

            function calculateDiff(date) {
                var date = new Date(date);
                var milisecondsDiff = date - new Date();
                return Math.floor(milisecondsDiff / (24 * 60 * 60 * 1000));
            }
        }
    ]);