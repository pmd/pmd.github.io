var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":125,"id":31279,"methods":[{"el":36,"sc":5,"sl":23},{"el":55,"sc":5,"sl":43},{"el":70,"sc":5,"sl":61},{"el":86,"sc":5,"sl":76},{"el":99,"sc":5,"sl":92}],"name":"CPDTest","sl":16},{"el":124,"id":31323,"methods":[{"el":110,"sc":9,"sl":107},{"el":116,"sc":9,"sl":111},{"el":119,"sc":9,"sl":117},{"el":123,"sc":9,"sl":120}],"name":"CPDTest.NoFileAssertListener","sl":104}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_310":{"methods":[{"sl":76},{"sl":107},{"sl":120}],"name":"testFileAddedAsSymlinkAndReal","pass":false,"statements":[{"sl":78},{"sl":79},{"sl":80},{"sl":82},{"sl":83},{"sl":84},{"sl":108},{"sl":109},{"sl":121}]},"test_665":{"methods":[{"sl":61},{"sl":107},{"sl":120}],"name":"testFileSectionWithBrokenSymlinks","pass":true,"statements":[{"sl":63},{"sl":64},{"sl":65},{"sl":67},{"sl":68},{"sl":108},{"sl":109},{"sl":121}]},"test_714":{"methods":[{"sl":92},{"sl":107},{"sl":120}],"name":"testFileAddedWithRelativePath","pass":false,"statements":[{"sl":94},{"sl":95},{"sl":97},{"sl":98},{"sl":108},{"sl":109},{"sl":121}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [665], [], [665], [665], [665], [], [665], [665], [], [], [], [], [], [], [], [310], [], [310], [310], [310], [], [310], [310], [310], [], [], [], [], [], [], [], [714], [], [714], [714], [], [714], [714], [], [], [], [], [], [], [], [], [665, 310, 714], [665, 310, 714], [665, 310, 714], [], [], [], [], [], [], [], [], [], [], [665, 310, 714], [665, 310, 714], [], [], [], []]
