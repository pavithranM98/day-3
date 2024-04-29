// Fetch data from the REST Countries API
fetch('https://restcountries.com/v3.1/all')
  .then(response => response.json())
  .then(data => {
    // Display country names and flags in the console
    data.forEach(country => {
      console.log(`Country: ${country.name.common}`);
      console.log(`Flag: ${country.flags.png}`);
      console.log('-------------------');
    });
  })
  .catch(error => console.error('Error fetching data:', error));
