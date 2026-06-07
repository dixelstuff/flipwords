// TEMPORARY Mode 20 output. Do not treat as reviewed_puzzles.js unless manually approved.
const puzzleRows = [
  ["golf-seat","golf","seat","goat","self",2,"","","goat-self",1,92,1,4,0], // allWords 13: east|eats|gate|lest|lets|lost|lots|oats|safe|slot|sofa|teas|toga
  ["car-sip","car","sip","sir","cap",1,"","","cap-sir",0,92,1,4,0], // allWords 5: arc|pac|sap|spa|sri
  ["bay-son","bay","son","soy","ban",1,"","","ban-soy",0,92,1,4,0], // allWords 4: boy|nab|say|yob
  ["film-past","past","film","fist","palm",2,"","","fist-palm",1,92,1,4,0], // allWords 18: amps|fast|fats|fits|flat|flit|lamp|lift|limp|maps|pats|pits|plat|sift|spat|spit|taps|tips
  ["lint-wear","wear","lint","liar","went",2,"","","liar-went",1,87,2,5,0], // allWords 15: earl|lair|late|lear|lent|newt|rail|real|tail|tale|teal|twin|wait|ware|wren
  ["break-stool","break","stool","steal","brook",2,"","","brook-steal",2,92,1,4,0], // allWords 25: baker|bleat|bloat|brake|broke|earls|laser|least|loser|rakes|reals|roles|skate|slate|solar|stake|stale|steak|stoke|stole|table|takes|tales|tesla|tools
  ["bite-hard","bite","hard","bird","hate",2,"","","bird-hate",1,92,1,4,0], // allWords 12: abet|bard|bare|bear|beat|beta|brie|hare|hear|heat|heir|hire
  ["blond-crave","crave","blond","brand","clove",2,"","","brand-clove",2,92,1,4,0], // allWords 14: bland|boner|borne|brave|carve|clean|clone|cover|crane|crone|lance|noble|rance|recon
  ["bison-water","bison","water","wiser","baton",2,"","","baton-wiser",2,92,1,4,0], // allWords 20: abort|beans|bears|biter|boars|orbit|saber|sabre|swear|swine|tabor|tribe|twine|wanes|wares|wears|weirs|wines|wires|write
  ["hulk-sing","hulk","sing","silk","hung",2,"","","hung-silk",1,92,1,4,0], // allWords 13: gnus|guns|hunk|lugs|nigh|sign|sink|skin|slug|snug|sulk|sung|sunk
  ["false-worth","worth","false","flash","wrote",2,"","","flash-wrote",8,87,2,5,0], // allWords 23: after|fares|fears|fetal|fleas|forte|forth|froth|howls|leafs|lowes|safer|shawl|swear|swore|throw|towel|tower|wares|water|wears|worse|wrath
  ["chose-prawn","prawn","chose","crown","phase",2,"","","crown-phase",3,87,2,5,0], // allWords 22: aches|acres|cares|chase|cores|heaps|hopes|parse|pears|pores|poser|power|prose|races|ropes|scare|score|scorn|shape|spare|spear|spore
  ["clean-stork","stork","clean","cloak","stern",2,"","","cloak-stern",3,92,1,4,0], // allWords 17: canto|clerk|enact|lakes|lance|lanes|leaks|leans|loans|rents|salon|santo|skate|snort|stake|steak|takes
  ["duly-mite","mite","duly","duty","mile",1,"","","duty-mile",1,92,1,4,0], // allWords 17: deli|diet|duel|duet|edit|emit|idle|idly|item|lied|lime|mule|mute|tide|tidy|tied|time
  ["chart-slide","slide","chart","clade","shirt",2,"","","clade-shirt",3,92,1,4,0], // allWords 26: chide|clear|dales|deals|decal|ditch|earls|hades|hares|heads|hears|heirs|hides|hires|laced|laser|leads|reach|reals|relic|riles|shade|share|shear|shire|trash
  ["cheap-wrist","wrist","cheap","crisp","wheat",2,"","","crisp-wheat",3,92,1,4,0], // allWords 18: caper|carte|cater|cheat|chest|chips|crate|crest|pacer|peach|react|recap|scrip|teach|trace|water|whips|wrest
  ["place-south","south","place","pouch","slate",2,"","","pouch-slate",3,92,1,4,0], // allWords 20: chaos|clash|clues|coupe|halts|laces|leapt|least|oaths|petal|plate|pleat|poach|scale|shalt|shout|stale|steal|tales|tesla
  ["glut-show","glut","show","glow","shut",2,"","","glow-shut",1,92,1,4,0], // allWords 13: host|huts|lost|lots|lows|lust|owls|shot|slot|slow|slut|thug|thus
  ["dump-lake","dump","lake","lamp","duke",2,"luke","damp","duke-lamp",1,92,1,4,0], // allWords 13: dame|damp|kale|lame|leak|lump|made|male|mead|meal|mule|palm|plum
  ["rile-sand","sand","rile","rind","sale",2,"","","rind-sale",1,87,2,5,0], // allWords 16: darn|earl|earn|isle|lads|lear|lids|lies|near|rand|real|rein|sane|seal|sine|slid
];

