var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":22,"id":10915,"methods":[{"el":11,"sc":3,"sl":9},{"el":15,"sc":3,"sl":13},{"el":21,"sc":3,"sl":19}],"name":"ASTResources","sl":8}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_218":{"methods":[{"sl":13},{"sl":19}],"name":"testTryWithResourcesWithAnnotations","pass":true,"statements":[{"sl":14},{"sl":20}]},"test_431":{"methods":[{"sl":13},{"sl":19}],"name":"testTryWithResourcesMulti","pass":true,"statements":[{"sl":14},{"sl":20}]},"test_828":{"methods":[{"sl":13},{"sl":19}],"name":"testTryWithResourcesSemi","pass":true,"statements":[{"sl":14},{"sl":20}]},"test_883":{"methods":[{"sl":13},{"sl":19}],"name":"testTryWithResources","pass":true,"statements":[{"sl":14},{"sl":20}]},"test_886":{"methods":[{"sl":13},{"sl":19}],"name":"testParsersCases","pass":true,"statements":[{"sl":14},{"sl":20}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [], [], [886, 828, 883, 431, 218], [886, 828, 883, 431, 218], [], [], [], [], [886, 828, 883, 431, 218], [886, 828, 883, 431, 218], [], [], []]
