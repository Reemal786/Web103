const express = require("express");
const path = require("path");
const movies = require("./data/movies");

const app = express();
const PORT = 3000;

app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "index.html"));
});

// Returns ALL movies
app.get("/api/movies", (req, res) => {
    res.json(movies);
});

// Returns ONE movie based on its ID
app.get("/api/movies/:id", (req, res) => {
    const movie = movies.find((movie) => movie.id === req.params.id);

    if (!movie) {
        return res.status(404).json({ message: "Movie not found" });
    }

    res.json(movie);
});

// Displays the individual movie page
app.get("/movies/:id", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "movie.html"));
});

app.use((req, res) => {
    res.status(404).sendFile(
        path.join(__dirname, "public", "404.html")
    );
});


app.listen(PORT, () => {
    console.log(`Movie Night server running at http://localhost:${PORT}`);
});