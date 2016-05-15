
var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }
};

$( document ).on("swipeleft swiperight", ".ui-content", function( e ) {
// We check if there is no open panel on the page because otherwise
// a swipe to close the left panel would also open the right panel (and v.v.).
// We do this by checking the data that the framework stores on the page element (panel: open).
//if ($.mobile.activePage.jqmData( "panel" ) !== "open") {
//if ( e.type === "swipeleft"  ) {
//$( "#myPanel" ).panel( "open" );
//} else if ( e.type === "swiperight" ) {
//$( "#myPanel" ).panel( "close" );
//}
//}
});

/////////////////////////////////////////////////////////////online
document.addEventListener("offline", onOffline, false);
document.addEventListener("online", onOnline, false);
  function onOffline() {
document.getElementById('online').value=0;
}	
  function onOnline() {
document.getElementById('online').value=1;
}	
///////////////////////////////////////////////////////////////////////////////////database
document.addEventListener('deviceready', onDeviceBase, false);
function onDeviceBase() {

var db = window.openDatabase("Database", "1.0", "Cordova books", 200000);
db.transaction(table, errorCB, successCB);
}

function table(tx){  
//tx.executeSql('DROP TABLE IF EXISTS sher');
//tx.executeSql('DROP TABLE IF EXISTS settingg');
tx.executeSql('CREATE TABLE IF NOT EXISTS sher(id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,ids INTEGER,title_fa text,title_tu text, voice text, direct text,faver INTEGER,dvoice INTEGER)');
tx.executeSql('CREATE TABLE IF NOT EXISTS settingg(id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT, title text,valuem text, flag INTEGER, ids INTEGER,time INTEGER,uptime INTEGER, type INTEGER )');

}

///////////////////////////////////////error db
function errorCB(err) {
	console.log("Error processing SQLm: "+err.message);
}
///////////////////////////////////// هرچیزی که می خواهد در ابتدا استارت بخورد در این قسمت قرار بگیرد
function successCB() {
var db = window.openDatabase("Database", "1.0", "Cordova books", 200000);
db.transaction(flag_one, flagSuccess);
}

//////////////////////////////////// مرحله سنجش فلگ بار اول
function flag_one(tx) {
tx.executeSql('SELECT * FROM settingg where title="flag_one"',[],flagSuccess, flagSuccess);
}

////////////////////////////////////زمانی که بار اول ننننیست
function flagSuccess(tx, results) {
//
var counts=results.rows.length;
//alert(counts);
if(counts==0){
tx.executeSql('INSERT INTO settingg(title,valuem) values("flag_one","1")');
$.getJSON("sher.json", function(json) {
for(i = 0; i < json.sher.length; i++) {
testo(json.sher[i].ids, json.sher[i].voice,json.sher[i].direct, json.sher[i].title_fa, json.sher[i].title_tu);
}
});
//////////////////////////////////////////////setting update
$.getJSON("http://www.shahreroya.ir/apis/book/api.php?type=setting", function(json) {
for(i = 0; i < json.items.length; i++) {
setting(json.items[i].title, json.items[i].value,json.items[i].flag, json.items[i].time ,json.items[i].type,json.items[i].id);
}
});


}else{
////////////////////////////////////////////// update setting update
$.getJSON("http://www.shahreroya.ir/apis/book/api.php?type=setting", function(json) {
for(i = 0; i < json.items.length; i++) {

up_setting(json.items[i].title, json.items[i].value,json.items[i].flag, json.items[i].time ,json.items[i].type, json.items[i].id );
}
});	
}
}
///////////////////////////////  ثبت آیتم های جدید
function testo(id,voice,direct,title_fa,title_tu) {
var dbs = window.openDatabase("Database", "1.0", "Cordova books", 200000);
dbs.transaction (function(tx){insert(tx,id,voice,direct,title_fa,title_tu);}, errorCB );	 
}

function insert(tx,id,voice,direct,title_fa,title_tu) {//alert(id+voice);
tx.executeSql('INSERT INTO sher(ids,voice,direct,faver,dvoice,title_fa,title_tu) values('+id+', "'+voice+'","'+direct+'",0,0,"'+title_fa+'","'+title_tu+'")');
//DownloadFile('http://www.borna-grp.ir/'+direct+pic,pic);	// دانلود عکس ها
}
///////////////////////////////  ثبت آیتم های جدید setting
function setting(title,valuem,flag,time,type,id) {
var dbs = window.openDatabase("Database", "1.0", "Cordova books", 200000);
dbs.transaction (function(tx){insert_se(tx,title,valuem,flag,time,type,id);}, errorCB );	 
}

function insert_se(tx,title,valuem,flag,time,type,id) {//alert(id+voice);
tx.executeSql('INSERT INTO settingg(title,valuem,flag,time,type,ids,uptime) values( "'+title+'","'+valuem+'",'+flag+','+time+','+type+','+id+',0)');
//DownloadFile('http://www.borna-grp.ir/'+direct+pic,pic);	// دانلود عکس ها
}

///////////////////////////////  ثبت آیتم های ّروزرسانی update
function up_setting(title,valuem,flag,time,type,id) {//alert(id);
var dbs = window.openDatabase("Database", "1.0", "Cordova books", 200000);
dbs.transaction (function(tx){update_se(tx,title,valuem,flag,time,type,id);}, errorCB );	 
}

function update_se(tx,title,valuem,flag,time,type,idd) {//alert(idd);
tx.executeSql("UPDATE settingg SET title='"+title+"',valuem='"+valuem+"',flag="+flag+",time="+time+",type="+type+" where ids="+idd+"", [], testonly, errorCB );
//DownloadFile('http://www.borna-grp.ir/'+direct+pic,pic);	// دانلود عکس ها
}


///////////////فقط برای تست بعدا برداشته شود
function testonly() {
//var dbs = window.openDatabase("Database", "1.0", "Cordova books", 200000);
//dbs.transaction(flag_dd, errorCB);
}
function flag_dd(tx) {alert('ss');
tx.executeSql('SELECT * FROM settingg  where uptime=0 and flag=1', [], querySuccess, errorCB);
}
function querySuccess(tx, results){
	out="";
var len = results.rows.length;
console.log("company table: " + len + " rows found.");
for (var i=0; i<len; i++){
 out+="Row = " + i + " ID = " + results.rows.item(i).ids + " flag =  " + results.rows.item(i).valuem  + " logo =  " + results.rows.item(i).id;
}
console.log( out);
}

