var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":51,"id":25498,"methods":[{"el":30,"sc":5,"sl":28},{"el":50,"sc":5,"sl":32}],"name":"ExcessiveNodeCountRule","sl":25}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_169":{"methods":[{"sl":28}],"name":"testAllPMDBuiltInRulesMeetConventions","pass":true,"statements":[{"sl":29}]},"test_930":{"methods":[{"sl":28}],"name":"testReadWriteRoundTrip","pass":true,"statements":[{"sl":29}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [930, 169], [930, 169], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], []]
