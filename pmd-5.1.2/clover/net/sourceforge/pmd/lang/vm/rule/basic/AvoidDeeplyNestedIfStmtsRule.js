var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":55,"id":29538,"methods":[{"el":28,"sc":5,"sl":26},{"el":34,"sc":5,"sl":30},{"el":38,"sc":5,"sl":36},{"el":42,"sc":5,"sl":40},{"el":53,"sc":2,"sl":45}],"name":"AvoidDeeplyNestedIfStmtsRule","sl":13}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_513":{"methods":[{"sl":26}],"name":"testReadWriteRoundTrip","pass":true,"statements":[{"sl":27}]},"test_817":{"methods":[{"sl":26}],"name":"testAllPMDBuiltInRulesMeetConventions","pass":true,"statements":[{"sl":27}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [817, 513], [817, 513], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], []]
