import { api } from "./api";

export async function getMovies() {
    const {
        data: { results }
    } = await api.get('/movie/popular')

    return results[0]
}

export async function getMovieComun() {
    const {
        data: { results }
    } = await api.get('/discover/movie')

    return results
}

export async function gettopMovies() {
    const {
        data: { results }
    } = await api.get('/movie/top_rated')

    return results
}

export async function gettopSeries() {
    const {
        data: { results }
    } = await api.get('/tv/top_rated')

    return results
}

export async function getpopularSeries() {
    const {
        data: { results }
    } = await api.get('/tv/popular')
    console.log(results)
    return results
}

export async function gettopPeople() {
    const {
        data: { results }
    } = await api.get('/person/popular')

    return results
}

export async function getMovieVideos(movieId) {
    const {
        data: { results }
    } = await api.get(`/movie/${movieId}/videos`)

    return results
}

export async function getMovieCredits(movieId) {
    const { data: { cast } } = await api.get(`/movie/${movieId}/credits`)

    return cast
}

export async function getMovieSimilar(movieId) {
    const {
        data: { results }
    } = await api.get(`/movie/${movieId}/similar`)

    return results
}

export async function getMovieById(movieId) {
    const { data } = await api.get(`/movie/${movieId}`)

    return data
}