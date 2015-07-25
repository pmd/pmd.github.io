var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":20,"id":10516,"methods":[{"el":9,"sc":3,"sl":7},{"el":13,"sc":3,"sl":11},{"el":19,"sc":3,"sl":17}],"name":"ASTLambdaExpression","sl":6}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_131":{"methods":[{"sl":11}],"name":"testLambdaWithType","pass":true,"statements":[{"sl":12}]},"test_26":{"methods":[{"sl":11}],"name":"testParsersCases","pass":true,"statements":[{"sl":12}]},"test_349":{"methods":[{"sl":11}],"name":"testLambdaWithoutType","pass":true,"statements":[{"sl":12}]},"test_902":{"methods":[{"sl":11}],"name":"testResourceFileCommands","pass":true,"statements":[{"sl":12}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [131, 26, 902, 349], [131, 26, 902, 349], [], [], [], [], [], [], [], [], []]
