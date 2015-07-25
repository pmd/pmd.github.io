var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":23,"id":10579,"methods":[{"el":12,"sc":3,"sl":10},{"el":16,"sc":3,"sl":14},{"el":22,"sc":3,"sl":20}],"name":"ASTLambdaExpression","sl":9}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_271":{"methods":[{"sl":14},{"sl":20}],"name":"testParsersCases","pass":true,"statements":[{"sl":15},{"sl":21}]},"test_612":{"methods":[{"sl":14}],"name":"testResourceFileCommands","pass":true,"statements":[{"sl":15}]},"test_709":{"methods":[{"sl":14},{"sl":20}],"name":"testLambdaWithoutType","pass":true,"statements":[{"sl":15},{"sl":21}]},"test_85":{"methods":[{"sl":14},{"sl":20}],"name":"testLambdaWithType","pass":true,"statements":[{"sl":15},{"sl":21}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [271, 85, 709, 612], [271, 85, 709, 612], [], [], [], [], [271, 85, 709], [271, 85, 709], [], [], []]
