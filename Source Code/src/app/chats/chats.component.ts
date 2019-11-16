
import { Component, NgZone, OnInit } from '@angular/core';
import * as am4core from '@amcharts/amcharts4/core';
import * as am4charts from '@amcharts/amcharts4/charts';
import am4themes_animated from '@amcharts/amcharts4/themes/animated';
import am4geodata_usaLow from '@amcharts/amcharts4-geodata/usaLow';
import * as am4maps from '@amcharts/amcharts4/maps';



am4core.useTheme(am4themes_animated);


@Component({
  selector: 'app-chats',
  templateUrl: './chats.component.html',
  styleUrls: ['./chats.component.css']
})
export class ChatsComponent implements OnInit {


  constructor() {
  }

  ngOnInit() {
   //this.barcode();

   this.week();
   this.character();
   this.language();
   this.verify();
   this.retweet();
   this.verify2();
   this.verify3();
   this.userarya();
   this.hash();
   this.country();
   this.map();
  }

  barcode() {

    const chart = am4core.create('chartdiv', am4charts.PieChart3D);
    chart.hiddenState.properties.opacity = 0;
    chart.data = [{"country":"United States","count":3407},
        {"country":"India","count":1980},
      {"country":"United Kingdom","count":2321},
      {"country":"England","count":54},
      {"country":"Nigeria","count":1184},
   ];
    chart.innerRadius = am4core.percent(40);
    chart.depth = 120;

    chart.legend = new am4charts.Legend();

    const series = chart.series.push(new am4charts.PieSeries3D());
    series.dataFields.value = 'count';
    series.dataFields.depthValue = 'count';
    series.dataFields.category = 'country';
    series.slices.template.cornerRadius = 5;
    series.colors.step = 3;
  }
week() {

  const iconPath = "M421.976,136.204h-23.409l-0.012,0.008c-0.19-20.728-1.405-41.457-3.643-61.704l-1.476-13.352H5.159L3.682,74.507 C1.239,96.601,0,119.273,0,141.895c0,65.221,7.788,126.69,22.52,177.761c7.67,26.588,17.259,50.661,28.5,71.548  c11.793,21.915,25.534,40.556,40.839,55.406l4.364,4.234h206.148l4.364-4.234c15.306-14.85,29.046-33.491,40.839-55.406  c11.241-20.888,20.829-44.96,28.5-71.548c0.325-1.127,0.643-2.266,0.961-3.404h44.94c49.639,0,90.024-40.385,90.024-90.024  C512,176.588,471.615,136.204,421.976,136.204z M421.976,256.252h-32c3.061-19.239,5.329-39.333,6.766-60.048h25.234  c16.582,0,30.024,13.442,30.024,30.024C452,242.81,438.558,256.252,421.976,256.252z"

  const chart = am4core.create('weekdiv', am4charts.SlicedChart);
  chart.hiddenState.properties.opacity = 0; // this makes initial fade in effect
  chart.paddingLeft = 150;

  chart.data = [{
    "name": "Sunday",
    "value": 39740
  }, {
    "name": "Monday",
    "value": 41813
  },{
      "name": "Tuesday",
      "value": 42582
  },{
      "name": "Wednesday",
      "value": 42896
  },{
      "name": "Friday",
      "value": 41038
  },{
      "name": "Saturday",
      "value": 40016
  }];

  let series = chart.series.push(new am4charts.PictorialStackedSeries());
  series.dataFields.value = "value";
  series.dataFields.category = "name";
  series.alignLabels = true;
// this makes only A label to be visible
  series.labels.template.propertyFields.disabled = "disabled";
  series.ticks.template.propertyFields.disabled = "disabled";


  series.maskSprite.path = iconPath;
  series.ticks.template.locationX = 1;
  series.ticks.template.locationY = 0;

  series.labelsContainer.width = 100;

  chart.legend = new am4charts.Legend();
  chart.legend.position = "top";
  chart.legend.paddingRight = 160;
  chart.legend.paddingBottom = 40;
  let marker = chart.legend.markers.template.children.getIndex(0);
  chart.legend.markers.template.width = 40;
  chart.legend.markers.template.height = 40;
}


character() {
  let chart = am4core.create("chardiv", am4charts.XYChart3D);
  chart.paddingBottom = 30;
  chart.angle = 35;

// Add data
  chart.data = [{"GOTCharacters":"Brummie Steve","Count":199},
    {"GOTCharacters":"FCB Tweetbot","Count":107},
    {"GOTCharacters":"Sanchell","Count":97},
    {"GOTCharacters":"Coygfan","Count":63},
    {"GOTCharacters":"Colfball finder1","Count":58}
   ];

// Create axes
  const categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
  categoryAxis.dataFields.category = 'GOTCharacters';
  categoryAxis.renderer.grid.template.location = 0;
  categoryAxis.renderer.minGridDistance = 20;
  categoryAxis.renderer.inside = true;
  categoryAxis.renderer.grid.template.disabled = true;

  let labelTemplate = categoryAxis.renderer.labels.template;
  labelTemplate.rotation = -90;
  labelTemplate.horizontalCenter = 'left';
  labelTemplate.verticalCenter = 'middle';
  labelTemplate.dy = 10; // moves it a bit down;
  labelTemplate.inside = false; // this is done to avoid settings which are not suitable when label is rotated

  let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
  valueAxis.renderer.grid.template.disabled = true;

// Create series
  let series = chart.series.push(new am4charts.ConeSeries());
  series.dataFields.valueY = 'Count';
  series.dataFields.categoryX = 'GOTCharacters';

  let columnTemplate = series.columns.template;
  columnTemplate.adapter.add('fill', (fill, target) => {
    return chart.colors.getIndex(target.dataItem.index);
  });

  columnTemplate.adapter.add('stroke', (stroke, target) => {
    return chart.colors.getIndex(target.dataItem.index);
  });

}

language(){
  let data = [{
    "country": "Dummy",
    "disabled": true,
    "litres": 1000,
    "color": am4core.color("#dadada"),
    "opacity": 0.3,
    "strokeDasharray": "4,4"
  }, {"language":"English","Count":243049},
    {"language":"Spanish","Count":11168},
    {"language":"French","Count":8187},
    {"language":"Japanese","Count":4427},
    {"language":"Tagalog","Count":3135},
    {"language":"Indonesian","Count":3123},
    {"language":"German","Count":1521},
    {"language":"Russian","Count":1458}];


// cointainer to hold both charts
  let container = am4core.create('langdiv', am4core.Container);
  container.width = am4core.percent(100);
  container.height = am4core.percent(100);
  container.layout = 'horizontal';

  container.events.on('maxsizechanged', function () {
    chart1.zIndex = 0;
    separatorLine.zIndex = 1;
    dragText.zIndex = 2;
    chart2.zIndex = 3;
  })

  let chart1 = container.createChild(am4charts.PieChart);
  chart1 .fontSize = 11;
  chart1.hiddenState.properties.opacity = 0; // this makes initial fade in effect
  chart1.data = data;
  chart1.radius = am4core.percent(70);
  chart1.innerRadius = am4core.percent(40);
  chart1.zIndex = 1;

  let series1 = chart1.series.push(new am4charts.PieSeries());
  series1.dataFields.value = "Count";
  series1.dataFields.category = "language";
  series1.colors.step = 2;
  series1.alignLabels = false;
  series1.labels.template.bent = true;
  series1.labels.template.radius = 3;
  series1.labels.template.padding(0,0,0,0);

  let sliceTemplate1 = series1.slices.template;
  sliceTemplate1.cornerRadius = 5;
  sliceTemplate1.draggable = true;
  sliceTemplate1.inert = true;
  sliceTemplate1.propertyFields.fill = "color";
  sliceTemplate1.propertyFields.fillOpacity = 'opacity';
  sliceTemplate1.propertyFields.stroke = "color";
  sliceTemplate1.propertyFields.strokeDasharray = "strokeDasharray";
  sliceTemplate1.strokeWidth = 1;
  sliceTemplate1.strokeOpacity = 1;

  let zIndex = 5;


  sliceTemplate1.events.on('down', function (event) {
    event.target.toFront();
    // also put chart to front
    const series = event.target.dataItem.component;
    series.zIndex = zIndex++;
  })

  series1.ticks.template.disabled = true;

  sliceTemplate1.states.getKey("active").properties.shiftRadius = 0;

  sliceTemplate1.events.on("dragstop", function (event) {
    handleDragStop(event);
  })

// separator line and text
  let separatorLine = container.createChild(am4core.Line);
  separatorLine.x1 = 0;
  separatorLine.y2 = 300;
  separatorLine.strokeWidth = 3;
  separatorLine.stroke = am4core.color("#dadada");
  separatorLine.valign = "middle";
  separatorLine.strokeDasharray = "5,5";


  let dragText = container.createChild(am4core.Label);
  dragText.text = "Drag slices over the line";
  dragText.rotation = 90;
  dragText.valign = "middle";
  dragText.align = "center";
  dragText.paddingBottom = 5;

// second chart
  let chart2 = container.createChild(am4charts.PieChart);
  chart2.hiddenState.properties.opacity = 0; // this makes initial fade in effect
  chart2 .fontSize = 11;
  chart2.radius = am4core.percent(70);
  chart2.data = data;
  chart2.innerRadius = am4core.percent(40);
  chart2.zIndex = 1;

  const series2 = chart2.series.push(new am4charts.PieSeries());
  series2.dataFields.value = 'Count';
  series2.dataFields.category = 'language';
  series2.colors.step = 2;

  series2.alignLabels = false;
  series2.labels.template.bent = true;
  series2.labels.template.radius = 3;
  series2.labels.template.padding(0, 0, 0, 0);
  series2.labels.template.propertyFields.disabled = 'disabled';

  let sliceTemplate2 = series2.slices.template;
  sliceTemplate2.copyFrom(sliceTemplate1);

  series2.ticks.template.disabled = true;

  function handleDragStop(event) {
    const targetSlice = event.target;
    let dataItem1;
    let dataItem2;
    let slice1;
    let slice2;

    if (series1.slices.indexOf(targetSlice) !== -1) {
      slice1 = targetSlice;
      slice2 = series2.dataItems.getIndex(targetSlice.dataItem.index).slice;
    }
    else if (series2.slices.indexOf(targetSlice) !== -1) {
      slice1 = series1.dataItems.getIndex(targetSlice.dataItem.index).slice;
      slice2 = targetSlice;
    }


    dataItem1 = slice1.dataItem;
    dataItem2 = slice2.dataItem;

    let series1Center = am4core.utils.spritePointToSvg({ x: 0, y: 0 }, series1.slicesContainer);
    let series2Center = am4core.utils.spritePointToSvg({ x: 0, y: 0 }, series2.slicesContainer);

    let series1CenterConverted = am4core.utils.svgPointToSprite(series1Center, series2.slicesContainer);
    let series2CenterConverted = am4core.utils.svgPointToSprite(series2Center, series1.slicesContainer);

    // tooltipY and tooltipY are in the middle of the slice, so we use them to avoid extra calculations
    let targetSlicePoint = am4core.utils.spritePointToSvg({ x: targetSlice.tooltipX, y: targetSlice.tooltipY }, targetSlice);

    if (targetSlice === slice1) {
      if (targetSlicePoint.x > container.pixelWidth / 2) {
        let value = dataItem1.value;

        dataItem1.hide();

        let animation = slice1.animate([{ property: "x", to: series2CenterConverted.x }, { property: "y", to: series2CenterConverted.y }], 400);
        animation.events.on("animationprogress", function (event) {
          slice1.hideTooltip();
        })

        slice2.x = 0;
        slice2.y = 0;

        dataItem2.show();
      }
      else {
        slice1.animate([{ property: "x", to: 0 }, { property: "y", to: 0 }], 400);
      }
    }
    if (targetSlice === slice2) {
      if (targetSlicePoint.x < container.pixelWidth / 2) {

        const value = dataItem2.value;

        dataItem2.hide();

        let animation = slice2.animate([{ property: "x", to: series1CenterConverted.x }, { property: "y", to: series1CenterConverted.y }], 400);
        animation.events.on('animationprogress', function (event) {
          slice2.hideTooltip();
        })

        slice1.x = 0;
        slice1.y = 0;
        dataItem1.show();
      }
      else {
        slice2.animate([{ property: "x", to: 0 }, { property: "y", to: 0 }], 400);
      }
    }

    toggleDummySlice(series1);
    toggleDummySlice(series2);

    series1.hideTooltip();
    series2.hideTooltip();
  }

  function toggleDummySlice(series) {
    let show = true;
    for (var i = 1; i < series.dataItems.length; i++) {
      let dataItem = series.dataItems.getIndex(i);
      if (dataItem.slice.visible && !dataItem.slice.isHiding) {
        show = false;
      }
    }

    let dummySlice = series.dataItems.getIndex(0);
    if (show) {
      dummySlice.show();
    }
    else {
      dummySlice.hide();
    }
  }

  series2.events.on('datavalidated', function () {

    let dummyDataItem = series2.dataItems.getIndex(0);
    dummyDataItem.show(0);
    dummyDataItem.slice.draggable = false;
    dummyDataItem.slice.tooltipText = undefined;

    for (var i = 1; i < series2.dataItems.length; i++) {
      series2.dataItems.getIndex(i).hide(0);
    }
  })

  series1.events.on("datavalidated", function () {
    let dummyDataItem = series1.dataItems.getIndex(0);
    dummyDataItem.hide(0);
    dummyDataItem.slice.draggable = false;
    dummyDataItem.slice.tooltipText = undefined;
  });

}

verify(){
  let chart = am4core.create("verifydiv", am4charts.PieChart);
  chart.hiddenState.properties.opacity = 0; // this creates initial fade-in

  chart.data = [
    {"Device":"Andriod","count":129851},{"Device":"IOS","count":96460},{"Device":"Other","count":65619}];
  chart.radius = am4core.percent(70);
  chart.innerRadius = am4core.percent(40);
  chart.startAngle = 180;
  chart.endAngle = 360;

  let series = chart.series.push(new am4charts.PieSeries());
  series.dataFields.value = "count";
  series.dataFields.category = "Device";

  series.slices.template.cornerRadius = 10;
  series.slices.template.innerCornerRadius = 7;
  series.slices.template.draggable = true;
  series.slices.template.inert = true;
  series.alignLabels = false;

  series.hiddenState.properties.startAngle = 90;
  series.hiddenState.properties.endAngle = 90;

  chart.legend = new am4charts.Legend();

}

retweet(){
  let chart = am4core.create('retweetdiv', am4charts.PieChart);
  chart.hiddenState.properties.opacity = 0; // this creates initial fade-in

  chart.data = [
    {"user":"Anna Italia","count":323},
    {"user":"Footy News Media","count":284},
    {"user":"Japan Football","count":283},
    {"user":"Brummie Steve","count":271},
    {"user":"NFL & MLS News and Rumors ","count":246},
    {"user":"Football News ","count":185},
    {"user":"Chris ","count":169},
    {"user":"NDTV Live Sports ","count":162}
  ];

  let series = chart.series.push(new am4charts.PieSeries());
  series.dataFields.value = "count";
  series.dataFields.radiusValue = "count";
  series.dataFields.category = "user";
  series.slices.template.cornerRadius = 6;
  series.colors.step = 3;

  series.hiddenState.properties.endAngle = -90;

  chart.legend = new am4charts.Legend();

}

verify2()
{

  let chart = am4core.create("verify2div", am4charts.PieChart3D);
  chart.hiddenState.properties.opacity = 0; // this creates initial fade-in

  chart.legend = new am4charts.Legend();

  chart.data = [
    {"data":"Verified","Count":8703},{"data":"Unverified","Count":283227}

  ];

  chart.innerRadius = 100;

  let series = chart.series.push(new am4charts.PieSeries3D());
  series.dataFields.value = "Count";
  series.dataFields.category = "data";
}


