(function() {
  'use strict';
  angular
    .module('maerkApp')
    .controller('skillsController', skillsController)


  function skillsController($log) {
    this.year = '';
    this.years = ['2016', '2015', '2014'];
    var reports = {
      'January': [{

        skills: 'Dev',
        employeeCount: 10,
        revenue: 23
      }, {

        skills: 'Graphic',
        employeeCount: 20,
        revenue: 23

      }, {
        skills: 'Angular',
        employeeCount: 30,
        revenue: 987
      }, {

        skills: 'Jquery',
        employeeCount: 23,
        revenue: 765
      }, {

        skills: 'Javascript',
        employeeCount: 896,
        revenue: 78
      }, {

        skills: 'HTML',
        employeeCount: 7,
        revenue: 876
      }, {

        skills: 'CSS',
        employeeCount: 875,
        revenue: 98
      }, {

        skills: 'DotNet',
        employeeCount: 765,
        revenue: 199
      }, {

        skills: 'Hadoop',
        employeeCount: 76,
        revenue: 847
      }, {

        skills: 'Java',
        employeeCount: 876,
        revenue: 56
      }],
      'February': [{

        skills: 'Dev',
        employeeCount: 897,
        revenue: 85
      }, {

        skills: 'Graphic',
        employeeCount: 876,
        revenue: 675

      }, {
        skills: 'Angular',
        employeeCount: 98,
        revenue: 756
      }, {

        skills: 'Jquery',
        employeeCount: 543,
        revenue: 765
      }, {

        skills: 'Javascript',
        employeeCount: 76,
        revenue: 765
      }, {

        skills: 'HTML',
        employeeCount: 543,
        revenue: 75
      }, {

        skills: 'CSS',
        employeeCount: 6745,
        revenue: 453
      }, {

        skills: 'DotNet',
        employeeCount: 654,
        revenue: 654
      }, {

        skills: 'Hadoop',
        employeeCount: 564,
        revenue: 765
      }, {

        skills: 'Java',
        employeeCount: 786,
        revenue: 765
      }],
      'March': [{

        skills: 'Dev',
        employeeCount: 987,
        revenue: 765
      }, {

        skills: 'Graphic',
        employeeCount: 986,
        revenue: 765

      }, {
        skills: 'Angular',
        employeeCount: 986,
        revenue: 765
      }, {

        skills: 'Jquery',
        employeeCount: 786,
        revenue: 764
      }, {

        skills: 'Javascript',
        employeeCount: 876,
        revenue: 654
      }, {

        skills: 'HTML',
        employeeCount: 87,
        revenue: 53
      }, {

        skills: 'CSS',
        employeeCount: 876,
        revenue: 8
      }, {

        skills: 'DotNet',
        employeeCount: 6754,
        revenue: 64
      }, {

        skills: 'Hadoop',
        employeeCount: 4,
        revenue: 64
      }, {

        skills: 'Java',
        employeeCount: 765,
        revenue: 765
      } ],
      'April': [{

        skills: 'Dev',
        employeeCount: 234,
        revenue: 7265
      }, {

        skills: 'Graphic',
        employeeCount: 986,
        revenue: 765

      }, {
        skills: 'Angular',
        employeeCount: 986,
        revenue: 765
      }, {

        skills: 'Jquery',
        employeeCount: 786,
        revenue: 764
      }, {

        skills: 'Javascript',
        employeeCount: 876,
        revenue: 654
      }, {

        skills: 'HTML',
        employeeCount: 87,
        revenue: 53
      }, {

        skills: 'CSS',
        employeeCount: 876,
        revenue: 8
      }, {

        skills: 'DotNet',
        employeeCount: 6754,
        revenue: 64
      }, {

        skills: 'Hadoop',
        employeeCount: 4,
        revenue: 64
      }, {

        skills: 'Java',
        employeeCount: 765,
        revenue: 765
      }],
      'May': [{

        skills: 'Dev',
        employeeCount: 56,
        revenue: 453
      }, {

        skills: 'Graphic',
        employeeCount: 34,
        revenue: 345

      }, {
        skills: 'Angular',
        employeeCount: 986,
        revenue: 765
      }, {

        skills: 'Jquery',
        employeeCount: 786,
        revenue: 764
      }, {

        skills: 'Javascript',
        employeeCount: 876,
        revenue: 654
      }, {

        skills: 'HTML',
        employeeCount: 87,
        revenue: 53
      }, {

        skills: 'CSS',
        employeeCount: 876,
        revenue: 8
      }, {

        skills: 'DotNet',
        employeeCount: 6754,
        revenue: 64
      }, {

        skills: 'Hadoop',
        employeeCount: 4,
        revenue: 64
      }, {

        skills: 'Java',
        employeeCount: 765,
        revenue: 765
      }],
      'June': [{

        skills: 'Dev',
        employeeCount: 234,
        revenue: 7265
      }, {

        skills: 'Graphic',
        employeeCount: 986,
        revenue: 765

      }, {
        skills: 'Angular',
        employeeCount: 986,
        revenue: 765
      }, {

        skills: 'Jquery',
        employeeCount: 786,
        revenue: 764
      }, {

        skills: 'Javascript',
        employeeCount: 876,
        revenue: 654
      }, {

        skills: 'HTML',
        employeeCount: 87,
        revenue: 53
      }, {

        skills: 'CSS',
        employeeCount: 876,
        revenue: 8
      }, {

        skills: 'DotNet',
        employeeCount: 6754,
        revenue: 64
      }, {

        skills: 'Hadoop',
        employeeCount: 4,
        revenue: 64
      }, {

        skills: 'Java',
        employeeCount: 765,
        revenue: 765
      }],
      'July': [{

        skills: 'Dev',
        employeeCount: 324,
        revenue: 35
      }, {

        skills: 'Graphic',
        employeeCount: 986,
        revenue: 765

      }, {
        skills: 'Angular',
        employeeCount: 986,
        revenue: 765
      }, {

        skills: 'Jquery',
        employeeCount: 786,
        revenue: 764
      }, {

        skills: 'Javascript',
        employeeCount: 45,
        revenue: 435
      }, {

        skills: 'HTML',
        employeeCount: 87,
        revenue: 53
      }, {

        skills: 'CSS',
        employeeCount: 876,
        revenue: 8
      }, {

        skills: 'DotNet',
        employeeCount: 6754,
        revenue: 64
      }, {

        skills: 'Hadoop',
        employeeCount: 4,
        revenue: 64
      }, {

        skills: 'Java',
        employeeCount: 765,
        revenue: 765
      }],
      'August': [{

        skills: 'Dev',
        employeeCount: 435,
        revenue: 345
      }, {

        skills: 'Graphic',
        employeeCount: 986,
        revenue: 765

      }, {
        skills: 'Angular',
        employeeCount: 986,
        revenue: 765
      }, {

        skills: 'Jquery',
        employeeCount: 786,
        revenue: 764
      }, {

        skills: 'Javascript',
        employeeCount: 876,
        revenue: 654
      }, {

        skills: 'HTML',
        employeeCount: 847,
        revenue: 533
      }, {

        skills: 'CSS',
        employeeCount: 876,
        revenue: 8
      }, {

        skills: 'DotNet',
        employeeCount: 6754,
        revenue: 64
      }, {

        skills: 'Hadoop',
        employeeCount: 4,
        revenue: 64
      }, {

        skills: 'Java',
        employeeCount: 765,
        revenue: 765
      }],
      'September': [{

        skills: 'Dev',
        employeeCount: 345,
        revenue: 45
      }, {

        skills: 'Graphic',
        employeeCount: 986,
        revenue: 765

      }, {
        skills: 'Angular',
        employeeCount: 986,
        revenue: 765
      }, {

        skills: 'Jquery',
        employeeCount: 786,
        revenue: 764
      }, {

        skills: 'Javascript',
        employeeCount: 876,
        revenue: 654
      }, {

        skills: 'HTML',
        employeeCount: 87,
        revenue: 53
      }, {

        skills: 'CSS',
        employeeCount: 876,
        revenue: 8
      }, {

        skills: 'DotNet',
        employeeCount: 6754,
        revenue: 64
      }, {

        skills: 'Hadoop',
        employeeCount: 4,
        revenue: 64
      }, {

        skills: 'Java',
        employeeCount: 765,
        revenue: 765
      }],
      'October': [{

        skills: 'Dev',
        employeeCount: 234,
        revenue: 54
      }, {

        skills: 'Graphic',
        employeeCount: 986,
        revenue: 765

      }, {
        skills: 'Angular',
        employeeCount: 986,
        revenue: 765
      }, {

        skills: 'Jquery',
        employeeCount: 786,
        revenue: 764
      }, {

        skills: 'Javascript',
        employeeCount: 876,
        revenue: 654
      }, {

        skills: 'HTML',
        employeeCount: 87,
        revenue: 5334
      }, {

        skills: 'CSS',
        employeeCount: 876,
        revenue: 8
      }, {

        skills: 'DotNet',
        employeeCount: 654,
        revenue: 64
      }, {

        skills: 'Hadoop',
        employeeCount: 4,
        revenue: 64
      }, {

        skills: 'Java',
        employeeCount: 765,
        revenue: 765
      }],
      'November': [{

        skills: 'Dev',
        employeeCount: 234,
        revenue: 23
      }, {

        skills: 'Graphic',
        employeeCount: 986,
        revenue: 765

      }, {
        skills: 'Angular',
        employeeCount: 986,
        revenue: 765
      }, {

        skills: 'Jquery',
        employeeCount: 34,
        revenue: 764
      }, {

        skills: 'Javascript',
        employeeCount: 876,
        revenue: 654
      }, {

        skills: 'HTML',
        employeeCount: 87,
        revenue: 53
      }, {

        skills: 'CSS',
        employeeCount: 876,
        revenue: 8
      }, {

        skills: 'DotNet',
        employeeCount: 6754,
        revenue: 64
      }, {

        skills: 'Hadoop',
        employeeCount: 4,
        revenue: 634
      }, {

        skills: 'Java',
        employeeCount: 765,
        revenue: 765
      }],
      'December': [{

        skills: 'Dev',
        employeeCount: 234,
        revenue: 7265
      }, {

        skills: 'Graphic',
        employeeCount: 986,
        revenue: 765

      }, {
        skills: 'Angular',
        employeeCount: 986,
        revenue: 765
      }, {

        skills: 'Jquery',
        employeeCount: 786,
        revenue: 764
      }, {

        skills: 'Javascript',
        employeeCount: 876,
        revenue: 654
      }, {

        skills: 'HTML',
        employeeCount: 87,
        revenue: 53
      }, {

        skills: 'CSS',
        employeeCount: 876,
        revenue: 8
      }, {

        skills: 'DotNet',
        employeeCount: 34,
        revenue: 64
      }, {

        skills: 'Hadoop',
        employeeCount: 4,
        revenue: 64
      }, {

        skills: 'Java',
        employeeCount: 765,
        revenue: 765
      },]



    }

    this.updateMonth = function(month) {
      this.skillList = reports[month];
      this.data = [];
      this.labels = [];
      //for loop this.skillList

      for (var i = 0; i < this.skillList.length; i++) {
        console.log("tarun")
        // console.log(this.data)
      //  if (this.labels[i] == this.skillList.skills) {
      this.data.push( this.skillList[i].revenue);
      this.labels.push( this.skillList[i].skills);
        console.log(this.data)
        }

    //  }
    };
    this.updateMonth("January");

  }
})();
