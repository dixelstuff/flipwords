const puzzleRows = [
  ["hill-hunt","hill","hunt","hint","hull",1,"","","hint-hull",1,77,4,7,0], // allWords 1: thin
  ["daddy-rises","daddy","rises","sided","yards",5,"","","cannot be reversed",35,87,2,5,0], // allWords 9: dares|dries|reads|ready|rides|sears|sides|sired|years
  ["brain-tarot","brain","tarot","baron","trait",2,"","","baron-trait",3], // allWords 3: abort|tabor|train
  ["debt-life","debt","life","bide","felt",4,"","","bide-felt",13], // allWords 9: belt|bile|feed|feel|file|flee|flit|left|lift
  ["filth-safer","filth","safer","fifth","laser",3,"","","fifth-laser",8,92,1,4,0], // allWords 25: earls|fares|farts|fears|feral|fires|first|flare|flier|flirt|fries|hales|halts|heals|leash|rafts|reals|rifle|rifts|serif|shaft|shale|shalt|sheaf|shift
  ["relax-tasty","relax","tasty","latex","stray",3,"","","latex-stray",17], // allWords 13: artsy|early|exalt|layer|leary|relay|satay|taxes|texts|trays|tyres|years|yeast
  ["keen-spin","keen","spin","knee","snip",2,"","","knee-snip",4,8,17,24,0], // allWords 5: pens|pink|pins|seen|sine
  ["lies-toes","lies","toes","site","sole",3,"","","site-sole",19,87,2,5,0], // allWords 3: isle|lose|ties
  ["drop-look","drop","look","dork","loop",2,"","","cannot be reversed",6,87,2,5,0], // allWords 3: polo|pool|prod
  ["cry-sea","cry","sea","arc","yes",3,"","","arc-yes",10], // allWords 2: ace|car
  ["dates-ledge","dates","ledge","edged","steal",4,"","","edged-steal",29,87,2,5,0], // allWords 15: dales|deals|deeds|gated|glade|leads|least|slate|sleet|stade|stale|stead|steed|steel|tales
  ["gate-rice","gate","rice","cage","tire",3,"","","cage-tire",9,76,4,8,0], // allWords 7: acre|care|race|rate|rite|tear|tier
  ["nest-sift","nest","sift","fist","sent",2,"","","fist-sent",4], // allWords 6: fits|nets|sets|sits|tens|tins
  ["bread-known","bread","known","brown","knead",2,"","","brown-knead",1,87,2,5,0], // allWords 7: bared|baron|beard|board|broad|drake|raked
  ["fail-into","fail","into","info","tail",4,"","","info-tail",13,92,1,4,0], // allWords 2: flat|font
  ["fade-peel","fade","peel","feed","pale",2,"","","feed-pale",8,69,5,11,0], // allWords 10: deaf|deep|feel|flea|fled|flee|leaf|leap|peed|plea
  ["goose-paths","goose","paths","hoops","stage",5,"","","hoops-stage",26,87,2,5,0], // allWords 14: gates|ghost|paste|pasts|pesto|poets|posts|septa|soaps|spate|spats|spots|stops|tapes
  ["caves-coral","caves","coral","races","vocal",3,"","","races-vocal",8,87,2,5,0], // allWords 9: acres|cares|clear|clove|cores|orcas|sacra|scare|score
  ["alloy-upset","alloy","upset","loyal","setup",2,"","","loyal-setup",14,76,4,8,0], // allWords 21: alley|allot|atoll|leapt|least|lotus|lousy|paste|petal|plate|pleat|septa|slate|soapy|spate|spout|stale|steal|tales|tapes|tulle
  ["era-war","era","war","are","raw",2,"","","are-raw",5], // allWords 1: ear
  ["shell-stall","shell","stall","halls","tells",2,"","","halls-tells",7,81,3,7,0], // allWords 2: hells|shall
  ["enact-their","enact","their","cheat","inter",3,"","","cheat-inter",18], // allWords 11: chart|cheer|crane|inert|rance|reach|taint|teach|titan|tithe|train
  ["body-cure","body","cure","bury","code",2,"","","bury-code",2,92,1,4,0], // allWords 7: bore|core|cory|deco|ecru|robe|ruby
  ["maple-table","maple","table","blame","plate",3,"","","blame-plate",18,85,2,7,0], // allWords 6: amble|ample|bleat|leapt|petal|pleat
  ["bulk-lime","bulk","lime","lube","milk",3,"","","lube-milk",8,57,7,15,0], // allWords 5: bile|blue|kill|mile|mule
  ["nuts-pack","nuts","pack","cups","tank",4,"","","cups-tank",13], // allWords 11: ants|cans|caps|past|pats|puck|puts|scan|spat|stun|taps
  ["earth-kills","earth","kills","heart","skill",1,"","","heart-skill",3,0,36,68,48], // allWords 27: aster|earls|hater|islet|karts|laser|lathe|least|lisle|rates|reals|rites|skirt|slate|stale|stalk|stare|stark|steal|tales|talks|tears|their|tiers|tiles|tires|tries
  ["meet-shut","meet","shut","teem","thus",2,"","","teem-thus",19,53,8,15,0], // allWords 5: huts|meth|mute|tees|them
  ["maps-swig","maps","swig","gaps","swim",4,"","","gaps-swim",23], // allWords 6: aims|amps|gasp|pass|saps|wigs
  ["new-old","new","old","end","low",2,"","","end-low",7], // allWords 4: den|doe|owe|owl
  ["grab-wild","grab","wild","glib","ward",3,"","","glib-ward",9], // allWords 4: brag|drag|draw|grad
  ["smith-style","smith","style","myths","tiles",2,"","","myths-tiles",7], // allWords 10: emits|islet|items|limes|miles|mites|slime|smile|smite|times
  ["guide-mines","guide","mines","guise","mined",3,"","","guise-mined",4,0,33,36,24], // allWords 8: denim|dings|genie|genus|menus|minds|nudge|singe
  ["drug-mood","drug","mood","drum","good",4,"","","drum-good",23,92,1,4,0], // allWords 4: dodo|doom|dorm|rudd
  ["bean-fart","bean","fart","barn","feat",2,"","","barn-feat",2], // allWords 12: abet|bane|beat|beta|bran|brat|fate|fern|feta|frat|fret|raft
  ["actor-under","actor","under","react","round",3,"","","react-round",18,92,1,4,0], // allWords 16: adorn|cadre|cared|carte|cater|cedar|court|crate|crude|cured|cuter|raced|radon|trace|truce|tuner
  ["grew-wore","grew","wore","grow","were",3,"","","grow-were",9,57,7,15,0], // allWords 3: ergo|gore|ogre
  ["ended-poets","ended","poets","needs","opted",3,"","","needs-opted",19,87,2,5,0], // allWords 13: dense|dents|depot|doped|dopes|dotes|pesto|posed|spend|spent|teens|tends|tense
  ["down-glue","down","glue","lung","owed",2,"","","lung-owed",6], // allWords 6: duel|gown|lewd|udon|undo|weld
  ["din-won","din","won","don","win",1,"","","don-win",0,69,5,11,0], // allWords 2: now|own
  ["nasal-tense","nasal","tense","natal","sense",4,"","","natal-sense",12,76,4,8,0], // allWords 18: asset|atlas|eaten|lanes|lasts|leans|least|salts|seats|senna|slant|slate|slats|stale|steal|tales|tease|teens
  ["angle-bowls","angle","bowls","elbow","slang",3,"","","elbow-slang",18,92,1,4,0], // allWords 8: angel|below|blows|bowel|glean|globe|goals|lawns
  ["cram-sets","cram","sets","cars","stem",2,"","","cars-stem",6], // allWords 14: aces|arcs|arms|came|case|mace|mars|mesa|rams|same|scar|seam|seas|sect
  ["slow-tend","slow","tend","newt","olds",3,"","","newt-olds",9], // allWords 15: dent|does|dose|dote|ends|lows|news|owes|owls|send|sewn|sold|told|went|woes
  ["bunny-tried","bunny","tried","briny","tuned",2,"","","briny-tuned",2], // allWords 5: bride|entry|tired|trend|unity
  ["moss-yeti","moss","yeti","semi","toys",4,"","","semi-toys",13,92,1,4,0], // allWords 7: emit|item|mess|miso|most|stem|time
  ["baby-name","baby","name","babe","many",3,"","","cannot be reversed",8,82,3,6,0], // allWords 6: amen|bane|beam|bean|mane|mean
  ["firm-sons","firm","sons","form","sins",1,"","","form-sins",1,30,12,22,0], // allWords 3: fins|from|rims
  ["isle-lazy","lazy","isle","ally","size",2,"","","ally-size",6], // allWords 3: lies|sell|zeal
  ["atlas-erase","atlas","erase","areas","stale",4,"","","areas-stale",25,87,2,5,0], // allWords 18: asset|earls|laser|lasts|least|reals|reels|salts|saree|sears|seats|slate|slats|sleet|steal|steel|tales|tease
  ["buck-laws","buck","laws","cubs","walk",3,"","","cubs-walk",8,82,3,6,0], // allWords 5: awls|back|cabs|lack|luck
  ["relay-renew","relay","renew","layer","newer",2,"","","layer-newer",14], // allWords 3: early|leary|yearn
  ["dial-rats","dial","rats","laid","star",3,"","","laid-star",19,13,16,23,0], // allWords 10: aids|airs|arts|lair|liar|rail|said|sari|stir|tsar
  ["fools-teeth","fools","teeth","feels","tooth",2,"","","cannot be reversed",2,81,3,7,0], // allWords 9: flees|hotel|sleet|steel|stole|stool|tools|toots|totes
  ["naive-shade","naive","shade","aides","haven",3,"aiden","haves","aides-haven",10,87,2,5,0], // allWords 8: aside|hades|haves|heads|hides|hives|ideas|shave
  ["flesh-walls","flesh","walls","flash","wells",3,"","","flash-wells",8], // allWords 12: falls|false|fells|fleas|leafs|safes|shawl|sheaf|shelf|swell|welsh|whale
  ["ban-saw","ban","saw","nab","was",2,"","","nab-was",5,69,5,11,0], // allWords 0
  ["spark-strip","spark","strip","parks","trips",1,"","","parks-trips",3], // allWords 6: karts|parts|skirt|stark|strap|traps
  ["urges-verse","urges","verse","users","verge",3,"","","users-verge",10], // allWords 7: guess|reeve|reuse|serve|sever|surge|veers
  ["cave-time","cave","time","mate","vice",3,"","","mate-vice",13,61,7,11,0], // allWords 9: came|emit|item|mace|meat|meta|mice|tame|team
  ["rebel-stout","rebel","stout","belts","outer",4,"","","belts-outer",22], // allWords 20: beets|beret|beset|blues|blurt|brute|butts|lotus|louse|otter|rebut|route|ruble|stole|totes|touts|trout|tuber|tubes|tutor
  ["cold-pool","cold","pool","cool","plod",2,"","","cannot be reversed",8,92,1,4,0], // allWords 5: clod|loco|loop|poll|polo
  ["ghost-salon","ghost","salon","along","hosts",2,"","","along-hosts",6], // allWords 10: gloat|goats|lasts|loans|salts|shoot|shots|slang|slats|sloth
  ["chat-seek","chat","seek","east","heck",3,"","","east-heck",10,92,1,4,0], // allWords 9: cake|eats|hack|hast|hats|sake|seat|teas|tees
  ["rare-snow","rare","snow","owns","rear",2,"","","owns-rear",15], // allWords 9: aero|ears|eons|eras|nose|ones|sera|wars|worn
  ["amen-bait","amen","bait","abet","main",2,"","","abet-main",6], // allWords 14: amin|bane|bean|beat|beta|mane|mate|mean|meat|meta|mina|name|tame|team
  ["gas-keg","gas","keg","ask","egg",2,"","","ask-egg",8], // allWords 0
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
  ["key-tap","key","tap","pet","yak",3,"","","pet-yak",14,82,3,6,0], // allWords 3: kay|pat|yet
  ["just-monk","just","monk","junk","most",2,"","","junk-most",1], // allWords 4: jots|juts|musk|must
  ["sassy-treat","sassy","treat","essay","start",3,"","","essay-start",19,92,1,4,0], // allWords 24: artsy|assay|asset|aster|rates|rests|satay|seats|stare|stars|state|stats|stays|stray|tarts|taste|tater|tears|teary|tetra|trays|tyres|years|yeast
  ["cedar-green","cedar","green","cared","genre",2,"","","cared-genre",13], // allWords 17: agree|anger|cadre|carer|crane|creed|dance|eager|grade|grand|greed|raced|racer|raged|rager|rance|range
  ["iron-lads","iron","lads","also","rind",3,"","","also-rind",20,92,1,4,0], // allWords 6: aids|land|loan|noir|nori|said
  ["fact-made","fact","made","came","daft",3,"","","came-daft",9,82,3,6,0], // allWords 7: cafe|dame|deaf|face|fade|mace|mead
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
  ["bases-begun","bases","begun","began","buses",4,"","","began-buses",12,82,3,6,0], // allWords 1: beans
  ["seem-toss","seem","toss","most","sees",3,"","","cannot be reversed",23,87,2,5,0], // allWords 10: meet|mess|moss|sets|some|stem|teem|tees|toes|tome
  ["older-rocks","older","rocks","locks","order",3,"","","locks-order",8], // allWords 10: close|cooks|cores|corks|crook|crore|doers|dorks|rodeo|score
  ["ease-rich","ease","rich","each","rise",2,"","","each-rise",1], // allWords 14: ache|acre|arch|care|char|ears|eras|race|rash|rice|sera|shea|shri|sire
  ["liar-wolf","wolf","liar","flow","rail",3,"","","flow-rail",19], // allWords 7: fail|fill|foal|lair|loaf|oral|roll
  ["did-nib","did","nib","bid","din",3,"","","cannot be reversed",9,86,2,6,0], // allWords 1: bin
  ["bell-idea","bell","idea","able","lied",3,"","","able-lied",22,92,1,4,0], // allWords 10: aide|bald|bale|bead|bled|deli|dial|dill|idle|laid
  ["paint-rites","paint","rites","spite","train",2,"spain","trite","spite-train",5], // allWords 28: arise|aster|irate|pains|pants|paste|petit|pints|rains|raise|rants|rates|sarin|sepia|septa|spate|stare|stipe|tapes|tater|tears|tetra|tiers|tires|trans|treat|tries|trite
  ["clean-dread","clean","dread","laden","raced",3,"","","laden-raced",16], // allWords 11: adder|cadre|cared|cedar|clade|crane|dared|decal|laced|lance|rance
  ["lift-tale","lift","tale","fate","lilt",3,"","","fate-lilt",9,77,4,7,0], // allWords 15: feat|feta|file|flat|flea|flit|late|leaf|life|lite|tall|teal|tile|till|tilt
  ["mayor-stern","mayor","stern","marry","stone",2,"","","marry-stone",7,92,1,4,0], // allWords 17: arose|earns|metro|moray|nears|notes|onset|ramen|rears|rents|seton|snare|stony|store|story|tones|yarns
  ["euro-spot","euro","spot","oops","true",4,"","","oops-true",22], // allWords 13: ours|outs|poet|pore|post|pots|pros|repo|rope|rust|sour|stop|tops
  ["baked-pools","baked","pools","blood","peaks",3,"","","blood-peaks",12,92,1,4,0], // allWords 13: abode|adobe|bakes|beaks|booed|lobos|loops|poked|pokes|sloop|speak|spoke|spool
  ["hopes-steer","hopes","steer","ether","poses",3,"","","ether-poses",7], // allWords 18: ester|pesos|pests|pores|poser|posse|prose|reset|ropes|sheet|spore|steps|strep|terse|there|these|three|trees
  ["raw-saw","raw","saw","war","was",2,"","","war-was",5,59,7,13,0], // allWords 0
  ["shirt-swine","shirt","swine","hints","wires",2,"","","hints-wires",7], // allWords 9: heirs|hires|shine|shire|twins|weirs|wines|wiser|wrist
  ["couch-singe","couch","singe","cough","since",1,"","","cough-since",1,75,4,9,0], // allWords 6: chins|cinch|conch|cones|guise|scone
  ["over-then","over","then","hero","vent",2,"","","hero-vent",8,87,2,5,0], // allWords 2: hone|oven
  ["level-wagon","level","wagon","legal","woven",4,"","","legal-woven",16], // allWords 8: aglow|along|angel|angle|glean|navel|novel|vowel
  ["asks-want","asks","want","swan","task",2,"","","swan-task",7,57,8,11,0], // allWords 2: ants|sans
  ["ranch-towns","ranch","towns","notch","warns",4,"","","notch-warns",16,92,1,4,0], // allWords 7: chant|crows|scant|scorn|sworn|wants|watch
  ["die-nor","die","nor","eon","rid",3,"","","eon-rid",10,92,1,4,0], // allWords 3: doe|one|rod
  ["hard-pelt","hard","pelt","held","part",2,"","","held-part",2,92,1,4,0], // allWords 7: dahl|halt|hart|herd|plat|tarp|trap
  ["send-slip","send","slip","ends","lips",1,"","","ends-lips",3], // allWords 6: dies|lids|pens|pies|side|slid
  ["split-wheel","split","wheel","spell","white",3,"","","cannot be reversed",8,92,1,4,0], // allWords 23: heels|heist|hells|hills|peels|pelts|piles|pills|plies|sheet|shell|shill|sleep|slept|spelt|spiel|spill|spilt|spite|steep|stipe|these|while
  ["array-guide","array","guide","argue","diary",4,"","","argue-diary",22], // allWords 7: adieu|aired|auger|dairy|rager|ridge|urged
  ["corn-unit","corn","unit","icon","runt",2,"","","icon-runt",7,92,1,4,0], // allWords 3: coin|tour|turn
  ["luck-nose","luck","nose","cone","sulk",3,"","","cone-sulk",9,92,1,4,0], // allWords 8: clue|eons|lock|lose|once|ones|sole|sunk
  ["field-greet","field","greet","filet","greed",2,"","","cannot be reversed",5,87,2,5,0], // allWords 5: defer|filed|freed|glide|legit
  ["dusty-idols","dusty","idols","oddly","suits",4,"","","oddly-suits",14], // allWords 4: doily|solid|studs|study
  ["bump-host","bump","host","push","tomb",4,"","","push-tomb",26,92,1,4,0], // allWords 13: bops|bots|bust|hops|hump|huts|moth|posh|pubs|shop|shot|shut|thus
  ["ick-odd","ick","odd","doc","kid",2,"","","doc-kid",9], // allWords 2: cod|did
  ["bevy-rule","bevy","rule","lube","very",3,"","","lube-very",8], // allWords 5: blue|ever|lure|reel|rely
  ["buddy-tells","buddy","tells","bulls","teddy",2,"","","bulls-teddy",1,87,2,5,0], // allWords 4: bells|belly|bully|telly
  ["dork-lime","dork","lime","milk","rode",3,"","","milk-rode",8,69,5,11,0], // allWords 12: demo|dime|dire|dirk|dome|lore|mile|mode|mole|redo|ride|role
  ["flit-from","flit","from","film","fort",2,"","","film-fort",6], // allWords 5: firm|form|lift|loft|rift
  ["asset-heats","asset","heats","ashes","state",5,"","","cannot be reversed",29,87,2,5,0], // allWords 11: eases|haste|hates|seats|sheet|stash|stats|taste|tease|these|theta
  ["nuts-weed","nuts","weed","nude","west",3,"","","nude-west",9], // allWords 11: dent|dune|need|nest|nets|seen|sent|stew|stun|tend|tens
  ["blame-resin","blame","resin","amble","siren",2,"","","amble-siren",13], // allWords 5: ramen|realm|reins|rinse|risen
  ["grant-swore","grant","swore","range","worst",2,"","","range-worst",6], // allWords 23: anger|earns|goner|nears|rager|rants|rears|roger|senor|snare|snore|snort|straw|swear|towns|trans|twang|wager|wants|wares|warts|wears|worse
  ["relay-roman","relay","roman","layer","manor",2,"","","layer-manor",14], // allWords 8: early|learn|leary|mayor|moray|ramen|renal|royal
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
  ["ducks-sizes","ducks","sizes","sized","sucks",3,"","","sized-sucks",12,70,5,10,0], // allWords 1: dicks
  ["date-fury","date","fury","duty","fare",2,"","","duty-fare",3,92,1,4,0], // allWords 11: dare|dear|duet|fate|fear|feat|feta|fray|read|rude|yard
  ["rind-tear","rind","tear","dint","rear",3,"","","dint-rear",23], // allWords 13: arid|dare|date|dear|dent|nerd|raid|rare|rate|read|rent|tend|tern
  ["bar-pot","bar","pot","rob","tap",3,"","","rob-tap",14,82,3,6,0], // allWords 10: bat|bot|bra|bro|opt|pat|pro|rap|tab|top
  ["great-horse","great","horse","agree","short",2,"","","agree-short",8,77,4,7,0], // allWords 18: eager|earth|ethos|gator|goers|grate|hater|heart|heres|heros|horst|ogres|rager|serge|sheer|shore|those|torah
  ["blind-clack","blind","clack","bland","click",1,"","","bland-click",2], // allWords 5: black|blank|blink|clank|clink
  ["logs-tiff","logs","tiff","fits","golf",3,"","","fits-golf",8], // allWords 5: fist|gift|gist|sift|soft
  ["bone-pity","bone","pity","bite","pony",2,"","","bite-pony",2], // allWords 6: bony|nope|open|pine|poet|typo
  ["event-viral","event","viral","inter","valve",4,"","","cannot be reversed",24,86,2,6,0], // allWords 10: alive|avert|inert|irate|leave|liner|liven|ravel|rival|vitae
  ["felt-kale","felt","kale","lake","left",2,"","","lake-left",4,0,21,38,24], // allWords 9: feel|flat|flea|flee|keel|leaf|leak|leek|talk
  ["paved-rider","paved","rider","dared","viper",4,"","","dared-viper",12], // allWords 12: adder|diver|drape|dread|dried|drier|drive|padre|pared|pride|raver|river
  ["canon-pores","canon","pores","acorn","opens",3,"","","cannot be reversed",19,92,1,4,0], // allWords 29: acres|apron|canes|cares|cones|cores|crane|crone|nance|orcas|panes|parse|pears|porno|poser|prone|prose|races|rance|recon|ropes|scare|scone|score|snoop|spare|spear|spoon|spore
  ["opal-role","opal","role","oral","pole",3,"","","oral-pole",9,87,2,5,0], // allWords 6: aero|lore|pear|poll|reap|roll
  ["flies-natal","flies","natal","fetal","nails",4,"neils","fatal","fetal-nails",12], // allWords 15: alien|anise|fails|fatal|fates|feast|feats|files|flail|flats|liens|lines|slain|slant|snail
  ["route-steam","route","steam","outer","teams",1,"","","outer-teams",3], // allWords 9: amour|eater|mates|meats|metro|tamer|tease|tomes|utter
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
  ["feel-redo","feel","redo","flee","rode",2,"","","flee-rode",4,37,11,19,0], // allWords 2: fled|reel
  ["soul-spit","soul","spit","oils","puts",2,"","","oils-puts",8], // allWords 7: lips|outs|pits|plus|slip|soil|tips
  ["oddly-share","oddly","share","deals","hydro",4,"","","deals-hydro",25], // allWords 18: adore|dales|dares|hales|hares|heals|hears|herds|holed|horde|leads|leash|reads|sadly|shale|shear|shred|yards
  ["cafe-lake","lake","cafe","face","kale",2,"","","face-kale",4,0,27,39,0], // allWords 4: cake|flea|leaf|leak
  ["bells-flash","bells","flash","balls","flesh",3,"","","balls-flesh",8], // allWords 13: bales|bases|bless|falls|false|fells|fleas|leafs|sable|safes|sheaf|shelf|slabs
  ["cans-pick","pick","cans","caps","nick",4,"","","caps-nick",13,87,2,5,0], // allWords 10: pack|pans|pics|pink|pins|scan|snap|snip|span|spin
  ["pen-toy","toy","pen","not","yep",3,"","","not-yep",10], // allWords 4: net|ten|ton|yet
  ["draw-pins","draw","pins","snip","ward",3,"","","snip-ward",19,0,20,28,24], // allWords 7: aids|raps|said|spin|warp|wind|wrap
  ["gravy-pearl","gravy","pearl","gavel","parry",3,"","","gavel-parry",10], // allWords 7: glare|lager|large|paler|payer|regal|repay
  ["lily-mere","lily","mere","lime","rely",4,"","","lime-rely",12], // allWords 3: mile|reel|yell
  ["drill-store","drill","store","rolls","tired",3,"","","rolls-tired",11,92,1,4,0], // allWords 22: drier|droll|islet|lilts|loser|older|order|rider|riled|riser|rites|roles|still|stole|tiers|tiled|tiles|tills|tires|tolls|tried|tries
  ["fair-loud","loud","fair","four","laid",2,"","","four-laid",2,87,2,5,0], // allWords 7: dial|dual|idol|lair|liar|ludo|rail
  ["roads-steel","steel","roads","loads","steer",4,"","","loads-steer",25], // allWords 25: alert|alter|arose|asset|aster|darts|doers|doses|ester|later|least|older|rates|reset|seats|slate|sleet|sodas|stale|stare|steal|tales|tears|terse|trees
  ["bare-down","bare","down","bore","dawn",1,"","","bore-dawn",1,0,20,29,24], // allWords 15: barn|bear|born|bran|dare|darn|dear|owed|rand|read|redo|robe|rode|wade|wand
  ["pools-tides","pools","tides","edits","loops",3,"","","edits-loops",18], // allWords 15: diets|dopes|dotes|plods|poise|polis|posed|sited|sloop|spied|spoil|spool|stool|toils|tools
  ["ape-arc","ape","arc","cap","ear",2,"","","cap-ear",8,86,2,6,0], // allWords 4: are|car|era|pac
  ["seen-sets","seen","sets","nets","sees",3,"","","nets-sees",22], // allWords 3: nest|sent|tens
  ["modes-polar","polar","modes","moral","posed",3,"","","moral-posed",10,92,1,4,0], // allWords 11: demos|domes|dopes|lopes|molar|moles|morel|pedro|poles|roped|slope
  ["mint-opal","mint","opal","into","palm",2,"","","into-palm",7], // allWords 6: atop|lamp|lima|lion|mail|tamp
  ["aced-yell","aced","yell","call","eyed",3,"","","call-eyed",9,92,1,4,0], // allWords 5: clad|dale|deal|lace|lead
  ["began-piper","piper","began","begin","paper",4,"","","begin-paper",12,35,11,21,0], // allWords 6: barge|being|binge|grape|gripe|pager
  ["doll-swap","doll","swap","laws","plod",4,"","","laws-plod",22], // allWords 6: also|awls|load|paws|soap|wasp
  ["hangs-light","hangs","light","slang","thigh",2,"","","slang-thigh",5], // allWords 5: glint|highs|night|sling|thing
  ["necks-rotor","necks","rotor","corks","tenor",4,"","","corks-tenor",16,92,1,4,0], // allWords 21: cones|cores|crone|crore|knots|notes|onset|recon|retro|rocks|roost|roots|scone|score|seton|stone|store|stork|toner|tones|torso
  ["hat-job","hat","job","hot","jab",1,"","","hot-jab",1,74,4,10,0], // allWords 0
  ["deep-when","deep","when","need","phew",3,"","","need-phew",23,87,2,5,0], // allWords 2: peed|weep
  ["huge-plan","huge","plan","hung","plea",2,"","","hung-plea",5], // allWords 4: hale|heal|leap|pale
  ["dodge-tales","dodge","tales","dates","lodge",3,"","","dates-lodge",8,87,2,5,0], // allWords 15: dales|deals|dosed|dotes|gated|glade|golds|leads|least|slate|stade|stale|stead|steal|stole
  ["canoe-loyal","loyal","canoe","alloy","ocean",2,"","","alloy-ocean",19,86,2,6,0], // allWords 4: allay|alone|canal|colon
  ["died-note","died","note","diet","node",3,"","","diet-node",9,76,4,8,0], // allWords 8: dine|dint|done|dote|edit|tide|tied|tone
  ["name-team","team","name","amen","meat",3,"","","amen-meat",19], // allWords 8: mana|mane|mate|mean|meet|meta|tame|teem
  ["crowd-large","large","crowd","grace","world",4,"","","grace-world",22,81,3,7,0], // allWords 4: glare|lager|lower|regal
  ["fiery-stand","fiery","stand","fined","stray",3,"","","fined-stray",8], // allWords 17: artsy|darts|dents|draft|dries|fairy|fiend|fired|fried|nasty|raids|rides|sired|snide|tends|trays|tyres
  ["doom-spot","doom","spot","mood","tops",3,"","","mood-tops",19,0,19,29,0], // allWords 4: moos|post|pots|stop
  ["scamp-scent","scamp","scent","camps","cents",1,"","","camps-cents",3], // allWords 1: scant
  ["clown-three","clown","three","clone","threw",2,"","","clone-threw",5,87,2,5,0], // allWords 4: cheer|ether|there|towel
  ["dean-rent","dean","rent","near","tend",3,"","","near-tend",23,75,4,9,0], // allWords 6: date|dent|earn|rate|tear|tern
  ["rate-slip","slip","rate","isle","trap",2,"","","isle-trap",9,82,3,6,0], // allWords 16: east|eats|lest|lets|lies|lips|pair|part|past|pats|seat|spat|taps|tarp|tear|teas
  ["blind-crank","blind","crank","brand","clink",2,"","","brand-clink",2,75,4,9,0], // allWords 5: bland|blank|blink|brink|clank
  ["buck-case","buck","case","cube","sack",3,"","","cube-sack",8,51,9,13,0], // allWords 7: aces|back|base|bask|cask|cues|suck
  ["paste-rests","paste","rests","stare","steps",3,"","","stare-steps",18,92,1,4,0], // allWords 16: aster|ester|pasts|pests|rates|reset|septa|spate|spats|stars|steep|steer|tapes|tears|terse|trees
  ["each-kegs","each","kegs","heck","sage",4,"","","heck-sage",26,87,2,5,0], // allWords 8: aces|ache|ages|case|cask|ghee|hack|sack
  ["bibs-very","bibs","very","bevy","ribs",3,"","","bevy-ribs",9,81,3,7,0], // allWords 0
  ["eye-its","its","eye","tie","yes",2,"","","tie-yes",7,82,3,6,0], // allWords 3: set|sit|tee
  ["waft-wine","wine","waft","want","wife",1,"","","want-wife",1,86,2,6,0], // allWords 2: anew|twin
  ["sinks-torch","torch","sinks","notch","risks",3,"","","notch-risks",8,82,3,6,0], // allWords 11: chins|cross|honks|knits|knots|shirk|skins|skirt|stink|stork|think
  ["gouge-nerve","gouge","nerve","genre","vogue",3,"","","genre-vogue",21,87,2,5,0], // allWords 7: goner|gorge|green|grove|never|venue|verge
  ["demo-jobs","demo","jobs","beds","mojo",4,"","","beds-mojo",13,92,1,4,0], // allWords 5: dome|doom|mode|mods|mood
  ["roof-urge","roof","urge","euro","frog",2,"","","euro-frog",8,82,3,6,0], // allWords 4: ergo|four|gore|ogre
  ["freed-guest","freed","guest","fused","greet",3,"","","fused-greet",8], // allWords 6: defer|dregs|fetus|feuds|frets|greed
  ["pope-says","pope","says","pose","yaps",3,"","","pose-yaps",8], // allWords 7: apes|easy|pass|pays|peas|pops|saps
  ["swim-test","swim","test","mess","twit",4,"","","mess-twit",23], // allWords 9: emit|item|semi|sets|site|stem|ties|time|wits
  ["picks-renew","picks","renew","spine","wreck",3,"","","spine-wreck",10,87,2,5,0], // allWords 15: ceres|cries|epics|newer|pines|pinks|reins|resin|rinse|risen|siren|sneer|snipe|speck|spice
  ["ask-rid","ask","rid","irk","sad",2,"","","irk-sad",7,92,1,4,0], // allWords 2: ads|aid
  ["lets-yowl","lets","yowl","toys","well",4,"","","toys-well",13,92,1,4,0], // allWords 10: lest|lost|lots|lows|owls|slew|slot|slow|tell|toll
  ["hall-mini","mini","hall","hill","main",2,"","","hill-main",8,66,6,10,0], // allWords 7: amin|hail|lima|mail|mall|mill|mina
  ["annoy-weird","annoy","weird","owned","rainy",4,"","","owned-rainy",24,92,1,4,0], // allWords 7: aired|anode|drain|nadir|wider|wired|yearn
  ["bases-title","bases","title","sites","table",4,"","","cannot be reversed",16,92,1,4,0], // allWords 30: asset|bales|bates|beast|beats|bites|blast|bleat|bliss|islet|lasts|latte|least|lists|sable|salts|seats|slabs|slate|slats|slits|stale|state|steal|stilt|tales|taste|tease|tiles|tilts
  ["notes-pores","notes","pores","ropes","tones",2,"","","ropes-tones",3,70,5,10,0], // allWords 10: onset|pesto|poets|poser|prose|senor|seton|snore|spore|stone
  ["dash-kind","dash","kind","disk","hand",3,"","","disk-hand",22,82,3,6,0], // allWords 9: adds|dads|dank|dish|hank|hind|khan|kids|skid
  ["the-war","the","war","art","hew",2,"","","art-hew",8], // allWords 6: ate|awe|eat|rat|raw|tea
  ["blush-croak","blush","croak","brush","cloak",1,"","","brush-cloak",1,15,11,21,20], // allWords 7: abhor|corks|crush|locks|roach|rocks|shrub
  ["easy-glut","easy","glut","seat","ugly",2,"","","seat-ugly",9,87,2,5,0], // allWords 8: east|eats|gays|lest|lets|stag|tags|teas
  ["lamps-views","lamps","views","palms","wives",2,"","","palms-wives",17,81,3,7,0], // allWords 10: lapse|leaps|pales|piles|pleas|plies|psalm|spiel|waves|wiles
  ["avail-still","still","avail","tails","villa",3,"","","tails-villa",10,87,2,5,0], // allWords 5: lilts|silva|stall|tills|vials
  ["cart-save","save","cart","race","vast",3,"","","race-vast",8,71,5,9,0], // allWords 11: acre|arts|care|cave|ears|eras|rats|sera|star|tsar|vase
  ["needs-shows","needs","shows","seeds","shown",3,"","","seeds-shown",22,80,3,8,0], // allWords 5: dense|doses|nodes|nosed|sheds
  ["coat-full","full","coat","cult","foal",2,"","","cult-foal",2,92,1,4,0], // allWords 7: clot|coal|cola|colt|loaf|loft|taco
  ["earn-pour","earn","pour","rear","upon",2,"","","rear-upon",9,92,1,4,0], // allWords 4: euro|near|porn|rare
  ["are-bin","are","bin","era","nib",2,"","","era-nib",5,42,10,18,0], // allWords 2: ear|ran
  ["bean-then","bean","then","been","than",1,"","","been-than",1,57,8,11,0], // allWords 4: ante|bane|neat|teen
  ["bike-ends","bike","ends","dibs","knee",4,"","","dibs-knee",13,87,2,5,0], // allWords 8: bend|bide|bids|dies|keen|need|send|side
  ["gnome-steal","gnome","steal","along","meets",5,"","","along-meets",24], // allWords 17: angel|angle|glean|gloat|lanes|leans|least|loans|melts|omens|salon|slate|smelt|stale|tales|tease|tomes
  ["close-shift","close","shift","chief","slots",3,"","","chief-slots",11], // allWords 19: chose|clots|colts|files|fitch|flies|flits|hoses|hosts|isles|lifts|lists|lofts|loses|shoes|shots|slice|slits|soles
  ["amid-cake","amid","cake","acid","make",3,"","","acid-make",9], // allWords 2: maid|mice
  ["cheer-salsa","cheer","salsa","cares","shale",3,"","","cares-shale",11], // allWords 21: aches|acres|ashes|chase|clash|clear|earls|erase|hales|heals|heres|laser|leach|leash|races|reals|saree|scare|sears|sheer|slash
  ["flare-skits","flare","skits","rifle","tasks",3,"","","rifle-tasks",18,87,2,5,0], // allWords 33: earls|faker|feral|fetal|filet|flats|flier|flits|freak|frisk|islet|kites|laser|lasts|least|lifts|lists|rakes|reals|risks|salts|skate|skier|slate|slats|slits|stake|stale|steak|steal|takes|tales|tiles
  ["foot-lead","lead","foot","deaf","tool",3,"","","deaf-tool",23], // allWords 14: alto|dale|deal|dole|fade|fate|feat|feta|food|late|load|loot|tale|teal
  ["back-nuts","back","nuts","cubs","tank",4,"","","cubs-tank",13,92,1,4,0], // allWords 10: ants|bats|buck|bust|cabs|cans|scan|stab|stun|tabs
  ["ran-you","you","ran","any","our",2,"","","any-our",8], // allWords 1: nor
  ["gaps-tiff","gaps","tiff","gaff","tips",2,"","","cannot be reversed",1,92,1,4,0], // allWords 14: fast|fats|figs|fist|fits|gasp|past|pats|pigs|pits|sift|spat|spit|taps
  ["fame-logo","fame","logo","goof","meal",3,"","","goof-meal",19,87,2,5,0], // allWords 7: foam|gale|goal|lame|loom|male|mole
  ["chess-flick","chess","flick","chefs","slick",4,"","","chefs-slick",26], // allWords 5: check|chick|click|hicks|licks
  ["grid-tale","grid","tale","glad","tire",3,"","","glad-tire",9], // allWords 7: dirt|gale|gird|late|rite|teal|tier
  ["ruler-seven","seven","ruler","never","rules",3,"","","cannot be reversed",12,86,2,6,0], // allWords 8: evens|lures|nerve|reels|serve|sever|veers|verse
  ["canal-glory","canal","glory","angry","local",3,"","","angry-local",8], // allWords 2: coral|largo
  ["heel-roll","heel","roll","hell","role",2,"","","hell-role",6,79,3,9,0], // allWords 3: hole|lore|reel
  ["corps-tense","tense","corps","pence","sorts",4,"","","pence-sorts",26,86,2,6,0], // allWords 32: ceres|cones|cores|creep|crepe|cress|crops|cross|ester|nests|notes|onset|ponce|ports|prost|reset|rests|scene|scone|score|seton|spent|sport|steer|stone|store|strep|teens|terse|tones|trees|trope
  ["rises-salon","salon","rises","arson","isles",3,"","","arson-isles",8,92,1,4,0], // allWords 31: earls|earns|irons|lanes|laser|lasso|leans|learn|liens|liner|lines|lions|loans|loins|nears|reals|reins|renal|resin|rinse|risen|sales|seals|sears|silos|siren|snare|soars|soils|solar|sonar
  ["tip-way","tip","way","pit","yaw",2,"","","pit-yaw",5], // allWords 3: pat|paw|tap
  ["clear-winds","clear","winds","clans","wider",3,"","","clans-wider",9,81,3,7,0], // allWords 10: cairn|cider|cried|laces|lawns|scale|swain|weird|welds|wired
  ["amen-seat","amen","seat","east","mean",1,"","","east-mean",3,72,5,8,0], // allWords 17: eats|mana|mane|mans|mast|mate|mats|meat|meta|name|sane|seen|stem|tame|team|teas|tees
  ["bin-tip","bin","tip","nib","pit",2,"","","nib-pit",5,66,6,10,0], // allWords 2: nit|tin
  ["straw-years","straw","years","stray","wears",4,"","","stray-wears",25,92,1,4,0], // allWords 10: artsy|satay|sears|stars|swear|trays|wares|warts|warty|weary
  ["board-decor","board","decor","arbor","coded",3,"","","arbor-coded",17], // allWords 13: abode|adder|adobe|adore|bared|barre|beard|bread|broad|coder|credo|dared|dread
  ["plot-weak","weak","plot","poet","walk",2,"","","poet-walk",6,69,5,11,0], // allWords 7: peak|peat|plat|poke|tape|wake|woke
  ["panic-total","total","panic","natal","topic",4,"","","natal-topic",15], // allWords 11: actin|attic|canto|cotta|optic|pilot|plain|tacit|talon|tonal|tonic
  ["glue-only","only","glue","lone","ugly",2,"","","lone-ugly",9,87,2,5,0], // allWords 2: glen|noel
  ["clad-wool","wool","clad","call","wood",2,"","","call-wood",6], // allWords 7: clod|coal|cola|cold|cool|loco|wall
  ["siren-songs","siren","songs","noses","rings",4,"","","noses-rings",21], // allWords 14: grins|gross|nines|reins|resin|rinse|risen|rises|roses|senor|signs|sings|snore|sores
  ["busy-toll","busy","toll","bull","toys",3,"","","cannot be reversed",9,85,2,7,0], // allWords 7: boys|buys|lost|lots|lust|slot|slut
  ["cafe-mode","cafe","mode","dome","face",2,"","","dome-face",4,0,27,31,0], // allWords 8: aced|code|dame|deco|demo|fame|made|mead
  ["pep-top","pep","top","pet","pop",3,"","","cannot be reversed",9,81,3,7,0], // allWords 2: opt|pot
  ["cross-story","cross","story","costs","sorry",2,"","","costs-sorry",6], // allWords 2: scots|sorts
  ["asks-lend","asks","lend","elks","sand",3,"","","elks-sand",9,92,1,4,0], // allWords 5: dean|lens|sake|sane|sans
  ["aimed-table","aimed","table","bleat","media",2,"","","bleat-media",14,72,5,8,0], // allWords 6: abide|debit|mated|metal|tamed|timed
  ["late-play","late","play","ally","tape",3,"","","ally-tape",8], // allWords 8: leap|pale|peat|pelt|plea|tale|teal|tell
  ["camp-form","camp","form","comp","farm",1,"","","comp-farm",1,2,18,26,0], // allWords 4: carp|cram|crop|from
  ["spurn-steak","spurn","steak","peaks","turns",2,"","","peaks-turns",7,41,9,13,10], // allWords 10: aunts|panes|perks|rents|runts|skate|speak|stake|stern|takes
  ["role-want","want","role","earl","town",3,"","","earl-town",19,67,6,9,0], // allWords 9: anew|earn|lear|lore|lowe|near|rant|real|torn
  ["edits-error","edits","error","order","tires",4,"","","order-tires",22,87,2,5,0], // allWords 10: diets|doers|rites|sited|tides|tiers|tired|tried|trier|tries
  ["begin-waves","waves","begin","began","wives",4,"","","began-wives",12], // allWords 6: being|binge|vibes|views|wages|wigan
  ["left-pays","left","pays","felt","yaps",2,"","","felt-yaps",4], // allWords 5: flat|lays|self|slay|type
  ["rodeo-short","short","rodeo","doors","other",5,"","","doors-other",29], // allWords 10: dotes|ethos|horde|horst|odors|roost|roots|rotor|those|torso
  ["guide-sides","guide","sides","guise","sided",3,"","","guise-sided",4,0,33,39,24], // allWords 3: dudes|issue|suede
  ["died-soul","died","soul","dies","loud",3,"","","dies-loud",19,64,6,12,0], // allWords 12: deli|does|dole|dose|idle|isle|lied|lies|lose|ludo|side|sole
  ["cheer-treat","cheer","treat","crate","there",2,"","","crate-there",9,82,3,6,0], // allWords 20: carer|carte|cater|cheat|earth|erect|ether|hater|heart|racer|reach|react|tater|teach|teeth|terra|tetra|theta|three|trace
  ["arms-hits","arms","hits","mars","this",1,"","","mars-this",3,77,4,7,0], // allWords 6: aims|arts|rams|rats|star|tsar
  ["coat-gear","coat","gear","rage","taco",2,"","","rage-taco",15,57,7,15,0], // allWords 6: acre|care|gate|goat|race|toga
  ["stool-teeth","stool","teeth","steel","tooth",4,"","","cannot be reversed",13,81,3,7,0], // allWords 11: ethos|loose|lotte|lotto|sheet|shoot|sleet|stole|these|those|tools
  ["ocean-stole","ocean","stole","colon","tease",3,"","","colon-tease",8], // allWords 9: atone|canes|canoe|cease|clone|close|santo|sleet|steel
  ["lime-rely","lime","rely","lily","mere",4,"","","lily-mere",13], // allWords 3: mile|reel|yell
  ["nerve-salad","nerve","salad","leads","raven",3,"","","leads-raven",21,92,1,4,0], // allWords 22: areas|arena|dales|dares|deals|easel|elves|erase|laden|lease|navel|never|raves|reads|salve|saree|saver|serve|sever|slave|veers|verse
  ["gates-lacks","gates","lacks","cages","talks",3,"","","cages-talks",8,81,3,7,0], // allWords 10: laces|least|scale|slack|slate|stage|stale|stalk|steal|tales
  ["meet-step","meet","step","pets","teem",3,"","","pets-teem",19,52,8,16,0], // allWords 4: pest|tees|temp|test
  ["feed-kale","feed","kale","fade","keel",2,"","","fade-keel",8], // allWords 9: deaf|feel|flea|fled|flee|lake|leaf|leak|leek
  ["find-post","find","post","fist","pond",2,"","","fist-pond",1,81,3,7,0], // allWords 15: dips|fits|fond|font|pint|pits|pods|pots|sift|soft|spit|spot|stop|tips|tops
  ["cats-lung","cats","lung","glut","scan",2,"","","glut-scan",8,92,1,4,0], // allWords 8: acts|cans|cast|cuts|last|lust|salt|slut
  ["also-pops","also","pops","oops","slap",4,"","","oops-slap",23,86,2,6,0], // allWords 7: alps|laps|opal|pals|plop|poop|soap
  ["amok-clef","amok","clef","leaf","mock",2,"","","leaf-mock",7,87,2,5,0], // allWords 10: fame|flea|foal|foam|kale|lake|leak|loaf|lock|make
  ["local-ropes","local","ropes","coral","poles",3,"","","coral-poles",7], // allWords 13: cello|close|coals|cores|lopes|orcas|polar|pores|poser|prose|score|slope|spore
  ["space-world","space","world","crowd","lapse",4,"","","crowd-lapse",21], // allWords 14: capes|cords|cores|leaps|loads|lords|loser|lower|paces|pales|pleas|roles|scape|score
  ["blue-eons","blue","eons","lube","ones",1,"","","lube-ones",3,63,6,13,0], // allWords 3: bone|lens|nose
  ["enjoy-names","enjoy","names","jeans","money",3,"","","jeans-money",19,92,1,4,0], // allWords 6: enemy|mason|means|mensa|moans|omens
  ["alp-ice","alp","ice","cap","lie",2,"","","cap-lie",6,92,1,4,0], // allWords 5: ace|lap|lip|pac|pal
  ["beef-wine","beef","wine","been","wife",3,"","","been-wife",9,76,4,8,0], // allWords 0
  ["ours-pity","ours","pity","spit","your",2,"","","spit-your",7,87,2,5,0], // allWords 7: outs|pits|puts|rips|sour|spur|tips
  ["elder-tapes","elder","tapes","rated","sleep",5,"","","rated-sleep",34,92,1,4,0], // allWords 18: dates|eared|eased|leper|paste|pease|peels|pelts|repel|septa|slept|spate|spelt|stade|stead|taper|trade|tread
  ["debut-jolly","debut","jolly","doubt","jelly",2,"","","doubt-jelly",7,68,5,12,0], // allWords 1: dolly
  ["angle-crude","angle","crude","grade","uncle",4,"","","grade-uncle",12,92,1,4,0], // allWords 10: angel|cruel|cured|glare|glean|lager|large|raged|regal|ulcer
  ["soda-thin","soda","thin","dash","into",3,"","","dash-into",18,87,2,5,0], // allWords 7: dons|dosa|hint|ions|nods|shin|toad
  ["cheer-stock","cheer","stock","chock","steer",2,"","","chock-steer",1,64,6,12,0], // allWords 20: check|cheek|choke|chore|crest|erect|ester|heres|heros|horse|ochre|reset|sheer|shock|shore|skeet|stoke|store|terse|trees
  ["taxi-yell","taxi","yell","ally","exit",2,"","","ally-exit",8,87,2,5,0], // allWords 5: lite|tail|tall|tell|tile
  ["pants-straw","pants","straw","strap","wants",4,"","","strap-wants",25,77,4,7,0], // allWords 5: paras|parts|stars|traps|warts
  ["beta-doom","beta","doom","boat","demo",2,"","","boat-demo",8,75,4,9,0], // allWords 9: abet|beat|boom|date|dome|mode|mood|toad|tomb
  ["bin-won","bin","won","nib","now",2,"","","nib-now",5,66,6,10,0], // allWords 2: own|win
  ["rites-shack","rites","shack","ashes","trick",3,"","","ashes-trick",12,81,3,7,0], // allWords 16: arise|crash|hacks|hares|hears|kites|raise|shake|share|shear|sites|stick|ticks|tiers|tires|tries
  ["crank-stood","crank","stood","crook","stand",2,"","","crook-stand",2,87,2,5,0], // allWords 10: croak|doors|knots|odors|ranks|roads|snark|stank|tanks|toads
  ["aunt-item","aunt","item","team","unit",2,"","","team-unit",7,87,2,5,0], // allWords 10: emit|mate|meat|meta|mint|tame|tate|time|tint|tuna
  ["polka-space","space","polka","close","kappa",5,"","","close-kappa",26], // allWords 9: capes|claps|clasp|coals|paces|peaks|scalp|scape|speak
  ["ease-toys","ease","toys","easy","toes",3,"","","easy-toes",9,87,2,5,0], // allWords 7: east|eats|seas|seat|stay|teas|toss
  ["loop-tips","loop","tips","pool","spit",3,"","","pool-spit",19,40,8,18,10], // allWords 13: lips|oils|pits|plop|polo|post|pots|slip|soil|solo|spot|stop|tops
  ["faith-mount","faith","mount","faint","mouth",2,"","","faint-mouth",1], // allWords 2: futon|human
  ["not-yet","not","yet","ten","toy",3,"","","ten-toy",9,86,2,6,0], // allWords 2: net|ton
  ["later-these","later","these","ether","slate",3,"","","ether-slate",11,82,3,6,0], // allWords 29: alert|alter|aster|earls|easel|eater|heels|laser|lease|least|rates|reals|sheet|stale|stare|start|state|steal|tales|tarts|taste|tater|tears|tease|teeth|tetra|there|three|treat
  ["chive-foist","chive","foist","shift","voice",3,"","","shift-voice",21,81,3,7,0], // allWords 1: stoic
  ["bare-bibs","bare","bibs","babe","ribs",3,"","","babe-ribs",9,82,3,6,0], // allWords 4: bars|bear|bras|brie
  ["lamp-lilt","lamp","lilt","palm","till",2,"","","palm-till",18,40,10,20,0], // allWords 4: limp|malt|pill|tall
  ["spear-swath","spear","swath","paths","wears",2,"","","paths-wears",7,87,2,5,0], // allWords 19: awash|heaps|paras|parse|parts|pasha|pears|phase|shape|spare|strap|straw|strep|swear|traps|wares|warts|whats|wrest
  ["deal-plug","deal","plug","dull","page",3,"","","dull-page",12,87,2,5,0], // allWords 9: aged|dale|duel|glad|lead|leap|pale|plea|pull
  ["coins-sings","coins","sings","signs","sonic",3,"","","signs-sonic",25,86,2,6,0], // allWords 3: icons|scion|songs
  ["dork-rope","dork","rope","pork","rode",3,"","","pork-rode",8,73,4,11,0], // allWords 4: dope|pore|redo|repo
  ["pay-pet","pay","pet","tap","yep",3,"","","tap-yep",10,86,2,6,0], // allWords 2: pat|yap
  ["burnt-super","burnt","super","brute","spurn",3,"","","brute-spurn",19,81,3,7,0], // allWords 9: brunt|punts|purse|rebut|runts|setup|tuber|turns|upset
  ["diet-ones","diet","ones","edit","eons",1,"","","edit-eons",3,81,3,7,0], // allWords 11: dent|dies|ends|nose|note|send|side|tend|tide|tied|tone
  ["gaps-swim","gaps","swim","maps","swig",4,"","","maps-swig",23,92,1,4,0], // allWords 6: aims|amps|gasp|pass|saps|wigs
  ["boost-pores","boost","pores","boots","prose",2,"","","boots-prose",15,32,13,16,0], // allWords 11: bores|ports|poser|prost|robes|ropes|sober|spore|sport|stoop|trope
  ["bury-tone","bury","tone","note","ruby",2,"","","note-ruby",4,0,29,36,24], // allWords 10: bone|bony|bore|robe|tore|tory|troy|true|tune|yurt
  ["about-gross","about","gross","bogus","roast",3,"","","bogus-roast",11,92,1,4,0], // allWords 4: boast|boats|grout|soars
  ["adds-doze","adds","doze","daze","odds",3,"","","daze-odds",9,0,22,29,24], // allWords 4: dads|dead|dosa|soda
  ["pair-some","pair","some","poem","sari",2,"","","poem-sari",9,87,2,5,0], // allWords 10: airs|arms|mars|mesa|prom|ramp|rams|romp|same|seam
  ["drugs-spiky","drugs","spiky","pudgy","risks",3,"","","pudgy-risks",13,87,2,5,0], // allWords 4: gipsy|grids|risky|skips
  ["named-react","named","react","armed","enact",2,"","","armed-enact",5,92,1,4,0], // allWords 20: amend|cadre|carat|cared|carte|cater|cedar|crate|dance|dream|eared|eaten|eater|madre|meant|meter|metre|raced|tamer|trace
  ["cops-silk","cops","silk","loss","pick",4,"","","loss-pick",13,92,1,4,0], // allWords 4: lick|lock|pics|skip
  ["daddy-wraps","daddy","wraps","draws","paddy",3,"","","draws-paddy",22,71,5,9,0], // allWords 1: wards
  ["press-purse","press","purse","spree","spurs",2,"","","spree-spurs",8,72,5,8,0], // allWords 3: peers|speer|super
  ["abide-mason","abide","mason","amino","based",3,"","","amino-based",19,92,1,4,0], // allWords 7: aimed|bands|beads|biome|dames|media|moans
  ["moo-two","moo","two","mow","too",2,"","","cannot be reversed",7,92,1,4,0], // allWords 0
  ["banks-dolly","banks","dolly","bonks","dally",1,"","","bonks-dally",1,14,13,24,10], // allWords 6: balls|bally|dolls|knobs|lands|nobly
  ["cave-mine","cave","mine","name","vice",3,"","","name-vice",13,62,7,10,0], // allWords 6: acne|amen|cane|mane|mean|nice
  ["cites-porch","cites","porch","cores","pitch",2,"","","cores-pitch",2,92,1,4,0], // allWords 22: chirp|chore|corps|cries|crisp|crocs|crops|ethic|ochre|pesto|piers|poets|pores|poser|prose|ropes|score|scrip|spire|spite|spore|stipe
  ["dour-slap","dour","slap","plus","road",3,"","","plus-road",22,92,1,4,0], // allWords 11: alps|laps|lars|opus|ours|pals|slur|soap|soar|soup|sour
  ["hated-risky","hated","risky","shaky","tried",3,"","","shaky-tried",8,87,2,5,0], // allWords 16: dares|death|dries|hades|heads|hides|rated|reads|rides|shade|sired|teary|tired|trade|tread|years
  ["book-dead","book","dead","bake","dodo",3,"kobe","dado","bake-dodo",12,77,4,7,0], // allWords 2: bead|beak
  ["dowel-games","dowel","games","model","wages",3,"","","model-wages",8,87,2,5,0], // allWords 9: dames|demos|domes|gleam|golem|mages|medal|modes|sawed
  ["event-reads","event","reads","seven","tread",2,"","","seven-tread",6,72,5,8,0], // allWords 14: dares|deter|earns|eased|eaten|enter|evens|nears|rated|reeds|saved|snare|sneer|trade
  ["are-bus","are","bus","era","sub",2,"","","era-sub",5,43,10,17,0], // allWords 1: ear
  ["malls-takes","malls","takes","small","stake",1,"","","small-stake",3,0,21,30,24], // allWords 13: least|makes|males|meals|skate|slate|stale|stalk|stall|steak|steal|tales|talks
  ["sorts-viper","sorts","viper","posts","river",3,"","","posts-river",8,92,1,4,0], // allWords 29: overs|pesos|piers|pores|ports|poser|poses|posse|prose|prost|prove|riser|rises|ropes|roses|rover|servo|sores|spies|spire|spits|spore|sport|spots|stirs|stops|strip|trips|verso
  ["holy-leap","holy","leap","poll","yeah",4,"","","poll-yeah",23,76,4,8,0], // allWords 6: heap|help|opal|pale|plea|yell
  ["grace-spare","grace","spare","grape","scare",3,"","","grape-scare",9,86,2,6,0], // allWords 13: acres|capes|cares|paces|pager|parse|pears|races|rager|rears|scape|space|spear
  ["coal-rare","coal","rare","acre","oral",2,"","","acre-oral",6,87,2,5,0], // allWords 7: aero|area|care|cola|core|race|rear
  ["merge-raven","merge","raven","ramen","verge",4,"","","ramen-verge",12,92,1,4,0], // allWords 8: gamer|grave|marge|maven|nerve|never|rager|reeve
  ["fell-grid","fell","grid","fled","girl",2,"","","fled-girl",6,71,5,9,0], // allWords 3: file|gird|life
  ["deep-link","deep","link","kind","peel",3,"","","kind-peel",23,92,1,4,0], // allWords 6: keel|kiln|leek|like|peed|pile
  ["boat-hull","boat","hull","blot","haul",2,"","","cannot be reversed",5,77,4,7,0], // allWords 6: bolt|bull|halo|holt|hula|oath
  ["eye-sat","eye","sat","ate","yes",2,"","","cannot be reversed",8,82,3,6,0], // allWords 5: eat|sea|sty|tea|yet
  ["races-topic","races","topic","acres","optic",1,"","","acres-optic",3], // allWords 28: cacti|caper|cares|caste|circa|cores|pacer|pairs|parse|paste|pears|pesto|poets|pores|poser|posit|prose|recap|ropes|scare|score|septa|spare|spate|spear|spore|stoic|tapes
  ["chaos-meter","chaos","meter","chase","metro",2,"","","chase-metro",5,76,4,8,0], // allWords 13: aches|cease|chest|erect|harem|meets|metre|moths|reach|roach|shame|tomes|torch
  ["lean-rain","lean","rain","nail","near",3,"alan","erin","nail-near",23,85,2,7,0], // allWords 5: earn|lane|lien|line|rein
  ["east-poet","east","poet","tape","toes",3,"","","tape-toes",19,82,3,6,0], // allWords 13: eats|past|pats|peat|post|pots|seat|spat|spot|stop|taps|teas|tops
  ["great-heats","great","heats","gates","heart",2,"","","gates-heart",8,92,1,4,0], // allWords 18: agate|earth|gears|grate|hares|haste|hater|hates|hears|rages|share|shear|sheet|stage|teeth|these|theta|trash
  ["empty-mills","empty","mills","imply","melts",3,"","","imply-melts",11,92,1,4,0], // allWords 12: islet|lisle|piety|piles|plies|smell|smelt|spiel|spite|stipe|temps|tiles
  ["kink-news","kink","news","knew","skin",2,"","","cannot be reversed",7,92,1,4,0], // allWords 4: sewn|sink|wink|wins
  ["salt-work","salt","work","sort","walk",2,"","","sort-walk",2,86,2,6,0], // allWords 9: arts|last|lost|lots|rats|slot|star|tsar|wart
  ["parts-spins","parts","spins","snips","strap",4,"","","snips-strap",25,52,8,16,0], // allWords 4: pains|spits|stars|traps
  ["pit-raw","pit","raw","tip","war",2,"","","tip-war",5,59,7,13,0], // allWords 5: art|pat|paw|rat|tap
  ["cents-teams","cents","teams","scent","steam",1,"","","scent-steam",3,0,25,40,24], // allWords 7: caste|mates|meats|state|stent|taste|tents
  ["bezel-saint","bezel","saint","blaze","stein",2,"","","blaze-stein",5], // allWords 9: aisle|inset|liens|lines|nails|satin|slain|snail|stain
  ["guns-ragu","guns","ragu","guru","nags",3,"","","guru-nags",15,75,4,9,0], // allWords 8: gnus|rags|rugs|runs|sang|snag|snug|sung
  ["amend-worry","amend","worry","marry","owned",4,"","","marry-owned",22,87,2,5,0], // allWords 11: adore|adorn|anode|armed|dream|drown|madre|named|radon|rayon|rowed
  ["clad-cram","clad","cram","calm","card",2,"","","calm-card",6,87,2,5,0], // allWords 1: clam
  ["lord-lube","lord","lube","bold","rule",3,"","","bold-rule",9,77,4,7,0], // allWords 5: blue|lobe|lore|lure|role
  ["bacon-tubes","bacon","tubes","baton","cubes",4,"","","baton-cubes",12,72,5,8,0], // allWords 17: ascot|babes|banco|bates|beast|beats|boast|boats|bouts|canto|caste|coast|coats|count|enact|scout|tacos
  ["lied-wise","lied","wise","lies","wide",2,"","","lies-wide",7,54,8,14,0], // allWords 5: deli|idle|isle|lids|slid
  ["dogs-life","dogs","life","file","gods",2,"","","file-gods",4,63,6,13,0], // allWords 2: digs|logs
  ["bug-new","bug","new","gun","web",3,"","","gun-web",9,77,4,7,0], // allWords 3: beg|gen|gnu
  ["breed-spoke","breed","spoke","broke","speed",2,"","","broke-speed",1,75,4,9,0], // allWords 10: bored|doers|dopes|dorks|keeps|peeks|pokes|posed|reeds|reeks
  ["seal-sets","seal","sets","lets","seas",3,"","","cannot be reversed",22,81,3,7,0], // allWords 2: lest|sale
  ["fits-pass","fits","pass","saps","sift",2,"","","cannot be reversed",18,56,7,16,0], // allWords 10: fast|fats|fist|past|pats|pits|spat|spit|taps|tips
  ["roman-table","roman","table","bleat","manor",2,"","","bleat-manor",14], // allWords 8: abate|baron|baton|manta|metal|morel|motel|realm
  ["fate-nest","fate","nest","safe","tent",3,"","","safe-tent",9,87,2,5,0], // allWords 16: ante|ants|fast|fats|feat|fees|feet|feta|fete|neat|nets|sane|seen|sent|teen|tens
  ["lemur-paste","lemur","paste","mural","steep",3,"","","mural-steep",18,87,2,5,0], // allWords 22: least|lures|metal|parts|pause|purse|rules|septa|slate|sleet|spate|stale|steal|steel|strap|strep|super|supra|tales|tapes|tramp|traps
  ["sees-yaks","sees","yaks","asks","eyes",2,"","","asks-eyes",6,82,3,6,0], // allWords 3: easy|keys|seas
  ["knots-scalp","knots","scalp","plans","stock",5,"","","plans-stock",29,92,1,4,0], // allWords 16: casts|claps|clasp|class|costs|lacks|locks|pacts|pants|plank|scots|slack|stack|stank|tacks|tanks
  ["bill-fist","bill","fist","bits","fill",2,"","","cannot be reversed",9,72,5,8,0], // allWords 5: fits|flit|libs|lift|sift
  ["baa-bro","baa","bro","bar","boa",2,"","","bar-boa",6,37,10,13,10], // allWords 2: bra|rob
  ["lets-loop","lets","loop","pelt","solo",3,"","","pelt-solo",22,81,3,7,0], // allWords 10: lest|lose|lost|lots|plot|pole|polo|pool|slot|sole
  ["frond-unity","frond","unity","nifty","round",2,"","","nifty-round",6,92,1,4,0], // allWords 3: donut|drift|forty
  ["genes-toast","genes","toast","goats","tense",2,"","","goats-tense",8,87,2,5,0], // allWords 23: asset|gases|gates|gents|nests|notes|onset|sages|seats|seton|songs|stage|state|stent|stoat|stone|taste|tease|teens|tenet|tents|tones|tongs
  ["filed-metal","filed","metal","filet","medal",4,"","","filet-medal",12,81,3,7,0], // allWords 11: admit|fated|fella|fetal|field|flail|fleet|mated|mille|tamed|timed
  ["drop-user","drop","user","pour","reds",3,"","","pour-reds",18], // allWords 11: opus|ours|pods|prod|pure|rods|ruse|soup|sour|sped|sure
  ["purge-roses","purge","roses","ropes","surge",4,"","","ropes-surge",12,87,2,5,0], // allWords 20: goers|grope|gross|ogres|pesos|pores|poser|poses|posse|prose|puree|purse|reuse|roger|rupee|sores|spore|super|urges|users
  ["pep-ray","pep","ray","per","yap",3,"","","cannot be reversed",9,82,3,6,0], // allWords 3: pay|rap|yep
  ["boss-memo","boss","memo","boom","mess",3,"","","cannot be reversed",9,92,1,4,0], // allWords 6: mobs|moms|moos|moss|sobs|some
  ["lasts-yelps","lasts","yelps","spell","stays",4,"","","spell-stays",29,92,1,4,0], // allWords 9: palsy|plays|salts|salty|slaps|slats|stall|style|tells
  ["blab-toll","blab","toll","blob","tall",3,"","","blob-tall",9,24,14,20,0], // allWords 5: alto|ball|blot|boat|bolt
  ["dame-male","dame","male","lame","made",2,"","","lame-made",4,21,14,23,0], // allWords 5: dale|deal|lead|mead|meal
  ["awash-elves","awash","elves","leash","waves",3,"","","leash-waves",8,92,1,4,0], // allWords 11: easel|hales|halve|heals|lease|sales|salsa|salve|seals|shale|slave
  ["aisle-corps","aisle","corps","rails","scope",3,"","","rails-scope",12,92,1,4,0], // allWords 17: close|crisp|crops|epics|lasso|liars|opera|pairs|price|relic|sails|scrip|sepia|slice|soaps|solar|spice
  ["elks-lung","elks","lung","glen","sulk",4,"","","glen-sulk",23,87,2,5,0], // allWords 1: lens
  ["bore-even","bore","even","bone","ever",3,"","","cannot be reversed",9,76,4,8,0], // allWords 3: born|robe|verb
  ["eon-why","eon","why","hey","own",2,"","","hey-own",7,87,2,5,0], // allWords 3: now|one|won
  ["kids-lack","kids","lack","kick","lads",2,"","","kick-lads",1], // allWords 8: cask|disk|lick|lids|sack|sick|skid|slid
  ["drive-month","drive","month","third","venom",5,"","","third-venom",24,92,1,4,0], // allWords 14: devon|diver|merit|mirth|mitre|movie|noted|remit|timer|tired|toned|trend|tried|video
  ["need-stay","need","stay","easy","tend",2,"","","easy-tend",8,87,2,5,0], // allWords 5: dean|dent|eyes|seed|tyne
  ["began-fixes","began","fixes","begin","faxes",4,"","","begin-faxes",12,52,8,16,0], // allWords 2: being|binge
  ["agent-salsa","agent","salsa","nasal","stage",3,"","","nasal-stage",18,92,1,4,0], // allWords 14: asset|atlas|gases|gates|gents|glass|lasts|natal|sages|salts|seats|slang|slant|slats
  ["shoe-tags","shoe","tags","ages","host",3,"","","ages-host",10,87,2,5,0], // allWords 6: gate|hose|oats|sage|shot|stag
  ["abet-less","abet","less","bats","else",3,"abes","lest","bats-else",20,82,3,6,0], // allWords 17: base|bass|beat|belt|beta|ease|east|eats|eels|lest|lets|seas|seat|stab|tabs|teas|tele
  ["alert-blade","alert","blade","altar","bleed",2,"","","altar-bleed",5], // allWords 5: alter|dealt|delta|later|rebel
  ["cedar-newer","cedar","newer","raced","renew",2,"","","raced-renew",14,61,7,11,0], // allWords 4: cadre|cared|creed|ender
  ["saw-yaw","saw","yaw","was","way",2,"","","was-way",5,58,6,12,6], // allWords 0
  ["draw-week","draw","week","drew","weak",1,"","","drew-weak",1,64,6,12,0], // allWords 6: dark|drek|wade|wake|ward|weed
  ["straw-tells","straw","tells","start","wells",5,"","","start-wells",33], // allWords 24: aster|lasts|least|rates|sales|salts|seals|sears|sells|slate|slats|stale|stare|stars|steal|swear|swell|tales|tarts|tears|wares|warts|water|wears
  ["slain-spine","slain","spine","lines","pains",2,"","","lines-pains",7,87,2,5,0], // allWords 10: aisle|lanes|leans|liens|nails|panes|pines|sepia|snail|snipe
  ["arts-echo","arts","echo","hers","taco",3,"","","hers-taco",10,87,2,5,0], // allWords 13: acts|cash|cast|cats|coat|hero|rash|rats|rest|sect|star|tore|tsar
  ["resin-trout","resin","trout","rinse","tutor",2,"","","rinse-tutor",14,82,3,6,0], // allWords 22: inset|intro|nitro|nurse|outer|reins|risen|rites|rouen|route|runes|runts|siren|stein|strut|sturt|tiers|tires|tries|trust|tunes|turns
  ["cold-dish","cold","dish","disc","hold",4,"","","disc-hold",23,87,2,5,0], // allWords 4: clod|docs|loch|odds
  ["clues-fears","clues","fears","cares","fuels",2,"","","cares-fuels",8,92,1,4,0], // allWords 14: acres|cease|cures|curls|curse|false|fares|fleas|laces|leafs|races|safer|scale|scare
  ["know-then","know","then","honk","newt",3,"","","honk-newt",11], // allWords 3: knew|town|went
  ["nag-old","old","nag","log","and",2,"","","and-log",7], // allWords 1: ago
  ["dock-gush","dock","gush","duck","gosh",1,"","","duck-gosh",1,51,8,17,0], // allWords 4: chug|dusk|hogs|hugs
  ["rich-town","rich","town","corn","with",4,"","","corn-with",13], // allWords 4: itch|twin|whit|worn
  ["depot-stern","depot","stern","opted","rents",3,"","","opted-rents",25,82,3,6,0], // allWords 21: deter|ender|ester|noted|notes|onset|opens|pesto|poets|reset|seton|sneer|steer|stone|strep|terse|toned|tones|totes|trees|trend
  ["shear-villa","shear","villa","shale","viral",4,"","","shale-viral",17,92,1,4,0], // allWords 19: aisle|alias|alive|arise|avail|hales|halls|halve|hares|heals|hears|leash|liars|liver|rails|raise|rival|shall|share
  ["swan-taxi","swan","taxi","axis","want",2,"","","axis-want",7], // allWords 1: wait
  ["fat-moo","fat","moo","oaf","tom",3,"","","oaf-tom",10], // allWords 2: mat|moa
  ["spurn-stuck","spurn","stuck","pucks","turns",2,"","","pucks-turns",7,41,9,13,10], // allWords 2: runts|tucks
  ["drops-hooks","drops","hooks","dorks","hoops",2,"","","cannot be reversed",5,71,5,9,0], // allWords 1: shook
  ["fame-pass","fame","pass","maps","safe",3,"","","maps-safe",9,82,3,6,0], // allWords 4: amps|apes|peas|saps
  ["lamb-pure","pure","lamb","bump","earl",4,"","","bump-earl",26], // allWords 13: balm|blur|burp|lame|lear|lure|male|meal|mule|pear|real|reap|rule
  ["goner-tunes","goner","tunes","genus","tenor",3,"","","genus-tenor",9], // allWords 7: notes|onset|seton|stone|toner|tones|tuner
  ["flow-tide","flow","tide","edit","wolf",3,"","","edit-wolf",19], // allWords 3: diet|fled|tied
  ["ahead-rates","ahead","rates","areas","hated",3,"","","areas-hated",8,92,1,4,0], // allWords 21: aster|death|eared|erase|hares|haste|hates|heard|hears|heats|heres|rated|saree|share|shear|sheer|stare|tears|trade|trash|tread
  ["back-fast","back","fast","bask","fact",1,"","","bask-fact",1,73,4,11,0], // allWords 4: bats|fats|stab|tabs
  ["kill-rage","kill","rage","girl","lake",4,"","","girl-lake",13], // allWords 7: earl|gear|kale|leak|lear|like|real
  ["cup-god","cup","god","doc","pug",3,"","","doc-pug",9,92,1,4,0], // allWords 5: cod|cop|cud|dog|dug
  ["food-runt","food","runt","fund","root",2,"","","fund-root",2,87,2,5,0], // allWords 11: door|dour|fond|font|foot|odor|tofu|torn|toro|tour|turn
  ["army-rope","army","rope","more","pray",3,"","","more-pray",9,82,3,6,0], // allWords 6: mare|mayo|pear|pore|reap|repo
  ["denim-tread","denim","tread","dried","meant",5,"","","dried-meant",32], // allWords 21: adder|amend|armed|dared|dined|dread|dream|edema|madre|merit|mined|mired|mitre|named|rated|remit|tamer|timer|tired|trade|tried
  ["lord-soda","lord","soda","odds","oral",2,"","","odds-oral",6], // allWords 4: dosa|load|rods|soar
  ["motto-wiser","motto","wiser","moist","wrote",3,"","","moist-wrote",8], // allWords 18: merit|metro|mitre|moose|mores|omits|remit|storm|swore|timer|tower|trims|weirs|wires|worse|worst|wrist|write
  ["land-once","land","once","clad","none",2,"","","clad-none",7], // allWords 5: cone|lace|lane|lean|neon
  ["erase-slips","erase","slips","lapse","rises",3,"","","lapse-rises",11,92,1,4,0], // allWords 20: easel|isles|leaps|lease|pales|parse|pears|piers|piles|pleas|plies|sales|saree|seals|sears|slaps|spare|spear|spiel|spire
  ["blabs-doors","blabs","doors","blobs","roads",3,"","","cannot be reversed",21,4,18,24,0], // allWords 4: boars|boobs|lords|odors
  ["chant-takes","chant","takes","cheat","tanks",2,"","","cheat-tanks",4], // allWords 13: aches|cakes|chase|haste|hates|heats|skate|snack|stake|stank|steak|teach|theta
  ["met-new","met","new","mew","net",1,"","","mew-net",0,86,2,6,0], // allWords 1: ten
  ["nets-yard","nets","yard","rays","tend",3,"","","rays-tend",8,82,3,6,0], // allWords 10: ants|darn|dent|dyer|nerd|nest|rand|sent|stay|tens
  ["flat-lady","flat","lady","ally","daft",4,"","","ally-daft",12], // allWords 1: tall
  ["march-north","march","north","charm","thorn",3,"","","charm-thorn",21], // allWords 1: ranch
  ["salty-votes","salty","votes","loves","tasty",3,"","","loves-tasty",8,82,3,6,0], // allWords 18: asset|lasts|loses|sales|salts|salve|seals|seats|slats|slave|slots|soles|solve|stats|stave|stove|volts|yeast
  ["bird-eyes","bird","eyes","eyed","ribs",3,"","","eyed-ribs",6,65,6,11,0], // allWords 6: bide|dire|dyer|ride|rise|sire
  ["cyan-deep","deep","cyan","cape","deny",3,"","","cape-deny",10], // allWords 6: acne|cane|dean|need|pace|peed
  ["scrap-stage","scrap","stage","cages","traps",2,"","","cages-traps",7,81,3,7,0], // allWords 14: acres|aster|cares|craps|gates|parts|pasta|races|rates|scare|stare|strap|tapas|tears
  ["roll-wait","roll","wait","roti","wall",3,"","","roti-wall",9,86,2,6,0], // allWords 6: lair|liar|rail|riot|tori|trio
  ["fares-sifts","fares","sifts","sears","stiff",4,"","","sears-stiff",29,92,1,4,0], // allWords 16: farts|fears|fires|first|fists|fries|rafts|rifts|rises|safer|safes|serif|staff|stars|stirs|tiffs
  ["tap-zag","tap","zag","tag","zap",1,"","","tag-zap",0], // allWords 1: pat
  ["guild-slept","guild","slept","glued","split",2,"","","glued-split",7,92,1,4,0], // allWords 11: duels|guilt|lilts|pelts|setup|spelt|spilt|still|tells|tills|upset
  ["saved-seeds","saved","seeds","deeds","saves",3,"daves","seeds","deeds-saves",12], // allWords 3: eased|eases|vases
  ["duke-plan","duke","plan","dunk","plea",2,"","","dunk-plea",5], // allWords 8: dale|deal|land|lead|leap|pale|puke|punk
  ["night-pests","night","pests","steps","thing",3,"","","steps-thing",25,76,4,8,0], // allWords 11: gents|hints|nests|shins|ships|spits|stent|sting|stint|tents|tints
  ["halls-hosts","halls","hosts","shall","shots",2,"","","shall-shots",19,4,17,28,0], // allWords 6: halts|shalt|slash|slosh|sloth|stash
  ["buys-kale","buys","kale","lube","yaks",4,"","","lube-yaks",13,92,1,4,0], // allWords 10: able|bale|bays|blue|busy|labs|lake|leak|slab|sulk
  ["file-sole","file","sole","life","lose",2,"","","life-lose",4,19,15,21,0], // allWords 2: isle|lies
  ["draws-liars","draws","liars","rails","wards",3,"","","rails-wards",18,77,4,7,0], // allWords 1: raids
  ["dint-soul","dint","soul","loud","tins",3,"","","loud-tins",23,64,6,12,0], // allWords 4: ludo|outs|suit|tons
  ["jet-put","jet","put","jut","pet",1,"","","jut-pet",0,86,2,6,0], // allWords 0
  ["been-fort","been","fort","born","feet",2,"","","born-feet",2,76,4,8,0], // allWords 4: bone|fern|fete|fret
  ["radio-taped","radio","taped","dared","patio",4,"","","dared-patio",11], // allWords 10: adder|adept|adore|dated|drape|dread|opera|padre|pared|rapid
  ["firms-pride","firms","pride","fired","prism",3,"","","fired-prism",8], // allWords 4: drips|fermi|fried|prime
  ["late-surf","late","surf","eats","furl",3,"","","eats-furl",23], // allWords 19: earl|ears|east|eras|fast|fats|flat|lear|lure|real|rule|ruse|seat|sera|sure|tale|teal|teas|user
  ["aced-nick","aced","nick","acid","neck",3,"","","acid-neck",9,66,6,10,0], // allWords 4: aide|cake|dine|idea
  ["ether-trade","ether","trade","rated","there",2,"","","rated-there",17,27,14,17,0], // allWords 9: eared|eater|tater|teeth|terra|tetra|three|tread|treat
  ["carts-rooms","carts","rooms","crams","roots",2,"","","crams-roots",5,92,1,4,0], // allWords 10: ascot|coast|coats|moors|roast|roost|scoot|scram|tacos|torso
  ["cash-cure","cash","cure","race","such",3,"","","race-such",13,79,3,9,0], // allWords 8: aces|acre|arch|care|case|char|cues|ecru
  ["craft-snowy","craft","snowy","fancy","worst",5,"","","fancy-worst",26,92,1,4,0], // allWords 11: croft|farts|fonts|forts|frost|rafts|straw|towns|wants|warts|yawns
  ["mad-sax","mad","sax","max","sad",1,"","","max-sad",0,86,2,6,0], // allWords 2: ads|dam
  ["gates-miner","gates","miner","names","tiger",4,"niger","tames","names-tiger",12,92,1,4,0], // allWords 25: anger|emits|grate|great|items|mates|means|meats|mensa|merit|mines|mites|mitre|ramen|range|reign|remit|singe|smite|stage|steam|tamer|teams|timer|times
  ["issue-ought","issue","ought","guise","shout",3,"","","guise-shout",18,87,2,5,0], // allWords 11: ghost|gusto|hoses|hosts|house|shoes|shots|sight|south|suits|tough
  ["lamp-lots","lamp","lots","plot","slam",2,"","","plot-slam",7,86,2,6,0], // allWords 6: last|lost|palm|plat|salt|slot
  ["bawl-slip","bawl","slip","bill","swap",3,"","","bill-swap",9,92,1,4,0], // allWords 8: awls|bail|blip|laws|lips|paws|sail|wasp
  ["rings-speak","rings","speak","kings","spear",4,"","","kings-spear",25], // allWords 15: arise|grins|parse|peaks|pears|prank|rains|raise|sarin|signs|sings|snaps|spank|spans|spare
  ["fatal-slink","fatal","slink","final","stalk",3,"","","final-stalk",8,72,5,8,0], // allWords 13: alias|atlas|flail|kilns|links|nails|slain|slant|snail|stall|stank|talks|tanks
  ["nova-size","nova","size","visa","zone",4,"","","visa-zone",13,87,2,5,0], // allWords 4: oven|vain|vein|vine
  ["dawn-tied","dawn","tied","dead","twin",3,"","","dead-twin",9,86,2,6,0], // allWords 12: ante|date|dean|died|diet|dine|edit|neat|tide|wand|want|wind
  ["shark-shown","shark","shown","hawks","horns",2,"","","hawks-horns",7], // allWords 1: shawn
  ["add-won","add","won","dad","own",1,"","","dad-own",3,46,8,12,10], // allWords 2: and|now
  ["mills-stork","mills","stork","kills","storm",4,"","","kills-storm",25], // allWords 8: kilos|milos|sills|silos|skill|slots|soils|sorts
  ["dull-puts","dull","puts","dust","pull",2,"","","dust-pull",9,55,8,13,0], // allWords 2: plus|stud
  ["nifty-tasks","nifty","tasks","fatty","sinks",4,"","","fatty-sinks",16,86,2,6,0], // allWords 6: nasty|skins|skits|stats|tasty|yanks
  ["sent-vary","sent","vary","navy","rest",3,"","","navy-rest",9,87,2,5,0], // allWords 12: ants|arts|envy|nest|nets|rats|rays|star|tens|tsar|vent|very
  ["does-mood","does","mood","dodo","some",3,"","","dodo-some",22,92,1,4,0], // allWords 6: demo|dome|doom|dose|mode|moos
  ["menus-toned","menus","toned","mound","teens",3,"","","mound-teens",11,87,2,5,0], // allWords 14: demon|donut|monde|noted|notes|omens|onset|seton|snout|stone|tense|tones|tuned|tunes
  ["torch-viper","torch","viper","pitch","rover",4,"","","pitch-rover",15], // allWords 9: hover|other|prove|retro|river|their|trier|tripe|trope
  ["feeds-tooth","feeds","tooth","foods","teeth",2,"","","foods-teeth",2,86,2,6,0], // allWords 5: dotes|steed|stood|toots|totes
  ["day-sue","day","sue","due","say",1,"","","due-say",0,76,4,8,0], // allWords 2: sea|use
  ["genes-rival","genes","rival","gives","renal",2,"agnes","ervil","gives-renal",2,92,1,4,0], // allWords 32: align|angel|angle|earns|gains|gavel|glean|learn|lever|liang|liner|liver|nears|rains|ravel|raves|reins|resin|revel|rinse|risen|sarin|saver|serve|sever|singe|siren|snare|sneer|veers|verse|viral
  ["drive-slide","drive","slide","lived","rides",2,"","","lived-rides",7,87,2,5,0], // allWords 8: devil|diver|dried|dries|evils|lives|sired|veils
  ["each-film","each","film","half","mice",4,"","","half-mice",26,87,2,5,0], // allWords 10: ache|came|hale|heal|lame|lime|mace|male|meal|mile
  ["fists-tiles","fists","tiles","lifts","sites",3,"","","lifts-sites",8,92,1,4,0], // allWords 7: files|flies|flits|islet|sifts|stilt|tilts
  ["bro-law","bro","law","awl","rob",1,"","","awl-rob",4], // allWords 1: boa
  ["heats-waves","heats","waves","shave","sweat",2,"","","shave-sweat",5], // allWords 4: haste|hates|haves|waste
  ["gases-might","gases","might","games","sight",4,"","","games-sight",12], // allWords 21: emits|gates|items|mages|masse|mates|maths|meats|mites|sages|seams|semis|shams|sighs|smash|smite|smith|stage|steam|teams|times
  ["case-mask","case","mask","sack","same",3,"","","sack-same",8,80,3,8,0], // allWords 4: aces|cask|mesa|seam
  ["goof-norm","goof","norm","frog","moon",4,"","","frog-moon",23], // allWords 1: mono
  ["bench-pasta","bench","pasta","baths","pecan",3,"","","baths-pecan",12], // allWords 14: bates|beast|beats|capes|chaps|paces|paste|paths|scape|septa|space|spate|tapas|tapes
  ["gang-used","gang","used","aged","sung",3,"","","aged-sung",9], // allWords 8: dang|dues|eggs|gage|gnus|guns|snug|sued
  ["clean-pills","clean","pills","cells","plain",3,"","","cells-plain",9], // allWords 20: calls|cline|laces|lance|lapis|lapse|leaps|pales|panel|penal|piles|plane|pleas|plies|scale|sepia|slice|spell|spiel|spill
  ["knew-spin","knew","spin","news","pink",2,"","","news-pink",7,92,1,4,0], // allWords 6: pens|pins|sewn|snip|wink|wins
  ["early-roman","early","roman","array","lemon",4,"","","array-lemon",24,92,1,4,0], // allWords 13: arena|enrol|layer|learn|leary|loner|lorry|manor|mayor|melon|moray|relay|renal
  ["bed-kit","bed","kit","bet","kid",1,"","","bet-kid",0,75,4,9,0], // allWords 2: bid|bit
  ["reds-talk","reds","talk","dark","lets",4,"","","dark-lets",13], // allWords 6: drek|lark|lars|last|lest|salt
  ["bits-lied","bits","lied","bide","list",2,"","","bide-list",9], // allWords 5: deli|idle|isle|lies|slit
  ["malls-reset","malls","reset","small","trees",2,"","","cannot be reversed",19,0,21,26,24], // allWords 30: alert|alter|aster|earls|ester|laser|later|males|masse|mates|meals|meats|meets|melts|metal|rates|reals|reels|seams|sears|seems|slams|smell|smelt|stare|steam|steer|teams|tears|terse
  ["sport-tease","sport","tease","eater","posts",3,"","","eater-posts",21,82,3,6,0], // allWords 46: asset|aster|eases|erase|otter|parse|parts|paste|pasts|pears|pesos|pesto|poets|pores|ports|poser|poses|posse|prose|prost|rates|ropes|saree|seats|septa|spare|spate|spats|spear|spore|spots|stare|state|stops|store|strap|taper|tapes|taste|tater|tears|tetra|totes|traps|treat|trope
  ["pile-teem","pile","teem","peel","time",2,"","","cannot be reversed",8,80,3,8,0], // allWords 8: emit|item|limp|lite|meet|melt|tele|tile
  ["arose-metro","arose","metro","romeo","stare",3,"","","romeo-stare",18,92,1,4,0], // allWords 17: aster|eater|meets|meter|metre|moors|moose|mores|rates|roast|rooms|storm|tears|tease|terms|terra|tomes
  ["labs-pool","labs","pool","ball","oops",3,"","","ball-oops",8], // allWords 8: also|bops|loop|opal|polo|slab|soap|solo
  ["live-rail","live","rail","evil","liar",3,"","","evil-liar",19], // allWords 6: lair|rave|vale|veil|vera|vile
  ["cress-shore","cress","shore","cross","sheer",2,"","","cannot be reversed",6,65,6,11,0], // allWords 16: ceres|cheer|chess|chore|chose|cores|crore|heres|heros|horse|hoses|ochre|roses|score|shoes|sores
  ["lay-mow","lay","mow","low","may",1,"","","low-may",0,82,3,6,0], // allWords 3: awl|law|owl
  ["money-verge","money","verge","enemy","grove",4,"","","enemy-grove",22], // allWords 6: emery|envoy|every|gnome|merge|reeve
  ["hired-loses","hired","loses","hides","loser",3,"","","cannot be reversed",3,81,3,7,0], // allWords 15: heirs|heros|hires|horde|horse|hoses|isles|older|riled|roles|shire|shoes|shore|slide|soles
  ["even-that","even","that","hate","vent",2,"","","hate-vent",7,87,2,5,0], // allWords 3: heat|than|then
  ["sauce-trace","sauce","trace","cause","crate",2,"","","cause-crate",18], // allWords 12: acres|acute|cares|carte|cater|cures|curse|cuter|races|react|scare|truce
  ["gaff-mini","gaff","mini","gain","miff",3,"","","gain-miff",9,92,1,4,0], // allWords 4: amin|fang|main|mina
  ["price-slots","price","slots","close","trips",4,"","","close-trips",26], // allWords 31: clips|cores|corps|cries|crisp|crops|cross|islet|lists|plots|ports|prost|rites|score|scrip|slice|slits|sorts|spilt|split|sport|stirs|stole|store|strip|tiers|tiles|tires|tries|tripe|trope
  ["acre-asks","acre","asks","cars","sake",2,"","","cars-sake",9,86,2,6,0], // allWords 10: arcs|cake|care|cask|ears|eras|race|sack|scar|sera
  ["fetal-salts","fetal","salts","flats","steal",2,"","","flats-steal",7,92,1,4,0], // allWords 24: asset|atlas|false|fatal|fates|feast|feats|fella|fleas|lasts|leafs|least|sales|salsa|seals|seats|slate|slats|stale|stall|stats|tales|tells|tests
  ["cave-pigs","cave","pigs","gaps","vice",3,"","","gaps-vice",15,62,7,10,0], // allWords 4: cage|gasp|page|pave
  ["jab-lob","jab","lob","job","lab",1,"","","job-lab",0,79,3,9,0], // allWords 0
  ["daddy-tapes","daddy","tapes","dates","paddy",3,"","","cannot be reversed",8,72,5,8,0], // allWords 7: paste|payed|septa|spade|spate|stade|stead
  ["slope-wheel","slope","wheel","sleep","whole",2,"","","sleep-whole",6], // allWords 11: heels|helps|holes|hopes|lopes|peels|poles|polls|sheep|spell|whelp
  ["outs-ward","outs","ward","dour","swat",3,"","","dour-swat",9], // allWords 8: draw|oats|ours|road|soar|sour|toad|wars
  ["come-rock","come","rock","core","mock",3,"","","core-mock",8,85,2,7,0], // allWords 2: cork|more
  ["anger-blown","anger","blown","angel","brown",4,"","","angel-brown",26], // allWords 13: alone|angle|boner|bonne|borne|glare|glean|lager|large|noble|range|regal|rowan
  ["name-tony","name","tony","many","note",3,"nate","mony","many-note",8], // allWords 15: amen|ante|mane|mate|mean|meat|meta|neat|neon|none|omen|tame|team|tome|tone
  ["aside-upset","aside","upset","ideas","setup",2,"","","ideas-setup",14,76,4,8,0], // allWords 12: aides|asset|eases|paste|pease|seats|septa|spade|spate|studs|suite|tapes
  ["gods-pier","gods","pier","gird","pose",3,"","","gird-pose",9], // allWords 18: digs|dips|dogs|drip|drop|egos|ergo|goes|gore|grid|ogre|pies|pods|pore|prod|repo|ripe|rope
  ["pants-tends","pants","tends","spent","stand",2,"","","spent-stand",7,81,3,7,0], // allWords 4: dents|spend|stent|tents
  ["bat-hit","bat","hit","bit","hat",1,"","","bit-hat",0,80,3,8,0], // allWords 1: tab
  ["beads-first","beads","first","birds","feast",2,"","","birds-feast",2,87,2,5,0], // allWords 17: baits|based|bases|basis|bates|beast|beats|brits|drift|fades|fated|fates|feats|frets|rifts|safes|serfs
  ["donor-omega","donor","omega","among","rodeo",3,"","","among-rodeo",22,92,1,4,0], // allWords 5: mango|moron|nomad|romeo|rondo
  ["silk-very","silk","very","levy","risk",3,"","","levy-risk",9,80,3,8,0], // allWords 2: elks|kris
  ["shape-sworn","shape","sworn","hopes","warns",2,"","","hopes-warns",7], // allWords 17: hares|heaps|hears|heros|horns|horse|pawns|phase|share|shear|shore|spawn|swear|swore|wares|wears|worse
  ["knee-step","knee","step","kept","seen",2,"","","kept-seen",9,92,1,4,0], // allWords 5: keen|pens|pest|pets|tees
  ["fits-goat","fits","goat","sift","toga",2,"","","sift-toga",18,51,8,17,0], // allWords 6: fiat|fist|gist|sago|sofa|soft
  ["kappa-refer","kappa","refer","freak","paper",5,"","","freak-paper",29], // allWords 2: faker|freer
  ["cheek-lacks","cheek","lacks","check","lakes",2,"","","check-lakes",5,72,5,8,0], // allWords 9: cakes|cease|easel|heels|laces|leaks|lease|scale|slack
  ["ragu-rude","ragu","rude","dare","guru",3,"","","dare-guru",13,77,4,7,0], // allWords 5: dear|gear|rage|read|urge
  ["damn-wade","damn","wade","dawn","made",3,"","","dawn-made",8,92,1,4,0], // allWords 4: dame|dead|mead|wand
  ["rebel-taste","rebel","taste","reset","table",3,"","","reset-table",11,92,1,4,0], // allWords 26: aster|beret|betta|bleat|earls|erase|ester|laser|least|rates|reals|reels|saree|slate|sleet|stale|stare|state|steal|steel|steer|tales|tears|tease|terse|trees
  ["crane-surge","crane","surge","grace","nurse",3,"","","grace-nurse",22,87,2,5,0], // allWords 9: earns|gears|nears|rages|rance|runes|snare|urges|usage
  ["acid-mask","acid","mask","amid","cask",3,"","","amid-cask",9,82,3,6,0], // allWords 4: dams|maid|maki|sack
  ["blot-goof","blot","goof","boot","golf",2,"","","cannot be reversed",6,69,5,11,0], // allWords 1: bolt
  ["links-outer","links","outer","route","slink",1,"","","route-slink",3,0,29,51,24], // allWords 8: islet|kilns|liens|liner|lines|noise|rouen|tiles
  ["part-spit","part","spit","tips","trap",3,"","","tips-trap",19,51,8,17,0], // allWords 7: arts|pita|pits|rats|star|tarp|tsar
  ["slash-touch","slash","touch","clash","south",3,"","","cannot be reversed",22,87,2,5,0], // allWords 7: chaos|halts|latch|oaths|shalt|shout|slush
  ["ban-yap","ban","yap","nab","pay",2,"","","nab-pay",5,71,5,9,0], // allWords 1: any
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
  ["demo-soon","demo","soon","mood","ones",3,"","","mood-ones",19,92,1,4,0], // allWords 10: dome|done|doom|eons|mend|mode|moos|node|nose|some
  ["blade-poets","blade","poets","bleat","posed",2,"","","bleat-posed",7,81,3,7,0], // allWords 20: abode|adobe|belts|blast|bleed|boast|boats|dopes|leapt|pedal|pelts|pesto|petal|plate|plead|pleat|slept|spelt|splat|table
  ["enter-owned","enter","owned","newer","toned",3,"","","newer-toned",11,92,1,4,0], // allWords 10: donne|noted|owner|renew|tenor|toner|towed|tower|tweed|wrote
  ["pair-tons","pair","tons","riot","snap",5,"","","riot-snap",26,92,1,4,0], // allWords 9: ants|pans|porn|rant|roti|span|tori|torn|trio
  ["acted-pores","acted","pores","cares","opted",3,"","","cares-opted",8,82,3,6,0], // allWords 20: acres|adore|arose|cadet|cadre|cared|caste|cedar|depot|pedro|pesto|poets|poser|prose|raced|races|roped|ropes|scare|spore
  ["until-upper","until","upper","pupil","tuner",3,"","","pupil-tuner",11,92,1,4,0], // allWords 4: erupt|lupin|prune|tulip
  ["tap-ten","tap","ten","net","pat",2,"","","net-pat",5], // allWords 3: ant|pet|tan
  ["hurt-oath","hurt","oath","hour","that",3,"","","hour-that",10,92,1,4,0], // allWords 4: hart|hath|tour|tout
  ["salsa-title","salsa","title","least","tails",5,"","","least-tails",28], // allWords 18: asset|atlas|isles|islet|latte|lisle|sails|sales|seals|seats|sites|slate|stale|state|steal|tales|taste|tiles
  ["brake-risen","brake","risen","break","rinse",1,"","","break-rinse",3,26,14,18,0], // allWords 8: baker|beers|bikes|brees|reins|resin|siren|skier
  ["cube-dish","cube","dish","bide","such",4,"","","bide-such",13,77,4,7,0], // allWords 6: cues|dies|dues|side|sued|used
  ["bill-peel","bill","peel","bell","pile",2,"","","cannot be reversed",8,66,6,10,0], // allWords 2: bile|pill
  ["tides-turns","tides","turns","diets","runts",2,"","","diets-runts",5], // allWords 7: duets|edits|rites|sited|tiers|tires|tries
  ["theme-wider","theme","wider","timed","where",3,"","","cannot be reversed",12,73,4,11,0], // allWords 11: ether|merit|mitre|remit|there|three|timer|tired|tried|weird|wired
  ["land-role","land","role","doll","earn",4,"","","doll-earn",22,87,2,5,0], // allWords 12: darn|earl|lane|lean|lear|lone|lord|lore|near|noel|rand|real
  ["dupe-tiny","dupe","tiny","nude","pity",3,"","","nude-pity",9,77,4,7,0], // allWords 3: dine|dune|tune
  ["not-top","not","top","pot","ton",2,"","","pot-ton",5,70,5,10,0], // allWords 1: opt
  ["coast-hence","coast","hence","cheat","scone",3,"","","cheat-scone",11,92,1,4,0], // allWords 17: ascot|caste|cease|cents|coats|cones|haste|hates|heats|notch|oaths|scene|scent|sheen|shone|tacos|teach
  ["fast-pick","fast","pick","fist","pack",1,"","","fist-pack",1,77,4,7,0], // allWords 13: fact|fats|fits|pact|past|pats|pits|sift|skip|spat|spit|taps|tips
  ["skin-tags","skin","tags","nags","skit",4,"","","nags-skit",23], // allWords 10: anti|kiss|kits|knit|sang|sink|skis|snag|stag|tang
  ["range-romps","range","romps","grams","prone",3,"","","grams-prone",11,87,2,5,0], // allWords 6: anger|gamer|goner|marge|proms|ramps
  ["kiwi-site","kiwi","site","tiki","wise",3,"","","tiki-wise",9,82,3,6,0], // allWords 2: kite|ties
  ["calm-seed","calm","seed","clad","seem",2,"","","cannot be reversed",6,86,2,6,0], // allWords 10: aced|came|clam|lads|mace|mesa|same|seam|slam|sled
  ["cross-singe","cross","singe","gross","since",4,"","","gross-since",26,79,3,9,0], // allWords 8: cores|goers|ogres|roses|score|signs|sings|sores
  ["haven-lemur","haven","lemur","human","lever",4,"","","human-lever",17,92,1,4,0], // allWords 8: harem|lumen|merle|mural|navel|ravel|realm|revel
  ["dud-eel","dud","eel","due","led",3,"","","due-led",9,92,1,4,0], // allWords 1: dee
  ["font-tear","font","tear","feta","torn",3,"","","feta-torn",12,82,3,6,0], // allWords 10: fare|fate|fear|feat|fern|rate|rent|tate|tent|tern
  ["cents-wills","cents","wills","scent","swill",1,"","","scent-swill",3,0,25,38,24], // allWords 5: cells|celts|swell|twins|wells
  ["mess-twin","mess","twin","nest","swim",4,"","","nest-swim",23,86,2,6,0], // allWords 9: mine|nets|semi|sent|sets|site|tens|ties|wits
  ["boom-stop","boom","stop","oops","tomb",2,"","","oops-tomb",8,87,2,5,0], // allWords 6: moos|most|post|pots|spot|tops
  ["fires-noble","fires","noble","bones","rifle",4,"","","bones-rifle",11], // allWords 13: enrol|flier|fries|liner|loner|reins|resin|rinse|risen|senor|serif|siren|snore
  ["pass-ruby","pass","ruby","bury","saps",2,"","","bury-saps",4], // allWords 8: bars|bras|bray|pays|pubs|rays|rubs|yaps
  ["gosh-pipe","gosh","pipe","pope","sigh",3,"","","pope-sigh",15,66,6,10,0], // allWords 10: egos|goes|hips|hogs|hops|pies|pose|posh|ship|shop
  ["hoped-rites","hoped","rites","pride","those",4,"","","pride-those",23,92,1,4,0], // allWords 18: ethos|heist|hopes|pedro|piers|pores|poser|prose|roped|ropes|spire|spore|store|tiers|tired|tires|tried|tries
  ["are-pep","are","pep","ape","per",2,"","","cannot be reversed",9,81,3,7,0], // allWords 4: ear|era|pee|rap
  ["bolt-fund","bolt","fund","bunt","fold",2,"","","bunt-fold",2,92,1,4,0], // allWords 6: blot|bold|bond|fond|font|loft
  ["oils-riot","oils","riot","soil","trio",1,"","","soil-trio",3,36,11,20,0], // allWords 2: roti|tori
  ["blast-swiss","blast","swiss","bliss","swats",3,"","","cannot be reversed",7,81,3,7,0], // allWords 7: lasts|lists|salts|slabs|slats|slits|swabs
  ["king-sets","king","sets","gets","sink",3,"","","cannot be reversed",23,92,1,4,0], // allWords 9: gist|kits|ness|sign|sing|sins|sits|skin|skit
  ["blank-great","blank","great","bleak","grant",2,"","","bleak-grant",2,70,5,10,0], // allWords 9: baker|bleat|brake|brant|break|brent|grate|rabat|table
  ["logs-odds","logs","odds","dogs","olds",2,"","","dogs-olds",6], // allWords 2: gods|sold
  ["cores-gawky","cores","gawky","rocky","wages",4,"","","rocky-wages",11,92,1,4,0], // allWords 13: acres|cares|corks|gears|goers|ogres|races|racks|rages|rocks|scare|score|wacky
  ["modem-shale","modem","shale","model","shame",3,"","","model-shame",8], // allWords 7: demos|domes|hales|heals|leash|modes|molds
  ["comic-sulks","comic","sulks","locks","music",4,"","","locks-music",16,92,1,4,0], // allWords 6: clock|coils|colic|mocks|silos|soils
  ["and-dog","and","dog","nag","odd",2,"","","nag-odd",7,86,2,6,0], // allWords 2: ago|god
  ["case-wrap","case","wrap","acre","swap",3,"","","acre-swap",12,92,1,4,0], // allWords 10: aces|caps|care|carp|paws|race|ware|warp|wasp|wear
  ["arms-earl","arms","earl","mars","real",1,"","","mars-real",3,76,4,8,0], // allWords 13: alma|ears|eras|lama|lame|lear|male|meal|mesa|rams|same|seam|sera
  ["agree-heels","agree","heels","eagle","sheer",4,"","","eagle-sheer",26,87,2,5,0], // allWords 16: eager|earls|easel|erase|gales|gears|glare|heres|lager|large|laser|lease|rages|reals|regal|saree
  ["fuel-wild","fuel","wild","full","wide",2,"","","full-wide",6,61,7,11,0], // allWords 5: feud|file|fill|life|will
  ["fists-viral","fists","viral","rival","sifts",2,"","","rival-sifts",3,56,7,16,0], // allWords 12: fails|fairs|first|flair|flirt|flits|frail|lifts|rifts|silva|vials|visas
  ["pleas-tanks","pleas","tanks","plans","takes",2,"","","plans-takes",5,60,7,12,0], // allWords 16: lapse|leaps|least|pales|peaks|skate|slant|slate|spank|speak|stake|stale|stank|steak|steal|tales
  ["fact-node","fact","node","cone","daft",3,"","","cone-daft",9,82,3,6,0], // allWords 9: acne|cafe|cane|deaf|dean|done|face|fade|once
  ["exact-snail","exact","snail","lance","taxis",5,"","","lance-taxis",34,92,1,4,0], // allWords 10: alien|clans|clean|enact|nails|saint|satin|scant|slain|stain
  ["bob-pin","bob","pin","bop","nib",3,"","","cannot be reversed",9,86,2,6,0], // allWords 2: bib|bin
  ["files-smear","files","smear","flair","seems",3,"","","flair-seems",9], // allWords 16: arise|fails|flier|flies|frail|frame|isles|liars|mares|masse|rails|raise|rifle|sails|seams|slams
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
  ["kid-now","kid","now","din","wok",3,"","","din-wok",9], // allWords 4: don|own|win|won
  ["crude-think","crude","think","chide","trunk",2,"","","chide-trunk",2], // allWords 14: chink|chunk|cider|cried|cured|inert|inter|nicer|niche|thine|thunk|tired|tried|tuner
  ["kills-traps","kills","traps","skill","strap",1,"","","skill-strap",3,0,30,46,24], // allWords 9: lilts|parks|parts|spark|spilt|split|still|tails|tills
  ["fade-sick","fade","sick","cafe","disk",3,"","","cafe-disk",9,82,3,6,0], // allWords 10: aces|case|cask|deaf|dies|face|kids|sack|side|skid
  ["meet-spot","meet","spot","teem","tops",3,"","","teem-tops",19,50,8,18,0], // allWords 10: pest|pets|post|pots|step|stop|tees|temp|toes|tome
  ["fines-shell","fines","shell","lines","shelf",4,"","","lines-shelf",25,87,2,5,0], // allWords 8: files|flesh|flies|heels|hells|isles|liens|lisle
  ["farm-milk","farm","milk","film","mark",2,"","","film-mark",2,81,3,7,0], // allWords 1: firm
  ["owed-runt","owed","runt","down","true",2,"","","down-true",8,87,2,5,0], // allWords 7: drew|rude|town|turn|udon|undo|unto
  ["begin-trout","begin","trout","binge","tutor",2,"","","binge-tutor",14,80,3,8,0], // allWords 10: begun|being|bring|grunt|intro|nitro|orbit|robin|tinge|turbo
  ["eyed-labs","eyed","labs","bald","eyes",3,"abes","yeld","cannot be reversed",6,67,6,9,0], // allWords 9: base|bead|dale|deal|ease|lead|sale|seal|slab
  ["caw-yes","caw","yes","sec","way",3,"","","sec-way",9,92,1,4,0], // allWords 2: say|yaw
  ["horns-steer","horns","steer","horse","stern",2,"","","horse-stern",5,71,5,9,0], // allWords 21: ester|ether|heron|heros|nests|noses|rents|reset|rests|roses|senor|sheet|shone|shore|snore|sores|terse|there|these|three|trees
  ["leap-pins","leap","pins","plea","spin",1,"","","plea-spin",3,51,8,17,0], // allWords 9: apes|lens|pale|peas|pens|sail|sale|seal|snip
  ["align-every","align","every","given","relay",5,"","","given-relay",26,92,1,4,0], // allWords 16: angel|angle|early|elegy|glean|layer|learn|leary|liang|liner|nerve|never|raven|renal|riven|vegan
  ["held-lone","held","lone","hole","lend",2,"","","hole-lend",3,87,2,5,0], // allWords 5: doll|heel|hold|hone|noel
  ["tide-till","tide","till","diet","lilt",2,"","","cannot be reversed",6,86,2,6,0], // allWords 4: edit|lite|tied|tile
  ["artsy-corps","artsy","corps","parry","scots",3,"","","parry-scots",11,92,1,4,0], // allWords 12: costs|crops|cross|crypt|parts|party|soars|stars|strap|stray|traps|trays
  ["draw-liar","draw","liar","rail","ward",3,"","","rail-ward",19,0,20,27,24], // allWords 3: arid|lair|raid
  ["dead-near","dead","near","dean","read",3,"","","dean-read",23,81,3,7,0], // allWords 3: dare|dear|earn
  ["cheer-lasts","cheer","lasts","chess","later",3,"","","chess-later",9,81,3,7,0], // allWords 32: acres|alert|alter|cares|carte|carts|cases|caste|casts|cater|cease|chest|crate|earls|easel|heels|laser|lease|least|races|react|reals|sales|salts|scare|seals|slate|slats|stale|steal|tales|trace
  ["age-yep","age","yep","eye","gap",2,"","","eye-gap",7,87,2,5,0], // allWords 1: ape
  ["hats-stir","hats","stir","hits","star",3,"","","hits-star",9,82,3,6,0], // allWords 10: airs|arts|hair|hart|hast|rats|sari|sits|this|tsar
  ["lips-oils","lips","oils","slip","soil",1,"","","slip-soil",3,51,8,17,0], // allWords 0
  ["alias-small","alias","small","llama","sails",5,"","","llama-sails",29,77,4,7,0], // allWords 9: amass|amiss|mails|malls|massa|mills|salsa|sills|slams
  ["fair-solo","fair","solo","fool","sari",2,"","","fool-sari",9,75,4,9,0], // allWords 6: airs|also|foal|lars|loaf|rolf
  ["coat-owns","coat","owns","snow","taco",2,"","","snow-taco",15,58,7,14,0], // allWords 5: caws|cons|onto|soon|town
  ["ample-patty","ample","patty","apply","matte",3,"","","apply-matte",8,87,2,5,0], // allWords 11: amply|apple|aptly|leapt|maple|metal|petal|plate|playa|pleat|tempt
  ["arson-cable","arson","cable","baron","scale",2,"","","baron-scale",6,87,2,5,0], // allWords 15: arose|bacon|banal|banco|clans|cores|earls|laces|laser|nasal|reals|score|scorn|snarl|sonar
  ["boss-rare","boss","rare","bars","rose",2,"","","cannot be reversed",2,92,1,4,0], // allWords 14: bare|base|bass|bear|bore|bras|bros|ears|eras|rear|robe|sera|sobs|sore
  ["arbor-metro","arbor","metro","broom","terra",4,"","","broom-terra",13], // allWords 2: barre|motor
  ["tom-win","tom","win","mow","nit",3,"tim","won","mow-nit",9], // allWords 6: not|now|own|tin|ton|won
  ["attic-poles","attic","poles","optic","tales",3,"","","optic-tales",8,92,1,4,0], // allWords 21: least|lopes|pelts|pesto|poets|polis|posit|slate|slept|slope|spelt|spilt|split|spoil|stale|state|steal|tacit|tails|taste|topic
  ["glow-pray","glow","pray","grow","play",1,"","","grow-play",1,87,2,5,0], // allWords 6: orgy|plow|ploy|poly|warp|wrap
  ["pills-three","pills","three","ether","spill",2,"","","cannot be reversed",19,0,21,32,24], // allWords 18: elite|helps|islet|lilts|peril|piers|piles|plies|rites|spiel|spire|still|there|tiers|tiles|tills|tires|tries
  ["games-tight","games","tight","gates","might",4,"","","gates-might",12,69,5,11,0], // allWords 15: emits|items|mages|mates|maths|matte|meats|mites|sight|smite|smith|stage|steam|teams|times
  ["drop-feet","drop","feet","deep","fort",3,"","","cannot be reversed",9,81,3,7,0], // allWords 6: dope|dote|fete|fret|peed|prod
  ["deeds-suing","deeds","suing","genus","sided",4,"","","genus-sided",28,87,2,5,0], // allWords 16: dense|dudes|dunes|edged|edges|genes|needs|nudes|nudge|seeds|sense|sides|singe|sinus|snide|using
  ["dame-poet","dame","poet","date","poem",3,"","","date-poem",9,71,5,9,0], // allWords 9: demo|dome|dote|made|mead|mode|peat|tamp|tape
  ["bury-tens","bury","tens","nets","ruby",2,"","","nets-ruby",4,0,29,33,24], // allWords 12: buns|nest|nuts|rest|rubs|rust|sent|stun|trey|tyne|tyre|yurt
  ["bops-cafe","bops","cafe","fobs","pace",3,"","","fobs-pace",9,81,3,7,0], // allWords 5: cape|caps|cope|cops|face
  ["ads-sad","ads","sad","ass","dad",2,"","","ass-dad",7,86,2,6,0], // allWords 1: add
  ["dirt-plot","dirt","plot","told","trip",4,"","","told-trip",23,87,2,5,0], // allWords 0
  ["below-races","below","races","acres","elbow",1,"","","acres-elbow",3], // allWords 18: bales|bowel|cares|ceres|cores|earls|laser|lobes|loser|lower|orcas|reals|reels|roles|sable|scare|score|solar
  ["lined-rocks","lined","rocks","drone","slick",3,"","","drone-slick",8], // allWords 29: cider|close|coder|cores|corks|credo|cried|cries|decor|diner|dolce|drink|kilns|licks|liens|lines|links|locks|olden|reins|resin|rinse|risen|score|senor|siren|slice|slink|snore
  ["beat-soul","beat","soul","bout","seal",2,"","","bout-seal",2,80,3,8,0], // allWords 16: abet|able|also|bale|beta|blue|boat|east|eats|lube|oats|outs|sale|seat|teas|tube
  ["ours-want","ours","want","swan","tour",2,"","","swan-tour",7,57,8,11,0], // allWords 5: soar|sour|unto|wars|wart
  ["angel-decks","angel","decks","ledge","snack",4,"","","ledge-snack",24,86,2,6,0], // allWords 10: angle|cakes|canes|cease|clank|clean|eagle|edges|glean|lance
  ["melts-stool","melts","stool","motel","slots",3,"","","motel-slots",11,87,2,5,0], // allWords 11: loose|loses|moles|moose|smelt|soles|stole|tells|tolls|tomes|tools
  ["lies-nope","lies","nope","eons","pile",4,"","","eons-pile",13,87,2,5,0], // allWords 14: isle|lips|lose|nose|ones|open|pine|pins|pole|sine|slip|snip|sole|spin
  ["keel-wear","keel","wear","kale","were",2,"","","kale-were",8,47,10,13,0], // allWords 6: lake|leak|leek|rake|reek|ware
  ["coo-end","coo","end","doc","one",3,"","","doc-one",10,92,1,4,0], // allWords 5: cod|con|den|doe|eon
  ["deaf-mint","deaf","mint","find","team",4,"","","find-team",23,74,4,10,0], // allWords 11: date|dent|dint|fade|fame|fend|mate|meat|meta|tame|tend
  ["glue-roof","glue","roof","goof","rule",2,"","","goof-rule",8,92,1,4,0], // allWords 9: euro|four|furl|golf|gulf|lore|lure|role|rolf
  ["crate-slate","crate","slate","least","react",2,"","","least-react",19,92,1,4,0], // allWords 10: aster|carte|cater|rates|stale|stare|steal|tales|tears|trace
  ["grams-plane","grams","plane","lamps","range",3,"","","lamps-range",9,92,1,4,0], // allWords 16: ample|angel|anger|angle|gamer|gleam|glean|maple|marge|palms|panel|penal|plans|psalm|ramps|slang
  ["dork-life","dork","life","folk","ride",4,"","","folk-ride",13,92,1,4,0], // allWords 7: dire|dirk|file|lore|redo|rode|role
  ["baton-solar","baton","solar","nasal","robot",4,"","","nasal-robot",23,92,1,4,0], // allWords 12: abort|banal|loans|rabat|roast|roost|roots|salon|santo|solon|tabor|torso
  ["hags-lend","hags","lend","hand","legs",2,"","","hand-legs",1,92,1,4,0], // allWords 6: gals|glad|hens|land|lens|slag
  ["ally-dibs","ally","dibs","idly","labs",3,"","","idly-labs",9,92,1,4,0], // allWords 7: ably|bias|bids|lids|sail|slab|slid
  ["noses-tiger","noses","tiger","goner","sites",4,"","","goner-sites",15,92,1,4,0], // allWords 14: reign|reins|resin|rinse|risen|rites|senor|singe|siren|snore|store|tiers|tires|tries
  ["bus-rid","bus","rid","dub","sir",3,"","","dub-sir",10,92,1,4,0], // allWords 4: bid|bud|sri|sub
  ["rival-voter","rival","voter","rover","vital",2,"","","rover-vital",3,92,1,4,0], // allWords 13: liver|lover|overt|retro|river|rivet|trail|trial|trier|trove|valor|viral|volta
  ["item-monk","item","monk","knit","memo",4,"","","knit-memo",21,92,1,4,0], // allWords 5: emit|kite|mint|oink|time
  ["drum-fail","drum","fail","dual","firm",3,"","","dual-firm",9,92,1,4,0], // allWords 5: amid|dial|furl|laid|maid
  ["pipes-torch","pipes","torch","pitch","ropes",4,"","","cannot be reversed",15,92,1,4,0], // allWords 24: chirp|corps|crisp|crops|other|pesto|piers|poets|popes|porch|pores|poser|prose|rites|scrip|spire|spite|spore|stipe|store|their|tiers|tires|tries
  ["eats-frog","eats","frog","ergo","fast",2,"","","ergo-fast",9,92,1,4,0], // allWords 11: east|fats|gate|gore|ogre|rest|rose|seat|sofa|sore|teas
  ["oval-oven","oval","oven","love","nova",2,"","","love-nova",7,86,2,6,0], // allWords 0
  ["enact-grows","enact","grows","score","twang",6,"","","score-twang",33,92,1,4,0], // allWords 23: acres|canes|cares|carte|cater|cones|conte|cores|crate|gowns|races|react|scare|scone|swear|swore|tower|trace|wares|water|wears|worse|wrote
  ["alter-drops","alter","drops","older","traps",4,"","","older-traps",12,92,1,4,0], // allWords 20: alert|arose|aster|doers|later|least|order|parts|plods|polar|rates|slate|splat|stale|stare|steal|strap|tales|tears|terra
  ["devil-erase","devil","erase","ideal","serve",2,"","","ideal-serve",7,92,1,4,0], // allWords 23: aired|dales|dares|deals|diver|drive|earls|eased|easel|elves|laird|laser|leads|lease|lidar|lived|liver|reads|reals|saree|sever|veers|verse
  ["bag-hat","bag","hat","bat","hag",1,"","","bat-hag",0,92,1,4,0], // allWords 1: tab
  ["base-semi","base","semi","bias","seem",2,"","","bias-seem",7,92,1,4,0], // allWords 8: aims|beam|bees|mesa|same|seam|seas|sees
  ["host-isle","host","isle","list","shoe",2,"","","list-shoe",9,92,1,4,0], // allWords 8: hole|holt|hose|lies|shes|shot|sits|slit
  ["blows-truce","blows","truce","clubs","wrote",4,"","","clubs-wrote",25,92,1,4,0], // allWords 17: below|blocs|bowel|bower|bowls|brows|clots|colts|crust|cults|curbs|cuter|elbow|scrub|towel|tower|worst
  ["chase-outer","chase","outer","cause","other",2,"","","cause-other",5,92,1,4,0], // allWords 14: aches|chest|crash|crust|cuter|ethos|horst|reach|route|sauce|short|those|tours|truce
  ["cups-suck","cups","suck","cuss","puck",3,"","","cuss-puck",8,87,2,5,0], // allWords 0
  ["flair-trout","flair","trout","flour","trait",2,"","","flour-trait",2,92,1,4,0], // allWords 8: fault|flout|frail|friar|trail|trial|tutor|ultra
  ["knee-stat","knee","stat","nest","take",3,"kate","sent","cannot be reversed",9,86,2,6,0], // allWords 14: ants|east|eats|keen|nets|sane|seat|seen|sent|tank|teas|tees|tens|test
  ["balls-niece","balls","niece","cable","lines",4,"","","cable-lines",25,92,1,4,0], // allWords 14: bales|bills|canes|clans|clean|cline|label|lance|lanes|leans|libel|liens|sable|since
  ["birds-toned","birds","toned","bonds","tired",2,"","","bonds-tired",2,92,1,4,0], // allWords 22: binds|boned|bones|bored|bores|bride|inset|noted|notes|onset|rites|robes|seton|sober|stein|stone|store|tiers|tires|tones|tried|tries
  ["aid-gob","aid","gob","boa","dig",3,"","","boa-dig",9,92,1,4,0], // allWords 3: big|dog|god
  ["leap-mean","leap","mean","name","pale",2,"","","name-pale",15,85,2,7,0], // allWords 5: amen|lane|lean|mane|plea
  ["gifts-waves","gifts","waves","gives","wafts",2,"","","gives-wafts",1,92,1,4,0], // allWords 3: swift|views|wives
  ["cogs-gene","cogs","gene","eggs","once",3,"","","eggs-once",10,92,1,4,0], // allWords 5: cone|cons|gone|snog|song
  ["nicer-salon","nicer","salon","coins","learn",4,"","","coins-learn",27,92,1,4,0], // allWords 30: acorn|acres|canes|canon|cares|crane|cries|earls|icons|lanes|laser|leans|liens|linen|liner|lines|lions|loans|loins|nance|orcas|races|rance|reals|renal|scare|scion|since|solar|sonic
  ["aided-carry","aided","carry","diary","raced",4,"","","diary-raced",11,92,1,4,0], // allWords 12: aired|array|cadre|cared|cedar|cider|cried|dairy|decay|diced|dicey|radar
  ["ably-gunk","ably","gunk","bank","ugly",3,"","","bank-ugly",9,92,1,4,0], // allWords 1: yuan
  ["mixed-souls","mixed","souls","mould","sixes",2,"","","mould-sixes",3,92,1,4,0], // allWords 4: douse|issue|mixes|mouse
  ["idol-rate","idol","rate","oral","tide",3,"","","oral-tide",9,92,1,4,0], // allWords 9: aero|diet|edit|lord|redo|rode|tail|tear|tied
  ["rush-teen","rush","teen","here","nuts",4,"","","here-nuts",22,92,1,4,0], // allWords 11: hers|huts|nest|nets|runs|sent|shut|stun|tens|thus|tune
  ["new-two","new","two","own","wet",3,"","","own-wet",9,92,1,4,0], // allWords 5: eon|now|one|toe|won
  ["logos-stein","logos","stein","loose","sting",2,"","","loose-sting",6,92,1,4,0], // allWords 17: glint|goons|inlet|inset|islet|lingo|noise|noose|notes|onset|seton|sites|stole|stone|tiles|tones|tongs
  ["ample-raise","ample","raise","arise","maple",1,"","","arise-maple",3,71,5,9,0], // allWords 6: paler|parse|pearl|pears|spare|spear
  ["blot-stem","blot","stem","lets","tomb",3,"","","lets-tomb",11,92,1,4,0], // allWords 8: belt|bolt|lest|lost|lots|most|slot|test
  ["champ-rinse","champ","rinse","mince","sharp",4,"","","mince-sharp",26,92,1,4,0], // allWords 18: aches|arise|chaps|chase|harem|hares|hears|miner|pairs|prima|raise|reins|resin|risen|share|shear|since|siren
  ["rode-suit","rode","suit","roti","sued",3,"","","roti-sued",9,92,1,4,0], // allWords 13: does|dose|dots|dues|dust|redo|riot|rude|stud|tori|trio|turd|used
  ["east-wind","east","wind","dawn","ties",3,"","","dawn-ties",19,81,3,7,0], // allWords 15: ante|dean|dies|dine|eats|neat|seat|side|site|swat|teas|twin|wand|want|wits
  ["beans-piled","beans","piled","bleed","pains",3,"","","bleed-pains",11,92,1,4,0], // allWords 12: abide|basin|blend|blind|panes|pease|peels|piles|plies|sepia|sleep|spiel
  ["gear-oops","gear","oops","ages","poor",2,"","","ages-poor",9,87,2,5,0], // allWords 9: aero|pore|pose|prog|rage|repo|rope|sage|sago
  ["film-tens","film","tens","mint","self",4,"","","mint-self",26,92,1,4,0], // allWords 10: fins|lest|lets|list|melt|nest|nets|sent|slit|tins
  ["alp-eye","alp","eye","eel","pay",2,"","","eel-pay",9,92,1,4,0], // allWords 5: aye|lap|pal|yap|yep
  ["beam-foot","beam","foot","boom","feat",2,"","","boom-feat",2,92,1,4,0], // allWords 9: abet|beat|beta|boat|boot|fame|fate|feta|foam
  ["dude-zone","dude","zone","doze","nude",3,"","","doze-nude",9,82,3,6,0], // allWords 3: done|dune|node
  ["kicks-songs","kicks","songs","kings","socks",2,"","","kings-socks",1,92,1,4,0], // allWords 5: kinks|signs|sings|sinks|skins
  ["meets-notch","meets","notch","comes","tenth",4,"","","comes-tenth",22,92,1,4,0], // allWords 18: cents|chemo|cones|hence|notes|onset|scene|scent|scone|seton|stent|stone|teens|tense|tents|theme|tomes|tones
  ["nose-user","nose","user","ones","sure",2,"","","ones-sure",16,87,2,5,0], // allWords 8: eons|euro|ness|ours|ruse|seen|sour|uses
  ["acid-they","acid","they","city","head",3,"","","city-head",9,92,1,4,0], // allWords 2: aced|yeah
  ["gloat-scare","gloat","scare","coast","large",3,"","","coast-large",11,92,1,4,0], // allWords 20: acres|algae|ascot|atlas|cares|carts|coats|cores|earls|glare|grace|lager|laser|loser|races|reals|regal|roles|score|tacos
  ["basil-freak","basil","freak","brake","fails",2,"","","brake-fails",9,92,1,4,0], // allWords 13: baker|barks|basal|biker|break|brisk|faker|feral|flare|flier|frisk|liber|rifle
  ["arts-ramp","arts","ramp","mars","trap",2,"","","mars-trap",7,92,1,4,0], // allWords 7: arms|part|rams|rats|star|tarp|tsar
  ["day-was","day","was","sad","yaw",3,"","","sad-yaw",9,92,1,4,0], // allWords 3: ads|saw|way
  ["disc-lamb","disc","lamb","bids","calm",3,"","","bids-calm",22,92,1,4,0], // allWords 7: balm|clam|dibs|labs|libs|limb|slab
  ["swamp-truth","swamp","truth","swath","trump",2,"","","swath-trump",1,92,1,4,0], // allWords 13: harms|hurst|hurts|marsh|parts|ramps|spurt|strap|thrum|tramp|traps|trash|whats
  ["digit-roofs","digit","roofs","frogs","idiot",2,"","","frogs-idiot",7,92,1,4,0], // allWords 2: foods|grift
  ["cash-tiny","cash","tiny","cyan","this",3,"","","cyan-this",10,92,1,4,0], // allWords 9: chin|hast|hats|hint|hits|inch|stay|than|thin
  ["cogs-park","cogs","park","gaps","rock",4,"","","gaps-rock",13,92,1,4,0], // allWords 9: arcs|cars|cork|gasp|pork|pros|rack|raps|scar
  ["fell-page","fell","page","flag","peel",3,"","","flag-peel",9,92,1,4,0], // allWords 8: fall|feel|flea|flee|leaf|leap|pale|plea
  ["angle-risks","angle","risks","girls","snake",4,"","","girls-snake",12,92,1,4,0], // allWords 10: agile|aisle|angel|glean|lanes|leans|sails|skier|slang|sneak
  ["order-tease","order","tease","arose","deter",4,"","","arose-deter",16,92,1,4,0], // allWords 10: aster|doers|eater|erode|rates|roars|stare|steed|tears|terra
  ["nit-per","nit","per","rip","ten",3,"","","rip-ten",14,92,1,4,0], // allWords 5: net|pet|pit|tin|tip
  ["dates-resin","dates","resin","sedan","tires",4,"","","sedan-tires",22,92,1,4,0], // allWords 42: aster|deans|dense|diets|earns|edits|enter|ester|inert|inter|nears|needs|rains|rates|reins|reset|rinse|risen|rises|rites|sarin|sears|seeds|sides|siren|sited|snare|sneer|snide|stade|stair|stare|stead|steed|steer|tears|terse|tides|tiers|train|trees|tries
  ["aware-flash","aware","flash","awash","flare",2,"","","awash-flare",1,92,1,4,0], // allWords 6: false|feral|fleas|leafs|wafer|wharf
  ["corn-wide","corn","wide","down","rice",4,"","","down-rice",13,87,2,5,0], // allWords 11: code|core|deco|dice|iced|owed|weir|wind|wire|wore|worn
  ["fake-nick","fake","nick","cafe","kink",3,"","","cafe-kink",9,87,2,5,0], // allWords 4: acne|cane|face|nice
  ["limit-moves","limit","moves","miles","vomit",4,"","","miles-vomit",11,92,1,4,0], // allWords 12: evils|limes|lives|loves|memos|milos|moles|motel|slime|smile|solve|veils
  ["norm-test","norm","test","most","tern",4,"","","cannot be reversed",26,92,1,4,0], // allWords 11: nest|nets|rent|sent|stem|tens|term|tons|torn|tort|trot
  ["bomb-dunk","bomb","dunk","bonk","dumb",2,"","","bonk-dumb",1,92,1,4,0], // allWords 3: bond|bunk|knob
  ["inter-skins","inter","skins","risen","stink",5,"","","risen-stink",34,92,1,4,0], // allWords 15: inert|inset|kites|knits|nests|reins|rents|resin|rinse|sinks|siren|skier|skies|stein|stern
  ["gods-silk","gods","silk","disk","logs",3,"","","disk-logs",9,92,1,4,0], // allWords 6: digs|diss|dogs|kids|loss|skid
  ["agile-meats","agile","meats","algae","items",3,"","","algae-items",19,92,1,4,0], // allWords 16: agate|aisle|emits|gleam|limes|males|mates|meals|miles|mites|slime|smile|smite|steam|teams|times
  ["blink-force","blink","force","borne","flick",2,"","","borne-flick",3,92,1,4,0], // allWords 2: boner|frock
  ["lose-wash","lose","wash","seal","show",3,"","","seal-show",19,92,1,4,0], // allWords 6: lash|owes|sale|shaw|sole|woes
  ["canoe-fused","canoe","fused","cease","found",3,"","","cease-found",11,92,1,4,0], // allWords 5: dance|fades|feuds|ocean|ounce
  ["swath-twice","swath","twice","waste","witch",2,"","","waste-witch",9,92,1,4,0], // allWords 3: sweat|watch|whats
  ["ago-odd","ago","odd","dad","goo",2,"","","dad-goo",7,92,1,4,0], // allWords 3: add|dog|god
  ["bleat-lobby","bleat","lobby","abbot","belly",4,"","","abbot-belly",23,92,1,4,0], // allWords 4: alley|bally|bloat|table
  ["flail-grown","flail","grown","flown","grail",2,"","","flown-grail",1,92,1,4,0], // allWords 12: align|final|flair|frail|frown|grain|groin|growl|infra|liang|lingo|wrong
  ["dodo-nuts","dodo","nuts","odds","unto",2,"","","cannot be reversed",9,92,1,4,0], // allWords 11: dons|dots|duds|dust|nods|onto|stud|stun|tons|udon|undo
  ["lamps-trial","lamps","trial","llama","strip",3,"","","llama-strip",11,92,1,4,0], // allWords 12: alias|lapis|liars|palms|psalm|rails|smart|stair|stamp|trail|trams|trips
  ["gird-lame","gird","lame","mild","rage",4,"","","mild-rage",13,92,1,4,0], // allWords 12: drag|earl|game|gear|grad|grid|lear|lime|male|meal|mile|real
  ["menus-nixes","menus","nixes","mines","nexus",2,"","","mines-nexus",3,92,1,4,0], // allWords 3: minus|mixes|nines
  ["grade-reset","grade","reset","edges","terra",4,"edgar","terse","edges-terra",22,92,1,4,0], // allWords 19: agree|dregs|eager|eared|eater|ester|gated|geese|grate|great|raged|rated|reeds|serge|steer|terse|trade|tread|trees
  ["fees-stat","fees","stat","safe","test",3,"","","safe-test",19,92,1,4,0], // allWords 15: east|eats|fast|fate|fats|feat|feet|feta|fete|seas|seat|sees|sets|teas|tees
  ["stir-tone","stir","tone","sent","trio",4,"","","sent-trio",14,92,1,4,0], // allWords 14: eons|nest|nets|nose|note|ones|riot|roti|site|tens|tent|ties|tori|torn
  ["gap-gun","gap","gun","nag","pug",3,"","","nag-pug",10,92,1,4,0], // allWords 1: gnu
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
  ["areas-kinds","areas","kinds","ideas","ranks",4,"ikeas","rands","cannot be reversed",13,92,1,4,0], // allWords 7: aides|aside|dares|rakes|reads|saran|snark
  ["all-way","all","way","awl","lay",2,"","","awl-lay",7,92,1,4,0], // allWords 2: law|yaw
  ["roles-world","roles","world","droll","swore",3,"","","droll-swore",10,92,1,4,0], // allWords 8: dowel|loser|lowes|older|order|rolls|rowed|worse
  ["joke-wash","joke","wash","josh","wake",2,"","","josh-wake",1,92,1,4,0], // allWords 8: hawk|jake|owes|shaw|show|weak|woes|woke
  ["lease-warns","lease","warns","newer","salsa",5,"","","newer-salsa",30,92,1,4,0], // allWords 18: earls|easel|lanes|laser|leans|learn|nasal|reals|reels|renal|renew|sales|seals|sewer|snarl|swear|wares|wears
  ["idol-lads","idol","lads","dial","olds",3,"","","dial-olds",12,92,1,4,0], // allWords 6: aids|also|doll|laid|said|sold
  ["honk-item","honk","item","oink","them",2,"","","oink-them",6,92,1,4,0], // allWords 7: emit|home|kite|knit|meth|mint|time
  ["loans-rumor","loans","rumor","lunar","rooms",3,"","","lunar-rooms",11,92,1,4,0], // allWords 6: arson|looms|moors|norms|salon|sonar
  ["lapse-waste","lapse","waste","pleas","sweat",2,"","","pleas-sweat",18,92,1,4,0], // allWords 13: leaps|leapt|least|pales|petal|plate|pleat|sales|seals|slate|stale|steal|tales
  ["hunt-nags","hunt","nags","snug","than",2,"","","snug-than",8,92,1,4,0], // allWords 13: gnus|guns|gush|hags|hugs|nuns|sang|shun|snag|sung|tang|thug|tung
  ["crest-meats","crest","meats","seems","tract",4,"","","seems-tract",25,92,1,4,0], // allWords 16: carts|cases|caste|crass|cress|masse|mates|matte|meets|scars|seams|smart|steam|teams|terms|trams
  ["ape-arm","ape","arm","ear","map",2,"","","ear-map",8,87,2,5,0], // allWords 5: amp|are|era|mar|ram
  ["cent-lime","cent","lime","melt","nice",4,"","","melt-nice",13,92,1,4,0], // allWords 5: lent|lien|line|mice|mile
  ["dolly-sites","dolly","sites","dotes","silly",2,"","","dotes-silly",1,92,1,4,0], // allWords 18: deity|diets|dilly|dolls|edits|isles|lists|loses|sills|sited|slide|slits|slots|soles|tides|toyed|yield|yodel
  ["grow-lose","grow","lose","ogre","slow",2,"","","ogre-slow",9,92,1,4,0], // allWords 10: egos|ergo|goes|gore|lore|lows|owls|role|sole|wool
  ["mean-text","mean","text","next","team",3,"","","next-team",23,92,1,4,0], // allWords 10: amen|ante|mane|mate|meat|meta|name|neat|tame|tate
  ["beers-glass","beers","glass","bless","gears",2,"","","bless-gears",3,92,1,4,0], // allWords 10: bases|bears|brees|gases|rages|saber|sabre|sages|serge|slabs
  ["ponds-tails","ponds","tails","spoil","stand",3,"","","spoil-stand",8,87,2,5,0], // allWords 5: lapis|plans|polis|slant|toils
  ["beat-loop","beat","loop","boot","leap",2,"","","boot-leap",2,92,1,4,0], // allWords 15: abet|alto|beta|boat|late|loot|opal|pale|plea|pole|polo|pool|tale|teal|tool
  ["adult-spell","adult","spell","delta","pulls",2,"","","delta-pulls",7,87,2,5,0], // allWords 10: dealt|ladle|lapel|leapt|pelts|petal|plate|pleat|slept|spelt
  ["feeds-harsh","feeds","harsh","fresh","heads",3,"","","fresh-heads",11,92,1,4,0], // allWords 10: ashes|fades|hades|herds|safes|serfs|shade|shard|sheaf|shred
  ["bus-mew","bus","mew","sum","web",3,"","","sum-web",9,92,1,4,0], // allWords 1: sub
  ["eons-tiff","eons","tiff","fine","soft",4,"","","fine-soft",26,92,1,4,0], // allWords 11: fife|fist|fits|foes|font|nose|ones|sift|sine|tins|tons
  ["paper-vista","paper","vista","pasta","viper",2,"","","pasta-viper",1,92,1,4,0], // allWords 16: parse|parts|pears|piers|piper|raves|saver|sepia|spare|spear|spire|strap|strip|tapas|traps|trips
  ["muted-rinse","muted","rinse","nurse","timed",3,"","","nurse-timed",14,92,1,4,0], // allWords 26: denim|diner|durst|emits|items|menus|midst|minds|mined|mines|mites|reins|resin|rinds|risen|rites|runes|siren|smite|tiers|times|tired|tires|tried|tries|under
  ["evil-wise","evil","wise","isle","view",3,"","","isle-view",10,92,1,4,0], // allWords 4: lies|live|veil|vile
  ["edits-rents","edits","rents","tends","tries",3,"","","tends-tries",20,92,1,4,0], // allWords 10: dents|diets|rites|sited|stern|teens|tense|tides|tiers|tires
  ["dish-ugly","dish","ugly","gush","idly",3,"","","gush-idly",9,92,1,4,0], // allWords 2: guys|hugs
  ["bars-cost","bars","cost","boss","cart",2,"","","boss-cart",2,92,1,4,0], // allWords 16: acts|arcs|bass|bats|bots|bras|brat|bros|cars|cast|cats|scar|scot|sobs|stab|tabs
  ["bowl-legs","bowl","legs","gobs","well",4,"","","gobs-well",13,92,1,4,0], // allWords 9: begs|blew|blow|bows|logs|lows|owls|slew|slow
  ["one-saw","one","saw","own","sea",2,"","","own-sea",6,92,1,4,0], // allWords 4: eon|now|was|won
  ["keep-mall","keep","mall","leek","palm",3,"","","leek-palm",23,92,1,4,0], // allWords 10: kale|keel|lake|lame|lamp|leak|male|meal|peak|peek
  ["funds-rainy","funds","rainy","funny","raids",2,"","","funny-raids",1,92,1,4,0], // allWords 9: dairy|diary|fanny|rains|randy|ruins|runny|sarin|unify
  ["arms-oven","arms","oven","norm","save",3,"","","norm-save",10,92,1,4,0], // allWords 10: earn|ears|eras|mars|near|rams|rose|sera|sore|vase
  ["demon-pairs","demon","pairs","drain","poems",3,"","","drain-poems",12,92,1,4,0], // allWords 18: adios|demos|diner|domes|dries|modes|monde|nadir|nomad|piano|piers|poise|raids|ramps|rides|ripen|sired|spire
  ["aided-wrong","aided","wrong","dared","owing",2,"","","dared-owing",7,92,1,4,0], // allWords 15: adder|adore|adorn|argon|dread|drown|grade|grand|groan|grown|orang|organ|radon|raged|rowed
  ["edge-road","edge","road","dead","ergo",4,"","","dead-ergo",25,92,1,4,0], // allWords 6: aero|dare|dear|gore|ogre|read
  ["crane-hopes","crane","hopes","acres","phone",3,"","","acres-phone",12,87,2,5,0], // allWords 14: canoe|cares|creep|crepe|hares|hears|ocean|ponce|races|rance|scare|scope|share|shear
  ["giant-leave","giant","leave","agent","alive",2,"","","agent-alive",7,87,2,5,0], // allWords 3: alien|valet|vital
  ["eel-was","eel","was","law","see",3,"","","law-see",10,92,1,4,0], // allWords 3: awl|saw|sea
  ["laser-sifts","laser","sifts","lists","safer",2,"","","lists-safer",3,92,1,4,0], // allWords 37: earls|false|fares|farts|fears|feral|files|fires|first|fists|flare|flats|fleas|flier|flies|flirt|flits|fries|isles|lasts|leafs|lifts|rafts|reals|rifle|rifts|rises|safes|sales|salts|seals|sears|serif|slats|slits|stars|stirs
  ["nests-until","nests","until","lines","stunt",4,"","","cannot be reversed",22,92,1,4,0], // allWords 11: inlet|inset|issue|liens|sinus|stein|stent|stuns|suite|tents|units
  ["fled-ship","fled","ship","flip","shed",2,"","","flip-shed",1,92,1,4,0], // allWords 7: dish|hips|lids|lips|sled|slid|slip
  ["cook-plus","cook","plus","luck","oops",3,"","","cannot be reversed",9,92,1,4,0], // allWords 4: coos|lock|opus|soup
  ["shack-spook","shack","spook","hooks","packs",2,"","","hooks-packs",7,87,2,5,0], // allWords 3: hacks|shock|shook
  ["cold-late","cold","late","lace","told",4,"","","lace-told",13,87,2,5,0], // allWords 5: clad|clod|doll|tale|teal
  ["scale-stake","scale","stake","cakes","tales",2,"kates","laces","cakes-tales",7,92,1,4,0], // allWords 8: laces|least|skate|slate|stale|steak|steal|takes
  ["macro-noble","macro","noble","broom","clean",4,"","","broom-clean",23,92,1,4,0], // allWords 20: acorn|amber|amble|baron|blame|bloom|boner|borne|boron|bream|camel|clone|colon|comer|crane|cream|crone|lance|rance|recon
  ["dark-flow","dark","flow","draw","folk",2,"","","draw-folk",6,92,1,4,0], // allWords 2: ward|wolf
  ["bop-out","bop","out","pub","too",3,"","","pub-too",14,87,2,5,0], // allWords 3: bot|but|tub
  ["mural-twins","mural","twins","minus","trawl",3,"","","minus-trawl",12,92,1,4,0], // allWords 13: runts|straw|sutra|swami|swarm|turns|ultra|units|until|waist|waits|warms|warts
  ["abet-eons","abet","eons","beat","ones",1,"","","beat-ones",3,68,5,12,0], // allWords 9: bans|base|bees|bent|beta|nabs|nose|note|tone
  ["into-tusk","into","tusk","knit","outs",3,"","","knit-outs",22,92,1,4,0], // allWords 5: ions|sink|skin|tons|tout
  ["curve-poles","curve","poles","clues","prove",3,"","","clues-prove",11,92,1,4,0], // allWords 20: close|clove|cores|cover|cures|curse|elope|lopes|pores|poser|prose|pulse|puree|purse|ropes|rupee|score|slope|spore|super
  ["denim-roman","denim","roman","minor","named",3,"","","minor-named",19,92,1,4,0], // allWords 7: amend|inner|manor|mined|miner|nomad|ramen
  ["doom-furl","doom","furl","drum","fool",3,"","","drum-fool",9,92,1,4,0], // allWords 9: dorm|form|foul|from|lord|loud|ludo|mood|rolf
  ["agree-usage","agree","usage","erase","gauge",3,"","","erase-gauge",19,92,1,4,0], // allWords 7: eager|gears|rages|reuse|saree|surge|urges
  ["lens-team","lens","team","meal","sent",3,"","","meal-sent",23,92,1,4,0], // allWords 15: east|eats|lame|male|mate|meat|meta|nest|nets|sale|seal|seat|tame|teas|tens
  ["glen-snow","glen","snow","long","news",2,"","","long-news",8,87,2,5,0], // allWords 9: glow|gown|lens|lows|owls|owns|sewn|slew|slow
  ["nib-wow","nib","wow","bow","win",3,"","","cannot be reversed",10,86,2,6,0], // allWords 4: bin|now|own|won
  ["fobs-test","fobs","test","bets","soft",4,"","","bets-soft",13,92,1,4,0], // allWords 4: best|bots|sets|toss
  ["mere-that","mere","that","math","tree",2,"","","math-tree",9,92,1,4,0], // allWords 10: ahem|hate|heat|mate|meat|meta|tame|tate|team|term
  ["cover-viral","cover","viral","river","vocal",4,"","","river-vocal",11,92,1,4,0], // allWords 10: clove|coral|crore|liver|lover|relic|rival|rover|valor|vicar
  ["till-wood","till","wood","tool","wild",2,"","","tool-wild",2,92,1,4,0], // allWords 6: lilt|loot|told|toll|will|wool
  ["arc-due","arc","due","cud","era",3,"","","cud-era",10,92,1,4,0], // allWords 4: are|car|ear|red
  ["fart-sold","fart","sold","ford","salt",2,"","","ford-salt",3,92,1,4,0], // allWords 18: arts|flat|fold|fort|frat|lads|last|loft|lost|lots|olds|raft|rats|rods|slot|sort|star|tsar
  ["comfy-reads","comfy","reads","decay","forms",4,"","","decay-forms",25,92,1,4,0], // allWords 10: cafes|dares|dorms|faces|fares|fears|foray|ready|roads|safer
  ["diet-lift","diet","lift","edit","flit",1,"","","edit-flit",3,80,3,8,0], // allWords 4: lite|tide|tied|tile
  ["depot-liner","depot","liner","noted","peril",3,"","","noted-peril",19,92,1,4,0], // allWords 15: diner|drone|ender|enrol|inlet|leper|loner|opted|pedro|pilot|pride|repel|roped|tepid|toned
  ["been-snug","been","snug","bung","seen",2,"","","cannot be reversed",8,92,1,4,0], // allWords 4: gnus|guns|nuns|sung
  ["lotus-nippy","lotus","nippy","plops","unity",3,"","","cannot be reversed",11,92,1,4,0], // allWords 6: pints|plots|snout|spilt|split|units
  ["node-wait","node","wait","anti","owed",3,"","","anti-owed",20,92,1,4,0], // allWords 4: dean|done|into|wade
  ["agent-veins","agent","veins","event","gains",3,"","","event-gains",8,92,1,4,0], // allWords 6: anise|eaten|evens|giant|seven|vines
  ["hippo-hosts","hippo","hosts","photo","ships",3,"","","photo-ships",11,92,1,4,0], // allWords 5: hoist|hoops|shoot|shops|shots
  ["and-its","and","its","din","sat",2,"dan","sit","din-sat",7,92,1,4,0], // allWords 3: ins|sin|sit
  ["mason-suite","mason","suite","mouse","stain",3,"","","mouse-stain",11,92,1,4,0], // allWords 12: amino|asset|mates|meats|moans|saint|satin|seats|steam|stuns|teams|units
  ["dull-snap","dull","snap","land","plus",5,"","","land-plus",26,92,1,4,0], // allWords 4: dual|pans|saul|span
  ["cores-swept","cores","swept","corps","sweet",1,"","","corps-sweet",1,92,1,4,0], // allWords 17: crews|crops|pesos|pesto|poets|ports|poses|posse|prost|roses|scope|score|screw|sores|sport|store|wrest
  ["file-task","file","task","leaf","skit",3,"","","leaf-skit",19,92,1,4,0], // allWords 16: east|eats|flea|kits|late|life|lite|safe|seat|site|tale|talk|teal|teas|ties|tile
  ["exile-pants","exile","pants","exist","panel",3,"","","exist-panel",8,92,1,4,0], // allWords 10: aisle|eaten|exits|lanes|lapis|leans|penal|pixel|plane|plans
  ["amid-year","amid","year","army","idea",3,"","","army-idea",19,92,1,4,0], // allWords 4: aide|amir|area|maid
  ["aced-gave","aced","gave","aged","cave",3,"","","aged-cave",9,92,1,4,0], // allWords 0
  ["china-lyric","china","lyric","icily","ranch",4,"","","icily-ranch",26,92,1,4,0], // allWords 5: chain|chair|cinch|cynic|inlay
  ["baron-swiss","baron","swiss","basis","sworn",3,"","","basis-sworn",11,92,1,4,0], // allWords 10: arson|barns|basin|boars|brass|brown|brows|oasis|soars|sonar
  ["hey-out","hey","out","the","you",2,"","","the-you",8,92,1,4,0], // allWords 2: hut|toe
  ["babe-lips","babe","lips","bibs","pale",4,"","","bibs-pale",13,92,1,4,0], // allWords 14: able|alps|bale|bile|labs|laps|leap|libs|pals|pile|plea|slab|slap|slip
  ["foal-shop","foal","shop","half","oops",2,"","","half-oops",8,92,1,4,0], // allWords 8: also|fool|hops|lash|loaf|posh|soap|solo
  ["ask-eye","ask","eye","see","yak",2,"","","see-yak",6,92,1,4,0], // allWords 4: aye|kay|key|sea
  ["model-venom","model","venom","lemon","moved",3,"","","lemon-moved",19,92,1,4,0], // allWords 6: delve|devel|loved|melon|modem|novel
  ["does-sage","does","sage","ease","gods",3,"","","ease-gods",9,92,1,4,0], // allWords 7: aged|ages|dogs|dose|egos|goes|seas
  ["gang-ward","gang","ward","drag","gnaw",4,"","","drag-gnaw",23,92,1,4,0], // allWords 5: dang|dawn|draw|grad|wand
  ["curse-folks","curse","folks","cross","fluke",3,"","","cross-fluke",12,92,1,4,0], // allWords 11: close|clues|cores|corks|cures|floss|forks|fuels|locks|rocks|score
  ["able-lugs","able","lugs","glue","labs",2,"","","glue-labs",9,92,1,4,0], // allWords 6: bags|bale|bell|saul|slab|slug
  ["shove-slope","shove","slope","hopes","loves",2,"","","hopes-loves",7,92,1,4,0], // allWords 3: lopes|poles|solve
  ["mall-with","mall","with","math","will",2,"","","math-will",1,92,1,4,0], // allWords 7: malt|mill|thaw|wall|what|whit|wilt
  ["chick-ninth","chick","ninth","cinch","think",4,"","","cinch-think",26,92,1,4,0], // allWords 3: chink|hitch|thick
  ["ape-not","ape","not","one","pat",2,"","","one-pat",7,92,1,4,0], // allWords 4: eon|pen|tap|ton
  ["great-slide","great","slide","least","ridge",3,"","","least-ridge",11,92,1,4,0], // allWords 29: agile|agree|aisle|arise|aster|dries|eager|eagle|easel|erase|glide|grate|greed|lease|ledge|raise|rates|reeds|rides|saree|sired|slate|stair|stale|stare|steal|tails|tales|tears
  ["acts-hulk","acts","hulk","lack","thus",3,"","","lack-thus",9,92,1,4,0], // allWords 7: cast|cats|huts|lush|saul|shut|tack
  ["other-roses","other","roses","horse","store",4,"","","horse-store",24,92,1,4,0], // allWords 6: ethos|heros|rests|shore|sores|those
  ["mined-seats","mined","seats","aimed","nests",3,"","","aimed-nests",8,92,1,4,0], // allWords 27: admit|aides|aside|asset|dates|denim|dense|dents|eased|eases|edema|ideas|mated|mates|meats|media|mines|mints|needs|sense|snide|stade|stead|steam|tamed|teams|tends
  ["flat-pony","flat","pony","font","play",2,"","","font-play",2,92,1,4,0], // allWords 2: atop|plat
  ["mars-tarp","mars","tarp","ramp","rats",3,"","","ramp-rats",8,92,1,4,0], // allWords 7: arms|arts|part|rams|star|trap|tsar
  ["beta-hero","beta","hero","bore","hate",3,"","","bore-hate",10,92,1,4,0], // allWords 8: abet|bare|bear|beat|hare|hear|heat|robe
  ["lime-soon","lime","soon","lion","some",2,"","","lion-some",1,92,1,4,0], // allWords 4: ions|mile|mole|semi
  ["age-gym","age","gym","egg","may",2,"","","egg-may",7,92,1,4,0], // allWords 1: aye
  ["caps-gunk","caps","gunk","nags","puck",4,"","","nags-puck",13,92,1,4,0], // allWords 12: cans|cups|gaps|gasp|gnus|guns|pack|sang|scan|snag|snug|sung
  ["posed-teams","posed","teams","atoms","speed",2,"","","atoms-speed",7,92,1,4,0], // allWords 15: dopes|dotes|mated|mates|meats|pease|pesos|poses|posse|seeps|steam|steed|stems|tamed|tease
  ["chat-sour","chat","sour","rush","taco",3,"","","rush-taco",20,92,1,4,0], // allWords 13: arch|char|coat|hast|hats|huts|oats|ours|outs|rash|shut|soar|thus
  ["free-meet","free","meet","feet","mere",2,"","","cannot be reversed",8,92,1,4,0], // allWords 5: fete|fret|reef|teem|term
  ["raced-skate","raced","skate","asked","crate",3,"","","asked-crate",12,92,1,4,0], // allWords 17: cadre|cared|carte|caste|cater|cease|cedar|creek|decks|drake|raked|react|stake|steak|taker|takes|trace
  ["cigar-using","cigar","using","icing","sugar",3,"","","icing-sugar",8,92,1,4,0], // allWords 3: argus|ruins|suing
  ["scan-yaks","scan","yaks","asks","cyan",2,"","","asks-cyan",6,82,3,6,0], // allWords 3: cans|sank|yank
  ["altar-three","altar","three","heart","later",4,"","","heart-later",24,92,1,4,0], // allWords 9: alert|alter|earth|ether|hater|latte|teeth|there|theta
  ["cooks-words","cooks","words","corks","woods",1,"","","corks-woods",2,92,1,4,0], // allWords 4: cords|rocks|sword|works
  ["ass-hew","ass","hew","she","was",2,"","","she-was",8,92,1,4,0], // allWords 4: awe|hes|saw|sea
  ["harm-pile","harm","pile","hire","palm",2,"","","hire-palm",3,92,1,4,0], // allWords 15: hale|hare|heal|hear|heir|lamp|leap|limp|pale|pear|pier|plea|ramp|reap|ripe
  ["give-tops","give","tops","pigs","vote",4,"","","pigs-vote",13,92,1,4,0], // allWords 9: pits|poet|post|pots|spit|spot|stop|tips|veto
  ["hazel-rotor","hazel","rotor","hotel","razor",2,"","","hotel-razor",2,92,1,4,0], // allWords 15: alert|alter|altho|earth|hater|heart|later|lathe|loath|ortho|other|razer|retro|terra|torah
  ["tool-unto","tool","unto","lout","onto",4,"","","lout-onto",23,92,1,4,0], // allWords 2: loot|otto
  ["leaf-miss","leaf","miss","aims","self",3,"","","aims-self",9,92,1,4,0], // allWords 12: fail|fame|flea|less|mesa|mess|sail|sale|same|seal|seam|sims
  ["paint-rusty","paint","rusty","input","stray",3,"","","input-stray",17,87,2,5,0], // allWords 20: artsy|pansy|pants|pasty|patsy|punts|rainy|rants|runts|start|strut|sturt|tarts|train|trait|trans|trays|trust|turns|yarns
  ["chunk-trade","chunk","trade","crude","thank",2,"","","crude-thank",3,92,1,4,0], // allWords 17: cadre|cared|cedar|crane|crank|cured|death|hated|neath|raced|rance|rated|thane|thunk|tread|trunk|tuner
  ["newly-parts","newly","parts","reply","wants",4,"","","reply-wants",12,92,1,4,0], // allWords 13: entry|lawns|party|rants|rents|snarl|stern|strap|strep|swept|tawny|trans|traps
  ["seeds-singe","seeds","singe","sends","siege",1,"","","sends-siege",2,92,1,4,0], // allWords 8: dense|geese|genes|needs|sides|signs|sings|snide
  ["new-rip","new","rip","per","win",3,"","","per-win",14,87,2,5,0], // allWords 2: pen|pin
  ["legit-turns","legit","turns","guilt","rents",3,"","","guilt-rents",21,92,1,4,0], // allWords 12: gents|glens|lungs|rites|runts|slung|stern|stung|tiers|tires|tries|trite
  ["after-nixes","after","nixes","faxes","inter",3,"","","faxes-inter",8,92,1,4,0], // allWords 7: fates|feast|feats|inert|inset|irate|stein
  ["chin-mode","chin","mode","demo","inch",2,"","","demo-inch",14,87,2,5,0], // allWords 5: code|coin|deco|dome|icon
  ["ably-disk","ably","disk","bask","idly",3,"","","bask-idly",9,92,1,4,0], // allWords 3: bays|kids|skid
  ["goals-prove","goals","prove","grave","pools",2,"","","grave-pools",3,92,1,4,0], // allWords 11: glare|grove|lager|large|logos|loops|paler|pearl|regal|sloop|spool
  ["ashes-debit","ashes","debit","beast","hides",4,"","","beast-hides",22,92,1,4,0], // allWords 11: baits|bases|basis|bates|beats|debts|haste|hates|heats|saith|sheds
  ["also-mice","also","mice","coal","semi",3,"","","coal-semi",19,92,1,4,0], // allWords 6: ciao|cola|lace|miso|sale|seal
  ["lace-sums","lace","sums","cuss","male",3,"sams","luce","cuss-male",9,92,1,4,0], // allWords 14: aces|case|clue|cues|lame|mass|meal|mesa|mule|muse|same|seam|slam|slum
  ["jolt-pets","jolt","pets","jots","pelt",2,"","","jots-pelt",1,92,1,4,0], // allWords 9: jets|pest|plot|post|pots|spot|step|stop|tops
  ["gen-wok","gen","wok","keg","now",3,"","","keg-now",10,87,2,5,0], // allWords 3: new|own|won
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
  ["ponds-terms","ponds","terms","spend","storm",2,"","","spend-storm",7,92,1,4,0], // allWords 5: dents|drops|proms|romps|tends
  ["keen-nope","keen","nope","keep","none",3,"","","keep-none",9,92,1,4,0], // allWords 5: knee|neon|open|peek|poke
  ["drift-fines","drift","fines","sniff","tired",4,"","","sniff-tired",30,92,1,4,0], // allWords 14: dries|ferns|finds|fires|fries|nerds|refit|rides|riffs|serif|sired|snide|trend|tried
  ["cloak-torch","cloak","torch","clock","torah",1,"","","clock-torah",1,92,1,4,0], // allWords 6: altho|cloth|croak|crock|loath|roach
  ["bop-bug","bop","bug","gob","pub",3,"","","gob-pub",10,87,2,5,0], // allWords 0
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
  ["fix-nor","fix","nor","for","nix",1,"","","for-nix",0,92,1,4,0], // allWords 1: fox
  ["bawl-hulk","bawl","hulk","bull","hawk",2,"","","bull-hawk",2,92,1,4,0], // allWords 5: ball|bulk|hall|hull|lakh
  ["nova-sift","nova","sift","font","visa",4,"","","font-visa",13,87,2,5,0], // allWords 5: fist|fits|sofa|soft|vain
  ["queer-white","queer","white","quiet","where",3,"","","quiet-where",11,92,1,4,0], // allWords 2: quite|threw
  ["euro-hats","euro","hats","oath","sure",3,"","","oath-sure",23,92,1,4,0], // allWords 17: aero|ears|east|eats|eras|hast|hour|huts|rash|ruse|rush|seat|sera|shut|teas|thus|user
  ["batch-genes","batch","genes","bench","gates",2,"","","bench-gates",2,92,1,4,0], // allWords 9: bates|bathe|beans|beast|beats|beets|beset|chang|stage
  ["drove-swamp","drove","swamp","romps","waved",3,"","","romps-waved",10,92,1,4,0], // allWords 16: armed|dream|madre|mares|mores|mowed|overs|proms|ramps|raves|saver|servo|smear|verso|vowed|waves
  ["asks-lamb","asks","lamb","bask","slam",2,"","","bask-slam",7,92,1,4,0], // allWords 2: balm|mass
  ["lingo-wives","lingo","wives","olive","swing",3,"","","olive-swing",9,87,2,5,0], // allWords 11: evils|liens|lines|lives|owing|sling|swine|veils|views|wines|wings
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
  "drop-look": "awkward nerd · closed curve",
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
  "smith-style": "old legends · roof pieces",
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
  "slow-tend": "pond lizard · senior crowd | flip",
  "bunny-tried": "salty sea-like · in key",
  "moss-yeti": "halfway prefix · playthings",
  "baby-name": "pin-up sweetie · a lot",
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
  "diet-lamp": "hand hollow · coastal rhythm | flip",
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
  "did-nib": "offer amount · noisy meal | flip",
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
  "split-wheel": "cast letters · snow shade",
  "array-guide": "make a case · private journal | flip",
  "corn-unit": "small symbol · litter’s smallest | flip",
  "luck-nose": "traffic marker · brood silently | flip",
  "field-greet": "boneless cut · avarice | flip",
  "dusty-idols": "in a strange way · business outfits | flip",
  "bump-host": "give a shove · burial chamber | flip",
  "ick-odd": "medic, briefly · young goat",
  "bevy-rule": "slick helper · extremely",
  "buddy-tells": "male cattle · soft toy | flip",
  "dork-lime": "awkward nerd · green citrus | flip",
  "flit-from": "movie layer · stronghold | flip",
  "asset-heats": "fire remains · condition",
  "nuts-weed": "without clothes · sunset direction | flip",
  "blame-resin": "easy stroll · warning wail | flip",
  "grant-swore": "mountain chain · least good | flip",
  "relay-roman": "cake stratum · grand house | flip",
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
  "ducks-sizes": "measured up · is terrible | flip",
  "date-fury": "obligation · travel charge | flip",
  "rind-tear": "small dent · back end",
  "bar-pot": "steal from · light knock | flip",
  "great-horse": "say yes together · not tall",
  "blind-clack": "dull-tasting · mouse sound | flip",
  "logs-tiff": "suits · club game | flip",
  "bone-pity": "teeth mark · small horse",
  "event-viral": "among · heart flap | flip",
  "felt-kale": "pond edge · departed",
  "paved-rider": "challenged · snake tooth | flip",
  "canon-pores": "tree nut · begins business",
  "opal-role": "spoken · upright stick | flip",
  "flies-natal": "unborn-related · manicure targets | flip",
  "route-steam": "farther outside · groups | flip",
  "lets-sell": "not as much · recount",
  "flip-girl": "make full · hold tightly | flip",
  "false-tiger": "deep sorrow · minimum amount",
  "boxes-there": "ring fighter · nearby ones | flip",
  "calm-teen": "family group · brim over | flip",
  "fresh-usher": "cite · quiet noise | flip",
  "egg-tea": "years lived · obtain",
  "alone-zones": "paths · breathing gas | flip",
  "furl-guns": "breathing organ · wave-rider’s playground",
  "anger-crams": "scope of options · leave in a hurry",
  "packs-tents": "used up · tidy pile",
  "feel-redo": "run away · went on horseback",
  "soul-spit": "lubricates machinery · places down",
  "oddly-share": "distributes cards · water prefix | flip",
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
  "lamps-views": "inner hands · married women",
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
  "cheer-salsa": "takes concern · layered rock",
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
  "pep-top": "house animal · burst sound",
  "cross-story": "prices paid · regretful",
  "asks-lend": "large deer · beach grains",
  "aimed-table": "sheep cry · news channels",
  "late-play": "partner in cause · sticky strip",
  "camp-form": "free ticket · rural holding",
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
  "cats-lung": "thick mass · image capture | flip",
  "also-pops": "mistake sound · hit sharply",
  "amok-clef": "tree part · imitate | flip",
  "local-ropes": "reef growth · upright sticks",
  "space-world": "large group · brief delay",
  "blue-eons": "slick helper · units",
  "enjoy-names": "denim trousers · cash",
  "alp-ice": "headwear · fib | flip",
  "beef-wine": "existed · spouse | flip",
  "ours-pity": "saliva verb · belonging to you",
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
  "loop-tips": "swimming spot · saliva verb",
  "faith-mount": "losing colour · oral opening | flip",
  "not-yet": "number after nine · plaything | flip",
  "later-these": "old knock-out gas · roof layer",
  "chive-foist": "move a bit · sound",
  "bare-bibs": "infant · chest catchers | flip",
  "lamp-lilt": "hand hollow · up to",
  "spear-swath": "routes · has on | flip",
  "deal-plug": "not sharp · sheet",
  "coins-sings": "marks · sound-related",
  "dork-rope": "pig meat · travelled",
  "pay-pet": "light knock · yes, casually | flip",
  "burnt-super": "savage · reject sharply | flip",
  "diet-ones": "revise text · ages",
  "gaps-swim": "charts · gulp",
  "boost-pores": "footwear · ordinary writing | flip",
  "bury-tone": "short message · red gem | flip",
  "about-gross": "fake · cooked meat",
  "adds-doze": "stuns · uneven chances | flip",
  "pair-some": "verse piece · draped garment | flip",
  "drugs-spiky": "awkwardly thick · dangers",
  "named-react": "carrying weapons · put into effect | flip",
  "cops-silk": "defeat · choice | flip",
  "daddy-wraps": "pulls · rice field | flip",
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
  "are-bus": "period · sandwich filler | flip",
  "malls-takes": "little · pointed stick",
  "sorts-viper": "upright poles · flowing water | flip",
  "holy-leap": "survey result · casual yes | flip",
  "grace-spare": "vine bunch · frighten",
  "coal-rare": "land measure · spoken | flip",
  "merge-raven": "noodle soup · edge",
  "fell-grid": "dropped · young woman",
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
  "fits-pass": "folds suddenly · screening tool | flip",
  "roman-table": "sheep cry · estate house",
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
  "pep-ray": "for each · chatter",
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
  "know-then": "car horn sound · pond lizard | flip",
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
  "goner-tunes": "type group · male singing voice | flip",
  "flow-tide": "revise text · wild canine",
  "ahead-rates": "zones · loathed",
  "back-fast": "warm in sun · true detail | flip",
  "kill-rage": "young woman · body of water",
  "cup-god": "medic, briefly · deity",
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
  "roll-wait": "flatbread · barrier | flip",
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
  "nova-size": "travel document · area",
  "dawn-tied": "not alive · matching sibling | flip",
  "shark-shown": "sells aggressively · head spikes | flip",
  "add-won": "father · possessed | flip",
  "mills-stork": "ends lives · tempest | flip",
  "dull-puts": "fine powder · tug | flip",
  "nifty-tasks": "greasy · drops below | flip",
  "sent-vary": "fleet colour · pause | flip",
  "does-mood": "extinct bird · a few | flip",
  "menus-toned": "raised lump · young people | flip",
  "torch-viper": "thrower’s aim · wandering explorer | flip",
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
  "early-roman": "ordered set · citrus fruit",
  "bed-kit": "wager · young goat",
  "reds-talk": "lacking light · permits",
  "bits-lied": "wait calmly · catalogue",
  "malls-reset": "little · woody plants",
  "sport-tease": "one who consumes · upright poles",
  "pile-teem": "fruit skin · clock measure",
  "arose-metro": "ardent lover · fixed gaze",
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
  "fetal-salts": "apartments · take secretly | flip",
  "cave-pigs": "missing spaces · bad habit | flip",
  "jab-lob": "paid role · work room | flip",
  "daddy-tapes": "calendar fruits · rice field",
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
  "fits-goat": "screening tool · Roman robe",
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
  "demo-soon": "state of mind · units",
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
  "kiwi-site": "carved idol · sensible",
  "calm-seed": "dressed in · appear",
  "cross-singe": "crude total · from then",
  "haven-lemur": "person · simple machine",
  "dud-eel": "owed · guided",
  "font-tear": "Greek cheese · ripped",
  "cents-wills": "smell trace · sloppy drink",
  "mess-twin": "bird home · move in water",
  "boom-stop": "mistake sound · burial chamber",
  "fires-noble": "skeleton pieces · long-barrel firearm | flip",
  "pass-ruby": "put underground · folds suddenly | flip",
  "gosh-pipe": "bishop of Rome · deep breath",
  "hoped-rites": "self-respect · those ones",
  "are-pep": "imitate · for each",
  "bolt-fund": "short soft hit · crease",
  "oils-riot": "earth · musical three",
  "blast-swiss": "delight · hits sharply",
  "king-sets": "receives · drain down",
  "blank-great": "gloomy · award money",
  "logs-odds": "canines · senior crowd | flip",
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
  "caw-yes": "moment, briefly · route",
  "horns-steer": "riding animal · severe",
  "leap-pins": "earnest request · rotate",
  "align-every": "supplied · team handoff",
  "held-lone": "opening · loan out",
  "tide-till": "eating plan · sing-song rhythm",
  "artsy-corps": "fencing block · northern Britons",
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
  "arbor-metro": "sweeping tool · earth",
  "tom-win": "cut grass · tiny egg",
  "attic-poles": "eyepiece-related · stories",
  "glow-pray": "increase in size · stage action",
  "pills-three": "old knock-out gas · scatter liquid",
  "games-tight": "entry barriers · strength",
  "drop-feet": "not shallow · stronghold",
  "deeds-suing": "type group · took a position",
  "dame-poet": "calendar day · verse piece",
  "bury-tens": "fishing meshes · red gem",
  "bops-cafe": "minor lies · walking speed",
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
  "coo-end": "medic, briefly · single unit",
  "deaf-mint": "locate · sports side",
  "glue-roof": "silly mistake · regulation",
  "crate-slate": "minimum amount · respond",
  "grams-plane": "light sources · scope of options",
  "dork-life": "ordinary people · fairground turn",
  "baton-solar": "nose-related · automated worker | flip",
  "hags-lend": "clock pointer · table supports | flip",
  "ally-dibs": "without effort · science rooms | flip",
  "noses-tiger": "doomed person · web locations",
  "bus-rid": "give a nickname · polite address",
  "rival-voter": "wanderer · essential",
  "item-monk": "make loops · office note | flip",
  "drum-fail": "two-part · not soft",
  "pipes-torch": "thrower’s aim · cords",
  "eats-frog": "therefore · quick | flip",
  "oval-oven": "deep affection · starburst",
  "enact-grows": "points tally · nasal ring",
  "alter-drops": "less young · snares | flip",
  "devil-erase": "perfect model · tennis delivery",
  "bag-hat": "night flyer · old crone",
  "base-semi": "slanted view · appear",
  "host-isle": "catalogue · footwear",
  "blows-truce": "card suit · put in words | flip",
  "chase-outer": "reason · different",
  "cups-suck": "swear crudely · hockey disk | flip",
  "flair-trout": "baking powder · character feature",
  "knee-stat": "bird home · seize",
  "balls-niece": "thick wire · rows of text | flip",
  "birds-toned": "formal ties · ready for bed | flip",
  "aid-gob": "big snake · excavate",
  "leap-mean": "label · washed-out shade | flip",
  "gifts-waves": "hands over · drifts gently | flip",
  "cogs-gene": "breakfast shells · one time | flip",
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
  "rode-suit": "flatbread · took to court",
  "east-wind": "first light · joins together",
  "beans-piled": "lose blood · aches | flip",
  "gear-oops": "years lived · not wealthy",
  "film-tens": "fresh herb · inner person",
  "alp-eye": "slippery fish · wages",
  "beam-foot": "deep sound · impressive act",
  "dude-zone": "light sleep · without clothes",
  "kicks-songs": "monarchs · foot warmers | flip",
  "meets-notch": "arrives · ordinal after ninth | flip",
  "nose-user": "units · certain",
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
  "nit-per": "tear sharply · number after nine | flip",
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
  "grade-reset": "border lines · earth",
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
  "cling-props": "snips · fork tine | flip",
  "dunk-nope": "network point · rebellious type",
  "fill-lout": "against rules · sing-song rhythm",
  "nifty-talks": "greasy · connections",
  "aids-deer": "peruse · team half",
  "chunk-slash": "metallic rattle · quiet noise | flip",
  "areas-kinds": "thoughts · status levels",
  "all-way": "leather punch · place down",
  "roles-world": "dryly funny · promised aloud",
  "joke-wash": "tease gently · funeral vigil",
  "lease-warns": "more recent · spicy dance | flip",
  "idol-lads": "number wheel · senior crowd",
  "honk-item": "pig sound · those people",
  "loans-rumor": "moon-related · chambers | flip",
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
  "bowl-legs": "mouthfuls · healthy",
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
  "abet-eons": "rhythm pulse · units",
  "into-tusk": "make loops · dismissals",
  "curve-poles": "hints · show true",
  "denim-roman": "not adult · called",
  "doom-furl": "beat keeper · silly person",
  "agree-usage": "rub out · measuring dial",
  "lens-team": "dinner portion · dispatched",
  "glen-snow": "not short · current reports",
  "nib-wow": "front bend · prevail",
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
  "baron-swiss": "foundation · under oath",
  "hey-out": "definite article · second person",
  "babe-lips": "baby overalls · washed-out shade",
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
  "new-rip": "for each · prevail",
  "legit-turns": "remorse · leases",
  "after-nixes": "sends by machine · among",
  "chin-mode": "trial version · tiny measure",
  "ably-disk": "warm in sun · without effort",
  "goals-prove": "serious · swimming spots",
  "ashes-debit": "wild creature · conceals",
  "also-mice": "black fuel · halfway prefix",
  "lace-sums": "swear crudely · not female",
  "jolt-pets": "quick notes · animal hide",
  "gen-wok": "barrel · at present",
  "claws-cruel": "hints · move low",
  "agile-saved": "to one side · judge’s mallet",
  "chef-skin": "sea creature · collar part",
  "bases-cable": "spills secrets · stop",
  "acids-trees": "quotes as evidence · peruses",
  "ears-with": "inheritor · quick hit",
  "flee-list": "small island · departed",
  "pipes-ranks": "sharpshooter · bright flash",
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
  "cloak-torch": "timepiece · sacred teaching",
  "bop-bug": "mouthful · local bar",
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
  "nova-sift": "type style · travel permit | flip",
  "queer-white": "hushed · location question",
  "euro-hats": "solemn promise · certain",
  "batch-genes": "long seat · entry barriers | flip",
  "drove-swamp": "plays noisily · gestured",
  "asks-lamb": "warm in sun · door-bang | flip",
  "lingo-wives": "green fruit · playground arc",
};

