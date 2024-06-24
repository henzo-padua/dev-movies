import { getImages } from "../../utils/getimages";
import { Container } from "./styles";


export function Card({ item }) {

    return (
        <Container>
            <img src={getImages(item.poster_path || item.profile_path || '')} alt="poster" />
            <h3>{item.title || item.name}</h3>
        </Container>
    )
}