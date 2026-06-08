// TEMPORARY Mode 20 output. Do not treat as reviewed_puzzles.js unless manually approved.
const puzzleRows = [
  ["brace-delta","delta","brace","cedar","table",4,"","","cedar-table",25,86,2,6,0], // allWords 15: abate|bleat|cable|cadre|cared|celeb|clade|dealt|decal|laced|rabat|raced|rated|trade|tread
  ["flip-girl","flip","girl","fill","grip",2,"","","fill-grip",6,75,4,9,0], // allWords 1: gill
  ["brass-fiery","fiery","brass","basis","ferry",2,"","","basis-ferry",6,92,1,4,0], // allWords 8: berry|fairs|fairy|fires|fries|fryer|serfs|serif
  ["data-feet","data","feet","date","feat",3,"","","date-feat",9,86,2,6,0], // allWords 3: fate|feta|fete
  ["aced-gave","aced","gave","aged","cave",3,"","","aged-cave",9,92,1,4,0], // allWords 0
  ["good-tree","good","tree","dote","ergo",4,"","","dote-ergo",23,92,1,4,0], // allWords 3: gore|ogre|tore
  ["lists-madly","madly","lists","dimly","salts",3,"","","dimly-salts",14,77,4,7,0], // allWords 14: dally|dilly|lasts|masts|midst|mists|misty|salty|sills|silly|slams|slats|slimy|slits
  ["life-open","open","life","info","peel",4,"","","info-peel",15,92,1,4,0], // allWords 4: file|lien|line|nope
  ["chase-roach","chase","roach","coach","share",3,"","","coach-share",22,87,2,5,0], // allWords 9: aches|arose|cache|chaos|hares|harsh|hears|reach|shear
  ["ember-heals","ember","heals","rebel","shame",4,"","","rebel-shame",26,92,1,4,0], // allWords 9: easel|hales|harem|lease|leash|males|meals|realm|shale
  ["disc-hard","hard","disc","card","dish",4,"","","card-dish",23,87,2,5,0], // allWords 7: adds|arch|cash|char|dads|dash|rich
  ["seat-sons","seat","sons","seas","tons",3,"","","cannot be reversed",23,86,2,6,0], // allWords 9: east|eats|ness|nest|nets|oats|sent|teas|tens
  ["giant-purge","giant","purge","print","gauge",3,"","","gauge-print",8,92,1,4,0], // allWords 7: gaunt|gripe|grunt|paint|prune|reign|ripen
  ["trail-tuned","tuned","trail","rated","until",3,"","","rated-until",8,86,2,6,0], // allWords 9: alert|alter|audit|later|trade|tread|trend|triad|trial
  ["beard-flout","beard","flout","bored","fault",2,"","","bored-fault",7,92,1,4,0], // allWords 5: after|bared|bread|fared|forte
  ["head-stop","head","stop","does","path",5,"","","does-path",26,92,1,4,0], // allWords 16: apes|dose|doth|dots|heap|hope|past|pats|peas|pose|post|pots|spat|spot|taps|tops
  ["lift-such","such","lift","cult","fish",4,"","","cult-fish",12,92,1,4,0], // allWords 5: cuts|fist|fits|flit|sift
  ["curve-poles","curve","poles","clues","prove",3,"","","clues-prove",11,92,1,4,0], // allWords 20: close|clove|cores|cover|cures|curse|elope|lopes|pores|poser|prose|pulse|puree|purse|ropes|rupee|score|slope|spore|super
  ["gear-outs","gear","outs","ages","tour",2,"","","ages-tour",9,87,2,5,0], // allWords 9: aero|gets|gust|guts|rage|ragu|sage|toes|tore
  ["manly-sided","manly","sided","mined","sadly",2,"","","mined-sadly",3,92,1,4,0], // allWords 9: amend|deans|denim|dimly|lands|madly|named|sedan|snide
  ["shave-sweat","shave","sweat","heats","waves",2,"","","heats-waves",7,76,4,8,0], // allWords 4: haste|hates|haves|waste
  ["arch-idea","arch","idea","acid","hear",3,"","","acid-hear",19,92,1,4,0], // allWords 10: aide|area|chad|char|hare|head|heir|hide|hire|rich
  ["drug-know","drug","know","gunk","word",5,"","","gunk-word",26,82,3,6,0], // allWords 4: dong|down|dung|work
  ["acted-poses","acted","poses","cases","opted",3,"","","cases-opted",8,82,3,6,0], // allWords 10: cadet|caste|depot|dopes|pesos|pesto|poets|posed|posse|specs
  ["away-ribs","away","ribs","awry","bias",3,"","","awry-bias",8,87,2,5,0], // allWords 6: airs|airy|sari|swab|wars|wary
  ["kings-spear","spear","kings","rings","speak",4,"","","rings-speak",25,92,1,4,0], // allWords 15: arise|grins|parse|peaks|pears|prank|rains|raise|sarin|signs|sings|snaps|spank|spans|spare
  ["opera-vines","opera","vines","apron","sieve",4,"","","apron-sieve",29,92,1,4,0], // allWords 10: irons|naive|noise|opens|pores|poser|prose|ropes|spore|veins
  ["chuck-grips","chuck","grips","chugs","prick",4,"","","cannot be reversed",26,92,1,4,0], // allWords 5: chick|chips|crick|crisp|scrip
  ["epic-tags","tags","epic","spit","cage",4,"","","cage-spit",23,86,2,6,0], // allWords 6: ages|pies|pits|sage|stag|tips
  ["agog-dirt","dirt","agog","grid","toga",4,"","","grid-toga",22,82,3,6,0], // allWords 2: gird|goat
  ["crank-isles","crank","isles","races","slink",3,"","","races-slink",10,81,3,7,0], // allWords 16: acres|arise|cakes|cares|cases|clerk|kilns|likes|links|rains|raise|riles|sarin|scans|scare|snack
  ["lover-tasty","tasty","lover","salty","voter",3,"","","salty-voter",7,87,2,5,0], // allWords 18: aster|avert|earls|laser|loser|overt|rates|ravel|reals|roles|stare|start|store|tarts|tears|torts|trove|yeast
  ["book-rule","rule","book","blue","rook",2,"","","blue-rook",8,81,3,7,0], // allWords 8: bulk|euro|lobe|lore|lube|lure|lurk|role
  ["ears-lamp","lamp","ears","pear","slam",2,"","","pear-slam",7,92,1,4,0], // allWords 8: eras|lars|mesa|palm|reap|same|seam|sera
  ["cedar-seven","seven","cedar","dance","verse",3,"","","dance-verse",17,92,1,4,0], // allWords 19: cadre|cared|carve|crave|creed|dares|deans|dense|evens|needs|raced|raves|reads|reeds|saver|sedan|serve|sever|veers
  ["neon-stop","neon","stop","none","post",2,"","","none-post",15,86,2,6,0], // allWords 10: eons|nope|nose|ones|open|pose|pots|spot|tons|tops
  ["left-vibe","left","vibe","five","belt",3,"","","belt-five",9,87,2,5,0], // allWords 8: bile|feel|felt|file|flee|flit|life|lift
  ["lets-loop","lets","loop","pelt","solo",3,"","","pelt-solo",22,87,2,5,0], // allWords 10: lest|lose|lost|lots|plot|pole|polo|pool|slot|sole
  ["shout-smear","shout","smear","meats","hours",2,"","","hours-meats",5,92,1,4,0], // allWords 19: atoms|hares|haste|hates|hears|heats|mares|mates|moats|mutes|oaths|serum|share|shear|south|steam|tames|teams|usher
  ["leads-raven","raven","leads","nerve","salad",3,"","","nerve-salad",20,92,1,4,0], // allWords 22: areas|arena|dales|dares|deals|easel|elves|erase|laden|lease|navel|never|raves|reads|salve|saree|saver|serve|sever|slave|veers|verse
];

