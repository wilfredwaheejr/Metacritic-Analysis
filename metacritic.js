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


    