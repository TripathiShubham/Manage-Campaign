angular.module('campaignApp')

//========================================================
//All Categories Service
//========================================================

.factory('Service', ['$q', '$timeout',
	($q, $timeout) => {

	var Service = {};

	/**
	 * To get data
	 */
	Service.getUpcomingCampain = () => {
		var deferred = $q.defer();

        $timeout(() => {
            let data = [
                {
                    campaign: "Media Works",
                    date: "05/02/2020",
                    location: "US",
                    price: "100$"
                },
                {
                    campaign: "Campaing Asia",
                    date: "08/04/2019",
                    location: "US",
                    price: "300$"
                },
                {
                    campaign: "Promo: Campaign",
                    date: "09/02/2020",
                    location: "US",
                    price: "100$"
                },
                {
                    campaign: "Mid Night",
                    date: "06/02/2022",
                    location: "US",
                    price: "50$"
                }
            ]
            deferred.resolve(data);
        }, 1500)

		return deferred.promise;
	}

	Service.getLiveCampain = () => {
		var deferred = $q.defer();

        $timeout(() => {
            let data = [
                {
                    campaign: "Media360",
                    date: "05/02/2020",
                    location: "US",
                    price: "100$"
                },
                {
                    campaign: "Campaign For food",
                    date: "05/02/2021",
                    location: "US",
                    price: "400$"
                },
                {
                    campaign: "Digital Transformation",
                    date: "05/20/2021",
                    location: "US",
                    price: "80$"
                },
                {
                    campaign: "New Era",
                    date: "12/12/2019",
                    location: "US",
                    price: "100$"
                }
            ]
            deferred.resolve(data);
        }, 1500)

		return deferred.promise;
	}

    Service.getPastCampain = () => {
		var deferred = $q.defer();

        $timeout(() => {
            let data = [
                {
                    campaign: "Run for Life",
                    date: "05/02/2018",
                    location: "US",
                    price: "100$"
                },
                {
                    campaign: "Save our Earth",
                    date: "05/02/2021",
                    location: "US",
                    price: "50$"
                },
                {
                    campaign: "Education for All",
                    date: "05/02/2022",
                    location: "US",
                    price: "150$"
                },
                {
                    campaign: "Sharing is caring",
                    date: "05/02/2020",
                    location: "US",
                    price: "200$"
                }
            ]
            deferred.resolve(data);
        }, 1500)

		return deferred.promise;
	}


    return Service;
}
]);
