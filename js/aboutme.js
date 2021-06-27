mapboxgl.accessToken =
  "pk.eyJ1Ijoic2FkbmFwb2xlb24iLCJhIjoiY2txYjIxdzVuMGFqeTJ2cWhnZHM1ZHpyZSJ9._TzdqCQoA2IHSTegASYipA";

var map = new mapboxgl.Map({
  container: "map",
  style: "mapbox://styles/mapbox/streets-v11"
});

mapboxgl.accessToken =
  "pk.eyJ1Ijoic2FkbmFwb2xlb24iLCJhIjoiY2txYjIxdzVuMGFqeTJ2cWhnZHM1ZHpyZSJ9._TzdqCQoA2IHSTegASYipA";
var map = new mapboxgl.Map({
  container: "map",
  style: "mapbox://styles/mapbox/streets-v11",
  center: [-83.00262314257813, 39.971665836381035],
  zoom: 11.15
});

map.on("load", function() {
  map.addSource("places", {
    // This GeoJSON contains features that include an "icon"
    // property. The value of the "icon" property corresponds
    // to an image in the Mapbox Streets style's sprite.
    type: "geojson",
    data: {
      type: "FeatureCollection",
      features: [
        {
          type: "Feature",
          properties: {
            description:
              "<strong>Plain City</strong><p>Plain City is a village in Madison and Union counties in the U.S. state of Ohio, along Big Darby Creek. The population was 4,225 at the 2010 census.</p>",
            icon: "rocket-15"
          },
          geometry: {
            type: "Point",
            coordinates: [-83.17840439257813, 40.03898869883205]
          }
        },
        {
          type: "Feature",
          properties: {
            description:
              "<strong>Blacklick</strong><p>Blacklick Estates is a census-designated place in Franklin County, Ohio, United States: partly in Madison Township and partly in Truro Township. As of the 2010 census the population was 8,682, down from 9,518 at the 2000 census.</p>",

            icon: "rocket-15"
          },
          geometry: {
            type: "Point",
            coordinates: [-82.86392075, 39.905330065594136]
          }
        },
        {
          type: "Feature",
          properties: {
            description:
              "<strong>Dublin</strong><p>Dublin is a city in Franklin, Delaware, and Union counties in the U.S. state of Ohio. The population was 41,751 at the 2010 census. Dublin is a suburb of Columbus, is the home of the headquarters of Cardinal Health and Wendys, and hosts the yearly Memorial Tournament at the Muirfield Village Golf Club.</p>",
            icon: "rocket-15"
          },
          geometry: {
            type: "Point",
            coordinates: [-83.13445908007813, 40.10414439934414]
          }
        },
        {
          type: "Feature",
          properties: {
            description:
              '<strong>Ballston Arts & Crafts Market</strong><p>The <a href="http://ballstonarts-craftsmarket.blogspot.com/" target="_blank" title="Opens in a new window">Ballston Arts & Crafts Market</a> sets up shop next to the Ballston metro this Saturday for the first of five dates this summer. Nearly 35 artists and crafters will be on hand selling their wares. 10:00-4:00 p.m.</p>',
            icon: "rocket-15"
          },
          geometry: {
            type: "Point",
            coordinates: [-83.06854111132813, 40.29923735047683]
          }
        },
        {
          type: "Feature",
          properties: {
            description:
              "<strong>Marysville</strong><p>Marysville is a city in and the county seat of Union County, Ohio, United States approximately 27 mi NW of Columbus. The population was 22,094 at the 2010 census. This marks a 38.59% increase from 2000. Marysville's longtime slogan is, Where the Grass is Greener.</p>",
            icon: "rocket-15"
          },
          geometry: {
            type: "Point",
            coordinates: [-83.36654526171876, 40.23426874927991]
          }
        },
        {
          type: "Feature",
          properties: {
            description:
              "<strong>Grove city</strong> <p>Grove City is a city in Franklin County, Ohio, United States which was founded in 1852. It is a suburb of Columbus. The population was 35,575 according to the 2010 Census.</p>",
            icon: "rocket-15"
          },
          geometry: {
            type: "Point",
            coordinates: [-83.09600693164063, 39.8821500465162]
          }
        },
        {
          type: "Feature",
          properties: {
            description:
              "<strong>Pataskala</strong><p>Pataskala is a city in Licking County, Ohio, United States, approximately 19 miles east of Columbus. The population was 14,962 at the 2010 census. Pataskala was a small community until 1996, when what was then the village of Pataskala merged with Lima Township, vastly increasing its population and geographic area</p>",
            icon: "rocket-15"
          },
          geometry: {
            type: "Point",
            coordinates: [-82.69088608203126, 39.99902375606167]
          }
        },
        {
          type: "Feature",
          properties: {
            description:
              "<strong>Reynoldsburg</strong><p>Reynoldsburg is a city in Fairfield, Franklin, and Licking counties in the U.S. state of Ohio. It is a suburban community in the Columbus, Ohio metropolitan area. The population was 35,893 at the 2010 census.</p>",
            icon: "rocket-15"
          },
          geometry: {
            type: "Point",
            coordinates: [-82.80761581835938, 39.955877438035934]
          }
        },
        {
          type: "Feature",
          properties: {
            description:
              "<strong>Powell</strong><p>Powell is a city in the U.S. state of Ohio, located 14 miles north of the state capital of Columbus. The city is located in Delaware County; a frequent placeholder on the List of highest-income counties in the United States, and 35th wealthiest county in the United States in 2020.</p>",
            icon: "rocket-15"
          },
          geometry: {
            type: "Point",
            coordinates: [-83.09738022265626, 40.17973084618856]
          }
        },
        {
          type: "Feature",
          properties: {
            description: "<strong>Renodsburg",
            icon: "rocket-15"
          },
          geometry: {
            type: "Point",
            coordinates: [-82.80761581835938, 39.955877438035934]
          }
        },
        {
          type: "Feature",
          properties: {
            description: "<strong>Ostander</strong>",
            icon: "rocket-15"
          },
          geometry: {
            type: "Point",
            coordinates: [-83.21548325, 40.26571296137586]
          }
        }
      ]
    }
  });
  // Add a layer showing the places.
  map.addLayer({
    id: "places",
    type: "symbol",
    source: "places",
    layout: {
      "icon-image": "{icon}",
      "icon-allow-overlap": true
    }
  });

  // When a click event occurs on a feature in the places layer, open a popup at the
  // location of the feature, with description HTML from its properties.
  map.on("click", "places", function(e) {
    var coordinates = e.features[0].geometry.coordinates.slice();
    var description = e.features[0].properties.description;

    // Ensure that if the map is zoomed out such that multiple
    // copies of the feature are visible, the popup appears
    // over the copy being pointed to.
    while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
      coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
    }

    new mapboxgl.Popup()
      .setLngLat(coordinates)
      .setHTML(description)
      .addTo(map);
  });

  // Change the cursor to a pointer when the mouse is over the places layer.
  map.on("mouseenter", "places", function() {
    map.getCanvas().style.cursor = "pointer";
  });

  // Change it back to a pointer when it leaves.
  map.on("mouseleave", "places", function() {
    map.getCanvas().style.cursor = "";
  });
});
