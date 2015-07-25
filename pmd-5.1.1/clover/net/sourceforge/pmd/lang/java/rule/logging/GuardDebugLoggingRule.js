var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":20,"id":17964,"methods":[{"el":13,"sc":2,"sl":10},{"el":18,"sc":2,"sl":15}],"name":"GuardDebugLoggingRule","sl":8}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_169":{"methods":[{"sl":10}],"name":"testAllPMDBuiltInRulesMeetConventions","pass":true,"statements":[{"sl":11},{"sl":12}]},"test_638":{"methods":[{"sl":10},{"sl":15}],"name":"testPmdOptions","pass":true,"statements":[{"sl":11},{"sl":12}]},"test_722":{"methods":[{"sl":10},{"sl":15}],"name":"testResourceFileCommands","pass":true,"statements":[{"sl":11},{"sl":12}]},"test_930":{"methods":[{"sl":10}],"name":"testReadWriteRoundTrip","pass":true,"statements":[{"sl":11},{"sl":12}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [930, 169, 722, 638], [930, 169, 722, 638], [930, 169, 722, 638], [], [], [722, 638], [], [], [], [], []]
