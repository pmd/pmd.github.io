var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":91,"id":33789,"methods":[{"el":44,"sc":5,"sl":39},{"el":51,"sc":5,"sl":46},{"el":58,"sc":5,"sl":53},{"el":65,"sc":5,"sl":60},{"el":72,"sc":5,"sl":67},{"el":79,"sc":5,"sl":74},{"el":86,"sc":5,"sl":81},{"el":90,"sc":5,"sl":88}],"name":"MetricTest","sl":35}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_244":{"methods":[{"sl":39}],"name":"testGetMetricName","pass":true,"statements":[{"sl":41},{"sl":43}]},"test_311":{"methods":[{"sl":60}],"name":"testGetLowValue","pass":true,"statements":[{"sl":62},{"sl":63},{"sl":64}]},"test_43":{"methods":[{"sl":53}],"name":"testGetTotal","pass":true,"statements":[{"sl":55},{"sl":56},{"sl":57}]},"test_485":{"methods":[{"sl":81}],"name":"testGetStandardDeviation","pass":true,"statements":[{"sl":83},{"sl":84},{"sl":85}]},"test_522":{"methods":[{"sl":67}],"name":"testGetHighValue","pass":true,"statements":[{"sl":69},{"sl":70},{"sl":71}]},"test_697":{"methods":[{"sl":74}],"name":"testGetAverage","pass":true,"statements":[{"sl":76},{"sl":77},{"sl":78}]},"test_781":{"methods":[{"sl":46}],"name":"testGetCount","pass":true,"statements":[{"sl":48},{"sl":49},{"sl":50}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [244], [], [244], [], [244], [], [], [781], [], [781], [781], [781], [], [], [43], [], [43], [43], [43], [], [], [311], [], [311], [311], [311], [], [], [522], [], [522], [522], [522], [], [], [697], [], [697], [697], [697], [], [], [485], [], [485], [485], [485], [], [], [], [], [], []]
