(function() {
  'use strict';
  angular
    .module('maerkApp')
    .controller('clientController', clientController)


  function clientController($log) {
    this.year = '';
    this.years = ['2016', '2015', '2014'];
    var reports = {
      'January': [{

        client: 'Dev',
        employeeCount: 10,
        revenue: 23
      }, {

        client: 'Graphic',
        employeeCount: 20,
        revenue: 23

      }, {
        client: 'Angular',
        employeeCount: 30,
        revenue: 987
      }, {

        client: 'Jquery',
        employeeCount: 23,
        revenue: 765
      }, {

        client: 'Javascript',
        employeeCount: 896,
        revenue: 78
      }, {

        client: 'HTML',
        employeeCount: 7,
        revenue: 876
      }, {

        client: 'CSS',
        employeeCount: 875,
        revenue: 98
      }, {

        client: 'DotNet',
        employeeCount: 765,
        revenue: 199
      }, {

        client: 'Hadoop',
        employeeCount: 76,
        revenue: 847
      }, {

        client: 'Java',
        employeeCount: 876,
        revenue: 56
      }],
      'February': [{

        client: 'Dev',
        employeeCount: 897,
        revenue: 85
      }, {

        client: 'Graphic',
        employeeCount: 876,
        revenue: 675

      }, {
        client: 'Angular',
        employeeCount: 98,
        revenue: 756
      }, {

        client: 'Jquery',
        employeeCount: 543,
        revenue: 765
      }, {

        client: 'Javascript',
        employeeCount: 76,
        revenue: 765
      }, {

        client: 'HTML',
        employeeCount: 543,
        revenue: 75
      }, {

        client: 'CSS',
        employeeCount: 6745,
        revenue: 453
      }, {

        client: 'DotNet',
        employeeCount: 654,
        revenue: 654
      }, {

        client: 'Hadoop',
        employeeCount: 564,
        revenue: 765
      }, {

        client: 'Java',
        employeeCount: 786,
        revenue: 765
      }],
      'March': [{

        client: 'Dev',
        employeeCount: 987,
        revenue: 765
      }, {

        client: 'Graphic',
        employeeCount: 986,
        revenue: 765

      }, {
        client: 'Angular',
        employeeCount: 986,
        revenue: 765
      }, {

        client: 'Jquery',
        employeeCount: 786,
        revenue: 764
      }, {

        client: 'Javascript',
        employeeCount: 876,
        revenue: 654
      }, {

        client: 'HTML',
        employeeCount: 87,
        revenue: 53
      }, {

        client: 'CSS',
        employeeCount: 876,
        revenue: 8
      }, {

        client: 'DotNet',
        employeeCount: 6754,
        revenue: 64
      }, {

        client: 'Hadoop',
        employeeCount: 4,
        revenue: 64
      }, {

        client: 'Java',
        employeeCount: 765,
        revenue: 765
      } ],
      'April': [{

        client: 'Dev',
        employeeCount: 234,
        revenue: 7265
      }, {

        client: 'Graphic',
        employeeCount: 986,
        revenue: 765

      }, {
        client: 'Angular',
        employeeCount: 986,
        revenue: 765
      }, {

        client: 'Jquery',
        employeeCount: 786,
        revenue: 764
      }, {

        client: 'Javascript',
        employeeCount: 876,
        revenue: 654
      }, {

        client: 'HTML',
        employeeCount: 87,
        revenue: 53
      }, {

        client: 'CSS',
        employeeCount: 876,
        revenue: 8
      }, {

        client: 'DotNet',
        employeeCount: 6754,
        revenue: 64
      }, {

        client: 'Hadoop',
        employeeCount: 4,
        revenue: 64
      }, {

        client: 'Java',
        employeeCount: 765,
        revenue: 765
      }],
      'May': [{

        client: 'Dev',
        employeeCount: 56,
        revenue: 453
      }, {

        client: 'Graphic',
        employeeCount: 34,
        revenue: 345

      }, {
        client: 'Angular',
        employeeCount: 986,
        revenue: 765
      }, {

        client: 'Jquery',
        employeeCount: 786,
        revenue: 764
      }, {

        client: 'Javascript',
        employeeCount: 876,
        revenue: 654
      }, {

        client: 'HTML',
        employeeCount: 87,
        revenue: 53
      }, {

        client: 'CSS',
        employeeCount: 876,
        revenue: 8
      }, {

        client: 'DotNet',
        employeeCount: 6754,
        revenue: 64
      }, {

        client: 'Hadoop',
        employeeCount: 4,
        revenue: 64
      }, {

        client: 'Java',
        employeeCount: 765,
        revenue: 765
      }],
      'June': [{

        client: 'Dev',
        employeeCount: 234,
        revenue: 7265
      }, {

        client: 'Graphic',
        employeeCount: 986,
        revenue: 765

      }, {
        client: 'Angular',
        employeeCount: 986,
        revenue: 765
      }, {

        client: 'Jquery',
        employeeCount: 786,
        revenue: 764
      }, {

        client: 'Javascript',
        employeeCount: 876,
        revenue: 654
      }, {

        client: 'HTML',
        employeeCount: 87,
        revenue: 53
      }, {

        client: 'CSS',
        employeeCount: 876,
        revenue: 8
      }, {

        client: 'DotNet',
        employeeCount: 6754,
        revenue: 64
      }, {

        client: 'Hadoop',
        employeeCount: 4,
        revenue: 64
      }, {

        client: 'Java',
        employeeCount: 765,
        revenue: 765
      }],
      'July': [{

        client: 'Dev',
        employeeCount: 324,
        revenue: 35
      }, {

        client: 'Graphic',
        employeeCount: 986,
        revenue: 765

      }, {
        client: 'Angular',
        employeeCount: 986,
        revenue: 765
      }, {

        client: 'Jquery',
        employeeCount: 786,
        revenue: 764
      }, {

        client: 'Javascript',
        employeeCount: 45,
        revenue: 435
      }, {

        client: 'HTML',
        employeeCount: 87,
        revenue: 53
      }, {

        client: 'CSS',
        employeeCount: 876,
        revenue: 8
      }, {

        client: 'DotNet',
        employeeCount: 6754,
        revenue: 64
      }, {

        client: 'Hadoop',
        employeeCount: 4,
        revenue: 64
      }, {

        client: 'Java',
        employeeCount: 765,
        revenue: 765
      }],
      'August': [{

        client: 'Dev',
        employeeCount: 435,
        revenue: 345
      }, {

        client: 'Graphic',
        employeeCount: 986,
        revenue: 765

      }, {
        client: 'Angular',
        employeeCount: 986,
        revenue: 765
      }, {

        client: 'Jquery',
        employeeCount: 786,
        revenue: 764
      }, {

        client: 'Javascript',
        employeeCount: 876,
        revenue: 654
      }, {

        client: 'HTML',
        employeeCount: 847,
        revenue: 533
      }, {

        client: 'CSS',
        employeeCount: 876,
        revenue: 8
      }, {

        client: 'DotNet',
        employeeCount: 6754,
        revenue: 64
      }, {

        client: 'Hadoop',
        employeeCount: 4,
        revenue: 64
      }, {

        client: 'Java',
        employeeCount: 765,
        revenue: 765
      }],
      'September': [{

        client: 'Dev',
        employeeCount: 345,
        revenue: 45
      }, {

        client: 'Graphic',
        employeeCount: 986,
        revenue: 765

      }, {
        client: 'Angular',
        employeeCount: 986,
        revenue: 765
      }, {

        client: 'Jquery',
        employeeCount: 786,
        revenue: 764
      }, {

        client: 'Javascript',
        employeeCount: 876,
        revenue: 654
      }, {

        client: 'HTML',
        employeeCount: 87,
        revenue: 53
      }, {

        client: 'CSS',
        employeeCount: 876,
        revenue: 8
      }, {

        client: 'DotNet',
        employeeCount: 6754,
        revenue: 64
      }, {

        client: 'Hadoop',
        employeeCount: 4,
        revenue: 64
      }, {

        client: 'Java',
        employeeCount: 765,
        revenue: 765
      }],
      'October': [{

        client: 'Dev',
        employeeCount: 234,
        revenue: 54
      }, {

        client: 'Graphic',
        employeeCount: 986,
        revenue: 765

      }, {
        client: 'Angular',
        employeeCount: 986,
        revenue: 765
      }, {

        client: 'Jquery',
        employeeCount: 786,
        revenue: 764
      }, {

        client: 'Javascript',
        employeeCount: 876,
        revenue: 654
      }, {

        client: 'HTML',
        employeeCount: 87,
        revenue: 5334
      }, {

        client: 'CSS',
        employeeCount: 876,
        revenue: 8
      }, {

        client: 'DotNet',
        employeeCount: 654,
        revenue: 64
      }, {

        client: 'Hadoop',
        employeeCount: 4,
        revenue: 64
      }, {

        client: 'Java',
        employeeCount: 765,
        revenue: 765
      }],
      'November': [{

        client: 'Dev',
        employeeCount: 234,
        revenue: 23
      }, {

        client: 'Graphic',
        employeeCount: 986,
        revenue: 765

      }, {
        client: 'Angular',
        employeeCount: 986,
        revenue: 765
      }, {

        client: 'Jquery',
        employeeCount: 34,
        revenue: 764
      }, {

        client: 'Javascript',
        employeeCount: 876,
        revenue: 654
      }, {

        client: 'HTML',
        employeeCount: 87,
        revenue: 53
      }, {

        client: 'CSS',
        employeeCount: 876,
        revenue: 8
      }, {

        client: 'DotNet',
        employeeCount: 6754,
        revenue: 64
      }, {

        client: 'Hadoop',
        employeeCount: 4,
        revenue: 634
      }, {

        client: 'Java',
        employeeCount: 765,
        revenue: 765
      }],
      'December': [{

        client: 'Dev',
        employeeCount: 234,
        revenue: 7265
      }, {

        client: 'Graphic',
        employeeCount: 986,
        revenue: 765

      }, {
        client: 'Angular',
        employeeCount: 986,
        revenue: 765
      }, {

        client: 'Jquery',
        employeeCount: 786,
        revenue: 764
      }, {

        client: 'Javascript',
        employeeCount: 876,
        revenue: 654
      }, {

        client: 'HTML',
        employeeCount: 87,
        revenue: 53
      }, {

        client: 'CSS',
        employeeCount: 876,
        revenue: 8
      }, {

        client: 'DotNet',
        employeeCount: 34,
        revenue: 64
      }, {

        client: 'Hadoop',
        employeeCount: 4,
        revenue: 64
      }, {

        client: 'Java',
        employeeCount: 765,
        revenue: 765
      },]



    }

    this.updateMonth = function(month) {
      this.clientList = reports[month];
      this.data = [];
      this.labels = [];
      //for loop this.clientList

      for (var i = 0; i < this.clientList.length; i++) {
        console.log("tarun")
        // console.log(this.data)
      //  if (this.labels[i] == this.clientList.client) {
      this.data.push( this.clientList[i].revenue);
      this.labels.push( this.clientList[i].client);
        console.log(this.data)
        }

    //  }
    };
    this.updateMonth("January");

  }
})();
