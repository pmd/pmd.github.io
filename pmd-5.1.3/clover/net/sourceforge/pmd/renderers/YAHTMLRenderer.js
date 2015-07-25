var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":41,"id":31967,"methods":[{"el":26,"sc":5,"sl":22},{"el":28,"sc":5,"sl":28},{"el":40,"sc":5,"sl":33}],"name":"YAHTMLRenderer","sl":16}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_410":{"methods":[{"sl":22}],"name":"testWrongRulesetWithRulename","pass":true,"statements":[{"sl":24},{"sl":25}]},"test_420":{"methods":[{"sl":22}],"name":"testWrongRuleset","pass":true,"statements":[{"sl":24},{"sl":25}]},"test_764":{"methods":[{"sl":22}],"name":"testWrongRulename","pass":true,"statements":[{"sl":24},{"sl":25}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [410, 764, 420], [], [410, 764, 420], [410, 764, 420], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], []]
