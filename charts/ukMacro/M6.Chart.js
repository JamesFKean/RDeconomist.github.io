var ChartM6 =

{
  "$schema": "https://vega.github.io/schema/vega-lite/v4.json",
  "description": "(M6) Central bank independence",

"title": {
    "text": "Central bank independence",
    "subtitle":"Source: BoE",
    "subtitleFontStyle":"italic",
    "subtitleFontSize":10,
    "anchor": "start",
    "color": "black"
  },

  "data": {
    "url": "https://raw.githubusercontent.com/RDeconomist/RDeconomist.github.io/main/charts/ukMacro/M6.DataHub.MonetaryCBIndependence.csv"
  },
  "height": 300,
  "width": 255,
  "mark": {"type": "bar", "color": "darkblue"},
  "encoding": {
    "y": {"field": "Country", "type": "nominal", "title": "", "sort": "-x"},
    "x": {"aggregate": "sum", "field": "Value", "title": "", "axis": {"grid": false}}
  }
};


vegaEmbed('#ChartM6', ChartM6, {"actions": false});