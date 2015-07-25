var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":22,"id":10872,"methods":[{"el":11,"sc":3,"sl":9},{"el":15,"sc":3,"sl":13},{"el":21,"sc":3,"sl":19}],"name":"ASTResourceSpecification","sl":8}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_26":{"methods":[{"sl":13}],"name":"testParsersCases","pass":true,"statements":[{"sl":14}]},"test_33":{"methods":[{"sl":13}],"name":"testTryWithResourcesWithAnnotations","pass":true,"statements":[{"sl":14}]},"test_361":{"methods":[{"sl":13}],"name":"testTryWithResourcesMulti","pass":true,"statements":[{"sl":14}]},"test_42":{"methods":[{"sl":13}],"name":"testTryWithResources","pass":true,"statements":[{"sl":14}]},"test_461":{"methods":[{"sl":13}],"name":"testTryWithResourcesSemi","pass":true,"statements":[{"sl":14}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [], [], [361, 461, 26, 42, 33], [361, 461, 26, 42, 33], [], [], [], [], [], [], [], [], []]
