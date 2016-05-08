// JavaScript Document
var App = angular.module('App', ['ngSanitize'] );

App.controller('CenterCTRL', function ($scope,todoServicez,$http) {

///////////////////////////////////////////////////ersal form tamas
$scope.forms = {};	
$scope.forms.text="";
$scope.forms.email="";
$scope.forms.name="";

 $scope.sendform = function () {
	names=$scope.forms.name;
	emails=$scope.forms.email;
	texts=$scope.forms.text; 
if(texts==""){
Toast_Material({ content : "لطفا جهت ارسال پیام فیلد ها را کامل کنید", updown:"bottom", position:"center", align:"center" });	
		return 0;}
	
  $http({
  method  : 'POST',
  url     : 'http://www.shahreroya.ir/apis/book/manage/code.php',
  data    : $.param({name: names, email:emails, text:texts}),  // pass in data as strings
  headers : { 'Content-Type': 'application/x-www-form-urlencoded' }  // set the headers so angular passing info as form data (not request payload)
 })
.success(function(data) {
$scope.forms.text="";
$scope.forms.email="";
$scope.forms.name="";
Toast_Material({ content : "پیام شما با موفقیت به پشتیبانی ارسال شد", updown:"bottom", position:"center", align:"center" });	
  });
 }
////////////////////////////////////////////////////////////////////////// 	
$scope.randoms = Math.floor(Math.random() * 2) + 1  ;
$scope.mylan = function (lan) {

todoServicez.show_alert().then(function(items)
{ 
var len = items.length;

for (var i=0; i<len; i++){
//alert(items[i].valuem);
todoServicez.up_alert(items[i].ids);
}
});
// انتخاب زبان fa	
if(lan==1){
$scope.onvan = "img/title.png";
$scope.ashar = "img/ashar.png";
$scope.header = "این هدر";
$scope.texts = "این متن";
$scope.list1 = "img/list1.png";
$scope.list2 = "img/list2.png";
$scope.list3 = "img/list3.png";
$scope.list4 = "img/list4.png";
$scope.list5 = "img/list5.png";
$scope.list6 = "img/list6.png";
$scope.list7 = "img/list7.png";

$scope.abouts = "اولین فعالیت‌ها در این زمینه در سال ۱۹۵۰ توسط فردی به نام Luhn شروع شد. اساس کار او، کلمات با بیش‌ترین تکرار بود. او کلمات پر تکرار را مهم تر از سایر کلمات به حساب می‌آورد. جملاتی که تعداد بیش تری از این کلمات را داشتند، جملاتی بودند که باید در خلاصه می‌آمدند. روش وی خطای زیادی دارد و خود او، بعضی از این خطاها را اصلاح کرد.";
$scope.about = "اولین فعالیت‌ها در این زمینه در سال ۱۹۵۰ توسط فردی به نام Luhn شروع شد. اساس کار او، کلمات با بیش‌ترین تکرار بود. او کلمات پر تکرار را مهم تر از سایر کلمات به حساب می‌آورد. جملاتی که تعداد بیش تری از این کلمات را داشتند، جملاتی بودند که باید در خلاصه می‌آمدند. روش وی خطای زیادی دارد و خود او، بعضی از این خطاها را اصلاح کرد.";
$scope.description = "نظر";
$scope.name = "نام";
$scope.email = "ایمیل";
$scope.sabet = "ارسال";

$http.get("sher.json").then(function(response) {
	$scope.myData = response.data.sher;
	$scope.hid_fa=false;
	$scope.hid_tu=true;
});

// انتخاب زبان en	
}else if(lan==2){
$scope.onvan = "img/title_en.png";
$scope.ashar = "img/ashar_en.png";
$scope.header = "این هدر";
$scope.texts = "این متن";
$scope.list1 = "img/list1_en.png";
$scope.list2 = "img/list2_en.png";
$scope.list3 = "img/list3_en.png";
$scope.list4 = "img/list4_en.png";
$scope.list5 = "img/list5_en.png";
$scope.list6 = "img/list6_en.png";
$scope.list7 = "img/list7_en.png";
$scope.abouts = "Thomson Reuters provides professionals with the intelligence, technology and human expertise they need to find trusted answers."
+"We enable professionals in the financial and risk, legal, tax and accounting, intellectual property and science and media markets to make the decisions that matter most, all powered by the world's most trusted news organization.";
$scope.about = "Thomson Reuters provides professionals with the intelligence, technology and human expertise they need to find trusted answers."
+"We enable professionals in the financial and risk, legal, tax and accounting, intellectual property and science and media markets to make the decisions that matter most, all powered by the world's most trusted news organization.";
$scope.description = "comment";
$scope.name = "name";
$scope.email = "email";
$scope.sabet = "submit";

$http.get("sher.json").then(function(response) {
	$scope.myData = response.data.sher;
	$scope.hid_fa=true;
	$scope.hid_tu=false;
});
}}; 
 
////////////////////////////////////////////////////////////  start namayesh sher
$scope.sherid = function (ides) {
$scope.randoms = Math.floor(Math.random() * 2) + 1  ;
///////////////////////////////////////////
todoServicez.sherm(ides).then(function(items)
{ 
//alert(ides);
	$scope.bloader=true;
	$scope.bloader2=true;
if(items[0].dvoice==1){
	$scope.evoice=items[0].lvoice+items[0].voice;
	$scope.esrcvoice="";	
	$scope.smusic=false;	
	$scope.lmusic=true;	
	$scope.smusic2=false;	
	$scope.lmusic2=true;	
	}else{
		
		$scope.evoice=items[0].voice;
        $scope.esrcvoice=items[0].srcvoice;		
		$scope.lmusic=false;
    	$scope.smusic=true;	
		$scope.lmusic2=false;
    	$scope.smusic2=true;
		}

$scope.efaver=items[0].faver;
if(items[0].faver){
$scope.efaver=items[0].faver;
	$scope.iconslike="img/night.png";
	}else{
		$scope.efaver=items[0].faver;
		$scope.iconslike="img/favorite.png";
}

	 
});

 
///////////////////////////////
$scope.showfaver = function () {
//faver  
todoServicez.getfaver().then(function(items)
{//alert(items[0].ids);
	$scope.myfaver = items;
});

};

$scope.faver = function (faver,id_var) 
{
	//alert(faver);
if(faver==1){
 $scope.iconslike="img/night.png";
$scope.efaver=0;
Toast_Material({ content : "با موفقیت از لیست علاقه مندی ها حذف شد", updown:"bottom", position:"center", align:"center" });	
favt=0;}else{
$scope.iconslike="img/favorite.png";
$scope.efaver=1;
Toast_Material({ content : "با موفقیت در لیست علاقه مندی ها ثبت شد", updown:"bottom", position:"center", align:"center" });	
favt=1;}
todoServicez.faverat(id_var,favt);

};

//////////////////////////////////////////////////////////// آیا فیور هست
todoServicez.iffav(ides).then(function(items)
{

if(items[0].fav==1){
$scope.iconslike="img/favorite.png";
	}else{
$scope.iconslike="img/night.png";
	}
});

	
$http.get("sher.json").then(function(response) {
	$scope.myData2 = response.data.matne;
    $scope.pageid=ides;
});

$http.get("sher.json").then(function(response) {
	$scope.shers = response.data.sher;

});

$scope.unescap = function ( str ) {
$scope.myHTML =ripl= unescape( str );
};
$scope.hid_disc=true;
$scope.ides=1;
$scope.descript = function (ides) {

if(ides==1){
$scope.ides =2;	

$scope.hid_sher=true;
$scope.hid_disc=false;
}else if(ides==2){	
$scope.ides =1;
$scope.hid_sher=false;
$scope.hid_disc=true;
}
}



 
}
/////////////////////////////////// download mohadad voice
$scope.download = function (URL,File_Name,ids) 
{ 

Onlins=document.getElementById('online').value;
if(Onlins==0){
Toast_Material({ content : "اتصال شما به اینترنت برقرار نیست !!", updown:"bottom", position:"center", align:"center" });	
return 0;
}	
	$scope.bloader=false;
	$scope.lmusic=true;
	$scope.smusic=false;
	 $scope.bloader2=false;
	$scope.lmusic2=true;
	$scope.smusic2=false;
   document.getElementById('smusic').style.display="none";
   document.getElementById('smusic2').style.display="none";
Toast_Material({ content : "دریافت فایل صوتی این شعر آغاز شد", updown:"bottom", position:"center", align:"center" });	

todoServicez.downvoice(ids,1);
urls=URL+File_Name;
//alert(urls);
var fileTransfer = new FileTransfer();
var uri = encodeURI(urls);
fileTransfer.download(
uri,
"file:///storage/sdcard0/book_ghash/voice/"+File_Name,
function(entt) {
},
function(error) {
	todoServicez.downvoice(ids,0);
	
	document.getElementById('bloader').style.visibility="hidden";
	document.getElementById('loaders').style.display="none";
	document.getElementById('bloader2').style.visibility="hidden";
	document.getElementById('loaders2').style.display="none";
	$scope.lmusic2=false;
	$scope.lmusic=false;
  console.log("upload error code" + error.message);
},
false,
{
  headers: {
	  "Authorization": "Basic dGVzdHVzZXJuYW1lOnRlc3RwYXNzd29yZA=="
  }
}
);
	fileTransfer.onprogress = function(progressEvent) {
		if (progressEvent.lengthComputable) {
			var perc = Math.floor(progressEvent.loaded / progressEvent.total * 100);
			//alert(perc);
			document.getElementById('bloader').innerHTML=perc;
			 document.getElementById('bloader2').innerHTML=perc;
			if(perc==100){
				document.getElementById('bloader').style.visibility="hidden";
				document.getElementById('loaders').style.display="none";
				document.getElementById('smusic').style.display="inline";
				$scope.lmusic=true;
				$scope.smusic=false;
				
				 document.getElementById('bloader2').style.visibility="hidden";
				document.getElementById('loaders2').style.display="none";
				document.getElementById('smusic2').style.display="inline";
				$scope.lmusic2=true;
				$scope.smusic2=false;
				}
			//statusDom.innerHTML = perc + "% loaded...";
		} else {
			
		}
	};
};


});



