document.addEventListener('DOMContentLoaded', () => {
    const movieGrid = document.querySelector('#movieGrid');
    const searchInput = document.getElementById('searchInput');
    let allMovies = [];

    const loadMovies = () => {
        const xhr = new XMLHttpRequest();
        xhr.open('GET', 'movies.json', true);

        xhr.onload = function () {
            if (this.status === 200) {
                const movies = JSON.parse(this.responseText);

                allMovies = movies;

                // verificam localStorage pt filme salvate
                const savedSearch = localStorage.getItem('lastSearch');
                if (savedSearch) {
                    searchInput.value = savedSearch;
                    const searchString = savedSearch.toLowerCase();
                    const filteredMovies = allMovies.filter(movie => {
                        return movie.title.toLowerCase().includes(searchString);
                    });
                    displayMovies(filteredMovies);
                } else { // daca e prima vizita
                    displayMovies(movies);
                }
            }
        }
        xhr.send();
    }

    const displayMovies = (movies) => {
        movieGrid.innerHTML = ''; //golim zona de filme

        if (movies.length === 0) { // daca nu sunt filme gasite
            movieGrid.innerHTML = '<p>Nu s-au găsit filme</p>';
            return;
        }

        // iteram prin toate si le afisam
        movies.forEach(movie => {
            const card = document.createElement('div');
            card.className = 'movie-card';

            const image = document.createElement('img');
            image.src = movie.image;
            image.alt = movie.title;
            image.className = 'movie-poster';

            const info = document.createElement('div');
            info.className = 'movie-info';

            const title = document.createElement('h3');
            title.className = 'movie-title';
            title.textContent = movie.title;

            const year = document.createElement('span');
            year.className = 'movie-year';
            year.textContent = movie.year;

            const rating = document.createElement('span');
            rating.className = 'movie-rating';
            rating.textContent = movie.rating;

            info.appendChild(title);
            info.appendChild(year);
            info.appendChild(rating);
            card.appendChild(image);
            card.appendChild(info);

            movieGrid.appendChild(card);
        });
    }


    searchInput.addEventListener('keyup', (e) => {
        const searchString = e.target.value.toLowerCase();
        localStorage.setItem('lastSearch', e.target.value);

        const filteredMovies = allMovies.filter(movie => {
            return movie.title.toLowerCase().includes(searchString);
        });

        displayMovies(filteredMovies);
    });

    document.getElementById('exploreBtn').addEventListener('click', () => {
        document.querySelector('.search-section').scrollIntoView({
            behavior: 'smooth'
        });
    });

    document.getElementById('luckBtn').addEventListener('click', () => {
        if (allMovies.length > 0) {
            // folosim math.random() pt a alege un index random
            const randomIndex = Math.floor(Math.random() * allMovies.length);
            const randomMovie = allMovies[randomIndex];

            // stergem inputul de cautare pt a nu ne incurca
            searchInput.value = '';

            // afisam doar filmul random
            displayMovies([randomMovie]);
        }
    });

    loadMovies();
});
