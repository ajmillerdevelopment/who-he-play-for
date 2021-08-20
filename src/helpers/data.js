const players = [
    {
        name: 'Delon Wright',
        team: 'ATL'
    },
    {
        name: 'Gorgui Deng',
        team: 'ATL'
    },
    {
        name: 'Solomon Hill',
        team: 'ATL'
    },
    {
        name: 'Josh Richardson',
        team: 'BOS'
    },{
        name: 'Kris Dunn',
        team: 'BOS'
    },    {
        name: 'Jabari Parker',
        team: 'BOS'
    },    {
        name: 'Bruno Fernando',
        team: 'BOS'
    },    {
        name: 'Enes Kanter',
        team: 'BOS'
    },    
    {
        name: 'Jevon Carter',
        team: 'BKN'
    },
    {
        name: 'DeAndre Bemby',
        team: 'BKN'
    },
    {
        name: 'Mason Plumlee',
        team: 'CHA'
    },
    {
        name: 'Ish Smith',
        team: 'CHA'
    },
    {
        name: 'Wes Iwundu',
        team: 'CHA'
    },
    {
        name: 'Cody Martin',
        team: 'CHA'
    },
    {
        name: 'Tony Bradley',
        team: 'CHI'
    },
    {
        name: 'Ricky Rubio',
        team: 'CLE'
    },
    {
        name: 'Dylan Windler',
        team: 'CLE'
    },
    {
        name: 'Damyean Dotson',
        team: 'CLE'
    },
    {
        name: 'Sterling Brown',
        team: 'DAL'
    },
    {
        name: 'Jeff Green',
        team: 'DEN'
    },
    {
        name: 'JaMychal Green',
        team: 'DEN'
    },
    {
        name: 'Cory Joseph',
        team: 'DET'
    },
    {
        name: 'Trey Lyles',
        team: 'DET'
    },
    {
        name: 'Jahlil Okafor',
        team: 'DET'
    },
    {
        name: 'Rodney McGruder',
        team: 'DET'
    },
    {
        name: 'Otto Porter, Jr',
        team: 'DET'
    },
    {
        name: 'Nemanja Bjelica',
        team: 'DET'
    },
    {
        name: 'Daniel Theis',
        team: 'HOU'
    },
    {
        name: 'DJ Augustin',
        team: 'HOU'
    },
    {
        name: 'David Nwaba',
        team: 'HOU'
    },
    {
        name: 'Torrey Craig',
        team: 'IND'
    },
    {
        name: 'Eric Bledsoe',
        team: 'DET'
    },
    {
        name: 'Justise Winslow',
        team: 'DET'
    },
    {
        name: 'Trevor Ariza',
        team: 'LAL'
    },
    {
        name: 'Wayne Ellington',
        team: 'LAL'
    },
    {
        name: 'Dwight Howard',
        team: 'LAL'
    },
    {
        name: 'Kent Bazemore',
        team: 'LAL'
    },
    {
        name: "De'Anthony Melton",
        team: 'MEM'
    },
    {
        name: 'Tyus Jones',
        team: 'MEM'
    },
    {
        name: 'Rajon Rondo',
        team: 'MEM'
    },
    {
        name: 'Juan Hernangomez',
        team: 'MEM'
    },
    {
        name: 'Markieff Morris',
        team: 'MIA'
    },
    {
        name: 'Dewayne Dedmon',
        team: 'MIA'
    },
    {
        name: 'Victor Oladipo',
        team: 'MIA'
    },
    {
        name: 'Patrick Beverley',
        team: 'MIN'
    },
    {
        name: 'Taurean Prince',
        team: 'MIN'
    },
    {
        name: 'Jake Layman',
        team: 'MIN'
    },
    {
        name: 'Jonas Valanciunas',
        team: 'NOP'
    },
    {
        name: 'Devonte Graham',
        team: 'NOP'
    },
    {
        name: 'Tomas Satoransky',
        team: 'NOP'
    },
    {
        name: 'Garrett Temple',
        team: 'NOP'
    },
    {
        name: 'Willy Hernangomez',
        team: 'NOP'
    },
    {
        name: 'Taj Gibson',
        team: 'NYK'
    },
    {
        name: 'Dwayne Bacon',
        team: 'NYK'
    },
    {
        name: 'Mike Muscala',
        team: 'OKC'
    },
    {
        name: 'Theo Maladon',
        team: 'OKC'
    },
    {
        name: 'Kenrich Williams',
        team: 'OKC'
    },
    {
        name: 'Gary Harris',
        team: 'ORL'
    },
    {
        name: 'Wendell Carter Jr',
        team: 'ORL'
    },
    {
        name: 'Robin Lopez',
        team: 'ORL'
    },
    {
        name: 'Michael Carter-Williams',
        team: 'ORL'
    },
    {
        name: 'Georges Niang',
        team: 'PHI'
    },
    {
        name: 'Javale McGee',
        team: 'PHX'
    },
    {
        name: 'Abdel Nader',
        team: 'PHX'
    },
    {
        name: 'Elfrid Payton',
        team: 'PHX'
    },
    {
        name: 'Ben Mclemore',
        team: 'POR'
    },
    {
        name: 'Tony Snell',
        team: 'POR'
    },
    {
        name: 'Cody Zeller',
        team: 'POR'
    },
    {
        name: 'Tristan Thompson',
        team: 'SAC'
    },
    {
        name: 'Mo Harkless',
        team: 'SAC'
    },
    {
        name: 'Alex Len',
        team: 'SAC'
    },
    {
        name: 'Thad Young',
        team: 'SAS'
    },
    {
        name: 'Doug McDermott',
        team: 'SAS'
    },
    {
        name: 'Al-Farouq Aminu',
        team: 'SAS'
    },
    {
        name: 'Zach Collins',
        team: 'SAS'
    },
    {
        name: 'Bryn Forbes',
        team: 'SAS'
    },
    {
        name: 'Khem Birch',
        team: 'TOR'
    },
    {
        name: 'Isaac Bonga',
        team: 'TOR'
    },
    {
        name: 'Rudy Gay',
        team: 'UTA'
    },
    {
        name: 'Hassan Whiteside',
        team: 'UTA'
    },
    {
        name: 'Raul Neto',
        team: 'WAS'
    },
    {
        name: 'Aaron Holiday',
        team: 'WAS'
    },
]
export default players