// async function getData() {
//     // Simulate getting data from a server
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(455)
//         }, 3500);
//     })
// }

// settle means resolve or reject

// resolve means promise has settled successfully
// resolve means promise has not settled successfully

async function getData() {
    // Simulate getting data from a server
    // let x = await fetch('https://jsonplaceholder.typicode.com/todos/1')

    let x = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({
            title: 'foo',
            body: 'bar',
            userId: 1,
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })

    let data = await x.json()
    return data
        // .then(response => response.json())
        // .then(json => console.log(json))
}

async function main(){

    console.log("Loading modules");

    console.log("Do something else");

    console.log("Load data");

    let data = await getData()

    console.log(data);

    console.log("process data");

    console.log("task 2");

}

main()

// data.then((v) => {

//     console.log(data);

//     console.log("process data");

//     console.log("task 2");
// })


// GET is used to request data from a specified resource.
// example - downloading a file
// GET requests can be cached
// GET requests remain in the browser history
// GET requests can be bookmarked
// GET requests should never be used when dealing with sensitive data
// GET requests have length restrictions
// GET requests are only used to request data (not modify)


// POST is used to send data to a server to create/update a resource.
// example - submitting a form
// POST requests are never cached
// POST requests do not remain in the browser history
// POST requests cannot be bookmarked
// POST requests have no restrictions on data length

// PUT is used to send data to a server to create/update a resource.
// The difference between POST and PUT is that PUT requests are idempotent. That is, calling the same PUT request multiple times will always produce the same result. In contrast, calling a POST request repeatedly have side effects of creating the same resource multiple times.

// The DELETE method deletes the specified resource.

// The OPTIONS method describes the communication options for the target resource.

// const request = new Request("https://example.org/post", {
//     method: "POST",
//     body: JSON.stringify({ username: "example" }),
//   });
  
//   const response1 = await fetch(request);
//   console.log(response1.status);
  
//   // Will throw: "Body has already been consumed."
//   const response2 = await fetch(request);
//   console.log(response2.status);