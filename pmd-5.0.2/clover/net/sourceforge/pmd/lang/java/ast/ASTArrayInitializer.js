var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":21,"id":9489,"methods":[{"el":8,"sc":5,"sl":6},{"el":12,"sc":5,"sl":10},{"el":20,"sc":5,"sl":18}],"name":"ASTArrayInitializer","sl":5}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_180":{"methods":[{"sl":10},{"sl":18}],"name":"testAll","pass":true,"statements":[{"sl":11},{"sl":19}]},"test_369":{"methods":[{"sl":10},{"sl":18}],"name":"testPmdOptions","pass":true,"statements":[{"sl":11},{"sl":19}]},"test_596":{"methods":[{"sl":10}],"name":"testParsersCases","pass":true,"statements":[{"sl":11}]},"test_751":{"methods":[{"sl":10},{"sl":18}],"name":"testResourceFileCommands","pass":true,"statements":[{"sl":11},{"sl":19}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [180, 751, 369, 596], [180, 751, 369, 596], [], [], [], [], [], [], [180, 751, 369], [180, 751, 369], [], []]
