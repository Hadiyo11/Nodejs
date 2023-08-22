const express = require("express");
const app = express()

let persons = [
    { 
      "id": 1,
      "name": "Arto Hellas", 
      "number": "040-123456"
    },
    { 
      "id": 2,
      "name": "Ada Lovelace", 
      "number": "39-44-5323523"
    },
    { 
      "id": 3,
      "name": "Dan Abramov", 
      "number": "12-43-234345"
    },
    { 
      "id": 4,
      "name": "Mary Poppendieck", 
      "number": "39-23-6423122"
    }
];

// const generateId = ()=>{
//   const maxId = persons.length > 0 ? Math.max(...persons.map(n=> n.id)) : 0
// return maxId + 1
// }

app.get("/", (request, response)=>{
    response.send("<h1>These are my contacts</h1>")
});
app.get("/api/persons",(request, response)=>{
const body = request.body

// if (!body.content){
//   return response.status(400).json({
//     error: 'content is missing'
//   })
// }

// const person = {
// content: body.content,
// important: body.important || false,
// id: generateId(),
// }

// persons = persons.concat(person)

    response.json(persons);
});
app.get("/info",(request, response)=>{
  response.send("<h1>Phonebook has info for 2 people</h1><br/><h1>Sat Jan 22 2022 22:27:20 GMT+0200(Eastern European Standard Time</h1>")
})

const port = 3001;
app.listen(port, ()=>{
    console.log(`Server is running on port: ${port}`);
});