const puzzleClues = {
  "brace-delta": "fragrant timber · data grid",
  "flip-girl": "make full · hold tightly | flip",
  "brass-fiery": "foundation · water shuttle",
  "data-feet": "calendar square · impressive act",
  "aced-gave": "grown old · hollow shelter",
  "good-tree": "adore · therefore",
  "lists-madly": "faintly · seasoning crystals",
  "life-open": "key facts · fruit jacket",
  "chase-roach": "sports instructor · portion together",
  "ember-heals": "defiant outsider · disgrace",
  "disc-hard": "playing rectangle · serving plate",
  "seat-sons": "oceans · large amounts",
  "giant-purge": "printed copy · measuring dial",
  "trail-tuned": "ranked · up to then",
  "beard-flout": "lost interest · defect",
  "head-stop": "performs · route",
  "lift-such": "devoted sect · sea creature",
  "curve-poles": "hints · show true",
  "gear-outs": "years lived · guided journey",
  "manly-sided": "dug up · with sorrow",
  "shave-sweat": "warms up · ripples",
  "arch-idea": "sour chemical · catch sound",
  "drug-know": "sticky muck · dictionary unit",
  "acted-poses": "examples · selected",
  "away-ribs": "crookedly off · slanted view",
  "kings-spear": "circles · use words",
  "opera-vines": "kitchen cover · kitchen strainer",
  "chuck-grips": "drinks in gulps · sharp point | flip",
  "epic-tags": "mouth missile · barred enclosure",
  "agog-dirt": "letter lattice · Roman robe",
  "crank-isles": "speed contests · move sneakily | flip",
  "lover-tasty": "seasoned · ballot caster",
  "book-rule": "sad hue · castle piece",
  "ears-lamp": "orchard fruit · door-bang",
  "cedar-seven": "rhythmic steps · poetic lines",
  "neon-stop": "zero amount · mail item",
  "left-vibe": "hand count · waist strap",
  "lets-loop": "animal hide · alone",
  "shout-smear": "butcher cuts · time blocks",
  "leads-raven": "raw courage · leafy meal",
};

