var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":20,"id":12222,"methods":[{"el":8,"sc":5,"sl":6},{"el":12,"sc":5,"sl":10},{"el":19,"sc":5,"sl":17}],"name":"ASTMemberSelector","sl":5}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_1221":{"methods":[{"sl":10}],"name":"testGenericsInMethodCall","pass":true,"statements":[{"sl":11}]},"test_1284":{"methods":[{"sl":10}],"name":"testGenericsInMethodCall","pass":true,"statements":[{"sl":11}]},"test_1310":{"methods":[{"sl":10},{"sl":17}],"name":"testResourceFileCommands","pass":true,"statements":[{"sl":11},{"sl":18}]},"test_1372":{"methods":[{"sl":10},{"sl":17}],"name":"testGenerics","pass":true,"statements":[{"sl":11},{"sl":18}]},"test_1549":{"methods":[{"sl":10},{"sl":17}],"name":"testResourceFileCommands","pass":true,"statements":[{"sl":11},{"sl":18}]},"test_551":{"methods":[{"sl":10},{"sl":17}],"name":"testGenerics","pass":true,"statements":[{"sl":11},{"sl":18}]},"test_598":{"methods":[{"sl":10}],"name":"testGenericsInMethodCall","pass":true,"statements":[{"sl":11}]},"test_892":{"methods":[{"sl":10},{"sl":17}],"name":"testGenerics","pass":true,"statements":[{"sl":11},{"sl":18}]},"test_915":{"methods":[{"sl":10},{"sl":17}],"name":"testResourceFileCommands","pass":true,"statements":[{"sl":11},{"sl":18}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [1284, 1221, 892, 598, 551, 915, 1310, 1549, 1372], [1284, 1221, 892, 598, 551, 915, 1310, 1549, 1372], [], [], [], [], [], [892, 551, 915, 1310, 1549, 1372], [892, 551, 915, 1310, 1549, 1372], [], []]
