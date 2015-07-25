var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":87,"id":23291,"methods":[{"el":30,"sc":3,"sl":21},{"el":45,"sc":2,"sl":43},{"el":59,"sc":5,"sl":57},{"el":68,"sc":5,"sl":66},{"el":76,"sc":2,"sl":74},{"el":86,"sc":2,"sl":84}],"name":"DoubleProperty","sl":17}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_167":{"methods":[{"sl":21},{"sl":43},{"sl":66},{"sl":84}],"name":"testProps","pass":true,"statements":[{"sl":22},{"sl":23},{"sl":44},{"sl":67},{"sl":85}]},"test_174":{"methods":[{"sl":43},{"sl":74}],"name":"testErrorForBad","pass":true,"statements":[{"sl":44},{"sl":75}]},"test_402":{"methods":[{"sl":43}],"name":"testConstructors","pass":true,"statements":[{"sl":44}]},"test_568":{"methods":[{"sl":43},{"sl":66},{"sl":84}],"name":"testValueFrom","pass":true,"statements":[{"sl":44},{"sl":67},{"sl":85}]},"test_584":{"methods":[{"sl":43},{"sl":74}],"name":"testErrorFor","pass":true,"statements":[{"sl":44},{"sl":75}]},"test_713":{"methods":[{"sl":43},{"sl":74}],"name":"testType","pass":true,"statements":[{"sl":44},{"sl":75}]},"test_88":{"methods":[{"sl":66},{"sl":84}],"name":"testReadWriteRoundTrip","pass":true,"statements":[{"sl":67},{"sl":85}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [167], [167], [167], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [568, 584, 402, 167, 713, 174], [568, 584, 402, 167, 713, 174], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [568, 167, 88], [568, 167, 88], [], [], [], [], [], [], [584, 713, 174], [584, 713, 174], [], [], [], [], [], [], [], [], [568, 167, 88], [568, 167, 88], [], []]
