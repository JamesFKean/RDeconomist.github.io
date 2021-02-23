var chartC3 = {  "$schema": "https://vega.github.io/schema/vega-lite/v4.json",
 
 "title": {
    "text": "Cases: English regions - since September",
    "subtitle":"New cases by publish date. Rolling weekly rate per 100k population.",
    "subtitleFontStyle":"italic",
    "subtitleFontSize":10,
    "anchor": "start",
    "color": "black"
  },


  "description": "Coronavirus cases",
  "data": {
    "url": "https://api.coronavirus.data.gov.uk/v2/data?areaType=region&metric=newCasesByPublishDateRollingRate&format=csv",
    "format": {"type": "csv"}
  },
  "height": 300,
  "width": 340,
  "xxconfig": {"background": "#FcFdFd"},
  "mark": {"type": "bar", "point": false},
  "selection": {
    "region": {"type": "multi", "fields": ["areaName"], "bind": "legend"}
  },
  "transform": [
    
    {
      "filter": {
        "field": "date",
        "range": [
          {"year": 2020, "month": "sep", "date": 1},
          {"year": 2050, "month": "dec", "date": 30}
        ]
      }
    }
  ],
  "encoding": {
    "x": {
      "field": "date", 
      "type": "temporal", 
      "title": "Date", 
      "axis":{"grid":false}
      },

    "y": {
      "field": "newCasesByPublishDateRollingRate",
      "type": "quantitative",
      "title": "New cases",
      "axis":{"grid":false}
      },

    "color": {
      "field": "areaName",
      "type": "nominal",
      "scale": {"scheme": "inferno"},
      "title": "Region",
      "legend": {"orient": "top-left", "fillColor": "#FcFdFd"}
    },
    "opacity": {"condition": {"selection": "region", "value": 1}, "value": 0.1},
    "tooltip": [
      {"field": "date", "type": "temporal", "title": "Date"},
      {"field": "areaName", "type": "nominal", "title": "Region"},
      {"field": "newCasesByPublishDateRollingRate", "type": "nominal", "title": "New cases", "format": ".0f"}
    ]
  }
}
;

vegaEmbed('#chartC3', chartC3, {"actions":false});
