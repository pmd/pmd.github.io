var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":26,"id":8220,"methods":[{"el":16,"sc":5,"sl":14},{"el":21,"sc":5,"sl":18},{"el":25,"sc":5,"sl":23}],"name":"PathElement","sl":8}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_638":{"methods":[{"sl":14},{"sl":23}],"name":"testPmdOptions","pass":true,"statements":[{"sl":15},{"sl":24}]},"test_722":{"methods":[{"sl":14},{"sl":18},{"sl":23}],"name":"testResourceFileCommands","pass":true,"statements":[{"sl":15},{"sl":19},{"sl":20},{"sl":24}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [722, 638], [722, 638], [], [], [722], [722], [722], [], [], [722, 638], [722, 638], [], [], []]
