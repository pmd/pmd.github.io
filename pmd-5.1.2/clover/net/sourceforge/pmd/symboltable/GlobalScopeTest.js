var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":47,"id":42283,"methods":[{"el":24,"sc":5,"sl":16},{"el":29,"sc":5,"sl":26},{"el":46,"sc":5,"sl":44}],"name":"GlobalScopeTest","sl":14}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_425":{"methods":[{"sl":16}],"name":"testClassDeclAppears","pass":true,"statements":[{"sl":18},{"sl":19},{"sl":20},{"sl":21},{"sl":22},{"sl":23}]},"test_720":{"methods":[{"sl":26}],"name":"testEnums","pass":true,"statements":[{"sl":28}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [425], [], [425], [425], [425], [425], [425], [425], [], [], [720], [], [720], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], []]
