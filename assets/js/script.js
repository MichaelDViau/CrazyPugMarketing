

    // Make a request to the API to get the user's location
    fetch('https://api.ipdata.co?api-key=61a9e60a3fb63f7f5d4b0e701adacac023bf26c99fec32c0442afffe')
    .then(response => response.json())
    .then(data => {
      let recommendation;
      // Check the user's country and region
      if(data.country_code === 'CA' && data.region !== 'QC'){
        recommendation = "English";
        // Add a class to the English button
        document.getElementById("english").classList.add("recommendation");
      } else if(data.country_code === 'CA' && data.region === 'QC'){
        recommendation = "French";
        // Add a class to the French button
        document.getElementById("french").classList.add("recommendation");
      } else if(data.country_code === 'US'){
        recommendation = "English";
        // Add a class to the English button
        document.getElementById("english").classList.add("recommendation");
      }else if(data.country_code === 'MX'){
        recommendation = "Spanish";
        // Add a class to the Spanish button
        document.getElementById("spanish").classList.add("recommendation");
      } else {
        recommendation = "";
      }
      // Create a new element to display the recommendation
      let rec = document.createElement("p");
      rec.innerHTML = "Based on your location, we recommend using our site in: " + recommendation;
      rec.style.textAlign = "center";
      // insert the recommendation at the top of the page
      document.body.insertBefore(rec, document.getElementById("language-selector"));
    })
    .catch(error => {
      console.error(error);
    });
  
    window.onload = function() {
        // Show the language selector
        document.getElementById("language-selector").style.display = "block";
    }

