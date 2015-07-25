var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":122,"id":43623,"methods":[{"el":21,"sc":5,"sl":18},{"el":34,"sc":5,"sl":23},{"el":51,"sc":5,"sl":36},{"el":78,"sc":5,"sl":58},{"el":117,"sc":5,"sl":95},{"el":121,"sc":5,"sl":119}],"name":"PMDASMClassLoaderTest","sl":14},{"el":88,"id":43660,"methods":[{"el":87,"sc":2,"sl":83}],"name":"PMDASMClassLoaderTest.MockedClassLoader","sl":80}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_302":{"methods":[{"sl":58},{"sl":83}],"name":"testCachingOfNotFoundClasses","pass":true,"statements":[{"sl":60},{"sl":61},{"sl":62},{"sl":63},{"sl":64},{"sl":70},{"sl":71},{"sl":77},{"sl":85},{"sl":86}]},"test_314":{"methods":[{"sl":36}],"name":"testClassWithImportInnerOnDemand","pass":true,"statements":[{"sl":38},{"sl":39},{"sl":40},{"sl":41},{"sl":42},{"sl":43},{"sl":44},{"sl":45},{"sl":46},{"sl":47},{"sl":48},{"sl":49},{"sl":50}]},"test_762":{"methods":[{"sl":23}],"name":"testLoadClassWithImportOnDemand","pass":true,"statements":[{"sl":25},{"sl":26},{"sl":27},{"sl":28},{"sl":29},{"sl":30},{"sl":31},{"sl":32},{"sl":33}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [762], [], [762], [762], [762], [762], [762], [762], [762], [762], [762], [], [], [314], [], [314], [314], [314], [314], [314], [314], [314], [314], [314], [314], [314], [314], [314], [], [], [], [], [], [], [], [302], [], [302], [302], [302], [302], [302], [], [], [], [], [], [302], [302], [], [], [], [], [], [302], [], [], [], [], [], [302], [], [302], [302], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], []]
