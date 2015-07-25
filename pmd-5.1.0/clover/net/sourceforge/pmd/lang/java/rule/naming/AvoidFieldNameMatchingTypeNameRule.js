var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":26,"id":18213,"methods":[{"el":17,"sc":5,"sl":12},{"el":25,"sc":5,"sl":19}],"name":"AvoidFieldNameMatchingTypeNameRule","sl":10}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_398":{"methods":[{"sl":12},{"sl":19}],"name":"testPmdOptions","pass":true,"statements":[{"sl":13},{"sl":16},{"sl":20},{"sl":21},{"sl":24}]},"test_902":{"methods":[{"sl":12},{"sl":19}],"name":"testResourceFileCommands","pass":true,"statements":[{"sl":13},{"sl":14},{"sl":16},{"sl":20},{"sl":21},{"sl":22},{"sl":24}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [], [902, 398], [902, 398], [902], [], [902, 398], [], [], [902, 398], [902, 398], [902, 398], [902], [], [902, 398], [], []]
