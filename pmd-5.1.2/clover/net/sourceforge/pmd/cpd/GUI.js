var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":782,"id":3551,"methods":[{"el":77,"sc":32,"sl":77},{"el":78,"sc":31,"sl":78},{"el":79,"sc":36,"sl":79},{"el":80,"sc":35,"sl":80},{"el":93,"sc":10,"sl":93},{"el":94,"sc":10,"sl":94},{"el":95,"sc":10,"sl":95},{"el":96,"sc":10,"sl":96},{"el":97,"sc":10,"sl":97},{"el":99,"sc":10,"sl":99},{"el":100,"sc":10,"sl":100},{"el":102,"sc":10,"sl":102},{"el":103,"sc":10,"sl":103},{"el":105,"sc":10,"sl":105},{"el":106,"sc":10,"sl":106},{"el":108,"sc":10,"sl":108},{"el":109,"sc":10,"sl":109},{"el":111,"sc":10,"sl":111},{"el":112,"sc":10,"sl":112},{"el":114,"sc":10,"sl":114},{"el":115,"sc":10,"sl":115},{"el":117,"sc":10,"sl":117},{"el":126,"sc":10,"sl":118},{"el":128,"sc":10,"sl":128},{"el":129,"sc":10,"sl":129},{"el":131,"sc":10,"sl":131},{"el":132,"sc":10,"sl":132},{"el":168,"sc":2,"sl":164},{"el":172,"sc":2,"sl":170},{"el":297,"sc":5,"sl":288},{"el":355,"sc":5,"sl":299},{"el":320,"sc":13,"sl":317},{"el":365,"sc":5,"sl":357},{"el":425,"sc":5,"sl":367},{"el":386,"sc":13,"sl":382},{"el":441,"sc":5,"sl":427},{"el":454,"sc":5,"sl":443},{"el":466,"sc":5,"sl":456},{"el":488,"sc":5,"sl":468},{"el":500,"sc":5,"sl":490},{"el":532,"sc":5,"sl":502},{"el":507,"sc":4,"sl":505},{"el":510,"sc":4,"sl":510},{"el":514,"sc":4,"sl":514},{"el":528,"sc":4,"sl":526},{"el":542,"sc":5,"sl":534},{"el":562,"sc":5,"sl":544},{"el":568,"sc":5,"sl":564},{"el":638,"sc":5,"sl":570},{"el":655,"sc":2,"sl":640},{"el":652,"sc":7,"sl":645},{"el":665,"sc":2,"sl":657},{"el":713,"sc":5,"sl":675},{"el":691,"sc":8,"sl":682},{"el":692,"sc":4,"sl":692},{"el":693,"sc":4,"sl":693},{"el":694,"sc":4,"sl":694},{"el":695,"sc":4,"sl":695},{"el":696,"sc":4,"sl":696},{"el":697,"sc":4,"sl":697},{"el":698,"sc":4,"sl":698},{"el":699,"sc":4,"sl":699},{"el":700,"sc":4,"sl":700},{"el":701,"sc":4,"sl":701},{"el":702,"sc":4,"sl":702},{"el":703,"sc":4,"sl":703},{"el":709,"sc":4,"sl":704},{"el":726,"sc":5,"sl":715},{"el":745,"sc":5,"sl":728},{"el":750,"sc":5,"sl":748},{"el":767,"sc":5,"sl":752},{"el":772,"sc":5,"sl":769},{"el":780,"sc":5,"sl":776}],"name":"GUI","sl":70},{"el":89,"id":3559,"methods":[{"el":85,"sc":3,"sl":85},{"el":86,"sc":3,"sl":86},{"el":87,"sc":3,"sl":87}],"name":"GUI.LanguageConfig","sl":83},{"el":156,"id":3611,"methods":[{"el":151,"sc":3,"sl":146},{"el":152,"sc":3,"sl":152},{"el":153,"sc":3,"sl":153},{"el":154,"sc":3,"sl":154},{"el":155,"sc":3,"sl":155}],"name":"GUI.ColumnSpec","sl":140},{"el":178,"id":3631,"methods":[{"el":177,"sc":9,"sl":175}],"name":"GUI.CancelListener","sl":174},{"el":193,"id":3633,"methods":[{"el":192,"sc":9,"sl":181},{"el":190,"sc":17,"sl":183}],"name":"GUI.GoListener","sl":180},{"el":235,"id":3642,"methods":[{"el":201,"sc":6,"sl":199},{"el":226,"sc":9,"sl":203},{"el":233,"sc":9,"sl":228}],"name":"GUI.SaveListener","sl":195},{"el":246,"id":3670,"methods":[{"el":245,"sc":9,"sl":238}],"name":"GUI.BrowseListener","sl":237},{"el":263,"id":3678,"methods":[{"el":254,"sc":3,"sl":252},{"el":262,"sc":3,"sl":256}],"name":"GUI.AlignmentRenderer","sl":248},{"el":673,"id":3988,"methods":[],"name":"GUI.SortingTableModel","sl":667}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], []]
