var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":102,"id":4391,"methods":[{"el":19,"sc":5,"sl":17},{"el":47,"sc":5,"sl":21},{"el":69,"sc":5,"sl":49},{"el":76,"sc":5,"sl":71},{"el":82,"sc":5,"sl":78},{"el":89,"sc":5,"sl":84},{"el":97,"sc":5,"sl":91},{"el":101,"sc":5,"sl":99}],"name":"MatchCollector","sl":12}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_184":{"methods":[{"sl":17},{"sl":21},{"sl":49},{"sl":71},{"sl":78},{"sl":84},{"sl":91},{"sl":99}],"name":"testIgnore","pass":true,"statements":[{"sl":18},{"sl":23},{"sl":24},{"sl":25},{"sl":26},{"sl":27},{"sl":28},{"sl":31},{"sl":32},{"sl":36},{"sl":37},{"sl":41},{"sl":44},{"sl":50},{"sl":51},{"sl":52},{"sl":53},{"sl":54},{"sl":56},{"sl":57},{"sl":59},{"sl":61},{"sl":64},{"sl":65},{"sl":66},{"sl":72},{"sl":73},{"sl":74},{"sl":75},{"sl":80},{"sl":81},{"sl":85},{"sl":88},{"sl":92},{"sl":93},{"sl":94},{"sl":96},{"sl":100}]},"test_409":{"methods":[{"sl":17},{"sl":21},{"sl":49},{"sl":71},{"sl":78},{"sl":84},{"sl":91},{"sl":99}],"name":"testSimple","pass":true,"statements":[{"sl":18},{"sl":23},{"sl":24},{"sl":25},{"sl":26},{"sl":27},{"sl":28},{"sl":31},{"sl":32},{"sl":36},{"sl":37},{"sl":41},{"sl":44},{"sl":50},{"sl":51},{"sl":52},{"sl":53},{"sl":54},{"sl":72},{"sl":73},{"sl":74},{"sl":75},{"sl":80},{"sl":81},{"sl":85},{"sl":88},{"sl":92},{"sl":93},{"sl":94},{"sl":96},{"sl":100}]},"test_410":{"methods":[{"sl":17},{"sl":21},{"sl":49},{"sl":71},{"sl":78},{"sl":84},{"sl":91},{"sl":99}],"name":"testIgnoreIdentifiers","pass":true,"statements":[{"sl":18},{"sl":23},{"sl":24},{"sl":25},{"sl":26},{"sl":27},{"sl":28},{"sl":31},{"sl":36},{"sl":37},{"sl":41},{"sl":44},{"sl":50},{"sl":51},{"sl":52},{"sl":53},{"sl":54},{"sl":72},{"sl":73},{"sl":74},{"sl":75},{"sl":80},{"sl":81},{"sl":85},{"sl":86},{"sl":92},{"sl":93},{"sl":94},{"sl":96},{"sl":100}]},"test_59":{"methods":[{"sl":17},{"sl":21},{"sl":49},{"sl":71},{"sl":78},{"sl":84},{"sl":91},{"sl":99}],"name":"testBasic","pass":true,"statements":[{"sl":18},{"sl":23},{"sl":24},{"sl":25},{"sl":26},{"sl":27},{"sl":28},{"sl":29},{"sl":31},{"sl":32},{"sl":36},{"sl":37},{"sl":38},{"sl":41},{"sl":44},{"sl":50},{"sl":51},{"sl":52},{"sl":53},{"sl":54},{"sl":56},{"sl":57},{"sl":59},{"sl":60},{"sl":61},{"sl":62},{"sl":63},{"sl":64},{"sl":65},{"sl":66},{"sl":72},{"sl":73},{"sl":74},{"sl":75},{"sl":80},{"sl":81},{"sl":85},{"sl":88},{"sl":92},{"sl":93},{"sl":94},{"sl":96},{"sl":100}]},"test_621":{"methods":[{"sl":17},{"sl":78}],"name":"testExcludes","pass":true,"statements":[{"sl":18},{"sl":80},{"sl":81}]},"test_747":{"methods":[{"sl":17},{"sl":21},{"sl":49},{"sl":71},{"sl":78},{"sl":84},{"sl":91},{"sl":99}],"name":"testEncodingOption","pass":true,"statements":[{"sl":18},{"sl":23},{"sl":24},{"sl":25},{"sl":26},{"sl":27},{"sl":28},{"sl":31},{"sl":36},{"sl":37},{"sl":41},{"sl":44},{"sl":50},{"sl":51},{"sl":52},{"sl":53},{"sl":54},{"sl":72},{"sl":73},{"sl":74},{"sl":75},{"sl":80},{"sl":81},{"sl":85},{"sl":86},{"sl":92},{"sl":93},{"sl":94},{"sl":96},{"sl":100}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [184, 409, 747, 59, 410, 621], [184, 409, 747, 59, 410, 621], [], [], [184, 409, 747, 59, 410], [], [184, 409, 747, 59, 410], [184, 409, 747, 59, 410], [184, 409, 747, 59, 410], [184, 409, 747, 59, 410], [184, 409, 747, 59, 410], [184, 409, 747, 59, 410], [59], [], [184, 409, 747, 59, 410], [184, 409, 59], [], [], [], [184, 409, 747, 59, 410], [184, 409, 747, 59, 410], [59], [], [], [184, 409, 747, 59, 410], [], [], [184, 409, 747, 59, 410], [], [], [], [], [184, 409, 747, 59, 410], [184, 409, 747, 59, 410], [184, 409, 747, 59, 410], [184, 409, 747, 59, 410], [184, 409, 747, 59, 410], [184, 409, 747, 59, 410], [], [184, 59], [184, 59], [], [184, 59], [59], [184, 59], [59], [59], [184, 59], [184, 59], [184, 59], [], [], [], [], [184, 409, 747, 59, 410], [184, 409, 747, 59, 410], [184, 409, 747, 59, 410], [184, 409, 747, 59, 410], [184, 409, 747, 59, 410], [], [], [184, 409, 747, 59, 410, 621], [], [184, 409, 747, 59, 410, 621], [184, 409, 747, 59, 410, 621], [], [], [184, 409, 747, 59, 410], [184, 409, 747, 59, 410], [747, 410], [], [184, 409, 59], [], [], [184, 409, 747, 59, 410], [184, 409, 747, 59, 410], [184, 409, 747, 59, 410], [184, 409, 747, 59, 410], [], [184, 409, 747, 59, 410], [], [], [184, 409, 747, 59, 410], [184, 409, 747, 59, 410], [], []]
