var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":25,"id":8210,"methods":[{"el":12,"sc":5,"sl":10},{"el":20,"sc":5,"sl":17},{"el":24,"sc":5,"sl":22}],"name":"ASTExpressionStatement","sl":9}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_107":{"methods":[{"sl":10},{"sl":17}],"name":"testLineNumbers","pass":true,"statements":[{"sl":11},{"sl":19}]},"test_720":{"methods":[{"sl":10},{"sl":17}],"name":"testEcmascript","pass":true,"statements":[{"sl":11},{"sl":19}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [720, 107], [720, 107], [], [], [], [], [], [720, 107], [], [720, 107], [], [], [], [], [], []]
