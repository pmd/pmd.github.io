var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":19,"id":24976,"methods":[{"el":18,"sc":5,"sl":15}],"name":"ExcessiveObjectLengthRule","sl":14}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_309":{"methods":[{"sl":15}],"name":"testAllPMDBuiltInRulesMeetConventions","pass":true,"statements":[{"sl":16},{"sl":17}]},"test_752":{"methods":[{"sl":15}],"name":"testReadWriteRoundTrip","pass":true,"statements":[{"sl":16},{"sl":17}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [309, 752], [309, 752], [309, 752], [], []]
