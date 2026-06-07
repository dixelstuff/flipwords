// TEMPORARY Mode 20 output. Do not treat as reviewed_puzzles.js unless manually approved.
const puzzleRows = [
  ["agog-seas","agog","seas","goes","saga",5,"","","goes-saga",26,92,1,4,0], // allWords 5: ages|egos|gaga|sage|sago
  ["slang-tutor","slang","tutor","gloat","runts",5,"","","gloat-runts",32,92,1,4,0], // allWords 9: gaunt|goals|gusto|snarl|solar|stung|tours|trout|turns
  ["lance-scout","scout","lance","uncle","coast",5,"","","coast-uncle",25,92,1,4,0], // allWords 9: ascot|aunts|autos|canes|clean|clout|coats|scant|tacos
  ["leek-less","less","leek","elks","else",3,"","","cannot be reversed",17,82,3,6,0], // allWords 2: eels|keel
  ["eye-led","eye","led","dye","eel",3,"","","dye-eel",10,81,3,7,0], // allWords 1: dee
  ["pylon-tease","pylon","tease","elope","nasty",5,"","","elope-nasty",33,92,1,4,0], // allWords 11: atone|panes|pansy|pease|peels|sleep|sleet|steel|style|yeast|yelps
  ["magic-there","magic","there","cream","eight",6,"","","cream-eight",33,92,1,4,0], // allWords 15: carte|cater|chime|crate|eater|ether|ethic|gamer|grate|great|image|marge|react|three|trace
  ["aides-greet","aides","greet","siege","tread",5,"","","siege-tread",32,92,1,4,0], // allWords 11: aside|dares|dregs|eater|erase|ideas|rated|reads|saree|serge|trade
  ["drop-roof","drop","roof","ford","poor",4,"","","cannot be reversed",22,80,3,8,0], // allWords 2: food|prod
  ["bob-pro","bob","pro","bop","orb",3,"","","bop-orb",9,75,4,9,0], // allWords 3: boo|bro|rob
  ["flap-oops","oops","flap","plop","sofa",4,"","","plop-sofa",23,92,1,4,0], // allWords 4: also|opal|poop|slop
  ["edit-lime","lime","edit","deli","item",4,"","","deli-item",20,87,2,5,0], // allWords 10: deem|diet|emit|idle|lied|mile|mite|tide|tied|time
  ["pass-swab","swab","pass","bass","swap",4,"","","bass-swap",23,82,3,6,0], // allWords 4: baas|paws|saps|wasp
  ["easy-sake","easy","sake","ease","yaks",3,"","","ease-yaks",23,75,4,9,0], // allWords 2: says|seas
  ["elder-necks","elder","necks","clerk","dense",5,"","","clerk-dense",28,92,1,4,0], // allWords 5: creek|ender|lends|needs|scene
  ["grail-moose","grail","moose","igloo","smear",5,"","","igloo-smear",33,92,1,4,0], // allWords 10: gears|goals|goers|goose|logos|looms|mares|mores|ogres|rages
  ["eyed-pose","pose","eyed","dope","eyes",4,"","","dope-eyes",19,76,4,8,0], // allWords 4: does|dose|dyes|pods
  ["good-tree","good","tree","dote","ergo",4,"","","dote-ergo",23,92,1,4,0], // allWords 3: gore|ogre|tore
  ["agile-demon","agile","demon","lined","omega",5,"","","lined-omega",32,92,1,4,0], // allWords 10: alien|align|among|dingo|doing|gleam|glide|liang|mango|monde
  ["decay-third","third","decay","dried","yacht",6,"","","dried-yacht",33,92,1,4,0], // allWords 6: acted|aided|cadet|decry|tired|tried
];

const puzzleClues = {
  "agog-seas": "travels · long tale",
  "slang-tutor": "smug crowing · litter’s smallest | flip",
  "lance-scout": "parent’s brother · shoreline",
  "leek-less": "large deer · otherwise",
  "eye-led": "fabric stain · slippery fish",
  "pylon-tease": "run off to wed · unpleasant",
  "magic-there": "rich dairy top · spider number | flip",
  "aides-greet": "long blockade · footstep",
  "drop-roof": "shallow crossing · not wealthy",
  "bob-pro": "dance hit · round object",
  "flap-oops": "heavy drop sound · lounge seat",
  "edit-lime": "sandwich counter · list piece",
  "pass-swab": "low fish · exchange",
  "easy-sake": "comfort · long-haired oxen",
  "elder-necks": "office worker · tightly packed",
  "grail-moose": "snow hut · spread thinly",
  "eyed-pose": "foolish person · vision organs",
  "good-tree": "adore · therefore",
  "agile-demon": "striped · final Greek letter",
  "decay-third": "dehydrated · pleasure boat",
};

const clueBonusWords = {
  "agog-seas": ["ages","egos","gaga","sage","sago"],
  "slang-tutor": ["gaunt","goals","gusto","snarl","solar","stung","tours","trout","turns"],
  "lance-scout": ["ascot","aunts","autos","canes","clean","clout","coats","scant","tacos"],
  "leek-less": ["eels","keel"],
  "eye-led": ["dee"],
  "pylon-tease": ["atone","panes","pansy","pease","peels","sleep","sleet","steel","style","yeast","yelps"],
  "magic-there": ["carte","cater","chime","crate","eater","ether","ethic","gamer","grate","great","image","marge","react","three","trace"],
  "aides-greet": ["aside","dares","dregs","eater","erase","ideas","rated","reads","saree","serge","trade"],
  "drop-roof": ["food","prod"],
  "bob-pro": ["boo","bro","rob"],
  "flap-oops": ["also","opal","poop","slop"],
  "edit-lime": ["deem","diet","emit","idle","lied","mile","mite","tide","tied","time"],
  "pass-swab": ["baas","paws","saps","wasp"],
  "easy-sake": ["says","seas"],
  "elder-necks": ["creek","ender","lends","needs","scene"],
  "grail-moose": ["gears","goals","goers","goose","logos","looms","mares","mores","ogres","rages"],
  "eyed-pose": ["does","dose","dyes","pods"],
  "good-tree": ["gore","ogre","tore"],
  "agile-demon": ["alien","align","among","dingo","doing","gleam","glide","liang","mango","monde"],
  "decay-third": ["acted","aided","cadet","decry","tired","tried"],
};
