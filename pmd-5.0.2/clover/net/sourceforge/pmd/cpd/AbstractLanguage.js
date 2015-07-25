var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":23,"id":2529,"methods":[{"el":14,"sc":2,"sl":11},{"el":18,"sc":2,"sl":16},{"el":22,"sc":2,"sl":20}],"name":"AbstractLanguage","sl":7}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_334":{"methods":[{"sl":11},{"sl":20}],"name":"testSimple","pass":true,"statements":[{"sl":12},{"sl":13},{"sl":21}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [334], [334], [334], [], [], [], [], [], [], [334], [334], [], []]
