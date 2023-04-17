function init() {
    var selector = d3.select("#selDataset");
  
    d3.json("adjusted_music_scores.json").then(function(data){
      albumNames = data.map(person =>
        person.title).sort((a,b) => b - a);
      albumNames.forEach((album) => {
        selector
          .append("option")
          .text(album)
          .property("value", album);
      });
  })}
  
  init();