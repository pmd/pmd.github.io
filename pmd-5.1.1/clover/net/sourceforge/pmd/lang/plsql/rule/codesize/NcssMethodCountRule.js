var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":34,"id":25395,"methods":[{"el":22,"sc":5,"sl":19},{"el":27,"sc":5,"sl":24},{"el":33,"sc":5,"sl":29}],"name":"NcssMethodCountRule","sl":14}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_169":{"methods":[{"sl":19}],"name":"testAllPMDBuiltInRulesMeetConventions","pass":true,"statements":[{"sl":20},{"sl":21}]},"test_930":{"methods":[{"sl":19}],"name":"testReadWriteRoundTrip","pass":true,"statements":[{"sl":20},{"sl":21}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [930, 169], [930, 169], [930, 169], [], [], [], [], [], [], [], [], [], [], [], [], []]
