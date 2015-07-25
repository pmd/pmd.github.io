var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":27,"id":25388,"methods":[{"el":21,"sc":5,"sl":18},{"el":26,"sc":5,"sl":24}],"name":"ExcessiveParameterListRule","sl":17}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_513":{"methods":[{"sl":18}],"name":"testReadWriteRoundTrip","pass":true,"statements":[{"sl":19},{"sl":20}]},"test_817":{"methods":[{"sl":18}],"name":"testAllPMDBuiltInRulesMeetConventions","pass":true,"statements":[{"sl":19},{"sl":20}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [817, 513], [817, 513], [817, 513], [], [], [], [], [], [], []]
