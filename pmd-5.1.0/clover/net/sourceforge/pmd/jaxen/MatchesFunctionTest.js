var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":66,"id":37947,"methods":[{"el":40,"sc":5,"sl":35},{"el":49,"sc":5,"sl":42},{"el":61,"sc":5,"sl":51},{"el":65,"sc":5,"sl":63}],"name":"MatchesFunctionTest","sl":16},{"el":33,"id":37947,"methods":[{"el":23,"sc":2,"sl":21},{"el":26,"sc":2,"sl":24},{"el":29,"sc":2,"sl":27},{"el":32,"sc":2,"sl":30}],"name":"MatchesFunctionTest.MyNode","sl":18}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_316":{"methods":[{"sl":21},{"sl":27},{"sl":30},{"sl":42},{"sl":51}],"name":"testNoMatch","pass":true,"statements":[{"sl":22},{"sl":28},{"sl":31},{"sl":44},{"sl":45},{"sl":46},{"sl":47},{"sl":48},{"sl":52},{"sl":53},{"sl":54},{"sl":55},{"sl":56},{"sl":57},{"sl":58},{"sl":59},{"sl":60}]},"test_774":{"methods":[{"sl":21},{"sl":27},{"sl":30},{"sl":35},{"sl":51}],"name":"testMatch","pass":true,"statements":[{"sl":22},{"sl":28},{"sl":31},{"sl":37},{"sl":38},{"sl":39},{"sl":52},{"sl":53},{"sl":54},{"sl":55},{"sl":56},{"sl":57},{"sl":58},{"sl":59},{"sl":60}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [774, 316], [774, 316], [], [], [], [], [774, 316], [774, 316], [], [774, 316], [774, 316], [], [], [], [774], [], [774], [774], [774], [], [], [316], [], [316], [316], [316], [316], [316], [], [], [774, 316], [774, 316], [774, 316], [774, 316], [774, 316], [774, 316], [774, 316], [774, 316], [774, 316], [774, 316], [], [], [], [], [], [], [], []]
