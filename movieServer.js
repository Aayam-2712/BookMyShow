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
        img: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@star-icon-202203010609.png,ox-24,oy-615,ow-29:ote-OS8xMCAgMTExLjNLIHZvdGVz,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00343918-bcrtrqpgtc-portrait.jpg",
        ratings: 9,
        votes: "111.3k",
        likes: ""
    },
    {
        id: 2,
        title : "X Fast",
        img: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@like_202006280402.png,ox-24,oy-617,ow-29:ote-MjE1LjZLIGxpa2Vz,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00122562-cevyywlfvl-portrait.jpg",
        ratings: "",
        votes: "",
        likes: "215.6K"
    },
    {
        id: 3,
        title : "GUARDIAN OF THE GALAXY",
        img: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@star-icon-202203010609.png,ox-24,oy-615,ow-29:ote-OS4zLzEwICAyNi45SyB2b3Rlcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00310794-nmwukaluxy-portrait.jpg",
        ratings: 9.3,
        votes: "26.9K",
        likes: ""
    },
    {
        id: 4,
        title : "IB71",
        img: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@like_202006280402.png,ox-24,oy-617,ow-29:ote-MjQuM0sgbGlrZXM%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00312966-aldflcvftk-portrait.jpg",
        ratings: "",
        votes: "",
        likes: "24.3K"
    },
    {
        id: 5,
        title : "JODI",
        img: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@star-icon-202203010609.png,ox-24,oy-615,ow-29:ote-OS4yLzEwICA0SyB2b3Rlcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00118776-mywkpmneqt-portrait.jpg",
        ratings: 9.2,
        votes: "4K",
        likes: ""
    },
    {
        id: 6,
        title : "CHATRAPATHI",
        img: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@star-icon-202203010609.png,ox-24,oy-615,ow-29:ote-Ny8xMCAgNy4xSyB2b3Rlcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00355873-ykrbqmsrdb-portrait.jpg",
        ratings: 7,
        votes: "7.1K",
        likes: ""
    },
    {
        id: 7,
        title : "LOVE AGAIN",
        img: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@star-icon-202203010609.png,ox-24,oy-615,ow-29:ote-Ny40LzEwICAxLjFLIHZvdGVz,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00352714-lzrvetqava-portrait.jpg",
        ratings: 7.4,
        votes: "1.1K",
        likes: ""
    },
    {
        id: 8,
        title : "EVIL DEAD RISE",
        img: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@star-icon-202203010609.png,ox-24,oy-615,ow-29:ote-Ny4xLzEwICAyNi43SyB2b3Rlcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00349309-ynqvrxxagk-portrait.jpg",
        ratings: 7.1,
        votes: "26.7K",
        likes: ""
    },
]


const cinemas = [
    {
      name: "PVR Logix City Centre",
      address: "2nd Floor, Logix City Centre Mall, Sector 32, Near Sector 34 Metro Station, Noida, Uttar Pradesh",
      showtimes: ["7:00 AM", "10:00 AM", "1:00 PM", "4:00 PM", "7:00 PM", "10:00 PM" ],
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