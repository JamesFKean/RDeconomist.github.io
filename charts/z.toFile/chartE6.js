var chartE6 = {
  "$schema": "https://vega.github.io/schema/vega-lite/v4.json",
  "description": "Coronavirus cases",
  "data": {
    "url": "https://raw.githubusercontent.com/RDeconomist/RDeconomist.github.io/main/db_xmas_p50.csv ",
    "format": {"type": "csv"}
  },
  "height": 200,
  "width": 150,
  "config": {"background": "#FcFdFd"},
  "mark": {"type": "line", "point": false},
  "transform": [
    {
      
       "filter": {"selection": "Type"}
    }
  ],

  "selection": {

    "region": {"type": "multi", "fields": ["region_s"], "bind": "legend"},
  
    "Type": {
      "type": "single",
      "fields": ["type"],
      "init":{"type":"Meat"},
      "bind": {
        "input": "select",
        "options": [
          "Meat",
          "Drink",
          "Presents",
          "Food",
          "Vegetables",
          "Gifts for Kids"
        ],
        "name": "Select items:"
      }
    }
  },
  "encoding": {
    "x": {"field": "year", "type": "temporal", "title": "Year"},
    "y": {"field": "price", "type": "quantitative", "title": "Price, £"},
    "color": {
      "field": "region_s",
      "type": "nominal",
      "scale": {"scheme": "set1"},
      "title": "Region"
    },
    "facet": {
      "field": "name",
      "type": "nominal",
      "columns": 2,
      "title": "Region"
    },
    "opacity": {"condition": {"selection": "region", "value": 1}, "value": 0.1}
  },
  "resolve": {"scale": {"y": "independent"}}
};

vegaEmbed('#visE6', chartE6);