const clueBonusWords = {
  "hill-hunt": ["thin"],
  "daddy-rises": ["dares","dries","reads","ready","rides","sears","sides","sired","years"],
  "brain-tarot": ["abort","tabor","train"],
  "debt-life": ["belt","bile","feed","feel","file","flee","flit","left","lift"],
  "filth-safer": ["earls","fares","farts","fears","feral","fires","first","flare","flier","flirt","fries","hales","halts","heals","leash","rafts","reals","rifle","rifts","serif","shaft","shale","shalt","sheaf","shift"],
  "relax-tasty": ["artsy","early","exalt","layer","leary","relay","satay","taxes","texts","trays","tyres","years","yeast"],
  "keen-spin": ["pens","pink","pins","seen","sine"],
  "lies-toes": ["isle","lose","ties"],
  "drop-look": ["polo","pool","prod"],
  "cry-sea": ["ace","car"],
  "dates-ledge": ["dales","deals","deeds","gated","glade","leads","least","slate","sleet","stade","stale","stead","steed","steel","tales"],
  "gate-rice": ["acre","care","race","rate","rite","tear","tier"],
  "nest-sift": ["fits","nets","sets","sits","tens","tins"],
  "bread-known": ["bared","baron","beard","board","broad","drake","raked"],
  "fail-into": ["flat","font"],
  "fade-peel": ["deaf","deep","feel","flea","fled","flee","leaf","leap","peed","plea"],
  "goose-paths": ["gates","ghost","paste","pasts","pesto","poets","posts","septa","soaps","spate","spats","spots","stops","tapes"],
  "caves-coral": ["acres","cares","clear","clove","cores","orcas","sacra","scare","score"],
  "alloy-upset": ["alley","allot","atoll","leapt","least","lotus","lousy","paste","petal","plate","pleat","septa","slate","soapy","spate","spout","stale","steal","tales","tapes","tulle"],
  "era-war": ["ear"],
  "shell-stall": ["hells","shall"],
  "enact-their": ["chart","cheer","crane","inert","rance","reach","taint","teach","titan","tithe","train"],
  "body-cure": ["bore","core","cory","deco","ecru","robe","ruby"],
  "maple-table": ["amble","ample","bleat","leapt","petal","pleat"],
  "bulk-lime": ["bile","blue","kill","mile","mule"],
  "nuts-pack": ["ants","cans","caps","past","pats","puck","puts","scan","spat","stun","taps"],
  "earth-kills": ["aster","earls","hater","islet","karts","laser","lathe","least","lisle","rates","reals","rites","skirt","slate","stale","stalk","stare","stark","steal","tales","talks","tears","their","tiers","tiles","tires","tries"],
  "meet-shut": ["huts","meth","mute","tees","them"],
  "maps-swig": ["aims","amps","gasp","pass","saps","wigs"],
  "new-old": ["den","doe","owe","owl"],
  "grab-wild": ["brag","drag","draw","grad"],
  "smith-style": ["emits","islet","items","limes","miles","mites","slime","smile","smite","times"],
  "guide-mines": ["denim","dings","genie","genus","menus","minds","nudge","singe"],
  "drug-mood": ["dodo","doom","dorm","rudd"],
  "bean-fart": ["abet","bane","beat","beta","bran","brat","fate","fern","feta","frat","fret","raft"],
  "actor-under": ["adorn","cadre","cared","carte","cater","cedar","court","crate","crude","cured","cuter","raced","radon","trace","truce","tuner"],
  "grew-wore": ["ergo","gore","ogre"],
  "ended-poets": ["dense","dents","depot","doped","dopes","dotes","pesto","posed","spend","spent","teens","tends","tense"],
  "down-glue": ["duel","gown","lewd","udon","undo","weld"],
  "din-won": ["now","own"],
  "nasal-tense": ["asset","atlas","eaten","lanes","lasts","leans","least","salts","seats","senna","slant","slate","slats","stale","steal","tales","tease","teens"],
  "angle-bowls": ["angel","below","blows","bowel","glean","globe","goals","lawns"],
  "cram-sets": ["aces","arcs","arms","came","case","mace","mars","mesa","rams","same","scar","seam","seas","sect"],
  "slow-tend": ["dent","does","dose","dote","ends","lows","news","owes","owls","send","sewn","sold","told","went","woes"],
  "bunny-tried": ["bride","entry","tired","trend","unity"],
  "moss-yeti": ["emit","item","mess","miso","most","stem","time"],
  "baby-name": ["amen","bane","beam","bean","mane","mean"],
  "firm-sons": ["fins","from","rims"],
  "isle-lazy": ["lies","sell","zeal"],
  "atlas-erase": ["asset","earls","laser","lasts","least","reals","reels","salts","saree","sears","seats","slate","slats","sleet","steal","steel","tales","tease"],
  "buck-laws": ["awls","back","cabs","lack","luck"],
  "relay-renew": ["early","leary","yearn"],
  "dial-rats": ["aids","airs","arts","lair","liar","rail","said","sari","stir","tsar"],
  "fools-teeth": ["flees","hotel","sleet","steel","stole","stool","tools","toots","totes"],
  "naive-shade": ["aside","hades","haves","heads","hides","hives","ideas","shave"],
  "flesh-walls": ["falls","false","fells","fleas","leafs","safes","shawl","sheaf","shelf","swell","welsh","whale"],
  "spark-strip": ["karts","parts","skirt","stark","strap","traps"],
  "urges-verse": ["guess","reeve","reuse","serve","sever","surge","veers"],
  "cave-time": ["came","emit","item","mace","meat","meta","mice","tame","team"],
  "rebel-stout": ["beets","beret","beset","blues","blurt","brute","butts","lotus","louse","otter","rebut","route","ruble","stole","totes","touts","trout","tuber","tubes","tutor"],
  "cold-pool": ["clod","loco","loop","poll","polo"],
  "ghost-salon": ["gloat","goats","lasts","loans","salts","shoot","shots","slang","slats","sloth"],
  "chat-seek": ["cake","eats","hack","hast","hats","sake","seat","teas","tees"],
  "rare-snow": ["aero","ears","eons","eras","nose","ones","sera","wars","worn"],
  "amen-bait": ["amin","bane","bean","beat","beta","mane","mate","mean","meat","meta","mina","name","tame","team"],
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
  "older-rocks": ["close","cooks","cores","corks","crook","crore","doers","dorks","rodeo","score"],
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
  "over-then": ["hone","oven"],
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
  "ick-odd": ["cod","did"],
  "bevy-rule": ["blue","ever","lure","reel","rely"],
  "buddy-tells": ["bells","belly","bully","telly"],
  "dork-lime": ["demo","dime","dire","dirk","dome","lore","mile","mode","mole","redo","ride","role"],
  "flit-from": ["firm","form","lift","loft","rift"],
  "asset-heats": ["eases","haste","hates","seats","sheet","stash","stats","taste","tease","these","theta"],
  "nuts-weed": ["dent","dune","need","nest","nets","seen","sent","stew","stun","tend","tens"],
  "blame-resin": ["ramen","realm","reins","rinse","risen"],
  "grant-swore": ["anger","earns","goner","nears","rager","rants","rears","roger","senor","snare","snore","snort","straw","swear","towns","trans","twang","wager","wants","wares","warts","wears","worse"],
  "relay-roman": ["early","learn","leary","mayor","moray","ramen","renal","royal"],
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
  "ducks-sizes": ["dicks"],
  "date-fury": ["dare","dear","duet","fate","fear","feat","feta","fray","read","rude","yard"],
  "rind-tear": ["arid","dare","date","dear","dent","nerd","raid","rare","rate","read","rent","tend","tern"],
  "bar-pot": ["bat","bot","bra","bro","opt","pat","pro","rap","tab","top"],
  "great-horse": ["eager","earth","ethos","gator","goers","grate","hater","heart","heres","heros","horst","ogres","rager","serge","sheer","shore","those","torah"],
  "blind-clack": ["black","blank","blink","clank","clink"],
  "logs-tiff": ["fist","gift","gist","sift","soft"],
  "bone-pity": ["bony","nope","open","pine","poet","typo"],
  "event-viral": ["alive","avert","inert","irate","leave","liner","liven","ravel","rival","vitae"],
  "felt-kale": ["feel","flat","flea","flee","keel","leaf","leak","leek","talk"],
  "paved-rider": ["adder","diver","drape","dread","dried","drier","drive","padre","pared","pride","raver","river"],
  "canon-pores": ["acres","apron","canes","cares","cones","cores","crane","crone","nance","orcas","panes","parse","pears","porno","poser","prone","prose","races","rance","recon","ropes","scare","scone","score","snoop","spare","spear","spoon","spore"],
  "opal-role": ["aero","lore","pear","poll","reap","roll"],
  "flies-natal": ["alien","anise","fails","fatal","fates","feast","feats","files","flail","flats","liens","lines","slain","slant","snail"],
  "route-steam": ["amour","eater","mates","meats","metro","tamer","tease","tomes","utter"],
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
  "feel-redo": ["fled","reel"],
  "soul-spit": ["lips","outs","pits","plus","slip","soil","tips"],
  "oddly-share": ["adore","dales","dares","hales","hares","heals","hears","herds","holed","horde","leads","leash","reads","sadly","shale","shear","shred","yards"],
  "cafe-lake": ["cake","flea","leaf","leak"],
  "bells-flash": ["bales","bases","bless","falls","false","fells","fleas","leafs","sable","safes","sheaf","shelf","slabs"],
  "cans-pick": ["pack","pans","pics","pink","pins","scan","snap","snip","span","spin"],
  "pen-toy": ["net","ten","ton","yet"],
  "draw-pins": ["aids","raps","said","spin","warp","wind","wrap"],
  "gravy-pearl": ["glare","lager","large","paler","payer","regal","repay"],
  "lily-mere": ["mile","reel","yell"],
  "drill-store": ["drier","droll","islet","lilts","loser","older","order","rider","riled","riser","rites","roles","still","stole","tiers","tiled","tiles","tills","tires","tolls","tried","tries"],
  "fair-loud": ["dial","dual","idol","lair","liar","ludo","rail"],
  "roads-steel": ["alert","alter","arose","asset","aster","darts","doers","doses","ester","later","least","older","rates","reset","seats","slate","sleet","sodas","stale","stare","steal","tales","tears","terse","trees"],
  "bare-down": ["barn","bear","born","bran","dare","darn","dear","owed","rand","read","redo","robe","rode","wade","wand"],
  "pools-tides": ["diets","dopes","dotes","plods","poise","polis","posed","sited","sloop","spied","spoil","spool","stool","toils","tools"],
  "ape-arc": ["are","car","era","pac"],
  "seen-sets": ["nest","sent","tens"],
  "modes-polar": ["demos","domes","dopes","lopes","molar","moles","morel","pedro","poles","roped","slope"],
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
  "died-note": ["dine","dint","done","dote","edit","tide","tied","tone"],
  "name-team": ["mana","mane","mate","mean","meet","meta","tame","teem"],
  "crowd-large": ["glare","lager","lower","regal"],
  "fiery-stand": ["artsy","darts","dents","draft","dries","fairy","fiend","fired","fried","nasty","raids","rides","sired","snide","tends","trays","tyres"],
  "doom-spot": ["moos","post","pots","stop"],
  "scamp-scent": ["scant"],
  "clown-three": ["cheer","ether","there","towel"],
  "dean-rent": ["date","dent","earn","rate","tear","tern"],
  "rate-slip": ["east","eats","lest","lets","lies","lips","pair","part","past","pats","seat","spat","taps","tarp","tear","teas"],
  "blind-crank": ["bland","blank","blink","brink","clank"],
  "buck-case": ["aces","back","base","bask","cask","cues","suck"],
  "paste-rests": ["aster","ester","pasts","pests","rates","reset","septa","spate","spats","stars","steep","steer","tapes","tears","terse","trees"],
  "each-kegs": ["aces","ache","ages","case","cask","ghee","hack","sack"],
  "eye-its": ["set","sit","tee"],
  "waft-wine": ["anew","twin"],
  "sinks-torch": ["chins","cross","honks","knits","knots","shirk","skins","skirt","stink","stork","think"],
  "gouge-nerve": ["goner","gorge","green","grove","never","venue","verge"],
  "demo-jobs": ["dome","doom","mode","mods","mood"],
  "roof-urge": ["ergo","four","gore","ogre"],
  "freed-guest": ["defer","dregs","fetus","feuds","frets","greed"],
  "pope-says": ["apes","easy","pass","pays","peas","pops","saps"],
  "swim-test": ["emit","item","semi","sets","site","stem","ties","time","wits"],
  "picks-renew": ["ceres","cries","epics","newer","pines","pinks","reins","resin","rinse","risen","siren","sneer","snipe","speck","spice"],
  "ask-rid": ["ads","aid"],
  "lets-yowl": ["lest","lost","lots","lows","owls","slew","slot","slow","tell","toll"],
  "hall-mini": ["amin","hail","lima","mail","mall","mill","mina"],
  "annoy-weird": ["aired","anode","drain","nadir","wider","wired","yearn"],
  "bases-title": ["asset","bales","bates","beast","beats","bites","blast","bleat","bliss","islet","lasts","latte","least","lists","sable","salts","seats","slabs","slate","slats","slits","stale","state","steal","stilt","tales","taste","tease","tiles","tilts"],
  "notes-pores": ["onset","pesto","poets","poser","prose","senor","seton","snore","spore","stone"],
  "dash-kind": ["adds","dads","dank","dish","hank","hind","khan","kids","skid"],
  "the-war": ["ate","awe","eat","rat","raw","tea"],
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
  "gnome-steal": ["angel","angle","glean","gloat","lanes","leans","least","loans","melts","omens","salon","slate","smelt","stale","tales","tease","tomes"],
  "close-shift": ["chose","clots","colts","files","fitch","flies","flits","hoses","hosts","isles","lifts","lists","lofts","loses","shoes","shots","slice","slits","soles"],
  "amid-cake": ["maid","mice"],
  "cheer-salsa": ["aches","acres","ashes","chase","clash","clear","earls","erase","hales","heals","heres","laser","leach","leash","races","reals","saree","scare","sears","sheer","slash"],
  "flare-skits": ["earls","faker","feral","fetal","filet","flats","flier","flits","freak","frisk","islet","kites","laser","lasts","least","lifts","lists","rakes","reals","risks","salts","skate","skier","slate","slats","slits","stake","stale","steak","steal","takes","tales","tiles"],
  "foot-lead": ["alto","dale","deal","dole","fade","fate","feat","feta","food","late","load","loot","tale","teal"],
  "back-nuts": ["ants","bats","buck","bust","cabs","cans","scan","stab","stun","tabs"],
  "ran-you": ["nor"],
  "gaps-tiff": ["fast","fats","figs","fist","fits","gasp","past","pats","pigs","pits","sift","spat","spit","taps"],
  "fame-logo": ["foam","gale","goal","lame","loom","male","mole"],
  "chess-flick": ["check","chick","click","hicks","licks"],
  "grid-tale": ["dirt","gale","gird","late","rite","teal","tier"],
  "ruler-seven": ["evens","lures","nerve","reels","serve","sever","veers","verse"],
  "canal-glory": ["coral","largo"],
  "heel-roll": ["hole","lore","reel"],
  "corps-tense": ["ceres","cones","cores","creep","crepe","cress","crops","cross","ester","nests","notes","onset","ponce","ports","prost","reset","rests","scene","scone","score","seton","spent","sport","steer","stone","store","strep","teens","terse","tones","trees","trope"],
  "rises-salon": ["earls","earns","irons","lanes","laser","lasso","leans","learn","liens","liner","lines","lions","loans","loins","nears","reals","reins","renal","resin","rinse","risen","sales","seals","sears","silos","siren","snare","soars","soils","solar","sonar"],
  "tip-way": ["pat","paw","tap"],
  "clear-winds": ["cairn","cider","cried","laces","lawns","scale","swain","weird","welds","wired"],
  "amen-seat": ["eats","mana","mane","mans","mast","mate","mats","meat","meta","name","sane","seen","stem","tame","team","teas","tees"],
  "bin-tip": ["nit","tin"],
  "straw-years": ["artsy","satay","sears","stars","swear","trays","wares","warts","warty","weary"],
  "board-decor": ["abode","adder","adobe","adore","bared","barre","beard","bread","broad","coder","credo","dared","dread"],
  "plot-weak": ["peak","peat","plat","poke","tape","wake","woke"],
  "panic-total": ["actin","attic","canto","cotta","optic","pilot","plain","tacit","talon","tonal","tonic"],
  "glue-only": ["glen","noel"],
  "clad-wool": ["clod","coal","cola","cold","cool","loco","wall"],
  "siren-songs": ["grins","gross","nines","reins","resin","rinse","risen","rises","roses","senor","signs","sings","snore","sores"],
  "busy-toll": ["boys","buys","lost","lots","lust","slot","slut"],
  "cafe-mode": ["aced","code","dame","deco","demo","fame","made","mead"],
  "pep-top": ["opt","pot"],
  "cross-story": ["scots","sorts"],
  "asks-lend": ["dean","lens","sake","sane","sans"],
  "aimed-table": ["abide","debit","mated","metal","tamed","timed"],
  "late-play": ["leap","pale","peat","pelt","plea","tale","teal","tell"],
  "camp-form": ["carp","cram","crop","from"],
  "spurn-steak": ["aunts","panes","perks","rents","runts","skate","speak","stake","stern","takes"],
  "role-want": ["anew","earn","lear","lore","lowe","near","rant","real","torn"],
  "edits-error": ["diets","doers","rites","sited","tides","tiers","tired","tried","trier","tries"],
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
  "lime-rely": ["mile","reel","yell"],
  "nerve-salad": ["areas","arena","dales","dares","deals","easel","elves","erase","laden","lease","navel","never","raves","reads","salve","saree","saver","serve","sever","slave","veers","verse"],
  "gates-lacks": ["laces","least","scale","slack","slate","stage","stale","stalk","steal","tales"],
  "meet-step": ["pest","tees","temp","test"],
  "feed-kale": ["deaf","feel","flea","fled","flee","lake","leaf","leak","leek"],
  "find-post": ["dips","fits","fond","font","pint","pits","pods","pots","sift","soft","spit","spot","stop","tips","tops"],
  "cats-lung": ["acts","cans","cast","cuts","last","lust","salt","slut"],
  "also-pops": ["alps","laps","opal","pals","plop","poop","soap"],
  "amok-clef": ["fame","flea","foal","foam","kale","lake","leak","loaf","lock","make"],
  "local-ropes": ["cello","close","coals","cores","lopes","orcas","polar","pores","poser","prose","score","slope","spore"],
  "space-world": ["capes","cords","cores","leaps","loads","lords","loser","lower","paces","pales","pleas","roles","scape","score"],
  "blue-eons": ["bone","lens","nose"],
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
  "aunt-item": ["emit","mate","meat","meta","mint","tame","tate","time","tint","tuna"],
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
  "diet-ones": ["dent","dies","ends","nose","note","send","side","tend","tide","tied","tone"],
  "gaps-swim": ["aims","amps","gasp","pass","saps","wigs"],
  "boost-pores": ["bores","ports","poser","prost","robes","ropes","sober","spore","sport","stoop","trope"],
  "bury-tone": ["bone","bony","bore","robe","tore","tory","troy","true","tune","yurt"],
  "about-gross": ["boast","boats","grout","soars"],
  "adds-doze": ["dads","dead","dosa","soda"],
  "pair-some": ["airs","arms","mars","mesa","prom","ramp","rams","romp","same","seam"],
  "drugs-spiky": ["gipsy","grids","risky","skips"],
  "named-react": ["amend","cadre","carat","cared","carte","cater","cedar","crate","dance","dream","eared","eaten","eater","madre","meant","meter","metre","raced","tamer","trace"],
  "cops-silk": ["lick","lock","pics","skip"],
  "daddy-wraps": ["wards"],
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
  "are-bus": ["ear"],
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
  "chaos-meter": ["aches","cease","chest","erect","harem","meets","metre","moths","reach","roach","shame","tomes","torch"],
  "lean-rain": ["earn","lane","lien","line","rein"],
  "east-poet": ["eats","past","pats","peat","post","pots","seat","spat","spot","stop","taps","teas","tops"],
  "great-heats": ["agate","earth","gears","grate","hares","haste","hater","hates","hears","rages","share","shear","sheet","stage","teeth","these","theta","trash"],
  "empty-mills": ["islet","lisle","piety","piles","plies","smell","smelt","spiel","spite","stipe","temps","tiles"],
  "kink-news": ["sewn","sink","wink","wins"],
  "salt-work": ["arts","last","lost","lots","rats","slot","star","tsar","wart"],
  "parts-spins": ["pains","spits","stars","traps"],
  "pit-raw": ["art","pat","paw","rat","tap"],
  "cents-teams": ["caste","mates","meats","state","stent","taste","tents"],
  "bezel-saint": ["aisle","inset","liens","lines","nails","satin","slain","snail","stain"],
  "guns-ragu": ["gnus","rags","rugs","runs","sang","snag","snug","sung"],
  "amend-worry": ["adore","adorn","anode","armed","dream","drown","madre","named","radon","rayon","rowed"],
  "clad-cram": ["clam"],
  "lord-lube": ["blue","lobe","lore","lure","role"],
  "bacon-tubes": ["ascot","babes","banco","bates","beast","beats","boast","boats","bouts","canto","caste","coast","coats","count","enact","scout","tacos"],
  "lied-wise": ["deli","idle","isle","lids","slid"],
  "dogs-life": ["digs","logs"],
  "bug-new": ["beg","gen","gnu"],
  "breed-spoke": ["bored","doers","dopes","dorks","keeps","peeks","pokes","posed","reeds","reeks"],
  "seal-sets": ["lest","sale"],
  "fits-pass": ["fast","fats","fist","past","pats","pits","spat","spit","taps","tips"],
  "roman-table": ["abate","baron","baton","manta","metal","morel","motel","realm"],
  "fate-nest": ["ante","ants","fast","fats","feat","fees","feet","feta","fete","neat","nets","sane","seen","sent","teen","tens"],
  "lemur-paste": ["least","lures","metal","parts","pause","purse","rules","septa","slate","sleet","spate","stale","steal","steel","strap","strep","super","supra","tales","tapes","tramp","traps"],
  "sees-yaks": ["easy","keys","seas"],
  "knots-scalp": ["casts","claps","clasp","class","costs","lacks","locks","pacts","pants","plank","scots","slack","stack","stank","tacks","tanks"],
  "bill-fist": ["fits","flit","libs","lift","sift"],
  "baa-bro": ["bra","rob"],
  "lets-loop": ["lest","lose","lost","lots","plot","pole","polo","pool","slot","sole"],
  "frond-unity": ["donut","drift","forty"],
  "genes-toast": ["asset","gases","gates","gents","nests","notes","onset","sages","seats","seton","songs","stage","state","stent","stoat","stone","taste","tease","teens","tenet","tents","tones","tongs"],
  "filed-metal": ["admit","fated","fella","fetal","field","flail","fleet","mated","mille","tamed","timed"],
  "drop-user": ["opus","ours","pods","prod","pure","rods","ruse","soup","sour","sped","sure"],
  "purge-roses": ["goers","grope","gross","ogres","pesos","pores","poser","poses","posse","prose","puree","purse","reuse","roger","rupee","sores","spore","super","urges","users"],
  "pep-ray": ["pay","rap","yep"],
  "boss-memo": ["mobs","moms","moos","moss","sobs","some"],
  "lasts-yelps": ["palsy","plays","salts","salty","slaps","slats","stall","style","tells"],
  "blab-toll": ["alto","ball","blot","boat","bolt"],
  "dame-male": ["dale","deal","lead","mead","meal"],
  "awash-elves": ["easel","hales","halve","heals","lease","sales","salsa","salve","seals","shale","slave"],
  "aisle-corps": ["close","crisp","crops","epics","lasso","liars","opera","pairs","price","relic","sails","scrip","sepia","slice","soaps","solar","spice"],
  "elks-lung": ["lens"],
  "bore-even": ["born","robe","verb"],
  "eon-why": ["now","one","won"],
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
  "shear-villa": ["aisle","alias","alive","arise","avail","hales","halls","halve","hares","heals","hears","leash","liars","liver","rails","raise","rival","shall","share"],
  "swan-taxi": ["wait"],
  "fat-moo": ["mat","moa"],
  "spurn-stuck": ["runts","tucks"],
  "drops-hooks": ["shook"],
  "fame-pass": ["amps","apes","peas","saps"],
  "lamb-pure": ["balm","blur","burp","lame","lear","lure","male","meal","mule","pear","real","reap","rule"],
  "goner-tunes": ["notes","onset","seton","stone","toner","tones","tuner"],
  "flow-tide": ["diet","fled","tied"],
  "ahead-rates": ["aster","death","eared","erase","hares","haste","hates","heard","hears","heats","heres","rated","saree","share","shear","sheer","stare","tears","trade","trash","tread"],
  "back-fast": ["bats","fats","stab","tabs"],
  "kill-rage": ["earl","gear","kale","leak","lear","like","real"],
  "cup-god": ["cod","cop","cud","dog","dug"],
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
  "roll-wait": ["lair","liar","rail","riot","tori","trio"],
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
  "gates-miner": ["anger","emits","grate","great","items","mates","means","meats","mensa","merit","mines","mites","mitre","ramen","range","reign","remit","singe","smite","stage","steam","tamer","teams","timer","times"],
  "issue-ought": ["ghost","gusto","hoses","hosts","house","shoes","shots","sight","south","suits","tough"],
  "lamp-lots": ["last","lost","palm","plat","salt","slot"],
  "bawl-slip": ["awls","bail","blip","laws","lips","paws","sail","wasp"],
  "rings-speak": ["arise","grins","parse","peaks","pears","prank","rains","raise","sarin","signs","sings","snaps","spank","spans","spare"],
  "fatal-slink": ["alias","atlas","flail","kilns","links","nails","slain","slant","snail","stall","stank","talks","tanks"],
  "nova-size": ["oven","vain","vein","vine"],
  "dawn-tied": ["ante","date","dean","died","diet","dine","edit","neat","tide","wand","want","wind"],
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
  "bro-law": ["boa"],
  "heats-waves": ["haste","hates","haves","waste"],
  "gases-might": ["emits","gates","items","mages","masse","mates","maths","meats","mites","sages","seams","semis","shams","sighs","smash","smite","smith","stage","steam","teams","times"],
  "case-mask": ["aces","cask","mesa","seam"],
  "goof-norm": ["mono"],
  "bench-pasta": ["bates","beast","beats","capes","chaps","paces","paste","paths","scape","septa","space","spate","tapas","tapes"],
  "gang-used": ["dang","dues","eggs","gage","gnus","guns","snug","sued"],
  "clean-pills": ["calls","cline","laces","lance","lapis","lapse","leaps","pales","panel","penal","piles","plane","pleas","plies","scale","sepia","slice","spell","spiel","spill"],
  "knew-spin": ["pens","pins","sewn","snip","wink","wins"],
  "early-roman": ["arena","enrol","layer","learn","leary","loner","lorry","manor","mayor","melon","moray","relay","renal"],
  "bed-kit": ["bid","bit"],
  "reds-talk": ["drek","lark","lars","last","lest","salt"],
  "bits-lied": ["deli","idle","isle","lies","slit"],
  "malls-reset": ["alert","alter","aster","earls","ester","laser","later","males","masse","mates","meals","meats","meets","melts","metal","rates","reals","reels","seams","sears","seems","slams","smell","smelt","stare","steam","steer","teams","tears","terse"],
  "sport-tease": ["asset","aster","eases","erase","otter","parse","parts","paste","pasts","pears","pesos","pesto","poets","pores","ports","poser","poses","posse","prose","prost","rates","ropes","saree","seats","septa","spare","spate","spats","spear","spore","spots","stare","state","stops","store","strap","taper","tapes","taste","tater","tears","tetra","totes","traps","treat","trope"],
  "pile-teem": ["emit","item","limp","lite","meet","melt","tele","tile"],
  "arose-metro": ["aster","eater","meets","meter","metre","moors","moose","mores","rates","roast","rooms","storm","tears","tease","terms","terra","tomes"],
  "labs-pool": ["also","bops","loop","opal","polo","slab","soap","solo"],
  "live-rail": ["lair","rave","vale","veil","vera","vile"],
  "cress-shore": ["ceres","cheer","chess","chore","chose","cores","crore","heres","heros","horse","hoses","ochre","roses","score","shoes","sores"],
  "lay-mow": ["awl","law","owl"],
  "money-verge": ["emery","envoy","every","gnome","merge","reeve"],
  "hired-loses": ["heirs","heros","hires","horde","horse","hoses","isles","older","riled","roles","shire","shoes","shore","slide","soles"],
  "even-that": ["heat","than","then"],
  "sauce-trace": ["acres","acute","cares","carte","cater","cures","curse","cuter","races","react","scare","truce"],
  "gaff-mini": ["amin","fang","main","mina"],
  "price-slots": ["clips","cores","corps","cries","crisp","crops","cross","islet","lists","plots","ports","prost","rites","score","scrip","slice","slits","sorts","spilt","split","sport","stirs","stole","store","strip","tiers","tiles","tires","tries","tripe","trope"],
  "acre-asks": ["arcs","cake","care","cask","ears","eras","race","sack","scar","sera"],
  "fetal-salts": ["asset","atlas","false","fatal","fates","feast","feats","fella","fleas","lasts","leafs","least","sales","salsa","seals","seats","slate","slats","stale","stall","stats","tales","tells","tests"],
  "cave-pigs": ["cage","gasp","page","pave"],
  "daddy-tapes": ["paste","payed","septa","spade","spate","stade","stead"],
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
  "rebel-taste": ["aster","beret","betta","bleat","earls","erase","ester","laser","least","rates","reals","reels","saree","slate","sleet","stale","stare","state","steal","steel","steer","tales","tears","tease","terse","trees"],
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
  "demo-soon": ["dome","done","doom","eons","mend","mode","moos","node","nose","some"],
  "blade-poets": ["abode","adobe","belts","blast","bleed","boast","boats","dopes","leapt","pedal","pelts","pesto","petal","plate","plead","pleat","slept","spelt","splat","table"],
  "enter-owned": ["donne","noted","owner","renew","tenor","toner","towed","tower","tweed","wrote"],
  "pair-tons": ["ants","pans","porn","rant","roti","span","tori","torn","trio"],
  "acted-pores": ["acres","adore","arose","cadet","cadre","cared","caste","cedar","depot","pedro","pesto","poets","poser","prose","raced","races","roped","ropes","scare","spore"],
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
  "dupe-tiny": ["dine","dune","tune"],
  "not-top": ["opt"],
  "coast-hence": ["ascot","caste","cease","cents","coats","cones","haste","hates","heats","notch","oaths","scene","scent","sheen","shone","tacos","teach"],
  "fast-pick": ["fact","fats","fits","pact","past","pats","pits","sift","skip","spat","spit","taps","tips"],
  "skin-tags": ["anti","kiss","kits","knit","sang","sink","skis","snag","stag","tang"],
  "range-romps": ["anger","gamer","goner","marge","proms","ramps"],
  "kiwi-site": ["kite","ties"],
  "calm-seed": ["aced","came","clam","lads","mace","mesa","same","seam","slam","sled"],
  "cross-singe": ["cores","goers","ogres","roses","score","signs","sings","sores"],
  "haven-lemur": ["harem","lumen","merle","mural","navel","ravel","realm","revel"],
  "dud-eel": ["dee"],
  "font-tear": ["fare","fate","fear","feat","fern","rate","rent","tate","tent","tern"],
  "cents-wills": ["cells","celts","swell","twins","wells"],
  "mess-twin": ["mine","nets","semi","sent","sets","site","tens","ties","wits"],
  "boom-stop": ["moos","most","post","pots","spot","tops"],
  "fires-noble": ["enrol","flier","fries","liner","loner","reins","resin","rinse","risen","senor","serif","siren","snore"],
  "pass-ruby": ["bars","bras","bray","pays","pubs","rays","rubs","yaps"],
  "gosh-pipe": ["egos","goes","hips","hogs","hops","pies","pose","posh","ship","shop"],
  "hoped-rites": ["ethos","heist","hopes","pedro","piers","pores","poser","prose","roped","ropes","spire","spore","store","tiers","tired","tires","tried","tries"],
  "are-pep": ["ear","era","pee","rap"],
  "bolt-fund": ["blot","bold","bond","fond","font","loft"],
  "oils-riot": ["roti","tori"],
  "blast-swiss": ["lasts","lists","salts","slabs","slats","slits","swabs"],
  "king-sets": ["gist","kits","ness","sign","sing","sins","sits","skin","skit"],
  "blank-great": ["baker","bleat","brake","brant","break","brent","grate","rabat","table"],
  "logs-odds": ["gods","sold"],
  "cores-gawky": ["acres","cares","corks","gears","goers","ogres","races","racks","rages","rocks","scare","score","wacky"],
  "modem-shale": ["demos","domes","hales","heals","leash","modes","molds"],
  "comic-sulks": ["clock","coils","colic","mocks","silos","soils"],
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
  "files-smear": ["arise","fails","flier","flies","frail","frame","isles","liars","mares","masse","rails","raise","rifle","sails","seams","slams"],
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
  "kid-now": ["don","own","win","won"],
  "crude-think": ["chink","chunk","cider","cried","cured","inert","inter","nicer","niche","thine","thunk","tired","tried","tuner"],
  "kills-traps": ["lilts","parks","parts","spark","spilt","split","still","tails","tills"],
  "fade-sick": ["aces","case","cask","deaf","dies","face","kids","sack","side","skid"],
  "meet-spot": ["pest","pets","post","pots","step","stop","tees","temp","toes","tome"],
  "fines-shell": ["files","flesh","flies","heels","hells","isles","liens","lisle"],
  "farm-milk": ["firm"],
  "owed-runt": ["drew","rude","town","turn","udon","undo","unto"],
  "begin-trout": ["begun","being","bring","grunt","intro","nitro","orbit","robin","tinge","turbo"],
  "eyed-labs": ["base","bead","dale","deal","ease","lead","sale","seal","slab"],
  "caw-yes": ["say","yaw"],
  "horns-steer": ["ester","ether","heron","heros","nests","noses","rents","reset","rests","roses","senor","sheet","shone","shore","snore","sores","terse","there","these","three","trees"],
  "leap-pins": ["apes","lens","pale","peas","pens","sail","sale","seal","snip"],
  "align-every": ["angel","angle","early","elegy","glean","layer","learn","leary","liang","liner","nerve","never","raven","renal","riven","vegan"],
  "held-lone": ["doll","heel","hold","hone","noel"],
  "tide-till": ["edit","lite","tied","tile"],
  "artsy-corps": ["costs","crops","cross","crypt","parts","party","soars","stars","strap","stray","traps","trays"],
  "draw-liar": ["arid","lair","raid"],
  "dead-near": ["dare","dear","earn"],
  "cheer-lasts": ["acres","alert","alter","cares","carte","carts","cases","caste","casts","cater","cease","chest","crate","earls","easel","heels","laser","lease","least","races","react","reals","sales","salts","scare","seals","slate","slats","stale","steal","tales","trace"],
  "age-yep": ["ape"],
  "hats-stir": ["airs","arts","hair","hart","hast","rats","sari","sits","this","tsar"],
  "alias-small": ["amass","amiss","mails","malls","massa","mills","salsa","sills","slams"],
  "fair-solo": ["airs","also","foal","lars","loaf","rolf"],
  "coat-owns": ["caws","cons","onto","soon","town"],
  "ample-patty": ["amply","apple","aptly","leapt","maple","metal","petal","plate","playa","pleat","tempt"],
  "arson-cable": ["arose","bacon","banal","banco","clans","cores","earls","laces","laser","nasal","reals","score","scorn","snarl","sonar"],
  "boss-rare": ["bare","base","bass","bear","bore","bras","bros","ears","eras","rear","robe","sera","sobs","sore"],
  "arbor-metro": ["barre","motor"],
  "tom-win": ["not","now","own","tin","ton","won"],
  "attic-poles": ["least","lopes","pelts","pesto","poets","polis","posit","slate","slept","slope","spelt","spilt","split","spoil","stale","state","steal","tacit","tails","taste","topic"],
  "glow-pray": ["orgy","plow","ploy","poly","warp","wrap"],
  "pills-three": ["elite","helps","islet","lilts","peril","piers","piles","plies","rites","spiel","spire","still","there","tiers","tiles","tills","tires","tries"],
  "games-tight": ["emits","items","mages","mates","maths","matte","meats","mites","sight","smite","smith","stage","steam","teams","times"],
  "drop-feet": ["dope","dote","fete","fret","peed","prod"],
  "deeds-suing": ["dense","dudes","dunes","edged","edges","genes","needs","nudes","nudge","seeds","sense","sides","singe","sinus","snide","using"],
  "dame-poet": ["demo","dome","dote","made","mead","mode","peat","tamp","tape"],
  "bury-tens": ["buns","nest","nuts","rest","rubs","rust","sent","stun","trey","tyne","tyre","yurt"],
  "bops-cafe": ["cape","caps","cope","cops","face"],
  "ads-sad": ["add"],
  "below-races": ["bales","bowel","cares","ceres","cores","earls","laser","lobes","loser","lower","orcas","reals","reels","roles","sable","scare","score","solar"],
  "lined-rocks": ["cider","close","coder","cores","corks","credo","cried","cries","decor","diner","dolce","drink","kilns","licks","liens","lines","links","locks","olden","reins","resin","rinse","risen","score","senor","siren","slice","slink","snore"],
  "beat-soul": ["abet","able","also","bale","beta","blue","boat","east","eats","lube","oats","outs","sale","seat","teas","tube"],
  "ours-want": ["soar","sour","unto","wars","wart"],
  "angel-decks": ["angle","cakes","canes","cease","clank","clean","eagle","edges","glean","lance"],
  "melts-stool": ["loose","loses","moles","moose","smelt","soles","stole","tells","tolls","tomes","tools"],
  "lies-nope": ["isle","lips","lose","nose","ones","open","pine","pins","pole","sine","slip","snip","sole","spin"],
  "keel-wear": ["lake","leak","leek","rake","reek","ware"],
  "coo-end": ["cod","con","den","doe","eon"],
  "deaf-mint": ["date","dent","dint","fade","fame","fend","mate","meat","meta","tame","tend"],
  "glue-roof": ["euro","four","furl","golf","gulf","lore","lure","role","rolf"],
  "crate-slate": ["aster","carte","cater","rates","stale","stare","steal","tales","tears","trace"],
  "grams-plane": ["ample","angel","anger","angle","gamer","gleam","glean","maple","marge","palms","panel","penal","plans","psalm","ramps","slang"],
  "dork-life": ["dire","dirk","file","lore","redo","rode","role"],
  "baton-solar": ["abort","banal","loans","rabat","roast","roost","roots","salon","santo","solon","tabor","torso"],
  "hags-lend": ["gals","glad","hens","land","lens","slag"],
  "ally-dibs": ["ably","bias","bids","lids","sail","slab","slid"],
  "noses-tiger": ["reign","reins","resin","rinse","risen","rites","senor","singe","siren","snore","store","tiers","tires","tries"],
  "bus-rid": ["bid","bud","sri","sub"],
  "rival-voter": ["liver","lover","overt","retro","river","rivet","trail","trial","trier","trove","valor","viral","volta"],
  "item-monk": ["emit","kite","mint","oink","time"],
  "drum-fail": ["amid","dial","furl","laid","maid"],
  "pipes-torch": ["chirp","corps","crisp","crops","other","pesto","piers","poets","popes","porch","pores","poser","prose","rites","scrip","spire","spite","spore","stipe","store","their","tiers","tires","tries"],
  "eats-frog": ["east","fats","gate","gore","ogre","rest","rose","seat","sofa","sore","teas"],
  "enact-grows": ["acres","canes","cares","carte","cater","cones","conte","cores","crate","gowns","races","react","scare","scone","swear","swore","tower","trace","wares","water","wears","worse","wrote"],
  "alter-drops": ["alert","arose","aster","doers","later","least","order","parts","plods","polar","rates","slate","splat","stale","stare","steal","strap","tales","tears","terra"],
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
  "aid-gob": ["big","dog","god"],
  "leap-mean": ["amen","lane","lean","mane","plea"],
  "gifts-waves": ["swift","views","wives"],
  "cogs-gene": ["cone","cons","gone","snog","song"],
  "nicer-salon": ["acorn","acres","canes","canon","cares","crane","cries","earls","icons","lanes","laser","leans","liens","linen","liner","lines","lions","loans","loins","nance","orcas","races","rance","reals","renal","scare","scion","since","solar","sonic"],
  "aided-carry": ["aired","array","cadre","cared","cedar","cider","cried","dairy","decay","diced","dicey","radar"],
  "ably-gunk": ["yuan"],
  "mixed-souls": ["douse","issue","mixes","mouse"],
  "idol-rate": ["aero","diet","edit","lord","redo","rode","tail","tear","tied"],
  "rush-teen": ["hers","huts","nest","nets","runs","sent","shut","stun","tens","thus","tune"],
  "new-two": ["eon","now","one","toe","won"],
  "logos-stein": ["glint","goons","inlet","inset","islet","lingo","noise","noose","notes","onset","seton","sites","stole","stone","tiles","tones","tongs"],
  "ample-raise": ["paler","parse","pearl","pears","spare","spear"],
  "blot-stem": ["belt","bolt","lest","lost","lots","most","slot","test"],
  "champ-rinse": ["aches","arise","chaps","chase","harem","hares","hears","miner","pairs","prima","raise","reins","resin","risen","share","shear","since","siren"],
  "rode-suit": ["does","dose","dots","dues","dust","redo","riot","rude","stud","tori","trio","turd","used"],
  "east-wind": ["ante","dean","dies","dine","eats","neat","seat","side","site","swat","teas","twin","wand","want","wits"],
  "beans-piled": ["abide","basin","blend","blind","panes","pease","peels","piles","plies","sepia","sleep","spiel"],
  "gear-oops": ["aero","pore","pose","prog","rage","repo","rope","sage","sago"],
  "film-tens": ["fins","lest","lets","list","melt","nest","nets","sent","slit","tins"],
  "alp-eye": ["aye","lap","pal","yap","yep"],
  "beam-foot": ["abet","beat","beta","boat","boot","fame","fate","feta","foam"],
  "dude-zone": ["done","dune","node"],
  "kicks-songs": ["kinks","signs","sings","sinks","skins"],
  "meets-notch": ["cents","chemo","cones","hence","notes","onset","scene","scent","scone","seton","stent","stone","teens","tense","tents","theme","tomes","tones"],
  "nose-user": ["eons","euro","ness","ours","ruse","seen","sour","uses"],
  "acid-they": ["aced","yeah"],
  "gloat-scare": ["acres","algae","ascot","atlas","cares","carts","coats","cores","earls","glare","grace","lager","laser","loser","races","reals","regal","roles","score","tacos"],
  "basil-freak": ["baker","barks","basal","biker","break","brisk","faker","feral","flare","flier","frisk","liber","rifle"],
  "arts-ramp": ["arms","part","rams","rats","star","tarp","tsar"],
  "day-was": ["ads","saw","way"],
  "disc-lamb": ["balm","clam","dibs","labs","libs","limb","slab"],
  "swamp-truth": ["harms","hurst","hurts","marsh","parts","ramps","spurt","strap","thrum","tramp","traps","trash","whats"],
  "digit-roofs": ["foods","grift"],
  "cash-tiny": ["chin","hast","hats","hint","hits","inch","stay","than","thin"],
  "cogs-park": ["arcs","cars","cork","gasp","pork","pros","rack","raps","scar"],
  "fell-page": ["fall","feel","flea","flee","leaf","leap","pale","plea"],
  "angle-risks": ["agile","aisle","angel","glean","lanes","leans","sails","skier","slang","sneak"],
  "order-tease": ["aster","doers","eater","erode","rates","roars","stare","steed","tears","terra"],
  "nit-per": ["net","pet","pit","tin","tip"],
  "dates-resin": ["aster","deans","dense","diets","earns","edits","enter","ester","inert","inter","nears","needs","rains","rates","reins","reset","rinse","risen","rises","rites","sarin","sears","seeds","sides","siren","sited","snare","sneer","snide","stade","stair","stare","stead","steed","steer","tears","terse","tides","tiers","train","trees","tries"],
  "aware-flash": ["false","feral","fleas","leafs","wafer","wharf"],
  "corn-wide": ["code","core","deco","dice","iced","owed","weir","wind","wire","wore","worn"],
  "fake-nick": ["acne","cane","face","nice"],
  "limit-moves": ["evils","limes","lives","loves","memos","milos","moles","motel","slime","smile","solve","veils"],
  "norm-test": ["nest","nets","rent","sent","stem","tens","term","tons","torn","tort","trot"],
  "bomb-dunk": ["bond","bunk","knob"],
  "inter-skins": ["inert","inset","kites","knits","nests","reins","rents","resin","rinse","sinks","siren","skier","skies","stein","stern"],
  "gods-silk": ["digs","diss","dogs","kids","loss","skid"],
  "agile-meats": ["agate","aisle","emits","gleam","limes","males","mates","meals","miles","mites","slime","smile","smite","steam","teams","times"],
  "blink-force": ["boner","frock"],
  "lose-wash": ["lash","owes","sale","shaw","sole","woes"],
  "canoe-fused": ["dance","fades","feuds","ocean","ounce"],
  "swath-twice": ["sweat","watch","whats"],
  "ago-odd": ["add","dog","god"],
  "bleat-lobby": ["alley","bally","bloat","table"],
  "flail-grown": ["align","final","flair","frail","frown","grain","groin","growl","infra","liang","lingo","wrong"],
  "dodo-nuts": ["dons","dots","duds","dust","nods","onto","stud","stun","tons","udon","undo"],
  "lamps-trial": ["alias","lapis","liars","palms","psalm","rails","smart","stair","stamp","trail","trams","trips"],
  "gird-lame": ["drag","earl","game","gear","grad","grid","lear","lime","male","meal","mile","real"],
  "menus-nixes": ["minus","mixes","nines"],
  "grade-reset": ["agree","dregs","eager","eared","eater","ester","gated","geese","grate","great","raged","rated","reeds","serge","steer","terse","trade","tread","trees"],
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
  "areas-kinds": ["aides","aside","dares","rakes","reads","saran","snark"],
  "all-way": ["law","yaw"],
  "roles-world": ["dowel","loser","lowes","older","order","rolls","rowed","worse"],
  "joke-wash": ["hawk","jake","owes","shaw","show","weak","woes","woke"],
  "lease-warns": ["earls","easel","lanes","laser","leans","learn","nasal","reals","reels","renal","renew","sales","seals","sewer","snarl","swear","wares","wears"],
  "idol-lads": ["aids","also","doll","laid","said","sold"],
  "honk-item": ["emit","home","kite","knit","meth","mint","time"],
  "loans-rumor": ["arson","looms","moors","norms","salon","sonar"],
  "lapse-waste": ["leaps","leapt","least","pales","petal","plate","pleat","sales","seals","slate","stale","steal","tales"],
  "hunt-nags": ["gnus","guns","gush","hags","hugs","nuns","sang","shun","snag","sung","tang","thug","tung"],
  "crest-meats": ["carts","cases","caste","crass","cress","masse","mates","matte","meets","scars","seams","smart","steam","teams","terms","trams"],
  "ape-arm": ["amp","are","era","mar","ram"],
  "cent-lime": ["lent","lien","line","mice","mile"],
  "dolly-sites": ["deity","diets","dilly","dolls","edits","isles","lists","loses","sills","sited","slide","slits","slots","soles","tides","toyed","yield","yodel"],
  "grow-lose": ["egos","ergo","goes","gore","lore","lows","owls","role","sole","wool"],
  "mean-text": ["amen","ante","mane","mate","meat","meta","name","neat","tame","tate"],
  "beers-glass": ["bases","bears","brees","gases","rages","saber","sabre","sages","serge","slabs"],
  "ponds-tails": ["lapis","plans","polis","slant","toils"],
  "beat-loop": ["abet","alto","beta","boat","late","loot","opal","pale","plea","pole","polo","pool","tale","teal","tool"],
  "adult-spell": ["dealt","ladle","lapel","leapt","pelts","petal","plate","pleat","slept","spelt"],
  "feeds-harsh": ["ashes","fades","hades","herds","safes","serfs","shade","shard","sheaf","shred"],
  "bus-mew": ["sub"],
  "eons-tiff": ["fife","fist","fits","foes","font","nose","ones","sift","sine","tins","tons"],
  "paper-vista": ["parse","parts","pears","piers","piper","raves","saver","sepia","spare","spear","spire","strap","strip","tapas","traps","trips"],
  "muted-rinse": ["denim","diner","durst","emits","items","menus","midst","minds","mined","mines","mites","reins","resin","rinds","risen","rites","runes","siren","smite","tiers","times","tired","tires","tried","tries","under"],
  "evil-wise": ["lies","live","veil","vile"],
  "edits-rents": ["dents","diets","rites","sited","stern","teens","tense","tides","tiers","tires"],
  "dish-ugly": ["guys","hugs"],
  "bars-cost": ["acts","arcs","bass","bats","bots","bras","brat","bros","cars","cast","cats","scar","scot","sobs","stab","tabs"],
  "bowl-legs": ["begs","blew","blow","bows","logs","lows","owls","slew","slow"],
  "one-saw": ["eon","now","was","won"],
  "keep-mall": ["kale","keel","lake","lame","lamp","leak","male","meal","peak","peek"],
  "funds-rainy": ["dairy","diary","fanny","rains","randy","ruins","runny","sarin","unify"],
  "arms-oven": ["earn","ears","eras","mars","near","rams","rose","sera","sore","vase"],
  "demon-pairs": ["adios","demos","diner","domes","dries","modes","monde","nadir","nomad","piano","piers","poise","raids","ramps","rides","ripen","sired","spire"],
  "aided-wrong": ["adder","adore","adorn","argon","dread","drown","grade","grand","groan","grown","orang","organ","radon","raged","rowed"],
  "edge-road": ["aero","dare","dear","gore","ogre","read"],
  "crane-hopes": ["canoe","cares","creep","crepe","hares","hears","ocean","ponce","races","rance","scare","scope","share","shear"],
  "giant-leave": ["alien","valet","vital"],
  "eel-was": ["awl","saw","sea"],
  "laser-sifts": ["earls","false","fares","farts","fears","feral","files","fires","first","fists","flare","flats","fleas","flier","flies","flirt","flits","fries","isles","lasts","leafs","lifts","rafts","reals","rifle","rifts","rises","safes","sales","salts","seals","sears","serif","slats","slits","stars","stirs"],
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
  "abet-eons": ["bans","base","bees","bent","beta","nabs","nose","note","tone"],
  "into-tusk": ["ions","sink","skin","tons","tout"],
  "curve-poles": ["close","clove","cores","cover","cures","curse","elope","lopes","pores","poser","prose","pulse","puree","purse","ropes","rupee","score","slope","spore","super"],
  "denim-roman": ["amend","inner","manor","mined","miner","nomad","ramen"],
  "doom-furl": ["dorm","form","foul","from","lord","loud","ludo","mood","rolf"],
  "agree-usage": ["eager","gears","rages","reuse","saree","surge","urges"],
  "lens-team": ["east","eats","lame","male","mate","meat","meta","nest","nets","sale","seal","seat","tame","teas","tens"],
  "glen-snow": ["glow","gown","lens","lows","owls","owns","sewn","slew","slow"],
  "nib-wow": ["bin","now","own","won"],
  "fobs-test": ["best","bots","sets","toss"],
  "mere-that": ["ahem","hate","heat","mate","meat","meta","tame","tate","team","term"],
  "cover-viral": ["clove","coral","crore","liver","lover","relic","rival","rover","valor","vicar"],
  "till-wood": ["lilt","loot","told","toll","will","wool"],
  "arc-due": ["are","car","ear","red"],
  "fart-sold": ["arts","flat","fold","fort","frat","lads","last","loft","lost","lots","olds","raft","rats","rods","slot","sort","star","tsar"],
  "comfy-reads": ["cafes","dares","dorms","faces","fares","fears","foray","ready","roads","safer"],
  "diet-lift": ["lite","tide","tied","tile"],
  "depot-liner": ["diner","drone","ender","enrol","inlet","leper","loner","opted","pedro","pilot","pride","repel","roped","tepid","toned"],
  "been-snug": ["gnus","guns","nuns","sung"],
  "lotus-nippy": ["pints","plots","snout","spilt","split","units"],
  "node-wait": ["dean","done","into","wade"],
  "agent-veins": ["anise","eaten","evens","giant","seven","vines"],
  "hippo-hosts": ["hoist","hoops","shoot","shops","shots"],
  "and-its": ["ins","sin","sit"],
  "mason-suite": ["amino","asset","mates","meats","moans","saint","satin","seats","steam","stuns","teams","units"],
  "dull-snap": ["dual","pans","saul","span"],
  "cores-swept": ["crews","crops","pesos","pesto","poets","ports","poses","posse","prost","roses","scope","score","screw","sores","sport","store","wrest"],
  "file-task": ["east","eats","flea","kits","late","life","lite","safe","seat","site","tale","talk","teal","teas","ties","tile"],
  "exile-pants": ["aisle","eaten","exits","lanes","lapis","leans","penal","pixel","plane","plans"],
  "amid-year": ["aide","amir","area","maid"],
  "china-lyric": ["chain","chair","cinch","cynic","inlay"],
  "baron-swiss": ["arson","barns","basin","boars","brass","brown","brows","oasis","soars","sonar"],
  "hey-out": ["hut","toe"],
  "babe-lips": ["able","alps","bale","bile","labs","laps","leap","libs","pals","pile","plea","slab","slap","slip"],
  "foal-shop": ["also","fool","hops","lash","loaf","posh","soap","solo"],
  "ask-eye": ["aye","kay","key","sea"],
  "model-venom": ["delve","devel","loved","melon","modem","novel"],
  "does-sage": ["aged","ages","dogs","dose","egos","goes","seas"],
  "gang-ward": ["dang","dawn","draw","grad","wand"],
  "curse-folks": ["close","clues","cores","corks","cures","floss","forks","fuels","locks","rocks","score"],
  "able-lugs": ["bags","bale","bell","saul","slab","slug"],
  "shove-slope": ["lopes","poles","solve"],
  "mall-with": ["malt","mill","thaw","wall","what","whit","wilt"],
  "chick-ninth": ["chink","hitch","thick"],
  "ape-not": ["eon","pen","tap","ton"],
  "great-slide": ["agile","agree","aisle","arise","aster","dries","eager","eagle","easel","erase","glide","grate","greed","lease","ledge","raise","rates","reeds","rides","saree","sired","slate","stair","stale","stare","steal","tails","tales","tears"],
  "acts-hulk": ["cast","cats","huts","lush","saul","shut","tack"],
  "other-roses": ["ethos","heros","rests","shore","sores","those"],
  "mined-seats": ["admit","aides","aside","asset","dates","denim","dense","dents","eased","eases","edema","ideas","mated","mates","meats","media","mines","mints","needs","sense","snide","stade","stead","steam","tamed","teams","tends"],
  "flat-pony": ["atop","plat"],
  "mars-tarp": ["arms","arts","part","rams","star","trap","tsar"],
  "beta-hero": ["abet","bare","bear","beat","hare","hear","heat","robe"],
  "lime-soon": ["ions","mile","mole","semi"],
  "age-gym": ["aye"],
  "caps-gunk": ["cans","cups","gaps","gasp","gnus","guns","pack","sang","scan","snag","snug","sung"],
  "posed-teams": ["dopes","dotes","mated","mates","meats","pease","pesos","poses","posse","seeps","steam","steed","stems","tamed","tease"],
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
  "new-rip": ["pen","pin"],
  "legit-turns": ["gents","glens","lungs","rites","runts","slung","stern","stung","tiers","tires","tries","trite"],
  "after-nixes": ["fates","feast","feats","inert","inset","irate","stein"],
  "chin-mode": ["code","coin","deco","dome","icon"],
  "ably-disk": ["bays","kids","skid"],
  "goals-prove": ["glare","grove","lager","large","logos","loops","paler","pearl","regal","sloop","spool"],
  "ashes-debit": ["baits","bases","basis","bates","beats","debts","haste","hates","heats","saith","sheds"],
  "also-mice": ["ciao","cola","lace","miso","sale","seal"],
  "lace-sums": ["aces","case","clue","cues","lame","mass","meal","mesa","mule","muse","same","seam","slam","slum"],
  "jolt-pets": ["jets","pest","plot","post","pots","spot","step","stop","tops"],
  "gen-wok": ["new","own","won"],
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
  "ponds-terms": ["dents","drops","proms","romps","tends"],
  "keen-nope": ["knee","neon","open","peek","poke"],
  "drift-fines": ["dries","ferns","finds","fires","fries","nerds","refit","rides","riffs","serif","sired","snide","trend","tried"],
  "cloak-torch": ["altho","cloth","croak","crock","loath","roach"],
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
  "fix-nor": ["fox"],
  "bawl-hulk": ["ball","bulk","hall","hull","lakh"],
  "nova-sift": ["fist","fits","sofa","soft","vain"],
  "queer-white": ["quite","threw"],
  "euro-hats": ["aero","ears","east","eats","eras","hast","hour","huts","rash","ruse","rush","seat","sera","shut","teas","thus","user"],
  "batch-genes": ["bates","bathe","beans","beast","beats","beets","beset","chang","stage"],
  "drove-swamp": ["armed","dream","madre","mares","mores","mowed","overs","proms","ramps","raves","saver","servo","smear","verso","vowed","waves"],
  "asks-lamb": ["balm","mass"],
  "lingo-wives": ["evils","liens","lines","lives","owing","sling","swine","veils","views","wines","wings"],
};
