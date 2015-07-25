var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":20,"id":10079,"methods":[{"el":8,"sc":5,"sl":6},{"el":12,"sc":5,"sl":10},{"el":19,"sc":5,"sl":17}],"name":"ASTMemberSelector","sl":5}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_239":{"methods":[{"sl":10}],"name":"testGenericsProblem","pass":true,"statements":[{"sl":11}]},"test_444":{"methods":[{"sl":10}],"name":"testGenericsInMethodCall","pass":true,"statements":[{"sl":11}]},"test_596":{"methods":[{"sl":10}],"name":"testParsersCases","pass":true,"statements":[{"sl":11}]},"test_603":{"methods":[{"sl":10},{"sl":17}],"name":"testGenerics","pass":true,"statements":[{"sl":11},{"sl":18}]},"test_751":{"methods":[{"sl":10},{"sl":17}],"name":"testResourceFileCommands","pass":true,"statements":[{"sl":11},{"sl":18}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [444, 239, 603, 751, 596], [444, 239, 603, 751, 596], [], [], [], [], [], [603, 751], [603, 751], [], []]
