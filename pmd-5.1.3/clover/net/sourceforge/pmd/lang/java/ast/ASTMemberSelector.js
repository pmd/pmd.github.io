var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":23,"id":10755,"methods":[{"el":11,"sc":5,"sl":9},{"el":15,"sc":5,"sl":13},{"el":22,"sc":5,"sl":20}],"name":"ASTMemberSelector","sl":8}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_15":{"methods":[{"sl":13},{"sl":20}],"name":"testGenericsInMethodCall","pass":true,"statements":[{"sl":14},{"sl":21}]},"test_227":{"methods":[{"sl":13},{"sl":20}],"name":"testGenerics","pass":true,"statements":[{"sl":14},{"sl":21}]},"test_338":{"methods":[{"sl":13},{"sl":20}],"name":"testResourceFileCommands","pass":true,"statements":[{"sl":14},{"sl":21}]},"test_421":{"methods":[{"sl":13},{"sl":20}],"name":"testGenericsProblem","pass":true,"statements":[{"sl":14},{"sl":21}]},"test_659":{"methods":[{"sl":13},{"sl":20}],"name":"testParsersCases","pass":true,"statements":[{"sl":14},{"sl":21}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [], [], [659, 227, 421, 15, 338], [659, 227, 421, 15, 338], [], [], [], [], [], [659, 227, 421, 15, 338], [659, 227, 421, 15, 338], [], []]
