var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":13,"id":2094,"methods":[{"el":8,"sc":5,"sl":6},{"el":12,"sc":5,"sl":10}],"name":"RuleSetWrapper","sl":3}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_152":{"methods":[{"sl":6},{"sl":10}],"name":"testRelativeRulesets","pass":true,"statements":[{"sl":7},{"sl":11}]},"test_421":{"methods":[{"sl":6},{"sl":10}],"name":"testFormatterWithProperties","pass":true,"statements":[{"sl":7},{"sl":11}]},"test_587":{"methods":[{"sl":6},{"sl":10}],"name":"testClasspath","pass":true,"statements":[{"sl":7},{"sl":11}]},"test_768":{"methods":[{"sl":6},{"sl":10}],"name":"testNestedRuleset","pass":true,"statements":[{"sl":7},{"sl":11}]},"test_86":{"methods":[{"sl":6},{"sl":10}],"name":"testAbstractNamesInNestedRuleset","pass":true,"statements":[{"sl":7},{"sl":11}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [152, 86, 768, 587, 421], [152, 86, 768, 587, 421], [], [], [152, 86, 768, 587, 421], [152, 86, 768, 587, 421], [], []]