const clueBonusWords = {
  "brace-delta": ["abate","bleat","cable","cadre","cared","celeb","clade","dealt","decal","laced","rabat","raced","rated","trade","tread"],
  "flip-girl": ["gill"],
  "brass-fiery": ["berry","fairs","fairy","fires","fries","fryer","serfs","serif"],
  "data-feet": ["fate","feta","fete"],
  "good-tree": ["gore","ogre","tore"],
  "lists-madly": ["dally","dilly","lasts","masts","midst","mists","misty","salty","sills","silly","slams","slats","slimy","slits"],
  "life-open": ["file","lien","line","nope"],
  "chase-roach": ["aches","arose","cache","chaos","hares","harsh","hears","reach","shear"],
  "ember-heals": ["easel","hales","harem","lease","leash","males","meals","realm","shale"],
  "disc-hard": ["adds","arch","cash","char","dads","dash","rich"],
  "seat-sons": ["east","eats","ness","nest","nets","oats","sent","teas","tens"],
  "giant-purge": ["gaunt","gripe","grunt","paint","prune","reign","ripen"],
  "trail-tuned": ["alert","alter","audit","later","trade","tread","trend","triad","trial"],
  "beard-flout": ["after","bared","bread","fared","forte"],
  "head-stop": ["apes","dose","doth","dots","heap","hope","past","pats","peas","pose","post","pots","spat","spot","taps","tops"],
  "lift-such": ["cuts","fist","fits","flit","sift"],
  "curve-poles": ["close","clove","cores","cover","cures","curse","elope","lopes","pores","poser","prose","pulse","puree","purse","ropes","rupee","score","slope","spore","super"],
  "gear-outs": ["aero","gets","gust","guts","rage","ragu","sage","toes","tore"],
  "manly-sided": ["amend","deans","denim","dimly","lands","madly","named","sedan","snide"],
  "shave-sweat": ["haste","hates","haves","waste"],
  "arch-idea": ["aide","area","chad","char","hare","head","heir","hide","hire","rich"],
  "drug-know": ["dong","down","dung","work"],
  "acted-poses": ["cadet","caste","depot","dopes","pesos","pesto","poets","posed","posse","specs"],
  "away-ribs": ["airs","airy","sari","swab","wars","wary"],
  "kings-spear": ["arise","grins","parse","peaks","pears","prank","rains","raise","sarin","signs","sings","snaps","spank","spans","spare"],
  "opera-vines": ["irons","naive","noise","opens","pores","poser","prose","ropes","spore","veins"],
  "chuck-grips": ["chick","chips","crick","crisp","scrip"],
  "epic-tags": ["ages","pies","pits","sage","stag","tips"],
  "agog-dirt": ["gird","goat"],
  "crank-isles": ["acres","arise","cakes","cares","cases","clerk","kilns","likes","links","rains","raise","riles","sarin","scans","scare","snack"],
  "lover-tasty": ["aster","avert","earls","laser","loser","overt","rates","ravel","reals","roles","stare","start","store","tarts","tears","torts","trove","yeast"],
  "book-rule": ["bulk","euro","lobe","lore","lube","lure","lurk","role"],
  "ears-lamp": ["eras","lars","mesa","palm","reap","same","seam","sera"],
  "cedar-seven": ["cadre","cared","carve","crave","creed","dares","deans","dense","evens","needs","raced","raves","reads","reeds","saver","sedan","serve","sever","veers"],
  "neon-stop": ["eons","nope","nose","ones","open","pose","pots","spot","tons","tops"],
  "left-vibe": ["bile","feel","felt","file","flee","flit","life","lift"],
  "lets-loop": ["lest","lose","lost","lots","plot","pole","polo","pool","slot","sole"],
  "shout-smear": ["atoms","hares","haste","hates","hears","heats","mares","mates","moats","mutes","oaths","serum","share","shear","south","steam","tames","teams","usher"],
  "leads-raven": ["areas","arena","dales","dares","deals","easel","elves","erase","laden","lease","navel","never","raves","reads","salve","saree","saver","serve","sever","slave","veers","verse"],
};
