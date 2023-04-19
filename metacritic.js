function init() {
    var selector = d3.select("#selDataset");
    
    // Use the list of album names to populate the select options
    d3.json("adjusted_music_scores.json").then((data) => {
      var albumNames = data.map(person =>
        person.title);

      albumNames.forEach((album) => {
        selector
          .append("option")
          .text(album)
          .property("value", album);
      });

       // Use the first sample from the list to build the initial plots
    var firstAlbum = albumNames[0];
    buildCharts(firstAlbum);
    buildAlbumInfo(firstAlbum);
  });
}
  
// Initialize the dashboard
  init();

  function optionChanged(newAlbum) {
    // Fetch new data each time a new album is selected
    buildAlbumInfo(newAlbum);
    buildCharts(newAlbum);
    
  }
  
  // Album Info Panel 
  function buildAlbumInfo(album) {
    d3.json("adjusted_music_scores.json").then((data) => {
        var albuminfo = data.map(person =>
            person).sort((a,b) => b - a);
      // Filter the data for the object with the desired sample number
      var resultArray = albuminfo.filter(sampleObj => sampleObj.title == album);
      var result = resultArray[0];
      // Use d3 to select the panel with id of `#album-info`
      var PANEL = d3.select("#album-info");
  
      // Use `.html("") to clear any existing metadata
      PANEL.html("");
  
      // Use `Object.entries` to add each key and value pair to the panel
      // Hint: Inside the loop, you will need to use d3 to append new
      // tags for each key-value in the metadata.
      Object.entries(result).forEach(([key, value]) => {
        PANEL.append("h6").text(`${key.toUpperCase()}: ${value}`);
      });
  
    });
  }

// Create the buildCharts function.
function buildCharts(album) {
    // Use d3.json to load and retrieve the samples.json file 
    d3.json("adjusted_music_scores.json").then((data) => {
      // Create a variable that holds the samples array. 
      var albums = data.map(person =>
        person).sort((a,b) => b - a);
      // Create a variable that filters the samples for the object with the desired sample number.
      var resultArray = albums.filter(sampleObj => sampleObj.title == album);
      //  Create a variable that holds the first sample in the array.
      var result = resultArray[0];

      // Create a variable that filters the metadata array for the object with the desired sample number.
    var albuminfo = data.map(person =>
        person).sort((a,b) => b - a);
    var gaugeArray = albuminfo.filter(albumObj => albumObj.title == album);

    // Create a variable that holds the first sample in the metadata array.
    var gaugeResult = gaugeArray[0];

    // Create a variable that holds the washing frequency.
    var weightedavg = gaugeResult.weighted_average;
    console.log(weightedavg)
   
    // Create the trace for the gauge chart.
    var gaugeData = [{
      value: weightedavg,
      type: "indicator",
      mode: "gauge+number",
      title: {text: "<b> Weighted Rating </b> <br></br> 60% User + 40% Critic"},
      gauge: {
        axis: {range: [null,100], dtick: "20"},

        bar: {color: "black"},
        steps:[
          {range: [0, 20], color: "red"},
          {range: [20, 40], color: "orange"},
          {range: [40, 60], color: "yellow"},
          {range: [60, 80], color: "lightgreen"},
          {range: [80, 100], color: "green"}
        ],
        dtick: 20
    }}];
    
    // Create the layout for the gauge chart.
    var gaugeLayout = { 
      automargin: true
    };

    // Use Plotly to plot the gauge data and layout.
    Plotly.newPlot("gauge", gaugeData, gaugeLayout);


      // Create a variable that filters the metadata array for the object with the desired sample number.
      var albuminfo = data.map(person =>
        person).sort((a,b) => b - a);
    var gaugeArray = albuminfo.filter(albumObj => albumObj.title == album);

    // Create a variable that holds the first sample in the metadata array.
    var gaugeResult = gaugeArray[0];

    // Create a variable that holds the washing frequency.
    var metascore = gaugeResult.metascore;
    console.log(metascore)
   
    // Create the trace for the gauge chart.
    var gaugeData1 = [{
      value: metascore,
      type: "indicator",
      mode: "gauge+number",
      title: {text: "<b> Original Rating </b> <br></br> Metacritic Rating"},
      gauge: {
        axis: {range: [null,100], dtick: "20"},

        bar: {color: "black"},
        steps:[
          {range: [0, 20], color: "red"},
          {range: [20, 40], color: "orange"},
          {range: [40, 60], color: "yellow"},
          {range: [60, 80], color: "lightgreen"},
          {range: [80, 100], color: "green"}
        ],
        dtick: 20
    }}];
    
    // Create the layout for the gauge chart.
    var gaugeLayout1 = { 
      automargin: true
    };

    // Use Plotly to plot the gauge data and layout.
    Plotly.newPlot("gauge1", gaugeData1, gaugeLayout1);

    // Create a variable that filters the metadata array for the object with the desired sample number.
    var albuminfo = data.map(person =>
        person).sort((a,b) => b - a);
    var gaugeArray = albuminfo.filter(albumObj => albumObj.title == album);

    // Create a variable that holds the first sample in the metadata array.
    var gaugeResult = gaugeArray[0];

    // Create a variable that holds the washing frequency.
    var user_score = gaugeResult.user_score;
    console.log(user_score)
   
    // Create the trace for the gauge chart.
    var gaugeData2 = [{
      value: user_score,
      type: "indicator",
      mode: "gauge+number",
      title: {text: "<b> User Rating </b> <br></br> User Rating Average"},
      gauge: {
        axis: {range: [null,100], dtick: "20"},

        bar: {color: "black"},
        steps:[
          {range: [0, 20], color: "red"},
          {range: [20, 40], color: "orange"},
          {range: [40, 60], color: "yellow"},
          {range: [60, 80], color: "lightgreen"},
          {range: [80, 100], color: "green"}
        ],
        dtick: 20
    }}];
    
    // Create the layout for the gauge chart.
    var gaugeLayout2 = { 
      automargin: true
    };

    // Use Plotly to plot the gauge data and layout.
    Plotly.newPlot("gauge2", gaugeData2, gaugeLayout2)
  });
}