  verify3() {

    let chart1 = am4core.create("verify3div", am4charts.PieChart3D);
    chart1.hiddenState.properties.opacity = 0; // this creates initial fade-in

    chart1.legend = new am4charts.Legend();

    chart1.data = [
      {"partofday":"earlymorning","Count":41840},{"partofday":"afternoon","Count":93940},
      {"partofday":"evening","Count":30193},{"partofday":"mid-night","Count":44864},
      {"partofday":"day time","Count":81093}

    ];

    chart1.innerRadius = 100;

    const series1 = chart1.series.push(new am4charts.PieSeries3D());
    series1.dataFields.value = "Count";
    series1.dataFields.category = "partofday";
  }



userarya(){
  let chart = am4core.create('aryadiv', am4charts.XYChart);

// Add data
  chart.data = [{
    "sport": "cricket",
    "count": 9811,
    "color": chart.colors.next(),
    "bullet": ""
  }, {
    "sport": "basketball",
    "count": 13123,
    "color": chart.colors.next(),
    "bullet": ""
  }, {
    "sport": "football",
    "count": 93878,
    "color": chart.colors.next(),
    "bullet":""
  }, {
    "sport": "golf",
    "count": 12052,
    "color": chart.colors.next(),
    "bullet": ""
  }, {
    "sport": "tennis",
    "count": 5301,
    "color": chart.colors.next(),
    "bullet": ""
  }];

// Create axes
  let categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
  categoryAxis.dataFields.category = 'sport';
  categoryAxis.renderer.grid.template.disabled = true;
  categoryAxis.renderer.minGridDistance = 30;
  categoryAxis.renderer.inside = true;
  categoryAxis.renderer.labels.template.fill = am4core.color('#fff');
  categoryAxis.renderer.labels.template.fontSize = 20;

  let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
  valueAxis.renderer.grid.template.strokeDasharray = "4,4";
  valueAxis.renderer.labels.template.disabled = true;
  valueAxis.min = 0;

// Do not crop bullets
  chart.maskBullets = false;

// Remove padding
  chart.paddingBottom = 0;

// Create series
  let series = chart.series.push(new am4charts.ColumnSeries());
  series.dataFields.valueY = "count";
  series.dataFields.categoryX = "sport";
  series.columns.template.propertyFields.fill = "color";
  series.columns.template.propertyFields.stroke = "color";
  series.columns.template.column.cornerRadiusTopLeft = 15;
  series.columns.template.column.cornerRadiusTopRight = 15;
  series.columns.template.tooltipText = "{categoryX}: [bold]{valueY}[/b]";

// Add bullets
  let bullet = series.bullets.push(new am4charts.Bullet());
  let image = bullet.createChild(am4core.Image);
  image.horizontalCenter = "middle";
  image.verticalCenter = "bottom";
  image.dy = 20;
  image.y = am4core.percent(100);
  image.propertyFields.href = "bullet";
  image.tooltipText = series.columns.template.tooltipText;
  image.propertyFields.fill = "color";
  image.filters.push(new am4core.DropShadowFilter());

}

hash(){
  let chart = am4core.create("Hashdiv", am4charts.SlicedChart);
  chart.hiddenState.properties.opacity = 0;


  chart.data = [{"country":"United States","total_count":3409},
    {"country":"India","total_count":1980},
    {"country":"United Kingdom","total_count":1684},
    {"country":"London","total_count":1597},
    {"country":"Lagos","total_count":1184},
    {"country":"London","total_count":983},
    {"country":"Florida","total_count":925},
    {"country":"England","total_count":810},
    {"country":"Nigeria","total_count":756},

  ];

  let series = chart.series.push(new am4charts.FunnelSeries());
  series.colors.step = 2;
  series.dataFields.value = "total_count";
  series.dataFields.category = "country";
  series.alignLabels = true;

  series.labelsContainer.paddingLeft = 15;
  series.labelsContainer.width = 200;

//series.orientation = "horizontal";
//series.bottomRatio = 1;

  chart.legend = new am4charts.Legend();
  chart.legend.position = "left";
  chart.legend.valign = "bottom";
  chart.legend.margin(5,5,20,5);



}

map(){
  const chart = am4core.create('mapdiv', am4maps.MapChart);

// Set map definition
  chart.geodata = am4geodata_usaLow;

// Set projection
  chart.projection = new am4maps.projections.AlbersUsa();

// Create map polygon series
  const polygonSeries = chart.series.push(new am4maps.MapPolygonSeries());

//Set min/max fill color for each area
  polygonSeries.heatRules.push({
    property: "fill",
    target: polygonSeries.mapPolygons.template,
    min: chart.colors.getIndex(1).brighten(1),
    max: chart.colors.getIndex(1).brighten(-0.3)
  });

// Make map load polygon data (state shapes and names) from GeoJSON
  polygonSeries.useGeodata = true;

// Set heatmap values for each state
  polygonSeries.data = [
    {"id":"US-IN","value":2},
    {"id":"US-CA","value":3},
    {"id":"US-WA","value":1},
    {"id":"US-CO","value":2},
    {"id":"US-TX","value":1},
    {"id":"US-MN","value":1},
    {"id":"US-MA","value":2},
    {"id":"US-MD","value":1},
    {"id":"US-KY","value":2},
    {"id":"US-OH","value":2},
    {"id":"US-IL","value":1},
    {"id":"US-MO","value":2},
    {"id":"US-NC","value":5},
    {"id":"US-MI","value":2},
    {"id":"US-NJ","value":1},
    {"id":"US-FL","value":1}
  ];

// Set up heat legend


// Configure series tooltip
  let polygonTemplate = polygonSeries.mapPolygons.template;
  polygonTemplate.tooltipText = "{name}: {value}";
  polygonTemplate.nonScalingStroke = true;
  polygonTemplate.strokeWidth = 0.5;

// Create hover state and set alternative fill color
  let hs = polygonTemplate.states.create("hover");
  hs.properties.fill = am4core.color("#3c5bdc");

}

country(){
  let chart = am4core.create("countdiv", am4charts.XYChart3D);
  chart.paddingBottom = 30;
  chart.angle = 35;

// Add data
  chart.data = [{"country":"United States","count":3409},
    {"country":"India","count":1980},
    {"country":"United Kingdom","count":2381},
    {"country":"Nigeria","count":1911},
    {"country":"Rest of world","count":21051}
    ];

// Create axes
  let categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
  categoryAxis.dataFields.category = "country";
  categoryAxis.renderer.grid.template.location = 0;
  categoryAxis.renderer.minGridDistance = 20;
  categoryAxis.renderer.inside = true;
  categoryAxis.renderer.grid.template.disabled = true;

  let labelTemplate = categoryAxis.renderer.labels.template;
  labelTemplate.rotation = -90;
  labelTemplate.horizontalCenter = "left";
  labelTemplate.verticalCenter = "middle";
  labelTemplate.dy = 10; // moves it a bit down;
  labelTemplate.inside = false; // this is done to avoid settings which are not suitable when label is rotated

  let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
  valueAxis.renderer.grid.template.disabled = true;

// Create series
  let series = chart.series.push(new am4charts.ConeSeries());
  series.dataFields.valueY = "count";
  series.dataFields.categoryX = "country";

  let columnTemplate = series.columns.template;
  columnTemplate.adapter.add("fill", (fill, target) => {
    return chart.colors.getIndex(target.dataItem.index);
  });

  columnTemplate.adapter.add("stroke", (stroke, target) => {
    return chart.colors.getIndex(target.dataItem.index);
  })
}
}
