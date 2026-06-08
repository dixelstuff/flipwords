// TEMPORARY Mode 20 output. Do not treat as reviewed_puzzles.js unless manually approved.
const puzzleRows = [
  ["sassy-treat","sassy","treat","essay","start",3,"","","essay-start",19,92,1,4,0], // allWords 24: artsy|assay|asset|aster|rates|rests|satay|seats|stare|stars|state|stats|stays|stray|tarts|taste|tater|tears|teary|tetra|trays|tyres|years|yeast
  ["euro-spot","euro","spot","oops","true",4,"","","oops-true",22,82,3,6,0], // allWords 13: ours|outs|poet|pore|post|pots|pros|repo|rope|rust|sour|stop|tops
  ["abet-less","abet","less","bats","else",3,"abes","lest","bats-else",20,82,3,6,0], // allWords 17: base|bass|beat|belt|beta|ease|east|eats|eels|lest|lets|seas|seat|stab|tabs|teas|tele
  ["fees-stat","fees","stat","safe","test",3,"","","safe-test",19,92,1,4,0], // allWords 15: east|eats|fast|fate|fats|feat|feet|feta|fete|seas|seat|sees|sets|teas|tees
  ["flee-list","flee","list","isle","left",2,"","","cannot be reversed",7,87,2,5,0], // allWords 12: feel|felt|fist|fits|lies|lite|self|sell|sift|slit|tell|tile
  ["reset-snide","snide","reset","inter","seeds",5,"","","inter-seeds",28,87,2,5,0], // allWords 24: diets|diner|edits|eerie|ester|inert|inset|nerds|nests|reeds|rents|seine|sends|sense|sited|sneer|steer|stein|stern|terse|tides|tired|trees|tried
  ["erase-straw","erase","straw","aware","rests",5,"","","aware-rests",28,92,1,4,0], // allWords 26: areas|asset|aster|eater|ester|rates|rears|reset|saree|sears|seats|stare|steer|swats|swear|sweat|tears|tease|terse|trees|wares|warts|waste|water|wears|wrest
  ["raspy-stare","raspy","stare","artsy","spare",3,"","","artsy-spare",18,87,2,5,0], // allWords 27: areas|array|aster|parse|party|paste|pasty|patsy|pears|pests|prays|rates|rears|rests|sears|septa|spate|spear|spray|steps|stray|strep|taper|tapes|tears|terra|trays
  ["open-tens","open","tens","step","none",4,"","","none-step",25,87,2,5,0], // allWords 14: eons|neon|nest|nets|nope|nose|ones|pest|pets|pons|pose|sent|teen|tees
  ["past-site","past","site","east","tips",3,"","","east-tips",19,82,3,6,0], // allWords 18: apes|eats|pats|peas|peat|pies|pits|seas|seat|sits|spat|spit|stat|tape|taps|teas|ties|tits
  ["earth-steel","earth","steel","alter","these",4,"","","alter-these",24,92,1,4,0], // allWords 29: alert|earls|easel|ether|hares|haste|hater|hates|hears|heart|heats|laser|later|lease|least|reals|share|shear|sheet|slate|sleet|stale|steal|tales|teeth|tesla|there|three|trash
  ["smear-tests","smear","tests","asset","terms",4,"","","asset-terms",28,92,1,4,0], // allWords 30: aster|eases|eater|erase|ester|mares|masse|masts|mates|meats|rates|reset|rests|saree|seams|sears|seats|smart|stare|steam|steer|stems|tamer|tames|teams|tears|tease|terse|trams|trees
  ["poll-stop","stop","poll","lots","plop",4,"","","lots-plop",22,80,3,8,0], // allWords 14: loop|lost|oops|plot|polo|pool|poop|post|pots|slop|slot|solo|spot|tops
  ["apple-salty","apple","salty","apply","slate",2,"","","cannot be reversed",8,87,2,5,0], // allWords 29: allay|aptly|lapel|lapse|leaps|leapt|least|pales|palsy|paste|pasty|patsy|pelts|petal|plate|playa|plays|pleas|pleat|septa|slept|spate|spell|spelt|stale|steal|tales|tapes|tesla
  ["dare-lied","dare","lied","died","earl",3,"","","died-earl",23,92,1,4,0], // allWords 13: dale|dead|deal|dear|deli|dire|idle|lead|lear|read|real|ride|rile
  ["award-terse","award","terse","draws","eater",4,"","","draws-eater",24,87,2,5,0], // allWords 24: aware|dares|dates|erase|ester|rated|reads|reset|saree|stade|stead|steer|swear|sweat|tease|trade|tread|trees|wards|wares|waste|water|wears|wrest
  ["tide-user","tide","user","tire","used",3,"","","tire-used",7,77,4,7,0], // allWords 12: diet|dirt|dues|edit|rest|rite|ruse|sued|sure|tees|tied|tier
  ["pasta-smell","smell","pasta","ample","lasts",5,"ellas","stamp","ample-lasts",35,92,1,4,0], // allWords 32: lamps|lapel|leapt|least|males|maple|masts|mates|meals|meats|melts|palms|petal|plate|pleat|psalm|salsa|salts|slams|slate|slats|smelt|splat|stale|stamp|steal|steam|tales|tames|tapas|teams|tesla
  ["arise-salts","arise","salts","salsa","tries",4,"","","salsa-tries",26,92,1,4,0], // allWords 25: alert|alter|atlas|earls|irate|laser|lasts|later|least|raise|reals|rises|rites|sales|seals|slate|slats|stair|stale|steal|stirs|tales|tesla|tiers|tires
  ["mate-ties","ties","mate","time","eats",3,"","","eats-time",15,86,2,6,0], // allWords 21: east|emit|item|mast|mats|meat|mesa|meta|mist|mite|same|seam|seat|semi|site|stat|tame|tate|team|teas|tits
  ["lets-sell","lets","sell","less","tell",3,"","","cannot be reversed",8,81,3,7,0], // allWords 2: lest|sets
  ["press-purse","press","purse","spree","spurs",2,"","","spree-spurs",8,87,2,5,0], // allWords 3: peers|speer|super
  ["dense-edges","dense","edges","sense","edged",4,"","","edged-sense",14,92,1,4,0], // allWords 4: ended|geese|needs|sends
  ["isle-seal","isle","seal","else","sail",3,"elis","lase","else-sail",10,92,1,4,0], // allWords 7: ease|eels|less|lies|sale|seas|sell
  ["agog-gory","agog","gory","grog","yoga",4,"","","cannot be reversed",22,86,2,6,0], // allWords 1: orgy
  ["acid-dash","acid","dash","chai","adds",3,"","","adds-chai",16,92,1,4,0], // allWords 2: cash|dads
  ["eager-llama","eager","llama","realm","algae",4,"","","algae-realm",26,92,1,4,0], // allWords 12: agree|alarm|eagle|gamer|glare|gleam|lager|large|legal|leger|marge|regal
  ["goal-solo","solo","goal","also","logo",3,"","","also-logo",18,79,3,9,0], // allWords 0
  ["order-roofs","order","roofs","error","foods",3,"","","error-foods",10,92,1,4,0], // allWords 4: doers|doser|fords|rodeo
  ["tune-twin","twin","tune","unit","went",3,"","","unit-went",11,81,3,7,0], // allWords 1: newt
  ["array-merge","merge","array","agree","marry",3,"","","agree-marry",9,92,1,4,0], // allWords 2: eager|rager
  ["deer-ogre","ogre","deer","ergo","reed",3,"","","ergo-reed",19,82,3,6,0], // allWords 2: edge|gore
  ["alter-tease","tease","alter","eater","stale",3,"","","cannot be reversed",21,87,2,5,0], // allWords 12: alert|areas|aster|later|least|rates|slate|stare|steal|tales|tears|tesla
  ["basal-sails","basal","sails","basil","salsa",2,"","","basil-salsa",9,92,1,4,0], // allWords 4: alias|balls|labia|slabs
  ["elder-lodge","elder","lodge","ledge","older",3,"","","ledge-older",8,92,1,4,0], // allWords 1: erode
  ["rare-rate","rare","rate","rear","tear",2,"","","cannot be reversed",15,81,3,7,0], // allWords 0
  ["asset-sweat","sweat","asset","seats","waste",2,"","","seats-waste",18,80,3,8,0], // allWords 5: stews|swats|sweet|tease|wests
  ["opal-roll","roll","opal","oral","poll",2,"","","oral-poll",6,77,4,7,0], // allWords 0
  ["lout-onto","onto","lout","tool","unto",4,"","","tool-unto",14,92,1,4,0], // allWords 2: loot|otto
  ["steer-tents","steer","tents","enter","tests",3,"","","enter-tests",10,87,2,5,0], // allWords 12: ester|nests|rents|reset|sense|sneer|stent|stern|teens|tense|terse|trees
  ["pros-yaps","pros","yaps","soap","spry",4,"","","soap-spry",23,92,1,4,0], // allWords 2: pays|rosy
  ["agog-seas","agog","seas","goes","saga",5,"","","goes-saga",26,92,1,4,0], // allWords 5: ages|egos|gaga|sage|sago
  ["slang-tutor","slang","tutor","gloat","runts",5,"","","gloat-runts",32,92,1,4,0], // allWords 9: gaunt|goals|gusto|snarl|solar|stung|tours|trout|turns
  ["lance-scout","scout","lance","uncle","coast",5,"","","coast-uncle",25,92,1,4,0], // allWords 9: ascot|aunts|autos|canes|clean|clout|coats|scant|tacos
  ["leek-less","less","leek","elks","else",3,"","","cannot be reversed",17,82,3,6,0], // allWords 2: eels|keel
  ["pylon-tease","pylon","tease","elope","nasty",5,"","","elope-nasty",33,92,1,4,0], // allWords 11: atone|panes|pansy|pease|peels|sleep|sleet|steel|style|yeast|yelps
  ["magic-there","magic","there","cream","eight",6,"","","cream-eight",33,92,1,4,0], // allWords 15: carte|cater|chime|crate|eater|ether|ethic|gamer|grate|great|image|marge|react|three|trace
  ["aides-greet","aides","greet","siege","tread",5,"","","siege-tread",32,92,1,4,0], // allWords 11: aside|dares|dregs|eater|erase|ideas|rated|reads|saree|serge|trade
  ["drop-roof","drop","roof","ford","poor",4,"","","cannot be reversed",22,80,3,8,0], // allWords 2: food|prod
  ["flap-oops","oops","flap","plop","sofa",4,"","","plop-sofa",23,92,1,4,0], // allWords 4: also|opal|poop|slop
  ["edit-lime","lime","edit","deli","item",4,"","","deli-item",20,87,2,5,0], // allWords 10: deem|diet|emit|idle|lied|mile|mite|tide|tied|time
  ["pass-swab","swab","pass","bass","swap",4,"","","bass-swap",23,82,3,6,0], // allWords 4: baas|paws|saps|wasp
  ["elder-necks","elder","necks","clerk","dense",5,"","","clerk-dense",28,92,1,4,0], // allWords 5: creek|ender|lends|needs|scene
  ["chief-veins","veins","chief","finch","sieve",4,"","","finch-sieve",28,92,1,4,0], // allWords 4: chins|hives|since|vines
  ["grail-moose","grail","moose","igloo","smear",5,"","","igloo-smear",33,92,1,4,0], // allWords 10: gears|goals|goers|goose|logos|looms|mares|mores|ogres|rages
  ["eyed-pose","pose","eyed","dope","eyes",4,"","","dope-eyes",19,76,4,8,0], // allWords 4: does|dose|dyes|pods
  ["good-tree","good","tree","dote","ergo",4,"","","dote-ergo",23,92,1,4,0], // allWords 3: gore|ogre|tore
  ["agile-demon","agile","demon","lined","omega",5,"","","lined-omega",32,92,1,4,0], // allWords 10: alien|align|among|dingo|doing|gleam|glide|liang|mango|monde
  ["decay-third","third","decay","dried","yacht",6,"","","dried-yacht",33,92,1,4,0], // allWords 6: acted|aided|cadet|decry|tired|tried
  ["ease-yaks","yaks","ease","easy","sake",3,"","","easy-sake",23,75,4,9,0], // allWords 2: says|seas
  ["lined-rocks","lined","rocks","drone","slick",3,"","","drone-slick",8,92,1,4,0], // allWords 29: cider|close|coder|cores|corks|credo|cried|cries|decor|diner|dolce|drink|kilns|licks|liens|lines|links|locks|olden|reins|resin|rinse|risen|score|senor|siren|slice|slink|snore
  ["acts-over","acts","over","core","vast",3,"","","core-vast",19,87,2,5,0], // allWords 15: aces|acre|care|cart|case|cast|cats|cost|race|rave|rove|save|scot|vase|vera
  ["came-sink","came","sink","nice","mask",4,"","","mask-nice",12,92,1,4,0], // allWords 15: acne|cane|mace|mack|mesa|mice|nick|same|sane|sank|seam|semi|sine|skim|skin
  ["lead-skit","lead","skit","tale","disk",3,"","","disk-tale",19,92,1,4,0], // allWords 22: dale|deal|deli|dies|east|eats|idle|kids|kits|late|lied|lite|seat|side|site|skid|talk|task|teal|teas|ties|tile
  ["lacks-voter","lacks","voter","cover","talks",3,"","","cover-talks",8,87,2,5,0], // allWords 26: alert|alter|avert|carve|caves|clear|close|crave|laces|later|least|locks|overt|scale|slack|slate|stale|stalk|stave|steal|stole|stove|tales|tesla|trove|votes
  ["lint-weak","weak","lint","knew","tail",4,"","","knew-tail",23,92,1,4,0], // allWords 15: kale|kiln|lake|late|leak|lent|link|newt|tale|teal|twin|wait|wake|went|wink
  ["heart-knots","knots","heart","skate","thorn",4,"","","skate-thorn",28,87,2,5,0], // allWords 29: earth|ethos|hares|haste|hater|hates|hears|heats|heros|horns|horse|north|other|rakes|ranks|share|shear|shore|shorn|snark|stake|stank|steak|stoke|taker|takes|tanks|theta|those
  ["rope-talk","rope","talk","late","pork",3,"","","late-pork",8,75,4,9,0], // allWords 16: earl|lark|lear|lore|park|pear|peat|poet|pore|real|reap|repo|role|tale|tape|teal
  ["prime-stalk","prime","stalk","plate","smirk",4,"","","plate-smirk",13,92,1,4,0], // allWords 32: earls|emits|islet|items|laser|leapt|least|mares|marks|mates|meats|mites|paler|pearl|peril|petal|pleat|reals|riles|slate|smear|smite|stale|steal|steam|tales|talks|tames|teams|tesla|tiles|times
  ["skirt-teach","skirt","teach","stare","thick",4,"","","stare-thick",25,92,1,4,0], // allWords 39: aches|aster|caste|chase|cheat|cites|earth|ethic|hacks|hares|hater|hears|heart|heirs|hicks|hires|karts|rates|rites|shack|share|shark|shear|shire|shirk|stack|stark|stick|tacks|tater|tears|tetra|their|ticks|tiers|tires|treat|tries|trite
  ["haven-sorts","sorts","haven","north","saves",4,"","","north-saves",25,92,1,4,0], // allWords 29: earns|hares|haves|hears|heron|heros|horse|horst|nears|ovens|rants|roses|sears|senor|share|shave|shear|shore|short|shove|snare|snore|snort|sores|stars|thorn|trans|trash|vases
  ["leak-mint","leak","mint","link","meat",2,"","","link-meat",2,87,2,5,0], // allWords 16: kale|kiln|lake|late|lent|lint|make|maki|mate|meta|mink|tail|tale|tame|teal|team
  ["roach-veins","veins","roach","havoc","siren",3,"","","havoc-siren",18,92,1,4,0], // allWords 24: acres|arson|cares|caves|chive|choir|cries|earns|haven|irons|nears|orcas|races|reach|reins|resin|rhino|rinse|risen|scare|snare|sonar|vices|vines
  ["hung-silk","silk","hung","hulk","sing",2,"","","hulk-sing",1,92,1,4,0], // allWords 13: gnus|guns|hunk|lugs|nigh|sign|sink|skin|slug|snug|sulk|sung|sunk
  ["brook-steal","steal","brook","break","stool",2,"","","break-stool",2,87,2,5,0], // allWords 25: baker|bleat|bloat|brake|broke|earls|laser|least|loser|rakes|reals|roles|skate|slate|solar|stake|stale|steak|stoke|stole|table|takes|tales|tesla|tools
  ["cater-sinks","cater","sinks","nicer","tasks",4,"","","nicer-tasks",15,87,2,5,0], // allWords 45: asset|aster|canes|carte|caste|cites|crane|crank|crate|earns|karts|nears|nicks|rance|ranks|rates|react|reins|resin|rinse|risen|rites|seats|since|siren|sites|skins|skirt|skits|snack|snare|snark|stack|stare|stark|stick|tacks|tears|ticks|tiers|tires|trace|track|trick|tries
  ["remix-tales","remix","tales","relax","times",4,"","","relax-times",13,92,1,4,0], // allWords 35: earls|emits|exalt|islet|items|laser|latex|laxer|least|leers|liars|mares|mates|meats|meets|mites|mixer|rails|reals|reels|riles|slate|sleet|smear|smite|stale|steal|steam|steel|tails|tames|teams|teems|tesla|tiles
  ["jest-park","jest","park","past","jerk",2,"","","jerk-past",1,82,3,6,0], // allWords 12: jets|part|pats|perk|pest|pets|rapt|spat|step|taps|tarp|trap
  ["disc-kale","kale","disc","lied","sack",4,"","","lied-sack",14,92,1,4,0], // allWords 16: cask|clad|dale|deal|deli|dies|idle|lack|lake|lead|leak|lick|like|sake|sick|side
  ["lame-tusk","lame","tusk","sulk","mate",3,"","","mate-sulk",8,82,3,6,0], // allWords 15: east|eats|male|meal|meat|meta|mule|mute|sale|seal|seat|tame|task|team|teas
];

