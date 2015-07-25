var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":68,"id":26282,"methods":[{"el":24,"sc":5,"sl":21},{"el":31,"sc":5,"sl":29},{"el":43,"sc":5,"sl":36},{"el":55,"sc":5,"sl":48},{"el":67,"sc":5,"sl":58}],"name":"CompoundIterator","sl":13}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_120":{"methods":[{"sl":21},{"sl":29},{"sl":58}],"name":"testEmpty","pass":true,"statements":[{"sl":22},{"sl":23},{"sl":30},{"sl":59},{"sl":66}]},"test_252":{"methods":[{"sl":21},{"sl":48},{"sl":58}],"name":"testEmptyBadRemove","pass":true,"statements":[{"sl":22},{"sl":23},{"sl":49},{"sl":50},{"sl":53},{"sl":59},{"sl":66}]},"test_319":{"methods":[{"sl":29},{"sl":36},{"sl":48},{"sl":58}],"name":"testHappyPathRemove","pass":true,"statements":[{"sl":30},{"sl":37},{"sl":38},{"sl":39},{"sl":49},{"sl":50},{"sl":51},{"sl":59},{"sl":60},{"sl":61},{"sl":63},{"sl":66}]},"test_709":{"methods":[{"sl":21},{"sl":36},{"sl":58}],"name":"testEmptyBadNext","pass":true,"statements":[{"sl":22},{"sl":23},{"sl":37},{"sl":38},{"sl":41},{"sl":59},{"sl":66}]},"test_90":{"methods":[{"sl":29},{"sl":36},{"sl":58}],"name":"testHappyPath","pass":true,"statements":[{"sl":30},{"sl":37},{"sl":38},{"sl":39},{"sl":59},{"sl":60},{"sl":61},{"sl":63},{"sl":66}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [709, 120, 252], [709, 120, 252], [709, 120, 252], [], [], [], [], [], [120, 90, 319], [120, 90, 319], [], [], [], [], [], [709, 90, 319], [709, 90, 319], [709, 90, 319], [90, 319], [], [709], [], [], [], [], [], [], [319, 252], [319, 252], [319, 252], [319], [], [252], [], [], [], [], [709, 120, 90, 319, 252], [709, 120, 90, 319, 252], [90, 319], [90, 319], [], [90, 319], [], [], [709, 120, 90, 319, 252], [], []]
