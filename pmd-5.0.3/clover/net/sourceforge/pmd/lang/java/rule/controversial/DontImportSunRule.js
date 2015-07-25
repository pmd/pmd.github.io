var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":16,"id":13880,"methods":[{"el":14,"sc":5,"sl":8}],"name":"DontImportSunRule","sl":6}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_708":{"methods":[{"sl":8}],"name":"testPmdOptions","pass":true,"statements":[{"sl":9},{"sl":10},{"sl":13}]},"test_747":{"methods":[{"sl":8}],"name":"testResourceFileCommands","pass":true,"statements":[{"sl":9},{"sl":10},{"sl":13}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [708, 747], [708, 747], [708, 747], [], [], [708, 747], [], [], []]
