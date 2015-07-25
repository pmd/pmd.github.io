var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":332,"id":7993,"methods":[{"el":30,"sc":5,"sl":26},{"el":36,"sc":5,"sl":32},{"el":40,"sc":5,"sl":38},{"el":56,"sc":5,"sl":45},{"el":80,"sc":5,"sl":61},{"el":106,"sc":5,"sl":86},{"el":111,"sc":5,"sl":108},{"el":121,"sc":5,"sl":113},{"el":138,"sc":5,"sl":124},{"el":204,"sc":5,"sl":147},{"el":226,"sc":5,"sl":206},{"el":230,"sc":5,"sl":228},{"el":237,"sc":5,"sl":235},{"el":244,"sc":5,"sl":242},{"el":264,"sc":5,"sl":246},{"el":283,"sc":5,"sl":266},{"el":289,"sc":5,"sl":285},{"el":302,"sc":5,"sl":291},{"el":309,"sc":5,"sl":304},{"el":326,"sc":5,"sl":311},{"el":330,"sc":5,"sl":328}],"name":"DAAPathFinder","sl":17}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_48":{"methods":[{"sl":26}],"name":"testTwoUpdateDefs","pass":true,"statements":[{"sl":27},{"sl":28},{"sl":29}]},"test_612":{"methods":[{"sl":32},{"sl":38},{"sl":45},{"sl":61},{"sl":86},{"sl":108},{"sl":113},{"sl":124},{"sl":147},{"sl":206},{"sl":228},{"sl":235},{"sl":242},{"sl":246},{"sl":266},{"sl":285},{"sl":291},{"sl":304},{"sl":311},{"sl":328}],"name":"testResourceFileCommands","pass":true,"statements":[{"sl":33},{"sl":34},{"sl":35},{"sl":39},{"sl":46},{"sl":47},{"sl":48},{"sl":49},{"sl":50},{"sl":52},{"sl":53},{"sl":54},{"sl":55},{"sl":62},{"sl":63},{"sl":64},{"sl":65},{"sl":67},{"sl":68},{"sl":69},{"sl":70},{"sl":73},{"sl":74},{"sl":77},{"sl":87},{"sl":88},{"sl":89},{"sl":90},{"sl":91},{"sl":92},{"sl":94},{"sl":95},{"sl":98},{"sl":99},{"sl":102},{"sl":105},{"sl":109},{"sl":110},{"sl":114},{"sl":115},{"sl":116},{"sl":117},{"sl":118},{"sl":125},{"sl":126},{"sl":127},{"sl":128},{"sl":130},{"sl":131},{"sl":134},{"sl":135},{"sl":136},{"sl":148},{"sl":149},{"sl":150},{"sl":152},{"sl":153},{"sl":154},{"sl":155},{"sl":156},{"sl":157},{"sl":159},{"sl":160},{"sl":163},{"sl":164},{"sl":169},{"sl":170},{"sl":172},{"sl":173},{"sl":174},{"sl":175},{"sl":179},{"sl":180},{"sl":181},{"sl":183},{"sl":187},{"sl":188},{"sl":189},{"sl":190},{"sl":191},{"sl":192},{"sl":194},{"sl":195},{"sl":198},{"sl":199},{"sl":207},{"sl":208},{"sl":212},{"sl":213},{"sl":215},{"sl":217},{"sl":218},{"sl":219},{"sl":222},{"sl":223},{"sl":224},{"sl":229},{"sl":236},{"sl":243},{"sl":247},{"sl":249},{"sl":253},{"sl":254},{"sl":256},{"sl":257},{"sl":258},{"sl":259},{"sl":260},{"sl":263},{"sl":267},{"sl":268},{"sl":272},{"sl":273},{"sl":275},{"sl":276},{"sl":277},{"sl":278},{"sl":279},{"sl":282},{"sl":286},{"sl":287},{"sl":288},{"sl":292},{"sl":293},{"sl":295},{"sl":296},{"sl":297},{"sl":298},{"sl":301},{"sl":305},{"sl":306},{"sl":312},{"sl":313},{"sl":314},{"sl":316},{"sl":317},{"sl":318},{"sl":319},{"sl":320},{"sl":321},{"sl":325},{"sl":329}]},"test_627":{"methods":[{"sl":32},{"sl":38},{"sl":45},{"sl":61},{"sl":86},{"sl":108},{"sl":113},{"sl":124},{"sl":147},{"sl":206},{"sl":228},{"sl":285},{"sl":291},{"sl":304},{"sl":311},{"sl":328}],"name":"testPmdOptions","pass":true,"statements":[{"sl":33},{"sl":34},{"sl":35},{"sl":39},{"sl":46},{"sl":47},{"sl":48},{"sl":49},{"sl":50},{"sl":52},{"sl":53},{"sl":54},{"sl":55},{"sl":62},{"sl":63},{"sl":64},{"sl":65},{"sl":67},{"sl":68},{"sl":69},{"sl":70},{"sl":73},{"sl":74},{"sl":77},{"sl":87},{"sl":88},{"sl":89},{"sl":90},{"sl":91},{"sl":92},{"sl":94},{"sl":95},{"sl":98},{"sl":99},{"sl":102},{"sl":105},{"sl":109},{"sl":110},{"sl":114},{"sl":115},{"sl":116},{"sl":117},{"sl":118},{"sl":125},{"sl":126},{"sl":127},{"sl":128},{"sl":130},{"sl":131},{"sl":134},{"sl":135},{"sl":136},{"sl":148},{"sl":169},{"sl":170},{"sl":172},{"sl":187},{"sl":188},{"sl":189},{"sl":190},{"sl":191},{"sl":192},{"sl":194},{"sl":195},{"sl":198},{"sl":199},{"sl":207},{"sl":208},{"sl":212},{"sl":213},{"sl":215},{"sl":217},{"sl":218},{"sl":219},{"sl":222},{"sl":223},{"sl":229},{"sl":286},{"sl":287},{"sl":288},{"sl":292},{"sl":293},{"sl":295},{"sl":296},{"sl":297},{"sl":298},{"sl":301},{"sl":305},{"sl":306},{"sl":312},{"sl":313},{"sl":314},{"sl":316},{"sl":317},{"sl":318},{"sl":319},{"sl":320},{"sl":321},{"sl":325},{"sl":329}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [48], [48], [48], [48], [], [], [627, 612], [627, 612], [627, 612], [627, 612], [], [], [627, 612], [627, 612], [], [], [], [], [], [627, 612], [627, 612], [627, 612], [627, 612], [627, 612], [627, 612], [], [627, 612], [627, 612], [627, 612], [627, 612], [], [], [], [], [], [627, 612], [627, 612], [627, 612], [627, 612], [627, 612], [], [627, 612], [627, 612], [627, 612], [627, 612], [], [], [627, 612], [627, 612], [], [], [627, 612], [], [], [], [], [], [], [], [], [627, 612], [627, 612], [627, 612], [627, 612], [627, 612], [627, 612], [627, 612], [], [627, 612], [627, 612], [], [], [627, 612], [627, 612], [], [], [627, 612], [], [], [627, 612], [], [], [627, 612], [627, 612], [627, 612], [], [], [627, 612], [627, 612], [627, 612], [627, 612], [627, 612], [627, 612], [], [], [], [], [], [627, 612], [627, 612], [627, 612], [627, 612], [627, 612], [], [627, 612], [627, 612], [], [], [627, 612], [627, 612], [627, 612], [], [], [], [], [], [], [], [], [], [], [627, 612], [627, 612], [612], [612], [], [612], [612], [612], [612], [612], [612], [], [612], [612], [], [], [612], [612], [], [], [], [], [627, 612], [627, 612], [], [627, 612], [612], [612], [612], [], [], [], [612], [612], [612], [], [612], [], [], [], [627, 612], [627, 612], [627, 612], [627, 612], [627, 612], [627, 612], [], [627, 612], [627, 612], [], [], [627, 612], [627, 612], [], [], [], [], [], [], [627, 612], [627, 612], [627, 612], [], [], [], [627, 612], [627, 612], [], [627, 612], [], [627, 612], [627, 612], [627, 612], [], [], [627, 612], [627, 612], [612], [], [], [], [627, 612], [627, 612], [], [], [], [], [], [612], [612], [], [], [], [], [], [612], [612], [], [], [612], [612], [], [612], [], [], [], [612], [612], [], [612], [612], [612], [612], [612], [], [], [612], [], [], [612], [612], [612], [], [], [], [612], [612], [], [612], [612], [612], [612], [612], [], [], [612], [], [], [627, 612], [627, 612], [627, 612], [627, 612], [], [], [627, 612], [627, 612], [627, 612], [], [627, 612], [627, 612], [627, 612], [627, 612], [], [], [627, 612], [], [], [627, 612], [627, 612], [627, 612], [], [], [], [], [627, 612], [627, 612], [627, 612], [627, 612], [], [627, 612], [627, 612], [627, 612], [627, 612], [627, 612], [627, 612], [], [], [], [627, 612], [], [], [627, 612], [627, 612], [], [], []]
