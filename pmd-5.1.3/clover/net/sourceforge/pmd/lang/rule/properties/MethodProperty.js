var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":309,"id":28130,"methods":[{"el":42,"sc":3,"sl":35},{"el":52,"sc":5,"sl":49},{"el":65,"sc":5,"sl":61},{"el":72,"sc":5,"sl":70},{"el":85,"sc":5,"sl":77},{"el":115,"sc":5,"sl":93},{"el":141,"sc":5,"sl":121},{"el":209,"sc":5,"sl":165},{"el":217,"sc":5,"sl":215},{"el":231,"sc":5,"sl":229},{"el":245,"sc":5,"sl":243},{"el":259,"sc":5,"sl":257},{"el":271,"sc":5,"sl":268},{"el":282,"sc":5,"sl":277},{"el":290,"sc":5,"sl":287},{"el":298,"sc":5,"sl":296},{"el":308,"sc":5,"sl":306}],"name":"MethodProperty","sl":24}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_204":{"methods":[{"sl":49},{"sl":61},{"sl":77},{"sl":93},{"sl":121},{"sl":165},{"sl":215},{"sl":229},{"sl":268},{"sl":277},{"sl":306}],"name":"testValueFrom","pass":true,"statements":[{"sl":50},{"sl":51},{"sl":62},{"sl":63},{"sl":64},{"sl":79},{"sl":80},{"sl":81},{"sl":82},{"sl":95},{"sl":97},{"sl":98},{"sl":99},{"sl":101},{"sl":103},{"sl":104},{"sl":109},{"sl":110},{"sl":114},{"sl":123},{"sl":125},{"sl":131},{"sl":132},{"sl":133},{"sl":170},{"sl":171},{"sl":175},{"sl":176},{"sl":177},{"sl":181},{"sl":182},{"sl":187},{"sl":188},{"sl":192},{"sl":193},{"sl":197},{"sl":198},{"sl":202},{"sl":203},{"sl":204},{"sl":205},{"sl":208},{"sl":216},{"sl":230},{"sl":270},{"sl":280},{"sl":281},{"sl":307}]},"test_438":{"methods":[{"sl":49},{"sl":61},{"sl":77},{"sl":93},{"sl":121},{"sl":165}],"name":"testAsMethodOn","pass":true,"statements":[{"sl":50},{"sl":51},{"sl":62},{"sl":63},{"sl":64},{"sl":79},{"sl":80},{"sl":81},{"sl":82},{"sl":95},{"sl":97},{"sl":98},{"sl":99},{"sl":101},{"sl":103},{"sl":104},{"sl":109},{"sl":110},{"sl":111},{"sl":112},{"sl":114},{"sl":123},{"sl":125},{"sl":131},{"sl":132},{"sl":133},{"sl":170},{"sl":171},{"sl":175},{"sl":176},{"sl":177},{"sl":181},{"sl":182},{"sl":187},{"sl":188},{"sl":192},{"sl":193},{"sl":197},{"sl":198},{"sl":202},{"sl":203},{"sl":204},{"sl":205},{"sl":208}]},"test_465":{"methods":[{"sl":229},{"sl":277},{"sl":287},{"sl":296}],"name":"testErrorForBad","pass":true,"statements":[{"sl":230},{"sl":280},{"sl":281},{"sl":289},{"sl":297}]},"test_505":{"methods":[{"sl":229},{"sl":277},{"sl":296}],"name":"testErrorFor","pass":true,"statements":[{"sl":230},{"sl":280},{"sl":281},{"sl":297}]},"test_511":{"methods":[{"sl":229},{"sl":277}],"name":"testConstructors","pass":true,"statements":[{"sl":230},{"sl":280},{"sl":281}]},"test_551":{"methods":[{"sl":49},{"sl":61},{"sl":77},{"sl":93},{"sl":121},{"sl":165}],"name":"testAsDelimitedString","pass":true,"statements":[{"sl":50},{"sl":51},{"sl":62},{"sl":63},{"sl":64},{"sl":79},{"sl":80},{"sl":81},{"sl":82},{"sl":84},{"sl":95},{"sl":97},{"sl":98},{"sl":99},{"sl":101},{"sl":103},{"sl":104},{"sl":105},{"sl":106},{"sl":109},{"sl":110},{"sl":111},{"sl":112},{"sl":114},{"sl":123},{"sl":125},{"sl":126},{"sl":127},{"sl":128},{"sl":131},{"sl":132},{"sl":133},{"sl":170},{"sl":171},{"sl":175},{"sl":176},{"sl":177},{"sl":181},{"sl":182},{"sl":187},{"sl":188},{"sl":192},{"sl":193},{"sl":197},{"sl":198},{"sl":199},{"sl":202},{"sl":203},{"sl":204},{"sl":205},{"sl":208}]},"test_772":{"methods":[{"sl":229},{"sl":277},{"sl":296}],"name":"testType","pass":true,"statements":[{"sl":230},{"sl":280},{"sl":281},{"sl":297}]},"test_848":{"methods":[{"sl":121},{"sl":165}],"name":"testAsStringOn","pass":true,"statements":[{"sl":123},{"sl":125},{"sl":131},{"sl":132},{"sl":133},{"sl":170},{"sl":171},{"sl":175},{"sl":176},{"sl":177},{"sl":181},{"sl":182},{"sl":187},{"sl":188},{"sl":192},{"sl":193},{"sl":197},{"sl":198},{"sl":202},{"sl":203},{"sl":204},{"sl":205},{"sl":208}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [438, 204, 551], [438, 204, 551], [438, 204, 551], [], [], [], [], [], [], [], [], [], [438, 204, 551], [438, 204, 551], [438, 204, 551], [438, 204, 551], [], [], [], [], [], [], [], [], [], [], [], [], [438, 204, 551], [], [438, 204, 551], [438, 204, 551], [438, 204, 551], [438, 204, 551], [], [551], [], [], [], [], [], [], [], [], [438, 204, 551], [], [438, 204, 551], [], [438, 204, 551], [438, 204, 551], [438, 204, 551], [], [438, 204, 551], [], [438, 204, 551], [438, 204, 551], [551], [551], [], [], [438, 204, 551], [438, 204, 551], [438, 551], [438, 551], [], [438, 204, 551], [], [], [], [], [], [], [848, 438, 204, 551], [], [848, 438, 204, 551], [], [848, 438, 204, 551], [551], [551], [551], [], [], [848, 438, 204, 551], [848, 438, 204, 551], [848, 438, 204, 551], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [848, 438, 204, 551], [], [], [], [], [848, 438, 204, 551], [848, 438, 204, 551], [], [], [], [848, 438, 204, 551], [848, 438, 204, 551], [848, 438, 204, 551], [], [], [], [848, 438, 204, 551], [848, 438, 204, 551], [], [], [], [], [848, 438, 204, 551], [848, 438, 204, 551], [], [], [], [848, 438, 204, 551], [848, 438, 204, 551], [], [], [], [848, 438, 204, 551], [848, 438, 204, 551], [551], [], [], [848, 438, 204, 551], [848, 438, 204, 551], [848, 438, 204, 551], [848, 438, 204, 551], [], [], [848, 438, 204, 551], [], [], [], [], [], [], [204], [204], [], [], [], [], [], [], [], [], [], [], [], [], [772, 511, 204, 505, 465], [772, 511, 204, 505, 465], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [204], [], [204], [], [], [], [], [], [], [772, 511, 204, 505, 465], [], [], [772, 511, 204, 505, 465], [772, 511, 204, 505, 465], [], [], [], [], [], [465], [], [465], [], [], [], [], [], [], [772, 505, 465], [772, 505, 465], [], [], [], [], [], [], [], [], [204], [204], [], []]
