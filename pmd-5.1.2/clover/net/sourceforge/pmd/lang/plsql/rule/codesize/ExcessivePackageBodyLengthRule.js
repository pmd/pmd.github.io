var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":19,"id":25382,"methods":[{"el":18,"sc":5,"sl":15}],"name":"ExcessivePackageBodyLengthRule","sl":14}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_513":{"methods":[{"sl":15}],"name":"testReadWriteRoundTrip","pass":true,"statements":[{"sl":16},{"sl":17}]},"test_817":{"methods":[{"sl":15}],"name":"testAllPMDBuiltInRulesMeetConventions","pass":true,"statements":[{"sl":16},{"sl":17}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [817, 513], [817, 513], [817, 513], [], []]
