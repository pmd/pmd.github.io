var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":151,"id":7175,"methods":[{"el":45,"sc":5,"sl":29},{"el":50,"sc":5,"sl":47},{"el":55,"sc":5,"sl":52},{"el":60,"sc":5,"sl":57},{"el":65,"sc":5,"sl":62},{"el":70,"sc":5,"sl":67},{"el":75,"sc":5,"sl":72},{"el":80,"sc":5,"sl":77},{"el":85,"sc":5,"sl":82},{"el":90,"sc":5,"sl":87},{"el":95,"sc":5,"sl":92},{"el":100,"sc":5,"sl":97},{"el":149,"sc":5,"sl":102}],"name":"ElementNode","sl":20}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_3":{"methods":[{"sl":29},{"sl":47},{"sl":67},{"sl":72},{"sl":77},{"sl":82},{"sl":87},{"sl":102}],"name":"testImageOfPrimarySuffix","pass":true,"statements":[{"sl":31},{"sl":32},{"sl":33},{"sl":34},{"sl":35},{"sl":36},{"sl":37},{"sl":38},{"sl":39},{"sl":42},{"sl":44},{"sl":49},{"sl":69},{"sl":74},{"sl":79},{"sl":84},{"sl":89},{"sl":105},{"sl":110},{"sl":111},{"sl":112},{"sl":113},{"sl":116}]},"test_509":{"methods":[{"sl":29},{"sl":47},{"sl":67},{"sl":72},{"sl":77},{"sl":82},{"sl":87},{"sl":102}],"name":"testXPathRule1Compatibility","pass":true,"statements":[{"sl":31},{"sl":32},{"sl":33},{"sl":34},{"sl":35},{"sl":36},{"sl":37},{"sl":38},{"sl":39},{"sl":42},{"sl":44},{"sl":49},{"sl":69},{"sl":74},{"sl":79},{"sl":84},{"sl":89},{"sl":105},{"sl":112},{"sl":113},{"sl":116}]},"test_612":{"methods":[{"sl":29},{"sl":47},{"sl":67},{"sl":72},{"sl":77},{"sl":82},{"sl":87},{"sl":97},{"sl":102}],"name":"testResourceFileCommands","pass":true,"statements":[{"sl":31},{"sl":32},{"sl":33},{"sl":34},{"sl":35},{"sl":36},{"sl":37},{"sl":38},{"sl":39},{"sl":42},{"sl":44},{"sl":49},{"sl":69},{"sl":74},{"sl":79},{"sl":84},{"sl":89},{"sl":99},{"sl":105},{"sl":110},{"sl":111},{"sl":112},{"sl":113},{"sl":114},{"sl":116}]},"test_627":{"methods":[{"sl":29},{"sl":47},{"sl":67},{"sl":72},{"sl":77},{"sl":82},{"sl":87},{"sl":97},{"sl":102}],"name":"testPmdOptions","pass":true,"statements":[{"sl":31},{"sl":32},{"sl":33},{"sl":34},{"sl":35},{"sl":36},{"sl":37},{"sl":38},{"sl":39},{"sl":42},{"sl":44},{"sl":49},{"sl":69},{"sl":74},{"sl":79},{"sl":84},{"sl":89},{"sl":99},{"sl":105},{"sl":110},{"sl":111},{"sl":112},{"sl":113},{"sl":114},{"sl":116}]},"test_783":{"methods":[{"sl":29},{"sl":47},{"sl":67},{"sl":72},{"sl":77},{"sl":82},{"sl":87},{"sl":102}],"name":"testXPathRule2","pass":true,"statements":[{"sl":31},{"sl":32},{"sl":33},{"sl":34},{"sl":35},{"sl":36},{"sl":37},{"sl":38},{"sl":39},{"sl":42},{"sl":44},{"sl":49},{"sl":69},{"sl":74},{"sl":79},{"sl":84},{"sl":89},{"sl":105},{"sl":112},{"sl":113},{"sl":116}]},"test_862":{"methods":[{"sl":29},{"sl":47},{"sl":67},{"sl":72},{"sl":77},{"sl":82},{"sl":87},{"sl":97},{"sl":102}],"name":"testFollowingSibling","pass":true,"statements":[{"sl":31},{"sl":32},{"sl":33},{"sl":34},{"sl":35},{"sl":36},{"sl":37},{"sl":38},{"sl":39},{"sl":42},{"sl":44},{"sl":49},{"sl":69},{"sl":74},{"sl":79},{"sl":84},{"sl":89},{"sl":99},{"sl":105},{"sl":112},{"sl":113},{"sl":116},{"sl":124},{"sl":125},{"sl":126},{"sl":128}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [509, 862, 783, 627, 3, 612], [], [509, 862, 783, 627, 3, 612], [509, 862, 783, 627, 3, 612], [509, 862, 783, 627, 3, 612], [509, 862, 783, 627, 3, 612], [509, 862, 783, 627, 3, 612], [509, 862, 783, 627, 3, 612], [509, 862, 783, 627, 3, 612], [509, 862, 783, 627, 3, 612], [509, 862, 783, 627, 3, 612], [], [], [509, 862, 783, 627, 3, 612], [], [509, 862, 783, 627, 3, 612], [], [], [509, 862, 783, 627, 3, 612], [], [509, 862, 783, 627, 3, 612], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [509, 862, 783, 627, 3, 612], [], [509, 862, 783, 627, 3, 612], [], [], [509, 862, 783, 627, 3, 612], [], [509, 862, 783, 627, 3, 612], [], [], [509, 862, 783, 627, 3, 612], [], [509, 862, 783, 627, 3, 612], [], [], [509, 862, 783, 627, 3, 612], [], [509, 862, 783, 627, 3, 612], [], [], [509, 862, 783, 627, 3, 612], [], [509, 862, 783, 627, 3, 612], [], [], [], [], [], [], [], [862, 627, 612], [], [862, 627, 612], [], [], [509, 862, 783, 627, 3, 612], [], [], [509, 862, 783, 627, 3, 612], [], [], [], [], [627, 3, 612], [627, 3, 612], [509, 862, 783, 627, 3, 612], [509, 862, 783, 627, 3, 612], [627, 612], [], [509, 862, 783, 627, 3, 612], [], [], [], [], [], [], [], [862], [862], [862], [], [862], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], []]
