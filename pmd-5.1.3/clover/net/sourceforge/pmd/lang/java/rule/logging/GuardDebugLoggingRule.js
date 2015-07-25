var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":20,"id":18172,"methods":[{"el":13,"sc":2,"sl":10},{"el":18,"sc":2,"sl":15}],"name":"GuardDebugLoggingRule","sl":8}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_338":{"methods":[{"sl":10},{"sl":15}],"name":"testResourceFileCommands","pass":true,"statements":[{"sl":11},{"sl":12}]},"test_445":{"methods":[{"sl":10},{"sl":15}],"name":"testPmdOptions","pass":true,"statements":[{"sl":11},{"sl":12}]},"test_76":{"methods":[{"sl":10}],"name":"testReadWriteRoundTrip","pass":true,"statements":[{"sl":11},{"sl":12}]},"test_864":{"methods":[{"sl":10}],"name":"testAllPMDBuiltInRulesMeetConventions","pass":true,"statements":[{"sl":11},{"sl":12}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [76, 864, 338, 445], [76, 864, 338, 445], [76, 864, 338, 445], [], [], [338, 445], [], [], [], [], []]
