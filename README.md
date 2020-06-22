# Note-Taker

This application can be used to write, save, and delete notes, and uses an express backend to save and retrieve saved notes from a JSON file using the fs Node module. 

The application uses 3 API routes: 
  1) a route to READ the db.json file and return all saved notes in JSON format
  2) a route to RECEIVE new note requests, add them to the db.json file, and return (POST) them to the client
  3) a route to RECEIVE new delete requests based on unique note ID's, and re-render the notes list.
  
