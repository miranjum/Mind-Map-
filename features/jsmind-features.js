var _jm = null;
function load_jsmind(){
    var mind = {
        meta:{
            name:'demo',
            author:'eyosias.kibe001@umb.edu',
            version:'0.2'
        },
        format:'node_array',
        data:[
            {"id":"root", "isroot":true, "topic":"Topic"},

            {"id":"parent1", "parentid":"root", "topic":"parent1"},
                {"id":"node1", "parentid":"parent1", "topic":"node1"},
                     {"id":"child1", "parentid":"node1", "topic":"child1"},
                     {"id":"child2", "parentid":"node2", "topic":"child2"},
                     {"id":"child3", "parentid":"node3", "topic":"child3"},

            {"id":"parent2", "parentid":"root", "topic":"parent2"},
                    {"id":"node2", "parentid":"parent2", "topic":"node2"},
                            {"id":"child4", "parentid":"node2", "topic":"child4"},
                            {"id":"child5", "parentid":"node2", "topic":"child5"},
                            {"id":"child6", "parentid":"node2", "topic":"child6"},
            {"id":"node3", "parentid":"parent2", "topic":"node3"},
                            {"id":"child7", "parentid":"node3", "topic":"child7"},
                            {"id":"child8", "parentid":"node3", "topic":"child8"},
                            {"id":"child7", "parentid":"node3", "topic":"child9"},
            {"id":"node4", "parentid":"parent2", "topic":"node4"},


            {"id":"parent3", "parentid":"root", "topic":"parent3"},
            {"id":"node1", "parentid":"parent2", "topic":"node1"},

        ]
    };
    var options = {
        container:'jsmind_container',
        editable:true,
        theme:'primary',
        shortcut:{
            handles:{
                test:function(j,e){
                    console.log(j);
                }
            },
            mapping:{
                test:89
            }
        }
    }
    _jm = jsMind.show(options,mind);
    // jm.set_readonly(true);
    // var mind_data = jm.get_data();
    // alert(mind_data);
}

function load_file(fi){
    var files = fi.files;
    if(files.length > 0){
        var file_data = files[0];
        jsMind.util.file.read(file_data, function(freemind_data, jsmind_name){
            var mind = jsmind_data;
            if(!!mind){
                _jm.show(mind);
            }else{
                console.error('can not open this file as mindmap');
            }
        });
    }
}

function save_nodetree(){
    var mind_data = _jm.get_data('node_tree');
    console.log(mind_data);
}

function replay(){
    var shell = _jm.shell;
    if(!!shell){
        shell.replay();
    }
}

var zoominButton = document.getElementById("zoom-in");
var zoomOutButton = document.getElementById("zoom-out");

function zoomIn() {
    if (_jm.view.zoomIn()) {
        zoomOutButton.disabled = false;
    } else {
        zoominButton.disabled = true;
    };
};

function zoomOut() {
    if (_jm.view.zoomOut()) {
        zoominButton.disabled = false;
    } else {
        zoomOutButton.disabled = true;
    };
};

$(document).ready(function () {
    $('#sidebarCollapse').on('click', function () {
        $('#sidebar').toggleClass('active');
    });
});
load_jsmind();