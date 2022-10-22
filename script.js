$('.search-button').on('click', function() {
    $.ajax({
        url: 'http://www.omdbapi.com/?apikey=611282e&s=' + $('.input-key').val(),
        success: result => {
            const movies = result.Search;
            let card = '';
    
            movies.forEach(e => {
                card += showCards(e);
            });
            $('.movie-container').html(card);
    
            // Ketika tombol detail diklik
            $('.modal-detail-button').on('click', function() {
                $.ajax({
                    url: `http://www.omdbapi.com/?apikey=611282e&i=`+ $(this).data('imdbid'),
                    success: m => {
                        const movieDetail = showMovieDetail(m);
                $('.modal-body').html(movieDetail);
                    },
    
                error: (e) => {console.log(e.responseText);}
                });
            });
        },
        error: (e) => {
            console.log(e.responseText)
        }
    });
})

function showCards(e) {
    return `<div class="col-sm-4 my-3">
                <div class="card">
                    <img src="${e.Poster}" class="card-img-top" alt="No image">
                    <div class="card-body">
                      <h5 class="card-title">${e.Title}</h5>
                      <p class="card-text text-muted">${e.Year}</p>
                      <a href="#" class="btn btn-danger modal-detail-button" data-bs-toggle="modal" data-bs-target="#movieDetailModal" data-imdbid="${e.imdbID}">Show Details</a>
                    </div>
                </div>
            </div>`
}

function showMovieDetail(m) {
    return `<div class="container-fluid">
                    <div class="row">
                        <div class="col-sm-4">
                            <img src="${m.Poster}" alt="">
                        </div>
                        <div class="col">
                            <ul class="list-group">
                                <li class="list-group-item "><h4>${m.Title} (${m.Year})</h4></li>
                                <li class="list-group-item text-muted">Released Date: ${m.Released}</li>
                                <li class="list-group-item text-muted">Movie Duration: ${m.Runtime}</li>
                                <li class="list-group-item text-muted">Genre: ${m.Genre} </li>
                                <li class="list-group-item text-muted">Actors:
                                 ${m.Actors}</li>
                                <li class="list-group-item text-muted">Plot: ${m.Plot}</li>
                              </ul>
                        </div>
                    </div>
                </div>`
}


// http://www.omdbapi.com/?apikey=611282e&i=


























