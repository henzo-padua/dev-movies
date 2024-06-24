import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"

import { Button } from "../../components/Button"
import { Slider } from "../../components/Slider"
import { getImages } from "../../utils/getimages"
import { Modal } from "../../components/Modal"

import { Bacground, Info, Poster, Container, ContainerButtons } from "./styles"
import { getMovies, getpopularSeries, gettopMovies, gettopPeople, gettopSeries, getMovieComun } from "../../services/getData"

export function Home() {
    const [showModal, setShowModal] = useState(false)
    const [movie, setMovie] = useState()
    const [movieComun, setMovieComun] = useState()
    const [topMovies, setTopMovies] = useState()
    const [topSeries, setTopSeries] = useState()
    const [popularSeries, setpopularSeries] = useState()
    const [topPeople, setTopPeople] = useState()
    const navigate = useNavigate()

    useEffect(() => {
        async function getAllData() {

            Promise.all([
                getMovies(),
                getMovieComun(),
                gettopMovies(),
                gettopSeries(),
                getpopularSeries(),
                gettopPeople()
            ])
                .then(([movie, movieComun, topMovies, topSeries, popularSeries, topPeople]) => {
                    setMovie(movie)
                    setMovieComun(movieComun)
                    setTopMovies(topMovies)
                    setTopSeries(topSeries)
                    setpopularSeries(popularSeries)
                    setTopPeople(topPeople)
                })
                .catch((error) => console.error(error))
        }

        getAllData()
    }, [])

    return (
        <>
            {movie && (
                <Bacground img={getImages(movie.backdrop_path)}>
                    {showModal && <Modal movieId={movie.id} setShowModal={setShowModal} />}
                    <Container>
                        <Info>
                            <h1>{movie.title}</h1>
                            <p>{movie.overview}</p>
                            <ContainerButtons>
                                <Button red onClick={() => navigate(`/detalhe/${movie.id}`)}>Assita Agora</Button>
                                <Button onClick={() => setShowModal(true)} >Assita o trailer</Button>
                            </ContainerButtons>
                        </Info>
                        <Poster>
                            <img alt='capa-do-filme' src={getImages(movie.poster_path)} />
                        </Poster>
                    </Container>
                </Bacground >
            )
            }
            {movieComun && <Slider info={movieComun} title={'Filmes'} />}
            {topMovies && <Slider info={topMovies} title={'Top Filmes'} />}
            {topSeries && <Slider info={topSeries} title={'Top Séries'} />}
            {popularSeries && <Slider info={popularSeries} title={'Séries Populares'} />}
            {topPeople && <Slider info={topPeople} title={'Top Artista'} />}
        </>
    )
}

