var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":24,"id":10511,"methods":[{"el":11,"sc":5,"sl":9},{"el":15,"sc":5,"sl":13},{"el":23,"sc":5,"sl":21}],"name":"ASTImplementsList","sl":8}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_271":{"methods":[{"sl":13},{"sl":21}],"name":"testParsersCases","pass":true,"statements":[{"sl":14},{"sl":22}]},"test_612":{"methods":[{"sl":13},{"sl":21}],"name":"testResourceFileCommands","pass":true,"statements":[{"sl":14},{"sl":22}]},"test_627":{"methods":[{"sl":13},{"sl":21}],"name":"testPmdOptions","pass":true,"statements":[{"sl":14},{"sl":22}]},"test_763":{"methods":[{"sl":13},{"sl":21}],"name":"testHasExplicitImplements","pass":true,"statements":[{"sl":14},{"sl":22}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [], [], [271, 763, 627, 612], [271, 763, 627, 612], [], [], [], [], [], [], [271, 763, 627, 612], [271, 763, 627, 612], [], []]
