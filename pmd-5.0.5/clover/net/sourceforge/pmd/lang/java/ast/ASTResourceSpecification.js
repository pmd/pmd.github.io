var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":19,"id":10422,"methods":[{"el":8,"sc":3,"sl":6},{"el":12,"sc":3,"sl":10},{"el":18,"sc":3,"sl":16}],"name":"ASTResourceSpecification","sl":5}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_169":{"methods":[{"sl":10}],"name":"testParsersCases","pass":true,"statements":[{"sl":11}]},"test_428":{"methods":[{"sl":10}],"name":"testTryWithResources","pass":true,"statements":[{"sl":11}]},"test_437":{"methods":[{"sl":10}],"name":"testTryWithResourcesMulti","pass":true,"statements":[{"sl":11}]},"test_475":{"methods":[{"sl":10}],"name":"testTryWithResourcesSemi","pass":true,"statements":[{"sl":11}]},"test_82":{"methods":[{"sl":10}],"name":"testTryWithResourcesWithAnnotations","pass":true,"statements":[{"sl":11}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [437, 428, 82, 475, 169], [437, 428, 82, 475, 169], [], [], [], [], [], [], [], [], []]
