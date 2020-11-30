const movies = [
    {
        id: 1,
        nome: 'Harry Potter e a Pedra Filosofal',
        genero: 'Aventura, Fantasia',
        ano: 2001,
        capa: 'https://static.cineclick.com.br/adm/uploads/banco_imagens/69/1080x1620_1585842808.jpg'

    },
    {
        id: 2,
        nome: 'Harry Potter e a Câmara Secreta',
        genero: 'Aventura, Fantasia',
        ano: 2002,
        capa: 'https://upload.wikimedia.org/wikipedia/pt/3/33/Chamber_of_Secrets.jpg'

    },
    {
        id: 3,
        nome: 'Harry Potter e o Prisioneiro de Azkaban',
        genero: 'Aventura, Fantasia',
        ano: 2004,
        capa: 'https://2.bp.blogspot.com/-MbdlL6o26rw/TisKalRbOZI/AAAAAAAAAP8/SgtOGrVU5JI/s1600/1245085520_harrypotter3poster05.jpg'

    },
    {
        id: 4,
        nome: 'Harry Potter e o Cálice de Fogo',
        genero: 'Aventura, Fantasia',
        ano: 2005,
        capa: 'https://img.elo7.com.br/product/zoom/265774E/big-poster-harry-potter-e-o-calice-de-fogo-lo02-90x60-cm-geek.jpg'

    },
    {
        id: 5,
        nome: 'Harry Potter e a Ordem da Fênix',
        genero: 'Aventura, Fantasia',
        ano: 2007,
        capa: 'https://upload.wikimedia.org/wikipedia/pt/9/98/Harry_Potter_Order_Phoenix_2007.jpg'

    },
    {
        id: 6,
        nome: 'Harry Potter e o Príncipe Mestiço',
        genero: 'Aventura, Fantasia',
        ano: 2009,
        capa: 'https://upload.wikimedia.org/wikipedia/pt/b/b0/Harry_Potter_Half_Blood_Prince_2009.jpg'

    },
    {
        id: 7,
        nome: 'Harry Potter e as Relíquias da Morte: Parte I',
        genero: 'Aventura, Fantasia',
        ano: 2010,
        capa: 'https://upload.wikimedia.org/wikipedia/pt/6/64/Harry_Potter_Deathly_Hallows_2010.jpg'

    },
    {
        id: 8,
        nome: 'Harry Potter e as Relíquias da Morte: Parte II',
        genero: 'Aventura, Fantasia',
        ano: 2011,
        capa: 'https://4.bp.blogspot.com/-eVzDL5yciN4/VMgrZ7qNWII/AAAAAAAAMSM/UE3dBN706pA/s1600/Harry-Potter-and-the-Deathly-Hallows-Part-2.jpg'

    },
    {
        id: 9,
        nome: 'O Senhor dos Anéis: A Sociedade do Anel',
        genero: 'Aventura, Fantasia',
        ano: 2001,
        capa: 'https://upload.wikimedia.org/wikipedia/pt/3/38/Lord_of_the_Rings_Fellowship_of_the_Ring.jpg'

    },
    {
        id: 10,
        nome: 'O Senhor dos Anéis: As Duas Torres',
        genero: 'Aventura, Fantasia',
        ano: 2002,
        capa: 'https://upload.wikimedia.org/wikipedia/pt/5/59/The_Lord_of_the_Rings_The_Two_Towers.jpg'

    },
    {
        id: 11,
        nome: 'O Senhor dos Anéis: O Retorno do Rei',
        genero: 'Aventura, Fantasia',
        ano: 2003,
        capa: 'https://img.elo7.com.br/product/zoom/2692949/big-poster-o-senhor-dos-aneis-o-retorno-do-rei-lo09-90x60-cm-o-senhor-dos-aneis-o-retorno-do-rei.jpg'

    },
    {
        id: 12,
        nome: 'Memórias de Uma Gueixa',
        genero: 'Romance, Drama',
        ano: 2005,
        capa: 'https://upload.wikimedia.org/wikipedia/pt/2/27/Memoirs_of_a_Geisha.jpg'

    },
    {
        id: 13,
        nome: 'Gladiador',
        genero: 'Ação, Aventura',
        ano: 2000,
        capa: 'https://br.web.img2.acsta.net/r_1280_720/medias/nmedia/18/70/92/02/20149073.jpg'

    },
    {
        id: 14,
        nome: 'O Último Samurai',
        genero: 'Ação, Guerra',
        ano: 2003,
        capa: 'https://br.web.img2.acsta.net/medias/nmedia/18/91/70/70/20159112.jpg'

    },
    {
        id: 15,
        nome: 'Os Outros',
        genero: 'Suspense, Terror',
        ano: 2001,
        capa: 'https://i.pinimg.com/originals/ab/72/4b/ab724b8544c74b74e68f61961923d0f2.png'

    },
    {
        id: 16,
        nome: 'O Sexto Sentido',
        genero: 'Drama, Suspense',
        ano: 1999,
        capa: 'https://images-na.ssl-images-amazon.com/images/I/4126ZKo1tfL._AC_SY445_.jpg'

    },
    {
        id: 17,
        nome: 'O Exterminador do Futuro',
        genero: 'Ação, Ficção-Científica',
        ano: 1984,
        capa: 'https://upload.wikimedia.org/wikipedia/pt/thumb/5/5a/Terminator1984.jpg/240px-Terminator1984.jpg'

    },
    {
        id: 18,
        nome: 'Avatar',
        genero: 'Ação, Ficção-Científica',
        ano: 2009,
        capa: 'https://upload.wikimedia.org/wikipedia/pt/b/b0/Avatar-Teaser-Poster.jpg'

    },
    {
        id: 19,
        nome: 'Mulan',
        genero: 'Animação, Musical',
        ano: 1998,
        capa: 'https://picfiles.alphacoders.com/111/111613.jpg'

    },
    {
        id: 20,
        nome: 'Tróia',
        genero: 'Ação, Guerra',
        ano: 2004,
        capa: 'https://upload.wikimedia.org/wikipedia/en/b/b8/Troy2004Poster.jpg'

    },
    {
        id: 21,
        nome: 'Rei Arthur',
        genero: 'Ação, Guerra',
        ano: 2004,
        capa: 'https://i.pinimg.com/originals/b4/b4/da/b4b4da3027c146f57d99631a70216605.jpg'

    },
    {
        id: 22,
        nome: 'Tristão & Isolda',
        genero: 'Ação, Drama, Guerra, Romance',
        ano: 2006,
        capa: 'https://upload.wikimedia.org/wikipedia/pt/1/18/Tristan_%26_Isolde.jpg'

    },
    {
        id: 23,
        nome: 'Um Amor pra Recordar',
        genero: 'Drama, Romance',
        ano: 2002,
        capa: 'https://upload.wikimedia.org/wikipedia/pt/thumb/2/27/A_Walk_to_Remember_-_P%C3%B4ster.jpg/220px-A_Walk_to_Remember_-_P%C3%B4ster.jpg'

    },
    {
        id: 24,
        nome: 'Diário de Uma Paixão',
        genero: 'Drama, Romance',
        ano: 2004,
        capa: 'https://upload.wikimedia.org/wikipedia/pt/3/32/The_Notebook_p%C3%B4ster.jpg'
    },
    {
        id: 25,
        nome: 'Kimi no Na wa',
        genero: 'Animação, Romance',
        ano: 2016,
        capa: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRd9STc3gksJk6A5XLDyfjs1ZgazEuLvMu4K2kA2LbdoPumS3Jz'
    },
    {
        id: 26,
        nome: 'Moulin Rouge',
        genero: 'Musical, Romance',
        ano: 2001,
        capa: 'https://www.cafecomfilme.com.br/media/k2/items/cache/621e04774107f8d6d16119a4df4b377b_XL.jpg?t=20170724_160732'
    },
    {
        id: 27,
        nome: 'Rogue One: Uma História Star Wars',
        genero: 'Ação, Ficção-Científica',
        ano: 2016,
        capa: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9F2Idx7ZPs1o4roUPBvDfR1FMwCtl0fMNnxzmqeOcye1wgmsO'
    },
    {
        id: 28,
        nome: 'A.I. - Inteligência Artificial',
        genero: 'Drama, Ficção-Científica',
        ano: 2001,
        capa: 'https://upload.wikimedia.org/wikipedia/pt/b/bf/Ai_artificial_intelligence.jpg'
    },
    {
        id: 29,
        nome: 'O Homem Bicentenário',
        genero: 'Ficção-Científica, Romance',
        ano: 1999,
        capa: 'https://upload.wikimedia.org/wikipedia/pt/9/90/Homem_Bicenten%C3%A1rio_1999.jpg'
    },
    {
        id: 30,
        nome: 'Interestelar',
        genero: 'Aventura, Drama, Ficção-Científica',
        ano: 2014,
        capa: 'https://upload.wikimedia.org/wikipedia/pt/3/3a/Interstellar_Filme.png'
    }

]

export default movies