const puzzleClues = {
  "golf-seat": "horned farm animal · inner person",
  "car-sip": "polite address · headwear",
  "bay-son": "bean sauce · forbid",
  "film-past": "closed hand · tropical tree | flip",
  "lint-wear": "fibber · departed",
  "break-stool": "take secretly · small stream",
  "bite-hard": "feathered animal · loathe",
  "blond-crave": "maker’s mark · spice segment",
  "bison-water": "more sensible · conductor’s stick",
  "hulk-sing": "smooth fabric · suspended",
  "false-worth": "quick burst · put in words",
  "chose-prawn": "royal headwear · stage period",
  "clean-stork": "concealing garment · severe",
  "duly-mite": "obligation · distance unit",
  "chart-slide": "branch group · upper garment",
  "cheap-wrist": "crunchy · grain crop",
  "place-south": "small bag · roof layer",
  "glut-show": "soft shine · closed",
  "dump-lake": "light source · noble title",
  "rile-sand": "outer peel · discount event",
};

const clueBonusWords = {
  "golf-seat": ["east","eats","gate","lest","lets","lost","lots","oats","safe","slot","sofa","teas","toga"],
  "car-sip": ["arc","pac","sap","spa","sri"],
  "bay-son": ["boy","nab","say","yob"],
  "film-past": ["amps","fast","fats","fits","flat","flit","lamp","lift","limp","maps","pats","pits","plat","sift","spat","spit","taps","tips"],
  "lint-wear": ["earl","lair","late","lear","lent","newt","rail","real","tail","tale","teal","twin","wait","ware","wren"],
  "break-stool": ["baker","bleat","bloat","brake","broke","earls","laser","least","loser","rakes","reals","roles","skate","slate","solar","stake","stale","steak","stoke","stole","table","takes","tales","tesla","tools"],
  "bite-hard": ["abet","bard","bare","bear","beat","beta","brie","hare","hear","heat","heir","hire"],
  "blond-crave": ["bland","boner","borne","brave","carve","clean","clone","cover","crane","crone","lance","noble","rance","recon"],
  "bison-water": ["abort","beans","bears","biter","boars","orbit","saber","sabre","swear","swine","tabor","tribe","twine","wanes","wares","wears","weirs","wines","wires","write"],
  "hulk-sing": ["gnus","guns","hunk","lugs","nigh","sign","sink","skin","slug","snug","sulk","sung","sunk"],
  "false-worth": ["after","fares","fears","fetal","fleas","forte","forth","froth","howls","leafs","lowes","safer","shawl","swear","swore","throw","towel","tower","wares","water","wears","worse","wrath"],
  "chose-prawn": ["aches","acres","cares","chase","cores","heaps","hopes","parse","pears","pores","poser","power","prose","races","ropes","scare","score","scorn","shape","spare","spear","spore"],
  "clean-stork": ["canto","clerk","enact","lakes","lance","lanes","leaks","leans","loans","rents","salon","santo","skate","snort","stake","steak","takes"],
  "duly-mite": ["deli","diet","duel","duet","edit","emit","idle","idly","item","lied","lime","mule","mute","tide","tidy","tied","time"],
  "chart-slide": ["chide","clear","dales","deals","decal","ditch","earls","hades","hares","heads","hears","heirs","hides","hires","laced","laser","leads","reach","reals","relic","riles","shade","share","shear","shire","trash"],
  "cheap-wrist": ["caper","carte","cater","cheat","chest","chips","crate","crest","pacer","peach","react","recap","scrip","teach","trace","water","whips","wrest"],
  "place-south": ["chaos","clash","clues","coupe","halts","laces","leapt","least","oaths","petal","plate","pleat","poach","scale","shalt","shout","stale","steal","tales","tesla"],
  "glut-show": ["host","huts","lost","lots","lows","lust","owls","shot","slot","slow","slut","thug","thus"],
  "dump-lake": ["dame","damp","kale","lame","leak","lump","made","male","mead","meal","mule","palm","plum"],
  "rile-sand": ["darn","earl","earn","isle","lads","lear","lids","lies","near","rand","real","rein","sane","seal","sine","slid"],
};
