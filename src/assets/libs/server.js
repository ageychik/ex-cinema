export default function server(url, settings = {}){
    const defaultPath = 'https://api.themoviedb.org/3/movie';
    const imagePath = 'https://image.tmdb.org/t/p/w500/';
    const API_KEY = 'c6f82dc5dce289d673c19d018e6b6c47';
    const language = 'ru'
    const _url = `${ defaultPath }/${url}?api_key=${API_KEY}&language=${language}&region=${language}`;
    return fetch(_url).then(res => {
        return res.json();
    })
}