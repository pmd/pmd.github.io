var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":423,"id":40475,"methods":[{"el":116,"sc":5,"sl":78},{"el":145,"sc":5,"sl":121},{"el":174,"sc":5,"sl":150},{"el":208,"sc":5,"sl":179},{"el":237,"sc":5,"sl":213},{"el":264,"sc":5,"sl":242},{"el":295,"sc":5,"sl":269},{"el":328,"sc":5,"sl":300},{"el":354,"sc":5,"sl":334},{"el":378,"sc":5,"sl":363},{"el":387,"sc":5,"sl":385},{"el":406,"sc":5,"sl":396},{"el":422,"sc":5,"sl":417}],"name":"XmlParserTest","sl":27}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_107":{"methods":[{"sl":150},{"sl":363},{"sl":385},{"sl":396}],"name":"testParsingCoalescingEnabled","pass":true,"statements":[{"sl":152},{"sl":153},{"sl":154},{"sl":155},{"sl":156},{"sl":158},{"sl":159},{"sl":160},{"sl":161},{"sl":162},{"sl":163},{"sl":164},{"sl":165},{"sl":166},{"sl":167},{"sl":168},{"sl":169},{"sl":170},{"sl":171},{"sl":172},{"sl":173},{"sl":364},{"sl":365},{"sl":366},{"sl":367},{"sl":368},{"sl":369},{"sl":370},{"sl":371},{"sl":372},{"sl":373},{"sl":374},{"sl":377},{"sl":386},{"sl":397},{"sl":398},{"sl":399},{"sl":400},{"sl":401},{"sl":402},{"sl":403},{"sl":404},{"sl":405}]},"test_189":{"methods":[{"sl":334}],"name":"testParsingWithValidation","pass":true,"statements":[{"sl":336},{"sl":337},{"sl":338},{"sl":339},{"sl":340},{"sl":341},{"sl":342},{"sl":343},{"sl":344},{"sl":345},{"sl":346},{"sl":347},{"sl":348},{"sl":349},{"sl":350},{"sl":352}]},"test_426":{"methods":[{"sl":78},{"sl":363},{"sl":385},{"sl":396},{"sl":417}],"name":"testLineNumbers","pass":true,"statements":[{"sl":80},{"sl":81},{"sl":82},{"sl":84},{"sl":85},{"sl":86},{"sl":87},{"sl":88},{"sl":89},{"sl":90},{"sl":91},{"sl":92},{"sl":93},{"sl":94},{"sl":95},{"sl":96},{"sl":97},{"sl":98},{"sl":99},{"sl":100},{"sl":101},{"sl":102},{"sl":103},{"sl":104},{"sl":105},{"sl":106},{"sl":107},{"sl":108},{"sl":109},{"sl":110},{"sl":111},{"sl":112},{"sl":113},{"sl":114},{"sl":115},{"sl":364},{"sl":365},{"sl":366},{"sl":367},{"sl":368},{"sl":369},{"sl":370},{"sl":371},{"sl":372},{"sl":373},{"sl":374},{"sl":377},{"sl":386},{"sl":397},{"sl":398},{"sl":399},{"sl":400},{"sl":401},{"sl":402},{"sl":403},{"sl":404},{"sl":405},{"sl":418},{"sl":419},{"sl":420},{"sl":421}]},"test_493":{"methods":[{"sl":269},{"sl":363},{"sl":385},{"sl":396}],"name":"testDefaultParsingNamespaces","pass":true,"statements":[{"sl":271},{"sl":272},{"sl":273},{"sl":275},{"sl":276},{"sl":277},{"sl":278},{"sl":279},{"sl":280},{"sl":281},{"sl":282},{"sl":283},{"sl":284},{"sl":285},{"sl":286},{"sl":287},{"sl":288},{"sl":289},{"sl":290},{"sl":291},{"sl":292},{"sl":293},{"sl":294},{"sl":364},{"sl":365},{"sl":366},{"sl":367},{"sl":368},{"sl":369},{"sl":370},{"sl":371},{"sl":372},{"sl":373},{"sl":374},{"sl":377},{"sl":386},{"sl":397},{"sl":398},{"sl":399},{"sl":400},{"sl":401},{"sl":402},{"sl":403},{"sl":404},{"sl":405}]},"test_631":{"methods":[{"sl":121},{"sl":363},{"sl":385},{"sl":396}],"name":"testDefaultParsing","pass":true,"statements":[{"sl":123},{"sl":124},{"sl":125},{"sl":127},{"sl":128},{"sl":129},{"sl":130},{"sl":131},{"sl":132},{"sl":133},{"sl":134},{"sl":135},{"sl":136},{"sl":137},{"sl":138},{"sl":139},{"sl":140},{"sl":141},{"sl":142},{"sl":143},{"sl":144},{"sl":364},{"sl":365},{"sl":366},{"sl":367},{"sl":368},{"sl":369},{"sl":370},{"sl":371},{"sl":372},{"sl":373},{"sl":374},{"sl":377},{"sl":386},{"sl":397},{"sl":398},{"sl":399},{"sl":400},{"sl":401},{"sl":402},{"sl":403},{"sl":404},{"sl":405}]},"test_782":{"methods":[{"sl":300},{"sl":363},{"sl":385},{"sl":396}],"name":"testParsingNotNamespaceAware","pass":true,"statements":[{"sl":302},{"sl":303},{"sl":304},{"sl":305},{"sl":306},{"sl":308},{"sl":309},{"sl":310},{"sl":311},{"sl":312},{"sl":313},{"sl":314},{"sl":315},{"sl":316},{"sl":317},{"sl":318},{"sl":319},{"sl":320},{"sl":321},{"sl":322},{"sl":323},{"sl":324},{"sl":325},{"sl":326},{"sl":327},{"sl":364},{"sl":365},{"sl":366},{"sl":367},{"sl":368},{"sl":369},{"sl":370},{"sl":371},{"sl":372},{"sl":373},{"sl":374},{"sl":377},{"sl":386},{"sl":397},{"sl":398},{"sl":399},{"sl":400},{"sl":401},{"sl":402},{"sl":403},{"sl":404},{"sl":405}]},"test_805":{"methods":[{"sl":242},{"sl":363},{"sl":385},{"sl":396}],"name":"testParsingIgnoreElementContentWhitespace","pass":true,"statements":[{"sl":244},{"sl":245},{"sl":246},{"sl":247},{"sl":248},{"sl":250},{"sl":251},{"sl":252},{"sl":253},{"sl":254},{"sl":255},{"sl":256},{"sl":257},{"sl":258},{"sl":259},{"sl":260},{"sl":261},{"sl":262},{"sl":263},{"sl":364},{"sl":365},{"sl":366},{"sl":367},{"sl":368},{"sl":369},{"sl":370},{"sl":371},{"sl":372},{"sl":373},{"sl":374},{"sl":377},{"sl":386},{"sl":397},{"sl":398},{"sl":399},{"sl":400},{"sl":401},{"sl":402},{"sl":403},{"sl":404},{"sl":405}]},"test_834":{"methods":[{"sl":213},{"sl":363},{"sl":385},{"sl":396}],"name":"testParsingIgnoreComments","pass":true,"statements":[{"sl":215},{"sl":216},{"sl":217},{"sl":218},{"sl":219},{"sl":221},{"sl":222},{"sl":223},{"sl":224},{"sl":225},{"sl":226},{"sl":227},{"sl":228},{"sl":229},{"sl":230},{"sl":231},{"sl":232},{"sl":233},{"sl":234},{"sl":235},{"sl":236},{"sl":364},{"sl":365},{"sl":366},{"sl":367},{"sl":368},{"sl":369},{"sl":370},{"sl":371},{"sl":372},{"sl":373},{"sl":374},{"sl":377},{"sl":386},{"sl":397},{"sl":398},{"sl":399},{"sl":400},{"sl":401},{"sl":402},{"sl":403},{"sl":404},{"sl":405}]},"test_865":{"methods":[{"sl":179},{"sl":363},{"sl":385},{"sl":396}],"name":"testParsingDoNotExpandEntities","pass":true,"statements":[{"sl":181},{"sl":182},{"sl":183},{"sl":184},{"sl":185},{"sl":187},{"sl":188},{"sl":189},{"sl":190},{"sl":191},{"sl":192},{"sl":193},{"sl":194},{"sl":195},{"sl":196},{"sl":197},{"sl":198},{"sl":199},{"sl":200},{"sl":201},{"sl":202},{"sl":203},{"sl":204},{"sl":205},{"sl":206},{"sl":207},{"sl":364},{"sl":365},{"sl":366},{"sl":367},{"sl":368},{"sl":369},{"sl":370},{"sl":371},{"sl":372},{"sl":373},{"sl":374},{"sl":377},{"sl":386},{"sl":397},{"sl":398},{"sl":399},{"sl":400},{"sl":401},{"sl":402},{"sl":403},{"sl":404},{"sl":405}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [426], [], [426], [426], [426], [], [426], [426], [426], [426], [426], [426], [426], [426], [426], [426], [426], [426], [426], [426], [426], [426], [426], [426], [426], [426], [426], [426], [426], [426], [426], [426], [426], [426], [426], [426], [426], [426], [], [], [], [], [], [631], [], [631], [631], [631], [], [631], [631], [631], [631], [631], [631], [631], [631], [631], [631], [631], [631], [631], [631], [631], [631], [631], [631], [], [], [], [], [], [107], [], [107], [107], [107], [107], [107], [], [107], [107], [107], [107], [107], [107], [107], [107], [107], [107], [107], [107], [107], [107], [107], [107], [], [], [], [], [], [865], [], [865], [865], [865], [865], [865], [], [865], [865], [865], [865], [865], [865], [865], [865], [865], [865], [865], [865], [865], [865], [865], [865], [865], [865], [865], [865], [865], [], [], [], [], [], [834], [], [834], [834], [834], [834], [834], [], [834], [834], [834], [834], [834], [834], [834], [834], [834], [834], [834], [834], [834], [834], [834], [834], [], [], [], [], [], [805], [], [805], [805], [805], [805], [805], [], [805], [805], [805], [805], [805], [805], [805], [805], [805], [805], [805], [805], [805], [805], [], [], [], [], [], [493], [], [493], [493], [493], [], [493], [493], [493], [493], [493], [493], [493], [493], [493], [493], [493], [493], [493], [493], [493], [493], [493], [493], [493], [493], [], [], [], [], [], [782], [], [782], [782], [782], [782], [782], [], [782], [782], [782], [782], [782], [782], [782], [782], [782], [782], [782], [782], [782], [782], [782], [782], [782], [782], [782], [782], [], [], [], [], [], [], [189], [], [189], [189], [189], [189], [189], [189], [189], [189], [189], [189], [189], [189], [189], [189], [189], [], [189], [], [], [], [], [], [], [], [], [], [], [865, 107, 631, 834, 426, 493, 805, 782], [865, 107, 631, 834, 426, 493, 805, 782], [865, 107, 631, 834, 426, 493, 805, 782], [865, 107, 631, 834, 426, 493, 805, 782], [865, 107, 631, 834, 426, 493, 805, 782], [865, 107, 631, 834, 426, 493, 805, 782], [865, 107, 631, 834, 426, 493, 805, 782], [865, 107, 631, 834, 426, 493, 805, 782], [865, 107, 631, 834, 426, 493, 805, 782], [865, 107, 631, 834, 426, 493, 805, 782], [865, 107, 631, 834, 426, 493, 805, 782], [865, 107, 631, 834, 426, 493, 805, 782], [], [], [865, 107, 631, 834, 426, 493, 805, 782], [], [], [], [], [], [], [], [865, 107, 631, 834, 426, 493, 805, 782], [865, 107, 631, 834, 426, 493, 805, 782], [], [], [], [], [], [], [], [], [], [865, 107, 631, 834, 426, 493, 805, 782], [865, 107, 631, 834, 426, 493, 805, 782], [865, 107, 631, 834, 426, 493, 805, 782], [865, 107, 631, 834, 426, 493, 805, 782], [865, 107, 631, 834, 426, 493, 805, 782], [865, 107, 631, 834, 426, 493, 805, 782], [865, 107, 631, 834, 426, 493, 805, 782], [865, 107, 631, 834, 426, 493, 805, 782], [865, 107, 631, 834, 426, 493, 805, 782], [865, 107, 631, 834, 426, 493, 805, 782], [], [], [], [], [], [], [], [], [], [], [], [426], [426], [426], [426], [426], [], []]
