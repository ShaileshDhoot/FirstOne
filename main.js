// AXIOS GLOBAL 
axios.defaults.headers.common['X-Auth-Token']='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c'

// GET REQUEST
function getTodos() {
    // console.log('GET Request');
    //     axios({
    //         method: 'get',
    //         url: 'https://jsonplaceholder.typicode.com/todos',
    //         params: {
    //             _limit: 5
    //         }
    //     })
    //     .then(res=>showOutput(res))
    //     .catch(err=>console.error(err))
    //}
    //---------*********---------shortening above code

    // axios.get('https://jsonplaceholder.typicode.com/todos?_limit=5')  // used axios.get directly to reduce code, and limit data within url
    //     .then(res=>showOutput(res))
    //     .catch(err=>console.error(err))

    // ----------*****-------------- in axios we dont need to mention get request because it is in default
    // axios('https://jsonplaceholder.typicode.com/todos?_limit=5')
    //     .then(res => showOutput(res))
    //     .catch(err => console.error(err))

    axios('https://jsonplaceholder.typicode.com/todos?_limit=5',{ timeout: 5000})
        .then(res => showOutput(res))
        .catch(err => console.error(err))
}


// POST REQUEST          involves sending data
function addTodo() {
    //     axios({
    //     method: 'post',
    //     url: 'https://jsonplaceholder.typicode.com/todos',
    //    data: {
    //     title: 'New Todo',
    //     completed: false
    //                                                                 // when we submit, click post in browser, id gets automatically generated ,
    //                                                                 /* like this {
    //                                                                     "title": "New Todo",
    //                                                                     "completed": "false",
    //                                                                     "id": 201
    //                                                                     }*/
    //    }
    // })
    // .then(res=>showOutput(res))
    // .catch(err=>console.error(err))

    //------********------- short code
    axios.post('https://jsonplaceholder.typicode.com/todos', {
        title: 'New Todo',
        completed: false
    })
        .then(res => showOutput(res))
        .catch(err => console.error(err))
}


// PUT/PATCH REQUEST
// --> need to include put/patch id in the url , from jasonplaceholder (added-->    /1, in the url)
// notice --> on click put the user id is gone from data, it replaces the data as we present only, but do generate id , automatically
// using put method
function updateTodo() {
    // axios.put('https://jsonplaceholder.typicode.com/todos/1',{
    //     title: 'Updated Todo',
    //     completed: true
    // })
    //     .then(res => showOutput(res))
    //     .catch(err => console.error(err))

    // using patch request
    //-->he in using patch , user id got automatically generated as we seen in put request it ddidnt happen
    //-->this request doesnt completely replace whole data, only just what we want to replace

    axios.patch('https://jsonplaceholder.typicode.com/todos/1',{
        title: 'Updated Todo',
        completed: true
    })
        .then(res => showOutput(res))
        .catch(err => console.error(err))
}

// DELETE REQUEST
// dont need to pass any data, as we are just deleting
// deletes complete data, returns empty object
function removeTodo() {
     axios.delete('https://jsonplaceholder.typicode.com/todos/1')
        .then(res => showOutput(res))
        .catch(err => console.error(err))
}

// SIMULTANEOUS DATA
// can give multiple request at a same time
function getData() {
    axios
    .all([
        axios.get('https://jsonplaceholder.typicode.com/todos?_limit=5'),
        axios.get('https://jsonplaceholder.typicode.com/posts?_limit=5')
    ])
    .then(axios.spread((todos,posts) => showOutput(posts)))
    .catch(err => console.error(err))

    // .then(res => {
    //     console.log(res[0]);
    //     console.log(res[1]);
    //     showOutput(res[1])
    // })
    // .catch(err => console.error(err))
}

// CUSTOM HEADERS
function customHeaders() {
    const config = {
        headers: {
            'content-type': 'application/json',
            Authorization: 'someToken'
        }
    }
    axios.post('https://jsonplaceholder.typicode.com/todos', {
        title: 'New Todo',
        completed: false
    },config)
        .then(res => showOutput(res))
        .catch(err => console.error(err))
}

// TRANSFORMING REQUESTS & RESPONSES
function transformResponse() {
    const options = {
        method: 'post',
        url: 'https://jsonplaceholder.typicode.com/todos',
        data: {
            title: 'Hello World'
        },
        transformResponse: axios.defaults.transformResponse.concat(data =>{
            data.title =data.title.toUpperCase()
            return data
        })
    }
    axios(options).then(res => showOutput(res))
}

// ERROR HANDLING
function errorHandling() {
    axios('https://jsonplaceholder.typicode.com/todoss')
    .then(res => showOutput(res))
    .catch(err => {
        if(err.response){
            // if server responded with a status other than 200 range 
            console.log(err.response.data)
            console.log(err.response.status)
            console.log(err.response.headers)
        }else if (err.request){
            // request was made , but no error
            console.error(err.request);
        }else{
            console.error(err.message);
        }
    })
}

// CANCEL TOKEN
function cancelToken() {
    const source = axios.CancelToken.source()

    axios.get('https://jsonplaceholder.typicode.com/todos',{
        cancelToken: source.token
    })
    .then(res => showOutput(res))
    .catch(thrown =>{
        if(axios.isCancel(thrown)){
            console.log('Request Canceled', thrown.message);
        }
    }) 

    if(true){
        source.cancel('Request Cancel')
    }
}

// INTERCEPTING REQUESTS & RESPONSES
axios.interceptors.request.use(
    config => {
    console.log(`${config.method.toUpperCase()} request sent to ${config.url} at ${new Date().getTime()}`);

    return config
}, error =>{
    return Promise.reject(error)
}
)

// AXIOS INSTANCES
const axiosInstance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com'
})

// axiosInstance.get('/comments').then(res=>showOutput(res))

// Show output in browser
function showOutput(res) {
    document.getElementById('res').innerHTML = `
    <div class="card card-body mb-4">
      <h5>Status: ${res.status}</h5>
    </div>
  
    <div class="card mt-3">
      <div class="card-header">
        Headers
      </div>
      <div class="card-body">
        <pre>${JSON.stringify(res.headers, null, 2)}</pre>
      </div>
    </div>
  
    <div class="card mt-3">
      <div class="card-header">
        Data
      </div>
      <div class="card-body">
        <pre>${JSON.stringify(res.data, null, 2)}</pre>
      </div>
    </div>
  
    <div class="card mt-3">
      <div class="card-header">
        Config
      </div>
      <div class="card-body">
        <pre>${JSON.stringify(res.config, null, 2)}</pre>
      </div>
    </div>
  `;
}

// Event listeners
document.getElementById('get').addEventListener('click', getTodos);
document.getElementById('post').addEventListener('click', addTodo);
document.getElementById('update').addEventListener('click', updateTodo);
document.getElementById('delete').addEventListener('click', removeTodo);
document.getElementById('sim').addEventListener('click', getData);
document.getElementById('headers').addEventListener('click', customHeaders);
document.getElementById('transform').addEventListener('click', transformResponse);
document.getElementById('error').addEventListener('click', errorHandling);
document.getElementById('cancel').addEventListener('click', cancelToken);