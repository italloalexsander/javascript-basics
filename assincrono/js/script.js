const BASE_URL = 'https://thatcopy.pw/catapi/rest/'; //A API parece esta fora do ar :/
const catButton = document.getElementById('change-cat');
const catImg = document.getElementById('cat');

const getCats = async  () => {
    try{
        const data = await fetch(BASE_URL);
        const json = await data.json();

        return json.webpurl;
    }
    catch (e) {
        console.log(e.message);
    }
}

const loading = async() => {
    catImg.src = await getCats();

}

catButton.addEventListener('click', loading);

loading();