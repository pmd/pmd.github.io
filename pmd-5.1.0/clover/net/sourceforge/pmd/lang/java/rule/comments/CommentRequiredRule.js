var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":207,"id":14322,"methods":[{"el":62,"sc":2,"sl":57},{"el":74,"sc":2,"sl":64},{"el":100,"sc":2,"sl":76},{"el":106,"sc":2,"sl":102},{"el":112,"sc":2,"sl":108},{"el":157,"sc":2,"sl":114},{"el":183,"sc":2,"sl":159},{"el":190,"sc":2,"sl":185},{"el":198,"sc":2,"sl":192},{"el":206,"sc":2,"sl":203}],"name":"CommentRequiredRule","sl":20},{"el":39,"id":14322,"methods":[{"el":29,"sc":3,"sl":27},{"el":38,"sc":3,"sl":31}],"name":"CommentRequiredRule.CommentRequirement","sl":22}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_309":{"methods":[{"sl":27},{"sl":31},{"sl":57}],"name":"testAllPMDBuiltInRulesMeetConventions","pass":true,"statements":[{"sl":28},{"sl":32},{"sl":33},{"sl":34},{"sl":35},{"sl":37},{"sl":58},{"sl":59},{"sl":60},{"sl":61}]},"test_398":{"methods":[{"sl":57},{"sl":64},{"sl":76},{"sl":102},{"sl":108},{"sl":114},{"sl":159},{"sl":185},{"sl":192},{"sl":203}],"name":"testPmdOptions","pass":true,"statements":[{"sl":58},{"sl":59},{"sl":60},{"sl":61},{"sl":65},{"sl":67},{"sl":68},{"sl":78},{"sl":81},{"sl":82},{"sl":83},{"sl":84},{"sl":99},{"sl":104},{"sl":105},{"sl":110},{"sl":111},{"sl":115},{"sl":117},{"sl":120},{"sl":121},{"sl":122},{"sl":123},{"sl":124},{"sl":138},{"sl":139},{"sl":140},{"sl":141},{"sl":142},{"sl":161},{"sl":164},{"sl":165},{"sl":166},{"sl":167},{"sl":182},{"sl":187},{"sl":189},{"sl":194},{"sl":205}]},"test_752":{"methods":[{"sl":57}],"name":"testReadWriteRoundTrip","pass":true,"statements":[{"sl":58},{"sl":59},{"sl":60},{"sl":61}]},"test_902":{"methods":[{"sl":57},{"sl":64},{"sl":76},{"sl":102},{"sl":108},{"sl":114},{"sl":159},{"sl":185},{"sl":192},{"sl":203}],"name":"testResourceFileCommands","pass":true,"statements":[{"sl":58},{"sl":59},{"sl":60},{"sl":61},{"sl":65},{"sl":67},{"sl":68},{"sl":78},{"sl":81},{"sl":82},{"sl":83},{"sl":84},{"sl":99},{"sl":104},{"sl":105},{"sl":110},{"sl":111},{"sl":115},{"sl":117},{"sl":120},{"sl":121},{"sl":122},{"sl":123},{"sl":124},{"sl":138},{"sl":139},{"sl":140},{"sl":141},{"sl":142},{"sl":161},{"sl":164},{"sl":165},{"sl":166},{"sl":167},{"sl":182},{"sl":187},{"sl":189},{"sl":194},{"sl":205}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [309], [309], [], [], [309], [309], [309], [309], [309], [], [309], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [309, 752, 902, 398], [309, 752, 902, 398], [309, 752, 902, 398], [309, 752, 902, 398], [309, 752, 902, 398], [], [], [902, 398], [902, 398], [], [902, 398], [902, 398], [], [], [], [], [], [], [], [902, 398], [], [902, 398], [], [], [902, 398], [902, 398], [902, 398], [902, 398], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [902, 398], [], [], [902, 398], [], [902, 398], [902, 398], [], [], [902, 398], [], [902, 398], [902, 398], [], [], [902, 398], [902, 398], [], [902, 398], [], [], [902, 398], [902, 398], [902, 398], [902, 398], [902, 398], [], [], [], [], [], [], [], [], [], [], [], [], [], [902, 398], [902, 398], [902, 398], [902, 398], [902, 398], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [902, 398], [], [902, 398], [], [], [902, 398], [902, 398], [902, 398], [902, 398], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [902, 398], [], [], [902, 398], [], [902, 398], [], [902, 398], [], [], [902, 398], [], [902, 398], [], [], [], [], [], [], [], [], [902, 398], [], [902, 398], [], []]
