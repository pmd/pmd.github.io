var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":21,"id":10257,"methods":[{"el":8,"sc":5,"sl":6},{"el":12,"sc":5,"sl":10},{"el":20,"sc":5,"sl":18}],"name":"ASTNormalAnnotation","sl":5}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_155":{"methods":[{"sl":10},{"sl":18}],"name":"testSpecificSuppressionValue3","pass":true,"statements":[{"sl":11},{"sl":19}]},"test_396":{"methods":[{"sl":10},{"sl":18}],"name":"testSpecificSuppressionMulitpleValues2","pass":true,"statements":[{"sl":11},{"sl":19}]},"test_485":{"methods":[{"sl":10},{"sl":18}],"name":"testSpecificSuppressionValue1","pass":true,"statements":[{"sl":11},{"sl":19}]},"test_732":{"methods":[{"sl":10},{"sl":18}],"name":"testResourceFileCommands","pass":true,"statements":[{"sl":11},{"sl":19}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [732, 485, 396, 155], [732, 485, 396, 155], [], [], [], [], [], [], [732, 485, 396, 155], [732, 485, 396, 155], [], []]
