// JavaScript Document
var App = angular.module('App', ['ngSanitize'] );

App.controller('CenterCTRL', function ($scope) {
$scope.mylan = function (lan) {
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
$scope.sabet = "ایمیل";
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
}}; 

 


$scope.ides =2;
$scope.id =23;
shaer = '<li >تو را حوالی امروز خواهم بوسید<br>تو را حوالی امروز خواهم بوسید</li><li >تو را حوالی امروز خواهم بوسید<br>تو را حوالی امروز خواهم بوسید</li><li >تو را حوالی امروز خواهم بوسید<br>تو را حوالی امروز خواهم بوسید</li><li >تو را حوالی امروز خواهم بوسید<br>تو را حوالی امروز خواهم بوسید</li><li >تو را حوالی امروز خواهم بوسید<br>تو را حوالی امروز خواهم بوسید</li><li >تو را حوالی امروز خواهم بوسید<br>تو را حوالی امروز خواهم بوسید</li><li >تو را حوالی امروز خواهم بوسید<br>تو را حوالی امروز خواهم بوسید</li><li >تو را حوالی امروز خواهم بوسید<br>تو را حوالی امروز خواهم بوسید</li><li >تو را حوالی امروز خواهم بوسید<br>تو را حوالی امروز خواهم بوسید</li><li >تو را حوالی امروز خواهم بوسید<br>تو را حوالی امروز خواهم بوسید</li>';
$scope.myHTML =ripl= unescape( shaer );

shaer2 = '<li >The condition of your life <br />'+

'.is the reflection of your thought <br />'+

'.You would become the person that you think of daily <br />'+

'.Join these days & make a perfect person <br />'+

'.You create your thoughts, so try to create nice ones <br />'+

'</li>';
$scope.myHTML2 = unescape( shaer2 );


$scope.descript = function (ides) {

if(ides==1){
$scope.ides =2;	
shaer = '<li >تو را حوالی امروز خواهم بوسید<br>تو را حوالی امروز خواهم بوسید</li><li >تو را حوالی امروز خواهم بوسید<br>تو را حوالی امروز خواهم بوسید</li><li >تو را حوالی امروز خواهم بوسید<br>تو را حوالی امروز خواهم بوسید</li><li >تو را حوالی امروز خواهم بوسید<br>تو را حوالی امروز خواهم بوسید</li><li >تو را حوالی امروز خواهم بوسید<br>تو را حوالی امروز خواهم بوسید</li><li >تو را حوالی امروز خواهم بوسید<br>تو را حوالی امروز خواهم بوسید</li><li >تو را حوالی امروز خواهم بوسید<br>تو را حوالی امروز خواهم بوسید</li><li >تو را حوالی امروز خواهم بوسید<br>تو را حوالی امروز خواهم بوسید</li><li >تو را حوالی امروز خواهم بوسید<br>تو را حوالی امروز خواهم بوسید</li><li >تو را حوالی امروز خواهم بوسید<br>تو را حوالی امروز خواهم بوسید</li>';
$scope.myHTML =ripl= unescape( shaer );


shaer2 = '<li >The condition of your life <br />'+

'.is the reflection of your thought <br />'+

'.You would become the person that you think of daily <br />'+

'.Join these days & make a perfect person <br />'+

'.You create your thoughts, so try to create nice ones <br />'+

'</li>';
$scope.myHTML2 = unescape( shaer2 );

}else if(ides==2){	
$scope.ides =1;
shaer = '<li ><span style="color: #674ea7;"> نارحتی ها و رنجهای فراوانی را تحمل کرده اید بطوری که برسر دوراهی قرار گرفته اید علتش عدم اتکای به نفس شما می باشد زیرا چشمان نگران عده ای متوجه اقدامات سازنده جنابعالی می باشد پس با توکل برخدا و اراده ای قوی با سرعت و دقت دست به کار شوید و از زما حداکثر بهره را بگیری که تامل و درنگ مفهومی ندارد و خود را با شرایط زمان و مکان کاملاً وقق دهید و فالیت کنید</span></li>';
$scope.myHTML =ripl= unescape( shaer );

shaer2 = '<li >The condition of your life <br />'+
'.is the reflection of your thought <br />'+
'.You create your thoughts, so try to create nice ones <br />'+
'</li>';
$scope.myHTML2 = unescape( shaer2 );

}
}


$scope.faver = function (id) {
Toast_Material({ content : "با موفقیت در لیست علاقه مندی ها ثبت شد", updown:"bottom", position:"center", align:"center" });	
	
}



});