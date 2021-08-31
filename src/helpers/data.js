const players = [
    {
        name: 'Delon Wright',
        team: 'ATL',
        img: '/wrighde01.jpg'
    },
    {
        name: 'Gorgui Dieng',
        team: 'ATL',
        img: '/dienggo01.jpg'
    },
    {
        name: 'Solomon Hill',
        team: 'ATL',
        img: '/hillso01.jpg'
    },
    {
        name: 'Josh Richardson',
        team: 'BOS',
        img: '/richajo01.jpg'
    },
    {
        name: 'Kris Dunn',
        team: 'BOS',
        img: '/dunnkr01.jpg'
    },    {
        name: 'Jabari Parker',
        team: 'BOS',
        img: '/parkeja01.jpg'
    },    
   {
        name: 'Enes Kanter',
        team: 'BOS',
        img: '/kanteen01.jpg'
    },    
    {
        name: 'Mason Plumlee',
        team: 'CHA',
        img: '/plumlma01.jpg'
    },
    {
        name: 'Ish Smith',
        team: 'CHA',
        img: '/smithis01.jpg'
    },
    {
        name: 'Wes Iwundu',
        team: 'CHA',
        img: '/iwundwe01.jpg'
    },
    {
        name: 'Ricky Rubio',
        team: 'CLE',
        img: '/rubiori01.jpg'
    },
    {
        name: 'Jeff Green',
        team: 'DEN',
        img: '/greenje02.jpg'
    },
    {
        name: 'JaMychal Green',
        team: 'DEN',
        img: '/greenja01.jpg'
    },
    {
        name: 'Cory Joseph',
        team: 'DET',
        img: '/josepco01.jpg'
    },
    {
        name: 'Trey Lyles',
        team: 'DET',
        img: '/lylestr01.jpg'
    },
    {
        name: 'Jahlil Okafor',
        team: 'DET',
        img: '/okafoja01.jpg'
    },
    {
        name: 'Rodney McGruder',
        team: 'DET',
        img: '/mcgruro01.jpg'
    },
    {
        name: 'Otto Porter, Jr',
        team: 'DET',
        img: '/porteot01.jpg'
    },
    {
        name: 'Nemanja Bjelica',
        team: 'DET',
        img: '/bjeline01.jpg'
    },
    {
        name: 'Daniel Theis',
        team: 'HOU',
        img: '/theisda01.jpg'
    },
    {
        name: 'DJ Augustin',
        team: 'HOU',
        img: '/augusdj01.jpg'
    },
    {
        name: 'David Nwaba',
        team: 'HOU',
        img: '/nwabada01.jpg'
    },
    {
        name: 'Torrey Craig',
        team: 'IND',
        img: '/craigto01.jpg'
    },
    {
        name: 'Eric Bledsoe',
        team: 'DET',
        img: '/bledser01.jpg'
    },
    {
        name: 'Justise Winslow',
        team: 'DET',
        img: '/winslju01.jpg'
    },
    {
        name: 'Trevor Ariza',
        team: 'LAL',
        img: '/arizatr01.jpg'
    },
    {
        name: 'Wayne Ellington',
        team: 'LAL',
        img: '/ellinwa01.jpg'
    },
    {
        name: 'Dwight Howard',
        team: 'LAL',
        img: '/howardw01.jpg'
    },
    {
        name: 'Kent Bazemore',
        team: 'LAL',
        img: '/bazemke01.jpg'
    },
    {
        name: 'Rajon Rondo',
        team: 'LAL',
        img: '/rondora01.jpg'
    },
    {
        name: 'Markieff Morris',
        team: 'MIA',
        img: '/morrima02.jpg'
    },
    {
        name: 'Dewayne Dedmon',
        team: 'MIA',
        img: '/dedmode01.jpg'
    },
    {
        name: 'Patrick Beverley',
        team: 'MIN',
        img: '/beverpa01.jpg'
    },
    {
        name: 'Taurean Prince',
        team: 'MIN',
        img: '/princta02.jpg'
    },
    {
        name: 'Jonas Valanciunas',
        team: 'NOP',
        img: '/valanjo01.jpg'
    },
    {
        name: 'Devonte Graham',
        team: 'NOP',
        img: '/grahade01.jpg'
    },
    {
        name: 'Tomas Satoransky',
        team: 'NOP',
        img: '/satorto01.jpg'
    },
    {
        name: 'Garrett Temple',
        team: 'NOP',
        img: '/templga01.jpg'
    },
    {
        name: 'Willy Hernangomez',
        team: 'NOP',
        img: '/hernawi01.jpg'
    },
    {
        name: 'Taj Gibson',
        team: 'NYK',
        img: '/gibsota01.jpg'
    },
    {
        name: 'Dwayne Bacon',
        team: 'NYK',
        img: '/bacondw01.jpg'
    },
    {
        name: 'Mike Muscala',
        team: 'OKC',
        img: '/muscami01.jpg'
    },
    {
        name: 'Gary Harris',
        team: 'ORL',
        img: '/harriga01.jpg'
    },
    {
        name: 'Robin Lopez',
        team: 'ORL',
        img: '/lopezro01.jpg'
    },
    {
        name: 'Georges Niang',
        team: 'PHI',
        img: '/niangge01.jpg'
    },
    {
        name: 'Javale McGee',
        team: 'PHX',
        img: '/mcgeeja01.jpg'
    },
    {
        name: 'Elfrid Payton',
        team: 'PHX',
        img: '/paytoel01.jpg'
    },
    {
        name: 'Ben Mclemore',
        team: 'POR',
        img: '/mclembe01.jpg'
    },
    {
        name: 'Tony Snell',
        team: 'POR',
        img: '/snellto01.jpg'
    },
    {
        name: 'Cody Zeller',
        team: 'POR',
        img: '/zelleco01.jpg'
    },
    {
        name: 'Tristan Thompson',
        team: 'SAC',
        img: '/thomptr01.jpg'
    },
    {
        name: 'Moe Harkless',
        team: 'SAC',
        img: '/harklma01.jpg'
    },
    {
        name: 'Alex Len',
        team: 'SAC',
        img: '/lenal01.jpg'
    },
    {
        name: 'Thad Young',
        team: 'SAS',
        img: '/youngth01.jpg'
    },
    {
        name: 'Doug McDermott',
        team: 'SAS',
        img: '/mcderdo01.jpg'
    },
    {
        name: 'Al-Farouq Aminu',
        team: 'SAS',
        img: '/aminual01.jpg'
    },
    {
        name: 'Bryn Forbes',
        team: 'SAS',
        img: '/forbebr01.jpg'
    },
    {
        name: 'Rudy Gay',
        team: 'UTA',
        img: '/gayru01.jpg'
    },
    {
        name: 'Hassan Whiteside',
        team: 'UTA',
        img: '/whiteha01.jpg'
    },
    {
        name: 'Steven Adams',
        team: 'MEM',
        img: '/adamsst01.jpg'
    }
]
export default players