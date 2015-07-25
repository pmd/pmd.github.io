var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":24,"id":11020,"methods":[{"el":11,"sc":5,"sl":9},{"el":15,"sc":5,"sl":13},{"el":23,"sc":5,"sl":21}],"name":"ASTTypeBound","sl":8}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_26":{"methods":[{"sl":13}],"name":"testParsersCases","pass":true,"statements":[{"sl":14}]},"test_380":{"methods":[{"sl":13}],"name":"testGenericINAnnotation","pass":true,"statements":[{"sl":14}]},"test_748":{"methods":[{"sl":13}],"name":"testMultipleGenerics","pass":true,"statements":[{"sl":14}]},"test_902":{"methods":[{"sl":13},{"sl":21}],"name":"testResourceFileCommands","pass":true,"statements":[{"sl":14},{"sl":22}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [], [], [748, 380, 26, 902], [748, 380, 26, 902], [], [], [], [], [], [], [902], [902], [], []]
