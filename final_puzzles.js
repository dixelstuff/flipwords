const puzzleRows = [
  ["hill-hunt","hill","hunt","hint","hull",1,"","","hint-hull",1], // allWords 1: thin
  ["daddy-rises","daddy","rises","sided","yards",5,"","","cannot be reversed",35], // allWords 9: dares|dries|reads|ready|rides|sears|sides|sired|years
  ["brain-tarot","brain","tarot","baron","trait",2,"","","baron-trait",3], // allWords 3: abort|tabor|train
  ["debt-life","debt","life","bide","felt",4,"","","bide-felt",13], // allWords 9: belt|bile|feed|feel|file|flee|flit|left|lift
  ["filth-safer","filth","safer","fifth","laser",3,"","","fifth-laser",8], // allWords 25: earls|fares|farts|fears|feral|fires|first|flare|flier|flirt|fries|hales|halts|heals|leash|rafts|reals|rifle|rifts|serif|shaft|shale|shalt|sheaf|shift
  ["relax-tasty","relax","tasty","latex","stray",3,"","","latex-stray",17], // allWords 13: artsy|early|exalt|layer|leary|relay|satay|taxes|texts|trays|tyres|years|yeast
  ["keen-spin","keen","spin","knee","snip",2,"","","knee-snip",4], // allWords 5: pens|pink|pins|seen|sine
  ["lies-toes","lies","toes","site","sole",3,"","","site-sole",19], // allWords 3: isle|lose|ties
  ["drop-look","drop","look","dork","loop",2,"","","cannot be reversed",6], // allWords 3: polo|pool|prod
  ["cry-sea","cry","sea","arc","yes",3,"","","arc-yes",10], // allWords 2: ace|car
  ["dates-ledge","dates","ledge","edged","steal",4,"","","edged-steal",29], // allWords 15: dales|deals|deeds|gated|glade|leads|least|slate|sleet|stade|stale|stead|steed|steel|tales
  ["gate-rice","gate","rice","cage","tire",3,"","","cage-tire",9], // allWords 7: acre|care|race|rate|rite|tear|tier
  ["nest-sift","nest","sift","fist","sent",2,"","","fist-sent",4], // allWords 6: fits|nets|sets|sits|tens|tins
  ["bread-known","bread","known","brown","knead",2,"","","brown-knead",1], // allWords 7: bared|baron|beard|board|broad|drake|raked
  ["fail-into","fail","into","info","tail",4,"","","info-tail",13], // allWords 2: flat|font
  ["fade-peel","fade","peel","feed","pale",2,"","","feed-pale",8], // allWords 10: deaf|deep|feel|flea|fled|flee|leaf|leap|peed|plea
  ["goose-paths","goose","paths","hoops","stage",5,"","","hoops-stage",26], // allWords 13: gates|ghost|paste|pasts|pesto|poets|posts|septa|soaps|spate|spots|stops|tapes
  ["caves-coral","caves","coral","races","vocal",3,"","","races-vocal",8], // allWords 9: acres|cares|clear|clove|cores|orcas|sacra|scare|score
  ["alloy-upset","alloy","upset","loyal","setup",2,"","","loyal-setup",14], // allWords 21: alley|allot|atoll|leapt|least|lotus|lousy|paste|petal|plate|pleat|septa|slate|soapy|spate|spout|stale|steal|tales|tapes|tulle
  ["era-war","era","war","are","raw",2,"","","are-raw",5], // allWords 1: ear
  ["shell-stall","shell","stall","halls","tells",2,"","","halls-tells",7], // allWords 2: hells|shall
  ["enact-their","enact","their","cheat","inter",3,"","","cheat-inter",18], // allWords 11: chart|cheer|crane|inert|rance|reach|taint|teach|titan|tithe|train
  ["body-cure","body","cure","bury","code",2,"","","bury-code",2], // allWords 7: bore|core|cory|deco|ecru|robe|ruby
  ["maple-table","maple","table","blame","plate",3,"","","blame-plate",18], // allWords 6: amble|ample|bleat|leapt|petal|pleat
  ["bulk-lime","bulk","lime","lube","milk",3,"","","lube-milk",8], // allWords 5: bile|blue|kill|mile|mule
  ["nuts-pack","nuts","pack","cups","tank",4,"","","cups-tank",13], // allWords 11: ants|cans|caps|past|pats|puck|puts|scan|spat|stun|taps
  ["earth-kills","earth","kills","heart","skill",1,"","","heart-skill",3], // allWords 27: aster|earls|hater|islet|karts|laser|lathe|least|lisle|rates|reals|rites|skirt|slate|stale|stalk|stare|stark|steal|tales|talks|tears|their|tiers|tiles|tires|tries
  ["meet-shut","meet","shut","teem","thus",2,"","","teem-thus",19], // allWords 5: huts|meth|mute|tees|them
  ["maps-swig","maps","swig","gaps","swim",4,"","","gaps-swim",23], // allWords 6: aims|amps|gasp|pass|saps|wigs
  ["new-old","new","old","end","low",2,"","","end-low",7], // allWords 4: den|doe|owe|owl
  ["grab-wild","grab","wild","glib","ward",3,"","","glib-ward",9], // allWords 4: brag|drag|draw|grad
  ["smith-style","smith","style","myths","tiles",2,"","","myths-tiles",7], // allWords 10: emits|islet|items|limes|miles|mites|slime|smile|smite|times
  ["guide-mines","guide","mines","guise","mined",3,"","","guise-mined",4], // allWords 8: denim|dings|genie|genus|menus|minds|nudge|singe
  ["drug-mood","drug","mood","drum","good",4,"","","drum-good",23], // allWords 4: dodo|doom|dorm|rudd
  ["bean-fart","bean","fart","barn","feat",2,"","","barn-feat",2], // allWords 12: abet|bane|beat|beta|bran|brat|fate|fern|feta|frat|fret|raft
  ["actor-under","actor","under","react","round",3,"","","react-round",18], // allWords 16: adorn|cadre|cared|carte|cater|cedar|court|crate|crude|cured|cuter|raced|radon|trace|truce|tuner
  ["grew-wore","grew","wore","grow","were",3,"","","grow-were",9], // allWords 2: gore|ogre
  ["ended-poets","ended","poets","needs","opted",3,"","","needs-opted",19], // allWords 11: dense|dents|depot|doped|pesto|posed|spend|spent|teens|tends|tense
  ["down-glue","down","glue","lung","owed",2,"","","lung-owed",6], // allWords 6: duel|gown|lewd|udon|undo|weld
  ["din-won","din","won","don","win",1,"","","don-win",0], // allWords 2: now|own
  ["nasal-tense","nasal","tense","natal","sense",4,"","","natal-sense",12], // allWords 18: asset|atlas|eaten|lanes|lasts|leans|least|salts|seats|senna|slant|slate|slats|stale|steal|tales|tease|teens
  ["angle-bowls","angle","bowls","elbow","slang",3,"","","elbow-slang",18], // allWords 8: angel|below|blows|bowel|glean|globe|goals|lawns
  ["cram-sets","cram","sets","cars","stem",2,"","","cars-stem",6], // allWords 14: aces|arcs|arms|came|case|mace|mars|mesa|rams|same|scar|seam|seas|sect
  ["slow-tend","slow","tend","newt","olds",3,"","","newt-olds",9], // allWords 14: dent|does|dose|ends|lows|news|owes|owls|send|sewn|sold|told|went|woes
  ["bunny-tried","bunny","tried","briny","tuned",2,"","","briny-tuned",2], // allWords 5: bride|entry|tired|trend|unity
  ["moss-yeti","moss","yeti","semi","toys",4,"","","semi-toys",13], // allWords 7: emit|item|mess|miso|most|stem|time
  ["baby-name","baby","name","babe","many",3,"","","cannot be reversed",8], // allWords 6: amen|bane|beam|bean|mane|mean
  ["firm-sons","firm","sons","form","sins",1,"","","form-sins",1], // allWords 3: fins|from|rims
  ["isle-lazy","lazy","isle","ally","size",2,"","","ally-size",6], // allWords 3: lies|sell|zeal
  ["atlas-erase","atlas","erase","areas","stale",4,"","","areas-stale",25], // allWords 18: asset|earls|laser|lasts|least|reals|reels|salts|saree|sears|seats|slate|slats|sleet|steal|steel|tales|tease
  ["buck-laws","buck","laws","cubs","walk",3,"","","cubs-walk",8], // allWords 5: awls|back|cabs|lack|luck
  ["relay-renew","relay","renew","layer","newer",2,"","","layer-newer",14], // allWords 3: early|leary|yearn
  ["dial-rats","dial","rats","laid","star",3,"","","laid-star",19], // allWords 10: aids|airs|arts|lair|liar|rail|said|sari|stir|tsar
  ["fools-teeth","fools","teeth","feels","tooth",2,"","","cannot be reversed",2], // allWords 9: flees|hotel|sleet|steel|stole|stool|tools|toots|totes
  ["naive-shade","naive","shade","aides","haven",3,"aiden","haves","aides-haven",10], // allWords 8: aside|hades|haves|heads|hides|hives|ideas|shave
  ["flesh-walls","flesh","walls","flash","wells",3,"","","flash-wells",8], // allWords 12: falls|false|fells|fleas|leafs|safes|shawl|sheaf|shelf|swell|welsh|whale
  ["ban-saw","ban","saw","nab","was",2,"","","nab-was",5], // allWords 0
  ["spark-strip","spark","strip","parks","trips",1,"","","parks-trips",3], // allWords 6: karts|parts|skirt|stark|strap|traps
  ["urges-verse","urges","verse","users","verge",3,"","","users-verge",10], // allWords 7: guess|reeve|reuse|serve|sever|surge|veers
  ["cave-time","cave","time","mate","vice",3,"","","mate-vice",13], // allWords 9: came|emit|item|mace|meat|meta|mice|tame|team
  ["rebel-stout","rebel","stout","belts","outer",4,"","","belts-outer",22], // allWords 20: beets|beret|beset|blues|blurt|brute|butts|lotus|louse|otter|rebut|route|ruble|stole|totes|touts|trout|tuber|tubes|tutor
  ["cold-pool","cold","pool","cool","plod",2,"","","cannot be reversed",8], // allWords 5: clod|loco|loop|poll|polo
  ["ghost-salon","ghost","salon","along","hosts",2,"","","along-hosts",6], // allWords 10: gloat|goats|lasts|loans|salts|shoot|shots|slang|slats|sloth
  ["chat-seek","chat","seek","east","heck",3,"","","east-heck",10], // allWords 9: cake|eats|hack|hast|hats|sake|seat|teas|tees
  ["rare-snow","rare","snow","owns","rear",2,"","","owns-rear",15], // allWords 9: aero|ears|eons|eras|nose|ones|sera|wars|worn
  ["amen-bait","amen","bait","abet","main",2,"","","abet-main",6], // allWords 14: amin|bane|bean|beat|beta|mane|mate|mean|meat|meta|mina|name|tame|team
  ["gas-keg","gas","keg","ask","egg",2,"","","ask-egg",8], // allWords 0
  ["likes-mango","likes","mango","lingo","makes",2,"","","lingo-makes",1], // allWords 15: alone|along|among|lakes|lanes|leaks|leans|liens|lines|means|mensa|mines|names|slang|sling
  ["seven-train","seven","train","event","rains",2,"","","event-rains",6], // allWords 9: anise|earns|eaten|evens|nears|sarin|snare|veins|vines
  ["bees-hail","bees","hail","bias","heel",3,"","","bias-heel",9], // allWords 8: able|bail|bale|base|bile|hale|heal|shea
  ["odds-open","odds","open","dose","pond",3,"","","dose-pond",20], // allWords 6: does|done|node|nope|pods|pose
  ["asset-stone","asset","stone","onset","seats",2,"","","onset-seats",19], // allWords 14: atone|eases|nests|noses|notes|santo|seton|state|tanto|taste|tease|tests|tones|totes
  ["fake-lilt","fake","lilt","kale","lift",3,"","","kale-lift",8], // allWords 12: file|flat|flea|flit|lake|leaf|leak|life|like|talk|tall|till
  ["aims-flew","aims","flew","slam","wife",3,"","","slam-wife",19], // allWords 3: sale|seal|self
  ["halt-pray","halt","pray","hart","play",3,"","","hart-play",9], // allWords 3: part|plat|trap
  ["sat-ups","sat","ups","ass","put",2,"","","ass-put",7], // allWords 0
  ["range-swine","swine","range","anger","wines",1,"","","anger-wines",3], // allWords 2: anise|senna
  ["deeds-first","deeds","first","drift","seeds",4,"freds","deist","drift-seeds",21], // allWords 12: diets|dress|edits|feeds|frets|rifts|serfs|sided|sides|sited|steed|tides
  ["rows-yard","yard","rows","rays","word",3,"","","rays-word",8], // allWords 7: dory|draw|rosy|sway|ward|wars|ways
  ["diet-lamp","diet","lamp","palm","tide",2,"","","palm-tide",18], // allWords 15: damp|date|edit|late|leap|limp|lite|malt|pale|pile|plea|tale|teal|tied|tile
  ["birch-prong","birch","prong","bring","porch",3,"","","bring-porch",9], // allWords 3: bingo|boing|chirp
  ["props-spiky","props","spiky","poppy","risks",3,"","","poppy-risks",13], // allWords 4: porky|risky|skips|spork
  ["oral-poll","oral","poll","opal","roll",2,"","","opal-roll",6], // allWords 0
  ["reef-sand","reef","sand","deer","fans",3,"","","deer-fans",23], // allWords 16: dare|darn|dear|ends|fare|fear|fees|fern|free|nerd|rand|read|reed|safe|seed|send
  ["chalk-slice","chalk","slice","click","shale",2,"chile","slack","click-shale",3], // allWords 22: aches|cache|chase|chick|clack|hacks|hales|heals|hicks|kills|laces|lacks|lakhs|leach|leash|licks|lisle|scale|shack|skill|slack|slick
  ["key-tap","key","tap","pet","yak",3,"","","pet-yak",14], // allWords 3: kay|pat|yet
  ["just-monk","just","monk","junk","most",2,"","","junk-most",1], // allWords 4: jots|juts|musk|must
  ["sassy-treat","sassy","treat","essay","start",3,"","","essay-start",19], // allWords 24: artsy|assay|asset|aster|rates|rests|satay|seats|stare|stars|state|stats|stays|stray|tarts|taste|tater|tears|teary|tetra|trays|tyres|years|yeast
  ["cedar-green","cedar","green","cared","genre",2,"","","cared-genre",13], // allWords 17: agree|anger|cadre|carer|crane|creed|dance|eager|grade|grand|greed|raced|racer|raged|rager|rance|range
  ["iron-lads","iron","lads","also","rind",3,"","","also-rind",20], // allWords 6: aids|land|loan|noir|nori|said
  ["fact-made","fact","made","came","daft",3,"","","came-daft",9], // allWords 7: cafe|dame|deaf|face|fade|mace|mead
  ["loves-warns","loves","warns","slave","sworn",2,"","","slave-sworn",7], // allWords 14: earls|laser|loser|reals|roles|salve|snarl|solve|swear|swore|wares|waves|wears|worse
  ["done-redo","done","redo","door","need",3,"","","door-need",18], // allWords 7: deed|deer|dodo|node|odor|reed|rode
  ["bold-seal","bold","seal","bell","soda",3,"","","bell-soda",9], // allWords 11: able|also|bale|bead|bled|dosa|olds|sale|sell|sled|sold
  ["spent-straw","spent","straw","tents","wraps",4,"","","tents-wraps",29], // allWords 15: parts|paste|septa|spate|start|state|stent|strap|sweat|tapes|tarts|taste|traps|warts|waste
  ["row-ten","row","ten","nor","wet",3,"","","nor-wet",10], // allWords 4: net|not|ton|two
  ["fined-talks","fined","talks","filed","tanks",1,"","","filed-tanks",2], // allWords 25: dealt|delta|false|field|fiend|files|fines|flask|fleas|flies|inset|islet|knits|leafs|least|slate|stale|stalk|stank|steal|stein|stink|tales|tiled|tiles
  ["cape-face","cape","face","cafe","pace",2,"","","cafe-pace",4], // allWords 0
  ["ample-demon","ample","demon","modem","plane",4,"","","modem-plane",24], // allWords 6: lemma|maple|monde|moped|panel|penal
  ["bare-slot","bare","slot","brat","sole",2,"","","brat-sole",6], // allWords 16: arts|bear|blot|boat|bolt|ears|eras|lobe|lose|lost|lots|oats|rats|sera|star|tsar
  ["ages-hour","ages","hour","ragu","shoe",3,"","","ragu-shoe",9], // allWords 8: aero|gear|gush|hero|hose|hugs|rage|sage
  ["fist-pope","fist","pope","pipe","soft",3,"","","cannot be reversed",15], // allWords 13: fits|foes|pies|pits|pose|post|pots|sift|spit|spot|stop|tips|tops
  ["scene-smash","scene","smash","chess","means",4,"","","chess-means",25], // allWords 8: canes|cases|masse|mensa|names|seams|seems|shams
  ["lists-strap","lists","strap","lasts","strip",4,"","","lasts-strip",12], // allWords 19: lapis|liars|pairs|parts|pasts|pilar|rails|sails|salts|slats|slits|spilt|spits|splat|split|stars|stirs|traps|trips
  ["dude-worn","dude","worn","down","rude",3,"","","down-rude",9], // allWords 4: owed|redo|rode|wore
  ["smear-swill","smear","swill","mills","wears",2,"","","mills-wears",7], // allWords 11: mails|males|mares|meals|smell|swear|swell|swirl|wares|wells|wills
  ["bases-begun","bases","begun","began","buses",4,"","","began-buses",12], // allWords 1: beans
  ["seem-toss","seem","toss","most","sees",3,"","","cannot be reversed",23], // allWords 10: meet|mess|moss|sets|some|stem|teem|tees|toes|tome
  ["older-rocks","older","rocks","locks","order",3,"","","locks-order",8], // allWords 10: close|cooks|cores|corks|crook|crore|doers|dorks|rodeo|score
  ["ease-rich","ease","rich","each","rise",2,"","","each-rise",1], // allWords 14: ache|acre|arch|care|char|ears|eras|race|rash|rice|sera|shea|shri|sire
  ["liar-wolf","wolf","liar","flow","rail",3,"","","flow-rail",19], // allWords 7: fail|fill|foal|lair|loaf|oral|roll
  ["did-nib","did","nib","bid","din",3,"","","cannot be reversed",9], // allWords 1: bin
  ["bell-idea","bell","idea","able","lied",3,"","","able-lied",22], // allWords 10: aide|bald|bale|bead|bled|deli|dial|dill|idle|laid
  ["paint-rites","paint","rites","spite","train",2,"spain","trite","spite-train",5], // allWords 28: arise|aster|irate|pains|pants|paste|petit|pints|rains|raise|rants|rates|sarin|sepia|septa|spate|stare|stipe|tapes|tater|tears|tetra|tiers|tires|trans|treat|tries|trite
  ["clean-dread","clean","dread","laden","raced",3,"","","laden-raced",16], // allWords 11: adder|cadre|cared|cedar|clade|crane|dared|decal|laced|lance|rance
  ["lift-tale","lift","tale","fate","lilt",3,"","","fate-lilt",9], // allWords 15: feat|feta|file|flat|flea|flit|late|leaf|life|lite|tall|teal|tile|till|tilt
  ["mayor-stern","mayor","stern","marry","stone",2,"","","marry-stone",7], // allWords 17: arose|earns|metro|moray|nears|notes|onset|ramen|rears|rents|seton|snare|stony|store|story|tones|yarns
  ["euro-spot","euro","spot","oops","true",4,"","","oops-true",22], // allWords 13: ours|outs|poet|pore|post|pots|pros|repo|rope|rust|sour|stop|tops
  ["baked-pools","baked","pools","blood","peaks",3,"","","blood-peaks",12], // allWords 13: abode|adobe|bakes|beaks|booed|lobos|loops|poked|pokes|sloop|speak|spoke|spool
  ["hopes-steer","hopes","steer","ether","poses",3,"","","ether-poses",7], // allWords 18: ester|pesos|pests|pores|poser|posse|prose|reset|ropes|sheet|spore|steps|strep|terse|there|these|three|trees
  ["raw-saw","raw","saw","war","was",2,"","","war-was",5], // allWords 0
  ["shirt-swine","shirt","swine","hints","wires",2,"","","hints-wires",7], // allWords 9: heirs|hires|shine|shire|twins|weirs|wines|wiser|wrist
  ["couch-singe","couch","singe","cough","since",1,"","","cough-since",1], // allWords 6: chins|cinch|conch|cones|guise|scone
  ["over-then","over","then","hero","vent",2,"","","hero-vent",8], // allWords 2: hone|oven
  ["level-wagon","level","wagon","legal","woven",4,"","","legal-woven",16], // allWords 8: aglow|along|angel|angle|glean|navel|novel|vowel
  ["asks-want","asks","want","swan","task",2,"","","swan-task",7], // allWords 2: ants|sans
  ["ranch-towns","ranch","towns","notch","warns",4,"","","notch-warns",16], // allWords 7: chant|crows|scant|scorn|sworn|wants|watch
  ["die-nor","die","nor","eon","rid",3,"","","eon-rid",10], // allWords 3: doe|one|rod
  ["hard-pelt","hard","pelt","held","part",2,"","","held-part",2], // allWords 6: dahl|halt|hart|herd|plat|trap
  ["send-slip","send","slip","ends","lips",1,"","","ends-lips",3], // allWords 6: dies|lids|pens|pies|side|slid
  ["split-wheel","split","wheel","spell","white",3,"","","cannot be reversed",8], // allWords 23: heels|heist|hells|hills|peels|pelts|piles|pills|plies|sheet|shell|shill|sleep|slept|spelt|spiel|spill|spilt|spite|steep|stipe|these|while
  ["array-guide","array","guide","argue","diary",4,"","","argue-diary",22], // allWords 7: adieu|aired|auger|dairy|rager|ridge|urged
  ["corn-unit","corn","unit","icon","runt",2,"","","icon-runt",7], // allWords 3: coin|tour|turn
  ["luck-nose","luck","nose","cone","sulk",3,"","","cone-sulk",9], // allWords 8: clue|eons|lock|lose|once|ones|sole|sunk
  ["field-greet","field","greet","filet","greed",2,"","","cannot be reversed",5], // allWords 5: defer|filed|freed|glide|legit
  ["dusty-idols","dusty","idols","oddly","suits",4,"","","oddly-suits",14], // allWords 4: doily|solid|studs|study
  ["bump-host","bump","host","push","tomb",4,"","","push-tomb",26], // allWords 13: bops|bots|bust|hops|hump|huts|moth|posh|pubs|shop|shot|shut|thus
  ["ick-odd","ick","odd","doc","kid",2,"","","doc-kid",9], // allWords 2: cod|did
  ["bevy-rule","bevy","rule","lube","very",3,"","","lube-very",8], // allWords 5: blue|ever|lure|reel|rely
  ["buddy-tells","buddy","tells","bulls","teddy",2,"","","bulls-teddy",1], // allWords 4: bells|belly|bully|telly
  ["dork-lime","dork","lime","milk","rode",3,"","","milk-rode",8], // allWords 12: demo|dime|dire|dirk|dome|lore|mile|mode|mole|redo|ride|role
  ["flit-from","flit","from","film","fort",2,"","","film-fort",6], // allWords 5: firm|form|lift|loft|rift
  ["asset-heats","asset","heats","ashes","state",5,"","","cannot be reversed",29], // allWords 11: eases|haste|hates|seats|sheet|stash|stats|taste|tease|these|theta
  ["nuts-weed","nuts","weed","nude","west",3,"","","nude-west",9], // allWords 11: dent|dune|need|nest|nets|seen|sent|stew|stun|tend|tens
  ["blame-resin","blame","resin","amble","siren",2,"","","amble-siren",13], // allWords 5: ramen|realm|reins|rinse|risen
  ["grant-swore","grant","swore","range","worst",2,"","","range-worst",6], // allWords 23: anger|earns|goner|nears|rager|rants|rears|roger|senor|snare|snore|snort|straw|swear|towns|trans|twang|wager|wants|wares|warts|wears|worse
  ["relay-roman","relay","roman","layer","manor",2,"","","layer-manor",14], // allWords 8: early|learn|leary|mayor|moray|ramen|renal|royal
  ["hot-use","hot","use","out","she",2,"","","out-she",7], // allWords 2: hes|sue
  ["mouse-prose","mouse","prose","moose","purse",2,"","","moose-purse",4], // allWords 7: mores|pores|poser|ropes|serum|spore|super
  ["camps-crews","camps","crews","scamp","screw",1,"","","scamp-screw",3], // allWords 4: capes|paces|scape|space
  ["bail-drag","bail","drag","grab","laid",3,"","","grab-laid",23], // allWords 7: alba|brag|brig|dial|gird|grad|grid
  ["safe-vice","safe","vice","case","five",3,"","","case-five",9], // allWords 3: aces|cave|fave
  ["dome-eyes","dome","eyes","eyed","some",4,"","","cannot be reversed",19], // allWords 6: demo|does|dose|dyes|mode|mods
  ["edges-hovel","hovel","edges","ledge","shove",2,"","","ledge-shove",6], // allWords 2: delve|devel
  ["door-fans","door","fans","roof","sand",3,"","","roof-sand",23], // allWords 9: darn|dons|dosa|nods|odor|rand|road|soda|sofa
  ["hope-salt","hope","salt","heal","stop",3,"","","heal-stop",9], // allWords 25: apes|hale|halt|heap|hole|holt|last|lose|lost|lots|past|path|pats|peas|pose|post|pots|sale|seal|slot|sole|spat|spot|taps|tops
  ["ads-say","ads","say","ass","day",2,"","","ass-day",7], // allWords 1: sad
  ["merry-quiet","merry","quiet","merit","query",3,"","","merit-query",9], // allWords 7: emery|meter|metre|mitre|quite|remit|timer
  ["small-tough","small","tough","malls","ought",1,"","","malls-ought",3], // allWords 9: allot|altho|atoll|gloat|goals|halos|loath|mulls|shoal
  ["disk-wage","disk","wage","gawk","side",3,"","","gawk-side",8], // allWords 5: aged|dies|kids|skid|wise
  ["feels-tides","feels","tides","feeds","tiles",3,"","","feeds-tiles",8], // allWords 10: diets|edits|files|flees|flies|islet|sited|sleet|steed|steel
  ["guns-thus","guns","thus","shut","sung",2,"","","shut-sung",19], // allWords 7: gnus|gush|hugs|huts|nuts|snug|stun
  ["ducks-sizes","ducks","sizes","sized","sucks",3,"","","sized-sucks",12], // allWords 1: dicks
  ["date-fury","date","fury","duty","fare",2,"","","duty-fare",3], // allWords 11: dare|dear|duet|fate|fear|feat|feta|fray|read|rude|yard
  ["rind-tear","rind","tear","dint","rear",3,"","","dint-rear",23], // allWords 12: arid|dare|date|dear|dent|nerd|raid|rare|rate|read|rent|tend
  ["bar-pot","bar","pot","rob","tap",3,"","","rob-tap",14], // allWords 10: bat|bot|bra|bro|opt|pat|pro|rap|tab|top
  ["great-horse","great","horse","agree","short",2,"","","agree-short",8], // allWords 17: eager|earth|ethos|gator|goers|grate|hater|heart|heres|heros|horst|rager|serge|sheer|shore|those|torah
  ["blind-clack","blind","clack","bland","click",1,"","","bland-click",2], // allWords 5: black|blank|blink|clank|clink
  ["logs-tiff","logs","tiff","fits","golf",3,"","","fits-golf",8], // allWords 5: fist|gift|gist|sift|soft
  ["bone-pity","bone","pity","bite","pony",2,"","","bite-pony",2], // allWords 6: bony|nope|open|pine|poet|typo
  ["event-viral","event","viral","inter","valve",4,"","","cannot be reversed",24], // allWords 10: alive|avert|inert|irate|leave|liner|liven|ravel|rival|vitae
  ["felt-kale","felt","kale","lake","left",2,"","","lake-left",4], // allWords 9: feel|flat|flea|flee|keel|leaf|leak|leek|talk
  ["paved-rider","paved","rider","dared","viper",4,"","","dared-viper",12], // allWords 12: adder|diver|drape|dread|dried|drier|drive|padre|pared|pride|raver|river
  ["canon-pores","canon","pores","acorn","opens",3,"","","cannot be reversed",19], // allWords 29: acres|apron|canes|cares|cones|cores|crane|crone|nance|orcas|panes|parse|pears|porno|poser|prone|prose|races|rance|recon|ropes|scare|scone|score|snoop|spare|spear|spoon|spore
  ["opal-role","opal","role","oral","pole",3,"","","oral-pole",9], // allWords 6: aero|lore|pear|poll|reap|roll
  ["flies-natal","flies","natal","fetal","nails",4,"neils","fatal","fetal-nails",12], // allWords 15: alien|anise|fails|fatal|fates|feast|feats|files|flail|flats|liens|lines|slain|slant|snail
  ["route-steam","route","steam","outer","teams",1,"","","outer-teams",3], // allWords 9: amour|eater|mates|meats|metro|tamer|tease|tomes|utter
  ["lets-sell","lets","sell","less","tell",3,"","","cannot be reversed",8], // allWords 2: lest|sets
  ["flip-girl","flip","girl","fill","grip",2,"","","fill-grip",6], // allWords 1: gill
  ["false-tiger","false","tiger","grief","least",4,"","","grief-least",25], // allWords 24: alert|alter|elite|feral|files|flare|fleas|flier|flies|gates|grate|great|grist|grits|islet|later|leafs|rifle|slate|stage|stale|steal|tales|tiles
  ["boxes-there","boxes","there","boxer","these",3,"","","boxer-these",4], // allWords 9: bores|ether|herbs|obese|robes|sheet|sober|store|three
  ["calm-teen","calm","teen","clan","teem",2,"","","cannot be reversed",6], // allWords 16: acne|ante|came|cane|clam|lent|mace|malt|mate|meat|meet|melt|meta|neat|tame|team
  ["fresh-usher","fresh","usher","refer","shush",3,"","","refer-shush",10], // allWords 6: freer|frees|reefs|reuse|serfs|users
  ["egg-tea","egg","tea","age","get",3,"","","cannot be reversed",10], // allWords 3: ate|eat|tag
  ["alone-zones","alone","zones","lanes","ozone",3,"","","lanes-ozone",8], // allWords 4: leans|loans|oozes|salon
  ["furl-guns","furl","guns","lung","surf",3,"","","lung-surf",23], // allWords 4: gnus|rugs|snug|sung
  ["anger-crams","anger","crams","range","scram",1,"","","range-scram",3], // allWords 15: acres|areas|arena|canes|carer|cares|crane|gears|grams|racer|races|rager|rages|rance|scare
  ["packs-tents","packs","tents","spent","stack",2,"","","spent-stack",5], // allWords 8: pacts|pants|spank|speck|stank|stent|tacks|tanks
  ["feel-redo","feel","redo","flee","rode",2,"","","flee-rode",4], // allWords 2: fled|reel
  ["soul-spit","soul","spit","oils","puts",2,"","","oils-puts",8], // allWords 7: lips|outs|pits|plus|slip|soil|tips
  ["oddly-share","oddly","share","deals","hydro",4,"","","deals-hydro",25], // allWords 18: adore|dales|dares|hales|hares|heals|hears|herds|holed|horde|leads|leash|reads|sadly|shale|shear|shred|yards
  ["cafe-lake","lake","cafe","face","kale",2,"","","face-kale",4], // allWords 4: cake|flea|leaf|leak
  ["bells-flash","bells","flash","balls","flesh",3,"","","balls-flesh",8], // allWords 13: bales|bases|bless|falls|false|fells|fleas|leafs|sable|safes|sheaf|shelf|slabs
  ["cans-pick","pick","cans","caps","nick",4,"","","caps-nick",13], // allWords 10: pack|pans|pics|pink|pins|scan|snap|snip|span|spin
  ["pen-toy","toy","pen","not","yep",3,"","","not-yep",10], // allWords 4: net|ten|ton|yet
  ["draw-pins","draw","pins","snip","ward",3,"","","snip-ward",19], // allWords 7: aids|raps|said|spin|warp|wind|wrap
  ["gravy-pearl","gravy","pearl","gavel","parry",3,"","","gavel-parry",10], // allWords 7: glare|lager|large|paler|payer|regal|repay
  ["lily-mere","lily","mere","lime","rely",4,"","","lime-rely",12], // allWords 3: mile|reel|yell
  ["drill-store","drill","store","rolls","tired",3,"","","rolls-tired",11], // allWords 21: drier|droll|islet|lilts|loser|older|order|rider|riled|riser|rites|roles|still|stole|tiers|tiled|tiles|tires|tolls|tried|tries
  ["fair-loud","loud","fair","four","laid",2,"","","four-laid",2], // allWords 7: dial|dual|idol|lair|liar|ludo|rail
  ["roads-steel","steel","roads","loads","steer",4,"","","loads-steer",25], // allWords 25: alert|alter|arose|asset|aster|darts|doers|doses|ester|later|least|older|rates|reset|seats|slate|sleet|sodas|stale|stare|steal|tales|tears|terse|trees
  ["bare-down","bare","down","bore","dawn",1,"","","bore-dawn",1], // allWords 15: barn|bear|born|bran|dare|darn|dear|owed|rand|read|redo|robe|rode|wade|wand
  ["pools-tides","pools","tides","edits","loops",3,"","","edits-loops",18], // allWords 12: diets|plods|poise|polis|posed|sited|sloop|spied|spoil|spool|stool|tools
  ["ape-arc","ape","arc","cap","ear",2,"","","cap-ear",8], // allWords 4: are|car|era|pac
  ["seen-sets","seen","sets","nets","sees",3,"","","nets-sees",22], // allWords 3: nest|sent|tens
  ["modes-polar","polar","modes","moral","posed",3,"","","moral-posed",10], // allWords 10: demos|domes|lopes|molar|moles|morel|pedro|poles|roped|slope
  ["mint-opal","mint","opal","into","palm",2,"","","into-palm",7], // allWords 6: atop|lamp|lima|lion|mail|tamp
  ["aced-yell","aced","yell","call","eyed",3,"","","call-eyed",9], // allWords 5: clad|dale|deal|lace|lead
  ["began-piper","piper","began","begin","paper",4,"","","begin-paper",12], // allWords 6: barge|being|binge|grape|gripe|pager
  ["doll-swap","doll","swap","laws","plod",4,"","","laws-plod",22], // allWords 6: also|awls|load|paws|soap|wasp
  ["hangs-light","hangs","light","slang","thigh",2,"","","slang-thigh",5], // allWords 5: glint|highs|night|sling|thing
  ["necks-rotor","necks","rotor","corks","tenor",4,"","","corks-tenor",16], // allWords 21: cones|cores|crone|crore|knots|notes|onset|recon|retro|rocks|roost|roots|scone|score|seton|stone|store|stork|toner|tones|torso
  ["hat-job","hat","job","hot","jab",1,"","","hot-jab",1], // allWords 0
  ["deep-when","deep","when","need","phew",3,"","","need-phew",23], // allWords 2: peed|weep
  ["huge-plan","huge","plan","hung","plea",2,"","","hung-plea",5], // allWords 4: hale|heal|leap|pale
  ["dodge-tales","dodge","tales","dates","lodge",3,"","","dates-lodge",8], // allWords 14: dales|deals|dosed|gated|glade|golds|leads|least|slate|stade|stale|stead|steal|stole
  ["canoe-loyal","loyal","canoe","alloy","ocean",2,"","","alloy-ocean",19], // allWords 4: allay|alone|canal|colon
  ["died-note","died","note","diet","node",3,"","","diet-node",9], // allWords 7: dine|dint|done|edit|tide|tied|tone
  ["name-team","team","name","amen","meat",3,"","","amen-meat",19], // allWords 8: mana|mane|mate|mean|meet|meta|tame|teem
  ["crowd-large","large","crowd","grace","world",4,"","","grace-world",22], // allWords 4: glare|lager|lower|regal
  ["fiery-stand","fiery","stand","fined","stray",3,"","","fined-stray",8], // allWords 17: artsy|darts|dents|draft|dries|fairy|fiend|fired|fried|nasty|raids|rides|sired|snide|tends|trays|tyres
  ["doom-spot","doom","spot","mood","tops",3,"","","mood-tops",19], // allWords 4: moos|post|pots|stop
  ["scamp-scent","scamp","scent","camps","cents",1,"","","camps-cents",3], // allWords 1: scant
  ["clown-three","clown","three","clone","threw",2,"","","clone-threw",5], // allWords 4: cheer|ether|there|towel
  ["dean-rent","dean","rent","near","tend",3,"","","near-tend",23], // allWords 5: date|dent|earn|rate|tear
  ["rate-slip","slip","rate","isle","trap",2,"","","isle-trap",9], // allWords 15: east|eats|lest|lets|lies|lips|pair|part|past|pats|seat|spat|taps|tear|teas
  ["blind-crank","blind","crank","brand","clink",2,"","","brand-clink",2], // allWords 5: bland|blank|blink|brink|clank
  ["buck-case","buck","case","cube","sack",3,"","","cube-sack",8], // allWords 7: aces|back|base|bask|cask|cues|suck
  ["paste-rests","paste","rests","stare","steps",3,"","","stare-steps",18], // allWords 15: aster|ester|pasts|pests|rates|reset|septa|spate|stars|steep|steer|tapes|tears|terse|trees
  ["each-kegs","each","kegs","heck","sage",4,"","","heck-sage",26], // allWords 8: aces|ache|ages|case|cask|ghee|hack|sack
  ["bibs-very","bibs","very","bevy","ribs",3,"","","bevy-ribs",9], // allWords 0
  ["eye-its","its","eye","tie","yes",2,"","","tie-yes",7], // allWords 3: set|sit|tee
  ["waft-wine","wine","waft","want","wife",1,"","","want-wife",1], // allWords 2: anew|twin
  ["sinks-torch","torch","sinks","notch","risks",3,"","","notch-risks",8], // allWords 11: chins|cross|honks|knits|knots|shirk|skins|skirt|stink|stork|think
  ["gouge-nerve","gouge","nerve","genre","vogue",3,"","","genre-vogue",21], // allWords 7: goner|gorge|green|grove|never|venue|verge
  ["demo-jobs","demo","jobs","beds","mojo",4,"","","beds-mojo",13], // allWords 5: dome|doom|mode|mods|mood
  ["roof-urge","roof","urge","euro","frog",2,"","","euro-frog",8], // allWords 3: four|gore|ogre
  ["freed-guest","freed","guest","fused","greet",3,"","","fused-greet",8], // allWords 6: defer|dregs|fetus|feuds|frets|greed
  ["pope-says","pope","says","pose","yaps",3,"","","pose-yaps",8], // allWords 7: apes|easy|pass|pays|peas|pops|saps
  ["swim-test","swim","test","mess","twit",4,"","","mess-twit",23], // allWords 9: emit|item|semi|sets|site|stem|ties|time|wits
  ["picks-renew","picks","renew","spine","wreck",3,"","","spine-wreck",10], // allWords 15: ceres|cries|epics|newer|pines|pinks|reins|resin|rinse|risen|siren|sneer|snipe|speck|spice
  ["ask-rid","ask","rid","irk","sad",2,"","","irk-sad",7], // allWords 2: ads|aid
  ["lets-yowl","lets","yowl","toys","well",4,"","","toys-well",13], // allWords 10: lest|lost|lots|lows|owls|slew|slot|slow|tell|toll
  ["hall-mini","mini","hall","hill","main",2,"","","hill-main",8], // allWords 7: amin|hail|lima|mail|mall|mill|mina
  ["annoy-weird","annoy","weird","owned","rainy",4,"","","owned-rainy",24], // allWords 7: aired|anode|drain|nadir|wider|wired|yearn
  ["bases-title","bases","title","sites","table",4,"","","cannot be reversed",16], // allWords 30: asset|bales|bates|beast|beats|bites|blast|bleat|bliss|islet|lasts|latte|least|lists|sable|salts|seats|slabs|slate|slats|slits|stale|state|steal|stilt|tales|taste|tease|tiles|tilts
  ["notes-pores","notes","pores","ropes","tones",2,"","","ropes-tones",3], // allWords 10: onset|pesto|poets|poser|prose|senor|seton|snore|spore|stone
  ["dash-kind","dash","kind","disk","hand",3,"","","disk-hand",22], // allWords 9: adds|dads|dank|dish|hank|hind|khan|kids|skid
  ["the-war","the","war","art","hew",2,"","","art-hew",8], // allWords 6: ate|awe|eat|rat|raw|tea
  ["blush-croak","blush","croak","brush","cloak",1,"","","brush-cloak",1], // allWords 7: abhor|corks|crush|locks|roach|rocks|shrub
  ["easy-glut","easy","glut","seat","ugly",2,"","","seat-ugly",9], // allWords 8: east|eats|gays|lest|lets|stag|tags|teas
  ["lamps-views","lamps","views","palms","wives",2,"","","palms-wives",17], // allWords 10: lapse|leaps|pales|piles|pleas|plies|psalm|spiel|waves|wiles
  ["avail-still","still","avail","tails","villa",3,"","","tails-villa",10], // allWords 4: lilts|silva|stall|vials
  ["cart-save","save","cart","race","vast",3,"","","race-vast",8], // allWords 11: acre|arts|care|cave|ears|eras|rats|sera|star|tsar|vase
  ["needs-shows","needs","shows","seeds","shown",3,"","","seeds-shown",22], // allWords 5: dense|doses|nodes|nosed|sheds
  ["coat-full","full","coat","cult","foal",2,"","","cult-foal",2], // allWords 7: clot|coal|cola|colt|loaf|loft|taco
  ["earn-pour","earn","pour","rear","upon",2,"","","rear-upon",9], // allWords 3: euro|near|rare
  ["are-bin","are","bin","era","nib",2,"","","era-nib",5], // allWords 2: ear|ran
  ["bean-then","bean","then","been","than",1,"","","been-than",1], // allWords 4: ante|bane|neat|teen
  ["bike-ends","bike","ends","dibs","knee",4,"","","dibs-knee",13], // allWords 8: bend|bide|bids|dies|keen|need|send|side
  ["gnome-steal","gnome","steal","along","meets",5,"","","along-meets",24], // allWords 17: angel|angle|glean|gloat|lanes|leans|least|loans|melts|omens|salon|slate|smelt|stale|tales|tease|tomes
  ["close-shift","close","shift","chief","slots",3,"","","chief-slots",11], // allWords 19: chose|clots|colts|files|fitch|flies|flits|hoses|hosts|isles|lifts|lists|lofts|loses|shoes|shots|slice|slits|soles
  ["amid-cake","amid","cake","acid","make",3,"","","acid-make",9], // allWords 2: maid|mice
  ["cheer-salsa","cheer","salsa","cares","shale",3,"","","cares-shale",11], // allWords 21: aches|acres|ashes|chase|clash|clear|earls|erase|hales|heals|heres|laser|leach|leash|races|reals|saree|scare|sears|sheer|slash
  ["flare-skits","flare","skits","rifle","tasks",3,"","","rifle-tasks",18], // allWords 33: earls|faker|feral|fetal|filet|flats|flier|flits|freak|frisk|islet|kites|laser|lasts|least|lifts|lists|rakes|reals|risks|salts|skate|skier|slate|slats|slits|stake|stale|steak|steal|takes|tales|tiles
  ["foot-lead","lead","foot","deaf","tool",3,"","","deaf-tool",23], // allWords 14: alto|dale|deal|dole|fade|fate|feat|feta|food|late|load|loot|tale|teal
  ["back-nuts","back","nuts","cubs","tank",4,"","","cubs-tank",13], // allWords 10: ants|bats|buck|bust|cabs|cans|scan|stab|stun|tabs
  ["ran-you","you","ran","any","our",2,"","","any-our",8], // allWords 1: nor
  ["gaps-tiff","gaps","tiff","gaff","tips",2,"","","cannot be reversed",1], // allWords 14: fast|fats|figs|fist|fits|gasp|past|pats|pigs|pits|sift|spat|spit|taps
  ["fame-logo","fame","logo","goof","meal",3,"","","goof-meal",19], // allWords 7: foam|gale|goal|lame|loom|male|mole
  ["chess-flick","chess","flick","chefs","slick",4,"","","chefs-slick",26], // allWords 5: check|chick|click|hicks|licks
  ["grid-tale","grid","tale","glad","tire",3,"","","glad-tire",9], // allWords 7: dirt|gale|gird|late|rite|teal|tier
  ["ruler-seven","seven","ruler","never","rules",3,"","","cannot be reversed",12], // allWords 8: evens|lures|nerve|reels|serve|sever|veers|verse
  ["canal-glory","canal","glory","angry","local",3,"","","angry-local",8], // allWords 2: coral|largo
  ["heel-roll","heel","roll","hell","role",2,"","","hell-role",6], // allWords 3: hole|lore|reel
  ["corps-tense","tense","corps","pence","sorts",4,"","","pence-sorts",26], // allWords 32: ceres|cones|cores|creep|crepe|cress|crops|cross|ester|nests|notes|onset|ponce|ports|prost|reset|rests|scene|scone|score|seton|spent|sport|steer|stone|store|strep|teens|terse|tones|trees|trope
  ["rises-salon","salon","rises","arson","isles",3,"","","arson-isles",8], // allWords 31: earls|earns|irons|lanes|laser|lasso|leans|learn|liens|liner|lines|lions|loans|loins|nears|reals|reins|renal|resin|rinse|risen|sales|seals|sears|silos|siren|snare|soars|soils|solar|sonar
  ["tip-way","tip","way","pit","yaw",2,"","","pit-yaw",5], // allWords 3: pat|paw|tap
  ["clear-winds","clear","winds","clans","wider",3,"","","clans-wider",9], // allWords 10: cairn|cider|cried|laces|lawns|scale|swain|weird|welds|wired
  ["amen-seat","amen","seat","east","mean",1,"","","east-mean",3], // allWords 17: eats|mana|mane|mans|mast|mate|mats|meat|meta|name|sane|seen|stem|tame|team|teas|tees
  ["bin-tip","bin","tip","nib","pit",2,"","","nib-pit",5], // allWords 2: nit|tin
  ["straw-years","straw","years","stray","wears",4,"","","stray-wears",25], // allWords 10: artsy|satay|sears|stars|swear|trays|wares|warts|warty|weary
  ["board-decor","board","decor","arbor","coded",3,"","","arbor-coded",17], // allWords 13: abode|adder|adobe|adore|bared|barre|beard|bread|broad|coder|credo|dared|dread
  ["plot-weak","weak","plot","poet","walk",2,"","","poet-walk",6], // allWords 7: peak|peat|plat|poke|tape|wake|woke
  ["panic-total","total","panic","natal","topic",4,"","","natal-topic",15], // allWords 11: actin|attic|canto|cotta|optic|pilot|plain|tacit|talon|tonal|tonic
  ["glue-only","only","glue","lone","ugly",2,"","","lone-ugly",9], // allWords 2: glen|noel
  ["clad-wool","wool","clad","call","wood",2,"","","call-wood",6], // allWords 7: clod|coal|cola|cold|cool|loco|wall
  ["siren-songs","siren","songs","noses","rings",4,"","","noses-rings",21], // allWords 14: grins|gross|nines|reins|resin|rinse|risen|rises|roses|senor|signs|sings|snore|sores
  ["busy-toll","busy","toll","bull","toys",3,"","","cannot be reversed",9], // allWords 7: boys|buys|lost|lots|lust|slot|slut
  ["cafe-mode","cafe","mode","dome","face",2,"","","dome-face",4], // allWords 8: aced|code|dame|deco|demo|fame|made|mead
  ["pep-top","pep","top","pet","pop",3,"","","cannot be reversed",9], // allWords 2: opt|pot
  ["cross-story","cross","story","costs","sorry",2,"","","costs-sorry",6], // allWords 2: scots|sorts
  ["asks-lend","asks","lend","elks","sand",3,"","","elks-sand",9], // allWords 5: dean|lens|sake|sane|sans
  ["aimed-table","aimed","table","bleat","media",2,"","","bleat-media",14], // allWords 6: abide|debit|mated|metal|tamed|timed
  ["late-play","late","play","ally","tape",3,"","","ally-tape",8], // allWords 8: leap|pale|peat|pelt|plea|tale|teal|tell
  ["camp-form","camp","form","comp","farm",1,"","","comp-farm",1], // allWords 4: carp|cram|crop|from
  ["spurn-steak","spurn","steak","peaks","turns",2,"","","peaks-turns",7], // allWords 10: aunts|panes|perks|rents|runts|skate|speak|stake|stern|takes
  ["role-want","want","role","earl","town",3,"","","earl-town",19], // allWords 9: anew|earn|lear|lore|lowe|near|rant|real|torn
  ["edits-error","edits","error","order","tires",4,"","","order-tires",22], // allWords 10: diets|doers|rites|sited|tides|tiers|tired|tried|trier|tries
  ["begin-waves","waves","begin","began","wives",4,"","","began-wives",12], // allWords 6: being|binge|vibes|views|wages|wigan
  ["left-pays","left","pays","felt","yaps",2,"","","felt-yaps",4], // allWords 5: flat|lays|self|slay|type
  ["rodeo-short","short","rodeo","doors","other",5,"","","doors-other",29], // allWords 9: ethos|horde|horst|odors|roost|roots|rotor|those|torso
  ["guide-sides","guide","sides","guise","sided",3,"","","guise-sided",4], // allWords 3: dudes|issue|suede
  ["died-soul","died","soul","dies","loud",3,"","","dies-loud",19], // allWords 12: deli|does|dole|dose|idle|isle|lied|lies|lose|ludo|side|sole
  ["cheer-treat","cheer","treat","crate","there",2,"","","crate-there",9], // allWords 20: carer|carte|cater|cheat|earth|erect|ether|hater|heart|racer|reach|react|tater|teach|teeth|terra|tetra|theta|three|trace
  ["arms-hits","arms","hits","mars","this",1,"","","mars-this",3], // allWords 6: aims|arts|rams|rats|star|tsar
  ["coat-gear","coat","gear","rage","taco",2,"","","rage-taco",15], // allWords 6: acre|care|gate|goat|race|toga
  ["stool-teeth","stool","teeth","steel","tooth",4,"","","cannot be reversed",13], // allWords 11: ethos|loose|lotte|lotto|sheet|shoot|sleet|stole|these|those|tools
  ["ocean-stole","ocean","stole","colon","tease",3,"","","colon-tease",8], // allWords 9: atone|canes|canoe|cease|clone|close|santo|sleet|steel
  ["lime-rely","lime","rely","lily","mere",4,"","","lily-mere",13], // allWords 3: mile|reel|yell
  ["nerve-salad","nerve","salad","leads","raven",3,"","","leads-raven",21], // allWords 22: areas|arena|dales|dares|deals|easel|elves|erase|laden|lease|navel|never|raves|reads|salve|saree|saver|serve|sever|slave|veers|verse
  ["gates-lacks","gates","lacks","cages","talks",3,"","","cages-talks",8], // allWords 10: laces|least|scale|slack|slate|stage|stale|stalk|steal|tales
  ["meet-step","meet","step","pets","teem",3,"","","pets-teem",19], // allWords 4: pest|tees|temp|test
  ["feed-kale","feed","kale","fade","keel",2,"","","fade-keel",8], // allWords 9: deaf|feel|flea|fled|flee|lake|leaf|leak|leek
  ["find-post","find","post","fist","pond",2,"","","fist-pond",1], // allWords 15: dips|fits|fond|font|pint|pits|pods|pots|sift|soft|spit|spot|stop|tips|tops
  ["cats-lung","cats","lung","glut","scan",2,"","","glut-scan",8], // allWords 8: acts|cans|cast|cuts|last|lust|salt|slut
  ["also-pops","also","pops","oops","slap",4,"","","oops-slap",23], // allWords 7: alps|laps|opal|pals|plop|poop|soap
  ["amok-clef","amok","clef","leaf","mock",2,"","","leaf-mock",7], // allWords 10: fame|flea|foal|foam|kale|lake|leak|loaf|lock|make
  ["local-ropes","local","ropes","coral","poles",3,"","","coral-poles",7], // allWords 13: cello|close|coals|cores|lopes|orcas|polar|pores|poser|prose|score|slope|spore
  ["dial-liar","dial","liar","laid","rail",3,"","","laid-rail",19], // allWords 3: arid|lair|raid
  ["space-world","space","world","crowd","lapse",4,"","","crowd-lapse",21], // allWords 14: capes|cords|cores|leaps|loads|lords|loser|lower|paces|pales|pleas|roles|scape|score
  ["blue-eons","blue","eons","lube","ones",1,"","","lube-ones",3], // allWords 3: bone|lens|nose
  ["enjoy-names","enjoy","names","jeans","money",3,"","","jeans-money",19], // allWords 6: enemy|mason|means|mensa|moans|omens
  ["alp-ice","alp","ice","cap","lie",2,"","","cap-lie",6], // allWords 5: ace|lap|lip|pac|pal
  ["beef-wine","beef","wine","been","wife",3,"","","been-wife",9], // allWords 0
  ["ours-pity","ours","pity","spit","your",2,"","","spit-your",7], // allWords 7: outs|pits|puts|rips|sour|spur|tips
  ["elder-tapes","elder","tapes","rated","sleep",5,"","","rated-sleep",34], // allWords 18: dates|eared|eased|leper|paste|pease|peels|pelts|repel|septa|slept|spate|spelt|stade|stead|taper|trade|tread
  ["debut-jolly","debut","jolly","doubt","jelly",2,"","","doubt-jelly",7], // allWords 1: dolly
  ["angle-crude","angle","crude","grade","uncle",4,"","","grade-uncle",12], // allWords 10: angel|cruel|cured|glare|glean|lager|large|raged|regal|ulcer
  ["soda-thin","soda","thin","dash","into",3,"","","dash-into",18], // allWords 7: dons|dosa|hint|ions|nods|shin|toad
  ["cheer-stock","cheer","stock","chock","steer",2,"","","chock-steer",1], // allWords 20: check|cheek|choke|chore|crest|erect|ester|heres|heros|horse|ochre|reset|sheer|shock|shore|skeet|stoke|store|terse|trees
  ["taxi-yell","taxi","yell","ally","exit",2,"","","ally-exit",8], // allWords 5: lite|tail|tall|tell|tile
  ["pants-straw","pants","straw","strap","wants",4,"","","strap-wants",25], // allWords 5: paras|parts|stars|traps|warts
  ["beta-doom","beta","doom","boat","demo",2,"","","boat-demo",8], // allWords 9: abet|beat|boom|date|dome|mode|mood|toad|tomb
  ["bin-won","bin","won","nib","now",2,"","","nib-now",5], // allWords 2: own|win
  ["rites-shack","rites","shack","ashes","trick",3,"","","ashes-trick",12], // allWords 16: arise|crash|hacks|hares|hears|kites|raise|shake|share|shear|sites|stick|ticks|tiers|tires|tries
  ["crank-stood","crank","stood","crook","stand",2,"","","crook-stand",2], // allWords 10: croak|doors|knots|odors|ranks|roads|snark|stank|tanks|toads
  ["felt-last","felt","last","left","salt",2,"","","left-salt",4], // allWords 7: fast|fats|flat|lest|lets|tall|tell
  ["aunt-item","aunt","item","team","unit",2,"","","team-unit",7], // allWords 10: emit|mate|meat|meta|mint|tame|tate|time|tint|tuna
  ["polka-space","space","polka","close","kappa",5,"","","close-kappa",26], // allWords 9: capes|claps|clasp|coals|paces|peaks|scalp|scape|speak
  ["ease-toys","ease","toys","easy","toes",3,"","","easy-toes",9], // allWords 7: east|eats|seas|seat|stay|teas|toss
  ["loop-tips","loop","tips","pool","spit",3,"","","pool-spit",19], // allWords 13: lips|oils|pits|plop|polo|post|pots|slip|soil|solo|spot|stop|tops
  ["faith-mount","faith","mount","faint","mouth",2,"","","faint-mouth",1], // allWords 2: futon|human
  ["not-yet","not","yet","ten","toy",3,"","","ten-toy",9], // allWords 2: net|ton
  ["later-these","later","these","ether","slate",3,"","","ether-slate",11], // allWords 29: alert|alter|aster|earls|easel|eater|heels|laser|lease|least|rates|reals|sheet|stale|stare|start|state|steal|tales|tarts|taste|tater|tears|tease|teeth|tetra|there|three|treat
  ["chive-foist","chive","foist","shift","voice",3,"","","shift-voice",21], // allWords 1: stoic
  ["bare-bibs","bare","bibs","babe","ribs",3,"","","babe-ribs",9], // allWords 4: bars|bear|bras|brie
  ["lamp-lilt","lamp","lilt","palm","till",2,"","","palm-till",18], // allWords 4: limp|malt|pill|tall
  ["spear-swath","spear","swath","paths","wears",2,"","","paths-wears",7], // allWords 19: awash|heaps|paras|parse|parts|pasha|pears|phase|shape|spare|strap|straw|strep|swear|traps|wares|warts|whats|wrest
  ["deal-plug","deal","plug","dull","page",3,"","","dull-page",12], // allWords 9: aged|dale|duel|glad|lead|leap|pale|plea|pull
  ["coins-sings","coins","sings","signs","sonic",3,"","","signs-sonic",25], // allWords 3: icons|scion|songs
  ["dork-rope","dork","rope","pork","rode",3,"","","pork-rode",8], // allWords 4: dope|pore|redo|repo
  ["pay-pet","pay","pet","tap","yep",3,"","","tap-yep",10], // allWords 2: pat|yap
  ["burnt-super","burnt","super","brute","spurn",3,"","","brute-spurn",19], // allWords 9: brunt|punts|purse|rebut|runts|setup|tuber|turns|upset
  ["diet-ones","diet","ones","edit","eons",1,"","","edit-eons",3], // allWords 11: dent|dies|ends|nose|note|send|side|tend|tide|tied|tone
  ["gaps-swim","gaps","swim","maps","swig",4,"","","maps-swig",23], // allWords 6: aims|amps|gasp|pass|saps|wigs
  ["boost-pores","boost","pores","boots","prose",2,"","","boots-prose",15], // allWords 11: bores|ports|poser|prost|robes|ropes|sober|spore|sport|stoop|trope
  ["bury-tone","bury","tone","note","ruby",2,"","","note-ruby",4], // allWords 10: bone|bony|bore|robe|tore|tory|troy|true|tune|yurt
  ["about-gross","about","gross","bogus","roast",3,"","","bogus-roast",11], // allWords 4: boast|boats|grout|soars
  ["adds-doze","adds","doze","daze","odds",3,"","","daze-odds",9], // allWords 4: dads|dead|dosa|soda
  ["pair-some","pair","some","poem","sari",2,"","","poem-sari",9], // allWords 10: airs|arms|mars|mesa|prom|ramp|rams|romp|same|seam
  ["drugs-spiky","drugs","spiky","pudgy","risks",3,"","","pudgy-risks",13], // allWords 4: gipsy|grids|risky|skips
  ["named-react","named","react","armed","enact",2,"","","armed-enact",5], // allWords 20: amend|cadre|carat|cared|carte|cater|cedar|crate|dance|dream|eared|eaten|eater|madre|meant|meter|metre|raced|tamer|trace
  ["cops-silk","cops","silk","loss","pick",4,"","","loss-pick",13], // allWords 4: lick|lock|pics|skip
  ["daddy-wraps","daddy","wraps","draws","paddy",3,"","","draws-paddy",22], // allWords 1: wards
  ["press-purse","press","purse","spree","spurs",2,"","","spree-spurs",8], // allWords 3: peers|speer|super
  ["abide-mason","abide","mason","amino","based",3,"","","amino-based",19], // allWords 7: aimed|bands|beads|biome|dames|media|moans
  ["moo-two","moo","two","mow","too",2,"","","cannot be reversed",7], // allWords 0
  ["banks-dolly","banks","dolly","bonks","dally",1,"","","bonks-dally",1], // allWords 5: balls|bally|dolls|knobs|lands
  ["cave-mine","cave","mine","name","vice",3,"","","name-vice",13], // allWords 6: acne|amen|cane|mane|mean|nice
  ["cites-porch","cites","porch","cores","pitch",2,"","","cores-pitch",2], // allWords 22: chirp|chore|corps|cries|crisp|crocs|crops|ethic|ochre|pesto|piers|poets|pores|poser|prose|ropes|score|scrip|spire|spite|spore|stipe
  ["dour-slap","dour","slap","plus","road",3,"","","plus-road",22], // allWords 11: alps|laps|lars|opus|ours|pals|slur|soap|soar|soup|sour
  ["hated-risky","hated","risky","shaky","tried",3,"","","shaky-tried",8], // allWords 16: dares|death|dries|hades|heads|hides|rated|reads|rides|shade|sired|teary|tired|trade|tread|years
  ["book-dead","book","dead","bake","dodo",3,"kobe","dado","bake-dodo",12], // allWords 2: bead|beak
  ["dowel-games","dowel","games","model","wages",3,"","","model-wages",8], // allWords 9: dames|demos|domes|gleam|golem|mages|medal|modes|sawed
  ["event-reads","event","reads","seven","tread",2,"","","seven-tread",6], // allWords 14: dares|deter|earns|eased|eaten|enter|evens|nears|rated|reeds|saved|snare|sneer|trade
  ["are-bus","are","bus","era","sub",2,"","","era-sub",5], // allWords 1: ear
  ["malls-takes","malls","takes","small","stake",1,"","","small-stake",3], // allWords 13: least|makes|males|meals|skate|slate|stale|stalk|stall|steak|steal|tales|talks
  ["sorts-viper","sorts","viper","posts","river",3,"","","posts-river",8], // allWords 29: overs|pesos|piers|pores|ports|poser|poses|posse|prose|prost|prove|riser|rises|ropes|roses|rover|servo|sores|spies|spire|spits|spore|sport|spots|stirs|stops|strip|trips|verso
  ["holy-leap","holy","leap","poll","yeah",4,"","","poll-yeah",23], // allWords 6: heap|help|opal|pale|plea|yell
  ["grace-spare","grace","spare","grape","scare",3,"","","grape-scare",9], // allWords 13: acres|capes|cares|paces|pager|parse|pears|races|rager|rears|scape|space|spear
  ["coal-rare","coal","rare","acre","oral",2,"","","acre-oral",6], // allWords 7: aero|area|care|cola|core|race|rear
  ["merge-raven","merge","raven","ramen","verge",4,"","","ramen-verge",12], // allWords 8: gamer|grave|marge|maven|nerve|never|rager|reeve
  ["fell-grid","fell","grid","fled","girl",2,"","","fled-girl",6], // allWords 3: file|gird|life
  ["deep-link","deep","link","kind","peel",3,"","","kind-peel",23], // allWords 6: keel|kiln|leek|like|peed|pile
  ["boat-hull","boat","hull","blot","haul",2,"","","cannot be reversed",5], // allWords 6: bolt|bull|halo|holt|hula|oath
  ["eye-sat","eye","sat","ate","yes",2,"","","cannot be reversed",8], // allWords 5: eat|sea|sty|tea|yet
  ["races-topic","races","topic","acres","optic",1,"","","acres-optic",3], // allWords 28: cacti|caper|cares|caste|circa|cores|pacer|pairs|parse|paste|pears|pesto|poets|pores|poser|posit|prose|recap|ropes|scare|score|septa|spare|spate|spear|spore|stoic|tapes
  ["chaos-meter","chaos","meter","chase","metro",2,"","","chase-metro",5], // allWords 13: aches|cease|chest|erect|harem|meets|metre|moths|reach|roach|shame|tomes|torch
  ["lean-rain","lean","rain","nail","near",3,"alan","erin","nail-near",23], // allWords 5: earn|lane|lien|line|rein
  ["east-poet","east","poet","tape","toes",3,"","","tape-toes",19], // allWords 13: eats|past|pats|peat|post|pots|seat|spat|spot|stop|taps|teas|tops
  ["great-heats","great","heats","gates","heart",2,"","","gates-heart",8], // allWords 18: agate|earth|gears|grate|hares|haste|hater|hates|hears|rages|share|shear|sheet|stage|teeth|these|theta|trash
  ["empty-mills","empty","mills","imply","melts",3,"","","imply-melts",11], // allWords 12: islet|lisle|piety|piles|plies|smell|smelt|spiel|spite|stipe|temps|tiles
  ["kink-news","kink","news","knew","skin",2,"","","cannot be reversed",7], // allWords 4: sewn|sink|wink|wins
  ["salt-work","salt","work","sort","walk",2,"","","sort-walk",2], // allWords 9: arts|last|lost|lots|rats|slot|star|tsar|wart
  ["parts-spins","parts","spins","snips","strap",4,"","","snips-strap",25], // allWords 4: pains|spits|stars|traps
  ["pit-raw","pit","raw","tip","war",2,"","","tip-war",5], // allWords 5: art|pat|paw|rat|tap
  ["cents-teams","cents","teams","scent","steam",1,"","","scent-steam",3], // allWords 7: caste|mates|meats|state|stent|taste|tents
  ["bezel-saint","bezel","saint","blaze","stein",2,"","","blaze-stein",5], // allWords 9: aisle|inset|liens|lines|nails|satin|slain|snail|stain
  ["guns-ragu","guns","ragu","guru","nags",3,"","","guru-nags",15], // allWords 8: gnus|rags|rugs|runs|sang|snag|snug|sung
  ["amend-worry","amend","worry","marry","owned",4,"","","marry-owned",22], // allWords 11: adore|adorn|anode|armed|dream|drown|madre|named|radon|rayon|rowed
  ["clad-cram","clad","cram","calm","card",2,"","","calm-card",6], // allWords 1: clam
  ["lord-lube","lord","lube","bold","rule",3,"","","bold-rule",9], // allWords 5: blue|lobe|lore|lure|role
  ["bacon-tubes","bacon","tubes","baton","cubes",4,"","","baton-cubes",12], // allWords 17: ascot|babes|banco|bates|beast|beats|boast|boats|bouts|canto|caste|coast|coats|count|enact|scout|tacos
  ["lied-wise","lied","wise","lies","wide",2,"","","lies-wide",7], // allWords 5: deli|idle|isle|lids|slid
  ["dogs-life","dogs","life","file","gods",2,"","","file-gods",4], // allWords 2: digs|logs
  ["bug-new","bug","new","gun","web",3,"","","gun-web",9], // allWords 3: beg|gen|gnu
  ["breed-spoke","breed","spoke","broke","speed",2,"","","broke-speed",1], // allWords 9: bored|doers|dorks|keeps|peeks|pokes|posed|reeds|reeks
  ["seal-sets","seal","sets","lets","seas",3,"","","cannot be reversed",22], // allWords 2: lest|sale
  ["fits-pass","fits","pass","saps","sift",2,"","","cannot be reversed",18], // allWords 10: fast|fats|fist|past|pats|pits|spat|spit|taps|tips
  ["roman-table","roman","table","bleat","manor",2,"","","bleat-manor",14], // allWords 8: abate|baron|baton|manta|metal|morel|motel|realm
  ["fate-nest","fate","nest","safe","tent",3,"","","safe-tent",9], // allWords 16: ante|ants|fast|fats|feat|fees|feet|feta|fete|neat|nets|sane|seen|sent|teen|tens
  ["lemur-paste","lemur","paste","mural","steep",3,"","","mural-steep",18], // allWords 22: least|lures|metal|parts|pause|purse|rules|septa|slate|sleet|spate|stale|steal|steel|strap|strep|super|supra|tales|tapes|tramp|traps
  ["sees-yaks","sees","yaks","asks","eyes",2,"","","asks-eyes",6], // allWords 3: easy|keys|seas
  ["knots-scalp","knots","scalp","plans","stock",5,"","","plans-stock",29], // allWords 16: casts|claps|clasp|class|costs|lacks|locks|pacts|pants|plank|scots|slack|stack|stank|tacks|tanks
  ["bill-fist","bill","fist","bits","fill",2,"","","cannot be reversed",9], // allWords 5: fits|flit|libs|lift|sift
  ["baa-bro","baa","bro","bar","boa",2,"","","bar-boa",6], // allWords 2: bra|rob
  ["meet-wolf","meet","wolf","flow","teem",3,"","","flow-teem",19], // allWords 3: flew|melt|tome
  ["lets-loop","lets","loop","pelt","solo",3,"","","pelt-solo",22], // allWords 10: lest|lose|lost|lots|plot|pole|polo|pool|slot|sole
  ["frond-unity","frond","unity","nifty","round",2,"","","nifty-round",6], // allWords 3: donut|drift|forty
  ["genes-toast","genes","toast","goats","tense",2,"","","goats-tense",8], // allWords 23: asset|gases|gates|gents|nests|notes|onset|sages|seats|seton|songs|stage|state|stent|stoat|stone|taste|tease|teens|tenet|tents|tones|tongs
  ["cafe-sack","cafe","sack","cask","face",2,"","","cask-face",4], // allWords 3: aces|case|safe
  ["filed-metal","filed","metal","filet","medal",4,"","","filet-medal",12], // allWords 11: admit|fated|fella|fetal|field|flail|fleet|mated|mille|tamed|timed
  ["drop-user","drop","user","pour","reds",3,"","","pour-reds",18], // allWords 11: opus|ours|pods|prod|pure|rods|ruse|soup|sour|sped|sure
  ["purge-roses","purge","roses","ropes","surge",4,"","","ropes-surge",12], // allWords 19: goers|grope|gross|pesos|pores|poser|poses|posse|prose|puree|purse|reuse|roger|rupee|sores|spore|super|urges|users
  ["pep-ray","pep","ray","per","yap",3,"","","cannot be reversed",9], // allWords 3: pay|rap|yep
  ["anger-talks","anger","talks","range","stalk",1,"","","range-stalk",3], // allWords 17: alert|alter|gates|gents|grate|great|lanes|later|leans|learn|least|renal|slate|stage|stale|steal|tales
  ["boss-memo","boss","memo","boom","mess",3,"","","cannot be reversed",9], // allWords 6: mobs|moms|moos|moss|sobs|some
  ["lasts-yelps","lasts","yelps","spell","stays",4,"","","spell-stays",29], // allWords 9: palsy|plays|salts|salty|slaps|slats|stall|style|tells
  ["blab-toll","blab","toll","blob","tall",3,"","","blob-tall",9], // allWords 5: alto|ball|blot|boat|bolt
  ["dame-male","dame","male","lame","made",2,"","","lame-made",4], // allWords 5: dale|deal|lead|mead|meal
  ["awash-elves","awash","elves","leash","waves",3,"","","leash-waves",8], // allWords 11: easel|hales|halve|heals|lease|sales|salsa|salve|seals|shale|slave
  ["aisle-corps","aisle","corps","rails","scope",3,"","","rails-scope",12], // allWords 17: close|crisp|crops|epics|lasso|liars|opera|pairs|price|relic|sails|scrip|sepia|slice|soaps|solar|spice
  ["elks-lung","elks","lung","glen","sulk",4,"","","glen-sulk",23], // allWords 1: lens
  ["bore-even","bore","even","bone","ever",3,"","","cannot be reversed",9], // allWords 3: born|robe|verb
  ["eon-why","eon","why","hey","own",2,"","","hey-own",7], // allWords 3: now|one|won
  ["kids-lack","kids","lack","kick","lads",2,"","","kick-lads",1], // allWords 8: cask|disk|lick|lids|sack|sick|skid|slid
  ["drive-month","drive","month","third","venom",5,"","","third-venom",24], // allWords 14: devon|diver|merit|mirth|mitre|movie|noted|remit|timer|tired|toned|trend|tried|video
  ["need-stay","need","stay","easy","tend",2,"","","easy-tend",8], // allWords 5: dean|dent|eyes|seed|tyne
  ["began-fixes","began","fixes","begin","faxes",4,"","","begin-faxes",12], // allWords 2: being|binge
  ["agent-salsa","agent","salsa","nasal","stage",3,"","","nasal-stage",18], // allWords 14: asset|atlas|gases|gates|gents|glass|lasts|natal|sages|salts|seats|slang|slant|slats
  ["shoe-tags","shoe","tags","ages","host",3,"","","ages-host",10], // allWords 6: gate|hose|oats|sage|shot|stag
  ["abet-less","abet","less","bats","else",3,"abes","lest","bats-else",20], // allWords 17: base|bass|beat|belt|beta|ease|east|eats|eels|lest|lets|seas|seat|stab|tabs|teas|tele
  ["alert-blade","alert","blade","altar","bleed",2,"","","altar-bleed",5], // allWords 5: alter|dealt|delta|later|rebel
  ["cedar-newer","cedar","newer","raced","renew",2,"","","raced-renew",14], // allWords 4: cadre|cared|creed|ender
  ["saw-yaw","saw","yaw","was","way",2,"","","was-way",5], // allWords 0
  ["draw-week","draw","week","drew","weak",1,"","","drew-weak",1], // allWords 6: dark|drek|wade|wake|ward|weed
  ["straw-tells","straw","tells","start","wells",5,"","","start-wells",33], // allWords 24: aster|lasts|least|rates|sales|salts|seals|sears|sells|slate|slats|stale|stare|stars|steal|swear|swell|tales|tarts|tears|wares|warts|water|wears
  ["slain-spine","slain","spine","lines","pains",2,"","","lines-pains",7], // allWords 10: aisle|lanes|leans|liens|nails|panes|pines|sepia|snail|snipe
  ["arts-echo","arts","echo","hers","taco",3,"","","hers-taco",10], // allWords 13: acts|cash|cast|cats|coat|hero|rash|rats|rest|sect|star|tore|tsar
  ["resin-trout","resin","trout","rinse","tutor",2,"","","rinse-tutor",14], // allWords 22: inset|intro|nitro|nurse|outer|reins|risen|rites|rouen|route|runes|runts|siren|stein|strut|sturt|tiers|tires|tries|trust|tunes|turns
  ["dial-tops","dial","tops","laid","spot",3,"","","laid-spot",19], // allWords 18: aids|alto|dips|dosa|load|oats|pits|plod|plot|pods|post|pots|said|soda|spit|stop|tail|tips
  ["cold-dish","cold","dish","disc","hold",4,"","","disc-hold",23], // allWords 4: clod|docs|loch|odds
  ["clues-fears","clues","fears","cares","fuels",2,"","","cares-fuels",8], // allWords 14: acres|cease|cures|curls|curse|false|fares|fleas|laces|leafs|races|safer|scale|scare
  ["know-then","know","then","honk","newt",3,"","","honk-newt",11], // allWords 3: knew|town|went
  ["nag-old","old","nag","log","and",2,"","","and-log",7], // allWords 1: ago
  ["dock-gush","dock","gush","duck","gosh",1,"","","duck-gosh",1], // allWords 4: chug|dusk|hogs|hugs
  ["rich-town","rich","town","corn","with",4,"","","corn-with",13], // allWords 4: itch|twin|whit|worn
  ["depot-stern","depot","stern","opted","rents",3,"","","opted-rents",25], // allWords 21: deter|ender|ester|noted|notes|onset|opens|pesto|poets|reset|seton|sneer|steer|stone|strep|terse|toned|tones|totes|trees|trend
  ["shear-villa","shear","villa","shale","viral",4,"","","shale-viral",17], // allWords 19: aisle|alias|alive|arise|avail|hales|halls|halve|hares|heals|hears|leash|liars|liver|rails|raise|rival|shall|share
  ["swan-taxi","swan","taxi","axis","want",2,"","","axis-want",7], // allWords 1: wait
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
  "halt-pray": "male deer · stage action",
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
  "blind-clack": "not seeing · sharp snap | flip",
  "logs-tiff": "wood records · petty spat | flip",
  "bone-pity": "skeleton piece · sympathetic sorrow | flip",
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
  "dial-liar": "placed down · train track | flip",
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
  "felt-last": "opposite of right · seasoning grain",
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
  "meet-wolf": "move smoothly · swarm with life | flip",
  "lets-loop": "animal hide · alone",
  "frond-unity": "stylish · circular | flip",
  "genes-toast": "bearded grazers · strained",
  "cafe-sack": "woven container · front side",
  "filed-metal": "boneless cut · award disc",
  "drop-user": "decant · colour group",
  "purge-roses": "cords · sudden rise | flip",
  "pep-ray": "for each · chatter",
  "anger-talks": "extent · plant stem",
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
  "dial-tops": "placed down · marked place | flip",
  "cold-dish": "round plate · keep in grip | flip",
  "clues-fears": "looks after · energy sources | flip",
  "know-then": "car horn sound · pond lizard | flip",
  "nag-old": "wood record · joining word | flip",
  "dock-gush": "water bird · mild surprise | flip",
  "rich-town": "yellow kernels · alongside | flip",
  "depot-stern": "selected · leases | flip",
  "shear-villa": "layered rock · internet-popular",
  "swan-taxi": "central line · desire | flip",
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
  "goose-paths": ["gates","ghost","paste","pasts","pesto","poets","posts","septa","soaps","spate","spots","stops","tapes"],
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
  "grew-wore": ["gore","ogre"],
  "ended-poets": ["dense","dents","depot","doped","pesto","posed","spend","spent","teens","tends","tense"],
  "down-glue": ["duel","gown","lewd","udon","undo","weld"],
  "din-won": ["now","own"],
  "nasal-tense": ["asset","atlas","eaten","lanes","lasts","leans","least","salts","seats","senna","slant","slate","slats","stale","steal","tales","tease","teens"],
  "angle-bowls": ["angel","below","blows","bowel","glean","globe","goals","lawns"],
  "cram-sets": ["aces","arcs","arms","came","case","mace","mars","mesa","rams","same","scar","seam","seas","sect"],
  "slow-tend": ["dent","does","dose","ends","lows","news","owes","owls","send","sewn","sold","told","went","woes"],
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
  "halt-pray": ["part","plat","trap"],
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
  "lists-strap": ["lapis","liars","pairs","parts","pasts","pilar","rails","sails","salts","slats","slits","spilt","spits","splat","split","stars","stirs","traps","trips"],
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
  "hard-pelt": ["dahl","halt","hart","herd","plat","trap"],
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
  "rind-tear": ["arid","dare","date","dear","dent","nerd","raid","rare","rate","read","rent","tend"],
  "bar-pot": ["bat","bot","bra","bro","opt","pat","pro","rap","tab","top"],
  "great-horse": ["eager","earth","ethos","gator","goers","grate","hater","heart","heres","heros","horst","rager","serge","sheer","shore","those","torah"],
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
  "drill-store": ["drier","droll","islet","lilts","loser","older","order","rider","riled","riser","rites","roles","still","stole","tiers","tiled","tiles","tires","tolls","tried","tries"],
  "fair-loud": ["dial","dual","idol","lair","liar","ludo","rail"],
  "roads-steel": ["alert","alter","arose","asset","aster","darts","doers","doses","ester","later","least","older","rates","reset","seats","slate","sleet","sodas","stale","stare","steal","tales","tears","terse","trees"],
  "bare-down": ["barn","bear","born","bran","dare","darn","dear","owed","rand","read","redo","robe","rode","wade","wand"],
  "pools-tides": ["diets","plods","poise","polis","posed","sited","sloop","spied","spoil","spool","stool","tools"],
  "ape-arc": ["are","car","era","pac"],
  "seen-sets": ["nest","sent","tens"],
  "modes-polar": ["demos","domes","lopes","molar","moles","morel","pedro","poles","roped","slope"],
  "mint-opal": ["atop","lamp","lima","lion","mail","tamp"],
  "aced-yell": ["clad","dale","deal","lace","lead"],
  "began-piper": ["barge","being","binge","grape","gripe","pager"],
  "doll-swap": ["also","awls","load","paws","soap","wasp"],
  "hangs-light": ["glint","highs","night","sling","thing"],
  "necks-rotor": ["cones","cores","crone","crore","knots","notes","onset","recon","retro","rocks","roost","roots","scone","score","seton","stone","store","stork","toner","tones","torso"],
  "deep-when": ["peed","weep"],
  "huge-plan": ["hale","heal","leap","pale"],
  "dodge-tales": ["dales","deals","dosed","gated","glade","golds","leads","least","slate","stade","stale","stead","steal","stole"],
  "canoe-loyal": ["allay","alone","canal","colon"],
  "died-note": ["dine","dint","done","edit","tide","tied","tone"],
  "name-team": ["mana","mane","mate","mean","meet","meta","tame","teem"],
  "crowd-large": ["glare","lager","lower","regal"],
  "fiery-stand": ["artsy","darts","dents","draft","dries","fairy","fiend","fired","fried","nasty","raids","rides","sired","snide","tends","trays","tyres"],
  "doom-spot": ["moos","post","pots","stop"],
  "scamp-scent": ["scant"],
  "clown-three": ["cheer","ether","there","towel"],
  "dean-rent": ["date","dent","earn","rate","tear"],
  "rate-slip": ["east","eats","lest","lets","lies","lips","pair","part","past","pats","seat","spat","taps","tear","teas"],
  "blind-crank": ["bland","blank","blink","brink","clank"],
  "buck-case": ["aces","back","base","bask","cask","cues","suck"],
  "paste-rests": ["aster","ester","pasts","pests","rates","reset","septa","spate","stars","steep","steer","tapes","tears","terse","trees"],
  "each-kegs": ["aces","ache","ages","case","cask","ghee","hack","sack"],
  "eye-its": ["set","sit","tee"],
  "waft-wine": ["anew","twin"],
  "sinks-torch": ["chins","cross","honks","knits","knots","shirk","skins","skirt","stink","stork","think"],
  "gouge-nerve": ["goner","gorge","green","grove","never","venue","verge"],
  "demo-jobs": ["dome","doom","mode","mods","mood"],
  "roof-urge": ["four","gore","ogre"],
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
  "avail-still": ["lilts","silva","stall","vials"],
  "cart-save": ["acre","arts","care","cave","ears","eras","rats","sera","star","tsar","vase"],
  "needs-shows": ["dense","doses","nodes","nosed","sheds"],
  "coat-full": ["clot","coal","cola","colt","loaf","loft","taco"],
  "earn-pour": ["euro","near","rare"],
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
  "rodeo-short": ["ethos","horde","horst","odors","roost","roots","rotor","those","torso"],
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
  "dial-liar": ["arid","lair","raid"],
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
  "felt-last": ["fast","fats","flat","lest","lets","tall","tell"],
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
  "banks-dolly": ["balls","bally","dolls","knobs","lands"],
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
  "breed-spoke": ["bored","doers","dorks","keeps","peeks","pokes","posed","reeds","reeks"],
  "seal-sets": ["lest","sale"],
  "fits-pass": ["fast","fats","fist","past","pats","pits","spat","spit","taps","tips"],
  "roman-table": ["abate","baron","baton","manta","metal","morel","motel","realm"],
  "fate-nest": ["ante","ants","fast","fats","feat","fees","feet","feta","fete","neat","nets","sane","seen","sent","teen","tens"],
  "lemur-paste": ["least","lures","metal","parts","pause","purse","rules","septa","slate","sleet","spate","stale","steal","steel","strap","strep","super","supra","tales","tapes","tramp","traps"],
  "sees-yaks": ["easy","keys","seas"],
  "knots-scalp": ["casts","claps","clasp","class","costs","lacks","locks","pacts","pants","plank","scots","slack","stack","stank","tacks","tanks"],
  "bill-fist": ["fits","flit","libs","lift","sift"],
  "baa-bro": ["bra","rob"],
  "meet-wolf": ["flew","melt","tome"],
  "lets-loop": ["lest","lose","lost","lots","plot","pole","polo","pool","slot","sole"],
  "frond-unity": ["donut","drift","forty"],
  "genes-toast": ["asset","gases","gates","gents","nests","notes","onset","sages","seats","seton","songs","stage","state","stent","stoat","stone","taste","tease","teens","tenet","tents","tones","tongs"],
  "cafe-sack": ["aces","case","safe"],
  "filed-metal": ["admit","fated","fella","fetal","field","flail","fleet","mated","mille","tamed","timed"],
  "drop-user": ["opus","ours","pods","prod","pure","rods","ruse","soup","sour","sped","sure"],
  "purge-roses": ["goers","grope","gross","pesos","pores","poser","poses","posse","prose","puree","purse","reuse","roger","rupee","sores","spore","super","urges","users"],
  "pep-ray": ["pay","rap","yep"],
  "anger-talks": ["alert","alter","gates","gents","grate","great","lanes","later","leans","learn","least","renal","slate","stage","stale","steal","tales"],
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
  "dial-tops": ["aids","alto","dips","dosa","load","oats","pits","plod","plot","pods","post","pots","said","soda","spit","stop","tail","tips"],
  "cold-dish": ["clod","docs","loch","odds"],
  "clues-fears": ["acres","cease","cures","curls","curse","false","fares","fleas","laces","leafs","races","safer","scale","scare"],
  "know-then": ["knew","town","went"],
  "nag-old": ["ago"],
  "dock-gush": ["chug","dusk","hogs","hugs"],
  "rich-town": ["itch","twin","whit","worn"],
  "depot-stern": ["deter","ender","ester","noted","notes","onset","opens","pesto","poets","reset","seton","sneer","steer","stone","strep","terse","toned","tones","totes","trees","trend"],
  "shear-villa": ["aisle","alias","alive","arise","avail","hales","halls","halve","hares","heals","hears","leash","liars","liver","rails","raise","rival","shall","share"],
  "swan-taxi": ["wait"],
};
