var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":21,"id":9495,"methods":[{"el":8,"sc":5,"sl":6},{"el":12,"sc":5,"sl":10},{"el":20,"sc":5,"sl":18}],"name":"ASTAssertStatement","sl":5}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_140":{"methods":[{"sl":6}],"name":"testIsAllocation2","pass":true,"statements":[{"sl":7}]},"test_751":{"methods":[{"sl":10},{"sl":18}],"name":"testResourceFileCommands","pass":true,"statements":[{"sl":11},{"sl":19}]},"test_763":{"methods":[{"sl":10}],"name":"testAssertAsKeywordVariantsSucceedWith1_4","pass":true,"statements":[{"sl":11}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [140], [140], [], [], [763, 751], [763, 751], [], [], [], [], [], [], [751], [751], [], []]