const puzzleClues = {
  "sassy-treat": "school paper · opening point",
  "euro-spot": "mistake sound · not false",
  "abet-less": "flying mammals · otherwise | flip",
  "fees-stat": "not dangerous · exam",
  "flee-list": "small island · departed",
  "reset-snide": "bury formally · plant starters | flip",
  "erase-straw": "conscious · pauses",
  "raspy-stare": "creative type · extra",
  "open-tens": "walking move · zero amount",
  "past-site": "sunrise direction · pointers",
  "earth-steel": "change · nearby ones",
  "smear-tests": "valuable holding · conditions",
  "poll-stop": "many · heavy drop sound",
  "apple-salty": "submit request · roof layer",
  "dare-lied": "no longer lived · minor noble",
  "award-terse": "pulls · one who consumes",
  "tide-user": "wheel covering · put to work",
  "pasta-smell": "plentiful · continues",
  "arise-salts": "spicy dance · attempts",
  "mate-ties": "clock measure · consumes",
  "lets-sell": "not as much · recount",
  "press-purse": "wild outing · urges on",
  "dense-edges": "meaning · inched sideways",
  "isle-seal": "otherwise · canvas mover",
  "agog-gory": "pirate drink · stretch ritual",
  "acid-dash": "spiced tea · puts in more",
  "eager-llama": "kingdom domain · pond growth | flip",
  "goal-solo": "in addition · brand emblem | flip",
  "order-roofs": "mistake · edibles | flip",
  "tune-twin": "single thing · departed",
  "array-merge": "see eye to eye · join at altar",
  "deer-ogre": "therefore · marsh grass",
  "alter-tease": "one who consumes · no longer fresh",
  "basal-sails": "herb for pesto · spicy dance",
  "elder-lodge": "narrow shelf · less young",
  "rare-rate": "back end · rip apart",
  "asset-sweat": "places to sit · squander",
  "opal-roll": "spoken aloud · survey count",
  "lout-onto": "handy implement · old-style to",
  "steer-tents": "go inside · challenges",
  "pros-yaps": "wash bar · lively",
  "agog-seas": "travels · long tale",
  "slang-tutor": "smug crowing · litter’s smallest | flip",
  "lance-scout": "parent’s brother · shoreline",
  "leek-less": "large deer · otherwise",
  "pylon-tease": "run off to wed · unpleasant",
  "magic-there": "rich dairy top · spider number | flip",
  "aides-greet": "long blockade · footstep",
  "drop-roof": "shallow crossing · not wealthy",
  "flap-oops": "heavy drop sound · lounge seat",
  "edit-lime": "sandwich counter · list piece",
  "pass-swab": "low fish · exchange",
  "elder-necks": "office worker · tightly packed",
  "chief-veins": "small songbird · kitchen strainer",
  "grail-moose": "snow hut · spread thinly",
  "eyed-pose": "foolish person · vision organs",
  "good-tree": "adore · therefore",
  "agile-demon": "striped · final Greek letter",
  "decay-third": "dehydrated · pleasure boat",
  "ease-yaks": "not difficult · for this reason",
  "lined-rocks": "flying hum · smooth and glossy",
  "acts-over": "deep middle · immense",
  "came-sink": "pleasant · disguise cover",
  "lead-skit": "story · flat round plate",
  "lacks-voter": "conceal · chats",
  "lint-weak": "understood · animal rear",
  "heart-knots": "glide on ice · rose prickle",
  "rope-talk": "not on time · pig meat",
  "prime-stalk": "dinner surface · smug half-smile",
  "skirt-teach": "fixed gaze · not thin",
  "haven-sorts": "compass top · rescues",
  "leak-mint": "connection · butcher’s cut",
  "roach-veins": "wild disorder · warning wail",
  "hung-silk": "massive brute · carry a tune",
  "brook-steal": "fracture · backless seat",
  "cater-sinks": "more pleasant · chores",
  "remix-tales": "loosen up · multiplied by",
  "jest-park": "before now · sudden twitch",
  "disc-kale": "told a fib · rough bag",
  "lame-tusk": "silent brood · close friend",
};

