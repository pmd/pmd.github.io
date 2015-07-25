var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":31,"id":22104,"methods":[{"el":22,"sc":5,"sl":20},{"el":26,"sc":5,"sl":24},{"el":30,"sc":5,"sl":28}],"name":"VariableUsageFinderFunction","sl":14}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_102":{"methods":[{"sl":20},{"sl":24},{"sl":28}],"name":"testLookingForUsed","pass":true,"statements":[{"sl":21},{"sl":25},{"sl":29}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [102], [102], [], [], [102], [102], [], [], [102], [102], [], []]
