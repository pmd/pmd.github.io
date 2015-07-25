var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":43,"id":31234,"methods":[{"el":23,"sc":5,"sl":21},{"el":25,"sc":5,"sl":25},{"el":42,"sc":5,"sl":30}],"name":"EmacsRenderer","sl":15}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_410":{"methods":[{"sl":21}],"name":"testWrongRulesetWithRulename","pass":true,"statements":[{"sl":22}]},"test_420":{"methods":[{"sl":21}],"name":"testWrongRuleset","pass":true,"statements":[{"sl":22}]},"test_764":{"methods":[{"sl":21}],"name":"testWrongRulename","pass":true,"statements":[{"sl":22}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [410, 764, 420], [410, 764, 420], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], []]
