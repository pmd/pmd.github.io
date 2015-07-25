var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":55,"id":3296,"methods":[{"el":25,"sc":5,"sl":23},{"el":29,"sc":5,"sl":27},{"el":34,"sc":5,"sl":31},{"el":54,"sc":5,"sl":36}],"name":"FileReporter","sl":19}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_24":{"methods":[{"sl":23},{"sl":27},{"sl":31}],"name":"testCreation","pass":true,"statements":[{"sl":24},{"sl":28},{"sl":32},{"sl":33}]},"test_434":{"methods":[{"sl":27},{"sl":31},{"sl":36}],"name":"testInvalidFile","pass":true,"statements":[{"sl":28},{"sl":32},{"sl":33},{"sl":37},{"sl":38},{"sl":39},{"sl":40},{"sl":41},{"sl":44},{"sl":49},{"sl":52}]},"test_447":{"methods":[{"sl":27},{"sl":31},{"sl":36}],"name":"testReport","pass":true,"statements":[{"sl":28},{"sl":32},{"sl":33},{"sl":37},{"sl":38},{"sl":39},{"sl":40},{"sl":41},{"sl":44},{"sl":46},{"sl":47},{"sl":49}]},"test_59":{"methods":[{"sl":27},{"sl":31},{"sl":36}],"name":"testEmptyReport","pass":true,"statements":[{"sl":28},{"sl":32},{"sl":33},{"sl":37},{"sl":38},{"sl":39},{"sl":40},{"sl":41},{"sl":44},{"sl":46},{"sl":47},{"sl":49}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [24], [24], [], [], [59, 447, 24, 434], [59, 447, 24, 434], [], [], [59, 447, 24, 434], [59, 447, 24, 434], [59, 447, 24, 434], [], [], [59, 447, 434], [59, 447, 434], [59, 447, 434], [59, 447, 434], [59, 447, 434], [59, 447, 434], [], [], [59, 447, 434], [], [59, 447], [59, 447], [], [59, 447, 434], [], [], [434], [], [], []]
