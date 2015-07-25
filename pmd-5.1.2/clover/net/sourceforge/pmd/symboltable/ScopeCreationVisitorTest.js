var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":32,"id":42466,"methods":[{"el":20,"sc":5,"sl":15},{"el":31,"sc":5,"sl":29}],"name":"ScopeCreationVisitorTest","sl":13}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_386":{"methods":[{"sl":15}],"name":"testScopesAreCreated","pass":true,"statements":[{"sl":17},{"sl":18},{"sl":19}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [386], [], [386], [386], [386], [], [], [], [], [], [], [], [], [], [], [], [], []]
