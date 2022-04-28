const ol = document.querySelector("ol")
const movies = [
    {
        name: "Big Hero 6",
        year: "2014",
        director: "Chris Williams and Don Hall",
        picture: "https://m.media-amazon.com/images/I/91neoLOIftL._AC_SY679_.jpg"
    },
    {
        name: "Tangled",
        year: "2010",
        director: "Byron Howard and Nathan Greno",
        picture: "https://m.media-amazon.com/images/I/71-qC7IDkQL._AC_SY679_.jpg"
    },
    {
        name: "Coco",
        year: "2017",
        director: "Adrian Molina and Lee Unkrich",
        picture: "https://m.media-amazon.com/images/I/A1tyD0nKdhL._AC_SY679_.jpg"
    }
];
const template = movies.map(movie => `
<li>
    <p>Name: ${movie.name}</p>
    <p>Year: ${movie.year}</p>
    <p>Director: ${movie.director}</p>
    <p><img src=${movie.picture} width=500 height=500></p>
</li>
`);

ol.innerHTML = template.join('');
