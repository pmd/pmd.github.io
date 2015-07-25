var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":111,"id":13048,"methods":[{"el":46,"sc":5,"sl":38},{"el":55,"sc":5,"sl":48},{"el":60,"sc":5,"sl":57},{"el":65,"sc":5,"sl":62},{"el":83,"sc":5,"sl":67},{"el":93,"sc":5,"sl":85},{"el":100,"sc":2,"sl":95},{"el":110,"sc":2,"sl":105}],"name":"AvoidBranchingStatementAsLastInLoopRule","sl":18}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_153":{"methods":[{"sl":38}],"name":"minimumPriority","pass":true,"statements":[{"sl":39},{"sl":40},{"sl":41},{"sl":43},{"sl":44},{"sl":45}]},"test_325":{"methods":[{"sl":38}],"name":"testWrongRuleNameExcluded","pass":true,"statements":[{"sl":39},{"sl":40},{"sl":41},{"sl":43},{"sl":44},{"sl":45}]},"test_338":{"methods":[{"sl":38},{"sl":48},{"sl":57},{"sl":62},{"sl":67},{"sl":85},{"sl":95},{"sl":105}],"name":"testResourceFileCommands","pass":true,"statements":[{"sl":39},{"sl":40},{"sl":41},{"sl":43},{"sl":44},{"sl":45},{"sl":51},{"sl":52},{"sl":54},{"sl":59},{"sl":64},{"sl":68},{"sl":69},{"sl":70},{"sl":71},{"sl":73},{"sl":74},{"sl":75},{"sl":77},{"sl":82},{"sl":86},{"sl":87},{"sl":88},{"sl":89},{"sl":97},{"sl":107}]},"test_445":{"methods":[{"sl":38},{"sl":48},{"sl":57},{"sl":62},{"sl":67},{"sl":95},{"sl":105}],"name":"testPmdOptions","pass":true,"statements":[{"sl":39},{"sl":40},{"sl":41},{"sl":43},{"sl":44},{"sl":45},{"sl":51},{"sl":54},{"sl":59},{"sl":64},{"sl":68},{"sl":69},{"sl":73},{"sl":77},{"sl":82},{"sl":97},{"sl":107}]},"test_484":{"methods":[{"sl":38}],"name":"testBasic","pass":true,"statements":[{"sl":39},{"sl":40},{"sl":41},{"sl":43},{"sl":44},{"sl":45}]},"test_57":{"methods":[{"sl":38}],"name":"testExtendedReferences","pass":true,"statements":[{"sl":39},{"sl":40},{"sl":41},{"sl":43},{"sl":44},{"sl":45}]},"test_601":{"methods":[{"sl":38}],"name":"usingDebug","pass":true,"statements":[{"sl":39},{"sl":40},{"sl":41},{"sl":43},{"sl":44},{"sl":45}]},"test_682":{"methods":[{"sl":38}],"name":"changeJavaVersion","pass":true,"statements":[{"sl":39},{"sl":40},{"sl":41},{"sl":43},{"sl":44},{"sl":45}]},"test_715":{"methods":[{"sl":38}],"name":"minimalArgs","pass":true,"statements":[{"sl":39},{"sl":40},{"sl":41},{"sl":43},{"sl":44},{"sl":45}]},"test_76":{"methods":[{"sl":38}],"name":"testReadWriteRoundTrip","pass":true,"statements":[{"sl":39},{"sl":40},{"sl":41},{"sl":43},{"sl":44},{"sl":45}]},"test_832":{"methods":[{"sl":38}],"name":"testRuleSetFileName","pass":true,"statements":[{"sl":39},{"sl":40},{"sl":41},{"sl":43},{"sl":44},{"sl":45}]},"test_864":{"methods":[{"sl":38}],"name":"testAllPMDBuiltInRulesMeetConventions","pass":true,"statements":[{"sl":39},{"sl":40},{"sl":41},{"sl":43},{"sl":44},{"sl":45}]},"test_98":{"methods":[{"sl":38}],"name":"testRuleSetReferenceWithDeprecatedRule","pass":true,"statements":[{"sl":39},{"sl":40},{"sl":41},{"sl":43},{"sl":44},{"sl":45}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [601, 76, 715, 864, 338, 484, 98, 153, 325, 832, 57, 445, 682], [601, 76, 715, 864, 338, 484, 98, 153, 325, 832, 57, 445, 682], [601, 76, 715, 864, 338, 484, 98, 153, 325, 832, 57, 445, 682], [601, 76, 715, 864, 338, 484, 98, 153, 325, 832, 57, 445, 682], [], [601, 76, 715, 864, 338, 484, 98, 153, 325, 832, 57, 445, 682], [601, 76, 715, 864, 338, 484, 98, 153, 325, 832, 57, 445, 682], [601, 76, 715, 864, 338, 484, 98, 153, 325, 832, 57, 445, 682], [], [], [338, 445], [], [], [338, 445], [338], [], [338, 445], [], [], [338, 445], [], [338, 445], [], [], [338, 445], [], [338, 445], [], [], [338, 445], [338, 445], [338, 445], [338], [338], [], [338, 445], [338], [338], [], [338, 445], [], [], [], [], [338, 445], [], [], [338], [338], [338], [338], [338], [], [], [], [], [], [338, 445], [], [338, 445], [], [], [], [], [], [], [], [338, 445], [], [338, 445], [], [], [], []]
