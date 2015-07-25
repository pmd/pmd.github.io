var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":44,"id":23188,"methods":[{"el":25,"sc":5,"sl":23},{"el":30,"sc":5,"sl":27},{"el":34,"sc":5,"sl":32},{"el":39,"sc":5,"sl":36},{"el":43,"sc":5,"sl":41}],"name":"JspParser","sl":21}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_173":{"methods":[{"sl":23},{"sl":36}],"name":"testParseDollar","pass":true,"statements":[{"sl":24},{"sl":37},{"sl":38}]},"test_218":{"methods":[{"sl":23},{"sl":36},{"sl":41}],"name":"testExpressionMatching","pass":true,"statements":[{"sl":24},{"sl":37},{"sl":38},{"sl":42}]},"test_70":{"methods":[{"sl":23},{"sl":32}],"name":"testCopyXmlToClipboard","pass":true,"statements":[{"sl":24},{"sl":33}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [173, 70, 218], [173, 70, 218], [], [], [], [], [], [], [], [70], [70], [], [], [173, 218], [173, 218], [173, 218], [], [], [218], [218], [], []]
