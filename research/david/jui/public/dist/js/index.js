var onClickComponents = function () {
  $('#divComponentList').show();
};


var onClickAddComponent = function (componentName) {
  $('#divComponentList').hide();

  var component = '';

  switch (componentName) {
    case 'Icon':
      component = '<i class="icon-gear"></i>';
      break;
    case 'Button':
      component = '<a class="btn">Button</a>';
      break;
    case 'Switch':
      component += '<div class="switch on">';
      component += '  <div class="area">';
      component += '    <div class="bar">';
      component += '      <div class="left"></div>';
      component += '      <div class="right"></div>';
      component += '    </div>';
      component += '  </div>';
      component += '  <div class="handle"></div>';
      component += '</div>';
      break;
    default:
    break;
  }

  $('.appBody').append(component);
}



var onClickCharts = function () {
  $('#divChartList').show();
};

var onClickAddChart = function (chartName) {
  $('#divChartList').hide();

  var $chart = $('<div id="chart-1"></div>');
  $('.appBody').append($chart);

  var chart = jui.include("chart.builder");
  var names = {
      ie: "IE",
      ff: "Fire Fox",
      chrome: "Chrome",
      safari: "Safari",
      other: "Others"
  };

  chart('#chart-1', {
      padding : 150,
      axis : {
          data : [
              { ie : 70, ff : 11, chrome : 9, safari : 6, other : 4 }
          ]
      },
      brush : {
          type : "pie",
          showText : "inside",
          format : function(k, v) {
              return v + "%";
          }
      },
      widget : [{
          type : "title",
          text : "Pie Sample"
      }, {
          type : "tooltip",
          orient : "left",
          format : function(data, k) {
              return {
                  key: names[k],
                  value: data[k]
              }
          }
      }, {
          type : "legend",
          format : function(k) {
              return names[k];
          }
      }]
  });

};
