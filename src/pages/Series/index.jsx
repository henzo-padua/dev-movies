import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"

import { Button } from "../../components/Button"
import { Slider } from "../../components/Slider"
import { getImages } from "../../utils/getimages"
import { Modal } from "../../components/Modal"

import { Bacground, Info, Poster, Container, ContainerButtons } from "./styles"
import { getpopularSeries, gettopPeople, gettopSeries } from "../../services/getData"

export function Series() {
    const [showModal, setShowModal] = useState(false)
    const [topSeries, setTopSeries] = useState()
    const [popularSeries, setpopularSeries] = useState()
    const [topPeople, setTopPeople] = useState()
    const navigate = useNavigate()

    useEffect(() => {
        async function getAllData() {

            Promise.all([
                gettopSeries(),
                getpopularSeries(),
                gettopPeople()
            ])
                .then(([topSeries, popularSeries, topPeople]) => {
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
            {popularSeries && (
                <Bacground img={getImages(popularSeries[0].backdrop_path)}>
                    {showModal && <Modal movieId={popularSeries[0].id} setShowModal={setShowModal} />}
                    <Container>
                        <Info>
                            <h1>{popularSeries[0].name}</h1>
                            <p>{popularSeries[0].overview}</p>
                            <ContainerButtons>
                                <Button red onClick={() => navigate(`/detalhe/${popularSeries[0].id}`)}>Assita Agora</Button>
                                <Button onClick={() => setShowModal(true)} >Assita o trailer</Button>
                            </ContainerButtons>
                        </Info>
                        <Poster>
                            <img alt='capa-do-filme' src={getImages(popularSeries[0].poster_path)} />
                        </Poster>
                    </Container>
                </Bacground >
            )
            }
            {topSeries && <Slider info={topSeries} title={'Top Séries'} />}
            {popularSeries && <Slider info={popularSeries} title={'Séries Populares'} />}
            {topPeople && <Slider info={topPeople} title={'Top Artista'} />}
        </>
    )
}

