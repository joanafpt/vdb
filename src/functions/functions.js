import axios from 'axios';
import axiosRetry from 'axios-retry';
const apiRoot = "https://bdv.glitch.me/api/wines";


const giveMeTheProducers = (callbackProducers) => {
    const producers = 'https://bdv.glitch.me/api/wines/get-producers';
    axiosRetry(axios, { retries: 10});
    axios.get(producers)
    .then(response => {
        //console.log(response.data, ' produtores aqui');
        if (callbackProducers) {
            callbackProducers(response.data);
        }
    })
    .catch(error => {
       // console.log('o erro ao obter os produtores é: ', error);  
        axios.get(producers)
        .then(response => {
            //console.log(response.data);
            if (callbackProducers) {
                callbackProducers(response.data);
            }
        })      
    })


}

const giveMeTheQualities = (callbackQualities) => {
    const qualities = 'https://bdv.glitch.me/api/wines/get-qualities';
    axiosRetry(axios, { retries: 10});
    axios.get(qualities)
    .then(response => {
      // console.log(response.data, ' qualidades aqui');
        if(callbackQualities){
           callbackQualities(response.data);
           
        }
    })
    .catch(error => {
        //console.log('o erro ao obter os produtores é: ', error);  
        axios.get(qualities)
        .then(response => {
         //   console.log(response.data, ' qualidades aqui');
            if(callbackQualities){
                callbackQualities(response.data);
            }
        })      
    })
}

const giveMeTheNames = (callbackNames) => {
    const names = 'https://bdv.glitch.me/api/wines/get-names';
    axiosRetry(axios, { retries: 10});
    axios.get(names)
    .then(response => {
        //console.log(response.data, ' nomes aqui');
        if(callbackNames){
            callbackNames(response.data);
        }
    })
    .catch(error => {
       // console.log('o erro ao obter os nomes é: ', error);  
        axios.get(names)
        .then(response => {
           // console.log(response.data, ' qualidades aqui');
            if(callbackNames){
                callbackNames(response.data);
            }
        })      
    })
}



const completeList = (callback) => {
    axiosRetry(axios, { retries: 6 });
    axios.get(apiRoot + '/get-full-list?fulllist=Enviar')
        .then(response => {
           // console.log(response.data);
            if (callback) {
                callback(response.data);
            }
        })
        .catch(error => {
           // console.log('o erro ao obter a lista COMPLETA é: ', error);     
            axios.get(apiRoot + '/get-full-list?fulllist=Enviar')
            .then(response => {
               // console.log(response.data, ' qualidades aqui');
                if(callback){
                    callback(response.data);
                }
            })    
        })
}


const searchByProducerWithDropdown = (producer, callback) => {
        const query = '?prod=';
        const url = apiRoot + '/list-by-producer/' + query + encodeURIComponent(producer);
        axiosRetry(axios, { retries: 6 });
        axios.get(url)
            .then(response => {          
                if (callback) {
                    callback(response.data);
                }
            })
            .catch(error => {
              //  console.log('o erro ao obter a lista por PRODUTORES é: ', error);   
                axios.get(url)
                .then(response => {          
                    if (callback) {
                        callback(response.data);
                    }
                })   
            })
        
}


const searchByNameWithDropdown = (name, callback) => {
  
    const query = '?wname=';
    const url = apiRoot + '/find-a-wine/' + query + encodeURIComponent(name);
    axiosRetry(axios, { retries: 6 });
    axios.get(url)
        .then(response => {
           // console.log(response.data);
            if (callback) {
                callback(response.data);
            }
        })
        .catch(error => {
            console.log('o erro ao obter a lista por NOMES é: ', error);   
            //repeats call
            axios.get(url)
            .then(response => {
               // console.log(response.data);
                if (callback) {
                    callback(response.data);
                }
            })

        })
    

}


const searchByQualityWithDropdown = (quality, callback) => {
  
    const query = '?qual=';
    const url = apiRoot + '/list-by-type-of-wine/' + query + encodeURIComponent(quality);
    axiosRetry(axios, { retries: 6 });
    axios.get(url)
        .then(response => {
           // console.log(response.data);
            if (callback) {
                callback(response.data);
            }
        })
        .catch(error => {
          //  console.log('o erro ao obter a lista por QUALIDADES é: ', error);   
            //repeats call
            axios.get(url)
            .then(response => {
            //    console.log(response.data);
                if (callback) {
                    callback(response.data);
                }
            })
        })  
}

const functions = { 
    giveMeTheProducers: giveMeTheProducers,
    giveMeTheQualities:giveMeTheQualities,
    giveMeTheNames: giveMeTheNames,
    searchByProducerWithDropdown: searchByProducerWithDropdown,
    searchByNameWithDropdown: searchByNameWithDropdown,
    searchByQualityWithDropdown:searchByQualityWithDropdown,
    completeList: completeList, 
}
export default functions;
