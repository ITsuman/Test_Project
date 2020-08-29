  getItem =  (key) => {
    const myHeaders = new Headers({
        "Content-Type": "application/json",
        Accept: "application/json"
      });
      if(key.indexOf('bed') > -1) {
          console.log('bed');
          return fetch("http://localhost:5000/bed_room", {
            headers: myHeaders,
      
          })
      }
      else if(key.indexOf('liv') > -1) {
        return fetch("http://localhost:5000/living_room", {
            headers: myHeaders,
      
          })  
      }
      else return fetch("http://localhost:5000/living_room", {
        headers: myHeaders,
  
      })  
}

