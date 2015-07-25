var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":140,"id":35663,"methods":[{"el":35,"sc":5,"sl":33},{"el":44,"sc":5,"sl":42},{"el":53,"sc":5,"sl":49},{"el":63,"sc":5,"sl":61},{"el":97,"sc":5,"sl":68}],"name":"SimpleAggregatorTst","sl":27},{"el":138,"id":35694,"methods":[{"el":102,"sc":9,"sl":100},{"el":107,"sc":9,"sl":104},{"el":113,"sc":9,"sl":109},{"el":119,"sc":9,"sl":115},{"el":125,"sc":9,"sl":121},{"el":135,"sc":9,"sl":127}],"name":"SimpleAggregatorTst.CustomXmlTestClassMethodsRunner","sl":99}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_254":{"methods":[{"sl":33},{"sl":49}],"name":"testAll","pass":true,"statements":[{"sl":34},{"sl":50},{"sl":51}]},"test_267":{"methods":[{"sl":49}],"name":"testDefault","pass":true,"statements":[{"sl":50},{"sl":51}]},"test_429":{"methods":[{"sl":49}],"name":"testSimple","pass":true,"statements":[{"sl":50},{"sl":51}]},"test_619":{"methods":[{"sl":49}],"name":"testIgnoredConstructorInvocation","pass":true,"statements":[{"sl":50},{"sl":51}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [254], [254], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [254, 619, 429, 267], [254, 619, 429, 267], [254, 619, 429, 267], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], []]
