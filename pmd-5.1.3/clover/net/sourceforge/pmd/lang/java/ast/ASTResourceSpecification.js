var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":22,"id":11017,"methods":[{"el":11,"sc":3,"sl":9},{"el":15,"sc":3,"sl":13},{"el":21,"sc":3,"sl":19}],"name":"ASTResourceSpecification","sl":8}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_111":{"methods":[{"sl":13},{"sl":19}],"name":"testTryWithResources","pass":true,"statements":[{"sl":14},{"sl":20}]},"test_175":{"methods":[{"sl":13},{"sl":19}],"name":"testTryWithResourcesSemi","pass":true,"statements":[{"sl":14},{"sl":20}]},"test_595":{"methods":[{"sl":13},{"sl":19}],"name":"testTryWithResourcesMulti","pass":true,"statements":[{"sl":14},{"sl":20}]},"test_659":{"methods":[{"sl":13},{"sl":19}],"name":"testParsersCases","pass":true,"statements":[{"sl":14},{"sl":20}]},"test_873":{"methods":[{"sl":13},{"sl":19}],"name":"testTryWithResourcesWithAnnotations","pass":true,"statements":[{"sl":14},{"sl":20}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [], [], [659, 595, 873, 111, 175], [659, 595, 873, 111, 175], [], [], [], [], [659, 595, 873, 111, 175], [659, 595, 873, 111, 175], [], [], []]
