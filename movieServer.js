var express = require("express");
var app = express();
app.use(express.json());
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, , authorization"
  );
  res.header("Access-Control-Allow-Methods", "GET,POST,DELETE,PUT,OPTIONS");
  next();
});

// const port = 2450;
var port= process.env.PORT||2410;
app.listen(port, () => console.log(`Listening on ${port}!`));


const movies = [
  {
      id: 1,
      title : "The KERALA Story",
      img: "https://m.media-amazon.com/images/M/MV5BNTdlNmQ1NzUtYjExMC00MzZjLWE0Y2EtMWQ5NDNjMTdkYzEwXkEyXkFqcGdeQXVyMTUyNjIwMDEw._V1_.jpg",
      ratings: 9,
      votes: "111.3k",
      likes: "",
      languages: "Hindi",
      genre: "Drama",
      format: "2D",
  },
  {
      id: 2,
      title : "X Fast",
      img: "https://m.media-amazon.com/images/M/MV5BNzZmOTU1ZTEtYzVhNi00NzQxLWI5ZjAtNWNhNjEwY2E3YmZjXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_QL75_UX190_CR0,10,190,281_.jpg",
      ratings: "",
      votes: "",
      likes: "215.6K",
      languages: "Hindi",
      genre: "Adventure",
      format: "3D",
  },
  {
      id: 3,
      title : "GUARDIAN OF THE GALAXY",
      img: "https://m.media-amazon.com/images/M/MV5BNDIzMTk4NDYtMjg5OS00ZGI0LWJhZDYtMzdmZGY1YWU5ZGNkXkEyXkFqcGdeQXVyMTI5NzUyMTIz._V1_.jpg",
      ratings: 9.3,
      votes: "26.9K",
      likes: "",
      languages: "English",
      genre: "Action",
      format: "4DK",
  },
  {
      id: 4,
      title : "IB71",
      img: "https://upload.wikimedia.org/wikipedia/en/a/a3/IB71_film_poster.jpg",
      ratings: "",
      votes: "",
      likes: "24.3K",
      languages: "English",
      genre: "Thriller",
      format: "2D",
  },
  {
      id: 5,
      title : "JODI",
      img: "https://m.media-amazon.com/images/M/MV5BZTI2MDAyMjAtMGZkZC00ZDVjLWI1YWYtMDI0OWIzYjkyZGFlXkEyXkFqcGdeQXVyMTUzNTgzNzM0._V1_.jpg",
      ratings: 9.2,
      votes: "4K",
      likes: "",
      languages: "Hindi",
      genre: "Drama",
      format: "2D",
  },
  {
      id: 6,
      title : "CHATRAPATHI",
      img: "https://static.tnn.in/thumb/msid-100192831,thumbsize-45634,width-1280,height-720,resizemode-75/100192831.jpg",
      ratings: 7,
      votes: "7.1K",
      likes: "",
      languages: "Marathi",
      genre: "Adventure",
      format: "3D",
  },
  {
      id: 7,
      title : "LOVE AGAIN",
      img: "https://m.media-amazon.com/images/M/MV5BODc0ZDM3MjgtNDA5ZC00MWUwLWJmM2ItMjBmM2YzMjBmNzRkXkEyXkFqcGdeQXVyMTA3MDk2NDg2._V1_.jpg",
      ratings: 7.4,
      votes: "1.1K",
      likes: "",
      languages: "Hindi",
      genre: "Adventure",
      format: "3D",
  },
  {
      id: 8,
      title : "EVIL DEAD RISE",
      img: "https://m.media-amazon.com/images/M/MV5BMmZiN2VmMjktZDE5OC00ZWRmLWFlMmEtYWViMTY4NjM3ZmNkXkEyXkFqcGdeQXVyMTI2MTc2ODM3._V1_.jpg",
      ratings: 7.1,
      votes: "26.7K",
      likes: "",
      languages: "English",
      genre: "Action",
      format: "4DK",
  },
]


