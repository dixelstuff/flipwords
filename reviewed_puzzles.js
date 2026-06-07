// TEMPORARY Mode 20 output. Do not treat as reviewed_puzzles.js unless manually approved.
const puzzleRows = [
  ["egg-tea","egg","tea","age","get",3,"","","cannot be reversed",10,87,2,5,0], // allWords 3: ate|eat|tag
  ["asset-heats","asset","heats","ashes","state",5,"","","cannot be reversed",29,87,2,5,0], // allWords 11: eases|haste|hates|seats|sheet|stash|stats|taste|tease|these|theta
  ["tool-unto","tool","unto","lout","onto",4,"","","lout-onto",23,92,1,4,0], // allWords 2: loot|otto
  ["bribe-cater","bribe","cater","erect","rabbi",5,"","","erect-rabbi",32,92,1,4,0], // allWords 5: beret|carte|crate|react|trace
  ["eye-led","eye","led","dye","eel",3,"","","dye-eel",10,81,3,7,0], // allWords 1: dee
  ["also-loop","also","loop","opal","solo",4,"","","opal-solo",20,86,2,6,0], // allWords 9: alps|laps|pals|poll|polo|pool|slap|slop|soap
  ["goof-toga","toga","goof","agog","foot",4,"","","agog-foot",23,80,3,8,0], // allWords 1: goat
  ["arena-sales","sales","arena","erase","nasal",5,"","","erase-nasal",26,87,2,5,0], // allWords 10: earls|earns|eases|laser|nears|reals|saree|seals|snare|snarl
  ["gear-guru","gear","guru","ragu","urge",3,"","","ragu-urge",20,61,6,9,6], // allWords 1: rage
  ["beads-issue","issue","beads","abuse","sides",3,"","","abuse-sides",21,92,1,4,0], // allWords 5: aides|aside|based|buses|ideas
  ["easy-sake","easy","sake","ease","yaks",3,"","","ease-yaks",23,75,4,9,0], // allWords 2: says|seas
  ["adds-chai","adds","chai","acid","dash",3,"","","acid-dash",21,92,1,4,0], // allWords 2: cash|dads
  ["axed-some","some","axed","dose","exam",4,"","","dose-exam",23,92,1,4,0], // allWords 2: does|mods
  ["serve-sleep","sleep","serve","elves","peers",5,"","","cannot be reversed",32,87,2,5,0], // allWords 8: leers|peels|reels|sever|speer|spree|veers|verse
  ["elope-pitch","pitch","elope","elect","hippo",5,"","","elect-hippo",34,92,1,4,0], // allWords 1: ethic
  ["used-wise","used","wise","uses","wide",3,"","","uses-wide",7,85,2,7,0], // allWords 2: dues|sued
  ["edged-sense","sense","edged","dense","edges",4,"","","dense-edges",14,92,1,4,0], // allWords 4: ended|geese|needs|sends
  ["llama-rival","llama","rival","alarm","villa",4,"","","alarm-villa",21,86,2,6,0], // allWords 3: avail|larva|viral
  ["reset-stoke","reset","stoke","otter","seeks",5,"","","otter-seeks",28,92,1,4,0], // allWords 7: ester|reeks|steer|terse|tests|totes|trees
  ["ergo-reed","ergo","reed","ogre","deer",3,"","","deer-ogre",19,87,2,5,0], // allWords 2: edge|gore
];

const puzzleClues = {
  "egg-tea": "years lived · obtain",
  "asset-heats": "fire remains · condition",
  "tool-unto": "boor · upon",
  "bribe-cater": "upright · synagogue teacher | flip",
  "eye-led": "fabric stain · slippery fish",
  "also-loop": "milky gem · unaccompanied",
  "goof-toga": "wide-eyed · walking base",
  "arena-sales": "rub out · nose-related",
  "gear-guru": "Italian sauce · inner push",
  "beads-issue": "misuse badly · edges",
  "easy-sake": "comfort · long-haired oxen",
  "adds-chai": "sour chemical · quick mark",
  "axed-some": "measured medicine · knowledge test",
  "serve-sleep": "pointy-eared folk · equals in rank",
  "elope-pitch": "chosen by vote · river giant",
  "used-wise": "employs · broad",
  "edged-sense": "tightly packed · borders",
  "llama-rival": "warning signal · holiday house",
  "reset-stoke": "river animal · searches",
  "ergo-reed": "fairy-tale brute · antlered animal",
};

const clueBonusWords = {
  "egg-tea": ["ate","eat","tag"],
  "asset-heats": ["eases","haste","hates","seats","sheet","stash","stats","taste","tease","these","theta"],
  "tool-unto": ["loot","otto"],
  "bribe-cater": ["beret","carte","crate","react","trace"],
  "eye-led": ["dee"],
  "also-loop": ["alps","laps","pals","poll","polo","pool","slap","slop","soap"],
  "goof-toga": ["goat"],
  "arena-sales": ["earls","earns","eases","laser","nears","reals","saree","seals","snare","snarl"],
  "gear-guru": ["rage"],
  "beads-issue": ["aides","aside","based","buses","ideas"],
  "easy-sake": ["says","seas"],
  "adds-chai": ["cash","dads"],
  "axed-some": ["does","mods"],
  "serve-sleep": ["leers","peels","reels","sever","speer","spree","veers","verse"],
  "elope-pitch": ["ethic"],
  "used-wise": ["dues","sued"],
  "edged-sense": ["ended","geese","needs","sends"],
  "llama-rival": ["avail","larva","viral"],
  "reset-stoke": ["ester","reeks","steer","terse","tests","totes","trees"],
  "ergo-reed": ["edge","gore"],
};
