import { RestApi } from './core/restApi.class'

const xRest: RestApi = new RestApi({
    apiRestUrl: 'https://jsonplaceholder.typicode.com', 
    activeLog: true,
    xhrDebug: false
});

console.log('restApi2')


xRest.getUsers().subscribe();