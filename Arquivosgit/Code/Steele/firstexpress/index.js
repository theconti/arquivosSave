import express from "express";
const app = express();

/* method called app.use handles all requests coming in (post or get):

app.use((request, response) => {
  console.log("We got a new request");
  console.dir(request);
  console.log("");
  console.dir(response);
  response.send();
}); 

*/
app.listen(8000, () => {
  console.log("Listening on port 8000");
});
//after this we listen to requests, but we have no responses

/* each http request has data and express parses part of that data into those two objects. Every incoming request gives access to 2 objects (request and response, often called: (req, res)): try console.dir(req)
 */
app.get("/", (request, response) => {
  response.send("this is the home adress");
});

/* generic pattern, subreddit has millions of paths, you dont create
each of them individually. */

app.get("/r/:subreddit", (request, response) => {
  //express constructs an object called params
  console.log(request.params);
  const { subreddit: subredditTitle } = request.params;
  response.send(`<h1>This is the ${subredditTitle} subreddit</h1>`);
});

app.get("/r/:subreddit/:postId", (request, response) => {
  console.log(request.params);
  const { subreddit: subredditTitle, postId: subTitle } =
    request.params;
  response.send(
    `<h1>This is the post id:${subTitle} on the ${subredditTitle} subreddit</h1>`
  );
});

//query
app.get("/search", (request, response) => {
  const { q: query } = request.query;
  console.log(request.query);
  if (!query) {
    response.send("Nothing found if nothing searched!");
  }

  response.send(`<h1>Here are the search results for ${query}</h1>`);
});

app.get("/lion", (request, response) => {
  response.send("waaaaaarrrw");
});

app.get("/cow", (request, response) => {
  response.send("muuuuuuuu");
});

app.get("*", (request, response) => {
  response.send("I don't know this path!");
});