const cinemas = [
  {
    name: "PVR Logix City Centre",
    address: "2nd Floor, Logix City Centre Mall, Sector 32, Near Sector 34 Metro Station, Noida, Uttar Pradesh",
    showtimes: ["7:00 AM", "10:00 AM", "1:00 PM", "4:00 PM", "7:00 PM", "10:00 PM" ],
    price: "100-200",
    heartLike : false,
    movies: [
      {
        title: "The KERALA Story",
        totalSeats: 200,
        rowSeats: 20
      },
      {
        title: "X Fast",
        totalSeats: 180,
        rowSeats: 18
      }
    ]
  },
  {
    name: "PVR Superplex, Logix City Centre",
    address: "4th Floor, Logix City Centre Mall, Sector 32, Near Sector 34 Metro Station, Noida, Uttar Pradesh",
    showtimes: ["8:30 AM", "11:30 AM", "2:30 PM", "5:30 PM", "8:30 PM"],
    price: "200-300",
    heartLike : false,
    movies: [
      {
        title: "The KERALA Story",
        totalSeats: 220,
        rowSeats: 22
      },
      {
        title: "X Fast",
        totalSeats: 190,
        rowSeats: 19
      }
    ]
  },
  {
    name: "PVR DLF Mall of India",
    address: "Plot No. M-03, Sector 18, Near Noida Sector 18 Metro Station, Noida, Uttar Pradesh",
    showtimes: ["7:45 AM", "10:45 AM", "1:45 PM", "4:45 PM"],
    price: "300-400",
    heartLike : false,
    movies: [
      {
        title: "The KERALA Story",
        totalSeats: 250,
        rowSeats: 25
      },
      {
        title: "X Fast",
        totalSeats: 210,
        rowSeats: 21
      }
    ]
  },
  {
    name: "PVR Wave Mall",
    address: "Wave Mall, Sector 18, Noida, Uttar Pradesh",
    showtimes: ["7:15 AM", "11:15 AM", "2:15 PM", "5:15 PM"],
    price: "400-500",
    heartLike : false,
    movies: [
      {
        title: "The KERALA Story",
        totalSeats: 180,
        rowSeats: 18
      },
      {
        title: "X Fast",
        totalSeats: 170,
        rowSeats: 17
      }
    ]
  }
]


const users = [
  {
      id: 1,
      email: "bob@gmail.com",
      password : "Bob1234",
      married: "No",
      gender: "Male",
      firstName: "Bob",
      lastName: "David",
      mobile: 5412589632,
    },
    {
      id: 2,
      email: "jack@gmail.com",
      password : "Jack1234",
      married: "Yes",
      gender: "Male",
      firstName: "Jack",
      lastName: "Smith",
      mobile: 8745698521,
    },
]

let bookedSeat = [];

app.get("/users", function(req,res) {
res.send(users);
});


app.post("/userDetails", function(req,res) {
let body = req.body;
console.log("Post user body : ",body);
let index = users.findIndex((u1) => u1.email === body.email);
users[index] = body;
res.send("Details Updated");
})


app.post("/bookedMovie", function(req,res) {
console.log("BookedMovie");
console.log("body BookedMovie : ",req.body);
let data = req.body;
// let data1 = JSON.parse(data);
bookedSeat.push(data);
console.log("BookedSeat :", bookedSeat);
})

app.get("/bookedMovie", function(req,res) {
res.send(bookedSeat);
})


app.post("/login", function (req, res) {
  console.log("LOgin");
  console.log("body : ",req.body);
  let user = users.find((u1) => u1.email === req.body.email && u1.password === req.body.password);
  console.log(user);
  let resObj = null;
  if (user != undefined) {
      resObj = {
          id: user.id,
          email: user.email,
      };
      res.status(200).send(resObj);
  } 
  else res.status(500).send("Login Unsuccessful");
});



app.get("/movies", (req, res) => {
  res.send(movies);
});



app.get("/cinemas", (req, res) => {
  res.send(cinemas);
});

