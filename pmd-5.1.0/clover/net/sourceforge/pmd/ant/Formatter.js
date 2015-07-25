var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":142,"id":1868,"methods":[{"el":34,"sc":5,"sl":32},{"el":38,"sc":5,"sl":36},{"el":42,"sc":5,"sl":40},{"el":46,"sc":5,"sl":44},{"el":50,"sc":5,"sl":48},{"el":58,"sc":5,"sl":56},{"el":74,"sc":5,"sl":60},{"el":88,"sc":5,"sl":76},{"el":92,"sc":5,"sl":90},{"el":97,"sc":5,"sl":94},{"el":101,"sc":5,"sl":99},{"el":114,"sc":5,"sl":103},{"el":126,"sc":5,"sl":117},{"el":134,"sc":5,"sl":128},{"el":141,"sc":5,"sl":136}],"name":"Formatter","sl":24}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_143":{"methods":[{"sl":40},{"sl":90}],"name":"testNull","pass":true,"statements":[{"sl":41},{"sl":91}]},"test_239":{"methods":[{"sl":36},{"sl":44}],"name":"testNoRuleSets","pass":true,"statements":[{"sl":37},{"sl":45}]},"test_315":{"methods":[{"sl":36},{"sl":44},{"sl":56},{"sl":60},{"sl":76},{"sl":90},{"sl":94},{"sl":117},{"sl":128}],"name":"testAbstractNames","pass":true,"statements":[{"sl":37},{"sl":45},{"sl":57},{"sl":61},{"sl":62},{"sl":63},{"sl":65},{"sl":68},{"sl":69},{"sl":70},{"sl":77},{"sl":78},{"sl":79},{"sl":80},{"sl":81},{"sl":91},{"sl":96},{"sl":118},{"sl":122},{"sl":123},{"sl":124},{"sl":125},{"sl":129},{"sl":130},{"sl":133}]},"test_345":{"methods":[{"sl":36},{"sl":44},{"sl":56},{"sl":60},{"sl":76},{"sl":90},{"sl":94},{"sl":117},{"sl":128}],"name":"testAbstractNamesInNestedRuleset","pass":true,"statements":[{"sl":37},{"sl":45},{"sl":57},{"sl":61},{"sl":62},{"sl":63},{"sl":65},{"sl":68},{"sl":69},{"sl":70},{"sl":77},{"sl":78},{"sl":79},{"sl":80},{"sl":81},{"sl":91},{"sl":96},{"sl":118},{"sl":122},{"sl":123},{"sl":124},{"sl":125},{"sl":129},{"sl":130},{"sl":133}]},"test_393":{"methods":[{"sl":36},{"sl":44},{"sl":56},{"sl":60},{"sl":76},{"sl":90},{"sl":94},{"sl":117},{"sl":128}],"name":"testNestedRuleset","pass":true,"statements":[{"sl":37},{"sl":45},{"sl":57},{"sl":61},{"sl":62},{"sl":63},{"sl":65},{"sl":68},{"sl":69},{"sl":70},{"sl":77},{"sl":78},{"sl":79},{"sl":80},{"sl":81},{"sl":91},{"sl":96},{"sl":118},{"sl":122},{"sl":123},{"sl":124},{"sl":125},{"sl":129},{"sl":130},{"sl":133}]},"test_4":{"methods":[{"sl":36},{"sl":44},{"sl":56},{"sl":60},{"sl":76},{"sl":90},{"sl":94},{"sl":117},{"sl":128}],"name":"testEcmascript","pass":true,"statements":[{"sl":37},{"sl":45},{"sl":57},{"sl":61},{"sl":62},{"sl":63},{"sl":65},{"sl":68},{"sl":69},{"sl":70},{"sl":77},{"sl":78},{"sl":79},{"sl":80},{"sl":81},{"sl":91},{"sl":96},{"sl":118},{"sl":122},{"sl":123},{"sl":124},{"sl":125},{"sl":129},{"sl":130},{"sl":133}]},"test_421":{"methods":[{"sl":36},{"sl":44},{"sl":56},{"sl":60},{"sl":76},{"sl":90},{"sl":94},{"sl":117},{"sl":128}],"name":"testRelativeRulesetsInRulesetfiles","pass":true,"statements":[{"sl":37},{"sl":45},{"sl":57},{"sl":61},{"sl":62},{"sl":63},{"sl":65},{"sl":68},{"sl":69},{"sl":70},{"sl":77},{"sl":78},{"sl":79},{"sl":80},{"sl":81},{"sl":91},{"sl":96},{"sl":118},{"sl":122},{"sl":123},{"sl":124},{"sl":125},{"sl":129},{"sl":130},{"sl":133}]},"test_442":{"methods":[{"sl":36},{"sl":44},{"sl":48},{"sl":56},{"sl":60},{"sl":76},{"sl":90},{"sl":94},{"sl":117},{"sl":128}],"name":"testFormatterWithProperties","pass":true,"statements":[{"sl":37},{"sl":45},{"sl":49},{"sl":57},{"sl":61},{"sl":62},{"sl":63},{"sl":65},{"sl":68},{"sl":69},{"sl":70},{"sl":77},{"sl":78},{"sl":79},{"sl":80},{"sl":81},{"sl":91},{"sl":96},{"sl":118},{"sl":122},{"sl":123},{"sl":124},{"sl":125},{"sl":129},{"sl":130},{"sl":131},{"sl":133}]},"test_485":{"methods":[{"sl":36},{"sl":44},{"sl":56},{"sl":60},{"sl":76},{"sl":94},{"sl":117},{"sl":128}],"name":"testNoFormattersValidation","pass":true,"statements":[{"sl":37},{"sl":45},{"sl":57},{"sl":61},{"sl":62},{"sl":63},{"sl":65},{"sl":68},{"sl":69},{"sl":70},{"sl":77},{"sl":78},{"sl":79},{"sl":80},{"sl":81},{"sl":96},{"sl":118},{"sl":122},{"sl":123},{"sl":124},{"sl":125},{"sl":129},{"sl":130},{"sl":133}]},"test_502":{"methods":[{"sl":36},{"sl":44},{"sl":56},{"sl":60},{"sl":76},{"sl":90},{"sl":94},{"sl":117},{"sl":128}],"name":"testXML","pass":true,"statements":[{"sl":37},{"sl":45},{"sl":57},{"sl":61},{"sl":62},{"sl":63},{"sl":65},{"sl":68},{"sl":69},{"sl":70},{"sl":77},{"sl":78},{"sl":79},{"sl":80},{"sl":81},{"sl":91},{"sl":96},{"sl":118},{"sl":122},{"sl":123},{"sl":124},{"sl":125},{"sl":129},{"sl":130},{"sl":133}]},"test_527":{"methods":[{"sl":36},{"sl":44},{"sl":56},{"sl":60},{"sl":76},{"sl":90},{"sl":94},{"sl":117},{"sl":128}],"name":"testCommaInRulesetfiles","pass":true,"statements":[{"sl":37},{"sl":45},{"sl":57},{"sl":61},{"sl":62},{"sl":63},{"sl":65},{"sl":68},{"sl":69},{"sl":70},{"sl":77},{"sl":78},{"sl":79},{"sl":80},{"sl":81},{"sl":91},{"sl":96},{"sl":118},{"sl":122},{"sl":123},{"sl":124},{"sl":125},{"sl":129},{"sl":130},{"sl":133}]},"test_620":{"methods":[{"sl":36},{"sl":117},{"sl":128}],"name":"testType","pass":true,"statements":[{"sl":37},{"sl":118},{"sl":122},{"sl":123},{"sl":124},{"sl":125},{"sl":129},{"sl":130},{"sl":133}]},"test_661":{"methods":[{"sl":36},{"sl":44},{"sl":56},{"sl":60},{"sl":76},{"sl":90},{"sl":94},{"sl":117},{"sl":128}],"name":"testExplicitRuleInRuleSet","pass":true,"statements":[{"sl":37},{"sl":45},{"sl":57},{"sl":61},{"sl":62},{"sl":63},{"sl":65},{"sl":68},{"sl":69},{"sl":70},{"sl":77},{"sl":78},{"sl":79},{"sl":80},{"sl":81},{"sl":91},{"sl":96},{"sl":118},{"sl":122},{"sl":123},{"sl":124},{"sl":125},{"sl":129},{"sl":130},{"sl":133}]},"test_710":{"methods":[{"sl":90}],"name":"testFormatterWithNoToFileAttribute","pass":true,"statements":[{"sl":91}]},"test_833":{"methods":[{"sl":36},{"sl":44},{"sl":60},{"sl":76},{"sl":94},{"sl":117},{"sl":128}],"name":"testClasspath","pass":true,"statements":[{"sl":37},{"sl":45},{"sl":61},{"sl":62},{"sl":63},{"sl":65},{"sl":68},{"sl":69},{"sl":70},{"sl":77},{"sl":78},{"sl":79},{"sl":80},{"sl":81},{"sl":96},{"sl":118},{"sl":122},{"sl":123},{"sl":124},{"sl":125},{"sl":129},{"sl":130},{"sl":133}]},"test_862":{"methods":[{"sl":36},{"sl":44},{"sl":56},{"sl":60},{"sl":76},{"sl":90},{"sl":94},{"sl":117},{"sl":128}],"name":"testRelativeRulesets","pass":true,"statements":[{"sl":37},{"sl":45},{"sl":57},{"sl":61},{"sl":62},{"sl":63},{"sl":65},{"sl":68},{"sl":69},{"sl":70},{"sl":77},{"sl":78},{"sl":79},{"sl":80},{"sl":81},{"sl":91},{"sl":96},{"sl":118},{"sl":122},{"sl":123},{"sl":124},{"sl":125},{"sl":129},{"sl":130},{"sl":133}]},"test_90":{"methods":[{"sl":36},{"sl":44},{"sl":60},{"sl":76},{"sl":94},{"sl":117},{"sl":128}],"name":"testBasic","pass":true,"statements":[{"sl":37},{"sl":45},{"sl":61},{"sl":62},{"sl":63},{"sl":65},{"sl":68},{"sl":69},{"sl":70},{"sl":77},{"sl":78},{"sl":79},{"sl":80},{"sl":81},{"sl":96},{"sl":118},{"sl":122},{"sl":123},{"sl":124},{"sl":125},{"sl":129},{"sl":130},{"sl":133}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [502, 527, 345, 485, 421, 661, 442, 862, 239, 620, 393, 90, 833, 4, 315], [502, 527, 345, 485, 421, 661, 442, 862, 239, 620, 393, 90, 833, 4, 315], [], [], [143], [143], [], [], [502, 527, 345, 485, 421, 661, 442, 862, 239, 393, 90, 833, 4, 315], [502, 527, 345, 485, 421, 661, 442, 862, 239, 393, 90, 833, 4, 315], [], [], [442], [442], [], [], [], [], [], [], [502, 527, 345, 485, 421, 661, 442, 862, 393, 4, 315], [502, 527, 345, 485, 421, 661, 442, 862, 393, 4, 315], [], [], [502, 527, 345, 485, 421, 661, 442, 862, 393, 90, 833, 4, 315], [502, 527, 345, 485, 421, 661, 442, 862, 393, 90, 833, 4, 315], [502, 527, 345, 485, 421, 661, 442, 862, 393, 90, 833, 4, 315], [502, 527, 345, 485, 421, 661, 442, 862, 393, 90, 833, 4, 315], [], [502, 527, 345, 485, 421, 661, 442, 862, 393, 90, 833, 4, 315], [], [], [502, 527, 345, 485, 421, 661, 442, 862, 393, 90, 833, 4, 315], [502, 527, 345, 485, 421, 661, 442, 862, 393, 90, 833, 4, 315], [502, 527, 345, 485, 421, 661, 442, 862, 393, 90, 833, 4, 315], [], [], [], [], [], [502, 527, 345, 485, 421, 661, 442, 862, 393, 90, 833, 4, 315], [502, 527, 345, 485, 421, 661, 442, 862, 393, 90, 833, 4, 315], [502, 527, 345, 485, 421, 661, 442, 862, 393, 90, 833, 4, 315], [502, 527, 345, 485, 421, 661, 442, 862, 393, 90, 833, 4, 315], [502, 527, 345, 485, 421, 661, 442, 862, 393, 90, 833, 4, 315], [502, 527, 345, 485, 421, 661, 442, 862, 393, 90, 833, 4, 315], [], [], [], [], [], [], [], [], [502, 527, 710, 345, 421, 143, 661, 442, 862, 393, 4, 315], [502, 527, 710, 345, 421, 143, 661, 442, 862, 393, 4, 315], [], [], [502, 527, 345, 485, 421, 661, 442, 862, 393, 90, 833, 4, 315], [], [502, 527, 345, 485, 421, 661, 442, 862, 393, 90, 833, 4, 315], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [502, 527, 345, 485, 421, 661, 442, 862, 620, 393, 90, 833, 4, 315], [502, 527, 345, 485, 421, 661, 442, 862, 620, 393, 90, 833, 4, 315], [], [], [], [502, 527, 345, 485, 421, 661, 442, 862, 620, 393, 90, 833, 4, 315], [502, 527, 345, 485, 421, 661, 442, 862, 620, 393, 90, 833, 4, 315], [502, 527, 345, 485, 421, 661, 442, 862, 620, 393, 90, 833, 4, 315], [502, 527, 345, 485, 421, 661, 442, 862, 620, 393, 90, 833, 4, 315], [], [], [502, 527, 345, 485, 421, 661, 442, 862, 620, 393, 90, 833, 4, 315], [502, 527, 345, 485, 421, 661, 442, 862, 620, 393, 90, 833, 4, 315], [502, 527, 345, 485, 421, 661, 442, 862, 620, 393, 90, 833, 4, 315], [442], [], [502, 527, 345, 485, 421, 661, 442, 862, 620, 393, 90, 833, 4, 315], [], [], [], [], [], [], [], [], []]
