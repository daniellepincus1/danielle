let mapMarkers = [ 
   
  { 
    "latlng": [42.35908295, -71.06764181],
    "name": "Boston African American National Historic Site"
  
 
  },

  {
    "latlng": [41.8775792791768, -71.3824339450125],
    "name": "Blackstone River Valley National Historical Park"
  
  },

  {
    "latlng": [42.646121879126234, -71.32047817138178],
    "name": "Lowell National Historical Park"
  },

]
  let zoomLevel = 9;

 
  

  let map = L.map('map_container').setView(mapMarkers[0].latlng, zoomLevel);
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',{
  attribution:'© OpenStreetMap'
  }).addTo(map);


  mapMarkers.forEach(function(markerData){
    let myMarker = L.marker(markerData.latlng).addTo(map);
    myMarker.bindPopup(markerData.name);
   
   
}) 



/*
    "description": "Centered on the north slope of Beacon Hill, the African American community of 19th century Boston led the city and the nation in the fight against slavery and injustice. These remarkable men and women, together with their allies, were leaders in the Abolition Movement, the Underground Railroad, the Civil War, and the early struggle for equal rights and education."
 
     
}) 

    "description": "The Blackstone River powered America's entry into the Age of Industry. The success of Samuel Slater's cotton spinning mill in Pawtucket, RI touched off a chain reaction that changed how people worked and where they lived, and continues to reverberate across the nation to this day. Come visit and see how this revolution transformed the landscape of the Blackstone Valley and then the United States."
       
  

  "description": "Discover the Continuing Revolution. Lowells water-powered textile mills catapulted the nation including immigrant families and early female factory workers – into an uncertain new industrial era. Nearly 200 years later, the changes that began here still reverberate in our shifting global economy. Explore Lowell, a living monument to the dynamic human story of the Industrial Revolution."
  
  */
