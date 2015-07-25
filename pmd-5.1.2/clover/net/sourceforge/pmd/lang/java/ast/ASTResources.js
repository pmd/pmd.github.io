var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":22,"id":10941,"methods":[{"el":11,"sc":3,"sl":9},{"el":15,"sc":3,"sl":13},{"el":21,"sc":3,"sl":19}],"name":"ASTResources","sl":8}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_271":{"methods":[{"sl":13},{"sl":19}],"name":"testParsersCases","pass":true,"statements":[{"sl":14},{"sl":20}]},"test_652":{"methods":[{"sl":13},{"sl":19}],"name":"testTryWithResourcesSemi","pass":true,"statements":[{"sl":14},{"sl":20}]},"test_757":{"methods":[{"sl":13},{"sl":19}],"name":"testTryWithResources","pass":true,"statements":[{"sl":14},{"sl":20}]},"test_924":{"methods":[{"sl":13},{"sl":19}],"name":"testTryWithResourcesMulti","pass":true,"statements":[{"sl":14},{"sl":20}]},"test_927":{"methods":[{"sl":13},{"sl":19}],"name":"testTryWithResourcesWithAnnotations","pass":true,"statements":[{"sl":14},{"sl":20}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [], [], [271, 924, 757, 927, 652], [271, 924, 757, 927, 652], [], [], [], [], [271, 924, 757, 927, 652], [271, 924, 757, 927, 652], [], [], []]
