var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":304,"id":9740,"methods":[{"el":80,"sc":5,"sl":75},{"el":85,"sc":5,"sl":82},{"el":89,"sc":5,"sl":87},{"el":96,"sc":5,"sl":91},{"el":107,"sc":5,"sl":104},{"el":111,"sc":5,"sl":109},{"el":115,"sc":5,"sl":113},{"el":119,"sc":5,"sl":117},{"el":123,"sc":5,"sl":121},{"el":127,"sc":5,"sl":125},{"el":131,"sc":5,"sl":129},{"el":135,"sc":5,"sl":133},{"el":139,"sc":5,"sl":137},{"el":143,"sc":5,"sl":141},{"el":147,"sc":5,"sl":145},{"el":151,"sc":5,"sl":149},{"el":155,"sc":5,"sl":153},{"el":159,"sc":5,"sl":157},{"el":163,"sc":5,"sl":161},{"el":167,"sc":5,"sl":165},{"el":171,"sc":5,"sl":169},{"el":175,"sc":5,"sl":173},{"el":179,"sc":5,"sl":177},{"el":183,"sc":5,"sl":181},{"el":187,"sc":5,"sl":185},{"el":191,"sc":5,"sl":189},{"el":195,"sc":5,"sl":193},{"el":199,"sc":5,"sl":197},{"el":203,"sc":5,"sl":201},{"el":207,"sc":5,"sl":205},{"el":211,"sc":5,"sl":209},{"el":215,"sc":5,"sl":213},{"el":219,"sc":5,"sl":217},{"el":223,"sc":5,"sl":221},{"el":227,"sc":5,"sl":225},{"el":231,"sc":5,"sl":229},{"el":235,"sc":5,"sl":233},{"el":239,"sc":5,"sl":237},{"el":243,"sc":5,"sl":241},{"el":247,"sc":5,"sl":245},{"el":251,"sc":5,"sl":249},{"el":255,"sc":5,"sl":253},{"el":259,"sc":5,"sl":257},{"el":263,"sc":5,"sl":261},{"el":267,"sc":5,"sl":265},{"el":271,"sc":5,"sl":269},{"el":275,"sc":5,"sl":273},{"el":279,"sc":5,"sl":277},{"el":283,"sc":5,"sl":281},{"el":287,"sc":5,"sl":285},{"el":291,"sc":5,"sl":289},{"el":295,"sc":5,"sl":293},{"el":299,"sc":5,"sl":297},{"el":303,"sc":5,"sl":301}],"name":"AbstractEcmascriptRule","sl":69}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_187":{"methods":[{"sl":75},{"sl":82}],"name":"testEqualsHashcode","pass":true,"statements":[{"sl":76},{"sl":77},{"sl":78},{"sl":79},{"sl":84}]},"test_208":{"methods":[{"sl":75},{"sl":87},{"sl":91},{"sl":104},{"sl":121},{"sl":125},{"sl":129},{"sl":165},{"sl":181},{"sl":209},{"sl":217}],"name":"testExclusionsInReportWithNOPMDEcmascript","pass":true,"statements":[{"sl":76},{"sl":77},{"sl":78},{"sl":79},{"sl":88},{"sl":92},{"sl":93},{"sl":94},{"sl":105},{"sl":106},{"sl":122},{"sl":126},{"sl":130},{"sl":166},{"sl":182},{"sl":210},{"sl":218}]},"test_285":{"methods":[{"sl":75},{"sl":87},{"sl":91},{"sl":104},{"sl":125},{"sl":129},{"sl":181},{"sl":185},{"sl":209},{"sl":217},{"sl":241},{"sl":245}],"name":"testLineNumbersWithinEcmascriptRules","pass":true,"statements":[{"sl":76},{"sl":77},{"sl":78},{"sl":79},{"sl":88},{"sl":92},{"sl":93},{"sl":94},{"sl":105},{"sl":106},{"sl":126},{"sl":130},{"sl":182},{"sl":186},{"sl":210},{"sl":218},{"sl":242},{"sl":246}]},"test_390":{"methods":[{"sl":75}],"name":"testEcmascript","pass":true,"statements":[{"sl":76},{"sl":77},{"sl":78},{"sl":79}]},"test_41":{"methods":[{"sl":75}],"name":"useEcmaScript","pass":true,"statements":[{"sl":76},{"sl":77},{"sl":78},{"sl":79}]},"test_76":{"methods":[{"sl":75}],"name":"testReadWriteRoundTrip","pass":true,"statements":[{"sl":76},{"sl":77},{"sl":78},{"sl":79}]},"test_775":{"methods":[{"sl":75},{"sl":82}],"name":"testConstructor","pass":true,"statements":[{"sl":76},{"sl":77},{"sl":78},{"sl":79},{"sl":84}]},"test_776":{"methods":[{"sl":75},{"sl":82}],"name":"testDefaults","pass":true,"statements":[{"sl":76},{"sl":77},{"sl":78},{"sl":79},{"sl":84}]},"test_864":{"methods":[{"sl":75}],"name":"testAllPMDBuiltInRulesMeetConventions","pass":true,"statements":[{"sl":76},{"sl":77},{"sl":78},{"sl":79}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [285, 775, 76, 208, 864, 187, 776, 390, 41], [285, 775, 76, 208, 864, 187, 776, 390, 41], [285, 775, 76, 208, 864, 187, 776, 390, 41], [285, 775, 76, 208, 864, 187, 776, 390, 41], [285, 775, 76, 208, 864, 187, 776, 390, 41], [], [], [775, 187, 776], [], [775, 187, 776], [], [], [285, 208], [285, 208], [], [], [285, 208], [285, 208], [285, 208], [285, 208], [], [], [], [], [], [], [], [], [], [285, 208], [285, 208], [285, 208], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [208], [208], [], [], [285, 208], [285, 208], [], [], [285, 208], [285, 208], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [208], [208], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [285, 208], [285, 208], [], [], [285], [285], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [285, 208], [285, 208], [], [], [], [], [], [], [285, 208], [285, 208], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [285], [285], [], [], [285], [285], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], []]
