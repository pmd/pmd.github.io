var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":19,"id":10385,"methods":[{"el":8,"sc":3,"sl":6},{"el":12,"sc":3,"sl":10},{"el":18,"sc":3,"sl":16}],"name":"ASTResourceSpecification","sl":5}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_12":{"methods":[{"sl":10}],"name":"testParsersCases","pass":true,"statements":[{"sl":11}]},"test_385":{"methods":[{"sl":10}],"name":"testTryWithResourcesWithAnnotations","pass":true,"statements":[{"sl":11}]},"test_53":{"methods":[{"sl":10}],"name":"testTryWithResourcesSemi","pass":true,"statements":[{"sl":11}]},"test_584":{"methods":[{"sl":10}],"name":"testTryWithResources","pass":true,"statements":[{"sl":11}]},"test_817":{"methods":[{"sl":10}],"name":"testTryWithResourcesMulti","pass":true,"statements":[{"sl":11}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [12, 53, 817, 584, 385], [12, 53, 817, 584, 385], [], [], [], [], [], [], [], [], []]
