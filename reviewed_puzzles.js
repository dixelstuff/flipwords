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
  ["grew-wore","grew","wore","grow","were",3,"","","grow-were",9,85,2,7,0], // allWords 3: ergo|gore|ogre
  ["roof-urge","roof","urge","euro","frog",2,"","","euro-frog",8,87,2,5,0], // allWords 4: ergo|four|gore|ogre
  ["sheep-shell","sheep","shell","heels","helps",2,"","","heels-helps",5,87,2,5,0], // allWords 1: hells
  ["tune-twin","twin","tune","unit","went",3,"","","unit-went",11,81,3,7,0], // allWords 1: newt
  ["fees-user","fees","user","free","uses",3,"","","free-uses",7,92,1,4,0], // allWords 4: reef|refs|ruse|sure
  ["dead-ogre","dead","ogre","aged","redo",4,"","","aged-redo",15,92,1,4,0], // allWords 5: deer|ergo|gore|reed|rode
  ["noon-typo","noon","typo","pony","onto",3,"","","onto-pony",18,92,1,4,0], // allWords 0
  ["grog-rile","rile","grog","ergo","girl",3,"","","ergo-girl",22,77,4,7,0], // allWords 2: gore|ogre
  ["cacti-stall","cacti","stall","attic","calls",4,"","","attic-calls",16,82,3,6,0], // allWords 4: alias|atlas|tacit|tails
  ["theft-thief","theft","thief","teeth","fifth",4,"","","fifth-teeth",28,87,2,5,0], // allWords 1: tithe
  ["newer-otter","otter","newer","enter","tower",2,"","","enter-tower",4,82,3,6,0], // allWords 2: renew|wrote
  ["error-guess","guess","error","roger","users",4,"","","roger-users",20,92,1,4,0], // allWords 9: euros|goers|ogres|reuse|rogue|rouge|rouse|surge|urges
  ["error-foods","error","foods","order","roofs",3,"","","order-roofs",10,86,2,6,0], // allWords 4: doers|doser|fords|rodeo
  ["pops-root","pops","root","oops","port",3,"","","oops-port",9,82,3,6,0], // allWords 2: pros|toro
  ["agree-marry","agree","marry","array","merge",3,"","","array-merge",9,92,1,4,0], // allWords 2: eager|rager
  ["lord-plod","lord","plod","doll","drop",4,"","","doll-drop",23,80,3,8,0], // allWords 1: prod
  ["roots-tutor","tutor","roots","rotor","stout",4,"","","rotor-stout",29,87,2,5,0], // allWords 10: roost|strut|sturt|toots|torso|torts|tours|touts|trout|trust
  ["matte-steal","steal","matte","metal","state",2,"","","metal-state",7,92,1,4,0], // allWords 8: atlas|least|slate|stale|tales|taste|tease|tesla
  ["salsa-smell","salsa","smell","sales","small",3,"","","sales-small",9,87,2,5,0], // allWords 7: males|malls|masse|meals|seals|seams|slams
  ["basil-salsa","salsa","basil","basal","sails",2,"","","basal-sails",9,92,1,4,0], // allWords 4: alias|balls|labia|slabs
  ["adds-doze","adds","doze","daze","odds",3,"","","daze-odds",9,82,3,6,0], // allWords 4: dads|dead|dosa|soda
  ["queen-vague","queen","vague","queue","vegan",4,"","","queue-vegan",12,92,1,4,0], // allWords 1: venue
  ["cards-woozy","cards","woozy","crazy","woods",3,"","","crazy-woods",9,92,1,4,0], // allWords 8: cords|dowry|draws|rowdy|sword|wards|woody|words
  ["equip-shoot","equip","shoot","quite","hoops",2,"","","hoops-quite",5,92,1,4,0], // allWords 8: hoist|pique|quiet|quips|quits|quote|shout|south
  ["ducks-squib","squib","ducks","bucks","squid",4,"","","bucks-squid",25,92,1,4,0], // allWords 1: sucks
  ["brain-vexed","vexed","brain","beard","vixen",4,"","","beard-vixen",12,92,1,4,0], // allWords 8: abide|bared|braid|bread|evade|naive|rabid|raven
  ["foxy-onto","foxy","onto","foot","onyx",3,"","","foot-onyx",9,92,1,4,0], // allWords 1: font
  ["buzz-jack","buzz","jack","jazz","buck",2,"","","buck-jazz",1,92,1,4,0], // allWords 1: back
  ["crux-flow","crux","flow","flux","crow",2,"","","crow-flux",1,87,2,5,0], // allWords 1: wolf
  ["dose-exam","dose","exam","some","axed",4,"","","axed-some",13,92,1,4,0], // allWords 2: does|mods
  ["seas-whiz","seas","whiz","size","wash",3,"","","size-wash",9,87,2,5,0], // allWords 4: sash|shaw|wise|wish
  ["oxen-true","oxen","true","euro","next",4,"","","euro-next",23,82,3,6,0], // allWords 5: rent|runt|tern|tree|turn
  ["cover-exalt","cover","exalt","exact","lover",4,"","","exact-lover",26,82,3,6,0], // allWords 6: carol|coral|covet|latex|laxer|relax
  ["buck-jazz","buck","jazz","buzz","jack",2,"","","buzz-jack",1,92,1,4,0], // allWords 1: back
  ["crisp-quote","quote","crisp","crops","quiet",2,"","","crops-quiet",6,86,2,6,0], // allWords 9: cores|corps|coups|cries|cutie|quips|quite|score|scrip
  ["evade-pixel","pixel","evade","exile","paved",3,"","","exile-paved",21,87,2,5,0], // allWords 4: ideal|leave|plaid|vexed
  ["beard-vixen","beard","vixen","vexed","brain",4,"","","brain-vexed",11,92,1,4,0], // allWords 8: abide|bared|braid|bread|evade|naive|rabid|raven
  ["ally-exit","ally","exit","taxi","yell",2,"","","taxi-yell",6,87,2,5,0], // allWords 5: lite|tail|tall|tell|tile
  ["lazy-once","once","lazy","clay","zone",2,"","","clay-zone",7,87,2,5,0], // allWords 4: cone|lace|lacy|zeal
  ["equal-spook","spook","equal","quake","pools",2,"","","pools-quake",5,92,1,4,0], // allWords 3: loops|sloop|spool
  ["lets-sell","lets","sell","less","tell",3,"","","cannot be reversed",8,81,3,7,0], // allWords 2: lest|sets
  ["era-war","era","war","are","raw",2,"","","are-raw",5,92,1,4,0], // allWords 1: ear
  ["press-purse","press","purse","spree","spurs",2,"","","spree-spurs",8,87,2,5,0], // allWords 3: peers|speer|super
  ["ads-sad","ads","sad","ass","dad",2,"","","ass-dad",7,86,2,6,0], // allWords 1: add
  ["dense-edges","dense","edges","sense","edged",4,"","","edged-sense",14,92,1,4,0], // allWords 4: ended|geese|needs|sends
  ["isle-seal","isle","seal","else","sail",3,"elis","lase","else-sail",10,92,1,4,0], // allWords 7: ease|eels|less|lies|sale|seas|sell
  ["agog-gory","agog","gory","grog","yoga",4,"","","cannot be reversed",22,86,2,6,0], // allWords 1: orgy
  ["acid-dash","acid","dash","chai","adds",3,"","","adds-chai",16,92,1,4,0], // allWords 2: cash|dads
  ["eager-llama","eager","llama","realm","algae",4,"","","algae-realm",26,92,1,4,0], // allWords 12: agree|alarm|eagle|gamer|glare|gleam|lager|large|legal|leger|marge|regal
  ["goal-solo","solo","goal","also","logo",3,"","","also-logo",18,79,3,9,0], // allWords 0
  ["order-roofs","order","roofs","error","foods",3,"","","error-foods",10,92,1,4,0], // allWords 4: doers|doser|fords|rodeo
  ["array-merge","merge","array","agree","marry",3,"","","agree-marry",9,92,1,4,0], // allWords 2: eager|rager
  ["deer-ogre","ogre","deer","ergo","reed",3,"","","ergo-reed",19,82,3,6,0], // allWords 2: edge|gore
  ["basal-sails","basal","sails","basil","salsa",2,"","","basil-salsa",9,92,1,4,0], // allWords 4: alias|balls|labia|slabs
  ["elder-lodge","elder","lodge","ledge","older",3,"","","ledge-older",8,92,1,4,0], // allWords 1: erode
  ["rare-rate","rare","rate","rear","tear",2,"","","cannot be reversed",15,81,3,7,0], // allWords 0
  ["asset-sweat","sweat","asset","seats","waste",2,"","","seats-waste",18,80,3,8,0], // allWords 5: stews|swats|sweet|tease|wests
  ["opal-roll","roll","opal","oral","poll",2,"","","oral-poll",6,77,4,7,0], // allWords 0
  ["lout-onto","onto","lout","tool","unto",4,"","","tool-unto",14,92,1,4,0], // allWords 2: loot|otto
  ["steer-tents","steer","tents","enter","tests",3,"","","enter-tests",10,87,2,5,0], // allWords 12: ester|nests|rents|reset|sense|sneer|stent|stern|teens|tense|terse|trees
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
  "grew-wore": "increase in size · existed before | flip",
  "roof-urge": "European currency · pond amphibian | flip",
  "sheep-shell": "shoe backs · assists",
  "tune-twin": "single thing · departed",
  "fees-user": "no cost · employs",
  "dead-ogre": "grown old · do-over",
  "noon-typo": "small horse · upon",
  "grog-rile": "therefore · young woman",
  "cacti-stall": "roof room · rings up",
  "theft-thief": "biting set · after fourth",
  "newer-otter": "go inside · tall structure",
  "error-guess": "radio yes · account holders",
  "error-foods": "sequence · top covers",
  "pops-root": "mistake sound · harbour",
  "agree-marry": "ordered spread · combine",
  "lord-plod": "toy figure · let fall",
  "roots-tutor": "spinning blade · sturdy-bodied",
  "matte-steal": "hard alloy · condition",
  "salsa-smell": "retail events · little",
  "basil-salsa": "foundation-level · boat cloths",
  "adds-doze": "stuns · uneven chances | flip",
  "queen-vague": "waiting line · plant-only eater",
  "cards-woozy": "wildly odd · forest patches",
  "equip-shoot": "rather · basketball rings",
  "ducks-squib": "male deer · ink swimmer | flip",
  "brain-vexed": "chin forest · female fox",
  "foxy-onto": "walking base · black gemstone",
  "buzz-jack": "syncopated music · male deer",
  "crux-flow": "constant change · black bird",
  "dose-exam": "a few · cut from list | flip",
  "seas-whiz": "dimensions · clean with water",
  "oxen-true": "European currency · following",
  "cover-exalt": "precise · sweetheart",
  "buck-jazz": "busy hum · card knave",
  "crisp-quote": "harvests · hushed",
  "evade-pixel": "banishment · road-covered",
  "beard-vixen": "thought organ · irritated",
  "ally-exit": "cab ride · loud cry",
  "lazy-once": "earthy material · mapped area",
  "equal-spook": "ground shake · swimming spots",
  "lets-sell": "not as much · recount",
  "era-war": "being verb · uncooked | flip",
  "press-purse": "wild outing · urges on",
  "ads-sad": "donkey · father",
  "dense-edges": "meaning · inched sideways",
  "isle-seal": "otherwise · canvas mover",
  "agog-gory": "pirate drink · stretch ritual",
  "acid-dash": "spiced tea · puts in more",
  "eager-llama": "kingdom domain · pond growth | flip",
  "goal-solo": "in addition · brand emblem | flip",
  "order-roofs": "mistake · edibles | flip",
  "array-merge": "see eye to eye · join at altar",
  "deer-ogre": "therefore · marsh grass",
  "basal-sails": "herb for pesto · spicy dance",
  "elder-lodge": "narrow shelf · less young",
  "rare-rate": "back end · rip apart",
  "asset-sweat": "places to sit · squander",
  "opal-roll": "spoken aloud · survey count",
  "lout-onto": "handy implement · old-style to",
  "steer-tents": "go inside · challenges",
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
  "grew-wore": ["ergo","gore","ogre"],
  "roof-urge": ["ergo","four","gore","ogre"],
  "sheep-shell": ["hells"],
  "tune-twin": ["newt"],
  "fees-user": ["reef","refs","ruse","sure"],
  "dead-ogre": ["deer","ergo","gore","reed","rode"],
  "grog-rile": ["gore","ogre"],
  "cacti-stall": ["alias","atlas","tacit","tails"],
  "theft-thief": ["tithe"],
  "newer-otter": ["renew","wrote"],
  "error-guess": ["euros","goers","ogres","reuse","rogue","rouge","rouse","surge","urges"],
  "error-foods": ["doers","doser","fords","rodeo"],
  "pops-root": ["pros","toro"],
  "agree-marry": ["eager","rager"],
  "lord-plod": ["prod"],
  "roots-tutor": ["roost","strut","sturt","toots","torso","torts","tours","touts","trout","trust"],
  "matte-steal": ["atlas","least","slate","stale","tales","taste","tease","tesla"],
  "salsa-smell": ["males","malls","masse","meals","seals","seams","slams"],
  "basil-salsa": ["alias","balls","labia","slabs"],
  "adds-doze": ["dads","dead","dosa","soda"],
  "queen-vague": ["venue"],
  "cards-woozy": ["cords","dowry","draws","rowdy","sword","wards","woody","words"],
  "equip-shoot": ["hoist","pique","quiet","quips","quits","quote","shout","south"],
  "ducks-squib": ["sucks"],
  "brain-vexed": ["abide","bared","braid","bread","evade","naive","rabid","raven"],
  "foxy-onto": ["font"],
  "buzz-jack": ["back"],
  "crux-flow": ["wolf"],
  "dose-exam": ["does","mods"],
  "seas-whiz": ["sash","shaw","wise","wish"],
  "oxen-true": ["rent","runt","tern","tree","turn"],
  "cover-exalt": ["carol","coral","covet","latex","laxer","relax"],
  "buck-jazz": ["back"],
  "crisp-quote": ["cores","corps","coups","cries","cutie","quips","quite","score","scrip"],
  "evade-pixel": ["ideal","leave","plaid","vexed"],
  "beard-vixen": ["abide","bared","braid","bread","evade","naive","rabid","raven"],
  "ally-exit": ["lite","tail","tall","tell","tile"],
  "lazy-once": ["cone","lace","lacy","zeal"],
  "equal-spook": ["loops","sloop","spool"],
  "lets-sell": ["lest","sets"],
  "era-war": ["ear"],
  "press-purse": ["peers","speer","super"],
  "ads-sad": ["add"],
  "dense-edges": ["ended","geese","needs","sends"],
  "isle-seal": ["ease","eels","less","lies","sale","seas","sell"],
  "agog-gory": ["orgy"],
  "acid-dash": ["cash","dads"],
  "eager-llama": ["agree","alarm","eagle","gamer","glare","gleam","lager","large","legal","leger","marge","regal"],
  "order-roofs": ["doers","doser","fords","rodeo"],
  "array-merge": ["eager","rager"],
  "deer-ogre": ["edge","gore"],
  "basal-sails": ["alias","balls","labia","slabs"],
  "elder-lodge": ["erode"],
  "asset-sweat": ["stews","swats","sweet","tease","wests"],
  "lout-onto": ["loot","otto"],
  "steer-tents": ["ester","nests","rents","reset","sense","sneer","stent","stern","teens","tense","terse","trees"],
};
