var chartC1 = {
  "$schema": "https://vega.github.io/schema/vega-lite/v4.json",
  "title": {
    "text": "Cases: UK nations",
    "subtitle":"New cases by publish date. Source: coronavirus.data.gov.uk",
    "subtitleFontStyle":"italic",
    "subtitleFontSize":10,
    "anchor": "start",
    "color": "black"
  },
  "description": "Coronavirus cases",
  "data": {
    "url": "https://api.coronavirus.data.gov.uk/v2/data?areaType=nation&metric=newCasesByPublishDateRollingRate&format=csv",
    "format": {"type": "csv"}
  },
  "height": 300,
  "width": 345,
  "xxconfig": {"background": "#FcFdFd"},
  "mark": {"type": "line", "point": false},
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
      "axis": {"grid": false}
    },
    "y": {
      "field": "newCasesByPublishDateRollingRate",
      "type": "quantitative",
      "title": "New Cases, rolling rate",
      "axis": {"grid": false}
    },
    "color": {
      "field": "areaName",
      "type": "nominal",
      "scale": {"scheme": "set1"},
      "title": "Region",
      "legend": {"orient": "top-left", "fillColor": "#FcFdFd"}
    },
    "opacity": {"condition": {"selection": "region", "value": 1}, "value": 0.1},
    "tooltip": [
      {"field": "date", "type": "temporal", "title": "Date"},
      {"field": "areaName", "type": "nominal", "title": "Region"},
      {
        "field": "newCasesByPublishDateRollingRate",
        "type": "nominal",
        "title": "New cases",
        "format": ".0f"
      }
    ]
  }
};
vegaEmbed('#chartC1', chartC1, {"actions": false});