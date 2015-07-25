var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":14,"id":3926,"methods":[{"el":13,"sc":5,"sl":11}],"name":"ReportException","sl":9}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_1811":{"methods":[{"sl":11}],"name":"testInvalidFile","pass":true,"statements":[{"sl":12}]},"test_2011":{"methods":[{"sl":11}],"name":"testInvalidFile","pass":true,"statements":[{"sl":12}]},"test_831":{"methods":[{"sl":11}],"name":"testInvalidFile","pass":true,"statements":[{"sl":12}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [2011, 831, 1811], [2011, 831, 1811], [], []]
