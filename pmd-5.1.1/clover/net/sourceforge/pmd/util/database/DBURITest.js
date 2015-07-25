var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":630,"id":43404,"methods":[{"el":96,"sc":3,"sl":64},{"el":100,"sc":3,"sl":98},{"el":105,"sc":3,"sl":102},{"el":110,"sc":3,"sl":107},{"el":115,"sc":3,"sl":112},{"el":127,"sc":3,"sl":120},{"el":140,"sc":3,"sl":132},{"el":153,"sc":3,"sl":145},{"el":166,"sc":3,"sl":158},{"el":179,"sc":3,"sl":171},{"el":192,"sc":3,"sl":184},{"el":206,"sc":3,"sl":197},{"el":218,"sc":3,"sl":211},{"el":231,"sc":3,"sl":223},{"el":243,"sc":3,"sl":236},{"el":256,"sc":3,"sl":248},{"el":268,"sc":3,"sl":261},{"el":281,"sc":3,"sl":273},{"el":293,"sc":3,"sl":286},{"el":307,"sc":3,"sl":298},{"el":324,"sc":3,"sl":313},{"el":336,"sc":3,"sl":329},{"el":349,"sc":3,"sl":341},{"el":361,"sc":3,"sl":354},{"el":374,"sc":3,"sl":366},{"el":386,"sc":3,"sl":379},{"el":399,"sc":3,"sl":391},{"el":413,"sc":3,"sl":404},{"el":426,"sc":3,"sl":418},{"el":440,"sc":3,"sl":431},{"el":456,"sc":3,"sl":445},{"el":471,"sc":3,"sl":461},{"el":487,"sc":3,"sl":477},{"el":501,"sc":3,"sl":493},{"el":517,"sc":3,"sl":507},{"el":533,"sc":3,"sl":523},{"el":550,"sc":3,"sl":540},{"el":566,"sc":3,"sl":556},{"el":580,"sc":3,"sl":572},{"el":596,"sc":3,"sl":586},{"el":612,"sc":3,"sl":602},{"el":627,"sc":3,"sl":617}],"name":"DBURITest","sl":18}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_124":{"methods":[{"sl":507}],"name":"testDefaultSchemasList","pass":true,"statements":[{"sl":508},{"sl":510},{"sl":512},{"sl":513},{"sl":514}]},"test_146":{"methods":[{"sl":273}],"name":"testGetLanguagesList","pass":true,"statements":[{"sl":274},{"sl":275},{"sl":276},{"sl":277},{"sl":278}]},"test_15":{"methods":[{"sl":171}],"name":"testGetDbType2","pass":true,"statements":[{"sl":172},{"sl":173},{"sl":174},{"sl":175}]},"test_213":{"methods":[{"sl":298}],"name":"testGetDriverClass","pass":true,"statements":[{"sl":299},{"sl":300},{"sl":301},{"sl":302},{"sl":303},{"sl":304}]},"test_27":{"methods":[{"sl":329}],"name":"testSetDriverClass","pass":true,"statements":[{"sl":330},{"sl":331},{"sl":332},{"sl":333}]},"test_275":{"methods":[{"sl":261}],"name":"testSetSourceCodeNamesList","pass":true,"statements":[{"sl":262},{"sl":263},{"sl":264},{"sl":265}]},"test_280":{"methods":[{"sl":602}],"name":"testExplicitSourceCodeTypesList","pass":true,"statements":[{"sl":603},{"sl":605},{"sl":607},{"sl":608},{"sl":609}]},"test_356":{"methods":[{"sl":404}],"name":"testSetSubprotocol","pass":true,"statements":[{"sl":405},{"sl":406},{"sl":407},{"sl":408},{"sl":409},{"sl":410}]},"test_381":{"methods":[{"sl":197}],"name":"testGetSchemasList","pass":true,"statements":[{"sl":198},{"sl":199},{"sl":200},{"sl":201},{"sl":202},{"sl":203}]},"test_400":{"methods":[{"sl":132}],"name":"testGetUri","pass":true,"statements":[{"sl":133},{"sl":134},{"sl":135},{"sl":136},{"sl":137}]},"test_41":{"methods":[{"sl":391}],"name":"testGetSubprotocol","pass":true,"statements":[{"sl":392},{"sl":393},{"sl":394},{"sl":395},{"sl":396}]},"test_432":{"methods":[{"sl":431}],"name":"testSetSubnamePrefix","pass":true,"statements":[{"sl":432},{"sl":433},{"sl":434},{"sl":435},{"sl":436},{"sl":437}]},"test_433":{"methods":[{"sl":586}],"name":"testExplicitSchemasList","pass":true,"statements":[{"sl":587},{"sl":589},{"sl":591},{"sl":592},{"sl":593}]},"test_446":{"methods":[{"sl":540}],"name":"testDefaultSourceCodeNamesList","pass":true,"statements":[{"sl":541},{"sl":543},{"sl":545},{"sl":546},{"sl":547}]},"test_519":{"methods":[{"sl":477}],"name":"testDefaultLanguagesList","pass":true,"statements":[{"sl":478},{"sl":480},{"sl":482},{"sl":483},{"sl":484}]},"test_524":{"methods":[{"sl":248}],"name":"testGetSourceCodeNamesList","pass":true,"statements":[{"sl":249},{"sl":250},{"sl":251},{"sl":252},{"sl":253}]},"test_528":{"methods":[{"sl":158}],"name":"testGetDbType","pass":true,"statements":[{"sl":159},{"sl":160},{"sl":161},{"sl":162}]},"test_561":{"methods":[{"sl":145}],"name":"testSetUri","pass":true,"statements":[{"sl":146},{"sl":147},{"sl":148},{"sl":149},{"sl":150}]},"test_6":{"methods":[{"sl":366}],"name":"testGetSourceCodeType","pass":true,"statements":[{"sl":367},{"sl":368},{"sl":369},{"sl":370},{"sl":371}]},"test_618":{"methods":[{"sl":184}],"name":"testSetDbType","pass":true,"statements":[{"sl":185},{"sl":186},{"sl":187},{"sl":188},{"sl":189}]},"test_623":{"methods":[{"sl":341}],"name":"testGetCharacterSet","pass":true,"statements":[{"sl":342},{"sl":343},{"sl":344},{"sl":345},{"sl":346}]},"test_63":{"methods":[{"sl":379}],"name":"testSetSourceCodeType","pass":true,"statements":[{"sl":380},{"sl":381},{"sl":382},{"sl":383}]},"test_634":{"methods":[{"sl":354}],"name":"testSetCharacterSet","pass":true,"statements":[{"sl":355},{"sl":356},{"sl":357},{"sl":358}]},"test_684":{"methods":[{"sl":445}],"name":"testGetParameters","pass":true,"statements":[{"sl":446},{"sl":447},{"sl":448},{"sl":449},{"sl":450},{"sl":451},{"sl":452},{"sl":453}]},"test_718":{"methods":[{"sl":523}],"name":"testDefaultSourceCodeTypesList","pass":true,"statements":[{"sl":524},{"sl":526},{"sl":528},{"sl":529},{"sl":530}]},"test_752":{"methods":[{"sl":120}],"name":"testDump","pass":true,"statements":[{"sl":121},{"sl":122},{"sl":123},{"sl":124}]},"test_762":{"methods":[{"sl":418}],"name":"testGetSubnamePrefix","pass":true,"statements":[{"sl":419},{"sl":420},{"sl":421},{"sl":422},{"sl":423}]},"test_774":{"methods":[{"sl":286}],"name":"testSetLanguagesList","pass":true,"statements":[{"sl":287},{"sl":288},{"sl":289},{"sl":290}]},"test_81":{"methods":[{"sl":617}],"name":"testExplicitSourceCodeNamesList","pass":true,"statements":[{"sl":618},{"sl":620},{"sl":622},{"sl":623},{"sl":624}]},"test_84":{"methods":[{"sl":556}],"name":"testExplicitLanguagesList","pass":true,"statements":[{"sl":557},{"sl":559},{"sl":561},{"sl":562},{"sl":563}]},"test_842":{"methods":[{"sl":211}],"name":"testSetSchemasList","pass":true,"statements":[{"sl":212},{"sl":213},{"sl":214},{"sl":215}]},"test_885":{"methods":[{"sl":223}],"name":"testGetSourceCodeTypesList","pass":true,"statements":[{"sl":224},{"sl":225},{"sl":226},{"sl":227},{"sl":228}]},"test_905":{"methods":[{"sl":461}],"name":"testSetParameters","pass":true,"statements":[{"sl":462},{"sl":463},{"sl":464},{"sl":465},{"sl":466},{"sl":467},{"sl":468},{"sl":470}]},"test_907":{"methods":[{"sl":236}],"name":"testSetSourceCodeTypesList","pass":true,"statements":[{"sl":237},{"sl":238},{"sl":239},{"sl":240}]},"test_915":{"methods":[{"sl":313}],"name":"testGetThinDriverClass","pass":true,"statements":[{"sl":314},{"sl":315},{"sl":316},{"sl":317},{"sl":318},{"sl":319},{"sl":320},{"sl":321}]},"test_94":{"methods":[{"sl":493}],"name":"testDefaultCharacterSet","pass":true,"statements":[{"sl":494},{"sl":496},{"sl":497},{"sl":498}]},"test_99":{"methods":[{"sl":572}],"name":"testExplicitCharacterSet","pass":true,"statements":[{"sl":573},{"sl":575},{"sl":576},{"sl":577}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [752], [752], [752], [752], [752], [], [], [], [], [], [], [], [400], [400], [400], [400], [400], [400], [], [], [], [], [], [], [], [561], [561], [561], [561], [561], [561], [], [], [], [], [], [], [], [528], [528], [528], [528], [528], [], [], [], [], [], [], [], [], [15], [15], [15], [15], [15], [], [], [], [], [], [], [], [], [618], [618], [618], [618], [618], [618], [], [], [], [], [], [], [], [381], [381], [381], [381], [381], [381], [381], [], [], [], [], [], [], [], [842], [842], [842], [842], [842], [], [], [], [], [], [], [], [885], [885], [885], [885], [885], [885], [], [], [], [], [], [], [], [907], [907], [907], [907], [907], [], [], [], [], [], [], [], [524], [524], [524], [524], [524], [524], [], [], [], [], [], [], [], [275], [275], [275], [275], [275], [], [], [], [], [], [], [], [146], [146], [146], [146], [146], [146], [], [], [], [], [], [], [], [774], [774], [774], [774], [774], [], [], [], [], [], [], [], [213], [213], [213], [213], [213], [213], [213], [], [], [], [], [], [], [], [], [915], [915], [915], [915], [915], [915], [915], [915], [915], [], [], [], [], [], [], [], [27], [27], [27], [27], [27], [], [], [], [], [], [], [], [623], [623], [623], [623], [623], [623], [], [], [], [], [], [], [], [634], [634], [634], [634], [634], [], [], [], [], [], [], [], [6], [6], [6], [6], [6], [6], [], [], [], [], [], [], [], [63], [63], [63], [63], [63], [], [], [], [], [], [], [], [41], [41], [41], [41], [41], [41], [], [], [], [], [], [], [], [356], [356], [356], [356], [356], [356], [356], [], [], [], [], [], [], [], [762], [762], [762], [762], [762], [762], [], [], [], [], [], [], [], [432], [432], [432], [432], [432], [432], [432], [], [], [], [], [], [], [], [684], [684], [684], [684], [684], [684], [684], [684], [684], [], [], [], [], [], [], [], [905], [905], [905], [905], [905], [905], [905], [905], [], [905], [], [], [], [], [], [], [519], [519], [], [519], [], [519], [519], [519], [], [], [], [], [], [], [], [], [94], [94], [], [94], [94], [94], [], [], [], [], [], [], [], [], [124], [124], [], [124], [], [124], [124], [124], [], [], [], [], [], [], [], [], [718], [718], [], [718], [], [718], [718], [718], [], [], [], [], [], [], [], [], [], [446], [446], [], [446], [], [446], [446], [446], [], [], [], [], [], [], [], [], [84], [84], [], [84], [], [84], [84], [84], [], [], [], [], [], [], [], [], [99], [99], [], [99], [99], [99], [], [], [], [], [], [], [], [], [433], [433], [], [433], [], [433], [433], [433], [], [], [], [], [], [], [], [], [280], [280], [], [280], [], [280], [280], [280], [], [], [], [], [], [], [], [81], [81], [], [81], [], [81], [81], [81], [], [], [], [], [], []]
