import express from "express";

const app = express();

const projects = [
  {
    id: 1,
    title: "Portfolio Website",
    category: "nextjs",
    image: "/assets/portfolioweb.png",
    likes: 34,
    description:
      "A dynamic showcase of my web development skills and projects, highlighting seamless user experiences and captivating designs.",
  },
  {
    id: 2,
    title: "E-Commerce Website",
    category: "reactjs",
    image: "/assets/ecomweb.png",
    likes: 25,
    description:
      "An immersive and user-friendly e-commerce platform designed to streamline the online shopping experience and drive sales.",
  },
  {
    id: 3,
    title: "Image API",
    category: "express",
    image: "/assets/imageapiweb.png",
    likes: 18,
    description:
      "A  Image API that empowers developers to effortlessly integrate image processing, and storage functionalities into their applications.       ",
  },
  {
    id: 4,
    title: "RESTfull API",
    category: "express",
    image: "/assets/imageapiweb.png",
    likes: 43,
    description:
      "A  Image API that empowers developers to effortlessly integrate image processing, and storage functionalities into their applications.       ",
  },
  {
    id: 5,
    title: "CMS Website",
    category: "nextjs",
    image: "/assets/portfolioweb.png",
    likes: 54,
    description:
      "A dynamic showcase of my web development skills and projects, highlighting seamless user experiences and captivating designs.",
  },
  {
    id: 6,
    title: "Admin Dashboard",
    category: "reactjs",
    image: "/assets/ecomweb.png",
    likes: 21,
    description:
      "An immersive and user-friendly e-commerce platform designed to streamline the online shopping experience and drive sales.",
  },
];

app.get("/api/projects", (request, response) => {
  response.status(200).json(projects);
});

app.listen(8000, () => {
  console.log("Web service is listening on port 8000 to requests.");
});
