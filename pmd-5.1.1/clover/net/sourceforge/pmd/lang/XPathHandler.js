var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":45,"id":6429,"methods":[{"el":18,"sc":9,"sl":17},{"el":21,"sc":9,"sl":20},{"el":25,"sc":9,"sl":23}],"name":"XPathHandler","sl":14}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_16":{"methods":[{"sl":17}],"name":"testAcceptance","pass":true,"statements":[]},"test_161":{"methods":[{"sl":20}],"name":"testXPathRule1Compatibility","pass":true,"statements":[]},"test_225":{"methods":[{"sl":20}],"name":"testXPathRule2","pass":true,"statements":[]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [16], [], [], [225, 161], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], []]
