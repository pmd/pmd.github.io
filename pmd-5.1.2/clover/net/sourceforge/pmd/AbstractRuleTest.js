var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":201,"id":34915,"methods":[{"el":67,"sc":5,"sl":51},{"el":83,"sc":5,"sl":69},{"el":102,"sc":5,"sl":85},{"el":120,"sc":5,"sl":104},{"el":126,"sc":5,"sl":122},{"el":132,"sc":5,"sl":128},{"el":140,"sc":5,"sl":134},{"el":146,"sc":5,"sl":142},{"el":153,"sc":5,"sl":148},{"el":161,"sc":5,"sl":155},{"el":169,"sc":5,"sl":163},{"el":178,"sc":5,"sl":171},{"el":186,"sc":5,"sl":180},{"el":195,"sc":5,"sl":188},{"el":200,"sc":5,"sl":198}],"name":"AbstractRuleTest","sl":22},{"el":37,"id":34915,"methods":[{"el":36,"sc":9,"sl":29}],"name":"AbstractRuleTest.MyRule","sl":24},{"el":49,"id":34922,"methods":[{"el":48,"sc":3,"sl":42}],"name":"AbstractRuleTest.MyOtherRule","sl":39}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_11":{"methods":[{"sl":29},{"sl":155}],"name":"testEquals6","pass":true,"statements":[{"sl":30},{"sl":31},{"sl":32},{"sl":33},{"sl":34},{"sl":35},{"sl":157},{"sl":158},{"sl":159},{"sl":160}]},"test_308":{"methods":[{"sl":29},{"sl":128}],"name":"testEquals2","pass":true,"statements":[{"sl":30},{"sl":31},{"sl":32},{"sl":33},{"sl":34},{"sl":35},{"sl":130},{"sl":131}]},"test_351":{"methods":[{"sl":29},{"sl":69}],"name":"testCreateRV2","pass":true,"statements":[{"sl":30},{"sl":31},{"sl":32},{"sl":33},{"sl":34},{"sl":35},{"sl":71},{"sl":72},{"sl":73},{"sl":74},{"sl":75},{"sl":76},{"sl":77},{"sl":78},{"sl":79},{"sl":80},{"sl":81},{"sl":82}]},"test_361":{"methods":[{"sl":29},{"sl":42},{"sl":148}],"name":"testEquals5","pass":true,"statements":[{"sl":30},{"sl":31},{"sl":32},{"sl":33},{"sl":34},{"sl":35},{"sl":43},{"sl":44},{"sl":45},{"sl":46},{"sl":47},{"sl":150},{"sl":151},{"sl":152}]},"test_429":{"methods":[{"sl":29},{"sl":171}],"name":"testEquals8","pass":true,"statements":[{"sl":30},{"sl":31},{"sl":32},{"sl":33},{"sl":34},{"sl":35},{"sl":173},{"sl":174},{"sl":175},{"sl":176},{"sl":177}]},"test_537":{"methods":[{"sl":29},{"sl":180}],"name":"testEquals9","pass":true,"statements":[{"sl":30},{"sl":31},{"sl":32},{"sl":33},{"sl":34},{"sl":35},{"sl":182},{"sl":183},{"sl":184},{"sl":185}]},"test_606":{"methods":[{"sl":29},{"sl":163}],"name":"testEquals7","pass":true,"statements":[{"sl":30},{"sl":31},{"sl":32},{"sl":33},{"sl":34},{"sl":35},{"sl":165},{"sl":166},{"sl":167},{"sl":168}]},"test_676":{"methods":[{"sl":29},{"sl":51}],"name":"testCreateRV","pass":true,"statements":[{"sl":30},{"sl":31},{"sl":32},{"sl":33},{"sl":34},{"sl":35},{"sl":53},{"sl":54},{"sl":55},{"sl":56},{"sl":57},{"sl":58},{"sl":59},{"sl":60},{"sl":61},{"sl":62},{"sl":63},{"sl":64},{"sl":65},{"sl":66}]},"test_679":{"methods":[{"sl":29},{"sl":85}],"name":"testRuleWithVariableInMessage","pass":true,"statements":[{"sl":30},{"sl":31},{"sl":32},{"sl":33},{"sl":34},{"sl":35},{"sl":87},{"sl":88},{"sl":89},{"sl":90},{"sl":91},{"sl":92},{"sl":93},{"sl":94},{"sl":95},{"sl":96},{"sl":97},{"sl":98},{"sl":99},{"sl":100},{"sl":101}]},"test_682":{"methods":[{"sl":29},{"sl":134}],"name":"testEquals3","pass":true,"statements":[{"sl":30},{"sl":31},{"sl":32},{"sl":33},{"sl":34},{"sl":35},{"sl":136},{"sl":137},{"sl":138},{"sl":139}]},"test_769":{"methods":[{"sl":29},{"sl":142}],"name":"testEquals4","pass":true,"statements":[{"sl":30},{"sl":31},{"sl":32},{"sl":33},{"sl":34},{"sl":35},{"sl":144},{"sl":145}]},"test_821":{"methods":[{"sl":29},{"sl":104}],"name":"testRuleSuppress","pass":true,"statements":[{"sl":30},{"sl":31},{"sl":32},{"sl":33},{"sl":34},{"sl":35},{"sl":106},{"sl":107},{"sl":108},{"sl":109},{"sl":110},{"sl":111},{"sl":112},{"sl":113},{"sl":114},{"sl":115},{"sl":116},{"sl":117},{"sl":118},{"sl":119}]},"test_880":{"methods":[{"sl":29},{"sl":188}],"name":"testEquals10","pass":true,"statements":[{"sl":30},{"sl":31},{"sl":32},{"sl":33},{"sl":34},{"sl":35},{"sl":190},{"sl":191},{"sl":192},{"sl":193},{"sl":194}]},"test_911":{"methods":[{"sl":29},{"sl":122}],"name":"testEquals1","pass":true,"statements":[{"sl":30},{"sl":31},{"sl":32},{"sl":33},{"sl":34},{"sl":35},{"sl":124},{"sl":125}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [880, 429, 361, 351, 11, 821, 679, 682, 676, 769, 308, 911, 606, 537], [880, 429, 361, 351, 11, 821, 679, 682, 676, 769, 308, 911, 606, 537], [880, 429, 361, 351, 11, 821, 679, 682, 676, 769, 308, 911, 606, 537], [880, 429, 361, 351, 11, 821, 679, 682, 676, 769, 308, 911, 606, 537], [880, 429, 361, 351, 11, 821, 679, 682, 676, 769, 308, 911, 606, 537], [880, 429, 361, 351, 11, 821, 679, 682, 676, 769, 308, 911, 606, 537], [880, 429, 361, 351, 11, 821, 679, 682, 676, 769, 308, 911, 606, 537], [], [], [], [], [], [], [361], [361], [361], [361], [361], [361], [], [], [], [676], [], [676], [676], [676], [676], [676], [676], [676], [676], [676], [676], [676], [676], [676], [676], [], [], [351], [], [351], [351], [351], [351], [351], [351], [351], [351], [351], [351], [351], [351], [], [], [679], [], [679], [679], [679], [679], [679], [679], [679], [679], [679], [679], [679], [679], [679], [679], [679], [], [], [821], [], [821], [821], [821], [821], [821], [821], [821], [821], [821], [821], [821], [821], [821], [821], [], [], [911], [], [911], [911], [], [], [308], [], [308], [308], [], [], [682], [], [682], [682], [682], [682], [], [], [769], [], [769], [769], [], [], [361], [], [361], [361], [361], [], [], [11], [], [11], [11], [11], [11], [], [], [606], [], [606], [606], [606], [606], [], [], [429], [], [429], [429], [429], [429], [429], [], [], [537], [], [537], [537], [537], [537], [], [], [880], [], [880], [880], [880], [880], [880], [], [], [], [], [], [], []]
