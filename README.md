# Note-Taker

This application can be used to write, save, and delete notes, and uses an express backend to save and retrieve saved notes to local storage from a JSON file using the fs Node module. 

![notes1](https://user-images.githubusercontent.com/61606793/85326784-aed27e00-b482-11ea-92cb-31ae199361c8.png)

The application uses 3 API routes: 
  1) a route to READ the db.json file and return all saved notes in JSON format
  2) a route to RECEIVE new note requests, add them to the db.json file, and return (POST) them to the client
  3) a route to RECEIVE new delete requests based on unique note ID's, and re-render the notes list.
  
![routes](https://user-images.githubusercontent.com/61606793/85326850-c7db2f00-b482-11ea-9627-a2c00be425f4.png)

When the application is listening on PORT 8090, it can be viewed at: localhost:8090.

![localhost](https://user-images.githubusercontent.com/61606793/85326932-ed683880-b482-11ea-9402-62f45e469734.png)

The finished application has been deployed to Heroku and can be accessed at: https://radiant-temple-08714.herokuapp.com/

![todo](https://user-images.githubusercontent.com/61606793/85327438-ccecae00-b483-11ea-95a6-7992c2c9d0c5.png)
