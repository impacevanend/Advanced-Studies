// Setup
var collection = {
    2548: {
      album: "Slippery When Wet",
      artist: "Bon Jovi",
      tracks: [
        "Let It Rock",
        "You Give Love a Bad Name"
      ]
    },
    2468: {
      album: "1999",
      artist: "Prince",
      tracks: [
        "1999",
        "Little Red Corvette"
      ]
    },
    1245: {
      artist: "Robert Palmer",
      tracks: [ ]
    },
    5439: {
      album: "ABBA Gold"
    }
  };
  
  // Only change code below this line
  function updateRecords(id, prop, value) {
    if(!value){
      delete collection[id][prop];
      return collection;
    }
  
    if(prop !== "traks"){
      collection[id][prop] = value;
    }else{
      if(!collection[id].hasOwnProperty("tracks")) collection[id].tracks = [];
      collection[id].tracks.push(value);
    }
  
    return collection ;
  }
  
  //updateRecords(5439, "tracks", "nuevo");
  //updateRecords(5439, "tracks", "");
  //updateRecords(1245, "tracks", "tres");
  //updateRecords(1245, "tracks", "cuatro");
  
  var value 
  console.log(!value)
  
  
  /*
  Validar si una propiedad está o no.
  hasOwnProperty("");
  console.log(collection[5439].hasOwnProperty("album"))
   */
  
  /*
  Como crear una nueva propiedad:
  
  console.log(collection[5439])
  console.log(collection[5439].tracks = [])
  console.log(collection[5439])
  console.log(collection[5439].tracks.push("Primero"))
  console.log(collection[5439])
  console.log(collection[5439].tracks.push("Segundo"))
  console.log(collection[5439])
  */
  /* 
  Eliminar una propiedad:
  
  console.log(collection[5439])
  console.log(collection[5439].tracks = "")
  console.log(collection[5439])
  console.log(delete collection[5439].tracks)
  console.log(collection[5439])
  */
  
  // Alter values below to test your code
  //updateRecords(5439, "artist", "ABBA");
  