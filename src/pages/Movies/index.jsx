import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"

import { Button } from "../../components/Button"
import { Slider } from "../../components/Slider"
import { getImages } from "../../utils/getimages"
import { Modal } from "../../components/Modal"

import { Bacground, Info, Poster, Container, ContainerButtons } from "./styles"
import { gettopMovies, gettopPeople, getMovieComun } from "../../services/getData"

export function Movies() {
    const [showModal, setShowModal] = useState(false)
    const [movieComun, setMovieComun] = useState()
    const [topMovies, setTopMovies] = useState()
    const [topPeople, setTopPeople] = useState()
    const navigate = useNavigate()

    useEffect(() => {
        async function getAllData() {

            Promise.all([
                getMovieComun(),
                gettopMovies(),
                gettopPeople()
            ])
                .then(([movieComun, topMovies, topPeople]) => {
                    setMovieComun(movieComun)
                    setTopMovies(topMovies)
                    setTopPeople(topPeople)
                })
                .catch((error) => console.error(error))
        }

        getAllData()
    }, [])

    return (
        <>
            {topMovies && (
                <Bacground img={getImages(topMovies[0].backdrop_path)}>
                    {showModal && <Modal movieId={topMovies[0].id} setShowModal={setShowModal} />}
                    <Container>
                        <Info>
                            <h1>{topMovies[0].title}</h1>
                            <p>{topMovies[0].overview}</p>
                            <ContainerButtons>
                                <Button red onClick={() => navigate(`/detalhe/${topMovies[0].id}`)}>Assita Agora</Button>
                                <Button onClick={() => setShowModal(true)} >Assita o trailer</Button>
                            </ContainerButtons>
                        </Info>
                        <Poster>
                            <img alt='capa-do-filme' src={getImages(topMovies[0].poster_path)} />
                        </Poster>
                    </Container>
                </Bacground >
            )
            }
            {movieComun && <Slider info={movieComun} title={'Filmes'} />}
            {topMovies && <Slider info={topMovies} title={'Top Filmes'} />}
            {topPeople && <Slider info={topPeople} title={'Top Artista'} />}
        </>
    )
}

