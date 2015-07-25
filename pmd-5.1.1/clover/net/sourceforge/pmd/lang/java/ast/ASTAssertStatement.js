var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":24,"id":10053,"methods":[{"el":11,"sc":5,"sl":9},{"el":15,"sc":5,"sl":13},{"el":23,"sc":5,"sl":21}],"name":"ASTAssertStatement","sl":8}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_380":{"methods":[{"sl":9}],"name":"testIsAllocation2","pass":true,"statements":[{"sl":10}]},"test_69":{"methods":[{"sl":13},{"sl":21}],"name":"testAssertAsKeywordVariantsSucceedWith1_4","pass":true,"statements":[{"sl":14},{"sl":22}]},"test_722":{"methods":[{"sl":13},{"sl":21}],"name":"testResourceFileCommands","pass":true,"statements":[{"sl":14},{"sl":22}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [380], [380], [], [], [722, 69], [722, 69], [], [], [], [], [], [], [722, 69], [722, 69], [], []]