const clueBonusWords = {
  "sassy-treat": ["artsy","assay","asset","aster","rates","rests","satay","seats","stare","stars","state","stats","stays","stray","tarts","taste","tater","tears","teary","tetra","trays","tyres","years","yeast"],
  "euro-spot": ["ours","outs","poet","pore","post","pots","pros","repo","rope","rust","sour","stop","tops"],
  "abet-less": ["base","bass","beat","belt","beta","ease","east","eats","eels","lest","lets","seas","seat","stab","tabs","teas","tele"],
  "fees-stat": ["east","eats","fast","fate","fats","feat","feet","feta","fete","seas","seat","sees","sets","teas","tees"],
  "flee-list": ["feel","felt","fist","fits","lies","lite","self","sell","sift","slit","tell","tile"],
  "reset-snide": ["diets","diner","edits","eerie","ester","inert","inset","nerds","nests","reeds","rents","seine","sends","sense","sited","sneer","steer","stein","stern","terse","tides","tired","trees","tried"],
  "erase-straw": ["areas","asset","aster","eater","ester","rates","rears","reset","saree","sears","seats","stare","steer","swats","swear","sweat","tears","tease","terse","trees","wares","warts","waste","water","wears","wrest"],
  "raspy-stare": ["areas","array","aster","parse","party","paste","pasty","patsy","pears","pests","prays","rates","rears","rests","sears","septa","spate","spear","spray","steps","stray","strep","taper","tapes","tears","terra","trays"],
  "open-tens": ["eons","neon","nest","nets","nope","nose","ones","pest","pets","pons","pose","sent","teen","tees"],
  "past-site": ["apes","eats","pats","peas","peat","pies","pits","seas","seat","sits","spat","spit","stat","tape","taps","teas","ties","tits"],
  "earth-steel": ["alert","earls","easel","ether","hares","haste","hater","hates","hears","heart","heats","laser","later","lease","least","reals","share","shear","sheet","slate","sleet","stale","steal","tales","teeth","tesla","there","three","trash"],
  "smear-tests": ["aster","eases","eater","erase","ester","mares","masse","masts","mates","meats","rates","reset","rests","saree","seams","sears","seats","smart","stare","steam","steer","stems","tamer","tames","teams","tears","tease","terse","trams","trees"],
  "poll-stop": ["loop","lost","oops","plot","polo","pool","poop","post","pots","slop","slot","solo","spot","tops"],
  "apple-salty": ["allay","aptly","lapel","lapse","leaps","leapt","least","pales","palsy","paste","pasty","patsy","pelts","petal","plate","playa","plays","pleas","pleat","septa","slept","spate","spell","spelt","stale","steal","tales","tapes","tesla"],
  "dare-lied": ["dale","dead","deal","dear","deli","dire","idle","lead","lear","read","real","ride","rile"],
  "award-terse": ["aware","dares","dates","erase","ester","rated","reads","reset","saree","stade","stead","steer","swear","sweat","tease","trade","tread","trees","wards","wares","waste","water","wears","wrest"],
  "tide-user": ["diet","dirt","dues","edit","rest","rite","ruse","sued","sure","tees","tied","tier"],
  "pasta-smell": ["lamps","lapel","leapt","least","males","maple","masts","mates","meals","meats","melts","palms","petal","plate","pleat","psalm","salsa","salts","slams","slate","slats","smelt","splat","stale","stamp","steal","steam","tales","tames","tapas","teams","tesla"],
  "arise-salts": ["alert","alter","atlas","earls","irate","laser","lasts","later","least","raise","reals","rises","rites","sales","seals","slate","slats","stair","stale","steal","stirs","tales","tesla","tiers","tires"],
  "mate-ties": ["east","emit","item","mast","mats","meat","mesa","meta","mist","mite","same","seam","seat","semi","site","stat","tame","tate","team","teas","tits"],
  "lets-sell": ["lest","sets"],
  "press-purse": ["peers","speer","super"],
  "dense-edges": ["ended","geese","needs","sends"],
  "isle-seal": ["ease","eels","less","lies","sale","seas","sell"],
  "agog-gory": ["orgy"],
  "acid-dash": ["cash","dads"],
  "eager-llama": ["agree","alarm","eagle","gamer","glare","gleam","lager","large","legal","leger","marge","regal"],
  "order-roofs": ["doers","doser","fords","rodeo"],
  "tune-twin": ["newt"],
  "array-merge": ["eager","rager"],
  "deer-ogre": ["edge","gore"],
  "alter-tease": ["alert","areas","aster","later","least","rates","slate","stare","steal","tales","tears","tesla"],
  "basal-sails": ["alias","balls","labia","slabs"],
  "elder-lodge": ["erode"],
  "asset-sweat": ["stews","swats","sweet","tease","wests"],
  "lout-onto": ["loot","otto"],
  "steer-tents": ["ester","nests","rents","reset","sense","sneer","stent","stern","teens","tense","terse","trees"],
  "pros-yaps": ["pays","rosy"],
  "agog-seas": ["ages","egos","gaga","sage","sago"],
  "slang-tutor": ["gaunt","goals","gusto","snarl","solar","stung","tours","trout","turns"],
  "lance-scout": ["ascot","aunts","autos","canes","clean","clout","coats","scant","tacos"],
  "leek-less": ["eels","keel"],
  "pylon-tease": ["atone","panes","pansy","pease","peels","sleep","sleet","steel","style","yeast","yelps"],
  "magic-there": ["carte","cater","chime","crate","eater","ether","ethic","gamer","grate","great","image","marge","react","three","trace"],
  "aides-greet": ["aside","dares","dregs","eater","erase","ideas","rated","reads","saree","serge","trade"],
  "drop-roof": ["food","prod"],
  "flap-oops": ["also","opal","poop","slop"],
  "edit-lime": ["deem","diet","emit","idle","lied","mile","mite","tide","tied","time"],
  "pass-swab": ["baas","paws","saps","wasp"],
  "elder-necks": ["creek","ender","lends","needs","scene"],
  "chief-veins": ["chins","hives","since","vines"],
  "grail-moose": ["gears","goals","goers","goose","logos","looms","mares","mores","ogres","rages"],
  "eyed-pose": ["does","dose","dyes","pods"],
  "good-tree": ["gore","ogre","tore"],
  "agile-demon": ["alien","align","among","dingo","doing","gleam","glide","liang","mango","monde"],
  "decay-third": ["acted","aided","cadet","decry","tired","tried"],
  "ease-yaks": ["says","seas"],
  "lined-rocks": ["cider","close","coder","cores","corks","credo","cried","cries","decor","diner","dolce","drink","kilns","licks","liens","lines","links","locks","olden","reins","resin","rinse","risen","score","senor","siren","slice","slink","snore"],
  "acts-over": ["aces","acre","care","cart","case","cast","cats","cost","race","rave","rove","save","scot","vase","vera"],
  "came-sink": ["acne","cane","mace","mack","mesa","mice","nick","same","sane","sank","seam","semi","sine","skim","skin"],
  "lead-skit": ["dale","deal","deli","dies","east","eats","idle","kids","kits","late","lied","lite","seat","side","site","skid","talk","task","teal","teas","ties","tile"],
  "lacks-voter": ["alert","alter","avert","carve","caves","clear","close","crave","laces","later","least","locks","overt","scale","slack","slate","stale","stalk","stave","steal","stole","stove","tales","tesla","trove","votes"],
  "lint-weak": ["kale","kiln","lake","late","leak","lent","link","newt","tale","teal","twin","wait","wake","went","wink"],
  "heart-knots": ["earth","ethos","hares","haste","hater","hates","hears","heats","heros","horns","horse","north","other","rakes","ranks","share","shear","shore","shorn","snark","stake","stank","steak","stoke","taker","takes","tanks","theta","those"],
  "rope-talk": ["earl","lark","lear","lore","park","pear","peat","poet","pore","real","reap","repo","role","tale","tape","teal"],
  "prime-stalk": ["earls","emits","islet","items","laser","leapt","least","mares","marks","mates","meats","mites","paler","pearl","peril","petal","pleat","reals","riles","slate","smear","smite","stale","steal","steam","tales","talks","tames","teams","tesla","tiles","times"],
  "skirt-teach": ["aches","aster","caste","chase","cheat","cites","earth","ethic","hacks","hares","hater","hears","heart","heirs","hicks","hires","karts","rates","rites","shack","share","shark","shear","shire","shirk","stack","stark","stick","tacks","tater","tears","tetra","their","ticks","tiers","tires","treat","tries","trite"],
  "haven-sorts": ["earns","hares","haves","hears","heron","heros","horse","horst","nears","ovens","rants","roses","sears","senor","share","shave","shear","shore","short","shove","snare","snore","snort","sores","stars","thorn","trans","trash","vases"],
  "leak-mint": ["kale","kiln","lake","late","lent","lint","make","maki","mate","meta","mink","tail","tale","tame","teal","team"],
  "roach-veins": ["acres","arson","cares","caves","chive","choir","cries","earns","haven","irons","nears","orcas","races","reach","reins","resin","rhino","rinse","risen","scare","snare","sonar","vices","vines"],
  "hung-silk": ["gnus","guns","hunk","lugs","nigh","sign","sink","skin","slug","snug","sulk","sung","sunk"],
  "brook-steal": ["baker","bleat","bloat","brake","broke","earls","laser","least","loser","rakes","reals","roles","skate","slate","solar","stake","stale","steak","stoke","stole","table","takes","tales","tesla","tools"],
  "cater-sinks": ["asset","aster","canes","carte","caste","cites","crane","crank","crate","earns","karts","nears","nicks","rance","ranks","rates","react","reins","resin","rinse","risen","rites","seats","since","siren","sites","skins","skirt","skits","snack","snare","snark","stack","stare","stark","stick","tacks","tears","ticks","tiers","tires","trace","track","trick","tries"],
  "remix-tales": ["earls","emits","exalt","islet","items","laser","latex","laxer","least","leers","liars","mares","mates","meats","meets","mites","mixer","rails","reals","reels","riles","slate","sleet","smear","smite","stale","steal","steam","steel","tails","tames","teams","teems","tesla","tiles"],
  "jest-park": ["jets","part","pats","perk","pest","pets","rapt","spat","step","taps","tarp","trap"],
  "disc-kale": ["cask","clad","dale","deal","deli","dies","idle","lack","lake","lead","leak","lick","like","sake","sick","side"],
  "lame-tusk": ["east","eats","male","meal","meat","meta","mule","mute","sale","seal","seat","tame","task","team","teas"],
};
