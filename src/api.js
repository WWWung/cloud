const HOST =process.env.NODE_ENV === 'production' ? 'https://node-douban-api.herokuapp.com' : 'http://localhost:8081';



import axios from 'axios'


export function fetch(url) {

  return new Promise((resolve, reject)=> {
    axios.get(HOST + url)
        .then(response => {
          resolve(response.data);
        })
  })
}


export function resultsHandler(data){
  console.log(data);
}
