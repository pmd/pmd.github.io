var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":89,"id":41221,"methods":[{"el":42,"sc":5,"sl":37},{"el":49,"sc":5,"sl":44},{"el":56,"sc":5,"sl":51},{"el":63,"sc":5,"sl":58},{"el":70,"sc":5,"sl":65},{"el":77,"sc":5,"sl":72},{"el":84,"sc":5,"sl":79},{"el":88,"sc":5,"sl":86}],"name":"MetricTest","sl":33}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_221":{"methods":[{"sl":58}],"name":"testGetLowValue","pass":true,"statements":[{"sl":60},{"sl":61},{"sl":62}]},"test_237":{"methods":[{"sl":44}],"name":"testGetCount","pass":true,"statements":[{"sl":46},{"sl":47},{"sl":48}]},"test_493":{"methods":[{"sl":72}],"name":"testGetAverage","pass":true,"statements":[{"sl":74},{"sl":75},{"sl":76}]},"test_609":{"methods":[{"sl":65}],"name":"testGetHighValue","pass":true,"statements":[{"sl":67},{"sl":68},{"sl":69}]},"test_628":{"methods":[{"sl":51}],"name":"testGetTotal","pass":true,"statements":[{"sl":53},{"sl":54},{"sl":55}]},"test_788":{"methods":[{"sl":79}],"name":"testGetStandardDeviation","pass":true,"statements":[{"sl":81},{"sl":82},{"sl":83}]},"test_867":{"methods":[{"sl":37}],"name":"testGetMetricName","pass":true,"statements":[{"sl":39},{"sl":41}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [867], [], [867], [], [867], [], [], [237], [], [237], [237], [237], [], [], [628], [], [628], [628], [628], [], [], [221], [], [221], [221], [221], [], [], [609], [], [609], [609], [609], [], [], [493], [], [493], [493], [493], [], [], [788], [], [788], [788], [788], [], [], [], [], [], []]