App.service('todoServicez', function($q) 
{
this.sherm = function(para)
  {   var idcom=para;
	  var deferred, result = [];
	  deferred = $q.defer();
	  var db = window.openDatabase("Database", "1.0", "Cordova books", 200000);
	  db.transaction(function(tx) 
	  { tx.executeSql("select * from sher where ids="+idcom, [], function(tx, res) 
		  { 
			  for(var i = 0; i < res.rows.length; i++)
			  {//alert(res.rows.item(i).pic);
		  result.push({id : res.rows.item(i).ids, voice : res.rows.item(i).voice,dvoice : res.rows.item(i).dvoice,faver : res.rows.item(i).faver, srcvoice: 'http://www.shahreroya.ir/apis/book/'+res.rows.item(i).direct, lvoice : 'file:///storage/sdcard0/book_ghash/voice/' })
		  }
		  deferred.resolve(result);
		});
	  });
	  return deferred.promise;
    },
this.picme = function(para)
{   var idcom=para;
//alert(idcom);
var deferred, result = [];
deferred = $q.defer();
var db = window.openDatabase("Database", "1.0", "Cordova books", 200000);
db.transaction(function(tx) 
{ tx.executeSql("select * from pics where flag=1 and id_car="+idcom, [], function(tx, res) 
	{ 
		for(var i = 0; i < res.rows.length; i++)
		{
	result.push({id : res.rows.item(i).ids, pic : 'file:///storage/sdcard0/bazdid/images/'+res.rows.item(i).pic})
	}
	deferred.resolve(result);
  });
});
return deferred.promise;
},
this.iffav = function(para)
{   var idcom=para;
//alert(idcom);
var deferred, result = [];
deferred = $q.defer();
var db = window.openDatabase("Database", "1.0", "Cordova books", 200000);
db.transaction(function(tx) 
{ tx.executeSql("select faver from sher where ids="+idcom, [], function(tx, res) 
  { 
	  for(var i = 0; i < res.rows.length; i++)
	  {
  result.push({fav : res.rows.item(i).faver})
  }
  deferred.resolve(result);
});
});
return deferred.promise;
},
this.downvoice = function(idss,fave) 
    {//alert(idss+fave);
		var db = window.openDatabase("Database", "1.0", "Cordova books", 200000);
        db.transaction(function(tx) 
        {
            return tx.executeSql("UPDATE sher SET dvoice="+fave+" where ids="+idss , [], function(tx, res) 
            {
                return true;
            });
        });
        return false;
    },
this.faverat = function(idss,fave) 
    {
		var db = window.openDatabase("Database", "1.0", "Cordova books", 200000);
        db.transaction(function(tx) 
        {
            return tx.executeSql("UPDATE sher SET faver=1 where ids="+idss , [], function(tx, res) 
            {
                return true;
            });
        });
        return false;
    },
this.getfaver = function()
  {   
	  var deferred, result = [];
	  deferred = $q.defer();
	  var db = window.openDatabase("Database", "1.0", "Cordova books", 200000);
	  db.transaction(function(tx) 
	  { tx.executeSql("select * from sher where faver=1", [], function(tx, res) 
		  {
		for(var i = 0; i < res.rows.length; i++)
		{
		  result.push({ids : res.rows.item(i).ids, title_fa : res.rows.item(i).title_fa, title_tu : res.rows.item(i).title_tu })
		}
		  deferred.resolve(result);
		});
	  });
	  return deferred.promise;
    },
this.show_alert = function()
  {   
	  var deferred, result = [];
	  deferred = $q.defer();
	  var db = window.openDatabase("Database", "1.0", "Cordova books", 200000);
	  db.transaction(function(tx) 
	  { tx.executeSql("select * from settingg where uptime=0 and flag=1", [], function(tx, res) 
		  {
		for(var i = 0; i < res.rows.length; i++)
		{
		  result.push({ids : res.rows.item(i).ids,title : res.rows.item(i).title, valuem : res.rows.item(i).valuem,flag : res.rows.item(i).flag, type : res.rows.item(i).type})
		}
		  deferred.resolve(result);
		});
	  });
	  return deferred.promise;
    },
	this.up_alert = function(idss)
  {  // alert(idss);
	 var db = window.openDatabase("Database", "1.0", "Cordova books", 200000);
        db.transaction(function(tx) 
        {
            return tx.executeSql("UPDATE settingg SET uptime=1 where ids="+idss , [], function(tx, res) 
            {
                return true;
            });
        });
        return false;
    }
});