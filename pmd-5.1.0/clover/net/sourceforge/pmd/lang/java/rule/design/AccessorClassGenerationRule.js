var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":311,"id":15140,"methods":[{"el":45,"sc":5,"sl":43},{"el":51,"sc":5,"sl":47},{"el":221,"sc":5,"sl":156},{"el":231,"sc":5,"sl":226},{"el":246,"sc":5,"sl":233},{"el":269,"sc":5,"sl":248},{"el":280,"sc":5,"sl":271},{"el":284,"sc":5,"sl":282},{"el":288,"sc":5,"sl":286},{"el":309,"sc":5,"sl":300}],"name":"AccessorClassGenerationRule","sl":37},{"el":96,"id":15146,"methods":[{"el":67,"sc":9,"sl":62},{"el":71,"sc":9,"sl":69},{"el":75,"sc":9,"sl":73},{"el":79,"sc":9,"sl":77},{"el":83,"sc":9,"sl":81},{"el":87,"sc":9,"sl":85},{"el":91,"sc":9,"sl":89},{"el":95,"sc":9,"sl":93}],"name":"AccessorClassGenerationRule.ClassData","sl":53},{"el":151,"id":15165,"methods":[{"el":134,"sc":9,"sl":104},{"el":138,"sc":9,"sl":136},{"el":142,"sc":9,"sl":140},{"el":146,"sc":9,"sl":144},{"el":150,"sc":9,"sl":148}],"name":"AccessorClassGenerationRule.AllocData","sl":98}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_315":{"methods":[{"sl":47},{"sl":62},{"sl":69},{"sl":81},{"sl":93},{"sl":104},{"sl":148},{"sl":156},{"sl":233},{"sl":248},{"sl":271},{"sl":282},{"sl":286},{"sl":300}],"name":"testAbstractNames","pass":true,"statements":[{"sl":48},{"sl":49},{"sl":50},{"sl":63},{"sl":64},{"sl":65},{"sl":66},{"sl":70},{"sl":82},{"sl":94},{"sl":105},{"sl":106},{"sl":107},{"sl":110},{"sl":113},{"sl":114},{"sl":118},{"sl":119},{"sl":128},{"sl":131},{"sl":133},{"sl":149},{"sl":157},{"sl":185},{"sl":207},{"sl":208},{"sl":209},{"sl":210},{"sl":211},{"sl":213},{"sl":214},{"sl":217},{"sl":219},{"sl":220},{"sl":238},{"sl":241},{"sl":242},{"sl":243},{"sl":245},{"sl":250},{"sl":251},{"sl":276},{"sl":279},{"sl":283},{"sl":287},{"sl":301},{"sl":302},{"sl":303},{"sl":306},{"sl":308}]},"test_345":{"methods":[{"sl":47},{"sl":62},{"sl":69},{"sl":81},{"sl":93},{"sl":104},{"sl":148},{"sl":156},{"sl":233},{"sl":248},{"sl":271},{"sl":282},{"sl":286},{"sl":300}],"name":"testAbstractNamesInNestedRuleset","pass":true,"statements":[{"sl":48},{"sl":49},{"sl":50},{"sl":63},{"sl":64},{"sl":65},{"sl":66},{"sl":70},{"sl":82},{"sl":94},{"sl":105},{"sl":106},{"sl":107},{"sl":110},{"sl":113},{"sl":114},{"sl":118},{"sl":119},{"sl":128},{"sl":131},{"sl":133},{"sl":149},{"sl":157},{"sl":185},{"sl":207},{"sl":208},{"sl":209},{"sl":210},{"sl":211},{"sl":213},{"sl":214},{"sl":217},{"sl":219},{"sl":220},{"sl":238},{"sl":241},{"sl":242},{"sl":243},{"sl":245},{"sl":250},{"sl":251},{"sl":276},{"sl":279},{"sl":283},{"sl":287},{"sl":301},{"sl":302},{"sl":303},{"sl":306},{"sl":308}]},"test_393":{"methods":[{"sl":47},{"sl":62},{"sl":69},{"sl":81},{"sl":93},{"sl":104},{"sl":148},{"sl":156},{"sl":233},{"sl":248},{"sl":271},{"sl":282},{"sl":286},{"sl":300}],"name":"testNestedRuleset","pass":true,"statements":[{"sl":48},{"sl":49},{"sl":50},{"sl":63},{"sl":64},{"sl":65},{"sl":66},{"sl":70},{"sl":82},{"sl":94},{"sl":105},{"sl":106},{"sl":107},{"sl":110},{"sl":113},{"sl":114},{"sl":118},{"sl":119},{"sl":128},{"sl":131},{"sl":133},{"sl":149},{"sl":157},{"sl":185},{"sl":207},{"sl":208},{"sl":209},{"sl":210},{"sl":211},{"sl":213},{"sl":214},{"sl":217},{"sl":219},{"sl":220},{"sl":238},{"sl":241},{"sl":242},{"sl":243},{"sl":245},{"sl":250},{"sl":251},{"sl":276},{"sl":279},{"sl":283},{"sl":287},{"sl":301},{"sl":302},{"sl":303},{"sl":306},{"sl":308}]},"test_398":{"methods":[{"sl":47},{"sl":62},{"sl":69},{"sl":73},{"sl":77},{"sl":81},{"sl":85},{"sl":89},{"sl":93},{"sl":104},{"sl":136},{"sl":148},{"sl":156},{"sl":226},{"sl":233},{"sl":248},{"sl":271},{"sl":282},{"sl":286},{"sl":300}],"name":"testPmdOptions","pass":true,"statements":[{"sl":48},{"sl":49},{"sl":50},{"sl":63},{"sl":64},{"sl":65},{"sl":66},{"sl":70},{"sl":74},{"sl":78},{"sl":82},{"sl":86},{"sl":90},{"sl":94},{"sl":105},{"sl":106},{"sl":107},{"sl":110},{"sl":113},{"sl":114},{"sl":118},{"sl":119},{"sl":120},{"sl":121},{"sl":122},{"sl":128},{"sl":131},{"sl":133},{"sl":137},{"sl":149},{"sl":157},{"sl":185},{"sl":187},{"sl":188},{"sl":189},{"sl":190},{"sl":195},{"sl":199},{"sl":200},{"sl":201},{"sl":202},{"sl":203},{"sl":204},{"sl":207},{"sl":208},{"sl":209},{"sl":210},{"sl":211},{"sl":213},{"sl":214},{"sl":217},{"sl":219},{"sl":220},{"sl":227},{"sl":228},{"sl":230},{"sl":238},{"sl":241},{"sl":242},{"sl":243},{"sl":245},{"sl":250},{"sl":251},{"sl":252},{"sl":254},{"sl":255},{"sl":256},{"sl":258},{"sl":259},{"sl":262},{"sl":276},{"sl":279},{"sl":283},{"sl":287},{"sl":301},{"sl":302},{"sl":303},{"sl":306},{"sl":308}]},"test_421":{"methods":[{"sl":47},{"sl":62},{"sl":69},{"sl":81},{"sl":93},{"sl":104},{"sl":148},{"sl":156},{"sl":233},{"sl":248},{"sl":271},{"sl":282},{"sl":286},{"sl":300}],"name":"testRelativeRulesetsInRulesetfiles","pass":true,"statements":[{"sl":48},{"sl":49},{"sl":50},{"sl":63},{"sl":64},{"sl":65},{"sl":66},{"sl":70},{"sl":82},{"sl":94},{"sl":105},{"sl":106},{"sl":107},{"sl":110},{"sl":113},{"sl":114},{"sl":118},{"sl":119},{"sl":128},{"sl":131},{"sl":133},{"sl":149},{"sl":157},{"sl":185},{"sl":207},{"sl":208},{"sl":209},{"sl":210},{"sl":211},{"sl":213},{"sl":214},{"sl":217},{"sl":219},{"sl":220},{"sl":238},{"sl":241},{"sl":242},{"sl":243},{"sl":245},{"sl":250},{"sl":251},{"sl":276},{"sl":279},{"sl":283},{"sl":287},{"sl":301},{"sl":302},{"sl":303},{"sl":306},{"sl":308}]},"test_442":{"methods":[{"sl":47},{"sl":62},{"sl":69},{"sl":81},{"sl":93},{"sl":104},{"sl":148},{"sl":156},{"sl":233},{"sl":248},{"sl":271},{"sl":282},{"sl":286},{"sl":300}],"name":"testFormatterWithProperties","pass":true,"statements":[{"sl":48},{"sl":49},{"sl":50},{"sl":63},{"sl":64},{"sl":65},{"sl":66},{"sl":70},{"sl":82},{"sl":94},{"sl":105},{"sl":106},{"sl":107},{"sl":110},{"sl":113},{"sl":114},{"sl":118},{"sl":119},{"sl":128},{"sl":131},{"sl":133},{"sl":149},{"sl":157},{"sl":185},{"sl":207},{"sl":208},{"sl":209},{"sl":210},{"sl":211},{"sl":213},{"sl":214},{"sl":217},{"sl":219},{"sl":220},{"sl":238},{"sl":241},{"sl":242},{"sl":243},{"sl":245},{"sl":250},{"sl":251},{"sl":276},{"sl":279},{"sl":283},{"sl":287},{"sl":301},{"sl":302},{"sl":303},{"sl":306},{"sl":308}]},"test_485":{"methods":[{"sl":47},{"sl":62},{"sl":69},{"sl":81},{"sl":93},{"sl":104},{"sl":148},{"sl":156},{"sl":233},{"sl":248},{"sl":271},{"sl":282},{"sl":286},{"sl":300}],"name":"testNoFormattersValidation","pass":true,"statements":[{"sl":48},{"sl":49},{"sl":50},{"sl":63},{"sl":64},{"sl":65},{"sl":66},{"sl":70},{"sl":82},{"sl":94},{"sl":105},{"sl":106},{"sl":107},{"sl":110},{"sl":113},{"sl":114},{"sl":118},{"sl":119},{"sl":128},{"sl":131},{"sl":133},{"sl":149},{"sl":157},{"sl":185},{"sl":207},{"sl":208},{"sl":209},{"sl":210},{"sl":211},{"sl":213},{"sl":214},{"sl":217},{"sl":219},{"sl":220},{"sl":238},{"sl":241},{"sl":242},{"sl":243},{"sl":245},{"sl":250},{"sl":251},{"sl":276},{"sl":279},{"sl":283},{"sl":287},{"sl":301},{"sl":302},{"sl":303},{"sl":306},{"sl":308}]},"test_527":{"methods":[{"sl":47},{"sl":62},{"sl":69},{"sl":81},{"sl":93},{"sl":104},{"sl":148},{"sl":156},{"sl":233},{"sl":248},{"sl":271},{"sl":282},{"sl":286},{"sl":300}],"name":"testCommaInRulesetfiles","pass":true,"statements":[{"sl":48},{"sl":49},{"sl":50},{"sl":63},{"sl":64},{"sl":65},{"sl":66},{"sl":70},{"sl":82},{"sl":94},{"sl":105},{"sl":106},{"sl":107},{"sl":110},{"sl":113},{"sl":114},{"sl":118},{"sl":119},{"sl":128},{"sl":131},{"sl":133},{"sl":149},{"sl":157},{"sl":185},{"sl":207},{"sl":208},{"sl":209},{"sl":210},{"sl":211},{"sl":213},{"sl":214},{"sl":217},{"sl":219},{"sl":220},{"sl":238},{"sl":241},{"sl":242},{"sl":243},{"sl":245},{"sl":250},{"sl":251},{"sl":276},{"sl":279},{"sl":283},{"sl":287},{"sl":301},{"sl":302},{"sl":303},{"sl":306},{"sl":308}]},"test_862":{"methods":[{"sl":47},{"sl":62},{"sl":69},{"sl":81},{"sl":93},{"sl":104},{"sl":148},{"sl":156},{"sl":233},{"sl":248},{"sl":271},{"sl":282},{"sl":286},{"sl":300}],"name":"testRelativeRulesets","pass":true,"statements":[{"sl":48},{"sl":49},{"sl":50},{"sl":63},{"sl":64},{"sl":65},{"sl":66},{"sl":70},{"sl":82},{"sl":94},{"sl":105},{"sl":106},{"sl":107},{"sl":110},{"sl":113},{"sl":114},{"sl":118},{"sl":119},{"sl":128},{"sl":131},{"sl":133},{"sl":149},{"sl":157},{"sl":185},{"sl":207},{"sl":208},{"sl":209},{"sl":210},{"sl":211},{"sl":213},{"sl":214},{"sl":217},{"sl":219},{"sl":220},{"sl":238},{"sl":241},{"sl":242},{"sl":243},{"sl":245},{"sl":250},{"sl":251},{"sl":276},{"sl":279},{"sl":283},{"sl":287},{"sl":301},{"sl":302},{"sl":303},{"sl":306},{"sl":308}]},"test_902":{"methods":[{"sl":43},{"sl":47},{"sl":62},{"sl":69},{"sl":73},{"sl":77},{"sl":81},{"sl":85},{"sl":89},{"sl":93},{"sl":104},{"sl":136},{"sl":140},{"sl":144},{"sl":148},{"sl":156},{"sl":226},{"sl":233},{"sl":248},{"sl":271},{"sl":282},{"sl":286},{"sl":300}],"name":"testResourceFileCommands","pass":true,"statements":[{"sl":44},{"sl":48},{"sl":49},{"sl":50},{"sl":63},{"sl":64},{"sl":65},{"sl":66},{"sl":70},{"sl":74},{"sl":78},{"sl":82},{"sl":86},{"sl":90},{"sl":94},{"sl":105},{"sl":106},{"sl":107},{"sl":110},{"sl":113},{"sl":114},{"sl":118},{"sl":119},{"sl":120},{"sl":121},{"sl":122},{"sl":128},{"sl":131},{"sl":133},{"sl":137},{"sl":141},{"sl":145},{"sl":149},{"sl":157},{"sl":158},{"sl":160},{"sl":161},{"sl":162},{"sl":163},{"sl":165},{"sl":166},{"sl":167},{"sl":168},{"sl":169},{"sl":170},{"sl":172},{"sl":173},{"sl":174},{"sl":175},{"sl":176},{"sl":177},{"sl":180},{"sl":182},{"sl":183},{"sl":185},{"sl":187},{"sl":188},{"sl":189},{"sl":190},{"sl":195},{"sl":199},{"sl":200},{"sl":201},{"sl":202},{"sl":203},{"sl":204},{"sl":207},{"sl":208},{"sl":209},{"sl":210},{"sl":211},{"sl":213},{"sl":214},{"sl":217},{"sl":219},{"sl":220},{"sl":227},{"sl":228},{"sl":230},{"sl":238},{"sl":241},{"sl":242},{"sl":243},{"sl":245},{"sl":250},{"sl":251},{"sl":252},{"sl":254},{"sl":255},{"sl":256},{"sl":258},{"sl":259},{"sl":262},{"sl":263},{"sl":276},{"sl":279},{"sl":283},{"sl":287},{"sl":301},{"sl":302},{"sl":303},{"sl":304},{"sl":306},{"sl":308}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [902], [902], [], [], [527, 485, 345, 421, 393, 902, 398, 442, 862, 315], [527, 485, 345, 421, 393, 902, 398, 442, 862, 315], [527, 485, 345, 421, 393, 902, 398, 442, 862, 315], [527, 485, 345, 421, 393, 902, 398, 442, 862, 315], [], [], [], [], [], [], [], [], [], [], [], [527, 485, 345, 421, 393, 902, 398, 442, 862, 315], [527, 485, 345, 421, 393, 902, 398, 442, 862, 315], [527, 485, 345, 421, 393, 902, 398, 442, 862, 315], [527, 485, 345, 421, 393, 902, 398, 442, 862, 315], [527, 485, 345, 421, 393, 902, 398, 442, 862, 315], [], [], [527, 485, 345, 421, 393, 902, 398, 442, 862, 315], [527, 485, 345, 421, 393, 902, 398, 442, 862, 315], [], [], [902, 398], [902, 398], [], [], [902, 398], [902, 398], [], [], [527, 485, 345, 421, 393, 902, 398, 442, 862, 315], [527, 485, 345, 421, 393, 902, 398, 442, 862, 315], [], [], [902, 398], [902, 398], [], [], [902, 398], [902, 398], [], [], [527, 485, 345, 421, 393, 902, 398, 442, 862, 315], [527, 485, 345, 421, 393, 902, 398, 442, 862, 315], [], [], [], [], [], [], [], [], [], [527, 485, 345, 421, 393, 902, 398, 442, 862, 315], [527, 485, 345, 421, 393, 902, 398, 442, 862, 315], [527, 485, 345, 421, 393, 902, 398, 442, 862, 315], [527, 485, 345, 421, 393, 902, 398, 442, 862, 315], [], [], [527, 485, 345, 421, 393, 902, 398, 442, 862, 315], [], [], [527, 485, 345, 421, 393, 902, 398, 442, 862, 315], [527, 485, 345, 421, 393, 902, 398, 442, 862, 315], [], [], [], [527, 485, 345, 421, 393, 902, 398, 442, 862, 315], [527, 485, 345, 421, 393, 902, 398, 442, 862, 315], [902, 398], [902, 398], [902, 398], [], [], [], [], [], [527, 485, 345, 421, 393, 902, 398, 442, 862, 315], [], [], [527, 485, 345, 421, 393, 902, 398, 442, 862, 315], [], [527, 485, 345, 421, 393, 902, 398, 442, 862, 315], [], [], [902, 398], [902, 398], [], [], [902], [902], [], [], [902], [902], [], [], [527, 485, 345, 421, 393, 902, 398, 442, 862, 315], [527, 485, 345, 421, 393, 902, 398, 442, 862, 315], [], [], [], [], [], [], [527, 485, 345, 421, 393, 902, 398, 442, 862, 315], [527, 485, 345, 421, 393, 902, 398, 442, 862, 315], [902], [], [902], [902], [902], [902], [], [902], [902], [902], [902], [902], [902], [], [902], [902], [902], [902], [902], [902], [], [], [902], [], [902], [902], [], [527, 485, 345, 421, 393, 902, 398, 442, 862, 315], [], [902, 398], [902, 398], [902, 398], [902, 398], [], [], [], [], [902, 398], [], [], [], [902, 398], [902, 398], [902, 398], [902, 398], [902, 398], [902, 398], [], [], [527, 485, 345, 421, 393, 902, 398, 442, 862, 315], [527, 485, 345, 421, 393, 902, 398, 442, 862, 315], [527, 485, 345, 421, 393, 902, 398, 442, 862, 315], [527, 485, 345, 421, 393, 902, 398, 442, 862, 315], [527, 485, 345, 421, 393, 902, 398, 442, 862, 315], [], [527, 485, 345, 421, 393, 902, 398, 442, 862, 315], [527, 485, 345, 421, 393, 902, 398, 442, 862, 315], [], [], [527, 485, 345, 421, 393, 902, 398, 442, 862, 315], [], [527, 485, 345, 421, 393, 902, 398, 442, 862, 315], [527, 485, 345, 421, 393, 902, 398, 442, 862, 315], [], [], [], [], [], [902, 398], [902, 398], [902, 398], [], [902, 398], [], [], [527, 485, 345, 421, 393, 902, 398, 442, 862, 315], [], [], [], [], [527, 485, 345, 421, 393, 902, 398, 442, 862, 315], [], [], [527, 485, 345, 421, 393, 902, 398, 442, 862, 315], [527, 485, 345, 421, 393, 902, 398, 442, 862, 315], [527, 485, 345, 421, 393, 902, 398, 442, 862, 315], [], [527, 485, 345, 421, 393, 902, 398, 442, 862, 315], [], [], [527, 485, 345, 421, 393, 902, 398, 442, 862, 315], [], [527, 485, 345, 421, 393, 902, 398, 442, 862, 315], [527, 485, 345, 421, 393, 902, 398, 442, 862, 315], [902, 398], [], [902, 398], [902, 398], [902, 398], [], [902, 398], [902, 398], [], [], [902, 398], [902], [], [], [], [], [], [], [], [527, 485, 345, 421, 393, 902, 398, 442, 862, 315], [], [], [], [], [527, 485, 345, 421, 393, 902, 398, 442, 862, 315], [], [], [527, 485, 345, 421, 393, 902, 398, 442, 862, 315], [], [], [527, 485, 345, 421, 393, 902, 398, 442, 862, 315], [527, 485, 345, 421, 393, 902, 398, 442, 862, 315], [], [], [527, 485, 345, 421, 393, 902, 398, 442, 862, 315], [527, 485, 345, 421, 393, 902, 398, 442, 862, 315], [], [], [], [], [], [], [], [], [], [], [], [], [527, 485, 345, 421, 393, 902, 398, 442, 862, 315], [527, 485, 345, 421, 393, 902, 398, 442, 862, 315], [527, 485, 345, 421, 393, 902, 398, 442, 862, 315], [527, 485, 345, 421, 393, 902, 398, 442, 862, 315], [902], [], [527, 485, 345, 421, 393, 902, 398, 442, 862, 315], [], [527, 485, 345, 421, 393, 902, 398, 442, 862, 315], [], [], []]
