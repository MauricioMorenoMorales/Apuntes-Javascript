const XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest,
     API = 'http://rickandmortyapi.com/api/character/'

const fetchData = (url) => {
     return new Promise((resolve, reject) => {
          const xhttp = new XMLHttpRequest();
          xhttp.open('GET', url);
          xhttp.onreadystatechange = (event) => {
               if(xhttp.readyState === 4){
                    (xhttp.status === 200)
                         ? resolve(JSON.parse(xhttp.responseText))
                         : reject(new Error('Error: ' + url))
               }
          }
          xhttp.send();
     })
}

const fetchRick = async (url) => {
     try{
          const data = await fetchData(url)
          const character = await fetchData(`${url}${data.results[0].id}`)
          const origin = await fetchData(character.origin.url)

          console.log(data.info.count);
          console.log(character.name);
          console.log(origin.dimension)
     }catch(error){
          console.log(error)
     }
}

fetchRick(API)