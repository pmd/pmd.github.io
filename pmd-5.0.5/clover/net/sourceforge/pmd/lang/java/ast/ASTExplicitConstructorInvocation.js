var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":47,"id":9827,"methods":[{"el":8,"sc":5,"sl":6},{"el":12,"sc":5,"sl":10},{"el":20,"sc":5,"sl":18},{"el":28,"sc":5,"sl":22},{"el":34,"sc":5,"sl":32},{"el":38,"sc":5,"sl":36},{"el":42,"sc":5,"sl":40},{"el":46,"sc":5,"sl":44}],"name":"ASTExplicitConstructorInvocation","sl":5}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_12":{"methods":[{"sl":10},{"sl":18},{"sl":32},{"sl":36}],"name":"testIgnoredConstructorInvocation","pass":true,"statements":[{"sl":11},{"sl":19},{"sl":33},{"sl":37}]},"test_169":{"methods":[{"sl":10},{"sl":32},{"sl":36}],"name":"testParsersCases","pass":true,"statements":[{"sl":11},{"sl":33},{"sl":37}]},"test_456":{"methods":[{"sl":10},{"sl":18},{"sl":32},{"sl":36},{"sl":40}],"name":"testResourceFileCommands","pass":true,"statements":[{"sl":11},{"sl":19},{"sl":33},{"sl":37},{"sl":41}]},"test_479":{"methods":[{"sl":10},{"sl":18},{"sl":32},{"sl":36}],"name":"testDefault","pass":true,"statements":[{"sl":11},{"sl":19},{"sl":33},{"sl":37}]},"test_77":{"methods":[{"sl":10},{"sl":18},{"sl":36},{"sl":40}],"name":"testPmdOptions","pass":true,"statements":[{"sl":11},{"sl":19},{"sl":37},{"sl":41}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [456, 77, 12, 169, 479], [456, 77, 12, 169, 479], [], [], [], [], [], [], [456, 77, 12, 479], [456, 77, 12, 479], [], [], [], [], [], [], [], [], [], [], [], [], [456, 12, 169, 479], [456, 12, 169, 479], [], [], [456, 77, 12, 169, 479], [456, 77, 12, 169, 479], [], [], [456, 77], [456, 77], [], [], [], [], [], []]
