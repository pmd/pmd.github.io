var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":27,"id":11999,"methods":[{"el":17,"sc":2,"sl":13},{"el":21,"sc":2,"sl":19},{"el":26,"sc":2,"sl":23}],"name":"JavadocElement","sl":9}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_271":{"methods":[{"sl":13}],"name":"testParsersCases","pass":true,"statements":[{"sl":14},{"sl":16}]},"test_311":{"methods":[{"sl":13}],"name":"testInnerOuterClass","pass":true,"statements":[{"sl":14},{"sl":16}]},"test_556":{"methods":[{"sl":13}],"name":"testBasic","pass":true,"statements":[{"sl":14},{"sl":16}]},"test_612":{"methods":[{"sl":13}],"name":"testResourceFileCommands","pass":true,"statements":[{"sl":14},{"sl":16}]},"test_627":{"methods":[{"sl":13}],"name":"testPmdOptions","pass":true,"statements":[{"sl":14},{"sl":16}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [], [], [556, 271, 627, 612, 311], [556, 271, 627, 612, 311], [], [556, 271, 627, 612, 311], [], [], [], [], [], [], [], [], [], [], []]
