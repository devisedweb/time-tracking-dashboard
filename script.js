fetch("./data.json")
  .then((Response) => {
    if (!Response.ok) return console.log("Oops! Something went wrong.");

    return Response.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.error(`Could not get data: ${error}`);
  });
