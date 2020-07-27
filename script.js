class VideoShop {
    constructor(filmName,producer,genre,rating,diskPrice) {
        this._filmName=filmName
        this._producer=producer
        this._genre=genre
        this._rating=rating
        this._diskPrice=diskPrice
    }

}

const films=[]//массив объектов
const film1=new VideoShop('Веном','Рубен Фляйшер','Боевик',6.8,15.20)
const film2=new VideoShop('Железный человек','Джон Фавро','Боевик',7.9,8.14)
const film3=new VideoShop('Ходячие мертвецы','Роберт Киркман',
    'Постапокалипсис',9.1,16.72)
const film4=new VideoShop('Человек-Паук','Сэм Рэйви','Супергеройский',7.6,9.05)
const film5=new VideoShop('Горько!','Георгий Крыжовников','Комедия',6.4,11.11)
films.push(film1)
films.push(film2)
films.push(film3)
films.push(film4)
films.push(film5)



searchOnFilmName=()=>{//поиск по названию фильма
    const inp1=document.querySelector('#inp1')
    const btn1=document.querySelector('#btn1')
    const filmName=document.querySelector('#filmName')
    const clear=document.querySelector('#searchFilmName .clear')
    btn1.addEventListener('click',function () {
        for (let i=0;i<films.length;i++){
            if (inp1.value===films[i]._filmName||inp1.value===films[i]._filmName.substr(0,3)
            ||inp1.value===(films[i]._filmName[0].toLowerCase()+films[i]._filmName.substr(1,1))
            ||inp1.value===(films[i]._filmName[0].toUpperCase()+films[i]._filmName.substr(1,1))
            ||inp1.value===(films[i]._filmName[0].toUpperCase())
            ||inp1.value===(films[i]._filmName[0].toLowerCase())){
                filmName.innerHTML+=films[i]._filmName+' '

            }else if(i===films.length-1&&(filmName.innerHTML==='')){
                filmName.innerHTML+='Нет результатов:(((('
            }
        }
    })
    clear.addEventListener('click',function () {
        filmName.innerHTML=''
        inp1.value=''
    })
}//end of a function searchOnFilmName

searchOnGenreName=()=> {//поиск по жанру
    const inp2 = document.querySelector('#inp2')
    const btn2 = document.querySelector('#btn2')
    const genreName = document.querySelector('#genreName')//вводим жанр и находим имя фильма
    const clear = document.querySelector('#searchGenreName .clear')
    btn2.addEventListener('click', function () {
        for (let i = 0; i < films.length; i++) {
            if (inp2.value === films[i]._genre || inp2.value === films[i]._genre.substr(0, 4)
                || inp2.value === (films[i]._genre[0].toLowerCase() + films[i]._genre.substr(1, 3))
                || inp2.value === (films[i]._genre[0].toUpperCase() + films[i]._genre.substr(1, 3))
                || inp2.value === (films[i]._genre[0].toLowerCase() + films[i]._genre.substr(1, 1))
                || inp2.value === (films[i]._genre[0].toUpperCase() + films[i]._genre.substr(1, 1))
                || inp2.value === (films[i]._genre[0].toUpperCase())
                || inp2.value===(films[i]._genre[0].toLowerCase())) {
                genreName.innerHTML += films[i]._filmName + ' '

            } else if (i === films.length - 1 && (genreName.innerHTML === '')) {
                genreName.innerHTML += 'Нет результатов:(((('
            }

        }
    })
    clear.addEventListener('click',function () {
        genreName.innerHTML=''
        inp2.value=''
    })
}//end of a function searchOnFilmName

searchOnProducerName=()=>{//поиск по режиссеру
    const inp3 = document.querySelector('#inp3')
    const btn3 = document.querySelector('#btn3')
    const producerName = document.querySelector('#producerName')
    const clear = document.querySelector('#searchProducerName .clear')
    btn3.addEventListener('click', function () {
        for (let i = 0; i < films.length; i++) {
            if (inp3.value === films[i]._producer || inp3.value === films[i]._producer.substr(0, 4)
                || inp3.value === (films[i]._producer[0].toLowerCase() + films[i]._producer.substr(1, 3))
                || inp3.value === (films[i]._producer[0].toUpperCase() + films[i]._producer.substr(1, 3))
                || inp3.value === (films[i]._producer[0].toLowerCase() + films[i]._producer.substr(1, 1))
                || inp3.value === (films[i]._producer[0].toUpperCase() + films[i]._producer.substr(1, 1))
                || inp3.value === (films[i]._producer[0].toUpperCase())
                || inp3.value===(films[i]._producer[0].toLowerCase())) {
                producerName.innerHTML += films[i]._filmName + ' '

            } else if (i === films.length - 1 && (producerName.innerHTML === '')) {
                producerName.innerHTML += 'Нет результатов:(((('
            }

        }
    })
    clear.addEventListener('click',function () {
        producerName.innerHTML=''
        inp3.value=''
    })
}//end of a function searchOnProducerName

theMostPopularFilmInGenre=()=>{//поиск самого популярного фильма в жанре
    const inp4 = document.querySelector('#inp4')
    const btn4 = document.querySelector('#btn4')
    const pop = document.querySelector('#pop')
    const clear = document.querySelector('#mostPopular .clear')
    let max=0//фильм с максимальным рейтингом в массиве
    let maxNum//индекс фильма с максимальным рейтингом в массиве
    btn4.addEventListener('click',function () {

        for (let i=0;i<films.length;i++) {
            if (inp4.value===films[i]._genre){
                if (films[i]._rating>max){
                    max=films[i]._rating
                    maxNum=i
                }

            }
        }
       pop.innerHTML=films[maxNum]._filmName
    })

    clear.addEventListener('click',function () {
       pop.innerHTML=''
        inp4.value=''
    })
}//end of a function theMostPopularFilmInGenre

addFilms=()=>{//функция добавления новых фильмов
    let ad=document.querySelector('#ad')
    ad.addEventListener('click',function () {
        let N=parseInt(prompt('Введите кол-во фильмов для добавления:'))
        for (let i=0;i<N;i++){
            let name=prompt('Название фильма '+(i+1),'')
            let producer=prompt('Режиссер фильма '+(i+1),'')
            let genre=prompt('Жанр фильма '+(i+1),'')
            let rating=parseFloat(prompt('Рейтинг фильма '+(i+1),''))
            let  price=parseFloat(prompt('Цена диска фильма '+(i+1),''))
            let newFilm=new VideoShop(name,producer,genre,rating,price)
            films.push(newFilm)
        }
        console.log(films)
        saveData()
    })

}//end of a function addFilms
saveData=()=>{//сохранить массив объектов

        let json=JSON.stringify(films)
        localStorage.setItem('films',json)

}

showData=()=>{
    const show=document.querySelector('#show')
    show.addEventListener('click',function () {
        let json=localStorage.getItem('films')
        let obj=JSON.parse(json)
        console.log(obj)

    })
}//end of a function showData

searchOnFilmName()
searchOnGenreName()
searchOnProducerName()
theMostPopularFilmInGenre()
addFilms()
showData()














