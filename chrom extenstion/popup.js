// const fetchButton = document.getElementById('fetch-button');

// fetchButton.addEventListener('click', () => {
//   chrome.runtime.sendMessage({ action: 'fetch-data' });
// });


const getKey = () => localStorage.getItem('key')

document.getElementById('fetch-button').onclick = () => {
  var myHeaders = new Headers();
  myHeaders.append("Host", "api.openai.com");
  myHeaders.append("User-Agent", "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:109.0) Gecko/20100101 Firefox/110.0");
  myHeaders.append("Accept", "*/*");
  myHeaders.append("Accept-Language", "en-US,en;q=0.5");
  myHeaders.append("Referer", "https://platform.openai.com/");


  //  token 
  myHeaders.append("Authorization", "your token");



  myHeaders.append("Openai-Organization", "org-Gsoc2C7qvYINUdELj2qPcUBZ");
  myHeaders.append("Origin", "https://platform.openai.com");
  myHeaders.append("Sec-Fetch-Dest", "empty");
  myHeaders.append("Sec-Fetch-Mode", "cors");
  myHeaders.append("Sec-Fetch-Site", "same-site");
  myHeaders.append("Te", "trailers");
  
  var requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow'
  };
  
  fetch("https://api.openai.com/dashboard/billing/credit_grants", requestOptions)
    .then(response => response.json())
    .then(result => {
      document.querySelector('#used').innerText = result['total_used']
      document.querySelector("#available").innerText = result['total_available']
      document.querySelector("#granted").innerText = result['total_granted']
      console.log(result['total_available' ])
      console.log(result['total_granted'])
      console.log()
      // console.log(result[ 'data' ]['total_available'])
      // console.log(result[ 'data' ]['total_granted'])
      // console.log(result[ 'data' ]['total_used'])
    })
    .catch(error => console.log('error', error));
}