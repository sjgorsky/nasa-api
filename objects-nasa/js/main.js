//The user will enter a date. Use that date to get the NASA picture of the day from that date! https://api.nasa.gov/
document.querySelector('button').addEventListener('click', getPicture)
function getPicture(){
    let date = document.querySelector('input').value
    const url = 'https://api.nasa.gov/planetary/apod?api_key=KxtU693eaoV1lyN7edA7FBhwOlAzvxeGxMkiEoKO&date=' + date

    fetch(url)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            document.querySelector('img').src = data.hdurl
            document.querySelector('h3').innerText = data.explanation
            document.querySelector('h2').innerText = data.title
        })
        .catch(err => {
            console.log('error ${err}')
        })
    }
