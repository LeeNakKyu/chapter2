// tmdb aipkey
const apiKey = 'b1e9cc20a3528d3b100d6ec2cc19ed0c';

// TMDb에서 최고 평점 영화를 가져오는 함수
function fetchTopRatedMovies() {
    const url = `https://api.themoviedb.org/3/movie/top_rated?language=en-KR&page=1&api_key=${apiKey}`;
    fetch(url)
        .then(response => response.json())
        .then(data => {

            // 영화 데이터를 반복하며 카드를 생성합니다.
            const movieContainer = document.querySelector('.mycards');

            data.results.forEach(movie => {
                const card = document.createElement('div');
                card.className = 'card';


                // 카드 클릭 시 영화 id를 alert로 표시
                card.onclick = function () {
                    alert("영화 id : " + movie.id);
                };



                const image = document.createElement('img');
                image.src = `https://image.tmdb.org/t/p/w300${movie.poster_path}`;


                const cardBody = document.createElement('div');

                const title = document.createElement('h5');

                title.textContent = movie.title;

                const description = document.createElement('p');

                description.textContent = movie.overview;

                cardBody.appendChild(title);
                cardBody.appendChild(description);

                card.appendChild(image);
                card.appendChild(cardBody);

                movieContainer.appendChild(card);
            });
        })

        .catch(error => {
            console.error(error);
        });


}

// 페이지가 로드될 때 최고 평점 영화를 가져오는 함수 호출
fetchTopRatedMovies();




