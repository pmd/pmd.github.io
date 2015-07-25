var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":187,"id":16786,"methods":[{"el":99,"sc":5,"sl":44},{"el":120,"sc":5,"sl":101},{"el":149,"sc":5,"sl":122},{"el":158,"sc":2,"sl":151},{"el":178,"sc":2,"sl":166},{"el":186,"sc":2,"sl":180}],"name":"PreserveStackTraceRule","sl":34}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_315":{"methods":[{"sl":44},{"sl":122},{"sl":166},{"sl":180}],"name":"testAbstractNames","pass":true,"statements":[{"sl":46},{"sl":48},{"sl":49},{"sl":50},{"sl":51},{"sl":60},{"sl":61},{"sl":62},{"sl":63},{"sl":65},{"sl":98},{"sl":125},{"sl":126},{"sl":144},{"sl":167},{"sl":168},{"sl":169},{"sl":170},{"sl":171},{"sl":172},{"sl":173},{"sl":177},{"sl":182}]},"test_345":{"methods":[{"sl":44},{"sl":122},{"sl":166},{"sl":180}],"name":"testAbstractNamesInNestedRuleset","pass":true,"statements":[{"sl":46},{"sl":48},{"sl":49},{"sl":50},{"sl":51},{"sl":60},{"sl":61},{"sl":62},{"sl":63},{"sl":65},{"sl":98},{"sl":125},{"sl":126},{"sl":144},{"sl":167},{"sl":168},{"sl":169},{"sl":170},{"sl":171},{"sl":172},{"sl":173},{"sl":177},{"sl":182}]},"test_393":{"methods":[{"sl":44},{"sl":122},{"sl":166},{"sl":180}],"name":"testNestedRuleset","pass":true,"statements":[{"sl":46},{"sl":48},{"sl":49},{"sl":50},{"sl":51},{"sl":60},{"sl":61},{"sl":62},{"sl":63},{"sl":65},{"sl":98},{"sl":125},{"sl":126},{"sl":144},{"sl":167},{"sl":168},{"sl":169},{"sl":170},{"sl":171},{"sl":172},{"sl":173},{"sl":177},{"sl":182}]},"test_398":{"methods":[{"sl":44},{"sl":122},{"sl":166},{"sl":180}],"name":"testPmdOptions","pass":true,"statements":[{"sl":46},{"sl":48},{"sl":49},{"sl":50},{"sl":51},{"sl":60},{"sl":61},{"sl":62},{"sl":63},{"sl":65},{"sl":98},{"sl":125},{"sl":126},{"sl":144},{"sl":167},{"sl":168},{"sl":169},{"sl":170},{"sl":171},{"sl":172},{"sl":173},{"sl":177},{"sl":182}]},"test_421":{"methods":[{"sl":44},{"sl":122},{"sl":166},{"sl":180}],"name":"testRelativeRulesetsInRulesetfiles","pass":true,"statements":[{"sl":46},{"sl":48},{"sl":49},{"sl":50},{"sl":51},{"sl":60},{"sl":61},{"sl":62},{"sl":63},{"sl":65},{"sl":98},{"sl":125},{"sl":126},{"sl":144},{"sl":167},{"sl":168},{"sl":169},{"sl":170},{"sl":171},{"sl":172},{"sl":173},{"sl":177},{"sl":182}]},"test_442":{"methods":[{"sl":44},{"sl":122},{"sl":166},{"sl":180}],"name":"testFormatterWithProperties","pass":true,"statements":[{"sl":46},{"sl":48},{"sl":49},{"sl":50},{"sl":51},{"sl":60},{"sl":61},{"sl":62},{"sl":63},{"sl":65},{"sl":98},{"sl":125},{"sl":126},{"sl":144},{"sl":167},{"sl":168},{"sl":169},{"sl":170},{"sl":171},{"sl":172},{"sl":173},{"sl":177},{"sl":182}]},"test_485":{"methods":[{"sl":44},{"sl":122},{"sl":166},{"sl":180}],"name":"testNoFormattersValidation","pass":true,"statements":[{"sl":46},{"sl":48},{"sl":49},{"sl":50},{"sl":51},{"sl":60},{"sl":61},{"sl":62},{"sl":63},{"sl":65},{"sl":98},{"sl":125},{"sl":126},{"sl":144},{"sl":167},{"sl":168},{"sl":169},{"sl":170},{"sl":171},{"sl":172},{"sl":173},{"sl":177},{"sl":182}]},"test_527":{"methods":[{"sl":44},{"sl":122},{"sl":166},{"sl":180}],"name":"testCommaInRulesetfiles","pass":true,"statements":[{"sl":46},{"sl":48},{"sl":49},{"sl":50},{"sl":51},{"sl":60},{"sl":61},{"sl":62},{"sl":63},{"sl":65},{"sl":98},{"sl":125},{"sl":126},{"sl":144},{"sl":167},{"sl":168},{"sl":169},{"sl":170},{"sl":171},{"sl":172},{"sl":173},{"sl":177},{"sl":182}]},"test_862":{"methods":[{"sl":44},{"sl":122},{"sl":166},{"sl":180}],"name":"testRelativeRulesets","pass":true,"statements":[{"sl":46},{"sl":48},{"sl":49},{"sl":50},{"sl":51},{"sl":60},{"sl":61},{"sl":62},{"sl":63},{"sl":65},{"sl":98},{"sl":125},{"sl":126},{"sl":144},{"sl":167},{"sl":168},{"sl":169},{"sl":170},{"sl":171},{"sl":172},{"sl":173},{"sl":177},{"sl":182}]},"test_902":{"methods":[{"sl":44},{"sl":101},{"sl":122},{"sl":166},{"sl":180}],"name":"testResourceFileCommands","pass":true,"statements":[{"sl":46},{"sl":48},{"sl":49},{"sl":50},{"sl":51},{"sl":52},{"sl":53},{"sl":57},{"sl":60},{"sl":61},{"sl":62},{"sl":63},{"sl":65},{"sl":71},{"sl":72},{"sl":74},{"sl":76},{"sl":77},{"sl":78},{"sl":79},{"sl":80},{"sl":81},{"sl":82},{"sl":83},{"sl":92},{"sl":98},{"sl":102},{"sl":103},{"sl":104},{"sl":105},{"sl":106},{"sl":108},{"sl":109},{"sl":110},{"sl":111},{"sl":112},{"sl":113},{"sl":114},{"sl":119},{"sl":125},{"sl":126},{"sl":144},{"sl":167},{"sl":168},{"sl":169},{"sl":170},{"sl":171},{"sl":172},{"sl":173},{"sl":177},{"sl":182},{"sl":183},{"sl":184}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [527, 485, 345, 421, 393, 902, 398, 442, 862, 315], [], [527, 485, 345, 421, 393, 902, 398, 442, 862, 315], [], [527, 485, 345, 421, 393, 902, 398, 442, 862, 315], [527, 485, 345, 421, 393, 902, 398, 442, 862, 315], [527, 485, 345, 421, 393, 902, 398, 442, 862, 315], [527, 485, 345, 421, 393, 902, 398, 442, 862, 315], [902], [902], [], [], [], [902], [], [], [527, 485, 345, 421, 393, 902, 398, 442, 862, 315], [527, 485, 345, 421, 393, 902, 398, 442, 862, 315], [527, 485, 345, 421, 393, 902, 398, 442, 862, 315], [527, 485, 345, 421, 393, 902, 398, 442, 862, 315], [], [527, 485, 345, 421, 393, 902, 398, 442, 862, 315], [], [], [], [], [], [902], [902], [], [902], [], [902], [902], [902], [902], [902], [902], [902], [902], [], [], [], [], [], [], [], [], [902], [], [], [], [], [], [527, 485, 345, 421, 393, 902, 398, 442, 862, 315], [], [], [902], [902], [902], [902], [902], [902], [], [902], [902], [902], [902], [902], [902], [902], [], [], [], [], [902], [], [], [527, 485, 345, 421, 393, 902, 398, 442, 862, 315], [], [], [527, 485, 345, 421, 393, 902, 398, 442, 862, 315], [527, 485, 345, 421, 393, 902, 398, 442, 862, 315], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [527, 485, 345, 421, 393, 902, 398, 442, 862, 315], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [527, 485, 345, 421, 393, 902, 398, 442, 862, 315], [527, 485, 345, 421, 393, 902, 398, 442, 862, 315], [527, 485, 345, 421, 393, 902, 398, 442, 862, 315], [527, 485, 345, 421, 393, 902, 398, 442, 862, 315], [527, 485, 345, 421, 393, 902, 398, 442, 862, 315], [527, 485, 345, 421, 393, 902, 398, 442, 862, 315], [527, 485, 345, 421, 393, 902, 398, 442, 862, 315], [527, 485, 345, 421, 393, 902, 398, 442, 862, 315], [], [], [], [527, 485, 345, 421, 393, 902, 398, 442, 862, 315], [], [], [527, 485, 345, 421, 393, 902, 398, 442, 862, 315], [], [527, 485, 345, 421, 393, 902, 398, 442, 862, 315], [902], [902], [], [], []]
