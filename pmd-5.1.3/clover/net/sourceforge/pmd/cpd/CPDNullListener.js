var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":14,"id":3182,"methods":[{"el":10,"sc":5,"sl":9},{"el":13,"sc":5,"sl":12}],"name":"CPDNullListener","sl":8}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_23":{"methods":[{"sl":9},{"sl":12}],"name":"testIgnoreIdentifiers","pass":true,"statements":[]},"test_236":{"methods":[{"sl":12}],"name":"testSimple","pass":true,"statements":[]},"test_310":{"methods":[{"sl":9},{"sl":12}],"name":"testBrokenAndValidFile","pass":true,"statements":[]},"test_651":{"methods":[{"sl":12}],"name":"testIgnore","pass":true,"statements":[]},"test_703":{"methods":[{"sl":9},{"sl":12}],"name":"testEncodingOption","pass":true,"statements":[]},"test_795":{"methods":[{"sl":9},{"sl":12}],"name":"testExcludes","pass":true,"statements":[]},"test_887":{"methods":[{"sl":9},{"sl":12}],"name":"testBasic","pass":true,"statements":[]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [887, 310, 23, 795, 703], [], [], [887, 310, 23, 795, 703, 651, 236], [], []]
