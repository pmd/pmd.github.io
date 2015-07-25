var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":40,"id":37126,"methods":[{"el":17,"sc":5,"sl":14},{"el":22,"sc":5,"sl":19},{"el":27,"sc":5,"sl":24},{"el":39,"sc":5,"sl":37}],"name":"ASTAnnotationTest","sl":12}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_150":{"methods":[{"sl":19}],"name":"testAnnotationFailsWithJDK14","pass":true,"statements":[{"sl":21}]},"test_264":{"methods":[{"sl":14}],"name":"testAnnotationSucceedsWithDefaultMode","pass":true,"statements":[{"sl":16}]},"test_733":{"methods":[{"sl":24}],"name":"testAnnotationSucceedsWithJDK15","pass":true,"statements":[{"sl":26}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [264], [], [264], [], [], [150], [], [150], [], [], [733], [], [733], [], [], [], [], [], [], [], [], [], [], [], [], [], []]
