var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":42,"id":28046,"methods":[{"el":14,"sc":2,"sl":12},{"el":27,"sc":2,"sl":19},{"el":41,"sc":2,"sl":29}],"name":"FileExtensionFilter","sl":5}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_27":{"methods":[{"sl":12},{"sl":19},{"sl":29}],"name":"testIgnoreIdentifiers","pass":true,"statements":[{"sl":13},{"sl":20},{"sl":21},{"sl":22},{"sl":23},{"sl":24},{"sl":30},{"sl":31},{"sl":32},{"sl":33},{"sl":34},{"sl":35},{"sl":36},{"sl":40}]},"test_559":{"methods":[{"sl":12},{"sl":19}],"name":"testSimple","pass":true,"statements":[{"sl":13},{"sl":20},{"sl":21},{"sl":22},{"sl":23},{"sl":24}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [], [559, 27], [559, 27], [], [], [], [], [], [559, 27], [559, 27], [559, 27], [559, 27], [559, 27], [559, 27], [], [], [], [], [27], [27], [27], [27], [27], [27], [27], [27], [], [], [], [27], [], []]
