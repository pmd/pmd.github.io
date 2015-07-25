var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":26,"id":17289,"methods":[{"el":17,"sc":5,"sl":12},{"el":25,"sc":5,"sl":19}],"name":"AvoidFieldNameMatchingTypeNameRule","sl":10}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_708":{"methods":[{"sl":12},{"sl":19}],"name":"testPmdOptions","pass":true,"statements":[{"sl":13},{"sl":16},{"sl":20},{"sl":21},{"sl":24}]},"test_747":{"methods":[{"sl":12},{"sl":19}],"name":"testResourceFileCommands","pass":true,"statements":[{"sl":13},{"sl":14},{"sl":16},{"sl":20},{"sl":21},{"sl":22},{"sl":24}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [], [708, 747], [708, 747], [747], [], [708, 747], [], [], [708, 747], [708, 747], [708, 747], [747], [], [708, 747], [], []]
