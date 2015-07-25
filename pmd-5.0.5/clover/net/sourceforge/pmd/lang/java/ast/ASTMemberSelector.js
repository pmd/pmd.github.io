var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":20,"id":10185,"methods":[{"el":8,"sc":5,"sl":6},{"el":12,"sc":5,"sl":10},{"el":19,"sc":5,"sl":17}],"name":"ASTMemberSelector","sl":5}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_169":{"methods":[{"sl":10}],"name":"testParsersCases","pass":true,"statements":[{"sl":11}]},"test_318":{"methods":[{"sl":10}],"name":"testGenericsProblem","pass":true,"statements":[{"sl":11}]},"test_325":{"methods":[{"sl":10},{"sl":17}],"name":"testGenerics","pass":true,"statements":[{"sl":11},{"sl":18}]},"test_456":{"methods":[{"sl":10},{"sl":17}],"name":"testResourceFileCommands","pass":true,"statements":[{"sl":11},{"sl":18}]},"test_707":{"methods":[{"sl":10}],"name":"testGenericsInMethodCall","pass":true,"statements":[{"sl":11}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [325, 456, 318, 707, 169], [325, 456, 318, 707, 169], [], [], [], [], [], [325, 456], [325, 456], [], []]
