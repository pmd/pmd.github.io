var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":42,"id":8530,"methods":[{"el":24,"sc":5,"sl":21},{"el":29,"sc":5,"sl":26},{"el":33,"sc":5,"sl":31},{"el":37,"sc":5,"sl":35},{"el":41,"sc":5,"sl":39}],"name":"Ecmascript3Parser","sl":18}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_562":{"methods":[{"sl":21},{"sl":35},{"sl":39}],"name":"testEcmascript","pass":true,"statements":[{"sl":22},{"sl":23},{"sl":36},{"sl":40}]},"test_703":{"methods":[{"sl":21},{"sl":31}],"name":"testCopyXmlToClipboard","pass":true,"statements":[{"sl":22},{"sl":23},{"sl":32}]},"test_730":{"methods":[{"sl":21},{"sl":35},{"sl":39}],"name":"testExclusionsInReportWithNOPMDEcmascript","pass":true,"statements":[{"sl":22},{"sl":23},{"sl":36},{"sl":40}]},"test_858":{"methods":[{"sl":21},{"sl":35},{"sl":39}],"name":"testSuppresionComment","pass":true,"statements":[{"sl":22},{"sl":23},{"sl":36},{"sl":40}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [858, 730, 703, 562], [858, 730, 703, 562], [858, 730, 703, 562], [], [], [], [], [], [], [], [703], [703], [], [], [858, 730, 562], [858, 730, 562], [], [], [858, 730, 562], [858, 730, 562], [], []]
