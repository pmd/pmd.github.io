var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":71,"id":31088,"methods":[{"el":26,"sc":5,"sl":21},{"el":37,"sc":5,"sl":32},{"el":49,"sc":5,"sl":43}],"name":"CPDTest","sl":15},{"el":70,"id":31098,"methods":[{"el":60,"sc":9,"sl":57},{"el":66,"sc":9,"sl":61},{"el":69,"sc":9,"sl":67}],"name":"CPDTest.NoFileAssertListener","sl":54}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_221":{"methods":[{"sl":32},{"sl":57}],"name":"testFileSectionWithBrokenSymlinks","pass":true,"statements":[{"sl":34},{"sl":36},{"sl":58},{"sl":59}]},"test_284":{"methods":[{"sl":43},{"sl":57},{"sl":61}],"name":"testFileAddedAsSymlinkAndReal","pass":true,"statements":[{"sl":45},{"sl":47},{"sl":48},{"sl":58},{"sl":59},{"sl":62},{"sl":63}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [221], [], [221], [], [221], [], [], [], [], [], [], [284], [], [284], [], [284], [284], [], [], [], [], [], [], [], [], [284, 221], [284, 221], [284, 221], [], [284], [284], [284], [], [], [], [], [], [], [], []]
