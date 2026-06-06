const puzzleRows = [
  ["hill-hunt","hill","hunt","hint","hull",1,"","","hint-hull",1,77,4,7,0], // allWords 1: thin
  ["daddy-rises","daddy","rises","sided","yards",5,"","","cannot be reversed",35,92,1,4,0], // allWords 9: dares|dries|reads|ready|rides|sears|sides|sired|years
  ["brain-tarot","brain","tarot","baron","trait",2,"","","baron-trait",3], // allWords 3: abort|tabor|train
  ["debt-life","debt","life","bide","felt",4,"","","bide-felt",13], // allWords 9: belt|bile|feed|feel|file|flee|flit|left|lift
  ["filth-safer","filth","safer","fifth","laser",3,"","","fifth-laser",8,92,1,4,0], // allWords 26: earls|fares|farts|fears|feral|fires|first|flare|flier|flirt|fries|hales|halts|heals|leash|rafts|reals|rifle|rifts|riles|serif|shaft|shale|shalt|sheaf|shift
  ["relax-tasty","relax","tasty","latex","stray",3,"","","latex-stray",17], // allWords 14: artsy|early|exalt|laxer|layer|leary|relay|satay|taxes|texts|trays|tyres|years|yeast
  ["keen-spin","keen","spin","knee","snip",2,"","","knee-snip",4,8,17,24,0], // allWords 5: pens|pink|pins|seen|sine
  ["lies-toes","lies","toes","site","sole",3,"","","site-sole",19,87,2,5,0], // allWords 3: isle|lose|ties
  ["drop-look","drop","look","dork","loop",2,"","","cannot be reversed",6,87,2,5,0], // allWords 3: polo|pool|prod
  ["cry-sea","cry","sea","arc","yes",3,"","","arc-yes",10], // allWords 2: ace|car
  ["dates-ledge","dates","ledge","edged","steal",4,"","","edged-steal",29,87,2,5,0], // allWords 15: dales|deals|deeds|gated|glade|leads|least|slate|sleet|stade|stale|stead|steed|steel|tales
  ["gate-rice","gate","rice","cage","tire",3,"","","cage-tire",9,76,4,8,0], // allWords 7: acre|care|race|rate|rite|tear|tier
  ["nest-sift","nest","sift","fist","sent",2,"","","fist-sent",4], // allWords 6: fits|nets|sets|sits|tens|tins
  ["bread-known","bread","known","brown","knead",2,"","","brown-knead",1,87,2,5,0], // allWords 7: bared|baron|beard|board|broad|drake|raked
  ["fail-into","fail","into","info","tail",4,"","","info-tail",13,92,1,4,0], // allWords 3: flat|font|lint
  ["fade-peel","fade","peel","feed","pale",2,"","","feed-pale",8,68,5,12,0], // allWords 10: deaf|deep|feel|flea|fled|flee|leaf|leap|peed|plea
  ["goose-paths","goose","paths","hoops","stage",5,"","","hoops-stage",26,87,2,5,0], // allWords 14: gates|ghost|paste|pasts|pesto|poets|posts|septa|soaps|spate|spats|spots|stops|tapes
  ["caves-coral","caves","coral","races","vocal",3,"","","races-vocal",8,87,2,5,0], // allWords 10: acres|cares|carol|clear|clove|cores|orcas|sacra|scare|score
  ["alloy-upset","alloy","upset","loyal","setup",2,"","","loyal-setup",14,76,4,8,0], // allWords 21: alley|allot|atoll|leapt|least|lotus|lousy|paste|petal|plate|pleat|septa|slate|soapy|spate|spout|stale|steal|tales|tapes|tulle
  ["era-war","era","war","are","raw",2,"","","are-raw",5], // allWords 1: ear
  ["shell-stall","shell","stall","halls","tells",2,"","","halls-tells",7,81,3,7,0], // allWords 2: hells|shall
  ["enact-their","enact","their","cheat","inter",3,"","","cheat-inter",18], // allWords 11: chart|cheer|crane|inert|rance|reach|taint|teach|titan|tithe|train
  ["body-cure","body","cure","bury","code",2,"","","bury-code",2,92,1,4,0], // allWords 7: bore|core|cory|deco|ecru|robe|ruby
  ["maple-table","maple","table","blame","plate",3,"","","blame-plate",18,85,2,7,0], // allWords 6: amble|ample|bleat|leapt|petal|pleat
  ["bulk-lime","bulk","lime","lube","milk",3,"","","lube-milk",8,57,7,15,0], // allWords 5: bile|blue|kill|mile|mule
  ["nuts-pack","nuts","pack","cups","tank",4,"","","cups-tank",13], // allWords 11: ants|cans|caps|past|pats|puck|puts|scan|spat|stun|taps
  ["earth-kills","earth","kills","heart","skill",1,"","","heart-skill",3,0,36,67,48], // allWords 28: aster|earls|hater|islet|karts|laser|lathe|least|lisle|rates|reals|riles|rites|skirt|slate|stale|stalk|stare|stark|steal|tales|talks|tears|their|tiers|tiles|tires|tries
  ["meet-shut","meet","shut","teem","thus",2,"","","teem-thus",19,48,9,16,0], // allWords 5: huts|meth|mute|tees|them
  ["maps-swig","maps","swig","gaps","swim",4,"","","gaps-swim",23], // allWords 6: aims|amps|gasp|pass|saps|wigs
  ["new-old","new","old","end","low",2,"","","end-low",7], // allWords 4: den|doe|owe|owl
  ["grab-wild","grab","wild","glib","ward",3,"","","glib-ward",9], // allWords 4: brag|drag|draw|grad
  ["guide-mines","guide","mines","guise","mined",3,"","","guise-mined",4,0,34,37,24], // allWords 8: denim|dings|genie|genus|menus|minds|nudge|singe
  ["drug-mood","drug","mood","drum","good",4,"","","drum-good",23,92,1,4,0], // allWords 4: dodo|doom|dorm|rudd
  ["bean-fart","bean","fart","barn","feat",2,"","","barn-feat",2], // allWords 12: abet|bane|beat|beta|bran|brat|fate|fern|feta|frat|fret|raft
  ["actor-under","actor","under","react","round",3,"","","react-round",18,92,1,4,0], // allWords 16: adorn|cadre|cared|carte|cater|cedar|court|crate|crude|cured|cuter|raced|radon|trace|truce|tuner
  ["grew-wore","grew","wore","grow","were",3,"","","grow-were",9,51,8,17,0], // allWords 3: ergo|gore|ogre
  ["ended-poets","ended","poets","needs","opted",3,"","","needs-opted",19,87,2,5,0], // allWords 13: dense|dents|depot|doped|dopes|dotes|pesto|posed|spend|spent|teens|tends|tense
  ["down-glue","down","glue","lung","owed",2,"","","lung-owed",6], // allWords 6: duel|gown|lewd|udon|undo|weld
  ["din-won","din","won","don","win",1,"","","don-win",0,58,7,14,0], // allWords 3: nod|now|own
  ["nasal-tense","nasal","tense","natal","sense",4,"","","natal-sense",12,76,4,8,0], // allWords 18: asset|atlas|eaten|lanes|lasts|leans|least|salts|seats|senna|slant|slate|slats|stale|steal|tales|tease|teens
  ["angle-bowls","angle","bowls","elbow","slang",3,"","","elbow-slang",18,92,1,4,0], // allWords 8: angel|below|blows|bowel|glean|globe|goals|lawns
  ["cram-sets","cram","sets","cars","stem",2,"","","cars-stem",6], // allWords 14: aces|arcs|arms|came|case|mace|mars|mesa|rams|same|scar|seam|seas|sect
  ["bunny-tried","bunny","tried","briny","tuned",2,"","","briny-tuned",2], // allWords 5: bride|entry|tired|trend|unity
  ["moss-yeti","moss","yeti","semi","toys",4,"","","semi-toys",13,92,1,4,0], // allWords 8: emit|item|mess|miso|mite|most|stem|time
  ["baby-name","baby","name","babe","many",3,"","","cannot be reversed",8,82,3,6,0], // allWords 6: amen|bane|beam|bean|mane|mean
  ["firm-sons","firm","sons","form","sins",1,"","","form-sins",1,25,13,23,0], // allWords 3: fins|from|rims
  ["isle-lazy","lazy","isle","ally","size",2,"","","ally-size",6], // allWords 3: lies|sell|zeal
  ["atlas-erase","atlas","erase","areas","stale",4,"","","areas-stale",25,87,2,5,0], // allWords 19: asset|earls|laser|lasts|least|leers|reals|reels|salts|saree|sears|seats|slate|slats|sleet|steal|steel|tales|tease
  ["buck-laws","buck","laws","cubs","walk",3,"","","cubs-walk",8,82,3,6,0], // allWords 6: awls|back|cabs|lack|luck|swab
  ["relay-renew","relay","renew","layer","newer",2,"","","layer-newer",14], // allWords 3: early|leary|yearn
  ["dial-rats","dial","rats","laid","star",3,"","","laid-star",19,3,18,25,0], // allWords 10: aids|airs|arts|lair|liar|rail|said|sari|stir|tsar
  ["fools-teeth","fools","teeth","feels","tooth",2,"","","cannot be reversed",2,81,3,7,0], // allWords 9: flees|hotel|sleet|steel|stole|stool|tools|toots|totes
  ["naive-shade","naive","shade","aides","haven",3,"aiden","haves","aides-haven",10,87,2,5,0], // allWords 8: aside|hades|haves|heads|hides|hives|ideas|shave
  ["flesh-walls","flesh","walls","flash","wells",3,"","","flash-wells",8], // allWords 12: falls|false|fells|fleas|leafs|safes|shawl|sheaf|shelf|swell|welsh|whale
  ["ban-saw","ban","saw","nab","was",2,"","","nab-was",5,26,13,22,0], // allWords 0
  ["spark-strip","spark","strip","parks","trips",1,"","","parks-trips",3], // allWords 6: karts|parts|skirt|stark|strap|traps
  ["urges-verse","urges","verse","users","verge",3,"","","users-verge",10], // allWords 7: guess|reeve|reuse|serve|sever|surge|veers
  ["cave-time","cave","time","mate","vice",3,"","","mate-vice",13,61,7,11,0], // allWords 10: came|emit|item|mace|meat|meta|mice|mite|tame|team
  ["rebel-stout","rebel","stout","belts","outer",4,"","","belts-outer",22], // allWords 20: beets|beret|beset|blues|blurt|brute|butts|lotus|louse|otter|rebut|route|ruble|stole|totes|touts|trout|tuber|tubes|tutor
  ["cold-pool","cold","pool","cool","plod",2,"","","cannot be reversed",8,92,1,4,0], // allWords 5: clod|loco|loop|poll|polo
  ["ghost-salon","ghost","salon","along","hosts",2,"","","along-hosts",6], // allWords 10: gloat|goats|lasts|loans|salts|shoot|shots|slang|slats|sloth
  ["chat-seek","chat","seek","east","heck",3,"","","east-heck",10,92,1,4,0], // allWords 9: cake|eats|hack|hast|hats|sake|seat|teas|tees
  ["rare-snow","rare","snow","owns","rear",2,"","","owns-rear",15], // allWords 9: aero|ears|eons|eras|nose|ones|sera|wars|worn
  ["amen-bait","amen","bait","abet","main",2,"","","abet-main",6], // allWords 14: amin|bane|bean|beat|beta|mane|mate|mean|meat|meta|mina|name|tame|team
  ["gas-keg","gas","keg","ask","egg",2,"","","ask-egg",8], // allWords 2: gag|sag
  ["likes-mango","likes","mango","lingo","makes",2,"","","lingo-makes",1,92,1,4,0], // allWords 15: alone|along|among|lakes|lanes|leaks|leans|liens|lines|means|mensa|mines|names|slang|sling
  ["seven-train","seven","train","event","rains",2,"","","event-rains",6], // allWords 9: anise|earns|eaten|evens|nears|sarin|snare|veins|vines
  ["bees-hail","bees","hail","bias","heel",3,"","","bias-heel",9,82,3,6,0], // allWords 8: able|bail|bale|base|bile|hale|heal|shea
  ["odds-open","odds","open","dose","pond",3,"","","dose-pond",20,92,1,4,0], // allWords 6: does|done|node|nope|pods|pose
  ["asset-stone","asset","stone","onset","seats",2,"","","onset-seats",19,87,2,5,0], // allWords 14: atone|eases|nests|noses|notes|santo|seton|state|tanto|taste|tease|tests|tones|totes
  ["fake-lilt","fake","lilt","kale","lift",3,"","","kale-lift",8], // allWords 12: file|flat|flea|flit|lake|leaf|leak|life|like|talk|tall|till
  ["aims-flew","aims","flew","slam","wife",3,"","","slam-wife",19,92,1,4,0], // allWords 3: sale|seal|self
  ["sat-ups","sat","ups","ass","put",2,"","","ass-put",7], // allWords 0
  ["range-swine","swine","range","anger","wines",1,"","","anger-wines",3], // allWords 2: anise|senna
  ["deeds-first","deeds","first","drift","seeds",4,"freds","deist","drift-seeds",21], // allWords 12: diets|dress|edits|feeds|frets|rifts|serfs|sided|sides|sited|steed|tides
  ["rows-yard","yard","rows","rays","word",3,"","","rays-word",8], // allWords 7: dory|draw|rosy|sway|ward|wars|ways
  ["diet-lamp","diet","lamp","palm","tide",2,"","","palm-tide",18,53,8,15,0], // allWords 15: damp|date|edit|late|leap|limp|lite|malt|pale|pile|plea|tale|teal|tied|tile
  ["birch-prong","birch","prong","bring","porch",3,"","","bring-porch",9,86,2,6,0], // allWords 3: bingo|boing|chirp
  ["props-spiky","props","spiky","poppy","risks",3,"","","poppy-risks",13,87,2,5,0], // allWords 4: porky|risky|skips|spork
  ["oral-poll","oral","poll","opal","roll",2,"","","opal-roll",6], // allWords 0
  ["reef-sand","reef","sand","deer","fans",3,"","","deer-fans",23], // allWords 16: dare|darn|dear|ends|fare|fear|fees|fern|free|nerd|rand|read|reed|safe|seed|send
  ["chalk-slice","chalk","slice","click","shale",2,"chile","slack","click-shale",3,92,1,4,0], // allWords 22: aches|cache|chase|chick|clack|hacks|hales|heals|hicks|kills|laces|lacks|lakhs|leach|leash|licks|lisle|scale|shack|skill|slack|slick
  ["key-tap","key","tap","pet","yak",3,"","","pet-yak",14,77,4,7,0], // allWords 3: kay|pat|yet
  ["just-monk","just","monk","junk","most",2,"","","junk-most",1], // allWords 4: jots|juts|musk|must
  ["sassy-treat","sassy","treat","essay","start",3,"","","essay-start",19,92,1,4,0], // allWords 24: artsy|assay|asset|aster|rates|rests|satay|seats|stare|stars|state|stats|stays|stray|tarts|taste|tater|tears|teary|tetra|trays|tyres|years|yeast
  ["cedar-green","cedar","green","cared","genre",2,"","","cared-genre",13], // allWords 17: agree|anger|cadre|carer|crane|creed|dance|eager|grade|grand|greed|raced|racer|raged|rager|rance|range
  ["iron-lads","iron","lads","also","rind",3,"","","also-rind",20,92,1,4,0], // allWords 6: aids|land|loan|noir|nori|said
  ["fact-made","fact","made","came","daft",3,"","","came-daft",9,77,4,7,0], // allWords 7: cafe|dame|deaf|face|fade|mace|mead
  ["loves-warns","loves","warns","slave","sworn",2,"","","slave-sworn",7,77,4,7,0], // allWords 14: earls|laser|loser|reals|roles|salve|snarl|solve|swear|swore|wares|waves|wears|worse
  ["done-redo","done","redo","door","need",3,"","","door-need",18], // allWords 7: deed|deer|dodo|node|odor|reed|rode
  ["bold-seal","bold","seal","bell","soda",3,"","","bell-soda",9], // allWords 11: able|also|bale|bead|bled|dosa|olds|sale|sell|sled|sold
  ["spent-straw","spent","straw","tents","wraps",4,"","","tents-wraps",29,82,3,6,0], // allWords 15: parts|paste|septa|spate|start|state|stent|strap|sweat|tapes|tarts|taste|traps|warts|waste
  ["row-ten","row","ten","nor","wet",3,"","","nor-wet",10], // allWords 4: net|not|ton|two
  ["fined-talks","fined","talks","filed","tanks",1,"","","filed-tanks",2], // allWords 25: dealt|delta|false|field|fiend|files|fines|flask|fleas|flies|inset|islet|knits|leafs|least|slate|stale|stalk|stank|steal|stein|stink|tales|tiled|tiles
  ["cape-face","cape","face","cafe","pace",2,"","","cafe-pace",4], // allWords 0
  ["ample-demon","ample","demon","modem","plane",4,"","","modem-plane",24,92,1,4,0], // allWords 6: lemma|maple|monde|moped|panel|penal
  ["bare-slot","bare","slot","brat","sole",2,"","","brat-sole",6,92,1,4,0], // allWords 16: arts|bear|blot|boat|bolt|ears|eras|lobe|lose|lost|lots|oats|rats|sera|star|tsar
  ["ages-hour","ages","hour","ragu","shoe",3,"","","ragu-shoe",9], // allWords 8: aero|gear|gush|hero|hose|hugs|rage|sage
  ["fist-pope","fist","pope","pipe","soft",3,"","","cannot be reversed",15,64,6,12,0], // allWords 13: fits|foes|pies|pits|pose|post|pots|sift|spit|spot|stop|tips|tops
  ["scene-smash","scene","smash","chess","means",4,"","","chess-means",25], // allWords 8: canes|cases|masse|mensa|names|seams|seems|shams
  ["lists-strap","lists","strap","lasts","strip",4,"","","lasts-strip",12], // allWords 20: lapis|liars|pairs|parts|pasts|pilar|rails|sails|salts|slats|slits|spats|spilt|spits|splat|split|stars|stirs|traps|trips
  ["dude-worn","dude","worn","down","rude",3,"","","down-rude",9,80,3,8,0], // allWords 4: owed|redo|rode|wore
  ["smear-swill","smear","swill","mills","wears",2,"","","mills-wears",7,86,2,6,0], // allWords 11: mails|males|mares|meals|smell|swear|swell|swirl|wares|wells|wills
  ["bases-begun","bases","begun","began","buses",4,"","","began-buses",12,77,4,7,0], // allWords 1: beans
  ["seem-toss","seem","toss","most","sees",3,"","","cannot be reversed",23,87,2,5,0], // allWords 10: meet|mess|moss|sets|some|stem|teem|tees|toes|tome
  ["older-rocks","older","rocks","locks","order",3,"","","locks-order",8], // allWords 11: close|cooks|cores|corks|crook|crore|doers|dorks|doser|rodeo|score
  ["ease-rich","ease","rich","each","rise",2,"","","each-rise",1], // allWords 14: ache|acre|arch|care|char|ears|eras|race|rash|rice|sera|shea|shri|sire
  ["liar-wolf","wolf","liar","flow","rail",3,"","","flow-rail",19], // allWords 7: fail|fill|foal|lair|loaf|oral|roll
  ["did-nib","did","nib","bid","din",3,"","","cannot be reversed",9,76,4,8,0], // allWords 1: bin
  ["bell-idea","bell","idea","able","lied",3,"","","able-lied",22,92,1,4,0], // allWords 10: aide|bald|bale|bead|bled|deli|dial|dill|idle|laid
  ["paint-rites","paint","rites","spite","train",2,"spain","trite","spite-train",5], // allWords 28: arise|aster|irate|pains|pants|paste|petit|pints|rains|raise|rants|rates|sarin|sepia|septa|spate|stare|stipe|tapes|tater|tears|tetra|tiers|tires|trans|treat|tries|trite
  ["clean-dread","clean","dread","laden","raced",3,"","","laden-raced",16], // allWords 11: adder|cadre|cared|cedar|clade|crane|dared|decal|laced|lance|rance
  ["lift-tale","lift","tale","fate","lilt",3,"","","fate-lilt",9,77,4,7,0], // allWords 15: feat|feta|file|flat|flea|flit|late|leaf|life|lite|tall|teal|tile|till|tilt
  ["mayor-stern","mayor","stern","marry","stone",2,"","","marry-stone",7,92,1,4,0], // allWords 17: arose|earns|metro|moray|nears|notes|onset|ramen|rears|rents|seton|snare|stony|store|story|tones|yarns
  ["euro-spot","euro","spot","oops","true",4,"","","oops-true",22], // allWords 13: ours|outs|poet|pore|post|pots|pros|repo|rope|rust|sour|stop|tops
  ["baked-pools","baked","pools","blood","peaks",3,"","","blood-peaks",12,92,1,4,0], // allWords 13: abode|adobe|bakes|beaks|booed|lobos|loops|poked|pokes|sloop|speak|spoke|spool
  ["hopes-steer","hopes","steer","ether","poses",3,"","","ether-poses",7], // allWords 18: ester|pesos|pests|pores|poser|posse|prose|reset|ropes|sheet|spore|steps|strep|terse|there|these|three|trees
  ["raw-saw","raw","saw","war","was",2,"","","war-was",5,31,12,21,0], // allWords 0
  ["shirt-swine","shirt","swine","hints","wires",2,"","","hints-wires",7], // allWords 9: heirs|hires|shine|shire|twins|weirs|wines|wiser|wrist
  ["couch-singe","couch","singe","cough","since",1,"","","cough-since",1,75,4,9,0], // allWords 6: chins|cinch|conch|cones|guise|scone
  ["over-then","over","then","hero","vent",2,"","","hero-vent",8,87,2,5,0], // allWords 3: hone|oven|rove
  ["level-wagon","level","wagon","legal","woven",4,"","","legal-woven",16], // allWords 8: aglow|along|angel|angle|glean|navel|novel|vowel
  ["asks-want","asks","want","swan","task",2,"","","swan-task",7,66,6,10,0], // allWords 2: ants|sans
  ["ranch-towns","ranch","towns","notch","warns",4,"","","notch-warns",16,92,1,4,0], // allWords 7: chant|crows|scant|scorn|sworn|wants|watch
  ["die-nor","die","nor","eon","rid",3,"","","eon-rid",10,87,2,5,0], // allWords 3: doe|one|rod
  ["hard-pelt","hard","pelt","held","part",2,"","","held-part",2,92,1,4,0], // allWords 7: dahl|halt|hart|herd|plat|tarp|trap
  ["send-slip","send","slip","ends","lips",1,"","","ends-lips",3], // allWords 6: dies|lids|pens|pies|side|slid
  ["split-wheel","split","wheel","spell","white",3,"","","cannot be reversed",8,92,1,4,0], // allWords 23: heels|heist|hells|hills|peels|pelts|piles|pills|plies|sheet|shell|shill|sleep|slept|spelt|spiel|spill|spilt|spite|steep|stipe|these|while
  ["array-guide","array","guide","argue","diary",4,"","","argue-diary",22], // allWords 7: adieu|aired|auger|dairy|rager|ridge|urged
  ["corn-unit","corn","unit","icon","runt",2,"","","icon-runt",7,92,1,4,0], // allWords 3: coin|tour|turn
  ["luck-nose","luck","nose","cone","sulk",3,"","","cone-sulk",9,92,1,4,0], // allWords 8: clue|eons|lock|lose|once|ones|sole|sunk
  ["field-greet","field","greet","filet","greed",2,"","","cannot be reversed",5,87,2,5,0], // allWords 5: defer|filed|freed|glide|legit
  ["dusty-idols","dusty","idols","oddly","suits",4,"","","oddly-suits",14], // allWords 4: doily|solid|studs|study
  ["bump-host","bump","host","push","tomb",4,"","","push-tomb",26,92,1,4,0], // allWords 13: bops|bots|bust|hops|hump|huts|moth|posh|pubs|shop|shot|shut|thus
  ["now-run","now","run","nun","row",1,"","","nun-row",0,92,1,4,0], // allWords 4: nor|own|urn|won
  ["bevy-rule","bevy","rule","lube","very",3,"","","lube-very",8], // allWords 6: blue|ever|leer|lure|reel|rely
  ["buddy-tells","buddy","tells","bulls","teddy",2,"","","bulls-teddy",1,87,2,5,0], // allWords 4: bells|belly|bully|telly
  ["dork-lime","dork","lime","milk","rode",3,"","","milk-rode",8,69,5,11,0], // allWords 13: demo|dime|dire|dirk|dome|lore|mile|mode|mole|redo|ride|rile|role
  ["flit-from","flit","from","film","fort",2,"","","film-fort",6], // allWords 5: firm|form|lift|loft|rift
  ["asset-heats","asset","heats","ashes","state",5,"","","cannot be reversed",29,87,2,5,0], // allWords 11: eases|haste|hates|seats|sheet|stash|stats|taste|tease|these|theta
  ["nuts-weed","nuts","weed","nude","west",3,"","","nude-west",9], // allWords 11: dent|dune|need|nest|nets|seen|sent|stew|stun|tend|tens
  ["blame-resin","blame","resin","amble","siren",2,"","","amble-siren",13], // allWords 6: ramen|realm|reins|riles|rinse|risen
  ["grant-swore","grant","swore","range","worst",2,"","","range-worst",6], // allWords 24: anger|earns|goner|nears|rager|rants|rears|roger|senor|snare|snore|snort|straw|swear|towns|trans|twang|wager|wanes|wants|wares|warts|wears|worse
  ["hot-use","hot","use","out","she",2,"","","out-she",7,92,1,4,0], // allWords 2: hes|sue
  ["mouse-prose","mouse","prose","moose","purse",2,"","","moose-purse",4], // allWords 7: mores|pores|poser|ropes|serum|spore|super
  ["camps-crews","camps","crews","scamp","screw",1,"","","scamp-screw",3,0,24,47,48], // allWords 4: capes|paces|scape|space
  ["bail-drag","bail","drag","grab","laid",3,"","","grab-laid",23,92,1,4,0], // allWords 7: alba|brag|brig|dial|gird|grad|grid
  ["safe-vice","safe","vice","case","five",3,"","","case-five",9,76,4,8,0], // allWords 3: aces|cave|fave
  ["dome-eyes","dome","eyes","eyed","some",4,"","","cannot be reversed",19,66,6,10,0], // allWords 6: demo|does|dose|dyes|mode|mods
  ["edges-hovel","hovel","edges","ledge","shove",2,"","","ledge-shove",6,87,2,5,0], // allWords 2: delve|devel
  ["door-fans","door","fans","roof","sand",3,"","","roof-sand",23,68,5,12,0], // allWords 9: darn|dons|dosa|nods|odor|rand|road|soda|sofa
  ["hope-salt","hope","salt","heal","stop",3,"","","heal-stop",9], // allWords 25: apes|hale|halt|heap|hole|holt|last|lose|lost|lots|past|path|pats|peas|pose|post|pots|sale|seal|slot|sole|spat|spot|taps|tops
  ["ads-say","ads","say","ass","day",2,"","","ass-day",7,87,2,5,0], // allWords 1: sad
  ["merry-quiet","merry","quiet","merit","query",3,"","","merit-query",9,87,2,5,0], // allWords 7: emery|meter|metre|mitre|quite|remit|timer
  ["small-tough","small","tough","malls","ought",1,"","","malls-ought",3], // allWords 9: allot|altho|atoll|gloat|goals|halos|loath|mulls|shoal
  ["disk-wage","disk","wage","gawk","side",3,"","","gawk-side",8,75,4,9,0], // allWords 5: aged|dies|kids|skid|wise
  ["feels-tides","feels","tides","feeds","tiles",3,"","","feeds-tiles",8], // allWords 10: diets|edits|files|flees|flies|islet|sited|sleet|steed|steel
  ["guns-thus","guns","thus","shut","sung",2,"","","shut-sung",19,71,5,9,0], // allWords 7: gnus|gush|hugs|huts|nuts|snug|stun
  ["date-fury","date","fury","duty","fare",2,"","","duty-fare",3,92,1,4,0], // allWords 11: dare|dear|duet|fate|fear|feat|feta|fray|read|rude|yard
  ["rind-tear","rind","tear","dint","rear",3,"","","dint-rear",23], // allWords 13: arid|dare|date|dear|dent|nerd|raid|rare|rate|read|rent|tend|tern
  ["bar-pot","bar","pot","rob","tap",3,"","","rob-tap",14,77,4,7,0], // allWords 11: bat|bot|bra|bro|opt|orb|pat|pro|rap|tab|top
  ["great-horse","great","horse","agree","short",2,"","","agree-short",8,77,4,7,0], // allWords 18: eager|earth|ethos|gator|goers|grate|hater|heart|heres|heros|horst|ogres|rager|serge|sheer|shore|those|torah
  ["blind-clack","blind","clack","bland","click",1,"","","bland-click",2], // allWords 5: black|blank|blink|clank|clink
  ["logs-tiff","logs","tiff","fits","golf",3,"","","fits-golf",8], // allWords 6: fist|gift|gist|sift|slog|soft
  ["bone-pity","bone","pity","bite","pony",2,"","","bite-pony",2], // allWords 6: bony|nope|open|pine|poet|typo
  ["event-viral","event","viral","inter","valve",4,"","","cannot be reversed",24,86,2,6,0], // allWords 10: alive|avert|inert|irate|leave|liner|liven|ravel|rival|vitae
  ["felt-kale","felt","kale","lake","left",2,"","","lake-left",4,0,21,38,24], // allWords 9: feel|flat|flea|flee|keel|leaf|leak|leek|talk
  ["paved-rider","paved","rider","dared","viper",4,"","","dared-viper",12], // allWords 12: adder|diver|drape|dread|dried|drier|drive|padre|pared|pride|raver|river
  ["canon-pores","canon","pores","acorn","opens",3,"","","cannot be reversed",19,92,1,4,0], // allWords 29: acres|apron|canes|cares|cones|cores|crane|crone|nance|orcas|panes|parse|pears|porno|poser|prone|prose|races|rance|recon|ropes|scare|scone|score|snoop|spare|spear|spoon|spore
  ["opal-role","opal","role","oral","pole",3,"","","oral-pole",9,87,2,5,0], // allWords 6: aero|lore|pear|poll|reap|roll
  ["route-steam","route","steam","outer","teams",1,"","","outer-teams",3], // allWords 10: amour|eater|mates|meats|metro|tamer|tames|tease|tomes|utter
  ["lets-sell","lets","sell","less","tell",3,"","","cannot be reversed",8,86,2,6,0], // allWords 2: lest|sets
  ["flip-girl","flip","girl","fill","grip",2,"","","fill-grip",6], // allWords 1: gill
  ["false-tiger","false","tiger","grief","least",4,"","","grief-least",25], // allWords 24: alert|alter|elite|feral|files|flare|fleas|flier|flies|gates|grate|great|grist|grits|islet|later|leafs|rifle|slate|stage|stale|steal|tales|tiles
  ["boxes-there","boxes","there","boxer","these",3,"","","boxer-these",4], // allWords 9: bores|ether|herbs|obese|robes|sheet|sober|store|three
  ["calm-teen","calm","teen","clan","teem",2,"","","cannot be reversed",6,76,4,8,0], // allWords 16: acne|ante|came|cane|clam|lent|mace|malt|mate|meat|meet|melt|meta|neat|tame|team
  ["fresh-usher","fresh","usher","refer","shush",3,"","","refer-shush",10], // allWords 6: freer|frees|reefs|reuse|serfs|users
  ["egg-tea","egg","tea","age","get",3,"","","cannot be reversed",10,92,1,4,0], // allWords 3: ate|eat|tag
  ["alone-zones","alone","zones","lanes","ozone",3,"","","lanes-ozone",8,82,3,6,0], // allWords 4: leans|loans|oozes|salon
  ["furl-guns","furl","guns","lung","surf",3,"","","lung-surf",23,72,5,8,0], // allWords 4: gnus|rugs|snug|sung
  ["anger-crams","anger","crams","range","scram",1,"","","range-scram",3,0,34,59,48], // allWords 15: acres|areas|arena|canes|carer|cares|crane|gears|grams|racer|races|rager|rages|rance|scare
  ["packs-tents","packs","tents","spent","stack",2,"","","spent-stack",5], // allWords 8: pacts|pants|spank|speck|stank|stent|tacks|tanks
  ["feel-redo","feel","redo","flee","rode",2,"","","flee-rode",4,42,10,18,0], // allWords 3: fled|leer|reel
  ["soul-spit","soul","spit","oils","puts",2,"","","oils-puts",8], // allWords 7: lips|outs|pits|plus|slip|soil|tips
  ["cafe-lake","lake","cafe","face","kale",2,"","","face-kale",4,0,29,41,0], // allWords 4: cake|flea|leaf|leak
  ["bells-flash","bells","flash","balls","flesh",3,"","","balls-flesh",8], // allWords 13: bales|bases|bless|falls|false|fells|fleas|leafs|sable|safes|sheaf|shelf|slabs
  ["cans-pick","pick","cans","caps","nick",4,"","","caps-nick",13,87,2,5,0], // allWords 10: pack|pans|pics|pink|pins|scan|snap|snip|span|spin
  ["pen-toy","toy","pen","not","yep",3,"","","not-yep",10], // allWords 4: net|ten|ton|yet
  ["draw-pins","draw","pins","snip","ward",3,"","","snip-ward",19,0,22,31,24], // allWords 8: aids|raps|rasp|said|spin|warp|wind|wrap
  ["gravy-pearl","gravy","pearl","gavel","parry",3,"","","gavel-parry",10], // allWords 7: glare|lager|large|paler|payer|regal|repay
  ["lily-mere","lily","mere","lime","rely",4,"","","lime-rely",12], // allWords 5: leer|mile|reel|rile|yell
  ["drill-store","drill","store","rolls","tired",3,"","","rolls-tired",11,92,1,4,0], // allWords 23: drier|droll|islet|lilts|loser|older|order|rider|riled|riles|riser|rites|roles|still|stole|tiers|tiled|tiles|tills|tires|tolls|tried|tries
  ["fair-loud","loud","fair","four","laid",2,"","","four-laid",2,87,2,5,0], // allWords 7: dial|dual|idol|lair|liar|ludo|rail
  ["roads-steel","steel","roads","loads","steer",4,"","","loads-steer",25], // allWords 26: alert|alter|arose|asset|aster|darts|doers|doser|doses|ester|later|least|older|rates|reset|seats|slate|sleet|sodas|stale|stare|steal|tales|tears|terse|trees
  ["bare-down","bare","down","bore","dawn",1,"","","bore-dawn",1,0,18,26,16], // allWords 15: barn|bear|born|bran|dare|darn|dear|owed|rand|read|redo|robe|rode|wade|wand
  ["pools-tides","pools","tides","edits","loops",3,"","","edits-loops",18], // allWords 15: diets|dopes|dotes|plods|poise|polis|posed|sited|sloop|spied|spoil|spool|stool|toils|tools
  ["ape-arc","ape","arc","cap","ear",2,"","","cap-ear",8,86,2,6,0], // allWords 5: are|car|era|pac|pea
  ["seen-sets","seen","sets","nets","sees",3,"","","nets-sees",22], // allWords 3: nest|sent|tens
  ["modes-polar","polar","modes","moral","posed",3,"","","moral-posed",10,92,1,4,0], // allWords 10: demos|domes|dopes|lopes|molar|moles|morel|poles|roped|slope
  ["mint-opal","mint","opal","into","palm",2,"","","into-palm",7], // allWords 6: atop|lamp|lima|lion|mail|tamp
  ["aced-yell","aced","yell","call","eyed",3,"","","call-eyed",9,92,1,4,0], // allWords 5: clad|dale|deal|lace|lead
  ["began-piper","piper","began","begin","paper",4,"","","begin-paper",12,25,11,21,10], // allWords 6: barge|being|binge|grape|gripe|pager
  ["doll-swap","doll","swap","laws","plod",4,"","","laws-plod",22], // allWords 6: also|awls|load|paws|soap|wasp
  ["hangs-light","hangs","light","slang","thigh",2,"","","slang-thigh",5], // allWords 5: glint|highs|night|sling|thing
  ["necks-rotor","necks","rotor","corks","tenor",4,"","","corks-tenor",16,92,1,4,0], // allWords 21: cones|cores|crone|crore|knots|notes|onset|recon|retro|rocks|roost|roots|scone|score|seton|stone|store|stork|toner|tones|torso
  ["hat-job","hat","job","hot","jab",1,"","","hot-jab",1,74,4,10,0], // allWords 0
  ["deep-when","deep","when","need","phew",3,"","","need-phew",23,87,2,5,0], // allWords 2: peed|weep
  ["huge-plan","huge","plan","hung","plea",2,"","","hung-plea",5], // allWords 4: hale|heal|leap|pale
  ["dodge-tales","dodge","tales","dates","lodge",3,"","","dates-lodge",8,87,2,5,0], // allWords 15: dales|deals|dosed|dotes|gated|glade|golds|leads|least|slate|stade|stale|stead|steal|stole
  ["canoe-loyal","loyal","canoe","alloy","ocean",2,"","","alloy-ocean",19,80,3,8,0], // allWords 4: allay|alone|canal|colon
  ["died-note","died","note","diet","node",3,"","","diet-node",9,76,4,8,0], // allWords 9: dine|dint|done|dote|edit|tide|tied|tine|tone
  ["name-team","team","name","amen","meat",3,"","","amen-meat",19], // allWords 8: mana|mane|mate|mean|meet|meta|tame|teem
  ["crowd-large","large","crowd","grace","world",4,"","","grace-world",22,81,3,7,0], // allWords 4: glare|lager|lower|regal
  ["fiery-stand","fiery","stand","fined","stray",3,"","","fined-stray",8], // allWords 17: artsy|darts|dents|draft|dries|fairy|fiend|fired|fried|nasty|raids|rides|sired|snide|tends|trays|tyres
  ["doom-spot","doom","spot","mood","tops",3,"","","mood-tops",19,0,20,30,24], // allWords 4: moos|post|pots|stop
  ["scamp-scent","scamp","scent","camps","cents",1,"","","camps-cents",3], // allWords 1: scant
  ["clown-three","clown","three","clone","threw",2,"","","clone-threw",5,87,2,5,0], // allWords 4: cheer|ether|there|towel
  ["dean-rent","dean","rent","near","tend",3,"","","near-tend",23,75,4,9,0], // allWords 6: date|dent|earn|rate|tear|tern
  ["rate-slip","slip","rate","isle","trap",2,"","","isle-trap",9,82,3,6,0], // allWords 17: east|eats|lest|lets|lies|lips|pair|part|past|pats|rile|seat|spat|taps|tarp|tear|teas
  ["blind-crank","blind","crank","brand","clink",2,"","","brand-clink",2,75,4,9,0], // allWords 5: bland|blank|blink|brink|clank
  ["buck-case","buck","case","cube","sack",3,"","","cube-sack",8,51,9,13,0], // allWords 7: aces|back|base|bask|cask|cues|suck
  ["paste-rests","paste","rests","stare","steps",3,"","","stare-steps",18,92,1,4,0], // allWords 16: aster|ester|pasts|pests|rates|reset|septa|spate|spats|stars|steep|steer|tapes|tears|terse|trees
  ["each-kegs","each","kegs","heck","sage",4,"","","heck-sage",26,87,2,5,0], // allWords 8: aces|ache|ages|case|cask|ghee|hack|sack
  ["bibs-very","bibs","very","bevy","ribs",3,"","","bevy-ribs",9,81,3,7,0], // allWords 0
  ["eye-its","its","eye","tie","yes",2,"","","tie-yes",7,72,5,8,0], // allWords 3: set|sit|tee
  ["waft-wine","wine","waft","want","wife",1,"","","want-wife",1,81,3,7,0], // allWords 3: anew|twin|wane
  ["sinks-torch","torch","sinks","notch","risks",3,"","","notch-risks",8,87,2,5,0], // allWords 11: chins|cross|honks|knits|knots|shirk|skins|skirt|stink|stork|think
  ["gouge-nerve","gouge","nerve","genre","vogue",3,"","","genre-vogue",21,87,2,5,0], // allWords 7: goner|gorge|green|grove|never|venue|verge
  ["demo-jobs","demo","jobs","beds","mojo",4,"","","beds-mojo",13,92,1,4,0], // allWords 5: dome|doom|mode|mods|mood
  ["roof-urge","roof","urge","euro","frog",2,"","","euro-frog",8,82,3,6,0], // allWords 4: ergo|four|gore|ogre
  ["freed-guest","freed","guest","fused","greet",3,"","","fused-greet",8], // allWords 6: defer|dregs|fetus|feuds|frets|greed
  ["pope-says","pope","says","pose","yaps",3,"","","pose-yaps",8], // allWords 7: apes|easy|pass|pays|peas|pops|saps
  ["swim-test","swim","test","mess","twit",4,"","","mess-twit",23], // allWords 10: emit|item|mite|semi|sets|site|stem|ties|time|wits
  ["picks-renew","picks","renew","spine","wreck",3,"","","spine-wreck",10,92,1,4,0], // allWords 15: ceres|cries|epics|newer|pines|pinks|reins|resin|rinse|risen|siren|sneer|snipe|speck|spice
  ["ask-rid","ask","rid","irk","sad",2,"","","irk-sad",7,78,3,10,0], // allWords 2: ads|aid
  ["lets-yowl","lets","yowl","toys","well",4,"","","toys-well",13,92,1,4,0], // allWords 10: lest|lost|lots|lows|owls|slew|slot|slow|tell|toll
  ["hall-mini","mini","hall","hill","main",2,"","","hill-main",8,66,6,10,0], // allWords 7: amin|hail|lima|mail|mall|mill|mina
  ["annoy-weird","annoy","weird","owned","rainy",4,"","","owned-rainy",24,92,1,4,0], // allWords 7: aired|anode|drain|nadir|wider|wired|yearn
  ["bases-title","bases","title","sites","table",4,"","","cannot be reversed",16,92,1,4,0], // allWords 30: asset|bales|bates|beast|beats|bites|blast|bleat|bliss|islet|lasts|latte|least|lists|sable|salts|seats|slabs|slate|slats|slits|stale|state|steal|stilt|tales|taste|tease|tiles|tilts
  ["notes-pores","notes","pores","ropes","tones",2,"","","ropes-tones",3,70,5,10,0], // allWords 10: onset|pesto|poets|poser|prose|senor|seton|snore|spore|stone
  ["dash-kind","dash","kind","disk","hand",3,"","","disk-hand",22,82,3,6,0], // allWords 9: adds|dads|dank|dish|hank|hind|khan|kids|skid
  ["the-war","the","war","art","hew",2,"","","art-hew",8], // allWords 7: ate|awe|eat|rat|raw|tar|tea
  ["blush-croak","blush","croak","brush","cloak",1,"","","brush-cloak",1,15,11,21,20], // allWords 7: abhor|corks|crush|locks|roach|rocks|shrub
  ["easy-glut","easy","glut","seat","ugly",2,"","","seat-ugly",9,87,2,5,0], // allWords 8: east|eats|gays|lest|lets|stag|tags|teas
  ["lamps-views","lamps","views","palms","wives",2,"","","palms-wives",17,81,3,7,0], // allWords 10: lapse|leaps|pales|piles|pleas|plies|psalm|spiel|waves|wiles
  ["avail-still","still","avail","tails","villa",3,"","","tails-villa",10,92,1,4,0], // allWords 5: lilts|silva|stall|tills|vials
  ["cart-save","save","cart","race","vast",3,"","","race-vast",8,71,5,9,0], // allWords 11: acre|arts|care|cave|ears|eras|rats|sera|star|tsar|vase
  ["needs-shows","needs","shows","seeds","shown",3,"","","seeds-shown",22,80,3,8,0], // allWords 5: dense|doses|nodes|nosed|sheds
  ["coat-full","full","coat","cult","foal",2,"","","cult-foal",2,92,1,4,0], // allWords 7: clot|coal|cola|colt|loaf|loft|taco
  ["earn-pour","earn","pour","rear","upon",2,"","","rear-upon",9,92,1,4,0], // allWords 4: euro|near|porn|rare
  ["are-bin","are","bin","era","nib",2,"","","era-nib",5,0,18,33,0], // allWords 2: ear|ran
  ["bean-then","bean","then","been","than",1,"","","been-than",1,57,8,11,0], // allWords 4: ante|bane|neat|teen
  ["bike-ends","bike","ends","dibs","knee",4,"","","dibs-knee",13,87,2,5,0], // allWords 8: bend|bide|bids|dies|keen|need|send|side
  ["gnome-steal","gnome","steal","along","meets",5,"","","along-meets",24], // allWords 18: angel|angle|glean|gloat|lanes|leans|least|loans|melts|omens|salon|slate|smelt|stale|tales|tease|teems|tomes
  ["close-shift","close","shift","chief","slots",3,"","","chief-slots",11], // allWords 19: chose|clots|colts|files|fitch|flies|flits|hoses|hosts|isles|lifts|lists|lofts|loses|shoes|shots|slice|slits|soles
  ["amid-cake","amid","cake","acid","make",3,"","","acid-make",9], // allWords 2: maid|mice
  ["cheer-salsa","cheer","salsa","cares","shale",3,"","","cares-shale",11], // allWords 21: aches|acres|ashes|chase|clash|clear|earls|erase|hales|heals|heres|laser|leach|leash|races|reals|saree|scare|sears|sheer|slash
  ["flare-skits","flare","skits","rifle","tasks",3,"","","rifle-tasks",18,87,2,5,0], // allWords 34: earls|faker|feral|fetal|filet|flats|flier|flits|freak|frisk|islet|kites|laser|lasts|least|lifts|lists|rakes|reals|riles|risks|salts|skate|skier|slate|slats|slits|stake|stale|steak|steal|takes|tales|tiles
  ["foot-lead","lead","foot","deaf","tool",3,"","","deaf-tool",23], // allWords 14: alto|dale|deal|dole|fade|fate|feat|feta|food|late|load|loot|tale|teal
  ["back-nuts","back","nuts","cubs","tank",4,"","","cubs-tank",13,92,1,4,0], // allWords 10: ants|bats|buck|bust|cabs|cans|scan|stab|stun|tabs
  ["ran-you","you","ran","any","our",2,"","","any-our",8], // allWords 2: nor|yon
  ["gaps-tiff","gaps","tiff","gaff","tips",2,"","","cannot be reversed",1,92,1,4,0], // allWords 14: fast|fats|figs|fist|fits|gasp|past|pats|pigs|pits|sift|spat|spit|taps
  ["fame-logo","fame","logo","goof","meal",3,"","","goof-meal",19,86,2,6,0], // allWords 7: foam|gale|goal|lame|loom|male|mole
  ["chess-flick","chess","flick","chefs","slick",4,"","","chefs-slick",26], // allWords 5: check|chick|click|hicks|licks
  ["grid-tale","grid","tale","glad","tire",3,"","","glad-tire",9], // allWords 7: dirt|gale|gird|late|rite|teal|tier
  ["ruler-seven","seven","ruler","never","rules",3,"","","cannot be reversed",12,86,2,6,0], // allWords 9: evens|leers|lures|nerve|reels|serve|sever|veers|verse
  ["canal-glory","canal","glory","angry","local",3,"","","angry-local",8], // allWords 3: carol|coral|largo
  ["heel-roll","heel","roll","hell","role",2,"","","hell-role",6,79,3,9,0], // allWords 4: hole|leer|lore|reel
  ["corps-tense","tense","corps","pence","sorts",4,"","","pence-sorts",26,86,2,6,0], // allWords 32: ceres|cones|cores|creep|crepe|cress|crops|cross|ester|nests|notes|onset|ponce|ports|prost|reset|rests|scene|scone|score|seton|spent|sport|steer|stone|store|strep|teens|terse|tones|trees|trope
  ["rises-salon","salon","rises","arson","isles",3,"","","arson-isles",8,92,1,4,0], // allWords 32: earls|earns|irons|lanes|laser|lasso|leans|learn|liens|liner|lines|lions|loans|loins|nears|reals|reins|renal|resin|riles|rinse|risen|sales|seals|sears|silos|siren|snare|soars|soils|solar|sonar
  ["tip-way","tip","way","pit","yaw",2,"","","pit-yaw",5], // allWords 3: pat|paw|tap
  ["clear-winds","clear","winds","clans","wider",3,"","","clans-wider",9,81,3,7,0], // allWords 11: cairn|cider|cried|laces|lawns|scale|swain|weird|welds|wired|wised
  ["amen-seat","amen","seat","east","mean",1,"","","east-mean",3,72,5,8,0], // allWords 17: eats|mana|mane|mans|mast|mate|mats|meat|meta|name|sane|seen|stem|tame|team|teas|tees
  ["bin-tip","bin","tip","nib","pit",2,"","","nib-pit",5,28,13,20,0], // allWords 2: nit|tin
  ["straw-years","straw","years","stray","wears",4,"","","stray-wears",25,92,1,4,0], // allWords 10: artsy|satay|sears|stars|swear|trays|wares|warts|warty|weary
  ["board-decor","board","decor","arbor","coded",3,"","","arbor-coded",17], // allWords 13: abode|adder|adobe|adore|bared|barre|beard|bread|broad|coder|credo|dared|dread
  ["plot-weak","weak","plot","poet","walk",2,"","","poet-walk",6,69,5,11,0], // allWords 7: peak|peat|plat|poke|tape|wake|woke
  ["panic-total","total","panic","natal","topic",4,"","","natal-topic",15], // allWords 12: actin|antic|attic|canto|cotta|optic|pilot|plain|tacit|talon|tonal|tonic
  ["glue-only","only","glue","lone","ugly",2,"","","lone-ugly",9,87,2,5,0], // allWords 2: glen|noel
  ["clad-wool","wool","clad","call","wood",2,"","","call-wood",6], // allWords 7: clod|coal|cola|cold|cool|loco|wall
  ["siren-songs","siren","songs","noses","rings",4,"","","noses-rings",21], // allWords 14: grins|gross|nines|reins|resin|rinse|risen|rises|roses|senor|signs|sings|snore|sores
  ["busy-toll","busy","toll","bull","toys",3,"","","cannot be reversed",9,85,2,7,0], // allWords 7: boys|buys|lost|lots|lust|slot|slut
  ["cafe-mode","cafe","mode","dome","face",2,"","","dome-face",4,0,29,34,0], // allWords 8: aced|code|dame|deco|demo|fame|made|mead
  ["ago-urn","ago","urn","nag","our",2,"","","nag-our",8,92,1,4,0], // allWords 5: gnu|gun|oar|ran|run
  ["cross-story","cross","story","costs","sorry",2,"","","costs-sorry",6], // allWords 2: scots|sorts
  ["asks-lend","asks","lend","elks","sand",3,"","","elks-sand",9,92,1,4,0], // allWords 5: dean|lens|sake|sane|sans
  ["aimed-table","aimed","table","bleat","media",2,"","","bleat-media",14,72,5,8,0], // allWords 6: abide|debit|mated|metal|tamed|timed
  ["late-play","late","play","ally","tape",3,"","","ally-tape",8], // allWords 8: leap|pale|peat|pelt|plea|tale|teal|tell
  ["spurn-steak","spurn","steak","peaks","turns",2,"","","peaks-turns",7,41,9,13,10], // allWords 10: aunts|panes|perks|rents|runts|skate|speak|stake|stern|takes
  ["role-want","want","role","earl","town",3,"","","earl-town",19,67,6,9,0], // allWords 10: anew|earn|lear|lore|lowe|near|rant|real|torn|wane
  ["edits-error","edits","error","order","tires",4,"","","order-tires",22,87,2,5,0], // allWords 11: diets|doers|doser|rites|sited|tides|tiers|tired|tried|trier|tries
  ["begin-waves","waves","begin","began","wives",4,"","","began-wives",12], // allWords 6: being|binge|vibes|views|wages|wigan
  ["left-pays","left","pays","felt","yaps",2,"","","felt-yaps",4], // allWords 5: flat|lays|self|slay|type
  ["rodeo-short","short","rodeo","doors","other",5,"","","doors-other",29], // allWords 10: dotes|ethos|horde|horst|odors|roost|roots|rotor|those|torso
  ["guide-sides","guide","sides","guise","sided",3,"","","guise-sided",4,0,34,40,24], // allWords 3: dudes|issue|suede
  ["died-soul","died","soul","dies","loud",3,"","","dies-loud",19,64,6,12,0], // allWords 12: deli|does|dole|dose|idle|isle|lied|lies|lose|ludo|side|sole
  ["cheer-treat","cheer","treat","crate","there",2,"","","crate-there",9,82,3,6,0], // allWords 20: carer|carte|cater|cheat|earth|erect|ether|hater|heart|racer|reach|react|tater|teach|teeth|terra|tetra|theta|three|trace
  ["arms-hits","arms","hits","mars","this",1,"","","mars-this",3,77,4,7,0], // allWords 6: aims|arts|rams|rats|star|tsar
  ["coat-gear","coat","gear","rage","taco",2,"","","rage-taco",15,50,8,18,0], // allWords 6: acre|care|gate|goat|race|toga
  ["stool-teeth","stool","teeth","steel","tooth",4,"","","cannot be reversed",13,81,3,7,0], // allWords 11: ethos|loose|lotte|lotto|sheet|shoot|sleet|stole|these|those|tools
  ["ocean-stole","ocean","stole","colon","tease",3,"","","colon-tease",8], // allWords 9: atone|canes|canoe|cease|clone|close|santo|sleet|steel
  ["lime-rely","lime","rely","lily","mere",4,"","","lily-mere",13], // allWords 5: leer|mile|reel|rile|yell
  ["nerve-salad","nerve","salad","leads","raven",3,"","","leads-raven",21,92,1,4,0], // allWords 22: areas|arena|dales|dares|deals|easel|elves|erase|laden|lease|navel|never|raves|reads|salve|saree|saver|serve|sever|slave|veers|verse
  ["gates-lacks","gates","lacks","cages","talks",3,"","","cages-talks",8,81,3,7,0], // allWords 10: laces|least|scale|slack|slate|stage|stale|stalk|steal|tales
  ["meet-step","meet","step","pets","teem",3,"","","pets-teem",19,47,9,17,0], // allWords 4: pest|tees|temp|test
  ["feed-kale","feed","kale","fade","keel",2,"","","fade-keel",8], // allWords 9: deaf|feel|flea|fled|flee|lake|leaf|leak|leek
  ["find-post","find","post","fist","pond",2,"","","fist-pond",1,81,3,7,0], // allWords 15: dips|fits|fond|font|pint|pits|pods|pots|sift|soft|spit|spot|stop|tips|tops
  ["cats-lung","cats","lung","glut","scan",2,"","","glut-scan",8,92,1,4,0], // allWords 8: acts|cans|cast|cuts|last|lust|salt|slut
  ["also-pops","also","pops","oops","slap",4,"","","oops-slap",23,81,3,7,0], // allWords 7: alps|laps|opal|pals|plop|poop|soap
  ["amok-clef","amok","clef","leaf","mock",2,"","","leaf-mock",7,87,2,5,0], // allWords 10: fame|flea|foal|foam|kale|lake|leak|loaf|lock|make
  ["local-ropes","local","ropes","coral","poles",3,"","","coral-poles",7], // allWords 14: carol|cello|close|coals|cores|lopes|orcas|polar|pores|poser|prose|score|slope|spore
  ["space-world","space","world","crowd","lapse",4,"","","crowd-lapse",21], // allWords 14: capes|cords|cores|leaps|loads|lords|loser|lower|paces|pales|pleas|roles|scape|score
  ["enjoy-names","enjoy","names","jeans","money",3,"","","jeans-money",19,92,1,4,0], // allWords 6: enemy|mason|means|mensa|moans|omens
  ["alp-ice","alp","ice","cap","lie",2,"","","cap-lie",6,92,1,4,0], // allWords 5: ace|lap|lip|pac|pal
  ["beef-wine","beef","wine","been","wife",3,"","","been-wife",9,75,4,9,0], // allWords 0
  ["ours-pity","ours","pity","spit","your",2,"","","spit-your",7,86,2,6,0], // allWords 7: outs|pits|puts|rips|sour|spur|tips
  ["elder-tapes","elder","tapes","rated","sleep",5,"","","rated-sleep",34,87,2,5,0], // allWords 18: dates|eared|eased|leper|paste|pease|peels|pelts|repel|septa|slept|spate|spelt|stade|stead|taper|trade|tread
  ["debut-jolly","debut","jolly","doubt","jelly",2,"","","doubt-jelly",7,63,6,13,0], // allWords 1: dolly
  ["angle-crude","angle","crude","grade","uncle",4,"","","grade-uncle",12,92,1,4,0], // allWords 10: angel|cruel|cured|glare|glean|lager|large|raged|regal|ulcer
  ["soda-thin","soda","thin","dash","into",3,"","","dash-into",18,87,2,5,0], // allWords 7: dons|dosa|hint|ions|nods|shin|toad
  ["cheer-stock","cheer","stock","chock","steer",2,"","","chock-steer",1,64,6,12,0], // allWords 20: check|cheek|choke|chore|crest|erect|ester|heres|heros|horse|ochre|reset|sheer|shock|shore|skeet|stoke|store|terse|trees
  ["taxi-yell","taxi","yell","ally","exit",2,"","","ally-exit",8,87,2,5,0], // allWords 5: lite|tail|tall|tell|tile
  ["pants-straw","pants","straw","strap","wants",4,"","","strap-wants",25,77,4,7,0], // allWords 5: paras|parts|stars|traps|warts
  ["beta-doom","beta","doom","boat","demo",2,"","","boat-demo",8,81,3,7,0], // allWords 9: abet|beat|boom|date|dome|mode|mood|toad|tomb
  ["bin-won","bin","won","nib","now",2,"","","nib-now",5,28,13,20,0], // allWords 2: own|win
  ["rites-shack","rites","shack","ashes","trick",3,"","","ashes-trick",12,81,3,7,0], // allWords 16: arise|crash|hacks|hares|hears|kites|raise|shake|share|shear|sites|stick|ticks|tiers|tires|tries
  ["crank-stood","crank","stood","crook","stand",2,"","","crook-stand",2,87,2,5,0], // allWords 10: croak|doors|knots|odors|ranks|roads|snark|stank|tanks|toads
  ["aunt-item","aunt","item","team","unit",2,"","","team-unit",7,87,2,5,0], // allWords 11: emit|mate|meat|meta|mint|mite|tame|tate|time|tint|tuna
  ["polka-space","space","polka","close","kappa",5,"","","close-kappa",26], // allWords 9: capes|claps|clasp|coals|paces|peaks|scalp|scape|speak
  ["ease-toys","ease","toys","easy","toes",3,"","","easy-toes",9,87,2,5,0], // allWords 7: east|eats|seas|seat|stay|teas|toss
  ["loop-tips","loop","tips","pool","spit",3,"","","pool-spit",19,44,9,20,0], // allWords 13: lips|oils|pits|plop|polo|post|pots|slip|soil|solo|spot|stop|tops
  ["faith-mount","faith","mount","faint","mouth",2,"","","faint-mouth",1], // allWords 2: futon|human
  ["not-yet","not","yet","ten","toy",3,"","","ten-toy",9,85,2,7,0], // allWords 2: net|ton
  ["later-these","later","these","ether","slate",3,"","","ether-slate",11,77,4,7,0], // allWords 29: alert|alter|aster|earls|easel|eater|heels|laser|lease|least|rates|reals|sheet|stale|stare|start|state|steal|tales|tarts|taste|tater|tears|tease|teeth|tetra|there|three|treat
  ["chive-foist","chive","foist","shift","voice",3,"","","shift-voice",21,81,3,7,0], // allWords 1: stoic
  ["bare-bibs","bare","bibs","babe","ribs",3,"","","babe-ribs",9,82,3,6,0], // allWords 4: bars|bear|bras|brie
  ["lamp-lilt","lamp","lilt","palm","till",2,"","","palm-till",18,40,10,20,0], // allWords 4: limp|malt|pill|tall
  ["spear-swath","spear","swath","paths","wears",2,"","","paths-wears",7,87,2,5,0], // allWords 19: awash|heaps|paras|parse|parts|pasha|pears|phase|shape|spare|strap|straw|strep|swear|traps|wares|warts|whats|wrest
  ["deal-plug","deal","plug","dull","page",3,"","","dull-page",12,87,2,5,0], // allWords 9: aged|dale|duel|glad|lead|leap|pale|plea|pull
  ["coins-sings","coins","sings","signs","sonic",3,"","","signs-sonic",25,86,2,6,0], // allWords 3: icons|scion|songs
  ["dork-rope","dork","rope","pork","rode",3,"","","pork-rode",8,73,4,11,0], // allWords 4: dope|pore|redo|repo
  ["pay-pet","pay","pet","tap","yep",3,"","","tap-yep",10,86,2,6,0], // allWords 2: pat|yap
  ["burnt-super","burnt","super","brute","spurn",3,"","","brute-spurn",19,81,3,7,0], // allWords 9: brunt|punts|purse|rebut|runts|setup|tuber|turns|upset
  ["gaps-swim","gaps","swim","maps","swig",4,"","","maps-swig",23,92,1,4,0], // allWords 6: aims|amps|gasp|pass|saps|wigs
  ["boost-pores","boost","pores","boots","prose",2,"","","boots-prose",15,17,16,19,0], // allWords 11: bores|ports|poser|prost|robes|ropes|sober|spore|sport|stoop|trope
  ["bury-tone","bury","tone","note","ruby",2,"","","note-ruby",4,0,31,38,24], // allWords 10: bone|bony|bore|robe|tore|tory|troy|true|tune|yurt
  ["about-gross","about","gross","bogus","roast",3,"","","bogus-roast",11,92,1,4,0], // allWords 4: boast|boats|grout|soars
  ["adds-doze","adds","doze","daze","odds",3,"","","daze-odds",9,0,20,27,24], // allWords 4: dads|dead|dosa|soda
  ["pair-some","pair","some","poem","sari",2,"","","poem-sari",9,87,2,5,0], // allWords 10: airs|arms|mars|mesa|prom|ramp|rams|romp|same|seam
  ["drugs-spiky","drugs","spiky","pudgy","risks",3,"","","pudgy-risks",13,87,2,5,0], // allWords 4: gipsy|grids|risky|skips
  ["named-react","named","react","armed","enact",2,"","","armed-enact",5,92,1,4,0], // allWords 20: amend|cadre|carat|cared|carte|cater|cedar|crate|dance|dream|eared|eaten|eater|madre|meant|meter|metre|raced|tamer|trace
  ["cops-silk","cops","silk","loss","pick",4,"","","loss-pick",13,92,1,4,0], // allWords 4: lick|lock|pics|skip
  ["press-purse","press","purse","spree","spurs",2,"","","spree-spurs",8,72,5,8,0], // allWords 3: peers|speer|super
  ["abide-mason","abide","mason","amino","based",3,"","","amino-based",19,92,1,4,0], // allWords 7: aimed|bands|beads|biome|dames|media|moans
  ["moo-two","moo","two","mow","too",2,"","","cannot be reversed",7,87,2,5,0], // allWords 0
  ["banks-dolly","banks","dolly","bonks","dally",1,"","","bonks-dally",1,24,13,24,0], // allWords 6: balls|bally|dolls|knobs|lands|nobly
  ["cave-mine","cave","mine","name","vice",3,"","","name-vice",13,62,7,10,0], // allWords 6: acne|amen|cane|mane|mean|nice
  ["cites-porch","cites","porch","cores","pitch",2,"","","cores-pitch",2,92,1,4,0], // allWords 22: chirp|chore|corps|cries|crisp|crocs|crops|ethic|ochre|pesto|piers|poets|pores|poser|prose|ropes|score|scrip|spire|spite|spore|stipe
  ["dour-slap","dour","slap","plus","road",3,"","","plus-road",22,92,1,4,0], // allWords 11: alps|laps|lars|opus|ours|pals|slur|soap|soar|soup|sour
  ["hated-risky","hated","risky","shaky","tried",3,"","","shaky-tried",8,87,2,5,0], // allWords 16: dares|death|dries|hades|heads|hides|rated|reads|rides|shade|sired|teary|tired|trade|tread|years
  ["book-dead","book","dead","bake","dodo",3,"kobe","dado","bake-dodo",12,77,4,7,0], // allWords 2: bead|beak
  ["dowel-games","dowel","games","model","wages",3,"","","model-wages",8,87,2,5,0], // allWords 9: dames|demos|domes|gleam|golem|mages|medal|modes|sawed
  ["event-reads","event","reads","seven","tread",2,"","","seven-tread",6,72,5,8,0], // allWords 14: dares|deter|earns|eased|eaten|enter|evens|nears|rated|reeds|saved|snare|sneer|trade
  ["ink-rib","ink","rib","irk","nib",2,"","","irk-nib",7,92,1,4,0], // allWords 2: bin|kin
  ["malls-takes","malls","takes","small","stake",1,"","","small-stake",3,0,21,30,24], // allWords 13: least|makes|males|meals|skate|slate|stale|stalk|stall|steak|steal|tales|talks
  ["sorts-viper","sorts","viper","posts","river",3,"","","posts-river",8,92,1,4,0], // allWords 29: overs|pesos|piers|pores|ports|poser|poses|posse|prose|prost|prove|riser|rises|ropes|roses|rover|servo|sores|spies|spire|spits|spore|sport|spots|stirs|stops|strip|trips|verso
  ["holy-leap","holy","leap","poll","yeah",4,"","","poll-yeah",23,76,4,8,0], // allWords 6: heap|help|opal|pale|plea|yell
  ["grace-spare","grace","spare","grape","scare",3,"","","grape-scare",9,86,2,6,0], // allWords 13: acres|capes|cares|paces|pager|parse|pears|races|rager|rears|scape|space|spear
  ["coal-rare","coal","rare","acre","oral",2,"","","acre-oral",6,87,2,5,0], // allWords 7: aero|area|care|cola|core|race|rear
  ["merge-raven","merge","raven","ramen","verge",4,"","","ramen-verge",12,92,1,4,0], // allWords 8: gamer|grave|marge|maven|nerve|never|rager|reeve
  ["fell-grid","fell","grid","fled","girl",2,"","","fled-girl",6,71,5,9,0], // allWords 3: file|gird|life
  ["deep-link","deep","link","kind","peel",3,"","","kind-peel",23,92,1,4,0], // allWords 6: keel|kiln|leek|like|peed|pile
  ["boat-hull","boat","hull","blot","haul",2,"","","cannot be reversed",5,77,4,7,0], // allWords 6: bolt|bull|halo|holt|hula|oath
  ["eye-sat","eye","sat","ate","yes",2,"","","cannot be reversed",8,72,5,8,0], // allWords 5: eat|sea|sty|tea|yet
  ["races-topic","races","topic","acres","optic",1,"","","acres-optic",3], // allWords 28: cacti|caper|cares|caste|circa|cores|pacer|pairs|parse|paste|pears|pesto|poets|pores|poser|posit|prose|recap|ropes|scare|score|septa|spare|spate|spear|spore|stoic|tapes
  ["chaos-meter","chaos","meter","chase","metro",2,"","","chase-metro",5,76,4,8,0], // allWords 14: aches|cease|chest|erect|harem|meets|metre|moths|reach|roach|shame|teems|tomes|torch
  ["lean-rain","lean","rain","nail","near",3,"alan","erin","nail-near",23,85,2,7,0], // allWords 5: earn|lane|lien|line|rein
  ["east-poet","east","poet","tape","toes",3,"","","tape-toes",19,82,3,6,0], // allWords 13: eats|past|pats|peat|post|pots|seat|spat|spot|stop|taps|teas|tops
  ["great-heats","great","heats","gates","heart",2,"","","gates-heart",8,92,1,4,0], // allWords 18: agate|earth|gears|grate|hares|haste|hater|hates|hears|rages|share|shear|sheet|stage|teeth|these|theta|trash
  ["empty-mills","empty","mills","imply","melts",3,"","","imply-melts",11,92,1,4,0], // allWords 12: islet|lisle|piety|piles|plies|smell|smelt|spiel|spite|stipe|temps|tiles
  ["kink-news","kink","news","knew","skin",2,"","","cannot be reversed",7,92,1,4,0], // allWords 4: sewn|sink|wink|wins
  ["salt-work","salt","work","sort","walk",2,"","","sort-walk",2,86,2,6,0], // allWords 9: arts|last|lost|lots|rats|slot|star|tsar|wart
  ["parts-spins","parts","spins","snips","strap",4,"","","snips-strap",25,51,8,17,0], // allWords 4: pains|spits|stars|traps
  ["pit-raw","pit","raw","tip","war",2,"","","tip-war",5,32,12,20,0], // allWords 6: art|pat|paw|rat|tap|tar
  ["cents-teams","cents","teams","scent","steam",1,"","","scent-steam",3,0,25,39,24], // allWords 8: caste|mates|meats|state|stent|tames|taste|tents
  ["bezel-saint","bezel","saint","blaze","stein",2,"","","blaze-stein",5], // allWords 9: aisle|inset|liens|lines|nails|satin|slain|snail|stain
  ["guns-ragu","guns","ragu","guru","nags",3,"","","guru-nags",15,75,4,9,0], // allWords 8: gnus|rags|rugs|runs|sang|snag|snug|sung
  ["amend-worry","amend","worry","marry","owned",4,"","","marry-owned",22,87,2,5,0], // allWords 11: adore|adorn|anode|armed|dream|drown|madre|named|radon|rayon|rowed
  ["clad-cram","clad","cram","calm","card",2,"","","calm-card",6,87,2,5,0], // allWords 1: clam
  ["lord-lube","lord","lube","bold","rule",3,"","","bold-rule",9,77,4,7,0], // allWords 5: blue|lobe|lore|lure|role
  ["bacon-tubes","bacon","tubes","baton","cubes",4,"","","baton-cubes",12,72,5,8,0], // allWords 17: ascot|babes|banco|bates|beast|beats|boast|boats|bouts|canto|caste|coast|coats|count|enact|scout|tacos
  ["lied-wise","lied","wise","lies","wide",2,"","","lies-wide",7,54,8,14,0], // allWords 5: deli|idle|isle|lids|slid
  ["dogs-life","dogs","life","file","gods",2,"","","file-gods",4,57,6,13,6], // allWords 3: digs|logs|slog
  ["bug-new","bug","new","gun","web",3,"","","gun-web",9,70,5,10,0], // allWords 3: beg|gen|gnu
  ["breed-spoke","breed","spoke","broke","speed",2,"","","broke-speed",1,75,4,9,0], // allWords 11: bored|doers|dopes|dorks|doser|keeps|peeks|pokes|posed|reeds|reeks
  ["seal-sets","seal","sets","lets","seas",3,"","","cannot be reversed",22,81,3,7,0], // allWords 2: lest|sale
  ["fits-pass","fits","pass","saps","sift",2,"","","cannot be reversed",18,56,7,16,0], // allWords 10: fast|fats|fist|past|pats|pits|spat|spit|taps|tips
  ["fate-nest","fate","nest","safe","tent",3,"","","safe-tent",9,87,2,5,0], // allWords 16: ante|ants|fast|fats|feat|fees|feet|feta|fete|neat|nets|sane|seen|sent|teen|tens
  ["lemur-paste","lemur","paste","mural","steep",3,"","","mural-steep",18,87,2,5,0], // allWords 22: least|lures|metal|parts|pause|purse|rules|septa|slate|sleet|spate|stale|steal|steel|strap|strep|super|supra|tales|tapes|tramp|traps
  ["sees-yaks","sees","yaks","asks","eyes",2,"","","asks-eyes",6,82,3,6,0], // allWords 3: easy|keys|seas
  ["knots-scalp","knots","scalp","plans","stock",5,"","","plans-stock",29,92,1,4,0], // allWords 16: casts|claps|clasp|class|costs|lacks|locks|pacts|pants|plank|scots|slack|stack|stank|tacks|tanks
  ["bill-fist","bill","fist","bits","fill",2,"","","cannot be reversed",9,72,5,8,0], // allWords 5: fits|flit|libs|lift|sift
  ["baa-bro","baa","bro","bar","boa",2,"","","bar-boa",6,12,15,18,10], // allWords 3: bra|orb|rob
  ["lets-loop","lets","loop","pelt","solo",3,"","","pelt-solo",22,86,2,6,0], // allWords 10: lest|lose|lost|lots|plot|pole|polo|pool|slot|sole
  ["frond-unity","frond","unity","nifty","round",2,"","","nifty-round",6,92,1,4,0], // allWords 3: donut|drift|forty
  ["genes-toast","genes","toast","goats","tense",2,"","","goats-tense",8,87,2,5,0], // allWords 23: asset|gases|gates|gents|nests|notes|onset|sages|seats|seton|songs|stage|state|stent|stoat|stone|taste|tease|teens|tenet|tents|tones|tongs
  ["filed-metal","filed","metal","filet","medal",4,"","","filet-medal",12,81,3,7,0], // allWords 11: admit|fated|fella|fetal|field|flail|fleet|mated|mille|tamed|timed
  ["drop-user","drop","user","pour","reds",3,"","","pour-reds",18], // allWords 11: opus|ours|pods|prod|pure|rods|ruse|soup|sour|sped|sure
  ["purge-roses","purge","roses","ropes","surge",4,"","","ropes-surge",12,87,2,5,0], // allWords 20: goers|grope|gross|ogres|pesos|pores|poser|poses|posse|prose|puree|purse|reuse|roger|rupee|sores|spore|super|urges|users
  ["ape-ill","ill","ape","lie","pal",2,"","","lie-pal",7,92,1,4,0], // allWords 6: all|alp|lap|lip|pea|pie
  ["boss-memo","boss","memo","boom","mess",3,"","","cannot be reversed",9,92,1,4,0], // allWords 6: mobs|moms|moos|moss|sobs|some
  ["lasts-yelps","lasts","yelps","spell","stays",4,"","","spell-stays",29,92,1,4,0], // allWords 9: palsy|plays|salts|salty|slaps|slats|stall|style|tells
  ["blab-toll","blab","toll","blob","tall",3,"","","blob-tall",9,29,13,19,0], // allWords 5: alto|ball|blot|boat|bolt
  ["dame-male","dame","male","lame","made",2,"","","lame-made",4,21,14,23,0], // allWords 5: dale|deal|lead|mead|meal
  ["awash-elves","awash","elves","leash","waves",3,"","","leash-waves",8,92,1,4,0], // allWords 11: easel|hales|halve|heals|lease|sales|salsa|salve|seals|shale|slave
  ["aisle-corps","aisle","corps","rails","scope",3,"","","rails-scope",12,92,1,4,0], // allWords 17: close|crisp|crops|epics|lasso|liars|opera|pairs|price|relic|sails|scrip|sepia|slice|soaps|solar|spice
  ["elks-lung","elks","lung","glen","sulk",4,"","","glen-sulk",23,87,2,5,0], // allWords 1: lens
  ["bore-even","bore","even","bone","ever",3,"","","cannot be reversed",9,71,5,9,0], // allWords 3: born|robe|verb
  ["eon-why","eon","why","hey","own",2,"","","hey-own",7,87,2,5,0], // allWords 4: hen|now|one|won
  ["kids-lack","kids","lack","kick","lads",2,"","","kick-lads",1], // allWords 8: cask|disk|lick|lids|sack|sick|skid|slid
  ["drive-month","drive","month","third","venom",5,"","","third-venom",24,92,1,4,0], // allWords 14: devon|diver|merit|mirth|mitre|movie|noted|remit|timer|tired|toned|trend|tried|video
  ["need-stay","need","stay","easy","tend",2,"","","easy-tend",8,87,2,5,0], // allWords 5: dean|dent|eyes|seed|tyne
  ["began-fixes","began","fixes","begin","faxes",4,"","","begin-faxes",12,53,8,15,0], // allWords 2: being|binge
  ["agent-salsa","agent","salsa","nasal","stage",3,"","","nasal-stage",18,92,1,4,0], // allWords 14: asset|atlas|gases|gates|gents|glass|lasts|natal|sages|salts|seats|slang|slant|slats
  ["shoe-tags","shoe","tags","ages","host",3,"","","ages-host",10,87,2,5,0], // allWords 6: gate|hose|oats|sage|shot|stag
  ["abet-less","abet","less","bats","else",3,"abes","lest","bats-else",20,82,3,6,0], // allWords 17: base|bass|beat|belt|beta|ease|east|eats|eels|lest|lets|seas|seat|stab|tabs|teas|tele
  ["alert-blade","alert","blade","altar","bleed",2,"","","altar-bleed",5], // allWords 5: alter|dealt|delta|later|rebel
  ["cedar-newer","cedar","newer","raced","renew",2,"","","raced-renew",14,60,7,12,0], // allWords 4: cadre|cared|creed|ender
  ["saw-yaw","saw","yaw","was","way",2,"","","was-way",5,26,11,20,10], // allWords 0
  ["draw-week","draw","week","drew","weak",1,"","","drew-weak",1,64,6,12,0], // allWords 6: dark|drek|wade|wake|ward|weed
  ["straw-tells","straw","tells","start","wells",5,"","","start-wells",33], // allWords 24: aster|lasts|least|rates|sales|salts|seals|sears|sells|slate|slats|stale|stare|stars|steal|swear|swell|tales|tarts|tears|wares|warts|water|wears
  ["slain-spine","slain","spine","lines","pains",2,"","","lines-pains",7,87,2,5,0], // allWords 10: aisle|lanes|leans|liens|nails|panes|pines|sepia|snail|snipe
  ["arts-echo","arts","echo","hers","taco",3,"","","hers-taco",10,87,2,5,0], // allWords 13: acts|cash|cast|cats|coat|hero|rash|rats|rest|sect|star|tore|tsar
  ["resin-trout","resin","trout","rinse","tutor",2,"","","rinse-tutor",14,77,4,7,0], // allWords 22: inset|intro|nitro|nurse|outer|reins|risen|rites|rouen|route|runes|runts|siren|stein|strut|sturt|tiers|tires|tries|trust|tunes|turns
  ["cold-dish","cold","dish","disc","hold",4,"","","disc-hold",23,87,2,5,0], // allWords 4: clod|docs|loch|odds
  ["clues-fears","clues","fears","cares","fuels",2,"","","cares-fuels",8,92,1,4,0], // allWords 14: acres|cease|cures|curls|curse|false|fares|fleas|laces|leafs|races|safer|scale|scare
  ["know-then","know","then","honk","newt",3,"","","honk-newt",11], // allWords 3: knew|town|went
  ["nag-old","old","nag","log","and",2,"","","and-log",7], // allWords 1: ago
  ["dock-gush","dock","gush","duck","gosh",1,"","","duck-gosh",1,51,8,17,0], // allWords 4: chug|dusk|hogs|hugs
  ["rich-town","rich","town","corn","with",4,"","","corn-with",13], // allWords 4: itch|twin|whit|worn
  ["depot-stern","depot","stern","opted","rents",3,"","","opted-rents",25,82,3,6,0], // allWords 21: deter|ender|ester|noted|notes|onset|opens|pesto|poets|reset|seton|sneer|steer|stone|strep|terse|toned|tones|totes|trees|trend
  ["shear-villa","shear","villa","shale","viral",4,"","","shale-viral",17,92,1,4,0], // allWords 20: aisle|alias|alive|arise|avail|hales|halls|halve|hares|heals|hears|leash|liars|liver|rails|raise|riles|rival|shall|share
  ["swan-taxi","swan","taxi","axis","want",2,"","","axis-want",7], // allWords 1: wait
  ["fat-moo","fat","moo","oaf","tom",3,"","","oaf-tom",10], // allWords 2: mat|moa
  ["spurn-stuck","spurn","stuck","pucks","turns",2,"","","pucks-turns",7,41,9,13,10], // allWords 2: runts|tucks
  ["drops-hooks","drops","hooks","dorks","hoops",2,"","","cannot be reversed",5,71,5,9,0], // allWords 1: shook
  ["fame-pass","fame","pass","maps","safe",3,"","","maps-safe",9,82,3,6,0], // allWords 4: amps|apes|peas|saps
  ["lamb-pure","pure","lamb","bump","earl",4,"","","bump-earl",26], // allWords 13: balm|blur|burp|lame|lear|lure|male|meal|mule|pear|real|reap|rule
  ["flow-tide","flow","tide","edit","wolf",3,"","","edit-wolf",19], // allWords 3: diet|fled|tied
  ["ahead-rates","ahead","rates","areas","hated",3,"","","areas-hated",8,92,1,4,0], // allWords 21: aster|death|eared|erase|hares|haste|hates|heard|hears|heats|heres|rated|saree|share|shear|sheer|stare|tears|trade|trash|tread
  ["back-fast","back","fast","bask","fact",1,"","","bask-fact",1,73,4,11,0], // allWords 4: bats|fats|stab|tabs
  ["kill-rage","kill","rage","girl","lake",4,"","","girl-lake",13], // allWords 8: earl|gear|kale|leak|lear|like|real|rile
  ["don-rap","don","rap","nor","pad",3,"","","nor-pad",9,92,1,4,0], // allWords 5: and|nod|pod|pro|ran
  ["food-runt","food","runt","fund","root",2,"","","fund-root",2,87,2,5,0], // allWords 11: door|dour|fond|font|foot|odor|tofu|torn|toro|tour|turn
  ["army-rope","army","rope","more","pray",3,"","","more-pray",9,82,3,6,0], // allWords 6: mare|mayo|pear|pore|reap|repo
  ["denim-tread","denim","tread","dried","meant",5,"","","dried-meant",32], // allWords 21: adder|amend|armed|dared|dined|dread|dream|edema|madre|merit|mined|mired|mitre|named|rated|remit|tamer|timer|tired|trade|tried
  ["lord-soda","lord","soda","odds","oral",2,"","","odds-oral",6], // allWords 4: dosa|load|rods|soar
  ["motto-wiser","motto","wiser","moist","wrote",3,"","","moist-wrote",8], // allWords 18: merit|metro|mitre|moose|mores|omits|remit|storm|swore|timer|tower|trims|weirs|wires|worse|worst|wrist|write
  ["land-once","land","once","clad","none",2,"","","clad-none",7], // allWords 5: cone|lace|lane|lean|neon
  ["erase-slips","erase","slips","lapse","rises",3,"","","lapse-rises",11,92,1,4,0], // allWords 20: easel|isles|leaps|lease|pales|parse|pears|piers|piles|pleas|plies|sales|saree|seals|sears|slaps|spare|spear|spiel|spire
  ["blabs-doors","blabs","doors","blobs","roads",3,"","","cannot be reversed",21,4,18,24,0], // allWords 4: boars|boobs|lords|odors
  ["chant-takes","chant","takes","cheat","tanks",2,"","","cheat-tanks",4], // allWords 13: aches|cakes|chase|haste|hates|heats|skate|snack|stake|stank|steak|teach|theta
  ["met-new","met","new","mew","net",1,"","","mew-net",0,85,2,7,0], // allWords 1: ten
  ["nets-yard","nets","yard","rays","tend",3,"","","rays-tend",8,82,3,6,0], // allWords 10: ants|darn|dent|dyer|nerd|nest|rand|sent|stay|tens
  ["flat-lady","flat","lady","ally","daft",4,"","","ally-daft",12], // allWords 1: tall
  ["march-north","march","north","charm","thorn",3,"","","charm-thorn",21], // allWords 1: ranch
  ["salty-votes","salty","votes","loves","tasty",3,"","","loves-tasty",8,76,4,8,0], // allWords 18: asset|lasts|loses|sales|salts|salve|seals|seats|slats|slave|slots|soles|solve|stats|stave|stove|volts|yeast
  ["bird-eyes","bird","eyes","eyed","ribs",3,"","","eyed-ribs",6,65,6,11,0], // allWords 6: bide|dire|dyer|ride|rise|sire
  ["cyan-deep","deep","cyan","cape","deny",3,"","","cape-deny",10], // allWords 6: acne|cane|dean|need|pace|peed
  ["scrap-stage","scrap","stage","cages","traps",2,"","","cages-traps",7,81,3,7,0], // allWords 14: acres|aster|cares|craps|gates|parts|pasta|races|rates|scare|stare|strap|tapas|tears
  ["fares-sifts","fares","sifts","sears","stiff",4,"","","sears-stiff",29,92,1,4,0], // allWords 16: farts|fears|fires|first|fists|fries|rafts|rifts|rises|safer|safes|serif|staff|stars|stirs|tiffs
  ["tap-zag","tap","zag","tag","zap",1,"","","tag-zap",0], // allWords 1: pat
  ["guild-slept","guild","slept","glued","split",2,"","","glued-split",7,92,1,4,0], // allWords 11: duels|guilt|lilts|pelts|setup|spelt|spilt|still|tells|tills|upset
  ["saved-seeds","saved","seeds","deeds","saves",3,"daves","seeds","deeds-saves",12], // allWords 3: eased|eases|vases
  ["duke-plan","duke","plan","dunk","plea",2,"","","dunk-plea",5], // allWords 8: dale|deal|land|lead|leap|pale|puke|punk
  ["night-pests","night","pests","steps","thing",3,"","","steps-thing",25,76,4,8,0], // allWords 11: gents|hints|nests|shins|ships|spits|stent|sting|stint|tents|tints
  ["halls-hosts","halls","hosts","shall","shots",2,"","","shall-shots",19,5,17,27,0], // allWords 6: halts|shalt|slash|slosh|sloth|stash
  ["buys-kale","buys","kale","lube","yaks",4,"","","lube-yaks",13,92,1,4,0], // allWords 10: able|bale|bays|blue|busy|labs|lake|leak|slab|sulk
  ["file-sole","file","sole","life","lose",2,"","","life-lose",4,9,17,23,0], // allWords 2: isle|lies
  ["draws-liars","draws","liars","rails","wards",3,"","","rails-wards",18,77,4,7,0], // allWords 1: raids
  ["dint-soul","dint","soul","loud","tins",3,"","","loud-tins",23,64,6,12,0], // allWords 4: ludo|outs|suit|tons
  ["jet-put","jet","put","jut","pet",1,"","","jut-pet",0,69,5,11,0], // allWords 0
  ["been-fort","been","fort","born","feet",2,"","","born-feet",2,76,4,8,0], // allWords 4: bone|fern|fete|fret
  ["radio-taped","radio","taped","dared","patio",4,"","","dared-patio",11], // allWords 10: adder|adept|adore|dated|drape|dread|opera|padre|pared|rapid
  ["firms-pride","firms","pride","fired","prism",3,"","","fired-prism",8], // allWords 4: drips|fermi|fried|prime
  ["late-surf","late","surf","eats","furl",3,"","","eats-furl",23], // allWords 19: earl|ears|east|eras|fast|fats|flat|lear|lure|real|rule|ruse|seat|sera|sure|tale|teal|teas|user
  ["aced-nick","aced","nick","acid","neck",3,"","","acid-neck",9,66,6,10,0], // allWords 4: aide|cake|dine|idea
  ["ether-trade","ether","trade","rated","there",2,"","","rated-there",17,27,14,17,0], // allWords 9: eared|eater|tater|teeth|terra|tetra|three|tread|treat
  ["carts-rooms","carts","rooms","crams","roots",2,"","","crams-roots",5,92,1,4,0], // allWords 10: ascot|coast|coats|moors|roast|roost|scoot|scram|tacos|torso
  ["cash-cure","cash","cure","race","such",3,"","","race-such",13,79,3,9,0], // allWords 8: aces|acre|arch|care|case|char|cues|ecru
  ["craft-snowy","craft","snowy","fancy","worst",5,"","","fancy-worst",26,92,1,4,0], // allWords 11: croft|farts|fonts|forts|frost|rafts|straw|towns|wants|warts|yawns
  ["mad-sax","mad","sax","max","sad",1,"","","max-sad",0,85,2,7,0], // allWords 2: ads|dam
  ["gates-miner","gates","miner","names","tiger",4,"niger","tames","names-tiger",12,92,1,4,0], // allWords 26: anger|emits|grate|great|items|mates|means|meats|mensa|merit|mines|mites|mitre|ramen|range|reign|remit|singe|smite|stage|steam|tamer|tames|teams|timer|times
  ["issue-ought","issue","ought","guise","shout",3,"","","guise-shout",18,87,2,5,0], // allWords 11: ghost|gusto|hoses|hosts|house|shoes|shots|sight|south|suits|tough
  ["lamp-lots","lamp","lots","plot","slam",2,"","","plot-slam",7,86,2,6,0], // allWords 6: last|lost|palm|plat|salt|slot
  ["bawl-slip","bawl","slip","bill","swap",3,"","","bill-swap",9,92,1,4,0], // allWords 8: awls|bail|blip|laws|lips|paws|sail|wasp
  ["rings-speak","rings","speak","kings","spear",4,"","","kings-spear",25], // allWords 15: arise|grins|parse|peaks|pears|prank|rains|raise|sarin|signs|sings|snaps|spank|spans|spare
  ["fatal-slink","fatal","slink","final","stalk",3,"","","final-stalk",8,72,5,8,0], // allWords 13: alias|atlas|flail|kilns|links|nails|slain|slant|snail|stall|stank|talks|tanks
  ["dawn-tied","dawn","tied","dead","twin",3,"","","dead-twin",9,86,2,6,0], // allWords 13: ante|date|dean|died|diet|dine|edit|neat|tide|tine|wand|want|wind
  ["shark-shown","shark","shown","hawks","horns",2,"","","hawks-horns",7], // allWords 1: shawn
  ["add-won","add","won","dad","own",1,"","","dad-own",3,8,14,20,16], // allWords 2: and|now
  ["mills-stork","mills","stork","kills","storm",4,"","","kills-storm",25], // allWords 8: kilos|milos|sills|silos|skill|slots|soils|sorts
  ["dull-puts","dull","puts","dust","pull",2,"","","dust-pull",9,55,8,13,0], // allWords 2: plus|stud
  ["nifty-tasks","nifty","tasks","fatty","sinks",4,"","","fatty-sinks",16,86,2,6,0], // allWords 6: nasty|skins|skits|stats|tasty|yanks
  ["sent-vary","sent","vary","navy","rest",3,"","","navy-rest",9,82,3,6,0], // allWords 12: ants|arts|envy|nest|nets|rats|rays|star|tens|tsar|vent|very
  ["does-mood","does","mood","dodo","some",3,"","","dodo-some",22,92,1,4,0], // allWords 6: demo|dome|doom|dose|mode|moos
  ["menus-toned","menus","toned","mound","teens",3,"","","mound-teens",11,87,2,5,0], // allWords 14: demon|donut|monde|noted|notes|omens|onset|seton|snout|stone|tense|tones|tuned|tunes
  ["torch-viper","torch","viper","pitch","rover",4,"","","pitch-rover",15], // allWords 9: hover|other|prove|retro|river|their|trier|tripe|trope
  ["feeds-tooth","feeds","tooth","foods","teeth",2,"","","foods-teeth",2,86,2,6,0], // allWords 5: dotes|steed|stood|toots|totes
  ["day-sue","day","sue","due","say",1,"","","due-say",0,80,3,8,0], // allWords 2: sea|use
  ["genes-rival","genes","rival","gives","renal",2,"agnes","ervil","gives-renal",2,92,1,4,0], // allWords 32: align|angel|angle|earns|gains|gavel|glean|learn|lever|liang|liner|liver|nears|rains|ravel|raves|reins|resin|revel|rinse|risen|sarin|saver|serve|sever|singe|siren|snare|sneer|veers|verse|viral
  ["drive-slide","drive","slide","lived","rides",2,"","","lived-rides",7,87,2,5,0], // allWords 8: devil|diver|dried|dries|evils|lives|sired|veils
  ["each-film","each","film","half","mice",4,"","","half-mice",26,87,2,5,0], // allWords 10: ache|came|hale|heal|lame|lime|mace|male|meal|mile
  ["fists-tiles","fists","tiles","lifts","sites",3,"","","lifts-sites",8,92,1,4,0], // allWords 7: files|flies|flits|islet|sifts|stilt|tilts
  ["bro-law","bro","law","awl","rob",1,"","","awl-rob",4], // allWords 2: boa|orb
  ["heats-waves","heats","waves","shave","sweat",2,"","","shave-sweat",5], // allWords 4: haste|hates|haves|waste
  ["gases-might","gases","might","games","sight",4,"","","games-sight",12], // allWords 22: emits|gates|items|mages|masse|mates|maths|meats|mites|sages|seams|semis|shams|sighs|smash|smite|smith|stage|steam|tames|teams|times
  ["case-mask","case","mask","sack","same",3,"","","sack-same",8,80,3,8,0], // allWords 4: aces|cask|mesa|seam
  ["goof-norm","goof","norm","frog","moon",4,"","","frog-moon",23], // allWords 1: mono
  ["bench-pasta","bench","pasta","baths","pecan",3,"","","baths-pecan",12], // allWords 14: bates|beast|beats|capes|chaps|paces|paste|paths|scape|septa|space|spate|tapas|tapes
  ["gang-used","gang","used","aged","sung",3,"","","aged-sung",9], // allWords 8: dang|dues|eggs|gage|gnus|guns|snug|sued
  ["clean-pills","clean","pills","cells","plain",3,"","","cells-plain",9], // allWords 20: calls|cline|laces|lance|lapis|lapse|leaps|pales|panel|penal|piles|plane|pleas|plies|scale|sepia|slice|spell|spiel|spill
  ["knew-spin","knew","spin","news","pink",2,"","","news-pink",7,92,1,4,0], // allWords 6: pens|pins|sewn|snip|wink|wins
  ["bed-kit","bed","kit","bet","kid",1,"","","bet-kid",0,70,5,10,0], // allWords 2: bid|bit
  ["reds-talk","reds","talk","dark","lets",4,"","","dark-lets",13], // allWords 6: drek|lark|lars|last|lest|salt
  ["bits-lied","bits","lied","bide","list",2,"","","bide-list",9], // allWords 5: deli|idle|isle|lies|slit
  ["malls-reset","malls","reset","small","trees",2,"","","cannot be reversed",19,0,21,26,24], // allWords 33: alert|alter|aster|earls|ester|laser|later|leers|males|masse|mates|meals|meats|meets|melts|metal|rates|reals|reels|seams|sears|seems|slams|smell|smelt|stare|steam|steer|tames|teams|tears|teems|terse
  ["sport-tease","sport","tease","eater","posts",3,"","","eater-posts",21,82,3,6,0], // allWords 46: asset|aster|eases|erase|otter|parse|parts|paste|pasts|pears|pesos|pesto|poets|pores|ports|poser|poses|posse|prose|prost|rates|ropes|saree|seats|septa|spare|spate|spats|spear|spore|spots|stare|state|stops|store|strap|taper|tapes|taste|tater|tears|tetra|totes|traps|treat|trope
  ["pile-teem","pile","teem","peel","time",2,"","","cannot be reversed",8,69,5,11,0], // allWords 9: emit|item|limp|lite|meet|melt|mite|tele|tile
  ["labs-pool","labs","pool","ball","oops",3,"","","ball-oops",8], // allWords 8: also|bops|loop|opal|polo|slab|soap|solo
  ["live-rail","live","rail","evil","liar",3,"","","evil-liar",19], // allWords 7: lair|rave|vale|veal|veil|vera|vile
  ["cress-shore","cress","shore","cross","sheer",2,"","","cannot be reversed",6,65,6,11,0], // allWords 16: ceres|cheer|chess|chore|chose|cores|crore|heres|heros|horse|hoses|ochre|roses|score|shoes|sores
  ["lay-mow","lay","mow","low","may",1,"","","low-may",0,79,3,9,0], // allWords 4: awl|law|owl|yam
  ["money-verge","money","verge","enemy","grove",4,"","","enemy-grove",22], // allWords 6: emery|envoy|every|gnome|merge|reeve
  ["hired-loses","hired","loses","hides","loser",3,"","","cannot be reversed",3,86,2,6,0], // allWords 16: heirs|heros|hires|horde|horse|hoses|isles|older|riled|riles|roles|shire|shoes|shore|slide|soles
  ["even-that","even","that","hate","vent",2,"","","hate-vent",7,87,2,5,0], // allWords 3: heat|than|then
  ["sauce-trace","sauce","trace","cause","crate",2,"","","cause-crate",18], // allWords 12: acres|acute|cares|carte|cater|cures|curse|cuter|races|react|scare|truce
  ["gaff-mini","gaff","mini","gain","miff",3,"","","gain-miff",9,87,2,5,0], // allWords 4: amin|fang|main|mina
  ["price-slots","price","slots","close","trips",4,"","","close-trips",26], // allWords 31: clips|cores|corps|cries|crisp|crops|cross|islet|lists|plots|ports|prost|rites|score|scrip|slice|slits|sorts|spilt|split|sport|stirs|stole|store|strip|tiers|tiles|tires|tries|tripe|trope
  ["acre-asks","acre","asks","cars","sake",2,"","","cars-sake",9,86,2,6,0], // allWords 10: arcs|cake|care|cask|ears|eras|race|sack|scar|sera
  ["cave-pigs","cave","pigs","gaps","vice",3,"","","gaps-vice",15,62,7,10,0], // allWords 4: cage|gasp|page|pave
  ["jab-lob","jab","lob","job","lab",1,"","","job-lab",0,62,6,14,0], // allWords 0
  ["slope-wheel","slope","wheel","sleep","whole",2,"","","sleep-whole",6], // allWords 11: heels|helps|holes|hopes|lopes|peels|poles|polls|sheep|spell|whelp
  ["outs-ward","outs","ward","dour","swat",3,"","","dour-swat",9], // allWords 8: draw|oats|ours|road|soar|sour|toad|wars
  ["come-rock","come","rock","core","mock",3,"","","core-mock",8,85,2,7,0], // allWords 2: cork|more
  ["anger-blown","anger","blown","angel","brown",4,"","","angel-brown",26], // allWords 13: alone|angle|boner|bonne|borne|glare|glean|lager|large|noble|range|regal|rowan
  ["name-tony","name","tony","many","note",3,"nate","mony","many-note",8], // allWords 15: amen|ante|mane|mate|mean|meat|meta|neat|neon|none|omen|tame|team|tome|tone
  ["aside-upset","aside","upset","ideas","setup",2,"","","ideas-setup",14,76,4,8,0], // allWords 12: aides|asset|eases|paste|pease|seats|septa|spade|spate|studs|suite|tapes
  ["gods-pier","gods","pier","gird","pose",3,"","","gird-pose",9], // allWords 18: digs|dips|dogs|drip|drop|egos|ergo|goes|gore|grid|ogre|pies|pods|pore|prod|repo|ripe|rope
  ["pants-tends","pants","tends","spent","stand",2,"","","spent-stand",7,81,3,7,0], // allWords 4: dents|spend|stent|tents
  ["bat-hit","bat","hit","bit","hat",1,"","","bit-hat",0,73,4,11,0], // allWords 1: tab
  ["beads-first","beads","first","birds","feast",2,"","","birds-feast",2,87,2,5,0], // allWords 17: baits|based|bases|basis|bates|beast|beats|brits|drift|fades|fated|fates|feats|frets|rifts|safes|serfs
  ["donor-omega","donor","omega","among","rodeo",3,"","","among-rodeo",22,92,1,4,0], // allWords 5: mango|moron|nomad|romeo|rondo
  ["silk-very","silk","very","levy","risk",3,"","","levy-risk",9,75,4,9,0], // allWords 2: elks|kris
  ["shape-sworn","shape","sworn","hopes","warns",2,"","","hopes-warns",7], // allWords 17: hares|heaps|hears|heros|horns|horse|pawns|phase|share|shear|shore|spawn|swear|swore|wares|wears|worse
  ["knee-step","knee","step","kept","seen",2,"","","kept-seen",9,92,1,4,0], // allWords 5: keen|pens|pest|pets|tees
  ["fits-goat","fits","goat","sift","toga",2,"","","sift-toga",18,51,8,17,0], // allWords 6: fiat|fist|gist|sago|sofa|soft
  ["kappa-refer","kappa","refer","freak","paper",5,"","","freak-paper",29], // allWords 2: faker|freer
  ["cheek-lacks","cheek","lacks","check","lakes",2,"","","check-lakes",5,72,5,8,0], // allWords 9: cakes|cease|easel|heels|laces|leaks|lease|scale|slack
  ["ragu-rude","ragu","rude","dare","guru",3,"","","dare-guru",13,77,4,7,0], // allWords 5: dear|gear|rage|read|urge
  ["damn-wade","damn","wade","dawn","made",3,"","","dawn-made",8,92,1,4,0], // allWords 4: dame|dead|mead|wand
  ["rebel-taste","rebel","taste","reset","table",3,"","","reset-table",11,92,1,4,0], // allWords 27: aster|beret|betta|bleat|earls|erase|ester|laser|least|leers|rates|reals|reels|saree|slate|sleet|stale|stare|state|steal|steel|steer|tales|tears|tease|terse|trees
  ["crane-surge","crane","surge","grace","nurse",3,"","","grace-nurse",22,87,2,5,0], // allWords 9: earns|gears|nears|rages|rance|runes|snare|urges|usage
  ["acid-mask","acid","mask","amid","cask",3,"","","amid-cask",9,82,3,6,0], // allWords 4: dams|maid|maki|sack
  ["blot-goof","blot","goof","boot","golf",2,"","","cannot be reversed",6,69,5,11,0], // allWords 1: bolt
  ["links-outer","links","outer","route","slink",1,"","","route-slink",3,0,29,51,24], // allWords 8: islet|kilns|liens|liner|lines|noise|rouen|tiles
  ["part-spit","part","spit","tips","trap",3,"","","tips-trap",19,50,8,18,0], // allWords 7: arts|pita|pits|rats|star|tarp|tsar
  ["slash-touch","slash","touch","clash","south",3,"","","cannot be reversed",22,87,2,5,0], // allWords 7: chaos|halts|latch|oaths|shalt|shout|slush
  ["ban-yap","ban","yap","nab","pay",2,"","","nab-pay",5,15,13,23,10], // allWords 1: any
  ["filed-monks","filed","monks","folks","mined",2,"","","folks-mined",3,86,2,6,0], // allWords 17: demon|denim|field|fiend|files|fined|fines|flies|limes|miles|mines|model|moles|monde|omens|slime|smile
  ["chive-ruins","chive","ruins","niche","virus",3,"","","niche-virus",18,92,1,4,0], // allWords 2: chins|urine
  ["ally-vice","ally","vice","clay","live",3,"","","clay-live",9,81,3,7,0], // allWords 5: evil|lace|lacy|veil|vile
  ["ages-rent","ages","rent","sang","tree",3,"","","sang-tree",21,86,2,6,0], // allWords 11: ante|ease|gate|nags|neat|rees|sage|sane|snag|tang|tern
  ["dowel-ruler","dowel","ruler","lower","ruled",3,"","","cannot be reversed",12,87,2,5,0], // allWords 4: lured|older|rowed|rower
  ["farm-pull","farm","pull","furl","palm",2,"","","furl-palm",3,92,1,4,0], // allWords 6: fall|full|lamp|lump|plum|ramp
  ["amend-rover","amend","rover","drove","ramen",2,"","","drove-ramen",6,87,2,5,0], // allWords 5: anode|drone|edema|erode|named
  ["dock-iron","dock","iron","dork","icon",3,"","","dork-icon",9,87,2,5,0], // allWords 3: coin|noir|nori
  ["each-fall","each","fall","half","lace",3,"","","half-lace",23,76,4,8,0], // allWords 4: ache|calf|hale|heal
  ["jelly-nodes","jelly","nodes","jolly","needs",2,"","","jolly-needs",7,54,7,12,6], // allWords 6: dense|lends|needy|nelly|nosed|snell
  ["dibs-seat","dibs","seat","aids","best",3,"","","aids-best",9,82,3,6,0], // allWords 11: beds|bets|bids|bits|date|debt|east|eats|said|seas|teas
  ["blade-poets","blade","poets","bleat","posed",2,"","","bleat-posed",7,81,3,7,0], // allWords 20: abode|adobe|belts|blast|bleed|boast|boats|dopes|leapt|pedal|pelts|pesto|petal|plate|plead|pleat|slept|spelt|splat|table
  ["enter-owned","enter","owned","newer","toned",3,"","","newer-toned",11,92,1,4,0], // allWords 10: donne|noted|owner|renew|tenor|toner|towed|tower|tweed|wrote
  ["pair-tons","pair","tons","riot","snap",5,"","","riot-snap",26,92,1,4,0], // allWords 10: ants|pans|pons|porn|rant|roti|span|tori|torn|trio
  ["acted-pores","acted","pores","cares","opted",3,"","","cares-opted",8,82,3,6,0], // allWords 19: acres|adore|arose|cadet|cadre|cared|caste|cedar|depot|pesto|poets|poser|prose|raced|races|roped|ropes|scare|spore
  ["until-upper","until","upper","pupil","tuner",3,"","","pupil-tuner",11,92,1,4,0], // allWords 4: erupt|lupin|prune|tulip
  ["tap-ten","tap","ten","net","pat",2,"","","net-pat",5], // allWords 3: ant|pet|tan
  ["hurt-oath","hurt","oath","hour","that",3,"","","hour-that",10,92,1,4,0], // allWords 4: hart|hath|tour|tout
  ["salsa-title","salsa","title","least","tails",5,"","","least-tails",28], // allWords 18: asset|atlas|isles|islet|latte|lisle|sails|sales|seals|seats|sites|slate|stale|state|steal|tales|taste|tiles
  ["brake-risen","brake","risen","break","rinse",1,"","","break-rinse",3,21,15,19,0], // allWords 8: baker|beers|bikes|brees|reins|resin|siren|skier
  ["cube-dish","cube","dish","bide","such",4,"","","bide-such",13,77,4,7,0], // allWords 6: cues|dies|dues|side|sued|used
  ["bill-peel","bill","peel","bell","pile",2,"","","cannot be reversed",8,66,6,10,0], // allWords 2: bile|pill
  ["tides-turns","tides","turns","diets","runts",2,"","","diets-runts",5], // allWords 7: duets|edits|rites|sited|tiers|tires|tries
  ["theme-wider","theme","wider","timed","where",3,"","","cannot be reversed",12,73,4,11,0], // allWords 11: ether|merit|mitre|remit|there|three|timer|tired|tried|weird|wired
  ["land-role","land","role","doll","earn",4,"","","doll-earn",22,87,2,5,0], // allWords 12: darn|earl|lane|lean|lear|lone|lord|lore|near|noel|rand|real
  ["dupe-tiny","dupe","tiny","nude","pity",3,"","","nude-pity",9,76,4,8,0], // allWords 4: dine|dune|tine|tune
  ["not-top","not","top","pot","ton",2,"","","pot-ton",5,48,9,16,0], // allWords 1: opt
  ["coast-hence","coast","hence","cheat","scone",3,"","","cheat-scone",11,92,1,4,0], // allWords 17: ascot|caste|cease|cents|coats|cones|haste|hates|heats|notch|oaths|scene|scent|sheen|shone|tacos|teach
  ["fast-pick","fast","pick","fist","pack",1,"","","fist-pack",1,72,5,8,0], // allWords 13: fact|fats|fits|pact|past|pats|pits|sift|skip|spat|spit|taps|tips
  ["skin-tags","skin","tags","nags","skit",4,"","","nags-skit",23], // allWords 10: anti|kiss|kits|knit|sang|sink|skis|snag|stag|tang
  ["range-romps","range","romps","grams","prone",3,"","","grams-prone",11,87,2,5,0], // allWords 6: anger|gamer|goner|marge|proms|ramps
  ["calm-seed","calm","seed","clad","seem",2,"","","cannot be reversed",6,86,2,6,0], // allWords 10: aced|came|clam|lads|mace|mesa|same|seam|slam|sled
  ["cross-singe","cross","singe","gross","since",4,"","","gross-since",26,79,3,9,0], // allWords 8: cores|goers|ogres|roses|score|signs|sings|sores
  ["haven-lemur","haven","lemur","human","lever",4,"","","human-lever",17,92,1,4,0], // allWords 8: harem|lumen|merle|mural|navel|ravel|realm|revel
  ["dud-eel","dud","eel","due","led",3,"","","due-led",9,80,3,8,0], // allWords 1: dee
  ["font-tear","font","tear","feta","torn",3,"","","feta-torn",12,82,3,6,0], // allWords 10: fare|fate|fear|feat|fern|rate|rent|tate|tent|tern
  ["cents-wills","cents","wills","scent","swill",1,"","","scent-swill",3,0,25,37,24], // allWords 5: cells|celts|swell|twins|wells
  ["mess-twin","mess","twin","nest","swim",4,"","","nest-swim",23,86,2,6,0], // allWords 10: mine|nets|semi|sent|sets|site|tens|ties|tine|wits
  ["boom-stop","boom","stop","oops","tomb",2,"","","oops-tomb",8,87,2,5,0], // allWords 6: moos|most|post|pots|spot|tops
  ["fires-noble","fires","noble","bones","rifle",4,"","","bones-rifle",11], // allWords 13: enrol|flier|fries|liner|loner|reins|resin|rinse|risen|senor|serif|siren|snore
  ["pass-ruby","pass","ruby","bury","saps",2,"","","bury-saps",4], // allWords 8: bars|bras|bray|pays|pubs|rays|rubs|yaps
  ["gosh-pipe","gosh","pipe","pope","sigh",3,"","","pope-sigh",15,66,6,10,0], // allWords 10: egos|goes|hips|hogs|hops|pies|pose|posh|ship|shop
  ["hoped-rites","hoped","rites","pride","those",4,"","","pride-those",23,92,1,4,0], // allWords 17: ethos|heist|hopes|piers|pores|poser|prose|roped|ropes|spire|spore|store|tiers|tired|tires|tried|tries
  ["dry-tea","dry","tea","dye","tar",2,"","","dye-tar",7,92,1,4,0], // allWords 6: art|ate|eat|rat|try|yet
  ["bolt-fund","bolt","fund","bunt","fold",2,"","","bunt-fold",2,92,1,4,0], // allWords 6: blot|bold|bond|fond|font|loft
  ["oils-riot","oils","riot","soil","trio",1,"","","soil-trio",3,36,11,20,0], // allWords 2: roti|tori
  ["king-sets","king","sets","gets","sink",3,"","","cannot be reversed",23,92,1,4,0], // allWords 9: gist|kits|ness|sign|sing|sins|sits|skin|skit
  ["blank-great","blank","great","bleak","grant",2,"","","bleak-grant",2,70,5,10,0], // allWords 9: baker|bleat|brake|brant|break|brent|grate|rabat|table
  ["cores-gawky","cores","gawky","rocky","wages",4,"","","rocky-wages",11,92,1,4,0], // allWords 13: acres|cares|corks|gears|goers|ogres|races|racks|rages|rocks|scare|score|wacky
  ["modem-shale","modem","shale","model","shame",3,"","","model-shame",8], // allWords 7: demos|domes|hales|heals|leash|modes|molds
  ["comic-sulks","comic","sulks","locks","music",4,"","","locks-music",16,92,1,4,0], // allWords 7: clock|coils|colic|mocks|silos|soils|sulci
  ["and-dog","and","dog","nag","odd",2,"","","nag-odd",7,86,2,6,0], // allWords 2: ago|god
  ["case-wrap","case","wrap","acre","swap",3,"","","acre-swap",12,92,1,4,0], // allWords 10: aces|caps|care|carp|paws|race|ware|warp|wasp|wear
  ["arms-earl","arms","earl","mars","real",1,"","","mars-real",3,76,4,8,0], // allWords 13: alma|ears|eras|lama|lame|lear|male|meal|mesa|rams|same|seam|sera
  ["agree-heels","agree","heels","eagle","sheer",4,"","","eagle-sheer",26,87,2,5,0], // allWords 16: eager|earls|easel|erase|gales|gears|glare|heres|lager|large|laser|lease|rages|reals|regal|saree
  ["fuel-wild","fuel","wild","full","wide",2,"","","full-wide",6,61,7,11,0], // allWords 5: feud|file|fill|life|will
  ["fists-viral","fists","viral","rival","sifts",2,"","","rival-sifts",3,56,7,16,0], // allWords 12: fails|fairs|first|flair|flirt|flits|frail|lifts|rifts|silva|vials|visas
  ["pleas-tanks","pleas","tanks","plans","takes",2,"","","plans-takes",5,60,7,12,0], // allWords 16: lapse|leaps|least|pales|peaks|skate|slant|slate|spank|speak|stake|stale|stank|steak|steal|tales
  ["fact-node","fact","node","cone","daft",3,"","","cone-daft",9,77,4,7,0], // allWords 9: acne|cafe|cane|deaf|dean|done|face|fade|once
  ["exact-snail","exact","snail","lance","taxis",5,"","","lance-taxis",34,92,1,4,0], // allWords 10: alien|clans|clean|enact|nails|saint|satin|scant|slain|stain
  ["bob-pin","bob","pin","bop","nib",3,"","","cannot be reversed",9,71,5,9,0], // allWords 2: bib|bin
  ["files-smear","files","smear","flair","seems",3,"","","flair-seems",9], // allWords 17: arise|fails|flier|flies|frail|frame|isles|liars|mares|masse|rails|raise|rifle|riles|sails|seams|slams
  ["cats-sued","cats","sued","acts","used",1,"","","acts-used",3], // allWords 12: aced|aces|case|cast|cues|cuts|duct|dues|dust|seas|stud|uses
  ["ports-roses","ports","roses","ropes","sorts",3,"","","ropes-sorts",7,87,2,5,0], // allWords 13: pesos|pores|poser|poses|posse|posts|prose|prost|sores|spore|sport|spots|stops
  ["child-peace","child","peace","cache","piled",3,"","","cache-piled",12,87,2,5,0], // allWords 10: cheap|clade|decal|laced|leach|paced|peach|pedal|piece|plead
  ["boys-else","boys","else","less","obey",3,"","","less-obey",17], // allWords 3: boss|eels|sobs
  ["easy-weak","easy","weak","away","seek",3,"","","away-seek",10], // allWords 5: eyes|sake|sway|wake|ways
  ["hints-hires","hints","hires","shine","shirt",2,"","","shine-shirt",7,81,3,7,0], // allWords 2: heirs|shire
  ["feed-roof","feed","roof","food","reef",2,"","","food-reef",2,80,3,8,0], // allWords 8: deer|door|fore|free|odor|redo|reed|rode
  ["cubs-puck","cubs","puck","buck","cups",3,"","","buck-cups",8], // allWords 1: pubs
  ["heart-stone","heart","stone","earth","tones",1,"","","earth-tones",3], // allWords 17: aster|erase|hater|neath|notes|onset|other|rates|saree|seton|stare|start|store|tarts|tears|thane|torts
  ["sage-tire","sage","tire","gate","rise",3,"","","gate-rise",8], // allWords 9: ages|ears|eras|rate|rite|sera|sire|tear|tier
  ["glass-roots","glass","roots","gloss","roast",2,"","","cannot be reversed",6,31,13,17,0], // allWords 4: goats|roost|soars|torso
  ["count-swore","count","swore","ounce","worst",2,"","","ounce-worst",6], // allWords 11: court|euros|noose|roost|roots|rouse|snout|torso|tours|towns|worse
  ["glen-kiss","glen","kiss","elks","sign",4,"","","elks-sign",12], // allWords 5: legs|sing|sink|skin|skis
  ["pros-yaps","pros","yaps","soap","spry",4,"","","soap-spry",23,92,1,4,0], // allWords 2: pays|rosy
  ["nerd-soft","nerd","soft","fond","rest",4,"","","fond-rest",12], // allWords 9: feds|fend|font|reds|rent|rods|sort|tern|torn
  ["baby-dale","baby","dale","babe","lady",3,"","","cannot be reversed",8,81,3,7,0], // allWords 6: able|ably|bale|bead|deal|lead
  ["kid-now","kid","now","din","wok",3,"","","din-wok",9], // allWords 5: don|nod|own|win|won
  ["crude-think","crude","think","chide","trunk",2,"","","chide-trunk",2], // allWords 14: chink|chunk|cider|cried|cured|inert|inter|nicer|niche|thine|thunk|tired|tried|tuner
  ["kills-traps","kills","traps","skill","strap",1,"","","skill-strap",3,0,29,45,24], // allWords 9: lilts|parks|parts|spark|spilt|split|still|tails|tills
  ["fade-sick","fade","sick","cafe","disk",3,"","","cafe-disk",9,81,3,7,0], // allWords 10: aces|case|cask|deaf|dies|face|kids|sack|side|skid
  ["meet-spot","meet","spot","teem","tops",3,"","","teem-tops",19,45,9,19,0], // allWords 10: pest|pets|post|pots|step|stop|tees|temp|toes|tome
  ["fines-shell","fines","shell","lines","shelf",4,"","","lines-shelf",25,87,2,5,0], // allWords 8: files|flesh|flies|heels|hells|isles|liens|lisle
  ["farm-milk","farm","milk","film","mark",2,"","","film-mark",2,81,3,7,0], // allWords 1: firm
  ["owed-runt","owed","runt","down","true",2,"","","down-true",8,87,2,5,0], // allWords 7: drew|rude|town|turn|udon|undo|unto
  ["begin-trout","begin","trout","binge","tutor",2,"","","binge-tutor",14,75,4,9,0], // allWords 10: begun|being|bring|grunt|intro|nitro|orbit|robin|tinge|turbo
  ["eyed-labs","eyed","labs","bald","eyes",3,"abes","yeld","cannot be reversed",6,67,6,9,0], // allWords 9: base|bead|dale|deal|ease|lead|sale|seal|slab
  ["horns-steer","horns","steer","horse","stern",2,"","","horse-stern",5,71,5,9,0], // allWords 21: ester|ether|heron|heros|nests|noses|rents|reset|rests|roses|senor|sheet|shone|shore|snore|sores|terse|there|these|three|trees
  ["leap-pins","leap","pins","plea","spin",1,"","","plea-spin",3,50,8,18,0], // allWords 9: apes|lens|pale|peas|pens|sail|sale|seal|snip
  ["align-every","align","every","given","relay",5,"","","given-relay",26,92,1,4,0], // allWords 16: angel|angle|early|elegy|glean|layer|learn|leary|liang|liner|nerve|never|raven|renal|riven|vegan
  ["held-lone","held","lone","hole","lend",2,"","","hole-lend",3,87,2,5,0], // allWords 5: doll|heel|hold|hone|noel
  ["tide-till","tide","till","diet","lilt",2,"","","cannot be reversed",6,86,2,6,0], // allWords 4: edit|lite|tied|tile
  ["draw-liar","draw","liar","rail","ward",3,"","","rail-ward",19,0,22,29,24], // allWords 3: arid|lair|raid
  ["dead-near","dead","near","dean","read",3,"","","dean-read",23,81,3,7,0], // allWords 3: dare|dear|earn
  ["cheer-lasts","cheer","lasts","chess","later",3,"","","chess-later",9,81,3,7,0], // allWords 32: acres|alert|alter|cares|carte|carts|cases|caste|casts|cater|cease|chest|crate|earls|easel|heels|laser|lease|least|races|react|reals|sales|salts|scare|seals|slate|slats|stale|steal|tales|trace
  ["age-yep","age","yep","eye","gap",2,"","","eye-gap",7,81,3,7,0], // allWords 2: ape|pea
  ["hats-stir","hats","stir","hits","star",3,"","","hits-star",9,82,3,6,0], // allWords 10: airs|arts|hair|hart|hast|rats|sari|sits|this|tsar
  ["lips-oils","lips","oils","slip","soil",1,"","","slip-soil",3,41,10,19,0], // allWords 0
  ["alias-small","alias","small","llama","sails",5,"","","llama-sails",29,77,4,7,0], // allWords 9: amass|amiss|mails|malls|massa|mills|salsa|sills|slams
  ["fair-solo","fair","solo","fool","sari",2,"","","fool-sari",9,75,4,9,0], // allWords 6: airs|also|foal|lars|loaf|rolf
  ["coat-owns","coat","owns","snow","taco",2,"","","snow-taco",15,52,8,16,0], // allWords 5: caws|cons|onto|soon|town
  ["ample-patty","ample","patty","apply","matte",3,"","","apply-matte",8,87,2,5,0], // allWords 11: amply|apple|aptly|leapt|maple|metal|petal|plate|playa|pleat|tempt
  ["arson-cable","arson","cable","baron","scale",2,"","","baron-scale",6,87,2,5,0], // allWords 15: arose|bacon|banal|banco|clans|cores|earls|laces|laser|nasal|reals|score|scorn|snarl|sonar
  ["boss-rare","boss","rare","bars","rose",2,"","","cannot be reversed",2,92,1,4,0], // allWords 14: bare|base|bass|bear|bore|bras|bros|ears|eras|rear|robe|sera|sobs|sore
  ["tom-win","tom","win","mow","nit",3,"tim","won","mow-nit",9], // allWords 6: not|now|own|tin|ton|won
  ["attic-poles","attic","poles","optic","tales",3,"","","optic-tales",8,92,1,4,0], // allWords 21: least|lopes|pelts|pesto|poets|polis|posit|slate|slept|slope|spelt|spilt|split|spoil|stale|state|steal|tacit|tails|taste|topic
  ["glow-pray","glow","pray","grow","play",1,"","","grow-play",1,92,1,4,0], // allWords 7: gory|orgy|plow|ploy|poly|warp|wrap
  ["pills-three","pills","three","ether","spill",2,"","","cannot be reversed",19,0,21,33,24], // allWords 18: elite|helps|islet|lilts|peril|piers|piles|plies|rites|spiel|spire|still|there|tiers|tiles|tills|tires|tries
  ["games-tight","games","tight","gates","might",4,"","","gates-might",12,69,5,11,0], // allWords 16: emits|items|mages|mates|maths|matte|meats|mites|sight|smite|smith|stage|steam|tames|teams|times
  ["drop-feet","drop","feet","deep","fort",3,"","","cannot be reversed",9,81,3,7,0], // allWords 6: dope|dote|fete|fret|peed|prod
  ["deeds-suing","deeds","suing","genus","sided",4,"","","genus-sided",28,87,2,5,0], // allWords 16: dense|dudes|dunes|edged|edges|genes|needs|nudes|nudge|seeds|sense|sides|singe|sinus|snide|using
  ["dame-poet","dame","poet","date","poem",3,"","","date-poem",9,71,5,9,0], // allWords 9: demo|dome|dote|made|mead|mode|peat|tamp|tape
  ["bury-tens","bury","tens","nets","ruby",2,"","","nets-ruby",4,0,31,35,24], // allWords 12: buns|nest|nuts|rest|rubs|rust|sent|stun|trey|tyne|tyre|yurt
  ["bops-cafe","bops","cafe","fobs","pace",3,"","","fobs-pace",9,81,3,7,0], // allWords 5: cape|caps|cope|cops|face
  ["ads-sad","ads","sad","ass","dad",2,"","","ass-dad",7,81,3,7,0], // allWords 1: add
  ["dirt-plot","dirt","plot","told","trip",4,"","","told-trip",23,87,2,5,0], // allWords 0
  ["below-races","below","races","acres","elbow",1,"","","acres-elbow",3], // allWords 19: bales|bowel|cares|ceres|cores|earls|laser|leers|lobes|loser|lower|orcas|reals|reels|roles|sable|scare|score|solar
  ["lined-rocks","lined","rocks","drone","slick",3,"","","drone-slick",8], // allWords 29: cider|close|coder|cores|corks|credo|cried|cries|decor|diner|dolce|drink|kilns|licks|liens|lines|links|locks|olden|reins|resin|rinse|risen|score|senor|siren|slice|slink|snore
  ["beat-soul","beat","soul","bout","seal",2,"","","bout-seal",2,80,3,8,0], // allWords 16: abet|able|also|bale|beta|blue|boat|east|eats|lube|oats|outs|sale|seat|teas|tube
  ["ours-want","ours","want","swan","tour",2,"","","swan-tour",7,66,6,10,0], // allWords 5: soar|sour|unto|wars|wart
  ["angel-decks","angel","decks","ledge","snack",4,"","","ledge-snack",24,86,2,6,0], // allWords 10: angle|cakes|canes|cease|clank|clean|eagle|edges|glean|lance
  ["melts-stool","melts","stool","motel","slots",3,"","","motel-slots",11,87,2,5,0], // allWords 11: loose|loses|moles|moose|smelt|soles|stole|tells|tolls|tomes|tools
  ["lies-nope","lies","nope","eons","pile",4,"","","eons-pile",13,87,2,5,0], // allWords 15: isle|lips|lose|nose|ones|open|pine|pins|pole|pons|sine|slip|snip|sole|spin
  ["keel-wear","keel","wear","kale","were",2,"","","kale-were",8,41,11,15,0], // allWords 6: lake|leak|leek|rake|reek|ware
  ["are-elf","are","elf","eel","far",2,"","","eel-far",8,92,1,4,0], // allWords 3: ear|era|ref
  ["deaf-mint","deaf","mint","find","team",4,"","","find-team",23,74,4,10,0], // allWords 11: date|dent|dint|fade|fame|fend|mate|meat|meta|tame|tend
  ["glue-roof","glue","roof","goof","rule",2,"","","goof-rule",8,92,1,4,0], // allWords 9: euro|four|furl|golf|gulf|lore|lure|role|rolf
  ["crate-slate","crate","slate","least","react",2,"","","least-react",19,92,1,4,0], // allWords 10: aster|carte|cater|rates|stale|stare|steal|tales|tears|trace
  ["grams-plane","grams","plane","lamps","range",3,"","","lamps-range",9,92,1,4,0], // allWords 16: ample|angel|anger|angle|gamer|gleam|glean|maple|marge|palms|panel|penal|plans|psalm|ramps|slang
  ["dork-life","dork","life","folk","ride",4,"","","folk-ride",13,92,1,4,0], // allWords 8: dire|dirk|file|lore|redo|rile|rode|role
  ["baton-solar","baton","solar","nasal","robot",4,"","","nasal-robot",23,92,1,4,0], // allWords 12: abort|banal|loans|rabat|roast|roost|roots|salon|santo|solon|tabor|torso
  ["hags-lend","hags","lend","hand","legs",2,"","","hand-legs",1,92,1,4,0], // allWords 6: gals|glad|hens|land|lens|slag
  ["ally-dibs","ally","dibs","idly","labs",3,"","","idly-labs",9,92,1,4,0], // allWords 7: ably|bias|bids|lids|sail|slab|slid
  ["bus-rid","bus","rid","dub","sir",3,"","","dub-sir",10,92,1,4,0], // allWords 4: bid|bud|sri|sub
  ["rival-voter","rival","voter","rover","vital",2,"","","rover-vital",3,92,1,4,0], // allWords 13: liver|lover|overt|retro|river|rivet|trail|trial|trier|trove|valor|viral|volta
  ["item-monk","item","monk","knit","memo",4,"","","knit-memo",21,92,1,4,0], // allWords 6: emit|kite|mint|mite|oink|time
  ["drum-fail","drum","fail","dual","firm",3,"","","dual-firm",9,92,1,4,0], // allWords 5: amid|dial|furl|laid|maid
  ["pipes-torch","pipes","torch","pitch","ropes",4,"","","cannot be reversed",15,92,1,4,0], // allWords 24: chirp|corps|crisp|crops|other|pesto|piers|poets|popes|porch|pores|poser|prose|rites|scrip|spire|spite|spore|stipe|store|their|tiers|tires|tries
  ["eats-frog","eats","frog","ergo","fast",2,"","","ergo-fast",9,92,1,4,0], // allWords 11: east|fats|gate|gore|ogre|rest|rose|seat|sofa|sore|teas
  ["oval-oven","oval","oven","love","nova",2,"","","love-nova",7,86,2,6,0], // allWords 0
  ["enact-grows","enact","grows","score","twang",6,"","","score-twang",33,92,1,4,0], // allWords 24: acres|canes|cares|carte|cater|cones|conte|cores|crate|gowns|races|react|scare|scone|swear|swore|tower|trace|wanes|wares|water|wears|worse|wrote
  ["alter-drops","alter","drops","older","traps",4,"","","older-traps",12,92,1,4,0], // allWords 21: alert|arose|aster|doers|doser|later|least|order|parts|plods|polar|rates|slate|splat|stale|stare|steal|strap|tales|tears|terra
  ["devil-erase","devil","erase","ideal","serve",2,"","","ideal-serve",7,92,1,4,0], // allWords 23: aired|dales|dares|deals|diver|drive|earls|eased|easel|elves|laird|laser|leads|lease|lidar|lived|liver|reads|reals|saree|sever|veers|verse
  ["bag-hat","bag","hat","bat","hag",1,"","","bat-hag",0,87,2,5,0], // allWords 1: tab
  ["base-semi","base","semi","bias","seem",2,"","","bias-seem",7,92,1,4,0], // allWords 8: aims|beam|bees|mesa|same|seam|seas|sees
  ["host-isle","host","isle","list","shoe",2,"","","list-shoe",9,92,1,4,0], // allWords 8: hole|holt|hose|lies|shes|shot|sits|slit
  ["blows-truce","blows","truce","clubs","wrote",4,"","","clubs-wrote",25,92,1,4,0], // allWords 17: below|blocs|bowel|bower|bowls|brows|clots|colts|crust|cults|curbs|cuter|elbow|scrub|towel|tower|worst
  ["chase-outer","chase","outer","cause","other",2,"","","cause-other",5,92,1,4,0], // allWords 14: aches|chest|crash|crust|cuter|ethos|horst|reach|route|sauce|short|those|tours|truce
  ["cups-suck","cups","suck","cuss","puck",3,"","","cuss-puck",8,87,2,5,0], // allWords 0
  ["flair-trout","flair","trout","flour","trait",2,"","","flour-trait",2,92,1,4,0], // allWords 8: fault|flout|frail|friar|trail|trial|tutor|ultra
  ["knee-stat","knee","stat","nest","take",3,"kate","sent","cannot be reversed",9,86,2,6,0], // allWords 14: ants|east|eats|keen|nets|sane|seat|seen|sent|tank|teas|tees|tens|test
  ["balls-niece","balls","niece","cable","lines",4,"","","cable-lines",25,92,1,4,0], // allWords 14: bales|bills|canes|clans|clean|cline|label|lance|lanes|leans|libel|liens|sable|since
  ["birds-toned","birds","toned","bonds","tired",2,"","","bonds-tired",2,92,1,4,0], // allWords 22: binds|boned|bones|bored|bores|bride|inset|noted|notes|onset|rites|robes|seton|sober|stein|stone|store|tiers|tires|tones|tried|tries
  ["ark-tie","ark","tie","era","kit",3,"","","era-kit",10,87,2,5,0], // allWords 2: are|ear
  ["leap-mean","leap","mean","name","pale",2,"","","name-pale",15,85,2,7,0], // allWords 5: amen|lane|lean|mane|plea
  ["gifts-waves","gifts","waves","gives","wafts",2,"","","gives-wafts",1,92,1,4,0], // allWords 3: swift|views|wives
  ["cogs-gene","cogs","gene","eggs","once",3,"","","eggs-once",10,92,1,4,0], // allWords 5: cone|cons|gone|snog|song
  ["nicer-salon","nicer","salon","coins","learn",4,"","","coins-learn",27,92,1,4,0], // allWords 31: acorn|acres|canes|canon|cares|crane|cries|earls|icons|lanes|laser|leans|liens|linen|liner|lines|lions|loans|loins|nance|orcas|races|rance|reals|renal|riles|scare|scion|since|solar|sonic
  ["aided-carry","aided","carry","diary","raced",4,"","","diary-raced",11,92,1,4,0], // allWords 12: aired|array|cadre|cared|cedar|cider|cried|dairy|decay|diced|dicey|radar
  ["ably-gunk","ably","gunk","bank","ugly",3,"","","bank-ugly",9,92,1,4,0], // allWords 1: yuan
  ["mixed-souls","mixed","souls","mould","sixes",2,"","","mould-sixes",3,92,1,4,0], // allWords 4: douse|issue|mixes|mouse
  ["idol-rate","idol","rate","oral","tide",3,"","","oral-tide",9,92,1,4,0], // allWords 9: aero|diet|edit|lord|redo|rode|tail|tear|tied
  ["rush-teen","rush","teen","here","nuts",4,"","","here-nuts",22,92,1,4,0], // allWords 11: hers|huts|nest|nets|runs|sent|shut|stun|tens|thus|tune
  ["new-two","new","two","own","wet",3,"","","own-wet",9,92,1,4,0], // allWords 5: eon|now|one|toe|won
  ["logos-stein","logos","stein","loose","sting",2,"","","loose-sting",6,92,1,4,0], // allWords 17: glint|goons|inlet|inset|islet|lingo|noise|noose|notes|onset|seton|sites|stole|stone|tiles|tones|tongs
  ["ample-raise","ample","raise","arise","maple",1,"","","arise-maple",3,71,5,9,0], // allWords 7: paler|parse|pearl|pears|spare|spear|sperm
  ["blot-stem","blot","stem","lets","tomb",3,"","","lets-tomb",11,92,1,4,0], // allWords 8: belt|bolt|lest|lost|lots|most|slot|test
  ["champ-rinse","champ","rinse","mince","sharp",4,"","","mince-sharp",26,92,1,4,0], // allWords 18: aches|arise|chaps|chase|harem|hares|hears|miner|pairs|prima|raise|reins|resin|risen|share|shear|since|siren
  ["east-wind","east","wind","dawn","ties",3,"","","dawn-ties",19,76,4,8,0], // allWords 16: ante|dean|dies|dine|eats|neat|seat|side|site|swat|teas|tine|twin|wand|want|wits
  ["beans-piled","beans","piled","bleed","pains",3,"","","bleed-pains",11,92,1,4,0], // allWords 12: abide|basin|blend|blind|panes|pease|peels|piles|plies|sepia|sleep|spiel
  ["gear-oops","gear","oops","ages","poor",2,"","","ages-poor",9,87,2,5,0], // allWords 9: aero|pore|pose|prog|rage|repo|rope|sage|sago
  ["film-tens","film","tens","mint","self",4,"","","mint-self",26,92,1,4,0], // allWords 10: fins|lest|lets|list|melt|nest|nets|sent|slit|tins
  ["alp-eye","alp","eye","eel","pay",2,"","","eel-pay",9,92,1,4,0], // allWords 5: aye|lap|pal|yap|yep
  ["beam-foot","beam","foot","boom","feat",2,"","","boom-feat",2,92,1,4,0], // allWords 9: abet|beat|beta|boat|boot|fame|fate|feta|foam
  ["dude-zone","dude","zone","doze","nude",3,"","","doze-nude",9,82,3,6,0], // allWords 3: done|dune|node
  ["kicks-songs","kicks","songs","kings","socks",2,"","","kings-socks",1,92,1,4,0], // allWords 5: kinks|signs|sings|sinks|skins
  ["meets-notch","meets","notch","comes","tenth",4,"","","comes-tenth",22,92,1,4,0], // allWords 19: cents|chemo|cones|hence|notes|onset|scene|scent|scone|seton|stent|stone|teems|teens|tense|tents|theme|tomes|tones
  ["acid-they","acid","they","city","head",3,"","","city-head",9,92,1,4,0], // allWords 2: aced|yeah
  ["gloat-scare","gloat","scare","coast","large",3,"","","coast-large",11,92,1,4,0], // allWords 20: acres|algae|ascot|atlas|cares|carts|coats|cores|earls|glare|grace|lager|laser|loser|races|reals|regal|roles|score|tacos
  ["basil-freak","basil","freak","brake","fails",2,"","","brake-fails",9,92,1,4,0], // allWords 13: baker|barks|basal|biker|break|brisk|faker|feral|flare|flier|frisk|liber|rifle
  ["arts-ramp","arts","ramp","mars","trap",2,"","","mars-trap",7,92,1,4,0], // allWords 7: arms|part|rams|rats|star|tarp|tsar
  ["day-was","day","was","sad","yaw",3,"","","sad-yaw",9,87,2,5,0], // allWords 3: ads|saw|way
  ["disc-lamb","disc","lamb","bids","calm",3,"","","bids-calm",22,92,1,4,0], // allWords 7: balm|clam|dibs|labs|libs|limb|slab
  ["swamp-truth","swamp","truth","swath","trump",2,"","","swath-trump",1,92,1,4,0], // allWords 13: harms|hurst|hurts|marsh|parts|ramps|spurt|strap|thrum|tramp|traps|trash|whats
  ["digit-roofs","digit","roofs","frogs","idiot",2,"","","frogs-idiot",7,92,1,4,0], // allWords 2: foods|grift
  ["cash-tiny","cash","tiny","cyan","this",3,"","","cyan-this",10,92,1,4,0], // allWords 9: chin|hast|hats|hint|hits|inch|stay|than|thin
  ["cogs-park","cogs","park","gaps","rock",4,"","","gaps-rock",13,92,1,4,0], // allWords 10: arcs|cars|cork|gasp|pork|pros|rack|raps|rasp|scar
  ["fell-page","fell","page","flag","peel",3,"","","flag-peel",9,92,1,4,0], // allWords 8: fall|feel|flea|flee|leaf|leap|pale|plea
  ["angle-risks","angle","risks","girls","snake",4,"","","girls-snake",12,92,1,4,0], // allWords 11: agile|aisle|angel|glean|lanes|leans|riles|sails|skier|slang|sneak
  ["order-tease","order","tease","arose","deter",4,"","","arose-deter",16,92,1,4,0], // allWords 11: aster|doers|doser|eater|erode|rates|roars|stare|steed|tears|terra
  ["dim-wok","dim","wok","kid","mow",3,"","","kid-mow",10,86,2,6,0], // allWords 2: mid|mod
  ["dates-resin","dates","resin","sedan","tires",4,"","","sedan-tires",22,92,1,4,0], // allWords 42: aster|deans|dense|diets|earns|edits|enter|ester|inert|inter|nears|needs|rains|rates|reins|reset|rinse|risen|rises|rites|sarin|sears|seeds|sides|siren|sited|snare|sneer|snide|stade|stair|stare|stead|steed|steer|tears|terse|tides|tiers|train|trees|tries
  ["aware-flash","aware","flash","awash","flare",2,"","","awash-flare",1,92,1,4,0], // allWords 6: false|feral|fleas|leafs|wafer|wharf
  ["corn-wide","corn","wide","down","rice",4,"","","down-rice",13,87,2,5,0], // allWords 11: code|core|deco|dice|iced|owed|weir|wind|wire|wore|worn
  ["fake-nick","fake","nick","cafe","kink",3,"","","cafe-kink",9,87,2,5,0], // allWords 4: acne|cane|face|nice
  ["limit-moves","limit","moves","miles","vomit",4,"","","miles-vomit",11,92,1,4,0], // allWords 12: evils|limes|lives|loves|memos|milos|moles|motel|slime|smile|solve|veils
  ["norm-test","norm","test","most","tern",4,"","","cannot be reversed",26,92,1,4,0], // allWords 11: nest|nets|rent|sent|stem|tens|term|tons|torn|tort|trot
  ["bomb-dunk","bomb","dunk","bonk","dumb",2,"","","bonk-dumb",1,92,1,4,0], // allWords 3: bond|bunk|knob
  ["inter-skins","inter","skins","risen","stink",5,"","","risen-stink",34,92,1,4,0], // allWords 15: inert|inset|kites|knits|nests|reins|rents|resin|rinse|sinks|siren|skier|skies|stein|stern
  ["gods-silk","gods","silk","disk","logs",3,"","","disk-logs",9,92,1,4,0], // allWords 7: digs|diss|dogs|kids|loss|skid|slog
  ["agile-meats","agile","meats","algae","items",3,"","","algae-items",19,92,1,4,0], // allWords 17: agate|aisle|emits|gleam|limes|males|mates|meals|miles|mites|slime|smile|smite|steam|tames|teams|times
  ["blink-force","blink","force","borne","flick",2,"","","borne-flick",3,92,1,4,0], // allWords 2: boner|frock
  ["lose-wash","lose","wash","seal","show",3,"","","seal-show",19,92,1,4,0], // allWords 6: lash|owes|sale|shaw|sole|woes
  ["canoe-fused","canoe","fused","cease","found",3,"","","cease-found",11,92,1,4,0], // allWords 5: dance|fades|feuds|ocean|ounce
  ["swath-twice","swath","twice","waste","witch",2,"","","waste-witch",9,92,1,4,0], // allWords 3: sweat|watch|whats
  ["ago-odd","ago","odd","dad","goo",2,"","","dad-goo",7,92,1,4,0], // allWords 3: add|dog|god
  ["bleat-lobby","bleat","lobby","abbot","belly",4,"","","abbot-belly",23,92,1,4,0], // allWords 4: alley|bally|bloat|table
  ["flail-grown","flail","grown","flown","grail",2,"","","flown-grail",1,92,1,4,0], // allWords 12: align|final|flair|frail|frown|grain|groin|growl|infra|liang|lingo|wrong
  ["dodo-nuts","dodo","nuts","odds","unto",2,"","","cannot be reversed",9,92,1,4,0], // allWords 11: dons|dots|duds|dust|nods|onto|stud|stun|tons|udon|undo
  ["lamps-trial","lamps","trial","llama","strip",3,"","","llama-strip",11,92,1,4,0], // allWords 12: alias|lapis|liars|palms|psalm|rails|smart|stair|stamp|trail|trams|trips
  ["gird-lame","gird","lame","mild","rage",4,"","","mild-rage",13,92,1,4,0], // allWords 13: drag|earl|game|gear|grad|grid|lear|lime|male|meal|mile|real|rile
  ["menus-nixes","menus","nixes","mines","nexus",2,"","","mines-nexus",3,92,1,4,0], // allWords 3: minus|mixes|nines
  ["fees-stat","fees","stat","safe","test",3,"","","safe-test",19,92,1,4,0], // allWords 15: east|eats|fast|fate|fats|feat|feet|feta|fete|seas|seat|sees|sets|teas|tees
  ["stir-tone","stir","tone","sent","trio",4,"","","sent-trio",14,92,1,4,0], // allWords 14: eons|nest|nets|nose|note|ones|riot|roti|site|tens|tent|ties|tori|torn
  ["gap-gun","gap","gun","nag","pug",3,"","","nag-pug",10,87,2,5,0], // allWords 1: gnu
  ["queen-vague","queen","vague","queue","vegan",4,"","","queue-vegan",12,92,1,4,0], // allWords 1: venue
  ["after-react","after","react","craft","eater",3,"","","craft-eater",21,92,1,4,0], // allWords 6: carer|carte|cater|crate|racer|trace
  ["lion-move","lion","move","live","moon",2,"","","live-moon",1,92,1,4,0], // allWords 5: evil|love|mono|veil|vile
  ["bugs-such","bugs","such","cubs","gush",3,"","","cubs-gush",9,92,1,4,0], // allWords 2: cuss|hugs
  ["diver-total","diver","total","tidal","voter",4,"","","tidal-voter",16,92,1,4,0], // allWords 21: devil|drive|drove|lived|lotte|loved|otter|overt|rivet|tarot|tiled|tired|title|trait|triad|tried|trite|trove|valid|vital|volta
  ["asset-pucks","asset","pucks","sacks","upset",3,"","","sacks-upset",8,92,1,4,0], // allWords 14: acute|cases|casks|caste|cause|pests|sauce|seats|setup|specs|stack|steps|tacks|tasks
  ["last-yelp","last","yelp","pays","tell",4,"","","pays-tell",22,92,1,4,0], // allWords 11: alps|laps|lest|lets|pals|play|salt|slap|stay|tall|yaps
  ["army-lack","army","lack","clay","mark",2,"","","clay-mark",9,87,2,5,0], // allWords 2: lacy|rack
  ["hides-parry","hides","parry","hardy","piers",3,"","","hardy-piers",12,92,1,4,0], // allWords 24: drips|hades|hares|heads|heady|hears|heirs|hires|hydra|parse|payed|payer|pears|repay|shade|shard|share|shear|shire|spade|spare|spear|spied|spire
  ["hop-row","hop","row","pro","who",2,"","","pro-who",7,92,1,4,0], // allWords 2: how|pho
  ["amen-void","amen","void","maid","oven",3,"","","maid-oven",9,87,2,5,0], // allWords 11: amid|amin|dame|dove|made|main|mane|mead|mean|mina|name
  ["rates-sharp","rates","sharp","parts","shear",5,"","","parts-shear",32,92,1,4,0], // allWords 22: areas|ashes|asset|aster|hares|heaps|hears|paras|paste|phase|seats|septa|shape|share|spate|stare|stars|strap|taper|tapes|tears|traps
  ["cling-props","cling","props","clips","prong",2,"","","clips-prong",1,92,1,4,0], // allWords 6: corps|crisp|crops|plops|scorn|scrip
  ["dunk-nope","dunk","nope","node","punk",4,"","","node-punk",13,92,1,4,0], // allWords 8: done|dope|dune|dupe|neon|none|nude|open
  ["fill-lout","fill","lout","foul","lilt",2,"","","foul-lilt",2,92,1,4,0], // allWords 6: flit|lift|loft|till|tofu|toll
  ["nifty-talks","nifty","talks","fatty","links",4,"","","fatty-links",16,87,2,5,0], // allWords 7: kilns|lanky|slant|slink|stalk|stilt|tilts
  ["aids-deer","aids","deer","read","side",4,"","","read-side",23,92,1,4,0], // allWords 11: arid|dare|dear|dies|dire|ease|raid|reed|ride|said|seed
  ["chunk-slash","chunk","slash","clank","shush",2,"","","clank-shush",2,92,1,4,0], // allWords 13: clash|hacks|hanks|hunch|husks|khans|lacks|lunch|shack|shank|slack|slush|sulks
  ["areas-kinds","areas","kinds","ideas","ranks",4,"ikeas","rands","cannot be reversed",13,92,1,4,0], // allWords 8: aides|aside|dares|rakes|reads|saran|skied|snark
  ["all-way","all","way","awl","lay",2,"","","awl-lay",7,87,2,5,0], // allWords 2: law|yaw
  ["roles-world","roles","world","droll","swore",3,"","","droll-swore",10,92,1,4,0], // allWords 8: dowel|loser|lowes|older|order|rolls|rowed|worse
  ["lease-warns","lease","warns","newer","salsa",5,"","","newer-salsa",30,92,1,4,0], // allWords 20: earls|easel|lanes|laser|leans|learn|leers|nasal|reals|reels|renal|renew|sales|seals|sewer|snarl|swear|wanes|wares|wears
  ["honk-item","honk","item","oink","them",2,"","","oink-them",6,87,2,5,0], // allWords 8: emit|home|kite|knit|meth|mint|mite|time
  ["lapse-waste","lapse","waste","pleas","sweat",2,"","","pleas-sweat",18,92,1,4,0], // allWords 13: leaps|leapt|least|pales|petal|plate|pleat|sales|seals|slate|stale|steal|tales
  ["hunt-nags","hunt","nags","snug","than",2,"","","snug-than",8,92,1,4,0], // allWords 13: gnus|guns|gush|hags|hugs|nuns|sang|shun|snag|sung|tang|thug|tung
  ["crest-meats","crest","meats","seems","tract",4,"","","seems-tract",25,92,1,4,0], // allWords 18: carts|cases|caste|crass|cress|masse|mates|matte|meets|scars|seams|smart|steam|tames|teams|teems|terms|trams
  ["ape-arm","ape","arm","ear","map",2,"","","ear-map",8,86,2,6,0], // allWords 6: amp|are|era|mar|pea|ram
  ["cent-lime","cent","lime","melt","nice",4,"","","melt-nice",13,92,1,4,0], // allWords 6: lent|lien|line|lint|mice|mile
  ["dolly-sites","dolly","sites","dotes","silly",2,"","","dotes-silly",1,92,1,4,0], // allWords 18: deity|diets|dilly|dolls|edits|isles|lists|loses|sills|sited|slide|slits|slots|soles|tides|toyed|yield|yodel
  ["grow-lose","grow","lose","ogre","slow",2,"","","ogre-slow",9,87,2,5,0], // allWords 10: egos|ergo|goes|gore|lore|lows|owls|role|sole|wool
  ["mean-text","mean","text","next","team",3,"","","next-team",23,92,1,4,0], // allWords 10: amen|ante|mane|mate|meat|meta|name|neat|tame|tate
  ["beers-glass","beers","glass","bless","gears",2,"","","bless-gears",3,92,1,4,0], // allWords 10: bases|bears|brees|gases|rages|saber|sabre|sages|serge|slabs
  ["ponds-tails","ponds","tails","spoil","stand",3,"","","spoil-stand",8,87,2,5,0], // allWords 5: lapis|plans|polis|slant|toils
  ["beat-loop","beat","loop","boot","leap",2,"","","boot-leap",2,92,1,4,0], // allWords 15: abet|alto|beta|boat|late|loot|opal|pale|plea|pole|polo|pool|tale|teal|tool
  ["adult-spell","adult","spell","delta","pulls",2,"","","delta-pulls",7,87,2,5,0], // allWords 11: dealt|dulls|ladle|lapel|leapt|pelts|petal|plate|pleat|slept|spelt
  ["feeds-harsh","feeds","harsh","fresh","heads",3,"","","fresh-heads",11,86,2,6,0], // allWords 10: ashes|fades|hades|herds|safes|serfs|shade|shard|sheaf|shred
  ["bus-mew","bus","mew","sum","web",3,"","","sum-web",9,81,3,7,0], // allWords 1: sub
  ["eons-tiff","eons","tiff","fine","soft",4,"","","fine-soft",26,92,1,4,0], // allWords 11: fife|fist|fits|foes|font|nose|ones|sift|sine|tins|tons
  ["paper-vista","paper","vista","pasta","viper",2,"","","pasta-viper",1,92,1,4,0], // allWords 16: parse|parts|pears|piers|piper|raves|saver|sepia|spare|spear|spire|strap|strip|tapas|traps|trips
  ["muted-rinse","muted","rinse","nurse","timed",3,"","","nurse-timed",14,92,1,4,0], // allWords 26: denim|diner|durst|emits|items|menus|midst|minds|mined|mines|mites|reins|resin|rinds|risen|rites|runes|siren|smite|tiers|times|tired|tires|tried|tries|under
  ["evil-wise","evil","wise","isle","view",3,"","","isle-view",10,92,1,4,0], // allWords 4: lies|live|veil|vile
  ["edits-rents","edits","rents","tends","tries",3,"","","tends-tries",20,92,1,4,0], // allWords 10: dents|diets|rites|sited|stern|teens|tense|tides|tiers|tires
  ["dish-ugly","dish","ugly","gush","idly",3,"","","gush-idly",9,92,1,4,0], // allWords 2: guys|hugs
  ["bars-cost","bars","cost","boss","cart",2,"","","boss-cart",2,92,1,4,0], // allWords 16: acts|arcs|bass|bats|bots|bras|brat|bros|cars|cast|cats|scar|scot|sobs|stab|tabs
  ["one-saw","one","saw","own","sea",2,"","","own-sea",6,92,1,4,0], // allWords 4: eon|now|was|won
  ["keep-mall","keep","mall","leek","palm",3,"","","leek-palm",23,92,1,4,0], // allWords 10: kale|keel|lake|lame|lamp|leak|male|meal|peak|peek
  ["funds-rainy","funds","rainy","funny","raids",2,"","","funny-raids",1,92,1,4,0], // allWords 9: dairy|diary|fanny|rains|randy|ruins|runny|sarin|unify
  ["arms-oven","arms","oven","norm","save",3,"","","norm-save",10,92,1,4,0], // allWords 10: earn|ears|eras|mars|near|rams|rose|sera|sore|vase
  ["demon-pairs","demon","pairs","drain","poems",3,"","","drain-poems",12,92,1,4,0], // allWords 19: adios|demos|diner|domes|dries|modes|monde|nadir|nomad|piano|piers|poise|raids|ramps|rides|ripen|sired|sperm|spire
  ["aided-wrong","aided","wrong","dared","owing",2,"","","dared-owing",7,92,1,4,0], // allWords 15: adder|adore|adorn|argon|dread|drown|grade|grand|groan|grown|orang|organ|radon|raged|rowed
  ["edge-road","edge","road","dead","ergo",4,"","","dead-ergo",25,92,1,4,0], // allWords 6: aero|dare|dear|gore|ogre|read
  ["crane-hopes","crane","hopes","acres","phone",3,"","","acres-phone",12,87,2,5,0], // allWords 14: canoe|cares|creep|crepe|hares|hears|ocean|ponce|races|rance|scare|scope|share|shear
  ["giant-leave","giant","leave","agent","alive",2,"","","agent-alive",7,87,2,5,0], // allWords 3: alien|valet|vital
  ["eel-was","eel","was","law","see",3,"","","law-see",10,92,1,4,0], // allWords 3: awl|saw|sea
  ["laser-sifts","laser","sifts","lists","safer",2,"","","lists-safer",3,92,1,4,0], // allWords 38: earls|false|fares|farts|fears|feral|files|fires|first|fists|flare|flats|fleas|flier|flies|flirt|flits|fries|isles|lasts|leafs|lifts|rafts|reals|rifle|rifts|riles|rises|safes|sales|salts|seals|sears|serif|slats|slits|stars|stirs
  ["nests-until","nests","until","lines","stunt",4,"","","cannot be reversed",22,92,1,4,0], // allWords 11: inlet|inset|issue|liens|sinus|stein|stent|stuns|suite|tents|units
  ["fled-ship","fled","ship","flip","shed",2,"","","flip-shed",1,92,1,4,0], // allWords 7: dish|hips|lids|lips|sled|slid|slip
  ["cook-plus","cook","plus","luck","oops",3,"","","cannot be reversed",9,92,1,4,0], // allWords 4: coos|lock|opus|soup
  ["shack-spook","shack","spook","hooks","packs",2,"","","hooks-packs",7,87,2,5,0], // allWords 3: hacks|shock|shook
  ["cold-late","cold","late","lace","told",4,"","","lace-told",13,87,2,5,0], // allWords 5: clad|clod|doll|tale|teal
  ["scale-stake","scale","stake","cakes","tales",2,"kates","laces","cakes-tales",7,92,1,4,0], // allWords 8: laces|least|skate|slate|stale|steak|steal|takes
  ["macro-noble","macro","noble","broom","clean",4,"","","broom-clean",23,92,1,4,0], // allWords 20: acorn|amber|amble|baron|blame|bloom|boner|borne|boron|bream|camel|clone|colon|comer|crane|cream|crone|lance|rance|recon
  ["dark-flow","dark","flow","draw","folk",2,"","","draw-folk",6,87,2,5,0], // allWords 2: ward|wolf
  ["bop-out","bop","out","pub","too",3,"","","pub-too",14,87,2,5,0], // allWords 3: bot|but|tub
  ["mural-twins","mural","twins","minus","trawl",3,"","","minus-trawl",12,92,1,4,0], // allWords 13: runts|straw|sutra|swami|swarm|turns|ultra|units|until|waist|waits|warms|warts
  ["into-tusk","into","tusk","knit","outs",3,"","","knit-outs",22,92,1,4,0], // allWords 5: ions|sink|skin|tons|tout
  ["curve-poles","curve","poles","clues","prove",3,"","","clues-prove",11,92,1,4,0], // allWords 20: close|clove|cores|cover|cures|curse|elope|lopes|pores|poser|prose|pulse|puree|purse|ropes|rupee|score|slope|spore|super
  ["doom-furl","doom","furl","drum","fool",3,"","","drum-fool",9,92,1,4,0], // allWords 9: dorm|form|foul|from|lord|loud|ludo|mood|rolf
  ["agree-usage","agree","usage","erase","gauge",3,"","","erase-gauge",19,92,1,4,0], // allWords 7: eager|gears|rages|reuse|saree|surge|urges
  ["lens-team","lens","team","meal","sent",3,"","","meal-sent",23,92,1,4,0], // allWords 15: east|eats|lame|male|mate|meat|meta|nest|nets|sale|seal|seat|tame|teas|tens
  ["glen-snow","glen","snow","long","news",2,"","","long-news",8,82,3,6,0], // allWords 9: glow|gown|lens|lows|owls|owns|sewn|slew|slow
  ["nib-wow","nib","wow","bow","win",3,"","","cannot be reversed",10,76,4,8,0], // allWords 4: bin|now|own|won
  ["fobs-test","fobs","test","bets","soft",4,"","","bets-soft",13,92,1,4,0], // allWords 4: best|bots|sets|toss
  ["mere-that","mere","that","math","tree",2,"","","math-tree",9,92,1,4,0], // allWords 10: ahem|hate|heat|mate|meat|meta|tame|tate|team|term
  ["cover-viral","cover","viral","river","vocal",4,"","","river-vocal",11,92,1,4,0], // allWords 11: carol|clove|coral|crore|liver|lover|relic|rival|rover|valor|vicar
  ["till-wood","till","wood","tool","wild",2,"","","tool-wild",2,92,1,4,0], // allWords 6: lilt|loot|told|toll|will|wool
  ["arc-due","arc","due","cud","era",3,"","","cud-era",10,87,2,5,0], // allWords 4: are|car|ear|red
  ["fart-sold","fart","sold","ford","salt",2,"","","ford-salt",3,92,1,4,0], // allWords 18: arts|flat|fold|fort|frat|lads|last|loft|lost|lots|olds|raft|rats|rods|slot|sort|star|tsar
  ["comfy-reads","comfy","reads","decay","forms",4,"","","decay-forms",25,92,1,4,0], // allWords 10: cafes|dares|dorms|faces|fares|fears|foray|ready|roads|safer
  ["diet-lift","diet","lift","edit","flit",1,"","","edit-flit",3,81,3,7,0], // allWords 4: lite|tide|tied|tile
  ["depot-liner","depot","liner","noted","peril",3,"","","noted-peril",19,92,1,4,0], // allWords 14: diner|drone|ender|enrol|inlet|leper|loner|opted|pilot|pride|repel|roped|tepid|toned
  ["been-snug","been","snug","bung","seen",2,"","","cannot be reversed",8,92,1,4,0], // allWords 4: gnus|guns|nuns|sung
  ["lotus-nippy","lotus","nippy","plops","unity",3,"","","cannot be reversed",11,92,1,4,0], // allWords 6: pints|plots|snout|spilt|split|units
  ["node-wait","node","wait","anti","owed",3,"","","anti-owed",20,92,1,4,0], // allWords 4: dean|done|into|wade
  ["agent-veins","agent","veins","event","gains",3,"","","event-gains",8,92,1,4,0], // allWords 6: anise|eaten|evens|giant|seven|vines
  ["hippo-hosts","hippo","hosts","photo","ships",3,"","","photo-ships",11,92,1,4,0], // allWords 5: hoist|hoops|shoot|shops|shots
  ["and-its","and","its","din","sat",2,"dan","sit","din-sat",7,92,1,4,0], // allWords 3: ins|sin|sit
  ["mason-suite","mason","suite","mouse","stain",3,"","","mouse-stain",11,92,1,4,0], // allWords 13: amino|asset|mates|meats|moans|saint|satin|seats|steam|stuns|tames|teams|units
  ["dull-snap","dull","snap","land","plus",5,"","","land-plus",26,92,1,4,0], // allWords 4: dual|pans|saul|span
  ["cores-swept","cores","swept","corps","sweet",1,"","","corps-sweet",1,92,1,4,0], // allWords 17: crews|crops|pesos|pesto|poets|ports|poses|posse|prost|roses|scope|score|screw|sores|sport|store|wrest
  ["file-task","file","task","leaf","skit",3,"","","leaf-skit",19,92,1,4,0], // allWords 16: east|eats|flea|kits|late|life|lite|safe|seat|site|tale|talk|teal|teas|ties|tile
  ["exile-pants","exile","pants","exist","panel",3,"","","exist-panel",8,92,1,4,0], // allWords 10: aisle|eaten|exits|lanes|lapis|leans|penal|pixel|plane|plans
  ["amid-year","amid","year","army","idea",3,"","","army-idea",19,92,1,4,0], // allWords 4: aide|amir|area|maid
  ["aced-gave","aced","gave","aged","cave",3,"","","aged-cave",9,92,1,4,0], // allWords 0
  ["china-lyric","china","lyric","icily","ranch",4,"","","icily-ranch",26,92,1,4,0], // allWords 5: chain|chair|cinch|cynic|inlay
  ["hey-out","hey","out","the","you",2,"","","the-you",8,92,1,4,0], // allWords 2: hut|toe
  ["babe-lips","babe","lips","bibs","pale",4,"","","bibs-pale",13,92,1,4,0], // allWords 14: able|alps|bale|bile|labs|laps|leap|libs|pals|pile|plea|slab|slap|slip
  ["foal-shop","foal","shop","half","oops",2,"","","half-oops",8,92,1,4,0], // allWords 8: also|fool|hops|lash|loaf|posh|soap|solo
  ["ask-eye","ask","eye","see","yak",2,"","","see-yak",6,92,1,4,0], // allWords 4: aye|kay|key|sea
  ["model-venom","model","venom","lemon","moved",3,"","","lemon-moved",19,92,1,4,0], // allWords 6: delve|devel|loved|melon|modem|novel
  ["does-sage","does","sage","ease","gods",3,"","","ease-gods",9,92,1,4,0], // allWords 7: aged|ages|dogs|dose|egos|goes|seas
  ["gang-ward","gang","ward","drag","gnaw",4,"","","drag-gnaw",23,92,1,4,0], // allWords 5: dang|dawn|draw|grad|wand
  ["curse-folks","curse","folks","cross","fluke",3,"","","cross-fluke",12,92,1,4,0], // allWords 12: close|clues|cores|corks|cures|floss|forks|fuels|locks|rocks|score|surfs
  ["able-lugs","able","lugs","glue","labs",2,"","","glue-labs",9,92,1,4,0], // allWords 6: bags|bale|bell|saul|slab|slug
  ["shove-slope","shove","slope","hopes","loves",2,"","","hopes-loves",7,92,1,4,0], // allWords 3: lopes|poles|solve
  ["mall-with","mall","with","math","will",2,"","","math-will",1,92,1,4,0], // allWords 7: malt|mill|thaw|wall|what|whit|wilt
  ["chick-ninth","chick","ninth","cinch","think",4,"","","cinch-think",26,92,1,4,0], // allWords 3: chink|hitch|thick
  ["ape-not","ape","not","one","pat",2,"","","one-pat",7,81,3,7,0], // allWords 5: eon|pea|pen|tap|ton
  ["great-slide","great","slide","least","ridge",3,"","","least-ridge",11,92,1,4,0], // allWords 29: agile|agree|aisle|arise|aster|dries|eager|eagle|easel|erase|glide|grate|greed|lease|ledge|raise|rates|reeds|rides|saree|sired|slate|stair|stale|stare|steal|tails|tales|tears
  ["acts-hulk","acts","hulk","lack","thus",3,"","","lack-thus",9,87,2,5,0], // allWords 7: cast|cats|huts|lush|saul|shut|tack
  ["other-roses","other","roses","horse","store",4,"","","horse-store",24,92,1,4,0], // allWords 6: ethos|heros|rests|shore|sores|those
  ["mined-seats","mined","seats","aimed","nests",3,"","","aimed-nests",8,92,1,4,0], // allWords 28: admit|aides|aside|asset|dates|denim|dense|dents|eased|eases|edema|ideas|mated|mates|meats|media|mines|mints|needs|sense|snide|stade|stead|steam|tamed|tames|teams|tends
  ["flat-pony","flat","pony","font","play",2,"","","font-play",2,92,1,4,0], // allWords 2: atop|plat
  ["mars-tarp","mars","tarp","ramp","rats",3,"","","ramp-rats",8,92,1,4,0], // allWords 7: arms|arts|part|rams|star|trap|tsar
  ["beta-hero","beta","hero","bore","hate",3,"","","bore-hate",10,92,1,4,0], // allWords 8: abet|bare|bear|beat|hare|hear|heat|robe
  ["lime-soon","lime","soon","lion","some",2,"","","lion-some",1,92,1,4,0], // allWords 4: ions|mile|mole|semi
  ["age-gym","age","gym","egg","may",2,"","","egg-may",7,92,1,4,0], // allWords 2: aye|yam
  ["caps-gunk","caps","gunk","nags","puck",4,"","","nags-puck",13,92,1,4,0], // allWords 12: cans|cups|gaps|gasp|gnus|guns|pack|sang|scan|snag|snug|sung
  ["posed-teams","posed","teams","atoms","speed",2,"","","atoms-speed",7,92,1,4,0], // allWords 17: dopes|dotes|mated|mates|meats|moats|pease|pesos|poses|posse|seeps|steam|steed|stems|tamed|tames|tease
  ["chat-sour","chat","sour","rush","taco",3,"","","rush-taco",20,92,1,4,0], // allWords 13: arch|char|coat|hast|hats|huts|oats|ours|outs|rash|shut|soar|thus
  ["free-meet","free","meet","feet","mere",2,"","","cannot be reversed",8,92,1,4,0], // allWords 5: fete|fret|reef|teem|term
  ["raced-skate","raced","skate","asked","crate",3,"","","asked-crate",12,92,1,4,0], // allWords 17: cadre|cared|carte|caste|cater|cease|cedar|creek|decks|drake|raked|react|stake|steak|taker|takes|trace
  ["cigar-using","cigar","using","icing","sugar",3,"","","icing-sugar",8,92,1,4,0], // allWords 3: argus|ruins|suing
  ["scan-yaks","scan","yaks","asks","cyan",2,"","","asks-cyan",6,82,3,6,0], // allWords 3: cans|sank|yank
  ["altar-three","altar","three","heart","later",4,"","","heart-later",24,92,1,4,0], // allWords 9: alert|alter|earth|ether|hater|latte|teeth|there|theta
  ["cooks-words","cooks","words","corks","woods",1,"","","corks-woods",2,92,1,4,0], // allWords 4: cords|rocks|sword|works
  ["ass-hew","ass","hew","she","was",2,"","","she-was",8,86,2,6,0], // allWords 4: awe|hes|saw|sea
  ["harm-pile","harm","pile","hire","palm",2,"","","hire-palm",3,92,1,4,0], // allWords 15: hale|hare|heal|hear|heir|lamp|leap|limp|pale|pear|pier|plea|ramp|reap|ripe
  ["give-tops","give","tops","pigs","vote",4,"","","pigs-vote",13,92,1,4,0], // allWords 9: pits|poet|post|pots|spit|spot|stop|tips|veto
  ["hazel-rotor","hazel","rotor","hotel","razor",2,"","","hotel-razor",2,92,1,4,0], // allWords 15: alert|alter|altho|earth|hater|heart|later|lathe|loath|ortho|other|razer|retro|terra|torah
  ["tool-unto","tool","unto","lout","onto",4,"","","lout-onto",23,92,1,4,0], // allWords 2: loot|otto
  ["leaf-miss","leaf","miss","aims","self",3,"","","aims-self",9,92,1,4,0], // allWords 12: fail|fame|flea|less|mesa|mess|sail|sale|same|seal|seam|sims
  ["paint-rusty","paint","rusty","input","stray",3,"","","input-stray",17,87,2,5,0], // allWords 20: artsy|pansy|pants|pasty|patsy|punts|rainy|rants|runts|start|strut|sturt|tarts|train|trait|trans|trays|trust|turns|yarns
  ["chunk-trade","chunk","trade","crude","thank",2,"","","crude-thank",3,92,1,4,0], // allWords 17: cadre|cared|cedar|crane|crank|cured|death|hated|neath|raced|rance|rated|thane|thunk|tread|trunk|tuner
  ["newly-parts","newly","parts","reply","wants",4,"","","reply-wants",12,92,1,4,0], // allWords 13: entry|lawns|party|rants|rents|snarl|stern|strap|strep|swept|tawny|trans|traps
  ["seeds-singe","seeds","singe","sends","siege",1,"","","sends-siege",2,92,1,4,0], // allWords 8: dense|geese|genes|needs|sides|signs|sings|snide
  ["guy-map","guy","map","pug","yam",3,"","","pug-yam",10,92,1,4,0], // allWords 4: amp|gap|gay|may
  ["legit-turns","legit","turns","guilt","rents",3,"","","guilt-rents",21,92,1,4,0], // allWords 13: gents|glens|lungs|riles|rites|runts|slung|stern|stung|tiers|tires|tries|trite
  ["after-nixes","after","nixes","faxes","inter",3,"","","faxes-inter",8,92,1,4,0], // allWords 7: fates|feast|feats|inert|inset|irate|stein
  ["chin-mode","chin","mode","demo","inch",2,"","","demo-inch",14,77,4,7,0], // allWords 5: code|coin|deco|dome|icon
  ["ably-disk","ably","disk","bask","idly",3,"","","bask-idly",9,92,1,4,0], // allWords 3: bays|kids|skid
  ["goals-prove","goals","prove","grave","pools",2,"","","grave-pools",3,92,1,4,0], // allWords 11: glare|grove|lager|large|logos|loops|paler|pearl|regal|sloop|spool
  ["ashes-debit","ashes","debit","beast","hides",4,"","","beast-hides",22,92,1,4,0], // allWords 11: baits|bases|basis|bates|beats|debts|haste|hates|heats|saith|sheds
  ["also-mice","also","mice","coal","semi",3,"","","coal-semi",19,92,1,4,0], // allWords 6: ciao|cola|lace|miso|sale|seal
  ["lace-sums","lace","sums","cuss","male",3,"sams","luce","cuss-male",9,92,1,4,0], // allWords 14: aces|case|clue|cues|lame|mass|meal|mesa|mule|muse|same|seam|slam|slum
  ["jolt-pets","jolt","pets","jots","pelt",2,"","","jots-pelt",1,92,1,4,0], // allWords 10: jest|jets|pest|plot|post|pots|spot|step|stop|tops
  ["claws-cruel","claws","cruel","clues","crawl",2,"","","clues-crawl",2,92,1,4,0], // allWords 10: acres|cares|clear|cures|curse|laces|races|scale|scare|ulcer
  ["agile-saved","agile","saved","aside","gavel",3,"","","aside-gavel",19,92,1,4,0], // allWords 8: aides|aisle|dials|eaves|ideas|salve|siege|slave
  ["chef-skin","chef","skin","fish","neck",4,"","","fish-neck",22,92,1,4,0], // allWords 6: chin|hens|inch|nick|shin|sink
  ["bases-cable","bases","cable","blabs","cease",3,"","","blabs-cease",11,92,1,4,0], // allWords 9: babel|babes|bales|cases|class|laces|sable|scale|slabs
  ["acids-trees","acids","trees","cites","reads",3,"","","cites-reads",8,92,1,4,0], // allWords 15: arise|cease|dares|erase|ester|raids|raise|reset|rites|saree|steer|terse|tiers|tires|tries
  ["ears-with","ears","with","heir","swat",3,"","","heir-swat",11,92,1,4,0], // allWords 20: east|eats|eras|hare|hate|hear|heat|hire|rise|seat|sera|sire|site|teas|thaw|ties|wars|what|whit|wits
  ["flee-list","flee","list","isle","left",2,"","","cannot be reversed",7,92,1,4,0], // allWords 12: feel|felt|fist|fits|lies|lite|self|sell|sift|slit|tell|tile
  ["pipes-ranks","pipes","ranks","snipe","spark",4,"","","cannot be reversed",25,92,1,4,0], // allWords 21: earns|nears|panes|parks|parse|pears|piers|pines|pinks|reins|resin|rinse|risen|siren|snare|snark|spank|spare|spear|spine|spire
  ["soda-wife","soda","wife","sofa","wide",1,"","","sofa-wide",1,92,1,4,0], // allWords 9: aids|dies|does|dosa|dose|foes|owed|said|side
  ["end-lot","end","lot","net","old",2,"","","net-old",7,87,2,5,0], // allWords 4: den|doe|ten|toe
  ["lord-rage","lord","rage","gold","rare",3,"","","gold-rare",9,92,1,4,0], // allWords 14: drag|earl|ergo|gale|gear|glad|gore|grad|lear|lore|ogre|real|rear|role
  ["cache-plant","cache","plant","clean","patch",3,"","","clean-patch",12,92,1,4,0], // allWords 11: apnea|catch|cheap|lance|latch|leach|panel|peach|pecan|penal|plane
  ["actor-homes","actor","homes","macro","those",3,"","","macro-those",21,92,1,4,0], // allWords 17: ascot|carte|caste|cater|chest|coast|coats|crate|cream|ethos|ortho|other|react|shoot|tacos|torch|trace
  ["each-pole","each","pole","echo","plea",2,"","","echo-plea",7,92,1,4,0], // allWords 11: ache|cape|chap|chop|cope|hale|heal|hole|leap|pace|pale
  ["guns-team","guns","team","meat","sung",2,"guam","tens","meat-sung",19,87,2,5,0], // allWords 18: ages|east|eats|game|gnus|mate|meta|nest|nets|nuts|sage|seat|sent|snug|stun|tame|teas|tens
  ["ponds-terms","ponds","terms","spend","storm",2,"","","spend-storm",7,92,1,4,0], // allWords 6: dents|drops|proms|romps|sperm|tends
  ["keen-nope","keen","nope","keep","none",3,"","","keep-none",9,92,1,4,0], // allWords 5: knee|neon|open|peek|poke
  ["drift-fines","drift","fines","sniff","tired",4,"","","sniff-tired",30,92,1,4,0], // allWords 14: dries|ferns|finds|fires|fries|nerds|refit|rides|riffs|serif|sired|snide|trend|tried
  ["its-paw","its","paw","spa","wit",2,"","","spa-wit",8,85,2,7,0], // allWords 2: sap|sit
  ["diver-ruler","diver","ruler","river","ruled",3,"","","cannot be reversed",12,87,2,5,0], // allWords 3: drive|lured|riled
  ["arts-exit","arts","exit","sari","text",2,"","","sari-text",8,92,1,4,0], // allWords 13: airs|axis|rats|rest|rise|rite|sire|star|tart|taxi|tier|tire|tsar
  ["eight-slash","eight","slash","highs","slate",4,"","","highs-slate",26,92,1,4,0], // allWords 17: hales|halts|heals|lasts|lathe|leash|least|saith|salts|shale|shalt|sighs|sight|slats|stale|steal|tales
  ["fame-rack","fame","rack","cafe","mark",3,"","","cafe-mark",9,86,2,6,0], // allWords 5: acre|care|face|mare|race
  ["feed-link","feed","link","find","leek",2,"","","find-leek",2,87,2,5,0], // allWords 8: deli|fend|idle|keel|kiln|lend|lied|like
  ["dance-verse","dance","verse","cedar","seven",3,"","","cedar-seven",19,92,1,4,0], // allWords 19: cadre|cared|carve|crave|creed|dares|deans|dense|evens|needs|raced|raves|reads|reeds|saver|sedan|serve|sever|veers
  ["hand-took","hand","took","hood","tank",2,"","","hood-tank",2,92,1,4,0], // allWords 6: hank|honk|hook|khan|knot|toad
  ["noble-rinse","noble","rinse","linen","sober",4,"","","linen-sober",25,92,1,4,0], // allWords 14: bones|bores|enrol|liber|liner|loner|nines|reins|resin|risen|robes|senor|siren|snore
  ["bunt-very","bunt","very","bury","vent",2,"","","bury-vent",1,92,1,4,0], // allWords 3: bent|envy|ruby
  ["bit-own","bit","own","nib","two",3,"","","nib-two",10,87,2,5,0], // allWords 4: bin|ion|now|won
  ["dude-nuts","dude","nuts","duds","tune",3,"","","cannot be reversed",8,86,2,6,0], // allWords 6: duet|dune|dust|nude|stud|stun
  ["lanky-meals","lanky","meals","leaks","manly",2,"","","leaks-manly",3,92,1,4,0], // allWords 8: allay|alley|lakes|leaky|makes|males|nelly|snell
  ["newer-tenor","newer","tenor","enter","owner",3,"","","cannot be reversed",18,92,1,4,0], // allWords 4: renew|toner|tower|wrote
  ["dies-kill","dies","kill","lied","silk",3,"lidl","sike","lied-silk",23,92,1,4,0], // allWords 7: deli|dill|idle|lids|like|side|slid
  ["crane-great","crane","great","range","react",2,"","","range-react",6,92,1,4,0], // allWords 13: agree|anger|carat|carte|cater|crate|eager|genre|grant|grate|green|rance|trace
  ["dish-rest","dish","rest","shed","stir",3,"","","shed-stir",19,92,1,4,0], // allWords 2: hers|shri
  ["aides-sorry","aides","sorry","diary","roses",4,"","","diary-roses",11,92,1,4,0], // allWords 13: arise|arose|aside|dairy|doses|ideas|raids|raise|rises|roads|roars|sides|sores
  ["deal-know","deal","know","down","kale",2,"","","down-kale",9,92,1,4,0], // allWords 13: dale|dawn|dole|lake|land|lead|leak|owed|wade|wake|wand|weak|woke
  ["agog-seas","agog","seas","goes","saga",5,"","","goes-saga",26,92,1,4,0], // allWords 5: ages|egos|gaga|sage|sago
  ["fix-nor","fix","nor","for","nix",1,"","","for-nix",0,87,2,5,0], // allWords 2: fir|fox
  ["bawl-hulk","bawl","hulk","bull","hawk",2,"","","bull-hawk",2,92,1,4,0], // allWords 5: ball|bulk|hall|hull|lakh
  ["queer-white","queer","white","quiet","where",3,"","","quiet-where",11,92,1,4,0], // allWords 2: quite|threw
  ["euro-hats","euro","hats","oath","sure",3,"","","oath-sure",23,92,1,4,0], // allWords 17: aero|ears|east|eats|eras|hast|hour|huts|rash|ruse|rush|seat|sera|shut|teas|thus|user
  ["batch-genes","batch","genes","bench","gates",2,"","","bench-gates",2,92,1,4,0], // allWords 9: bates|bathe|beans|beast|beats|beets|beset|chang|stage
  ["drove-swamp","drove","swamp","romps","waved",3,"","","romps-waved",10,92,1,4,0], // allWords 16: armed|dream|madre|mares|mores|mowed|overs|proms|ramps|raves|saver|servo|smear|verso|vowed|waves
  ["asks-lamb","asks","lamb","bask","slam",2,"","","bask-slam",7,92,1,4,0], // allWords 2: balm|mass
  ["lingo-wives","lingo","wives","olive","swing",3,"","","olive-swing",9,87,2,5,0], // allWords 11: evils|liens|lines|lives|owing|sling|swine|veils|views|wines|wings
  ["blab-leaf","blab","leaf","babe","fall",3,"","","cannot be reversed",20,92,1,4,0], // allWords 4: able|bale|ball|flea
  ["birth-flick","birth","flick","brick","filth",3,"","","brick-filth",9,92,1,4,0], // allWords 3: birch|firth|frith
  ["bite-gush","bite","gush","sigh","tube",3,"","","sigh-tube",15,92,1,4,0], // allWords 4: bush|hubs|hugs|thug
  ["acted-risks","acted","risks","sacks","tried",3,"","","sacks-tried",8,92,1,4,0], // allWords 21: aides|aside|cadet|cases|casks|caste|cress|crest|dries|ideas|rides|rises|rites|sired|skirt|stack|tacks|tiers|tired|tires|tries
  ["legs-runs","legs","runs","lens","rugs",1,"","","lens-rugs",1,92,1,4,0], // allWords 2: lugs|slug
  ["beard-count","beard","count","dance","turbo",5,"","","dance-turbo",32,92,1,4,0], // allWords 28: abort|actor|bared|baton|board|bound|bread|broad|brute|cadre|canto|cared|carte|cater|cedar|court|crate|crude|cured|cuter|enact|raced|react|rebut|tabor|trace|truce|tuber
  ["area-hint","area","hint","anti","hear",2,"","","anti-hear",9,92,1,4,0], // allWords 5: hare|rant|rate|tear|thin
  ["dad-don","dad","don","and","odd",2,"","","cannot be reversed",7,85,2,7,0], // allWords 2: add|nod
  ["droid-swear","droid","swear","roads","weird",3,"","","roads-weird",11,92,1,4,0], // allWords 24: adder|dared|dares|dewar|dread|dried|drier|dries|reads|rears|rider|rides|riser|roars|sawed|sired|wares|wears|weirs|wider|wired|wires|wised|wiser
  ["fart-held","fart","held","felt","hard",2,"","","felt-hard",2,92,1,4,0], // allWords 10: dahl|flat|fled|frat|fret|halt|hart|herd|left|raft
  ["loves-steam","loves","steam","moves","steal",4,"","","moves-steal",25,92,1,4,0], // allWords 18: asset|least|mates|meats|meets|metal|salvo|seats|slate|sleet|solve|stale|steel|tales|tames|teams|teems|vests
  ["baron-given","baron","given","robin","vegan",3,"","","robin-vegan",17,92,1,4,0], // allWords 9: anger|argon|brine|groan|groin|orang|organ|range|reign
  ["came-such","came","such","case","much",4,"","","case-much",13,87,2,5,0], // allWords 11: aces|cash|cues|mace|mach|mash|mesa|muse|same|seam|sham
  ["amend-rents","amend","rents","names","trend",2,"","","names-trend",8,92,1,4,0], // allWords 22: deter|ender|ester|mated|mates|means|meats|mensa|named|reset|senna|sneer|steam|steer|stern|tamed|tames|teams|tease|terms|terse|trees
  ["blips-stout","blips","stout","built","spots",4,"","","built-spots",12,92,1,4,0], // allWords 13: bolus|bouts|lotus|plots|posts|slips|souls|spilt|spits|split|stops|suits|touts
  ["desk-sins","desk","sins","kiss","send",4,"","","kiss-send",26,92,1,4,0], // allWords 10: disk|diss|ends|kids|kind|ness|sink|skid|skin|skis
  ["into-rile","into","rile","line","trio",3,"","","line-trio",9,87,2,5,0], // allWords 12: lien|lion|rent|riot|rite|roti|tern|tier|tine|tire|tori|torn
  ["baa-ten","baa","ten","ban","tea",1,"","","ban-tea",0,86,2,6,0], // allWords 7: ant|ate|ben|eat|nab|net|tan
  ["cards-woozy","cards","woozy","crazy","woods",3,"","","crazy-woods",9,92,1,4,0], // allWords 8: cords|dowry|draws|rowdy|sword|wards|woody|words
  ["teen-toss","teen","toss","note","sets",3,"","","note-sets",19,87,2,5,0], // allWords 8: nest|nets|sent|tees|tens|toes|tone|tons
  ["rites-shale","rites","shale","ether","sails",5,"","","ether-sails",35,92,1,4,0], // allWords 26: aisle|arise|ashes|hales|hares|heals|hears|islet|leash|liars|lists|rails|raise|share|shear|sheet|sites|slash|slits|there|these|three|tiers|tiles|tires|tries
  ["bald-grid","bald","grid","bird","glad",2,"","","bird-glad",8,92,1,4,0], // allWords 1: gird
  ["crows-llama","crows","llama","allow","scram",3,"","","allow-scram",10,92,1,4,0], // allWords 12: alarm|calms|clams|claws|crams|macro|malls|molar|moral|small|walla|walls
  ["alone-bumps","alone","bumps","ample","bonus",3,"","","ample-bonus",8,92,1,4,0], // allWords 9: lamps|loans|manus|maple|noble|palms|psalm|pumas|salon
  ["goal-idol","goal","idol","laid","logo",3,"","","laid-logo",19,76,4,8,0], // allWords 3: dial|glad|gold
  ["booty-start","booty","start","robot","tasty",4,"","","robot-tasty",24,92,1,4,0], // allWords 16: abort|artsy|batty|roast|roost|roots|stoat|story|stray|tabor|tarts|toast|toots|torso|torts|trays
  ["awry-bias","awry","bias","away","ribs",3,"","","away-ribs",9,87,2,5,0], // allWords 6: airs|airy|sari|swab|wars|wary
  ["age-tap","age","tap","ate","gap",2,"","","ate-gap",7,80,3,8,0], // allWords 4: eat|get|pat|tea
  ["gaff-sole","gaff","sole","golf","safe",2,"","","golf-safe",2,92,1,4,0], // allWords 7: flag|foes|gale|lose|offs|sale|seal
  ["arose-honks","arose","honks","earns","shook",2,"","","earns-shook",7,92,1,4,0], // allWords 10: heros|hooks|horse|nears|ranks|shone|shore|snare|snark|soars
  ["joins-makes","joins","makes","jokes","mains",2,"","","jokes-mains",1,87,2,5,0], // allWords 3: minas|monks|smoke
  ["knew-tool","knew","tool","look","went",4,"","","look-went",23,92,1,4,0], // allWords 6: know|lent|loot|newt|town|woke
  ["done-yowl","done","yowl","only","owed",2,"","","only-owed",8,92,1,4,0], // allWords 1: node
  ["alter-gifts","alter","gifts","flats","tiger",4,"","","flats-tiger",16,87,2,5,0], // allWords 16: alert|false|feral|flare|fleas|grief|grift|irate|later|leafs|least|slate|stale|steal|tales|trait
  ["cater-serve","cater","serve","crave","steer",3,"","","crave-steer",11,92,1,4,0], // allWords 26: aster|carer|carte|carve|crate|erase|erect|ester|racer|rates|raves|react|rears|reset|saree|saver|sever|stare|stave|tears|tease|terse|trace|trees|veers|verse
  ["pops-rock","pops","rock","cops","pork",3,"","","cannot be reversed",9,86,2,6,0], // allWords 2: cork|pros
  ["psalm-teeth","psalm","teeth","helps","matte",5,"","","helps-matte",32,92,1,4,0], // allWords 14: ample|halts|lamps|lathe|maple|melts|metal|palms|paths|shalt|smelt|stamp|temps|theta
  ["lap-two","lap","two","owl","pat",3,"","","owl-pat",9,86,2,6,0], // allWords 4: alp|low|pal|tap
  ["glen-swig","glen","swig","legs","wing",3,"","","legs-wing",10,87,2,5,0], // allWords 6: lens|ling|news|sewn|wigs|wins
  ["beds-envy","beds","envy","bevy","ends",2,"","","bevy-ends",1,92,1,4,0], // allWords 4: deny|eyed|seed|send
  ["edits-plans","edits","plans","sedan","split",3,"","","sedan-split",8,92,1,4,0], // allWords 21: dates|deans|diets|islet|lanes|leans|least|liens|lines|sited|slate|snide|spilt|splat|stade|stale|stead|steal|tales|tides|tiles
  ["slate-wrist","slate","wrist","stilt","wears",4,"","","stilt-wears",22,92,1,4,0], // allWords 39: aster|isles|islet|lasts|least|lists|rates|rises|rites|sales|salts|seals|sears|slats|slits|stale|stare|stars|start|steal|stirs|straw|swear|tales|tarts|tears|tiers|tiles|tilts|tires|tries|wares|warts|water|weirs|wiles|wires|wiser|write
  ["able-wide","able","wide","blew","idea",2,"","","blew-idea",7,87,2,5,0], // allWords 3: aide|bale|bead
  ["base-melt","base","melt","best","male",2,"","","best-male",3,92,1,4,0], // allWords 18: able|bale|bats|bees|belt|bets|lame|malt|mast|mats|meal|mesa|same|seam|seem|stab|stem|tabs
  ["abuse-oddly","abuse","oddly","badly","douse",3,"","","badly-douse",8,92,1,4,0], // allWords 5: based|beads|blade|buoys|dosed
  ["bowel-setup","bowel","setup","elbow","upset",2,"","","elbow-upset",14,86,2,6,0], // allWords 12: below|lotus|lowes|pesto|poets|sleet|spout|steel|steep|stole|sweep|weeps
  ["cast-kind","cast","kind","disc","tank",4,"","","disc-tank",26,92,1,4,0], // allWords 10: acts|cats|dank|disk|kids|kits|knit|skid|skit|task
  ["eye-wet","wet","eye","ewe","yet",2,"","","cannot be reversed",7,86,2,6,0], // allWords 3: tee|wee|yew
  ["aired-began","aired","began","again","breed",3,"","","again-breed",12,92,1,4,0], // allWords 16: adage|arena|badge|bared|beard|begin|being|binge|braid|brain|bread|bride|brine|eared|naira|rabid
  ["dimly-natal","dimly","natal","manly","tidal",4,"","","manly-tidal",16,92,1,4,0], // allWords 2: madly|mayan
  ["arts-sued","arts","sued","rats","used",1,"","","rats-used",3,76,4,8,0], // allWords 14: dare|dart|dear|dues|dust|ears|eras|read|reds|sera|star|stud|tsar|uses
  ["dirt-seen","dirt","seen","nerd","ties",4,"","","nerd-ties",26,92,1,4,0], // allWords 12: diet|dine|edit|need|rest|rind|sine|site|stir|tees|tide|tied
  ["curly-vines","curly","vines","curse","vinyl",3,"","","curse-vinyl",8,92,1,4,0], // allWords 6: cries|cures|curls|lyric|since|veins
  ["feta-hull","feta","hull","full","heat",2,"","","cannot be reversed",9,92,1,4,0], // allWords 13: fate|feat|fell|felt|flea|hale|hate|haul|heal|hell|hula|leaf|left
  ["clone-glade","clone","glade","lance","lodge",2,"","","lance-lodge",7,87,2,5,0], // allWords 8: angel|angle|clade|clean|decal|dolce|glean|laced
  ["bleat-rises","bleat","rises","belts","raise",4,"","","belts-raise",23,92,1,4,0], // allWords 24: alert|alter|arise|baits|bales|basis|bites|blast|bless|earls|irate|laser|later|leers|reals|reels|rites|sable|slabs|stair|table|tiers|tires|tries
  ["eel-win","eel","win","lie","new",3,"","","lie-new",14,92,1,4,0], // allWords 0
  ["dope-nick","dope","nick","code","pink",3,"","","code-pink",9,92,1,4,0], // allWords 10: cone|deco|dice|dock|iced|nice|nope|once|open|pine
  ["mafia-wants","mafia","wants","mania","wafts",1,"","","mania-wafts",2,92,1,4,0], // allWords 6: anima|fatwa|mains|manta|minas|swain
  ["finds-nasty","finds","nasty","nifty","sands",4,"","","nifty-sands",11,92,1,4,0], // allWords 3: fists|sandy|sifts
  ["fits-yelp","fits","yelp","pity","self",4,"","","pity-self",23,92,1,4,0], // allWords 4: fist|flip|sift|type
  ["gives-value","gives","value","lives","vague",4,"","","lives-vague",12,92,1,4,0], // allWords 9: eagle|evils|gales|guile|leave|liege|salve|slave|veils
  ["clay-zone","clay","zone","lazy","once",2,"","","lazy-once",7,87,2,5,0], // allWords 4: cone|lace|lacy|zeal
  ["cared-salts","cared","salts","lasts","raced",2,"","","lasts-raced",3,77,4,7,0], // allWords 23: acres|cadre|cares|carts|cedar|clade|dales|dares|darts|deals|decal|laced|laces|leads|races|reads|sales|scale|scare|seals|sears|slats|stars
  ["chalk-poses","chalk","poses","chess","polka",3,"","","chess-polka",12,92,1,4,0], // allWords 13: aches|chase|clash|cloak|coals|heaps|locks|pesos|phase|pokes|posse|shape|spoke
  ["dare-edgy","dare","edgy","edge","yard",3,"","","edge-yard",23,92,1,4,0], // allWords 7: aged|dear|deer|dyer|read|reed|year
  ["pay-way","pay","way","yap","yaw",2,"","","yap-yaw",5,74,4,10,0], // allWords 0
  ["intro-steel","intro","steel","inlet","store",4,"","","inlet-store",17,92,1,4,0], // allWords 15: elite|liner|nitro|notes|onset|senor|seton|sleet|snore|snort|stone|title|tones|torts|totes
  ["free-sour","free","sour","ours","reef",1,"","","ours-reef",3,61,7,11,0], // allWords 8: fore|four|rees|rose|ruse|sore|sure|user
  ["crews-stalk","crews","stalk","clerk","swats",4,"","","clerk-swats",12,92,1,4,0], // allWords 9: celts|lasts|salts|screw|slats|stews|talks|wests|wreck
  ["jean-soil","jean","soil","join","seal",2,"jane","silo","join-seal",2,92,1,4,0], // allWords 8: also|ions|isle|lies|oils|sale|sane|sine
  ["nicer-romps","nicer","romps","corps","miner",3,"","","corps-miner",8,92,1,4,0], // allWords 17: cones|cores|cries|crisp|crone|crops|crore|mines|mores|omens|prism|proms|recon|scone|score|scrip|since
  ["lever-today","lever","today","delay","voter",4,"","","delay-voter",16,92,1,4,0], // allWords 16: alder|avert|deter|elder|lover|older|overt|rated|ravel|revel|toyed|trade|tread|trove|valor|yodel
  ["key-say","key","say","yak","yes",3,"","","yak-yes",9,77,4,7,0], // allWords 1: kay
  ["dork-prep","dork","prep","drop","perk",2,"","","drop-perk",6,86,2,6,0], // allWords 7: dope|drek|poke|pope|pork|prod|prop
  ["ample-using","ample","using","maple","suing",1,"","","maple-suing",3,69,5,11,0], // allWords 14: aisle|amine|anime|anise|gains|lapse|leaps|pales|panes|pangs|pleas|plugs|plume|pulse
  ["cage-tale","cage","tale","gate","lace",3,"","","gate-lace",8,86,2,6,0], // allWords 2: late|teal
  ["deaf-lilt","deaf","lilt","fled","tail",4,"","","fled-tail",23,92,1,4,0], // allWords 12: date|fade|fail|fell|fill|flea|late|leaf|tale|teal|tell|till
  ["chaos-dream","chaos","dream","chose","drama",2,"","","chose-drama",6,87,2,5,0], // allWords 26: aches|acres|armed|cares|chase|chemo|comer|cores|cream|dares|doers|doser|hades|heads|macho|macro|madre|mocha|orcas|races|reads|roads|sacra|scare|score|shade
  ["aisle-cards","aisle","cards","raids","scale",3,"","","raids-scale",8,92,1,4,0], // allWords 20: aides|aired|aside|cadre|cared|cedar|cider|class|clear|cried|discs|ideas|laces|liars|raced|rails|relic|sails|salsa|slice
  ["calm-word","calm","word","cold","warm",2,"","","cold-warm",3,92,1,4,0], // allWords 9: card|clad|clam|clod|cord|cram|draw|ward|worm
  ["grog-rude","grog","rude","drug","ogre",2,"","","drug-ogre",9,82,3,6,0], // allWords 3: ergo|euro|gore
  ["havoc-siren","havoc","siren","roach","veins",3,"","","roach-veins",24,92,1,4,0], // allWords 24: acres|arson|cares|caves|chive|choir|cries|earns|haven|irons|nears|orcas|races|reach|reins|resin|rhino|rinse|risen|scare|snare|sonar|vices|vines
  ["dog-pot","dog","pot","god","top",2,"","","god-top",5,63,6,13,0], // allWords 2: dot|opt
  ["beer-miff","beer","miff","biff","mere",2,"","","biff-mere",9,92,1,4,0], // allWords 4: beef|bree|brie|firm
  ["acts-sued","acts","sued","cats","used",1,"","","cats-used",3,69,5,11,0], // allWords 9: aced|aces|case|cast|dues|dust|secs|stud|uses
  ["grape-ropes","grape","ropes","agree","props",2,"","","agree-props",8,87,2,5,0], // allWords 12: arose|eager|gears|grasp|opera|pager|pores|poser|prose|rages|rears|spore
  ["fines-slice","fines","slice","flies","since",2,"","","flies-since",2,92,1,4,0], // allWords 3: files|isles|seine
  ["aged-flit","aged","flit","gift","lead",2,"","","gift-lead",8,92,1,4,0], // allWords 13: dale|deal|dial|felt|fled|gate|laid|late|left|lift|tail|tale|teal
  ["photo-trace","photo","trace","cheat","troop",4,"","","cheat-troop",29,92,1,4,0], // allWords 23: actor|caper|carte|cater|cheap|crate|epoch|otter|pacer|peach|poach|pooch|react|recap|taper|tarot|tater|teach|tetra|theta|tooth|treat|trope
  ["rank-some","rank","some","mark","nose",3,"rome","sank","mark-nose",9,87,2,5,0], // allWords 12: earn|eons|mare|mask|mesa|more|near|ones|same|sane|sank|seam
  ["from-root","from","root","fort","room",2,"","","cannot be reversed",6,85,2,7,0], // allWords 4: foot|form|moor|toro
  ["label-zesty","label","zesty","bezel","salty",4,"","","bezel-salty",16,92,1,4,0], // allWords 4: blaze|stall|style|tells
  ["aid-nab","aid","nab","baa","din",3,"","","baa-din",9,86,2,6,0], // allWords 4: and|ban|bin|nib
  ["bears-gnome","bears","gnome","borne","games",3,"","","borne-games",11,92,1,4,0], // allWords 18: agree|anger|barns|beams|boner|bores|eager|gears|goers|goner|mages|ogres|rages|range|robes|saber|sabre|sober
  ["euro-song","euro","song","gone","ours",3,"","","gone-ours",23,92,1,4,0], // allWords 12: ergo|gnus|gore|guns|ogre|rugs|snog|snug|soon|sour|sung|urge
  ["panda-wires","panda","wires","award","spine",3,"","","award-spine",10], // allWords 26: apnea|aware|dawns|draws|drips|panes|parse|pears|piers|pines|rapid|snipe|spare|spear|spire|swear|swine|wands|wanes|wards|wares|wears|weirs|winds|wines|wiser
  ["arch-idea","arch","idea","acid","hear",3,"","","acid-hear",19], // allWords 10: aide|area|chad|char|hare|head|heir|hide|hire|rich
  ["nest-pack","nest","pack","neck","past",2,"","","neck-past",1], // allWords 14: ants|cent|nets|pact|pats|peck|pest|pets|sank|sent|spat|step|taps|tens
  ["atlas-scent","scent","atlas","enact","lasts",3,"","","enact-lasts",17], // allWords 16: asset|canes|cases|caste|cents|clans|class|nests|salts|seats|slant|slats|state|stent|taste|tents
  ["base-clan","base","clan","able","scan",3,"","","able-scan",12,92,1,4,0], // allWords 7: aces|bale|bans|cans|case|lace|nabs
  ["party-super","super","party","paper","rusty",4,"","","paper-rusty",16,92,1,4,0], // allWords 19: artsy|parse|parts|pasty|patsy|payer|pears|purse|rears|repay|spare|spear|spurt|strap|stray|traps|trays|upper|years
  ["panel-split","split","panel","paint","spell",3,"","","paint-spell",8], // allWords 30: lanes|lapel|leans|leapt|least|nails|pelts|penal|petal|pills|pints|plain|plane|plate|pleat|saint|satin|slain|slate|slept|snail|spelt|spent|spill|spilt|stain|stale|steal|tails|tales
  ["tin-ups","tin","ups","its","pun",2,"","","its-pun",7], // allWords 2: nit|sit
  ["prep-what","prep","what","phew","trap",4,"","","cannot be reversed",26,92,1,4,0], // allWords 7: part|path|tarp|thaw|warp|wart|wrap
  ["curse-grill","curse","grill","cruel","girls",3,"","","cannot be reversed",19,92,1,4,0], // allWords 12: cries|cures|curls|gruel|guile|guise|luger|relic|sulci|surge|ulcer|urges
  ["tidy-yaps","tidy","yaps","days","pity",3,"","","days-pity",9,87,2,5,0], // allWords 8: past|pats|pays|pits|spat|spit|taps|tips
  ["tern-true","true","tern","tree","turn",2,"","","tree-turn",6,92,1,4,0], // allWords 3: rent|runt|tune
  ["full-king","full","king","gulf","link",3,"","","gulf-link",23,92,1,4,0], // allWords 4: fill|gunk|kill|kiln
  ["buys-kegs","buys","kegs","bugs","keys",1,"","","bugs-keys",1], // allWords 2: begs|busy
  ["acted-horse","horse","acted","raced","those",2,"","","raced-those",6,92,1,4,0], // allWords 20: acres|adore|arose|cadet|cadre|cards|cared|cares|caste|cedar|cheer|chest|ethos|heros|horde|races|roads|scare|shore|toads
  ["limit-saves","limit","saves","males","visit",4,"","","males-visit",12,92,1,4,0], // allWords 34: amiss|emits|evils|items|limes|lives|mails|masse|mates|meals|meats|metal|miles|mites|salve|seams|semis|silva|slave|slime|smile|smite|stave|steam|tames|teams|times|valet|vases|veils|vials|visas|vista|vital
  ["bro-emu","bro","emu","mob","rue",2,"","","mob-rue",9,92,1,4,0], // allWords 5: emo|orb|ore|rob|rub
  ["menu-ties","menu","ties","seem","unit",5,"","","seem-unit",26,92,1,4,0], // allWords 9: nest|nets|semi|sent|site|tees|tens|tins|tune
  ["bowls-stein","stein","bowls","blown","sites",2,"","","blown-sites",8,92,1,4,0], // allWords 11: belts|bites|blows|inset|lobes|loses|noble|noise|slows|soles|twins
  ["cafe-thin","cafe","thin","feta","inch",3,"","","feta-inch",18], // allWords 8: anti|cain|chef|chin|face|fate|feat|hint
  ["lame-vote","lame","vote","move","tale",3,"","","move-tale",9,92,1,4,0], // allWords 6: late|male|meal|mole|teal|veto
  ["macro-slide","macro","slide","cream","idols",3,"","","cream-idols",17], // allWords 19: acres|adios|aides|aimed|arise|aside|cares|clods|colds|ideas|media|moira|orcas|races|raise|riles|scare|scold|solid
  ["ghee-send","send","ghee","gene","shed",2,"","","gene-shed",2], // allWords 5: edge|ends|hens|seed|seen
  ["sleep-thugs","sleep","thugs","plugs","sheet",4,"","","plugs-sheet",24], // allWords 8: gluts|peels|pulse|sheep|sleet|slugs|steel|these
  ["heir-plod","heir","plod","hold","pier",2,"","","hold-pier",8,92,1,4,0], // allWords 8: dope|hero|hide|hire|pore|repo|ripe|rope
  ["corps-lapse","corps","lapse","plops","scare",3,"","","plops-scare",10,92,1,4,0], // allWords 34: acres|apple|caper|capes|cares|cores|craps|crass|crops|cross|earls|laser|leaps|lopes|loser|pacer|paces|paler|pales|pearl|pleas|poles|races|reals|recap|roles|scape|scars|scope|score|scrap|slaps|slope|space
  ["ago-art","ago","art","oar","tag",2,"","","oar-tag",8,92,1,4,0], // allWords 2: rat|tar
  ["laugh-tones","laugh","tones","lanes","tough",2,"","","lanes-tough",1], // allWords 18: angst|ghoul|gusto|haute|leans|longs|lough|louse|neath|notes|onset|ought|seton|slang|stone|thane|thong|tongs
  ["died-earl","earl","died","dare","lied",3,"","","dare-lied",23], // allWords 13: dale|dead|deal|dear|deli|dire|idle|lead|lear|read|real|ride|rile
  ["liner-naive","naive","liner","alive","inner",2,"","","alive-inner",5,92,1,4,0], // allWords 6: learn|liven|navel|renal|rival|viral
  ["rate-ribs","rate","ribs","bars","tire",3,"","","bars-tire",13,92,1,4,0], // allWords 12: arts|bare|bear|bras|brie|rats|rite|star|stir|tear|tier|tsar
  ["fresh-glued","fresh","glued","flush","greed",2,"","","flush-greed",2], // allWords 9: defer|dregs|drugs|flesh|freed|ledge|shelf|shrug|urged
  ["range-salty","salty","range","large","nasty",3,"","","large-nasty",8,92,1,4,0], // allWords 14: alert|alter|anger|angry|gales|glare|lager|later|least|regal|slate|stale|steal|tales
  ["safer-tacos","safer","tacos","coast","fears",2,"","","coast-fears",19,87,2,5,0], // allWords 22: acres|actor|after|ascot|cares|carte|cases|caste|cater|coats|crate|fares|fates|feast|feats|orcas|races|react|safes|scare|sofas|trace
  ["fast-need","need","fast","fade","nets",3,"nate","feds","fade-nets",9], // allWords 20: ante|ants|deaf|dean|ends|fate|fats|feat|feds|feed|feet|feta|fete|neat|nest|sand|send|sent|teen|tens
  ["elf-fog","elf","fog","leg","off",2,"","","leg-off",7,92,1,4,0], // allWords 2: ego|gel
  ["foot-lift","foot","lift","tiff","tool",3,"","","tiff-tool",23,92,1,4,0], // allWords 3: flit|loft|loot
  ["earns-trawl","earns","trawl","learn","straw",2,"","","learn-straw",6,87,2,5,0], // allWords 10: natal|nears|rants|renal|snare|swear|trans|wares|warts|wears
  ["lotus-rinse","lotus","rinse","slots","urine",2,"","","slots-urine",6,87,2,5,0], // allWords 25: islet|liens|lines|lists|outer|reins|resin|risen|rites|rouen|route|ruins|senor|siren|slits|snore|sorts|stirs|stole|store|tiers|tiles|tires|tours|tries
  ["alley-verbs","alley","verbs","every","balls",3,"","","balls-every",11,92,1,4,0], // allWords 22: bales|bally|bears|earls|early|easel|elves|erase|laser|layer|leary|lease|reals|relay|saber|sable|sabre|saree|serve|sever|veers|verse
  ["runt-sour","sour","runt","runs","tour",4,"","","runs-tour",23], // allWords 7: nuts|ours|outs|stun|tons|torn|turn
  ["edit-nags","edit","nags","ages","dint",2,"","","ages-dint",7], // allWords 11: anti|dies|diet|gate|sage|sang|side|snag|tang|tide|tied
  ["hates-later","hates","later","heart","least",3,"","","heart-least",17,92,1,4,0], // allWords 10: alert|alter|earth|haste|hater|heats|slate|stale|steal|tales
  ["mad-she","she","mad","ads","hem",2,"","","ads-hem",8], // allWords 4: dam|hes|sad|sea
  ["bluff-start","bluff","start","blurt","staff",2,"","","blurt-staff",1,92,1,4,0], // allWords 9: farts|flats|rafts|strut|stuff|sturt|tarts|trust|tufts
  ["saps-toes","toes","saps","seas","spot",4,"","","seas-spot",23,92,1,4,0], // allWords 13: east|eats|pass|past|pats|post|pots|seat|spat|stop|taps|teas|tops
  ["cups-tick","tick","cups","cuts","pick",4,"","","cuts-pick",13,87,2,5,0], // allWords 7: pics|pits|puck|puts|spit|tips|tuck
  ["caste-rebel","rebel","caste","cable","reset",3,"","","cable-reset",11], // allWords 21: aster|beret|cease|celeb|celts|earls|erase|ester|laces|laser|leers|rates|reals|reels|saree|scale|stare|steer|tears|terse|trees
  ["delay-salon","salon","delay","nasal","yodel",3,"","","nasal-yodel",18,87,2,5,0], // allWords 5: laden|lanes|leans|loans|olden
  ["duke-ends","duke","ends","duds","knee",4,"","","duds-knee",13,87,2,5,0], // allWords 8: dude|dues|dusk|keen|need|send|sued|used
  ["donor-waist","waist","donor","radio","towns",4,"","","radio-towns",23,92,1,4,0], // allWords 10: adorn|radon|raids|rondo|rowan|stand|sworn|waits|wants|warns
  ["neon-skit","neon","skit","note","sink",2,"","","note-sink",6], // allWords 15: eons|kits|knit|knot|nine|none|nose|ones|sine|site|skin|ties|tine|toes|tone
  ["dense-karma","karma","dense","maker","sedan",3,"","","maker-sedan",19,87,2,5,0], // allWords 16: amend|armed|dares|deans|drama|dream|knees|madre|named|needs|rakes|reads|reeds|reeks|snake|sneak
  ["eye-rot","eye","rot","ore","yet",2,"","","cannot be reversed",7,86,2,6,0], // allWords 2: toe|try
  ["third-weigh","third","weigh","thigh","weird",2,"","","thigh-weird",1], // allWords 6: eight|their|tired|tried|wider|wired
  ["anger-toils","anger","toils","goals","inter",4,"","","goals-inter",12,92,1,4,0], // allWords 11: anise|gents|inert|inset|largo|nails|range|slain|slang|snail|stein
  ["down-fell","down","fell","lend","wolf",4,"","","lend-wolf",13], // allWords 5: doll|flew|flow|lewd|weld
  ["cough-shuts","cough","shuts","chugs","south",2,"","","chugs-south",3], // allWords 4: hutch|scout|shout|touch
  ["come-rare","come","rare","more","race",3,"rome","care","more-race",8], // allWords 7: acre|came|care|core|mace|mare|rear
  ["swan-twin","twin","swan","want","wins",2,"","","want-wins",7,87,2,5,0], // allWords 0
  ["false-print","false","print","first","plane",3,"","","first-plane",11,92,1,4,0], // allWords 25: faint|finer|fires|flats|fleas|fries|infer|lapse|leafs|leaps|paint|pales|panel|penal|piers|plant|pleas|rifts|ripen|sepia|serif|spire|splat|strip|trips
  ["bight-intro","bight","intro","thing","orbit",4,"","","orbit-thing",20], // allWords 4: britt|groin|night|nitro
  ["dale-many","many","dale","lady","name",3,"andy","alme","lady-name",8,87,2,5,0], // allWords 9: amen|deal|dean|lame|lead|male|mane|meal|mean
  ["guy-war","war","guy","rug","yaw",3,"","","rug-yaw",10,92,1,4,0], // allWords 4: gay|rag|raw|way
  ["left-soap","soap","left","leap","soft",2,"","","leap-soft",1], // allWords 17: alto|apes|east|eats|felt|flop|late|loft|oats|opal|pale|peas|plea|seat|tale|teal|teas
  ["army-tape","army","tape","mate","pray",3,"","","mate-pray",9,82,3,6,0], // allWords 9: mare|meat|meta|pear|peat|reap|tame|team|term
  ["diets-parry","parry","diets","ready","trips",5,"","","cannot be reversed",26,92,1,4,0], // allWords 35: dares|darts|dates|deity|dirty|dries|edits|parse|parts|party|paste|payer|pears|piers|piety|reads|repay|rides|septa|sired|sited|spare|spate|spear|spire|spite|stade|stead|stipe|strap|strip|tapes|tardy|tides|traps
  ["opera-sulks","opera","sulks","polka","users",3,"","","polka-users",8,92,1,4,0], // allWords 18: euros|parse|peaks|pears|pokes|polar|pores|poser|press|prose|ropes|rouse|slurs|spare|speak|spear|spoke|spore
  ["sees-yard","sees","yard","easy","reds",4,"","","cannot be reversed",14,92,1,4,0], // allWords 6: dyer|eyed|eyes|rays|seas|seed
  ["cries-spend","cries","spend","creed","spins",2,"","","creed-spins",3], // allWords 17: ceres|cider|cried|dries|epics|nerds|reeds|rides|rinds|rises|seeps|sired|snips|speed|spice|spied|spies
  ["oops-sack","oops","sack","pass","cook",4,"","","cook-pass",13,92,1,4,0], // allWords 5: cask|coos|saps|soap|sock
  ["close-treat","close","treat","actor","steel",5,"","","actor-steel",33,92,1,4,0], // allWords 27: carte|cater|celts|ceres|clots|colts|cores|crate|crest|eater|ester|latte|react|reset|score|sleet|steer|stole|store|tarot|tater|terse|tetra|torts|total|trace|trees
  ["nap-yes","yes","nap","pen","say",3,"","","pen-say",14,87,2,5,0], // allWords 4: pan|pay|yap|yep
  ["flats-sweet","sweet","flats","swats","fleet",2,"","","fleet-swats",1,92,1,4,0], // allWords 24: false|feels|fetal|fleas|flees|lasts|leafs|least|sales|salts|seals|slate|slats|sleet|stale|steal|steel|stews|sweat|tales|wafts|waste|watts|wests
  ["gnaw-then","gnaw","then","hang","newt",3,"","","hang-newt",11,92,1,4,0], // allWords 5: than|thaw|want|went|what
  ["crack-tribe","crack","tribe","brick","crate",4,"","","brick-crate",25], // allWords 9: biter|brace|carte|cater|crick|react|trace|track|trick
  ["caps-heel","heel","caps","case","help",2,"","","case-help",6,92,1,4,0], // allWords 7: aces|clap|hale|heal|lace|shea|spec
  ["spicy-truth","spicy","truth","pitch","rusty",3,"","","pitch-rusty",12], // allWords 7: chips|crush|hurst|hurts|putty|shirt|tipsy
  ["bush-cute","cute","bush","such","tube",3,"","","such-tube",8], // allWords 2: cues|hubs
  ["basil-wrote","basil","wrote","broil","waste",2,"","","broil-waste",2,92,1,4,0], // allWords 12: bates|beast|beats|blast|bloat|sweat|swirl|tower|weirs|wires|wiser|wrest
  ["koala-rifle","koala","rifle","alike","flora",4,"","","alike-flora",22,92,1,4,0], // allWords 3: flair|flier|frail
  ["ink-sax","ink","sax","nix","ask",2,"","","ask-nix",7], // allWords 1: kin
  ["bull-camp","bull","camp","bump","call",2,"","","bump-call",1,92,1,4,0], // allWords 6: ball|balm|calm|clam|clap|lamb
  ["node-zone","node","zone","doze","none",3,"","","doze-none",8], // allWords 2: done|neon
  ["board-tenor","board","tenor","arbor","noted",3,"","","arbor-noted",17], // allWords 18: abode|adobe|bared|barre|beard|boned|boner|borne|boron|bread|broad|rated|terra|toned|toner|trade|tread|trend
  ["loud-rain","loud","rain","dour","nail",3,"","","dour-nail",23], // allWords 12: arid|dial|dual|idol|iron|laid|lion|ludo|luna|noir|nori|raid
  ["class-mourn","class","mourn","curls","mason",3,"","","curls-mason",8,92,1,4,0], // allWords 9: acorn|clans|manor|moans|orcas|roman|scour|slams|slums
  ["dealt-rival","dealt","rival","alter","valid",3,"","","alter-valid",18], // allWords 11: alert|avert|delta|ladle|later|ravel|tiara|tidal|trail|trial|viral
  ["dibs-pile","dibs","pile","bide","lips",3,"","","bide-lips",8], // allWords 7: bids|deli|idle|lids|lied|slid|slip
  ["grip-sand","grip","sand","snap","gird",2,"dans","prig","gird-snap",6], // allWords 8: aids|dang|grid|pang|pans|rips|said|span
  ["loose-pagan","loose","pagan","algae","spoon",4,"","","algae-spoon",24,92,1,4,0], // allWords 11: agape|along|gales|loans|longs|pages|pangs|salon|slang|snoop|solon
  ["all-wow","all","wow","law","owl",2,"","","law-owl",7,92,1,4,0], // allWords 2: awl|low
  ["shaky-wraps","wraps","shaky","hawks","raspy",3,"","","hawks-raspy",11], // allWords 2: prays|spray
  ["grog-wise","grog","wise","ogre","swig",2,"","","ogre-swig",9,82,3,6,0], // allWords 6: ergo|gigs|gore|grow|wigs|wore
  ["drew-wing","drew","wing","grew","wind",4,"","","grew-wind",23,92,1,4,0], // allWords 2: ding|wide
  ["pasta-stern","pasta","stern","pants","stare",3,"","","pants-stare",8,92,1,4,0], // allWords 20: areas|aster|earns|nears|paras|parts|rates|rents|snare|stars|state|stats|stent|strap|tapas|taper|taste|tears|tents|traps
  ["sigh-toss","sigh","toss","gosh","sits",3,"","","gosh-sits",15], // allWords 6: gist|hits|hogs|host|shot|this
  ["pools-shine","pools","shine","phone","soils",2,"","","phone-soils",3], // allWords 16: holes|loops|loose|noise|noose|polis|shins|shone|silos|sloop|slosh|snoop|solos|spoil|spool|spoon
  ["elm-ewe","elm","ewe","eel","mew",2,"","","eel-mew",8], // allWords 2: mel|wee
  ["elder-unite","elder","unite","elite","under",2,"","","elite-under",1,92,1,4,0], // allWords 9: elude|ender|inert|inter|lured|ruled|trend|tuned|urine
  ["mood-weak","mood","weak","owed","amok",3,"","","amok-owed",9], // allWords 12: dame|demo|dome|doom|made|make|mead|mode|wade|wake|woke|wood
  ["spit-year","spit","year","ears","pity",2,"","","ears-pity",7], // allWords 21: east|eats|eras|past|pats|pits|pray|raps|rasp|rips|rise|seat|sera|sire|site|spat|taps|teas|ties|tips|yeti
  ["truce-yells","yells","truce","elect","surly",5,"","","elect-surly",34], // allWords 4: celts|crust|cuter|tells
  ["bilge-gross","gross","bilge","gorge","bliss",3,"","","bliss-gorge",9,92,1,4,0], // allWords 6: bores|goers|grogs|ogres|robes|sober
  ["care-vice","care","vice","cave","rice",3,"","","cave-rice",13,81,3,7,0], // allWords 4: acre|race|rave|vera
  ["aging-cites","aging","cites","gates","icing",3,"","","gates-icing",8,92,1,4,0], // allWords 7: angst|gains|giant|saint|satin|stage|stain
  ["this-unto","this","unto","into","thus",4,"","","into-thus",13], // allWords 6: hits|huts|nuts|shut|stun|tins
  ["surf-taco","surf","taco","ours","fact",3,"","","fact-ours",23], // allWords 8: coat|fart|frat|raft|soar|sour|tour|turf
  ["bet-raw","raw","bet","tar","web",3,"","","tar-web",10,87,2,5,0], // allWords 5: art|bat|rat|tab|war
  ["golf-seat","golf","seat","goat","self",2,"","","goat-self",1], // allWords 13: east|eats|gate|lest|lets|lost|lots|oats|safe|slot|sofa|teas|toga
  ["hint-keys","hint","keys","skin","they",3,"","","skin-they",10,92,1,4,0], // allWords 6: hens|knit|shin|sink|then|thin
  ["field-trade","field","trade","freed","tidal",3,"","","freed-tidal",12], // allWords 13: alert|alter|defer|deter|elite|fared|feral|filed|flare|later|rated|tiled|tread
  ["edit-menu","edit","menu","nude","item",4,"","","item-nude",21,92,1,4,0], // allWords 10: dent|diet|dune|emit|mite|teen|tend|tide|tied|time
  ["note-snip","note","snip","stop","nine",3,"","","nine-stop",9], // allWords 13: nest|nets|pins|post|pots|sent|sine|spin|spot|tens|toes|tone|tops
  ["hosts-wince","hosts","wince","twins","chose",3,"","","chose-twins",11,92,1,4,0], // allWords 10: chins|ethos|heist|hints|niche|shots|thine|those|towns|twine
  ["fire-silk","fire","silk","risk","life",3,"","","life-risk",9,77,4,7,0], // allWords 7: file|isle|kris|lies|rife|rise|sire
  ["fifty-sorts","fifty","sorts","forty","sifts",2,"","","forty-sifts",2,92,1,4,0], // allWords 9: first|fists|forts|frost|rifts|stiff|stirs|story|tiffs
  ["chart-feast","chart","feast","shaft","react",3,"","","react-shaft",21,92,1,4,0], // allWords 9: after|carte|caste|cater|chats|crate|fates|feats|trace
  ["era-mud","mud","era","due","arm",3,"","","arm-due",9], // allWords 5: are|ear|mar|ram|red
  ["maid-used","maid","used","amid","sued",1,"","","amid-sued",3], // allWords 4: dame|dues|made|mead
  ["alert-shoes","alert","shoes","loses","heart",2,"","","heart-loses",7,92,1,4,0], // allWords 26: alter|earls|earth|easel|ethos|hares|hater|hears|horst|hoses|laser|later|lease|reals|share|shear|sheet|short|sleet|solar|soles|steel|stole|these|those|torah
  ["ridge-rusty","rusty","ridge","surge","dirty",4,"","","dirty-surge",11], // allWords 8: rites|tiers|tired|tires|tried|tries|urged|urges
  ["bugs-hope","bugs","hope","huge","bops",2,"","","bops-huge",2], // allWords 10: gobs|gosh|gush|hogs|hops|hugs|posh|pubs|push|shop
  ["dull-ergo","dull","ergo","glue","lord",4,"","","glue-lord",22,92,1,4,0], // allWords 6: gore|lore|loud|ludo|ogre|role
  ["crisp-wheat","crisp","wheat","cheap","wrist",2,"","","cheap-wrist",3], // allWords 18: caper|carte|cater|cheat|chest|chips|crate|crest|pacer|peach|react|recap|scrip|teach|trace|water|whips|wrest
  ["nasty-topic","nasty","topic","sonic","patty",4,"","","patty-sonic",12,92,1,4,0], // allWords 12: coins|icons|noisy|optic|panic|panty|potty|scant|scion|stoic|stony|tasty
  ["obey-odds","obey","odds","does","body",2,"","","body-does",6], // allWords 1: dose
  ["eat-gin","eat","gin","nag","tie",3,"","","nag-tie",14,92,1,4,0], // allWords 3: ate|tag|tea
  ["slate-stain","stain","slate","slain","state",1,"","","slain-state",1], // allWords 11: aisle|least|nails|saint|satin|slant|snail|stale|steal|tales|taste
  ["melt-trip","melt","trip","pelt","trim",4,"","","pelt-trim",23,92,1,4,0], // allWords 4: emit|item|mite|time
  ["rate-seen","rate","seen","tern","ease",4,"","","ease-tern",13], // allWords 17: ants|earn|east|eats|near|nest|nets|rant|rent|sane|seat|sent|tear|teas|tees|tens|tree
  ["model-vegan","model","vegan","demon","gavel",3,"","","demon-gavel",17], // allWords 16: amend|among|delve|devel|devon|gleam|glove|gnome|golem|loved|mango|medal|modal|monde|named|nomad
  ["scoop-shore","shore","scoop","cores","hoops",2,"","","cores-hoops",7,87,2,5,0], // allWords 5: corps|crops|heros|horse|score
  ["nerve-rests","nerve","rests","serve","rents",4,"","","rents-serve",11,92,1,4,0], // allWords 16: enter|ester|evens|nests|never|reset|seven|sever|steer|stern|teens|tense|terse|trees|veers|verse
  ["hers-must","hers","must","mess","hurt",2,"","","hurt-mess",3,92,1,4,0], // allWords 8: huts|rush|shes|shut|stem|sums|term|thus
  ["even-swig","even","swig","give","news",5,"","","give-news",26,92,1,4,0], // allWords 6: sewn|vein|vine|wigs|wine|wins
  ["nor-wed","nor","wed","den","row",3,"","","den-row",9], // allWords 3: don|end|nod
  ["dinky-liars","dinky","liars","diary","links",2,"","","diary-links",2], // allWords 7: dairy|kilns|kinds|raids|rails|rinds|slink
  ["atoms-clear","clear","atoms","actor","males",3,"","","actor-males",10,92,1,4,0], // allWords 27: aorta|ascot|carol|carte|caste|cater|coals|coast|coats|coral|crate|laces|mates|meals|meats|moats|molar|moral|react|realm|scale|steam|tacos|tamer|tames|teams|trace
  ["fire-lilt","fire","lilt","lift","rile",3,"","","cannot be reversed",8,92,1,4,0], // allWords 6: file|flit|life|rife|rift|till
  ["lion-type","lion","type","yelp","into",3,"","","into-yelp",17], // allWords 3: only|pile|pint
  ["good-talk","good","talk","glad","took",3,"","","glad-took",9], // allWords 3: gold|toad|told
  ["nun-pod","nun","pod","pun","nod",1,"","","nod-pun",0], // allWords 1: don
  ["apple-romps","apple","romps","props","maple",2,"","","maple-props",6,92,1,4,0], // allWords 6: ample|lamps|morel|palms|proms|psalm
  ["call-like","call","like","lace","kill",3,"","","kill-lace",8,92,1,4,0], // allWords 7: cake|kale|lack|lake|leak|lice|lick
  ["lamb-pair","lamb","pair","ramp","bail",3,"","","bail-ramp",22], // allWords 4: balm|lair|liar|rail
  ["blank-child","blank","child","blind","chalk",2,"","","blind-chalk",3,92,1,4,0], // allWords 5: bland|blink|chink|clank|clink
  ["dingo-trace","dingo","trace","ingot","raced",2,"","","ingot-raced",6,92,1,4,0], // allWords 16: actor|cadre|cared|carte|cater|cedar|crate|doing|gator|grade|grate|great|raged|react|tinge|tonic
  ["nine-sort","nine","sort","stir","neon",2,"","","neon-stir",6], // allWords 13: eons|none|nose|ones|rein|rise|rose|sine|sire|sore|tins|tons|torn
  ["king-lets","king","lets","glen","skit",3,"","","glen-skit",9], // allWords 8: kits|lens|lest|ling|list|sink|skin|slit
  ["casts-label","casts","label","blast","scale",4,"caleb","lasts","blast-scale",24,92,1,4,0], // allWords 11: bales|cable|cases|laces|lasts|sable|sales|salts|seals|slats|stall
  ["plod-trek","plod","trek","perk","told",2,"","","perk-told",8], // allWords 3: drop|pork|prod
  ["elf-pea","elf","pea","alp","fee",3,"","","alp-fee",14], // allWords 3: ape|lap|pal
  ["clue-rack","clue","rack","acre","luck",2,"","","acre-luck",7], // allWords 5: care|lure|lurk|race|rule
  ["frost-gains","frost","gains","faint","gross",2,"","","faint-gross",3], // allWords 12: first|forts|front|giant|goats|grins|grist|grits|rifts|rings|sofas|tango
  ["snow-what","snow","what","town","wash",4,"","","town-wash",22,92,1,4,0], // allWords 12: ants|hast|hats|host|owns|shaw|shot|show|swan|thaw|tons|want
  ["bond-seat","bond","seat","send","boat",2,"","","boat-send",1], // allWords 20: abet|bead|beat|bend|bent|beta|dons|dosa|east|eats|ends|nest|nets|nods|oats|sent|soda|teas|tens|tons
  ["scrap-swamp","swamp","scrap","camps","wraps",2,"","","camps-wraps",7,92,1,4,0], // allWords 2: craps|scamp
  ["came-sick","came","sick","mice","cask",3,"","","cask-mice",15,87,2,5,0], // allWords 11: aces|case|mace|mack|mask|mesa|sack|same|seam|semi|skim
  ["dies-rare","rare","dies","ears","ride",4,"","","ears-ride",13,92,1,4,0], // allWords 10: dare|dear|dire|eras|read|rear|rise|sera|side|sire
  ["delay-rival","delay","rival","layer","valid",3,"","","layer-valid",18,92,1,4,0], // allWords 7: daily|early|ladle|leary|ravel|relay|viral
  ["bread-genes","bread","genes","beans","greed",3,"","","beans-greed",11], // allWords 17: bared|barns|beard|bears|beers|brand|breed|brees|gears|geese|grade|grand|raged|rages|saber|sabre|serge
  ["oar-see","see","oar","ore","sea",2,"","","cannot be reversed",7,92,1,4,0], // allWords 0
  ["halls-yeast","halls","yeast","leash","salty",4,"","","leash-salty",25,92,1,4,0], // allWords 21: ashes|assay|essay|hales|halts|haste|hates|heals|heats|hells|lathe|satay|shale|shall|shalt|shell|slash|style|tally|telly|yells
  ["loses-shape","loses","shape","ashes","slope",3,"","","ashes-slope",12,92,1,4,0], // allWords 15: hales|heals|heaps|heels|helps|leash|lopes|pesos|phase|poles|poses|posse|shale|soaps|soles
  ["arch-sums","arch","sums","arms","such",2,"","","arms-such",1,92,1,4,0], // allWords 8: arcs|cars|char|cuss|harm|mars|rams|scar
  ["room-runs","room","runs","norm","ours",3,"","","norm-ours",9,92,1,4,0], // allWords 2: moor|sour
  ["steep-storm","steep","storm","meets","ports",4,"","","meets-ports",29], // allWords 8: pesto|poets|prost|sport|strep|teems|terms|tomes
  ["door-hell","door","hell","doll","hero",3,"","","doll-hero",9], // allWords 6: dole|hole|lord|odor|redo|rode
  ["acted-erase","erase","acted","cease","rated",2,"","","cease-rated",4], // allWords 21: areas|aster|cadet|caste|dares|darts|deter|eared|eater|ester|rates|reads|reset|saree|stare|steer|tears|terse|trade|tread|trees
  ["ivory-notes","ivory","notes","envoy","riots",3,"","","envoy-riots",9], // allWords 10: noose|onset|ovens|seton|snort|stone|tones|trois|vents|visor
  ["nib-wok","wok","nib","bow","kin",3,"","","bow-kin",10], // allWords 2: bin|ink
  ["disc-slam","disc","slam","clad","miss",4,"","","clad-miss",23], // allWords 5: acid|aims|amid|maid|sims
  ["amen-site","amen","site","anti","seem",4,"tina","emes","anti-seem",13], // allWords 12: mane|mate|mean|meat|meta|name|sine|stem|tame|team|ties|tins
  ["drone-spins","drone","spins","rinse","ponds",3,"","","ponds-rinse",11,92,1,4,0], // allWords 13: diner|opens|pines|reins|resin|rinds|risen|senor|siren|snipe|snips|snore|spine
  ["owed-tins","owed","tins","owns","tied",2,"","","owns-tied",1,92,1,4,0], // allWords 13: diet|dint|down|edit|ions|owes|site|snow|stew|tide|ties|west|woes
  ["corgi-winds","corgi","winds","icing","sword",3,"","","icing-sword",10,87,2,5,0], // allWords 8: cords|downs|gowns|grows|owing|swing|wings|words
  ["draw-epic","epic","draw","card","wipe",4,"","","card-wipe",22], // allWords 11: acre|cape|care|pace|race|rice|ward|ware|wear|weir|wire
  ["mines-tally","mines","tally","manly","tiles",2,"","","cannot be reversed",3,92,1,4,0], // allWords 25: inset|islet|least|lilts|limes|males|malls|meals|means|mensa|miles|mills|names|slant|slate|slime|small|smile|stale|stall|steal|stein|still|tales|tills
  ["cage-eons","cage","eons","ages","once",3,"","","ages-once",9], // allWords 13: acne|cane|cans|cogs|cone|cons|egos|goes|nose|ones|sage|sane|scan
  ["enter-value","enter","value","leave","tuner",3,"","","leave-tuner",17], // allWords 4: avert|eater|event|ravel
  ["pal-toy","toy","pal","lot","yap",3,"","","lot-yap",10], // allWords 5: alp|alt|lap|lop|pay
  ["risky-start","risky","start","artsy","skirt",3,"","","artsy-skirt",18], // allWords 6: skits|stair|stirs|stray|tarts|trays
  ["cries-hooks","hooks","cries","cooks","hires",2,"","","cannot be reversed",7,92,1,4,0], // allWords 11: cores|corks|heirs|heros|horse|rocks|score|shire|shirk|shook|shore
  ["knee-this","this","knee","hike","nets",3,"nike","hets","hike-nets",9], // allWords 10: hits|keen|nest|sent|sink|skin|teen|tens|tine|tins
  ["sulk-wait","sulk","wait","suit","walk",2,"","","suit-walk",1], // allWords 4: last|lust|salt|slut
  ["agile-poles","agile","poles","eagle","spoil",3,"","","eagle-spoil",10,92,1,4,0], // allWords 8: elope|gales|legal|lopes|poise|polis|polls|slope
  ["knit-loop","knit","loop","pink","tool",4,"","","pink-tool",22], // allWords 6: knot|lint|loot|polo|pool|took
  ["cash-gift","cash","gift","sigh","fact",4,"","","fact-sigh",13,92,1,4,0], // allWords 7: acts|cast|cats|gist|hags|stag|tags
  ["anger-snail","anger","snail","arena","sling",3,"","","arena-sling",19,92,1,4,0], // allWords 20: align|angel|angle|earns|glean|glens|grain|grins|lanes|leans|liang|nails|naira|nears|rains|range|rings|sarin|slain|snare
  ["dock-ends","dock","ends","neck","odds",3,"","","neck-odds",9,92,1,4,0], // allWords 5: coke|docs|does|dose|send
  ["ran-rue","ran","rue","are","urn",2,"","","are-urn",6], // allWords 3: ear|era|run
  ["dale-heat","dale","heat","data","heel",3,"","","data-heel",9,92,1,4,0], // allWords 7: date|deal|hale|halt|hate|heal|lead
  ["mini-toes","mini","toes","semi","into",4,"","","into-semi",21], // allWords 5: site|some|ties|tins|tons
  ["lifts-nasal","nasal","lifts","final","salts",4,"","","final-salts",15], // allWords 19: fails|flail|flats|flint|flits|lasts|lilts|lists|nails|sails|salsa|slain|slant|slats|slits|snail|stall|still|tills
  ["bath-will","will","bath","ball","with",2,"","","cannot be reversed",1,92,1,4,0], // allWords 7: bill|blah|thaw|wall|what|whit|wilt
  ["gear-skin","gear","skin","ears","king",2,"","","ears-king",7], // allWords 11: eras|kris|rage|rise|risk|sane|sank|sera|sine|sink|sire
  ["drama-stale","stale","drama","armed","atlas",3,"","","cannot be reversed",9,87,2,5,0], // allWords 21: alder|dealt|delta|dream|earls|laser|least|madre|mares|mated|mates|meats|reals|slate|smear|steal|steam|tales|tamed|tames|teams
  ["acts-over","acts","over","core","vast",3,"","","core-vast",19], // allWords 15: aces|acre|care|cart|case|cast|cats|cost|race|rave|rove|save|scot|vase|vera
  ["edits-grade","edits","grade","dates","ridge",2,"","","dates-ridge",7], // allWords 31: aster|dares|diets|drags|dries|eared|eater|gated|grads|grate|great|grids|grist|grits|raged|rates|reads|rides|rites|sided|sired|sited|stade|stare|stead|tears|tides|tiers|tiger|tires|tries
  ["owl-pot","owl","pot","two","lop",3,"","","lop-two",10], // allWords 4: low|opt|too|top
  ["fret-pony","pony","fret","font","prey",2,"","","font-prey",2], // allWords 1: poet
  ["tower-viper","tower","viper","write","prove",4,"","","prove-write",25], // allWords 3: tripe|trope|wrote
  ["boom-slap","slap","boom","lamb","oops",3,"","","cannot be reversed",10,87,2,5,0], // allWords 8: alps|balm|laps|moos|pals|slam|soap|soma
  ["green-quips","green","quips","grips","queen",2,"","","grips-queen",1,92,1,4,0], // allWords 4: genre|guise|reign|serge
  ["daily-taped","taped","daily","aided","aptly",3,"","","aided-aptly",9], // allWords 4: adept|laity|payed|tidal
  ["nerd-wins","nerd","wins","news","rind",3,"","","news-rind",15,92,1,4,0], // allWords 3: drew|sewn|wind
  ["fools-slick","slick","fools","flock","soils",2,"","","flock-soils",3], // allWords 13: cooks|fills|flick|foils|kills|kilos|licks|locks|looks|sills|silos|skill|solos
  ["clean-sheep","clean","sheep","lapse","hence",4,"shane","clepe","hence-lapse",22], // allWords 15: cheap|heaps|lance|lanes|leans|leaps|pales|peach|peels|phase|place|pleas|shape|sheen|sleep
  ["hint-went","hint","went","then","twin",2,"","","then-twin",6], // allWords 2: newt|thin
  ["paw-rid","paw","rid","dip","war",3,"","","dip-war",9], // allWords 2: pad|raw
  ["hair-loud","loud","hair","hour","laid",2,"","","hour-laid",2,87,2,5,0], // allWords 7: dial|dual|idol|lair|liar|ludo|rail
  ["canny-rouge","canny","rouge","angry","ounce",3,"","","cannot be reversed",9,86,2,6,0], // allWords 9: anger|argue|auger|goner|nance|nancy|range|rogue|rouen
  ["mild-tarp","mild","tarp","dirt","palm",4,"","","dirt-palm",26], // allWords 8: dart|lamp|limp|part|plat|ramp|trap|trip
  ["fish-rule","fish","rule","file","rush",2,"","","file-rush",1], // allWords 11: fuel|fuse|life|lure|rile|rise|ruse|shri|sire|sure|user
  ["tease-worst","worst","tease","store","sweat",3,"","","store-sweat",10,87,2,5,0], // allWords 15: ester|reset|sewer|state|steer|stoat|swore|taste|terse|toast|torts|trees|waste|worse|wrest
  ["marks-sigma","sigma","marks","gamma","risks",4,"","","gamma-risks",16,87,2,5,0], // allWords 3: karma|magma|smirk
  ["bulk-nice","bulk","nice","cube","link",4,"","","cube-link",13,92,1,4,0], // allWords 8: bile|blue|buck|kiln|lien|line|lube|nick
  ["photo-reads","photo","reads","rodeo","paths",3,"","","paths-rodeo",11], // allWords 25: adore|aster|dares|doers|dopes|doser|hoard|horst|ortho|paste|pesto|poets|posed|rates|septa|shard|short|spade|spate|stare|store|tapes|tears|torah|trash
  ["argue-later","argue","later","ultra","eager",3,"","","eager-ultra",23,92,1,4,0], // allWords 15: agree|alert|alter|auger|eagle|eater|glare|gruel|lager|large|leger|luger|rager|regal|terra
  ["crams-trees","trees","crams","cares","terms",2,"","","cares-terms",5], // allWords 15: acres|aster|ceres|ester|races|rates|reset|scare|scram|smart|stare|steer|tears|terse|trams
  ["rock-soft","soft","rock","cost","fork",3,"","","cost-fork",9,87,2,5,0], // allWords 4: cork|fort|scot|sock
  ["acre-wide","acre","wide","idea","crew",2,"","","crew-idea",7,87,2,5,0], // allWords 6: aced|aide|care|race|weir|wire
  ["cutie-short","short","cutie","ethic","tours",4,"","","ethic-tours",33,92,1,4,0], // allWords 18: chore|court|cuter|euros|heist|heros|hoist|horse|horst|ochre|rouse|shore|strut|sturt|suite|torch|truce|trust
  ["brace-spike","spike","brace","brake","spice",1,"","","brake-spice",1,92,1,4,0], // allWords 18: acres|baker|biker|break|capes|cares|cries|epics|paces|peaks|pikes|races|rakes|scape|scare|skier|space|speak
  ["arts-lone","lone","arts","earn","slot",3,"","","earn-slot",9], // allWords 10: lost|lots|near|noel|oats|rate|rats|star|tear|tsar
  ["belt-tail","belt","tail","bait","tell",2,"","","bait-tell",2], // allWords 8: bail|ball|bell|bile|bite|lite|tall|tile
  ["bagel-sales","bagel","sales","label","gases",3,"","","gases-label",8,87,2,5,0], // allWords 6: bales|gable|gales|sable|sages|seals
  ["monk-owed","monk","owed","know","demo",4,"","","demo-know",21], // allWords 5: dome|down|mode|nook|woke
  ["boy-web","web","boy","bob","yew",3,"","","bob-yew",10], // allWords 3: bow|bye|yob
  ["east-hunt","east","hunt","neat","shut",2,"","","neat-shut",7,87,2,5,0], // allWords 10: ante|eats|hast|hats|huts|seat|teas|than|thus|tune
  ["cake-reef","cake","reef","reek","cafe",3,"","","cafe-reek",9], // allWords 5: face|fare|fear|free|rake
  ["areas-midst","areas","midst","admit","sears",3,"","","admit-sears",18], // allWords 16: aster|darts|emits|items|maids|mares|mites|rates|semis|smear|smite|stare|tamer|tears|terms|times
  ["game-tiff","game","tiff","time","gaff",2,"","","gaff-time",1], // allWords 11: emit|fate|feat|feta|item|mate|meat|meta|mite|tame|team
  ["airy-goal","airy","goal","liar","yoga",3,"","","liar-yoga",22,92,1,4,0], // allWords 6: girl|gory|lair|oral|orgy|rail
  ["fifth-lists","fifth","lists","filth","sifts",3,"","","cannot be reversed",7,92,1,4,0], // allWords 7: fists|flits|lifts|shift|slits|stiff|tiffs
  ["owner-skits","owner","skits","knots","wiser",3,"","","knots-wiser",9], // allWords 7: skier|skies|skirt|towns|weirs|wires|wrist
  ["madam-novel","novel","madam","modem","naval",2,"","","modem-naval",3,92,1,4,0], // allWords 13: amend|demon|laden|maven|medal|modal|model|monde|named|navel|nomad|olden|venom
  ["aside-lanky","lanky","aside","alike","sandy",3,"","","alike-sandy",11], // allWords 16: aides|ankle|daily|daisy|deans|ideal|ideas|laden|lends|likes|sedan|silky|slide|snake|sneak|yanks
  ["oaf-orb","oaf","orb","boa","for",2,"","","boa-for",8], // allWords 2: bro|rob
  ["dance-verbs","dance","verbs","bends","carve",4,"","","bends-carve",25], // allWords 14: bands|bards|bared|beard|brave|bread|breed|cadre|cards|cared|cedar|crave|creed|raced
  ["named-tired","named","tired","mined","rated",3,"","","mined-rated",12], // allWords 9: amend|denim|diner|mated|tamed|timed|trade|tread|tried
  ["play-stop","stop","play","plop","stay",2,"","","plop-stay",1,92,1,4,0], // allWords 18: alps|laps|lays|pals|past|pats|ploy|poly|post|pots|slap|slay|spat|spot|taps|tops|toys|typo
  ["page-pops","page","pops","gaps","pope",3,"","","cannot be reversed",8,92,1,4,0], // allWords 1: gasp
  ["prime-scans","prime","scans","rinse","camps",3,"erins","scamp","camps-rinse",9], // allWords 17: canes|earns|mares|nears|pecan|prism|ramps|reins|resin|ripen|risen|scamp|scams|since|siren|smear|snare
  ["road-sign","road","sign","ring","soda",2,"","","ring-soda",9], // allWords 15: aids|arid|digs|dogs|dosa|gird|gods|grid|grin|raid|rain|said|sing|snog|song
  ["items-store","store","items","moist","reset",4,"","","moist-reset",29,92,1,4,0], // allWords 21: emits|ester|meets|mites|omits|rests|riots|rites|smite|sorts|steer|stems|teems|terse|tiers|times|tires|tomes|trees|tries|trois
  ["agile-saint","agile","saint","aisle","giant",3,"","","aisle-giant",10,87,2,5,0], // allWords 6: anise|satin|singe|stain|sting|tails
  ["and-yet","and","yet","dye","tan",2,"dan","tye","dye-tan",8,87,2,5,0], // allWords 4: ant|ate|eat|tea
  ["canal-flats","canal","flats","clans","fatal",3,"","","clans-fatal",11,92,1,4,0], // allWords 1: scant
  ["paths-weeds","paths","weeds","speed","swath",2,"","","speed-swath",5], // allWords 9: heaps|phase|sawed|sewed|shape|sheep|spade|swede|whats
  ["nude-yeti","nude","yeti","eyed","unit",4,"","","eyed-unit",21], // allWords 6: dine|dune|need|teen|tine|tune
  ["coat-thin","thin","coat","coin","that",2,"","","coin-that",1,92,1,4,0], // allWords 9: chat|chin|hint|icon|inch|into|itch|taco|than
  ["lobby-rains","lobby","rains","blabs","irony",3,"","","cannot be reversed",14,92,1,4,0], // allWords 15: barbs|barns|basil|blobs|boils|inlay|irons|lions|loins|nails|nobly|rainy|sarin|slain|snail
  ["shaky-tries","shaky","tries","hates","risky",3,"","","hates-risky",8], // allWords 19: ashes|aster|haste|heats|heist|karts|rates|rises|risks|rites|sears|skirt|stare|stark|tears|teary|tiers|tires|years
  ["gory-hill","gory","hill","holy","girl",2,"","","girl-holy",3], // allWords 2: gill|orgy
  ["pigs-walk","pigs","walk","gawk","lips",3,"","","gawk-lips",9,92,1,4,0], // allWords 12: alps|awls|gaps|gasp|laps|laws|pals|slap|slip|swag|swig|wigs
  ["feta-palm","feta","palm","leaf","tamp",3,"","","leaf-tamp",11], // allWords 10: fate|feat|flea|lamp|leap|pale|peat|plea|tape|temp
  ["dim-pro","dim","pro","imp","rod",2,"","","imp-rod",8,87,2,5,0], // allWords 1: mid
  ["cult-deny","deny","cult","duly","cent",2,"","","cent-duly",2], // allWords 2: dent|tend
  ["army-envy","army","envy","many","very",2,"","","many-very",8,87,2,5,0], // allWords 2: navy|vary
  ["brave-imply","brave","imply","amble","privy",4,"","","amble-privy",18], // allWords 4: balmy|blame|peril|viper
  ["caves-mouse","caves","mouse","cause","moves",2,"","","cause-moves",1], // allWords 2: amuse|sauce
  ["last-sari","sari","last","rats","sail",3,"","","rats-sail",9], // allWords 8: airs|arts|lair|liar|rail|salt|star|tsar
  ["dote-worn","dote","worn","rode","town",3,"","","rode-town",9,86,2,6,0], // allWords 2: redo|wore
  ["deals-freed","deals","freed","feels","dared",3,"","","dared-feels",8], // allWords 19: adder|dales|dares|defer|dread|eased|false|fared|fares|fears|fleas|flees|frees|leads|leafs|reads|reeds|reefs|safer
  ["crews-hopes","crews","hopes","scope","shrew",2,"","","scope-shrew",5], // allWords 6: ceres|heres|howes|screw|sheer|whose
  ["scene-write","scene","write","cites","renew",3,"","","cites-renew",10,92,1,4,0], // allWords 19: ester|newer|reins|reset|resin|rinse|risen|rites|since|siren|sneer|steer|terse|tiers|tires|trees|tries|twice|wince
  ["all-wag","all","wag","awl","lag",2,"","","awl-lag",7,87,2,5,0], // allWords 2: gal|law
  ["lemon-thank","lemon","thank","month","ankle",4,"","","ankle-month",22], // allWords 4: alone|atone|melon|taken
  ["blue-trap","blue","trap","tale","burp",3,"","","burp-tale",9,92,1,4,0], // allWords 13: able|bale|bare|bear|late|lube|part|plat|rate|tarp|teal|tear|true
  ["diet-rear","diet","rear","read","tier",3,"rita","dere","cannot be reversed",19,87,2,5,0], // allWords 18: arid|dare|date|dear|deer|dire|edit|raid|rare|rate|reed|ride|rite|tear|tide|tied|tire|tree
  ["began-parry","began","parry","berry","pagan",2,"","","berry-pagan",1,92,1,4,0], // allWords 2: payer|repay
  ["robot-slate","robot","slate","alter","boots",3,"","","cannot be reversed",10,86,2,6,0], // allWords 13: alert|belts|bolts|boost|later|least|lobes|stale|steal|stoat|tales|tarot|toast
  ["land-math","land","math","damn","halt",3,"","","damn-halt",22,92,1,4,0], // allWords 0
  ["nodes-piece","piece","nodes","niece","posed",3,"","","cannot be reversed",10,92,1,4,0], // allWords 12: cones|coped|dopes|epics|nosed|scone|scope|seine|since|snide|spice|spied
  ["site-yowl","site","yowl","wily","toes",3,"","","toes-wily",18], // allWords 13: list|lost|lots|lows|owes|owls|slit|slot|slow|ties|wise|woes|yeti
  ["axe-elm","axe","elm","eel","max",2,"","","eel-max",8,87,2,5,0], // allWords 1: mel
  ["grace-turbo","grace","turbo","brute","cargo",4,"","","brute-cargo",22], // allWords 16: abort|about|actor|acute|barge|carte|cater|court|crate|cuter|react|rebut|tabor|trace|truce|tuber
  ["awry-bald","awry","bald","ward","ably",2,"","","ably-ward",9], // allWords 4: bard|bray|draw|wary
  ["lady-wise","lady","wise","ways","lied",3,"","","lied-ways",9], // allWords 15: dale|deal|deli|idle|idly|isle|lays|lead|lies|sale|seal|slay|sway|wade|wide
  ["his-two","his","two","its","who",2,"","","its-who",7,92,1,4,0], // allWords 2: how|sit
  ["neat-sums","neat","sums","aunt","mess",3,"","","aunt-mess",15], // allWords 11: ante|anus|east|eats|must|sane|seas|seat|stem|teas|tuna
  ["maple-seats","maple","seats","lapse","teams",3,"","","lapse-teams",22], // allWords 34: ample|asset|easel|lamps|leaps|lease|males|mates|meals|meats|pales|palms|paste|pasts|peels|pests|pleas|psalm|sales|salsa|seals|septa|slaps|sleep|spate|spats|stamp|steam|steep|steps|tames|tapes|tease|temps
  ["deny-mask","deny","mask","desk","many",2,"","","desk-many",1,92,1,4,0], // allWords 3: dank|days|dyes
  ["rents-socks","rents","socks","nests","corks",3,"","","corks-nests",7], // allWords 7: costs|crest|rocks|scots|sects|snort|stern
  ["sadly-tiles","sadly","tiles","sides","tally",2,"sally","tides","sides-tally",3,92,1,4,0], // allWords 23: dates|deity|diets|edits|isles|islet|least|lilts|sales|seals|sills|silly|sited|slate|stade|stale|stall|stead|steal|still|tales|tides|tills
  ["drum-isle","drum","isle","rude","slim",2,"","","rude-slim",7], // allWords 6: dues|lies|rile|sled|sued|used
  ["erase-oddly","erase","oddly","royal","deeds",4,"","","deeds-royal",19], // allWords 15: arose|delay|doers|dosed|doser|early|eased|elder|layer|leary|older|reeds|relay|saree|years
  ["cone-rest","cone","rest","rose","cent",2,"","","cent-rose",3], // allWords 10: cost|once|rees|rent|scot|sect|sore|sort|tern|torn
  ["solar-wives","solar","wives","lower","visas",4,"lisas","vower","lower-visas",11], // allWords 17: isles|lasso|liars|loser|loses|lowes|overs|rails|riles|roles|sails|savor|servo|soles|verso|views|wiles
  ["mud-one","mud","one","don","emu",2,"","","don-emu",8], // allWords 4: duo|eon|men|nod
  ["gaps-lean","gaps","lean","ages","plan",3,"","","ages-plan",12,92,1,4,0], // allWords 12: alas|alps|gasp|lane|laps|pals|pang|saga|sage|sale|seal|slap
  ["bribe-cater","bribe","cater","erect","rabbi",5,"","","erect-rabbi",32,92,1,4,0], // allWords 5: beret|carte|crate|react|trace
  ["fate-tips","fate","tips","fits","tape",2,"","","fits-tape",3,92,1,4,0], // allWords 16: fast|fats|feat|feta|fist|past|pats|peat|pits|sift|spat|spit|stat|taps|tate|tits
  ["ashes-scale","ashes","scale","cases","shale",3,"","","cases-shale",10], // allWords 16: aches|cease|chase|chess|clash|class|eases|hales|heals|laces|leach|leash|sales|salsa|seals|slash
  ["dense-edges","dense","edges","sense","edged",4,"","","edged-sense",14,87,2,5,0], // allWords 4: ended|geese|needs|sends
  ["dual-gods","dual","gods","duds","goal",2,"","","duds-goal",1,92,1,4,0], // allWords 7: dogs|dosa|gold|load|odds|sago|soda
  ["loans-scram","loans","scram","moral","scans",4,"","","moral-scans",25,92,1,4,0], // allWords 13: alamo|casas|clans|crams|crass|mason|moans|molar|norms|salon|scars|soars|solar
  ["bliss-canal","canal","bliss","basil","clans",3,"","","basil-clans",11], // allWords 6: banal|basis|bills|labia|lilac|scans
  ["ewe-ray","ewe","ray","era","yew",2,"","","cannot be reversed",8,92,1,4,0], // allWords 4: are|aye|ear|wee
  ["pasta-weeks","pasta","weeks","peaks","waste",4,"","","peaks-waste",19,92,1,4,0], // allWords 21: askew|awake|keeps|paste|pasts|peeks|pests|septa|spate|spats|speak|steep|steps|stews|swats|sweat|sweet|tapas|tapes|wakes|wests
  ["five-rely","five","rely","life","very",3,"","","life-very",9,87,2,5,0], // allWords 7: ever|feel|file|flee|leer|reel|rile
  ["crave-ropes","crave","ropes","prove","acres",3,"","","acres-prove",12,80,3,8,0], // allWords 15: arose|cares|carve|creep|crepe|pores|poser|prose|races|raver|rears|savor|scare|scope|spore
  ["cult-sack","sack","cult","cast","luck",3,"","","cast-luck",8], // allWords 11: acts|cask|cats|cuts|lack|last|lust|salt|slut|suck|sulk
  ["bake-tern","bake","tern","beer","tank",3,"bern","take","beer-tank",12,92,1,4,0], // allWords 13: bank|bare|barn|beak|bear|bran|bree|rant|rate|rent|take|tear|tree
  ["equip-shoot","equip","shoot","quite","hoops",2,"","","hoops-quite",5], // allWords 8: hoist|pique|quiet|quips|quits|quote|shout|south
  ["lugs-sour","lugs","sour","rugs","soul",4,"","","rugs-soul",23,92,1,4,0], // allWords 5: logs|ours|slog|slug|sous
  ["crook-spies","crook","spies","spook","cries",2,"","","cries-spook",1], // allWords 17: cores|epics|pesos|pikes|pokes|poses|posse|rises|roses|scoop|scope|score|skier|sores|spice|spike|spoke
  ["tin-wok","tin","wok","now","kit",3,"","","kit-now",10], // allWords 6: nit|not|own|ton|win|won
  ["heart-wings","heart","wings","thing","swear",3,"","","swear-thing",9], // allWords 13: earth|hairs|hares|hater|hears|night|share|shear|swing|wages|wares|water|wears
  ["ghee-plus","ghee","plus","gush","peel",3,"","","gush-peel",9,92,1,4,0], // allWords 8: glee|glue|huge|hugs|legs|lugs|push|slug
  ["gruel-trash","gruel","trash","hurts","large",4,"","","hurts-large",25], // allWords 12: alert|alter|earth|glare|hater|heart|hurst|lager|later|luger|regal|shrug
  ["field-patch","patch","field","filth","paced",3,"","","filth-paced",9,92,1,4,0], // allWords 11: cheap|chief|decaf|faced|filed|fitch|peach|pedal|piled|pitch|plead
  ["salt-seen","seen","salt","eats","lens",3,"","","cannot be reversed",11,92,1,4,0], // allWords 8: east|last|lest|lets|sane|seat|teas|tees
  ["came-sink","came","sink","nice","mask",4,"","","mask-nice",12], // allWords 15: acne|cane|mace|mack|mesa|mice|nick|same|sane|sank|seam|semi|sine|skim|skin
  ["glade-slope","glade","slope","lodge","lapse",2,"","","lapse-lodge",7,87,2,5,0], // allWords 8: dales|deals|leads|leaps|lopes|pales|pleas|poles
  ["deaf-will","deaf","will","laid","flew",5,"","","flew-laid",26,92,1,4,0], // allWords 8: dale|deal|dial|dill|fade|fled|lead|well
  ["bias-teem","bias","teem","beam","ties",2,"","","beam-ties",3], // allWords 18: base|bees|east|eats|emit|item|mate|meat|meet|meta|mite|seat|site|tame|team|teas|tees|time
  ["cod-day","cod","day","coy","dad",1,"","","coy-dad",0,92,1,4,0], // allWords 3: add|doc|odd
  ["open-used","open","used","nose","dupe",2,"","","dupe-nose",8], // allWords 8: does|dope|dose|dues|eons|nope|ones|sued
  ["boot-film","boot","film","boom","flit",2,"","","boom-flit",6], // allWords 6: blot|bolt|foot|lift|limb|loft
  ["satay-seals","satay","seals","salsa","yeast",4,"","","salsa-yeast",28], // allWords 8: asset|lasts|sales|salts|salty|seats|slats|style
  ["ample-beach","ample","beach","peach","amble",4,"","","amble-peach",12], // allWords 6: blame|bleep|champ|cheap|maple|peace
  ["lead-skit","lead","skit","tale","disk",3,"","","disk-tale",19], // allWords 22: dale|deal|deli|dies|east|eats|idle|kids|kits|late|lied|lite|seat|side|site|skid|talk|task|teal|teas|ties|tile
  ["furl-gate","furl","gate","fear","glut",3,"","","fear-glut",10], // allWords 8: fare|fate|feat|feta|flat|gear|rage|urge
  ["alert-mango","alert","mango","later","among",2,"","","among-later",13], // allWords 9: agate|along|alter|golem|manor|morel|omega|roman|tamer
  ["pedal-tapas","pedal","tapas","papal","dates",4,"","","dates-papal",21,92,1,4,0], // allWords 16: apple|dealt|delta|leapt|pasta|paste|petal|plate|plead|pleat|septa|spade|spate|stade|stead|tapes
  ["excel-wheat","excel","wheat","wheel","exact",3,"","","exact-wheel",8], // allWords 7: cheat|leach|leech|teach|watch|welch|whale
  ["jut-oar","jut","oar","jar","out",1,"","","jar-out",0], // allWords 1: our
  ["rent-some","some","rent","more","nest",3,"rome","sent","more-nest",8], // allWords 15: eons|mere|most|nets|nose|ones|seem|seen|sent|stem|tens|term|tern|tons|torn
  ["heavy-slots","heavy","slots","hotly","saves",3,"","","hotly-saves",12,92,1,4,0], // allWords 19: asset|ethos|halts|haste|hates|haves|heats|lasts|salts|salty|seats|shalt|shave|shove|slats|sloth|those|vases|yeast
  ["leash-vegan","leash","vegan","shave","angle",4,"","","angle-shave",21], // allWords 9: angel|glean|glens|hales|haves|heals|lanes|leans|shale
  ["lone-trio","lone","trio","rile","onto",3,"leon","tori","onto-rile",9,82,3,6,0], // allWords 12: noel|note|rent|riot|rite|roti|tern|tier|tire|tone|tori|torn
  ["dork-hint","dork","hint","dirt","honk",2,"","","dirt-honk",3], // allWords 4: dint|dirk|kind|thin
  ["lemon-sassy","sassy","lemon","messy","salon",4,"","","cannot be reversed",15,87,2,5,0], // allWords 6: loans|mason|melon|moans|noses|omens
  ["goose-tread","goose","tread","stood","agree",3,"","","agree-stood",11], // allWords 18: dotes|dregs|eager|eater|ester|goers|goods|grade|ogres|raged|rated|reset|serge|steer|store|terse|trade|trees
  ["oops-reds","oops","reds","does","pros",2,"","","does-pros",6], // allWords 4: dose|pose|reps|rods
  ["ferry-rooms","ferry","rooms","roofs","merry",4,"","","merry-roofs",26,92,1,4,0], // allWords 6: forms|foyer|fryer|moors|mores|roomy
  ["elf-oak","oak","elf","elk","oaf",1,"","","elk-oaf",0,92,1,4,0], // allWords 0
  ["cool-warm","warm","cool","cram","wool",2,"","","cram-wool",8,92,1,4,0], // allWords 5: coal|cola|coma|loco|worm
  ["newer-vines","newer","vines","never","wines",4,"","","never-wines",12], // allWords 11: evens|inner|nerve|nines|renew|riven|seven|swine|veins|views|wives
  ["ball-swap","ball","swap","bawl","slap",3,"","","bawl-slap",9,92,1,4,0], // allWords 9: alas|alba|alps|awls|laps|laws|pals|paws|wasp
  ["goat-lads","goat","lads","saga","told",4,"","","saga-told",23,92,1,4,0], // allWords 9: alas|also|alto|dogs|gods|olds|sago|sold|toga
  ["basin-chase","basin","chase","bases","china",3,"","","bases-china",8], // allWords 6: aches|cases|chain|chess|chins|scans
  ["felt-rind","felt","rind","lift","nerd",3,"","","lift-nerd",15,92,1,4,0], // allWords 7: fend|find|fled|flit|left|rent|tern
  ["adult-stern","adult","stern","turns","delta",2,"","","delta-turns",7,87,2,5,0], // allWords 17: dealt|durst|laden|latte|lends|nerds|rated|rents|runts|strut|sturt|tater|tetra|trade|tread|treat|trust
  ["data-them","data","them","dame","that",3,"","","dame-that",9], // allWords 11: hate|head|heat|made|mate|mead|meat|meta|meth|tame|team
  ["earns-voice","earns","voice","cores","naive",4,"","","cores-naive",25], // allWords 15: acres|anise|cares|carve|cover|crave|nears|noise|races|raven|scare|score|senor|snare|snore
  ["gun-spa","gun","spa","sap","gnu",1,"","","gnu-sap",3], // allWords 2: gap|sun
  ["arts-cage","arts","cage","acts","rage",3,"","","acts-rage",9], // allWords 10: cast|cats|gear|rags|rate|rats|saga|star|tear|tsar
  ["awake-orbit","awake","orbit","await","broke",4,"","","await-broke",11], // allWords 7: awoke|baker|brake|break|karat|ratio|tiara
  ["edges-issue","edges","issue","guise","seeds",3,"","","guise-seeds",18,86,2,6,0], // allWords 6: geese|guess|guide|sides|siege|suede
  ["epic-only","epic","only","yelp","coin",4,"","","coin-yelp",25,92,1,4,0], // allWords 4: icon|nice|ploy|poly
  ["cuts-poet","cuts","poet","post","cute",3,"","","cute-post",9], // allWords 10: cost|cues|pose|pots|puts|putt|scot|spot|stop|tops
  ["comic-resin","comic","resin","since","micro",3,"","","micro-since",18,92,1,4,0], // allWords 14: coins|cries|crime|icons|irons|mince|miner|minor|reins|rinse|risen|scion|siren|sonic
  ["fled-haul","fled","haul","full","head",3,"","","full-head",9,92,1,4,0], // allWords 11: deaf|fade|fell|flea|hale|heal|held|hell|hula|hull|leaf
  ["acres-loves","acres","loves","scare","solve",2,"","","scare-solve",19,92,1,4,0], // allWords 6: arose|cares|caves|loser|races|roles
  ["bait-plod","bait","plod","blot","paid",2,"","","blot-paid",2,92,1,4,0], // allWords 6: atop|boat|bold|bolt|pita|plot
  ["gas-hot","gas","hot","got","has",1,"","","got-has",0,87,2,5,0], // allWords 4: ash|hat|sag|tag
  ["dish-sure","dish","sure","side","rush",3,"","","rush-side",8,92,1,4,0], // allWords 13: dies|dire|dues|ride|rise|rude|ruse|shri|sire|sued|used|user|uses
  ["rites-towel","rites","towel","worse","title",5,"","","title-worse",24], // allWords 11: lotte|lower|store|swore|tiers|tires|totes|tries|weirs|wires|wiser
  ["blue-reef","blue","reef","beef","rule",2,"","","beef-rule",8], // allWords 7: flub|free|furl|leer|lube|lure|reel
  ["isle-seal","isle","seal","else","sail",3,"elis","lase","else-sail",10], // allWords 7: ease|eels|less|lies|sale|seas|sell
  ["apple-stray","apple","stray","raspy","plate",3,"","","plate-raspy",17,92,1,4,0], // allWords 32: alert|alter|apply|aptly|artsy|aster|later|leapt|paler|parse|paste|pasty|patsy|pearl|pears|pelts|petal|pleat|prays|rates|sappy|septa|slept|spare|spate|spear|spelt|spray|stare|tapes|tears|trays
  ["askew-hates","askew","hates","shake","waste",2,"","","shake-waste",7,87,2,5,0], // allWords 9: asset|awake|haste|heats|sakes|seats|sweat|wakes|wheat
  ["iron-nets","iron","nets","none","stir",4,"","","none-stir",21,87,2,5,0], // allWords 12: eons|neon|nest|noir|nori|nose|ones|sent|site|tens|ties|tine
  ["curls-fiery","curls","fiery","files","curry",3,"","","curry-files",8], // allWords 13: clues|cries|cures|curly|curse|fires|flies|fries|fuels|furry|lyric|serif|slice
  ["decor-timed","decor","timed","merit","coded",3,"","","coded-merit",17], // allWords 18: ceded|cider|cited|coder|credo|creed|cried|diced|domed|edict|erect|meter|metre|metro|mired|mitre|remit|timer
  ["due-gym","due","gym","gum","dye",1,"","","dye-gum",1,92,1,4,0], // allWords 2: mud|mug
  ["chant-nylon","chant","nylon","nanny","cloth",3,"","","cloth-nanny",10,92,1,4,0], // allWords 4: annoy|canny|nacho|nancy
  ["rogue-stint","rogue","stint","guest","intro",4,"","","guest-intro",22], // allWords 14: gents|goner|grout|gusto|inert|inset|inter|nitro|noise|rouge|stein|suite|tints|tongs
  ["bike-dodo","dodo","bike","book","died",3,"kobe","dido","cannot be reversed",9,92,1,4,0], // allWords 1: bide
  ["flat-swat","swat","flat","last","waft",2,"","","last-waft",7,87,2,5,0], // allWords 1: salt
  ["bagel-males","bagel","males","games","label",3,"","","games-label",8,87,2,5,0], // allWords 6: bales|gable|gleam|mages|meals|sable
  ["legit-roots","legit","roots","tiger","stool",5,"","","stool-tiger",29,92,1,4,0], // allWords 8: lotte|lotto|otter|roost|stole|store|tools|torso
  ["mate-oven","mate","oven","vote","amen",3,"","","amen-vote",9], // allWords 8: mane|mean|meat|meta|name|tame|team|veto
  ["dark-rope","dark","rope","park","rode",4,"","","park-rode",13,87,2,5,0], // allWords 13: dare|dear|dope|dork|pear|pore|pork|rare|read|reap|rear|redo|repo
  ["bot-far","bot","far","bat","for",1,"","","bat-for",1], // allWords 7: bar|bra|bro|fat|orb|rob|tab
  ["creek-those","creek","those","choke","trees",3,"","","choke-trees",10], // allWords 17: ceres|cheek|chose|cores|corks|ester|ethos|reset|rocks|score|sheet|shock|steer|store|stork|terse|these
  ["inner-tears","inner","tears","rains","enter",4,"","","enter-rains",20], // allWords 23: anise|arise|aster|eater|nines|raise|rants|rates|reins|rents|resin|rinse|risen|sarin|seine|siren|stare|stern|tease|teens|tense|terra|trans
  ["cape-give","cape","give","vice","page",3,"","","page-vice",8], // allWords 4: cave|epic|gave|pace
  ["keel-wild","wild","keel","kill","weed",2,"","","kill-weed",2,87,2,5,0], // allWords 7: leek|lewd|like|weld|well|wide|will
  ["modes-silly","modes","silly","loses","dimly",4,"","","dimly-loses",12], // allWords 16: demos|dimes|domes|doses|isles|limes|miles|mills|molds|moldy|moles|sides|sills|slime|smile|soles
  ["semi-test","semi","test","stem","ties",2,"","","stem-ties",7,92,1,4,0], // allWords 6: emit|item|mite|sets|site|time
  ["lands-sheep","lands","sheep","panel","sheds",4,"","","panel-sheds",25,92,1,4,0], // allWords 17: dales|deals|easel|eases|heels|lanes|leads|leans|lease|panes|pease|pedal|penal|plane|plead|sands|spade
  ["shout-slots","shout","slots","hosts","lotus",3,"","","cannot be reversed",11,92,1,4,0], // allWords 3: shots|souls|south
  ["hulk-pond","pond","hulk","hold","punk",2,"","","hold-punk",3], // allWords 3: honk|hunk|plod
  ["car-sip","car","sip","sir","cap",1,"","","cap-sir",0], // allWords 5: arc|pac|sap|spa|sri
  ["pumps-warns","pumps","warns","spurn","swamp",3,"","","spurn-swamp",8,92,1,4,0], // allWords 1: wraps
  ["guide-logos","guide","logos","idols","gouge",4,"","","gouge-idols",20], // allWords 7: glued|golds|lodge|louie|oiled|oldie|solid
  ["ours-pile","ours","pile","oils","pure",2,"","","oils-pure",2], // allWords 11: euro|lips|pier|plus|ripe|rips|slip|soil|soul|sour|spur
  ["shirt-swung","shirt","swung","hurts","wings",2,"","","hurts-wings",7], // allWords 8: hints|hunts|hurst|shrug|shunt|swing|twins|wrist
  ["bibs-tide","bibs","tide","bite","dibs",3,"","","cannot be reversed",9,86,2,6,0], // allWords 6: bide|bids|bits|diet|edit|tied
  ["gases-twist","gases","twist","taste","swigs",4,"","","swigs-taste",26,92,1,4,0], // allWords 11: asset|gates|sages|seats|stage|state|stats|stews|twigs|twits|wests
  ["peer-tons","peer","tons","tern","pose",3,"","","pose-tern",9], // allWords 16: nest|nets|pens|pons|pore|porn|rent|repo|rope|sent|tees|tens|toes|tore|torn|tree
  ["eats-unto","eats","unto","nets","auto",2,"","","auto-nets",5], // allWords 10: east|nest|note|nuts|seat|sent|stun|teas|tens|tone
  ["bay-son","bay","son","soy","ban",1,"","","ban-soy",0], // allWords 4: boy|nab|say|yob
  ["rare-salt","rare","salt","real","star",2,"","","cannot be reversed",8,86,2,6,0], // allWords 12: arts|earl|ears|eras|last|lear|rats|rear|sale|seal|sera|tsar
  ["lung-safe","lung","safe","fuel","nags",4,"","","fuel-nags",14], // allWords 14: flag|flea|fuse|gnus|gulf|guns|lane|leaf|lean|sane|sang|snag|snug|sung
  ["flint-stalk","flint","stalk","stilt","flank",2,"","","flank-stilt",3], // allWords 18: kills|kilns|knits|lilts|links|skill|slant|slink|stall|stank|still|stink|stint|talks|tanks|tills|tilts|tints
  ["nails-smoke","nails","smoke","aisle","monks",3,"","","aisle-monks",12], // allWords 15: alien|alone|lasso|lemon|limes|loans|melon|miles|moles|sails|salon|slain|slime|smile|snail
  ["kale-nick","kale","nick","cake","link",3,"","","cake-link",9,82,3,6,0], // allWords 12: acne|cane|kick|kiln|lake|lane|leak|lean|lien|like|line|nice
  ["scrap-stork","scrap","stork","traps","corks",2,"","","corks-traps",7,87,2,5,0], // allWords 12: corps|craps|crops|karts|parts|ports|prost|racks|rocks|sport|stark|strap
  ["glow-prep","glow","prep","grew","plop",2,"","","grew-plop",2,92,1,4,0], // allWords 4: grow|plow|prog|prop
  ["pylon-ships","pylon","ships","nippy","slosh",5,"","","nippy-slosh",29], // allWords 2: noisy|spiny
  ["can-moo","can","moo","man","coo",1,"","","coo-man",0,87,2,5,0], // allWords 3: con|moa|mon
  ["cruel-exits","cruel","exits","crust","exile",3,"","","crust-exile",8,92,1,4,0], // allWords 11: cries|cures|curse|exist|relic|reuse|rites|tiers|tires|tries|ulcer
  ["perks-satay","perks","satay","tasks","repay",4,"","","repay-tasks",11,92,1,4,0], // allWords 20: asset|paras|parks|parse|pasta|paste|payer|pears|perky|sears|seats|septa|spare|spark|spate|spear|tapas|tapes|years|yeast
  ["goal-want","goal","want","toga","lawn",3,"","","lawn-toga",22,92,1,4,0], // allWords 6: gala|goat|long|tang|tong|town
  ["chock-plane","chock","plane","clack","phone",2,"","","clack-phone",2,92,1,4,0], // allWords 13: cache|cheap|clank|clean|clock|clone|epoch|lance|panel|peach|penal|place|plank
  ["bent-dude","bent","dude","debt","nude",3,"","","debt-nude",9,80,3,8,0], // allWords 7: been|bunt|deed|dent|dune|need|tend
  ["bread-cares","bread","cares","bears","cared",2,"","","cannot be reversed",3,92,1,4,0], // allWords 17: acres|bared|beard|beers|breed|brees|cadre|cease|cedar|ceres|creed|raced|races|saber|sabre|sacra|scare
  ["runts-toned","runts","toned","stunt","drone",2,"","","drone-stunt",5], // allWords 15: noted|notes|nurse|onset|runes|senor|seton|snore|snort|stone|tones|tuned|tunes|turns|under
  ["cone-push","cone","push","nope","such",3,"","","nope-such",8], // allWords 7: cues|hops|once|open|pose|posh|shop
  ["desk-tire","desk","tire","skit","reed",4,"","","reed-skit",21,92,1,4,0], // allWords 19: deer|dies|dire|dirk|disk|drek|kids|kits|ride|rite|seed|side|site|skid|tees|tier|ties|tree|trek
  ["hew-sax","hew","sax","saw","hex",1,"","","hex-saw",0,87,2,5,0], // allWords 1: was
  ["arena-cider","arena","cider","aired","crane",3,"","","aired-crane",10], // allWords 9: cadre|cared|cedar|cried|drain|nadir|nicer|raced|rance
  ["menus-stray","menus","stray","rusty","names",3,"","","names-rusty",16], // allWords 16: artsy|mares|means|mensa|nasty|sears|serum|smart|smear|stars|stuns|trams|trays|truss|users|years
  ["ties-wave","ties","wave","view","east",3,"","","east-view",18], // allWords 6: eats|seat|site|teas|vast|wise
  ["charm-enact","charm","enact","ramen","catch",5,"","","catch-ramen",29,92,1,4,0], // allWords 8: chart|cheat|earth|harem|hater|heart|march|teach
  ["stiff-vocal","stiff","vocal","vital","scoff",3,"","","scoff-vital",8], // allWords 9: coals|facts|flits|foils|lifts|tails|tiffs|viola|voila
  ["dead-team","dead","team","date","made",3,"","","cannot be reversed",18,86,2,6,0], // allWords 6: dame|mate|mead|meat|meta|tame
  ["mint-uses","mint","uses","mess","unit",2,"","","mess-unit",8], // allWords 9: emit|item|mite|nuts|semi|stem|stun|suns|time
  ["dull-taco","dull","taco","lout","clad",4,"","","clad-lout",22], // allWords 7: alto|coat|cult|load|loud|ludo|tall
  ["jet-yaw","jet","yaw","jaw","yet",1,"","","jaw-yet",0], // allWords 3: jew|way|yew
  ["sins-wrap","sins","wrap","snip","wars",2,"","","snip-wars",6,92,1,4,0], // allWords 6: pins|raps|rasp|spin|warp|wins
  ["ogres-twang","ogres","twang","wrong","gates",3,"","","gates-wrong",9], // allWords 13: angst|goers|gorge|grown|stage|sweat|swore|sworn|wagon|wants|waste|worse|wrest
  ["glen-slot","slot","glen","long","lets",2,"","","lets-long",8,81,3,7,0], // allWords 4: lens|lest|lost|lots
  ["hole-kegs","hole","kegs","leek","gosh",4,"","","gosh-leek",14], // allWords 6: elks|geek|ghee|heel|hogs|keel
  ["sound-while","sound","while","would","shine",2,"","","shine-would",3], // allWords 7: hinds|idols|louse|noise|solid|whine|wound
  ["caps-tick","caps","tick","cats","pick",4,"","","cats-pick",13,86,2,6,0], // allWords 12: acts|cast|pack|past|pats|pics|pits|spat|spit|tack|taps|tips
  ["atoms-seeds","seeds","atoms","doses","meats",3,"","","cannot be reversed",18,87,2,5,0], // allWords 12: dates|eased|mates|moats|seems|stade|stead|steam|stems|tames|teams|toads
  ["chug-heir","chug","heir","high","cure",3,"","","cure-high",10,92,1,4,0], // allWords 5: ecru|hire|huge|rice|rich
  ["asset-heels","asset","heels","these","sales",4,"","","sales-these",25,92,1,4,0], // allWords 15: easel|eases|lasts|lease|least|salts|seals|seats|sheet|slate|slats|stale|steal|tales|tease
  ["hen-ram","hen","ram","hem","ran",1,"","","hem-ran",0], // allWords 4: arm|ham|mar|nah
  ["bonus-motor","bonus","motor","boost","mourn",3,"","","boost-mourn",11,92,1,4,0], // allWords 8: boots|boron|boson|bouts|moons|moron|robot|turbo
  ["lacks-voter","lacks","voter","cover","talks",3,"","","cover-talks",8,81,3,7,0], // allWords 25: alert|alter|avert|carve|caves|clear|close|crave|laces|later|least|locks|overt|scale|slack|slate|stale|stalk|stave|steal|stole|stove|tales|trove|votes
  ["soon-stop","soon","stop","tons","oops",2,"","","oops-tons",6], // allWords 4: post|pots|spot|tops
  ["gauge-pants","gauge","pants","gangs","taupe",4,"","","gangs-taupe",25], // allWords 3: agent|angst|pangs
  ["motto-quasi","motto","quasi","moist","quota",4,"","","moist-quota",17,92,1,4,0], // allWords 2: omits|quits
  ["lion-ruby","ruby","lion","burn","oily",3,"","","burn-oily",8], // allWords 5: bury|iron|noir|nori|your
  ["empty-torso","empty","torso","tempo","story",2,"","","story-tempo",8,92,1,4,0], // allWords 10: metro|mores|poems|potty|roost|roots|stomp|stoop|storm|typos
  ["melt-rise","melt","rise","rest","mile",2,"","","mile-rest",3,87,2,5,0], // allWords 11: leer|lime|mist|reel|rees|rile|seem|semi|sire|stem|stir
  ["dive-redo","dive","redo","deer","void",3,"","","deer-void",18], // allWords 10: deed|died|dire|dove|ever|over|reed|ride|rode|rove
  ["lay-top","top","lay","toy","lap",1,"","","lap-toy",0], // allWords 7: alp|lop|opt|pal|pat|pot|tap
  ["bail-doom","bail","doom","boom","dial",2,"","","boom-dial",8,92,1,4,0], // allWords 8: amid|boil|idol|laid|load|maid|modi|mood
  ["airy-reef","airy","reef","fire","year",3,"","","fire-year",19,82,3,6,0], // allWords 6: eyre|fair|fare|fear|free|rife
  ["siren-spray","siren","spray","raspy","resin",2,"","","raspy-resin",13], // allWords 6: prays|rains|reins|rinse|risen|sarin
  ["bold-list","bold","list","toll","dibs",4,"lidl","bots","dibs-toll",22,92,1,4,0], // allWords 17: bids|bits|blot|bolt|bots|dill|doll|lids|lilt|lost|lots|olds|slid|slit|slot|sold|till
  ["neck-sage","neck","sage","cask","gene",4,"","","cask-gene",13,92,1,4,0], // allWords 7: aces|acne|ages|cane|case|kegs|sack
  ["sense-taken","sense","taken","snake","teens",2,"","","snake-teens",6], // allWords 14: eaten|knees|sakes|seeks|senna|skate|skeet|sneak|stake|stank|steak|takes|tanks|tense
  ["equip-spurs","equip","spurs","quips","purse",2,"","","purse-quips",6,92,1,4,0], // allWords 3: pique|super|upper
  ["cores-spoke","cores","spoke","cooks","spree",2,"","","cooks-spree",2], // allWords 16: corks|creep|crepe|peers|perks|pesos|pokes|poses|posse|press|rocks|roses|scope|score|sores|speer
  ["diary-noise","diary","noise","aside","irony",4,"","","aside-irony",21], // allWords 10: adore|aides|aired|anise|dairy|daisy|ideas|noisy|rainy|rayon
  ["did-leg","leg","did","dig","led",1,"","","cannot be reversed",0,86,2,6,0], // allWords 2: gel|lid
  ["miss-pain","miss","pain","pass","mini",3,"","","mini-pass",9], // allWords 14: aims|amin|main|mans|mass|mina|pans|pins|saps|sims|snap|snip|span|spin
  ["coal-neat","coal","neat","taco","lane",3,"nate","calo","lane-taco",19,87,2,5,0], // allWords 6: ante|coat|cola|lace|lean|loan
  ["rates-until","rates","until","trail","tunes",3,"","","trail-tunes",8,87,2,5,0], // allWords 11: alert|alter|aster|later|rents|stair|stare|stern|tears|trial|units
  ["space-spell","space","spell","sleep","scalp",3,"","","scalp-sleep",8], // allWords 10: capes|claps|clasp|lapse|leaps|paces|pales|peels|pleas|scape
  ["also-gate","also","gate","seal","toga",3,"","","seal-toga",17], // allWords 12: ages|alto|goat|late|legs|logs|sage|sago|sale|slog|tale|teal
  ["drove-loser","drove","loser","order","solve",4,"","","order-solve",11,87,2,5,0], // allWords 11: doers|doser|doves|erode|leers|lover|loves|reeds|reels|rodeo|roles
  ["dare-this","dare","this","arts","hide",3,"","","arts-hide",9], // allWords 14: aide|aids|dear|dish|herd|hits|idea|rate|rats|read|said|star|tear|tsar
  ["hints-rugby","hints","rugby","briny","thugs",3,"","","briny-thugs",10,92,1,4,0], // allWords 8: burns|grist|grits|hunts|runts|shunt|sight|turns
  ["birds-cease","birds","cease","basis","creed",4,"","","basis-creed",21], // allWords 15: abide|acids|based|bases|beads|beers|breed|brees|bride|cases|ceres|cider|cress|cried|cries
  ["fig-wed","fig","wed","fed","wig",1,"","","fed-wig",0], // allWords 0
  ["pond-ragu","pond","ragu","drag","upon",2,"","","drag-upon",7], // allWords 3: darn|grad|rand
  ["flat-good","flat","good","glad","foot",2,"","","foot-glad",2,87,2,5,0], // allWords 6: fold|food|goat|gold|loft|toga
  ["apart-weeds","apart","weeds","swear","taped",3,"","","swear-taped",10,92,1,4,0], // allWords 24: adapt|adept|areas|eased|eater|erase|paras|parse|pears|saree|sawed|sewed|sewer|spade|spare|spear|swede|taper|tweed|twerp|wares|water|wears|wraps
  ["drop-keen","keen","drop","need","pork",4,"","","cannot be reversed",23,92,1,4,0], // allWords 13: deep|done|dope|keep|kern|knee|nerd|node|peed|peek|perk|poke|prod
  ["pool-some","pool","some","poem","solo",2,"","","poem-solo",9], // allWords 2: loop|polo
  ["model-pests","model","pests","melts","posed",4,"","","melts-posed",15,92,1,4,0], // allWords 27: deems|demos|domes|dopes|lopes|modes|moles|peels|pelts|pesos|plots|poles|poses|posse|posts|seems|seeps|sleep|slept|slope|smelt|speed|spelt|spots|stems|steps|stops
  ["army-task","task","army","mark","stay",2,"","","mark-stay",9,87,2,5,0], // allWords 1: rays
  ["chest-fried","fried","chest","chide","frets",3,"","","chide-frets",11,86,2,6,0], // allWords 14: cider|creed|crest|cried|defer|erect|ethic|fired|first|freed|refit|rifts|shift|thief
  ["laden-moats","laden","moats","demon","atlas",4,"","","atlas-demon",21,92,1,4,0], // allWords 17: alone|amend|atoms|dales|dames|deals|demos|domes|leads|manta|modes|monde|named|natal|olden|talon|tonal
  ["fly-irk","fly","irk","ilk","fry",1,"","","fry-ilk",1,92,1,4,0], // allWords 0
  ["huge-oral","huge","oral","ogre","haul",3,"","","haul-ogre",9], // allWords 6: aero|ergo|gore|hare|hear|hula
  ["cure-tidy","cure","tidy","duty","rice",3,"","","duty-rice",15,87,2,5,0], // allWords 13: dice|diet|duet|ecru|edit|iced|rite|tide|tied|tier|tire|true|yurt
  ["slain-smack","smack","slain","lacks","mains",2,"","","lacks-mains",7,92,1,4,0], // allWords 5: clans|minas|nails|slack|snail
  ["hovel-react","hovel","react","teach","lover",3,"","","lover-teach",22,87,2,5,0], // allWords 16: actor|carol|carte|cater|cheat|clear|coral|crate|eater|leach|lever|overt|revel|trace|trove|voter
  ["aged-year","aged","year","area","edgy",3,"","","area-edgy",19,92,1,4,0], // allWords 4: eyed|eyre|gear|rage
  ["burn-feel","burn","feel","been","furl",2,"bern","fuel","been-furl",2], // allWords 6: blue|blur|fern|flee|fuel|lube
  ["siren-tires","siren","tires","rites","risen",2,"","","risen-rites",3], // allWords 8: inert|inter|reins|resin|rinse|rises|tiers|tries
  ["awry-tied","awry","tied","yeti","draw",3,"","","draw-yeti",19,92,1,4,0], // allWords 12: aide|airy|arid|diet|dirt|edit|idea|raid|tide|wade|ward|wary
  ["crisp-sweet","crisp","sweet","press","twice",4,"","","press-twice",26], // allWords 28: creep|crepe|crest|erect|ester|peers|piers|price|reset|rests|rites|scrip|speer|spire|spree|steer|stews|stirs|sweep|swipe|terse|tiers|tires|trees|tries|weeps|wests|wipes
  ["sea-vie","sea","vie","see","via",1,"","","see-via",0,92,1,4,0], // allWords 2: ave|eve
  ["chat-lone","chat","lone","once","halt",2,"","","halt-once",7,92,1,4,0], // allWords 9: ache|alto|coat|cone|each|hale|heal|noel|taco
  ["bight-paced","bight","paced","badge","pitch",3,"","","badge-pitch",12], // allWords 2: batch|patch
  ["rows-sold","rows","sold","word","loss",3,"","","loss-word",8], // allWords 2: lord|olds
  ["gangs-prose","gangs","prose","snaps","gorge",5,"","","gorge-snaps",25,92,1,4,0], // allWords 14: goers|grogs|grope|gross|ogres|panes|pangs|pores|poser|ropes|snags|soaps|spans|spore
  ["hooks-liars","hooks","liars","hairs","looks",2,"","","cannot be reversed",7,92,1,4,0], // allWords 4: kilos|rails|shook|solar
  ["make-nick","make","nick","came","kink",3,"nike","mack","came-kink",9,86,2,6,0], // allWords 6: acne|cane|mace|mack|mice|nice
  ["fails-stout","fails","stout","suits","float",4,"","","float-suits",16,92,1,4,0], // allWords 15: aloft|autos|flits|foals|lasso|lifts|lists|lofts|sails|slits|slots|stilt|tails|tilts|touts
  ["droid-shape","droid","shape","hoped","raids",3,"","","hoped-raids",11,92,1,4,0], // allWords 20: aired|arise|drape|drops|heaps|hopes|padre|pared|parse|pears|phase|pores|poser|prose|raise|roped|ropes|spare|spear|spore
  ["heal-pigs","heal","pigs","sigh","leap",3,"","","leap-sigh",23,92,1,4,0], // allWords 7: apes|hail|hale|pale|peas|plea|shea
  ["pun-set","pun","set","sun","pet",1,"","","pet-sun",0], // allWords 2: pen|put
  ["mined-stuff","mined","stuff","muted","sniff",3,"","","muted-sniff",8,92,1,4,0], // allWords 8: denim|dents|duets|fetus|finds|fines|snide|tends
  ["scale-small","scale","small","calls","males",2,"","","calls-males",5], // allWords 3: laces|malls|meals
  ["bars-sift","bars","sift","ribs","fast",3,"","","fast-ribs",15,82,3,6,0], // allWords 11: arts|bras|brat|brit|fats|fist|fits|rats|star|stir|tsar
  ["earl-miff","earl","miff","life","farm",4,"","","farm-life",23,92,1,4,0], // allWords 13: fare|fear|fife|file|film|fire|firm|flea|leaf|lear|real|rife|rile
  ["merge-titan","merge","titan","meant","tiger",3,"","","meant-tiger",12,92,1,4,0], // allWords 7: eater|greet|grime|irate|ramen|taint|train
  ["code-tusk","tusk","code","suck","dote",3,"","","dote-suck",8], // allWords 7: cues|deco|dock|duck|duet|sock|toes
  ["graph-write","graph","write","wrath","gripe",2,"","","gripe-wrath",3,92,1,4,0], // allWords 10: garth|girth|grape|grate|great|pager|right|tiger|water|wiper
  ["gain-swim","gain","swim","wing","aims",2,"","","aims-wing",8,92,1,4,0], // allWords 1: wins
  ["euro-poll","euro","poll","rule","loop",3,"","","loop-rule",9], // allWords 8: lore|lure|polo|pool|poor|pour|pull|role
  ["fix-mew","fix","mew","few","mix",1,"","","few-mix",0], // allWords 0
  ["claim-peers","claim","peers","cream","piles",3,"","","cream-piles",9], // allWords 17: acres|cares|ceres|creme|lapis|parse|pears|plies|races|scare|sepia|slice|spare|spear|speer|spiel|spree
  ["skull-spill","spill","skull","kills","pulls",2,"","","kills-pulls",7,92,1,4,0], // allWords 2: pills|skill
  ["navy-rugs","navy","rugs","guns","vary",3,"","","guns-vary",8], // allWords 9: gnus|nags|rags|sang|snag|snug|sung|vans|yang
  ["fire-mock","fire","mock","mice","fork",2,"","","fork-mice",3,87,2,5,0], // allWords 4: come|fore|more|rife
  ["cable-worse","cable","worse","bowel","races",5,"","","bowel-races",28,92,1,4,0], // allWords 13: acres|below|cares|clear|cores|elbow|lower|scare|score|swear|swore|wares|wears
  ["bops-left","bops","left","pelt","fobs",3,"","","fobs-pelt",9,82,3,6,0], // allWords 4: felt|loft|plot|self
  ["blood-dairy","dairy","blood","broad","doily",4,"","","broad-doily",12,92,1,4,0], // allWords 5: board|braid|diary|dildo|rabid
  ["here-vent","here","vent","then","ever",2,"","","ever-then",6], // allWords 1: even
  ["logo-wash","logo","wash","goal","show",3,"","","goal-show",19], // allWords 4: also|lash|shaw|solo
  ["dub-pug","dub","pug","pub","dug",1,"","","dug-pub",0,85,2,7,0], // allWords 1: bud
  ["dead-flee","dead","flee","dale","feed",3,"","","dale-feed",9], // allWords 9: deaf|deal|deed|fade|feel|flea|fled|lead|leaf
  ["helps-optic","helps","optic","ethic","plops",3,"","","ethic-plops",11,92,1,4,0], // allWords 11: heist|lopes|pesto|pitch|poets|poles|polis|posit|slope|spoil|topic
  ["chefs-water","chefs","water","cheer","wafts",3,"","","cheer-wafts",8], // allWords 18: cafes|carte|caste|cater|cease|chest|craft|crate|faces|facts|farce|react|sweat|threw|trace|wafer|waste|where
  ["newt-reek","newt","reek","tree","knew",2,"","","knew-tree",7], // allWords 4: keen|knee|teen|went
  ["glut-ship","glut","ship","plug","this",3,"","","plug-this",23,92,1,4,0], // allWords 14: hips|hits|huts|lips|list|lust|plus|push|shut|slip|slit|slut|thug|thus
  ["caste-field","caste","field","false","cited",3,"","","cited-false",11], // allWords 19: acted|cadet|cites|clade|decal|edict|fated|fates|feast|feats|filed|files|fleas|flies|laced|laces|leafs|scale|slice
  ["items-opted","items","opted","poets","timed",3,"","","poets-timed",19,92,1,4,0], // allWords 15: depot|emits|mites|mitts|moped|pesto|poems|smite|spite|stipe|stomp|tepid|times|tomes|totes
  ["inch-rack","inch","rack","arch","nick",2,"","","arch-nick",9], // allWords 3: chai|char|chin
  ["guy-sat","guy","sat","gut","say",1,"","","gut-say",0], // allWords 3: gay|tag|tug
  ["steps-unite","steps","unite","stein","upset",3,"","","stein-upset",20,92,1,4,0], // allWords 18: inset|nests|pests|pines|setup|snipe|snips|spine|spins|spite|spits|steep|stipe|teens|tense|tests|tunes|units
  ["dirt-rose","dirt","rose","ride","sort",3,"","","ride-sort",8,81,3,7,0], // allWords 12: dies|dire|does|dose|dots|redo|rise|rode|side|sire|sore|stir
  ["canny-rogue","canny","rogue","angry","ounce",4,"","","cannot be reversed",17,86,2,6,0], // allWords 9: anger|argue|auger|goner|nance|nancy|range|rouen|rouge
  ["cave-rely","cave","rely","very","lace",3,"","","lace-very",9,86,2,6,0], // allWords 11: clay|earl|ever|lacy|lear|leer|rave|real|reel|vary|vera
  ["bunt-tier","bunt","tier","turn","bite",3,"","","bite-turn",12,87,2,5,0], // allWords 8: brie|burn|rite|runt|tint|tire|true|tube
  ["chart-serum","chart","serum","truce","marsh",5,"","","marsh-truce",33,92,1,4,0], // allWords 21: acute|amuse|aster|carte|cater|charm|crate|cream|cuter|harms|hurst|hurts|march|mares|rates|react|smear|stare|tears|trace|trash
  ["burst-tally","burst","tally","blast","truly",3,"","","blast-truly",8], // allWords 16: artsy|bally|blurt|brats|bully|burly|lusty|rusty|salty|start|stray|strut|sturt|tarts|trays|trust
  ["cope-duck","cope","duck","puck","code",4,"","","code-puck",13], // allWords 4: deco|dock|dope|dupe
  ["bids-worn","bids","worn","down","ribs",3,"","","down-ribs",9,81,3,7,0], // allWords 7: bind|bond|born|bros|dibs|rows|wind
  ["bob-mad","mad","bob","bad","mob",1,"","","cannot be reversed",0,87,2,5,0], // allWords 3: dab|dam|mod
  ["blot-maid","blot","maid","boat","mild",2,"","","boat-mild",6,92,1,4,0], // allWords 7: amid|atom|bait|bold|bolt|moat|mold
  ["force-graft","force","graft","forge","craft",4,"","","craft-forge",26], // allWords 4: croft|farce|grace|offer
  ["fits-self","fits","self","tiff","less",3,"","","less-tiff",8,77,4,7,0], // allWords 4: fist|sets|sift|sits
  ["beta-tens","beta","tens","bean","test",2,"","","bean-test",6,92,1,4,0], // allWords 11: abet|ante|bane|beat|best|bets|neat|nest|nets|sent|tate
  ["drunk-scare","drunk","scare","cured","ranks",3,"","","cured-ranks",11], // allWords 24: acres|cadre|canes|cared|cares|cedar|crude|cures|curse|dance|drank|earns|nears|nurse|raced|races|racks|rears|runes|snack|snare|snark|snuck|under
  ["city-daft","city","daft","tidy","fact",3,"","","fact-tidy",8], // allWords 0
  ["nicer-seats","nicer","seats","scent","raise",5,"","","raise-scent",29], // allWords 22: anise|arise|asset|aster|cents|ceres|crest|cries|eases|erase|rates|saint|saree|satin|scene|sects|since|stain|stair|stare|tears|train
  ["cell-road","cell","road","cold","real",2,"","","cold-real",3,87,2,5,0], // allWords 13: aced|clod|coal|cola|dare|dear|earl|lace|lear|lord|oral|read|roll
  ["smell-stove","smell","stove","tells","moves",2,"","","moves-tells",7,86,2,6,0], // allWords 7: moles|sleet|steel|stole|tolls|volts|votes
  ["sag-the","sag","the","tag","she",1,"","","she-tag",0,86,2,6,0], // allWords 6: ate|eat|gas|hes|sea|tea
  ["hook-liar","hook","liar","hair","look",2,"","","cannot be reversed",8,92,1,4,0], // allWords 5: hoki|kilo|lair|oral|rail
  ["dies-earn","dies","earn","rind","ease",4,"","","ease-rind",14], // allWords 12: darn|dean|dine|ears|eras|near|rand|rein|rise|sera|side|sire
  ["birds-flame","flame","birds","blade","firms",2,"","","blade-firms",3,92,1,4,0], // allWords 8: abide|amble|blame|bride|fermi|fired|fried|lambs
  ["leaks-marsh","marsh","leaks","marks","leash",2,"","","leash-marks",1,92,1,4,0], // allWords 14: amass|hales|harms|heals|lakes|makes|massa|masse|sales|salsa|seals|seams|shale|shame
  ["bored-trait","bored","trait","rated","orbit",3,"","","orbit-rated",10], // allWords 14: abode|adobe|bared|beard|braid|bread|otter|rabid|tater|tetra|trade|tread|treat|triad
  ["gush-peel","gush","peel","ghee","plus",3,"","","ghee-plus",9], // allWords 8: glee|glue|huge|hugs|legs|lugs|push|slug
  ["deer-dish","deer","dish","reds","hide",3,"","","hide-reds",21,92,1,4,0], // allWords 5: dire|heed|reed|ride|shed
  ["dirt-seas","dirt","seas","rest","aids",4,"","","aids-rest",13,92,1,4,0], // allWords 8: date|east|eats|reds|said|seat|stir|teas
  ["cores-drama","drama","cores","adore","scram",3,"","","adore-scram",9], // allWords 14: acres|carer|cares|crams|dares|doers|dorms|doser|macro|racer|races|reads|scare|score
  ["beam-trek","beam","trek","bark","teem",3,"","","bark-teem",9], // allWords 13: bake|beak|kart|mart|mate|meat|meet|meta|take|tame|team|term|tram
  ["earns-witch","witch","earns","reach","twins",3,"","","reach-twins",12,92,1,4,0], // allWords 25: acres|cares|caste|cheat|cites|cries|ethic|inset|nears|neath|races|reins|resin|rinse|risen|scare|siren|snare|stein|teach|thane|thine|wants|warns|watch
  ["fall-news","fall","news","lawn","self",4,"","","lawn-self",26,92,1,4,0], // allWords 6: fell|flaw|flew|lens|sewn|swan
  ["areas-rinse","rinse","areas","rises","arena",3,"","","arena-rises",9], // allWords 17: anise|arise|earns|erase|nears|rains|raise|rears|reins|resin|risen|saran|saree|sarin|sears|siren|snare
  ["atoms-place","atoms","place","coats","maple",3,"","","coats-maple",18,87,2,5,0], // allWords 16: ample|ascot|claps|clasp|coals|coast|lamps|moats|pacts|palms|psalm|scalp|stamp|stomp|tacos|tempo
  ["jolly-takes","jolly","takes","tally","jokes",2,"joels","talky","jokes-tally",1], // allWords 14: least|skate|slate|stake|stale|stalk|stall|steak|steal|stoke|stole|tales|talks|tolls
  ["nuts-sage","sage","nuts","sung","east",3,"","","east-sung",21,92,1,4,0], // allWords 15: ages|ante|ants|eats|gnus|guns|nags|neat|sang|seat|snag|snug|stun|teas|tune
  ["dull-hood","dull","hood","dodo","hull",2,"","","dodo-hull",9], // allWords 4: doll|hold|loud|ludo
  ["load-mock","load","mock","clod","amok",2,"","","amok-clod",7], // allWords 2: cold|lock
  ["ether-nails","ether","nails","inter","heals",3,"","","heals-inter",9], // allWords 16: aisle|anise|hales|inert|inset|islet|leash|shale|sheet|slain|snail|stein|there|these|three|tiles
  ["sari-yaks","sari","yaks","airy","asks",3,"","","airy-asks",10], // allWords 2: airs|rays
  ["shape-swing","swing","shape","hangs","wipes",3,"","","hangs-wipes",8], // allWords 8: heaps|phase|shine|swine|swipe|wanes|wines|wings
  ["anger-drums","anger","drums","under","grams",4,"","","grams-under",12,92,1,4,0], // allWords 8: dregs|dunes|gears|manus|nudes|rager|rages|range
  ["key-wow","wow","key","wok","yew",3,"","","wok-yew",9,87,2,5,0], // allWords 0
  ["boat-felt","felt","boat","bolt","feat",1,"","","bolt-feat",1,92,1,4,0], // allWords 9: abet|beat|belt|beta|blot|fate|feta|left|loft
  ["ducks-squib","squib","ducks","bucks","squid",4,"","","bucks-squid",25], // allWords 1: sucks
  ["delay-pairs","delay","pairs","diary","pleas",3,"","","diary-pleas",12,92,1,4,0], // allWords 20: aides|aside|dairy|dales|deals|dries|ideas|lapse|leads|leaps|pales|piers|playa|raids|reply|rides|salad|sepia|sired|spire
  ["acre-bald","bald","acre","card","able",2,"","","able-card",9], // allWords 9: area|bale|bard|bare|bear|care|clad|lace|race
  ["plop-tire","tire","plop","pole","trip",2,"","","pole-trip",6,92,1,4,0], // allWords 5: pier|plot|ripe|rite|tier
  ["alter-tunes","alter","tunes","utter","lanes",3,"","","lanes-utter",8,92,1,4,0], // allWords 11: alert|later|leans|learn|least|renal|slate|stale|steal|tales|tuner
  ["dowel-wagon","dowel","wagon","aglow","owned",3,"","","aglow-owned",11], // allWords 3: glade|lodge|waned
  ["bop-bus","bus","bop","pub","sob",3,"","","pub-sob",10,87,2,5,0], // allWords 1: sub
  ["back-suit","back","suit","bait","suck",2,"","","bait-suck",1,92,1,4,0], // allWords 7: acts|buck|cask|cast|cats|cuts|sack
  ["story-tempo","story","tempo","empty","torso",2,"","","empty-torso",6], // allWords 10: metro|mores|poems|potty|roost|roots|stomp|stoop|storm|typos
  ["depth-spicy","spicy","depth","chips","typed",4,"","","chips-typed",21], // allWords 6: chide|deity|dicey|heist|tipsy|types
  ["seal-wolf","seal","wolf","well","sofa",3,"laos","flew","sofa-well",9], // allWords 7: also|flew|flow|safe|sale|self|sell
  ["await-sides","sides","await","ideas","waist",2,"","","ideas-waist",6,87,2,5,0], // allWords 10: aides|aside|diets|edits|sawed|sited|sweat|tides|waits|waste
  ["avoid-crawl","avoid","crawl","avail","crowd",2,"","","avail-crowd",3], // allWords 4: award|radio|viola|voila
  ["doors-fears","fears","doors","reads","roofs",3,"","","reads-roofs",22,92,1,4,0], // allWords 7: dares|doers|doser|fares|odors|roads|safer
  ["film-wrap","film","wrap","flip","warm",2,"","","flip-warm",6,92,1,4,0], // allWords 2: farm|warp
  ["dye-pan","dye","pan","yep","and",2,"dan","pye","and-yep",8], // allWords 3: ape|nap|pea
  ["lied-toys","toys","lied","tidy","lose",3,"","","lose-tidy",9], // allWords 15: deli|diet|dole|dote|edit|idle|idly|isle|lies|site|sole|tide|tied|ties|toes
  ["safe-ties","safe","ties","ease","fits",3,"","","ease-fits",9,92,1,4,0], // allWords 13: east|eats|fast|fate|fats|feat|feta|fist|seas|seat|sift|site|teas
  ["atlas-denim","denim","atlas","medal","stain",5,"","","medal-stain",34,92,1,4,0], // allWords 19: aisle|amend|amine|anime|anise|dales|deals|deans|leads|manta|mined|named|saint|satin|sedan|slide|snide|stand|tails
  ["runs-town","runs","town","nuts","worn",3,"","","nuts-worn",8], // allWords 3: rows|stun|tons
  ["silly-texts","silly","texts","sixty","tells",2,"","","sixty-tells",2,92,1,4,0], // allWords 12: lilts|lists|sells|sills|slits|still|stilt|style|telly|tills|tilts|yells
  ["alien-earns","alien","earns","areas","linen",3,"","","areas-linen",9], // allWords 22: aisle|anise|arena|earls|erase|inane|laser|learn|leers|liens|lines|nails|nears|reals|reels|renal|saran|saree|slain|snail|snare|snarl
  ["cat-eon","cat","eon","eat","con",1,"","","con-eat",0,92,1,4,0], // allWords 6: act|ate|can|one|tea|toe
  ["kings-stars","kings","stars","sings","stark",3,"","","sings-stark",22,87,2,5,0], // allWords 2: karts|signs
  ["discs-meats","meats","discs","acids","stems",3,"","","acids-stems",19,92,1,4,0], // allWords 8: dates|mates|mists|stade|stead|steam|tames|teams
  ["seem-true","seem","true","sure","teem",2,"","","sure-teem",8,92,1,4,0], // allWords 8: meet|muse|mute|rees|ruse|term|tree|user
  ["lads-poet","poet","lads","sold","tape",3,"","","sold-tape",19,82,3,6,0], // allWords 15: apes|late|lose|olds|pads|peas|peat|pods|pose|sale|seal|sole|tale|teal|told
  ["diner-scope","diner","scope","decor","spine",3,"","","decor-spine",8], // allWords 17: coder|coped|cores|corps|credo|crops|pines|poise|reins|resin|rinse|risen|scene|score|seine|siren|snipe
  ["drag-wood","drag","wood","draw","good",4,"","","draw-good",23,92,1,4,0], // allWords 5: dodo|grad|grow|ward|word
  ["crude-fleet","crude","fleet","creed","flute",2,"","","creed-flute",6], // allWords 8: cured|cuter|defer|delft|elect|erect|freed|truce
  ["lazy-name","lazy","name","male","zany",3,"","","male-zany",8], // allWords 7: amen|lame|mane|many|meal|mean|zeal
  ["debt-lime","debt","lime","bide","melt",4,"","","bide-melt",13], // allWords 5: belt|bile|deem|dime|mile
  ["gas-pea","gas","pea","spa","age",2,"","","age-spa",7], // allWords 3: ape|sag|sap
  ["salad-teeth","salad","teeth","dealt","hates",5,"","","dealt-hates",32], // allWords 21: dales|dates|deals|delta|eased|hales|halts|haste|heals|heats|lathe|leads|leash|shale|shalt|sheet|stade|stead|steed|these|theta
  ["bear-glib","glib","bear","girl","babe",2,"","","babe-girl",6], // allWords 5: bare|blab|brie|gear|rage
  ["alone-quips","quips","alone","equip","salon",2,"","","equip-salon",6,92,1,4,0], // allWords 7: alien|lapis|loans|nails|pique|slain|snail
  ["alarm-chive","alarm","chive","alive","charm",2,"","","alive-charm",1,92,1,4,0], // allWords 4: clear|march|reach|relic
  ["cash-ogre","cash","ogre","acre","gosh",3,"","","acre-gosh",9], // allWords 12: aces|aero|arch|care|case|char|egos|ergo|goes|gore|hogs|race
  ["dawn-tiff","dawn","tiff","find","waft",4,"","","find-waft",13], // allWords 4: twin|wand|want|wind
  ["fades-tower","tower","fades","dotes","wafer",4,"","","dotes-wafer",15,87,2,5,0], // allWords 11: dates|fared|rated|stade|stead|sweat|trade|tread|waste|water|wrote
  ["cult-fish","cult","fish","lift","such",4,"","","lift-such",13,92,1,4,0], // allWords 5: cuts|fist|fits|flit|sift
  ["data-free","free","data","dare","feat",3,"","","dare-feat",9], // allWords 15: dart|date|dear|deer|fare|fart|fate|fear|feta|frat|fret|raft|read|reed|reef
  ["nun-red","red","nun","urn","end",2,"","","end-urn",7], // allWords 2: den|run
  ["flags-peril","peril","flags","frill","pages",3,"","","frill-pages",12,92,1,4,0], // allWords 11: fails|fires|flail|flier|fries|lapis|piers|rifle|sepia|serif|spire
  ["diet-snap","snap","diet","paid","tens",5,"","","paid-tens",26,92,1,4,0], // allWords 15: ants|dent|edit|nest|nets|pans|pens|pies|sent|site|span|tend|tide|tied|ties
  ["card-each","each","card","aced","arch",2,"","","aced-arch",7], // allWords 7: ache|char|dare|dear|hare|hear|read
  ["ideas-worse","worse","ideas","aides","swore",1,"","","aides-swore",3], // allWords 14: aired|aside|dewar|draws|dries|raids|rides|sawed|sewed|sides|sired|swede|wards|weeds
  ["right-siren","right","siren","reign","shirt",3,"","","reign-shirt",11,92,1,4,0], // allWords 13: girth|reins|resin|rinse|risen|rites|sight|singe|tiers|tiger|tires|trier|tries
  ["sage-tone","sage","tone","gate","nose",3,"","","gate-nose",8], // allWords 9: ages|ante|egos|eons|goes|neat|note|ones|sane
  ["last-semi","last","semi","mail","sets",4,"","","mail-sets",14], // allWords 15: aims|isle|lest|lets|lies|lima|lime|malt|mast|mats|melt|mile|sail|salt|stem
  ["child-tough","tough","child","could","thigh",2,"","","could-thigh",2,92,1,4,0], // allWords 3: cloud|cough|ought
  ["lungs-waves","lungs","waves","swung","slave",2,"","","slave-swung",5], // allWords 6: lanes|leans|salve|slang|slung|wanes
  ["boa-dim","dim","boa","aid","mob",3,"","","aid-mob",10], // allWords 2: mid|mod
  ["carts-ropes","carts","ropes","races","ports",3,"","","ports-races",7,87,2,5,0], // allWords 25: acres|capes|cares|cores|paces|pacts|parse|parts|pears|pores|poser|prose|prost|rears|scape|scare|scope|score|space|spare|spear|spore|sport|strap|traps
  ["shoe-wars","shoe","wars","ears","show",4,"","","ears-show",23], // allWords 7: eras|hers|hose|howe|sera|ware|wear
  ["hero-memo","hero","memo","home","more",3,"","","home-more",10,86,2,6,0], // allWords 0
  ["takes-tools","takes","tools","stake","stool",1,"","","stake-stool",3], // allWords 5: skate|stalk|steak|stoke|talks
  ["drain-lever","drain","lever","diver","learn",4,"","","diver-learn",12], // allWords 9: aired|alien|drive|eared|liven|liver|nadir|renal|revel
  ["coin-thin","thin","coin","inch","into",3,"","","inch-into",18,87,2,5,0], // allWords 3: chin|hint|icon
  ["epic-song","epic","song","once","pigs",3,"","","once-pigs",10,92,1,4,0], // allWords 5: cone|cons|gone|pics|snog
  ["sleep-tally","sleep","tally","pleat","yells",5,"","","pleat-yells",32], // allWords 11: lapse|leaps|leapt|pales|pease|peels|petal|plate|pleas|spell|telly
  ["bolt-seen","seen","bolt","been","slot",2,"","","cannot be reversed",8,92,1,4,0], // allWords 13: belt|blot|bone|eons|lens|lest|lets|lost|lots|nose|ones|tees|toes
  ["gag-pod","gag","pod","dog","gap",3,"","","dog-gap",9], // allWords 2: god|pad
  ["coal-rats","coal","rats","acts","oral",2,"","","acts-oral",6,87,2,5,0], // allWords 13: arts|casa|cast|cats|clot|cola|colt|cost|scot|soar|sort|star|tsar
  ["began-rotor","rotor","began","baton","roger",4,"","","baton-roger",16], // allWords 18: abort|anger|argon|barge|bento|bongo|goner|groan|orang|organ|rager|range|retro|robot|tabor|tenor|terra|toner
  ["soul-that","that","soul","halt","outs",2,"","","halt-outs",6], // allWords 12: also|alto|hast|hats|huts|lash|lout|lush|oats|shut|thus|tout
  ["rice-silk","rice","silk","sick","rile",1,"","","rile-sick",1,92,1,4,0], // allWords 2: isle|lies
  ["arena-shiny","shiny","arena","rains","hyena",4,"","","hyena-rains",26,92,1,4,0], // allWords 7: earns|naira|nears|rainy|sarin|snare|yearn
  ["fort-nest","nest","fort","rent","soft",3,"","","rent-soft",9,86,2,6,0], // allWords 7: fret|nets|sent|tens|tern|tons|torn
  ["kale-pale","pale","kale","leap","leak",2,"","","leak-leap",15,81,3,7,0], // allWords 2: lake|plea
  ["bland-freak","bland","freak","bread","flank",2,"","","bread-flank",3,92,1,4,0], // allWords 13: baker|bared|beard|blade|blank|bleak|blend|brake|brand|break|faker|fared|flake
  ["eager-soils","eager","soils","aisle","ogres",4,"","","cannot be reversed",15,92,1,4,0], // allWords 19: agree|arise|gales|gases|gears|glare|glass|gloss|goers|lager|large|liars|rages|rails|raise|regal|sages|sails|silos
  ["aim-dab","dab","aim","baa","mid",3,"mia","bad","baa-mid",9,87,2,5,0], // allWords 5: bad|bid|dam|dim|mad
  ["held-list","list","held","dish","tell",4,"lidl","hets","dish-tell",23], // allWords 12: dill|hits|lest|lets|lids|lilt|shed|sled|slid|slit|this|till
  ["roses-title","roses","title","stole","tries",3,"","","cannot be reversed",11,92,1,4,0], // allWords 19: islet|lists|loser|lotte|riles|rises|rites|roles|sites|slits|slots|sores|stilt|store|tiers|tiles|tilts|tires|totes
  ["cult-gold","gold","cult","clod","glut",2,"","","clod-glut",8], // allWords 3: clot|cold|colt
  ["droid-loser","droid","loser","order","solid",4,"","","order-solid",11,86,2,6,0], // allWords 7: doers|dosed|doser|idols|older|rodeo|roles
  ["kitty-packs","kitty","packs","kicks","patty",2,"","","kicks-patty",1], // allWords 8: pacts|picks|picky|stack|stick|tacks|tacky|ticks
  ["pops-skit","skit","pops","skip","tops",4,"","","skip-tops",23,92,1,4,0], // allWords 7: kiss|kits|post|pots|skis|spot|stop
  ["dusty-fired","dusty","fired","dirty","fused",2,"","","dirty-fused",2], // allWords 8: dried|drift|dudes|feuds|fiery|fried|sided|study
  ["dare-game","dare","game","made","rage",3,"","","made-rage",8,87,2,5,0], // allWords 5: dame|dear|gear|mead|read
  ["time-user","time","user","item","sure",2,"","","item-sure",16], // allWords 11: emit|mite|muse|rest|rite|ruse|stem|tees|tier|tire|trim
  ["lag-oil","oil","lag","ago","ill",2,"","","ago-ill",8], // allWords 2: all|gal
  ["noisy-plugs","noisy","plugs","slips","young",4,"","","slips-young",25,92,1,4,0], // allWords 5: lungs|lying|sling|slung|soups
  ["froze-siege","siege","froze","forge","seize",2,"","","forge-seize",5], // allWords 4: goers|ogres|serge|zeros
  ["bull-life","bull","life","fill","lube",3,"","","cannot be reversed",8,81,3,7,0], // allWords 7: bile|bill|blue|file|flub|fuel|full
  ["arms-host","host","arms","mars","shot",1,"","","mars-shot",3,77,4,7,0], // allWords 12: arts|atom|mart|moat|moth|oats|rams|rats|soma|star|tram|tsar
  ["angry-trend","angry","trend","entry","grand",3,"","","entry-grand",12,87,2,5,0], // allWords 2: terry|yearn
  ["scalp-stork","stork","scalp","corps","talks",3,"","","corps-talks",10], // allWords 22: claps|clasp|corks|craps|crops|karts|lacks|locks|parts|plots|ports|prost|racks|rocks|scrap|slack|splat|sport|stalk|stark|strap|traps
  ["pond-work","pond","work","drop","know",4,"","","drop-know",23], // allWords 4: down|pork|prod|word
  ["hush-tree","hush","tree","here","thus",2,"","","here-thus",7], // allWords 4: hers|huts|rest|shut
  ["noble-seals","noble","seals","alone","bless",3,"","","alone-bless",19,92,1,4,0], // allWords 9: easel|lanes|lasso|leans|lease|loans|lobes|sales|salon
  ["rib-tea","tea","rib","air","bet",3,"","","air-bet",10], // allWords 7: are|ate|bit|ear|eat|era|ria
  ["faint-joust","faint","joust","foist","jaunt",2,"","","foist-jaunt",3,92,1,4,0], // allWords 4: futon|joint|joist|junta
  ["grog-wins","grog","wins","grow","sing",3,"","","grow-sing",23,92,1,4,0], // allWords 3: rows|sign|wing
  ["envy-mean","mean","envy","even","many",3,"","","even-many",9,87,2,5,0], // allWords 3: amen|mane|name
  ["stale-swift","stale","swift","tiles","wafts",2,"","","tiles-wafts",7,92,1,4,0], // allWords 11: fates|feast|feats|islet|least|slate|steal|stilt|tales|tilts|wiles
  ["cogs-rude","rude","cogs","code","rugs",2,"","","code-rugs",1], // allWords 9: deco|docs|ergo|gore|ogre|redo|rode|rods|urge
  ["feet-salt","salt","feet","east","left",3,"","","cannot be reversed",9,87,2,5,0], // allWords 13: eats|fate|feat|felt|feta|fete|flat|last|lest|lets|seat|teas|tees
  ["alert-setup","alert","setup","pulse","treat",5,"","","pulse-treat",29], // allWords 19: alter|eater|ester|later|paler|pearl|peers|reset|speer|spree|steer|strep|taper|tater|taupe|terse|tetra|trees|upset
  ["lane-only","only","lane","none","ally",3,"","","ally-none",9], // allWords 4: lean|lone|neon|noel
  ["sheep-shell","sheep","shell","heels","helps",2,"","","heels-helps",5], // allWords 1: hells
  ["ewe-hey","hey","ewe","eye","hew",2,"","","cannot be reversed",9,87,2,5,0], // allWords 3: wee|why|yew
  ["swim-teen","swim","teen","seem","twin",2,"","","seem-twin",2], // allWords 15: emit|item|meet|mite|news|newt|seen|semi|sewn|sine|teem|time|tine|went|wins
  ["dread-laden","dread","laden","added","renal",4,"","","added-renal",15], // allWords 6: adder|alder|dared|elder|ender|learn
  ["amber-notes","amber","notes","beams","tenor",3,"","","beams-tenor",17,81,3,7,0], // allWords 15: boner|bones|borne|bream|mates|meats|onset|seton|steam|stone|tamer|tames|teams|toner|tones
  ["lock-nerd","lock","nerd","neck","lord",2,"","","lord-neck",1,92,1,4,0], // allWords 3: clod|cold|kern
  ["enter-tests","enter","tests","steer","tents",3,"","","steer-tents",12,86,2,6,0], // allWords 12: ester|nests|rents|reset|sense|sneer|stent|stern|teens|tense|terse|trees
  ["demo-wish","demo","wish","does","whim",2,"","","does-whim",8,92,1,4,0], // allWords 9: dish|dome|dose|meow|mode|modi|owes|shed|woes
  ["news-trio","news","trio","iron","west",3,"","","iron-west",10], // allWords 12: noir|nori|riot|roti|sewn|sine|site|stew|stir|ties|tori|worn
  ["gnome-peers","gnome","peers","genre","poems",3,"","","genre-poems",8], // allWords 13: goers|goner|green|ogres|pores|poser|prone|prose|ropes|serge|speer|spore|spree
  ["area-tour","area","tour","auto","rear",3,"","","cannot be reversed",19,86,2,6,0], // allWords 6: aero|aura|rare|rate|tear|tore
  ["nor-pal","pal","nor","lop","ran",3,"","","lop-ran",14], // allWords 4: alp|lap|pro|rap
  ["dodo-tons","dodo","tons","odds","onto",2,"","","odds-onto",7], // allWords 3: dons|dots|nods
  ["react-taxes","taxes","react","caste","extra",5,"","","caste-extra",30], // allWords 16: acres|areas|carat|cares|carte|cater|crate|eater|erase|exert|races|sacra|saree|scare|tease|trace
  ["drive-ramen","ramen","drive","amend","river",2,"","","amend-river",6], // allWords 4: diner|diver|edema|named
  ["dawn-sail","dawn","sail","dial","swan",2,"","","dial-swan",8,92,1,4,0], // allWords 4: awls|laid|laws|wand
  ["orb-pop","orb","pop","bop","pro",3,"","","cannot be reversed",10,86,2,6,0], // allWords 3: boo|bro|rob
  ["corny-flats","corny","flats","forty","clans",2,"","","clans-forty",3], // allWords 8: ascot|coast|coats|crony|forts|frost|scorn|tacos
  ["agog-gory","agog","gory","grog","yoga",4,"","","cannot be reversed",22,92,1,4,0], // allWords 1: orgy
  ["inch-race","inch","race","arch","nice",2,"","","arch-nice",9], // allWords 5: acre|care|chai|char|chin
  ["props-tribe","props","tribe","probe","trips",2,"","","probe-trips",1], // allWords 9: biter|brits|piper|ports|prost|sport|strip|tripe|trope
  ["ogres-snowy","snowy","ogres","grows","nosey",2,"","","grows-nosey",6], // allWords 11: goers|gooey|goose|greys|noose|noses|senor|snore|snows|swoon|sworn
  ["else-ruin","else","ruin","line","user",3,"","","line-user",9], // allWords 7: eels|lens|lien|rile|runs|ruse|sure
  ["bare-vote","bare","vote","abet","over",3,"","","abet-over",20,92,1,4,0], // allWords 9: bear|beat|beta|bore|rave|robe|rove|vera|veto
  ["shame-twerp","shame","twerp","there","swamp",2,"","","swamp-there",3,92,1,4,0], // allWords 19: earth|ether|hares|hater|hears|heart|heres|sewer|share|sharp|shear|sheer|swear|theme|three|wares|water|wears|wraps
  ["bias-dibs","bias","dibs","aids","bibs",3,"","","aids-bibs",8], // allWords 2: bids|said
  ["nab-two","nab","two","bat","own",3,"","","bat-own",9], // allWords 4: ban|now|tab|won
  ["tidy-tube","tidy","tube","bite","duty",3,"","","bite-duty",13,87,2,5,0], // allWords 5: diet|duet|edit|tide|tied
  ["dolly-sides","dolly","sides","oddly","isles",2,"","","isles-oddly",4,92,1,4,0], // allWords 12: dilly|dolls|dosed|doses|loses|sided|sills|silly|slide|soles|yield|yodel
  ["harm-sigh","sigh","harm","high","mars",3,"","","high-mars",23,92,1,4,0], // allWords 6: arms|hags|rams|rash|rims|shri
  ["falls-lucky","lucky","falls","fully","lacks",2,"","","fully-lacks",3,92,1,4,0], // allWords 6: alkyl|calls|flaky|flask|skull|slack
  ["among-wines","among","wines","names","owing",3,"","","names-owing",8,87,2,5,0], // allWords 8: anise|mango|mason|means|mensa|moans|omega|swine
  ["joey-thin","thin","joey","join","they",2,"","","join-they",1,92,1,4,0], // allWords 5: hint|into|note|then|tone
  ["nags-park","park","nags","gaps","rank",3,"","","gaps-rank",8], // allWords 5: gasp|raps|rasp|sang|snag
  ["felt-load","felt","load","deaf","toll",4,"","","deaf-toll",26], // allWords 17: alto|dale|deal|doll|fade|fate|feat|feta|fled|fold|late|lead|left|loft|tale|teal|tell
  ["rap-too","rap","too","oar","pot",3,"","","oar-pot",10], // allWords 5: opt|pat|pro|tap|top
  ["sewer-waist","sewer","waist","sweat","wiser",3,"","","sweat-wiser",10], // allWords 15: arise|raise|rises|sites|stews|swats|swear|sweet|waits|wares|waste|wears|weirs|wests|wires
  ["eagle-saint","eagle","saint","agent","aisle",3,"","","cannot be reversed",9,87,2,5,0], // allWords 6: angst|anise|gales|satin|stain|tails
  ["eats-time","time","eats","ties","mate",3,"","","mate-ties",15,86,2,6,0], // allWords 21: east|emit|item|mast|mats|meat|mesa|meta|mist|mite|same|seam|seat|semi|site|stat|tame|tate|team|teas|tits
  ["doors-gouge","gouge","doors","goods","rouge",3,"","","cannot be reversed",22,92,1,4,0], // allWords 3: odors|rodeo|rogue
  ["foul-plot","foul","plot","foot","pull",3,"","","foot-pull",9], // allWords 8: fool|full|loft|loop|poll|polo|pool|tofu
  ["dour-sage","dour","sage","aged","ours",2,"","","aged-ours",7], // allWords 7: ages|drag|egos|goes|grad|rags|sour
  ["bless-wrote","bless","wrote","belts","worse",2,"","","belts-worse",5], // allWords 16: beers|beret|bolts|bores|brees|lobes|lowes|robes|sewer|slows|sober|swore|towel|tower|worst|wrest
  ["life-open","open","life","info","peel",4,"","","info-peel",15], // allWords 4: file|lien|line|nope
  ["all-irk","irk","all","ark","ill",1,"","","ark-ill",0,92,1,4,0], // allWords 1: ilk
  ["shows-three","three","shows","shrew","those",3,"","","shrew-those",7], // allWords 10: ether|ethos|heres|hoses|howes|sheer|shoes|there|threw|whose
  ["cake-sick","sick","cake","case","kick",4,"","","case-kick",13,82,3,6,0], // allWords 4: aces|cask|sack|sake
  ["salsa-taste","taste","salsa","asset","atlas",3,"","","cannot be reversed",11,92,1,4,0], // allWords 10: latte|least|sales|seals|seats|slate|stale|state|steal|tales
  ["blue-room","blue","room","boom","rule",2,"","","boom-rule",8,87,2,5,0], // allWords 7: euro|lobe|lore|lube|lure|moor|role
  ["golf-nail","golf","nail","flag","lion",4,"","","flag-lion",23], // allWords 3: flan|gall|info
  ["minds-tales","minds","tales","smile","stand",3,"","","smile-stand",8,92,1,4,0], // allWords 17: inset|islet|least|limes|males|meals|means|mensa|miles|mines|names|slate|slime|stale|steal|stein|tiles
  ["blame-place","blame","place","maple","cable",3,"","","cable-maple",17], // allWords 2: amble|ample
  ["arts-pool","arts","pool","oral","tops",4,"","","oral-tops",13,92,1,4,0], // allWords 15: alto|loop|oats|oops|plot|polo|post|pots|pros|rats|soar|spot|star|stop|tsar
  ["core-heat","core","heat","coat","here",2,"","","coat-here",1], // allWords 4: hate|hero|oath|taco
  ["are-hog","are","hog","ago","her",2,"","","ago-her",9], // allWords 3: ear|era|rag
  ["monk-rice","monk","rice","mine","rock",2,"","","mine-rock",3], // allWords 9: come|core|cork|mice|mink|mock|omen|rein|rink
  ["girls-lower","girls","lower","roger","wills",4,"","","roger-wills",12,92,1,4,0], // allWords 11: glows|goers|growl|loser|lowes|ogres|riles|roles|rolls|swill|wiles
  ["chalk-steel","chalk","steel","cheek","stall",2,"","","cheek-stall",2,92,1,4,0], // allWords 28: elect|hales|halls|heals|heels|hells|lakhs|leach|leash|least|leech|shake|shale|shall|shell|skate|skeet|slate|sleet|stake|stale|stalk|steak|steal|takes|tales|talks|tells
  ["ugly-vent","ugly","vent","envy","glut",2,"","","envy-glut",7], // allWords 3: levy|tune|tung
  ["gates-sight","sight","gates","gases","tight",4,"","","gases-tight",12], // allWords 9: asset|sages|seats|sighs|sites|stage|stash|state|taste
  ["dope-tide","dope","tide","died","poet",3,"","","died-poet",10], // allWords 4: diet|dote|edit|tied
  ["front-goals","front","goals","fools","grant",2,"","","fools-grant",3], // allWords 7: aloft|float|foals|gloat|goons|logos|tango
  ["dream-users","dream","users","serum","reads",2,"","","reads-serum",6], // allWords 6: amuse|armed|dames|dares|dress|madre
  ["fed-lob","fed","lob","fob","led",1,"","","fob-led",0,86,2,6,0], // allWords 1: old
  ["hello-lives","hello","lives","olive","shell",2,"","","olive-shell",6,86,2,6,0], // allWords 10: elves|evils|heels|hells|hills|hives|hovel|lisle|shill|veils
  ["dolls-pearl","pearl","dolls","droll","pleas",3,"","","droll-pleas",12,92,1,4,0], // allWords 22: alder|dales|dares|deals|ladle|lapel|lapse|leads|leaps|loads|lords|paler|pales|parse|pears|polar|polls|reads|roads|spare|spear|spell
  ["send-yaps","send","yaps","deny","saps",3,"","","deny-saps",23], // allWords 8: ends|ness|pads|pass|pays|sand|sans|sped
  ["glade-spray","spray","glade","grape","sadly",3,"","","grape-sadly",12,92,1,4,0], // allWords 20: agape|algae|dales|deals|earls|glare|lager|large|laser|leads|pager|parse|pears|prays|raspy|reals|regal|spade|spare|spear
  ["cress-treat","treat","cress","react","rests",2,"","","react-rests",6,87,2,5,0], // allWords 15: acres|aster|cares|carte|cater|crate|crest|races|rates|scare|stare|tater|tears|tetra|trace
  ["fast-rows","fast","rows","soft","wars",3,"","","soft-wars",15,87,2,5,0], // allWords 8: arts|fats|rats|sort|star|tsar|waft|wart
  ["rate-slot","slot","rate","role","stat",3,"","","role-stat",9,92,1,4,0], // allWords 15: aero|east|eats|lest|lets|lore|lose|lost|lots|oats|seat|sole|tart|tear|teas
  ["isle-wrap","isle","wrap","rile","swap",2,"","","rile-swap",5], // allWords 10: lies|lips|pair|paws|slew|slip|ware|warp|wasp|wear
  ["maid-sued","maid","sued","amid","used",1,"","","amid-used",3], // allWords 6: aids|dame|dues|made|mead|said
  ["hug-net","hug","net","gnu","the",2,"","","gnu-the",7], // allWords 6: gen|gun|hut|nut|ten|ugh
  ["cheap-romps","cheap","romps","champ","ropes",2,"","","champ-ropes",5,92,1,4,0], // allWords 20: aches|arose|campo|chase|chasm|comps|hares|harms|hears|marsh|opera|peach|pores|poser|proms|prose|scope|share|shear|spore
  ["page-risk","risk","page","gear","skip",3,"","","gear-skip",19], // allWords 10: apes|ears|eras|kris|peas|pies|rage|rise|sera|sire
  ["dumb-pond","dumb","pond","bond","dump",4,"","","bond-dump",23], // allWords 1: bump
  ["layer-pasta","layer","pasta","atlas","repay",3,"","","atlas-repay",17], // allWords 16: earls|early|laser|leary|parse|parts|party|payer|pears|reals|relay|spare|spear|strap|tapas|traps
  ["nacho-stint","nacho","stint","notch","stain",2,"","","notch-stain",5], // allWords 11: anion|canon|chant|chaos|chats|hoist|saint|saith|satin|scant|tints
  ["rugs-sake","rugs","sake","asks","urge",2,"","","asks-urge",9], // allWords 6: ages|gear|rage|rags|rake|sage
  ["faint-miles","faint","miles","mains","filet",2,"","","filet-mains",3,92,1,4,0], // allWords 15: false|fetal|files|fleas|flies|flint|leafs|limes|males|meals|metal|minas|minis|slime|smile
  ["acts-lead","lead","acts","clad","eats",2,"","","clad-eats",5], // allWords 13: casa|cast|cats|dale|date|deal|east|lest|lets|sale|seal|seat|teas
  ["bags-cold","cold","bags","cogs","bald",2,"","","bald-cogs",1,92,1,4,0], // allWords 6: bold|clad|clod|gobs|labs|slab
  ["die-ram","die","ram","ear","mid",3,"","","ear-mid",10,87,2,5,0], // allWords 8: are|arm|dam|dim|era|mad|mar|rim
  ["dance-seals","dance","seals","cease","lands",4,"","","cease-lands",26], // allWords 17: canes|casas|cases|dales|deals|easel|laden|lanes|leads|leans|lease|lends|salad|sales|salsa|scans|scene
  ["herbs-quiet","quiet","herbs","squib","there",3,"","","squib-there",11,92,1,4,0], // allWords 9: berth|brush|ether|heres|quite|sheer|shrub|three|usher
  ["meat-wins","meat","wins","aims","newt",4,"mias","went","aims-newt",13], // allWords 13: mate|mesa|meta|mint|news|same|seam|sewn|tame|team|twin|wait|went
  ["heel-knit","heel","knit","hint","keel",2,"","","hint-keel",8,92,1,4,0], // allWords 7: kiln|kite|leek|like|link|then|thin
  ["cedar-media","cedar","media","aimed","raced",2,"","","aimed-raced",14], // allWords 8: armed|cadre|cared|cider|cried|dream|madre|mired
  ["bury-tomb","bury","tomb","bomb","yurt",3,"","","bomb-yurt",23], // allWords 3: ruby|tory|troy
  ["acted-poses","acted","poses","cases","opted",3,"","","cases-opted",8,82,3,6,0], // allWords 10: cadet|caste|depot|dopes|pesos|pesto|poets|posed|posse|specs
  ["chugs-flirt","flirt","chugs","curls","fight",3,"","","curls-fight",9], // allWords 3: crush|firth|frith
  ["cone-shot","cone","shot","host","once",1,"","","host-once",3,72,5,8,0], // allWords 8: echo|eons|hens|hose|nose|ones|shoe|tons
  ["ink-let","let","ink","elk","nit",2,"","","elk-nit",7], // allWords 4: kin|tel|tie|tin
  ["fiery-frost","fiery","frost","foist","ferry",2,"","","ferry-foist",5,87,2,5,0], // allWords 4: forts|frets|fryer|refit
  ["into-seed","seed","into","nose","edit",4,"","","edit-nose",19], // allWords 11: diet|dine|dint|ends|eons|ones|send|tide|tied|toes|tons
  ["fire-stem","fire","stem","semi","fret",2,"","","fret-semi",7,92,1,4,0], // allWords 9: feet|fete|firm|rest|rife|rims|rise|sire|tees
  ["turns-wives","turns","wives","runts","views",2,"","","runts-views",5], // allWords 7: rites|tiers|tires|tries|weirs|wires|wiser
  ["halls-pipes","halls","pipes","shape","spill",3,"","","shape-spill",8,87,2,5,0], // allWords 17: hales|heals|heaps|hills|lapse|leaps|leash|pales|phase|piles|pills|pleas|plies|shale|shall|shill|spiel
  ["cask-guru","guru","cask","ragu","suck",3,"","","ragu-suck",15,75,4,9,0], // allWords 2: rack|sack
  ["black-crane","black","crane","clank","brace",2,"","","brace-clank",3,92,1,4,0], // allWords 8: blank|cable|clack|clean|crack|crank|lance|rance
  ["eyed-trip","eyed","trip","deer","pity",3,"","","deer-pity",20,92,1,4,0], // allWords 9: dire|dirt|peer|pier|reed|ride|ripe|tidy|type
  ["goal-reds","goal","reds","gods","real",2,"","","gods-real",1,92,1,4,0], // allWords 15: ages|dogs|earl|ears|eras|gale|gold|lear|lord|oral|rods|sage|sago|sera|soar
  ["age-mug","mug","age","emu","gag",2,"","","emu-gag",8,87,2,5,0], // allWords 2: gem|gum
  ["alloy-elbow","elbow","alloy","bowel","loyal",2,"","","bowel-loyal",14,76,4,8,0], // allWords 2: allow|below
  ["dawn-ribs","dawn","ribs","bids","warn",3,"","","bids-warn",8], // allWords 10: band|barn|bars|bind|bran|bras|dibs|wand|wars|wind
  ["drown-suite","suite","drown","tires","wound",4,"","","tires-wound",28,92,1,4,0], // allWords 21: donut|outed|rites|rowed|snort|snout|store|swore|sworn|tiers|tired|tried|tries|units|weird|weirs|wider|wired|wires|wiser|worse
  ["clue-fear","clue","fear","care","fuel",2,"","","care-fuel",9,92,1,4,0], // allWords 10: acre|cure|curl|ecru|fare|flea|furl|lace|leaf|race
  ["parts-tents","tents","parts","spent","start",2,"","","cannot be reversed",5,92,1,4,0], // allWords 6: pants|stent|strap|strep|tarts|traps
  ["dealt-hairy","hairy","dealt","daily","heart",2,"","","daily-heart",3], // allWords 18: dairy|delay|delta|diary|earth|hater|lathe|rated|ready|their|tidal|tiled|tired|trade|tread|triad|tried|yield
  ["oops-port","oops","port","pops","root",3,"","","pops-root",8], // allWords 2: pros|toro
  ["lamps-slosh","slosh","lamps","polls","smash",5,"","","polls-smash",26,92,1,4,0], // allWords 9: halos|lasso|palms|psalm|shams|shoal|slams|soaps|spasm
  ["bank-juts","bank","juts","bats","junk",2,"","","bats-junk",1,92,1,4,0], // allWords 8: bans|bunk|buns|bust|just|nabs|stab|tabs
  ["add-yes","yes","add","dye","sad",2,"","","dye-sad",8,87,2,5,0], // allWords 3: ads|dad|sea
  ["dwell-loves","loves","dwell","loved","swell",4,"","","loved-swell",14,76,4,8,0], // allWords 7: doves|sewed|solve|swede|weeds|welds|wells
  ["blobs-every","blobs","every","lobby","veers",2,"","","lobby-veers",9,92,1,4,0], // allWords 13: beryl|leers|lobes|loser|overs|reels|roles|serve|servo|sever|verbs|verse|verso
  ["gawk-tree","gawk","tree","take","grew",3,"","","grew-take",9], // allWords 2: trek|wage
  ["dish-tier","dish","tier","hits","ride",3,"","","hits-ride",22,87,2,5,0], // allWords 6: dire|hide|rite|stir|this|tire
  ["enter-lasts","enter","lasts","alter","nests",3,"","","alter-nests",8], // allWords 38: alert|asset|aster|earls|eases|eater|erase|laser|later|least|rates|reals|rents|sales|salts|saree|seals|seats|sense|slate|slats|sneer|stale|stare|state|steal|stent|stern|tales|taste|tater|tears|tease|teens|tense|tents|tetra|treat
  ["awry-bust","awry","bust","ruby","swat",4,"","","ruby-swat",13,92,1,4,0], // allWords 7: bury|busy|buys|sway|wart|wary|ways
  ["porch-write","porch","write","worth","price",2,"","","price-worth",3,92,1,4,0], // allWords 6: chirp|throw|tower|tripe|trope|wrote
  ["amble-spray","amble","spray","blame","raspy",2,"","","blame-raspy",13,82,3,6,0], // allWords 13: balmy|beams|mares|paler|parse|pearl|pears|plebs|prays|realm|smear|spare|spear
  ["fade-norm","norm","fade","farm","node",2,"","","farm-node",1,92,1,4,0], // allWords 11: damn|deaf|dean|done|earn|fare|fear|fore|form|from|near
  ["gem-wok","gem","wok","keg","mow",3,"","","keg-mow",10,87,2,5,0], // allWords 1: mew
  ["radar-wedge","radar","wedge","award","greed",3,"","","award-greed",21,92,1,4,0], // allWords 5: dewar|eared|grade|raged|waged
  ["liver-waste","waste","liver","leave","wrist",3,"","","leave-wrist",9], // allWords 26: earls|easel|islet|laser|lease|least|ravel|reals|riles|slate|stale|steal|straw|swear|sweat|tales|tiles|valet|wares|warts|waver|wears|weave|weirs|wires|wiser
  ["male-nine","nine","male","line","name",3,"neil","mean","cannot be reversed",9,86,2,6,0], // allWords 11: amen|lame|lane|lean|lien|lime|mane|meal|mean|mile|mine
  ["acres-stain","acres","stain","cases","train",3,"","","cases-train",9], // allWords 21: asset|aster|cairn|canes|cares|crane|cress|races|rance|rates|rents|rests|saint|satin|scare|seats|stair|stare|stern|stirs|tears
  ["deny-labs","deny","labs","ably","ends",2,"","","ably-ends",7], // allWords 5: beds|lens|sand|send|slab
  ["kinds-prose","prose","kinds","dorks","snipe",5,"","","dorks-snipe",26], // allWords 14: drops|inked|pines|poise|pores|poser|roped|ropes|sinks|skins|snips|spine|spins|spore
  ["ball-yeti","yeti","ball","bait","yell",3,"","","bait-yell",9], // allWords 6: ally|bail|bell|belt|bile|bite
  ["laid-tone","laid","tone","idol","neat",3,"","","idol-neat",19], // allWords 8: ante|dial|land|lane|lean|lone|noel|note
  ["fella-rinse","fella","rinse","renal","files",3,"","","files-renal",13,92,1,4,0], // allWords 30: earls|earns|fails|false|feels|final|fines|flail|fleas|flees|flies|laser|leafs|learn|leers|liars|liner|nears|rails|rains|reals|reels|reins|resin|riles|risen|sarin|siren|snare|sneer
  ["tapes-towns","tapes","towns","poets","wants",3,"","","poets-wants",13], // allWords 7: pants|paste|pesto|septa|spate|sweat|waste
  ["riot-seed","riot","seed","site","redo",3,"dior","tees","redo-site",9], // allWords 20: deer|dies|dire|does|dose|reed|ride|rite|rode|roti|side|tees|tier|ties|tire|toes|tore|tori|tree|trio
  ["drag-gory","gory","drag","grog","yard",4,"","","grog-yard",22], // allWords 5: agog|dory|grad|orgy|yoga
  ["shaky-spill","shaky","spill","shall","spiky",2,"","","shall-spiky",1,92,1,4,0], // allWords 7: halls|hills|lakhs|palsy|pills|plays|shill
  ["lace-pipe","lace","pipe","cape","pile",3,"","","cape-pile",8], // allWords 6: epic|leap|lice|pace|pale|plea
  ["fence-solid","solid","fence","field","scone",3,"","","field-scone",9], // allWords 14: clods|close|colds|cones|fiend|filed|fined|idols|noise|scene|scold|seine|slide|snide
  ["ads-pub","pub","ads","dab","ups",2,"","","dab-ups",7,92,1,4,0], // allWords 2: bad|sad
  ["lodge-ultra","ultra","lodge","gloat","ruled",4,"","","gloat-ruled",25,92,1,4,0], // allWords 6: glued|gouda|lured|older|outer|route
  ["theme-traps","theme","traps","metre","paths",3,"","","metre-paths",19,92,1,4,0], // allWords 10: maths|meter|parts|smart|strap|strep|tamer|taper|terms|trams
  ["nets-port","port","nets","rent","tops",4,"","","rent-tops",13,92,1,4,0], // allWords 16: nest|pest|pets|post|pots|pros|reps|sent|spot|step|stop|tens|tent|tern|tons|torn
  ["rated-tanks","rated","tanks","drank","state",3,"","","drank-state",9,92,1,4,0], // allWords 15: aster|earns|karts|nears|ranks|rates|snare|snark|stank|stare|stark|taste|tears|trade|tread
  ["ribs-salt","salt","ribs","bars","list",3,"","","bars-list",15], // allWords 11: bass|bats|bits|bras|brat|brit|lars|last|slit|stab|tabs
  ["laser-sweet","sweet","laser","sewer","least",2,"","","least-sewer",8,92,1,4,0], // allWords 14: asset|earls|erase|reals|saree|sears|seats|slate|stale|steal|stews|tales|tease|wests
  ["snap-wing","wing","snap","pins","gnaw",4,"","","gnaw-pins",23], // allWords 10: nags|pans|pawn|sang|sign|sing|snag|snip|span|spin
  ["dodo-goes","dodo","goes","dose","good",2,"","","dose-good",9,92,1,4,0], // allWords 5: does|dogs|egos|gods|odds
  ["chai-tend","tend","chai","date","inch",3,"","","date-inch",19,82,3,6,0], // allWords 8: aced|chad|chin|dent|hint|nice|thin|tine
  ["law-pie","law","pie","lie","paw",1,"","","lie-paw",0,87,2,5,0], // allWords 3: ape|awl|pea
  ["bolt-peer","bolt","peer","beer","plot",2,"","","cannot be reversed",8,92,1,4,0], // allWords 10: belt|blot|bore|bree|pelt|poet|pore|repo|robe|rope
  ["legal-solve","legal","solve","goals","level",4,"","","goals-level",17], // allWords 7: eagle|easel|elves|gales|glove|lease|loves
  ["lawn-snug","snug","lawn","lung","swan",2,"","","lung-swan",8,92,1,4,0], // allWords 7: anus|gnus|guns|luna|nuns|sung|swag
  ["code-wade","wade","code","aced","owed",3,"","","aced-owed",19], // allWords 1: deco
  ["ended-utter","utter","ended","deter","tuned",3,"","","deter-tuned",9], // allWords 4: ender|enter|tuner|under
  ["dude-pity","pity","dude","tidy","dupe",3,"","","dupe-tidy",8], // allWords 7: died|diet|duet|duty|edit|tide|tied
  ["heath-scarf","heath","scarf","fares","hatch",4,"","","fares-hatch",29], // allWords 15: chats|crash|facts|fates|fears|feast|feats|hares|haste|hates|hears|heats|safer|share|shear
  ["scale-smell","smell","scale","cells","males",2,"","","cells-males",7,92,1,4,0], // allWords 5: calls|laces|malls|meals|small
  ["horse-title","horse","title","hotel","tires",3,"","","hotel-tires",10,92,1,4,0], // allWords 14: ethos|heirs|heist|heros|hires|lotte|rites|shire|shore|store|those|tiers|totes|tries
  ["ink-odd","odd","ink","don","kid",2,"","","don-kid",9], // allWords 4: did|din|kin|nod
  ["feta-lads","feta","lads","fast","lead",3,"","","fast-lead",9], // allWords 16: dale|deaf|deal|fade|fate|fats|feat|feds|last|late|lest|lets|salt|sled|tale|teal
  ["acts-bake","bake","acts","abet","cask",3,"","","abet-cask",20,92,1,4,0], // allWords 12: bask|bats|beak|beat|beck|beta|cake|cast|cats|sack|stab|tabs
  ["belly-guard","belly","guard","gully","beard",2,"","","beard-gully",1], // allWords 9: bared|beryl|blade|bread|bully|burly|glade|grade|raged
  ["sword-twins","sword","twins","worst","winds",3,"","","winds-worst",9], // allWords 5: downs|snows|towns|words|wrist
  ["cure-rage","cure","rage","urge","acre",2,"","","acre-urge",5], // allWords 7: cage|care|ecru|gear|race|rare|rear
  ["full-seek","full","seek","feel","sulk",2,"","","feel-sulk",2], // allWords 7: eels|elks|else|fell|flee|fuel|sell
  ["erase-given","erase","given","agree","veins",4,"","","agree-veins",24,92,1,4,0], // allWords 22: anger|anise|eager|earns|gains|gears|gives|nears|nerve|never|rages|range|reeve|saree|serve|sever|sieve|snare|veers|verge|verse|vines
  ["agony-rises","agony","rises","gases","irony",3,"","","gases-irony",8,86,2,6,0], // allWords 6: goers|greys|irons|ogres|sages|snags
  ["font-pile","font","pile","lift","nope",4,"","","lift-nope",12], // allWords 10: file|fine|flit|life|loft|open|pine|pint|plot|pole
  ["bot-nor","bot","nor","rob","ton",3,"","","rob-ton",9,87,2,5,0], // allWords 3: bro|not|orb
  ["diet-part","diet","part","tarp","tied",2,"","","tarp-tied",19,80,3,8,0], // allWords 9: dart|date|dirt|edit|peat|tape|tide|trap|trip
  ["club-whom","club","whom","bowl","much",4,"","","bowl-much",22], // allWords 2: bloc|blow
  ["dozen-wills","dozen","wills","wizen","dolls",2,"","","dolls-wizen",1], // allWords 8: lined|lowes|olden|sized|slide|swill|wiles|zoned
  ["ample-hosts","ample","hosts","lamps","those",2,"","","lamps-those",8,87,2,5,0], // allWords 19: ethos|helms|holes|lasso|males|maple|masts|mates|meals|meats|palms|psalm|shots|slams|slosh|stamp|steam|tames|teams
  ["fund-pork","fund","pork","punk","ford",2,"","","ford-punk",2], // allWords 6: drop|fond|fork|funk|pond|prod
  ["delay-react","delay","react","acted","layer",3,"","","acted-layer",18], // allWords 14: alert|alter|cadet|carte|cater|crate|dealt|decay|delta|early|later|leary|relay|trace
  ["bound-curls","bound","curls","burns","could",2,"","","burns-could",3,92,1,4,0], // allWords 6: blurs|bolus|bonus|cloud|locus|scorn
  ["folk-king","folk","king","golf","kink",3,"","","golf-kink",23,92,1,4,0], // allWords 0
  ["onyx-tail","onyx","tail","only","taxi",2,"","","only-taxi",5], // allWords 2: lint|lion
  ["bad-rue","bad","rue","dub","ear",3,"abe","urd","dub-ear",14,86,2,6,0], // allWords 4: are|bud|dab|era
  ["amber-blend","amber","blend","bland","ember",4,"","","bland-ember",12,82,3,6,0], // allWords 12: amend|blade|bleed|bream|edema|embed|laden|learn|named|ramen|rebel|renal
  ["awry-neat","awry","neat","away","rent",3,"","","away-rent",9,87,2,5,0], // allWords 8: ante|rate|tear|tern|want|wart|wary|year
  ["gone-wish","gone","wish","wine","gosh",2,"","","gosh-wine",1,87,2,5,0], // allWords 10: egos|goes|hogs|hong|nigh|owes|show|sigh|wise|woes
  ["snide-straw","snide","straw","edits","warns",5,"","","edits-warns",29], // allWords 17: anise|aster|diets|earns|nears|nerds|rates|sited|snare|stare|swain|tears|tides|waist|waits|warts|winds
  ["snake-storm","storm","snake","norms","takes",2,"","","norms-takes",7,87,2,5,0], // allWords 18: aster|earns|monks|nears|rates|senor|skate|smart|snare|sneak|snore|stake|stare|steak|stoke|store|tears|trams
  ["earl-shot","shot","earl","arts","hole",3,"","","arts-hole",10,82,3,6,0], // allWords 11: also|host|lars|lear|oats|rate|rats|real|star|tear|tsar
  ["kicks-roles","kicks","roles","corks","likes",4,"","","corks-likes",12,92,1,4,0], // allWords 6: cores|cries|loser|riles|rocks|score
  ["dash-tune","dash","tune","dean","thus",3,"","","dean-thus",10,92,1,4,0], // allWords 18: ante|dues|dune|east|eats|hand|hast|hats|hunt|huts|neat|nude|seat|shut|sued|teas|than|used
  ["drama-lemon","drama","lemon","moral","amend",4,"","","amend-moral",24], // allWords 11: adorn|alarm|alone|anode|demon|lemma|melon|molar|monde|named|radon
  ["pay-wag","pay","wag","gap","yaw",3,"","","gap-yaw",9], // allWords 2: way|yap
  ["fruit-pleas","fruit","pleas","fault","piers",4,"","","fault-piers",12], // allWords 34: after|false|fares|fears|fetal|files|filet|fires|fleas|flies|fries|lapse|leafs|leaps|leapt|pales|parse|pears|petal|piles|plate|pleat|plies|refit|safer|serif|spare|spear|spiel|spire|supra|taper|tripe|tulip
  ["scoop-shrew","scoop","shrew","crews","hoops",2,"","","crews-hoops",7,86,2,6,0], // allWords 8: corps|crops|crows|hopes|howes|scope|screw|whose
  ["cult-jobs","cult","jobs","cubs","jolt",2,"","","cubs-jolt",1], // allWords 2: clot|colt
  ["caper-towel","towel","caper","place","wrote",4,"","","place-wrote",24], // allWords 10: leapt|pacer|petal|plate|pleat|recap|taper|tower|trope|water
  ["acid-mall","acid","mall","call","amid",3,"","","amid-call",9,82,3,6,0], // allWords 4: clad|lima|maid|mail
  ["cute-soda","cute","soda","coat","sued",3,"","","coat-sued",9], // allWords 10: code|deco|does|dosa|dose|dues|oats|taco|toes|used
  ["elder-rover","elder","rover","order","lever",2,"","","lever-order",4,86,2,6,0], // allWords 2: erode|revel
  ["chip-gear","chip","gear","page","rich",3,"","","page-rich",19,87,2,5,0], // allWords 11: acre|arch|cape|care|chap|char|epic|pace|race|rage|rice
  ["sails-scare","scare","sails","arise","class",4,"","","arise-class",14], // allWords 13: acres|aisle|areas|cares|crass|cries|laces|races|raise|salsa|scale|scars|slice
  ["she-wit","wit","she","hew","its",2,"","","hew-its",8], // allWords 2: hes|sit
  ["bulk-test","bulk","test","belt","tusk",2,"","","belt-tusk",3], // allWords 3: best|bets|bust
  ["lion-rows","lion","rows","oils","worn",3,"","","oils-worn",8,92,1,4,0], // allWords 8: iron|lows|noir|nori|owls|slow|soil|solo
  ["shook-spell","shook","spell","shell","spook",1,"","","shell-spook",1], // allWords 13: hells|holes|hooks|loops|lopes|pokes|poles|polls|pools|sloop|slope|spoke|spool
  ["flit-once","flit","once","into","clef",4,"","","clef-into",14], // allWords 7: clot|colt|cone|file|fine|life|lift
  ["lanky-range","lanky","range","angry","ankle",2,"","","angry-ankle",6], // allWords 4: angel|anger|angle|glean
  ["toss-wily","wily","toss","sits","yowl",3,"","","sits-yowl",19,87,2,5,0], // allWords 9: list|lost|lots|lows|owls|slit|slot|slow|toys
  ["diary-prong","diary","prong","doing","parry",3,"","","doing-parry",11,92,1,4,0], // allWords 4: dairy|dingo|grand|randy
  ["cafe-mask","mask","cafe","fame","sack",3,"","","fame-sack",8], // allWords 7: aces|case|cask|face|mesa|same|seam
  ["comet-talon","comet","talon","lance","motto",5,"","","lance-motto",25], // allWords 13: clean|clone|colon|comte|latte|lotte|lotto|macon|matte|meant|tonal|total|totem
  ["eat-rid","rid","eat","die","tar",3,"","","die-tar",9], // allWords 5: art|ate|rat|tea|tie
  ["dewy-nuts","dewy","nuts","duty","news",2,"","","duty-news",2,92,1,4,0], // allWords 9: dust|nest|nets|sent|sewn|stud|stun|tens|tyne
  ["ghee-reed","reed","ghee","edge","here",3,"","","cannot be reversed",17,92,1,4,0], // allWords 2: deer|herd
  ["boats-hexes","hexes","boats","boxes","heats",2,"","","boxes-heats",1,92,1,4,0], // allWords 7: bates|beast|beats|boast|haste|hates|oaths
  ["fried-south","fried","south","drift","house",3,"","","drift-house",22], // allWords 17: douse|dries|durst|fired|firth|frith|heirs|hires|hoist|hurst|hurts|rides|shire|shirt|shout|sired|usher
  ["sale-sing","sing","sale","lies","nags",3,"","","lies-nags",14], // allWords 9: gals|isle|sane|sang|seal|sign|sine|slag|snag
  ["milk-nose","milk","nose","link","some",3,"leon","skim","link-some",8], // allWords 15: eons|kiln|lien|lime|line|lone|mile|mole|noel|ones|semi|sine|sink|skim|skin
  ["abide-death","abide","death","ahead","debit",3,"","","ahead-debit",11,92,1,4,0], // allWords 3: abate|habit|hated
  ["short-twins","short","twins","worst","hints",2,"","","hints-worst",7,92,1,4,0], // allWords 6: horst|shins|shirt|snows|towns|wrist
  ["rebel-wound","rebel","wound","below","under",4,"","","below-under",22], // allWords 7: blown|bored|bowed|bowel|breed|elbow|round
  ["did-pad","did","pad","dad","dip",3,"","","cannot be reversed",9,82,3,6,0], // allWords 1: add
  ["piled-viral","viral","piled","peril","valid",4,"","","peril-valid",12], // allWords 11: devil|diver|drive|lived|liver|pilar|plaid|pride|rapid|rival|villa
  ["hills-sweep","hills","sweep","isles","whelp",3,"","","isles-whelp",11,92,1,4,0], // allWords 9: piles|pills|plies|shill|sills|spiel|spill|weeps|welsh
  ["crud-loop","crud","loop","crop","loud",2,"","","cannot be reversed",1,87,2,5,0], // allWords 7: coop|cord|coup|lord|ludo|polo|pool
  ["gloss-tribe","gloss","tribe","bilge","sorts",5,"","","bilge-sorts",26,92,1,4,0], // allWords 19: biter|bolts|brits|globe|goers|gross|islet|lists|ogres|rites|slits|slots|stirs|stole|store|tiers|tiles|tires|tries
  ["ally-band","ally","band","ably","land",3,"","","ably-land",9], // allWords 2: bald|nada
  ["hard-role","hard","role","hold","rare",2,"","","hold-rare",2,92,1,4,0], // allWords 13: dahl|earl|hale|hare|heal|hear|hero|hole|lear|lord|lore|real|rear
  ["fatal-tower","fatal","tower","total","wafer",4,"","","total-wafer",16,87,2,5,0], // allWords 16: after|aloft|fetal|float|forte|latte|lotte|otter|tarot|tatar|tater|tetra|towel|treat|water|wrote
  ["easy-talk","easy","talk","leak","stay",2,"","","leak-stay",6], // allWords 4: kale|lake|sake|task
  ["medal-solar","solar","medal","realm","loads",5,"","","loads-realm",32], // allWords 15: armed|dales|dares|deals|dream|earls|laser|leads|madre|modal|molar|moral|reads|reals|roads
  ["nib-pod","nib","pod","bop","din",3,"","","bop-din",10], // allWords 4: bin|dip|don|nod
  ["blunt-tries","blunt","tries","burnt","tiles",2,"","","burnt-tiles",5,92,1,4,0], // allWords 17: biter|blues|brunt|brute|burns|islet|rebut|rites|runts|tiers|tires|title|tribe|trite|tuber|turns|utter
  ["aids-lamp","lamp","aids","paid","slam",2,"","","paid-slam",7,86,2,6,0], // allWords 8: aims|lads|lids|limp|palm|said|slid|slim
  ["actor-route","actor","route","acute","rotor",2,"","","acute-rotor",1,92,1,4,0], // allWords 6: cuter|otter|outer|tarot|tract|truce
  ["arson-three","arson","three","earns","other",3,"","","earns-other",22,92,1,4,0], // allWords 24: arose|erase|ester|ether|ethos|nears|north|rents|reset|retro|saree|sheet|snare|snort|sonar|steer|stern|store|terse|there|these|thorn|those|trees
  ["dawn-rise","dawn","rise","side","warn",3,"","","side-warn",8], // allWords 14: dies|ears|eras|sand|sera|sire|wade|wand|ware|wear|weir|wide|wind|wire
  ["teen-work","teen","work","torn","week",2,"","","torn-week",2,87,2,5,0], // allWords 8: keto|note|rent|tern|tone|trek|woke|worn
  ["cells-loyal","loyal","cells","local","yells",4,"","","local-yells",12,92,1,4,0], // allWords 7: alley|alloy|coals|laces|lacey|lolly|scale
  ["many-open","many","open","amen","pony",3,"","","amen-pony",9], // allWords 5: anon|mane|mean|name|nope
  ["deaf-seat","deaf","seat","date","safe",2,"","","date-safe",6], // allWords 4: east|eats|fade|teas
  ["air-met","air","met","rim","tea",3,"","","rim-tea",9,86,2,6,0], // allWords 6: are|ate|ear|eat|era|ria
  ["dense-pasta","dense","pasta","sedan","tapes",3,"","","sedan-tapes",19,87,2,5,0], // allWords 14: dates|deans|needs|panes|paste|seeds|seeps|septa|spate|stade|stead|steed|steep|tapas
  ["main-rude","rude","main","made","ruin",2,"","","made-ruin",1], // allWords 11: amin|dame|damn|dare|darn|dear|mead|mina|rain|rand|read
  ["vent-wage","wage","vent","gave","newt",3,"","","gave-newt",8], // allWords 5: anew|even|wane|want|went
  ["ideas-liars","liars","ideas","alias","rides",2,"","","alias-rides",6], // allWords 12: aides|aisle|aside|dales|deals|dries|leads|raids|rails|riles|salad|sired
  ["pool-true","true","pool","pure","tool",2,"","","pure-tool",8,87,2,5,0], // allWords 8: loop|loot|lout|polo|pore|repo|rope|tore
  ["surf-yaps","surf","yaps","fury","saps",3,"","","fury-saps",23], // allWords 4: fray|pass|pays|rays
  ["ashes-spoke","ashes","spoke","poses","shake",3,"","","poses-shake",10], // allWords 7: heaps|pesos|phase|pokes|posse|shape|sheep
  ["boom-pelt","boom","pelt","blot","poem",3,"","","blot-poem",9], // allWords 5: belt|bolt|boot|plot|poet
  ["nap-old","old","nap","and","lop",2,"","","and-lop",7], // allWords 1: pan
  ["gives-paper","paper","gives","pages","viper",4,"","","pages-viper",14], // allWords 7: giver|grape|grave|gripe|pager|piper|pipes
  ["kink-trap","kink","trap","knit","park",4,"","","cannot be reversed",23,92,1,4,0], // allWords 6: kart|part|pink|pint|pita|tarp
  ["filed-setup","filed","setup","fluid","steep",2,"","","fluid-steep",5], // allWords 18: diets|duels|duets|edits|field|peels|piles|plies|pulse|sited|sleep|slide|spiel|spite|steed|stipe|tides|upset
  ["obese-stump","obese","stump","buses","tempo",3,"","","buses-tempo",11], // allWords 9: bumps|meets|pesto|pests|poets|spout|steps|teems|temps
  ["mess-tank","mess","tank","mask","tens",2,"","","mask-tens",3], // allWords 8: ants|mans|mass|nest|nets|sent|sets|task
  ["loss-pile","loss","pile","lips","sole",3,"","","lips-sole",8], // allWords 7: isle|lies|lose|pies|pole|pose|slip
  ["slang-tutor","slang","tutor","gloat","runts",5,"","","gloat-runts",32], // allWords 9: gaunt|goals|gusto|snarl|solar|stung|tours|trout|turns
  ["chip-snug","snug","chip","chug","snip",2,"","","chug-snip",1,92,1,4,0], // allWords 15: gnus|guns|gush|hips|hugs|pins|puns|push|ship|sigh|sign|sing|spin|spun|sung
  ["arts-hire","arts","hire","rare","this",3,"","","rare-this",9,86,2,6,0], // allWords 11: airs|heir|hits|rate|rats|rear|sari|shri|star|tear|tsar
  ["gem-leg","gem","leg","egg","elm",2,"","","egg-elm",7], // allWords 2: gel|mel
  ["sheet-wrong","wrong","sheet","grown","these",2,"","","grown-these",19], // allWords 16: ester|ethos|goers|ogres|rents|reset|serge|snort|steer|stern|store|terse|those|tower|trees|wrote
  ["bait-bars","bait","bars","bias","brat",2,"","","bias-brat",5], // allWords 1: bras
  ["rinse-super","super","rinse","nurse","piers",4,"","","nurse-piers",22], // allWords 14: ensue|puree|purse|reins|rerun|resin|risen|runes|rupee|seine|siren|spies|spire|spurs
  ["agree-grant","grant","agree","great","range",2,"","","cannot be reversed",6,87,2,5,0], // allWords 6: agate|anger|arena|eager|grate|terra
  ["rode-told","rode","told","dote","lord",3,"","","dote-lord",8], // allWords 3: lore|redo|role
  ["souls-waved","waved","souls","saves","would",2,"","","saves-would",3], // allWords 6: douse|doves|saved|vases|vowed|waves
  ["codes-rocks","rocks","codes","cores","docks",3,"","","cores-docks",7,87,2,5,0], // allWords 5: corks|doers|dorks|doser|score
  ["lawn-sail","lawn","sail","laws","nail",3,"ians","wall","laws-nail",22,87,2,5,0], // allWords 3: awls|swan|wall
  ["ease-mild","mild","ease","same","lied",3,"","","lied-same",8], // allWords 16: dale|dams|deal|deli|dies|idle|lame|lead|lime|male|meal|mesa|mile|seam|semi|side
  ["ape-ivy","ape","ivy","vie","pay",2,"","","pay-vie",7,82,3,6,0], // allWords 5: ave|pea|pie|yap|yip
  ["deal-over","deal","over","deer","oval",2,"","","deer-oval",1,92,1,4,0], // allWords 9: aero|dale|dare|dear|lead|love|read|reed|rove
  ["neat-sour","neat","sour","earn","outs",2,"","","earn-outs",6], // allWords 17: ante|ears|east|eats|eras|near|oats|ours|ruse|seat|sera|soar|sure|teas|tune|unto|user
  ["paste-style","style","paste","petty","seals",4,"","","petty-seals",24,92,1,4,0], // allWords 15: asset|lapse|leaps|pales|pelts|pleas|sales|seats|septa|slept|spate|spelt|tapes|tests|yeast
  ["dibs-dude","dude","dibs","bide","duds",3,"","","cannot be reversed",8,86,2,6,0], // allWords 3: bids|buds|died
  ["foot-pigs","foot","pigs","oops","gift",4,"","","gift-oops",12], // allWords 1: figs
  ["tired-whale","tired","whale","tidal","where",3,"","","tidal-where",8], // allWords 10: death|ether|hated|lathe|there|three|tried|weird|wider|wired
  ["nifty-rider","nifty","rider","dirty","finer",4,"","","dirty-finer",11], // allWords 4: diner|drier|fiery|infer
  ["wash-yaks","yaks","wash","hawk","says",3,"","","hawk-says",21,86,2,6,0], // allWords 4: ashy|hays|shaw|shay
  ["proud-tales","proud","tales","plead","tours",3,"","","plead-tours",12], // allWords 23: adult|autos|dealt|delta|lapse|leaps|least|pales|pedal|pleas|pores|poser|pours|prose|roped|ropes|sault|slate|slurp|spore|stale|steal|store
  ["elk-eye","elk","eye","eel","key",2,"","","eel-key",8], // allWords 0
  ["posed-until","posed","until","spoil","tuned",3,"","","spoil-tuned",12,87,2,5,0], // allWords 14: depot|dopes|douse|dunes|lopes|louse|nudes|opted|outed|pilot|poles|polis|slope|spend
  ["cast-neck","neck","cast","cent","sack",3,"","","cent-sack",8,86,2,6,0], // allWords 10: acts|ants|cask|cats|nest|nets|sank|sect|sent|tens
  ["cigar-meats","cigar","meats","react","sigma",4,"","","react-sigma",26,92,1,4,0], // allWords 16: cages|carte|caste|cater|crate|gamer|games|grace|mages|marge|mates|steam|tamer|tames|teams|trace
  ["guise-rally","rally","guise","gully","raise",2,"","","gully-raise",1,92,1,4,0], // allWords 11: agile|arise|earls|gales|guile|laser|legal|lures|reals|rules|surly
  ["ghee-reds","reds","ghee","edge","hers",3,"","","edge-hers",9], // allWords 5: deer|herd|here|reed|rees
  ["song-unit","unit","song","sign","unto",3,"","","sign-unto",12,92,1,4,0], // allWords 4: sing|snog|tins|tons
  ["slain-spike","spike","slain","likes","pains",2,"","","likes-pains",7,87,2,5,0], // allWords 14: aisle|kilns|lakes|leaks|links|nails|peaks|pikes|pinks|sepia|slink|snail|spank|speak
  ["cage-spit","spit","cage","epic","tags",4,"","","epic-tags",23,86,2,6,0], // allWords 6: ages|pies|pits|sage|stag|tips
  ["keep-lane","keep","lane","knee","leap",3,"","","knee-leap",9,86,2,6,0], // allWords 8: keen|lean|pale|peak|peek|peel|plan|plea
  ["ice-odd","odd","ice","cod","die",2,"","","cod-die",6], // allWords 3: did|doc|doe
  ["gone-solo","gone","solo","logo","nose",3,"","","logo-nose",8], // allWords 6: eons|goon|lose|ones|sole|soon
  ["dust-toys","dust","toys","duty","toss",2,"","","duty-toss",6,87,2,5,0], // allWords 2: dots|stud
  ["hint-wake","hint","wake","hike","want",2,"","","hike-want",1], // allWords 7: anew|than|thin|twin|wane|weak|wine
  ["natal-yodel","natal","yodel","delay","talon",3,"","","delay-talon",18], // allWords 3: laden|olden|tonal
  ["pulse-raced","pulse","raced","cured","lapse",3,"","","cured-lapse",14], // allWords 30: acres|alder|cadre|capes|cards|cared|cares|cedar|crude|cures|curse|earls|laser|leaps|lured|lures|paced|paces|pales|peace|pedal|plead|pleas|races|reals|ruled|rules|scape|scare|space
  ["kind-rugs","kind","rugs","drug","skin",2,"","","drug-skin",7], // allWords 8: dunk|gird|grid|rigs|rind|runs|sink|sunk
  ["awful-laden","awful","laden","dwell","fauna",4,"","","dwell-fauna",20], // allWords 3: fella|ladle|waned
  ["blast-crest","blast","crest","belts","carts",3,"","","belts-carts",18], // allWords 2: brats|celts
  ["fad-goo","fad","goo","dog","oaf",3,"","","dog-oaf",10], // allWords 2: ago|god
  ["sets-talk","sets","talk","lets","task",4,"","","lets-task",13], // allWords 7: elks|last|less|lest|salt|stat|test
  ["blade-crane","blade","crane","bread","clean",2,"","","bread-clean",6], // allWords 11: bared|beard|cadre|cared|cedar|clade|decal|laced|lance|raced|rance
  ["beer-goji","beer","goji","ergo","jibe",4,"","","ergo-jibe",20,92,1,4,0], // allWords 5: bore|bree|gore|ogre|robe
  ["ought-since","since","ought","ounce","sight",2,"","","ounce-sight",1,92,1,4,0], // allWords 8: count|hints|hunts|shine|shunt|thugs|tonic|tough
  ["life-lord","life","lord","fold","rile",3,"","","fold-rile",9,85,2,7,0], // allWords 3: file|lore|role
  ["part-shut","part","shut","tarp","thus",2,"","","tarp-thus",19,70,5,10,0], // allWords 6: arts|huts|rats|star|trap|tsar
  ["peers-skits","peers","skits","perks","sites",2,"","","perks-sites",6,92,1,4,0], // allWords 9: piers|rises|risks|speer|spire|spite|spree|steep|stipe
  ["added-onset","added","onset","dated","nodes",4,"","","dated-nodes",22], // allWords 14: dates|deans|dosed|dotes|nosed|noted|notes|sedan|seton|stade|stead|stone|toned|tones
  ["cafe-rush","cafe","rush","fare","such",3,"","","fare-such",8], // allWords 13: aces|case|cash|cues|ears|eras|face|fear|rash|ruse|sera|sure|user
  ["one-rod","one","rod","nod","ore",2,"","","nod-ore",7], // allWords 2: don|eon
  ["coal-edit","coal","edit","lied","taco",3,"","","lied-taco",19,86,2,6,0], // allWords 13: clad|coat|coil|cola|dale|date|deal|deli|diet|idle|lead|tide|tied
  ["fuel-gate","fuel","gate","glue","feat",2,"","","feat-glue",7], // allWords 7: fate|feta|flat|flea|gale|glut|leaf
  ["fired-tests","fired","tests","deter","sifts",5,"","","deter-sifts",34,92,1,4,0], // allWords 31: defer|diets|drift|edits|ester|feeds|fires|first|fists|freed|frees|frets|fried|fries|reefs|reset|rifts|rites|serif|sited|sites|steed|steer|terse|tides|tiers|tired|tires|trees|tried|tries
  ["roles-tiger","tiger","roles","roger","tiles",2,"","","roger-tiles",1], // allWords 6: goers|islet|loser|ogres|riles|stole
  ["bent-made","bent","made","debt","name",3,"","","debt-name",9,82,3,6,0], // allWords 10: amen|bane|bead|bean|been|dame|deem|mane|mead|mean
  ["bases-tempo","tempo","bases","stamp","obese",3,"","","obese-stamp",11,86,2,6,0], // allWords 17: asset|beams|mates|meats|meets|pasts|pesto|pests|poets|seats|spats|steam|steps|tames|teams|teems|temps
  ["poker-sense","poker","sense","prone","seeks",2,"","","prone-seeks",7,92,1,4,0], // allWords 12: keeps|noses|opens|peeks|perks|pokes|reeks|senor|sneer|snore|spoke|spork
  ["near-raid","near","raid","dear","rain",4,"","","dear-rain",23], // allWords 12: arid|dare|dean|dine|dire|earn|nada|rare|read|rear|rein|ride
  ["lunch-share","lunch","share","harsh","uncle",2,"","","harsh-uncle",6], // allWords 10: aches|cause|chase|hares|hears|leach|nurse|runes|sauce|shear
  ["guy-set","set","guy","tug","yes",3,"","","tug-yes",10,87,2,5,0], // allWords 2: get|gut
  ["lace-sulk","lace","sulk","luck","sale",2,"","","luck-sale",3,92,1,4,0], // allWords 9: aces|case|cask|clue|cues|lack|sack|seal|suck
  ["able-seen","seen","able","bean","else",3,"","","bean-else",10,87,2,5,0], // allWords 7: bale|bane|bees|eels|lane|lean|lens
  ["gripe-lingo","gripe","lingo","going","peril",4,"","","going-peril",25], // allWords 1: prong
  ["joint-salts","joint","salts","jolts","saint",2,"","","jolts-saint",1,92,1,4,0], // allWords 8: joins|joist|lasts|satin|slant|slats|slots|stain
  ["flee-nova","flee","nova","leaf","oven",2,"","","leaf-oven",6], // allWords 4: feel|flea|lane|lean
  ["tapas-tapes","tapas","tapes","pasta","paste",3,"","","cannot be reversed",17,82,3,6,0], // allWords 2: septa|spate
  ["info-root","root","info","roof","into",3,"","","into-roof",9,87,2,5,0], // allWords 3: fort|torn|toro
  ["caper-lyric","caper","lyric","circa","reply",5,"","","circa-reply",24,92,1,4,0], // allWords 9: carer|clear|pacer|paler|pearl|pilar|place|racer|recap
  ["scene-spill","scene","spill","cells","pines",3,"","","cells-pines",8], // allWords 11: peels|piles|pills|plies|since|sleep|slice|snipe|spell|spiel|spine
  ["bop-gem","gem","bop","mob","peg",3,"","","mob-peg",10,92,1,4,0], // allWords 0
  ["fiery-sorts","fiery","sorts","fries","story",2,"","","fries-story",8,92,1,4,0], // allWords 14: fires|first|forts|forty|foyer|frost|rifts|rises|roses|serif|sites|sores|sorry|stirs
  ["demo-done","demo","done","mood","need",3,"","","mood-need",14], // allWords 5: deem|dome|doom|mode|node
  ["acts-rats","rats","acts","cats","arts",1,"","","arts-cats",3,71,5,9,0], // allWords 3: cast|star|tsar
  ["alert-truce","truce","alert","erect","ultra",4,"","","erect-ultra",13], // allWords 11: alter|carte|cater|crate|cuter|elect|later|react|terra|trace|truer
  ["grid-poll","grid","poll","plod","girl",2,"","","girl-plod",6], // allWords 3: drip|gird|gold
  ["glow-hand","glow","hand","gnaw","hold",3,"","","gnaw-hold",9,87,2,5,0], // allWords 4: dang|gold|howl|whoa
  ["siren-viral","viral","siren","rival","risen",2,"","","risen-rival",3], // allWords 10: liars|liver|rails|rains|reins|resin|riles|rinse|riven|sarin
  ["salon-solid","solid","salon","lions","loads",3,"","","lions-loads",20], // allWords 8: dials|idols|loans|loins|nails|slain|snail|solon
  ["new-sad","new","sad","den","was",3,"","","den-was",10], // allWords 5: ads|and|end|saw|wan
  ["folk-mice","folk","mice","file","mock",2,"","","file-mock",3], // allWords 6: come|life|lime|mile|milk|mole
  ["renew-timer","timer","renew","merit","newer",2,"","","merit-newer",14], // allWords 9: enter|inert|inter|meter|metre|mitre|remit|tween|twine
  ["dried-hairy","hairy","dried","diary","hired",2,"","","diary-hired",7], // allWords 2: aided|dairy
  ["chug-team","team","chug","gate","much",3,"","","gate-much",19,92,1,4,0], // allWords 11: cage|came|mace|mach|mate|math|meat|meta|mute|tame|thug
  ["early-rated","early","rated","relay","tread",2,"","","relay-tread",16,92,1,4,0], // allWords 8: alder|dealt|delta|eared|layer|leary|teary|trade
  ["mail-road","mail","road","amid","oral",2,"","","amid-oral",9], // allWords 12: alma|arid|lair|lama|liar|lima|limo|maid|milo|modi|raid|rail
  ["here-kids","kids","here","dish","reek",3,"","","dish-reek",10], // allWords 12: desk|disk|heed|heir|hers|hide|hire|kris|risk|shed|shri|skid
  ["pouch-slate","pouch","slate","place","south",2,"","","place-south",3], // allWords 19: chaos|clash|clues|coupe|halts|laces|leapt|least|oaths|petal|plate|pleat|poach|scale|shalt|shout|stale|steal|tales
  ["kill-lime","kill","lime","like","mill",3,"","","like-mill",8,85,2,7,0], // allWords 2: mile|milk
  ["out-sir","sir","out","our","sit",1,"","","our-sit",0], // allWords 2: its|sri
  ["area-ride","area","ride","idea","rear",2,"","","idea-rear",7,87,2,5,0], // allWords 8: aide|arid|dare|dear|dire|raid|rare|read
  ["rank-wild","wild","rank","rind","walk",2,"","","rind-walk",3,92,1,4,0], // allWords 8: darn|dawn|lark|rand|rink|wand|wind|wink
  ["chain-seems","chain","seems","niece","smash",5,"","","niece-smash",29,92,1,4,0], // allWords 12: anise|chasm|china|masse|means|mensa|names|niche|seams|seine|shams|shine
  ["binge-tasty","tasty","binge","beast","tying",3,"","","beast-tying",10], // allWords 15: agent|bates|beats|began|begin|being|bites|gates|natty|nitty|stage|state|tangy|taste|tinge
  ["cube-lead","lead","cube","aced","blue",2,"","","aced-blue",6], // allWords 5: bled|dale|deal|dual|lube
  ["crews-setup","setup","crews","curse","swept",3,"","","curse-swept",19,92,1,4,0], // allWords 13: crust|cures|purse|screw|spurt|stews|super|sweep|truss|upset|users|weeps|wests
  ["sworn-tears","sworn","tears","earns","worst",3,"","","earns-worst",9,87,2,5,0], // allWords 16: aster|nears|rates|roses|sears|senor|snare|snore|sores|stare|store|straw|tenor|toner|warns|warts
  ["pink-wolf","pink","wolf","flip","know",5,"","","flip-know",26], // allWords 3: flop|flow|wink
  ["edges-trawl","trawl","edges","ledge","straw",2,"","","ledge-straw",6,85,2,7,0], // allWords 22: alert|alter|aster|dates|dealt|delta|eased|erase|later|leger|rates|saree|sawed|serge|stade|stare|stead|swear|tears|wares|warts|wears
  ["guy-wet","wet","guy","tug","yew",3,"","","tug-yew",10,87,2,5,0], // allWords 2: get|gut
  ["later-ounce","ounce","later","lance","outer",2,"","","lance-outer",1], // allWords 13: acorn|actor|alert|alter|canoe|clean|court|learn|ocean|renal|rouen|route|uncle
  ["moss-sole","moss","sole","some","loss",3,"","","loss-some",8], // allWords 2: lose|mole
  ["sofa-teen","teen","sofa","feat","eons",4,"","","eons-feat",14], // allWords 10: ease|fate|feta|font|nose|note|ones|safe|seen|tone
  ["artsy-fifth","artsy","fifth","trash","fifty",3,"","","fifty-trash",10,92,1,4,0], // allWords 5: faith|saith|shift|stray|trays
  ["makes-pleas","pleas","makes","males","peaks",2,"","","males-peaks",6], // allWords 8: lapse|leaps|meals|pales|pease|peels|sleep|speak
  ["acts-sure","sure","acts","user","cast",2,"","","cast-user",16,87,2,5,0], // allWords 9: acre|arcs|care|cars|cats|race|ruse|scar|sect
  ["nude-sets","nude","sets","nest","sued",2,"","","nest-sued",9], // allWords 15: dues|dune|ends|need|nets|nuts|seed|send|sent|stun|teen|tees|tens|tune|used
  ["drops-sense","drops","sense","prose","sends",4,"","","cannot be reversed",26,92,1,4,0], // allWords 19: dense|doers|dopes|doser|doses|needs|nerds|pesos|pores|posed|poser|poses|posse|roped|ropes|roses|sores|spend|spore
  ["fake-grew","fake","grew","free","gawk",3,"","","free-gawk",12,87,2,5,0], // allWords 2: reef|wage
  ["her-one","her","one","ore","hen",2,"","","hen-ore",9], // allWords 2: eon|nor
  ["join-rats","rats","join","jots","rain",2,"","","jots-rain",1,92,1,4,0], // allWords 11: airs|arts|iron|noir|nori|rant|sari|sort|star|torn|tsar
  ["rises-threw","rises","threw","rites","shrew",4,"","","rites-shrew",12,92,1,4,0], // allWords 9: riser|sites|tiers|tires|tries|weirs|wires|wiser|write
  ["acre-item","acre","item","came","tier",4,"eric","meat","came-tier",21,87,2,5,0], // allWords 21: care|cram|emit|mace|mart|mate|meat|meta|mice|mite|race|rate|rice|rite|tame|team|tear|time|tire|tram|trim
  ["lawn-risk","lawn","risk","silk","warn",3,"","","silk-warn",8], // allWords 2: kris|walk
  ["baron-stale","stale","baron","arson","table",2,"","","arson-table",6], // allWords 18: arose|banal|baton|bleat|earls|laser|least|nasal|reals|santo|slant|slate|snarl|snort|sonar|steal|store|tales
  ["baby-nope","baby","nope","babe","pony",3,"","","cannot be reversed",8,82,3,6,0], // allWords 5: bane|bean|bone|bony|open
  ["rotor-timed","timed","rotor","motor","tired",4,"","","cannot be reversed",12,92,1,4,0], // allWords 12: ditto|merit|metro|mired|mitre|otter|remit|retro|timer|tried|trier|trite
  ["fold-pelt","fold","pelt","fled","plot",2,"","","fled-plot",6,92,1,4,0], // allWords 4: felt|left|loft|plod
  ["shots-tenor","tenor","shots","rents","shoot",4,"","","rents-shoot",25], // allWords 23: horns|horst|hosts|nests|north|noses|notes|onset|ortho|otter|senor|seton|short|snore|stent|stern|stone|store|tents|thorn|toner|tones|totes
  ["ass-pug","ass","pug","sag","ups",2,"","","sag-ups",7,87,2,5,0], // allWords 1: gas
  ["hags-pill","hags","pill","hall","pigs",2,"","","hall-pigs",1,92,1,4,0], // allWords 11: alps|gaps|gasp|hill|laps|lash|lips|pals|sigh|slap|slip
  ["grown-heals","grown","heals","leash","wrong",2,"","","leash-wrong",19,86,2,6,0], // allWords 11: angel|angle|gales|glean|grows|hales|holes|howes|shale|wages|whose
  ["levy-rile","levy","rile","live","rely",2,"","","live-rely",3,87,2,5,0], // allWords 8: ever|evil|leer|reel|veil|very|vile|yell
  ["seven-tract","tract","seven","carts","event",4,"","","cannot be reversed",28,92,1,4,0], // allWords 16: aster|canes|caste|earns|eaten|enact|evens|nears|rates|snare|stare|tater|tears|tease|tetra|treat
  ["poor-tail","poor","tail","pair","tool",2,"","","pair-tool",2], // allWords 12: alto|loop|loot|opal|polo|pool|riot|root|roti|tori|toro|trio
  ["ages-tour","ages","tour","gear","outs",2,"","","gear-outs",7], // allWords 9: aero|gets|gust|guts|rage|ragu|sage|toes|tore
  ["puppy-rinse","puppy","rinse","purse","nippy",4,"","","nippy-purse",15], // allWords 19: nurse|piers|pines|piper|pipes|prune|reins|resin|ripen|risen|runes|siren|snipe|spine|spiny|spire|super|syrup|upper
  ["eaten-liars","eaten","liars","alien","tears",3,"","","cannot be reversed",12,92,1,4,0], // allWords 24: aisle|areas|arena|arise|aster|inert|inlet|inter|islet|least|rails|raise|rates|rites|slate|stale|stare|steal|tales|tease|tiers|tiles|tires|tries
  ["blobs-write","blobs","write","blows","tribe",3,"","","blows-tribe",22,92,1,4,0], // allWords 16: below|bible|biter|bolts|bowel|bower|bowls|bribe|brits|brows|elbow|towel|tower|worst|wrist|wrote
  ["pan-rue","pan","rue","ape","urn",2,"","","ape-urn",7], // allWords 8: are|ear|era|nap|pea|pun|ran|run
  ["front-prize","front","prize","froze","print",2,"","","froze-print",1,92,1,4,0], // allWords 5: finer|fritz|infer|prone|ripen
  ["fact-newt","fact","newt","cent","waft",3,"","","cent-waft",9,87,2,5,0], // allWords 2: want|went
  ["earth-weeds","earth","weeds","heard","sweet",2,"","","heard-sweet",7,87,2,5,0], // allWords 32: aster|dares|draws|eased|ester|ether|hater|heart|rates|reads|reeds|reset|sawed|sewed|stare|steer|straw|sweat|swede|tears|tease|terse|there|three|threw|trees|wards|warts|waste|wheat|wrath|wrest
  ["acid-dash","acid","dash","chai","adds",3,"","","adds-chai",16], // allWords 2: cash|dads
  ["ships-skate","ships","skate","shape","skits",2,"","","shape-skits",3], // allWords 17: haste|hates|heaps|heats|heist|kites|peaks|phase|pikes|skips|speak|spike|stake|stash|steak|takes|tasks
  ["shore-snide","snide","shore","hires","nodes",2,"","","hires-nodes",7], // allWords 13: heirs|heros|hides|horse|nosed|reins|resin|rinse|risen|senor|shire|siren|snore
  ["link-meat","meat","link","leak","mint",2,"","","leak-mint",2], // allWords 16: kale|kiln|lake|late|lent|lint|make|maki|mate|meta|mink|tail|tale|tame|teal|team
  ["ally-note","ally","note","late","only",3,"","","late-only",9,81,3,7,0], // allWords 6: lent|lone|noel|tale|teal|tone
  ["grip-knew","grip","knew","perk","wing",5,"","","perk-wing",26,92,1,4,0], // allWords 4: grew|ping|pink|wink
  ["rod-yep","rod","yep","dye","pro",2,"","","dye-pro",8], // allWords 2: per|red
  ["film-past","past","film","fist","palm",2,"","","fist-palm",1,92,1,4,0], // allWords 18: amps|fast|fats|fits|flat|flit|lamp|lift|limp|maps|pats|pits|plat|sift|spat|spit|taps|tips
  ["ashes-craft","craft","ashes","races","shaft",3,"","","races-shaft",10], // allWords 25: acres|areas|cares|carte|cases|caste|cater|chess|chest|crate|earth|facts|hares|haste|hater|hates|hears|heart|heats|react|scare|scarf|share|shear|trace
  ["agony-rites","agony","rites","gates","irony",3,"","","gates-irony",8,86,2,6,0], // allWords 12: angst|goers|irons|ogres|saint|satin|stage|stain|tangy|tiers|tires|tries
  ["hers-unit","unit","hers","sure","thin",3,"","","sure-thin",21,92,1,4,0], // allWords 8: hint|runs|runt|ruse|shin|true|turn|user
  ["creed-their","their","creed","cheer","tried",3,"","","cheer-tried",11], // allWords 9: chide|cider|cried|deter|ether|there|three|tired|trier
  ["made-toes","made","toes","dome","eats",3,"","","dome-eats",15], // allWords 16: dame|dams|date|demo|dote|dots|east|mead|mesa|mode|mods|same|seam|seat|some|teas
  ["kind-owns","kind","owns","down","skin",2,"","","down-skin",7], // allWords 3: ions|sink|snow
  ["sheep-walls","sheep","walls","sales","whelp",2,"","","sales-whelp",3], // allWords 9: eases|helps|lapse|leaps|pales|pease|pleas|seals|welsh
  ["oils-slap","oils","slap","also","lips",4,"","","also-lips",13], // allWords 7: alps|laps|opal|pals|poll|slip|soil
  ["don-law","don","law","and","owl",2,"dan","low","and-owl",9], // allWords 3: awl|low|nod
  ["fatal-nasty","fatal","nasty","nasal","fatty",2,"","","fatty-nasal",1,92,1,4,0], // allWords 4: flats|natal|natty|slant
  ["alert-study","alert","study","rusty","dealt",3,"","","dealt-rusty",18,82,3,6,0], // allWords 20: adult|alter|delay|delta|dusty|early|later|layer|leary|relay|strut|sturt|surly|tater|teary|tetra|treat|trust|tyres|ultra
  ["cask-guns","cask","guns","suck","nags",3,"","","nags-suck",15,80,3,8,0], // allWords 10: cans|cuss|gnus|gunk|sack|sang|scan|snag|snug|sung
  ["loopy-traps","loopy","traps","party","pools",4,"","","cannot be reversed",22,92,1,4,0], // allWords 9: loops|parts|ports|prost|sloop|spool|sport|stoop|strap
  ["cute-read","cute","read","true","aced",2,"","","aced-true",6], // allWords 5: dare|dear|duct|tree|turd
  ["nails-stake","nails","stake","tanks","aisle",3,"","","aisle-tanks",12], // allWords 30: alien|inlet|islet|kites|knits|lasts|least|lists|nasal|sails|salsa|salts|skate|skits|slain|slant|slate|slats|slits|snail|stale|stank|steak|steal|stink|taken|takes|tales|tasks|tiles
  ["base-same","same","base","beam","seas",2,"","","beam-seas",7,92,1,4,0], // allWords 2: mesa|seam
  ["gosh-peel","peel","gosh","hope","legs",4,"","","hope-legs",23,92,1,4,0], // allWords 9: ghee|glee|hogs|hops|logs|pole|posh|shop|slog
  ["fog-oaf","fog","oaf","ago","off",2,"","","ago-off",7], // allWords 1: goo
  ["adult-faded","faded","adult","added","fault",2,"","","added-fault",1], // allWords 2: dated|fated
  ["cars-nice","nice","cars","rice","cans",4,"eric","scan","cans-rice",13], // allWords 11: acne|acre|arcs|cane|care|earn|near|race|rein|scan|scar
  ["bops-soft","soft","bops","fobs","post",3,"","","fobs-post",9,82,3,6,0], // allWords 4: pots|spot|stop|tops
  ["clubs-grape","grape","clubs","brace","plugs",4,"","","brace-plugs",26], // allWords 24: bagel|barge|brags|bugle|bulge|cable|caper|carbs|claps|clasp|crabs|craps|curbs|gable|grabs|grasp|pacer|pager|place|purge|recap|scalp|scrap|scrub
  ["dull-soda","dull","soda","sold","dual",2,"","","dual-sold",5], // allWords 6: also|doll|dosa|load|olds|saul
  ["edges-reset","reset","edges","greet","seeds",3,"","","greet-seeds",19,87,2,5,0], // allWords 9: dregs|dress|ester|geese|serge|steed|steer|terse|trees
  ["taco-tons","taco","tons","acts","onto",2,"","","acts-onto",7], // allWords 6: ants|cast|cats|coat|cost|scot
  ["clink-veers","clink","veers","clerk","veins",2,"","","clerk-veins",2], // allWords 11: ceres|creek|cries|evens|scene|serve|seven|sever|since|verse|vines
  ["goats-stole","stole","goats","taste","logos",4,"","","logos-taste",22,92,1,4,0], // allWords 16: goals|lasso|lasts|least|loose|salts|slate|slats|slots|solos|stale|state|stats|steal|tales|totes
  ["ice-old","old","ice","cod","lie",2,"","","cod-lie",6], // allWords 2: doc|lid
  ["lady-tick","lady","tick","tidy","lack",2,"","","lack-tidy",1], // allWords 6: city|clay|idly|lacy|lick|tack
  ["ember-noise","ember","noise","miner","obese",3,"","","miner-obese",9], // allWords 8: boner|bones|bores|borne|irons|mines|robes|sober
  ["hides-lines","hides","lines","shine","slide",2,"","","shine-slide",5], // allWords 1: liens
  ["feed-grab","feed","grab","beef","drag",3,"","","cannot be reversed",23,92,1,4,0], // allWords 7: aged|berg|brag|deaf|edge|fade|grad
  ["milk-sent","milk","sent","melt","sink",2,"","","melt-sink",3], // allWords 13: elks|lest|lets|list|mink|mint|nest|nets|silk|skin|slit|tens|tins
  ["share-wakes","share","wakes","askew","hears",2,"","","askew-hears",19], // allWords 8: areas|ashes|aware|hares|rakes|sakes|shear|wreak
  ["crash-loses","crash","loses","acres","slosh",3,"","","acres-slosh",12,92,1,4,0], // allWords 17: cares|chaos|chose|crass|cress|earls|halos|holes|laser|lasso|races|reach|reals|scare|scars|shoal|soles
  ["fear-trim","fear","trim","farm","tier",3,"","","farm-tier",9], // allWords 20: emit|fame|fare|fire|firm|item|mart|mate|meat|meta|mite|rate|rife|rite|tame|team|tear|time|tire|tram
  ["force-metre","force","metre","comet","refer",5,"","","comet-refer",29,92,1,4,0], // allWords 7: comer|comte|creme|forte|freer|meter|metro
  ["eel-fat","fat","eel","ate","elf",2,"","","cannot be reversed",8,82,3,6,0], // allWords 3: eat|tea|tee
  ["glad-lout","glad","lout","load","glut",2,"","","glut-load",1,92,1,4,0], // allWords 7: alto|dull|goat|loud|ludo|tall|toga
  ["ether-spies","ether","spies","piers","these",2,"","","piers-these",5], // allWords 10: rites|sheep|sheet|sites|spire|there|three|tiers|tires|tries
  ["lake-slim","slim","lake","elks","mail",4,"","","elks-mail",26], // allWords 9: aims|isle|kale|leak|lies|lima|mask|mill|sake
  ["cited-souls","cited","souls","could","sites",2,"","","could-sites",3,92,1,4,0], // allWords 18: cites|clots|cloud|colts|diets|dotes|douse|edict|edits|issue|lists|locus|lucid|sited|slits|slots|sulci|tides
  ["bare-rule","bare","rule","lube","rare",3,"","","lube-rare",8], // allWords 9: able|bale|bear|blue|earl|lear|lure|real|rear
  ["gloat-press","gloat","press","gross","pleat",2,"","","gross-pleat",3,92,1,4,0], // allWords 28: gales|gator|gears|gloss|goals|grate|great|lapse|leaps|leapt|pales|parse|pears|pelts|petal|plate|pleas|plots|ports|prost|rages|slept|spare|spear|spelt|sport|strep|taper
  ["cover-tasks","cover","tasks","sacks","voter",3,"","","sacks-voter",7], // allWords 31: acres|asset|aster|avert|cares|carve|cases|casks|caves|cores|corks|crave|karts|overt|races|racks|rates|rocks|scare|score|seats|socks|stare|stark|stave|store|stork|stove|tears|trove|votes
  ["grass-winds","grass","winds","draws","sings",4,"","","draws-sings",22], // allWords 5: dings|drags|grads|signs|wards
  ["dip-top","dip","top","pit","pod",3,"","","pit-pod",9,87,2,5,0], // allWords 3: opt|pot|tip
  ["bond-salt","bond","salt","bolt","sand",2,"","","bolt-sand",1], // allWords 15: ants|bald|band|blot|bold|dons|lads|last|lost|lots|nods|olds|slot|sold|tons
  ["coral-diver","coral","diver","rider","vocal",3,"","","rider-vocal",8,87,2,5,0], // allWords 18: carol|clove|cover|crore|devil|drier|drive|drove|laird|lidar|lived|loved|older|order|relic|riled|valid|vicar
  ["arts-pine","pine","arts","earn","spit",3,"","","earn-spit",9], // allWords 11: near|pins|pits|rate|rats|snip|spin|star|tear|tips|tsar
  ["fast-pole","fast","pole","leaf","stop",4,"","","leaf-stop",21,92,1,4,0], // allWords 23: apes|fats|flat|flea|foes|leap|loft|pale|past|pats|peas|plat|plea|plot|pose|post|pots|safe|soft|spat|spot|taps|tops
  ["bendy-plane","bendy","plane","blade","penny",2,"","","blade-penny",3,92,1,4,0], // allWords 8: badly|benny|blend|panel|payed|pedal|penal|plead
  ["lands-outer","outer","lands","round","slate",3,"","","round-slate",10,92,1,4,0], // allWords 17: adorn|alert|alter|lanes|later|leans|learn|least|radon|renal|rouen|route|sound|stale|steal|tales|toads
  ["grip-soon","grip","soon","ring","oops",2,"","","oops-ring",6], // allWords 6: goon|grin|ions|prog|pros|rips
  ["birth-sober","birth","sober","short","bribe",3,"","","bribe-short",9], // allWords 14: bores|brits|broth|heirs|heros|hires|horse|horst|riser|robes|shire|shirt|shore|throb
  ["decor-spend","decor","spend","corps","ended",4,"","","corps-ended",22], // allWords 21: coded|coder|codes|cores|credo|crops|dense|doped|dopes|ender|erode|needs|pores|posed|poser|prose|roped|ropes|score|sneer|spore
  ["wag-yap","yap","wag","gay","paw",3,"","","gay-paw",9], // allWords 1: pay
  ["fish-hull","fish","hull","fill","hush",2,"","","fill-hush",1], // allWords 3: full|hill|lush
  ["facts-tiger","tiger","facts","cater","gifts",4,"","","cater-gifts",15], // allWords 18: cafes|carte|caste|cites|craft|crate|faces|farce|gates|graft|grate|great|grief|grift|react|stage|trace|tract
  ["gases-taste","taste","gases","seats","stage",3,"","","seats-stage",18,87,2,5,0], // allWords 6: asset|gates|sages|state|stats|tease
  ["beat-whip","beat","whip","bath","wipe",2,"","","bath-wipe",7], // allWords 7: abet|beta|bite|thaw|what|whit|with
  ["head-tiny","tiny","head","dint","yeah",3,"","","dint-yeah",23], // allWords 5: date|dent|hind|tend|tyne
  ["dodge-tires","tires","dodge","dotes","ridge",4,"","","cannot be reversed",15,81,3,7,0], // allWords 20: diets|doers|dosed|doser|dries|edits|erode|grids|grist|grits|rides|rites|sided|sired|sited|store|tides|tiers|tiger|tries
  ["rolls-toned","rolls","toned","droll","stone",2,"","","droll-stone",6], // allWords 13: drone|loser|noted|notes|older|onset|roles|senor|seton|snore|stole|tolls|tones
  ["case-rugs","case","rugs","cuss","rage",2,"","","cuss-rage",3,92,1,4,0], // allWords 12: aces|cage|cues|ears|eras|gear|rags|ruse|sera|sure|urge|user
  ["liked-swell","swell","liked","dwell","likes",4,"","","dwell-likes",14], // allWords 10: kills|lisle|sewed|skied|skill|slide|swede|weeds|welds|wells
  ["bus-ewe","ewe","bus","use","web",2,"","","cannot be reversed",8,81,3,7,0], // allWords 3: sub|sue|wee
  ["beds-bite","bite","beds","bets","bide",1,"","","bets-bide",1,87,2,5,0], // allWords 4: best|bids|bits|dibs
  ["shiv-tent","tent","shiv","this","vent",3,"","","this-vent",23,92,1,4,0], // allWords 7: hits|nest|nets|sent|site|tens|ties
  ["space-train","space","train","races","paint",2,"spain","trace","paint-races",7,82,3,6,0], // allWords 18: acres|arise|capes|cares|carte|cater|crate|irate|paces|pains|rains|raise|react|sarin|scape|scare|sepia|trace
  ["brink-cards","brink","cards","birds","crank",3,"","","birds-crank",9], // allWords 4: acids|bards|barns|basin
  ["fate-miff","fate","miff","fame","tiff",4,"","","fame-tiff",13], // allWords 12: emit|feat|feta|fife|item|mate|meat|meta|mite|tame|team|time
  ["gold-lots","gold","lots","logs","told",3,"","","logs-told",8,79,3,9,0], // allWords 4: doll|lost|slog|slot
  ["genes-strip","strip","genes","peers","sting",5,"","","peers-sting",29], // allWords 22: gents|gripe|grist|grits|nests|piers|pines|pints|rests|rises|sense|serge|singe|snipe|speer|spent|spine|spire|spree|stirs|strep|trips
  ["look-mind","mind","look","link","mood",2,"","","link-mood",2], // allWords 7: doom|idol|kiln|kilo|mink|modi|monk
  ["mango-wills","mango","wills","owing","small",3,"","","owing-small",8], // allWords 11: aglow|allow|among|lawns|malls|mills|swill|swing|wagon|walls|wings
  ["ask-rip","ask","rip","irk","sap",2,"","","irk-sap",7,81,3,7,0], // allWords 1: spa
  ["patch-witty","witty","patch","patty","witch",2,"","","patty-witch",1,92,1,4,0], // allWords 2: pitch|watch
  ["edged-resin","resin","edged","genre","sided",4,"","","genre-sided",22,92,1,4,0], // allWords 22: deeds|dense|dries|genie|greed|green|grind|needs|nerds|reeds|reign|reins|rides|ridge|rinds|rinse|risen|seine|sired|siren|sneer|snide
  ["drop-isle","drop","isle","slip","rode",2,"","","rode-slip",7], // allWords 9: does|dose|lies|lips|pods|prod|redo|rile|sled
  ["term-unit","term","unit","item","runt",2,"","","item-runt",7], // allWords 7: emit|mint|mite|time|tint|true|turn
  ["linen-wears","linen","wears","learn","wines",2,"","","learn-wines",3], // allWords 15: aisle|alien|earls|easel|laser|lease|liars|liens|lines|rails|reals|renal|swear|swine|wares
  ["raids-scope","raids","scope","aside","crops",3,"","","aside-crops",11], // allWords 24: adore|aides|aired|cider|coder|codes|cords|corps|credo|cried|crisp|decor|discs|epics|ideas|opera|pairs|price|roads|scrip|sepia|soaps|sodas|spice
  ["drew-tear","tear","drew","reed","wart",5,"","","reed-wart",26,92,1,4,0], // allWords 10: dare|dear|deer|draw|rate|read|tree|wade|ward|weed
  ["farm-fool","fool","farm","foal","from",2,"","","foal-from",6,86,2,6,0], // allWords 4: foam|form|loaf|rolf
  ["moss-nose","moss","nose","some","sons",3,"","","cannot be reversed",8,81,3,7,0], // allWords 2: eons|ones
  ["bob-tar","bob","tar","bat","rob",3,"","","cannot be reversed",10,81,3,7,0], // allWords 9: art|bar|bot|bra|bro|orb|rat|rot|tab
  ["glove-probe","glove","probe","globe","prove",1,"","","globe-prove",1], // allWords 1: grove
  ["rogue-spent","spent","rogue","purge","onset",3,"","","onset-purge",17], // allWords 18: erupt|goner|grout|gusto|notes|outer|puree|rouge|route|rupee|seton|setup|stone|tenor|toner|tones|tongs|upset
  ["iron-once","iron","once","noon","rice",3,"","","noon-rice",9,92,1,4,0], // allWords 7: cone|conn|core|corn|nice|noir|nori
  ["chin-saga","chin","saga","chai","sang",2,"","","chai-sang",5], // allWords 6: cain|hags|inch|nags|shin|snag
  ["great-house","great","house","agree","shout",2,"","","agree-shout",8,76,4,8,0], // allWords 19: argue|auger|eager|earth|ethos|grate|gusto|hater|heart|heres|hurst|hurts|serge|sheer|south|surge|those|urges|usher
  ["later-sells","sells","later","laser","tells",4,"","","cannot be reversed",12,85,2,7,0], // allWords 30: alert|alter|asset|aster|earls|ester|lasts|least|leers|rates|reals|reels|reset|sales|salts|seals|seats|slate|slats|sleet|stale|stall|stare|steal|steel|steer|tales|tears|terse|trees
  ["deal-torn","torn","deal","lord","neat",4,"","","lord-neat",23,87,2,5,0], // allWords 12: alto|ante|dale|dean|late|lead|load|nerd|rent|tale|teal|tern
  ["cloak-stern","stern","cloak","clean","stork",2,"","","clean-stork",3], // allWords 17: canto|clerk|enact|lakes|lance|lanes|leaks|leans|loans|rents|salon|santo|skate|snort|stake|steak|takes
  ["lace-sift","sift","lace","cast","file",4,"","","cast-file",12], // allWords 16: aces|acts|case|cats|fast|fats|fist|fits|flat|flea|flit|leaf|lice|life|lift|safe
  ["row-won","row","won","nor","wow",3,"","","nor-wow",9], // allWords 2: now|own
  ["boil-hand","boil","hand","bond","hail",2,"","","bond-hail",1,92,1,4,0], // allWords 2: bail|band
  ["cake-roll","cake","roll","earl","lock",4,"","","earl-lock",23,92,1,4,0], // allWords 10: call|coke|lace|lack|lark|lear|lore|rake|real|role
  ["pools-quake","quake","pools","equal","spook",2,"","","equal-spook",7,92,1,4,0], // allWords 3: loops|sloop|spool
  ["cruel-fails","cruel","fails","cause","frill",3,"","","cause-frill",10], // allWords 14: cries|cures|curls|curse|fires|flail|flier|fries|lilac|relic|rifle|sauce|serif|ulcer
  ["dark-sets","dark","sets","reds","task",4,"","","reds-task",13,87,2,5,0], // allWords 1: drek
  ["busy-nerd","busy","nerd","send","ruby",3,"","","ruby-send",9,76,4,8,0], // allWords 6: beds|bred|buds|bury|buys|ends
  ["about-dolly","about","dolly","alloy","doubt",2,"","","alloy-doubt",8,92,1,4,0], // allWords 7: allot|atoll|bally|bayou|bloat|loyal|outdo
  ["cute-dish","cute","dish","such","tide",4,"","","such-tide",13,77,4,7,0], // allWords 12: cite|cues|dies|diet|dues|duet|edit|itch|side|sued|tied|used
  ["ear-pip","ear","pip","pie","rap",3,"","","pie-rap",9,81,3,7,0], // allWords 5: ape|are|era|pea|rip
  ["arose-throw","throw","arose","arrow","those",2,"","","arrow-those",1,92,1,4,0], // allWords 11: ethos|hares|hears|other|rears|retro|share|shear|store|worst|worth
  ["gaps-mint","mint","gaps","sign","tamp",4,"","","sign-tamp",22,92,1,4,0], // allWords 11: amps|gasp|mans|maps|nags|pigs|sang|sing|snag|tang|ting
  ["rays-told","rays","told","lots","yard",3,"","","lots-yard",8], // allWords 10: dory|lars|last|lord|lost|rosy|salt|slot|stay|toys
  ["fruit-shape","fruit","shape","faith","super",3,"","","faith-super",11,92,1,4,0], // allWords 16: arise|heaps|parse|parts|paths|pears|phase|purse|raise|saith|spare|spear|spurt|stair|strap|traps
  ["matte-sites","matte","sites","taste","times",3,"","","taste-times",7], // allWords 15: asset|emits|items|mates|meats|mites|mitts|seats|smite|state|stats|steam|tames|teams|tease
  ["scan-stir","stir","scan","cars","tins",2,"","","cars-tins",6], // allWords 8: ants|arcs|arts|cans|rats|scar|star|tsar
  ["font-hack","font","hack","fact","honk",2,"","","fact-honk",2], // allWords 4: chat|hank|khan|than
  ["cease-still","cease","still","least","slice",5,"elsas","telic","least-slice",28], // allWords 28: asset|caste|cites|easel|eases|isles|islet|laces|lasts|lease|lilts|lisle|lists|sales|salts|scale|seals|seats|sites|slate|slats|slits|stale|stall|steal|tales|tiles|tills
  ["aids-ball","ball","aids","dial","labs",3,"","","dial-labs",8,76,4,8,0], // allWords 10: alas|bald|bids|bill|dibs|laid|libs|said|sail|slab
  ["dad-nod","dad","nod","and","odd",2,"","","cannot be reversed",6,86,2,6,0], // allWords 2: add|don
  ["bike-jobs","bike","jobs","bibs","joke",2,"","","bibs-joke",1], // allWords 1: jibe
  ["blame-siren","blame","siren","amble","resin",2,"salem","brine","amble-resin",13], // allWords 16: anise|brine|easel|lanes|leans|lease|leers|mains|males|meals|minas|rebel|reels|reins|rinse|risen
  ["ocean-parts","ocean","parts","acorn","tapes",3,"","","acorn-tapes",20,92,1,4,0], // allWords 19: apnea|atone|canoe|capes|conte|craps|orcas|paces|paras|paste|pecan|roast|scape|scrap|septa|space|spate|strap|traps
  ["cape-line","cape","line","nice","pale",3,"","","nice-pale",8], // allWords 10: acne|cane|epic|lane|lean|leap|lien|pace|pile|plea
  ["brass-fiery","fiery","brass","basis","ferry",2,"","","basis-ferry",6], // allWords 8: berry|fairs|fairy|fires|fries|fryer|serfs|serif
  ["canal-talks","canal","talks","lacks","natal",3,"","","lacks-natal",7], // allWords 7: atlas|clank|slack|snack|stalk|stank|tanks
  ["belt-wool","wool","belt","boot","well",2,"","","cannot be reversed",2,87,2,5,0], // allWords 5: bell|blot|bolt|lobe|lowe
  ["head-stop","head","stop","does","path",5,"","","does-path",26], // allWords 16: apes|dose|doth|dots|heap|hope|past|pats|peas|pose|post|pots|spat|spot|taps|tops
  ["hung-once","hung","once","chug","none",2,"","","chug-none",7], // allWords 2: cone|neon
  ["toy-yes","toy","yes","soy","yet",3,"","","soy-yet",14], // allWords 1: set
  ["chin-coat","chin","coat","chat","coin",1,"","","chat-coin",1], // allWords 4: icon|inch|itch|taco
  ["dude-pure","pure","dude","rude","dupe",3,"","","dupe-rude",8,81,3,7,0], // allWords 0
  ["rebel-stare","rebel","stare","alter","beers",5,"","","alter-beers",30], // allWords 25: alert|aster|beets|belts|beret|beset|brees|earls|easel|eater|erase|laser|later|lease|least|rates|reals|saree|slate|stale|steal|tales|tears|tease|terra
  ["push-take","take","push","peak","thus",2,"","","peak-thus",7], // allWords 11: apes|east|eats|hast|hats|huts|peas|puke|seat|shut|teas
  ["lugs-tiff","tiff","lugs","fits","gulf",3,"","","fits-gulf",8], // allWords 7: fist|gift|gist|gust|guts|sift|slug
  ["romps-tense","tense","romps","prone","stems",3,"","","prone-stems",11,87,2,5,0], // allWords 20: meets|mores|nests|notes|onset|proms|senor|seton|sneer|snore|spent|sperm|stomp|stone|teems|teens|tempo|temps|tomes|tones
  ["knees-swats","knees","swats","nests","wakes",3,"","","nests-wakes",8,92,1,4,0], // allWords 9: askew|sense|snake|sneak|stank|stews|tanks|weeks|wests
  ["motel-never","never","motel","novel","meter",2,"","","meter-novel",3], // allWords 7: enter|metre|metro|mover|nerve|tenor|toner
  ["cedar-event","cedar","event","acted","nerve",3,"","","acted-nerve",23,92,1,4,0], // allWords 9: cadet|cadre|cared|carve|crave|eared|ender|never|raced
  ["its-pan","its","pan","nit","spa",2,"","","nit-spa",8,86,2,6,0], // allWords 4: nap|sap|sit|tin
  ["floor-prick","floor","prick","flock","prior",2,"","","flock-prior",1], // allWords 2: flick|frock
  ["rated-until","rated","until","trail","tuned",3,"","","trail-tuned",8,86,2,6,0], // allWords 9: alert|alter|audit|later|trade|tread|trend|triad|trial
  ["dawn-tips","dawn","tips","past","wind",3,"","","past-wind",18], // allWords 14: dips|pads|pant|pats|pint|pits|spat|spit|swat|taps|twin|wand|want|wits
  ["deep-onto","deep","onto","dote","open",4,"","","cannot be reversed",14,92,1,4,0], // allWords 5: done|node|nope|peed|poet
  ["eager-llama","eager","llama","realm","algae",4,"","","algae-realm",26,92,1,4,0], // allWords 12: agree|alarm|eagle|gamer|glare|gleam|lager|large|legal|leger|marge|regal
  ["loved-tasty","tasty","loved","salty","voted",3,"","","salty-voted",7], // allWords 8: dales|dates|deals|dotes|leads|stade|stead|yeast
  ["cord-flat","flat","cord","fort","clad",2,"","","clad-fort",2], // allWords 3: coat|ford|taco
  ["ether-loses","ether","loses","holes","steer",3,"","","holes-steer",8,77,4,7,0], // allWords 11: ester|loser|reset|roles|sheet|soles|terse|there|these|three|trees
  ["arms-wise","wise","arms","ears","swim",3,"","","ears-swim",9], // allWords 6: aims|eras|mare|mars|rams|sera
  ["coo-two","coo","two","cow","too",2,"","","cannot be reversed",7,70,5,10,0], // allWords 0
  ["drop-plug","drop","plug","drug","plop",2,"","","drug-plop",1,92,1,4,0], // allWords 6: gold|plod|prod|prog|prop|pulp
  ["named-papal","papal","named","maple","panda",5,"","","cannot be reversed",24,92,1,4,0], // allWords 6: amend|ample|apple|panel|penal|plane
  ["isles-thank","isles","thank","hates","slink",3,"","","hates-slink",10], // allWords 13: asset|haste|heats|kilns|likes|links|seats|skate|stake|stank|steak|takes|tanks
  ["glen-stir","glen","stir","girl","sent",3,"","","girl-sent",9], // allWords 10: gent|grit|lens|ling|nest|nets|rest|tens|ting|tins
  ["score-stand","score","stand","cards","tones",3,"","","cards-tones",10], // allWords 19: acres|aster|canes|cares|cones|cords|cores|darts|notes|onset|races|rates|scare|scone|seton|stare|stone|store|tears
  ["horns-wires","horns","wires","shire","sworn",2,"","","shire-sworn",5], // allWords 9: heirs|heros|hires|horse|shore|swore|weirs|wiser|worse
  ["glib-pins","glib","pins","blip","sing",3,"","","blip-sing",23], // allWords 5: lips|sign|slip|snip|spin
  ["doom-lets","doom","lets","demo","lost",2,"","","demo-lost",8], // allWords 15: does|dome|dose|dots|lest|loom|lose|lots|melt|mode|mole|mood|slot|sole|solo
  ["cave-mice","mice","cave","came","vice",3,"","","came-vice",13], // allWords 1: mace
  ["nun-top","top","nun","not","pun",3,"","","cannot be reversed",10,86,2,6,0], // allWords 5: nut|opt|pot|put|ton
  ["back-fare","back","fare","bark","face",1,"","","bark-face",1,87,2,5,0], // allWords 4: bare|bear|cafe|fear
  ["lone-raid","raid","lone","idol","near",4,"","","idol-near",21], // allWords 10: arid|darn|dial|earn|laid|land|lane|lean|noel|rand
  ["aptly-peach","peach","aptly","apply","teach",4,"","","apply-teach",12], // allWords 6: alpha|cheap|cheat|lathe|patch|playa
  ["leads-slain","slain","leads","laden","sails",2,"","","laden-sails",6], // allWords 10: aisle|alien|anise|dales|deals|deans|lands|nails|sedan|snail
  ["dose-sigh","sigh","dose","gosh","side",3,"","","gosh-side",15,71,5,9,0], // allWords 6: dies|dish|does|egos|goes|hogs
  ["looks-packs","packs","looks","slack","spook",2,"","","slack-spook",5], // allWords 2: lacks|locks
  ["badge-diner","badge","diner","begin","dread",4,"","","begin-dread",20,92,1,4,0], // allWords 14: adder|bared|beard|began|being|binge|bread|bride|brine|bring|dared|dried|grand|grind
  ["pelt-take","pelt","take","kept","late",3,"kate","lept","kept-late",9,87,2,5,0], // allWords 11: keep|leap|pale|peak|peek|peel|plat|plea|tale|teal|tele
  ["seats-waste","waste","seats","asset","sweat",2,"","","asset-sweat",18], // allWords 5: stews|swats|sweet|tease|wests
  ["dim-web","dim","web","bid","mew",3,"","","bid-mew",10], // allWords 3: bed|med|mid
  ["inter-pinch","pinch","inter","inner","pitch",1,"","","inner-pitch",2], // allWords 4: inert|ripen|thine|tripe
  ["disc-here","here","disc","rich","seed",4,"","","rich-seed",15], // allWords 8: deer|dies|dire|heir|hire|reed|ride|side
  ["lube-mill","mill","lube","bull","lime",3,"","","bull-lime",8], // allWords 6: bile|bill|blue|limb|mile|mule
  ["pipes-stool","stool","pipes","poets","spoil",3,"","","poets-spoil",11,92,1,4,0], // allWords 20: pelts|pesto|pests|piles|plies|plots|poise|polio|polis|posts|slept|spelt|spiel|spies|spots|steps|stole|stoop|stops|tools
  ["dotes-lanes","lanes","dotes","nodes","tales",3,"","","nodes-tales",8,87,2,5,0], // allWords 12: dates|deans|leans|least|nosed|sedan|slate|stade|stale|stead|steal|stole
  ["damn-ties","damn","ties","east","mind",3,"","","east-mind",18], // allWords 16: ante|dams|dean|dies|dine|eats|mast|mats|mint|mist|neat|seat|side|site|teas|tine
  ["lint-weak","weak","lint","knew","tail",4,"","","knew-tail",23], // allWords 15: kale|kiln|lake|late|leak|lent|link|newt|tale|teal|twin|wait|wake|went|wink
  ["moats-thing","moats","thing","mason","tight",3,"","","mason-tight",16], // allWords 16: among|atoms|hints|ingot|mango|maths|might|moans|moist|night|omits|santo|smith|stoat|tango|toast
  ["ages-tarp","tarp","ages","page","star",2,"","","page-star",7,77,4,7,0], // allWords 15: arts|east|eats|gets|para|part|peat|rags|rats|sage|seat|tape|teas|trap|tsar
  ["aid-dab","dab","aid","baa","did",3,"","","baa-did",9,85,2,7,0], // allWords 4: add|bad|bid|dad
  ["bait-sung","sung","bait","bang","suit",2,"","","bang-suit",1,87,2,5,0], // allWords 11: ants|bung|bunt|gnus|guns|nags|nuts|sang|snag|snug|stun
  ["self-toss","self","toss","less","soft",3,"","","less-soft",9], // allWords 10: felt|left|lest|lets|loft|loss|lost|lots|sets|slot
  ["brain-irony","brain","irony","rainy","robin",2,"","","rainy-robin",5], // allWords 0
  ["crust-ships","ships","crust","crisp","shuts",3,"","","crisp-shuts",11], // allWords 9: chips|pitch|scrip|spurs|spurt|stirs|strip|trips|truss
  ["gift-solo","solo","gift","fist","logo",3,"","","fist-logo",8], // allWords 11: fits|goof|list|lost|lots|oils|sift|slit|slot|soft|soil
  ["bliss-ready","ready","bliss","badly","rises",3,"","","badly-rises",12,92,1,4,0], // allWords 11: based|bases|beads|dares|dries|reads|rides|sears|sired|slabs|years
  ["pole-very","very","pole","levy","rope",3,"","","levy-rope",9,82,3,6,0], // allWords 12: ever|love|over|peel|peer|ploy|poly|pore|prey|repo|rove|yelp
  ["edged-onset","onset","edged","dodge","tense",2,"","","dodge-tense",5], // allWords 13: deeds|dense|dosed|dotes|needs|nodes|nosed|notes|seton|steed|stone|teens|tones
  ["nab-rib","rib","nab","bar","bin",3,"","","bar-bin",9], // allWords 3: ban|bra|nib
  ["bout-door","door","bout","boot","dour",1,"","","boot-dour",1], // allWords 1: odor
  ["clef-leaf","leaf","clef","face","fell",3,"","","face-fell",18], // allWords 6: cafe|calf|fall|feel|flea|flee
  ["shake-smear","shake","smear","hears","makes",2,"","","hears-makes",7,76,4,8,0], // allWords 6: hares|mares|marks|share|shark|shear
  ["beam-plod","beam","plod","bald","poem",3,"","","bald-poem",9], // allWords 7: balm|bead|bold|dope|lamb|lamp|palm
  ["alley-artsy","artsy","alley","early","salty",2,"","","early-salty",7,87,2,5,0], // allWords 6: layer|leary|relay|stray|teary|trays
  ["bunts-folds","folds","bunts","bolts","funds",2,"","","bolts-funds",2], // allWords 3: bonds|fonts|lofts
  ["keen-real","keen","real","leek","near",3,"","","leek-near",23,86,2,6,0], // allWords 10: earl|earn|kale|keel|knee|lake|leak|lear|leer|reel
  ["motel-vines","motel","vines","novel","times",4,"","","novel-times",12,86,2,6,0], // allWords 14: emits|items|lemon|liven|melon|mines|mites|omens|ovens|smite|stove|tomes|veins|votes
  ["curse-filet","curse","filet","cries","flute",3,"","","cries-flute",19,92,1,4,0], // allWords 18: clues|crust|cults|cures|cuter|files|fires|first|flies|flits|fries|fuels|lifts|refit|rifts|serif|slice|truce
  ["ray-vie","ray","vie","are","ivy",2,"","","are-ivy",7], // allWords 3: ave|ear|era
  ["chant-stump","chant","stump","champ","stunt",2,"","","champ-stunt",1], // allWords 9: chump|hunts|match|maths|pants|punch|punts|shunt|stamp
  ["nick-pass","pass","nick","caps","sink",3,"","","caps-sink",9,87,2,5,0], // allWords 11: cans|pack|pick|pics|sank|sans|saps|scan|sins|skin|skip
  ["dean-tune","dean","tune","aunt","need",4,"","","aunt-need",14], // allWords 6: ante|dune|neat|nude|teen|tuna
  ["cress-ideas","ideas","cress","acres","sides",2,"","","acres-sides",6], // allWords 8: aides|arise|aside|cares|races|raise|rises|scare
  ["chai-lens","chai","lens","inch","sale",3,"","","inch-sale",19,82,3,6,0], // allWords 10: aces|case|cash|chin|hail|lash|lien|line|nice|seal
  ["casts-necks","necks","casts","cents","sacks",3,"","","cents-sacks",7,87,2,5,0], // allWords 6: casks|nests|scant|scent|sects|snack
  ["huge-nets","huge","nets","gush","teen",3,"","","gush-teen",9], // allWords 16: gene|ghee|gnus|guns|hugs|huts|nest|nuts|sent|shut|snug|stun|sung|tens|thus|tune
  ["burns-heats","burns","heats","beans","hurts",2,"","","beans-hurts",2], // allWords 7: bates|beast|beats|burst|haste|hates|hurst
  ["cuts-wish","wish","cuts","cuss","with",1,"","","cuss-with",1], // allWords 5: itch|such|whit|wits|wuss
  ["cargo-named","cargo","named","mango","raced",4,"","","mango-raced",11,87,2,5,0], // allWords 11: amend|among|argon|cadre|cameo|cared|cedar|grand|groan|orang|organ
  ["dive-wide","wide","dive","died","view",3,"","","died-view",10], // allWords 0
  ["berth-micro","berth","micro","birch","metro",3,"","","birch-metro",12,92,1,4,0], // allWords 6: birth|comer|comet|comte|mirth|orbit
  ["east-lamp","east","lamp","meat","slap",2,"","","meat-slap",7,87,2,5,0], // allWords 16: alps|apes|eats|laps|last|malt|mate|meta|palm|pals|peas|salt|seat|tame|team|teas
  ["cord-rile","cord","rile","lord","rice",4,"","","lord-rice",13,87,2,5,0], // allWords 6: clod|cold|core|lice|lore|role
  ["leave-rites","leave","rites","alive","trees",2,"","","alive-trees",7,87,2,5,0], // allWords 26: aisle|arise|easel|elite|erase|ester|islet|lease|raise|raves|reset|rivet|salve|saree|saver|silva|slave|sleet|steel|steer|terse|tiers|tiles|tires|tries|vials
  ["slosh-usher","slosh","usher","loser","shush",3,"","","loser-shush",10], // allWords 9: euros|holes|hoses|house|roles|roses|rouse|shoes|sores
  ["boa-rim","boa","rim","air","mob",3,"","","air-mob",10], // allWords 2: oar|ria
  ["coin-game","coin","game","come","gain",2,"","","come-gain",1,92,1,4,0], // allWords 4: cain|came|icon|mace
  ["kill-life","life","kill","fill","like",3,"","","cannot be reversed",8,81,3,7,0], // allWords 1: file
  ["stall-worse","worse","stall","allow","rests",5,"","","allow-rests",29], // allWords 21: asset|lasso|lasts|least|loser|lower|roles|rolls|roses|salts|seats|slate|slats|sores|stale|steal|sweat|swore|tales|waste|wrest
  ["hedge-intro","hedge","intro","dingo","there",3,"","","dingo-there",12,92,1,4,0], // allWords 14: diner|doing|ether|horde|inert|ingot|inter|nitro|north|other|thong|thorn|three|tinge
  ["flit-liar","flit","liar","fair","lilt",2,"","","fair-lilt",8], // allWords 8: fiat|flat|lair|lift|rail|tail|tall|till
  ["mode-pray","pray","mode","army","dope",3,"","","army-dope",8], // allWords 6: demo|dome|mare|mayo|pear|reap
  ["caper-pence","caper","pence","creep","pecan",3,"","","creep-pecan",17], // allWords 7: crane|crepe|pacer|paper|peace|rance|recap
  ["dairy-kinds","dairy","kinds","dinky","raids",3,"","","dinky-raids",22,92,1,4,0], // allWords 6: dandy|diary|randy|ranks|rinds|snark
  ["queer-warty","warty","queer","query","water",3,"","","query-water",9,92,1,4,0], // allWords 1: weary
  ["ilk-sad","sad","ilk","ask","lid",2,"","","ask-lid",7], // allWords 2: ads|aid
  ["relay-table","relay","table","bleat","layer",2,"","","bleat-layer",14], // allWords 8: abate|beryl|early|leary|rally|rebel|tally|telly
  ["iron-test","test","iron","nets","trio",3,"","","nets-trio",22,87,2,5,0], // allWords 18: nest|noir|nori|note|riot|roti|sent|sine|site|stir|tens|ties|tone|tori|torn|tort|tote|trot
  ["bogus-raise","bogus","raise","basis","rouge",3,"","","basis-rouge",12], // allWords 12: argue|argus|arise|auger|gears|goers|grass|gross|ogres|rages|rogue|sugar
  ["cafe-talk","cafe","talk","fate","lack",3,"","","fate-lack",8], // allWords 7: face|feat|feta|lace|late|tale|teal
  ["ends-want","want","ends","swan","tend",2,"","","swan-tend",7,66,6,10,0], // allWords 6: ante|date|dent|neat|sane|send
  ["caves-niche","niche","caves","cache","vines",4,"","","cache-vines",16,87,2,5,0], // allWords 8: canes|chins|chive|haven|niece|since|veins|vices
  ["blurt-loops","blurt","loops","pulls","robot",4,"","","pulls-robot",23,92,1,4,0], // allWords 8: blurs|polls|pools|rolls|sloop|spool|troll|turbo
  ["sole-very","very","sole","levy","rose",3,"","","levy-rose",9,81,3,7,0], // allWords 10: eels|else|ever|lose|love|over|rees|rosy|rove|sore
  ["ewe-pad","ewe","pad","ape","wed",2,"","","cannot be reversed",7,87,2,5,0], // allWords 2: pea|wee
  ["knead-plots","knead","plots","plead","knots",2,"","","knots-plead",1,92,1,4,0], // allWords 14: lakes|lapse|leaks|leaps|pales|panes|pedal|pelts|pleas|slept|snake|sneak|spelt|spent
  ["near-read","near","read","dean","rear",3,"","","dean-rear",19], // allWords 4: dare|dear|earn|rare
  ["bask-seed","bask","seed","beds","sake",3,"","","beds-sake",9], // allWords 5: asks|bake|bead|beak|seek
  ["lance-scout","scout","lance","uncle","coast",5,"","","coast-uncle",25], // allWords 9: ascot|aunts|autos|canes|clean|clout|coats|scant|tacos
  ["alley-start","alley","start","altar","style",3,"","","altar-style",10], // allWords 17: artsy|latte|least|rally|slate|stale|state|steal|stray|tales|tarts|taste|tatar|tells|trays|yeast|yells
  ["guns-race","guns","race","cure","nags",3,"","","cure-nags",15], // allWords 15: acre|arcs|cage|care|cars|earn|ecru|gnus|near|runs|sang|scar|snag|snug|sung
  ["furry-seals","furry","seals","fears","surly",2,"","","fears-surly",3], // allWords 13: false|fares|ferry|fleas|flyer|fryer|leafs|leafy|safer|sales|sears|slurs|years
  ["epic-heal","epic","heal","each","pile",2,"","","each-pile",6], // allWords 9: ache|cape|chap|chip|hale|leap|pace|pale|plea
  ["door-knit","door","knit","rind","took",5,"","","rind-took",26,86,2,6,0], // allWords 5: dint|knot|odor|rink|rook
  ["axe-yew","axe","yew","eye","wax",2,"","","eye-wax",8,81,3,7,0], // allWords 1: awe
  ["moved-pause","moved","pause","paved","mouse",2,"","","mouse-paved",1], // allWords 4: amuse|dumas|modus|moves
  ["maps-open","open","maps","amen","pops",3,"","","amen-pops",9], // allWords 10: amps|mane|mean|mesa|name|nope|pose|same|seam|soap
  ["side-tide","tide","side","dies","diet",2,"","","dies-diet",6], // allWords 2: edit|tied
  ["atlas-sheep","sheep","atlas","phase","steal",4,"","","phase-steal",28,92,1,4,0], // allWords 33: alpha|ashes|asset|hales|heals|heaps|helps|lasts|leapt|leash|least|paste|pelts|petal|plate|pleat|salts|seats|septa|shale|shape|slash|slate|slats|slept|spate|spelt|splat|stale|steep|tales|tapes|tease
  ["motel-wages","motel","wages","games","towel",3,"","","games-towel",7], // allWords 12: gleam|golem|mages|mates|meats|metal|steam|sweat|tames|teams|tomes|waste
  ["dork-fund","dork","fund","ford","dunk",2,"","","dunk-ford",2,87,2,5,0], // allWords 4: fond|fork|funk|rudd
  ["fast-newt","fast","newt","sent","waft",3,"","","sent-waft",9,86,2,6,0], // allWords 7: ants|fats|nest|nets|tens|want|went
  ["flame-skull","flame","skull","small","fluke",4,"","","fluke-small",13,92,1,4,0], // allWords 11: fella|flake|flume|lakes|leaks|makes|males|malls|meals|mules|mulls
  ["rail-sits","rail","sits","list","sari",3,"","","cannot be reversed",22,85,2,7,0], // allWords 13: airs|arts|iris|lair|last|liar|rats|sail|salt|slit|star|stir|tsar
  ["gig-yaw","gig","yaw","gay","wig",3,"","","cannot be reversed",10,73,4,11,0], // allWords 3: gag|wag|way
  ["bats-sulk","bats","sulk","labs","tusk",3,"","","labs-tusk",9,62,7,10,0], // allWords 6: bulk|bust|slab|stab|tabs|task
  ["ideas-tasty","tasty","ideas","satay","edits",3,"","","edits-satay",7], // allWords 13: aides|aside|daisy|dates|deity|diets|sited|stade|state|stats|stead|taste|tides
  ["array-disco","array","disco","scary","radio",4,"","","radio-scary",19], // allWords 9: adios|carry|cords|dairy|daisy|diary|orcas|roads|yards
  ["bawl-redo","bawl","redo","blew","road",2,"","","blew-road",6], // allWords 4: bald|bled|rode|wore
  ["arms-wine","wine","arms","earn","swim",3,"","","earn-swim",9], // allWords 6: aims|mare|mars|near|rams|wins
  ["drive-slain","slain","drive","lived","rains",2,"","","lived-rains",7,87,2,5,0], // allWords 19: aired|aisle|arise|devil|diver|drain|evils|ideal|lives|nadir|nails|raise|raves|salve|sarin|saver|slave|snail|veils
  ["cyan-keel","cyan","keel","clay","knee",3,"","","clay-knee",9,92,1,4,0], // allWords 10: acne|cane|kale|keen|lace|lacy|lake|leak|leek|yank
  ["foot-song","foot","song","goof","tons",3,"","","cannot be reversed",23,86,2,6,0], // allWords 2: font|snog
  ["gem-pig","gem","pig","imp","egg",2,"","","egg-imp",7], // allWords 2: gig|peg
  ["fire-push","fire","push","fish","pure",2,"","","fish-pure",1,92,1,4,0], // allWords 7: fuse|hips|pier|pies|rife|ripe|ship
  ["acres-swath","acres","swath","cases","wrath",3,"","","cases-wrath",9], // allWords 19: aches|cares|carts|casts|chart|chase|chats|cress|races|reach|scare|shrew|straw|swats|swear|wares|warts|wears|whats
  ["bunt-over","bunt","over","unto","verb",2,"","","unto-verb",7,92,1,4,0], // allWords 6: burn|euro|rove|tube|veto|vote
  ["area-sold","sold","area","also","dear",3,"","","cannot be reversed",19,92,1,4,0], // allWords 11: dare|does|dose|ears|eras|lars|load|olds|read|reds|sera
  ["score-worst","score","worst","roots","screw",4,"","","roots-screw",25], // allWords 13: cores|costs|cress|crews|roost|roses|rower|scots|sores|sorts|swore|torso|worse
  ["hero-taxi","hero","taxi","hoax","tier",3,"","","hoax-tier",9,92,1,4,0], // allWords 7: exit|hair|heir|hire|rite|tire|tore
  ["dirty-tapes","dirty","tapes","patty","rides",4,"","","patty-rides",11,87,2,5,0], // allWords 27: aster|dares|darts|dries|paste|payed|piety|rates|reads|ready|rites|septa|sired|spade|spate|spied|spite|stare|start|stipe|tardy|tarts|tears|teary|tiers|tires|tries
  ["child-cruel","cruel","child","chill","crude",2,"","","chill-crude",4], // allWords 6: chide|cider|cried|cured|relic|ulcer
  ["aid-net","aid","net","din","tea",3,"","","din-tea",9,87,2,5,0], // allWords 7: ate|den|eat|end|nit|ten|tin
  ["loud-toll","loud","toll","doll","lout",3,"","","doll-lout",22], // allWords 2: ludo|told
  ["able-poet","able","poet","abet","pole",2,"","","abet-pole",1], // allWords 6: alto|bale|beat|beep|beta|plot
  ["mafia-named","mafia","named","famed","mania",4,"","","famed-mania",11], // allWords 2: amend|anima
  ["camp-mite","camp","mite","mice","tamp",4,"","","mice-tamp",13,92,1,4,0], // allWords 12: came|cite|emit|item|mace|mate|meat|meta|pact|tame|team|time
  ["fleet-merry","merry","fleet","flyer","metre",3,"","","flyer-metre",11,92,1,4,0], // allWords 4: emery|ferry|fryer|meter
  ["evil-seas","evil","seas","lies","save",5,"","","lies-save",26,92,1,4,0], // allWords 10: ease|isle|live|sale|seal|vale|vase|veal|veil|vile
  ["rocks-skied","skied","rocks","docks","skier",4,"","","docks-skier",14], // allWords 11: coder|codes|cores|corks|credo|decks|decor|irked|score|skies|socks
  ["loser-watts","loser","watts","salts","tower",4,"","","salts-tower",12,87,2,5,0], // allWords 33: alert|alter|earls|laser|lasts|later|least|loses|reals|roles|sales|seals|slate|slats|slots|soles|stale|steal|stole|straw|swats|swear|sweat|swore|tales|wares|warts|waste|water|wears|worse|worst|wrote
  ["drone-stomp","drone","stomp","romps","toned",2,"","","romps-toned",7,82,3,6,0], // allWords 11: mores|noted|notes|onset|proms|senor|seton|snore|stone|tomes|tones
  ["eon-rot","eon","rot","nor","toe",3,"","","nor-toe",9,87,2,5,0], // allWords 1: one
  ["chaos-magic","chaos","magic","coach","sigma",4,"","","coach-sigma",20,92,1,4,0], // allWords 3: cacao|macho|mocha
  ["anger-trend","anger","trend","enter","grand",4,"","","enter-grand",12,86,2,6,0], // allWords 6: deter|eared|grade|raged|rager|range
  ["dome-link","link","dome","milk","node",3,"","","milk-node",9,86,2,6,0], // allWords 14: demo|dime|dine|done|kiln|kind|lien|lime|line|lone|mile|mode|mole|noel
  ["delta-swarm","swarm","delta","award","melts",4,"","","award-melts",25], // allWords 25: alder|areas|armed|dealt|dream|earls|laser|least|madre|mares|mated|mates|meats|reals|slate|smear|smelt|stale|steal|steam|tales|tamed|tames|teams|warms
  ["holy-jeep","holy","jeep","help","joey",2,"","","help-joey",3], // allWords 1: hope
  ["soon-step","soon","step","oops","tens",2,"","","oops-tens",6], // allWords 15: eons|nest|nets|nose|ones|pest|pets|pose|post|pots|sent|spot|stop|tons|tops
  ["send-wait","send","wait","said","went",2,"","","said-went",2], // allWords 17: aids|ants|dawn|dies|ends|nest|nets|newt|sand|sent|side|site|tens|ties|wand|want|wide
  ["ask-koi","ask","koi","oak","ski",2,"","","oak-ski",6,92,1,4,0], // allWords 0
  ["label-slide","slide","label","bells","ideal",4,"","","bells-ideal",22], // allWords 11: aides|aisle|aside|bales|based|beads|blade|dials|ideas|lisle|sable
  ["raise-using","raise","using","arise","suing",1,"","","arise-suing",3], // allWords 10: grain|grins|issue|reins|resin|rings|rinse|risen|rises|siren
  ["soil-your","soil","your","ours","oily",2,"","","oily-ours",7], // allWords 3: oils|soul|sour
  ["crane-gases","crane","gases","agree","scans",3,"","","agree-scans",11], // allWords 18: acres|anger|canes|cares|cases|cease|ceres|cress|eager|gears|races|rages|rance|range|sages|scare|serge|snags
  ["folk-riot","folk","riot","flit","rook",3,"","","flit-rook",9], // allWords 8: foot|lift|loft|root|roti|tori|toro|trio
  ["snip-task","snip","task","knit","pass",4,"","","knit-pass",23], // allWords 12: asks|past|pats|pins|pint|pita|saps|sink|skin|spat|spin|taps
  ["great-solve","great","solve","gloat","serve",3,"","","gloat-serve",8], // allWords 25: agree|aster|eager|earls|erase|glare|glove|grate|lager|large|laser|loves|rates|reals|regal|saree|sever|stare|stove|tears|veers|verge|verse|volts|votes
  ["dwell-lines","dwell","lines","lined","swell",4,"","","lined-swell",14,76,4,8,0], // allWords 9: liens|lisle|sewed|slide|snide|swede|weeds|welds|wells
  ["love-near","love","near","earl","oven",2,"","","earl-oven",7], // allWords 5: earn|even|lear|oral|real
  ["bug-mew","bug","mew","gum","web",3,"","","gum-web",9,80,3,8,0], // allWords 3: beg|gem|mug
  ["petty-salsa","salsa","petty","pleat","stays",4,"","","pleat-stays",19], // allWords 36: aptly|asset|atlas|lapse|leaps|leapt|least|pales|palsy|pasta|paste|pasty|patsy|patty|petal|plate|plays|pleas|sales|salty|seals|seats|septa|slate|spate|stale|state|steal|style|tales|tapas|tapes|taste|tasty|types|yelps
  ["arms-coin","arms","coin","icon","mars",1,"iran","mocs","icon-mars",3,74,4,10,0], // allWords 6: airs|moan|rain|rams|sari|soma
  ["cheap-grain","cheap","grain","china","grape",3,"ghana","cripe","china-grape",12,92,1,4,0], // allWords 18: anger|cairn|caper|chain|crane|gripe|hinge|nicer|niche|pacer|pager|peach|phage|price|rance|range|recap|reign
  ["ages-mint","mint","ages","emit","nags",2,"","","emit-nags",7,87,2,5,0], // allWords 11: anti|gate|gems|item|mite|sage|sang|semi|snag|tang|time
  ["cram-rude","cram","rude","acre","drum",2,"","","acre-drum",9,86,2,6,0], // allWords 4: care|race|rare|rear
  ["gross-piece","gross","piece","crops","siege",4,"","","crops-siege",26], // allWords 19: corps|creep|crepe|epics|goers|ogres|peers|poise|pores|poser|press|prose|ropes|serge|speer|spice|spies|spore|spree
  ["diver-salon","diver","salon","laden","visor",4,"","","laden-visor",11], // allWords 21: alder|drive|earls|lanes|laser|leans|liens|lined|lines|lions|loans|loins|raves|reals|riled|riles|saver|savor|solar|veins|vines
  ["bold-peer","bold","peer","plod","beer",2,"","","beer-plod",8], // allWords 10: bled|bore|bree|deep|dope|peed|pore|repo|robe|rope
  ["daily-tapes","daily","tapes","aides","aptly",3,"","","aides-aptly",9], // allWords 11: aside|dials|ideas|laity|paste|payed|septa|spade|spate|splat|tails
  ["air-bob","air","bob","boa","rib",3,"","","cannot be reversed",9,85,2,7,0], // allWords 6: bib|bro|oar|orb|ria|rob
  ["gave-into","gave","into","toga","vein",4,"","","toga-vein",20,92,1,4,0], // allWords 6: gate|gent|goat|tine|tong|vine
  ["roger-walls","roger","walls","rolls","wager",2,"","","rolls-wager",1,92,1,4,0], // allWords 15: earls|gears|glows|goers|growl|laser|loser|lower|lowes|ogres|rager|rages|reals|roles|wages
  ["rate-verb","verb","rate","brat","ever",2,"","","brat-ever",7], // allWords 6: rare|rave|rear|tear|tree|vera
  ["feet-pull","pull","feet","fuel","pelt",2,"","","cannot be reversed",3,87,2,5,0], // allWords 8: feel|fell|felt|fete|flee|full|left|peel
  ["lasts-waste","waste","lasts","slate","swats",2,"","","slate-swats",5], // allWords 7: least|salts|slats|stale|steal|sweat|tales
  ["need-worn","worn","need","drew","neon",5,"","","drew-neon",26], // allWords 7: done|nerd|node|none|owed|weed|word
  ["eater-messy","messy","eater","essay","meter",4,"","","essay-meter",13,92,1,4,0], // allWords 22: aster|erase|ester|mares|meaty|metre|rates|reset|saree|sears|smart|smear|stare|steer|tamer|tears|terms|terse|trams|trees|yeast|yeses
  ["earns-tiger","tiger","earns","reign","stare",3,"","","reign-stare",10,92,1,4,0], // allWords 33: agree|anger|angst|aster|eager|erase|gates|grant|grate|great|nears|range|rants|rates|reins|resin|rinse|risen|rites|saree|siege|singe|siren|snare|stage|sting|tears|terra|tiers|tires|trans|trier|tries
  ["dense-notes","dense","notes","nodes","tense",4,"","","nodes-tense",12,86,2,6,0], // allWords 11: dotes|needs|nests|nosed|onset|sends|seton|steed|stone|teens|tones
  ["emu-gap","gap","emu","ape","mug",2,"","","ape-mug",8], // allWords 2: gum|pea
  ["theme-wears","theme","wears","teams","where",2,"","","teams-where",3], // allWords 28: aster|earth|eater|ester|ether|hater|heart|mates|maths|meats|meets|rates|reset|sewer|shrew|stare|steam|steer|swear|tames|tears|teems|terse|there|three|trash|trees|wares
  ["antic-dealt","dealt","antic","clade","titan",4,"","","clade-titan",20,92,1,4,0], // allWords 10: actin|canal|cited|decal|delta|edict|laced|latte|natal|taint
  ["left-sons","sons","left","lens","soft",2,"","","lens-soft",1,92,1,4,0], // allWords 10: felt|lent|loft|ness|nest|nets|self|sent|tens|tons
  ["nest-nick","nest","nick","cent","sink",3,"","","cent-sink",9,87,2,5,0], // allWords 6: neck|nets|sent|skin|tens|tins
  ["notch-ruled","notch","ruled","lurch","toned",4,"","","lurch-toned",11], // allWords 8: lunch|lured|noted|olden|older|other|torch|tuned
  ["lace-only","lace","only","clay","lone",2,"","","clay-lone",9,87,2,5,0], // allWords 5: ally|cone|lacy|noel|once
  ["limit-sands","limit","sands","midst","nails",4,"","","midst-nails",12], // allWords 9: amiss|lands|mails|saint|satin|slain|snail|stain|stand
  ["oops-rile","rile","oops","oils","rope",2,"","","oils-rope",2], // allWords 10: lore|pier|pore|pros|repo|ripe|rips|role|soil|solo
  ["rests-wince","wince","rests","cress","twine",2,"","","cress-twine",6], // allWords 23: ceres|cries|enter|ester|inert|inter|nicer|rents|reset|rites|steer|stern|stews|stirs|sweet|terse|tiers|tires|trees|tries|tween|twins|wests
  ["dud-tar","tar","dud","dad","rut",3,"","","cannot be reversed",14,82,3,6,0], // allWords 3: add|art|rat
  ["leek-swan","leek","swan","lawn","seek",2,"","","cannot be reversed",8,92,1,4,0], // allWords 12: kale|keel|lake|lane|leak|lean|news|sake|sane|seen|sewn|walk
  ["drove-stock","stock","drove","corks","voted",4,"","","corks-voted",28,92,1,4,0], // allWords 11: coder|cores|credo|decor|overs|rocks|score|servo|stove|verso|votes
  ["aglow-being","aglow","being","aging","below",2,"","","aging-below",1], // allWords 9: angel|angle|begin|binge|bowel|elbow|glean|globe|wigan
  ["gear-lead","lead","gear","dale","rage",2,"","","dale-rage",15], // allWords 5: aged|deal|earl|lear|real
  ["life-mill","life","mill","fill","lime",3,"","","cannot be reversed",8,81,3,7,0], // allWords 3: file|film|mile
  ["fella-light","fella","light","filth","legal",3,"","","filth-legal",13,92,1,4,0], // allWords 2: fight|flail
  ["ghost-south","ghost","south","ought","hosts",3,"","","hosts-ought",21,92,1,4,0], // allWords 11: gusto|shoot|shots|shout|shush|shuts|stout|thugs|toots|tough|touts
  ["bibs-tire","bibs","tire","bite","ribs",3,"","","cannot be reversed",9,81,3,7,0], // allWords 5: bits|brie|rite|stir|tier
  ["goal-solo","solo","goal","also","logo",3,"","","also-logo",18], // allWords 0
  ["ewe-rod","ewe","rod","ore","wed",2,"","","cannot be reversed",7,86,2,6,0], // allWords 2: doe|wee
  ["fast-monk","fast","monk","font","mask",2,"","","font-mask",2,87,2,5,0], // allWords 5: fats|mast|mats|most|soft
  ["spear-trawl","spear","trawl","alert","wraps",5,"","","alert-wraps",29,92,1,4,0], // allWords 23: altar|alter|apart|earls|lapse|laser|later|leaps|leapt|pales|paras|parse|pears|petal|plate|pleas|pleat|reals|rears|spare|taper|terra|twerp
  ["evil-used","used","evil","sued","veil",1,"","","sued-veil",3,81,3,7,0], // allWords 11: dies|dive|dues|eels|else|isle|lies|live|seed|side|vile
  ["meat-whip","meat","whip","math","wipe",2,"","","math-wipe",7], // allWords 12: emit|item|mate|meta|mite|tame|team|thaw|time|what|whit|with
  ["hairs-shade","shade","hairs","aides","harsh",3,"","","aides-harsh",10,87,2,5,0], // allWords 16: ahead|areas|arise|aside|hades|hares|heads|hears|heirs|hides|hires|ideas|raise|share|shear|shire
  ["alien-guess","alien","guess","aisle","genus",3,"","","cannot be reversed",15,92,1,4,0], // allWords 15: easel|glens|guise|lanes|leans|lease|nails|sails|sales|seals|slain|sling|snail|suing|using
  ["gods-lint","lint","gods","sign","told",4,"","","sign-told",22,92,1,4,0], // allWords 11: digs|dogs|lids|olds|sing|slid|snog|sold|song|ting|tong
  ["smell-stall","smell","stall","malls","tells",2,"","","malls-tells",7,81,3,7,0], // allWords 1: small
  ["plane-shove","plane","shove","phone","slave",2,"","","phone-slave",2], // allWords 10: haves|lanes|leans|loves|panel|penal|salve|shave|shone|solve
  ["elk-rag","elk","rag","ark","leg",2,"","","ark-leg",7], // allWords 2: age|gel
  ["most-rode","rode","most","dome","sort",3,"","","dome-sort",8], // allWords 6: demo|mode|redo|rose|some|sore
  ["chuck-grips","chuck","grips","chugs","prick",4,"","","cannot be reversed",26,92,1,4,0], // allWords 5: chick|chips|crick|crisp|scrip
  ["carol-story","carol","story","stool","carry",2,"","","carry-stool",1,92,1,4,0], // allWords 3: coral|solar|tools
  ["lady-such","such","lady","cash","duly",3,"","","cash-duly",15], // allWords 5: clay|dahl|dash|days|lacy
  ["crank-isles","crank","isles","races","slink",3,"","","races-slink",10], // allWords 16: acres|arise|cakes|cares|cases|clerk|kilns|likes|links|rains|raise|riles|sarin|scans|scare|snack
  ["grew-wane","wane","grew","gnaw","were",3,"","","gnaw-were",9], // allWords 2: anew|wage
  ["relax-saint","relax","saint","altar","nixes",5,"","","altar-nixes",30], // allWords 21: alert|alter|atlas|axles|inert|inset|inter|irate|later|laxer|least|satin|slant|slate|stain|stale|steal|stein|tales|tiara|train
  ["bulbs-cooks","cooks","bulbs","books","clubs",2,"","","cannot be reversed",7,92,1,4,0], // allWords 4: blobs|blocs|boobs|locks
  ["bar-row","bar","row","rob","war",3,"","","rob-war",14,73,4,11,0], // allWords 5: bow|bra|bro|orb|raw
  ["diner-torch","diner","torch","notch","rider",3,"","","notch-rider",8,87,2,5,0], // allWords 16: chord|drier|drone|hired|honed|horde|inert|inter|order|other|retro|tenor|their|thine|toner|trier
  ["slang-twice","slang","twice","slice","twang",2,"","","slice-twang",1,92,1,4,0], // allWords 15: glint|inlet|laces|lanes|leans|liens|lines|scale|sling|swine|swing|twine|wanes|wines|wings
  ["seen-twit","seen","twit","newt","ties",5,"","","newt-ties",26], // allWords 13: news|sewn|sine|site|stew|teen|tees|tine|twin|went|west|wins|wits
  ["sulks-votes","sulks","votes","loves","tusks",3,"","","loves-tusks",8,81,3,7,0], // allWords 4: loses|soles|solve|stove
  ["earl-stat","earl","stat","arts","tale",3,"","","arts-tale",10,82,3,6,0], // allWords 14: alas|lars|last|late|lear|rate|rats|real|salt|star|tate|teal|tear|tsar
  ["adore-build","adore","build","aloud","bride",4,"","","aloud-bride",16,92,1,4,0], // allWords 3: aired|bored|ideal
  ["none-pole","pole","none","lone","nope",3,"","","cannot be reversed",8,80,3,8,0], // allWords 3: neon|noel|open
  ["lamp-poor","poor","lamp","pool","ramp",4,"","","pool-ramp",23,87,2,5,0], // allWords 8: loop|opal|oral|palm|polo|poop|prom|romp
  ["beta-guru","guru","beta","ragu","tube",3,"","","cannot be reversed",17,77,4,7,0], // allWords 8: abet|bare|bear|beat|gate|gear|rage|urge
  ["ago-hex","hex","ago","axe","hog",2,"","","axe-hog",9,86,2,6,0], // allWords 0
  ["brass-mouth","mouth","brass","brush","moats",2,"","","brush-moats",3,92,1,4,0], // allWords 13: atoms|boast|boats|bouts|brash|brats|burst|harms|marsh|shrub|smart|thrum|trams
  ["droll-surge","surge","droll","rolls","urged",2,"","","rolls-urged",6,80,3,8,0], // allWords 11: goers|loser|louse|lured|lures|ogres|older|roles|ruled|rules|urges
  ["hurt-page","hurt","page","huge","part",2,"","","huge-part",1], // allWords 9: hare|hart|hear|pear|pure|reap|tarp|thug|trap
  ["seats-wiped","wiped","seats","speed","waits",3,"","","speed-waits",11,92,1,4,0], // allWords 23: aides|aside|asset|dates|eased|eases|ideas|pests|seeps|spied|spies|spits|stade|stead|steps|sweat|sweep|swept|swipe|waist|waste|weeps|wipes
  ["aids-pill","pill","aids","dial","lips",3,"","","dial-lips",8,76,4,8,0], // allWords 5: dips|laid|said|sail|slip
  ["outs-rook","rook","outs","ours","took",4,"","","ours-took",13], // allWords 4: rust|sort|sour|turk
  ["abet-vein","vein","abet","bait","even",2,"","","bait-even",6,86,2,6,0], // allWords 5: bane|bean|beat|beta|vine
  ["deer-raid","raid","deer","died","rear",3,"","","died-rear",9,92,1,4,0], // allWords 10: arid|dare|dead|dear|deed|dire|rare|read|reed|ride
  ["dab-rue","dab","rue","bud","ear",3,"","","bud-ear",14], // allWords 8: are|bad|bar|bra|dub|due|era|rub
  ["flip-snug","flip","snug","gulf","pins",5,"","","gulf-pins",26,87,2,5,0], // allWords 14: gnus|guns|lips|lugs|plus|puns|sign|sing|slip|slug|snip|spin|spun|sung
  ["cave-gird","cave","gird","card","give",2,"","","card-give",1], // allWords 11: acre|care|drag|gave|gear|grad|grid|race|rage|rice|vice
  ["stops-study","study","stops","dusty","posts",2,"","","dusty-posts",14], // allWords 3: spots|studs|typos
  ["patch-tides","tides","patch","ditch","tapes",4,"","","ditch-tapes",11], // allWords 21: dates|death|diets|edits|hated|pacts|paste|pitch|septa|sited|spade|spate|spied|spite|stade|state|stead|stipe|taste|theta|tithe
  ["deny-lugs","deny","lugs","ends","ugly",2,"","","ends-ugly",7], // allWords 5: edgy|legs|lens|send|slug
  ["asked-onset","asked","onset","doses","taken",4,"","","doses-taken",25,92,1,4,0], // allWords 17: asset|deans|knead|nodes|nosed|notes|seats|sedan|seton|skate|stake|steak|stoke|stone|takes|token|tones
  ["vital-whale","vital","whale","villa","wheat",4,"","","villa-wheat",16], // allWords 5: alive|avail|halve|twill|vitae
  ["sack-thus","sack","thus","acts","husk",3,"","","acts-husk",9], // allWords 6: cask|cast|cats|huts|shut|tack
  ["kind-slot","kind","slot","knit","sold",2,"","","knit-sold",6,87,2,5,0], // allWords 4: lost|lots|olds|tins
  ["spa-was","was","spa","ass","paw",2,"","","ass-paw",8], // allWords 2: sap|saw
  ["prone-souls","prone","souls","nurse","loops",5,"","","loops-nurse",26,92,1,4,0], // allWords 20: loose|loser|louse|lures|noose|pools|prune|roles|rules|runes|senor|sloop|slurp|slurs|snoop|snore|solos|spool|spoon|spurn
  ["begin-debut","begin","debut","begun","debit",1,"","","begun-debit",1,92,1,4,0], // allWords 3: being|binge|nudge
  ["neat-swat","neat","swat","east","want",2,"","","east-want",7,82,3,6,0], // allWords 4: ante|eats|seat|teas
  ["cork-demo","cork","demo","mock","redo",3,"","","mock-redo",9,87,2,5,0], // allWords 12: come|core|dome|doom|door|dork|drek|mode|mood|odor|rock|rode
  ["holes-joust","joust","holes","house","jolts",2,"","","house-jolts",6,92,1,4,0], // allWords 5: hotel|shout|slosh|sloth|south
  ["fell-pace","fell","pace","clef","leap",3,"","","clef-leap",20,87,2,5,0], // allWords 13: cafe|calf|cape|clap|face|fall|feel|flea|flee|leaf|pale|peel|plea
  ["mills-tanks","mills","tanks","small","stink",2,"","","small-stink",7,87,2,5,0], // allWords 10: knits|lilts|malls|slant|stalk|stall|stank|still|talks|tills
  ["ruby-some","ruby","some","busy","more",3,"","","busy-more",8], // allWords 6: bore|boys|bury|buys|muse|robe
  ["cult-neck","cult","neck","cent","luck",3,"","","cent-luck",8], // allWords 1: lent
  ["dig-pod","dig","pod","dip","god",3,"","","dip-god",14,81,3,7,0], // allWords 4: did|dog|odd|pig
  ["drag-gone","gone","drag","agog","nerd",4,"","","agog-nerd",21], // allWords 10: dare|dear|done|dong|gear|gong|grad|node|rage|read
  ["corny-fungi","corny","fungi","corgi","funny",2,"","","corgi-funny",1], // allWords 2: crony|incur
  ["dirt-rope","dirt","rope","port","ride",3,"","","port-ride",8,82,3,6,0], // allWords 9: dire|dope|pier|pore|redo|repo|ripe|rode|trip
  ["born-dodo","born","dodo","bond","door",2,"","","bond-door",6,86,2,6,0], // allWords 1: odor
  ["amber-codes","amber","codes","decor","beams",3,"","","beams-decor",17,82,3,6,0], // allWords 8: adore|armed|bream|coder|credo|dames|dream|madre
  ["dash-tons","dash","tons","host","sand",4,"dans","tosh","host-sand",26,92,1,4,0], // allWords 9: ants|dons|hand|hast|hats|nods|shot|than|toss
  ["rotor-stove","rotor","stove","overt","torso",3,"","","overt-torso",18], // allWords 8: otter|roost|roots|torts|totes|trove|voter|votes
  ["basic-fades","basic","fades","basis","faced",3,"","","basis-faced",8,92,1,4,0], // allWords 7: based|bases|beads|cafes|decaf|faces|safes
  ["jolly-pumps","jolly","pumps","polls","jumpy",2,"","","jumpy-polls",3,92,1,4,0], // allWords 7: jumps|lumps|lumpy|plops|plums|pulls|slump
  ["eye-led","eye","led","dye","eel",3,"","","dye-eel",10], // allWords 1: dee
  ["happy-legit","happy","legit","apply","eight",3,"","","apply-eight",9], // allWords 0
  ["clue-trip","clue","trip","clip","true",2,"","","clip-true",1], // allWords 9: cure|ecru|lice|lite|rice|rite|tier|tile|tire
  ["lacks-reply","lacks","reply","calls","perky",3,"","","calls-perky",7], // allWords 8: cells|clary|parks|perks|racks|slack|spark|spell
  ["lava-sing","lava","sing","nags","vial",3,"","","nags-vial",18], // allWords 6: ling|nail|sang|sign|snag|visa
  ["acre-foal","acre","foal","cafe","oral",3,"","","cafe-oral",10], // allWords 8: aero|calf|care|face|fore|loaf|race|rolf
  ["civil-roger","civil","roger","logic","river",4,"","","logic-river",24,92,1,4,0], // allWords 7: clove|corgi|cover|liver|lover|rigor|rover
  ["flee-hate","hate","flee","feta","heel",3,"","","cannot be reversed",10,86,2,6,0], // allWords 6: fate|feat|feel|felt|heat|left
  ["ribs-word","word","ribs","bird","rows",3,"","","bird-rows",8], // allWords 2: bows|bros
  ["meats-skits","skits","meats","tasks","times",3,"","","tasks-times",18,87,2,5,0], // allWords 11: asset|emits|items|mates|mites|seats|sites|smite|steam|tames|teams
  ["key-pay","pay","key","yak","yep",3,"","","yak-yep",9,76,4,8,0], // allWords 2: kay|yap
  ["loses-snide","snide","loses","idols","sense",4,"","","idols-sense",20], // allWords 11: doses|lends|liens|lined|lines|oiled|oldie|seine|sends|soles|solid
  ["awash-trait","awash","trait","trash","await",2,"","","await-trash",1], // allWords 6: start|swath|tarts|tiara|watts|whats
  ["husk-newt","husk","newt","knew","thus",2,"","","knew-thus",7,87,2,5,0], // allWords 10: huts|nest|nets|nuts|sent|shut|stun|sunk|tens|went
  ["brat-role","brat","role","blot","rare",3,"","","blot-rare",9], // allWords 8: aero|bare|bear|boat|bolt|lobe|lore|rear
  ["liner-theft","theft","liner","ether","flint",3,"","","ether-flint",11,82,3,6,0], // allWords 12: elite|filet|flier|inert|inlet|inter|refit|rifle|teeth|tenth|there|three
  ["dead-yowl","dead","yowl","dewy","load",4,"","","dewy-load",26,92,1,4,0], // allWords 5: dale|deal|lead|lewd|weld
  ["male-peak","peak","male","make","plea",2,"","","make-plea",9,87,2,5,0], // allWords 5: lame|leap|meal|pale|peel
  ["mines-wears","mines","wears","smear","swine",2,"","","smear-swine",5], // allWords 4: mares|swear|wares|wines
  ["tacos-taste","tacos","taste","coats","state",2,"","","coats-state",14], // allWords 3: ascot|coast|stats
  ["gut-owl","owl","gut","lug","two",3,"","","lug-two",10,72,5,8,0], // allWords 3: low|out|tug
  ["nose-tamp","nose","tamp","mean","spot",4,"","","mean-spot",22], // allWords 30: amen|east|eats|eons|mane|mate|meat|meta|name|omen|ones|pans|past|pats|pons|post|pots|sane|seat|snap|span|spat|stop|tame|taps|team|teas|toes|tome|tops
  ["badge-hires","badge","hires","hides","barge",1,"","","barge-hides",2,92,1,4,0], // allWords 16: based|beads|bears|brags|grabs|hades|hares|heads|hears|heirs|saber|sabre|shade|share|shear|shire
  ["earns-worth","worth","earns","heart","sworn",3,"","","heart-sworn",8], // allWords 19: aster|earth|hater|heron|nears|other|rates|senor|snare|snore|stare|store|straw|tears|throw|warns|warts|worst|wrath
  ["chin-demo","demo","chin","inch","mode",2,"","","inch-mode",14,76,4,8,0], // allWords 6: come|dine|dome|hind|mend|nice
  ["curls-thank","thank","curls","chalk","turns",2,"","","chalk-turns",3], // allWords 7: aunts|clash|halts|runts|sault|shalt|trunk
  ["plugs-tooth","tooth","plugs","plots","tough",2,"","","cannot be reversed",2,92,1,4,0], // allWords 9: gluts|gusto|ought|photo|spout|stoop|stout|toots|touts
  ["film-seed","film","seed","feed","slim",2,"","","feed-slim",8], // allWords 8: dies|fled|lids|seem|semi|side|sled|slid
  ["bride-quota","bride","quota","broad","quiet",3,"","","broad-quiet",7], // allWords 11: abort|about|biter|board|bored|braid|quite|quote|rabid|tabor|tribe
  ["kid-yes","kid","yes","dye","ski",2,"","","dye-ski",8], // allWords 0
  ["hell-void","hell","void","hold","veil",2,"","","hold-veil",3,92,1,4,0], // allWords 6: dive|evil|held|hide|live|vile
  ["leek-less","less","leek","elks","else",3,"","","cannot be reversed",17,82,3,6,0], // allWords 2: eels|keel
  ["belts-hoops","hoops","belts","boots","helps",2,"","","cannot be reversed",2,92,1,4,0], // allWords 8: bolts|boost|ethos|hopes|plebs|shoot|sloth|those
  ["dump-plop","dump","plop","plod","pump",3,"","","plod-pump",23,92,1,4,0], // allWords 0
  ["mango-races","mango","races","cargo","names",4,"","","cargo-names",11], // allWords 14: acres|among|argon|cameo|cares|earns|groan|means|mensa|nears|orang|organ|scare|snare
  ["lava-only","lava","only","nova","ally",3,"","","ally-nova",9], // allWords 1: loan
  ["diver-legit","diver","legit","lever","digit",2,"","","digit-lever",1], // allWords 7: drive|greed|leger|liver|revel|ridge|rigid
  ["dude-tone","tone","dude","dote","nude",3,"","","cannot be reversed",9,82,3,6,0], // allWords 6: done|duet|dune|node|note|tune
  ["eager-shade","eager","shade","hedge","areas",5,"","","areas-hedge",28], // allWords 16: agree|degas|drags|gears|grade|grads|hades|hares|heads|heard|hears|raged|rages|shard|share|shear
  ["eat-rip","eat","rip","pie","tar",3,"","","pie-tar",9,86,2,6,0], // allWords 8: ape|art|ate|pea|rap|rat|tea|tie
  ["redo-town","redo","town","went","door",3,"","","door-went",18], // allWords 9: dent|dote|nerd|newt|odor|rode|tend|wore|worn
  ["maid-tool","maid","tool","mood","tail",2,"","","mood-tail",2,87,2,5,0], // allWords 11: alto|amid|doom|lima|limo|loom|loot|mail|milo|modi|toad
  ["bucks-codes","bucks","codes","docks","cubes",3,"","","cubes-docks",7,87,2,5,0], // allWords 1: ducks
  ["grid-shut","shut","grid","drug","this",3,"","","drug-this",22], // allWords 9: dish|gird|grit|hits|huts|rust|stir|thug|thus
  ["snaps-taped","taped","snaps","spend","tapas",3,"","","spend-tapas",12,92,1,4,0], // allWords 13: adapt|adept|deans|pants|pasta|paste|sedan|septa|spade|spans|spate|spent|tapes
  ["rooms-tuner","tuner","rooms","norms","outer",3,"","","norms-outer",8,92,1,4,0], // allWords 19: euros|moors|motor|notes|nurse|onset|rerun|rouse|route|rumor|runes|senor|seton|snore|stone|tenor|toner|tones|tunes
  ["land-mice","land","mice","mind","lace",2,"","","lace-mind",1], // allWords 14: amen|came|clad|damn|lane|lean|lice|lien|line|mace|mane|mean|mine|name
  ["acute-niche","acute","niche","cache","unite",3,"","","cache-unite",8,87,2,5,0], // allWords 0
  ["sixes-tract","sixes","tract","carts","exist",4,"","","carts-exist",22], // allWords 13: aster|attic|crass|exits|rates|scars|sears|stare|tacit|tater|tears|tetra|treat
  ["peg-way","peg","way","gap","yew",3,"","","gap-yew",14], // allWords 5: pay|wag|yap|yaw|yep
  ["swell-video","video","swell","slide","vowel",3,"","","slide-vowel",10], // allWords 10: devil|idols|lisle|lived|lowes|olive|solid|vowed|welds|wells
  ["bevy-wide","bevy","wide","dewy","vibe",4,"","","dewy-vibe",13,92,1,4,0], // allWords 3: bide|view|weed
  ["canoe-terse","canoe","terse","ocean","steer",2,"","","ocean-steer",19,80,3,8,0], // allWords 17: acres|aster|atone|canes|cares|ceres|ester|races|rates|reset|scare|scene|stare|tears|teens|tense|trees
  ["hike-news","hike","news","keen","wish",4,"nike","hews","keen-wish",14], // allWords 6: knee|sewn|sink|skin|wine|wins
  ["honey-wills","honey","wills","holly","wines",2,"","","holly-wines",2], // allWords 12: hills|hilly|holes|hoyle|lowes|lowly|shill|shine|shone|swill|swine|wiles
  ["crack-rites","crack","rites","acres","trick",3,"","","acres-trick",12,86,2,6,0], // allWords 11: arise|cares|cites|crest|races|raise|rears|scare|tiers|tires|tries
  ["silk-waft","silk","waft","sift","walk",2,"","","sift-walk",1], // allWords 9: fast|fats|fist|fits|last|list|salt|slit|wilt
  ["dies-sake","sake","dies","ease","kids",3,"","","ease-kids",9,87,2,5,0], // allWords 7: asks|disk|kiss|seas|side|skid|skis
  ["rage-warn","warn","rage","gnaw","rear",3,"","","gnaw-rear",20,92,1,4,0], // allWords 7: gear|gran|rang|rare|wage|ware|wear
  ["are-hex","hex","are","axe","her",2,"","","axe-her",9,86,2,6,0], // allWords 2: ear|era
  ["lady-rise","lady","rise","lied","rays",3,"","","lied-rays",9], // allWords 22: dale|dare|deal|dear|deli|dire|ears|eras|idle|idly|isle|lays|lead|lies|read|ride|sale|seal|sera|sire|slay|yard
  ["male-nick","nick","male","came","link",3,"","","came-link",9,81,3,7,0], // allWords 16: acne|cane|kiln|lame|lane|lean|lien|lime|line|mace|mack|meal|mice|mile|milk|nice
  ["looks-picks","looks","picks","slick","spook",2,"","","slick-spook",5], // allWords 3: kilos|licks|locks
  ["bulbs-slope","bulbs","slope","blobs","pulse",4,"","","blobs-pulse",22], // allWords 7: bells|blues|lobes|lopes|poles|soups|spell
  ["duty-tips","tips","duty","puts","tidy",3,"","","puts-tidy",15,72,5,8,0], // allWords 7: dips|dust|pits|pity|spit|stud|tits
  ["carry-meter","carry","meter","cater","merry",2,"","","cater-merry",1,92,1,4,0], // allWords 12: carer|carte|crate|emery|erect|marry|meaty|metre|racer|react|tamer|trace
  ["heard-rains","heard","rains","drain","shear",2,"sarah","diner","drain-shear",6], // allWords 26: diner|drier|earns|hairs|hares|hears|heirs|hired|hires|nadir|nears|radar|rears|reins|resin|rider|rinse|risen|riser|saran|sarin|share|shine|shire|siren|snare
  ["robot-using","using","robot","bogus","intro",4,"","","bogus-intro",22,92,1,4,0], // allWords 10: bouts|bunts|grins|groin|nitro|rings|riots|suing|trois|units
  ["elm-rag","elm","rag","arm","leg",2,"","","arm-leg",7], // allWords 5: age|gel|mar|mel|ram
  ["fires-satay","satay","fires","fairy","seats",3,"","","fairy-seats",12,92,1,4,0], // allWords 16: asset|fairs|fares|fates|fears|feast|feats|fiery|fries|rises|safer|sears|serif|sites|years|yeast
  ["rode-sold","sold","rode","dose","lord",3,"","","dose-lord",8], // allWords 8: does|lore|lose|odds|olds|redo|role|sole
  ["hates-pipes","hates","pipes","shape","spite",2,"","","shape-spite",7,87,2,5,0], // allWords 10: haste|heaps|heats|heist|paste|phase|septa|spate|stipe|tapes
  ["earl-feet","feet","earl","leaf","tree",5,"","","leaf-tree",26,92,1,4,0], // allWords 17: fart|fate|feat|feel|feta|fete|flea|flee|frat|fret|lear|leer|raft|rate|real|reel|tear
  ["bean-what","bean","what","bath","wane",2,"","","bath-wane",9,87,2,5,0], // allWords 6: abet|anew|bane|beat|beta|thaw
  ["corks-naval","naval","corks","ranks","vocal",4,"","","ranks-vocal",16,92,1,4,0], // allWords 10: arson|carol|coral|orcas|racks|rocks|sacra|saran|snark|sonar
  ["used-veil","used","veil","sued","evil",1,"","","evil-sued",3], // allWords 5: dive|dues|lieu|live|vile
  ["coal-self","coal","self","sofa","cell",3,"","","cell-sofa",12,87,2,5,0], // allWords 10: also|cafe|clef|cola|face|lace|safe|sale|seal|sell
  ["burns-stock","stock","burns","knots","scrub",5,"","","knots-scrub",29,92,1,4,0], // allWords 4: bonus|costs|curbs|scots
  ["now-tie","now","tie","eon","wit",3,"","","eon-wit",10], // allWords 6: one|own|toe|two|win|won
  ["food-knit","food","knit","foot","kind",2,"","","foot-kind",6,87,2,5,0], // allWords 5: find|fond|font|knot|took
  ["oops-pork","oops","pork","pops","rook",3,"","","pops-rook",8], // allWords 1: pros
  ["ashes-drill","drill","ashes","rides","shall",3,"","","rides-shall",10], // allWords 24: aisle|arise|dries|hales|halls|hares|heals|hears|herds|leash|liars|rails|raise|riled|sails|shale|share|shear|sheds|shred|sides|sired|slash|slide
  ["comet-hours","comet","hours","court","homes",2,"","","court-homes",2,92,1,4,0], // allWords 4: comes|comte|house|scour
  ["acid-stem","acid","stem","disc","meat",3,"","","disc-meat",18], // allWords 9: aced|came|date|mace|mate|meta|mist|tame|team
  ["motel-wives","motel","wives","times","vowel",4,"","","times-vowel",12,87,2,5,0], // allWords 8: emits|items|mites|moves|smite|tomes|towel|views
  ["bling-sweat","bling","sweat","swing","bleat",2,"","","bleat-swing",1], // allWords 18: bagel|gable|gales|glens|least|slate|sling|stale|steal|table|tails|tales|twins|wages|waist|waits|waste|wings
  ["cafe-dark","dark","cafe","fade","rack",3,"","","fade-rack",8], // allWords 8: acre|care|dare|deaf|dear|face|race|read
  ["gosh-rice","gosh","rice","sigh","core",3,"","","core-sigh",15], // allWords 9: egos|goes|hogs|rich|rise|rose|shri|sire|sore
  ["add-nab","nab","add","and","dab",2,"","","and-dab",7,86,2,6,0], // allWords 4: baa|bad|ban|dad
  ["plot-wars","plot","wars","slow","tarp",4,"","","slow-tarp",23,92,1,4,0], // allWords 9: atop|lows|owls|part|raps|rasp|soap|trap|wart
  ["keen-mile","keen","mile","mine","keel",3,"","","keel-mine",9], // allWords 6: kiln|knee|leek|like|lime|link
  ["rolls-skied","skied","rolls","dolls","skier",4,"","","dolls-skier",14], // allWords 13: droll|idols|irked|loser|loses|older|roles|silks|silos|skies|soils|soles|solid
  ["bowl-demo","bowl","demo","doom","blew",2,"","","blew-doom",6], // allWords 10: blow|boom|dome|lewd|mode|mold|mood|owed|weld|wood
  ["cash-guru","cash","guru","ragu","such",3,"","","ragu-such",15,75,4,9,0], // allWords 5: arch|char|gush|hags|hugs
  ["alias-drone","alias","drone","nails","adore",3,"","","adore-nails",21,92,1,4,0], // allWords 21: aired|alien|alone|arias|arson|dials|diner|ideal|lined|loads|loans|olden|raids|rains|rinds|roads|salon|sarin|slain|snail|sonar
  ["kiss-mall","kiss","mall","kill","mass",2,"","","kill-mass",1], // allWords 8: asks|mill|miss|silk|sims|skis|slam|slim
  ["pants-perks","pants","perks","spark","spent",2,"","","spark-spent",7,82,3,6,0], // allWords 6: parks|parts|spank|strap|strep|traps
  ["sends-these","sends","these","sheds","tense",2,"","","sheds-tense",2,92,1,4,0], // allWords 10: dense|dents|needs|nests|seeds|sense|sheet|steed|teens|tends
  ["ear-pro","ear","pro","ore","rap",3,"","","ore-rap",9,85,2,7,0], // allWords 2: are|era
  ["dive-near","dive","near","raid","even",5,"","","even-raid",26,87,2,5,0], // allWords 10: aide|arid|dare|dear|earn|idea|rain|read|vein|vine
  ["fast-lilt","lilt","fast","lift","salt",3,"","","lift-salt",8], // allWords 11: fats|fist|fits|flat|flit|last|list|sift|slit|tall|till
  ["beams-dally","dally","beams","balmy","deals",2,"","","cannot be reversed",3,92,1,4,0], // allWords 16: bales|balls|bally|basal|bells|belly|dales|dames|delay|lambs|leads|madly|maybe|sable|salad|samba
  ["isles-trace","trace","isles","rates","slice",3,"","","rates-slice",10], // allWords 21: arise|asset|aster|carte|carts|caste|casts|cater|celts|crate|eater|raise|react|relic|riles|seats|sleet|stare|steel|tears|tease
  ["gawk-late","gawk","late","talk","wage",3,"","","talk-wage",8,75,4,9,0], // allWords 4: gate|tale|teal|walk
  ["gauge-limit","gauge","limit","guilt","image",5,"","","guilt-image",25], // allWords 2: gleam|guile
  ["levy-nags","levy","nags","legs","navy",2,"","","legs-navy",1], // allWords 7: envy|gals|sang|slag|snag|vans|yang
  ["party-sells","party","sells","lasts","reply",4,"","","lasts-reply",18], // allWords 21: aptly|artsy|parts|pelts|rests|salts|salty|slats|slept|spell|spelt|splat|stars|strap|stray|strep|style|traps|trays|tyres|yells
  ["tasks-waste","tasks","waste","stake","swats",2,"","","stake-swats",9], // allWords 9: askew|skate|state|stats|steak|sweat|takes|taste|wakes
  ["ink-sat","ink","sat","ask","nit",2,"","","ask-nit",7], // allWords 2: kin|tin
  ["gears-since","since","gears","cease","rings",4,"","","cease-rings",22], // allWords 21: agree|arise|cages|cases|eager|erase|genre|green|grins|rages|raise|reign|reins|resin|rinse|risen|saree|scene|sears|siren|sneer
  ["mains-super","super","mains","minus","spear",2,"","","minus-spear",6,92,1,4,0], // allWords 15: arise|issue|minas|parse|pears|purse|rains|raise|ruins|sarin|sinus|snaps|spans|spare|spurn
  ["nope-soft","soft","nope","font","pose",3,"","","font-pose",8], // allWords 7: foes|open|post|pots|spot|stop|tops
  ["fare-teem","fare","teem","free","team",2,"","","cannot be reversed",6,87,2,5,0], // allWords 15: fame|farm|fear|mart|mate|meat|meet|meta|rate|reef|tame|tear|term|tram|tree
  ["abide-sacks","sacks","abide","aside","backs",3,"","","aside-backs",8,82,3,6,0], // allWords 5: aides|bikes|cakes|casks|ideas
  ["next-twit","next","twit","text","twin",3,"","","text-twin",23,86,2,6,0], // allWords 1: tine
  ["ample-blank","ample","blank","amble","plank",4,"","","amble-plank",12], // allWords 7: blame|label|lapel|maple|panel|penal|plane
  ["axed-yeti","yeti","axed","eyed","taxi",3,"","","eyed-taxi",9,92,1,4,0], // allWords 1: date
  ["gay-vie","gay","vie","age","ivy",2,"","","age-ivy",7], // allWords 1: ave
  ["gangs-moody","moody","gangs","goods","mangy",2,"","","cannot be reversed",3,92,1,4,0], // allWords 3: goody|moods|sodom
  ["death-hovel","hovel","death","heath","loved",3,"","","heath-loved",22,87,2,5,0], // allWords 8: altho|dealt|delta|delve|devel|hated|lathe|loath
  ["eons-pets","pets","eons","seen","spot",2,"","","seen-spot",8,77,4,7,0], // allWords 12: nose|ones|pens|pest|pons|post|pots|step|stop|tees|toes|tops
  ["drift-ether","drift","ether","rider","theft",3,"","","rider-theft",10], // allWords 7: drier|refit|teeth|there|three|tired|tried
  ["basil-smell","basil","smell","balls","smile",2,"","","balls-smile",7,92,1,4,0], // allWords 7: aisle|label|limbs|limes|miles|sails|slime
  ["lame-pale","pale","lame","leap","meal",2,"","","leap-meal",15,86,2,6,0], // allWords 2: male|plea
  ["buzz-fish","buzz","fish","bush","fizz",2,"","","bush-fizz",1], // allWords 1: hubs
  ["lost-pelt","lost","pelt","tell","tops",3,"","","tell-tops",22,92,1,4,0], // allWords 13: lest|lets|lots|pest|pets|plot|post|pots|slot|spot|step|stop|toll
  ["died-sink","died","sink","dies","kind",3,"","","cannot be reversed",19,75,4,9,0], // allWords 2: side|skin
  ["bat-ewe","bat","ewe","ate","web",2,"abe","wet","cannot be reversed",8,82,3,6,0], // allWords 5: eat|tab|tea|wee|wet
  ["gives-panel","gives","panel","gavel","pines",2,"","","gavel-pines",3], // allWords 9: angel|angle|glean|panes|penal|plane|singe|snipe|spine
  ["rule-vice","rule","vice","live","cure",3,"","","cure-live",9,85,2,7,0], // allWords 7: ecru|evil|lure|rice|rile|veil|vile
  ["chief-rents","chief","rents","shirt","fence",4,"","","fence-shirt",23], // allWords 17: cents|cites|firth|fitch|frith|heirs|hires|refit|rites|scene|scent|shire|sneer|stern|tiers|tires|tries
  ["arts-oval","arts","oval","sort","lava",2,"","","lava-sort",6], // allWords 7: oral|rats|soar|star|tsar|vast|volt
  ["rites-slain","rites","slain","stein","rails",3,"","","rails-stein",12], // allWords 25: anise|arise|earls|inert|inset|inter|lanes|laser|leans|learn|liars|lists|nails|raise|reals|renal|sails|sales|seals|sites|slits|snail|tiers|tires|tries
  ["shape-sword","sword","shape","hopes","wards",2,"","","hopes-wards",7], // allWords 17: draws|hares|heaps|hears|heros|horse|phase|shard|share|shear|shore|swear|swore|wares|wears|words|worse
  ["just-vary","just","vary","jury","vast",2,"","","jury-vast",1], // allWords 2: jays|juts
  ["fill-town","fill","town","lint","wolf",4,"","","lint-wolf",13], // allWords 6: flow|lilt|till|toll|twin|wilt
  ["amen-veil","veil","amen","even","mail",3,"","","even-mail",9,87,2,5,0], // allWords 15: amin|evil|lame|lima|live|main|male|mane|meal|mean|mina|name|vein|vile|vine
  ["ilk-rid","rid","ilk","lid","irk",2,"","","irk-lid",7,75,4,9,0], // allWords 0
  ["drive-salty","drive","salty","slave","dirty",3,"","","dirty-slave",9], // allWords 15: dealt|delta|diver|least|rites|salve|slate|stale|steal|tales|tiers|tired|tires|tried|tries
  ["races-slick","races","slick","crack","isles",3,"","","crack-isles",12,86,2,6,0], // allWords 11: acres|arise|cakes|cares|cases|clerk|licks|likes|raise|riles|scare
  ["aids-solo","aids","solo","oils","soda",3,"oslo","sadi","oils-soda",22,87,2,5,0], // allWords 7: also|diss|dosa|loss|said|sail|soil
  ["booty-wrath","booty","wrath","booth","warty",2,"","","booth-warty",8], // allWords 4: broth|throb|throw|worth
  ["shear-their","shear","their","heirs","heart",2,"","","heart-heirs",6], // allWords 7: earth|hares|hater|hears|hires|share|shire
  ["cram-wise","cram","wise","swim","acre",2,"","","acre-swim",9,87,2,5,0], // allWords 5: care|race|ware|warm|wear
  ["bags-case","bags","case","bass","cage",1,"","","bass-cage",1,92,1,4,0], // allWords 2: aces|base
  ["stall-sweep","stall","sweep","wells","tapes",4,"","","tapes-wells",14], // allWords 19: least|paste|pelts|septa|slate|sleet|slept|spate|spelt|splat|stale|steal|steel|steep|swell|tales|tells|walls|weeps
  ["mock-rose","mock","rose","some","cork",3,"","","cork-some",8], // allWords 4: come|core|rock|sore
  ["ore-pad","ore","pad","ape","rod",2,"","","ape-rod",7], // allWords 2: pea|per
  ["laws-spin","laws","spin","lips","swan",3,"","","lips-swan",9,87,2,5,0], // allWords 7: awls|lawn|nail|pins|sail|slip|snip
  ["moral-watts","moral","watts","atoms","trawl",5,"","","atoms-trawl",26], // allWords 9: alarm|moats|molar|smart|storm|straw|trams|warts|worst
  ["bias-debt","bias","debt","beat","dibs",2,"","","beat-dibs",3], // allWords 10: abet|aids|bait|base|beds|beta|bibs|bids|date|said
  ["ingot-verse","ingot","verse","overt","singe",3,"","","overt-singe",11,92,1,4,0], // allWords 18: intro|nitro|reins|resin|rinse|risen|rites|serve|sever|siege|siren|sting|tiers|tires|tries|trove|veers|voter
  ["nest-sits","nest","sits","sins","test",4,"","","sins-test",13,80,3,8,0], // allWords 9: ness|nets|sent|sets|tens|tent|tins|tint|tits
  ["ends-rude","rude","ends","nerd","used",3,"","","nerd-used",18], // allWords 4: dues|need|send|sued
  ["chant-flora","flora","chant","canal","forth",3,"","","canal-forth",9], // allWords 8: carol|chart|coral|froth|nacho|notch|roach|torch
  ["memo-tide","tide","memo","demo","mite",3,"","","cannot be reversed",9,92,1,4,0], // allWords 15: deem|diet|dime|dome|dote|edit|emit|item|meet|mode|modi|teem|tied|time|tome
  ["far-not","not","far","fat","nor",1,"","","fat-nor",0,92,1,4,0], // allWords 5: ant|for|ran|tan|ton
  ["giant-purge","giant","purge","print","gauge",3,"","","gauge-print",8], // allWords 7: gaunt|gripe|grunt|paint|prune|reign|ripen
  ["hate-riot","hate","riot","oath","tier",4,"","","oath-tier",14], // allWords 11: aero|heat|rate|rite|roti|tart|tear|that|tire|tori|trio
  ["dare-life","life","dare","fade","rile",3,"","","fade-rile",9,86,2,6,0], // allWords 11: deaf|dear|dire|earl|file|flea|leaf|lear|read|real|ride
  ["furry-males","furry","males","fuels","marry",3,"","","fuels-marry",11], // allWords 12: false|fares|fears|fleas|leafs|leafy|mares|meals|mules|safer|serum|smear
  ["droll-scare","droll","scare","cared","rolls",2,"","","cared-rolls",6], // allWords 28: acres|alder|cadre|calls|cares|cedar|clade|close|coder|cores|credo|decal|decor|dolce|earls|laced|laces|laser|loser|older|order|raced|races|reals|rears|roles|scale|score
  ["clue-pops","clue","pops","cope","plus",2,"","","cope-plus",2,87,2,5,0], // allWords 4: cops|opus|pope|soup
  ["bride-loopy","loopy","bride","doily","probe",4,"","","doily-probe",25,92,1,4,0], // allWords 7: booed|bored|oiled|older|oldie|peril|riled
  ["dealt-remix","remix","dealt","alter","mixed",3,"","","alter-mixed",18], // allWords 12: alert|delta|irate|later|laxer|merit|mitre|mixer|relax|remit|timed|timer
  ["clay-lead","clay","lead","aced","ally",2,"","","aced-ally",6], // allWords 4: clad|dale|deal|lacy
  ["era-kid","era","kid","die","ark",3,"","","ark-die",9], // allWords 3: are|ear|red
  ["held-tone","held","tone","hole","tend",2,"","","hole-tend",3,87,2,5,0], // allWords 8: dent|heel|hold|hone|note|teen|tele|told
  ["sedan-yodel","sedan","yodel","loads","needy",5,"","","loads-needy",32], // allWords 9: dales|deals|deans|delay|dense|leads|needs|nodes|nosed
  ["find-save","find","save","five","sand",2,"","","five-sand",1,92,1,4,0], // allWords 5: fave|fine|sane|sine|vase
  ["cent-rack","rack","cent","cart","neck",3,"","","cart-neck",8], // allWords 5: kern|rank|rant|rent|tern
  ["order-roofs","order","roofs","error","foods",3,"","","error-foods",10], // allWords 4: doers|doser|fords|rodeo
  ["locks-warns","locks","warns","slack","sworn",2,"","","slack-sworn",7,77,4,7,0], // allWords 4: clans|lacks|snarl|works
  ["lane-rats","lane","rats","earn","salt",3,"","","earn-salt",22,87,2,5,0], // allWords 11: arts|last|late|lean|near|rate|star|tale|teal|tear|tsar
  ["basil-hexes","basil","hexes","bases","helix",4,"","","bases-helix",17,92,1,4,0], // allWords 10: ashes|bales|basis|hails|hales|heals|heels|leash|sable|shale
  ["ocean-stale","ocean","stale","cease","talon",3,"","","cease-talon",10], // allWords 16: atone|canes|canoe|clans|clone|laces|least|scale|slant|slate|sleet|steal|steel|tales|tease|tonal
  ["eye-wag","eye","wag","age","yew",2,"","","age-yew",8], // allWords 1: awe
  ["corn-view","corn","view","crow","vein",2,"","","crow-vein",6,92,1,4,0], // allWords 6: cone|nice|once|oven|vine|wove
  ["bond-sums","bond","sums","dumb","sons",4,"","","dumb-sons",23,87,2,5,0], // allWords 8: bums|buns|dons|mobs|mods|moss|nods|suns
  ["chord-thick","chord","thick","chock","third",2,"","","chock-third",1], // allWords 2: chick|ditch
  ["lips-sell","sell","lips","less","pill",3,"","","cannot be reversed",8,87,2,5,0], // allWords 1: slip
  ["bowel-ideas","ideas","bowel","aside","elbow",2,"","","aside-elbow",14], // allWords 10: aides|based|beads|below|blade|bleed|ideal|obese|wield|wised
  ["chair-green","chair","green","cheer","grain",2,"","","cheer-grain",2,92,1,4,0], // allWords 17: anger|cairn|carer|chain|china|crane|genre|hence|hinge|nicer|niche|racer|rager|rance|range|reach|reign
  ["deep-fair","deep","fair","paid","reef",4,"","","cannot be reversed",23,87,2,5,0], // allWords 15: arid|dare|dear|deer|dire|fare|fear|fire|free|peed|raid|read|reed|ride|rife
  ["able-grab","grab","able","blab","rage",2,"","","blab-rage",7], // allWords 9: abba|area|baba|bale|brag|earl|gear|lear|real
  ["nests-nurse","nurse","nests","runts","sense",4,"","","runts-sense",11,92,1,4,0], // allWords 11: enter|rents|runes|sneer|stern|stuns|teens|tense|tuner|tunes|turns
  ["ear-max","ear","max","arm","axe",2,"","","arm-axe",7], // allWords 4: are|era|mar|ram
  ["goof-hulk","goof","hulk","gulf","hook",2,"","","gulf-hook",2,87,2,5,0], // allWords 1: golf
  ["blip-king","king","blip","glib","pink",3,"","","glib-pink",23,87,2,5,0], // allWords 0
  ["cask-lift","cask","lift","fact","silk",4,"","","fact-silk",13,87,2,5,0], // allWords 11: acts|cast|cats|flat|flit|last|list|sack|salt|sick|slit
  ["heals-these","heals","these","leash","sheet",2,"","","leash-sheet",19,86,2,6,0], // allWords 21: ashes|asset|hales|halts|haste|hates|heats|heels|lathe|least|seats|shale|shalt|slate|sleet|stale|stash|steal|steel|tales|tease
  ["bite-same","same","bite","beta","semi",3,"","","beta-semi",8], // allWords 11: abet|beam|beat|east|eats|mesa|seam|seat|site|teas|ties
  ["aware-poets","poets","aware","opera","waste",5,"","","opera-waste",26,92,1,4,0], // allWords 13: arose|pesto|pores|poser|prose|ropes|spore|swear|sweat|swept|wares|wears|wraps
  ["taco-tins","taco","tins","acts","into",2,"","","acts-into",7], // allWords 4: ants|cast|cats|coat
  ["cares-queue","queue","cares","cause","queer",3,"","","cause-queer",11,92,1,4,0], // allWords 7: acres|cease|cures|curse|races|sauce|scare
  ["dab-old","old","dab","add","lob",2,"","","add-lob",7], // allWords 3: bad|boa|dad
  ["glow-shut","glow","shut","glut","show",2,"","","glut-show",1,92,1,4,0], // allWords 13: host|huts|lost|lots|lows|lust|owls|shot|slot|slow|slut|thug|thus
  ["dance-tired","dance","tired","dried","enact",4,"","","dried-enact",33,92,1,4,0], // allWords 22: adder|cadre|cared|carte|cater|cedar|cider|crate|cried|dared|dined|dread|eared|eaten|eater|raced|rated|react|trace|trade|tread|tried
  ["oily-them","oily","them","holy","item",2,"","","holy-item",5], // allWords 9: emit|home|limo|meth|milo|mite|they|time|yeti
  ["nicer-tasks","nicer","tasks","cater","sinks",4,"","","cater-sinks",16,87,2,5,0], // allWords 45: asset|aster|canes|carte|caste|cites|crane|crank|crate|earns|karts|nears|nicks|rance|ranks|rates|react|reins|resin|rinse|risen|rites|seats|since|siren|sites|skins|skirt|skits|snack|snare|snark|stack|stare|stark|stick|tacks|tears|ticks|tiers|tires|trace|track|trick|tries
  ["siege-waves","siege","waves","wages","sieve",3,"","","sieve-wages",8,92,1,4,0], // allWords 10: eases|eaves|gases|gives|sages|saves|vases|views|weave|wives
  ["cure-dish","cure","dish","ride","such",4,"","","ride-such",13,75,4,9,0], // allWords 11: cues|dies|dire|dues|ecru|rice|rich|rude|side|sued|used
  ["data-wife","data","wife","deaf","wait",3,"","","deaf-wait",10,92,1,4,0], // allWords 6: date|diet|edit|fade|tide|tied
  ["elf-ewe","elf","ewe","eel","few",2,"","","eel-few",8], // allWords 1: wee
  ["aisle-hands","aisle","hands","nails","shade",3,"","","nails-shade",12,82,3,6,0], // allWords 18: aides|alien|aside|hades|hales|heads|heals|hides|hinds|ideas|leash|nasal|sails|salsa|shale|slain|slash|snail
  ["bark-jets","jets","bark","bats","jerk",2,"","","bats-jerk",1,92,1,4,0], // allWords 8: bars|best|bets|bras|jars|jest|stab|tabs
  ["rely-team","team","rely","melt","year",3,"","","melt-year",22], // allWords 5: mare|mate|meat|meta|tame
  ["ogres-prove","ogres","prove","grove","ropes",3,"","","grove-ropes",10], // allWords 7: goers|goose|pores|poser|prose|rover|spore
  ["coins-plant","plant","coins","clans","point",2,"","","clans-point",2], // allWords 8: canto|icons|pinot|pinto|plans|scion|sonic|tonic
  ["ghee-redo","ghee","redo","edge","hero",3,"","","edge-hero",9], // allWords 5: deer|herd|here|reed|rode
  ["cord-lace","lace","cord","cold","race",4,"","","cold-race",13], // allWords 12: acre|card|care|clad|clod|core|earl|lear|lord|lore|real|role
  ["sears-young","young","sears","agony","users",4,"","","agony-users",26], // allWords 8: gears|genus|rages|soars|surge|urges|years|yours
  ["mined-sadly","sadly","mined","manly","sided",2,"","","manly-sided",3], // allWords 9: amend|deans|denim|dimly|lands|madly|named|sedan|snide
  ["odd-yep","odd","yep","dye","pod",2,"","","dye-pod",8], // allWords 1: doe
  ["earn-slim","earn","slim","arms","line",3,"","","arms-line",10,82,3,6,0], // allWords 8: aims|lien|lime|mare|mars|mile|near|rams
  ["jock-pain","jock","pain","join","pack",2,"","","join-pack",1,87,2,5,0], // allWords 1: jack
  ["chuck-roast","chuck","roast","court","shack",4,"","","court-shack",25,92,1,4,0], // allWords 16: actor|ascot|catch|chart|chats|coast|coats|croak|hacks|hurst|hurts|scout|shark|tacos|tours|trash
  ["mode-pose","pose","mode","dope","some",3,"","","dope-some",8], // allWords 2: demo|dome
  ["duty-pass","duty","pass","dust","pays",2,"","","dust-pays",5], // allWords 9: days|past|pats|puts|saps|spat|stud|taps|yaps
  ["isles-trips","isles","trips","slips","rites",2,"","","rites-slips",6], // allWords 7: riles|sites|spits|strip|tiers|tires|tries
  ["birds-broke","birds","broke","bored","brisk",3,"","","bored-brisk",19,92,1,4,0], // allWords 2: biker|bride
  ["elite-icons","elite","icons","niece","toils",4,"","","niece-toils",23,92,1,4,0], // allWords 15: cites|coins|cones|islet|liens|lines|lions|loins|scion|scone|since|sonic|stoic|stole|tiles
  ["shift-slate","shift","slate","hates","lifts",2,"","","hates-lifts",7,81,3,7,0], // allWords 20: false|files|flats|fleas|flies|flits|haste|heats|heist|islet|leafs|least|shaft|sheaf|stale|steal|stilt|tales|tiles|tilts
  ["dad-yam","yam","dad","day","mad",3,"amy","add","cannot be reversed",9,75,4,9,0], // allWords 3: add|dam|may
  ["loyal-pasta","loyal","pasta","alloy","tapas",2,"","","alloy-tapas",14], // allWords 9: allay|aptly|atlas|playa|plots|splat|stall|tally|tolls
  ["bush-camp","bush","camp","bump","cash",2,"","","bump-cash",1], // allWords 8: bash|caps|cups|hubs|mach|much|pubs|such
  ["disco-elect","elect","disco","cited","close",5,"","","cited-close",24], // allWords 7: celts|cites|clods|colds|dolce|edict|scold
  ["birch-canon","birch","canon","baron","cinch",2,"","","baron-cinch",3], // allWords 7: abhor|acorn|chino|choir|nacho|roach|robin
  ["east-waft","east","waft","feat","swat",2,"","","feat-swat",6], // allWords 5: eats|fate|feta|seat|teas
  ["early-shots","early","shots","artsy","holes",3,"","","artsy-holes",9], // allWords 20: aster|earls|ethos|hosts|hoyle|laser|lasso|layer|leary|rates|reals|relay|slosh|stare|stars|stray|tears|teary|those|trays
  ["pile-warm","warm","pile","palm","wire",2,"","","palm-wire",3], // allWords 13: lamp|leap|limp|pale|pear|pier|plea|ramp|reap|ripe|ware|wear|weir
  ["dirt-sofa","dirt","sofa","fits","road",4,"","","fits-road",15], // allWords 10: airs|arid|fist|raid|sari|sift|soar|soft|sort|stir
  ["art-wow","art","wow","two","war",2,"","","two-war",8,87,2,5,0], // allWords 3: rat|raw|tar
  ["clip-meal","clip","meal","cape","mill",3,"","","cape-mill",12,87,2,5,0], // allWords 14: call|clap|epic|lace|lame|lamp|lice|lime|limp|male|mall|mile|pace|palm
  ["horse-ideas","horse","ideas","aides","shore",1,"","","aides-shore",3], // allWords 18: aired|aside|dries|hades|heads|heard|herds|heros|hoses|raids|rides|shade|shard|sheds|shoes|shred|sides|sired
  ["purse-salty","salty","purse","lapse","rusty",4,"","","lapse-rusty",15], // allWords 40: aptly|artsy|aster|erupt|leaps|leapt|least|lusty|pales|palsy|parse|party|pears|petal|plate|plays|pleas|pleat|prays|pulse|raspy|rates|sales|seals|sears|slate|spare|spear|spray|stale|stare|steal|stray|super|syrup|tales|taper|tears|trays|users
  ["tune-twin","twin","tune","unit","went",3,"","","unit-went",11], // allWords 1: newt
  ["left-vibe","left","vibe","five","belt",3,"","","belt-five",9,92,1,4,0], // allWords 8: bile|feel|felt|file|flee|flit|life|lift
  ["basis-vowel","basis","vowel","below","visas",3,"","","below-visas",19,92,1,4,0], // allWords 17: bales|bases|basil|boils|bowel|elbow|lobes|loves|sable|salve|saves|silva|slave|solve|vases|vials|waves
  ["crane-ropes","crane","ropes","prone","acres",3,"","","acres-prone",12,85,2,7,0], // allWords 18: arose|arson|canoe|cares|creep|crepe|ocean|ponce|pores|poser|prose|races|rance|rears|scare|scope|sonar|spore
  ["grow-loud","grow","loud","wool","drug",4,"","","drug-wool",26], // allWords 3: good|lord|ludo
  ["pet-soy","pet","soy","top","yes",3,"","","top-yes",14,82,3,6,0], // allWords 4: opt|pot|set|yep
  ["peer-trap","peer","trap","prep","tear",2,"","","cannot be reversed",3,86,2,6,0], // allWords 9: part|pear|peat|peep|rate|reap|tape|tarp|tree
  ["gate-nerd","gate","nerd","rage","tend",3,"","","rage-tend",9,87,2,5,0], // allWords 11: ante|darn|dent|drag|earn|gear|grad|near|neat|rand|teen
  ["dough-lacks","lacks","dough","docks","laugh",2,"","","docks-laugh",1], // allWords 7: chalk|clogs|ghoul|kudos|locks|lough|slack
  ["bull-face","bull","face","club","leaf",3,"","","club-leaf",20,87,2,5,0], // allWords 12: able|bale|ball|blue|cafe|calf|cube|fall|flea|fuel|full|lube
  ["amen-vein","amen","vein","even","main",2,"","","even-main",6,86,2,6,0], // allWords 6: amin|mane|mean|mina|name|vine
  ["cakes-piers","cakes","piers","cries","peaks",2,"","","cries-peaks",6], // allWords 17: acres|cares|cease|parks|parse|pears|pease|pikes|races|racks|scare|spare|spark|speak|spear|spike|spire
  ["media-newer","newer","media","aimed","renew",2,"","","aimed-renew",14], // allWords 4: diner|edema|ender|mired
  ["snack-swell","swell","snack","necks","walls",2,"","","necks-walls",7], // allWords 5: clans|claws|snell|walks|wells
  ["nacho-trace","nacho","trace","acorn","cheat",4,"","","acorn-cheat",21], // allWords 13: actor|carte|cater|crane|crate|earth|hater|heart|rance|react|teach|torah|torch
  ["due-nod","due","nod","dud","eon",3,"","","dud-eon",10], // allWords 4: doe|don|odd|one
  ["fret-teen","fret","teen","feet","tern",2,"","","feet-tern",6,87,2,5,0], // allWords 3: fern|fete|rent
  ["nags-sums","nags","sums","guns","mass",3,"","","guns-mass",13], // allWords 6: gnus|mans|sang|snag|snug|sung
  ["files-sixth","files","sixth","filth","sixes",2,"","","filth-sixes",1,92,1,4,0], // allWords 7: fixes|flies|flits|isles|lifts|lists|slits
  ["shown-skate","skate","shown","heats","knows",3,"","","heats-knows",22], // allWords 17: askew|ethos|haste|hates|howes|knots|shawn|stake|stank|steak|stoke|swank|takes|tanks|those|wakes|whose
  ["cone-trio","trio","cone","onto","rice",3,"","","onto-rice",9,82,3,6,0], // allWords 14: coir|corn|note|once|rent|riot|rite|roti|tern|tier|tire|tone|tori|torn
  ["cork-site","cork","site","rose","tick",4,"","","rose-tick",12], // allWords 13: cite|core|kits|kris|rice|rise|risk|rock|sire|skit|sore|ties|toes
  ["daisy-flare","daisy","flare","diary","false",2,"","","diary-false",5,92,1,4,0], // allWords 20: aides|aired|alder|aside|dairy|dales|deals|fairy|feral|files|fleas|flier|flies|ideas|leads|leafs|rifle|riled|sadly|slide
  ["neat-slog","neat","slog","east","long",2,"","","east-long",7], // allWords 20: ages|ante|eats|egos|gals|goes|gone|last|logs|lost|lots|note|sage|salt|seat|slag|slot|teas|toes|tone
  ["reset-snide","snide","reset","inter","seeds",5,"","","inter-seeds",28], // allWords 24: diets|diner|edits|eerie|ester|inert|inset|nerds|nests|reeds|rents|seine|sends|sense|sited|sneer|steer|stein|stern|terse|tides|tired|trees|tried
  ["pug-tag","pug","tag","gut","gap",3,"","","gap-gut",9], // allWords 1: tug
  ["aced-word","aced","word","card","owed",2,"","","card-owed",6,86,2,6,0], // allWords 1: road
  ["cogs-ruin","cogs","ruin","coin","rugs",2,"","","coin-rugs",1,92,1,4,0], // allWords 5: icon|iron|noir|nori|rung
  ["hints-tapes","hints","tapes","shape","stint",2,"","","shape-stint",5], // allWords 12: heaps|inset|paste|paths|phase|septa|shine|spate|spite|stein|stipe|tints
  ["part-same","same","part","ears","tamp",3,"","","ears-tamp",22], // allWords 14: arts|eras|mast|mats|mesa|pear|rats|reap|seam|sera|star|tarp|trap|tsar
  ["lords-punch","lords","punch","lurch","ponds",2,"","","lurch-ponds",3,92,1,4,0], // allWords 6: corps|crops|curls|drops|lunch|porch
  ["clans-those","those","clans","hosts","lance",2,"","","hosts-lance",6], // allWords 28: aches|chase|chose|class|clean|clone|close|ethos|haste|hates|heats|laces|lasts|least|neath|salts|scale|shots|slant|slate|slats|slots|stale|stash|steal|stole|tales|thane
  ["pipe-scan","pipe","scan","pace","spin",3,"","","pace-spin",9], // allWords 9: aces|cans|cape|case|pain|pies|pins|snip|spec
  ["dog-old","old","dog","log","odd",2,"","","log-odd",7,87,2,5,0], // allWords 2: god|goo
  ["chess-eaten","chess","eaten","asset","hence",4,"","","asset-hence",21], // allWords 14: canes|cases|caste|casts|cease|chest|eases|enact|scant|seats|sheen|sheet|tease|these
  ["atlas-broom","atlas","broom","alarm","boots",3,"","","alarm-boots",10], // allWords 10: aroma|blast|boars|boast|boats|bolts|boost|molar|moral|solar
  ["mile-said","mile","said","amid","isle",2,"","","amid-isle",6,92,1,4,0], // allWords 14: aids|lads|lame|lids|lies|lime|maid|male|meal|midi|mild|sale|seal|slid
  ["obese-shall","obese","shall","bases","hello",3,"","","bases-hello",11], // allWords 21: ashes|bales|balls|bells|bless|hales|hallo|halls|halos|heals|heels|hells|holes|leash|lobes|sable|shale|shell|shoal|slabs|slash
  ["ether-scene","ether","scene","cheer","tense",2,"","","cheer-tense",7,87,2,5,0], // allWords 15: ceres|enter|ester|hence|rents|reset|sheet|steer|stern|teens|terse|there|these|three|trees
  ["kids-yurt","kids","yurt","risk","duty",3,"","","duty-risk",11], // allWords 6: disk|dusk|kris|skid|tidy|turk
  ["sure-weed","sure","weed","sued","were",2,"","","sued-were",1], // allWords 8: drew|dues|reds|rees|ruse|seed|used|user
  ["date-newt","newt","date","tent","wade",3,"","","tent-wade",9,87,2,5,0], // allWords 8: anew|ante|neat|teen|wane|want|weed|went
  ["awry-cave","awry","cave","acre","wavy",2,"","","acre-wavy",6], // allWords 8: area|care|crew|race|ware|wary|wave|wear
  ["eat-pro","eat","pro","ore","tap",3,"","","ore-tap",9,87,2,5,0], // allWords 3: ate|pat|tea
  ["dried-pearl","dried","pearl","dread","peril",2,"","","dread-peril",5,92,1,4,0], // allWords 9: adder|alder|dared|drape|padre|paler|pared|pride|riled
  ["mind-torn","torn","mind","dint","norm",3,"","","dint-norm",23], // allWords 2: dirt|dorm
  ["pill-road","road","pill","plod","rail",3,"","","plod-rail",9,92,1,4,0], // allWords 10: arid|lair|liar|lord|opal|oral|paid|poll|raid|roll
  ["maple-tests","maple","tests","plate","stems",3,"","","plate-stems",18,87,2,5,0], // allWords 37: ample|lamps|lasts|leapt|least|males|masts|mates|meals|meats|meets|palms|pelts|petal|pleat|psalm|salts|slams|slate|slats|sleet|slept|spelt|splat|stale|stamp|state|stats|steal|steam|steel|tales|tames|taste|teams|teems|temps
  ["brain-vexed","vexed","brain","beard","vixen",4,"","","beard-vixen",12,92,1,4,0], // allWords 8: abide|bared|braid|bread|evade|naive|rabid|raven
  ["able-seem","seem","able","else","beam",3,"","","beam-else",10,87,2,5,0], // allWords 8: bale|balm|bees|eels|lamb|lame|male|meal
  ["loose-piles","piles","loose","elope","soils",5,"","","cannot be reversed",26,92,1,4,0], // allWords 11: lisle|lopes|plies|poise|poles|sills|silos|slips|slope|solos|spiel
  ["lost-some","lost","some","sole","most",3,"","","most-sole",8,79,3,9,0], // allWords 5: lose|lots|mole|slot|toss
  ["chick-flair","chick","flair","chair","flick",2,"","","chair-flick",1], // allWords 4: clack|click|flack|frail
  ["ape-gay","gay","ape","age","pay",2,"","","age-pay",7], // allWords 3: pea|peg|yap
  ["love-wish","love","wish","veil","show",3,"","","show-veil",19,92,1,4,0], // allWords 12: evil|isle|lies|live|lose|owes|sole|view|vile|wise|woes|wove
  ["guise-snaps","guise","snaps","pause","sings",5,"","","pause-sings",26,92,1,4,0], // allWords 15: gauss|issue|panes|pangs|pines|pings|signs|singe|snags|snipe|snips|spans|spine|spins|usage
  ["tide-vibe","vibe","tide","bite","dive",3,"","","bite-dive",8], // allWords 3: diet|edit|tied
  ["lamps-swear","lamps","swear","lapse","swarm",2,"","","lapse-swarm",6,92,1,4,0], // allWords 20: alarm|amass|areas|leaps|massa|paler|pales|palms|parse|pearl|pears|pleas|psalm|ramps|spare|spasm|spear|wares|warms|wears
  ["diner-vowel","diner","vowel","novel","wider",3,"","","novel-wider",8,82,3,6,0], // allWords 10: dowel|drone|lined|liven|olden|riven|rowed|weird|wield|wired
  ["cook-fast","fast","cook","cask","foot",2,"","","cask-foot",2], // allWords 11: acts|cast|cats|coat|cost|fats|sack|scot|sock|soft|taco
  ["pose-soda","soda","pose","does","soap",3,"","","does-soap",9], // allWords 3: dope|dosa|dose
  ["apart-aside","apart","aside","adapt","arise",3,"","","adapt-arise",8,92,1,4,0], // allWords 5: aides|areas|ideas|raise|stair
  ["diets-elbow","elbow","diets","below","edits",1,"","","below-edits",3], // allWords 10: belts|bites|bowel|dowel|dwelt|lobes|sited|sleet|steel|tides
  ["elk-rig","elk","rig","irk","leg",2,"","","irk-leg",7,81,3,7,0], // allWords 1: gel
  ["dusty-tacos","dusty","tacos","study","coats",2,"","","coats-study",14], // allWords 8: ascot|coast|ducts|scout|sodas|stats|studs|tasty
  ["like-scan","scan","like","lace","skin",3,"","","lace-skin",9], // allWords 8: aces|cans|case|clan|kiln|link|nail|sink
  ["brute-smash","brute","smash","sears","thumb",5,"","","sears-thumb",25,92,1,4,0], // allWords 27: aster|beams|bears|brash|brush|hurst|hurts|masse|mates|maths|meats|muses|rates|rebut|saber|sabre|seams|shams|shrub|stare|steam|tames|teams|tears|trash|tuber|users
  ["canal-tasks","canal","tasks","sacks","natal",3,"","","natal-sacks",7], // allWords 11: atlas|casas|casks|clank|lacks|slack|snack|stalk|stank|talks|tanks
  ["doll-head","doll","head","deal","hold",2,"","","deal-hold",2], // allWords 9: dale|dead|hale|halo|heal|held|hell|lead|load
  ["small-swift","small","swift","mills","wafts",2,"","","mills-wafts",7], // allWords 6: films|flaws|malls|swill|walls|wills
  ["door-nest","door","nest","redo","tons",3,"","","redo-tons",19,76,4,8,0], // allWords 12: dote|dots|nets|note|odor|onto|reds|rode|rods|sent|tens|tone
  ["less-pool","less","pool","oops","sell",3,"","","cannot be reversed",8,86,2,6,0], // allWords 8: loop|lose|loss|pole|polo|pose|sole|solo
  ["prep-stay","prep","stay","step","pray",2,"","","pray-step",1], // allWords 12: past|pats|pest|pets|prey|raps|rasp|rays|reps|spat|taps|type
  ["axe-wet","axe","wet","tax","ewe",2,"","","ewe-tax",8,81,3,7,0], // allWords 4: ate|eat|tea|wee
  ["base-gate","gate","base","abet","ages",3,"","","abet-ages",20,92,1,4,0], // allWords 3: beat|beta|sage
  ["clerk-exact","exact","clerk","clack","exert",2,"","","clack-exert",2], // allWords 6: alert|alter|elect|extra|laker|later
  ["lady-once","once","lady","clay","done",2,"","","clay-done",7], // allWords 8: cone|dale|deal|lace|lacy|lead|lend|node
  ["bars-rice","rice","bars","care","ribs",3,"","","care-ribs",15,82,3,6,0], // allWords 12: acre|arcs|bare|bear|bras|brie|cabs|cars|race|rare|rear|scar
  ["piece-saved","piece","saved","paced","sieve",3,"","","paced-sieve",11], // allWords 8: caves|cease|dives|eased|eaves|paved|peace|vices
  ["angel-rules","angel","rules","gruel","lanes",3,"","","gruel-lanes",8,92,1,4,0], // allWords 8: angle|glean|leans|luger|lures|surge|urges|usage
  ["mojo-sort","mojo","sort","room","jots",3,"","","jots-room",11], // allWords 1: moor
  ["bride-corps","bride","corps","crisp","bored",3,"","","bored-crisp",10], // allWords 12: birds|cider|coder|cords|credo|cried|crops|decor|disco|price|probe|scrip
  ["icons-topic","topic","icons","coins","optic",1,"","","coins-optic",3], // allWords 4: posit|scion|sonic|stoic
  ["gin-wow","wow","gin","now","wig",3,"","","now-wig",10,81,3,7,0], // allWords 3: own|win|won
  ["hint-want","hint","want","than","twin",2,"","","than-twin",6], // allWords 1: thin
  ["stage-third","stage","third","darts","eight",5,"","","darts-eight",32], // allWords 25: aster|earth|gates|hares|hater|hears|heart|heirs|hires|rates|rites|shard|share|shear|shire|stare|tater|tears|tetra|their|tiers|tires|treat|tries|trite
  ["furl-oils","furl","oils","fill","ours",2,"","","fill-ours",2], // allWords 5: full|soil|soul|sour|surf
  ["owing-sling","owing","sling","lingo","wings",2,"","","lingo-wings",6,81,3,7,0], // allWords 1: swing
  ["frog-male","frog","male","flag","more",3,"","","flag-more",9], // allWords 6: flea|fore|glam|lame|leaf|meal
  ["duty-nine","duty","nine","nude","tiny",4,"","","nude-tiny",13,87,2,5,0], // allWords 10: diet|dine|duet|dune|edit|tide|tidy|tied|tine|tune
  ["thief-warns","thief","warns","faint","shrew",4,"","","faint-shrew",24], // allWords 17: after|aster|heist|hints|rants|rates|saint|satin|stain|stare|swain|swear|tears|trans|wafer|wares|wears
  ["been-guys","guys","been","busy","gene",2,"","","busy-gene",9,87,2,5,0], // allWords 2: bees|buys
  ["drain-shire","shire","drain","hired","rains",2,"","","hired-rains",6,82,3,6,0], // allWords 16: aired|arise|drier|hares|heard|hears|heirs|hires|nadir|raise|rears|rider|riser|sarin|share|shear
  ["ark-yam","yam","ark","arm","yak",1,"","","arm-yak",0,87,2,5,0], // allWords 4: kay|mar|may|ram
  ["forms-trend","trend","forms","frond","terms",3,"","","frond-terms",9,92,1,4,0], // allWords 13: ferns|noted|notes|onset|rents|seton|snort|stern|stone|storm|tomes|toned|tones
  ["days-view","view","days","side","wavy",4,"","","side-wavy",22,92,1,4,0], // allWords 6: dies|save|vase|wade|wave|wide
  ["buck-cuss","buck","cuss","cubs","suck",3,"","","cubs-suck",8,81,3,7,0], // allWords 1: subs
  ["mango-overt","mango","overt","among","voter",2,"","","among-voter",13], // allWords 7: manor|mover|omega|roman|tamer|tango|trove
  ["never-tides","never","tides","deter","vines",4,"","","deter-vines",12], // allWords 17: dense|diets|diner|edits|ender|evens|needs|nerve|riven|rivet|seven|sited|snide|steed|tired|tried|veins
  ["foxy-onto","foxy","onto","foot","onyx",3,"","","foot-onyx",9], // allWords 1: font
  ["brass-organ","organ","brass","arson","grabs",4,"","","arson-grabs",13], // allWords 8: argon|barns|brags|groan|gross|orang|soars|sonar
  ["fees-user","fees","user","free","uses",3,"","","free-uses",7,87,2,5,0], // allWords 4: reef|refs|ruse|sure
  ["amen-blue","amen","blue","lube","mean",1,"","","lube-mean",3,68,5,12,0], // allWords 6: lane|lean|luna|mane|name|numb
  ["got-yep","yep","got","peg","toy",3,"","","peg-toy",9,81,3,7,0], // allWords 2: get|yet
  ["roots-tenth","roots","tenth","rents","tooth",2,"","","rents-tooth",2], // allWords 13: north|ortho|other|roost|snort|stent|stern|store|tents|thorn|toots|torso|totes
  ["noble-straw","straw","noble","blown","rates",3,"","","blown-rates",20], // allWords 17: arose|aster|bates|beast|beats|belts|blows|bowls|enrol|lobes|loner|loser|roles|rowan|stare|tears|warts
  ["rage-told","rage","told","gate","lord",3,"","","gate-lord",8], // allWords 14: drag|earl|ergo|gear|gore|grad|late|lear|lore|ogre|real|role|tale|teal
  ["case-soft","soft","case","cost","safe",2,"","","cost-safe",3,86,2,6,0], // allWords 13: aces|acts|cafe|cast|cats|face|fact|fast|fats|foes|scot|seas|toss
  ["alloy-steer","steer","alloy","loyal","terse",2,"","","loyal-terse",15], // allWords 16: alert|alley|alter|eater|ester|later|leers|loser|reels|reset|roles|rolls|store|style|trees|yells
  ["seed-yaks","seed","yaks","asks","eyed",2,"","","asks-eyed",6,82,3,6,0], // allWords 7: desk|dyke|easy|eyes|keys|seas|sees
  ["brush-sleep","brush","sleep","herbs","pulse",4,"","","herbs-pulse",25], // allWords 17: bleep|blush|heels|heres|peels|peers|plebs|press|purse|sheer|shrub|slush|speer|spree|spurs|super|usher
  ["lime-pond","lime","pond","mild","nope",3,"","","mild-nope",8,82,3,6,0], // allWords 10: lien|line|lone|mile|mold|mole|noel|open|pine|poem
  ["call-port","port","call","cart","poll",2,"","","cart-poll",1,87,2,5,0], // allWords 7: clot|colt|part|plat|plot|tarp|trap
  ["act-raw","raw","act","art","caw",2,"","","art-caw",7,76,4,8,0], // allWords 4: cat|rat|tar|war
  ["pile-task","task","pile","skit","leap",3,"","","leap-skit",19], // allWords 19: apes|east|eats|kits|late|lite|pale|peas|pies|plea|seat|site|skip|tale|talk|teal|teas|ties|tile
  ["least-prism","least","prism","trips","meals",3,"","","meals-trips",23,92,1,4,0], // allWords 22: islet|limes|males|miles|parts|paste|ramps|septa|slate|slime|smile|spate|spite|stale|steal|stipe|strap|strip|tales|tapes|tiles|traps
  ["data-golf","data","golf","daft","goal",2,"","","daft-goal",5], // allWords 7: flag|fold|gala|goat|load|toad|toga
  ["city-dive","city","dive","tidy","vice",3,"","","tidy-vice",8], // allWords 5: cite|diet|edit|tide|tied
  ["souls-stain","souls","stain","salon","suits",3,"","","salon-suits",9], // allWords 11: lasso|lasts|loans|oasis|saint|salts|satin|slant|slats|sluts|units
  ["ozone-shell","ozone","shell","zones","hello",2,"","","hello-zones",6], // allWords 5: heels|hells|holes|sheen|shone
  ["lilt-park","park","lilt","kill","tarp",3,"","","kill-tarp",23], // allWords 7: lark|part|plat|tall|till|trap|trip
  ["hairs-surly","surly","hairs","hurry","sails",2,"","","hurry-sails",3,92,1,4,0], // allWords 3: hails|hairy|slurs
  ["dork-nude","dork","nude","dunk","rode",3,"","","dunk-rode",8,74,4,10,0], // allWords 6: done|dude|dune|node|redo|rude
  ["bad-hem","bad","hem","bed","ham",1,"","","bed-ham",1,87,2,5,0], // allWords 2: dab|had
  ["toned-wells","toned","wells","dwell","stone",2,"","","dwell-stone",6], // allWords 16: dowel|lowes|noted|notes|onset|owned|seton|sleet|steel|stole|swell|teens|tells|tense|tolls|tones
  ["opera-panel","opera","panel","alone","paper",3,"","","alone-paper",18], // allWords 7: apnea|apron|elope|paler|pearl|penal|plane
  ["grow-wane","grow","wane","gnaw","wore",3,"","","gnaw-wore",9], // allWords 4: anew|ergo|gore|ogre
  ["emit-ends","emit","ends","semi","tend",2,"","","semi-tend",7,61,7,11,0], // allWords 7: dent|item|mite|send|sine|time|tine
  ["names-vocal","vocal","names","moves","canal",4,"","","canal-moves",16,82,3,6,0], // allWords 15: canes|caves|clean|clone|clove|cones|lance|lemon|mason|means|melon|mensa|moans|omens|scone
  ["cats-jeep","cats","jeep","cape","jest",3,"","","cape-jest",9], // allWords 9: aces|acts|case|cast|jape|jets|pace|pact|sect
  ["husk-king","husk","king","gush","kink",3,"","","gush-kink",23], // allWords 6: gunk|hugs|hung|hunk|nigh|sigh
  ["roles-spots","spots","roles","ropes","slots",3,"","","ropes-slots",8,92,1,4,0], // allWords 18: loser|loses|pesos|pores|ports|poser|poses|posse|posts|prose|prost|roost|roots|soles|spore|sport|stops|torso
  ["free-said","free","said","aids","reef",1,"","","cannot be reversed",3,61,7,11,0], // allWords 9: deaf|ease|fade|fire|reds|rees|rife|rise|sire
  ["pip-war","pip","war","paw","rip",3,"","","cannot be reversed",10,75,4,9,0], // allWords 2: rap|raw
  ["dote-pose","dote","pose","does","poet",2,"","","does-poet",6,92,1,4,0], // allWords 1: dose
  ["meets-night","night","meets","sting","theme",5,"","","sting-theme",33,92,1,4,0], // allWords 17: emits|gents|inset|items|might|mites|sheen|shine|smite|stein|teems|teens|tenet|tense|thine|thing|times
  ["life-slip","life","slip","flip","isle",2,"","","flip-isle",9,82,3,6,0], // allWords 6: fell|file|lies|lips|pill|self
  ["hits-page","page","hits","hate","pigs",2,"","","hate-pigs",3], // allWords 17: gaps|gasp|hags|hast|hats|heat|past|pats|peat|pits|sigh|spat|spit|tape|taps|this|tips
  ["ovary-rapid","ovary","rapid","avoid","parry",4,"","","avoid-parry",11], // allWords 3: array|privy|radar
  ["dodo-full","dodo","full","dull","food",2,"","","dull-food",9,87,2,5,0], // allWords 6: doll|fold|fool|foul|loud|ludo
  ["minds-purse","purse","minds","drums","snipe",5,"","","drums-snipe",26], // allWords 17: denim|drips|duper|menus|mined|mines|mired|piers|pines|pride|serum|snips|spine|spins|spire|spurs|super
  ["aside-bands","bands","aside","abide","sands",3,"","","abide-sands",8], // allWords 5: aides|bends|deans|ideas|sedan
  ["bucks-pinch","bucks","pinch","bunch","picks",2,"","","bunch-picks",1,92,1,4,0], // allWords 6: bunks|pinks|pucks|punch|punks|spunk
  ["dab-rap","dab","rap","bar","pad",3,"","","bar-pad",9], // allWords 2: bad|bra
  ["redo-torn","torn","redo","door","rent",3,"","","door-rent",18], // allWords 10: dent|dote|nerd|odor|rode|root|tend|tern|tore|toro
  ["genus-shoot","shoot","genus","noses","ought",4,"","","noses-ought",20], // allWords 13: goose|hunts|notes|onset|seton|shout|shunt|south|stone|thong|tones|tough|tunes
  ["last-rare","last","rare","real","star",3,"","","cannot be reversed",19,86,2,6,0], // allWords 12: arts|earl|ears|eras|lear|rats|rear|sale|salt|seal|sera|tsar
  ["flats-sleek","sleek","flats","feels","stalk",4,"","","feels-stalk",13], // allWords 15: false|flake|fleas|flees|keels|lakes|lasts|leafs|leaks|leeks|sales|salts|seals|slats|talks
  ["heats-wines","heats","wines","shine","sweat",2,"","","shine-sweat",5], // allWords 10: haste|hates|hints|saith|sheen|swine|twins|waist|waits|waste
  ["ally-back","ally","back","ably","lack",3,"","","ably-lack",9], // allWords 2: clay|lacy
  ["teeth-wiser","wiser","teeth","trees","white",4,"","","trees-white",24,92,1,4,0], // allWords 19: ester|heist|reset|rites|sewer|sheet|steer|terse|these|tiers|tires|tithe|tries|trite|weirs|wires|wrest|wrist|write
  ["lube-mask","mask","lube","bulk","same",3,"","","bulk-same",8], // allWords 11: able|bale|beam|blue|mesa|muse|musk|sale|seal|seam|sulk
  ["fake-hide","fake","hide","fade","hike",1,"","","fade-hike",1], // allWords 2: deaf|head
  ["bet-new","bet","new","web","ten",3,"","","ten-web",9,71,5,9,0], // allWords 1: net
  ["mice-soft","soft","mice","come","fist",3,"","","come-fist",15], // allWords 5: cost|fits|foes|scot|sift
  ["cedar-devil","cedar","devil","clade","drive",4,"","","clade-drive",21], // allWords 15: adder|cadre|cared|carve|cider|crave|cried|dared|decal|diver|dread|dried|laced|lived|raced
  ["sides-skier","skier","sides","rides","skies",3,"","","rides-skies",12], // allWords 3: desks|dries|sired
];

const puzzleClues = {
  "hill-hunt": "subtle nudge · ship body | flip",
  "daddy-rises": "picked a camp · back gardens",
  "brain-tarot": "minor noble · character feature",
  "debt-life": "wait calmly · sensed by touch",
  "filth-safer": "after fourth · focused beam | flip",
  "relax-tasty": "rubber glove stuff · wander off",
  "keen-spin": "joint under thigh · tiny cut | flip",
  "lies-toes": "web location · bottom of foot",
  "drop-look": "curious misfit · closed curve",
  "cry-sea": "curved path · nodding answer",
  "dates-ledge": "inched sideways · take secretly",
  "gate-rice": "barred enclosure · wheel rubber",
  "nest-sift": "closed hand · dispatched",
  "bread-known": "toasty shade · work dough | flip",
  "fail-into": "key facts · animal’s rear flag | flip",
  "fade-peel": "give a meal · washed-out shade | flip",
  "goose-paths": "basketball rings · theatre platform",
  "caves-coral": "speed contests · using the voice | flip",
  "alloy-upset": "faithful · arrangement | flip",
  "era-war": "being verb · uncooked | flip",
  "shell-stall": "corridors · spills secrets | flip",
  "enact-their": "break rules · bury formally | flip",
  "body-cure": "put underground · secret system | flip",
  "maple-table": "assign fault · dinner surface | flip",
  "bulk-lime": "slick helper · dairy pour",
  "nuts-pack": "small trophies · military vehicle | flip",
  "earth-kills": "feeling centre · practised ability | flip",
  "meet-shut": "swarm with life · therefore",
  "maps-swig": "missing spaces · move in water",
  "new-old": "final point · not high",
  "grab-wild": "slick talk · hospital wing",
  "guide-mines": "outward appearance · dug up",
  "drug-mood": "beat keeper · morally right",
  "bean-fart": "farm building · impressive act | flip",
  "actor-under": "respond · circular turn | flip",
  "grew-wore": "increase in size · existed before | flip",
  "ended-poets": "requires · chose | flip",
  "down-glue": "breathing organ · had a debt | flip",
  "din-won": "put on · victory",
  "nasal-tense": "birth-related · meaning",
  "angle-bowls": "joint bend · informal speech | flip",
  "cram-sets": "road vehicles · plant stalk | flip",
  "bunny-tried": "salty sea-like · in key",
  "moss-yeti": "halfway prefix · playthings",
  "baby-name": "little darling · a lot",
  "firm-sons": "paper template · moral wrongs | flip",
  "isle-lazy": "friend in a cause · dimensions",
  "atlas-erase": "zones · no longer fresh | flip",
  "buck-laws": "young bears · move on foot",
  "relay-renew": "cake stratum · more recent",
  "dial-rats": "placed down · night light | flip",
  "fools-teeth": "senses by touch · molar, say",
  "naive-shade": "helpers · safe refuge | flip",
  "flesh-walls": "quick burst · water sources | flip",
  "ban-saw": "catch suddenly · past being",
  "spark-strip": "green spaces · short journeys | flip",
  "urges-verse": "account holders · brink | flip",
  "cave-time": "close friend · bad habit | flip",
  "rebel-stout": "straps · farther outside | flip",
  "cold-pool": "unbothered · heavy trudge | flip",
  "ghost-salon": "in company with · party givers | flip",
  "chat-seek": "sunrise side · mild curse | flip",
  "rare-snow": "has possession · back end | flip",
  "amen-bait": "aid a scheme · chief part",
  "gas-keg": "pose a question · breakfast oval | flip",
  "likes-mango": "special jargon · creates",
  "seven-train": "scheduled happening · falls from clouds | flip",
  "bees-hail": "slanted view · shoe back",
  "odds-open": "measured medicine · small lake",
  "asset-stone": "beginning phase · places to sit | flip",
  "fake-lilt": "leafy green · raise upward",
  "aims-flew": "door-bang · spouse | flip",
  "sat-ups": "donkey · place down",
  "range-swine": "hot feeling · cellar bottles | flip",
  "deeds-first": "sideways float · garden starters",
  "rows-yard": "sunbeams · dictionary unit | flip",
  "diet-lamp": "hand surface · coastal rhythm | flip",
  "birch-prong": "carry over · front shelter | flip",
  "props-spiky": "remembrance bloom · possible dangers",
  "oral-poll": "milky gem · bread cylinder",
  "reef-sand": "antlered animals · cooling blades | flip",
  "chalk-slice": "mouse sound · layered rock | flip",
  "key-tap": "house animal · shaggy ox | flip",
  "just-monk": "discarded stuff · nearly all | flip",
  "sassy-treat": "school paper · opening point",
  "cedar-green": "looked after · category | flip",
  "iron-lads": "in addition · outer peel | flip",
  "fact-made": "arrived · foolish | flip",
  "loves-warns": "forced worker · under oath | flip",
  "done-redo": "entry panel · requirement | flip",
  "bold-seal": "ringing dome · fizzy drink | flip",
  "spent-straw": "canvas shelters · folds around | flip",
  "row-ten": "neither partner · rain-soaked",
  "fined-talks": "submitted papers · military vehicles",
  "cape-face": "coffee spot · walking speed",
  "ample-demon": "internet box · aircraft | flip",
  "bare-slot": "spoiled child · bottom of shoe",
  "ages-hour": "Italian sauce · footwear",
  "fist-pope": "smoking tube · not hard",
  "scene-smash": "board battle · hidden methods | flip",
  "lists-strap": "continues · narrow band | flip",
  "dude-worn": "not up · impolite | flip",
  "smear-swill": "factories · clothing items",
  "bases-begun": "started · public vehicles | flip",
  "seem-toss": "nearly all · observes",
  "older-rocks": "security devices · sequence",
  "ease-rich": "every one · upward movement | flip",
  "liar-wolf": "move like water · train track",
  "did-nib": "offer amount · loud racket | flip",
  "bell-idea": "has the skill · told a fib | flip",
  "paint-rites": "petty malice · rail convoy",
  "clean-dread": "heavily loaded · sped in contest | flip",
  "lift-tale": "destined outcome · sing-song rhythm | flip",
  "mayor-stern": "join at altar · hard mineral",
  "euro-spot": "mistake sound · not false",
  "baked-pools": "red life fluid · mountain tops | flip",
  "hopes-steer": "old knock-out gas · model stances",
  "raw-saw": "armed conflict · once existed",
  "shirt-swine": "subtle clues · electrical lines | flip",
  "couch-singe": "throat bark · from then | flip",
  "over-then": "brave lead · air outlet | flip",
  "level-wagon": "within law · interlaced | flip",
  "asks-want": "graceful bird · assigned job",
  "ranch-towns": "small cut · gives notice",
  "die-nor": "vast age · free from",
  "hard-pelt": "kept in grip · section",
  "send-slip": "finishes · mouth edges | flip",
  "split-wheel": "magic words · snow shade",
  "array-guide": "make a case · private journal | flip",
  "corn-unit": "small symbol · litter’s smallest | flip",
  "luck-nose": "traffic marker · brood silently | flip",
  "field-greet": "boneless cut · avarice | flip",
  "dusty-idols": "in a strange way · business outfits | flip",
  "bump-host": "give a shove · burial chamber | flip",
  "now-run": "convent sister · line of seats",
  "bevy-rule": "slick helper · extremely",
  "buddy-tells": "male cattle · soft toy | flip",
  "dork-lime": "cow pour · travelled mounted | flip",
  "flit-from": "movie layer · stronghold | flip",
  "asset-heats": "fire remains · condition",
  "nuts-weed": "without clothes · sunset direction | flip",
  "blame-resin": "easy stroll · warning wail | flip",
  "grant-swore": "mountain chain · least good | flip",
  "hot-use": "not inside · female pronoun",
  "mouse-prose": "antlered giant · coin holder | flip",
  "camps-crews": "mischievous kid · turning fastener | flip",
  "bail-drag": "seize suddenly · placed down | flip",
  "safe-vice": "courtroom matter · hand count",
  "dome-eyes": "looked at · a few",
  "edges-hovel": "narrow shelf · forceful push | flip",
  "door-fans": "top cover · beach grains | flip",
  "hope-salt": "make well · red light command | flip",
  "ads-say": "donkey · 24 hours",
  "merry-quiet": "worthiness · question | flip",
  "small-tough": "retail complexes · moral should | flip",
  "disk-wage": "stare openly · team half",
  "feels-tides": "gives food · roof pieces | flip",
  "guns-thus": "closed · performed vocally | flip",
  "date-fury": "obligation · travel charge | flip",
  "rind-tear": "small dent · back end",
  "bar-pot": "steal from · light knock | flip",
  "great-horse": "say yes together · not tall",
  "blind-clack": "dull-tasting · mouse sound | flip",
  "logs-tiff": "suits · club game | flip",
  "bone-pity": "teeth mark · small horse",
  "event-viral": "bury formally · heart flap | flip",
  "felt-kale": "inland water · departed",
  "paved-rider": "challenged · snake tooth | flip",
  "canon-pores": "tree nut · starts",
  "opal-role": "spoken · upright stick | flip",
  "route-steam": "farther outside · groups | flip",
  "lets-sell": "not as much · recount",
  "flip-girl": "make full · hold tightly | flip",
  "false-tiger": "deep sorrow · minimum amount",
  "boxes-there": "ring fighter · nearby ones | flip",
  "calm-teen": "family group · brim over | flip",
  "fresh-usher": "cite · hush sound | flip",
  "egg-tea": "years lived · obtain",
  "alone-zones": "paths · UV stopper | flip",
  "furl-guns": "breathing organ · wave-rider’s playground",
  "anger-crams": "scope of options · leave in a hurry",
  "packs-tents": "used up · tidy pile",
  "feel-redo": "run away · went on horseback",
  "soul-spit": "lubricates machinery · places down",
  "cafe-lake": "front of head · leafy green | flip",
  "bells-flash": "game spheres · soft body tissue | flip",
  "cans-pick": "bottle tops · small cut | flip",
  "pen-toy": "opposite of yes · casual assent | flip",
  "draw-pins": "tiny cut · hospital section",
  "gravy-pearl": "judge’s mallet · fencing block | flip",
  "lily-mere": "citrus wedge · depend on | flip",
  "drill-store": "bakery rounds · ready for bed",
  "fair-loud": "one less than five · placed flat",
  "roads-steel": "carries plenty · guide cattle",
  "bare-down": "tedious person · first light",
  "pools-tides": "revises copy · circular paths",
  "ape-arc": "headwear · hearing organ",
  "seen-sets": "fishing meshes · notices",
  "modes-polar": "ethical compass · arranged for a photo",
  "mint-opal": "inward direction · hand surface | flip",
  "aced-yell": "shout out · looked at closely",
  "began-piper": "get underway · writing sheet",
  "doll-swap": "legal rules · trudge along | flip",
  "hangs-light": "informal language · upper-leg part",
  "necks-rotor": "bottle stoppers · male singing voice | flip",
  "hat-job": "high temperature · quick punch",
  "deep-when": "require · relieved exhale | flip",
  "huge-plan": "suspended · earnest request | flip",
  "dodge-tales": "calendar fruits · woodland cabin",
  "canoe-loyal": "metal mixture · vast blue expanse",
  "died-note": "eating plan · network point",
  "name-team": "prayer ending · butcher’s cut | flip",
  "crowd-large": "elegant poise · planet Earth",
  "fiery-stand": "given a penalty · wandered off",
  "doom-spot": "state of mind · upper parts",
  "scamp-scent": "holiday sites · small coins",
  "clown-three": "genetic copy · hurled",
  "dean-rent": "close by · look after",
  "rate-slip": "small island · hidden snare",
  "blind-crank": "maker’s mark · glassy chime",
  "buck-case": "six-sided solid · rough bag",
  "paste-rests": "fixed gaze · stair parts",
  "each-kegs": "mild curse · wise herb",
  "bibs-very": "large group · chest bones",
  "eye-its": "knotted neckwear · affirmative reply",
  "waft-wine": "desire · married partner",
  "sinks-torch": "small cut-out · hazards",
  "gouge-nerve": "category of art · fashionable style",
  "demo-jobs": "sleeping places · personal magic | flip",
  "roof-urge": "European currency · pond amphibian | flip",
  "freed-guest": "joined into one · say hello",
  "pope-says": "model’s stance · small barks",
  "swim-test": "untidy state · foolish person",
  "picks-renew": "backbone · ruin badly",
  "ask-rid": "annoy · unhappy",
  "lets-yowl": "playthings · deep water source",
  "hall-mini": "small rise · principal one",
  "annoy-weird": "had possession · wet-weather",
  "bases-title": "web locations · data grid",
  "notes-pores": "thick cords · musical shades",
  "dash-kind": "flat round plate · clock pointer",
  "the-war": "creative craft · chop with an axe | flip",
  "blush-croak": "bristled cleaner · concealing garment | flip",
  "easy-glut": "place to sit · not pretty",
  "lamps-views": "tropical trees · married women",
  "avail-still": "animal rears · holiday house | flip",
  "cart-save": "speed contest · immense",
  "needs-shows": "plant starters · displayed",
  "coat-full": "devoted sect · young horse | flip",
  "earn-pour": "back end · on top of",
  "are-bin": "historical age · pen point | flip",
  "bean-then": "existed before · comparison word",
  "bike-ends": "first claim · leg joint | flip",
  "gnome-steal": "beside the road · encounters",
  "close-shift": "person in charge · narrow openings",
  "amid-cake": "sour chemical · create",
  "cheer-salsa": "shows concern · layered rock",
  "flare-skits": "long-barrel firearm · chores",
  "foot-lead": "unable to hear · handy implement",
  "back-nuts": "young bears · armoured vehicle | flip",
  "ran-you": "whatever one · belonging to us | flip",
  "gaps-tiff": "fishing hook · pointers",
  "fame-logo": "silly fool · evening serving | flip",
  "chess-flick": "kitchen leaders · smooth and glossy",
  "grid-tale": "pleased · wheel covering",
  "ruler-seven": "not ever · regulations",
  "canal-glory": "irate · nearby",
  "heel-roll": "underworld · function in a play",
  "corps-tense": "small coin · categorises",
  "rises-salon": "criminal fire-setting · small islands",
  "tip-way": "deep hole · veer off course",
  "clear-winds": "family groups · less narrow",
  "amen-seat": "sunrise direction · unkind | flip",
  "bin-tip": "pen point · deep hole",
  "straw-years": "wanders off · has on",
  "board-decor": "leafy shelter · in cipher",
  "plot-weak": "verse writer · stroll",
  "panic-total": "birth-related · discussion subject",
  "glue-only": "solitary · not pretty",
  "clad-wool": "summon · timber",
  "siren-songs": "smell organs · circles",
  "busy-toll": "male cattle · playthings",
  "cafe-mode": "rounded roof · front side",
  "ago-urn": "bothers · belonging to us | flip",
  "cross-story": "prices paid · regretful",
  "asks-lend": "large deer · beach grains",
  "aimed-table": "sheep cry · news channels",
  "late-play": "partner in cause · sticky strip",
  "spurn-steak": "mountain tops · changes direction",
  "role-want": "minor noble · small settlement | flip",
  "edits-error": "sequence · wheel covers | flip",
  "begin-waves": "started · spouses | flip",
  "left-pays": "sensed by touch · little barks | flip",
  "rodeo-short": "entry panels · different",
  "guide-sides": "outward appearance · took a position",
  "died-soul": "expires · noisy | flip",
  "cheer-treat": "wooden box · at that place",
  "arms-hits": "damages · present thing",
  "coat-gear": "fury · folded snack | flip",
  "stool-teeth": "hard alloy · molar, say",
  "ocean-stole": "punctuation mark · gently mock",
  "lime-rely": "pond flower · only",
  "nerve-salad": "goes first · black bird | flip",
  "gates-lacks": "enclosures · chats",
  "meet-step": "house animals · swarm with life | flip",
  "feed-kale": "grow dim · boat spine | flip",
  "find-post": "closed hand · small lake | flip",
  "cats-lung": "overfull excess · image capture | flip",
  "also-pops": "mistake sound · hit sharply",
  "amok-clef": "tree part · imitate | flip",
  "local-ropes": "reef growth · upright sticks",
  "space-world": "large group · brief delay",
  "enjoy-names": "denim trousers · cash",
  "alp-ice": "headwear · fib | flip",
  "beef-wine": "existed · spouse | flip",
  "ours-pity": "mouth missile · belonging to you",
  "elder-tapes": "ranked · night rest | flip",
  "debut-jolly": "uncertainty · fruit preserve | flip",
  "angle-crude": "school mark · parent’s sibling",
  "soda-thin": "quick mark · inside movement | flip",
  "cheer-stock": "wheel wedge · guide",
  "taxi-yell": "supporter · way out | flip",
  "pants-straw": "narrow band · desires",
  "beta-doom": "watercraft · trial version",
  "bin-won": "pen point · at present | flip",
  "rites-shack": "fire remains · deception | flip",
  "crank-stood": "bent dealer · remain upright | flip",
  "aunt-item": "sports side · single thing | flip",
  "polka-space": "not far · Greek letter | flip",
  "ease-toys": "not difficult · foot digits | flip",
  "loop-tips": "swimming spot · mouth missile",
  "faith-mount": "nearly swoons · oral opening | flip",
  "not-yet": "number after nine · plaything | flip",
  "later-these": "old knock-out gas · roof layer",
  "chive-foist": "move a bit · sound",
  "bare-bibs": "infant · chest bones | flip",
  "lamp-lilt": "tropical tree · up to",
  "spear-swath": "routes · has on | flip",
  "deal-plug": "not sharp · sheet",
  "coins-sings": "marks · sound-related",
  "dork-rope": "pig meat · travelled",
  "pay-pet": "light knock · yes, casually | flip",
  "burnt-super": "savage · reject sharply | flip",
  "gaps-swim": "charts · gulp",
  "boost-pores": "footwear · ordinary writing | flip",
  "bury-tone": "short message · red gem | flip",
  "about-gross": "fake · cooked meat",
  "adds-doze": "stuns · uneven chances | flip",
  "pair-some": "verse piece · draped garment | flip",
  "drugs-spiky": "awkwardly thick · dangers",
  "named-react": "carrying weapons · put into effect | flip",
  "cops-silk": "defeat · choice | flip",
  "press-purse": "wild outing · urges on",
  "abide-mason": "protein prefix · grounded",
  "moo-two": "cut grass · also",
  "banks-dolly": "hits lightly · waste time",
  "cave-mine": "label · bad habit | flip",
  "cites-porch": "centres · thrower’s aim | flip",
  "dour-slap": "addition sign · street surface | flip",
  "hated-risky": "wobbly · made an attempt",
  "book-dead": "oven action · extinct bird",
  "dowel-games": "small version · earnings | flip",
  "event-reads": "number after six · footstep",
  "ink-rib": "annoy · pen point",
  "malls-takes": "little · pointed stick",
  "sorts-viper": "upright poles · flowing water | flip",
  "holy-leap": "survey count · casual yes | flip",
  "grace-spare": "vine bunch · frighten",
  "coal-rare": "land measure · spoken | flip",
  "merge-raven": "noodle soup · edge",
  "fell-grid": "ran away · young woman",
  "deep-link": "not cruel · fruit skin | flip",
  "boat-hull": "ink mark · drag behind | flip",
  "eye-sat": "consumed · agreement word | flip",
  "races-topic": "land units · eyepiece-related | flip",
  "chaos-meter": "pursuit · city rail | flip",
  "lean-rain": "finger target · close by | flip",
  "east-poet": "sticky strip · foot digits | flip",
  "great-heats": "entry barriers · feeling centre | flip",
  "empty-mills": "suggests · softens with heat | flip",
  "kink-news": "understood · body covering | flip",
  "salt-work": "category · stroll",
  "parts-spins": "small cuts · narrow band | flip",
  "pit-raw": "pointy end · armed conflict | flip",
  "cents-teams": "smell trace · vapour power | flip",
  "bezel-saint": "flame up · beer mug | flip",
  "guns-ragu": "teacher figure · bothers | flip",
  "amend-worry": "join at altar · possessed",
  "clad-cram": "still · playing card | flip",
  "lord-lube": "brave · regulation | flip",
  "bacon-tubes": "marching stick · blocks | flip",
  "lied-wise": "falsehoods · broad",
  "dogs-life": "document · deities | flip",
  "bug-new": "firearm · internet page | flip",
  "breed-spoke": "snapped · quickness | flip",
  "seal-sets": "permits · oceans | flip",
  "fits-pass": "drains strength · flour detective",
  "fate-nest": "not dangerous · canvas shelter | flip",
  "lemur-paste": "wall artwork · sharply rising | flip",
  "sees-yaks": "poses questions · vision organs | flip",
  "knots-scalp": "schemes · merchandise supply | flip",
  "bill-fist": "small pieces · make full | flip",
  "baa-bro": "pub counter · big snake",
  "lets-loop": "animal hide · alone",
  "frond-unity": "stylish · circular | flip",
  "genes-toast": "bearded grazers · strained",
  "filed-metal": "boneless cut · award disc",
  "drop-user": "decant · colour group",
  "purge-roses": "cords · sudden rise | flip",
  "ape-ill": "fib · friend",
  "boss-memo": "deep sound · untidy state | flip",
  "lasts-yelps": "casts letters · remains",
  "blab-toll": "soft lump · high",
  "dame-male": "weak · produced",
  "awash-elves": "tether · ripples | flip",
  "aisle-corps": "train tracks · range",
  "elks-lung": "valley hollow · brood silently",
  "bore-even": "skeleton piece · always",
  "eon-why": "greeting · possessed",
  "kids-lack": "foot strike · young men | flip",
  "drive-month": "ranking after second · poison",
  "need-stay": "not difficult · look after | flip",
  "began-fixes": "commence · sends by machine | flip",
  "agent-salsa": "nose-related · phase",
  "shoe-tags": "years lived · presenter | flip",
  "abet-less": "flying mammals · otherwise | flip",
  "alert-blade": "worship table · lose blood | flip",
  "cedar-newer": "sped in contest · refresh",
  "saw-yaw": "past being · route",
  "draw-week": "sketched · lacking strength",
  "straw-tells": "opening point · water sources | flip",
  "slain-spine": "rows of text · aches | flip",
  "arts-echo": "belonging to her · folded snack | flip",
  "resin-trout": "wash lightly · instructor | flip",
  "cold-dish": "round plate · keep in grip | flip",
  "clues-fears": "looks after · energy sources | flip",
  "know-then": "car horn sound · pond amphibian | flip",
  "nag-old": "wood record · joining word | flip",
  "dock-gush": "water bird · mild surprise | flip",
  "rich-town": "yellow kernels · alongside | flip",
  "depot-stern": "selected · leases | flip",
  "shear-villa": "layered rock · internet-popular",
  "swan-taxi": "central line · desire | flip",
  "fat-moo": "clumsy fool · male cat",
  "spurn-stuck": "hockey disks · changes direction",
  "drops-hooks": "awkward nerds · basketball rings",
  "fame-pass": "charts · not dangerous | flip",
  "lamb-pure": "raised swelling · minor noble | flip",
  "flow-tide": "revise text · wild canine",
  "ahead-rates": "zones · loathed",
  "back-fast": "warm in sun · true detail | flip",
  "kill-rage": "young woman · body of water",
  "don-rap": "neither partner · cushion",
  "food-runt": "money pool · plant base",
  "army-rope": "extra amount · ask heaven | flip",
  "denim-tread": "dehydrated · intended",
  "lord-soda": "uneven chances · spoken",
  "motto-wiser": "slightly wet · put in words | flip",
  "land-once": "dressed in · zero amount",
  "erase-slips": "brief delay · gets up",
  "blabs-doors": "rounded spots · routes",
  "chant-takes": "break rules · military vehicles | flip",
  "met-new": "cat sound · mesh trap",
  "nets-yard": "sunbeams · look after",
  "flat-lady": "supporter · foolish | flip",
  "march-north": "spellbinding pull · rose prickle",
  "salty-votes": "adores · delicious",
  "bird-eyes": "looked at closely · curved bones",
  "cyan-deep": "headland · refuse",
  "scrap-stage": "enclosures · snares",
  "fares-sifts": "burns on surface · rigid | flip",
  "tap-zag": "label · electric hit | flip",
  "guild-slept": "stuck together · divided",
  "saved-seeds": "actions · rescues",
  "duke-plan": "plunge · earnest request",
  "night-pests": "stair parts · object",
  "halls-hosts": "will · small drinks",
  "buys-kale": "slick helper · long-haired oxen",
  "file-sole": "existence · fail to keep",
  "draws-liars": "train tracks · hospital section",
  "dint-soul": "noisy · metal cans | flip",
  "jet-put": "stick out · house animal",
  "been-fort": "came into life · walking pair | flip",
  "radio-taped": "challenged · courtyard | flip",
  "firms-pride": "dismissed · light splitter",
  "late-surf": "consumes · roll up cloth | flip",
  "aced-nick": "sour chemical · collar part | flip",
  "ether-trade": "ranked · at that place",
  "carts-rooms": "stuffs in · plant bases",
  "cash-cure": "speed contest · like that",
  "craft-snowy": "ornate · least good | flip",
  "mad-sax": "greatest amount · unhappy | flip",
  "gates-miner": "labels · striped cat | flip",
  "issue-ought": "outward appearance · loud call | flip",
  "lamp-lots": "storyline · door-bang | flip",
  "bawl-slip": "invoice · exchange | flip",
  "rings-speak": "monarchs · pointed weapon | flip",
  "fatal-slink": "last · plant stem | flip",
  "dawn-tied": "not alive · matching sibling | flip",
  "shark-shown": "sells aggressively · head spikes | flip",
  "add-won": "father · possessed | flip",
  "mills-stork": "ends lives · tempest | flip",
  "dull-puts": "fine powder · tug | flip",
  "nifty-tasks": "greasy · drops below | flip",
  "sent-vary": "fleet colour · pause | flip",
  "does-mood": "extinct bird · a few | flip",
  "menus-toned": "raised lump · young people | flip",
  "torch-viper": "thrower’s delivery · wandering explorer | flip",
  "feeds-tooth": "edibles · biting set | flip",
  "day-sue": "owed · speak | flip",
  "genes-rival": "hands over · kidney-related | flip",
  "drive-slide": "was alive · travels in vehicles | flip",
  "each-film": "one of two · small rodents | flip",
  "fists-tiles": "raises upward · web locations | flip",
  "bro-law": "leather punch · steal from",
  "heats-waves": "remove facial hair · perspiration",
  "gases-might": "contests · vision",
  "case-mask": "rough bag · identical",
  "goof-norm": "pond amphibian · night orb",
  "bench-pasta": "washing tubs · tree nut",
  "gang-used": "grown old · performed vocally",
  "clean-pills": "tiny rooms · simple",
  "knew-spin": "current events · rosy shade",
  "bed-kit": "wager · young goat",
  "reds-talk": "lacking light · permits",
  "bits-lied": "wait calmly · catalogue",
  "malls-reset": "little · woody plants",
  "sport-tease": "one who consumes · upright poles",
  "pile-teem": "fruit skin · clock measure",
  "labs-pool": "round toy · mistake sound",
  "live-rail": "wicked · fibber",
  "cress-shore": "angry · steep",
  "lay-mow": "not high · might",
  "money-verge": "opponent · small woods",
  "hired-loses": "conceals · defeated person",
  "even-that": "loathe · air outlet",
  "sauce-trace": "reason · wooden box",
  "gaff-mini": "increase · annoy",
  "price-slots": "not far · short journeys",
  "acre-asks": "road vehicles · for this reason | flip",
  "cave-pigs": "missing spaces · bad habit | flip",
  "jab-lob": "paid role · work room | flip",
  "slope-wheel": "night rest · complete",
  "outs-ward": "gloomy · quick hit | flip",
  "come-rock": "centre · imitate | flip",
  "anger-blown": "heavenly figure · toasty shade | flip",
  "name-tony": "a lot · short message | flip",
  "aside-upset": "thoughts · arrangement",
  "gods-pier": "fasten around · model’s stance | flip",
  "pants-tends": "used up · remain upright",
  "bat-hit": "small amount · headwear | flip",
  "beads-first": "feathered animals · big meal",
  "donor-omega": "in the middle of · horse show | flip",
  "silk-very": "impose tax · danger",
  "shape-sworn": "desires · gives notice | flip",
  "knee-step": "held onto · observed | flip",
  "fits-goat": "flour detective · Roman robe",
  "kappa-refer": "odd enthusiast · writing sheet | flip",
  "cheek-lacks": "verify · bodies of water | flip",
  "ragu-rude": "challenge · teacher figure",
  "damn-wade": "first light · produced",
  "rebel-taste": "start again · data grid",
  "crane-surge": "elegant poise · caregiver",
  "acid-mask": "in the middle of · barrel",
  "blot-goof": "footwear · club game",
  "links-outer": "path · move sneakily",
  "part-spit": "pointers · hidden snare",
  "slash-touch": "noisy conflict · compass point",
  "ban-yap": "catch suddenly · wages",
  "filed-monks": "people · dug up",
  "chive-ruins": "special area · infectious agent",
  "ally-vice": "earthy material · not recorded",
  "ages-rent": "performed vocally · woody plant",
  "dowel-ruler": "not as high · governed",
  "farm-pull": "roll up cloth · hand surface",
  "amend-rover": "travelled by car · noodle soup",
  "dock-iron": "awkward nerd · small symbol",
  "each-fall": "one of two · delicate trim",
  "jelly-nodes": "cheerful · requires",
  "dibs-seat": "helps · finest",
  "blade-poets": "sheep cry · arranged for a photo",
  "enter-owned": "more recent · made less harsh",
  "pair-tons": "civil disorder · quick break",
  "acted-pores": "looks after · selected | flip",
  "until-upper": "student · radio adjuster",
  "tap-ten": "mesh trap · gentle touch",
  "hurt-oath": "time span · that one",
  "salsa-title": "minimum amount · animal rears",
  "brake-risen": "fracture · wash lightly",
  "cube-dish": "wait calmly · like that",
  "bill-peel": "ringing dome · heap",
  "tides-turns": "eating plans · smallest littermates",
  "theme-wider": "measured by clock · location question",
  "land-role": "toy figure · receive payment",
  "dupe-tiny": "without clothes · sympathy",
  "not-top": "cooking vessel · heavy weight",
  "coast-hence": "break rules · baked round",
  "fast-pick": "closed hand · bundle",
  "skin-tags": "bothers · comedy sketch",
  "range-romps": "small weights · lying face-down",
  "calm-seed": "dressed in · appear",
  "cross-singe": "crude total · from then",
  "haven-lemur": "person · simple machine",
  "dud-eel": "owed · guided",
  "font-tear": "Greek cheese · ripped",
  "cents-wills": "smell trace · sloppy drink",
  "mess-twin": "bird home · move in water",
  "boom-stop": "mistake sound · burial chamber",
  "fires-noble": "skeleton pieces · long-barrel firearm | flip",
  "pass-ruby": "put underground · drains strength | flip",
  "gosh-pipe": "bishop of Rome · deep breath",
  "hoped-rites": "self-respect · those ones",
  "dry-tea": "colour liquid · black road stuff",
  "bolt-fund": "short soft hit · crease",
  "oils-riot": "earth · musical three",
  "king-sets": "receives · drain down",
  "blank-great": "gloomy · award money",
  "cores-gawky": "uneven · earnings | flip",
  "modem-shale": "small version · disgrace | flip",
  "comic-sulks": "security devices · organised sound | flip",
  "and-dog": "bothers · strange | flip",
  "case-wrap": "land measure · exchange",
  "arms-earl": "damages · genuine",
  "agree-heels": "large bird · steep",
  "fuel-wild": "not empty · broad",
  "fists-viral": "competitor · screens finely",
  "pleas-tanks": "schemes · accepts",
  "fact-node": "traffic marker · foolish",
  "exact-snail": "spear · cabs",
  "bob-pin": "dance hit · pen point",
  "files-smear": "style · appears",
  "cats-sued": "performs · employed",
  "ports-roses": "cords · categorises",
  "child-peace": "hidden store · heaped",
  "boys-else": "not as much · follow orders | flip",
  "easy-weak": "not here · look for | flip",
  "hints-hires": "glow · upper garment",
  "feed-roof": "edibles · coral ridge",
  "cubs-puck": "male deer · small trophies | flip",
  "heart-stone": "world · musical shades | flip",
  "sage-tire": "entry barrier · upward movement | flip",
  "glass-roots": "shiny finish · cooked meat",
  "count-swore": "small weight · least good | flip",
  "glen-kiss": "large deer · mark | flip",
  "pros-yaps": "wash bar · lively",
  "nerd-soft": "affectionate · pause | flip",
  "baby-dale": "infant · woman",
  "kid-now": "racket · stir-fry pan | flip",
  "crude-think": "scold · tree stem | flip",
  "kills-traps": "practised ability · narrow band",
  "fade-sick": "coffee spot · flat round plate",
  "meet-spot": "brim over · upper parts",
  "fines-shell": "rows of text · storage ledge",
  "farm-milk": "movie layer · visible trace",
  "owed-runt": "not up · not false",
  "begin-trout": "overindulge · instructor",
  "eyed-labs": "hairless · vision organs",
  "horns-steer": "riding animal · severe",
  "leap-pins": "earnest request · rotate",
  "align-every": "supplied · team handoff",
  "held-lone": "opening · loan out",
  "tide-till": "eating plan · sing-song rhythm",
  "draw-liar": "train track · hospital section",
  "dead-near": "faculty head · peruse",
  "cheer-lasts": "board battle · afterwards",
  "age-yep": "vision organ · opening",
  "hats-stir": "strikes · night light",
  "lips-oils": "slide · earth",
  "alias-small": "long-necked animal · boat cloths",
  "fair-solo": "silly person · draped garment",
  "coat-owns": "frozen flakes · folded snack",
  "ample-patty": "submit request · dull finish",
  "arson-cable": "minor noble · measuring marks",
  "boss-rare": "pub counters · flower",
  "tom-win": "cut grass · tiny egg",
  "attic-poles": "eyepiece-related · stories",
  "glow-pray": "increase in size · stage action",
  "pills-three": "old knock-out gas · scatter liquid",
  "games-tight": "entry barriers · strength",
  "drop-feet": "not shallow · stronghold",
  "deeds-suing": "type group · took a position",
  "dame-poet": "calendar day · verse piece",
  "bury-tens": "fishing meshes · red gem",
  "bops-cafe": "key tags · walking speed",
  "ads-sad": "donkey · father",
  "dirt-plot": "informed · short journey",
  "below-races": "land units · joint bend",
  "lined-rocks": "flying hum · smooth and glossy",
  "beat-soul": "contest round · fasten closed",
  "ours-want": "graceful bird · journey",
  "angel-decks": "narrow shelf · quick bite",
  "melts-stool": "roadside lodging · narrow openings",
  "lies-nope": "ages · heap",
  "keel-wear": "leafy green · existed before",
  "are-elf": "slippery fish · distant",
  "deaf-mint": "locate · sports side",
  "glue-roof": "silly mistake · regulation",
  "crate-slate": "minimum amount · respond",
  "grams-plane": "light sources · scope of options",
  "dork-life": "ordinary people · fairground turn",
  "baton-solar": "nose-related · automated worker | flip",
  "hags-lend": "clock pointer · table supports | flip",
  "ally-dibs": "without effort · science rooms | flip",
  "bus-rid": "give a nickname · polite address",
  "rival-voter": "wanderer · essential",
  "item-monk": "make loops · office note | flip",
  "drum-fail": "two-part · not soft",
  "pipes-torch": "mound delivery · cords",
  "eats-frog": "therefore · quick | flip",
  "oval-oven": "deep affection · starburst",
  "enact-grows": "points tally · sharp nasal sound",
  "alter-drops": "less young · snares | flip",
  "devil-erase": "perfect model · tennis delivery",
  "bag-hat": "night flyer · old crone",
  "base-semi": "slanted view · appear",
  "host-isle": "catalogue · footwear",
  "blows-truce": "card suit · put in words | flip",
  "chase-outer": "reason · different",
  "cups-suck": "swear crudely · hockey disk | flip",
  "flair-trout": "from the mill · character feature",
  "knee-stat": "bird home · seize",
  "balls-niece": "thick wire · rows of text | flip",
  "birds-toned": "formal ties · ready for bed | flip",
  "ark-tie": "historical period · gear set",
  "leap-mean": "label · washed-out shade | flip",
  "gifts-waves": "hands over · drifts gently | flip",
  "cogs-gene": "breakfast ovals · one time | flip",
  "nicer-salon": "loose change · absorb knowledge | flip",
  "aided-carry": "private journal · sped in contest",
  "ably-gunk": "money place · not pretty | flip",
  "mixed-souls": "shaping fungus · double threes",
  "idol-rate": "spoken · coastal rhythm | flip",
  "rush-teen": "present place · snack kernels | flip",
  "new-two": "possessed · rain-soaked",
  "logos-stein": "not tight · sharp pain | flip",
  "ample-raise": "get up · syrup tree",
  "blot-stem": "permits · burial chamber | flip",
  "champ-rinse": "chop finely · keen-edged | flip",
  "east-wind": "first light · joins together",
  "beans-piled": "lose blood · aches | flip",
  "gear-oops": "years lived · not wealthy",
  "film-tens": "fresh herb · inner person",
  "alp-eye": "slippery fish · wages",
  "beam-foot": "deep sound · impressive act",
  "dude-zone": "light sleep · without clothes",
  "kicks-songs": "monarchs · foot warmers | flip",
  "meets-notch": "arrives · ordinal after ninth | flip",
  "acid-they": "urban centre · leader",
  "gloat-scare": "shoreline · not small | flip",
  "basil-freak": "slowing device · comes up short",
  "arts-ramp": "damages · hidden snare | flip",
  "day-was": "unhappy · veer off course",
  "disc-lamb": "offers · still",
  "swamp-truth": "broad strip · card-game winner",
  "digit-roofs": "pond amphibians · foolish person",
  "cash-tiny": "blue-green shade · present thing",
  "cogs-park": "missing spaces · stone music | flip",
  "fell-page": "signal cloth · fruit skin | flip",
  "angle-risks": "young women · slithering reptile | flip",
  "order-tease": "got up · discourage | flip",
  "dim-wok": "youngster · cut grass",
  "dates-resin": "family car · wheel covers",
  "aware-flash": "covered in water · sudden blaze | flip",
  "corn-wide": "not up · grain bowl",
  "fake-nick": "coffee spot · twist",
  "limit-moves": "distance units · throw up",
  "norm-test": "nearly all · fork-tailed bird | flip",
  "bomb-dunk": "light knock · not smart",
  "inter-skins": "got up · bad smell | flip",
  "gods-silk": "flat round plate · wood records",
  "agile-meats": "pond growth · objects",
  "blink-force": "carried · quick tap | flip",
  "lose-wash": "fasten closed · display",
  "canoe-fused": "stop · establish",
  "swath-twice": "squander · spell caster | flip",
  "ago-odd": "father · sticky ooze",
  "bleat-lobby": "monk leader · abdomen | flip",
  "flail-grown": "taken flight · quest prize",
  "dodo-nuts": "uneven chances · old-style to",
  "lamps-trial": "long-necked animal · narrow band",
  "gird-lame": "gentle · fury",
  "menus-nixes": "ore sites · connecting centre",
  "fees-stat": "not dangerous · exam",
  "stir-tone": "dispatched · musical three | flip",
  "gap-gun": "bothers · squashed-nose dog | flip",
  "queen-vague": "waiting line · plant-only eater",
  "after-react": "skilled making · one who consumes",
  "lion-move": "not recorded · night orb",
  "bugs-such": "young bears · pour out",
  "diver-total": "sea-level rhythm · ballot caster | flip",
  "asset-pucks": "bags · disturbed",
  "last-yelp": "settles a bill · recounts",
  "army-lack": "earthy material · visible trace",
  "hides-parry": "robust · dock supports | flip",
  "hop-row": "expert · identity question",
  "amen-void": "house worker · baking chamber",
  "rates-sharp": "pieces · cut wool",
  "cling-props": "hair fasteners · fork point | flip",
  "dunk-nope": "network point · rebellious type",
  "fill-lout": "against rules · sing-song rhythm",
  "nifty-talks": "greasy · connections",
  "aids-deer": "peruse · team half",
  "chunk-slash": "metallic rattle · quiet noise | flip",
  "areas-kinds": "thoughts · status levels",
  "all-way": "leather punch · place down",
  "roles-world": "dryly funny · promised aloud",
  "lease-warns": "more recent · spicy dance | flip",
  "honk-item": "pig sound · those people",
  "lapse-waste": "earnest requests · perspiration",
  "hunt-nags": "cosy · comparison word",
  "crest-meats": "appears · land strip",
  "ape-arm": "sound catcher · route diagram",
  "cent-lime": "soften with heat · pleasant",
  "dolly-sites": "adores · foolish",
  "grow-lose": "fairy-tale brute · unhurried",
  "mean-text": "following · sports side",
  "beers-glass": "invoke favour · cogs",
  "ponds-tails": "ruin · remain upright | flip",
  "beat-loop": "footwear · jump",
  "adult-spell": "river mouth · tugs",
  "feeds-harsh": "new · skull tops | flip",
  "bus-mew": "total · internet page",
  "eons-tiff": "acceptable · not hard",
  "paper-vista": "noodle dish · snake tooth",
  "muted-rinse": "caregiver · measured by clock",
  "evil-wise": "small island · outlook",
  "edits-rents": "leans toward · attempts",
  "dish-ugly": "pour out · without effort",
  "bars-cost": "person in charge · wagon",
  "one-saw": "possessed · ocean",
  "keep-mall": "mild onion · hand surface | flip",
  "funds-rainy": "amusing · sudden attacks",
  "arms-oven": "usual standard · rescue",
  "demon-pairs": "remove liquid · verses",
  "aided-wrong": "challenged · still due",
  "edge-road": "not alive · therefore",
  "crane-hopes": "land units · call device | flip",
  "giant-leave": "representative · not dead",
  "eel-was": "legal code · notice",
  "laser-sifts": "catalogues · less risky",
  "nests-until": "rows of text · showy trick",
  "fled-ship": "turn over · small shelter",
  "cook-plus": "good fortune · mistake sound",
  "shack-spook": "curved catches · bundles",
  "cold-late": "delicate trim · informed",
  "scale-stake": "baked rounds · stories",
  "macro-noble": "sweeping tool · not dirty",
  "dark-flow": "sketch · ordinary people",
  "bop-out": "local bar · also",
  "mural-twins": "subtraction sign · dragnet search",
  "into-tusk": "make loops · dismissals",
  "curve-poles": "hints · show true",
  "doom-furl": "beat keeper · silly person",
  "agree-usage": "rub out · measuring dial",
  "lens-team": "dinner portion · dispatched",
  "glen-snow": "not short · current reports",
  "nib-wow": "ribbon knot · prevail",
  "fobs-test": "wagers · not hard",
  "mere-that": "sums class · woody plant",
  "cover-viral": "flowing water · using the voice",
  "till-wood": "handy implement · untamed",
  "arc-due": "cow’s chew · historical period | flip",
  "fart-sold": "shallow crossing · seasoning mineral",
  "comfy-reads": "rot slowly · shapes",
  "diet-lift": "revise copy · dart briefly | flip",
  "depot-liner": "observed · danger",
  "been-snug": "stopper plug · observed | flip",
  "lotus-nippy": "drops heavily · oneness | flip",
  "node-wait": "opposed prefix · had a debt",
  "agent-veins": "scheduled happening · profits",
  "hippo-hosts": "snapshot · vessels",
  "and-its": "racket · took a seat",
  "mason-suite": "small rodent · stubborn mark | flip",
  "dull-snap": "touch down · addition sign",
  "cores-swept": "organised body · sugary",
  "file-task": "tree part · comedy sketch",
  "exile-pants": "be real · discussion group",
  "amid-year": "military force · thought",
  "aced-gave": "grown old · hollow shelter",
  "china-lyric": "coldly · cattle spread | flip",
  "hey-out": "definite article · second person",
  "babe-lips": "baby drool catcher · washed-out shade",
  "foal-shop": "one of two · mistake sound",
  "ask-eye": "notice · shaggy ox",
  "model-venom": "citrus fruit · relocated",
  "does-sage": "comfort · deities",
  "gang-ward": "pull along · chew steadily | flip",
  "curse-folks": "angry · lucky accident | flip",
  "able-lugs": "adhesive · science rooms",
  "shove-slope": "desires · adores",
  "mall-with": "sums class · determination",
  "chick-ninth": "easy task · ponder",
  "ape-not": "single unit · gentle touch",
  "great-slide": "minimum amount · raised line",
  "acts-hulk": "absence · therefore | flip",
  "other-roses": "riding animal · shop",
  "mined-seats": "directed · bird homes",
  "flat-pony": "type style · stage action",
  "mars-tarp": "incline · rodents",
  "beta-hero": "tedious person · loathe",
  "lime-soon": "big cat · a few",
  "age-gym": "breakfast oval · might",
  "caps-gunk": "bothers · hockey disk",
  "posed-teams": "tiny particles · quickness",
  "chat-sour": "hurry · folded snack",
  "free-meet": "walking pair · only | flip",
  "raced-skate": "posed a question · wooden box",
  "cigar-using": "cake topping · sweet crystals",
  "scan-yaks": "poses questions · blue-green shade",
  "altar-three": "feeling centre · afterwards",
  "cooks-words": "bottle stoppers · forest patches",
  "ass-hew": "female pronoun · once existed",
  "harm-pile": "employ · hand surface",
  "give-tops": "farm animals · ballot choice",
  "hazel-rotor": "guest lodging · shaving blade",
  "tool-unto": "boor · upon",
  "leaf-miss": "targets · inner person",
  "paint-rusty": "keyboard entry · wanders off",
  "chunk-trade": "rough · show gratitude",
  "newly-parts": "answer back · desires",
  "seeds-singe": "dispatches · long blockade",
  "guy-map": "squashed-nose dog · orange tuber",
  "legit-turns": "remorse · leases",
  "after-nixes": "sends by machine · bury formally",
  "chin-mode": "trial version · tiny measure",
  "ably-disk": "warm in sun · without effort",
  "goals-prove": "serious · swimming spots",
  "ashes-debit": "wild creature · conceals",
  "also-mice": "black fuel · halfway prefix",
  "lace-sums": "swear crudely · not female",
  "jolt-pets": "quick notes · animal hide",
  "claws-cruel": "hints · move low",
  "agile-saved": "to one side · judge’s mallet",
  "chef-skin": "sea creature · collar part",
  "bases-cable": "spills secrets · stop",
  "acids-trees": "quotes as evidence · peruses",
  "ears-with": "inheritor · quick hit",
  "flee-list": "small island · departed",
  "pipes-ranks": "marsh bird · bright flash",
  "soda-wife": "living-room seat · broad",
  "end-lot": "mesh trap · not young",
  "lord-rage": "precious metal · uncommon",
  "cache-plant": "not dirty · repair spot",
  "actor-homes": "large-scale prefix · those ones",
  "each-pole": "repeated sound · earnest request",
  "guns-team": "butcher’s cut · performed vocally",
  "ponds-terms": "pay out · tempest",
  "keen-nope": "retain · zero amount",
  "drift-fines": "smell lightly · ready for bed",
  "its-paw": "retreat pool · quick humour",
  "diver-ruler": "flowing water · governed",
  "arts-exit": "draped garment · written words",
  "eight-slash": "peaks · roof layer",
  "fame-rack": "coffee spot · visible trace",
  "feed-link": "locate · mild onion | flip",
  "dance-verse": "fragrant timber · number after six | flip",
  "hand-took": "covering top · armoured vehicle | flip",
  "noble-rinse": "woven cloth · not drunk | flip",
  "bunt-very": "put underground · air outlet | flip",
  "bit-own": "pen point · number after one | flip",
  "dude-nuts": "worn-out clothes · melody | flip",
  "lanky-meals": "drips out · masculine | flip",
  "newer-tenor": "go inside · possessor | flip",
  "dies-kill": "told a fib · smooth fabric",
  "crane-great": "scope of options · respond | flip",
  "dish-rest": "small shelter · mix round",
  "aides-sorry": "private journal · flowers | flip",
  "deal-know": "not up · leafy green | flip",
  "agog-seas": "travels · long tale",
  "fix-nor": "in support of · cancel",
  "bawl-hulk": "male cattle · bird of prey",
  "queer-white": "hushed · location question",
  "euro-hats": "solemn promise · certain",
  "batch-genes": "long seat · entry barriers | flip",
  "drove-swamp": "plays noisily · gestured",
  "asks-lamb": "warm in sun · door-bang | flip",
  "lingo-wives": "green fruit · playground arc",
  "blab-leaf": "infant · autumn drop",
  "birth-flick": "building block · grime",
  "bite-gush": "weary exhale · hollow pipe",
  "acted-risks": "bags · made an attempt",
  "legs-runs": "focus glass · floor coverings",
  "beard-count": "rhythmic steps · engine boost",
  "area-hint": "opposed prefix · catch sound | flip",
  "dad-don": "joining word · strange",
  "droid-swear": "routes · strange",
  "fart-held": "sensed by touch · not soft",
  "loves-steam": "relocates · take secretly",
  "baron-given": "red-breast bird · plant-only eater | flip",
  "came-such": "courtroom matter · a lot",
  "amend-rents": "labels · fashion direction",
  "blips-stout": "constructed · small marks",
  "desk-sins": "lip press · dispatch",
  "into-rile": "straight mark · group of three | flip",
  "baa-ten": "forbid · hot drink",
  "cards-woozy": "wildly odd · forest patches",
  "teen-toss": "short message · groups",
  "rites-shale": "old knock-out gas · boat cloths | flip",
  "bald-grid": "feathered animal · pleased",
  "crows-llama": "permit · leave in a hurry",
  "alone-bumps": "plentiful · extra reward",
  "goal-idol": "placed flat · brand mark",
  "booty-start": "automated worker · delicious | flip",
  "awry-bias": "not here · curved bones",
  "age-tap": "consumed · opening",
  "gaff-sole": "club game · not dangerous",
  "arose-honks": "makes money · trembled",
  "joins-makes": "funny lines · main pipes",
  "knew-tool": "glance · departed",
  "done-yowl": "solely · had a debt",
  "alter-gifts": "apartments · striped cat",
  "cater-serve": "desire strongly · guide",
  "pops-rock": "police officers · pig meat",
  "psalm-teeth": "assists · dull finish | flip",
  "lap-two": "night bird · gentle touch",
  "glen-swig": "table supports · flight limb",
  "beds-envy": "large group · finishes",
  "edits-plans": "family car · divided",
  "slate-wrist": "long support · has on",
  "able-wide": "puffed air · thought",
  "base-melt": "finest · not female",
  "abuse-oddly": "poorly · soak thoroughly",
  "bowel-setup": "joint bend · disturbed",
  "cast-kind": "round plate · armoured vehicle",
  "eye-wet": "female sheep · up to now",
  "aired-began": "one more time · raise stock",
  "dimly-natal": "masculine · sea-level rhythm",
  "arts-sued": "rodents · employed",
  "dirt-seen": "awkward brainiac · joins together",
  "curly-vines": "bad spell · old record material",
  "feta-hull": "not empty · warmth",
  "clone-glade": "spear · woodland cabin",
  "bleat-rises": "straps · lift upward",
  "eel-win": "fib · fresh",
  "dope-nick": "secret system · rosy shade",
  "mafia-wants": "obsession · drifts gently",
  "finds-nasty": "stylish · beach grains",
  "fits-yelp": "sympathy · inner person",
  "gives-value": "exists · unclear",
  "clay-zone": "sluggish · one time",
  "cared-salts": "continues · sped in contest",
  "chalk-poses": "board battle · lively dance",
  "dare-edgy": "border · grassy enclosure",
  "pay-way": "chatter · veer off course",
  "intro-steel": "sea opening · shop",
  "free-sour": "belonging to us · coral ridge | flip",
  "crews-stalk": "office worker · hits sharply",
  "jean-soil": "connect · fasten closed",
  "nicer-romps": "organised body · ore worker | flip",
  "lever-today": "hold-up · ballot caster | flip",
  "key-say": "shaggy ox · agreement word | flip",
  "dork-prep": "let fall · small benefit",
  "ample-using": "syrup tree · taking to court",
  "cage-tale": "entry barrier · delicate trim",
  "deaf-lilt": "ran away · animal rear",
  "chaos-dream": "selected · stage emotion",
  "aisle-cards": "sudden attacks · measuring marks",
  "calm-word": "not warm · not cold",
  "grog-rude": "medicine · fairy-tale brute",
  "havoc-siren": "house pest · blood vessels",
  "dog-pot": "deity · upper surface",
  "beer-miff": "quick punch · only",
  "acts-sued": "felines · employed",
  "grape-ropes": "say yes together · stage supports",
  "fines-slice": "insects in air · from then",
  "aged-flit": "present · guide metal",
  "photo-trace": "break rules · soldier group",
  "rank-some": "visible trace · smell organ",
  "from-root": "stronghold · chamber",
  "label-zesty": "gem setting · seasoned",
  "aid-nab": "sheep sound · racket",
  "bears-gnome": "carried · contests",
  "euro-song": "no longer here · belonging to us",
  "panda-wires": "prize presented · backbone",
  "arch-idea": "sour chemical · catch sound",
  "nest-pack": "collar zone · before now",
  "atlas-scent": "put into effect · continues",
  "base-clan": "has the skill · image capture",
  "party-super": "writing sheet · oxidised",
  "panel-split": "wall coating · magic words",
  "tin-ups": "belonging to it · wordplay joke",
  "prep-what": "relieved exhale · hidden snare",
  "curse-grill": "without mercy · young women",
  "tidy-yaps": "calendar stretches · sympathy",
  "tern-true": "woody plant · change direction",
  "full-king": "deep divide · connection",
  "buys-kegs": "tiny pests · lock openers",
  "acted-horse": "sped in contest · that group there",
  "limit-saves": "men · call in briefly | flip",
  "bro-emu": "crowd · regret",
  "menu-ties": "appear · single thing",
  "bowls-stein": "carried by wind · web locations",
  "cafe-thin": "Greek cheese · small measure",
  "lame-vote": "change position · story",
  "macro-slide": "rich dairy top · worshipped figures",
  "ghee-send": "inheritance code · small shelter",
  "sleep-thugs": "socket fillers · bed linen",
  "heir-plod": "keep in grip · jetty",
  "corps-lapse": "drops heavily · frighten",
  "ago-art": "rowing blade · label",
  "laugh-tones": "paths · hard to handle | flip",
  "died-earl": "challenge · told a fib",
  "liner-naive": "not dead · inside",
  "rate-ribs": "pub counters · wheel covering",
  "fresh-glued": "redden suddenly · avarice",
  "range-salty": "not small · unpleasant",
  "safer-tacos": "shoreline · worries",
  "fast-need": "grow dim · fishing meshes",
  "elf-fog": "walking limb · not on",
  "foot-lift": "minor quarrel · handy implement | flip",
  "earns-trawl": "absorb knowledge · drinking tube",
  "lotus-rinse": "narrow openings · bladder output",
  "alley-verbs": "each one · game spheres",
  "runt-sour": "operates · guided journey | flip",
  "edit-nags": "years lived · small dent",
  "hates-later": "feeling centre · minimum amount",
  "mad-she": "sales pitches · stitched edge",
  "bluff-start": "say suddenly · workplace crew",
  "saps-toes": "oceans · small mark",
  "cups-tick": "slices · chosen option | flip",
  "caste-rebel": "thick wire · start again",
  "delay-salon": "nose-related · mountain singing | flip",
  "duke-ends": "worn-out clothes · leg joint | flip",
  "donor-waist": "broadcast device · settlements",
  "neon-skit": "short message · drain down",
  "dense-karma": "creator · family car | flip",
  "eye-rot": "metal-bearing rock · up to now | flip",
  "third-weigh": "upper-leg part · strange",
  "anger-toils": "aims · bury formally",
  "down-fell": "loan out · wild canine",
  "cough-shuts": "drinks in gulps · compass point",
  "come-rare": "extra amount · speed contest",
  "swan-twin": "desire · succeeds",
  "false-print": "opening rank · aircraft | flip",
  "bight-intro": "object · path around planet | flip",
  "dale-many": "woman · label",
  "guy-war": "floor covering · veer off course",
  "left-soap": "jump · not hard",
  "army-tape": "close friend · ask heaven",
  "diets-parry": "prepared · short journeys",
  "opera-sulks": "lively dance · account holders",
  "sees-yard": "not difficult · colour group",
  "cries-spend": "belief code · rotates",
  "oops-sack": "allow through · kitchen worker",
  "close-treat": "stage performer · hard alloy",
  "nap-yes": "writing tool · speak",
  "flats-sweet": "hits sharply · naval group",
  "gnaw-then": "suspend · pond amphibian",
  "crack-tribe": "building block · wooden box",
  "caps-heel": "courtroom matter · assist",
  "spicy-truth": "thrower’s delivery · oxidised",
  "bush-cute": "like that · hollow pipe",
  "basil-wrote": "cook under heat · squander",
  "koala-rifle": "matching · plant life | flip",
  "ink-sax": "cancel · pose a question | flip",
  "bull-camp": "raised swelling · summon",
  "node-zone": "light sleep · zero amount",
  "board-tenor": "leafy shelter · observed",
  "loud-rain": "gloomy · fingertip target",
  "class-mourn": "ringlets · stone worker",
  "dealt-rival": "change · legitimate",
  "dibs-pile": "wait calmly · mouth edges | flip",
  "grip-sand": "quick break · fasten around",
  "loose-pagan": "pond growth · soup utensil",
  "all-wow": "legal code · night bird",
  "shaky-wraps": "sells aggressively · hoarse",
  "grog-wise": "fairy-tale brute · gulp",
  "drew-wing": "increased · air in motion",
  "pasta-stern": "trousers · fixed gaze",
  "sigh-toss": "mild surprise · takes a seat",
  "pools-shine": "call device · dirties",
  "elm-ewe": "slippery fish · cat sound",
  "elder-unite": "top group · beneath",
  "mood-weak": "had a debt · wildly out of control",
  "spit-year": "hearing organs · sympathy",
  "truce-yells": "chosen by vote · bad-tempered",
  "bilge-gross": "deep ravine · delight",
  "care-vice": "hollow shelter · grain bowl",
  "aging-cites": "entry barriers · cake topping",
  "this-unto": "inside movement · therefore",
  "surf-taco": "belonging to us · true detail",
  "bet-raw": "black road stuff · internet page",
  "golf-seat": "horned farm animal · inner person",
  "hint-keys": "body covering · those people",
  "field-trade": "released · sea-level rhythm",
  "edit-menu": "without clothes · single entry | flip",
  "note-snip": "red light command · number after eight",
  "hosts-wince": "matching siblings · selected",
  "fire-silk": "danger · existence",
  "fifty-sorts": "milestone birthday · screens finely",
  "chart-feast": "long pole · respond",
  "era-mud": "owed · upper limb | flip",
  "maid-used": "in the middle of · took to court",
  "alert-shoes": "misplaces · feeling centre",
  "ridge-rusty": "sudden rise · not clean",
  "bugs-hope": "very large · dances lightly",
  "dull-ergo": "adhesive · noble master",
  "crisp-wheat": "low-cost · hand joint",
  "nasty-topic": "sound-related · burger disc",
  "obey-odds": "performs · torso",
  "eat-gin": "bothers · neckwear knot | flip",
  "slate-stain": "killed · condition",
  "melt-trip": "animal hide · neaten edges",
  "rate-seen": "fork-tailed bird · comfort",
  "model-vegan": "evil spirit · judge’s mallet",
  "scoop-shore": "centres · basketball rings",
  "nerve-rests": "tennis delivery · leases",
  "hers-must": "untidy state · injured",
  "even-swig": "hand over · current reports",
  "nor-wed": "small lair · line of seats",
  "dinky-liars": "private journal · connections",
  "atoms-clear": "stage performer · men",
  "fire-lilt": "raise upward · annoy",
  "lion-type": "sharp cry · inside movement",
  "good-talk": "pleased · carried away",
  "nun-pod": "wordplay joke · head dip | flip",
  "apple-romps": "stage supports · syrup tree",
  "call-like": "delicate trim · end life",
  "lamb-pair": "incline · court release money",
  "blank-child": "sightless · blackboard stick",
  "dingo-trace": "metal bar · sped in contest",
  "nine-sort": "mix round · glowing sign gas",
  "king-lets": "valley hollow · comedy sketch",
  "casts-label": "explosion · measuring marks",
  "plod-trek": "small benefit · informed",
  "elf-pea": "high mountain · charge",
  "clue-rack": "land measure · good fortune",
  "frost-gains": "nearly swoons · crude total",
  "snow-what": "small settlement · clean with water",
  "bond-seat": "dispatch · watercraft",
  "scrap-swamp": "holiday sites · folds around",
  "came-sick": "small rodents · barrel | flip",
  "dies-rare": "hearing organs · fairground turn",
  "delay-rival": "cake stratum · legitimate",
  "bread-genes": "chilli staples · avarice",
  "oar-see": "metal-bearing rock · ocean",
  "halls-yeast": "dog tether · seasoned",
  "loses-shape": "fire remains · incline",
  "arch-sums": "upper limbs · like that",
  "room-runs": "usual standard · belonging to us",
  "steep-storm": "encounters · harbour towns | flip",
  "door-hell": "toy figure · brave lead",
  "acted-erase": "stop · ranked",
  "ivory-notes": "diplomatic messenger · civil unrest",
  "nib-wok": "ribbon knot · family",
  "disc-slam": "dressed in · fail to hit",
  "amen-site": "opposed prefix · appear",
  "drone-spins": "wash lightly · small waters",
  "owed-tins": "has possession · fastened",
  "corgi-winds": "cake topping · bladed weapon",
  "draw-epic": "playing card · clean by rubbing",
  "mines-tally": "masculine · roof pieces",
  "cage-eons": "years lived · one time",
  "enter-value": "depart · radio adjuster",
  "pal-toy": "batch · chatter",
  "risky-start": "creative type · waist garment",
  "cries-hooks": "prepares food · employs",
  "knee-this": "long walk · fishing meshes",
  "sulk-wait": "matching outfit · stroll",
  "agile-poles": "large bird · ruin",
  "knit-loop": "rosy shade · handy implement",
  "cash-gift": "weary exhale · true detail",
  "anger-snail": "sports venue · arm support",
  "dock-ends": "collar zone · uneven chances",
  "ran-rue": "being verb · ashes vessel | flip",
  "dale-heat": "information · shoe back",
  "mini-toes": "halfway prefix · inside movement",
  "lifts-nasal": "last · seasoning crystals",
  "bath-will": "round toy · alongside",
  "gear-skin": "hearing organs · ruler",
  "drama-stale": "carrying weapons · map book",
  "acts-over": "centre · immense",
  "edits-grade": "calendar fruits · raised line",
  "owl-pot": "number after one · cut off",
  "fret-pony": "type style · hunted animal",
  "tower-viper": "put in words · show true",
  "boom-slap": "young sheep · mistake sound",
  "green-quips": "holds tightly · monarch | flip",
  "daily-taped": "helped · fittingly",
  "nerd-wins": "current reports · outer peel",
  "fools-slick": "woolly group · dirties",
  "clean-sheep": "brief delay · therefore",
  "hint-went": "after that · matching sibling",
  "paw-rid": "brief plunge · armed conflict",
  "hair-loud": "time span · placed flat",
  "canny-rouge": "irate · small weight",
  "mild-tarp": "soil · hand surface",
  "fish-rule": "document · hurry",
  "tease-worst": "shop · perspiration",
  "marks-sigma": "Greek letter · dangers | flip",
  "bulk-nice": "six-sided solid · connection",
  "photo-reads": "horse show · routes",
  "argue-later": "extreme · keen",
  "crams-trees": "looks after · conditions",
  "rock-soft": "price paid · pronged utensil",
  "acre-wide": "thought · team",
  "cutie-short": "moral code · guided journeys",
  "brace-spike": "slowing device · flavouring",
  "arts-lone": "receive payment · narrow opening",
  "belt-tail": "lure · recount",
  "bagel-sales": "sticker · vapours",
  "monk-owed": "understand · trial version",
  "boy-web": "short nodding motion · evergreen tree",
  "east-hunt": "tidy · closed",
  "cake-reef": "smell strongly · coffee spot",
  "areas-midst": "confess · burns on surface",
  "game-tiff": "clock measure · fishing hook | flip",
  "airy-goal": "fibber · stretch practice | flip",
  "fifth-lists": "grime · screens finely",
  "owner-skits": "tied loops · more sensible",
  "madam-novel": "internet box · sea-force related | flip",
  "aside-lanky": "matching · gritty with grains",
  "oaf-orb": "big snake · in support of",
  "dance-verbs": "curves · cut into shape",
  "named-tired": "dug up · ranked",
  "play-stop": "drops with a sound · remain",
  "page-pops": "missing spaces · pontiff",
  "prime-scans": "wash lightly · holiday sites",
  "road-sign": "circular band · fizzy drink",
  "items-store": "slightly wet · start again",
  "agile-saint": "between-seat path · enormous figure",
  "and-yet": "colour liquid · brown shade",
  "canal-flats": "family groups · deadly",
  "paths-weeds": "quickness · broad strip",
  "nude-yeti": "looked at closely · single thing",
  "coat-thin": "minted money · that one",
  "lobby-rains": "spills secrets · unexpected contrast",
  "shaky-tries": "detests · dangerous",
  "gory-hill": "sacred · young woman | flip",
  "pigs-walk": "stare openly · mouth edges",
  "feta-palm": "tree part · press firmly | flip",
  "dim-pro": "little devil · straight stick",
  "cult-deny": "properly · coin fraction | flip",
  "army-envy": "a lot · extremely",
  "brave-imply": "easy stroll · in the know | flip",
  "caves-mouse": "reason · relocates",
  "last-sari": "rodents · canvas mover",
  "dote-worn": "travelled · small settlement",
  "deals-freed": "senses by touch · challenged",
  "crews-hopes": "range · tiny insect-eater",
  "scene-write": "quotes as evidence · refresh",
  "all-wag": "leather punch · fall behind",
  "lemon-thank": "calendar page · leg joint",
  "blue-trap": "story · stomach noise | flip",
  "diet-rear": "peruse · level",
  "began-parry": "small fruit · old-ways believer",
  "robot-slate": "change · footwear",
  "land-math": "condemn mildly · stop",
  "nodes-piece": "sibling’s daughter · arranged for photo",
  "site-yowl": "sly · foot digits",
  "axe-elm": "slippery fish · greatest amount",
  "grace-turbo": "savage · freight load",
  "awry-bald": "hospital section · skilfully",
  "lady-wise": "paths · told a fib",
  "his-two": "belonging to it · identity question | flip",
  "neat-sums": "parent’s sister · untidy state",
  "maple-seats": "brief delay · groups",
  "deny-mask": "work surface · a lot",
  "rents-socks": "bird homes · bottle stoppers",
  "sadly-tiles": "edges · count",
  "drum-isle": "impolite · slender",
  "erase-oddly": "of monarchs · actions",
  "cone-rest": "flower · coin fraction",
  "solar-wives": "not as high · border stamps",
  "mud-one": "put on · flightless bird",
  "gaps-lean": "years lived · scheme",
  "bribe-cater": "upright · synagogue teacher | flip",
  "fate-tips": "suits · sticky strip",
  "ashes-scale": "examples · layered rock | flip",
  "dense-edges": "meaning · inched sideways",
  "dual-gods": "worn-out clothes · aim",
  "loans-scram": "ethical compass · image checks",
  "bliss-canal": "herb for pesto · family groups",
  "ewe-ray": "historical period · evergreen tree",
  "pasta-weeks": "mountain tops · squander",
  "five-rely": "existence · extremely",
  "crave-ropes": "show true · land units",
  "cult-sack": "throwing crew · good fortune",
  "bake-tern": "fermented pint · armoured vehicle",
  "equip-shoot": "rather · basketball rings",
  "lugs-sour": "floor coverings · spirit",
  "crook-spies": "haunting figure · weeps",
  "tin-wok": "at present · gear set",
  "heart-wings": "object · vow strongly",
  "ghee-plus": "pour out · fruit skin",
  "gruel-trash": "causes pain · not small",
  "field-patch": "grime · walked evenly",
  "salt-seen": "consumes · focus glass",
  "came-sink": "pleasant · disguise cover",
  "glade-slope": "woodland cabin · brief delay",
  "deaf-will": "placed flat · travelled by air",
  "bias-teem": "ray of light · joins together",
  "cod-day": "shy · father",
  "open-used": "smell organ · trick",
  "boot-film": "deep sound · dart briefly",
  "satay-seals": "spicy dance · baking fungus",
  "ample-beach": "soft fruit · easy stroll",
  "lead-skit": "story · flat round plate",
  "furl-gate": "worry · thick excess",
  "alert-mango": "afterwards · in the middle of",
  "pedal-tapas": "church-linked · calendar fruits",
  "excel-wheat": "circular mover · precise",
  "jut-oar": "glass container · not indoors",
  "rent-some": "extra amount · bird home",
  "heavy-slots": "heatedly · rescues",
  "leash-vegan": "remove stubble · viewpoint",
  "lone-trio": "annoy · upon",
  "dork-hint": "soil · car horn sound",
  "lemon-sassy": "untidy · hair studio",
  "goose-tread": "remained upright · concurred",
  "oops-reds": "performs · experts",
  "ferry-rooms": "overhead coverings · cheerful",
  "elf-oak": "large deer · clumsy fool",
  "cool-warm": "stuff tightly · sheep fibre",
  "newer-vines": "not ever · cellar bottles",
  "ball-swap": "cry loudly · hit sharply",
  "goat-lads": "long tale · informed",
  "basin-chase": "foundations · porcelain ware | flip",
  "felt-rind": "raise upward · awkward brainiac",
  "adult-stern": "changes direction · river mouth",
  "data-them": "noblewoman · that one",
  "earns-voice": "centres · innocent",
  "gun-spa": "drain vitality · horned antelope",
  "arts-cage": "performs · fury",
  "awake-orbit": "wait for · snapped",
  "edges-issue": "outward appearance · plant starters",
  "epic-only": "sharp cry · minted money",
  "cuts-poet": "mail item · adorable",
  "comic-resin": "from then · tiny-scale prefix",
  "fled-haul": "not empty · leader",
  "acres-loves": "frighten · find the answer",
  "bait-plod": "ink mark · already settled",
  "gas-hot": "received · possesses",
  "dish-sure": "team half · hurry",
  "rites-towel": "less good · heading",
  "blue-reef": "meat complaint · regulation",
  "isle-seal": "otherwise · canvas mover",
  "apple-stray": "hoarse · dinner surface",
  "askew-hates": "tremble · squander",
  "iron-nets": "zero amount · mix round",
  "curls-fiery": "documents · spiced stew",
  "decor-timed": "worthiness · in cipher",
  "due-gym": "chewing resin · colour liquid",
  "chant-nylon": "child minder · woven material",
  "rogue-stint": "visitor · opening section",
  "bike-dodo": "printed volume · no longer lived",
  "flat-swat": "final one · drift lightly",
  "bagel-males": "contests · sticker",
  "legit-roots": "striped cat · seat without back",
  "mate-oven": "ballot choice · prayer ending",
  "dark-rope": "green space · travelled mounted",
  "bot-far": "night flyer · in support of",
  "creek-those": "block the throat · woody plants",
  "inner-tears": "falls from clouds · go inside",
  "cape-give": "bad habit · sheet",
  "keel-wild": "end life · unwanted plant",
  "modes-silly": "misplaces · faintly",
  "semi-test": "plant stalk · joins together",
  "lands-sheep": "discussion group · small shelters",
  "shout-slots": "party givers · sacred water flower",
  "hulk-pond": "keep in grip · rebellious type",
  "car-sip": "polite address · headwear",
  "pumps-warns": "reject sharply · marshy ground",
  "guide-logos": "worshipped figures · scrape out",
  "ours-pile": "lubricates · unmixed",
  "shirt-swung": "causes pain · flight limbs",
  "bibs-tide": "teeth mark · first claim",
  "gases-twist": "sample flavour · gulps",
  "peer-tons": "fork-tailed bird · model’s stance",
  "eats-unto": "fishing meshes · vehicle, briefly",
  "bay-son": "bean sauce · forbid",
  "rare-salt": "genuine · night light",
  "lung-safe": "energy source · bothers",
  "flint-stalk": "long supports · side of body",
  "nails-smoke": "between-seat path · robed brothers",
  "kale-nick": "sweet slice · connection | flip",
  "scrap-stork": "snares · bottle stoppers",
  "glow-prep": "increased · drops with a sound",
  "pylon-ships": "cold and brisk · splashing mess",
  "can-moo": "adult male · dove sound | flip",
  "cruel-exits": "outer shell · banishment",
  "perks-satay": "chores · pay back",
  "goal-want": "Roman robe · grass patch | flip",
  "chock-plane": "sharp rattle · call device",
  "bent-dude": "money owed · unclothed",
  "bread-cares": "large mammals · looked after",
  "runts-toned": "showy trick · flying hum",
  "cone-push": "refusal word · like that",
  "desk-tire": "comedy sketch · marsh grass",
  "hew-sax": "toothed cutter · bad spell",
  "arena-cider": "shown publicly · lifting bird | flip",
  "menus-stray": "oxidised · labels",
  "ties-wave": "outlook · sunrise direction",
  "charm-enact": "noodle soup · capture",
  "stiff-vocal": "essential · mock openly",
  "dead-team": "calendar day · produced",
  "mint-uses": "untidy state · single thing",
  "dull-taco": "boor · dressed in",
  "jet-yaw": "mouth hinge · up to now | flip",
  "sins-wrap": "tiny cut · armed conflicts",
  "ogres-twang": "incorrect · entry barriers | flip",
  "glen-slot": "not short · permits | flip",
  "hole-kegs": "mild onion · mild surprise",
  "sound-while": "would, if allowed · glow | flip",
  "caps-tick": "felines · chosen option | flip",
  "atoms-seeds": "measured amounts · animal flesh",
  "chug-heir": "elevated · remedy | flip",
  "asset-heels": "nearby ones · retail events | flip",
  "hen-ram": "stitched edge · sprinted",
  "bonus-motor": "extra lift · grieve",
  "lacks-voter": "conceal · chats",
  "soon-stop": "large amounts · mistake sound",
  "gauge-pants": "groups of thugs · grey-brown shade | flip",
  "motto-quasi": "slightly wet · set allowance | flip",
  "lion-ruby": "scorch · greasy",
  "empty-torso": "pace of music · narrative",
  "melt-rise": "pause · distance unit",
  "dive-redo": "antlered animal · emptiness",
  "lay-top": "plaything · resting thighs | flip",
  "bail-doom": "deep sound · numbered face | flip",
  "airy-reef": "flames · calendar span | flip",
  "siren-spray": "hoarse · tree sap",
  "bold-list": "road charge · first claim | flip",
  "neck-sage": "barrel · inheritance code",
  "sense-taken": "slithering reptile · young people",
  "equip-spurs": "wisecracks · coin holder | flip",
  "cores-spoke": "prepares food · wild outing",
  "diary-noise": "to one side · unexpected contrast | flip",
  "did-leg": "excavate · guided",
  "miss-pain": "allow through · small version",
  "coal-neat": "folded snack · narrow road | flip",
  "rates-until": "track path · melodies",
  "space-spell": "night rest · head skin | flip",
  "also-gate": "fasten closed · Roman robe",
  "drove-loser": "sequence · find the answer",
  "dare-this": "creative fields · conceal",
  "hints-rugby": "salty like sea · toughs",
  "birds-cease": "foundation · belief code",
  "fig-wed": "given food · hairpiece",
  "pond-ragu": "pull along · on top of",
  "flat-good": "pleased · walking base",
  "apart-weeds": "vow strongly · stuck down",
  "drop-keen": "require · pig meat",
  "pool-some": "verse piece · unaccompanied",
  "model-pests": "softens with heat · arranged for photo",
  "army-task": "visible trace · remain",
  "chest-fried": "scold · worries",
  "laden-moats": "evil spirit · map book",
  "fly-irk": "kind or sort · cook in oil | flip",
  "huge-oral": "fairy-tale brute · drag load",
  "cure-tidy": "obligation · grain bowl",
  "slain-smack": "is missing · main pipes | flip",
  "hovel-react": "instruct · sweetheart | flip",
  "aged-year": "zone · tense",
  "burn-feel": "existed · roll cloth",
  "siren-tires": "ceremonies · got up | flip",
  "awry-tied": "snow creature · sketch",
  "crisp-sweet": "push down · two times",
  "sea-vie": "notice · by way of",
  "chat-lone": "one time · stop",
  "bight-paced": "small emblem · thrower’s delivery",
  "rows-sold": "dictionary unit · defeat",
  "gangs-prose": "breaks suddenly · deep ravine",
  "hooks-liars": "strands on head · appears",
  "make-nick": "arrived · twist",
  "fails-stout": "business outfits · stay afloat",
  "droid-shape": "wished · sudden attacks",
  "heal-pigs": "weary exhale · jump",
  "pun-set": "day star · house animal",
  "mined-stuff": "softened sound · smell lightly",
  "scale-small": "rings up · men",
  "bars-sift": "curved bones · quick",
  "earl-miff": "existence · rural holding",
  "merge-titan": "intended · striped cat",
  "code-tusk": "draw in · adore",
  "graph-write": "fury · complain",
  "gain-swim": "flight limb · targets",
  "euro-poll": "regulation · closed curve",
  "fix-mew": "not many · combine",
  "claim-peers": "rich dairy top · heaps",
  "skull-spill": "ends lives · tugs",
  "navy-rugs": "firearms · differ",
  "fire-mock": "small rodents · pronged utensil",
  "cable-worse": "gut section · speed contests",
  "bops-left": "animal hide · key tags | flip",
  "blood-dairy": "wide · lace mat | flip",
  "here-vent": "after that · always",
  "logo-wash": "target · display",
  "dub-pug": "local bar · excavated",
  "dead-flee": "valley hollow · provide a meal",
  "helps-optic": "moral code · drops heavily",
  "chefs-water": "encouragement · drifts gently",
  "newt-reek": "woody plant · understood",
  "glut-ship": "socket stopper · present thing",
  "caste-field": "untrue · quoted as evidence",
  "items-opted": "verse writers · clocked",
  "inch-rack": "curved structure · small cut",
  "guy-sat": "belly instinct · speak",
  "steps-unite": "beer mug · disturbed",
  "dirt-rose": "fairground turn · category",
  "canny-rogue": "irate · small weight",
  "cave-rely": "extremely · delicate trim",
  "bunt-tier": "change direction · teeth mark",
  "chart-serum": "ceasefire · wetland",
  "burst-tally": "explosion · genuinely",
  "cope-duck": "hockey disk · secret system",
  "bids-worn": "not up · curved bones",
  "bob-mad": "not good · crowd",
  "blot-maid": "watercraft · gentle",
  "force-graft": "metalwork furnace · skilled making",
  "fits-self": "minor quarrel · not as much",
  "beta-tens": "legume · exam",
  "drunk-scare": "healed · status levels",
  "city-daft": "super neat · true detail | flip",
  "nicer-seats": "smell trace · lift upward",
  "cell-road": "not warm · genuine",
  "smell-stove": "spills secrets · relocates",
  "sag-the": "label · female pronoun",
  "hook-liar": "head strands · glance",
  "dies-earn": "outer peel · comfort",
  "birds-flame": "knife edge · steady companies",
  "leaks-marsh": "visible traces · dog tether",
  "bored-trait": "ranked · planet path",
  "gush-peel": "clarified butter · addition symbol",
  "deer-dish": "colour group · conceal",
  "dirt-seas": "pause · helps",
  "cores-drama": "love deeply · leave fast",
  "beam-trek": "tree sound · brim over",
  "earns-witch": "stretch out · matching pair",
  "fall-news": "grass patch · inner person",
  "areas-rinse": "gets up · sports stage",
  "atoms-place": "outer layers · syrup tree",
  "jolly-takes": "count · funny lines",
  "nuts-sage": "performed vocally · sunrise direction",
  "dull-hood": "extinct bird · ship body",
  "load-mock": "earth lump · wildly loose",
  "ether-nails": "bury formally · mends",
  "sari-yaks": "breezy-light · poses questions",
  "shape-swing": "dangles · cleans away",
  "anger-drums": "beneath · small weights",
  "key-wow": "stir-fry pan · bow-maker’s wood | flip",
  "boat-felt": "door fastener · impressive act",
  "ducks-squib": "male deer · ink swimmer | flip",
  "delay-pairs": "private pages · earnest requests",
  "acre-bald": "playing rectangle · has the skill",
  "plop-tire": "upright stick · short journey",
  "alter-tunes": "speak aloud · road channels",
  "dowel-wagon": "lit from within · possessed",
  "bop-bus": "local bar · tearful sound",
  "back-suit": "trap morsel · draw inward",
  "story-tempo": "hollowed out · body trunk",
  "depth-spicy": "crunchy fragments · keyboarded",
  "seal-wolf": "healthy · lounge seat",
  "await-sides": "thought sparks · beltline",
  "avoid-crawl": "be of use · large group",
  "doors-fears": "peruses · top covers",
  "film-wrap": "turn over · not cold",
  "dye-pan": "yes casually · joining word",
  "lied-toys": "shipshape · fail to keep",
  "safe-ties": "comfort · sudden seizures",
  "atlas-denim": "podium prize · stubborn mark",
  "runs-town": "snack kernels · threadbare",
  "silly-texts": "diamond anniversary · spills secrets",
  "alien-earns": "mapped zones · woven cloth",
  "cat-eon": "consume · swindle",
  "kings-stars": "carries a tune · bare and severe",
  "discs-meats": "sour chemicals · plant stalks",
  "seem-true": "certain · swarm abundantly",
  "lads-poet": "no longer on shelf · sticky strip",
  "diner-scope": "room style · backbone",
  "drag-wood": "sketch · morally right",
  "crude-fleet": "belief code · woodwind pipe",
  "lazy-name": "not female · madcap",
  "debt-lime": "wait it out · soften with heat",
  "gas-pea": "retreat pool · years lived",
  "salad-teeth": "handled the cards · detests",
  "bear-glib": "young woman · infant",
  "alone-quips": "provide tools · hair studio",
  "alarm-chive": "not dead · spellbinding pull",
  "cash-ogre": "land measure · mild surprise",
  "dawn-tiff": "locate · drift lightly",
  "fades-tower": "adores · thin crisp sheet",
  "cult-fish": "raise upward · like that",
  "data-free": "bold challenge · impressive act",
  "nun-red": "ashes vessel · final point",
  "flags-peril": "decorative edge · book leaves",
  "diet-snap": "already settled · double-digit set",
  "card-each": "nailed the test · curved span",
  "ideas-worse": "helpers · promised aloud",
  "right-siren": "time on the throne · upper garment",
  "sage-tone": "entry barrier · smell organ",
  "last-semi": "letters in transit · groups",
  "child-tough": "was able, maybe · upper-leg part",
  "lungs-waves": "moved in an arc · forced worker",
  "boa-dim": "assistance · crowd",
  "carts-ropes": "speed contests · harbour towns",
  "shoe-wars": "hearing organs · display",
  "hero-memo": "where the heart is · extra amount",
  "takes-tools": "pointed post · backless seat",
  "drain-lever": "underwater swimmer · absorb knowledge",
  "coin-thin": "small measure · inside movement",
  "epic-song": "one-time past · farm animals",
  "sleep-tally": "fabric fold · loud cries",
  "bolt-seen": "existed · narrow opening",
  "gag-pod": "barking pet · opening space",
  "coal-rats": "performs · spoken",
  "began-rotor": "conductor’s stick · radio yes",
  "soul-that": "stop signal · dismissals",
  "rice-silk": "under the weather · provoke",
  "arena-shiny": "falls from clouds · laughing scavenger | flip",
  "fort-nest": "monthly due · gentle to touch",
  "kale-pale": "sudden jump · drips out",
  "bland-freak": "loaf staple · body side",
  "eager-soils": "between-seat path · fairy-tale brutes",
  "aim-dab": "sheep bleat · central point",
  "held-list": "serving plate · recount",
  "roses-title": "secretly took · attempts",
  "cult-gold": "earth lump · overfull excess",
  "droid-loser": "sequence · not hollow",
  "kitty-packs": "boot strikes · burger disc",
  "pops-skit": "miss a turn · upper parts",
  "dusty-fired": "grimy · joined as one",
  "dare-game": "brought into being · hot fury",
  "time-user": "list piece · certain",
  "lag-oil": "before now · unwell",
  "noisy-plugs": "small mistakes · not old",
  "froze-siege": "metalwork furnace · grab suddenly",
  "bull-life": "make full · slick helper",
  "arms-host": "damages · fired attempt",
  "angry-trend": "way in · magnificent",
  "scalp-stork": "organised body · chats",
  "pond-work": "let fall · understand",
  "hush-tree": "present place · therefore",
  "noble-seals": "without company · invoke favour",
  "rib-tea": "broadcast openly · wager",
  "faint-joust": "force on slyly · pleasure trip",
  "grog-wins": "increase in size · carry a tune",
  "envy-mean": "level, no oddities · a lot",
  "stale-swift": "roof squares · drifts gently",
  "cogs-rude": "secret system · floor coverings",
  "feet-salt": "sunrise direction · departed",
  "alert-setup": "beating signal · sweet reward",
  "lane-only": "zero amount · supporter",
  "sheep-shell": "shoe backs · assists",
  "ewe-hey": "vision organ · chop with axe",
  "swim-teen": "appear · matching sibling",
  "dread-laden": "newly included · kidney-related | flip",
  "amber-notes": "shafts of light · male singing voice",
  "lock-nerd": "collar zone · noble master",
  "enter-tests": "guide the wheel · canvas shelters",
  "demo-wish": "performs · sudden fancy",
  "news-trio": "pressing metal · sunset direction",
  "gnome-peers": "art category · verses",
  "area-tour": "vehicle, briefly · back end",
  "nor-pal": "cut off · sprinted",
  "dodo-tons": "uneven chances · upon",
  "react-taxes": "social class · bonus add-on",
  "drive-ramen": "revise text · flowing water",
  "dawn-sail": "numbered face · graceful waterbird",
  "orb-pop": "dance hit · seasoned expert",
  "corny-flats": "milestone birthday · family groups",
  "agog-gory": "pirate drink · stretch ritual",
  "inch-race": "curved span · pleasant",
  "props-tribe": "investigate closely · short journeys",
  "ogres-snowy": "gets bigger · prying",
  "else-ruin": "straight mark · account holder",
  "bare-vote": "help the scheme · finished",
  "shame-twerp": "at that place · marshy ground",
  "bias-dibs": "helps · baby chest guards",
  "nab-two": "night flyer · possess",
  "tidy-tube": "teeth mark · obligation",
  "dolly-sides": "strangely · small islands",
  "harm-sigh": "elevated · damages",
  "falls-lucky": "completely · is missing",
  "among-wines": "labels · still due",
  "joey-thin": "connect · those people",
  "nags-park": "missing spaces · social level",
  "felt-load": "unable to hear · road charge",
  "rap-too": "rowing blade · cooking vessel",
  "sewer-waist": "perspiration · more sensible",
  "eagle-saint": "representative · between-seat path",
  "eats-time": "joins together · close friend",
  "doors-gouge": "merchandise · red makeup",
  "foul-plot": "walking base · tug",
  "dour-sage": "grown old · belonging to us",
  "bless-wrote": "straps · less good",
  "life-open": "key facts · fruit jacket",
  "all-irk": "flood boat · unwell",
  "shows-three": "tiny insect-hunter · group over there",
  "cake-sick": "courtroom matter · foot strike",
  "salsa-taste": "valuable holding · map book",
  "blue-room": "deep thunder · regulation",
  "golf-nail": "signal cloth · big cat",
  "minds-tales": "grin curve · hold ground",
  "blame-place": "syrup tree · thick wire",
  "arts-pool": "spoken aloud · upper parts",
  "core-heat": "outer layer · present place",
  "are-hog": "before now · belonging to her",
  "monk-rice": "ore source · stone music",
  "girls-lower": "radio yes · legal wishes",
  "chalk-steel": "face side · market booth",
  "ugly-vent": "green-eyed ache · overfull excess",
  "gates-sight": "vapours · clenched",
  "dope-tide": "no longer lived · verse maker",
  "front-goals": "dupes · award money",
  "dream-users": "blood liquid · peruses",
  "fed-lob": "key tag · guided",
  "hello-lives": "green fruit · outer casing",
  "dolls-pearl": "dryly funny · earnest requests",
  "send-yaps": "refuse · drains strength",
  "glade-spray": "vine bunch · with sorrow",
  "cress-treat": "respond · pauses",
  "fast-rows": "gentle to touch · armed conflicts",
  "rate-slot": "play function · quick figure",
  "isle-wrap": "provoke · exchange",
  "maid-sued": "surrounded by · put to work",
  "hug-net": "horned antelope · definite article",
  "cheap-romps": "winner · cords",
  "page-risk": "equipment · miss a turn",
  "dumb-pond": "binding connection · discard heap",
  "layer-pasta": "map book · pay back",
  "nacho-stint": "small cut-out · stubborn mark",
  "rugs-sake": "poses questions · strong impulse",
  "faint-miles": "main pipes · boneless cut",
  "acts-lead": "dressed in · consumes",
  "bags-cold": "gear teeth · hairless",
  "die-ram": "sound catcher · central point",
  "dance-seals": "stop · touches down",
  "herbs-quiet": "damp firework · at that place",
  "meat-wins": "targets · pond amphibian",
  "heel-knit": "subtle nudge · boat spine",
  "cedar-media": "directed · sped in contest",
  "bury-tomb": "explosive charge · round nomad tent",
  "acted-poses": "examples · selected",
  "chugs-flirt": "ringlets · struggle",
  "cone-shot": "presenter · one-time past",
  "ink-let": "large deer · tiny egg",
  "fiery-frost": "force on slyly · water shuttle",
  "into-seed": "smell organ · revise copy",
  "fire-stem": "halfway prefix · anxious worry",
  "turns-wives": "litter’s smallest · opinions",
  "halls-pipes": "outline form · scatter liquid",
  "cask-guru": "Italian sauce · draw inward",
  "black-crane": "metallic rattle · support",
  "eyed-trip": "antlered animal · sympathy",
  "goal-reds": "deities · genuine",
  "age-mug": "flightless bird · silence joke",
  "alloy-elbow": "gut section · faithful",
  "dawn-ribs": "offers · caution",
  "drown-suite": "wheel covers · injury",
  "clue-fear": "attention · energy source",
  "parts-tents": "used up · opening spark",
  "dealt-hairy": "everyday rhythm · feeling centre",
  "oops-port": "father bursts · plant base",
  "lamps-slosh": "votes sampled · crash violently",
  "bank-juts": "flying mammals · discarded stuff",
  "add-yes": "colour liquid · unhappy",
  "dwell-loves": "was adored · rise impressively",
  "blobs-every": "entrance hall · swerves",
  "gawk-tree": "seize · increased",
  "dish-tier": "strikes · fairground turn",
  "enter-lasts": "change · bird homes",
  "awry-bust": "red gem · quick hit",
  "porch-write": "value measure · cost tag",
  "amble-spray": "assign fault · hoarse",
  "fade-norm": "rural holding · network point",
  "gem-wok": "beer barrel · cut grass",
  "radar-wedge": "prize presented · avarice",
  "liver-waste": "depart · hand hinge",
  "male-nine": "straight mark · label",
  "acres-stain": "examples · rail convoy",
  "deny-labs": "skilfully · finishes",
  "kinds-prose": "awkward nerds · marsh bird",
  "ball-yeti": "trap morsel · loud cry",
  "laid-tone": "worship figure · tidy",
  "fella-rinse": "kidney-linked · documents",
  "tapes-towns": "verse makers · desires",
  "riot-seed": "web location · do-over",
  "drag-gory": "pirate drink · grassy enclosure",
  "shaky-spill": "will, formally · prickly",
  "lace-pipe": "headland · heap",
  "fence-solid": "open ground · baked round",
  "ads-pub": "paint touch · raises",
  "lodge-ultra": "smug crowing · governed",
  "theme-traps": "poetic measure · routes",
  "nets-port": "monthly due · upper parts",
  "rated-tanks": "swallowed drink · condition",
  "ribs-salt": "pub counters · catalogue",
  "laser-sweet": "drain channel · minimum amount",
  "snap-wing": "small spikes · chew steadily",
  "dodo-goes": "measured medicine · morally right",
  "chai-tend": "calendar day · tiny measure",
  "law-pie": "fib · animal foot",
  "bolt-peer": "fermented pint · storyline",
  "legal-solve": "aims · even plane",
  "lawn-snug": "breathing organ · graceful waterbird",
  "code-wade": "nailed the test · had a debt",
  "ended-utter": "discourage · in key",
  "dude-pity": "shipshape · trick",
  "heath-scarf": "travel charges · egg opening",
  "scale-smell": "tiny rooms · men",
  "horse-title": "guest lodging · wheel covers",
  "ink-odd": "put on · youngster",
  "feta-lads": "quick · guide metal",
  "acts-bake": "help the scheme · barrel",
  "belly-guard": "ravine channel · chin forest",
  "sword-twins": "least good · air currents",
  "cure-rage": "inner push · land measure",
  "full-seek": "sense by touch · silent brood",
  "erase-given": "see eye to eye · blood channels",
  "agony-rises": "vapours · twist of fate",
  "font-pile": "raise upward · flat refusal",
  "bot-nor": "steal from · heavy weight",
  "diet-part": "cover sheet · knotted fast",
  "club-whom": "curved vessel · a great deal",
  "dozen-wills": "shrivel with age · toy figures",
  "ample-hosts": "light sources · that group there",
  "fund-pork": "rebellious type · shallow crossing",
  "delay-react": "performed · cake stratum",
  "bound-curls": "scalds · was able, maybe",
  "folk-king": "club game · little twist",
  "onyx-tail": "solely · cab ride",
  "bad-rue": "give a nickname · sound catcher",
  "amber-blend": "dull-tasting · glowing coal",
  "awry-neat": "not here · monthly due",
  "gone-wish": "cellar pour · mild surprise",
  "snide-straw": "revises copy · gives notice",
  "snake-storm": "social standards · accepts",
  "earl-shot": "creative fields · opening",
  "kicks-roles": "bottle stoppers · enjoys",
  "dash-tune": "faculty head · therefore",
  "drama-lemon": "ethical compass · revise text",
  "pay-wag": "opening space · veer off course",
  "fruit-pleas": "defect · dock supports",
  "scoop-shrew": "work teams · basketball rings",
  "cult-jobs": "young bears · sudden shock",
  "caper-towel": "spot to be · put in words",
  "acid-mall": "summon · surrounded by",
  "cute-soda": "outer layer · took to court",
  "elder-rover": "sequence · simple machine",
  "chip-gear": "paper sheet · wealthy",
  "sails-scare": "get up · social group",
  "she-wit": "chop with axe · belonging to it",
  "bulk-test": "waist strap · ivory spike",
  "lion-rows": "lubricates · threadbare",
  "shook-spell": "outer casing · haunting figure",
  "flit-once": "inside movement · music key",
  "lanky-range": "irate · leg joint",
  "toss-wily": "rests seated · long cry",
  "diary-prong": "in progress · fencing block",
  "cafe-mask": "renown · rough bag",
  "comet-talon": "spear · guiding phrase",
  "eat-rid": "expire · black road stuff",
  "dewy-nuts": "obligation · current reports",
  "ghee-reed": "border · present place",
  "boats-hexes": "cardboard containers · warms up",
  "fried-south": "sideways float · dwelling",
  "sale-sing": "falsehoods · pesters",
  "milk-nose": "connection · a few",
  "abide-death": "in front · account subtraction",
  "short-twins": "least good · subtle nudges",
  "rebel-wound": "lower than · beneath",
  "did-pad": "father · brief plunge",
  "piled-viral": "danger · legitimate",
  "hills-sweep": "small islands · young pup",
  "crud-loop": "grain harvest · noisy",
  "gloss-tribe": "ship-bottom muck · arranges by type",
  "ally-band": "skilfully · touch down",
  "hard-role": "keep in grip · uncommon",
  "fatal-tower": "full sum · thin crisp sheet",
  "easy-talk": "drips out · remain",
  "medal-solar": "kingdom domain · carries plenty",
  "nib-pod": "dance hit · racket",
  "blunt-tries": "singed black · roof squares",
  "aids-lamp": "settled up · door-bang",
  "actor-route": "sharp or severe · spinning blade",
  "arson-three": "brings in pay · different",
  "dawn-rise": "team half · caution",
  "teen-work": "ripped · seven-day stretch",
  "cells-loyal": "nearby · loud cries",
  "many-open": "prayer ending · small horse",
  "deaf-seat": "calendar square · out of danger",
  "air-met": "cup edge · hot steep",
  "dense-pasta": "family car · sticky strips",
  "main-rude": "brought about · wreck",
  "vent-wage": "handed over · pond amphibian",
  "ideas-liars": "false name · fairground turns",
  "pool-true": "unmixed · handy implement",
  "surf-yaps": "hot rage · drains strength",
  "ashes-spoke": "model stances · tremble",
  "boom-pelt": "ink stain · verse piece",
  "nap-old": "joining word · chop off",
  "gives-paper": "book leaves · snake tooth",
  "kink-trap": "make loops · green space",
  "filed-setup": "flowing stuff · sharply rising",
  "obese-stump": "public vehicles · music pace",
  "mess-tank": "disguise cover · double-digit set",
  "loss-pile": "mouth edges · bottom of shoe",
  "slang-tutor": "smug crowing · litter’s smallest | flip",
  "chip-snug": "drink in gulps · tiny cut",
  "arts-hire": "uncommon · present thing | flip",
  "gem-leg": "breakfast oval · shade tree | flip",
  "sheet-wrong": "fully developed · nearby ones",
  "bait-bars": "slanted view · spoiled child",
  "rinse-super": "caregiver · dock supports",
  "agree-grant": "excellent · scope of options",
  "rode-told": "adore · noble master",
  "souls-waved": "rescues · conditional helper | flip",
  "codes-rocks": "centres · harbour platforms",
  "lawn-sail": "legal rules · fingertip target",
  "ease-mild": "identical · told a fib",
  "ape-ivy": "compete · wages",
  "deal-over": "antlered animal · egg-shaped",
  "neat-sour": "receive payment · dismissals | flip",
  "paste-style": "small-minded · fastens closed | flip",
  "dibs-dude": "wait calmly · worn-out clothes",
  "foot-pigs": "mistake sound · present",
  "tired-whale": "sea-level rhythm · location question | flip",
  "nifty-rider": "grimy · more refined",
  "wash-yaks": "bird of prey · states",
  "proud-tales": "beg earnestly · guided journeys",
  "elk-eye": "slippery fish · lock opener",
  "posed-until": "ruin · in key",
  "cast-neck": "coin fraction · rough bag",
  "cigar-meats": "respond · Greek letter | flip",
  "guise-rally": "ravine channel · lift upward",
  "ghee-reds": "border · belonging to her",
  "song-unit": "visible mark · old-style to | flip",
  "slain-spike": "enjoys · aches",
  "cage-spit": "grand tale · labels",
  "keep-lane": "leg joint · sudden jump",
  "ice-odd": "white fish · expire",
  "gone-solo": "brand emblem · scent organ",
  "dust-toys": "obligation · throw lightly",
  "hint-wake": "long walk · desire",
  "natal-yodel": "hold-up · bird claw",
  "pulse-raced": "healed · brief delay",
  "kind-rugs": "medicine · body covering",
  "awful-laden": "live somewhere · animal life | flip",
  "blast-crest": "straps · small wagons",
  "fad-goo": "barking pet · clumsy fool",
  "sets-talk": "permits · assigned job",
  "blade-crane": "loaf staple · not dirty",
  "beer-goji": "therefore · match up",
  "ought-since": "small weight · vision",
  "life-lord": "crease · provoke",
  "part-shut": "cover sheet · therefore",
  "peers-skits": "small benefits · web locations",
  "added-onset": "old-fashioned · network points | flip",
  "cafe-rush": "travel charge · like that",
  "one-rod": "head dip · metal-bearing rock | flip",
  "coal-edit": "told a fib · folded snack | flip",
  "fuel-gate": "adhesive · impressive act | flip",
  "fired-tests": "discourage · flour detective | flip",
  "roles-tiger": "radio yes · roof squares | flip",
  "bent-made": "money owed · label",
  "bases-tempo": "inked mark · heavily overweight",
  "poker-sense": "lying face-down · searches",
  "near-raid": "beloved one · falls from clouds",
  "lunch-share": "severe · parent’s brother | flip",
  "guy-set": "pull hard · agreement word",
  "lace-sulk": "good fortune · discount event",
  "able-seen": "legume · otherwise",
  "gripe-lingo": "in motion · danger | flip",
  "joint-salts": "sudden shocks · holy person",
  "flee-nova": "tree part · baking chamber",
  "tapas-tapes": "noodle dish · adhesive spread",
  "info-root": "top cover · inside movement",
  "caper-lyric": "roughly around · answer back",
  "scene-spill": "tiny rooms · yearns",
  "bop-gem": "crowd · small pin",
  "fiery-sorts": "chip-shop strips · narrative | flip",
  "demo-done": "state of mind · requirement",
  "acts-rats": "felines · creative fields",
  "alert-truce": "upright · extreme",
  "grid-poll": "trudge along · young woman | flip",
  "glow-hand": "chew steadily · keep in grip",
  "siren-viral": "competitor · got up",
  "salon-solid": "big cats · carries plenty",
  "new-sad": "small lair · once existed",
  "folk-mice": "document · imitate",
  "renew-timer": "worthiness · more recent",
  "dried-hairy": "private pages · employed",
  "chug-team": "entry barrier · a great deal",
  "early-rated": "team handoff · footstep",
  "mail-road": "surrounded by · spoken aloud",
  "here-kids": "serving plate · smell strongly",
  "pouch-slate": "spot to be · compass point",
  "kill-lime": "similar to · grain grinder",
  "out-sir": "belonging to us · take a seat | flip",
  "area-ride": "thought · back end",
  "rank-wild": "outer peel · stroll",
  "chain-seems": "sibling’s daughter · crash violently",
  "binge-tasty": "wild creature · fastening knots | flip",
  "cube-lead": "nailed the test · sad hue | flip",
  "crews-setup": "bad spell · brushed clean",
  "sworn-tears": "brings in pay · least good | flip",
  "pink-wolf": "turn over · understand",
  "edges-trawl": "narrow shelf · drinking tube",
  "guy-wet": "pull hard · bow-maker’s wood",
  "later-ounce": "spear · farther outside",
  "moss-sole": "a few · defeat",
  "sofa-teen": "impressive act · ages",
  "artsy-fifth": "rubbish · milestone birthday | flip",
  "makes-pleas": "men · mountain tops",
  "acts-sure": "account holder · throwing crew",
  "nude-sets": "bird home · took to court",
  "drops-sense": "ordinary writing · dispatches",
  "fake-grew": "no cost · stare openly | flip",
  "her-one": "metal-bearing rock · egg-layer | flip",
  "join-rats": "quick notes · falls from clouds | flip",
  "rises-threw": "ceremonies · tiny insect-hunter | flip",
  "acre-item": "arrived · level",
  "lawn-risk": "smooth fabric · caution",
  "baron-stale": "criminal fire-setting · data grid | flip",
  "baby-nope": "infant · small horse",
  "rotor-timed": "engine · ready for bed",
  "fold-pelt": "ran away · storyline",
  "shots-tenor": "leases · new plant growth",
  "ass-pug": "droops · raises",
  "hags-pill": "corridor · farm animals",
  "grown-heals": "dog tether · incorrect",
  "levy-rile": "not recorded · depend on",
  "seven-tract": "small wagons · scheduled happening | flip",
  "poor-tail": "matched two · handy implement",
  "ages-tour": "equipment · dismissals",
  "puppy-rinse": "coin holder · cold and brisk | flip",
  "eaten-liars": "outsider · cries",
  "blobs-write": "gusts · kin group",
  "pan-rue": "imitate · ashes vessel",
  "front-prize": "became icy · printed copy",
  "fact-newt": "coin fraction · drift lightly",
  "earth-weeds": "caught sound · sugary",
  "acid-dash": "spiced tea · puts in more",
  "ships-skate": "outline form · comedy sketches",
  "shore-snide": "employs · network points",
  "link-meat": "drips out · fresh herb",
  "ally-note": "not on time · solely",
  "grip-knew": "small benefit · flight limb | flip",
  "rod-yep": "colour liquid · seasoned expert | flip",
  "film-past": "closed hand · tropical tree | flip",
  "ashes-craft": "speed contests · long pole",
  "agony-rites": "entry barriers · twist of fate | flip",
  "hers-unit": "certain · slender",
  "creed-their": "encouragement · made an attempt",
  "made-toes": "rounded roof · consumes",
  "kind-owns": "not up · body covering",
  "sheep-walls": "retail events · young pup",
  "oils-slap": "in addition · mouth edges",
  "don-law": "joining word · night bird | flip",
  "fatal-nasty": "nose-related · greasy",
  "alert-study": "oxidised · handled the cards",
  "cask-guns": "draw inward · pesters",
  "loopy-traps": "social gathering · swimming spots",
  "cute-read": "not false · nailed the test",
  "nails-stake": "military vehicles · between-seat path",
  "base-same": "ray of light · oceans",
  "gosh-peel": "wishful feeling · table supports | flip",
  "fog-oaf": "before now · not on",
  "adult-faded": "newly included · defect",
  "cars-nice": "grain bowl · containers",
  "bops-soft": "key tags · mail item",
  "clubs-grape": "support · socket fillers",
  "dull-soda": "no longer on shelf · two-part",
  "edges-reset": "say hello · plant starters",
  "taco-tons": "performs · upon",
  "clink-veers": "office worker · blood channels",
  "goats-stole": "sample flavour · brand marks",
  "ice-old": "white fish · fib",
  "lady-tick": "shipshape · absence",
  "ember-noise": "ore worker · heavily overweight",
  "hides-lines": "glow · smooth descent",
  "feed-grab": "meat complaint · pull along",
  "milk-sent": "soften with heat · drain down",
  "share-wakes": "crooked · catches sound",
  "crash-loses": "land units · splashing mess",
  "fear-trim": "rural holding · level",
  "force-metre": "space snowball · cite",
  "eel-fat": "consumed · forest sprite",
  "glad-lout": "cargo burden · overfull excess | flip",
  "ether-spies": "dock supports · nearby ones",
  "lake-slim": "large deer · letters in transit",
  "cited-souls": "was able, maybe · web locations | flip",
  "bare-rule": "slick helper · uncommon | flip",
  "gloat-press": "crude total · fabric fold",
  "cover-tasks": "bags · ballot caster",
  "grass-winds": "pulls · carries a tune",
  "dip-top": "deep hole · seed case",
  "bond-salt": "door fastener · beach grains",
  "coral-diver": "mounted traveller · using the voice",
  "arts-pine": "receive payment · mouth missile",
  "fast-pole": "tree part · red-light command",
  "bendy-plane": "knife edge · small coin",
  "lands-outer": "circular · roof layer",
  "grip-soon": "circular band · mistake sound",
  "birth-sober": "not tall · under-table payment",
  "decor-spend": "organised body · finished",
  "wag-yap": "cheerful · animal foot | flip",
  "fish-hull": "make full · silence command | flip",
  "facts-tiger": "serve food · presents",
  "gases-taste": "places to sit · phase",
  "beat-whip": "washing tub · clean by rubbing",
  "head-tiny": "small dent · casual yes",
  "dodge-tires": "adores · raised line | flip",
  "rolls-toned": "dryly funny · hard mineral",
  "case-rugs": "swear crudely · hot fury",
  "liked-swell": "live somewhere · enjoys",
  "bus-ewe": "put to work · internet page",
  "beds-bite": "wagers · wait it out",
  "shiv-tent": "present thing · air outlet",
  "space-train": "speed contests · wall coating",
  "brink-cards": "feathered animals · winding handle",
  "fate-miff": "renown · minor quarrel",
  "gold-lots": "wood records · informed",
  "genes-strip": "equals in rank · sharp pain",
  "look-mind": "connection · state of mind",
  "mango-wills": "still due · little",
  "ask-rip": "annoy · drain vitality",
  "patch-witty": "burger disc · spell caster | flip",
  "edged-resin": "art category · took a position",
  "drop-isle": "slide · travelled mounted",
  "term-unit": "list piece · litter’s smallest",
  "linen-wears": "absorb knowledge · cellar bottles",
  "raids-scope": "to one side · harvests",
  "drew-tear": "marsh grass · skin bump",
  "farm-fool": "young horse · originating at",
  "moss-nose": "a few · male children",
  "bob-tar": "night flyer · steal from",
  "glove-probe": "world sphere · show true | flip",
  "rogue-spent": "clean out · beginning phase",
  "iron-once": "midday · grain bowl",
  "chin-saga": "spiced tea · performed vocally",
  "great-house": "see eye to eye · loud call",
  "later-sells": "focused beam · spills secrets",
  "deal-torn": "noble master · tidy",
  "cloak-stern": "not dirty · long-legged bird | flip",
  "lace-sift": "throwing crew · document | flip",
  "row-won": "neither partner · astonish",
  "boil-hand": "binding connection · ice pellets",
  "cake-roll": "minor noble · fastening mechanism | flip",
  "pools-quake": "same in value · haunting figure",
  "cruel-fails": "reason · decorative edge | flip",
  "dark-sets": "colour group · assigned job | flip",
  "busy-nerd": "dispatch · red gem | flip",
  "about-dolly": "metal mixture · uncertainty",
  "cute-dish": "like that · coastal rhythm",
  "ear-pip": "baked slice · rhymed talk",
  "arose-throw": "pointed missile · group over there",
  "gaps-mint": "visible mark · press firmly",
  "rays-told": "many · grassy enclosure",
  "fruit-shape": "belief trust · excellent | flip",
  "matte-sites": "sample flavour · multiplied by | flip",
  "scan-stir": "road vehicles · metal cans",
  "font-hack": "true detail · car horn sound",
  "cease-still": "minimum amount · cut portion",
  "aids-ball": "numbered face · science rooms",
  "dad-nod": "joining word · strange",
  "bike-jobs": "drool catchers · laugh line | flip",
  "blame-siren": "easy stroll · tree sap",
  "ocean-parts": "tree nut · sticky strips",
  "cape-line": "pleasant · washed-out shade",
  "brass-fiery": "foundation · water shuttle",
  "canal-talks": "is missing · birth-related",
  "belt-wool": "footwear · healthy",
  "head-stop": "performs · route",
  "hung-once": "drink in gulps · zero amount",
  "toy-yes": "bean sauce · up to now",
  "chin-coat": "casual talk · minted money",
  "dude-pure": "impolite · trick",
  "rebel-stare": "change · pub pints",
  "push-take": "mountain top · therefore",
  "lugs-tiff": "sudden seizures · deep divide",
  "romps-tense": "lying face-down · plant stalks",
  "knees-swats": "bird homes · funeral vigils",
  "motel-never": "fiction book · measuring gauge",
  "cedar-event": "performed · raw courage | flip",
  "its-pan": "tiny egg · retreat pool",
  "floor-prick": "woolly group · before now",
  "rated-until": "track path · in key",
  "dawn-tips": "before now · air in motion",
  "deep-onto": "adore · not shut",
  "eager-llama": "kingdom domain · pond growth | flip",
  "loved-tasty": "seasoned · cast a ballot | flip",
  "cord-flat": "stronghold · dressed in",
  "ether-loses": "openings · guide the wheel",
  "arms-wise": "hearing organs · move in water",
  "coo-two": "farm bovine · also",
  "drop-plug": "medicine · heavy drop sound",
  "named-papal": "syrup tree · bamboo bear | flip",
  "isles-thank": "detests · move sneakily",
  "glen-stir": "young woman · dispatched",
  "score-stand": "playing rectangles · musical shades",
  "horns-wires": "old county · under oath | flip",
  "glib-pins": "tiny signal · carry a tune | flip",
  "doom-lets": "trial version · no longer found | flip",
  "cave-mice": "arrived · bad habit",
  "nun-top": "opposite of yes · wordplay joke | flip",
  "back-fare": "tree sound · front side",
  "lone-raid": "worship figure · close by",
  "aptly-peach": "submit request · instruct",
  "leads-slain": "heavily loaded · boat cloths",
  "dose-sigh": "mild surprise · team half",
  "looks-packs": "loose-hanging · haunting figure",
  "badge-diner": "commence · fearful awe",
  "pelt-take": "held onto · not on time",
  "seats-waste": "valuable holding · perspiration",
  "dim-web": "offer amount · cat sound",
  "inter-pinch": "inside · mound delivery",
  "disc-here": "wealthy · plant starter | flip",
  "lube-mill": "male cattle · citrus wedge",
  "pipes-stool": "verse makers · ruin",
  "dotes-lanes": "network points · stories",
  "damn-ties": "sunrise direction · thought centre | flip",
  "lint-weak": "understood · animal rear",
  "moats-thing": "stone worker · clenched",
  "ages-tarp": "paper sheet · night light",
  "aid-dab": "sheep bleat · performed",
  "bait-sung": "sudden noise · matching outfit",
  "self-toss": "not as much · gentle to touch",
  "brain-irony": "wet-weather · red-breast bird",
  "crust-ships": "crunchy · closes",
  "gift-solo": "closed hand · brand emblem",
  "bliss-ready": "poorly · gets up",
  "pole-very": "impose tax · cord",
  "edged-onset": "avoid quickly · strained",
  "nab-rib": "pub counter · storage tub",
  "bout-door": "footwear · gloomy",
  "clef-leaf": "front side · dropped",
  "shake-smear": "catches sound · creates",
  "beam-plod": "hairless · verse piece",
  "alley-artsy": "before expected · seasoned",
  "bunts-folds": "door fasteners · money pools",
  "keen-real": "mild onion · close by",
  "motel-vines": "fiction book · multiplied by | flip",
  "curse-filet": "weeps · woodwind pipe",
  "ray-vie": "being verb · climbing vine",
  "chant-stump": "winner · showy trick",
  "nick-pass": "bottle tops · drain down",
  "dean-tune": "parent’s sister · require",
  "cress-ideas": "land units · edges",
  "chai-lens": "small measure · discount event",
  "casts-necks": "small coins · rough bags",
  "huge-nets": "pour out · adolescent | flip",
  "burns-heats": "chilli staples · causes pain",
  "cuts-wish": "swear crudely · alongside",
  "cargo-named": "tropical fruit · sped in contest",
  "dive-wide": "no longer lived · outlook",
  "berth-micro": "pale-barked tree · city rail",
  "east-lamp": "butcher’s cut · sharp hit",
  "cord-rile": "noble master · grain bowl",
  "leave-rites": "not dead · woody plants",
  "slosh-usher": "defeated person · quiet noise",
  "boa-rim": "broadcast openly · crowd",
  "coin-game": "arrive · increase",
  "kill-life": "make full · similar to",
  "stall-worse": "permit · pauses",
  "hedge-intro": "wild dog · at that place",
  "flit-liar": "just and even · sing-song rhythm | flip",
  "mode-pray": "military force · foolish person",
  "caper-pence": "move stealthily · tree nut | flip",
  "dairy-kinds": "tiny and cute · sudden attacks",
  "queer-warty": "question · drinking stuff",
  "ilk-sad": "pose a question · cover",
  "relay-table": "sheep cry · cake stratum",
  "iron-test": "fishing meshes · musical three",
  "bogus-raise": "foundation · red makeup",
  "cafe-talk": "destined outcome · absence",
  "ends-want": "graceful waterbird · look after | flip",
  "caves-niche": "hidden store · climbing plants",
  "blurt-loops": "tugs · automated worker | flip",
  "sole-very": "impose tax · flower",
  "ewe-pad": "imitate · marry",
  "knead-plots": "beg earnestly · tied loops | flip",
  "near-read": "faculty head · back end",
  "bask-seed": "sleeping places · for this reason",
  "lance-scout": "parent’s brother · shoreline",
  "alley-start": "worship table · flair",
  "guns-race": "remedy · pesters",
  "furry-seals": "worries · bad-tempered",
  "epic-heal": "every one · heap",
  "door-knit": "outer peel · carried away",
  "axe-yew": "vision organ · candle stuff",
  "moved-pause": "road-covered · small rodent | flip",
  "maps-open": "prayer ending · father bursts",
  "side-tide": "expires · eating plan",
  "atlas-sheep": "stage period · take secretly",
  "motel-wages": "contests · drying cloth",
  "dork-fund": "shallow crossing · plunge",
  "fast-newt": "dispatched · drift lightly | flip",
  "flame-skull": "little · lucky accident | flip",
  "rail-sits": "catalogue · draped garment",
  "gig-yaw": "cheerful · hairpiece | flip",
  "bats-sulk": "science rooms · ivory spike",
  "ideas-tasty": "skewered snack · revises copy",
  "array-disco": "frightening · broadcast device",
  "bawl-redo": "puffed air · street surface",
  "arms-wine": "receive payment · move in water",
  "drive-slain": "was alive · falls from clouds",
  "cyan-keel": "earthy material · leg joint",
  "foot-song": "silly mistake · large amounts",
  "gem-pig": "little devil · breakfast oval",
  "fire-push": "sea creature · unmixed",
  "acres-swath": "examples · fury",
  "bunt-over": "old-style to · action word",
  "area-sold": "in addition · beloved one",
  "score-worst": "plant bases · turning fastener",
  "hero-taxi": "fake-out trick · level",
  "dirty-tapes": "burger disc · fairground turns",
  "child-cruel": "cold calm · rough",
  "aid-net": "racket · hot steep",
  "loud-toll": "toy figure · boor",
  "able-poet": "help the scheme · upright stick",
  "mafia-named": "well known · obsession",
  "camp-mite": "small rodents · press firmly",
  "fleet-merry": "air traveller · poetic measure",
  "evil-seas": "falsehoods · rescue",
  "rocks-skied": "harbour platforms · snow-slope rider",
  "loser-watts": "seasoning crystals · tall structure",
  "drone-stomp": "plays noisily · made less harsh",
  "eon-rot": "neither partner · foot digit",
  "chaos-magic": "sports instructor · Greek letter",
  "anger-trend": "go inside · magnificent",
  "dome-link": "cow pour · network point",
  "delta-swarm": "prize presented · softens with heat",
  "holy-jeep": "assist · young kangaroo | flip",
  "soon-step": "mistake sound · double-digit set",
  "send-wait": "spoken aloud · departed",
  "ask-koi": "sturdy tree · downhill sport | flip",
  "label-slide": "ringing things · perfect model",
  "raise-using": "get up · taking to court | flip",
  "soil-your": "belonging to us · greasy | flip",
  "crane-gases": "see eye to eye · image checks | flip",
  "folk-riot": "dart briefly · castle piece | flip",
  "snip-task": "make loops · allow through",
  "great-solve": "smug crowing · tennis delivery | flip",
  "dwell-lines": "striped · rise impressively | flip",
  "love-near": "minor noble · baking chamber | flip",
  "bug-mew": "chewing resin · internet page | flip",
  "petty-salsa": "fabric fold · remains",
  "arms-coin": "small symbol · damages",
  "cheap-grain": "porcelain ware · vine fruit | flip",
  "ages-mint": "send out · pesters",
  "cram-rude": "land measure · beat keeper | flip",
  "gross-piece": "harvests · long blockade | flip",
  "diver-salon": "heavily loaded · helmet shade | flip",
  "bold-peer": "trudge along · fermented pint | flip",
  "daily-tapes": "helpers · fittingly",
  "air-bob": "big snake · curved bone | flip",
  "gave-into": "Roman robe · blood channel | flip",
  "roger-walls": "bakery rounds · wager",
  "rate-verb": "spoiled child · always | flip",
  "feet-pull": "energy source · animal hide | flip",
  "lasts-waste": "roof layer · hits sharply | flip",
  "need-worn": "sketched · glowing sign gas",
  "eater-messy": "school paper · measuring gauge",
  "earns-tiger": "time on the throne · fixed gaze",
  "dense-notes": "network points · strained",
  "emu-gap": "imitate · drinking cup",
  "theme-wears": "groups · location question | flip",
  "antic-dealt": "branch group · giant figure",
  "left-sons": "focus glass · gentle to touch",
  "nest-nick": "coin fraction · drain down",
  "notch-ruled": "sudden stagger · softened in tone | flip",
  "lace-only": "earthy material · solitary",
  "limit-sands": "in the middle · small spikes | flip",
  "oops-rile": "lubricates · cord",
  "rests-wince": "peppery greens · twisted thread",
  "dud-tar": "father · groove",
  "leek-swan": "grass patch · look for",
  "drove-stock": "bottle stoppers · cast a ballot",
  "aglow-being": "growing older · lower than",
  "gear-lead": "valley hollow · hot fury",
  "life-mill": "make full · citrus wedge",
  "fella-light": "grime · within law",
  "ghost-south": "moral should · party givers | flip",
  "bibs-tire": "teeth mark · curved bones",
  "goal-solo": "in addition · brand emblem | flip",
  "ewe-rod": "metal-bearing rock · marry",
  "fast-monk": "type style · disguise cover | flip",
  "spear-trawl": "on guard · folds around",
  "evil-used": "took to court · face covering | flip",
  "meat-whip": "sums class · clean by rubbing",
  "hairs-shade": "helpers · severe",
  "alien-guess": "between-seat path · type group",
  "gods-lint": "visible mark · informed",
  "smell-stall": "retail complexes · spills secrets | flip",
  "plane-shove": "call device · forced worker | flip",
  "elk-rag": "flood boat · walking limb",
  "most-rode": "rounded roof · category",
  "chuck-grips": "drinks in gulps · sharp point | flip",
  "carol-story": "backless seat · transport",
  "lady-such": "money · properly",
  "crank-isles": "speed contests · move sneakily | flip",
  "grew-wane": "chew steadily · existed before",
  "relax-saint": "worship table · vetoes | flip",
  "bulbs-cooks": "printed volumes · card suit",
  "bar-row": "steal from · armed conflict | flip",
  "diner-torch": "small cut-out · mounted traveller | flip",
  "slang-twice": "cut portion · nasal twang | flip",
  "seen-twit": "pond amphibian · joins together",
  "sulks-votes": "adores · ivory curves | flip",
  "earl-stat": "creative fields · story",
  "adore-build": "spoken aloud · wedding woman | flip",
  "none-pole": "solitary · flat refusal",
  "lamp-poor": "swimming spot · incline",
  "beta-guru": "Italian sauce · hollow pipe",
  "ago-hex": "chopping tool · greedy animal",
  "brass-mouth": "bristled cleaner · defensive ditches",
  "droll-surge": "bakery rounds · pushed strongly",
  "hurt-page": "very large · section",
  "seats-wiped": "quickness · remains",
  "aids-pill": "numbered face · mouth edges | flip",
  "outs-rook": "belonging to us · carried away | flip",
  "abet-vein": "trap morsel · level, no oddities",
  "deer-raid": "no longer lived · back end",
  "dab-rue": "plant shoot · sound catcher | flip",
  "flip-snug": "deep divide · small spikes",
  "cave-gird": "playing rectangle · hand over",
  "stops-study": "powdery · upright poles",
  "patch-tides": "abandon channel · sticky strips",
  "deny-lugs": "finishes · not pretty",
  "asked-onset": "measured amounts · accepted",
  "vital-whale": "holiday house · grain crop | flip",
  "sack-thus": "performs · outer shell",
  "kind-slot": "make loops · no longer on shelf",
  "spa-was": "donkey · animal foot",
  "prone-souls": "caregiver · circular paths | flip",
  "begin-debut": "already started · account subtraction",
  "neat-swat": "sunrise direction · desire",
  "cork-demo": "imitate · do-over",
  "holes-joust": "dwelling · sudden shocks",
  "fell-pace": "music key · sudden jump",
  "mills-tanks": "little · bad smell",
  "ruby-some": "occupied · extra amount",
  "cult-neck": "coin fraction · good fortune",
  "dig-pod": "brief plunge · deity",
  "drag-gone": "wide-eyed · awkward brainiac",
  "corny-fungi": "short-legged dog · amusing",
  "dirt-rope": "harbour · fairground turn",
  "born-dodo": "binding connection · entry panel",
  "amber-codes": "room style · light shafts | flip",
  "dash-tons": "presenter · beach grains",
  "rotor-stove": "openly visible · body trunk",
  "basic-fades": "foundation · confronted",
  "jolly-pumps": "votes sampled · nervous",
  "eye-led": "colour liquid · slippery fish",
  "happy-legit": "submit request · number after seven | flip",
  "clue-trip": "hair fastener · not false | flip",
  "lacks-reply": "rings up · upbeat",
  "lava-sing": "pesters · small bottle | flip",
  "acre-foal": "coffee spot · spoken aloud",
  "civil-roger": "reasoning chain · flowing water",
  "flee-hate": "Greek cheese · shoe back",
  "ribs-word": "feathered animal · lines of text",
  "meats-skits": "chores · multiplied by",
  "key-pay": "shaggy ox · casual yes",
  "loses-snide": "worshipped figures · meaning",
  "awash-trait": "rubbish · wait for",
  "husk-newt": "understood · therefore",
  "brat-role": "ink stain · uncommon | flip",
  "liner-theft": "old knock-out gas · fire-starter stone | flip",
  "dead-yowl": "water-beaded · cargo burden",
  "male-peak": "create · earnest request",
  "mines-wears": "spread thinly · farm pig",
  "tacos-taste": "outer layers · condition",
  "gut-owl": "carry heavily · number after one | flip",
  "nose-tamp": "unkind · small mark",
  "badge-hires": "conceals · flat-bottomed boat | flip",
  "earns-worth": "feeling centre · under oath",
  "chin-demo": "small measure · setting",
  "curls-thank": "blackboard stick · changes direction",
  "plugs-tooth": "schemes · hard to handle | flip",
  "film-seed": "provide a meal · slender | flip",
  "bride-quota": "wide · hushed",
  "kid-yes": "colour liquid · downhill sport | flip",
  "hell-void": "keep in grip · face covering",
  "leek-less": "large deer · otherwise",
  "belts-hoops": "footwear · assists",
  "dump-plop": "trudge along · water mover",
  "mango-races": "freight load · labels",
  "lava-only": "starburst · supporter",
  "diver-legit": "simple machine · finger or number | flip",
  "dude-tone": "adore · unclothed",
  "eager-shade": "boundary shrub · mapped zones | flip",
  "eat-rip": "baked slice · black road stuff",
  "redo-town": "departed · entry panel | flip",
  "maid-tool": "state of mind · animal rear",
  "bucks-codes": "harbour platforms · blocks",
  "grid-shut": "medicine · present thing",
  "snaps-taped": "pay out · small Spanish plates | flip",
  "rooms-tuner": "social standards · farther outside",
  "land-mice": "thought centre · delicate trim",
  "acute-niche": "hidden store · join together",
  "sixes-tract": "small wagons · be real",
  "peg-way": "opening space · bow-maker’s wood | flip",
  "swell-video": "smooth descent · speech sound",
  "bevy-wide": "water-beaded · atmosphere",
  "canoe-terse": "vast blue expanse · guide the wheel | flip",
  "hike-news": "keen · desire",
  "honey-wills": "winter berry · cellar bottles",
  "crack-rites": "land units · deception",
  "silk-waft": "flour detective · stroll | flip",
  "dies-sake": "comfort · youngsters",
  "rage-warn": "chew steadily · back end",
  "are-hex": "chopping tool · belonging to her",
  "lady-rise": "told a fib · sunbeams",
  "male-nick": "arrived · connection",
  "looks-picks": "smooth and glossy · haunting figure",
  "bulbs-slope": "rounded spots · beating signal",
  "duty-tips": "places down · shipshape",
  "carry-meter": "serve food · cheerful",
  "heard-rains": "remove liquid · cut wool",
  "robot-using": "fake · opening section",
  "elm-rag": "upper limb · walking limb",
  "fires-satay": "sprite · places to sit",
  "rode-sold": "measured medicine · noble master",
  "hates-pipes": "outline form · petty malice | flip",
  "earl-feet": "tree part · woody plant",
  "bean-what": "washing tub · diminish",
  "corks-naval": "status levels · using the voice",
  "used-veil": "took to court · wicked | flip",
  "coal-self": "lounge seat · tiny room | flip",
  "burns-stock": "tied loops · wash roughly",
  "now-tie": "vast age · quick humour | flip",
  "food-knit": "walking base · not cruel",
  "oops-pork": "father bursts · castle piece",
  "ashes-drill": "fairground turns · will, formally",
  "comet-hours": "courtroom place · dwellings | flip",
  "acid-stem": "round plate · butcher’s cut",
  "motel-wives": "multiplied by · speech sound",
  "bling-sweat": "playground arc · sheep cry | flip",
  "cafe-dark": "grow dim · storage frame",
  "gosh-rice": "weary exhale · centre",
  "add-nab": "joining word · paint touch",
  "plot-wars": "unhurried · cover sheet",
  "keen-mile": "ore source · boat spine | flip",
  "rolls-skied": "toy figures · snow-slope rider",
  "bowl-demo": "dark fate · puffed air | flip",
  "cash-guru": "Italian sauce · like that | flip",
  "alias-drone": "small spikes · love deeply | flip",
  "kiss-mall": "end life · crowd of matter | flip",
  "pants-perks": "bright flash · used up | flip",
  "sends-these": "small shelters · strained | flip",
  "ear-pro": "metal-bearing rock · rhymed talk",
  "dive-near": "sudden attack · level, no oddities | flip",
  "fast-lilt": "raise upward · seasoning mineral",
  "beams-dally": "pleasantly warm · bargains",
  "isles-trace": "scores speed · cut portion | flip",
  "gawk-late": "speak · earnings",
  "gauge-limit": "remorse · likeness",
  "levy-nags": "table supports · fleet colour | flip",
  "party-sells": "continues · answer back",
  "tasks-waste": "pointed post · hits sharply",
  "ink-sat": "pose a question · tiny egg",
  "gears-since": "stop · circles | flip",
  "mains-super": "subtraction sign · pointed weapon",
  "nope-soft": "type style · model’s stance",
  "fare-teem": "no cost · sports side",
  "abide-sacks": "to one side · supports",
  "next-twit": "written words · matching sibling",
  "ample-blank": "easy stroll · board strip",
  "axed-yeti": "looked at closely · cab ride | flip",
  "gay-vie": "years lived · climbing vine",
  "gangs-moody": "merchandise · scruffy-coated",
  "death-hovel": "open scrubland · was adored",
  "eons-pets": "observed · small mark",
  "drift-ether": "mounted traveller · stealing",
  "basil-smell": "game spheres · grin curve",
  "lame-pale": "sudden jump · dinner portion",
  "buzz-fish": "scrub shrub · sparkling bubbles",
  "lost-pelt": "recounts · upper parts",
  "died-sink": "expires · not cruel",
  "bat-ewe": "consumed · internet page",
  "gives-panel": "judge’s mallet · yearns",
  "rule-vice": "not recorded · remedy",
  "chief-rents": "upper garment · barrier | flip",
  "arts-oval": "category · molten rock | flip",
  "rites-slain": "beer mug · train tracks",
  "shape-sword": "desires · hospital section",
  "just-vary": "courtroom panel · immense | flip",
  "fill-town": "clothing fluff · wild canine",
  "amen-veil": "level, no oddities · letters in transit",
  "ilk-rid": "cover · annoy",
  "drive-salty": "forced worker · grimy | flip",
  "races-slick": "fissure · small islands | flip",
  "aids-solo": "lubricates · fizzy drink",
  "booty-wrath": "stall cubicle · bumpy",
  "shear-their": "inheritors · feeling centre | flip",
  "cram-wise": "move in water · land measure",
  "bags-case": "low fish · barred enclosure | flip",
  "stall-sweep": "water sources · sticky strips | flip",
  "mock-rose": "a few · bottle stopper",
  "ore-pad": "imitate · straight stick",
  "laws-spin": "mouth edges · graceful waterbird",
  "moral-watts": "tiny particles · dragnet search | flip",
  "bias-debt": "rhythm pulse · first claim | flip",
  "ingot-verse": "openly visible · scorch lightly | flip",
  "nest-sits": "moral wrongs · exam",
  "ends-rude": "awkward brainiac · put to work",
  "chant-flora": "waterway · onward",
  "memo-tide": "trial version · tiny crawler",
  "far-not": "soft body tissue · neither partner | flip",
  "giant-purge": "printed copy · measuring dial",
  "hate-riot": "solemn promise · level",
  "dare-life": "grow dim · provoke",
  "furry-males": "energy sources · join at altar",
  "droll-scare": "looked after · bakery rounds | flip",
  "clue-pops": "manage · addition symbol | flip",
  "bride-loopy": "lace mat · investigate closely",
  "dealt-remix": "change · blended",
  "clay-lead": "nailed the test · supporter",
  "era-kid": "expire · flood boat | flip",
  "held-tone": "opening · look after",
  "sedan-yodel": "carries plenty · wanting help",
  "find-save": "hand count · beach grains",
  "cent-rack": "wagon · collar zone",
  "order-roofs": "mistake · edibles | flip",
  "locks-warns": "loose-hanging · under oath | flip",
  "lane-rats": "receive payment · seasoning mineral",
  "basil-hexes": "foundations · spiral form | flip",
  "ocean-stale": "stop · bird claw",
  "eye-wag": "years lived · bow-maker’s wood",
  "corn-view": "black bird · blood channel",
  "bond-sums": "not smart · male children",
  "chord-thick": "wheel wedge · after second",
  "lips-sell": "not as much · tablet",
  "bowel-ideas": "to one side · joint bend",
  "chair-green": "encouragement · tiny kernel",
  "deep-fair": "settled up · coral ridge | flip",
  "able-grab": "spill secrets · hot fury",
  "nests-nurse": "litter’s smallest · meaning",
  "ear-max": "upper limb · chopping tool",
  "goof-hulk": "deep divide · curved catch",
  "blip-king": "slick talk · rosy shade",
  "cask-lift": "true detail · smooth fabric",
  "heals-these": "dog tether · bed linen",
  "bite-same": "test version · halfway prefix",
  "aware-poets": "stage song · squander",
  "taco-tins": "performs · inside movement",
  "cares-queue": "reason · odd/unsettling",
  "dab-old": "put in more · toss high",
  "glow-shut": "overfull excess · display",
  "dance-tired": "dehydrated · put into effect | flip",
  "oily-them": "sacred · list piece",
  "nicer-tasks": "serve food · drops below",
  "siege-waves": "earnings · kitchen strainer",
  "cure-dish": "fairground turn · like that",
  "data-wife": "unable to hear · stay put",
  "elf-ewe": "slippery fish · not many",
  "aisle-hands": "small spikes · cool shadow",
  "bark-jets": "flying mammals · sudden twitch",
  "rely-team": "soften with heat · calendar span",
  "ogres-prove": "small woods · cords",
  "coins-plant": "family groups · sharp end",
  "ghee-redo": "border · brave lead",
  "cord-lace": "not warm · speed contest",
  "sears-young": "deep torment · account holders",
  "mined-sadly": "masculine · took a position",
  "odd-yep": "colour liquid · seed case",
  "earn-slim": "upper limbs · straight mark",
  "jock-pain": "connect · bundle",
  "chuck-roast": "courtroom place · rough hut",
  "mode-pose": "foolish person · a few",
  "duty-pass": "fine powder · settles a bill",
  "isles-trips": "small mistakes · ceremonies",
  "birds-broke": "lost interest · lively and quick | flip",
  "elite-icons": "sibling’s daughter · hard labours | flip",
  "shift-slate": "detests · raises upward",
  "dad-yam": "24 hours · furious",
  "loyal-pasta": "metal mixture · small Spanish plates",
  "bush-camp": "raised swelling · money | flip",
  "disco-elect": "quoted as evidence · not far",
  "birch-canon": "minor noble · easy task",
  "east-waft": "impressive act · quick hit",
  "early-shots": "creative type · openings",
  "pile-warm": "tropical tree · metal strand",
  "dirt-sofa": "sudden seizures · street surface | flip",
  "art-wow": "number after one · armed conflict | flip",
  "clip-meal": "headland · grain grinder",
  "horse-ideas": "helpers · coastline | flip",
  "purse-salty": "brief delay · oxidised",
  "tune-twin": "single thing · departed",
  "left-vibe": "hand count · waist strap",
  "basis-vowel": "lower than · border stamps | flip",
  "crane-ropes": "lying face-down · land units",
  "grow-loud": "sheep fibre · medicine",
  "pet-soy": "upper surface · agreement word",
  "peer-trap": "get ready · rip apart",
  "gate-nerd": "hot fury · look after",
  "dough-lacks": "harbour platforms · laugh out loud | flip",
  "bull-face": "social suit · tree part | flip",
  "amen-vein": "level, no oddities · principal one",
  "cakes-piers": "weeps · mountain tops | flip",
  "media-newer": "directed · refresh",
  "snack-swell": "collar zones · barriers",
  "nacho-trace": "tree nut · break rules",
  "due-nod": "failed item · vast age | flip",
  "fret-teen": "walking pair · fork-tailed bird | flip",
  "nags-sums": "firearms · crowd of matter | flip",
  "files-sixth": "grime · double threes | flip",
  "shown-skate": "warms up · understands",
  "cone-trio": "upon · grain bowl",
  "cork-site": "flower · tiny parasite | flip",
  "daisy-flare": "private pages · untrue",
  "neat-slog": "sunrise direction · not short",
  "reset-snide": "bury formally · plant starters | flip",
  "pug-tag": "belly instinct · opening space",
  "aced-word": "playing rectangle · had a debt",
  "cogs-ruin": "minted money · floor coverings | flip",
  "hints-tapes": "outline form · limited spell",
  "part-same": "hearing organs · press firmly",
  "lords-punch": "sudden stagger · small waters",
  "clans-those": "party givers · spear | flip",
  "pipe-scan": "walking speed · rotate | flip",
  "dog-old": "wood record · strange",
  "chess-eaten": "valuable holding · therefore",
  "atlas-broom": "warning signal · footwear | flip",
  "mile-said": "surrounded by · small island",
  "obese-shall": "foundations · greeting word",
  "ether-scene": "encouragement · strained",
  "kids-yurt": "danger · obligation",
  "sure-weed": "took to court · existed before | flip",
  "date-newt": "canvas shelter · walk through water",
  "awry-cave": "land measure · undulating",
  "eat-pro": "metal-bearing rock · light knock",
  "dried-pearl": "fearful awe · danger",
  "mind-torn": "small dent · usual standard",
  "pill-road": "trudge along · train track",
  "maple-tests": "dinner surface · plant stalks",
  "brain-vexed": "chin forest · female fox",
  "able-seem": "otherwise · ray of light",
  "loose-piles": "run off to wed · dirties",
  "lost-some": "bottom of shoe · nearly all",
  "chick-flair": "seat with a back · quick tap",
  "ape-gay": "years lived · wages",
  "love-wish": "face covering · display | flip",
  "guise-snaps": "brief halt · carries a tune | flip",
  "tide-vibe": "teeth mark · plunge",
  "lamps-swear": "brief delay · crowd together | flip",
  "diner-vowel": "fiction book · less narrow",
  "cook-fast": "barrel · walking base | flip",
  "pose-soda": "performs · wash bar",
  "apart-aside": "adjust · get up",
  "diets-elbow": "lower than · revises copy",
  "elk-rig": "annoy · walking limb",
  "dusty-tacos": "learning session · outer layers | flip",
  "like-scan": "delicate trim · body covering",
  "brute-smash": "burns on surface · opposable digit",
  "canal-tasks": "rough bags · birth-related",
  "doll-head": "agreement · keep in grip",
  "small-swift": "factories · drifts gently",
  "door-nest": "do-over · large amounts | flip",
  "less-pool": "mistake sound · trade for money",
  "prep-stay": "walking move · ask heaven",
  "axe-wet": "government levy · female sheep",
  "base-gate": "help the scheme · years lived",
  "clerk-exact": "sharp rattle · apply effort",
  "lady-once": "earthy material · finished",
  "bars-rice": "attention · curved bones",
  "piece-saved": "walked evenly · kitchen strainer | flip",
  "angel-rules": "thin porridge · road channels",
  "mojo-sort": "chamber · quick notes | flip",
  "bride-corps": "crunchy · lost interest | flip",
  "icons-topic": "loose change · eyepiece-related | flip",
  "gin-wow": "at present · hairpiece",
  "hint-want": "comparison word · matching sibling",
  "stage-third": "thrown points · number after seven",
  "furl-oils": "make full · belonging to us",
  "owing-sling": "special jargon · flight limbs",
  "frog-male": "signal cloth · extra amount",
  "duty-nine": "unclothed · very small",
  "thief-warns": "nearly swoons · tiny insect-hunter | flip",
  "been-guys": "occupied · inheritance code",
  "drain-shire": "employed · falls from clouds",
  "ark-yam": "upper limb · shaggy ox",
  "forms-trend": "leafy frond · conditions",
  "days-view": "team half · undulating",
  "buck-cuss": "young bears · draw inward",
  "mango-overt": "in the middle of · ballot caster",
  "never-tides": "discourage · climbing plants",
  "foxy-onto": "walking base · black gemstone",
  "brass-organ": "criminal fire-setting · seizes",
  "fees-user": "no cost · employs",
  "amen-blue": "slick helper · unkind",
  "got-yep": "small pin · plaything",
  "roots-tenth": "leases · molar, say",
  "noble-straw": "carried by wind · scores speed",
  "rage-told": "entry barrier · noble master",
  "case-soft": "price paid · out of danger | flip",
  "alloy-steer": "faithful · brief",
  "seed-yaks": "poses questions · looked at closely",
  "brush-sleep": "kitchen leaves · beating signal",
  "lime-pond": "gentle · flat refusal",
  "call-port": "wagon · survey count",
  "act-raw": "creative craft · crow cry",
  "pile-task": "comedy sketch · sudden jump | flip",
  "least-prism": "short journeys · dinner portions",
  "data-golf": "foolish · target",
  "city-dive": "shipshape · bad habit",
  "souls-stain": "hair studio · business outfits",
  "ozone-shell": "areas · greeting word | flip",
  "lilt-park": "end life · cover sheet",
  "hairs-surly": "rush · boat cloths",
  "dork-nude": "plunge · travelled",
  "bad-hem": "sleeping place · sandwich meat",
  "toned-wells": "live somewhere · hard mineral",
  "opera-panel": "without company · writing sheet",
  "grow-wane": "chew steadily · was dressed in",
  "emit-ends": "halfway prefix · look after",
  "names-vocal": "relocates · waterway",
  "cats-jeep": "headland · joke",
  "husk-king": "pour out · little twist",
  "roles-spots": "cords · narrow openings",
  "free-said": "helps · coral ridge | flip",
  "pip-war": "animal foot · tear apart",
  "dote-pose": "performs · verse maker",
  "meets-night": "sharp pain · central idea",
  "life-slip": "turn over · small island",
  "hits-page": "loathe · farm animals",
  "ovary-rapid": "steer clear · fencing block",
  "dodo-full": "not sharp · edibles",
  "minds-purse": "percussion set · marsh bird",
  "aside-bands": "put up with · beach grains",
  "bucks-pinch": "cluster · selects",
  "dab-rap": "pub counter · cushion",
  "redo-torn": "entry panel · monthly due",
  "genus-shoot": "smell organs · moral should",
  "last-rare": "genuine · night light",
  "flats-sleek": "senses by touch · plant stem",
  "heats-wines": "glow · perspiration",
  "ally-back": "skilfully · absence",
  "teeth-wiser": "woody plants · snow shade",
  "lube-mask": "large mass · identical",
  "fake-hide": "grow dim · long walk",
  "bet-new": "internet page · number after nine",
  "mice-soft": "arrive · closed hand | flip",
  "cedar-devil": "branch group · propel",
  "sides-skier": "fairground turns · heavens",
};

const clueBonusWords = {
  "hill-hunt": ["thin"],
  "daddy-rises": ["dares","dries","reads","ready","rides","sears","sides","sired","years"],
  "brain-tarot": ["abort","tabor","train"],
  "debt-life": ["belt","bile","feed","feel","file","flee","flit","left","lift"],
  "filth-safer": ["earls","fares","farts","fears","feral","fires","first","flare","flier","flirt","fries","hales","halts","heals","leash","rafts","reals","rifle","rifts","riles","serif","shaft","shale","shalt","sheaf","shift"],
  "relax-tasty": ["artsy","early","exalt","laxer","layer","leary","relay","satay","taxes","texts","trays","tyres","years","yeast"],
  "keen-spin": ["pens","pink","pins","seen","sine"],
  "lies-toes": ["isle","lose","ties"],
  "drop-look": ["polo","pool","prod"],
  "cry-sea": ["ace","car"],
  "dates-ledge": ["dales","deals","deeds","gated","glade","leads","least","slate","sleet","stade","stale","stead","steed","steel","tales"],
  "gate-rice": ["acre","care","race","rate","rite","tear","tier"],
  "nest-sift": ["fits","nets","sets","sits","tens","tins"],
  "bread-known": ["bared","baron","beard","board","broad","drake","raked"],
  "fail-into": ["flat","font","lint"],
  "fade-peel": ["deaf","deep","feel","flea","fled","flee","leaf","leap","peed","plea"],
  "goose-paths": ["gates","ghost","paste","pasts","pesto","poets","posts","septa","soaps","spate","spats","spots","stops","tapes"],
  "caves-coral": ["acres","cares","carol","clear","clove","cores","orcas","sacra","scare","score"],
  "alloy-upset": ["alley","allot","atoll","leapt","least","lotus","lousy","paste","petal","plate","pleat","septa","slate","soapy","spate","spout","stale","steal","tales","tapes","tulle"],
  "era-war": ["ear"],
  "shell-stall": ["hells","shall"],
  "enact-their": ["chart","cheer","crane","inert","rance","reach","taint","teach","titan","tithe","train"],
  "body-cure": ["bore","core","cory","deco","ecru","robe","ruby"],
  "maple-table": ["amble","ample","bleat","leapt","petal","pleat"],
  "bulk-lime": ["bile","blue","kill","mile","mule"],
  "nuts-pack": ["ants","cans","caps","past","pats","puck","puts","scan","spat","stun","taps"],
  "earth-kills": ["aster","earls","hater","islet","karts","laser","lathe","least","lisle","rates","reals","riles","rites","skirt","slate","stale","stalk","stare","stark","steal","tales","talks","tears","their","tiers","tiles","tires","tries"],
  "meet-shut": ["huts","meth","mute","tees","them"],
  "maps-swig": ["aims","amps","gasp","pass","saps","wigs"],
  "new-old": ["den","doe","owe","owl"],
  "grab-wild": ["brag","drag","draw","grad"],
  "guide-mines": ["denim","dings","genie","genus","menus","minds","nudge","singe"],
  "drug-mood": ["dodo","doom","dorm","rudd"],
  "bean-fart": ["abet","bane","beat","beta","bran","brat","fate","fern","feta","frat","fret","raft"],
  "actor-under": ["adorn","cadre","cared","carte","cater","cedar","court","crate","crude","cured","cuter","raced","radon","trace","truce","tuner"],
  "grew-wore": ["ergo","gore","ogre"],
  "ended-poets": ["dense","dents","depot","doped","dopes","dotes","pesto","posed","spend","spent","teens","tends","tense"],
  "down-glue": ["duel","gown","lewd","udon","undo","weld"],
  "din-won": ["nod","now","own"],
  "nasal-tense": ["asset","atlas","eaten","lanes","lasts","leans","least","salts","seats","senna","slant","slate","slats","stale","steal","tales","tease","teens"],
  "angle-bowls": ["angel","below","blows","bowel","glean","globe","goals","lawns"],
  "cram-sets": ["aces","arcs","arms","came","case","mace","mars","mesa","rams","same","scar","seam","seas","sect"],
  "bunny-tried": ["bride","entry","tired","trend","unity"],
  "moss-yeti": ["emit","item","mess","miso","mite","most","stem","time"],
  "baby-name": ["amen","bane","beam","bean","mane","mean"],
  "firm-sons": ["fins","from","rims"],
  "isle-lazy": ["lies","sell","zeal"],
  "atlas-erase": ["asset","earls","laser","lasts","least","leers","reals","reels","salts","saree","sears","seats","slate","slats","sleet","steal","steel","tales","tease"],
  "buck-laws": ["awls","back","cabs","lack","luck","swab"],
  "relay-renew": ["early","leary","yearn"],
  "dial-rats": ["aids","airs","arts","lair","liar","rail","said","sari","stir","tsar"],
  "fools-teeth": ["flees","hotel","sleet","steel","stole","stool","tools","toots","totes"],
  "naive-shade": ["aside","hades","haves","heads","hides","hives","ideas","shave"],
  "flesh-walls": ["falls","false","fells","fleas","leafs","safes","shawl","sheaf","shelf","swell","welsh","whale"],
  "spark-strip": ["karts","parts","skirt","stark","strap","traps"],
  "urges-verse": ["guess","reeve","reuse","serve","sever","surge","veers"],
  "cave-time": ["came","emit","item","mace","meat","meta","mice","mite","tame","team"],
  "rebel-stout": ["beets","beret","beset","blues","blurt","brute","butts","lotus","louse","otter","rebut","route","ruble","stole","totes","touts","trout","tuber","tubes","tutor"],
  "cold-pool": ["clod","loco","loop","poll","polo"],
  "ghost-salon": ["gloat","goats","lasts","loans","salts","shoot","shots","slang","slats","sloth"],
  "chat-seek": ["cake","eats","hack","hast","hats","sake","seat","teas","tees"],
  "rare-snow": ["aero","ears","eons","eras","nose","ones","sera","wars","worn"],
  "amen-bait": ["amin","bane","bean","beat","beta","mane","mate","mean","meat","meta","mina","name","tame","team"],
  "gas-keg": ["gag","sag"],
  "likes-mango": ["alone","along","among","lakes","lanes","leaks","leans","liens","lines","means","mensa","mines","names","slang","sling"],
  "seven-train": ["anise","earns","eaten","evens","nears","sarin","snare","veins","vines"],
  "bees-hail": ["able","bail","bale","base","bile","hale","heal","shea"],
  "odds-open": ["does","done","node","nope","pods","pose"],
  "asset-stone": ["atone","eases","nests","noses","notes","santo","seton","state","tanto","taste","tease","tests","tones","totes"],
  "fake-lilt": ["file","flat","flea","flit","lake","leaf","leak","life","like","talk","tall","till"],
  "aims-flew": ["sale","seal","self"],
  "range-swine": ["anise","senna"],
  "deeds-first": ["diets","dress","edits","feeds","frets","rifts","serfs","sided","sides","sited","steed","tides"],
  "rows-yard": ["dory","draw","rosy","sway","ward","wars","ways"],
  "diet-lamp": ["damp","date","edit","late","leap","limp","lite","malt","pale","pile","plea","tale","teal","tied","tile"],
  "birch-prong": ["bingo","boing","chirp"],
  "props-spiky": ["porky","risky","skips","spork"],
  "reef-sand": ["dare","darn","dear","ends","fare","fear","fees","fern","free","nerd","rand","read","reed","safe","seed","send"],
  "chalk-slice": ["aches","cache","chase","chick","clack","hacks","hales","heals","hicks","kills","laces","lacks","lakhs","leach","leash","licks","lisle","scale","shack","skill","slack","slick"],
  "key-tap": ["kay","pat","yet"],
  "just-monk": ["jots","juts","musk","must"],
  "sassy-treat": ["artsy","assay","asset","aster","rates","rests","satay","seats","stare","stars","state","stats","stays","stray","tarts","taste","tater","tears","teary","tetra","trays","tyres","years","yeast"],
  "cedar-green": ["agree","anger","cadre","carer","crane","creed","dance","eager","grade","grand","greed","raced","racer","raged","rager","rance","range"],
  "iron-lads": ["aids","land","loan","noir","nori","said"],
  "fact-made": ["cafe","dame","deaf","face","fade","mace","mead"],
  "loves-warns": ["earls","laser","loser","reals","roles","salve","snarl","solve","swear","swore","wares","waves","wears","worse"],
  "done-redo": ["deed","deer","dodo","node","odor","reed","rode"],
  "bold-seal": ["able","also","bale","bead","bled","dosa","olds","sale","sell","sled","sold"],
  "spent-straw": ["parts","paste","septa","spate","start","state","stent","strap","sweat","tapes","tarts","taste","traps","warts","waste"],
  "row-ten": ["net","not","ton","two"],
  "fined-talks": ["dealt","delta","false","field","fiend","files","fines","flask","fleas","flies","inset","islet","knits","leafs","least","slate","stale","stalk","stank","steal","stein","stink","tales","tiled","tiles"],
  "ample-demon": ["lemma","maple","monde","moped","panel","penal"],
  "bare-slot": ["arts","bear","blot","boat","bolt","ears","eras","lobe","lose","lost","lots","oats","rats","sera","star","tsar"],
  "ages-hour": ["aero","gear","gush","hero","hose","hugs","rage","sage"],
  "fist-pope": ["fits","foes","pies","pits","pose","post","pots","sift","spit","spot","stop","tips","tops"],
  "scene-smash": ["canes","cases","masse","mensa","names","seams","seems","shams"],
  "lists-strap": ["lapis","liars","pairs","parts","pasts","pilar","rails","sails","salts","slats","slits","spats","spilt","spits","splat","split","stars","stirs","traps","trips"],
  "dude-worn": ["owed","redo","rode","wore"],
  "smear-swill": ["mails","males","mares","meals","smell","swear","swell","swirl","wares","wells","wills"],
  "bases-begun": ["beans"],
  "seem-toss": ["meet","mess","moss","sets","some","stem","teem","tees","toes","tome"],
  "older-rocks": ["close","cooks","cores","corks","crook","crore","doers","dorks","doser","rodeo","score"],
  "ease-rich": ["ache","acre","arch","care","char","ears","eras","race","rash","rice","sera","shea","shri","sire"],
  "liar-wolf": ["fail","fill","foal","lair","loaf","oral","roll"],
  "did-nib": ["bin"],
  "bell-idea": ["aide","bald","bale","bead","bled","deli","dial","dill","idle","laid"],
  "paint-rites": ["arise","aster","irate","pains","pants","paste","petit","pints","rains","raise","rants","rates","sarin","sepia","septa","spate","stare","stipe","tapes","tater","tears","tetra","tiers","tires","trans","treat","tries","trite"],
  "clean-dread": ["adder","cadre","cared","cedar","clade","crane","dared","decal","laced","lance","rance"],
  "lift-tale": ["feat","feta","file","flat","flea","flit","late","leaf","life","lite","tall","teal","tile","till","tilt"],
  "mayor-stern": ["arose","earns","metro","moray","nears","notes","onset","ramen","rears","rents","seton","snare","stony","store","story","tones","yarns"],
  "euro-spot": ["ours","outs","poet","pore","post","pots","pros","repo","rope","rust","sour","stop","tops"],
  "baked-pools": ["abode","adobe","bakes","beaks","booed","lobos","loops","poked","pokes","sloop","speak","spoke","spool"],
  "hopes-steer": ["ester","pesos","pests","pores","poser","posse","prose","reset","ropes","sheet","spore","steps","strep","terse","there","these","three","trees"],
  "shirt-swine": ["heirs","hires","shine","shire","twins","weirs","wines","wiser","wrist"],
  "couch-singe": ["chins","cinch","conch","cones","guise","scone"],
  "over-then": ["hone","oven","rove"],
  "level-wagon": ["aglow","along","angel","angle","glean","navel","novel","vowel"],
  "asks-want": ["ants","sans"],
  "ranch-towns": ["chant","crows","scant","scorn","sworn","wants","watch"],
  "die-nor": ["doe","one","rod"],
  "hard-pelt": ["dahl","halt","hart","herd","plat","tarp","trap"],
  "send-slip": ["dies","lids","pens","pies","side","slid"],
  "split-wheel": ["heels","heist","hells","hills","peels","pelts","piles","pills","plies","sheet","shell","shill","sleep","slept","spelt","spiel","spill","spilt","spite","steep","stipe","these","while"],
  "array-guide": ["adieu","aired","auger","dairy","rager","ridge","urged"],
  "corn-unit": ["coin","tour","turn"],
  "luck-nose": ["clue","eons","lock","lose","once","ones","sole","sunk"],
  "field-greet": ["defer","filed","freed","glide","legit"],
  "dusty-idols": ["doily","solid","studs","study"],
  "bump-host": ["bops","bots","bust","hops","hump","huts","moth","posh","pubs","shop","shot","shut","thus"],
  "now-run": ["nor","own","urn","won"],
  "bevy-rule": ["blue","ever","leer","lure","reel","rely"],
  "buddy-tells": ["bells","belly","bully","telly"],
  "dork-lime": ["demo","dime","dire","dirk","dome","lore","mile","mode","mole","redo","ride","rile","role"],
  "flit-from": ["firm","form","lift","loft","rift"],
  "asset-heats": ["eases","haste","hates","seats","sheet","stash","stats","taste","tease","these","theta"],
  "nuts-weed": ["dent","dune","need","nest","nets","seen","sent","stew","stun","tend","tens"],
  "blame-resin": ["ramen","realm","reins","riles","rinse","risen"],
  "grant-swore": ["anger","earns","goner","nears","rager","rants","rears","roger","senor","snare","snore","snort","straw","swear","towns","trans","twang","wager","wanes","wants","wares","warts","wears","worse"],
  "hot-use": ["hes","sue"],
  "mouse-prose": ["mores","pores","poser","ropes","serum","spore","super"],
  "camps-crews": ["capes","paces","scape","space"],
  "bail-drag": ["alba","brag","brig","dial","gird","grad","grid"],
  "safe-vice": ["aces","cave","fave"],
  "dome-eyes": ["demo","does","dose","dyes","mode","mods"],
  "edges-hovel": ["delve","devel"],
  "door-fans": ["darn","dons","dosa","nods","odor","rand","road","soda","sofa"],
  "hope-salt": ["apes","hale","halt","heap","hole","holt","last","lose","lost","lots","past","path","pats","peas","pose","post","pots","sale","seal","slot","sole","spat","spot","taps","tops"],
  "ads-say": ["sad"],
  "merry-quiet": ["emery","meter","metre","mitre","quite","remit","timer"],
  "small-tough": ["allot","altho","atoll","gloat","goals","halos","loath","mulls","shoal"],
  "disk-wage": ["aged","dies","kids","skid","wise"],
  "feels-tides": ["diets","edits","files","flees","flies","islet","sited","sleet","steed","steel"],
  "guns-thus": ["gnus","gush","hugs","huts","nuts","snug","stun"],
  "date-fury": ["dare","dear","duet","fate","fear","feat","feta","fray","read","rude","yard"],
  "rind-tear": ["arid","dare","date","dear","dent","nerd","raid","rare","rate","read","rent","tend","tern"],
  "bar-pot": ["bat","bot","bra","bro","opt","orb","pat","pro","rap","tab","top"],
  "great-horse": ["eager","earth","ethos","gator","goers","grate","hater","heart","heres","heros","horst","ogres","rager","serge","sheer","shore","those","torah"],
  "blind-clack": ["black","blank","blink","clank","clink"],
  "logs-tiff": ["fist","gift","gist","sift","slog","soft"],
  "bone-pity": ["bony","nope","open","pine","poet","typo"],
  "event-viral": ["alive","avert","inert","irate","leave","liner","liven","ravel","rival","vitae"],
  "felt-kale": ["feel","flat","flea","flee","keel","leaf","leak","leek","talk"],
  "paved-rider": ["adder","diver","drape","dread","dried","drier","drive","padre","pared","pride","raver","river"],
  "canon-pores": ["acres","apron","canes","cares","cones","cores","crane","crone","nance","orcas","panes","parse","pears","porno","poser","prone","prose","races","rance","recon","ropes","scare","scone","score","snoop","spare","spear","spoon","spore"],
  "opal-role": ["aero","lore","pear","poll","reap","roll"],
  "route-steam": ["amour","eater","mates","meats","metro","tamer","tames","tease","tomes","utter"],
  "lets-sell": ["lest","sets"],
  "flip-girl": ["gill"],
  "false-tiger": ["alert","alter","elite","feral","files","flare","fleas","flier","flies","gates","grate","great","grist","grits","islet","later","leafs","rifle","slate","stage","stale","steal","tales","tiles"],
  "boxes-there": ["bores","ether","herbs","obese","robes","sheet","sober","store","three"],
  "calm-teen": ["acne","ante","came","cane","clam","lent","mace","malt","mate","meat","meet","melt","meta","neat","tame","team"],
  "fresh-usher": ["freer","frees","reefs","reuse","serfs","users"],
  "egg-tea": ["ate","eat","tag"],
  "alone-zones": ["leans","loans","oozes","salon"],
  "furl-guns": ["gnus","rugs","snug","sung"],
  "anger-crams": ["acres","areas","arena","canes","carer","cares","crane","gears","grams","racer","races","rager","rages","rance","scare"],
  "packs-tents": ["pacts","pants","spank","speck","stank","stent","tacks","tanks"],
  "feel-redo": ["fled","leer","reel"],
  "soul-spit": ["lips","outs","pits","plus","slip","soil","tips"],
  "cafe-lake": ["cake","flea","leaf","leak"],
  "bells-flash": ["bales","bases","bless","falls","false","fells","fleas","leafs","sable","safes","sheaf","shelf","slabs"],
  "cans-pick": ["pack","pans","pics","pink","pins","scan","snap","snip","span","spin"],
  "pen-toy": ["net","ten","ton","yet"],
  "draw-pins": ["aids","raps","rasp","said","spin","warp","wind","wrap"],
  "gravy-pearl": ["glare","lager","large","paler","payer","regal","repay"],
  "lily-mere": ["leer","mile","reel","rile","yell"],
  "drill-store": ["drier","droll","islet","lilts","loser","older","order","rider","riled","riles","riser","rites","roles","still","stole","tiers","tiled","tiles","tills","tires","tolls","tried","tries"],
  "fair-loud": ["dial","dual","idol","lair","liar","ludo","rail"],
  "roads-steel": ["alert","alter","arose","asset","aster","darts","doers","doser","doses","ester","later","least","older","rates","reset","seats","slate","sleet","sodas","stale","stare","steal","tales","tears","terse","trees"],
  "bare-down": ["barn","bear","born","bran","dare","darn","dear","owed","rand","read","redo","robe","rode","wade","wand"],
  "pools-tides": ["diets","dopes","dotes","plods","poise","polis","posed","sited","sloop","spied","spoil","spool","stool","toils","tools"],
  "ape-arc": ["are","car","era","pac","pea"],
  "seen-sets": ["nest","sent","tens"],
  "modes-polar": ["demos","domes","dopes","lopes","molar","moles","morel","poles","roped","slope"],
  "mint-opal": ["atop","lamp","lima","lion","mail","tamp"],
  "aced-yell": ["clad","dale","deal","lace","lead"],
  "began-piper": ["barge","being","binge","grape","gripe","pager"],
  "doll-swap": ["also","awls","load","paws","soap","wasp"],
  "hangs-light": ["glint","highs","night","sling","thing"],
  "necks-rotor": ["cones","cores","crone","crore","knots","notes","onset","recon","retro","rocks","roost","roots","scone","score","seton","stone","store","stork","toner","tones","torso"],
  "deep-when": ["peed","weep"],
  "huge-plan": ["hale","heal","leap","pale"],
  "dodge-tales": ["dales","deals","dosed","dotes","gated","glade","golds","leads","least","slate","stade","stale","stead","steal","stole"],
  "canoe-loyal": ["allay","alone","canal","colon"],
  "died-note": ["dine","dint","done","dote","edit","tide","tied","tine","tone"],
  "name-team": ["mana","mane","mate","mean","meet","meta","tame","teem"],
  "crowd-large": ["glare","lager","lower","regal"],
  "fiery-stand": ["artsy","darts","dents","draft","dries","fairy","fiend","fired","fried","nasty","raids","rides","sired","snide","tends","trays","tyres"],
  "doom-spot": ["moos","post","pots","stop"],
  "scamp-scent": ["scant"],
  "clown-three": ["cheer","ether","there","towel"],
  "dean-rent": ["date","dent","earn","rate","tear","tern"],
  "rate-slip": ["east","eats","lest","lets","lies","lips","pair","part","past","pats","rile","seat","spat","taps","tarp","tear","teas"],
  "blind-crank": ["bland","blank","blink","brink","clank"],
  "buck-case": ["aces","back","base","bask","cask","cues","suck"],
  "paste-rests": ["aster","ester","pasts","pests","rates","reset","septa","spate","spats","stars","steep","steer","tapes","tears","terse","trees"],
  "each-kegs": ["aces","ache","ages","case","cask","ghee","hack","sack"],
  "eye-its": ["set","sit","tee"],
  "waft-wine": ["anew","twin","wane"],
  "sinks-torch": ["chins","cross","honks","knits","knots","shirk","skins","skirt","stink","stork","think"],
  "gouge-nerve": ["goner","gorge","green","grove","never","venue","verge"],
  "demo-jobs": ["dome","doom","mode","mods","mood"],
  "roof-urge": ["ergo","four","gore","ogre"],
  "freed-guest": ["defer","dregs","fetus","feuds","frets","greed"],
  "pope-says": ["apes","easy","pass","pays","peas","pops","saps"],
  "swim-test": ["emit","item","mite","semi","sets","site","stem","ties","time","wits"],
  "picks-renew": ["ceres","cries","epics","newer","pines","pinks","reins","resin","rinse","risen","siren","sneer","snipe","speck","spice"],
  "ask-rid": ["ads","aid"],
  "lets-yowl": ["lest","lost","lots","lows","owls","slew","slot","slow","tell","toll"],
  "hall-mini": ["amin","hail","lima","mail","mall","mill","mina"],
  "annoy-weird": ["aired","anode","drain","nadir","wider","wired","yearn"],
  "bases-title": ["asset","bales","bates","beast","beats","bites","blast","bleat","bliss","islet","lasts","latte","least","lists","sable","salts","seats","slabs","slate","slats","slits","stale","state","steal","stilt","tales","taste","tease","tiles","tilts"],
  "notes-pores": ["onset","pesto","poets","poser","prose","senor","seton","snore","spore","stone"],
  "dash-kind": ["adds","dads","dank","dish","hank","hind","khan","kids","skid"],
  "the-war": ["ate","awe","eat","rat","raw","tar","tea"],
  "blush-croak": ["abhor","corks","crush","locks","roach","rocks","shrub"],
  "easy-glut": ["east","eats","gays","lest","lets","stag","tags","teas"],
  "lamps-views": ["lapse","leaps","pales","piles","pleas","plies","psalm","spiel","waves","wiles"],
  "avail-still": ["lilts","silva","stall","tills","vials"],
  "cart-save": ["acre","arts","care","cave","ears","eras","rats","sera","star","tsar","vase"],
  "needs-shows": ["dense","doses","nodes","nosed","sheds"],
  "coat-full": ["clot","coal","cola","colt","loaf","loft","taco"],
  "earn-pour": ["euro","near","porn","rare"],
  "are-bin": ["ear","ran"],
  "bean-then": ["ante","bane","neat","teen"],
  "bike-ends": ["bend","bide","bids","dies","keen","need","send","side"],
  "gnome-steal": ["angel","angle","glean","gloat","lanes","leans","least","loans","melts","omens","salon","slate","smelt","stale","tales","tease","teems","tomes"],
  "close-shift": ["chose","clots","colts","files","fitch","flies","flits","hoses","hosts","isles","lifts","lists","lofts","loses","shoes","shots","slice","slits","soles"],
  "amid-cake": ["maid","mice"],
  "cheer-salsa": ["aches","acres","ashes","chase","clash","clear","earls","erase","hales","heals","heres","laser","leach","leash","races","reals","saree","scare","sears","sheer","slash"],
  "flare-skits": ["earls","faker","feral","fetal","filet","flats","flier","flits","freak","frisk","islet","kites","laser","lasts","least","lifts","lists","rakes","reals","riles","risks","salts","skate","skier","slate","slats","slits","stake","stale","steak","steal","takes","tales","tiles"],
  "foot-lead": ["alto","dale","deal","dole","fade","fate","feat","feta","food","late","load","loot","tale","teal"],
  "back-nuts": ["ants","bats","buck","bust","cabs","cans","scan","stab","stun","tabs"],
  "ran-you": ["nor","yon"],
  "gaps-tiff": ["fast","fats","figs","fist","fits","gasp","past","pats","pigs","pits","sift","spat","spit","taps"],
  "fame-logo": ["foam","gale","goal","lame","loom","male","mole"],
  "chess-flick": ["check","chick","click","hicks","licks"],
  "grid-tale": ["dirt","gale","gird","late","rite","teal","tier"],
  "ruler-seven": ["evens","leers","lures","nerve","reels","serve","sever","veers","verse"],
  "canal-glory": ["carol","coral","largo"],
  "heel-roll": ["hole","leer","lore","reel"],
  "corps-tense": ["ceres","cones","cores","creep","crepe","cress","crops","cross","ester","nests","notes","onset","ponce","ports","prost","reset","rests","scene","scone","score","seton","spent","sport","steer","stone","store","strep","teens","terse","tones","trees","trope"],
  "rises-salon": ["earls","earns","irons","lanes","laser","lasso","leans","learn","liens","liner","lines","lions","loans","loins","nears","reals","reins","renal","resin","riles","rinse","risen","sales","seals","sears","silos","siren","snare","soars","soils","solar","sonar"],
  "tip-way": ["pat","paw","tap"],
  "clear-winds": ["cairn","cider","cried","laces","lawns","scale","swain","weird","welds","wired","wised"],
  "amen-seat": ["eats","mana","mane","mans","mast","mate","mats","meat","meta","name","sane","seen","stem","tame","team","teas","tees"],
  "bin-tip": ["nit","tin"],
  "straw-years": ["artsy","satay","sears","stars","swear","trays","wares","warts","warty","weary"],
  "board-decor": ["abode","adder","adobe","adore","bared","barre","beard","bread","broad","coder","credo","dared","dread"],
  "plot-weak": ["peak","peat","plat","poke","tape","wake","woke"],
  "panic-total": ["actin","antic","attic","canto","cotta","optic","pilot","plain","tacit","talon","tonal","tonic"],
  "glue-only": ["glen","noel"],
  "clad-wool": ["clod","coal","cola","cold","cool","loco","wall"],
  "siren-songs": ["grins","gross","nines","reins","resin","rinse","risen","rises","roses","senor","signs","sings","snore","sores"],
  "busy-toll": ["boys","buys","lost","lots","lust","slot","slut"],
  "cafe-mode": ["aced","code","dame","deco","demo","fame","made","mead"],
  "ago-urn": ["gnu","gun","oar","ran","run"],
  "cross-story": ["scots","sorts"],
  "asks-lend": ["dean","lens","sake","sane","sans"],
  "aimed-table": ["abide","debit","mated","metal","tamed","timed"],
  "late-play": ["leap","pale","peat","pelt","plea","tale","teal","tell"],
  "spurn-steak": ["aunts","panes","perks","rents","runts","skate","speak","stake","stern","takes"],
  "role-want": ["anew","earn","lear","lore","lowe","near","rant","real","torn","wane"],
  "edits-error": ["diets","doers","doser","rites","sited","tides","tiers","tired","tried","trier","tries"],
  "begin-waves": ["being","binge","vibes","views","wages","wigan"],
  "left-pays": ["flat","lays","self","slay","type"],
  "rodeo-short": ["dotes","ethos","horde","horst","odors","roost","roots","rotor","those","torso"],
  "guide-sides": ["dudes","issue","suede"],
  "died-soul": ["deli","does","dole","dose","idle","isle","lied","lies","lose","ludo","side","sole"],
  "cheer-treat": ["carer","carte","cater","cheat","earth","erect","ether","hater","heart","racer","reach","react","tater","teach","teeth","terra","tetra","theta","three","trace"],
  "arms-hits": ["aims","arts","rams","rats","star","tsar"],
  "coat-gear": ["acre","care","gate","goat","race","toga"],
  "stool-teeth": ["ethos","loose","lotte","lotto","sheet","shoot","sleet","stole","these","those","tools"],
  "ocean-stole": ["atone","canes","canoe","cease","clone","close","santo","sleet","steel"],
  "lime-rely": ["leer","mile","reel","rile","yell"],
  "nerve-salad": ["areas","arena","dales","dares","deals","easel","elves","erase","laden","lease","navel","never","raves","reads","salve","saree","saver","serve","sever","slave","veers","verse"],
  "gates-lacks": ["laces","least","scale","slack","slate","stage","stale","stalk","steal","tales"],
  "meet-step": ["pest","tees","temp","test"],
  "feed-kale": ["deaf","feel","flea","fled","flee","lake","leaf","leak","leek"],
  "find-post": ["dips","fits","fond","font","pint","pits","pods","pots","sift","soft","spit","spot","stop","tips","tops"],
  "cats-lung": ["acts","cans","cast","cuts","last","lust","salt","slut"],
  "also-pops": ["alps","laps","opal","pals","plop","poop","soap"],
  "amok-clef": ["fame","flea","foal","foam","kale","lake","leak","loaf","lock","make"],
  "local-ropes": ["carol","cello","close","coals","cores","lopes","orcas","polar","pores","poser","prose","score","slope","spore"],
  "space-world": ["capes","cords","cores","leaps","loads","lords","loser","lower","paces","pales","pleas","roles","scape","score"],
  "enjoy-names": ["enemy","mason","means","mensa","moans","omens"],
  "alp-ice": ["ace","lap","lip","pac","pal"],
  "ours-pity": ["outs","pits","puts","rips","sour","spur","tips"],
  "elder-tapes": ["dates","eared","eased","leper","paste","pease","peels","pelts","repel","septa","slept","spate","spelt","stade","stead","taper","trade","tread"],
  "debut-jolly": ["dolly"],
  "angle-crude": ["angel","cruel","cured","glare","glean","lager","large","raged","regal","ulcer"],
  "soda-thin": ["dons","dosa","hint","ions","nods","shin","toad"],
  "cheer-stock": ["check","cheek","choke","chore","crest","erect","ester","heres","heros","horse","ochre","reset","sheer","shock","shore","skeet","stoke","store","terse","trees"],
  "taxi-yell": ["lite","tail","tall","tell","tile"],
  "pants-straw": ["paras","parts","stars","traps","warts"],
  "beta-doom": ["abet","beat","boom","date","dome","mode","mood","toad","tomb"],
  "bin-won": ["own","win"],
  "rites-shack": ["arise","crash","hacks","hares","hears","kites","raise","shake","share","shear","sites","stick","ticks","tiers","tires","tries"],
  "crank-stood": ["croak","doors","knots","odors","ranks","roads","snark","stank","tanks","toads"],
  "aunt-item": ["emit","mate","meat","meta","mint","mite","tame","tate","time","tint","tuna"],
  "polka-space": ["capes","claps","clasp","coals","paces","peaks","scalp","scape","speak"],
  "ease-toys": ["east","eats","seas","seat","stay","teas","toss"],
  "loop-tips": ["lips","oils","pits","plop","polo","post","pots","slip","soil","solo","spot","stop","tops"],
  "faith-mount": ["futon","human"],
  "not-yet": ["net","ton"],
  "later-these": ["alert","alter","aster","earls","easel","eater","heels","laser","lease","least","rates","reals","sheet","stale","stare","start","state","steal","tales","tarts","taste","tater","tears","tease","teeth","tetra","there","three","treat"],
  "chive-foist": ["stoic"],
  "bare-bibs": ["bars","bear","bras","brie"],
  "lamp-lilt": ["limp","malt","pill","tall"],
  "spear-swath": ["awash","heaps","paras","parse","parts","pasha","pears","phase","shape","spare","strap","straw","strep","swear","traps","wares","warts","whats","wrest"],
  "deal-plug": ["aged","dale","duel","glad","lead","leap","pale","plea","pull"],
  "coins-sings": ["icons","scion","songs"],
  "dork-rope": ["dope","pore","redo","repo"],
  "pay-pet": ["pat","yap"],
  "burnt-super": ["brunt","punts","purse","rebut","runts","setup","tuber","turns","upset"],
  "gaps-swim": ["aims","amps","gasp","pass","saps","wigs"],
  "boost-pores": ["bores","ports","poser","prost","robes","ropes","sober","spore","sport","stoop","trope"],
  "bury-tone": ["bone","bony","bore","robe","tore","tory","troy","true","tune","yurt"],
  "about-gross": ["boast","boats","grout","soars"],
  "adds-doze": ["dads","dead","dosa","soda"],
  "pair-some": ["airs","arms","mars","mesa","prom","ramp","rams","romp","same","seam"],
  "drugs-spiky": ["gipsy","grids","risky","skips"],
  "named-react": ["amend","cadre","carat","cared","carte","cater","cedar","crate","dance","dream","eared","eaten","eater","madre","meant","meter","metre","raced","tamer","trace"],
  "cops-silk": ["lick","lock","pics","skip"],
  "press-purse": ["peers","speer","super"],
  "abide-mason": ["aimed","bands","beads","biome","dames","media","moans"],
  "banks-dolly": ["balls","bally","dolls","knobs","lands","nobly"],
  "cave-mine": ["acne","amen","cane","mane","mean","nice"],
  "cites-porch": ["chirp","chore","corps","cries","crisp","crocs","crops","ethic","ochre","pesto","piers","poets","pores","poser","prose","ropes","score","scrip","spire","spite","spore","stipe"],
  "dour-slap": ["alps","laps","lars","opus","ours","pals","slur","soap","soar","soup","sour"],
  "hated-risky": ["dares","death","dries","hades","heads","hides","rated","reads","rides","shade","sired","teary","tired","trade","tread","years"],
  "book-dead": ["bead","beak"],
  "dowel-games": ["dames","demos","domes","gleam","golem","mages","medal","modes","sawed"],
  "event-reads": ["dares","deter","earns","eased","eaten","enter","evens","nears","rated","reeds","saved","snare","sneer","trade"],
  "ink-rib": ["bin","kin"],
  "malls-takes": ["least","makes","males","meals","skate","slate","stale","stalk","stall","steak","steal","tales","talks"],
  "sorts-viper": ["overs","pesos","piers","pores","ports","poser","poses","posse","prose","prost","prove","riser","rises","ropes","roses","rover","servo","sores","spies","spire","spits","spore","sport","spots","stirs","stops","strip","trips","verso"],
  "holy-leap": ["heap","help","opal","pale","plea","yell"],
  "grace-spare": ["acres","capes","cares","paces","pager","parse","pears","races","rager","rears","scape","space","spear"],
  "coal-rare": ["aero","area","care","cola","core","race","rear"],
  "merge-raven": ["gamer","grave","marge","maven","nerve","never","rager","reeve"],
  "fell-grid": ["file","gird","life"],
  "deep-link": ["keel","kiln","leek","like","peed","pile"],
  "boat-hull": ["bolt","bull","halo","holt","hula","oath"],
  "eye-sat": ["eat","sea","sty","tea","yet"],
  "races-topic": ["cacti","caper","cares","caste","circa","cores","pacer","pairs","parse","paste","pears","pesto","poets","pores","poser","posit","prose","recap","ropes","scare","score","septa","spare","spate","spear","spore","stoic","tapes"],
  "chaos-meter": ["aches","cease","chest","erect","harem","meets","metre","moths","reach","roach","shame","teems","tomes","torch"],
  "lean-rain": ["earn","lane","lien","line","rein"],
  "east-poet": ["eats","past","pats","peat","post","pots","seat","spat","spot","stop","taps","teas","tops"],
  "great-heats": ["agate","earth","gears","grate","hares","haste","hater","hates","hears","rages","share","shear","sheet","stage","teeth","these","theta","trash"],
  "empty-mills": ["islet","lisle","piety","piles","plies","smell","smelt","spiel","spite","stipe","temps","tiles"],
  "kink-news": ["sewn","sink","wink","wins"],
  "salt-work": ["arts","last","lost","lots","rats","slot","star","tsar","wart"],
  "parts-spins": ["pains","spits","stars","traps"],
  "pit-raw": ["art","pat","paw","rat","tap","tar"],
  "cents-teams": ["caste","mates","meats","state","stent","tames","taste","tents"],
  "bezel-saint": ["aisle","inset","liens","lines","nails","satin","slain","snail","stain"],
  "guns-ragu": ["gnus","rags","rugs","runs","sang","snag","snug","sung"],
  "amend-worry": ["adore","adorn","anode","armed","dream","drown","madre","named","radon","rayon","rowed"],
  "clad-cram": ["clam"],
  "lord-lube": ["blue","lobe","lore","lure","role"],
  "bacon-tubes": ["ascot","babes","banco","bates","beast","beats","boast","boats","bouts","canto","caste","coast","coats","count","enact","scout","tacos"],
  "lied-wise": ["deli","idle","isle","lids","slid"],
  "dogs-life": ["digs","logs","slog"],
  "bug-new": ["beg","gen","gnu"],
  "breed-spoke": ["bored","doers","dopes","dorks","doser","keeps","peeks","pokes","posed","reeds","reeks"],
  "seal-sets": ["lest","sale"],
  "fits-pass": ["fast","fats","fist","past","pats","pits","spat","spit","taps","tips"],
  "fate-nest": ["ante","ants","fast","fats","feat","fees","feet","feta","fete","neat","nets","sane","seen","sent","teen","tens"],
  "lemur-paste": ["least","lures","metal","parts","pause","purse","rules","septa","slate","sleet","spate","stale","steal","steel","strap","strep","super","supra","tales","tapes","tramp","traps"],
  "sees-yaks": ["easy","keys","seas"],
  "knots-scalp": ["casts","claps","clasp","class","costs","lacks","locks","pacts","pants","plank","scots","slack","stack","stank","tacks","tanks"],
  "bill-fist": ["fits","flit","libs","lift","sift"],
  "baa-bro": ["bra","orb","rob"],
  "lets-loop": ["lest","lose","lost","lots","plot","pole","polo","pool","slot","sole"],
  "frond-unity": ["donut","drift","forty"],
  "genes-toast": ["asset","gases","gates","gents","nests","notes","onset","sages","seats","seton","songs","stage","state","stent","stoat","stone","taste","tease","teens","tenet","tents","tones","tongs"],
  "filed-metal": ["admit","fated","fella","fetal","field","flail","fleet","mated","mille","tamed","timed"],
  "drop-user": ["opus","ours","pods","prod","pure","rods","ruse","soup","sour","sped","sure"],
  "purge-roses": ["goers","grope","gross","ogres","pesos","pores","poser","poses","posse","prose","puree","purse","reuse","roger","rupee","sores","spore","super","urges","users"],
  "ape-ill": ["all","alp","lap","lip","pea","pie"],
  "boss-memo": ["mobs","moms","moos","moss","sobs","some"],
  "lasts-yelps": ["palsy","plays","salts","salty","slaps","slats","stall","style","tells"],
  "blab-toll": ["alto","ball","blot","boat","bolt"],
  "dame-male": ["dale","deal","lead","mead","meal"],
  "awash-elves": ["easel","hales","halve","heals","lease","sales","salsa","salve","seals","shale","slave"],
  "aisle-corps": ["close","crisp","crops","epics","lasso","liars","opera","pairs","price","relic","sails","scrip","sepia","slice","soaps","solar","spice"],
  "elks-lung": ["lens"],
  "bore-even": ["born","robe","verb"],
  "eon-why": ["hen","now","one","won"],
  "kids-lack": ["cask","disk","lick","lids","sack","sick","skid","slid"],
  "drive-month": ["devon","diver","merit","mirth","mitre","movie","noted","remit","timer","tired","toned","trend","tried","video"],
  "need-stay": ["dean","dent","eyes","seed","tyne"],
  "began-fixes": ["being","binge"],
  "agent-salsa": ["asset","atlas","gases","gates","gents","glass","lasts","natal","sages","salts","seats","slang","slant","slats"],
  "shoe-tags": ["gate","hose","oats","sage","shot","stag"],
  "abet-less": ["base","bass","beat","belt","beta","ease","east","eats","eels","lest","lets","seas","seat","stab","tabs","teas","tele"],
  "alert-blade": ["alter","dealt","delta","later","rebel"],
  "cedar-newer": ["cadre","cared","creed","ender"],
  "draw-week": ["dark","drek","wade","wake","ward","weed"],
  "straw-tells": ["aster","lasts","least","rates","sales","salts","seals","sears","sells","slate","slats","stale","stare","stars","steal","swear","swell","tales","tarts","tears","wares","warts","water","wears"],
  "slain-spine": ["aisle","lanes","leans","liens","nails","panes","pines","sepia","snail","snipe"],
  "arts-echo": ["acts","cash","cast","cats","coat","hero","rash","rats","rest","sect","star","tore","tsar"],
  "resin-trout": ["inset","intro","nitro","nurse","outer","reins","risen","rites","rouen","route","runes","runts","siren","stein","strut","sturt","tiers","tires","tries","trust","tunes","turns"],
  "cold-dish": ["clod","docs","loch","odds"],
  "clues-fears": ["acres","cease","cures","curls","curse","false","fares","fleas","laces","leafs","races","safer","scale","scare"],
  "know-then": ["knew","town","went"],
  "nag-old": ["ago"],
  "dock-gush": ["chug","dusk","hogs","hugs"],
  "rich-town": ["itch","twin","whit","worn"],
  "depot-stern": ["deter","ender","ester","noted","notes","onset","opens","pesto","poets","reset","seton","sneer","steer","stone","strep","terse","toned","tones","totes","trees","trend"],
  "shear-villa": ["aisle","alias","alive","arise","avail","hales","halls","halve","hares","heals","hears","leash","liars","liver","rails","raise","riles","rival","shall","share"],
  "swan-taxi": ["wait"],
  "fat-moo": ["mat","moa"],
  "spurn-stuck": ["runts","tucks"],
  "drops-hooks": ["shook"],
  "fame-pass": ["amps","apes","peas","saps"],
  "lamb-pure": ["balm","blur","burp","lame","lear","lure","male","meal","mule","pear","real","reap","rule"],
  "flow-tide": ["diet","fled","tied"],
  "ahead-rates": ["aster","death","eared","erase","hares","haste","hates","heard","hears","heats","heres","rated","saree","share","shear","sheer","stare","tears","trade","trash","tread"],
  "back-fast": ["bats","fats","stab","tabs"],
  "kill-rage": ["earl","gear","kale","leak","lear","like","real","rile"],
  "don-rap": ["and","nod","pod","pro","ran"],
  "food-runt": ["door","dour","fond","font","foot","odor","tofu","torn","toro","tour","turn"],
  "army-rope": ["mare","mayo","pear","pore","reap","repo"],
  "denim-tread": ["adder","amend","armed","dared","dined","dread","dream","edema","madre","merit","mined","mired","mitre","named","rated","remit","tamer","timer","tired","trade","tried"],
  "lord-soda": ["dosa","load","rods","soar"],
  "motto-wiser": ["merit","metro","mitre","moose","mores","omits","remit","storm","swore","timer","tower","trims","weirs","wires","worse","worst","wrist","write"],
  "land-once": ["cone","lace","lane","lean","neon"],
  "erase-slips": ["easel","isles","leaps","lease","pales","parse","pears","piers","piles","pleas","plies","sales","saree","seals","sears","slaps","spare","spear","spiel","spire"],
  "blabs-doors": ["boars","boobs","lords","odors"],
  "chant-takes": ["aches","cakes","chase","haste","hates","heats","skate","snack","stake","stank","steak","teach","theta"],
  "met-new": ["ten"],
  "nets-yard": ["ants","darn","dent","dyer","nerd","nest","rand","sent","stay","tens"],
  "flat-lady": ["tall"],
  "march-north": ["ranch"],
  "salty-votes": ["asset","lasts","loses","sales","salts","salve","seals","seats","slats","slave","slots","soles","solve","stats","stave","stove","volts","yeast"],
  "bird-eyes": ["bide","dire","dyer","ride","rise","sire"],
  "cyan-deep": ["acne","cane","dean","need","pace","peed"],
  "scrap-stage": ["acres","aster","cares","craps","gates","parts","pasta","races","rates","scare","stare","strap","tapas","tears"],
  "fares-sifts": ["farts","fears","fires","first","fists","fries","rafts","rifts","rises","safer","safes","serif","staff","stars","stirs","tiffs"],
  "tap-zag": ["pat"],
  "guild-slept": ["duels","guilt","lilts","pelts","setup","spelt","spilt","still","tells","tills","upset"],
  "saved-seeds": ["eased","eases","vases"],
  "duke-plan": ["dale","deal","land","lead","leap","pale","puke","punk"],
  "night-pests": ["gents","hints","nests","shins","ships","spits","stent","sting","stint","tents","tints"],
  "halls-hosts": ["halts","shalt","slash","slosh","sloth","stash"],
  "buys-kale": ["able","bale","bays","blue","busy","labs","lake","leak","slab","sulk"],
  "file-sole": ["isle","lies"],
  "draws-liars": ["raids"],
  "dint-soul": ["ludo","outs","suit","tons"],
  "been-fort": ["bone","fern","fete","fret"],
  "radio-taped": ["adder","adept","adore","dated","drape","dread","opera","padre","pared","rapid"],
  "firms-pride": ["drips","fermi","fried","prime"],
  "late-surf": ["earl","ears","east","eras","fast","fats","flat","lear","lure","real","rule","ruse","seat","sera","sure","tale","teal","teas","user"],
  "aced-nick": ["aide","cake","dine","idea"],
  "ether-trade": ["eared","eater","tater","teeth","terra","tetra","three","tread","treat"],
  "carts-rooms": ["ascot","coast","coats","moors","roast","roost","scoot","scram","tacos","torso"],
  "cash-cure": ["aces","acre","arch","care","case","char","cues","ecru"],
  "craft-snowy": ["croft","farts","fonts","forts","frost","rafts","straw","towns","wants","warts","yawns"],
  "mad-sax": ["ads","dam"],
  "gates-miner": ["anger","emits","grate","great","items","mates","means","meats","mensa","merit","mines","mites","mitre","ramen","range","reign","remit","singe","smite","stage","steam","tamer","tames","teams","timer","times"],
  "issue-ought": ["ghost","gusto","hoses","hosts","house","shoes","shots","sight","south","suits","tough"],
  "lamp-lots": ["last","lost","palm","plat","salt","slot"],
  "bawl-slip": ["awls","bail","blip","laws","lips","paws","sail","wasp"],
  "rings-speak": ["arise","grins","parse","peaks","pears","prank","rains","raise","sarin","signs","sings","snaps","spank","spans","spare"],
  "fatal-slink": ["alias","atlas","flail","kilns","links","nails","slain","slant","snail","stall","stank","talks","tanks"],
  "dawn-tied": ["ante","date","dean","died","diet","dine","edit","neat","tide","tine","wand","want","wind"],
  "shark-shown": ["shawn"],
  "add-won": ["and","now"],
  "mills-stork": ["kilos","milos","sills","silos","skill","slots","soils","sorts"],
  "dull-puts": ["plus","stud"],
  "nifty-tasks": ["nasty","skins","skits","stats","tasty","yanks"],
  "sent-vary": ["ants","arts","envy","nest","nets","rats","rays","star","tens","tsar","vent","very"],
  "does-mood": ["demo","dome","doom","dose","mode","moos"],
  "menus-toned": ["demon","donut","monde","noted","notes","omens","onset","seton","snout","stone","tense","tones","tuned","tunes"],
  "torch-viper": ["hover","other","prove","retro","river","their","trier","tripe","trope"],
  "feeds-tooth": ["dotes","steed","stood","toots","totes"],
  "day-sue": ["sea","use"],
  "genes-rival": ["align","angel","angle","earns","gains","gavel","glean","learn","lever","liang","liner","liver","nears","rains","ravel","raves","reins","resin","revel","rinse","risen","sarin","saver","serve","sever","singe","siren","snare","sneer","veers","verse","viral"],
  "drive-slide": ["devil","diver","dried","dries","evils","lives","sired","veils"],
  "each-film": ["ache","came","hale","heal","lame","lime","mace","male","meal","mile"],
  "fists-tiles": ["files","flies","flits","islet","sifts","stilt","tilts"],
  "bro-law": ["boa","orb"],
  "heats-waves": ["haste","hates","haves","waste"],
  "gases-might": ["emits","gates","items","mages","masse","mates","maths","meats","mites","sages","seams","semis","shams","sighs","smash","smite","smith","stage","steam","tames","teams","times"],
  "case-mask": ["aces","cask","mesa","seam"],
  "goof-norm": ["mono"],
  "bench-pasta": ["bates","beast","beats","capes","chaps","paces","paste","paths","scape","septa","space","spate","tapas","tapes"],
  "gang-used": ["dang","dues","eggs","gage","gnus","guns","snug","sued"],
  "clean-pills": ["calls","cline","laces","lance","lapis","lapse","leaps","pales","panel","penal","piles","plane","pleas","plies","scale","sepia","slice","spell","spiel","spill"],
  "knew-spin": ["pens","pins","sewn","snip","wink","wins"],
  "bed-kit": ["bid","bit"],
  "reds-talk": ["drek","lark","lars","last","lest","salt"],
  "bits-lied": ["deli","idle","isle","lies","slit"],
  "malls-reset": ["alert","alter","aster","earls","ester","laser","later","leers","males","masse","mates","meals","meats","meets","melts","metal","rates","reals","reels","seams","sears","seems","slams","smell","smelt","stare","steam","steer","tames","teams","tears","teems","terse"],
  "sport-tease": ["asset","aster","eases","erase","otter","parse","parts","paste","pasts","pears","pesos","pesto","poets","pores","ports","poser","poses","posse","prose","prost","rates","ropes","saree","seats","septa","spare","spate","spats","spear","spore","spots","stare","state","stops","store","strap","taper","tapes","taste","tater","tears","tetra","totes","traps","treat","trope"],
  "pile-teem": ["emit","item","limp","lite","meet","melt","mite","tele","tile"],
  "labs-pool": ["also","bops","loop","opal","polo","slab","soap","solo"],
  "live-rail": ["lair","rave","vale","veal","veil","vera","vile"],
  "cress-shore": ["ceres","cheer","chess","chore","chose","cores","crore","heres","heros","horse","hoses","ochre","roses","score","shoes","sores"],
  "lay-mow": ["awl","law","owl","yam"],
  "money-verge": ["emery","envoy","every","gnome","merge","reeve"],
  "hired-loses": ["heirs","heros","hires","horde","horse","hoses","isles","older","riled","riles","roles","shire","shoes","shore","slide","soles"],
  "even-that": ["heat","than","then"],
  "sauce-trace": ["acres","acute","cares","carte","cater","cures","curse","cuter","races","react","scare","truce"],
  "gaff-mini": ["amin","fang","main","mina"],
  "price-slots": ["clips","cores","corps","cries","crisp","crops","cross","islet","lists","plots","ports","prost","rites","score","scrip","slice","slits","sorts","spilt","split","sport","stirs","stole","store","strip","tiers","tiles","tires","tries","tripe","trope"],
  "acre-asks": ["arcs","cake","care","cask","ears","eras","race","sack","scar","sera"],
  "cave-pigs": ["cage","gasp","page","pave"],
  "slope-wheel": ["heels","helps","holes","hopes","lopes","peels","poles","polls","sheep","spell","whelp"],
  "outs-ward": ["draw","oats","ours","road","soar","sour","toad","wars"],
  "come-rock": ["cork","more"],
  "anger-blown": ["alone","angle","boner","bonne","borne","glare","glean","lager","large","noble","range","regal","rowan"],
  "name-tony": ["amen","ante","mane","mate","mean","meat","meta","neat","neon","none","omen","tame","team","tome","tone"],
  "aside-upset": ["aides","asset","eases","paste","pease","seats","septa","spade","spate","studs","suite","tapes"],
  "gods-pier": ["digs","dips","dogs","drip","drop","egos","ergo","goes","gore","grid","ogre","pies","pods","pore","prod","repo","ripe","rope"],
  "pants-tends": ["dents","spend","stent","tents"],
  "bat-hit": ["tab"],
  "beads-first": ["baits","based","bases","basis","bates","beast","beats","brits","drift","fades","fated","fates","feats","frets","rifts","safes","serfs"],
  "donor-omega": ["mango","moron","nomad","romeo","rondo"],
  "silk-very": ["elks","kris"],
  "shape-sworn": ["hares","heaps","hears","heros","horns","horse","pawns","phase","share","shear","shore","spawn","swear","swore","wares","wears","worse"],
  "knee-step": ["keen","pens","pest","pets","tees"],
  "fits-goat": ["fiat","fist","gist","sago","sofa","soft"],
  "kappa-refer": ["faker","freer"],
  "cheek-lacks": ["cakes","cease","easel","heels","laces","leaks","lease","scale","slack"],
  "ragu-rude": ["dear","gear","rage","read","urge"],
  "damn-wade": ["dame","dead","mead","wand"],
  "rebel-taste": ["aster","beret","betta","bleat","earls","erase","ester","laser","least","leers","rates","reals","reels","saree","slate","sleet","stale","stare","state","steal","steel","steer","tales","tears","tease","terse","trees"],
  "crane-surge": ["earns","gears","nears","rages","rance","runes","snare","urges","usage"],
  "acid-mask": ["dams","maid","maki","sack"],
  "blot-goof": ["bolt"],
  "links-outer": ["islet","kilns","liens","liner","lines","noise","rouen","tiles"],
  "part-spit": ["arts","pita","pits","rats","star","tarp","tsar"],
  "slash-touch": ["chaos","halts","latch","oaths","shalt","shout","slush"],
  "ban-yap": ["any"],
  "filed-monks": ["demon","denim","field","fiend","files","fined","fines","flies","limes","miles","mines","model","moles","monde","omens","slime","smile"],
  "chive-ruins": ["chins","urine"],
  "ally-vice": ["evil","lace","lacy","veil","vile"],
  "ages-rent": ["ante","ease","gate","nags","neat","rees","sage","sane","snag","tang","tern"],
  "dowel-ruler": ["lured","older","rowed","rower"],
  "farm-pull": ["fall","full","lamp","lump","plum","ramp"],
  "amend-rover": ["anode","drone","edema","erode","named"],
  "dock-iron": ["coin","noir","nori"],
  "each-fall": ["ache","calf","hale","heal"],
  "jelly-nodes": ["dense","lends","needy","nelly","nosed","snell"],
  "dibs-seat": ["beds","bets","bids","bits","date","debt","east","eats","said","seas","teas"],
  "blade-poets": ["abode","adobe","belts","blast","bleed","boast","boats","dopes","leapt","pedal","pelts","pesto","petal","plate","plead","pleat","slept","spelt","splat","table"],
  "enter-owned": ["donne","noted","owner","renew","tenor","toner","towed","tower","tweed","wrote"],
  "pair-tons": ["ants","pans","pons","porn","rant","roti","span","tori","torn","trio"],
  "acted-pores": ["acres","adore","arose","cadet","cadre","cared","caste","cedar","depot","pesto","poets","poser","prose","raced","races","roped","ropes","scare","spore"],
  "until-upper": ["erupt","lupin","prune","tulip"],
  "tap-ten": ["ant","pet","tan"],
  "hurt-oath": ["hart","hath","tour","tout"],
  "salsa-title": ["asset","atlas","isles","islet","latte","lisle","sails","sales","seals","seats","sites","slate","stale","state","steal","tales","taste","tiles"],
  "brake-risen": ["baker","beers","bikes","brees","reins","resin","siren","skier"],
  "cube-dish": ["cues","dies","dues","side","sued","used"],
  "bill-peel": ["bile","pill"],
  "tides-turns": ["duets","edits","rites","sited","tiers","tires","tries"],
  "theme-wider": ["ether","merit","mitre","remit","there","three","timer","tired","tried","weird","wired"],
  "land-role": ["darn","earl","lane","lean","lear","lone","lord","lore","near","noel","rand","real"],
  "dupe-tiny": ["dine","dune","tine","tune"],
  "not-top": ["opt"],
  "coast-hence": ["ascot","caste","cease","cents","coats","cones","haste","hates","heats","notch","oaths","scene","scent","sheen","shone","tacos","teach"],
  "fast-pick": ["fact","fats","fits","pact","past","pats","pits","sift","skip","spat","spit","taps","tips"],
  "skin-tags": ["anti","kiss","kits","knit","sang","sink","skis","snag","stag","tang"],
  "range-romps": ["anger","gamer","goner","marge","proms","ramps"],
  "calm-seed": ["aced","came","clam","lads","mace","mesa","same","seam","slam","sled"],
  "cross-singe": ["cores","goers","ogres","roses","score","signs","sings","sores"],
  "haven-lemur": ["harem","lumen","merle","mural","navel","ravel","realm","revel"],
  "dud-eel": ["dee"],
  "font-tear": ["fare","fate","fear","feat","fern","rate","rent","tate","tent","tern"],
  "cents-wills": ["cells","celts","swell","twins","wells"],
  "mess-twin": ["mine","nets","semi","sent","sets","site","tens","ties","tine","wits"],
  "boom-stop": ["moos","most","post","pots","spot","tops"],
  "fires-noble": ["enrol","flier","fries","liner","loner","reins","resin","rinse","risen","senor","serif","siren","snore"],
  "pass-ruby": ["bars","bras","bray","pays","pubs","rays","rubs","yaps"],
  "gosh-pipe": ["egos","goes","hips","hogs","hops","pies","pose","posh","ship","shop"],
  "hoped-rites": ["ethos","heist","hopes","piers","pores","poser","prose","roped","ropes","spire","spore","store","tiers","tired","tires","tried","tries"],
  "dry-tea": ["art","ate","eat","rat","try","yet"],
  "bolt-fund": ["blot","bold","bond","fond","font","loft"],
  "oils-riot": ["roti","tori"],
  "king-sets": ["gist","kits","ness","sign","sing","sins","sits","skin","skit"],
  "blank-great": ["baker","bleat","brake","brant","break","brent","grate","rabat","table"],
  "cores-gawky": ["acres","cares","corks","gears","goers","ogres","races","racks","rages","rocks","scare","score","wacky"],
  "modem-shale": ["demos","domes","hales","heals","leash","modes","molds"],
  "comic-sulks": ["clock","coils","colic","mocks","silos","soils","sulci"],
  "and-dog": ["ago","god"],
  "case-wrap": ["aces","caps","care","carp","paws","race","ware","warp","wasp","wear"],
  "arms-earl": ["alma","ears","eras","lama","lame","lear","male","meal","mesa","rams","same","seam","sera"],
  "agree-heels": ["eager","earls","easel","erase","gales","gears","glare","heres","lager","large","laser","lease","rages","reals","regal","saree"],
  "fuel-wild": ["feud","file","fill","life","will"],
  "fists-viral": ["fails","fairs","first","flair","flirt","flits","frail","lifts","rifts","silva","vials","visas"],
  "pleas-tanks": ["lapse","leaps","least","pales","peaks","skate","slant","slate","spank","speak","stake","stale","stank","steak","steal","tales"],
  "fact-node": ["acne","cafe","cane","deaf","dean","done","face","fade","once"],
  "exact-snail": ["alien","clans","clean","enact","nails","saint","satin","scant","slain","stain"],
  "bob-pin": ["bib","bin"],
  "files-smear": ["arise","fails","flier","flies","frail","frame","isles","liars","mares","masse","rails","raise","rifle","riles","sails","seams","slams"],
  "cats-sued": ["aced","aces","case","cast","cues","cuts","duct","dues","dust","seas","stud","uses"],
  "ports-roses": ["pesos","pores","poser","poses","posse","posts","prose","prost","sores","spore","sport","spots","stops"],
  "child-peace": ["cheap","clade","decal","laced","leach","paced","peach","pedal","piece","plead"],
  "boys-else": ["boss","eels","sobs"],
  "easy-weak": ["eyes","sake","sway","wake","ways"],
  "hints-hires": ["heirs","shire"],
  "feed-roof": ["deer","door","fore","free","odor","redo","reed","rode"],
  "cubs-puck": ["pubs"],
  "heart-stone": ["aster","erase","hater","neath","notes","onset","other","rates","saree","seton","stare","start","store","tarts","tears","thane","torts"],
  "sage-tire": ["ages","ears","eras","rate","rite","sera","sire","tear","tier"],
  "glass-roots": ["goats","roost","soars","torso"],
  "count-swore": ["court","euros","noose","roost","roots","rouse","snout","torso","tours","towns","worse"],
  "glen-kiss": ["legs","sing","sink","skin","skis"],
  "pros-yaps": ["pays","rosy"],
  "nerd-soft": ["feds","fend","font","reds","rent","rods","sort","tern","torn"],
  "baby-dale": ["able","ably","bale","bead","deal","lead"],
  "kid-now": ["don","nod","own","win","won"],
  "crude-think": ["chink","chunk","cider","cried","cured","inert","inter","nicer","niche","thine","thunk","tired","tried","tuner"],
  "kills-traps": ["lilts","parks","parts","spark","spilt","split","still","tails","tills"],
  "fade-sick": ["aces","case","cask","deaf","dies","face","kids","sack","side","skid"],
  "meet-spot": ["pest","pets","post","pots","step","stop","tees","temp","toes","tome"],
  "fines-shell": ["files","flesh","flies","heels","hells","isles","liens","lisle"],
  "farm-milk": ["firm"],
  "owed-runt": ["drew","rude","town","turn","udon","undo","unto"],
  "begin-trout": ["begun","being","bring","grunt","intro","nitro","orbit","robin","tinge","turbo"],
  "eyed-labs": ["base","bead","dale","deal","ease","lead","sale","seal","slab"],
  "horns-steer": ["ester","ether","heron","heros","nests","noses","rents","reset","rests","roses","senor","sheet","shone","shore","snore","sores","terse","there","these","three","trees"],
  "leap-pins": ["apes","lens","pale","peas","pens","sail","sale","seal","snip"],
  "align-every": ["angel","angle","early","elegy","glean","layer","learn","leary","liang","liner","nerve","never","raven","renal","riven","vegan"],
  "held-lone": ["doll","heel","hold","hone","noel"],
  "tide-till": ["edit","lite","tied","tile"],
  "draw-liar": ["arid","lair","raid"],
  "dead-near": ["dare","dear","earn"],
  "cheer-lasts": ["acres","alert","alter","cares","carte","carts","cases","caste","casts","cater","cease","chest","crate","earls","easel","heels","laser","lease","least","races","react","reals","sales","salts","scare","seals","slate","slats","stale","steal","tales","trace"],
  "age-yep": ["ape","pea"],
  "hats-stir": ["airs","arts","hair","hart","hast","rats","sari","sits","this","tsar"],
  "alias-small": ["amass","amiss","mails","malls","massa","mills","salsa","sills","slams"],
  "fair-solo": ["airs","also","foal","lars","loaf","rolf"],
  "coat-owns": ["caws","cons","onto","soon","town"],
  "ample-patty": ["amply","apple","aptly","leapt","maple","metal","petal","plate","playa","pleat","tempt"],
  "arson-cable": ["arose","bacon","banal","banco","clans","cores","earls","laces","laser","nasal","reals","score","scorn","snarl","sonar"],
  "boss-rare": ["bare","base","bass","bear","bore","bras","bros","ears","eras","rear","robe","sera","sobs","sore"],
  "tom-win": ["not","now","own","tin","ton","won"],
  "attic-poles": ["least","lopes","pelts","pesto","poets","polis","posit","slate","slept","slope","spelt","spilt","split","spoil","stale","state","steal","tacit","tails","taste","topic"],
  "glow-pray": ["gory","orgy","plow","ploy","poly","warp","wrap"],
  "pills-three": ["elite","helps","islet","lilts","peril","piers","piles","plies","rites","spiel","spire","still","there","tiers","tiles","tills","tires","tries"],
  "games-tight": ["emits","items","mages","mates","maths","matte","meats","mites","sight","smite","smith","stage","steam","tames","teams","times"],
  "drop-feet": ["dope","dote","fete","fret","peed","prod"],
  "deeds-suing": ["dense","dudes","dunes","edged","edges","genes","needs","nudes","nudge","seeds","sense","sides","singe","sinus","snide","using"],
  "dame-poet": ["demo","dome","dote","made","mead","mode","peat","tamp","tape"],
  "bury-tens": ["buns","nest","nuts","rest","rubs","rust","sent","stun","trey","tyne","tyre","yurt"],
  "bops-cafe": ["cape","caps","cope","cops","face"],
  "ads-sad": ["add"],
  "below-races": ["bales","bowel","cares","ceres","cores","earls","laser","leers","lobes","loser","lower","orcas","reals","reels","roles","sable","scare","score","solar"],
  "lined-rocks": ["cider","close","coder","cores","corks","credo","cried","cries","decor","diner","dolce","drink","kilns","licks","liens","lines","links","locks","olden","reins","resin","rinse","risen","score","senor","siren","slice","slink","snore"],
  "beat-soul": ["abet","able","also","bale","beta","blue","boat","east","eats","lube","oats","outs","sale","seat","teas","tube"],
  "ours-want": ["soar","sour","unto","wars","wart"],
  "angel-decks": ["angle","cakes","canes","cease","clank","clean","eagle","edges","glean","lance"],
  "melts-stool": ["loose","loses","moles","moose","smelt","soles","stole","tells","tolls","tomes","tools"],
  "lies-nope": ["isle","lips","lose","nose","ones","open","pine","pins","pole","pons","sine","slip","snip","sole","spin"],
  "keel-wear": ["lake","leak","leek","rake","reek","ware"],
  "are-elf": ["ear","era","ref"],
  "deaf-mint": ["date","dent","dint","fade","fame","fend","mate","meat","meta","tame","tend"],
  "glue-roof": ["euro","four","furl","golf","gulf","lore","lure","role","rolf"],
  "crate-slate": ["aster","carte","cater","rates","stale","stare","steal","tales","tears","trace"],
  "grams-plane": ["ample","angel","anger","angle","gamer","gleam","glean","maple","marge","palms","panel","penal","plans","psalm","ramps","slang"],
  "dork-life": ["dire","dirk","file","lore","redo","rile","rode","role"],
  "baton-solar": ["abort","banal","loans","rabat","roast","roost","roots","salon","santo","solon","tabor","torso"],
  "hags-lend": ["gals","glad","hens","land","lens","slag"],
  "ally-dibs": ["ably","bias","bids","lids","sail","slab","slid"],
  "bus-rid": ["bid","bud","sri","sub"],
  "rival-voter": ["liver","lover","overt","retro","river","rivet","trail","trial","trier","trove","valor","viral","volta"],
  "item-monk": ["emit","kite","mint","mite","oink","time"],
  "drum-fail": ["amid","dial","furl","laid","maid"],
  "pipes-torch": ["chirp","corps","crisp","crops","other","pesto","piers","poets","popes","porch","pores","poser","prose","rites","scrip","spire","spite","spore","stipe","store","their","tiers","tires","tries"],
  "eats-frog": ["east","fats","gate","gore","ogre","rest","rose","seat","sofa","sore","teas"],
  "enact-grows": ["acres","canes","cares","carte","cater","cones","conte","cores","crate","gowns","races","react","scare","scone","swear","swore","tower","trace","wanes","wares","water","wears","worse","wrote"],
  "alter-drops": ["alert","arose","aster","doers","doser","later","least","order","parts","plods","polar","rates","slate","splat","stale","stare","steal","strap","tales","tears","terra"],
  "devil-erase": ["aired","dales","dares","deals","diver","drive","earls","eased","easel","elves","laird","laser","leads","lease","lidar","lived","liver","reads","reals","saree","sever","veers","verse"],
  "bag-hat": ["tab"],
  "base-semi": ["aims","beam","bees","mesa","same","seam","seas","sees"],
  "host-isle": ["hole","holt","hose","lies","shes","shot","sits","slit"],
  "blows-truce": ["below","blocs","bowel","bower","bowls","brows","clots","colts","crust","cults","curbs","cuter","elbow","scrub","towel","tower","worst"],
  "chase-outer": ["aches","chest","crash","crust","cuter","ethos","horst","reach","route","sauce","short","those","tours","truce"],
  "flair-trout": ["fault","flout","frail","friar","trail","trial","tutor","ultra"],
  "knee-stat": ["ants","east","eats","keen","nets","sane","seat","seen","sent","tank","teas","tees","tens","test"],
  "balls-niece": ["bales","bills","canes","clans","clean","cline","label","lance","lanes","leans","libel","liens","sable","since"],
  "birds-toned": ["binds","boned","bones","bored","bores","bride","inset","noted","notes","onset","rites","robes","seton","sober","stein","stone","store","tiers","tires","tones","tried","tries"],
  "ark-tie": ["are","ear"],
  "leap-mean": ["amen","lane","lean","mane","plea"],
  "gifts-waves": ["swift","views","wives"],
  "cogs-gene": ["cone","cons","gone","snog","song"],
  "nicer-salon": ["acorn","acres","canes","canon","cares","crane","cries","earls","icons","lanes","laser","leans","liens","linen","liner","lines","lions","loans","loins","nance","orcas","races","rance","reals","renal","riles","scare","scion","since","solar","sonic"],
  "aided-carry": ["aired","array","cadre","cared","cedar","cider","cried","dairy","decay","diced","dicey","radar"],
  "ably-gunk": ["yuan"],
  "mixed-souls": ["douse","issue","mixes","mouse"],
  "idol-rate": ["aero","diet","edit","lord","redo","rode","tail","tear","tied"],
  "rush-teen": ["hers","huts","nest","nets","runs","sent","shut","stun","tens","thus","tune"],
  "new-two": ["eon","now","one","toe","won"],
  "logos-stein": ["glint","goons","inlet","inset","islet","lingo","noise","noose","notes","onset","seton","sites","stole","stone","tiles","tones","tongs"],
  "ample-raise": ["paler","parse","pearl","pears","spare","spear","sperm"],
  "blot-stem": ["belt","bolt","lest","lost","lots","most","slot","test"],
  "champ-rinse": ["aches","arise","chaps","chase","harem","hares","hears","miner","pairs","prima","raise","reins","resin","risen","share","shear","since","siren"],
  "east-wind": ["ante","dean","dies","dine","eats","neat","seat","side","site","swat","teas","tine","twin","wand","want","wits"],
  "beans-piled": ["abide","basin","blend","blind","panes","pease","peels","piles","plies","sepia","sleep","spiel"],
  "gear-oops": ["aero","pore","pose","prog","rage","repo","rope","sage","sago"],
  "film-tens": ["fins","lest","lets","list","melt","nest","nets","sent","slit","tins"],
  "alp-eye": ["aye","lap","pal","yap","yep"],
  "beam-foot": ["abet","beat","beta","boat","boot","fame","fate","feta","foam"],
  "dude-zone": ["done","dune","node"],
  "kicks-songs": ["kinks","signs","sings","sinks","skins"],
  "meets-notch": ["cents","chemo","cones","hence","notes","onset","scene","scent","scone","seton","stent","stone","teems","teens","tense","tents","theme","tomes","tones"],
  "acid-they": ["aced","yeah"],
  "gloat-scare": ["acres","algae","ascot","atlas","cares","carts","coats","cores","earls","glare","grace","lager","laser","loser","races","reals","regal","roles","score","tacos"],
  "basil-freak": ["baker","barks","basal","biker","break","brisk","faker","feral","flare","flier","frisk","liber","rifle"],
  "arts-ramp": ["arms","part","rams","rats","star","tarp","tsar"],
  "day-was": ["ads","saw","way"],
  "disc-lamb": ["balm","clam","dibs","labs","libs","limb","slab"],
  "swamp-truth": ["harms","hurst","hurts","marsh","parts","ramps","spurt","strap","thrum","tramp","traps","trash","whats"],
  "digit-roofs": ["foods","grift"],
  "cash-tiny": ["chin","hast","hats","hint","hits","inch","stay","than","thin"],
  "cogs-park": ["arcs","cars","cork","gasp","pork","pros","rack","raps","rasp","scar"],
  "fell-page": ["fall","feel","flea","flee","leaf","leap","pale","plea"],
  "angle-risks": ["agile","aisle","angel","glean","lanes","leans","riles","sails","skier","slang","sneak"],
  "order-tease": ["aster","doers","doser","eater","erode","rates","roars","stare","steed","tears","terra"],
  "dim-wok": ["mid","mod"],
  "dates-resin": ["aster","deans","dense","diets","earns","edits","enter","ester","inert","inter","nears","needs","rains","rates","reins","reset","rinse","risen","rises","rites","sarin","sears","seeds","sides","siren","sited","snare","sneer","snide","stade","stair","stare","stead","steed","steer","tears","terse","tides","tiers","train","trees","tries"],
  "aware-flash": ["false","feral","fleas","leafs","wafer","wharf"],
  "corn-wide": ["code","core","deco","dice","iced","owed","weir","wind","wire","wore","worn"],
  "fake-nick": ["acne","cane","face","nice"],
  "limit-moves": ["evils","limes","lives","loves","memos","milos","moles","motel","slime","smile","solve","veils"],
  "norm-test": ["nest","nets","rent","sent","stem","tens","term","tons","torn","tort","trot"],
  "bomb-dunk": ["bond","bunk","knob"],
  "inter-skins": ["inert","inset","kites","knits","nests","reins","rents","resin","rinse","sinks","siren","skier","skies","stein","stern"],
  "gods-silk": ["digs","diss","dogs","kids","loss","skid","slog"],
  "agile-meats": ["agate","aisle","emits","gleam","limes","males","mates","meals","miles","mites","slime","smile","smite","steam","tames","teams","times"],
  "blink-force": ["boner","frock"],
  "lose-wash": ["lash","owes","sale","shaw","sole","woes"],
  "canoe-fused": ["dance","fades","feuds","ocean","ounce"],
  "swath-twice": ["sweat","watch","whats"],
  "ago-odd": ["add","dog","god"],
  "bleat-lobby": ["alley","bally","bloat","table"],
  "flail-grown": ["align","final","flair","frail","frown","grain","groin","growl","infra","liang","lingo","wrong"],
  "dodo-nuts": ["dons","dots","duds","dust","nods","onto","stud","stun","tons","udon","undo"],
  "lamps-trial": ["alias","lapis","liars","palms","psalm","rails","smart","stair","stamp","trail","trams","trips"],
  "gird-lame": ["drag","earl","game","gear","grad","grid","lear","lime","male","meal","mile","real","rile"],
  "menus-nixes": ["minus","mixes","nines"],
  "fees-stat": ["east","eats","fast","fate","fats","feat","feet","feta","fete","seas","seat","sees","sets","teas","tees"],
  "stir-tone": ["eons","nest","nets","nose","note","ones","riot","roti","site","tens","tent","ties","tori","torn"],
  "gap-gun": ["gnu"],
  "queen-vague": ["venue"],
  "after-react": ["carer","carte","cater","crate","racer","trace"],
  "lion-move": ["evil","love","mono","veil","vile"],
  "bugs-such": ["cuss","hugs"],
  "diver-total": ["devil","drive","drove","lived","lotte","loved","otter","overt","rivet","tarot","tiled","tired","title","trait","triad","tried","trite","trove","valid","vital","volta"],
  "asset-pucks": ["acute","cases","casks","caste","cause","pests","sauce","seats","setup","specs","stack","steps","tacks","tasks"],
  "last-yelp": ["alps","laps","lest","lets","pals","play","salt","slap","stay","tall","yaps"],
  "army-lack": ["lacy","rack"],
  "hides-parry": ["drips","hades","hares","heads","heady","hears","heirs","hires","hydra","parse","payed","payer","pears","repay","shade","shard","share","shear","shire","spade","spare","spear","spied","spire"],
  "hop-row": ["how","pho"],
  "amen-void": ["amid","amin","dame","dove","made","main","mane","mead","mean","mina","name"],
  "rates-sharp": ["areas","ashes","asset","aster","hares","heaps","hears","paras","paste","phase","seats","septa","shape","share","spate","stare","stars","strap","taper","tapes","tears","traps"],
  "cling-props": ["corps","crisp","crops","plops","scorn","scrip"],
  "dunk-nope": ["done","dope","dune","dupe","neon","none","nude","open"],
  "fill-lout": ["flit","lift","loft","till","tofu","toll"],
  "nifty-talks": ["kilns","lanky","slant","slink","stalk","stilt","tilts"],
  "aids-deer": ["arid","dare","dear","dies","dire","ease","raid","reed","ride","said","seed"],
  "chunk-slash": ["clash","hacks","hanks","hunch","husks","khans","lacks","lunch","shack","shank","slack","slush","sulks"],
  "areas-kinds": ["aides","aside","dares","rakes","reads","saran","skied","snark"],
  "all-way": ["law","yaw"],
  "roles-world": ["dowel","loser","lowes","older","order","rolls","rowed","worse"],
  "lease-warns": ["earls","easel","lanes","laser","leans","learn","leers","nasal","reals","reels","renal","renew","sales","seals","sewer","snarl","swear","wanes","wares","wears"],
  "honk-item": ["emit","home","kite","knit","meth","mint","mite","time"],
  "lapse-waste": ["leaps","leapt","least","pales","petal","plate","pleat","sales","seals","slate","stale","steal","tales"],
  "hunt-nags": ["gnus","guns","gush","hags","hugs","nuns","sang","shun","snag","sung","tang","thug","tung"],
  "crest-meats": ["carts","cases","caste","crass","cress","masse","mates","matte","meets","scars","seams","smart","steam","tames","teams","teems","terms","trams"],
  "ape-arm": ["amp","are","era","mar","pea","ram"],
  "cent-lime": ["lent","lien","line","lint","mice","mile"],
  "dolly-sites": ["deity","diets","dilly","dolls","edits","isles","lists","loses","sills","sited","slide","slits","slots","soles","tides","toyed","yield","yodel"],
  "grow-lose": ["egos","ergo","goes","gore","lore","lows","owls","role","sole","wool"],
  "mean-text": ["amen","ante","mane","mate","meat","meta","name","neat","tame","tate"],
  "beers-glass": ["bases","bears","brees","gases","rages","saber","sabre","sages","serge","slabs"],
  "ponds-tails": ["lapis","plans","polis","slant","toils"],
  "beat-loop": ["abet","alto","beta","boat","late","loot","opal","pale","plea","pole","polo","pool","tale","teal","tool"],
  "adult-spell": ["dealt","dulls","ladle","lapel","leapt","pelts","petal","plate","pleat","slept","spelt"],
  "feeds-harsh": ["ashes","fades","hades","herds","safes","serfs","shade","shard","sheaf","shred"],
  "bus-mew": ["sub"],
  "eons-tiff": ["fife","fist","fits","foes","font","nose","ones","sift","sine","tins","tons"],
  "paper-vista": ["parse","parts","pears","piers","piper","raves","saver","sepia","spare","spear","spire","strap","strip","tapas","traps","trips"],
  "muted-rinse": ["denim","diner","durst","emits","items","menus","midst","minds","mined","mines","mites","reins","resin","rinds","risen","rites","runes","siren","smite","tiers","times","tired","tires","tried","tries","under"],
  "evil-wise": ["lies","live","veil","vile"],
  "edits-rents": ["dents","diets","rites","sited","stern","teens","tense","tides","tiers","tires"],
  "dish-ugly": ["guys","hugs"],
  "bars-cost": ["acts","arcs","bass","bats","bots","bras","brat","bros","cars","cast","cats","scar","scot","sobs","stab","tabs"],
  "one-saw": ["eon","now","was","won"],
  "keep-mall": ["kale","keel","lake","lame","lamp","leak","male","meal","peak","peek"],
  "funds-rainy": ["dairy","diary","fanny","rains","randy","ruins","runny","sarin","unify"],
  "arms-oven": ["earn","ears","eras","mars","near","rams","rose","sera","sore","vase"],
  "demon-pairs": ["adios","demos","diner","domes","dries","modes","monde","nadir","nomad","piano","piers","poise","raids","ramps","rides","ripen","sired","sperm","spire"],
  "aided-wrong": ["adder","adore","adorn","argon","dread","drown","grade","grand","groan","grown","orang","organ","radon","raged","rowed"],
  "edge-road": ["aero","dare","dear","gore","ogre","read"],
  "crane-hopes": ["canoe","cares","creep","crepe","hares","hears","ocean","ponce","races","rance","scare","scope","share","shear"],
  "giant-leave": ["alien","valet","vital"],
  "eel-was": ["awl","saw","sea"],
  "laser-sifts": ["earls","false","fares","farts","fears","feral","files","fires","first","fists","flare","flats","fleas","flier","flies","flirt","flits","fries","isles","lasts","leafs","lifts","rafts","reals","rifle","rifts","riles","rises","safes","sales","salts","seals","sears","serif","slats","slits","stars","stirs"],
  "nests-until": ["inlet","inset","issue","liens","sinus","stein","stent","stuns","suite","tents","units"],
  "fled-ship": ["dish","hips","lids","lips","sled","slid","slip"],
  "cook-plus": ["coos","lock","opus","soup"],
  "shack-spook": ["hacks","shock","shook"],
  "cold-late": ["clad","clod","doll","tale","teal"],
  "scale-stake": ["laces","least","skate","slate","stale","steak","steal","takes"],
  "macro-noble": ["acorn","amber","amble","baron","blame","bloom","boner","borne","boron","bream","camel","clone","colon","comer","crane","cream","crone","lance","rance","recon"],
  "dark-flow": ["ward","wolf"],
  "bop-out": ["bot","but","tub"],
  "mural-twins": ["runts","straw","sutra","swami","swarm","turns","ultra","units","until","waist","waits","warms","warts"],
  "into-tusk": ["ions","sink","skin","tons","tout"],
  "curve-poles": ["close","clove","cores","cover","cures","curse","elope","lopes","pores","poser","prose","pulse","puree","purse","ropes","rupee","score","slope","spore","super"],
  "doom-furl": ["dorm","form","foul","from","lord","loud","ludo","mood","rolf"],
  "agree-usage": ["eager","gears","rages","reuse","saree","surge","urges"],
  "lens-team": ["east","eats","lame","male","mate","meat","meta","nest","nets","sale","seal","seat","tame","teas","tens"],
  "glen-snow": ["glow","gown","lens","lows","owls","owns","sewn","slew","slow"],
  "nib-wow": ["bin","now","own","won"],
  "fobs-test": ["best","bots","sets","toss"],
  "mere-that": ["ahem","hate","heat","mate","meat","meta","tame","tate","team","term"],
  "cover-viral": ["carol","clove","coral","crore","liver","lover","relic","rival","rover","valor","vicar"],
  "till-wood": ["lilt","loot","told","toll","will","wool"],
  "arc-due": ["are","car","ear","red"],
  "fart-sold": ["arts","flat","fold","fort","frat","lads","last","loft","lost","lots","olds","raft","rats","rods","slot","sort","star","tsar"],
  "comfy-reads": ["cafes","dares","dorms","faces","fares","fears","foray","ready","roads","safer"],
  "diet-lift": ["lite","tide","tied","tile"],
  "depot-liner": ["diner","drone","ender","enrol","inlet","leper","loner","opted","pilot","pride","repel","roped","tepid","toned"],
  "been-snug": ["gnus","guns","nuns","sung"],
  "lotus-nippy": ["pints","plots","snout","spilt","split","units"],
  "node-wait": ["dean","done","into","wade"],
  "agent-veins": ["anise","eaten","evens","giant","seven","vines"],
  "hippo-hosts": ["hoist","hoops","shoot","shops","shots"],
  "and-its": ["ins","sin","sit"],
  "mason-suite": ["amino","asset","mates","meats","moans","saint","satin","seats","steam","stuns","tames","teams","units"],
  "dull-snap": ["dual","pans","saul","span"],
  "cores-swept": ["crews","crops","pesos","pesto","poets","ports","poses","posse","prost","roses","scope","score","screw","sores","sport","store","wrest"],
  "file-task": ["east","eats","flea","kits","late","life","lite","safe","seat","site","tale","talk","teal","teas","ties","tile"],
  "exile-pants": ["aisle","eaten","exits","lanes","lapis","leans","penal","pixel","plane","plans"],
  "amid-year": ["aide","amir","area","maid"],
  "china-lyric": ["chain","chair","cinch","cynic","inlay"],
  "hey-out": ["hut","toe"],
  "babe-lips": ["able","alps","bale","bile","labs","laps","leap","libs","pals","pile","plea","slab","slap","slip"],
  "foal-shop": ["also","fool","hops","lash","loaf","posh","soap","solo"],
  "ask-eye": ["aye","kay","key","sea"],
  "model-venom": ["delve","devel","loved","melon","modem","novel"],
  "does-sage": ["aged","ages","dogs","dose","egos","goes","seas"],
  "gang-ward": ["dang","dawn","draw","grad","wand"],
  "curse-folks": ["close","clues","cores","corks","cures","floss","forks","fuels","locks","rocks","score","surfs"],
  "able-lugs": ["bags","bale","bell","saul","slab","slug"],
  "shove-slope": ["lopes","poles","solve"],
  "mall-with": ["malt","mill","thaw","wall","what","whit","wilt"],
  "chick-ninth": ["chink","hitch","thick"],
  "ape-not": ["eon","pea","pen","tap","ton"],
  "great-slide": ["agile","agree","aisle","arise","aster","dries","eager","eagle","easel","erase","glide","grate","greed","lease","ledge","raise","rates","reeds","rides","saree","sired","slate","stair","stale","stare","steal","tails","tales","tears"],
  "acts-hulk": ["cast","cats","huts","lush","saul","shut","tack"],
  "other-roses": ["ethos","heros","rests","shore","sores","those"],
  "mined-seats": ["admit","aides","aside","asset","dates","denim","dense","dents","eased","eases","edema","ideas","mated","mates","meats","media","mines","mints","needs","sense","snide","stade","stead","steam","tamed","tames","teams","tends"],
  "flat-pony": ["atop","plat"],
  "mars-tarp": ["arms","arts","part","rams","star","trap","tsar"],
  "beta-hero": ["abet","bare","bear","beat","hare","hear","heat","robe"],
  "lime-soon": ["ions","mile","mole","semi"],
  "age-gym": ["aye","yam"],
  "caps-gunk": ["cans","cups","gaps","gasp","gnus","guns","pack","sang","scan","snag","snug","sung"],
  "posed-teams": ["dopes","dotes","mated","mates","meats","moats","pease","pesos","poses","posse","seeps","steam","steed","stems","tamed","tames","tease"],
  "chat-sour": ["arch","char","coat","hast","hats","huts","oats","ours","outs","rash","shut","soar","thus"],
  "free-meet": ["fete","fret","reef","teem","term"],
  "raced-skate": ["cadre","cared","carte","caste","cater","cease","cedar","creek","decks","drake","raked","react","stake","steak","taker","takes","trace"],
  "cigar-using": ["argus","ruins","suing"],
  "scan-yaks": ["cans","sank","yank"],
  "altar-three": ["alert","alter","earth","ether","hater","latte","teeth","there","theta"],
  "cooks-words": ["cords","rocks","sword","works"],
  "ass-hew": ["awe","hes","saw","sea"],
  "harm-pile": ["hale","hare","heal","hear","heir","lamp","leap","limp","pale","pear","pier","plea","ramp","reap","ripe"],
  "give-tops": ["pits","poet","post","pots","spit","spot","stop","tips","veto"],
  "hazel-rotor": ["alert","alter","altho","earth","hater","heart","later","lathe","loath","ortho","other","razer","retro","terra","torah"],
  "tool-unto": ["loot","otto"],
  "leaf-miss": ["fail","fame","flea","less","mesa","mess","sail","sale","same","seal","seam","sims"],
  "paint-rusty": ["artsy","pansy","pants","pasty","patsy","punts","rainy","rants","runts","start","strut","sturt","tarts","train","trait","trans","trays","trust","turns","yarns"],
  "chunk-trade": ["cadre","cared","cedar","crane","crank","cured","death","hated","neath","raced","rance","rated","thane","thunk","tread","trunk","tuner"],
  "newly-parts": ["entry","lawns","party","rants","rents","snarl","stern","strap","strep","swept","tawny","trans","traps"],
  "seeds-singe": ["dense","geese","genes","needs","sides","signs","sings","snide"],
  "guy-map": ["amp","gap","gay","may"],
  "legit-turns": ["gents","glens","lungs","riles","rites","runts","slung","stern","stung","tiers","tires","tries","trite"],
  "after-nixes": ["fates","feast","feats","inert","inset","irate","stein"],
  "chin-mode": ["code","coin","deco","dome","icon"],
  "ably-disk": ["bays","kids","skid"],
  "goals-prove": ["glare","grove","lager","large","logos","loops","paler","pearl","regal","sloop","spool"],
  "ashes-debit": ["baits","bases","basis","bates","beats","debts","haste","hates","heats","saith","sheds"],
  "also-mice": ["ciao","cola","lace","miso","sale","seal"],
  "lace-sums": ["aces","case","clue","cues","lame","mass","meal","mesa","mule","muse","same","seam","slam","slum"],
  "jolt-pets": ["jest","jets","pest","plot","post","pots","spot","step","stop","tops"],
  "claws-cruel": ["acres","cares","clear","cures","curse","laces","races","scale","scare","ulcer"],
  "agile-saved": ["aides","aisle","dials","eaves","ideas","salve","siege","slave"],
  "chef-skin": ["chin","hens","inch","nick","shin","sink"],
  "bases-cable": ["babel","babes","bales","cases","class","laces","sable","scale","slabs"],
  "acids-trees": ["arise","cease","dares","erase","ester","raids","raise","reset","rites","saree","steer","terse","tiers","tires","tries"],
  "ears-with": ["east","eats","eras","hare","hate","hear","heat","hire","rise","seat","sera","sire","site","teas","thaw","ties","wars","what","whit","wits"],
  "flee-list": ["feel","felt","fist","fits","lies","lite","self","sell","sift","slit","tell","tile"],
  "pipes-ranks": ["earns","nears","panes","parks","parse","pears","piers","pines","pinks","reins","resin","rinse","risen","siren","snare","snark","spank","spare","spear","spine","spire"],
  "soda-wife": ["aids","dies","does","dosa","dose","foes","owed","said","side"],
  "end-lot": ["den","doe","ten","toe"],
  "lord-rage": ["drag","earl","ergo","gale","gear","glad","gore","grad","lear","lore","ogre","real","rear","role"],
  "cache-plant": ["apnea","catch","cheap","lance","latch","leach","panel","peach","pecan","penal","plane"],
  "actor-homes": ["ascot","carte","caste","cater","chest","coast","coats","crate","cream","ethos","ortho","other","react","shoot","tacos","torch","trace"],
  "each-pole": ["ache","cape","chap","chop","cope","hale","heal","hole","leap","pace","pale"],
  "guns-team": ["ages","east","eats","game","gnus","mate","meta","nest","nets","nuts","sage","seat","sent","snug","stun","tame","teas","tens"],
  "ponds-terms": ["dents","drops","proms","romps","sperm","tends"],
  "keen-nope": ["knee","neon","open","peek","poke"],
  "drift-fines": ["dries","ferns","finds","fires","fries","nerds","refit","rides","riffs","serif","sired","snide","trend","tried"],
  "its-paw": ["sap","sit"],
  "diver-ruler": ["drive","lured","riled"],
  "arts-exit": ["airs","axis","rats","rest","rise","rite","sire","star","tart","taxi","tier","tire","tsar"],
  "eight-slash": ["hales","halts","heals","lasts","lathe","leash","least","saith","salts","shale","shalt","sighs","sight","slats","stale","steal","tales"],
  "fame-rack": ["acre","care","face","mare","race"],
  "feed-link": ["deli","fend","idle","keel","kiln","lend","lied","like"],
  "dance-verse": ["cadre","cared","carve","crave","creed","dares","deans","dense","evens","needs","raced","raves","reads","reeds","saver","sedan","serve","sever","veers"],
  "hand-took": ["hank","honk","hook","khan","knot","toad"],
  "noble-rinse": ["bones","bores","enrol","liber","liner","loner","nines","reins","resin","risen","robes","senor","siren","snore"],
  "bunt-very": ["bent","envy","ruby"],
  "bit-own": ["bin","ion","now","won"],
  "dude-nuts": ["duet","dune","dust","nude","stud","stun"],
  "lanky-meals": ["allay","alley","lakes","leaky","makes","males","nelly","snell"],
  "newer-tenor": ["renew","toner","tower","wrote"],
  "dies-kill": ["deli","dill","idle","lids","like","side","slid"],
  "crane-great": ["agree","anger","carat","carte","cater","crate","eager","genre","grant","grate","green","rance","trace"],
  "dish-rest": ["hers","shri"],
  "aides-sorry": ["arise","arose","aside","dairy","doses","ideas","raids","raise","rises","roads","roars","sides","sores"],
  "deal-know": ["dale","dawn","dole","lake","land","lead","leak","owed","wade","wake","wand","weak","woke"],
  "agog-seas": ["ages","egos","gaga","sage","sago"],
  "fix-nor": ["fir","fox"],
  "bawl-hulk": ["ball","bulk","hall","hull","lakh"],
  "queer-white": ["quite","threw"],
  "euro-hats": ["aero","ears","east","eats","eras","hast","hour","huts","rash","ruse","rush","seat","sera","shut","teas","thus","user"],
  "batch-genes": ["bates","bathe","beans","beast","beats","beets","beset","chang","stage"],
  "drove-swamp": ["armed","dream","madre","mares","mores","mowed","overs","proms","ramps","raves","saver","servo","smear","verso","vowed","waves"],
  "asks-lamb": ["balm","mass"],
  "lingo-wives": ["evils","liens","lines","lives","owing","sling","swine","veils","views","wines","wings"],
  "blab-leaf": ["able","bale","ball","flea"],
  "birth-flick": ["birch","firth","frith"],
  "bite-gush": ["bush","hubs","hugs","thug"],
  "acted-risks": ["aides","aside","cadet","cases","casks","caste","cress","crest","dries","ideas","rides","rises","rites","sired","skirt","stack","tacks","tiers","tired","tires","tries"],
  "legs-runs": ["lugs","slug"],
  "beard-count": ["abort","actor","bared","baton","board","bound","bread","broad","brute","cadre","canto","cared","carte","cater","cedar","court","crate","crude","cured","cuter","enact","raced","react","rebut","tabor","trace","truce","tuber"],
  "area-hint": ["hare","rant","rate","tear","thin"],
  "dad-don": ["add","nod"],
  "droid-swear": ["adder","dared","dares","dewar","dread","dried","drier","dries","reads","rears","rider","rides","riser","roars","sawed","sired","wares","wears","weirs","wider","wired","wires","wised","wiser"],
  "fart-held": ["dahl","flat","fled","frat","fret","halt","hart","herd","left","raft"],
  "loves-steam": ["asset","least","mates","meats","meets","metal","salvo","seats","slate","sleet","solve","stale","steel","tales","tames","teams","teems","vests"],
  "baron-given": ["anger","argon","brine","groan","groin","orang","organ","range","reign"],
  "came-such": ["aces","cash","cues","mace","mach","mash","mesa","muse","same","seam","sham"],
  "amend-rents": ["deter","ender","ester","mated","mates","means","meats","mensa","named","reset","senna","sneer","steam","steer","stern","tamed","tames","teams","tease","terms","terse","trees"],
  "blips-stout": ["bolus","bouts","lotus","plots","posts","slips","souls","spilt","spits","split","stops","suits","touts"],
  "desk-sins": ["disk","diss","ends","kids","kind","ness","sink","skid","skin","skis"],
  "into-rile": ["lien","lion","rent","riot","rite","roti","tern","tier","tine","tire","tori","torn"],
  "baa-ten": ["ant","ate","ben","eat","nab","net","tan"],
  "cards-woozy": ["cords","dowry","draws","rowdy","sword","wards","woody","words"],
  "teen-toss": ["nest","nets","sent","tees","tens","toes","tone","tons"],
  "rites-shale": ["aisle","arise","ashes","hales","hares","heals","hears","islet","leash","liars","lists","rails","raise","share","shear","sheet","sites","slash","slits","there","these","three","tiers","tiles","tires","tries"],
  "bald-grid": ["gird"],
  "crows-llama": ["alarm","calms","clams","claws","crams","macro","malls","molar","moral","small","walla","walls"],
  "alone-bumps": ["lamps","loans","manus","maple","noble","palms","psalm","pumas","salon"],
  "goal-idol": ["dial","glad","gold"],
  "booty-start": ["abort","artsy","batty","roast","roost","roots","stoat","story","stray","tabor","tarts","toast","toots","torso","torts","trays"],
  "awry-bias": ["airs","airy","sari","swab","wars","wary"],
  "age-tap": ["eat","get","pat","tea"],
  "gaff-sole": ["flag","foes","gale","lose","offs","sale","seal"],
  "arose-honks": ["heros","hooks","horse","nears","ranks","shone","shore","snare","snark","soars"],
  "joins-makes": ["minas","monks","smoke"],
  "knew-tool": ["know","lent","loot","newt","town","woke"],
  "done-yowl": ["node"],
  "alter-gifts": ["alert","false","feral","flare","fleas","grief","grift","irate","later","leafs","least","slate","stale","steal","tales","trait"],
  "cater-serve": ["aster","carer","carte","carve","crate","erase","erect","ester","racer","rates","raves","react","rears","reset","saree","saver","sever","stare","stave","tears","tease","terse","trace","trees","veers","verse"],
  "pops-rock": ["cork","pros"],
  "psalm-teeth": ["ample","halts","lamps","lathe","maple","melts","metal","palms","paths","shalt","smelt","stamp","temps","theta"],
  "lap-two": ["alp","low","pal","tap"],
  "glen-swig": ["lens","ling","news","sewn","wigs","wins"],
  "beds-envy": ["deny","eyed","seed","send"],
  "edits-plans": ["dates","deans","diets","islet","lanes","leans","least","liens","lines","sited","slate","snide","spilt","splat","stade","stale","stead","steal","tales","tides","tiles"],
  "slate-wrist": ["aster","isles","islet","lasts","least","lists","rates","rises","rites","sales","salts","seals","sears","slats","slits","stale","stare","stars","start","steal","stirs","straw","swear","tales","tarts","tears","tiers","tiles","tilts","tires","tries","wares","warts","water","weirs","wiles","wires","wiser","write"],
  "able-wide": ["aide","bale","bead"],
  "base-melt": ["able","bale","bats","bees","belt","bets","lame","malt","mast","mats","meal","mesa","same","seam","seem","stab","stem","tabs"],
  "abuse-oddly": ["based","beads","blade","buoys","dosed"],
  "bowel-setup": ["below","lotus","lowes","pesto","poets","sleet","spout","steel","steep","stole","sweep","weeps"],
  "cast-kind": ["acts","cats","dank","disk","kids","kits","knit","skid","skit","task"],
  "eye-wet": ["tee","wee","yew"],
  "aired-began": ["adage","arena","badge","bared","beard","begin","being","binge","braid","brain","bread","bride","brine","eared","naira","rabid"],
  "dimly-natal": ["madly","mayan"],
  "arts-sued": ["dare","dart","dear","dues","dust","ears","eras","read","reds","sera","star","stud","tsar","uses"],
  "dirt-seen": ["diet","dine","edit","need","rest","rind","sine","site","stir","tees","tide","tied"],
  "curly-vines": ["cries","cures","curls","lyric","since","veins"],
  "feta-hull": ["fate","feat","fell","felt","flea","hale","hate","haul","heal","hell","hula","leaf","left"],
  "clone-glade": ["angel","angle","clade","clean","decal","dolce","glean","laced"],
  "bleat-rises": ["alert","alter","arise","baits","bales","basis","bites","blast","bless","earls","irate","laser","later","leers","reals","reels","rites","sable","slabs","stair","table","tiers","tires","tries"],
  "dope-nick": ["cone","deco","dice","dock","iced","nice","nope","once","open","pine"],
  "mafia-wants": ["anima","fatwa","mains","manta","minas","swain"],
  "finds-nasty": ["fists","sandy","sifts"],
  "fits-yelp": ["fist","flip","sift","type"],
  "gives-value": ["eagle","evils","gales","guile","leave","liege","salve","slave","veils"],
  "clay-zone": ["cone","lace","lacy","zeal"],
  "cared-salts": ["acres","cadre","cares","carts","cedar","clade","dales","dares","darts","deals","decal","laced","laces","leads","races","reads","sales","scale","scare","seals","sears","slats","stars"],
  "chalk-poses": ["aches","chase","clash","cloak","coals","heaps","locks","pesos","phase","pokes","posse","shape","spoke"],
  "dare-edgy": ["aged","dear","deer","dyer","read","reed","year"],
  "intro-steel": ["elite","liner","nitro","notes","onset","senor","seton","sleet","snore","snort","stone","title","tones","torts","totes"],
  "free-sour": ["fore","four","rees","rose","ruse","sore","sure","user"],
  "crews-stalk": ["celts","lasts","salts","screw","slats","stews","talks","wests","wreck"],
  "jean-soil": ["also","ions","isle","lies","oils","sale","sane","sine"],
  "nicer-romps": ["cones","cores","cries","crisp","crone","crops","crore","mines","mores","omens","prism","proms","recon","scone","score","scrip","since"],
  "lever-today": ["alder","avert","deter","elder","lover","older","overt","rated","ravel","revel","toyed","trade","tread","trove","valor","yodel"],
  "key-say": ["kay"],
  "dork-prep": ["dope","drek","poke","pope","pork","prod","prop"],
  "ample-using": ["aisle","amine","anime","anise","gains","lapse","leaps","pales","panes","pangs","pleas","plugs","plume","pulse"],
  "cage-tale": ["late","teal"],
  "deaf-lilt": ["date","fade","fail","fell","fill","flea","late","leaf","tale","teal","tell","till"],
  "chaos-dream": ["aches","acres","armed","cares","chase","chemo","comer","cores","cream","dares","doers","doser","hades","heads","macho","macro","madre","mocha","orcas","races","reads","roads","sacra","scare","score","shade"],
  "aisle-cards": ["aides","aired","aside","cadre","cared","cedar","cider","class","clear","cried","discs","ideas","laces","liars","raced","rails","relic","sails","salsa","slice"],
  "calm-word": ["card","clad","clam","clod","cord","cram","draw","ward","worm"],
  "grog-rude": ["ergo","euro","gore"],
  "havoc-siren": ["acres","arson","cares","caves","chive","choir","cries","earns","haven","irons","nears","orcas","races","reach","reins","resin","rhino","rinse","risen","scare","snare","sonar","vices","vines"],
  "dog-pot": ["dot","opt"],
  "beer-miff": ["beef","bree","brie","firm"],
  "acts-sued": ["aced","aces","case","cast","dues","dust","secs","stud","uses"],
  "grape-ropes": ["arose","eager","gears","grasp","opera","pager","pores","poser","prose","rages","rears","spore"],
  "fines-slice": ["files","isles","seine"],
  "aged-flit": ["dale","deal","dial","felt","fled","gate","laid","late","left","lift","tail","tale","teal"],
  "photo-trace": ["actor","caper","carte","cater","cheap","crate","epoch","otter","pacer","peach","poach","pooch","react","recap","taper","tarot","tater","teach","tetra","theta","tooth","treat","trope"],
  "rank-some": ["earn","eons","mare","mask","mesa","more","near","ones","same","sane","sank","seam"],
  "from-root": ["foot","form","moor","toro"],
  "label-zesty": ["blaze","stall","style","tells"],
  "aid-nab": ["and","ban","bin","nib"],
  "bears-gnome": ["agree","anger","barns","beams","boner","bores","eager","gears","goers","goner","mages","ogres","rages","range","robes","saber","sabre","sober"],
  "euro-song": ["ergo","gnus","gore","guns","ogre","rugs","snog","snug","soon","sour","sung","urge"],
  "panda-wires": ["apnea","aware","dawns","draws","drips","panes","parse","pears","piers","pines","rapid","snipe","spare","spear","spire","swear","swine","wands","wanes","wards","wares","wears","weirs","winds","wines","wiser"],
  "arch-idea": ["aide","area","chad","char","hare","head","heir","hide","hire","rich"],
  "nest-pack": ["ants","cent","nets","pact","pats","peck","pest","pets","sank","sent","spat","step","taps","tens"],
  "atlas-scent": ["asset","canes","cases","caste","cents","clans","class","nests","salts","seats","slant","slats","state","stent","taste","tents"],
  "base-clan": ["aces","bale","bans","cans","case","lace","nabs"],
  "party-super": ["artsy","parse","parts","pasty","patsy","payer","pears","purse","rears","repay","spare","spear","spurt","strap","stray","traps","trays","upper","years"],
  "panel-split": ["lanes","lapel","leans","leapt","least","nails","pelts","penal","petal","pills","pints","plain","plane","plate","pleat","saint","satin","slain","slate","slept","snail","spelt","spent","spill","spilt","stain","stale","steal","tails","tales"],
  "tin-ups": ["nit","sit"],
  "prep-what": ["part","path","tarp","thaw","warp","wart","wrap"],
  "curse-grill": ["cries","cures","curls","gruel","guile","guise","luger","relic","sulci","surge","ulcer","urges"],
  "tidy-yaps": ["past","pats","pays","pits","spat","spit","taps","tips"],
  "tern-true": ["rent","runt","tune"],
  "full-king": ["fill","gunk","kill","kiln"],
  "buys-kegs": ["begs","busy"],
  "acted-horse": ["acres","adore","arose","cadet","cadre","cards","cared","cares","caste","cedar","cheer","chest","ethos","heros","horde","races","roads","scare","shore","toads"],
  "limit-saves": ["amiss","emits","evils","items","limes","lives","mails","masse","mates","meals","meats","metal","miles","mites","salve","seams","semis","silva","slave","slime","smile","smite","stave","steam","tames","teams","times","valet","vases","veils","vials","visas","vista","vital"],
  "bro-emu": ["emo","orb","ore","rob","rub"],
  "menu-ties": ["nest","nets","semi","sent","site","tees","tens","tins","tune"],
  "bowls-stein": ["belts","bites","blows","inset","lobes","loses","noble","noise","slows","soles","twins"],
  "cafe-thin": ["anti","cain","chef","chin","face","fate","feat","hint"],
  "lame-vote": ["late","male","meal","mole","teal","veto"],
  "macro-slide": ["acres","adios","aides","aimed","arise","aside","cares","clods","colds","ideas","media","moira","orcas","races","raise","riles","scare","scold","solid"],
  "ghee-send": ["edge","ends","hens","seed","seen"],
  "sleep-thugs": ["gluts","peels","pulse","sheep","sleet","slugs","steel","these"],
  "heir-plod": ["dope","hero","hide","hire","pore","repo","ripe","rope"],
  "corps-lapse": ["acres","apple","caper","capes","cares","cores","craps","crass","crops","cross","earls","laser","leaps","lopes","loser","pacer","paces","paler","pales","pearl","pleas","poles","races","reals","recap","roles","scape","scars","scope","score","scrap","slaps","slope","space"],
  "ago-art": ["rat","tar"],
  "laugh-tones": ["angst","ghoul","gusto","haute","leans","longs","lough","louse","neath","notes","onset","ought","seton","slang","stone","thane","thong","tongs"],
  "died-earl": ["dale","dead","deal","dear","deli","dire","idle","lead","lear","read","real","ride","rile"],
  "liner-naive": ["learn","liven","navel","renal","rival","viral"],
  "rate-ribs": ["arts","bare","bear","bras","brie","rats","rite","star","stir","tear","tier","tsar"],
  "fresh-glued": ["defer","dregs","drugs","flesh","freed","ledge","shelf","shrug","urged"],
  "range-salty": ["alert","alter","anger","angry","gales","glare","lager","later","least","regal","slate","stale","steal","tales"],
  "safer-tacos": ["acres","actor","after","ascot","cares","carte","cases","caste","cater","coats","crate","fares","fates","feast","feats","orcas","races","react","safes","scare","sofas","trace"],
  "fast-need": ["ante","ants","deaf","dean","ends","fate","fats","feat","feds","feed","feet","feta","fete","neat","nest","sand","send","sent","teen","tens"],
  "elf-fog": ["ego","gel"],
  "foot-lift": ["flit","loft","loot"],
  "earns-trawl": ["natal","nears","rants","renal","snare","swear","trans","wares","warts","wears"],
  "lotus-rinse": ["islet","liens","lines","lists","outer","reins","resin","risen","rites","rouen","route","ruins","senor","siren","slits","snore","sorts","stirs","stole","store","tiers","tiles","tires","tours","tries"],
  "alley-verbs": ["bales","bally","bears","earls","early","easel","elves","erase","laser","layer","leary","lease","reals","relay","saber","sable","sabre","saree","serve","sever","veers","verse"],
  "runt-sour": ["nuts","ours","outs","stun","tons","torn","turn"],
  "edit-nags": ["anti","dies","diet","gate","sage","sang","side","snag","tang","tide","tied"],
  "hates-later": ["alert","alter","earth","haste","hater","heats","slate","stale","steal","tales"],
  "mad-she": ["dam","hes","sad","sea"],
  "bluff-start": ["farts","flats","rafts","strut","stuff","sturt","tarts","trust","tufts"],
  "saps-toes": ["east","eats","pass","past","pats","post","pots","seat","spat","stop","taps","teas","tops"],
  "cups-tick": ["pics","pits","puck","puts","spit","tips","tuck"],
  "caste-rebel": ["aster","beret","cease","celeb","celts","earls","erase","ester","laces","laser","leers","rates","reals","reels","saree","scale","stare","steer","tears","terse","trees"],
  "delay-salon": ["laden","lanes","leans","loans","olden"],
  "duke-ends": ["dude","dues","dusk","keen","need","send","sued","used"],
  "donor-waist": ["adorn","radon","raids","rondo","rowan","stand","sworn","waits","wants","warns"],
  "neon-skit": ["eons","kits","knit","knot","nine","none","nose","ones","sine","site","skin","ties","tine","toes","tone"],
  "dense-karma": ["amend","armed","dares","deans","drama","dream","knees","madre","named","needs","rakes","reads","reeds","reeks","snake","sneak"],
  "eye-rot": ["toe","try"],
  "third-weigh": ["eight","their","tired","tried","wider","wired"],
  "anger-toils": ["anise","gents","inert","inset","largo","nails","range","slain","slang","snail","stein"],
  "down-fell": ["doll","flew","flow","lewd","weld"],
  "cough-shuts": ["hutch","scout","shout","touch"],
  "come-rare": ["acre","came","care","core","mace","mare","rear"],
  "false-print": ["faint","finer","fires","flats","fleas","fries","infer","lapse","leafs","leaps","paint","pales","panel","penal","piers","plant","pleas","rifts","ripen","sepia","serif","spire","splat","strip","trips"],
  "bight-intro": ["britt","groin","night","nitro"],
  "dale-many": ["amen","deal","dean","lame","lead","male","mane","meal","mean"],
  "guy-war": ["gay","rag","raw","way"],
  "left-soap": ["alto","apes","east","eats","felt","flop","late","loft","oats","opal","pale","peas","plea","seat","tale","teal","teas"],
  "army-tape": ["mare","meat","meta","pear","peat","reap","tame","team","term"],
  "diets-parry": ["dares","darts","dates","deity","dirty","dries","edits","parse","parts","party","paste","payer","pears","piers","piety","reads","repay","rides","septa","sired","sited","spare","spate","spear","spire","spite","stade","stead","stipe","strap","strip","tapes","tardy","tides","traps"],
  "opera-sulks": ["euros","parse","peaks","pears","pokes","polar","pores","poser","press","prose","ropes","rouse","slurs","spare","speak","spear","spoke","spore"],
  "sees-yard": ["dyer","eyed","eyes","rays","seas","seed"],
  "cries-spend": ["ceres","cider","cried","dries","epics","nerds","reeds","rides","rinds","rises","seeps","sired","snips","speed","spice","spied","spies"],
  "oops-sack": ["cask","coos","saps","soap","sock"],
  "close-treat": ["carte","cater","celts","ceres","clots","colts","cores","crate","crest","eater","ester","latte","react","reset","score","sleet","steer","stole","store","tarot","tater","terse","tetra","torts","total","trace","trees"],
  "nap-yes": ["pan","pay","yap","yep"],
  "flats-sweet": ["false","feels","fetal","fleas","flees","lasts","leafs","least","sales","salts","seals","slate","slats","sleet","stale","steal","steel","stews","sweat","tales","wafts","waste","watts","wests"],
  "gnaw-then": ["than","thaw","want","went","what"],
  "crack-tribe": ["biter","brace","carte","cater","crick","react","trace","track","trick"],
  "caps-heel": ["aces","clap","hale","heal","lace","shea","spec"],
  "spicy-truth": ["chips","crush","hurst","hurts","putty","shirt","tipsy"],
  "bush-cute": ["cues","hubs"],
  "basil-wrote": ["bates","beast","beats","blast","bloat","sweat","swirl","tower","weirs","wires","wiser","wrest"],
  "koala-rifle": ["flair","flier","frail"],
  "ink-sax": ["kin"],
  "bull-camp": ["ball","balm","calm","clam","clap","lamb"],
  "node-zone": ["done","neon"],
  "board-tenor": ["abode","adobe","bared","barre","beard","boned","boner","borne","boron","bread","broad","rated","terra","toned","toner","trade","tread","trend"],
  "loud-rain": ["arid","dial","dual","idol","iron","laid","lion","ludo","luna","noir","nori","raid"],
  "class-mourn": ["acorn","clans","manor","moans","orcas","roman","scour","slams","slums"],
  "dealt-rival": ["alert","avert","delta","ladle","later","ravel","tiara","tidal","trail","trial","viral"],
  "dibs-pile": ["bids","deli","idle","lids","lied","slid","slip"],
  "grip-sand": ["aids","dang","grid","pang","pans","rips","said","span"],
  "loose-pagan": ["agape","along","gales","loans","longs","pages","pangs","salon","slang","snoop","solon"],
  "all-wow": ["awl","low"],
  "shaky-wraps": ["prays","spray"],
  "grog-wise": ["ergo","gigs","gore","grow","wigs","wore"],
  "drew-wing": ["ding","wide"],
  "pasta-stern": ["areas","aster","earns","nears","paras","parts","rates","rents","snare","stars","state","stats","stent","strap","tapas","taper","taste","tears","tents","traps"],
  "sigh-toss": ["gist","hits","hogs","host","shot","this"],
  "pools-shine": ["holes","loops","loose","noise","noose","polis","shins","shone","silos","sloop","slosh","snoop","solos","spoil","spool","spoon"],
  "elm-ewe": ["mel","wee"],
  "elder-unite": ["elude","ender","inert","inter","lured","ruled","trend","tuned","urine"],
  "mood-weak": ["dame","demo","dome","doom","made","make","mead","mode","wade","wake","woke","wood"],
  "spit-year": ["east","eats","eras","past","pats","pits","pray","raps","rasp","rips","rise","seat","sera","sire","site","spat","taps","teas","ties","tips","yeti"],
  "truce-yells": ["celts","crust","cuter","tells"],
  "bilge-gross": ["bores","goers","grogs","ogres","robes","sober"],
  "care-vice": ["acre","race","rave","vera"],
  "aging-cites": ["angst","gains","giant","saint","satin","stage","stain"],
  "this-unto": ["hits","huts","nuts","shut","stun","tins"],
  "surf-taco": ["coat","fart","frat","raft","soar","sour","tour","turf"],
  "bet-raw": ["art","bat","rat","tab","war"],
  "golf-seat": ["east","eats","gate","lest","lets","lost","lots","oats","safe","slot","sofa","teas","toga"],
  "hint-keys": ["hens","knit","shin","sink","then","thin"],
  "field-trade": ["alert","alter","defer","deter","elite","fared","feral","filed","flare","later","rated","tiled","tread"],
  "edit-menu": ["dent","diet","dune","emit","mite","teen","tend","tide","tied","time"],
  "note-snip": ["nest","nets","pins","post","pots","sent","sine","spin","spot","tens","toes","tone","tops"],
  "hosts-wince": ["chins","ethos","heist","hints","niche","shots","thine","those","towns","twine"],
  "fire-silk": ["file","isle","kris","lies","rife","rise","sire"],
  "fifty-sorts": ["first","fists","forts","frost","rifts","stiff","stirs","story","tiffs"],
  "chart-feast": ["after","carte","caste","cater","chats","crate","fates","feats","trace"],
  "era-mud": ["are","ear","mar","ram","red"],
  "maid-used": ["dame","dues","made","mead"],
  "alert-shoes": ["alter","earls","earth","easel","ethos","hares","hater","hears","horst","hoses","laser","later","lease","reals","share","shear","sheet","short","sleet","solar","soles","steel","stole","these","those","torah"],
  "ridge-rusty": ["rites","tiers","tired","tires","tried","tries","urged","urges"],
  "bugs-hope": ["gobs","gosh","gush","hogs","hops","hugs","posh","pubs","push","shop"],
  "dull-ergo": ["gore","lore","loud","ludo","ogre","role"],
  "crisp-wheat": ["caper","carte","cater","cheat","chest","chips","crate","crest","pacer","peach","react","recap","scrip","teach","trace","water","whips","wrest"],
  "nasty-topic": ["coins","icons","noisy","optic","panic","panty","potty","scant","scion","stoic","stony","tasty"],
  "obey-odds": ["dose"],
  "eat-gin": ["ate","tag","tea"],
  "slate-stain": ["aisle","least","nails","saint","satin","slant","snail","stale","steal","tales","taste"],
  "melt-trip": ["emit","item","mite","time"],
  "rate-seen": ["ants","earn","east","eats","near","nest","nets","rant","rent","sane","seat","sent","tear","teas","tees","tens","tree"],
  "model-vegan": ["amend","among","delve","devel","devon","gleam","glove","gnome","golem","loved","mango","medal","modal","monde","named","nomad"],
  "scoop-shore": ["corps","crops","heros","horse","score"],
  "nerve-rests": ["enter","ester","evens","nests","never","reset","seven","sever","steer","stern","teens","tense","terse","trees","veers","verse"],
  "hers-must": ["huts","rush","shes","shut","stem","sums","term","thus"],
  "even-swig": ["sewn","vein","vine","wigs","wine","wins"],
  "nor-wed": ["don","end","nod"],
  "dinky-liars": ["dairy","kilns","kinds","raids","rails","rinds","slink"],
  "atoms-clear": ["aorta","ascot","carol","carte","caste","cater","coals","coast","coats","coral","crate","laces","mates","meals","meats","moats","molar","moral","react","realm","scale","steam","tacos","tamer","tames","teams","trace"],
  "fire-lilt": ["file","flit","life","rife","rift","till"],
  "lion-type": ["only","pile","pint"],
  "good-talk": ["gold","toad","told"],
  "nun-pod": ["don"],
  "apple-romps": ["ample","lamps","morel","palms","proms","psalm"],
  "call-like": ["cake","kale","lack","lake","leak","lice","lick"],
  "lamb-pair": ["balm","lair","liar","rail"],
  "blank-child": ["bland","blink","chink","clank","clink"],
  "dingo-trace": ["actor","cadre","cared","carte","cater","cedar","crate","doing","gator","grade","grate","great","raged","react","tinge","tonic"],
  "nine-sort": ["eons","none","nose","ones","rein","rise","rose","sine","sire","sore","tins","tons","torn"],
  "king-lets": ["kits","lens","lest","ling","list","sink","skin","slit"],
  "casts-label": ["bales","cable","cases","laces","lasts","sable","sales","salts","seals","slats","stall"],
  "plod-trek": ["drop","pork","prod"],
  "elf-pea": ["ape","lap","pal"],
  "clue-rack": ["care","lure","lurk","race","rule"],
  "frost-gains": ["first","forts","front","giant","goats","grins","grist","grits","rifts","rings","sofas","tango"],
  "snow-what": ["ants","hast","hats","host","owns","shaw","shot","show","swan","thaw","tons","want"],
  "bond-seat": ["abet","bead","beat","bend","bent","beta","dons","dosa","east","eats","ends","nest","nets","nods","oats","sent","soda","teas","tens","tons"],
  "scrap-swamp": ["craps","scamp"],
  "came-sick": ["aces","case","mace","mack","mask","mesa","sack","same","seam","semi","skim"],
  "dies-rare": ["dare","dear","dire","eras","read","rear","rise","sera","side","sire"],
  "delay-rival": ["daily","early","ladle","leary","ravel","relay","viral"],
  "bread-genes": ["bared","barns","beard","bears","beers","brand","breed","brees","gears","geese","grade","grand","raged","rages","saber","sabre","serge"],
  "halls-yeast": ["ashes","assay","essay","hales","halts","haste","hates","heals","heats","hells","lathe","satay","shale","shall","shalt","shell","slash","style","tally","telly","yells"],
  "loses-shape": ["hales","heals","heaps","heels","helps","leash","lopes","pesos","phase","poles","poses","posse","shale","soaps","soles"],
  "arch-sums": ["arcs","cars","char","cuss","harm","mars","rams","scar"],
  "room-runs": ["moor","sour"],
  "steep-storm": ["pesto","poets","prost","sport","strep","teems","terms","tomes"],
  "door-hell": ["dole","hole","lord","odor","redo","rode"],
  "acted-erase": ["areas","aster","cadet","caste","dares","darts","deter","eared","eater","ester","rates","reads","reset","saree","stare","steer","tears","terse","trade","tread","trees"],
  "ivory-notes": ["noose","onset","ovens","seton","snort","stone","tones","trois","vents","visor"],
  "nib-wok": ["bin","ink"],
  "disc-slam": ["acid","aims","amid","maid","sims"],
  "amen-site": ["mane","mate","mean","meat","meta","name","sine","stem","tame","team","ties","tins"],
  "drone-spins": ["diner","opens","pines","reins","resin","rinds","risen","senor","siren","snipe","snips","snore","spine"],
  "owed-tins": ["diet","dint","down","edit","ions","owes","site","snow","stew","tide","ties","west","woes"],
  "corgi-winds": ["cords","downs","gowns","grows","owing","swing","wings","words"],
  "draw-epic": ["acre","cape","care","pace","race","rice","ward","ware","wear","weir","wire"],
  "mines-tally": ["inset","islet","least","lilts","limes","males","malls","meals","means","mensa","miles","mills","names","slant","slate","slime","small","smile","stale","stall","steal","stein","still","tales","tills"],
  "cage-eons": ["acne","cane","cans","cogs","cone","cons","egos","goes","nose","ones","sage","sane","scan"],
  "enter-value": ["avert","eater","event","ravel"],
  "pal-toy": ["alp","alt","lap","lop","pay"],
  "risky-start": ["skits","stair","stirs","stray","tarts","trays"],
  "cries-hooks": ["cores","corks","heirs","heros","horse","rocks","score","shire","shirk","shook","shore"],
  "knee-this": ["hits","keen","nest","sent","sink","skin","teen","tens","tine","tins"],
  "sulk-wait": ["last","lust","salt","slut"],
  "agile-poles": ["elope","gales","legal","lopes","poise","polis","polls","slope"],
  "knit-loop": ["knot","lint","loot","polo","pool","took"],
  "cash-gift": ["acts","cast","cats","gist","hags","stag","tags"],
  "anger-snail": ["align","angel","angle","earns","glean","glens","grain","grins","lanes","leans","liang","nails","naira","nears","rains","range","rings","sarin","slain","snare"],
  "dock-ends": ["coke","docs","does","dose","send"],
  "ran-rue": ["ear","era","run"],
  "dale-heat": ["date","deal","hale","halt","hate","heal","lead"],
  "mini-toes": ["site","some","ties","tins","tons"],
  "lifts-nasal": ["fails","flail","flats","flint","flits","lasts","lilts","lists","nails","sails","salsa","slain","slant","slats","slits","snail","stall","still","tills"],
  "bath-will": ["bill","blah","thaw","wall","what","whit","wilt"],
  "gear-skin": ["eras","kris","rage","rise","risk","sane","sank","sera","sine","sink","sire"],
  "drama-stale": ["alder","dealt","delta","dream","earls","laser","least","madre","mares","mated","mates","meats","reals","slate","smear","steal","steam","tales","tamed","tames","teams"],
  "acts-over": ["aces","acre","care","cart","case","cast","cats","cost","race","rave","rove","save","scot","vase","vera"],
  "edits-grade": ["aster","dares","diets","drags","dries","eared","eater","gated","grads","grate","great","grids","grist","grits","raged","rates","reads","rides","rites","sided","sired","sited","stade","stare","stead","tears","tides","tiers","tiger","tires","tries"],
  "owl-pot": ["low","opt","too","top"],
  "fret-pony": ["poet"],
  "tower-viper": ["tripe","trope","wrote"],
  "boom-slap": ["alps","balm","laps","moos","pals","slam","soap","soma"],
  "green-quips": ["genre","guise","reign","serge"],
  "daily-taped": ["adept","laity","payed","tidal"],
  "nerd-wins": ["drew","sewn","wind"],
  "fools-slick": ["cooks","fills","flick","foils","kills","kilos","licks","locks","looks","sills","silos","skill","solos"],
  "clean-sheep": ["cheap","heaps","lance","lanes","leans","leaps","pales","peach","peels","phase","place","pleas","shape","sheen","sleep"],
  "hint-went": ["newt","thin"],
  "paw-rid": ["pad","raw"],
  "hair-loud": ["dial","dual","idol","lair","liar","ludo","rail"],
  "canny-rouge": ["anger","argue","auger","goner","nance","nancy","range","rogue","rouen"],
  "mild-tarp": ["dart","lamp","limp","part","plat","ramp","trap","trip"],
  "fish-rule": ["fuel","fuse","life","lure","rile","rise","ruse","shri","sire","sure","user"],
  "tease-worst": ["ester","reset","sewer","state","steer","stoat","swore","taste","terse","toast","torts","trees","waste","worse","wrest"],
  "marks-sigma": ["karma","magma","smirk"],
  "bulk-nice": ["bile","blue","buck","kiln","lien","line","lube","nick"],
  "photo-reads": ["adore","aster","dares","doers","dopes","doser","hoard","horst","ortho","paste","pesto","poets","posed","rates","septa","shard","short","spade","spate","stare","store","tapes","tears","torah","trash"],
  "argue-later": ["agree","alert","alter","auger","eagle","eater","glare","gruel","lager","large","leger","luger","rager","regal","terra"],
  "crams-trees": ["acres","aster","ceres","ester","races","rates","reset","scare","scram","smart","stare","steer","tears","terse","trams"],
  "rock-soft": ["cork","fort","scot","sock"],
  "acre-wide": ["aced","aide","care","race","weir","wire"],
  "cutie-short": ["chore","court","cuter","euros","heist","heros","hoist","horse","horst","ochre","rouse","shore","strut","sturt","suite","torch","truce","trust"],
  "brace-spike": ["acres","baker","biker","break","capes","cares","cries","epics","paces","peaks","pikes","races","rakes","scape","scare","skier","space","speak"],
  "arts-lone": ["lost","lots","near","noel","oats","rate","rats","star","tear","tsar"],
  "belt-tail": ["bail","ball","bell","bile","bite","lite","tall","tile"],
  "bagel-sales": ["bales","gable","gales","sable","sages","seals"],
  "monk-owed": ["dome","down","mode","nook","woke"],
  "boy-web": ["bow","bye","yob"],
  "east-hunt": ["ante","eats","hast","hats","huts","seat","teas","than","thus","tune"],
  "cake-reef": ["face","fare","fear","free","rake"],
  "areas-midst": ["aster","darts","emits","items","maids","mares","mites","rates","semis","smear","smite","stare","tamer","tears","terms","times"],
  "game-tiff": ["emit","fate","feat","feta","item","mate","meat","meta","mite","tame","team"],
  "airy-goal": ["girl","gory","lair","oral","orgy","rail"],
  "fifth-lists": ["fists","flits","lifts","shift","slits","stiff","tiffs"],
  "owner-skits": ["skier","skies","skirt","towns","weirs","wires","wrist"],
  "madam-novel": ["amend","demon","laden","maven","medal","modal","model","monde","named","navel","nomad","olden","venom"],
  "aside-lanky": ["aides","ankle","daily","daisy","deans","ideal","ideas","laden","lends","likes","sedan","silky","slide","snake","sneak","yanks"],
  "oaf-orb": ["bro","rob"],
  "dance-verbs": ["bands","bards","bared","beard","brave","bread","breed","cadre","cards","cared","cedar","crave","creed","raced"],
  "named-tired": ["amend","denim","diner","mated","tamed","timed","trade","tread","tried"],
  "play-stop": ["alps","laps","lays","pals","past","pats","ploy","poly","post","pots","slap","slay","spat","spot","taps","tops","toys","typo"],
  "page-pops": ["gasp"],
  "prime-scans": ["canes","earns","mares","nears","pecan","prism","ramps","reins","resin","ripen","risen","scamp","scams","since","siren","smear","snare"],
  "road-sign": ["aids","arid","digs","dogs","dosa","gird","gods","grid","grin","raid","rain","said","sing","snog","song"],
  "items-store": ["emits","ester","meets","mites","omits","rests","riots","rites","smite","sorts","steer","stems","teems","terse","tiers","times","tires","tomes","trees","tries","trois"],
  "agile-saint": ["anise","satin","singe","stain","sting","tails"],
  "and-yet": ["ant","ate","eat","tea"],
  "canal-flats": ["scant"],
  "paths-weeds": ["heaps","phase","sawed","sewed","shape","sheep","spade","swede","whats"],
  "nude-yeti": ["dine","dune","need","teen","tine","tune"],
  "coat-thin": ["chat","chin","hint","icon","inch","into","itch","taco","than"],
  "lobby-rains": ["barbs","barns","basil","blobs","boils","inlay","irons","lions","loins","nails","nobly","rainy","sarin","slain","snail"],
  "shaky-tries": ["ashes","aster","haste","heats","heist","karts","rates","rises","risks","rites","sears","skirt","stare","stark","tears","teary","tiers","tires","years"],
  "gory-hill": ["gill","orgy"],
  "pigs-walk": ["alps","awls","gaps","gasp","laps","laws","pals","slap","slip","swag","swig","wigs"],
  "feta-palm": ["fate","feat","flea","lamp","leap","pale","peat","plea","tape","temp"],
  "dim-pro": ["mid"],
  "cult-deny": ["dent","tend"],
  "army-envy": ["navy","vary"],
  "brave-imply": ["balmy","blame","peril","viper"],
  "caves-mouse": ["amuse","sauce"],
  "last-sari": ["airs","arts","lair","liar","rail","salt","star","tsar"],
  "dote-worn": ["redo","wore"],
  "deals-freed": ["adder","dales","dares","defer","dread","eased","false","fared","fares","fears","fleas","flees","frees","leads","leafs","reads","reeds","reefs","safer"],
  "crews-hopes": ["ceres","heres","howes","screw","sheer","whose"],
  "scene-write": ["ester","newer","reins","reset","resin","rinse","risen","rites","since","siren","sneer","steer","terse","tiers","tires","trees","tries","twice","wince"],
  "all-wag": ["gal","law"],
  "lemon-thank": ["alone","atone","melon","taken"],
  "blue-trap": ["able","bale","bare","bear","late","lube","part","plat","rate","tarp","teal","tear","true"],
  "diet-rear": ["arid","dare","date","dear","deer","dire","edit","raid","rare","rate","reed","ride","rite","tear","tide","tied","tire","tree"],
  "began-parry": ["payer","repay"],
  "robot-slate": ["alert","belts","bolts","boost","later","least","lobes","stale","steal","stoat","tales","tarot","toast"],
  "nodes-piece": ["cones","coped","dopes","epics","nosed","scone","scope","seine","since","snide","spice","spied"],
  "site-yowl": ["list","lost","lots","lows","owes","owls","slit","slot","slow","ties","wise","woes","yeti"],
  "axe-elm": ["mel"],
  "grace-turbo": ["abort","about","actor","acute","barge","carte","cater","court","crate","cuter","react","rebut","tabor","trace","truce","tuber"],
  "awry-bald": ["bard","bray","draw","wary"],
  "lady-wise": ["dale","deal","deli","idle","idly","isle","lays","lead","lies","sale","seal","slay","sway","wade","wide"],
  "his-two": ["how","sit"],
  "neat-sums": ["ante","anus","east","eats","must","sane","seas","seat","stem","teas","tuna"],
  "maple-seats": ["ample","asset","easel","lamps","leaps","lease","males","mates","meals","meats","pales","palms","paste","pasts","peels","pests","pleas","psalm","sales","salsa","seals","septa","slaps","sleep","spate","spats","stamp","steam","steep","steps","tames","tapes","tease","temps"],
  "deny-mask": ["dank","days","dyes"],
  "rents-socks": ["costs","crest","rocks","scots","sects","snort","stern"],
  "sadly-tiles": ["dates","deity","diets","edits","isles","islet","least","lilts","sales","seals","sills","silly","sited","slate","stade","stale","stall","stead","steal","still","tales","tides","tills"],
  "drum-isle": ["dues","lies","rile","sled","sued","used"],
  "erase-oddly": ["arose","delay","doers","dosed","doser","early","eased","elder","layer","leary","older","reeds","relay","saree","years"],
  "cone-rest": ["cost","once","rees","rent","scot","sect","sore","sort","tern","torn"],
  "solar-wives": ["isles","lasso","liars","loser","loses","lowes","overs","rails","riles","roles","sails","savor","servo","soles","verso","views","wiles"],
  "mud-one": ["duo","eon","men","nod"],
  "gaps-lean": ["alas","alps","gasp","lane","laps","pals","pang","saga","sage","sale","seal","slap"],
  "bribe-cater": ["beret","carte","crate","react","trace"],
  "fate-tips": ["fast","fats","feat","feta","fist","past","pats","peat","pits","sift","spat","spit","stat","taps","tate","tits"],
  "ashes-scale": ["aches","cease","chase","chess","clash","class","eases","hales","heals","laces","leach","leash","sales","salsa","seals","slash"],
  "dense-edges": ["ended","geese","needs","sends"],
  "dual-gods": ["dogs","dosa","gold","load","odds","sago","soda"],
  "loans-scram": ["alamo","casas","clans","crams","crass","mason","moans","molar","norms","salon","scars","soars","solar"],
  "bliss-canal": ["banal","basis","bills","labia","lilac","scans"],
  "ewe-ray": ["are","aye","ear","wee"],
  "pasta-weeks": ["askew","awake","keeps","paste","pasts","peeks","pests","septa","spate","spats","speak","steep","steps","stews","swats","sweat","sweet","tapas","tapes","wakes","wests"],
  "five-rely": ["ever","feel","file","flee","leer","reel","rile"],
  "crave-ropes": ["arose","cares","carve","creep","crepe","pores","poser","prose","races","raver","rears","savor","scare","scope","spore"],
  "cult-sack": ["acts","cask","cats","cuts","lack","last","lust","salt","slut","suck","sulk"],
  "bake-tern": ["bank","bare","barn","beak","bear","bran","bree","rant","rate","rent","take","tear","tree"],
  "equip-shoot": ["hoist","pique","quiet","quips","quits","quote","shout","south"],
  "lugs-sour": ["logs","ours","slog","slug","sous"],
  "crook-spies": ["cores","epics","pesos","pikes","pokes","poses","posse","rises","roses","scoop","scope","score","skier","sores","spice","spike","spoke"],
  "tin-wok": ["nit","not","own","ton","win","won"],
  "heart-wings": ["earth","hairs","hares","hater","hears","night","share","shear","swing","wages","wares","water","wears"],
  "ghee-plus": ["glee","glue","huge","hugs","legs","lugs","push","slug"],
  "gruel-trash": ["alert","alter","earth","glare","hater","heart","hurst","lager","later","luger","regal","shrug"],
  "field-patch": ["cheap","chief","decaf","faced","filed","fitch","peach","pedal","piled","pitch","plead"],
  "salt-seen": ["east","last","lest","lets","sane","seat","teas","tees"],
  "came-sink": ["acne","cane","mace","mack","mesa","mice","nick","same","sane","sank","seam","semi","sine","skim","skin"],
  "glade-slope": ["dales","deals","leads","leaps","lopes","pales","pleas","poles"],
  "deaf-will": ["dale","deal","dial","dill","fade","fled","lead","well"],
  "bias-teem": ["base","bees","east","eats","emit","item","mate","meat","meet","meta","mite","seat","site","tame","team","teas","tees","time"],
  "cod-day": ["add","doc","odd"],
  "open-used": ["does","dope","dose","dues","eons","nope","ones","sued"],
  "boot-film": ["blot","bolt","foot","lift","limb","loft"],
  "satay-seals": ["asset","lasts","sales","salts","salty","seats","slats","style"],
  "ample-beach": ["blame","bleep","champ","cheap","maple","peace"],
  "lead-skit": ["dale","deal","deli","dies","east","eats","idle","kids","kits","late","lied","lite","seat","side","site","skid","talk","task","teal","teas","ties","tile"],
  "furl-gate": ["fare","fate","feat","feta","flat","gear","rage","urge"],
  "alert-mango": ["agate","along","alter","golem","manor","morel","omega","roman","tamer"],
  "pedal-tapas": ["apple","dealt","delta","leapt","pasta","paste","petal","plate","plead","pleat","septa","spade","spate","stade","stead","tapes"],
  "excel-wheat": ["cheat","leach","leech","teach","watch","welch","whale"],
  "jut-oar": ["our"],
  "rent-some": ["eons","mere","most","nets","nose","ones","seem","seen","sent","stem","tens","term","tern","tons","torn"],
  "heavy-slots": ["asset","ethos","halts","haste","hates","haves","heats","lasts","salts","salty","seats","shalt","shave","shove","slats","sloth","those","vases","yeast"],
  "leash-vegan": ["angel","glean","glens","hales","haves","heals","lanes","leans","shale"],
  "lone-trio": ["noel","note","rent","riot","rite","roti","tern","tier","tire","tone","tori","torn"],
  "dork-hint": ["dint","dirk","kind","thin"],
  "lemon-sassy": ["loans","mason","melon","moans","noses","omens"],
  "goose-tread": ["dotes","dregs","eager","eater","ester","goers","goods","grade","ogres","raged","rated","reset","serge","steer","store","terse","trade","trees"],
  "oops-reds": ["dose","pose","reps","rods"],
  "ferry-rooms": ["forms","foyer","fryer","moors","mores","roomy"],
  "cool-warm": ["coal","cola","coma","loco","worm"],
  "newer-vines": ["evens","inner","nerve","nines","renew","riven","seven","swine","veins","views","wives"],
  "ball-swap": ["alas","alba","alps","awls","laps","laws","pals","paws","wasp"],
  "goat-lads": ["alas","also","alto","dogs","gods","olds","sago","sold","toga"],
  "basin-chase": ["aches","cases","chain","chess","chins","scans"],
  "felt-rind": ["fend","find","fled","flit","left","rent","tern"],
  "adult-stern": ["dealt","durst","laden","latte","lends","nerds","rated","rents","runts","strut","sturt","tater","tetra","trade","tread","treat","trust"],
  "data-them": ["hate","head","heat","made","mate","mead","meat","meta","meth","tame","team"],
  "earns-voice": ["acres","anise","cares","carve","cover","crave","nears","noise","races","raven","scare","score","senor","snare","snore"],
  "gun-spa": ["gap","sun"],
  "arts-cage": ["cast","cats","gear","rags","rate","rats","saga","star","tear","tsar"],
  "awake-orbit": ["awoke","baker","brake","break","karat","ratio","tiara"],
  "edges-issue": ["geese","guess","guide","sides","siege","suede"],
  "epic-only": ["icon","nice","ploy","poly"],
  "cuts-poet": ["cost","cues","pose","pots","puts","putt","scot","spot","stop","tops"],
  "comic-resin": ["coins","cries","crime","icons","irons","mince","miner","minor","reins","rinse","risen","scion","siren","sonic"],
  "fled-haul": ["deaf","fade","fell","flea","hale","heal","held","hell","hula","hull","leaf"],
  "acres-loves": ["arose","cares","caves","loser","races","roles"],
  "bait-plod": ["atop","boat","bold","bolt","pita","plot"],
  "gas-hot": ["ash","hat","sag","tag"],
  "dish-sure": ["dies","dire","dues","ride","rise","rude","ruse","shri","sire","sued","used","user","uses"],
  "rites-towel": ["lotte","lower","store","swore","tiers","tires","totes","tries","weirs","wires","wiser"],
  "blue-reef": ["flub","free","furl","leer","lube","lure","reel"],
  "isle-seal": ["ease","eels","less","lies","sale","seas","sell"],
  "apple-stray": ["alert","alter","apply","aptly","artsy","aster","later","leapt","paler","parse","paste","pasty","patsy","pearl","pears","pelts","petal","pleat","prays","rates","sappy","septa","slept","spare","spate","spear","spelt","spray","stare","tapes","tears","trays"],
  "askew-hates": ["asset","awake","haste","heats","sakes","seats","sweat","wakes","wheat"],
  "iron-nets": ["eons","neon","nest","noir","nori","nose","ones","sent","site","tens","ties","tine"],
  "curls-fiery": ["clues","cries","cures","curly","curse","fires","flies","fries","fuels","furry","lyric","serif","slice"],
  "decor-timed": ["ceded","cider","cited","coder","credo","creed","cried","diced","domed","edict","erect","meter","metre","metro","mired","mitre","remit","timer"],
  "due-gym": ["mud","mug"],
  "chant-nylon": ["annoy","canny","nacho","nancy"],
  "rogue-stint": ["gents","goner","grout","gusto","inert","inset","inter","nitro","noise","rouge","stein","suite","tints","tongs"],
  "bike-dodo": ["bide"],
  "flat-swat": ["salt"],
  "bagel-males": ["bales","gable","gleam","mages","meals","sable"],
  "legit-roots": ["lotte","lotto","otter","roost","stole","store","tools","torso"],
  "mate-oven": ["mane","mean","meat","meta","name","tame","team","veto"],
  "dark-rope": ["dare","dear","dope","dork","pear","pore","pork","rare","read","reap","rear","redo","repo"],
  "bot-far": ["bar","bra","bro","fat","orb","rob","tab"],
  "creek-those": ["ceres","cheek","chose","cores","corks","ester","ethos","reset","rocks","score","sheet","shock","steer","store","stork","terse","these"],
  "inner-tears": ["anise","arise","aster","eater","nines","raise","rants","rates","reins","rents","resin","rinse","risen","sarin","seine","siren","stare","stern","tease","teens","tense","terra","trans"],
  "cape-give": ["cave","epic","gave","pace"],
  "keel-wild": ["leek","lewd","like","weld","well","wide","will"],
  "modes-silly": ["demos","dimes","domes","doses","isles","limes","miles","mills","molds","moldy","moles","sides","sills","slime","smile","soles"],
  "semi-test": ["emit","item","mite","sets","site","time"],
  "lands-sheep": ["dales","deals","easel","eases","heels","lanes","leads","leans","lease","panes","pease","pedal","penal","plane","plead","sands","spade"],
  "shout-slots": ["shots","souls","south"],
  "hulk-pond": ["honk","hunk","plod"],
  "car-sip": ["arc","pac","sap","spa","sri"],
  "pumps-warns": ["wraps"],
  "guide-logos": ["glued","golds","lodge","louie","oiled","oldie","solid"],
  "ours-pile": ["euro","lips","pier","plus","ripe","rips","slip","soil","soul","sour","spur"],
  "shirt-swung": ["hints","hunts","hurst","shrug","shunt","swing","twins","wrist"],
  "bibs-tide": ["bide","bids","bits","diet","edit","tied"],
  "gases-twist": ["asset","gates","sages","seats","stage","state","stats","stews","twigs","twits","wests"],
  "peer-tons": ["nest","nets","pens","pons","pore","porn","rent","repo","rope","sent","tees","tens","toes","tore","torn","tree"],
  "eats-unto": ["east","nest","note","nuts","seat","sent","stun","teas","tens","tone"],
  "bay-son": ["boy","nab","say","yob"],
  "rare-salt": ["arts","earl","ears","eras","last","lear","rats","rear","sale","seal","sera","tsar"],
  "lung-safe": ["flag","flea","fuse","gnus","gulf","guns","lane","leaf","lean","sane","sang","snag","snug","sung"],
  "flint-stalk": ["kills","kilns","knits","lilts","links","skill","slant","slink","stall","stank","still","stink","stint","talks","tanks","tills","tilts","tints"],
  "nails-smoke": ["alien","alone","lasso","lemon","limes","loans","melon","miles","moles","sails","salon","slain","slime","smile","snail"],
  "kale-nick": ["acne","cane","kick","kiln","lake","lane","leak","lean","lien","like","line","nice"],
  "scrap-stork": ["corps","craps","crops","karts","parts","ports","prost","racks","rocks","sport","stark","strap"],
  "glow-prep": ["grow","plow","prog","prop"],
  "pylon-ships": ["noisy","spiny"],
  "can-moo": ["con","moa","mon"],
  "cruel-exits": ["cries","cures","curse","exist","relic","reuse","rites","tiers","tires","tries","ulcer"],
  "perks-satay": ["asset","paras","parks","parse","pasta","paste","payer","pears","perky","sears","seats","septa","spare","spark","spate","spear","tapas","tapes","years","yeast"],
  "goal-want": ["gala","goat","long","tang","tong","town"],
  "chock-plane": ["cache","cheap","clank","clean","clock","clone","epoch","lance","panel","peach","penal","place","plank"],
  "bent-dude": ["been","bunt","deed","dent","dune","need","tend"],
  "bread-cares": ["acres","bared","beard","beers","breed","brees","cadre","cease","cedar","ceres","creed","raced","races","saber","sabre","sacra","scare"],
  "runts-toned": ["noted","notes","nurse","onset","runes","senor","seton","snore","snort","stone","tones","tuned","tunes","turns","under"],
  "cone-push": ["cues","hops","once","open","pose","posh","shop"],
  "desk-tire": ["deer","dies","dire","dirk","disk","drek","kids","kits","ride","rite","seed","side","site","skid","tees","tier","ties","tree","trek"],
  "hew-sax": ["was"],
  "arena-cider": ["cadre","cared","cedar","cried","drain","nadir","nicer","raced","rance"],
  "menus-stray": ["artsy","mares","means","mensa","nasty","sears","serum","smart","smear","stars","stuns","trams","trays","truss","users","years"],
  "ties-wave": ["eats","seat","site","teas","vast","wise"],
  "charm-enact": ["chart","cheat","earth","harem","hater","heart","march","teach"],
  "stiff-vocal": ["coals","facts","flits","foils","lifts","tails","tiffs","viola","voila"],
  "dead-team": ["dame","mate","mead","meat","meta","tame"],
  "mint-uses": ["emit","item","mite","nuts","semi","stem","stun","suns","time"],
  "dull-taco": ["alto","coat","cult","load","loud","ludo","tall"],
  "jet-yaw": ["jew","way","yew"],
  "sins-wrap": ["pins","raps","rasp","spin","warp","wins"],
  "ogres-twang": ["angst","goers","gorge","grown","stage","sweat","swore","sworn","wagon","wants","waste","worse","wrest"],
  "glen-slot": ["lens","lest","lost","lots"],
  "hole-kegs": ["elks","geek","ghee","heel","hogs","keel"],
  "sound-while": ["hinds","idols","louse","noise","solid","whine","wound"],
  "caps-tick": ["acts","cast","pack","past","pats","pics","pits","spat","spit","tack","taps","tips"],
  "atoms-seeds": ["dates","eased","mates","moats","seems","stade","stead","steam","stems","tames","teams","toads"],
  "chug-heir": ["ecru","hire","huge","rice","rich"],
  "asset-heels": ["easel","eases","lasts","lease","least","salts","seals","seats","sheet","slate","slats","stale","steal","tales","tease"],
  "hen-ram": ["arm","ham","mar","nah"],
  "bonus-motor": ["boots","boron","boson","bouts","moons","moron","robot","turbo"],
  "lacks-voter": ["alert","alter","avert","carve","caves","clear","close","crave","laces","later","least","locks","overt","scale","slack","slate","stale","stalk","stave","steal","stole","stove","tales","trove","votes"],
  "soon-stop": ["post","pots","spot","tops"],
  "gauge-pants": ["agent","angst","pangs"],
  "motto-quasi": ["omits","quits"],
  "lion-ruby": ["bury","iron","noir","nori","your"],
  "empty-torso": ["metro","mores","poems","potty","roost","roots","stomp","stoop","storm","typos"],
  "melt-rise": ["leer","lime","mist","reel","rees","rile","seem","semi","sire","stem","stir"],
  "dive-redo": ["deed","died","dire","dove","ever","over","reed","ride","rode","rove"],
  "lay-top": ["alp","lop","opt","pal","pat","pot","tap"],
  "bail-doom": ["amid","boil","idol","laid","load","maid","modi","mood"],
  "airy-reef": ["eyre","fair","fare","fear","free","rife"],
  "siren-spray": ["prays","rains","reins","rinse","risen","sarin"],
  "bold-list": ["bids","bits","blot","bolt","bots","dill","doll","lids","lilt","lost","lots","olds","slid","slit","slot","sold","till"],
  "neck-sage": ["aces","acne","ages","cane","case","kegs","sack"],
  "sense-taken": ["eaten","knees","sakes","seeks","senna","skate","skeet","sneak","stake","stank","steak","takes","tanks","tense"],
  "equip-spurs": ["pique","super","upper"],
  "cores-spoke": ["corks","creep","crepe","peers","perks","pesos","pokes","poses","posse","press","rocks","roses","scope","score","sores","speer"],
  "diary-noise": ["adore","aides","aired","anise","dairy","daisy","ideas","noisy","rainy","rayon"],
  "did-leg": ["gel","lid"],
  "miss-pain": ["aims","amin","main","mans","mass","mina","pans","pins","saps","sims","snap","snip","span","spin"],
  "coal-neat": ["ante","coat","cola","lace","lean","loan"],
  "rates-until": ["alert","alter","aster","later","rents","stair","stare","stern","tears","trial","units"],
  "space-spell": ["capes","claps","clasp","lapse","leaps","paces","pales","peels","pleas","scape"],
  "also-gate": ["ages","alto","goat","late","legs","logs","sage","sago","sale","slog","tale","teal"],
  "drove-loser": ["doers","doser","doves","erode","leers","lover","loves","reeds","reels","rodeo","roles"],
  "dare-this": ["aide","aids","dear","dish","herd","hits","idea","rate","rats","read","said","star","tear","tsar"],
  "hints-rugby": ["burns","grist","grits","hunts","runts","shunt","sight","turns"],
  "birds-cease": ["abide","acids","based","bases","beads","beers","breed","brees","bride","cases","ceres","cider","cress","cried","cries"],
  "pond-ragu": ["darn","grad","rand"],
  "flat-good": ["fold","food","goat","gold","loft","toga"],
  "apart-weeds": ["adapt","adept","areas","eased","eater","erase","paras","parse","pears","saree","sawed","sewed","sewer","spade","spare","spear","swede","taper","tweed","twerp","wares","water","wears","wraps"],
  "drop-keen": ["deep","done","dope","keep","kern","knee","nerd","node","peed","peek","perk","poke","prod"],
  "pool-some": ["loop","polo"],
  "model-pests": ["deems","demos","domes","dopes","lopes","modes","moles","peels","pelts","pesos","plots","poles","poses","posse","posts","seems","seeps","sleep","slept","slope","smelt","speed","spelt","spots","stems","steps","stops"],
  "army-task": ["rays"],
  "chest-fried": ["cider","creed","crest","cried","defer","erect","ethic","fired","first","freed","refit","rifts","shift","thief"],
  "laden-moats": ["alone","amend","atoms","dales","dames","deals","demos","domes","leads","manta","modes","monde","named","natal","olden","talon","tonal"],
  "huge-oral": ["aero","ergo","gore","hare","hear","hula"],
  "cure-tidy": ["dice","diet","duet","ecru","edit","iced","rite","tide","tied","tier","tire","true","yurt"],
  "slain-smack": ["clans","minas","nails","slack","snail"],
  "hovel-react": ["actor","carol","carte","cater","cheat","clear","coral","crate","eater","leach","lever","overt","revel","trace","trove","voter"],
  "aged-year": ["eyed","eyre","gear","rage"],
  "burn-feel": ["blue","blur","fern","flee","fuel","lube"],
  "siren-tires": ["inert","inter","reins","resin","rinse","rises","tiers","tries"],
  "awry-tied": ["aide","airy","arid","diet","dirt","edit","idea","raid","tide","wade","ward","wary"],
  "crisp-sweet": ["creep","crepe","crest","erect","ester","peers","piers","price","reset","rests","rites","scrip","speer","spire","spree","steer","stews","stirs","sweep","swipe","terse","tiers","tires","trees","tries","weeps","wests","wipes"],
  "sea-vie": ["ave","eve"],
  "chat-lone": ["ache","alto","coat","cone","each","hale","heal","noel","taco"],
  "bight-paced": ["batch","patch"],
  "rows-sold": ["lord","olds"],
  "gangs-prose": ["goers","grogs","grope","gross","ogres","panes","pangs","pores","poser","ropes","snags","soaps","spans","spore"],
  "hooks-liars": ["kilos","rails","shook","solar"],
  "make-nick": ["acne","cane","mace","mack","mice","nice"],
  "fails-stout": ["aloft","autos","flits","foals","lasso","lifts","lists","lofts","sails","slits","slots","stilt","tails","tilts","touts"],
  "droid-shape": ["aired","arise","drape","drops","heaps","hopes","padre","pared","parse","pears","phase","pores","poser","prose","raise","roped","ropes","spare","spear","spore"],
  "heal-pigs": ["apes","hail","hale","pale","peas","plea","shea"],
  "pun-set": ["pen","put"],
  "mined-stuff": ["denim","dents","duets","fetus","finds","fines","snide","tends"],
  "scale-small": ["laces","malls","meals"],
  "bars-sift": ["arts","bras","brat","brit","fats","fist","fits","rats","star","stir","tsar"],
  "earl-miff": ["fare","fear","fife","file","film","fire","firm","flea","leaf","lear","real","rife","rile"],
  "merge-titan": ["eater","greet","grime","irate","ramen","taint","train"],
  "code-tusk": ["cues","deco","dock","duck","duet","sock","toes"],
  "graph-write": ["garth","girth","grape","grate","great","pager","right","tiger","water","wiper"],
  "gain-swim": ["wins"],
  "euro-poll": ["lore","lure","polo","pool","poor","pour","pull","role"],
  "claim-peers": ["acres","cares","ceres","creme","lapis","parse","pears","plies","races","scare","sepia","slice","spare","spear","speer","spiel","spree"],
  "skull-spill": ["pills","skill"],
  "navy-rugs": ["gnus","nags","rags","sang","snag","snug","sung","vans","yang"],
  "fire-mock": ["come","fore","more","rife"],
  "cable-worse": ["acres","below","cares","clear","cores","elbow","lower","scare","score","swear","swore","wares","wears"],
  "bops-left": ["felt","loft","plot","self"],
  "blood-dairy": ["board","braid","diary","dildo","rabid"],
  "here-vent": ["even"],
  "logo-wash": ["also","lash","shaw","solo"],
  "dub-pug": ["bud"],
  "dead-flee": ["deaf","deal","deed","fade","feel","flea","fled","lead","leaf"],
  "helps-optic": ["heist","lopes","pesto","pitch","poets","poles","polis","posit","slope","spoil","topic"],
  "chefs-water": ["cafes","carte","caste","cater","cease","chest","craft","crate","faces","facts","farce","react","sweat","threw","trace","wafer","waste","where"],
  "newt-reek": ["keen","knee","teen","went"],
  "glut-ship": ["hips","hits","huts","lips","list","lust","plus","push","shut","slip","slit","slut","thug","thus"],
  "caste-field": ["acted","cadet","cites","clade","decal","edict","fated","fates","feast","feats","filed","files","fleas","flies","laced","laces","leafs","scale","slice"],
  "items-opted": ["depot","emits","mites","mitts","moped","pesto","poems","smite","spite","stipe","stomp","tepid","times","tomes","totes"],
  "inch-rack": ["chai","char","chin"],
  "guy-sat": ["gay","tag","tug"],
  "steps-unite": ["inset","nests","pests","pines","setup","snipe","snips","spine","spins","spite","spits","steep","stipe","teens","tense","tests","tunes","units"],
  "dirt-rose": ["dies","dire","does","dose","dots","redo","rise","rode","side","sire","sore","stir"],
  "canny-rogue": ["anger","argue","auger","goner","nance","nancy","range","rouen","rouge"],
  "cave-rely": ["clay","earl","ever","lacy","lear","leer","rave","real","reel","vary","vera"],
  "bunt-tier": ["brie","burn","rite","runt","tint","tire","true","tube"],
  "chart-serum": ["acute","amuse","aster","carte","cater","charm","crate","cream","cuter","harms","hurst","hurts","march","mares","rates","react","smear","stare","tears","trace","trash"],
  "burst-tally": ["artsy","bally","blurt","brats","bully","burly","lusty","rusty","salty","start","stray","strut","sturt","tarts","trays","trust"],
  "cope-duck": ["deco","dock","dope","dupe"],
  "bids-worn": ["bind","bond","born","bros","dibs","rows","wind"],
  "bob-mad": ["dab","dam","mod"],
  "blot-maid": ["amid","atom","bait","bold","bolt","moat","mold"],
  "force-graft": ["croft","farce","grace","offer"],
  "fits-self": ["fist","sets","sift","sits"],
  "beta-tens": ["abet","ante","bane","beat","best","bets","neat","nest","nets","sent","tate"],
  "drunk-scare": ["acres","cadre","canes","cared","cares","cedar","crude","cures","curse","dance","drank","earns","nears","nurse","raced","races","racks","rears","runes","snack","snare","snark","snuck","under"],
  "nicer-seats": ["anise","arise","asset","aster","cents","ceres","crest","cries","eases","erase","rates","saint","saree","satin","scene","sects","since","stain","stair","stare","tears","train"],
  "cell-road": ["aced","clod","coal","cola","dare","dear","earl","lace","lear","lord","oral","read","roll"],
  "smell-stove": ["moles","sleet","steel","stole","tolls","volts","votes"],
  "sag-the": ["ate","eat","gas","hes","sea","tea"],
  "hook-liar": ["hoki","kilo","lair","oral","rail"],
  "dies-earn": ["darn","dean","dine","ears","eras","near","rand","rein","rise","sera","side","sire"],
  "birds-flame": ["abide","amble","blame","bride","fermi","fired","fried","lambs"],
  "leaks-marsh": ["amass","hales","harms","heals","lakes","makes","massa","masse","sales","salsa","seals","seams","shale","shame"],
  "bored-trait": ["abode","adobe","bared","beard","braid","bread","otter","rabid","tater","tetra","trade","tread","treat","triad"],
  "gush-peel": ["glee","glue","huge","hugs","legs","lugs","push","slug"],
  "deer-dish": ["dire","heed","reed","ride","shed"],
  "dirt-seas": ["date","east","eats","reds","said","seat","stir","teas"],
  "cores-drama": ["acres","carer","cares","crams","dares","doers","dorms","doser","macro","racer","races","reads","scare","score"],
  "beam-trek": ["bake","beak","kart","mart","mate","meat","meet","meta","take","tame","team","term","tram"],
  "earns-witch": ["acres","cares","caste","cheat","cites","cries","ethic","inset","nears","neath","races","reins","resin","rinse","risen","scare","siren","snare","stein","teach","thane","thine","wants","warns","watch"],
  "fall-news": ["fell","flaw","flew","lens","sewn","swan"],
  "areas-rinse": ["anise","arise","earns","erase","nears","rains","raise","rears","reins","resin","risen","saran","saree","sarin","sears","siren","snare"],
  "atoms-place": ["ample","ascot","claps","clasp","coals","coast","lamps","moats","pacts","palms","psalm","scalp","stamp","stomp","tacos","tempo"],
  "jolly-takes": ["least","skate","slate","stake","stale","stalk","stall","steak","steal","stoke","stole","tales","talks","tolls"],
  "nuts-sage": ["ages","ante","ants","eats","gnus","guns","nags","neat","sang","seat","snag","snug","stun","teas","tune"],
  "dull-hood": ["doll","hold","loud","ludo"],
  "load-mock": ["cold","lock"],
  "ether-nails": ["aisle","anise","hales","inert","inset","islet","leash","shale","sheet","slain","snail","stein","there","these","three","tiles"],
  "sari-yaks": ["airs","rays"],
  "shape-swing": ["heaps","phase","shine","swine","swipe","wanes","wines","wings"],
  "anger-drums": ["dregs","dunes","gears","manus","nudes","rager","rages","range"],
  "boat-felt": ["abet","beat","belt","beta","blot","fate","feta","left","loft"],
  "ducks-squib": ["sucks"],
  "delay-pairs": ["aides","aside","dairy","dales","deals","dries","ideas","lapse","leads","leaps","pales","piers","playa","raids","reply","rides","salad","sepia","sired","spire"],
  "acre-bald": ["area","bale","bard","bare","bear","care","clad","lace","race"],
  "plop-tire": ["pier","plot","ripe","rite","tier"],
  "alter-tunes": ["alert","later","leans","learn","least","renal","slate","stale","steal","tales","tuner"],
  "dowel-wagon": ["glade","lodge","waned"],
  "bop-bus": ["sub"],
  "back-suit": ["acts","buck","cask","cast","cats","cuts","sack"],
  "story-tempo": ["metro","mores","poems","potty","roost","roots","stomp","stoop","storm","typos"],
  "depth-spicy": ["chide","deity","dicey","heist","tipsy","types"],
  "seal-wolf": ["also","flew","flow","safe","sale","self","sell"],
  "await-sides": ["aides","aside","diets","edits","sawed","sited","sweat","tides","waits","waste"],
  "avoid-crawl": ["award","radio","viola","voila"],
  "doors-fears": ["dares","doers","doser","fares","odors","roads","safer"],
  "film-wrap": ["farm","warp"],
  "dye-pan": ["ape","nap","pea"],
  "lied-toys": ["deli","diet","dole","dote","edit","idle","idly","isle","lies","site","sole","tide","tied","ties","toes"],
  "safe-ties": ["east","eats","fast","fate","fats","feat","feta","fist","seas","seat","sift","site","teas"],
  "atlas-denim": ["aisle","amend","amine","anime","anise","dales","deals","deans","leads","manta","mined","named","saint","satin","sedan","slide","snide","stand","tails"],
  "runs-town": ["rows","stun","tons"],
  "silly-texts": ["lilts","lists","sells","sills","slits","still","stilt","style","telly","tills","tilts","yells"],
  "alien-earns": ["aisle","anise","arena","earls","erase","inane","laser","learn","leers","liens","lines","nails","nears","reals","reels","renal","saran","saree","slain","snail","snare","snarl"],
  "cat-eon": ["act","ate","can","one","tea","toe"],
  "kings-stars": ["karts","signs"],
  "discs-meats": ["dates","mates","mists","stade","stead","steam","tames","teams"],
  "seem-true": ["meet","muse","mute","rees","ruse","term","tree","user"],
  "lads-poet": ["apes","late","lose","olds","pads","peas","peat","pods","pose","sale","seal","sole","tale","teal","told"],
  "diner-scope": ["coder","coped","cores","corps","credo","crops","pines","poise","reins","resin","rinse","risen","scene","score","seine","siren","snipe"],
  "drag-wood": ["dodo","grad","grow","ward","word"],
  "crude-fleet": ["cured","cuter","defer","delft","elect","erect","freed","truce"],
  "lazy-name": ["amen","lame","mane","many","meal","mean","zeal"],
  "debt-lime": ["belt","bile","deem","dime","mile"],
  "gas-pea": ["ape","sag","sap"],
  "salad-teeth": ["dales","dates","deals","delta","eased","hales","halts","haste","heals","heats","lathe","leads","leash","shale","shalt","sheet","stade","stead","steed","these","theta"],
  "bear-glib": ["bare","blab","brie","gear","rage"],
  "alone-quips": ["alien","lapis","loans","nails","pique","slain","snail"],
  "alarm-chive": ["clear","march","reach","relic"],
  "cash-ogre": ["aces","aero","arch","care","case","char","egos","ergo","goes","gore","hogs","race"],
  "dawn-tiff": ["twin","wand","want","wind"],
  "fades-tower": ["dates","fared","rated","stade","stead","sweat","trade","tread","waste","water","wrote"],
  "cult-fish": ["cuts","fist","fits","flit","sift"],
  "data-free": ["dart","date","dear","deer","fare","fart","fate","fear","feta","frat","fret","raft","read","reed","reef"],
  "nun-red": ["den","run"],
  "flags-peril": ["fails","fires","flail","flier","fries","lapis","piers","rifle","sepia","serif","spire"],
  "diet-snap": ["ants","dent","edit","nest","nets","pans","pens","pies","sent","site","span","tend","tide","tied","ties"],
  "card-each": ["ache","char","dare","dear","hare","hear","read"],
  "ideas-worse": ["aired","aside","dewar","draws","dries","raids","rides","sawed","sewed","sides","sired","swede","wards","weeds"],
  "right-siren": ["girth","reins","resin","rinse","risen","rites","sight","singe","tiers","tiger","tires","trier","tries"],
  "sage-tone": ["ages","ante","egos","eons","goes","neat","note","ones","sane"],
  "last-semi": ["aims","isle","lest","lets","lies","lima","lime","malt","mast","mats","melt","mile","sail","salt","stem"],
  "child-tough": ["cloud","cough","ought"],
  "lungs-waves": ["lanes","leans","salve","slang","slung","wanes"],
  "boa-dim": ["mid","mod"],
  "carts-ropes": ["acres","capes","cares","cores","paces","pacts","parse","parts","pears","pores","poser","prose","prost","rears","scape","scare","scope","score","space","spare","spear","spore","sport","strap","traps"],
  "shoe-wars": ["eras","hers","hose","howe","sera","ware","wear"],
  "takes-tools": ["skate","stalk","steak","stoke","talks"],
  "drain-lever": ["aired","alien","drive","eared","liven","liver","nadir","renal","revel"],
  "coin-thin": ["chin","hint","icon"],
  "epic-song": ["cone","cons","gone","pics","snog"],
  "sleep-tally": ["lapse","leaps","leapt","pales","pease","peels","petal","plate","pleas","spell","telly"],
  "bolt-seen": ["belt","blot","bone","eons","lens","lest","lets","lost","lots","nose","ones","tees","toes"],
  "gag-pod": ["god","pad"],
  "coal-rats": ["arts","casa","cast","cats","clot","cola","colt","cost","scot","soar","sort","star","tsar"],
  "began-rotor": ["abort","anger","argon","barge","bento","bongo","goner","groan","orang","organ","rager","range","retro","robot","tabor","tenor","terra","toner"],
  "soul-that": ["also","alto","hast","hats","huts","lash","lout","lush","oats","shut","thus","tout"],
  "rice-silk": ["isle","lies"],
  "arena-shiny": ["earns","naira","nears","rainy","sarin","snare","yearn"],
  "fort-nest": ["fret","nets","sent","tens","tern","tons","torn"],
  "kale-pale": ["lake","plea"],
  "bland-freak": ["baker","bared","beard","blade","blank","bleak","blend","brake","brand","break","faker","fared","flake"],
  "eager-soils": ["agree","arise","gales","gases","gears","glare","glass","gloss","goers","lager","large","liars","rages","rails","raise","regal","sages","sails","silos"],
  "aim-dab": ["bad","bid","dam","dim","mad"],
  "held-list": ["dill","hits","lest","lets","lids","lilt","shed","sled","slid","slit","this","till"],
  "roses-title": ["islet","lists","loser","lotte","riles","rises","rites","roles","sites","slits","slots","sores","stilt","store","tiers","tiles","tilts","tires","totes"],
  "cult-gold": ["clot","cold","colt"],
  "droid-loser": ["doers","dosed","doser","idols","older","rodeo","roles"],
  "kitty-packs": ["pacts","picks","picky","stack","stick","tacks","tacky","ticks"],
  "pops-skit": ["kiss","kits","post","pots","skis","spot","stop"],
  "dusty-fired": ["dried","drift","dudes","feuds","fiery","fried","sided","study"],
  "dare-game": ["dame","dear","gear","mead","read"],
  "time-user": ["emit","mite","muse","rest","rite","ruse","stem","tees","tier","tire","trim"],
  "lag-oil": ["all","gal"],
  "noisy-plugs": ["lungs","lying","sling","slung","soups"],
  "froze-siege": ["goers","ogres","serge","zeros"],
  "bull-life": ["bile","bill","blue","file","flub","fuel","full"],
  "arms-host": ["arts","atom","mart","moat","moth","oats","rams","rats","soma","star","tram","tsar"],
  "angry-trend": ["terry","yearn"],
  "scalp-stork": ["claps","clasp","corks","craps","crops","karts","lacks","locks","parts","plots","ports","prost","racks","rocks","scrap","slack","splat","sport","stalk","stark","strap","traps"],
  "pond-work": ["down","pork","prod","word"],
  "hush-tree": ["hers","huts","rest","shut"],
  "noble-seals": ["easel","lanes","lasso","leans","lease","loans","lobes","sales","salon"],
  "rib-tea": ["are","ate","bit","ear","eat","era","ria"],
  "faint-joust": ["futon","joint","joist","junta"],
  "grog-wins": ["rows","sign","wing"],
  "envy-mean": ["amen","mane","name"],
  "stale-swift": ["fates","feast","feats","islet","least","slate","steal","stilt","tales","tilts","wiles"],
  "cogs-rude": ["deco","docs","ergo","gore","ogre","redo","rode","rods","urge"],
  "feet-salt": ["eats","fate","feat","felt","feta","fete","flat","last","lest","lets","seat","teas","tees"],
  "alert-setup": ["alter","eater","ester","later","paler","pearl","peers","reset","speer","spree","steer","strep","taper","tater","taupe","terse","tetra","trees","upset"],
  "lane-only": ["lean","lone","neon","noel"],
  "sheep-shell": ["hells"],
  "ewe-hey": ["wee","why","yew"],
  "swim-teen": ["emit","item","meet","mite","news","newt","seen","semi","sewn","sine","teem","time","tine","went","wins"],
  "dread-laden": ["adder","alder","dared","elder","ender","learn"],
  "amber-notes": ["boner","bones","borne","bream","mates","meats","onset","seton","steam","stone","tamer","tames","teams","toner","tones"],
  "lock-nerd": ["clod","cold","kern"],
  "enter-tests": ["ester","nests","rents","reset","sense","sneer","stent","stern","teens","tense","terse","trees"],
  "demo-wish": ["dish","dome","dose","meow","mode","modi","owes","shed","woes"],
  "news-trio": ["noir","nori","riot","roti","sewn","sine","site","stew","stir","ties","tori","worn"],
  "gnome-peers": ["goers","goner","green","ogres","pores","poser","prone","prose","ropes","serge","speer","spore","spree"],
  "area-tour": ["aero","aura","rare","rate","tear","tore"],
  "nor-pal": ["alp","lap","pro","rap"],
  "dodo-tons": ["dons","dots","nods"],
  "react-taxes": ["acres","areas","carat","cares","carte","cater","crate","eater","erase","exert","races","sacra","saree","scare","tease","trace"],
  "drive-ramen": ["diner","diver","edema","named"],
  "dawn-sail": ["awls","laid","laws","wand"],
  "orb-pop": ["boo","bro","rob"],
  "corny-flats": ["ascot","coast","coats","crony","forts","frost","scorn","tacos"],
  "agog-gory": ["orgy"],
  "inch-race": ["acre","care","chai","char","chin"],
  "props-tribe": ["biter","brits","piper","ports","prost","sport","strip","tripe","trope"],
  "ogres-snowy": ["goers","gooey","goose","greys","noose","noses","senor","snore","snows","swoon","sworn"],
  "else-ruin": ["eels","lens","lien","rile","runs","ruse","sure"],
  "bare-vote": ["bear","beat","beta","bore","rave","robe","rove","vera","veto"],
  "shame-twerp": ["earth","ether","hares","hater","hears","heart","heres","sewer","share","sharp","shear","sheer","swear","theme","three","wares","water","wears","wraps"],
  "bias-dibs": ["bids","said"],
  "nab-two": ["ban","now","tab","won"],
  "tidy-tube": ["diet","duet","edit","tide","tied"],
  "dolly-sides": ["dilly","dolls","dosed","doses","loses","sided","sills","silly","slide","soles","yield","yodel"],
  "harm-sigh": ["arms","hags","rams","rash","rims","shri"],
  "falls-lucky": ["alkyl","calls","flaky","flask","skull","slack"],
  "among-wines": ["anise","mango","mason","means","mensa","moans","omega","swine"],
  "joey-thin": ["hint","into","note","then","tone"],
  "nags-park": ["gasp","raps","rasp","sang","snag"],
  "felt-load": ["alto","dale","deal","doll","fade","fate","feat","feta","fled","fold","late","lead","left","loft","tale","teal","tell"],
  "rap-too": ["opt","pat","pro","tap","top"],
  "sewer-waist": ["arise","raise","rises","sites","stews","swats","swear","sweet","waits","wares","waste","wears","weirs","wests","wires"],
  "eagle-saint": ["angst","anise","gales","satin","stain","tails"],
  "eats-time": ["east","emit","item","mast","mats","meat","mesa","meta","mist","mite","same","seam","seat","semi","site","stat","tame","tate","team","teas","tits"],
  "doors-gouge": ["odors","rodeo","rogue"],
  "foul-plot": ["fool","full","loft","loop","poll","polo","pool","tofu"],
  "dour-sage": ["ages","drag","egos","goes","grad","rags","sour"],
  "bless-wrote": ["beers","beret","bolts","bores","brees","lobes","lowes","robes","sewer","slows","sober","swore","towel","tower","worst","wrest"],
  "life-open": ["file","lien","line","nope"],
  "all-irk": ["ilk"],
  "shows-three": ["ether","ethos","heres","hoses","howes","sheer","shoes","there","threw","whose"],
  "cake-sick": ["aces","cask","sack","sake"],
  "salsa-taste": ["latte","least","sales","seals","seats","slate","stale","state","steal","tales"],
  "blue-room": ["euro","lobe","lore","lube","lure","moor","role"],
  "golf-nail": ["flan","gall","info"],
  "minds-tales": ["inset","islet","least","limes","males","meals","means","mensa","miles","mines","names","slate","slime","stale","steal","stein","tiles"],
  "blame-place": ["amble","ample"],
  "arts-pool": ["alto","loop","oats","oops","plot","polo","post","pots","pros","rats","soar","spot","star","stop","tsar"],
  "core-heat": ["hate","hero","oath","taco"],
  "are-hog": ["ear","era","rag"],
  "monk-rice": ["come","core","cork","mice","mink","mock","omen","rein","rink"],
  "girls-lower": ["glows","goers","growl","loser","lowes","ogres","riles","roles","rolls","swill","wiles"],
  "chalk-steel": ["elect","hales","halls","heals","heels","hells","lakhs","leach","leash","least","leech","shake","shale","shall","shell","skate","skeet","slate","sleet","stake","stale","stalk","steak","steal","takes","tales","talks","tells"],
  "ugly-vent": ["levy","tune","tung"],
  "gates-sight": ["asset","sages","seats","sighs","sites","stage","stash","state","taste"],
  "dope-tide": ["diet","dote","edit","tied"],
  "front-goals": ["aloft","float","foals","gloat","goons","logos","tango"],
  "dream-users": ["amuse","armed","dames","dares","dress","madre"],
  "fed-lob": ["old"],
  "hello-lives": ["elves","evils","heels","hells","hills","hives","hovel","lisle","shill","veils"],
  "dolls-pearl": ["alder","dales","dares","deals","ladle","lapel","lapse","leads","leaps","loads","lords","paler","pales","parse","pears","polar","polls","reads","roads","spare","spear","spell"],
  "send-yaps": ["ends","ness","pads","pass","pays","sand","sans","sped"],
  "glade-spray": ["agape","algae","dales","deals","earls","glare","lager","large","laser","leads","pager","parse","pears","prays","raspy","reals","regal","spade","spare","spear"],
  "cress-treat": ["acres","aster","cares","carte","cater","crate","crest","races","rates","scare","stare","tater","tears","tetra","trace"],
  "fast-rows": ["arts","fats","rats","sort","star","tsar","waft","wart"],
  "rate-slot": ["aero","east","eats","lest","lets","lore","lose","lost","lots","oats","seat","sole","tart","tear","teas"],
  "isle-wrap": ["lies","lips","pair","paws","slew","slip","ware","warp","wasp","wear"],
  "maid-sued": ["aids","dame","dues","made","mead","said"],
  "hug-net": ["gen","gun","hut","nut","ten","ugh"],
  "cheap-romps": ["aches","arose","campo","chase","chasm","comps","hares","harms","hears","marsh","opera","peach","pores","poser","proms","prose","scope","share","shear","spore"],
  "page-risk": ["apes","ears","eras","kris","peas","pies","rage","rise","sera","sire"],
  "dumb-pond": ["bump"],
  "layer-pasta": ["earls","early","laser","leary","parse","parts","party","payer","pears","reals","relay","spare","spear","strap","tapas","traps"],
  "nacho-stint": ["anion","canon","chant","chaos","chats","hoist","saint","saith","satin","scant","tints"],
  "rugs-sake": ["ages","gear","rage","rags","rake","sage"],
  "faint-miles": ["false","fetal","files","fleas","flies","flint","leafs","limes","males","meals","metal","minas","minis","slime","smile"],
  "acts-lead": ["casa","cast","cats","dale","date","deal","east","lest","lets","sale","seal","seat","teas"],
  "bags-cold": ["bold","clad","clod","gobs","labs","slab"],
  "die-ram": ["are","arm","dam","dim","era","mad","mar","rim"],
  "dance-seals": ["canes","casas","cases","dales","deals","easel","laden","lanes","leads","leans","lease","lends","salad","sales","salsa","scans","scene"],
  "herbs-quiet": ["berth","brush","ether","heres","quite","sheer","shrub","three","usher"],
  "meat-wins": ["mate","mesa","meta","mint","news","same","seam","sewn","tame","team","twin","wait","went"],
  "heel-knit": ["kiln","kite","leek","like","link","then","thin"],
  "cedar-media": ["armed","cadre","cared","cider","cried","dream","madre","mired"],
  "bury-tomb": ["ruby","tory","troy"],
  "acted-poses": ["cadet","caste","depot","dopes","pesos","pesto","poets","posed","posse","specs"],
  "chugs-flirt": ["crush","firth","frith"],
  "cone-shot": ["echo","eons","hens","hose","nose","ones","shoe","tons"],
  "ink-let": ["kin","tel","tie","tin"],
  "fiery-frost": ["forts","frets","fryer","refit"],
  "into-seed": ["diet","dine","dint","ends","eons","ones","send","tide","tied","toes","tons"],
  "fire-stem": ["feet","fete","firm","rest","rife","rims","rise","sire","tees"],
  "turns-wives": ["rites","tiers","tires","tries","weirs","wires","wiser"],
  "halls-pipes": ["hales","heals","heaps","hills","lapse","leaps","leash","pales","phase","piles","pills","pleas","plies","shale","shall","shill","spiel"],
  "cask-guru": ["rack","sack"],
  "black-crane": ["blank","cable","clack","clean","crack","crank","lance","rance"],
  "eyed-trip": ["dire","dirt","peer","pier","reed","ride","ripe","tidy","type"],
  "goal-reds": ["ages","dogs","earl","ears","eras","gale","gold","lear","lord","oral","rods","sage","sago","sera","soar"],
  "age-mug": ["gem","gum"],
  "alloy-elbow": ["allow","below"],
  "dawn-ribs": ["band","barn","bars","bind","bran","bras","dibs","wand","wars","wind"],
  "drown-suite": ["donut","outed","rites","rowed","snort","snout","store","swore","sworn","tiers","tired","tried","tries","units","weird","weirs","wider","wired","wires","wiser","worse"],
  "clue-fear": ["acre","cure","curl","ecru","fare","flea","furl","lace","leaf","race"],
  "parts-tents": ["pants","stent","strap","strep","tarts","traps"],
  "dealt-hairy": ["dairy","delay","delta","diary","earth","hater","lathe","rated","ready","their","tidal","tiled","tired","trade","tread","triad","tried","yield"],
  "oops-port": ["pros","toro"],
  "lamps-slosh": ["halos","lasso","palms","psalm","shams","shoal","slams","soaps","spasm"],
  "bank-juts": ["bans","bunk","buns","bust","just","nabs","stab","tabs"],
  "add-yes": ["ads","dad","sea"],
  "dwell-loves": ["doves","sewed","solve","swede","weeds","welds","wells"],
  "blobs-every": ["beryl","leers","lobes","loser","overs","reels","roles","serve","servo","sever","verbs","verse","verso"],
  "gawk-tree": ["trek","wage"],
  "dish-tier": ["dire","hide","rite","stir","this","tire"],
  "enter-lasts": ["alert","asset","aster","earls","eases","eater","erase","laser","later","least","rates","reals","rents","sales","salts","saree","seals","seats","sense","slate","slats","sneer","stale","stare","state","steal","stent","stern","tales","taste","tater","tears","tease","teens","tense","tents","tetra","treat"],
  "awry-bust": ["bury","busy","buys","sway","wart","wary","ways"],
  "porch-write": ["chirp","throw","tower","tripe","trope","wrote"],
  "amble-spray": ["balmy","beams","mares","paler","parse","pearl","pears","plebs","prays","realm","smear","spare","spear"],
  "fade-norm": ["damn","deaf","dean","done","earn","fare","fear","fore","form","from","near"],
  "gem-wok": ["mew"],
  "radar-wedge": ["dewar","eared","grade","raged","waged"],
  "liver-waste": ["earls","easel","islet","laser","lease","least","ravel","reals","riles","slate","stale","steal","straw","swear","sweat","tales","tiles","valet","wares","warts","waver","wears","weave","weirs","wires","wiser"],
  "male-nine": ["amen","lame","lane","lean","lien","lime","mane","meal","mean","mile","mine"],
  "acres-stain": ["asset","aster","cairn","canes","cares","crane","cress","races","rance","rates","rents","rests","saint","satin","scare","seats","stair","stare","stern","stirs","tears"],
  "deny-labs": ["beds","lens","sand","send","slab"],
  "kinds-prose": ["drops","inked","pines","poise","pores","poser","roped","ropes","sinks","skins","snips","spine","spins","spore"],
  "ball-yeti": ["ally","bail","bell","belt","bile","bite"],
  "laid-tone": ["ante","dial","land","lane","lean","lone","noel","note"],
  "fella-rinse": ["earls","earns","fails","false","feels","final","fines","flail","fleas","flees","flies","laser","leafs","learn","leers","liars","liner","nears","rails","rains","reals","reels","reins","resin","riles","risen","sarin","siren","snare","sneer"],
  "tapes-towns": ["pants","paste","pesto","septa","spate","sweat","waste"],
  "riot-seed": ["deer","dies","dire","does","dose","reed","ride","rite","rode","roti","side","tees","tier","ties","tire","toes","tore","tori","tree","trio"],
  "drag-gory": ["agog","dory","grad","orgy","yoga"],
  "shaky-spill": ["halls","hills","lakhs","palsy","pills","plays","shill"],
  "lace-pipe": ["epic","leap","lice","pace","pale","plea"],
  "fence-solid": ["clods","close","colds","cones","fiend","filed","fined","idols","noise","scene","scold","seine","slide","snide"],
  "ads-pub": ["bad","sad"],
  "lodge-ultra": ["glued","gouda","lured","older","outer","route"],
  "theme-traps": ["maths","meter","parts","smart","strap","strep","tamer","taper","terms","trams"],
  "nets-port": ["nest","pest","pets","post","pots","pros","reps","sent","spot","step","stop","tens","tent","tern","tons","torn"],
  "rated-tanks": ["aster","earns","karts","nears","ranks","rates","snare","snark","stank","stare","stark","taste","tears","trade","tread"],
  "ribs-salt": ["bass","bats","bits","bras","brat","brit","lars","last","slit","stab","tabs"],
  "laser-sweet": ["asset","earls","erase","reals","saree","sears","seats","slate","stale","steal","stews","tales","tease","wests"],
  "snap-wing": ["nags","pans","pawn","sang","sign","sing","snag","snip","span","spin"],
  "dodo-goes": ["does","dogs","egos","gods","odds"],
  "chai-tend": ["aced","chad","chin","dent","hint","nice","thin","tine"],
  "law-pie": ["ape","awl","pea"],
  "bolt-peer": ["belt","blot","bore","bree","pelt","poet","pore","repo","robe","rope"],
  "legal-solve": ["eagle","easel","elves","gales","glove","lease","loves"],
  "lawn-snug": ["anus","gnus","guns","luna","nuns","sung","swag"],
  "code-wade": ["deco"],
  "ended-utter": ["ender","enter","tuner","under"],
  "dude-pity": ["died","diet","duet","duty","edit","tide","tied"],
  "heath-scarf": ["chats","crash","facts","fates","fears","feast","feats","hares","haste","hates","hears","heats","safer","share","shear"],
  "scale-smell": ["calls","laces","malls","meals","small"],
  "horse-title": ["ethos","heirs","heist","heros","hires","lotte","rites","shire","shore","store","those","tiers","totes","tries"],
  "ink-odd": ["did","din","kin","nod"],
  "feta-lads": ["dale","deaf","deal","fade","fate","fats","feat","feds","last","late","lest","lets","salt","sled","tale","teal"],
  "acts-bake": ["bask","bats","beak","beat","beck","beta","cake","cast","cats","sack","stab","tabs"],
  "belly-guard": ["bared","beryl","blade","bread","bully","burly","glade","grade","raged"],
  "sword-twins": ["downs","snows","towns","words","wrist"],
  "cure-rage": ["cage","care","ecru","gear","race","rare","rear"],
  "full-seek": ["eels","elks","else","fell","flee","fuel","sell"],
  "erase-given": ["anger","anise","eager","earns","gains","gears","gives","nears","nerve","never","rages","range","reeve","saree","serve","sever","sieve","snare","veers","verge","verse","vines"],
  "agony-rises": ["goers","greys","irons","ogres","sages","snags"],
  "font-pile": ["file","fine","flit","life","loft","open","pine","pint","plot","pole"],
  "bot-nor": ["bro","not","orb"],
  "diet-part": ["dart","date","dirt","edit","peat","tape","tide","trap","trip"],
  "club-whom": ["bloc","blow"],
  "dozen-wills": ["lined","lowes","olden","sized","slide","swill","wiles","zoned"],
  "ample-hosts": ["ethos","helms","holes","lasso","males","maple","masts","mates","meals","meats","palms","psalm","shots","slams","slosh","stamp","steam","tames","teams"],
  "fund-pork": ["drop","fond","fork","funk","pond","prod"],
  "delay-react": ["alert","alter","cadet","carte","cater","crate","dealt","decay","delta","early","later","leary","relay","trace"],
  "bound-curls": ["blurs","bolus","bonus","cloud","locus","scorn"],
  "onyx-tail": ["lint","lion"],
  "bad-rue": ["are","bud","dab","era"],
  "amber-blend": ["amend","blade","bleed","bream","edema","embed","laden","learn","named","ramen","rebel","renal"],
  "awry-neat": ["ante","rate","tear","tern","want","wart","wary","year"],
  "gone-wish": ["egos","goes","hogs","hong","nigh","owes","show","sigh","wise","woes"],
  "snide-straw": ["anise","aster","diets","earns","nears","nerds","rates","sited","snare","stare","swain","tears","tides","waist","waits","warts","winds"],
  "snake-storm": ["aster","earns","monks","nears","rates","senor","skate","smart","snare","sneak","snore","stake","stare","steak","stoke","store","tears","trams"],
  "earl-shot": ["also","host","lars","lear","oats","rate","rats","real","star","tear","tsar"],
  "kicks-roles": ["cores","cries","loser","riles","rocks","score"],
  "dash-tune": ["ante","dues","dune","east","eats","hand","hast","hats","hunt","huts","neat","nude","seat","shut","sued","teas","than","used"],
  "drama-lemon": ["adorn","alarm","alone","anode","demon","lemma","melon","molar","monde","named","radon"],
  "pay-wag": ["way","yap"],
  "fruit-pleas": ["after","false","fares","fears","fetal","files","filet","fires","fleas","flies","fries","lapse","leafs","leaps","leapt","pales","parse","pears","petal","piles","plate","pleat","plies","refit","safer","serif","spare","spear","spiel","spire","supra","taper","tripe","tulip"],
  "scoop-shrew": ["corps","crops","crows","hopes","howes","scope","screw","whose"],
  "cult-jobs": ["clot","colt"],
  "caper-towel": ["leapt","pacer","petal","plate","pleat","recap","taper","tower","trope","water"],
  "acid-mall": ["clad","lima","maid","mail"],
  "cute-soda": ["code","deco","does","dosa","dose","dues","oats","taco","toes","used"],
  "elder-rover": ["erode","revel"],
  "chip-gear": ["acre","arch","cape","care","chap","char","epic","pace","race","rage","rice"],
  "sails-scare": ["acres","aisle","areas","cares","crass","cries","laces","races","raise","salsa","scale","scars","slice"],
  "she-wit": ["hes","sit"],
  "bulk-test": ["best","bets","bust"],
  "lion-rows": ["iron","lows","noir","nori","owls","slow","soil","solo"],
  "shook-spell": ["hells","holes","hooks","loops","lopes","pokes","poles","polls","pools","sloop","slope","spoke","spool"],
  "flit-once": ["clot","colt","cone","file","fine","life","lift"],
  "lanky-range": ["angel","anger","angle","glean"],
  "toss-wily": ["list","lost","lots","lows","owls","slit","slot","slow","toys"],
  "diary-prong": ["dairy","dingo","grand","randy"],
  "cafe-mask": ["aces","case","cask","face","mesa","same","seam"],
  "comet-talon": ["clean","clone","colon","comte","latte","lotte","lotto","macon","matte","meant","tonal","total","totem"],
  "eat-rid": ["art","ate","rat","tea","tie"],
  "dewy-nuts": ["dust","nest","nets","sent","sewn","stud","stun","tens","tyne"],
  "ghee-reed": ["deer","herd"],
  "boats-hexes": ["bates","beast","beats","boast","haste","hates","oaths"],
  "fried-south": ["douse","dries","durst","fired","firth","frith","heirs","hires","hoist","hurst","hurts","rides","shire","shirt","shout","sired","usher"],
  "sale-sing": ["gals","isle","sane","sang","seal","sign","sine","slag","snag"],
  "milk-nose": ["eons","kiln","lien","lime","line","lone","mile","mole","noel","ones","semi","sine","sink","skim","skin"],
  "abide-death": ["abate","habit","hated"],
  "short-twins": ["horst","shins","shirt","snows","towns","wrist"],
  "rebel-wound": ["blown","bored","bowed","bowel","breed","elbow","round"],
  "did-pad": ["add"],
  "piled-viral": ["devil","diver","drive","lived","liver","pilar","plaid","pride","rapid","rival","villa"],
  "hills-sweep": ["piles","pills","plies","shill","sills","spiel","spill","weeps","welsh"],
  "crud-loop": ["coop","cord","coup","lord","ludo","polo","pool"],
  "gloss-tribe": ["biter","bolts","brits","globe","goers","gross","islet","lists","ogres","rites","slits","slots","stirs","stole","store","tiers","tiles","tires","tries"],
  "ally-band": ["bald","nada"],
  "hard-role": ["dahl","earl","hale","hare","heal","hear","hero","hole","lear","lord","lore","real","rear"],
  "fatal-tower": ["after","aloft","fetal","float","forte","latte","lotte","otter","tarot","tatar","tater","tetra","towel","treat","water","wrote"],
  "easy-talk": ["kale","lake","sake","task"],
  "medal-solar": ["armed","dales","dares","deals","dream","earls","laser","leads","madre","modal","molar","moral","reads","reals","roads"],
  "nib-pod": ["bin","dip","don","nod"],
  "blunt-tries": ["biter","blues","brunt","brute","burns","islet","rebut","rites","runts","tiers","tires","title","tribe","trite","tuber","turns","utter"],
  "aids-lamp": ["aims","lads","lids","limp","palm","said","slid","slim"],
  "actor-route": ["cuter","otter","outer","tarot","tract","truce"],
  "arson-three": ["arose","erase","ester","ether","ethos","nears","north","rents","reset","retro","saree","sheet","snare","snort","sonar","steer","stern","store","terse","there","these","thorn","those","trees"],
  "dawn-rise": ["dies","ears","eras","sand","sera","sire","wade","wand","ware","wear","weir","wide","wind","wire"],
  "teen-work": ["keto","note","rent","tern","tone","trek","woke","worn"],
  "cells-loyal": ["alley","alloy","coals","laces","lacey","lolly","scale"],
  "many-open": ["anon","mane","mean","name","nope"],
  "deaf-seat": ["east","eats","fade","teas"],
  "air-met": ["are","ate","ear","eat","era","ria"],
  "dense-pasta": ["dates","deans","needs","panes","paste","seeds","seeps","septa","spate","stade","stead","steed","steep","tapas"],
  "main-rude": ["amin","dame","damn","dare","darn","dear","mead","mina","rain","rand","read"],
  "vent-wage": ["anew","even","wane","want","went"],
  "ideas-liars": ["aides","aisle","aside","dales","deals","dries","leads","raids","rails","riles","salad","sired"],
  "pool-true": ["loop","loot","lout","polo","pore","repo","rope","tore"],
  "surf-yaps": ["fray","pass","pays","rays"],
  "ashes-spoke": ["heaps","pesos","phase","pokes","posse","shape","sheep"],
  "boom-pelt": ["belt","bolt","boot","plot","poet"],
  "nap-old": ["pan"],
  "gives-paper": ["giver","grape","grave","gripe","pager","piper","pipes"],
  "kink-trap": ["kart","part","pink","pint","pita","tarp"],
  "filed-setup": ["diets","duels","duets","edits","field","peels","piles","plies","pulse","sited","sleep","slide","spiel","spite","steed","stipe","tides","upset"],
  "obese-stump": ["bumps","meets","pesto","pests","poets","spout","steps","teems","temps"],
  "mess-tank": ["ants","mans","mass","nest","nets","sent","sets","task"],
  "loss-pile": ["isle","lies","lose","pies","pole","pose","slip"],
  "slang-tutor": ["gaunt","goals","gusto","snarl","solar","stung","tours","trout","turns"],
  "chip-snug": ["gnus","guns","gush","hips","hugs","pins","puns","push","ship","sigh","sign","sing","spin","spun","sung"],
  "arts-hire": ["airs","heir","hits","rate","rats","rear","sari","shri","star","tear","tsar"],
  "gem-leg": ["gel","mel"],
  "sheet-wrong": ["ester","ethos","goers","ogres","rents","reset","serge","snort","steer","stern","store","terse","those","tower","trees","wrote"],
  "bait-bars": ["bras"],
  "rinse-super": ["ensue","puree","purse","reins","rerun","resin","risen","runes","rupee","seine","siren","spies","spire","spurs"],
  "agree-grant": ["agate","anger","arena","eager","grate","terra"],
  "rode-told": ["lore","redo","role"],
  "souls-waved": ["douse","doves","saved","vases","vowed","waves"],
  "codes-rocks": ["corks","doers","dorks","doser","score"],
  "lawn-sail": ["awls","swan","wall"],
  "ease-mild": ["dale","dams","deal","deli","dies","idle","lame","lead","lime","male","meal","mesa","mile","seam","semi","side"],
  "ape-ivy": ["ave","pea","pie","yap","yip"],
  "deal-over": ["aero","dale","dare","dear","lead","love","read","reed","rove"],
  "neat-sour": ["ante","ears","east","eats","eras","near","oats","ours","ruse","seat","sera","soar","sure","teas","tune","unto","user"],
  "paste-style": ["asset","lapse","leaps","pales","pelts","pleas","sales","seats","septa","slept","spate","spelt","tapes","tests","yeast"],
  "dibs-dude": ["bids","buds","died"],
  "foot-pigs": ["figs"],
  "tired-whale": ["death","ether","hated","lathe","there","three","tried","weird","wider","wired"],
  "nifty-rider": ["diner","drier","fiery","infer"],
  "wash-yaks": ["ashy","hays","shaw","shay"],
  "proud-tales": ["adult","autos","dealt","delta","lapse","leaps","least","pales","pedal","pleas","pores","poser","pours","prose","roped","ropes","sault","slate","slurp","spore","stale","steal","store"],
  "posed-until": ["depot","dopes","douse","dunes","lopes","louse","nudes","opted","outed","pilot","poles","polis","slope","spend"],
  "cast-neck": ["acts","ants","cask","cats","nest","nets","sank","sect","sent","tens"],
  "cigar-meats": ["cages","carte","caste","cater","crate","gamer","games","grace","mages","marge","mates","steam","tamer","tames","teams","trace"],
  "guise-rally": ["agile","arise","earls","gales","guile","laser","legal","lures","reals","rules","surly"],
  "ghee-reds": ["deer","herd","here","reed","rees"],
  "song-unit": ["sing","snog","tins","tons"],
  "slain-spike": ["aisle","kilns","lakes","leaks","links","nails","peaks","pikes","pinks","sepia","slink","snail","spank","speak"],
  "cage-spit": ["ages","pies","pits","sage","stag","tips"],
  "keep-lane": ["keen","lean","pale","peak","peek","peel","plan","plea"],
  "ice-odd": ["did","doc","doe"],
  "gone-solo": ["eons","goon","lose","ones","sole","soon"],
  "dust-toys": ["dots","stud"],
  "hint-wake": ["anew","than","thin","twin","wane","weak","wine"],
  "natal-yodel": ["laden","olden","tonal"],
  "pulse-raced": ["acres","alder","cadre","capes","cards","cared","cares","cedar","crude","cures","curse","earls","laser","leaps","lured","lures","paced","paces","pales","peace","pedal","plead","pleas","races","reals","ruled","rules","scape","scare","space"],
  "kind-rugs": ["dunk","gird","grid","rigs","rind","runs","sink","sunk"],
  "awful-laden": ["fella","ladle","waned"],
  "blast-crest": ["brats","celts"],
  "fad-goo": ["ago","god"],
  "sets-talk": ["elks","last","less","lest","salt","stat","test"],
  "blade-crane": ["bared","beard","cadre","cared","cedar","clade","decal","laced","lance","raced","rance"],
  "beer-goji": ["bore","bree","gore","ogre","robe"],
  "ought-since": ["count","hints","hunts","shine","shunt","thugs","tonic","tough"],
  "life-lord": ["file","lore","role"],
  "part-shut": ["arts","huts","rats","star","trap","tsar"],
  "peers-skits": ["piers","rises","risks","speer","spire","spite","spree","steep","stipe"],
  "added-onset": ["dates","deans","dosed","dotes","nosed","noted","notes","sedan","seton","stade","stead","stone","toned","tones"],
  "cafe-rush": ["aces","case","cash","cues","ears","eras","face","fear","rash","ruse","sera","sure","user"],
  "one-rod": ["don","eon"],
  "coal-edit": ["clad","coat","coil","cola","dale","date","deal","deli","diet","idle","lead","tide","tied"],
  "fuel-gate": ["fate","feta","flat","flea","gale","glut","leaf"],
  "fired-tests": ["defer","diets","drift","edits","ester","feeds","fires","first","fists","freed","frees","frets","fried","fries","reefs","reset","rifts","rites","serif","sited","sites","steed","steer","terse","tides","tiers","tired","tires","trees","tried","tries"],
  "roles-tiger": ["goers","islet","loser","ogres","riles","stole"],
  "bent-made": ["amen","bane","bead","bean","been","dame","deem","mane","mead","mean"],
  "bases-tempo": ["asset","beams","mates","meats","meets","pasts","pesto","pests","poets","seats","spats","steam","steps","tames","teams","teems","temps"],
  "poker-sense": ["keeps","noses","opens","peeks","perks","pokes","reeks","senor","sneer","snore","spoke","spork"],
  "near-raid": ["arid","dare","dean","dine","dire","earn","nada","rare","read","rear","rein","ride"],
  "lunch-share": ["aches","cause","chase","hares","hears","leach","nurse","runes","sauce","shear"],
  "guy-set": ["get","gut"],
  "lace-sulk": ["aces","case","cask","clue","cues","lack","sack","seal","suck"],
  "able-seen": ["bale","bane","bees","eels","lane","lean","lens"],
  "gripe-lingo": ["prong"],
  "joint-salts": ["joins","joist","lasts","satin","slant","slats","slots","stain"],
  "flee-nova": ["feel","flea","lane","lean"],
  "tapas-tapes": ["septa","spate"],
  "info-root": ["fort","torn","toro"],
  "caper-lyric": ["carer","clear","pacer","paler","pearl","pilar","place","racer","recap"],
  "scene-spill": ["peels","piles","pills","plies","since","sleep","slice","snipe","spell","spiel","spine"],
  "fiery-sorts": ["fires","first","forts","forty","foyer","frost","rifts","rises","roses","serif","sites","sores","sorry","stirs"],
  "demo-done": ["deem","dome","doom","mode","node"],
  "acts-rats": ["cast","star","tsar"],
  "alert-truce": ["alter","carte","cater","crate","cuter","elect","later","react","terra","trace","truer"],
  "grid-poll": ["drip","gird","gold"],
  "glow-hand": ["dang","gold","howl","whoa"],
  "siren-viral": ["liars","liver","rails","rains","reins","resin","riles","rinse","riven","sarin"],
  "salon-solid": ["dials","idols","loans","loins","nails","slain","snail","solon"],
  "new-sad": ["ads","and","end","saw","wan"],
  "folk-mice": ["come","life","lime","mile","milk","mole"],
  "renew-timer": ["enter","inert","inter","meter","metre","mitre","remit","tween","twine"],
  "dried-hairy": ["aided","dairy"],
  "chug-team": ["cage","came","mace","mach","mate","math","meat","meta","mute","tame","thug"],
  "early-rated": ["alder","dealt","delta","eared","layer","leary","teary","trade"],
  "mail-road": ["alma","arid","lair","lama","liar","lima","limo","maid","milo","modi","raid","rail"],
  "here-kids": ["desk","disk","heed","heir","hers","hide","hire","kris","risk","shed","shri","skid"],
  "pouch-slate": ["chaos","clash","clues","coupe","halts","laces","leapt","least","oaths","petal","plate","pleat","poach","scale","shalt","shout","stale","steal","tales"],
  "kill-lime": ["mile","milk"],
  "out-sir": ["its","sri"],
  "area-ride": ["aide","arid","dare","dear","dire","raid","rare","read"],
  "rank-wild": ["darn","dawn","lark","rand","rink","wand","wind","wink"],
  "chain-seems": ["anise","chasm","china","masse","means","mensa","names","niche","seams","seine","shams","shine"],
  "binge-tasty": ["agent","bates","beats","began","begin","being","bites","gates","natty","nitty","stage","state","tangy","taste","tinge"],
  "cube-lead": ["bled","dale","deal","dual","lube"],
  "crews-setup": ["crust","cures","purse","screw","spurt","stews","super","sweep","truss","upset","users","weeps","wests"],
  "sworn-tears": ["aster","nears","rates","roses","sears","senor","snare","snore","sores","stare","store","straw","tenor","toner","warns","warts"],
  "pink-wolf": ["flop","flow","wink"],
  "edges-trawl": ["alert","alter","aster","dates","dealt","delta","eased","erase","later","leger","rates","saree","sawed","serge","stade","stare","stead","swear","tears","wares","warts","wears"],
  "guy-wet": ["get","gut"],
  "later-ounce": ["acorn","actor","alert","alter","canoe","clean","court","learn","ocean","renal","rouen","route","uncle"],
  "moss-sole": ["lose","mole"],
  "sofa-teen": ["ease","fate","feta","font","nose","note","ones","safe","seen","tone"],
  "artsy-fifth": ["faith","saith","shift","stray","trays"],
  "makes-pleas": ["lapse","leaps","meals","pales","pease","peels","sleep","speak"],
  "acts-sure": ["acre","arcs","care","cars","cats","race","ruse","scar","sect"],
  "nude-sets": ["dues","dune","ends","need","nets","nuts","seed","send","sent","stun","teen","tees","tens","tune","used"],
  "drops-sense": ["dense","doers","dopes","doser","doses","needs","nerds","pesos","pores","posed","poser","poses","posse","roped","ropes","roses","sores","spend","spore"],
  "fake-grew": ["reef","wage"],
  "her-one": ["eon","nor"],
  "join-rats": ["airs","arts","iron","noir","nori","rant","sari","sort","star","torn","tsar"],
  "rises-threw": ["riser","sites","tiers","tires","tries","weirs","wires","wiser","write"],
  "acre-item": ["care","cram","emit","mace","mart","mate","meat","meta","mice","mite","race","rate","rice","rite","tame","team","tear","time","tire","tram","trim"],
  "lawn-risk": ["kris","walk"],
  "baron-stale": ["arose","banal","baton","bleat","earls","laser","least","nasal","reals","santo","slant","slate","snarl","snort","sonar","steal","store","tales"],
  "baby-nope": ["bane","bean","bone","bony","open"],
  "rotor-timed": ["ditto","merit","metro","mired","mitre","otter","remit","retro","timer","tried","trier","trite"],
  "fold-pelt": ["felt","left","loft","plod"],
  "shots-tenor": ["horns","horst","hosts","nests","north","noses","notes","onset","ortho","otter","senor","seton","short","snore","stent","stern","stone","store","tents","thorn","toner","tones","totes"],
  "ass-pug": ["gas"],
  "hags-pill": ["alps","gaps","gasp","hill","laps","lash","lips","pals","sigh","slap","slip"],
  "grown-heals": ["angel","angle","gales","glean","grows","hales","holes","howes","shale","wages","whose"],
  "levy-rile": ["ever","evil","leer","reel","veil","very","vile","yell"],
  "seven-tract": ["aster","canes","caste","earns","eaten","enact","evens","nears","rates","snare","stare","tater","tears","tease","tetra","treat"],
  "poor-tail": ["alto","loop","loot","opal","polo","pool","riot","root","roti","tori","toro","trio"],
  "ages-tour": ["aero","gets","gust","guts","rage","ragu","sage","toes","tore"],
  "puppy-rinse": ["nurse","piers","pines","piper","pipes","prune","reins","resin","ripen","risen","runes","siren","snipe","spine","spiny","spire","super","syrup","upper"],
  "eaten-liars": ["aisle","areas","arena","arise","aster","inert","inlet","inter","islet","least","rails","raise","rates","rites","slate","stale","stare","steal","tales","tease","tiers","tiles","tires","tries"],
  "blobs-write": ["below","bible","biter","bolts","bowel","bower","bowls","bribe","brits","brows","elbow","towel","tower","worst","wrist","wrote"],
  "pan-rue": ["are","ear","era","nap","pea","pun","ran","run"],
  "front-prize": ["finer","fritz","infer","prone","ripen"],
  "fact-newt": ["want","went"],
  "earth-weeds": ["aster","dares","draws","eased","ester","ether","hater","heart","rates","reads","reeds","reset","sawed","sewed","stare","steer","straw","sweat","swede","tears","tease","terse","there","three","threw","trees","wards","warts","waste","wheat","wrath","wrest"],
  "acid-dash": ["cash","dads"],
  "ships-skate": ["haste","hates","heaps","heats","heist","kites","peaks","phase","pikes","skips","speak","spike","stake","stash","steak","takes","tasks"],
  "shore-snide": ["heirs","heros","hides","horse","nosed","reins","resin","rinse","risen","senor","shire","siren","snore"],
  "link-meat": ["kale","kiln","lake","late","lent","lint","make","maki","mate","meta","mink","tail","tale","tame","teal","team"],
  "ally-note": ["lent","lone","noel","tale","teal","tone"],
  "grip-knew": ["grew","ping","pink","wink"],
  "rod-yep": ["per","red"],
  "film-past": ["amps","fast","fats","fits","flat","flit","lamp","lift","limp","maps","pats","pits","plat","sift","spat","spit","taps","tips"],
  "ashes-craft": ["acres","areas","cares","carte","cases","caste","cater","chess","chest","crate","earth","facts","hares","haste","hater","hates","hears","heart","heats","react","scare","scarf","share","shear","trace"],
  "agony-rites": ["angst","goers","irons","ogres","saint","satin","stage","stain","tangy","tiers","tires","tries"],
  "hers-unit": ["hint","runs","runt","ruse","shin","true","turn","user"],
  "creed-their": ["chide","cider","cried","deter","ether","there","three","tired","trier"],
  "made-toes": ["dame","dams","date","demo","dote","dots","east","mead","mesa","mode","mods","same","seam","seat","some","teas"],
  "kind-owns": ["ions","sink","snow"],
  "sheep-walls": ["eases","helps","lapse","leaps","pales","pease","pleas","seals","welsh"],
  "oils-slap": ["alps","laps","opal","pals","poll","slip","soil"],
  "don-law": ["awl","low","nod"],
  "fatal-nasty": ["flats","natal","natty","slant"],
  "alert-study": ["adult","alter","delay","delta","dusty","early","later","layer","leary","relay","strut","sturt","surly","tater","teary","tetra","treat","trust","tyres","ultra"],
  "cask-guns": ["cans","cuss","gnus","gunk","sack","sang","scan","snag","snug","sung"],
  "loopy-traps": ["loops","parts","ports","prost","sloop","spool","sport","stoop","strap"],
  "cute-read": ["dare","dear","duct","tree","turd"],
  "nails-stake": ["alien","inlet","islet","kites","knits","lasts","least","lists","nasal","sails","salsa","salts","skate","skits","slain","slant","slate","slats","slits","snail","stale","stank","steak","steal","stink","taken","takes","tales","tasks","tiles"],
  "base-same": ["mesa","seam"],
  "gosh-peel": ["ghee","glee","hogs","hops","logs","pole","posh","shop","slog"],
  "fog-oaf": ["goo"],
  "adult-faded": ["dated","fated"],
  "cars-nice": ["acne","acre","arcs","cane","care","earn","near","race","rein","scan","scar"],
  "bops-soft": ["pots","spot","stop","tops"],
  "clubs-grape": ["bagel","barge","brags","bugle","bulge","cable","caper","carbs","claps","clasp","crabs","craps","curbs","gable","grabs","grasp","pacer","pager","place","purge","recap","scalp","scrap","scrub"],
  "dull-soda": ["also","doll","dosa","load","olds","saul"],
  "edges-reset": ["dregs","dress","ester","geese","serge","steed","steer","terse","trees"],
  "taco-tons": ["ants","cast","cats","coat","cost","scot"],
  "clink-veers": ["ceres","creek","cries","evens","scene","serve","seven","sever","since","verse","vines"],
  "goats-stole": ["goals","lasso","lasts","least","loose","salts","slate","slats","slots","solos","stale","state","stats","steal","tales","totes"],
  "ice-old": ["doc","lid"],
  "lady-tick": ["city","clay","idly","lacy","lick","tack"],
  "ember-noise": ["boner","bones","bores","borne","irons","mines","robes","sober"],
  "hides-lines": ["liens"],
  "feed-grab": ["aged","berg","brag","deaf","edge","fade","grad"],
  "milk-sent": ["elks","lest","lets","list","mink","mint","nest","nets","silk","skin","slit","tens","tins"],
  "share-wakes": ["areas","ashes","aware","hares","rakes","sakes","shear","wreak"],
  "crash-loses": ["cares","chaos","chose","crass","cress","earls","halos","holes","laser","lasso","races","reach","reals","scare","scars","shoal","soles"],
  "fear-trim": ["emit","fame","fare","fire","firm","item","mart","mate","meat","meta","mite","rate","rife","rite","tame","team","tear","time","tire","tram"],
  "force-metre": ["comer","comte","creme","forte","freer","meter","metro"],
  "eel-fat": ["eat","tea","tee"],
  "glad-lout": ["alto","dull","goat","loud","ludo","tall","toga"],
  "ether-spies": ["rites","sheep","sheet","sites","spire","there","three","tiers","tires","tries"],
  "lake-slim": ["aims","isle","kale","leak","lies","lima","mask","mill","sake"],
  "cited-souls": ["cites","clots","cloud","colts","diets","dotes","douse","edict","edits","issue","lists","locus","lucid","sited","slits","slots","sulci","tides"],
  "bare-rule": ["able","bale","bear","blue","earl","lear","lure","real","rear"],
  "gloat-press": ["gales","gator","gears","gloss","goals","grate","great","lapse","leaps","leapt","pales","parse","pears","pelts","petal","plate","pleas","plots","ports","prost","rages","slept","spare","spear","spelt","sport","strep","taper"],
  "cover-tasks": ["acres","asset","aster","avert","cares","carve","cases","casks","caves","cores","corks","crave","karts","overt","races","racks","rates","rocks","scare","score","seats","socks","stare","stark","stave","store","stork","stove","tears","trove","votes"],
  "grass-winds": ["dings","drags","grads","signs","wards"],
  "dip-top": ["opt","pot","tip"],
  "bond-salt": ["ants","bald","band","blot","bold","dons","lads","last","lost","lots","nods","olds","slot","sold","tons"],
  "coral-diver": ["carol","clove","cover","crore","devil","drier","drive","drove","laird","lidar","lived","loved","older","order","relic","riled","valid","vicar"],
  "arts-pine": ["near","pins","pits","rate","rats","snip","spin","star","tear","tips","tsar"],
  "fast-pole": ["apes","fats","flat","flea","foes","leap","loft","pale","past","pats","peas","plat","plea","plot","pose","post","pots","safe","soft","spat","spot","taps","tops"],
  "bendy-plane": ["badly","benny","blend","panel","payed","pedal","penal","plead"],
  "lands-outer": ["adorn","alert","alter","lanes","later","leans","learn","least","radon","renal","rouen","route","sound","stale","steal","tales","toads"],
  "grip-soon": ["goon","grin","ions","prog","pros","rips"],
  "birth-sober": ["bores","brits","broth","heirs","heros","hires","horse","horst","riser","robes","shire","shirt","shore","throb"],
  "decor-spend": ["coded","coder","codes","cores","credo","crops","dense","doped","dopes","ender","erode","needs","pores","posed","poser","prose","roped","ropes","score","sneer","spore"],
  "wag-yap": ["pay"],
  "fish-hull": ["full","hill","lush"],
  "facts-tiger": ["cafes","carte","caste","cites","craft","crate","faces","farce","gates","graft","grate","great","grief","grift","react","stage","trace","tract"],
  "gases-taste": ["asset","gates","sages","state","stats","tease"],
  "beat-whip": ["abet","beta","bite","thaw","what","whit","with"],
  "head-tiny": ["date","dent","hind","tend","tyne"],
  "dodge-tires": ["diets","doers","dosed","doser","dries","edits","erode","grids","grist","grits","rides","rites","sided","sired","sited","store","tides","tiers","tiger","tries"],
  "rolls-toned": ["drone","loser","noted","notes","older","onset","roles","senor","seton","snore","stole","tolls","tones"],
  "case-rugs": ["aces","cage","cues","ears","eras","gear","rags","ruse","sera","sure","urge","user"],
  "liked-swell": ["kills","lisle","sewed","skied","skill","slide","swede","weeds","welds","wells"],
  "bus-ewe": ["sub","sue","wee"],
  "beds-bite": ["best","bids","bits","dibs"],
  "shiv-tent": ["hits","nest","nets","sent","site","tens","ties"],
  "space-train": ["acres","arise","capes","cares","carte","cater","crate","irate","paces","pains","rains","raise","react","sarin","scape","scare","sepia","trace"],
  "brink-cards": ["acids","bards","barns","basin"],
  "fate-miff": ["emit","feat","feta","fife","item","mate","meat","meta","mite","tame","team","time"],
  "gold-lots": ["doll","lost","slog","slot"],
  "genes-strip": ["gents","gripe","grist","grits","nests","piers","pines","pints","rests","rises","sense","serge","singe","snipe","speer","spent","spine","spire","spree","stirs","strep","trips"],
  "look-mind": ["doom","idol","kiln","kilo","mink","modi","monk"],
  "mango-wills": ["aglow","allow","among","lawns","malls","mills","swill","swing","wagon","walls","wings"],
  "ask-rip": ["spa"],
  "patch-witty": ["pitch","watch"],
  "edged-resin": ["deeds","dense","dries","genie","greed","green","grind","needs","nerds","reeds","reign","reins","rides","ridge","rinds","rinse","risen","seine","sired","siren","sneer","snide"],
  "drop-isle": ["does","dose","lies","lips","pods","prod","redo","rile","sled"],
  "term-unit": ["emit","mint","mite","time","tint","true","turn"],
  "linen-wears": ["aisle","alien","earls","easel","laser","lease","liars","liens","lines","rails","reals","renal","swear","swine","wares"],
  "raids-scope": ["adore","aides","aired","cider","coder","codes","cords","corps","credo","cried","crisp","decor","discs","epics","ideas","opera","pairs","price","roads","scrip","sepia","soaps","sodas","spice"],
  "drew-tear": ["dare","dear","deer","draw","rate","read","tree","wade","ward","weed"],
  "farm-fool": ["foam","form","loaf","rolf"],
  "moss-nose": ["eons","ones"],
  "bob-tar": ["art","bar","bot","bra","bro","orb","rat","rot","tab"],
  "glove-probe": ["grove"],
  "rogue-spent": ["erupt","goner","grout","gusto","notes","outer","puree","rouge","route","rupee","seton","setup","stone","tenor","toner","tones","tongs","upset"],
  "iron-once": ["cone","conn","core","corn","nice","noir","nori"],
  "chin-saga": ["cain","hags","inch","nags","shin","snag"],
  "great-house": ["argue","auger","eager","earth","ethos","grate","gusto","hater","heart","heres","hurst","hurts","serge","sheer","south","surge","those","urges","usher"],
  "later-sells": ["alert","alter","asset","aster","earls","ester","lasts","least","leers","rates","reals","reels","reset","sales","salts","seals","seats","slate","slats","sleet","stale","stall","stare","steal","steel","steer","tales","tears","terse","trees"],
  "deal-torn": ["alto","ante","dale","dean","late","lead","load","nerd","rent","tale","teal","tern"],
  "cloak-stern": ["canto","clerk","enact","lakes","lance","lanes","leaks","leans","loans","rents","salon","santo","skate","snort","stake","steak","takes"],
  "lace-sift": ["aces","acts","case","cats","fast","fats","fist","fits","flat","flea","flit","leaf","lice","life","lift","safe"],
  "row-won": ["now","own"],
  "boil-hand": ["bail","band"],
  "cake-roll": ["call","coke","lace","lack","lark","lear","lore","rake","real","role"],
  "pools-quake": ["loops","sloop","spool"],
  "cruel-fails": ["cries","cures","curls","curse","fires","flail","flier","fries","lilac","relic","rifle","sauce","serif","ulcer"],
  "dark-sets": ["drek"],
  "busy-nerd": ["beds","bred","buds","bury","buys","ends"],
  "about-dolly": ["allot","atoll","bally","bayou","bloat","loyal","outdo"],
  "cute-dish": ["cite","cues","dies","diet","dues","duet","edit","itch","side","sued","tied","used"],
  "ear-pip": ["ape","are","era","pea","rip"],
  "arose-throw": ["ethos","hares","hears","other","rears","retro","share","shear","store","worst","worth"],
  "gaps-mint": ["amps","gasp","mans","maps","nags","pigs","sang","sing","snag","tang","ting"],
  "rays-told": ["dory","lars","last","lord","lost","rosy","salt","slot","stay","toys"],
  "fruit-shape": ["arise","heaps","parse","parts","paths","pears","phase","purse","raise","saith","spare","spear","spurt","stair","strap","traps"],
  "matte-sites": ["asset","emits","items","mates","meats","mites","mitts","seats","smite","state","stats","steam","tames","teams","tease"],
  "scan-stir": ["ants","arcs","arts","cans","rats","scar","star","tsar"],
  "font-hack": ["chat","hank","khan","than"],
  "cease-still": ["asset","caste","cites","easel","eases","isles","islet","laces","lasts","lease","lilts","lisle","lists","sales","salts","scale","seals","seats","sites","slate","slats","slits","stale","stall","steal","tales","tiles","tills"],
  "aids-ball": ["alas","bald","bids","bill","dibs","laid","libs","said","sail","slab"],
  "dad-nod": ["add","don"],
  "bike-jobs": ["jibe"],
  "blame-siren": ["anise","brine","easel","lanes","leans","lease","leers","mains","males","meals","minas","rebel","reels","reins","rinse","risen"],
  "ocean-parts": ["apnea","atone","canoe","capes","conte","craps","orcas","paces","paras","paste","pecan","roast","scape","scrap","septa","space","spate","strap","traps"],
  "cape-line": ["acne","cane","epic","lane","lean","leap","lien","pace","pile","plea"],
  "brass-fiery": ["berry","fairs","fairy","fires","fries","fryer","serfs","serif"],
  "canal-talks": ["atlas","clank","slack","snack","stalk","stank","tanks"],
  "belt-wool": ["bell","blot","bolt","lobe","lowe"],
  "head-stop": ["apes","dose","doth","dots","heap","hope","past","pats","peas","pose","post","pots","spat","spot","taps","tops"],
  "hung-once": ["cone","neon"],
  "toy-yes": ["set"],
  "chin-coat": ["icon","inch","itch","taco"],
  "rebel-stare": ["alert","aster","beets","belts","beret","beset","brees","earls","easel","eater","erase","laser","later","lease","least","rates","reals","saree","slate","stale","steal","tales","tears","tease","terra"],
  "push-take": ["apes","east","eats","hast","hats","huts","peas","puke","seat","shut","teas"],
  "lugs-tiff": ["fist","gift","gist","gust","guts","sift","slug"],
  "romps-tense": ["meets","mores","nests","notes","onset","proms","senor","seton","sneer","snore","spent","sperm","stomp","stone","teems","teens","tempo","temps","tomes","tones"],
  "knees-swats": ["askew","sense","snake","sneak","stank","stews","tanks","weeks","wests"],
  "motel-never": ["enter","metre","metro","mover","nerve","tenor","toner"],
  "cedar-event": ["cadet","cadre","cared","carve","crave","eared","ender","never","raced"],
  "its-pan": ["nap","sap","sit","tin"],
  "floor-prick": ["flick","frock"],
  "rated-until": ["alert","alter","audit","later","trade","tread","trend","triad","trial"],
  "dawn-tips": ["dips","pads","pant","pats","pint","pits","spat","spit","swat","taps","twin","wand","want","wits"],
  "deep-onto": ["done","node","nope","peed","poet"],
  "eager-llama": ["agree","alarm","eagle","gamer","glare","gleam","lager","large","legal","leger","marge","regal"],
  "loved-tasty": ["dales","dates","deals","dotes","leads","stade","stead","yeast"],
  "cord-flat": ["coat","ford","taco"],
  "ether-loses": ["ester","loser","reset","roles","sheet","soles","terse","there","these","three","trees"],
  "arms-wise": ["aims","eras","mare","mars","rams","sera"],
  "drop-plug": ["gold","plod","prod","prog","prop","pulp"],
  "named-papal": ["amend","ample","apple","panel","penal","plane"],
  "isles-thank": ["asset","haste","heats","kilns","likes","links","seats","skate","stake","stank","steak","takes","tanks"],
  "glen-stir": ["gent","grit","lens","ling","nest","nets","rest","tens","ting","tins"],
  "score-stand": ["acres","aster","canes","cares","cones","cords","cores","darts","notes","onset","races","rates","scare","scone","seton","stare","stone","store","tears"],
  "horns-wires": ["heirs","heros","hires","horse","shore","swore","weirs","wiser","worse"],
  "glib-pins": ["lips","sign","slip","snip","spin"],
  "doom-lets": ["does","dome","dose","dots","lest","loom","lose","lots","melt","mode","mole","mood","slot","sole","solo"],
  "cave-mice": ["mace"],
  "nun-top": ["nut","opt","pot","put","ton"],
  "back-fare": ["bare","bear","cafe","fear"],
  "lone-raid": ["arid","darn","dial","earn","laid","land","lane","lean","noel","rand"],
  "aptly-peach": ["alpha","cheap","cheat","lathe","patch","playa"],
  "leads-slain": ["aisle","alien","anise","dales","deals","deans","lands","nails","sedan","snail"],
  "dose-sigh": ["dies","dish","does","egos","goes","hogs"],
  "looks-packs": ["lacks","locks"],
  "badge-diner": ["adder","bared","beard","began","being","binge","bread","bride","brine","bring","dared","dried","grand","grind"],
  "pelt-take": ["keep","leap","pale","peak","peek","peel","plat","plea","tale","teal","tele"],
  "seats-waste": ["stews","swats","sweet","tease","wests"],
  "dim-web": ["bed","med","mid"],
  "inter-pinch": ["inert","ripen","thine","tripe"],
  "disc-here": ["deer","dies","dire","heir","hire","reed","ride","side"],
  "lube-mill": ["bile","bill","blue","limb","mile","mule"],
  "pipes-stool": ["pelts","pesto","pests","piles","plies","plots","poise","polio","polis","posts","slept","spelt","spiel","spies","spots","steps","stole","stoop","stops","tools"],
  "dotes-lanes": ["dates","deans","leans","least","nosed","sedan","slate","stade","stale","stead","steal","stole"],
  "damn-ties": ["ante","dams","dean","dies","dine","eats","mast","mats","mint","mist","neat","seat","side","site","teas","tine"],
  "lint-weak": ["kale","kiln","lake","late","leak","lent","link","newt","tale","teal","twin","wait","wake","went","wink"],
  "moats-thing": ["among","atoms","hints","ingot","mango","maths","might","moans","moist","night","omits","santo","smith","stoat","tango","toast"],
  "ages-tarp": ["arts","east","eats","gets","para","part","peat","rags","rats","sage","seat","tape","teas","trap","tsar"],
  "aid-dab": ["add","bad","bid","dad"],
  "bait-sung": ["ants","bung","bunt","gnus","guns","nags","nuts","sang","snag","snug","stun"],
  "self-toss": ["felt","left","lest","lets","loft","loss","lost","lots","sets","slot"],
  "crust-ships": ["chips","pitch","scrip","spurs","spurt","stirs","strip","trips","truss"],
  "gift-solo": ["fits","goof","list","lost","lots","oils","sift","slit","slot","soft","soil"],
  "bliss-ready": ["based","bases","beads","dares","dries","reads","rides","sears","sired","slabs","years"],
  "pole-very": ["ever","love","over","peel","peer","ploy","poly","pore","prey","repo","rove","yelp"],
  "edged-onset": ["deeds","dense","dosed","dotes","needs","nodes","nosed","notes","seton","steed","stone","teens","tones"],
  "nab-rib": ["ban","bra","nib"],
  "bout-door": ["odor"],
  "clef-leaf": ["cafe","calf","fall","feel","flea","flee"],
  "shake-smear": ["hares","mares","marks","share","shark","shear"],
  "beam-plod": ["balm","bead","bold","dope","lamb","lamp","palm"],
  "alley-artsy": ["layer","leary","relay","stray","teary","trays"],
  "bunts-folds": ["bonds","fonts","lofts"],
  "keen-real": ["earl","earn","kale","keel","knee","lake","leak","lear","leer","reel"],
  "motel-vines": ["emits","items","lemon","liven","melon","mines","mites","omens","ovens","smite","stove","tomes","veins","votes"],
  "curse-filet": ["clues","crust","cults","cures","cuter","files","fires","first","flies","flits","fries","fuels","lifts","refit","rifts","serif","slice","truce"],
  "ray-vie": ["ave","ear","era"],
  "chant-stump": ["chump","hunts","match","maths","pants","punch","punts","shunt","stamp"],
  "nick-pass": ["cans","pack","pick","pics","sank","sans","saps","scan","sins","skin","skip"],
  "dean-tune": ["ante","dune","neat","nude","teen","tuna"],
  "cress-ideas": ["aides","arise","aside","cares","races","raise","rises","scare"],
  "chai-lens": ["aces","case","cash","chin","hail","lash","lien","line","nice","seal"],
  "casts-necks": ["casks","nests","scant","scent","sects","snack"],
  "huge-nets": ["gene","ghee","gnus","guns","hugs","huts","nest","nuts","sent","shut","snug","stun","sung","tens","thus","tune"],
  "burns-heats": ["bates","beast","beats","burst","haste","hates","hurst"],
  "cuts-wish": ["itch","such","whit","wits","wuss"],
  "cargo-named": ["amend","among","argon","cadre","cameo","cared","cedar","grand","groan","orang","organ"],
  "berth-micro": ["birth","comer","comet","comte","mirth","orbit"],
  "east-lamp": ["alps","apes","eats","laps","last","malt","mate","meta","palm","pals","peas","salt","seat","tame","team","teas"],
  "cord-rile": ["clod","cold","core","lice","lore","role"],
  "leave-rites": ["aisle","arise","easel","elite","erase","ester","islet","lease","raise","raves","reset","rivet","salve","saree","saver","silva","slave","sleet","steel","steer","terse","tiers","tiles","tires","tries","vials"],
  "slosh-usher": ["euros","holes","hoses","house","roles","roses","rouse","shoes","sores"],
  "boa-rim": ["oar","ria"],
  "coin-game": ["cain","came","icon","mace"],
  "kill-life": ["file"],
  "stall-worse": ["asset","lasso","lasts","least","loser","lower","roles","rolls","roses","salts","seats","slate","slats","sores","stale","steal","sweat","swore","tales","waste","wrest"],
  "hedge-intro": ["diner","doing","ether","horde","inert","ingot","inter","nitro","north","other","thong","thorn","three","tinge"],
  "flit-liar": ["fiat","flat","lair","lift","rail","tail","tall","till"],
  "mode-pray": ["demo","dome","mare","mayo","pear","reap"],
  "caper-pence": ["crane","crepe","pacer","paper","peace","rance","recap"],
  "dairy-kinds": ["dandy","diary","randy","ranks","rinds","snark"],
  "queer-warty": ["weary"],
  "ilk-sad": ["ads","aid"],
  "relay-table": ["abate","beryl","early","leary","rally","rebel","tally","telly"],
  "iron-test": ["nest","noir","nori","note","riot","roti","sent","sine","site","stir","tens","ties","tone","tori","torn","tort","tote","trot"],
  "bogus-raise": ["argue","argus","arise","auger","gears","goers","grass","gross","ogres","rages","rogue","sugar"],
  "cafe-talk": ["face","feat","feta","lace","late","tale","teal"],
  "ends-want": ["ante","date","dent","neat","sane","send"],
  "caves-niche": ["canes","chins","chive","haven","niece","since","veins","vices"],
  "blurt-loops": ["blurs","polls","pools","rolls","sloop","spool","troll","turbo"],
  "sole-very": ["eels","else","ever","lose","love","over","rees","rosy","rove","sore"],
  "ewe-pad": ["pea","wee"],
  "knead-plots": ["lakes","lapse","leaks","leaps","pales","panes","pedal","pelts","pleas","slept","snake","sneak","spelt","spent"],
  "near-read": ["dare","dear","earn","rare"],
  "bask-seed": ["asks","bake","bead","beak","seek"],
  "lance-scout": ["ascot","aunts","autos","canes","clean","clout","coats","scant","tacos"],
  "alley-start": ["artsy","latte","least","rally","slate","stale","state","steal","stray","tales","tarts","taste","tatar","tells","trays","yeast","yells"],
  "guns-race": ["acre","arcs","cage","care","cars","earn","ecru","gnus","near","runs","sang","scar","snag","snug","sung"],
  "furry-seals": ["false","fares","ferry","fleas","flyer","fryer","leafs","leafy","safer","sales","sears","slurs","years"],
  "epic-heal": ["ache","cape","chap","chip","hale","leap","pace","pale","plea"],
  "door-knit": ["dint","knot","odor","rink","rook"],
  "axe-yew": ["awe"],
  "moved-pause": ["amuse","dumas","modus","moves"],
  "maps-open": ["amps","mane","mean","mesa","name","nope","pose","same","seam","soap"],
  "side-tide": ["edit","tied"],
  "atlas-sheep": ["alpha","ashes","asset","hales","heals","heaps","helps","lasts","leapt","leash","least","paste","pelts","petal","plate","pleat","salts","seats","septa","shale","shape","slash","slate","slats","slept","spate","spelt","splat","stale","steep","tales","tapes","tease"],
  "motel-wages": ["gleam","golem","mages","mates","meats","metal","steam","sweat","tames","teams","tomes","waste"],
  "dork-fund": ["fond","fork","funk","rudd"],
  "fast-newt": ["ants","fats","nest","nets","tens","want","went"],
  "flame-skull": ["fella","flake","flume","lakes","leaks","makes","males","malls","meals","mules","mulls"],
  "rail-sits": ["airs","arts","iris","lair","last","liar","rats","sail","salt","slit","star","stir","tsar"],
  "gig-yaw": ["gag","wag","way"],
  "bats-sulk": ["bulk","bust","slab","stab","tabs","task"],
  "ideas-tasty": ["aides","aside","daisy","dates","deity","diets","sited","stade","state","stats","stead","taste","tides"],
  "array-disco": ["adios","carry","cords","dairy","daisy","diary","orcas","roads","yards"],
  "bawl-redo": ["bald","bled","rode","wore"],
  "arms-wine": ["aims","mare","mars","near","rams","wins"],
  "drive-slain": ["aired","aisle","arise","devil","diver","drain","evils","ideal","lives","nadir","nails","raise","raves","salve","sarin","saver","slave","snail","veils"],
  "cyan-keel": ["acne","cane","kale","keen","lace","lacy","lake","leak","leek","yank"],
  "foot-song": ["font","snog"],
  "gem-pig": ["gig","peg"],
  "fire-push": ["fuse","hips","pier","pies","rife","ripe","ship"],
  "acres-swath": ["aches","cares","carts","casts","chart","chase","chats","cress","races","reach","scare","shrew","straw","swats","swear","wares","warts","wears","whats"],
  "bunt-over": ["burn","euro","rove","tube","veto","vote"],
  "area-sold": ["dare","does","dose","ears","eras","lars","load","olds","read","reds","sera"],
  "score-worst": ["cores","costs","cress","crews","roost","roses","rower","scots","sores","sorts","swore","torso","worse"],
  "hero-taxi": ["exit","hair","heir","hire","rite","tire","tore"],
  "dirty-tapes": ["aster","dares","darts","dries","paste","payed","piety","rates","reads","ready","rites","septa","sired","spade","spate","spied","spite","stare","start","stipe","tardy","tarts","tears","teary","tiers","tires","tries"],
  "child-cruel": ["chide","cider","cried","cured","relic","ulcer"],
  "aid-net": ["ate","den","eat","end","nit","ten","tin"],
  "loud-toll": ["ludo","told"],
  "able-poet": ["alto","bale","beat","beep","beta","plot"],
  "mafia-named": ["amend","anima"],
  "camp-mite": ["came","cite","emit","item","mace","mate","meat","meta","pact","tame","team","time"],
  "fleet-merry": ["emery","ferry","fryer","meter"],
  "evil-seas": ["ease","isle","live","sale","seal","vale","vase","veal","veil","vile"],
  "rocks-skied": ["coder","codes","cores","corks","credo","decks","decor","irked","score","skies","socks"],
  "loser-watts": ["alert","alter","earls","laser","lasts","later","least","loses","reals","roles","sales","seals","slate","slats","slots","soles","stale","steal","stole","straw","swats","swear","sweat","swore","tales","wares","warts","waste","water","wears","worse","worst","wrote"],
  "drone-stomp": ["mores","noted","notes","onset","proms","senor","seton","snore","stone","tomes","tones"],
  "eon-rot": ["one"],
  "chaos-magic": ["cacao","macho","mocha"],
  "anger-trend": ["deter","eared","grade","raged","rager","range"],
  "dome-link": ["demo","dime","dine","done","kiln","kind","lien","lime","line","lone","mile","mode","mole","noel"],
  "delta-swarm": ["alder","areas","armed","dealt","dream","earls","laser","least","madre","mares","mated","mates","meats","reals","slate","smear","smelt","stale","steal","steam","tales","tamed","tames","teams","warms"],
  "holy-jeep": ["hope"],
  "soon-step": ["eons","nest","nets","nose","ones","pest","pets","pose","post","pots","sent","spot","stop","tons","tops"],
  "send-wait": ["aids","ants","dawn","dies","ends","nest","nets","newt","sand","sent","side","site","tens","ties","wand","want","wide"],
  "label-slide": ["aides","aisle","aside","bales","based","beads","blade","dials","ideas","lisle","sable"],
  "raise-using": ["grain","grins","issue","reins","resin","rings","rinse","risen","rises","siren"],
  "soil-your": ["oils","soul","sour"],
  "crane-gases": ["acres","anger","canes","cares","cases","cease","ceres","cress","eager","gears","races","rages","rance","range","sages","scare","serge","snags"],
  "folk-riot": ["foot","lift","loft","root","roti","tori","toro","trio"],
  "snip-task": ["asks","past","pats","pins","pint","pita","saps","sink","skin","spat","spin","taps"],
  "great-solve": ["agree","aster","eager","earls","erase","glare","glove","grate","lager","large","laser","loves","rates","reals","regal","saree","sever","stare","stove","tears","veers","verge","verse","volts","votes"],
  "dwell-lines": ["liens","lisle","sewed","slide","snide","swede","weeds","welds","wells"],
  "love-near": ["earn","even","lear","oral","real"],
  "bug-mew": ["beg","gem","mug"],
  "petty-salsa": ["aptly","asset","atlas","lapse","leaps","leapt","least","pales","palsy","pasta","paste","pasty","patsy","patty","petal","plate","plays","pleas","sales","salty","seals","seats","septa","slate","spate","stale","state","steal","style","tales","tapas","tapes","taste","tasty","types","yelps"],
  "arms-coin": ["airs","moan","rain","rams","sari","soma"],
  "cheap-grain": ["anger","cairn","caper","chain","crane","gripe","hinge","nicer","niche","pacer","pager","peach","phage","price","rance","range","recap","reign"],
  "ages-mint": ["anti","gate","gems","item","mite","sage","sang","semi","snag","tang","time"],
  "cram-rude": ["care","race","rare","rear"],
  "gross-piece": ["corps","creep","crepe","epics","goers","ogres","peers","poise","pores","poser","press","prose","ropes","serge","speer","spice","spies","spore","spree"],
  "diver-salon": ["alder","drive","earls","lanes","laser","leans","liens","lined","lines","lions","loans","loins","raves","reals","riled","riles","saver","savor","solar","veins","vines"],
  "bold-peer": ["bled","bore","bree","deep","dope","peed","pore","repo","robe","rope"],
  "daily-tapes": ["aside","dials","ideas","laity","paste","payed","septa","spade","spate","splat","tails"],
  "air-bob": ["bib","bro","oar","orb","ria","rob"],
  "gave-into": ["gate","gent","goat","tine","tong","vine"],
  "roger-walls": ["earls","gears","glows","goers","growl","laser","loser","lower","lowes","ogres","rager","rages","reals","roles","wages"],
  "rate-verb": ["rare","rave","rear","tear","tree","vera"],
  "feet-pull": ["feel","fell","felt","fete","flee","full","left","peel"],
  "lasts-waste": ["least","salts","slats","stale","steal","sweat","tales"],
  "need-worn": ["done","nerd","node","none","owed","weed","word"],
  "eater-messy": ["aster","erase","ester","mares","meaty","metre","rates","reset","saree","sears","smart","smear","stare","steer","tamer","tears","terms","terse","trams","trees","yeast","yeses"],
  "earns-tiger": ["agree","anger","angst","aster","eager","erase","gates","grant","grate","great","nears","range","rants","rates","reins","resin","rinse","risen","rites","saree","siege","singe","siren","snare","stage","sting","tears","terra","tiers","tires","trans","trier","tries"],
  "dense-notes": ["dotes","needs","nests","nosed","onset","sends","seton","steed","stone","teens","tones"],
  "emu-gap": ["gum","pea"],
  "theme-wears": ["aster","earth","eater","ester","ether","hater","heart","mates","maths","meats","meets","rates","reset","sewer","shrew","stare","steam","steer","swear","tames","tears","teems","terse","there","three","trash","trees","wares"],
  "antic-dealt": ["actin","canal","cited","decal","delta","edict","laced","latte","natal","taint"],
  "left-sons": ["felt","lent","loft","ness","nest","nets","self","sent","tens","tons"],
  "nest-nick": ["neck","nets","sent","skin","tens","tins"],
  "notch-ruled": ["lunch","lured","noted","olden","older","other","torch","tuned"],
  "lace-only": ["ally","cone","lacy","noel","once"],
  "limit-sands": ["amiss","lands","mails","saint","satin","slain","snail","stain","stand"],
  "oops-rile": ["lore","pier","pore","pros","repo","ripe","rips","role","soil","solo"],
  "rests-wince": ["ceres","cries","enter","ester","inert","inter","nicer","rents","reset","rites","steer","stern","stews","stirs","sweet","terse","tiers","tires","trees","tries","tween","twins","wests"],
  "dud-tar": ["add","art","rat"],
  "leek-swan": ["kale","keel","lake","lane","leak","lean","news","sake","sane","seen","sewn","walk"],
  "drove-stock": ["coder","cores","credo","decor","overs","rocks","score","servo","stove","verso","votes"],
  "aglow-being": ["angel","angle","begin","binge","bowel","elbow","glean","globe","wigan"],
  "gear-lead": ["aged","deal","earl","lear","real"],
  "life-mill": ["file","film","mile"],
  "fella-light": ["fight","flail"],
  "ghost-south": ["gusto","shoot","shots","shout","shush","shuts","stout","thugs","toots","tough","touts"],
  "bibs-tire": ["bits","brie","rite","stir","tier"],
  "ewe-rod": ["doe","wee"],
  "fast-monk": ["fats","mast","mats","most","soft"],
  "spear-trawl": ["altar","alter","apart","earls","lapse","laser","later","leaps","leapt","pales","paras","parse","pears","petal","plate","pleas","pleat","reals","rears","spare","taper","terra","twerp"],
  "evil-used": ["dies","dive","dues","eels","else","isle","lies","live","seed","side","vile"],
  "meat-whip": ["emit","item","mate","meta","mite","tame","team","thaw","time","what","whit","with"],
  "hairs-shade": ["ahead","areas","arise","aside","hades","hares","heads","hears","heirs","hides","hires","ideas","raise","share","shear","shire"],
  "alien-guess": ["easel","glens","guise","lanes","leans","lease","nails","sails","sales","seals","slain","sling","snail","suing","using"],
  "gods-lint": ["digs","dogs","lids","olds","sing","slid","snog","sold","song","ting","tong"],
  "smell-stall": ["small"],
  "plane-shove": ["haves","lanes","leans","loves","panel","penal","salve","shave","shone","solve"],
  "elk-rag": ["age","gel"],
  "most-rode": ["demo","mode","redo","rose","some","sore"],
  "chuck-grips": ["chick","chips","crick","crisp","scrip"],
  "carol-story": ["coral","solar","tools"],
  "lady-such": ["clay","dahl","dash","days","lacy"],
  "crank-isles": ["acres","arise","cakes","cares","cases","clerk","kilns","likes","links","rains","raise","riles","sarin","scans","scare","snack"],
  "grew-wane": ["anew","wage"],
  "relax-saint": ["alert","alter","atlas","axles","inert","inset","inter","irate","later","laxer","least","satin","slant","slate","stain","stale","steal","stein","tales","tiara","train"],
  "bulbs-cooks": ["blobs","blocs","boobs","locks"],
  "bar-row": ["bow","bra","bro","orb","raw"],
  "diner-torch": ["chord","drier","drone","hired","honed","horde","inert","inter","order","other","retro","tenor","their","thine","toner","trier"],
  "slang-twice": ["glint","inlet","laces","lanes","leans","liens","lines","scale","sling","swine","swing","twine","wanes","wines","wings"],
  "seen-twit": ["news","sewn","sine","site","stew","teen","tees","tine","twin","went","west","wins","wits"],
  "sulks-votes": ["loses","soles","solve","stove"],
  "earl-stat": ["alas","lars","last","late","lear","rate","rats","real","salt","star","tate","teal","tear","tsar"],
  "adore-build": ["aired","bored","ideal"],
  "none-pole": ["neon","noel","open"],
  "lamp-poor": ["loop","opal","oral","palm","polo","poop","prom","romp"],
  "beta-guru": ["abet","bare","bear","beat","gate","gear","rage","urge"],
  "brass-mouth": ["atoms","boast","boats","bouts","brash","brats","burst","harms","marsh","shrub","smart","thrum","trams"],
  "droll-surge": ["goers","loser","louse","lured","lures","ogres","older","roles","ruled","rules","urges"],
  "hurt-page": ["hare","hart","hear","pear","pure","reap","tarp","thug","trap"],
  "seats-wiped": ["aides","aside","asset","dates","eased","eases","ideas","pests","seeps","spied","spies","spits","stade","stead","steps","sweat","sweep","swept","swipe","waist","waste","weeps","wipes"],
  "aids-pill": ["dips","laid","said","sail","slip"],
  "outs-rook": ["rust","sort","sour","turk"],
  "abet-vein": ["bane","bean","beat","beta","vine"],
  "deer-raid": ["arid","dare","dead","dear","deed","dire","rare","read","reed","ride"],
  "dab-rue": ["are","bad","bar","bra","dub","due","era","rub"],
  "flip-snug": ["gnus","guns","lips","lugs","plus","puns","sign","sing","slip","slug","snip","spin","spun","sung"],
  "cave-gird": ["acre","care","drag","gave","gear","grad","grid","race","rage","rice","vice"],
  "stops-study": ["spots","studs","typos"],
  "patch-tides": ["dates","death","diets","edits","hated","pacts","paste","pitch","septa","sited","spade","spate","spied","spite","stade","state","stead","stipe","taste","theta","tithe"],
  "deny-lugs": ["edgy","legs","lens","send","slug"],
  "asked-onset": ["asset","deans","knead","nodes","nosed","notes","seats","sedan","seton","skate","stake","steak","stoke","stone","takes","token","tones"],
  "vital-whale": ["alive","avail","halve","twill","vitae"],
  "sack-thus": ["cask","cast","cats","huts","shut","tack"],
  "kind-slot": ["lost","lots","olds","tins"],
  "spa-was": ["sap","saw"],
  "prone-souls": ["loose","loser","louse","lures","noose","pools","prune","roles","rules","runes","senor","sloop","slurp","slurs","snoop","snore","solos","spool","spoon","spurn"],
  "begin-debut": ["being","binge","nudge"],
  "neat-swat": ["ante","eats","seat","teas"],
  "cork-demo": ["come","core","dome","doom","door","dork","drek","mode","mood","odor","rock","rode"],
  "holes-joust": ["hotel","shout","slosh","sloth","south"],
  "fell-pace": ["cafe","calf","cape","clap","face","fall","feel","flea","flee","leaf","pale","peel","plea"],
  "mills-tanks": ["knits","lilts","malls","slant","stalk","stall","stank","still","talks","tills"],
  "ruby-some": ["bore","boys","bury","buys","muse","robe"],
  "cult-neck": ["lent"],
  "dig-pod": ["did","dog","odd","pig"],
  "drag-gone": ["dare","dear","done","dong","gear","gong","grad","node","rage","read"],
  "corny-fungi": ["crony","incur"],
  "dirt-rope": ["dire","dope","pier","pore","redo","repo","ripe","rode","trip"],
  "born-dodo": ["odor"],
  "amber-codes": ["adore","armed","bream","coder","credo","dames","dream","madre"],
  "dash-tons": ["ants","dons","hand","hast","hats","nods","shot","than","toss"],
  "rotor-stove": ["otter","roost","roots","torts","totes","trove","voter","votes"],
  "basic-fades": ["based","bases","beads","cafes","decaf","faces","safes"],
  "jolly-pumps": ["jumps","lumps","lumpy","plops","plums","pulls","slump"],
  "eye-led": ["dee"],
  "clue-trip": ["cure","ecru","lice","lite","rice","rite","tier","tile","tire"],
  "lacks-reply": ["cells","clary","parks","perks","racks","slack","spark","spell"],
  "lava-sing": ["ling","nail","sang","sign","snag","visa"],
  "acre-foal": ["aero","calf","care","face","fore","loaf","race","rolf"],
  "civil-roger": ["clove","corgi","cover","liver","lover","rigor","rover"],
  "flee-hate": ["fate","feat","feel","felt","heat","left"],
  "ribs-word": ["bows","bros"],
  "meats-skits": ["asset","emits","items","mates","mites","seats","sites","smite","steam","tames","teams"],
  "key-pay": ["kay","yap"],
  "loses-snide": ["doses","lends","liens","lined","lines","oiled","oldie","seine","sends","soles","solid"],
  "awash-trait": ["start","swath","tarts","tiara","watts","whats"],
  "husk-newt": ["huts","nest","nets","nuts","sent","shut","stun","sunk","tens","went"],
  "brat-role": ["aero","bare","bear","boat","bolt","lobe","lore","rear"],
  "liner-theft": ["elite","filet","flier","inert","inlet","inter","refit","rifle","teeth","tenth","there","three"],
  "dead-yowl": ["dale","deal","lead","lewd","weld"],
  "male-peak": ["lame","leap","meal","pale","peel"],
  "mines-wears": ["mares","swear","wares","wines"],
  "tacos-taste": ["ascot","coast","stats"],
  "gut-owl": ["low","out","tug"],
  "nose-tamp": ["amen","east","eats","eons","mane","mate","meat","meta","name","omen","ones","pans","past","pats","pons","post","pots","sane","seat","snap","span","spat","stop","tame","taps","team","teas","toes","tome","tops"],
  "badge-hires": ["based","beads","bears","brags","grabs","hades","hares","heads","hears","heirs","saber","sabre","shade","share","shear","shire"],
  "earns-worth": ["aster","earth","hater","heron","nears","other","rates","senor","snare","snore","stare","store","straw","tears","throw","warns","warts","worst","wrath"],
  "chin-demo": ["come","dine","dome","hind","mend","nice"],
  "curls-thank": ["aunts","clash","halts","runts","sault","shalt","trunk"],
  "plugs-tooth": ["gluts","gusto","ought","photo","spout","stoop","stout","toots","touts"],
  "film-seed": ["dies","fled","lids","seem","semi","side","sled","slid"],
  "bride-quota": ["abort","about","biter","board","bored","braid","quite","quote","rabid","tabor","tribe"],
  "hell-void": ["dive","evil","held","hide","live","vile"],
  "leek-less": ["eels","keel"],
  "belts-hoops": ["bolts","boost","ethos","hopes","plebs","shoot","sloth","those"],
  "mango-races": ["acres","among","argon","cameo","cares","earns","groan","means","mensa","nears","orang","organ","scare","snare"],
  "lava-only": ["loan"],
  "diver-legit": ["drive","greed","leger","liver","revel","ridge","rigid"],
  "dude-tone": ["done","duet","dune","node","note","tune"],
  "eager-shade": ["agree","degas","drags","gears","grade","grads","hades","hares","heads","heard","hears","raged","rages","shard","share","shear"],
  "eat-rip": ["ape","art","ate","pea","rap","rat","tea","tie"],
  "redo-town": ["dent","dote","nerd","newt","odor","rode","tend","wore","worn"],
  "maid-tool": ["alto","amid","doom","lima","limo","loom","loot","mail","milo","modi","toad"],
  "bucks-codes": ["ducks"],
  "grid-shut": ["dish","gird","grit","hits","huts","rust","stir","thug","thus"],
  "snaps-taped": ["adapt","adept","deans","pants","pasta","paste","sedan","septa","spade","spans","spate","spent","tapes"],
  "rooms-tuner": ["euros","moors","motor","notes","nurse","onset","rerun","rouse","route","rumor","runes","senor","seton","snore","stone","tenor","toner","tones","tunes"],
  "land-mice": ["amen","came","clad","damn","lane","lean","lice","lien","line","mace","mane","mean","mine","name"],
  "sixes-tract": ["aster","attic","crass","exits","rates","scars","sears","stare","tacit","tater","tears","tetra","treat"],
  "peg-way": ["pay","wag","yap","yaw","yep"],
  "swell-video": ["devil","idols","lisle","lived","lowes","olive","solid","vowed","welds","wells"],
  "bevy-wide": ["bide","view","weed"],
  "canoe-terse": ["acres","aster","atone","canes","cares","ceres","ester","races","rates","reset","scare","scene","stare","tears","teens","tense","trees"],
  "hike-news": ["knee","sewn","sink","skin","wine","wins"],
  "honey-wills": ["hills","hilly","holes","hoyle","lowes","lowly","shill","shine","shone","swill","swine","wiles"],
  "crack-rites": ["arise","cares","cites","crest","races","raise","rears","scare","tiers","tires","tries"],
  "silk-waft": ["fast","fats","fist","fits","last","list","salt","slit","wilt"],
  "dies-sake": ["asks","disk","kiss","seas","side","skid","skis"],
  "rage-warn": ["gear","gran","rang","rare","wage","ware","wear"],
  "are-hex": ["ear","era"],
  "lady-rise": ["dale","dare","deal","dear","deli","dire","ears","eras","idle","idly","isle","lays","lead","lies","read","ride","sale","seal","sera","sire","slay","yard"],
  "male-nick": ["acne","cane","kiln","lame","lane","lean","lien","lime","line","mace","mack","meal","mice","mile","milk","nice"],
  "looks-picks": ["kilos","licks","locks"],
  "bulbs-slope": ["bells","blues","lobes","lopes","poles","soups","spell"],
  "duty-tips": ["dips","dust","pits","pity","spit","stud","tits"],
  "carry-meter": ["carer","carte","crate","emery","erect","marry","meaty","metre","racer","react","tamer","trace"],
  "heard-rains": ["diner","drier","earns","hairs","hares","hears","heirs","hired","hires","nadir","nears","radar","rears","reins","resin","rider","rinse","risen","riser","saran","sarin","share","shine","shire","siren","snare"],
  "robot-using": ["bouts","bunts","grins","groin","nitro","rings","riots","suing","trois","units"],
  "elm-rag": ["age","gel","mar","mel","ram"],
  "fires-satay": ["asset","fairs","fares","fates","fears","feast","feats","fiery","fries","rises","safer","sears","serif","sites","years","yeast"],
  "rode-sold": ["does","lore","lose","odds","olds","redo","role","sole"],
  "hates-pipes": ["haste","heaps","heats","heist","paste","phase","septa","spate","stipe","tapes"],
  "earl-feet": ["fart","fate","feat","feel","feta","fete","flea","flee","frat","fret","lear","leer","raft","rate","real","reel","tear"],
  "bean-what": ["abet","anew","bane","beat","beta","thaw"],
  "corks-naval": ["arson","carol","coral","orcas","racks","rocks","sacra","saran","snark","sonar"],
  "used-veil": ["dive","dues","lieu","live","vile"],
  "coal-self": ["also","cafe","clef","cola","face","lace","safe","sale","seal","sell"],
  "burns-stock": ["bonus","costs","curbs","scots"],
  "now-tie": ["one","own","toe","two","win","won"],
  "food-knit": ["find","fond","font","knot","took"],
  "oops-pork": ["pros"],
  "ashes-drill": ["aisle","arise","dries","hales","halls","hares","heals","hears","herds","leash","liars","rails","raise","riled","sails","shale","share","shear","sheds","shred","sides","sired","slash","slide"],
  "comet-hours": ["comes","comte","house","scour"],
  "acid-stem": ["aced","came","date","mace","mate","meta","mist","tame","team"],
  "motel-wives": ["emits","items","mites","moves","smite","tomes","towel","views"],
  "bling-sweat": ["bagel","gable","gales","glens","least","slate","sling","stale","steal","table","tails","tales","twins","wages","waist","waits","waste","wings"],
  "cafe-dark": ["acre","care","dare","deaf","dear","face","race","read"],
  "gosh-rice": ["egos","goes","hogs","rich","rise","rose","shri","sire","sore"],
  "add-nab": ["baa","bad","ban","dad"],
  "plot-wars": ["atop","lows","owls","part","raps","rasp","soap","trap","wart"],
  "keen-mile": ["kiln","knee","leek","like","lime","link"],
  "rolls-skied": ["droll","idols","irked","loser","loses","older","roles","silks","silos","skies","soils","soles","solid"],
  "bowl-demo": ["blow","boom","dome","lewd","mode","mold","mood","owed","weld","wood"],
  "cash-guru": ["arch","char","gush","hags","hugs"],
  "alias-drone": ["aired","alien","alone","arias","arson","dials","diner","ideal","lined","loads","loans","olden","raids","rains","rinds","roads","salon","sarin","slain","snail","sonar"],
  "kiss-mall": ["asks","mill","miss","silk","sims","skis","slam","slim"],
  "pants-perks": ["parks","parts","spank","strap","strep","traps"],
  "sends-these": ["dense","dents","needs","nests","seeds","sense","sheet","steed","teens","tends"],
  "ear-pro": ["are","era"],
  "dive-near": ["aide","arid","dare","dear","earn","idea","rain","read","vein","vine"],
  "fast-lilt": ["fats","fist","fits","flat","flit","last","list","sift","slit","tall","till"],
  "beams-dally": ["bales","balls","bally","basal","bells","belly","dales","dames","delay","lambs","leads","madly","maybe","sable","salad","samba"],
  "isles-trace": ["arise","asset","aster","carte","carts","caste","casts","cater","celts","crate","eater","raise","react","relic","riles","seats","sleet","stare","steel","tears","tease"],
  "gawk-late": ["gate","tale","teal","walk"],
  "gauge-limit": ["gleam","guile"],
  "levy-nags": ["envy","gals","sang","slag","snag","vans","yang"],
  "party-sells": ["aptly","artsy","parts","pelts","rests","salts","salty","slats","slept","spell","spelt","splat","stars","strap","stray","strep","style","traps","trays","tyres","yells"],
  "tasks-waste": ["askew","skate","state","stats","steak","sweat","takes","taste","wakes"],
  "ink-sat": ["kin","tin"],
  "gears-since": ["agree","arise","cages","cases","eager","erase","genre","green","grins","rages","raise","reign","reins","resin","rinse","risen","saree","scene","sears","siren","sneer"],
  "mains-super": ["arise","issue","minas","parse","pears","purse","rains","raise","ruins","sarin","sinus","snaps","spans","spare","spurn"],
  "nope-soft": ["foes","open","post","pots","spot","stop","tops"],
  "fare-teem": ["fame","farm","fear","mart","mate","meat","meet","meta","rate","reef","tame","tear","term","tram","tree"],
  "abide-sacks": ["aides","bikes","cakes","casks","ideas"],
  "next-twit": ["tine"],
  "ample-blank": ["blame","label","lapel","maple","panel","penal","plane"],
  "axed-yeti": ["date"],
  "gay-vie": ["ave"],
  "gangs-moody": ["goody","moods","sodom"],
  "death-hovel": ["altho","dealt","delta","delve","devel","hated","lathe","loath"],
  "eons-pets": ["nose","ones","pens","pest","pons","post","pots","step","stop","tees","toes","tops"],
  "drift-ether": ["drier","refit","teeth","there","three","tired","tried"],
  "basil-smell": ["aisle","label","limbs","limes","miles","sails","slime"],
  "lame-pale": ["male","plea"],
  "buzz-fish": ["hubs"],
  "lost-pelt": ["lest","lets","lots","pest","pets","plot","post","pots","slot","spot","step","stop","toll"],
  "died-sink": ["side","skin"],
  "bat-ewe": ["eat","tab","tea","wee","wet"],
  "gives-panel": ["angel","angle","glean","panes","penal","plane","singe","snipe","spine"],
  "rule-vice": ["ecru","evil","lure","rice","rile","veil","vile"],
  "chief-rents": ["cents","cites","firth","fitch","frith","heirs","hires","refit","rites","scene","scent","shire","sneer","stern","tiers","tires","tries"],
  "arts-oval": ["oral","rats","soar","star","tsar","vast","volt"],
  "rites-slain": ["anise","arise","earls","inert","inset","inter","lanes","laser","leans","learn","liars","lists","nails","raise","reals","renal","sails","sales","seals","sites","slits","snail","tiers","tires","tries"],
  "shape-sword": ["draws","hares","heaps","hears","heros","horse","phase","shard","share","shear","shore","swear","swore","wares","wears","words","worse"],
  "just-vary": ["jays","juts"],
  "fill-town": ["flow","lilt","till","toll","twin","wilt"],
  "amen-veil": ["amin","evil","lame","lima","live","main","male","mane","meal","mean","mina","name","vein","vile","vine"],
  "drive-salty": ["dealt","delta","diver","least","rites","salve","slate","stale","steal","tales","tiers","tired","tires","tried","tries"],
  "races-slick": ["acres","arise","cakes","cares","cases","clerk","licks","likes","raise","riles","scare"],
  "aids-solo": ["also","diss","dosa","loss","said","sail","soil"],
  "booty-wrath": ["broth","throb","throw","worth"],
  "shear-their": ["earth","hares","hater","hears","hires","share","shire"],
  "cram-wise": ["care","race","ware","warm","wear"],
  "bags-case": ["aces","base"],
  "stall-sweep": ["least","paste","pelts","septa","slate","sleet","slept","spate","spelt","splat","stale","steal","steel","steep","swell","tales","tells","walls","weeps"],
  "mock-rose": ["come","core","rock","sore"],
  "ore-pad": ["pea","per"],
  "laws-spin": ["awls","lawn","nail","pins","sail","slip","snip"],
  "moral-watts": ["alarm","moats","molar","smart","storm","straw","trams","warts","worst"],
  "bias-debt": ["abet","aids","bait","base","beds","beta","bibs","bids","date","said"],
  "ingot-verse": ["intro","nitro","reins","resin","rinse","risen","rites","serve","sever","siege","siren","sting","tiers","tires","tries","trove","veers","voter"],
  "nest-sits": ["ness","nets","sent","sets","tens","tent","tins","tint","tits"],
  "ends-rude": ["dues","need","send","sued"],
  "chant-flora": ["carol","chart","coral","froth","nacho","notch","roach","torch"],
  "memo-tide": ["deem","diet","dime","dome","dote","edit","emit","item","meet","mode","modi","teem","tied","time","tome"],
  "far-not": ["ant","for","ran","tan","ton"],
  "giant-purge": ["gaunt","gripe","grunt","paint","prune","reign","ripen"],
  "hate-riot": ["aero","heat","rate","rite","roti","tart","tear","that","tire","tori","trio"],
  "dare-life": ["deaf","dear","dire","earl","file","flea","leaf","lear","read","real","ride"],
  "furry-males": ["false","fares","fears","fleas","leafs","leafy","mares","meals","mules","safer","serum","smear"],
  "droll-scare": ["acres","alder","cadre","calls","cares","cedar","clade","close","coder","cores","credo","decal","decor","dolce","earls","laced","laces","laser","loser","older","order","raced","races","reals","rears","roles","scale","score"],
  "clue-pops": ["cops","opus","pope","soup"],
  "bride-loopy": ["booed","bored","oiled","older","oldie","peril","riled"],
  "dealt-remix": ["alert","delta","irate","later","laxer","merit","mitre","mixer","relax","remit","timed","timer"],
  "clay-lead": ["clad","dale","deal","lacy"],
  "era-kid": ["are","ear","red"],
  "held-tone": ["dent","heel","hold","hone","note","teen","tele","told"],
  "sedan-yodel": ["dales","deals","deans","delay","dense","leads","needs","nodes","nosed"],
  "find-save": ["fave","fine","sane","sine","vase"],
  "cent-rack": ["kern","rank","rant","rent","tern"],
  "order-roofs": ["doers","doser","fords","rodeo"],
  "locks-warns": ["clans","lacks","snarl","works"],
  "lane-rats": ["arts","last","late","lean","near","rate","star","tale","teal","tear","tsar"],
  "basil-hexes": ["ashes","bales","basis","hails","hales","heals","heels","leash","sable","shale"],
  "ocean-stale": ["atone","canes","canoe","clans","clone","laces","least","scale","slant","slate","sleet","steal","steel","tales","tease","tonal"],
  "eye-wag": ["awe"],
  "corn-view": ["cone","nice","once","oven","vine","wove"],
  "bond-sums": ["bums","buns","dons","mobs","mods","moss","nods","suns"],
  "chord-thick": ["chick","ditch"],
  "lips-sell": ["slip"],
  "bowel-ideas": ["aides","based","beads","below","blade","bleed","ideal","obese","wield","wised"],
  "chair-green": ["anger","cairn","carer","chain","china","crane","genre","hence","hinge","nicer","niche","racer","rager","rance","range","reach","reign"],
  "deep-fair": ["arid","dare","dear","deer","dire","fare","fear","fire","free","peed","raid","read","reed","ride","rife"],
  "able-grab": ["abba","area","baba","bale","brag","earl","gear","lear","real"],
  "nests-nurse": ["enter","rents","runes","sneer","stern","stuns","teens","tense","tuner","tunes","turns"],
  "ear-max": ["are","era","mar","ram"],
  "goof-hulk": ["golf"],
  "cask-lift": ["acts","cast","cats","flat","flit","last","list","sack","salt","sick","slit"],
  "heals-these": ["ashes","asset","hales","halts","haste","hates","heats","heels","lathe","least","seats","shale","shalt","slate","sleet","stale","stash","steal","steel","tales","tease"],
  "bite-same": ["abet","beam","beat","east","eats","mesa","seam","seat","site","teas","ties"],
  "aware-poets": ["arose","pesto","pores","poser","prose","ropes","spore","swear","sweat","swept","wares","wears","wraps"],
  "taco-tins": ["ants","cast","cats","coat"],
  "cares-queue": ["acres","cease","cures","curse","races","sauce","scare"],
  "dab-old": ["bad","boa","dad"],
  "glow-shut": ["host","huts","lost","lots","lows","lust","owls","shot","slot","slow","slut","thug","thus"],
  "dance-tired": ["adder","cadre","cared","carte","cater","cedar","cider","crate","cried","dared","dined","dread","eared","eaten","eater","raced","rated","react","trace","trade","tread","tried"],
  "oily-them": ["emit","home","limo","meth","milo","mite","they","time","yeti"],
  "nicer-tasks": ["asset","aster","canes","carte","caste","cites","crane","crank","crate","earns","karts","nears","nicks","rance","ranks","rates","react","reins","resin","rinse","risen","rites","seats","since","siren","sites","skins","skirt","skits","snack","snare","snark","stack","stare","stark","stick","tacks","tears","ticks","tiers","tires","trace","track","trick","tries"],
  "siege-waves": ["eases","eaves","gases","gives","sages","saves","vases","views","weave","wives"],
  "cure-dish": ["cues","dies","dire","dues","ecru","rice","rich","rude","side","sued","used"],
  "data-wife": ["date","diet","edit","fade","tide","tied"],
  "elf-ewe": ["wee"],
  "aisle-hands": ["aides","alien","aside","hades","hales","heads","heals","hides","hinds","ideas","leash","nasal","sails","salsa","shale","slain","slash","snail"],
  "bark-jets": ["bars","best","bets","bras","jars","jest","stab","tabs"],
  "rely-team": ["mare","mate","meat","meta","tame"],
  "ogres-prove": ["goers","goose","pores","poser","prose","rover","spore"],
  "coins-plant": ["canto","icons","pinot","pinto","plans","scion","sonic","tonic"],
  "ghee-redo": ["deer","herd","here","reed","rode"],
  "cord-lace": ["acre","card","care","clad","clod","core","earl","lear","lord","lore","real","role"],
  "sears-young": ["gears","genus","rages","soars","surge","urges","years","yours"],
  "mined-sadly": ["amend","deans","denim","dimly","lands","madly","named","sedan","snide"],
  "odd-yep": ["doe"],
  "earn-slim": ["aims","lien","lime","mare","mars","mile","near","rams"],
  "jock-pain": ["jack"],
  "chuck-roast": ["actor","ascot","catch","chart","chats","coast","coats","croak","hacks","hurst","hurts","scout","shark","tacos","tours","trash"],
  "mode-pose": ["demo","dome"],
  "duty-pass": ["days","past","pats","puts","saps","spat","stud","taps","yaps"],
  "isles-trips": ["riles","sites","spits","strip","tiers","tires","tries"],
  "birds-broke": ["biker","bride"],
  "elite-icons": ["cites","coins","cones","islet","liens","lines","lions","loins","scion","scone","since","sonic","stoic","stole","tiles"],
  "shift-slate": ["false","files","flats","fleas","flies","flits","haste","heats","heist","islet","leafs","least","shaft","sheaf","stale","steal","stilt","tales","tiles","tilts"],
  "dad-yam": ["add","dam","may"],
  "loyal-pasta": ["allay","aptly","atlas","playa","plots","splat","stall","tally","tolls"],
  "bush-camp": ["bash","caps","cups","hubs","mach","much","pubs","such"],
  "disco-elect": ["celts","cites","clods","colds","dolce","edict","scold"],
  "birch-canon": ["abhor","acorn","chino","choir","nacho","roach","robin"],
  "east-waft": ["eats","fate","feta","seat","teas"],
  "early-shots": ["aster","earls","ethos","hosts","hoyle","laser","lasso","layer","leary","rates","reals","relay","slosh","stare","stars","stray","tears","teary","those","trays"],
  "pile-warm": ["lamp","leap","limp","pale","pear","pier","plea","ramp","reap","ripe","ware","wear","weir"],
  "dirt-sofa": ["airs","arid","fist","raid","sari","sift","soar","soft","sort","stir"],
  "art-wow": ["rat","raw","tar"],
  "clip-meal": ["call","clap","epic","lace","lame","lamp","lice","lime","limp","male","mall","mile","pace","palm"],
  "horse-ideas": ["aired","aside","dries","hades","heads","heard","herds","heros","hoses","raids","rides","shade","shard","sheds","shoes","shred","sides","sired"],
  "purse-salty": ["aptly","artsy","aster","erupt","leaps","leapt","least","lusty","pales","palsy","parse","party","pears","petal","plate","plays","pleas","pleat","prays","pulse","raspy","rates","sales","seals","sears","slate","spare","spear","spray","stale","stare","steal","stray","super","syrup","tales","taper","tears","trays","users"],
  "tune-twin": ["newt"],
  "left-vibe": ["bile","feel","felt","file","flee","flit","life","lift"],
  "basis-vowel": ["bales","bases","basil","boils","bowel","elbow","lobes","loves","sable","salve","saves","silva","slave","solve","vases","vials","waves"],
  "crane-ropes": ["arose","arson","canoe","cares","creep","crepe","ocean","ponce","pores","poser","prose","races","rance","rears","scare","scope","sonar","spore"],
  "grow-loud": ["good","lord","ludo"],
  "pet-soy": ["opt","pot","set","yep"],
  "peer-trap": ["part","pear","peat","peep","rate","reap","tape","tarp","tree"],
  "gate-nerd": ["ante","darn","dent","drag","earn","gear","grad","near","neat","rand","teen"],
  "dough-lacks": ["chalk","clogs","ghoul","kudos","locks","lough","slack"],
  "bull-face": ["able","bale","ball","blue","cafe","calf","cube","fall","flea","fuel","full","lube"],
  "amen-vein": ["amin","mane","mean","mina","name","vine"],
  "cakes-piers": ["acres","cares","cease","parks","parse","pears","pease","pikes","races","racks","scare","spare","spark","speak","spear","spike","spire"],
  "media-newer": ["diner","edema","ender","mired"],
  "snack-swell": ["clans","claws","snell","walks","wells"],
  "nacho-trace": ["actor","carte","cater","crane","crate","earth","hater","heart","rance","react","teach","torah","torch"],
  "due-nod": ["doe","don","odd","one"],
  "fret-teen": ["fern","fete","rent"],
  "nags-sums": ["gnus","mans","sang","snag","snug","sung"],
  "files-sixth": ["fixes","flies","flits","isles","lifts","lists","slits"],
  "shown-skate": ["askew","ethos","haste","hates","howes","knots","shawn","stake","stank","steak","stoke","swank","takes","tanks","those","wakes","whose"],
  "cone-trio": ["coir","corn","note","once","rent","riot","rite","roti","tern","tier","tire","tone","tori","torn"],
  "cork-site": ["cite","core","kits","kris","rice","rise","risk","rock","sire","skit","sore","ties","toes"],
  "daisy-flare": ["aides","aired","alder","aside","dairy","dales","deals","fairy","feral","files","fleas","flier","flies","ideas","leads","leafs","rifle","riled","sadly","slide"],
  "neat-slog": ["ages","ante","eats","egos","gals","goes","gone","last","logs","lost","lots","note","sage","salt","seat","slag","slot","teas","toes","tone"],
  "reset-snide": ["diets","diner","edits","eerie","ester","inert","inset","nerds","nests","reeds","rents","seine","sends","sense","sited","sneer","steer","stein","stern","terse","tides","tired","trees","tried"],
  "pug-tag": ["tug"],
  "aced-word": ["road"],
  "cogs-ruin": ["icon","iron","noir","nori","rung"],
  "hints-tapes": ["heaps","inset","paste","paths","phase","septa","shine","spate","spite","stein","stipe","tints"],
  "part-same": ["arts","eras","mast","mats","mesa","pear","rats","reap","seam","sera","star","tarp","trap","tsar"],
  "lords-punch": ["corps","crops","curls","drops","lunch","porch"],
  "clans-those": ["aches","chase","chose","class","clean","clone","close","ethos","haste","hates","heats","laces","lasts","least","neath","salts","scale","shots","slant","slate","slats","slots","stale","stash","steal","stole","tales","thane"],
  "pipe-scan": ["aces","cans","cape","case","pain","pies","pins","snip","spec"],
  "dog-old": ["god","goo"],
  "chess-eaten": ["canes","cases","caste","casts","cease","chest","eases","enact","scant","seats","sheen","sheet","tease","these"],
  "atlas-broom": ["aroma","blast","boars","boast","boats","bolts","boost","molar","moral","solar"],
  "mile-said": ["aids","lads","lame","lids","lies","lime","maid","male","meal","midi","mild","sale","seal","slid"],
  "obese-shall": ["ashes","bales","balls","bells","bless","hales","hallo","halls","halos","heals","heels","hells","holes","leash","lobes","sable","shale","shell","shoal","slabs","slash"],
  "ether-scene": ["ceres","enter","ester","hence","rents","reset","sheet","steer","stern","teens","terse","there","these","three","trees"],
  "kids-yurt": ["disk","dusk","kris","skid","tidy","turk"],
  "sure-weed": ["drew","dues","reds","rees","ruse","seed","used","user"],
  "date-newt": ["anew","ante","neat","teen","wane","want","weed","went"],
  "awry-cave": ["area","care","crew","race","ware","wary","wave","wear"],
  "eat-pro": ["ate","pat","tea"],
  "dried-pearl": ["adder","alder","dared","drape","padre","paler","pared","pride","riled"],
  "mind-torn": ["dirt","dorm"],
  "pill-road": ["arid","lair","liar","lord","opal","oral","paid","poll","raid","roll"],
  "maple-tests": ["ample","lamps","lasts","leapt","least","males","masts","mates","meals","meats","meets","palms","pelts","petal","pleat","psalm","salts","slams","slate","slats","sleet","slept","spelt","splat","stale","stamp","state","stats","steal","steam","steel","tales","tames","taste","teams","teems","temps"],
  "brain-vexed": ["abide","bared","braid","bread","evade","naive","rabid","raven"],
  "able-seem": ["bale","balm","bees","eels","lamb","lame","male","meal"],
  "loose-piles": ["lisle","lopes","plies","poise","poles","sills","silos","slips","slope","solos","spiel"],
  "lost-some": ["lose","lots","mole","slot","toss"],
  "chick-flair": ["clack","click","flack","frail"],
  "ape-gay": ["pea","peg","yap"],
  "love-wish": ["evil","isle","lies","live","lose","owes","sole","view","vile","wise","woes","wove"],
  "guise-snaps": ["gauss","issue","panes","pangs","pines","pings","signs","singe","snags","snipe","snips","spans","spine","spins","usage"],
  "tide-vibe": ["diet","edit","tied"],
  "lamps-swear": ["alarm","amass","areas","leaps","massa","paler","pales","palms","parse","pearl","pears","pleas","psalm","ramps","spare","spasm","spear","wares","warms","wears"],
  "diner-vowel": ["dowel","drone","lined","liven","olden","riven","rowed","weird","wield","wired"],
  "cook-fast": ["acts","cast","cats","coat","cost","fats","sack","scot","sock","soft","taco"],
  "pose-soda": ["dope","dosa","dose"],
  "apart-aside": ["aides","areas","ideas","raise","stair"],
  "diets-elbow": ["belts","bites","bowel","dowel","dwelt","lobes","sited","sleet","steel","tides"],
  "elk-rig": ["gel"],
  "dusty-tacos": ["ascot","coast","ducts","scout","sodas","stats","studs","tasty"],
  "like-scan": ["aces","cans","case","clan","kiln","link","nail","sink"],
  "brute-smash": ["aster","beams","bears","brash","brush","hurst","hurts","masse","mates","maths","meats","muses","rates","rebut","saber","sabre","seams","shams","shrub","stare","steam","tames","teams","tears","trash","tuber","users"],
  "canal-tasks": ["atlas","casas","casks","clank","lacks","slack","snack","stalk","stank","talks","tanks"],
  "doll-head": ["dale","dead","hale","halo","heal","held","hell","lead","load"],
  "small-swift": ["films","flaws","malls","swill","walls","wills"],
  "door-nest": ["dote","dots","nets","note","odor","onto","reds","rode","rods","sent","tens","tone"],
  "less-pool": ["loop","lose","loss","pole","polo","pose","sole","solo"],
  "prep-stay": ["past","pats","pest","pets","prey","raps","rasp","rays","reps","spat","taps","type"],
  "axe-wet": ["ate","eat","tea","wee"],
  "base-gate": ["beat","beta","sage"],
  "clerk-exact": ["alert","alter","elect","extra","laker","later"],
  "lady-once": ["cone","dale","deal","lace","lacy","lead","lend","node"],
  "bars-rice": ["acre","arcs","bare","bear","bras","brie","cabs","cars","race","rare","rear","scar"],
  "piece-saved": ["caves","cease","dives","eased","eaves","paved","peace","vices"],
  "angel-rules": ["angle","glean","leans","luger","lures","surge","urges","usage"],
  "mojo-sort": ["moor"],
  "bride-corps": ["birds","cider","coder","cords","credo","cried","crops","decor","disco","price","probe","scrip"],
  "icons-topic": ["posit","scion","sonic","stoic"],
  "gin-wow": ["own","win","won"],
  "hint-want": ["thin"],
  "stage-third": ["aster","earth","gates","hares","hater","hears","heart","heirs","hires","rates","rites","shard","share","shear","shire","stare","tater","tears","tetra","their","tiers","tires","treat","tries","trite"],
  "furl-oils": ["full","soil","soul","sour","surf"],
  "owing-sling": ["swing"],
  "frog-male": ["flea","fore","glam","lame","leaf","meal"],
  "duty-nine": ["diet","dine","duet","dune","edit","tide","tidy","tied","tine","tune"],
  "thief-warns": ["after","aster","heist","hints","rants","rates","saint","satin","stain","stare","swain","swear","tears","trans","wafer","wares","wears"],
  "been-guys": ["bees","buys"],
  "drain-shire": ["aired","arise","drier","hares","heard","hears","heirs","hires","nadir","raise","rears","rider","riser","sarin","share","shear"],
  "ark-yam": ["kay","mar","may","ram"],
  "forms-trend": ["ferns","noted","notes","onset","rents","seton","snort","stern","stone","storm","tomes","toned","tones"],
  "days-view": ["dies","save","vase","wade","wave","wide"],
  "buck-cuss": ["subs"],
  "mango-overt": ["manor","mover","omega","roman","tamer","tango","trove"],
  "never-tides": ["dense","diets","diner","edits","ender","evens","needs","nerve","riven","rivet","seven","sited","snide","steed","tired","tried","veins"],
  "foxy-onto": ["font"],
  "brass-organ": ["argon","barns","brags","groan","gross","orang","soars","sonar"],
  "fees-user": ["reef","refs","ruse","sure"],
  "amen-blue": ["lane","lean","luna","mane","name","numb"],
  "got-yep": ["get","yet"],
  "roots-tenth": ["north","ortho","other","roost","snort","stent","stern","store","tents","thorn","toots","torso","totes"],
  "noble-straw": ["arose","aster","bates","beast","beats","belts","blows","bowls","enrol","lobes","loner","loser","roles","rowan","stare","tears","warts"],
  "rage-told": ["drag","earl","ergo","gear","gore","grad","late","lear","lore","ogre","real","role","tale","teal"],
  "case-soft": ["aces","acts","cafe","cast","cats","face","fact","fast","fats","foes","scot","seas","toss"],
  "alloy-steer": ["alert","alley","alter","eater","ester","later","leers","loser","reels","reset","roles","rolls","store","style","trees","yells"],
  "seed-yaks": ["desk","dyke","easy","eyes","keys","seas","sees"],
  "brush-sleep": ["bleep","blush","heels","heres","peels","peers","plebs","press","purse","sheer","shrub","slush","speer","spree","spurs","super","usher"],
  "lime-pond": ["lien","line","lone","mile","mold","mole","noel","open","pine","poem"],
  "call-port": ["clot","colt","part","plat","plot","tarp","trap"],
  "act-raw": ["cat","rat","tar","war"],
  "pile-task": ["apes","east","eats","kits","late","lite","pale","peas","pies","plea","seat","site","skip","tale","talk","teal","teas","ties","tile"],
  "least-prism": ["islet","limes","males","miles","parts","paste","ramps","septa","slate","slime","smile","spate","spite","stale","steal","stipe","strap","strip","tales","tapes","tiles","traps"],
  "data-golf": ["flag","fold","gala","goat","load","toad","toga"],
  "city-dive": ["cite","diet","edit","tide","tied"],
  "souls-stain": ["lasso","lasts","loans","oasis","saint","salts","satin","slant","slats","sluts","units"],
  "ozone-shell": ["heels","hells","holes","sheen","shone"],
  "lilt-park": ["lark","part","plat","tall","till","trap","trip"],
  "hairs-surly": ["hails","hairy","slurs"],
  "dork-nude": ["done","dude","dune","node","redo","rude"],
  "bad-hem": ["dab","had"],
  "toned-wells": ["dowel","lowes","noted","notes","onset","owned","seton","sleet","steel","stole","swell","teens","tells","tense","tolls","tones"],
  "opera-panel": ["apnea","apron","elope","paler","pearl","penal","plane"],
  "grow-wane": ["anew","ergo","gore","ogre"],
  "emit-ends": ["dent","item","mite","send","sine","time","tine"],
  "names-vocal": ["canes","caves","clean","clone","clove","cones","lance","lemon","mason","means","melon","mensa","moans","omens","scone"],
  "cats-jeep": ["aces","acts","case","cast","jape","jets","pace","pact","sect"],
  "husk-king": ["gunk","hugs","hung","hunk","nigh","sigh"],
  "roles-spots": ["loser","loses","pesos","pores","ports","poser","poses","posse","posts","prose","prost","roost","roots","soles","spore","sport","stops","torso"],
  "free-said": ["deaf","ease","fade","fire","reds","rees","rife","rise","sire"],
  "pip-war": ["rap","raw"],
  "dote-pose": ["dose"],
  "meets-night": ["emits","gents","inset","items","might","mites","sheen","shine","smite","stein","teems","teens","tenet","tense","thine","thing","times"],
  "life-slip": ["fell","file","lies","lips","pill","self"],
  "hits-page": ["gaps","gasp","hags","hast","hats","heat","past","pats","peat","pits","sigh","spat","spit","tape","taps","this","tips"],
  "ovary-rapid": ["array","privy","radar"],
  "dodo-full": ["doll","fold","fool","foul","loud","ludo"],
  "minds-purse": ["denim","drips","duper","menus","mined","mines","mired","piers","pines","pride","serum","snips","spine","spins","spire","spurs","super"],
  "aside-bands": ["aides","bends","deans","ideas","sedan"],
  "bucks-pinch": ["bunks","pinks","pucks","punch","punks","spunk"],
  "dab-rap": ["bad","bra"],
  "redo-torn": ["dent","dote","nerd","odor","rode","root","tend","tern","tore","toro"],
  "genus-shoot": ["goose","hunts","notes","onset","seton","shout","shunt","south","stone","thong","tones","tough","tunes"],
  "last-rare": ["arts","earl","ears","eras","lear","rats","rear","sale","salt","seal","sera","tsar"],
  "flats-sleek": ["false","flake","fleas","flees","keels","lakes","lasts","leafs","leaks","leeks","sales","salts","seals","slats","talks"],
  "heats-wines": ["haste","hates","hints","saith","sheen","swine","twins","waist","waits","waste"],
  "ally-back": ["clay","lacy"],
  "teeth-wiser": ["ester","heist","reset","rites","sewer","sheet","steer","terse","these","tiers","tires","tithe","tries","trite","weirs","wires","wrest","wrist","write"],
  "lube-mask": ["able","bale","beam","blue","mesa","muse","musk","sale","seal","seam","sulk"],
  "fake-hide": ["deaf","head"],
  "bet-new": ["net"],
  "mice-soft": ["cost","fits","foes","scot","sift"],
  "cedar-devil": ["adder","cadre","cared","carve","cider","crave","cried","dared","decal","diver","dread","dried","laced","lived","raced"],
  "sides-skier": ["desks","dries","sired"],
};
