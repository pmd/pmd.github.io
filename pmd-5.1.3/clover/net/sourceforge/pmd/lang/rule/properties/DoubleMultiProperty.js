var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":71,"id":27939,"methods":[{"el":32,"sc":3,"sl":21},{"el":46,"sc":2,"sl":44},{"el":54,"sc":2,"sl":52},{"el":62,"sc":2,"sl":60},{"el":70,"sc":2,"sl":68}],"name":"DoubleMultiProperty","sl":17}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_345":{"methods":[{"sl":44},{"sl":52}],"name":"testErrorFor","pass":true,"statements":[{"sl":45},{"sl":53}]},"test_53":{"methods":[{"sl":44},{"sl":52}],"name":"testErrorForBad","pass":true,"statements":[{"sl":45},{"sl":53}]},"test_624":{"methods":[{"sl":44},{"sl":60},{"sl":68}],"name":"testAsDelimitedString","pass":true,"statements":[{"sl":45},{"sl":61},{"sl":69}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [345, 53, 624], [345, 53, 624], [], [], [], [], [], [], [345, 53], [345, 53], [], [], [], [], [], [], [624], [624], [], [], [], [], [], [], [624], [624], [], []]
