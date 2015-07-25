var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":59,"id":31652,"methods":[{"el":34,"sc":5,"sl":32},{"el":36,"sc":5,"sl":36},{"el":58,"sc":5,"sl":41}],"name":"TextPadRenderer","sl":28}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_410":{"methods":[{"sl":32}],"name":"testWrongRulesetWithRulename","pass":true,"statements":[{"sl":33}]},"test_420":{"methods":[{"sl":32}],"name":"testWrongRuleset","pass":true,"statements":[{"sl":33}]},"test_764":{"methods":[{"sl":32}],"name":"testWrongRulename","pass":true,"statements":[{"sl":33}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [410, 764, 420], [410, 764, 420], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], []]
