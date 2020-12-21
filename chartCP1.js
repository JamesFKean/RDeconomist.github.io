var chartCP1 = {
  "$schema": "https://vega.github.io/schema/vega-lite/v2.json",
  "data": {
    "url": "https://raw.githubusercontent.com/RDeconomist/RDeconomist.github.io/main/db_wages_real.csv"
  },
  "transform": [
    {
      "filter": {
        "field": "region",
        "oneOf": ["England", "Scotland", "Wales", "Northern Ireland"]
      }
    }
  ],
  "selection": {
    "country": {"type": "multi", "fields": ["region"], "bind": "legend"}
  },
  "encoding": {
    "x": {
      "field": "year",
      "type": "temporal",
      "timeUnit": "year",
      "axis": {
        "title": "Date",
        "grid": false,
        "tickCount": 7,
        "labelOverlap": "greedy"
      }
    },
    "y": {
      "field": "wage",
      "type": "quantitative",
      "axis": {
        "title": "Hourly wage (£) (median)",
        "grid": false,
        "format": ".2f"
      },
      "scale": {"domain": [5, 16]}
    },
    "color": {
      "field": "region",
      "type": "nominal",
      "scale": {"scheme": "set1"},
      "title": "Country"
    },
    "opacity": {
      "condition": {"selection": "country", "value": 1},
      "value": 0.2
    },

"facet": {
      "field": "type",
      "type": "nominal",
      "columns": 2,
      "title": null,
      "sort":["Annual Values", "Adjusted: 1997 prices"]
    },

    "tooltip": [
      {
        "field": "year",
        "type": "temporal",
        "timeUnit": "year",
        "title": "Date"
      },
      {
        "field": "wage",
        "type": "quantitative",
        "title": "Median wage",
        "format": ".2f"
      },
      {"field": "region", "type": "nominal", "title": "Country"}
    ]
  },
  "config": {"background": "#FcFdFd"},
  "height": 400,
  "width": 300,
  "mark": {"type": "line", "point": true}
};

vegaEmbed('#visCP1', chartCP1);
