var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":20,"id":10108,"methods":[{"el":8,"sc":5,"sl":6},{"el":12,"sc":5,"sl":10},{"el":19,"sc":5,"sl":17}],"name":"ASTMemberSelector","sl":5}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_130":{"methods":[{"sl":10}],"name":"testGenericsProblem","pass":true,"statements":[{"sl":11}]},"test_20":{"methods":[{"sl":10}],"name":"testParsersCases","pass":true,"statements":[{"sl":11}]},"test_365":{"methods":[{"sl":10}],"name":"testGenericsInMethodCall","pass":true,"statements":[{"sl":11}]},"test_489":{"methods":[{"sl":10},{"sl":17}],"name":"testGenerics","pass":true,"statements":[{"sl":11},{"sl":18}]},"test_747":{"methods":[{"sl":10},{"sl":17}],"name":"testResourceFileCommands","pass":true,"statements":[{"sl":11},{"sl":18}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [365, 489, 130, 747, 20], [365, 489, 130, 747, 20], [], [], [], [], [], [489, 747], [489, 747], [], []]
