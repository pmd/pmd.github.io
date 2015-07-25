var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":35,"id":8750,"methods":[{"el":11,"sc":5,"sl":9},{"el":18,"sc":5,"sl":16},{"el":22,"sc":5,"sl":20},{"el":26,"sc":5,"sl":24},{"el":30,"sc":5,"sl":28},{"el":34,"sc":5,"sl":32}],"name":"ASTFunctionCall","sl":8}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_177":{"methods":[{"sl":9},{"sl":16}],"name":"testVoidKeyword","pass":true,"statements":[{"sl":10},{"sl":17}]},"test_562":{"methods":[{"sl":9},{"sl":16}],"name":"testEcmascript","pass":true,"statements":[{"sl":10},{"sl":17}]},"test_685":{"methods":[{"sl":9},{"sl":16}],"name":"testLineNumbers","pass":true,"statements":[{"sl":10},{"sl":17}]},"test_723":{"methods":[{"sl":9},{"sl":16},{"sl":20}],"name":"testArrayMethod","pass":true,"statements":[{"sl":10},{"sl":17},{"sl":21}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [723, 685, 177, 562], [723, 685, 177, 562], [], [], [], [], [], [723, 685, 177, 562], [723, 685, 177, 562], [], [], [723], [723], [], [], [], [], [], [], [], [], [], [], [], [], [], []]
