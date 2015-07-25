var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":23,"id":31689,"methods":[{"el":18,"sc":5,"sl":13},{"el":22,"sc":5,"sl":20}],"name":"StructureTest","sl":11}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_91":{"methods":[{"sl":13}],"name":"testAddResultsinDFANodeContainingAddedNode","pass":true,"statements":[{"sl":15},{"sl":16},{"sl":17}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [], [], [91], [], [91], [91], [91], [], [], [], [], [], []]
