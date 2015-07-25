var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":20,"id":18043,"methods":[{"el":13,"sc":2,"sl":10},{"el":18,"sc":2,"sl":15}],"name":"GuardDebugLoggingRule","sl":8}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_513":{"methods":[{"sl":10}],"name":"testReadWriteRoundTrip","pass":true,"statements":[{"sl":11},{"sl":12}]},"test_612":{"methods":[{"sl":10},{"sl":15}],"name":"testResourceFileCommands","pass":true,"statements":[{"sl":11},{"sl":12}]},"test_627":{"methods":[{"sl":10},{"sl":15}],"name":"testPmdOptions","pass":true,"statements":[{"sl":11},{"sl":12}]},"test_817":{"methods":[{"sl":10}],"name":"testAllPMDBuiltInRulesMeetConventions","pass":true,"statements":[{"sl":11},{"sl":12}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [817, 627, 612, 513], [817, 627, 612, 513], [817, 627, 612, 513], [], [], [627, 612], [], [], [], [], []]
