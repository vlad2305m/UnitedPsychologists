import { database } from 'https://vlad2305m.github.io/UnitedPsychologists/matcher/data.js';
const choicesLang = {'ru': [
   ["Язык консультирования:", "Украинский", "Русский", "Английский", "Французский", "Немецкий"],
   ["Категория клиентов:", "семья", "взрослые", "подростки", "дети"],
   //["Предпочтительное время:"/*, "утро (9-12)", "день (12-17)", "вечер (17-21)"*/],
   ["Пол:", "мужчина", "женщина"],
      ],
		 'en': [
   ["Language of counseling:", "Ukrainian", "Russian", "English", "French", "German"],
   ["Customer category:", "family", "adults", "teens", "children"],
   //["Preferred time:"/*, "morning (9-12)", "afternoon (12-17)", "evening (17-21)"*/],
   ["Gender:", "male", "female"],
       ],
		 'ua': [
   ["Мова консультування:", "Українська", "Російська", "Англійська", "Французька", "Німецька"],
   ["Категорія клієнтів:", "сім'я", "дорослі", "підлітки", "діти"],
   //["Переважний час:"/*, "ранок (9-12)", "день (12-17)", "вечір (17-21)"*/],
   ["Стать:", "чоловік", "жінка"],
       ],
		 'fr': [
   ["Langue du conseil:", "Ukrainien", "Russe", "Anglais", "Français", "Allemand"],
   ["Catégorie client:", "famille", "adultes", "ados", "enfants"],
   //["Heure préférée:"/*, "matin (9-12)", "après-midi (12-17)", "soir (17-21)"*/],
   ["Genre:", "Homme", "Femme"],
       ],
		};
const subtitleTextLang = {'en': "Please select from one or more rows with optional criteria below.", 
			  'ru':"Выберите одну или несколько строк с дополнительными критериями ниже.", 
			  'ua':"Виберіть один або кілька рядків із додатковими критеріями нижче.", 
			  'fr':"Veuillez sélectionner une ou plusieurs lignes avec des critères facultatifs ci-dessous."};
const searchButtonTextLang = {'en': "Search", 'ru':"Поиск", 'ua':"Пошук", 'fr':"Recherche"};
const clearButtonTextLang = {'en': "Clear", 'ru':"Очистить", 'ua':"Очистити", 'fr':"Dégager"};

const langpos = 29;
var language = window.location.href.substring(langpos, langpos+2);

const masterContainer = "container2";
const optionsContainerc = "inner-box";
const rowContainer = "row-box";
const highRowContainer = "row-box column-divide";
const choiceGroupName = "form-title";
const choiceOptionsContainer = "form-radio";
const choiceOptionContainer = "example";
const choiceOptionButtonContainer = "radio-button";
const choiceOptionButtonLabel = "radio-button__label";
const choiceOptionButton = "radio-button__input help_radio";
const choiceClearButton = "new_btn";
const choiceClearButtonLabel = "clr_btn_link";
const searchButtonc = "submit_form";

var done = false;
function generate(parent) {
  if (done) return; done = true;
	var choices = choicesLang[language];
	var subtitleText = subtitleTextLang[language];
	var searchButtonText = searchButtonTextLang[language];
	var clearButtonText = clearButtonTextLang[language];
  document.getElementsByClassName('summary-item-record-type-text').forEach((e) => {e.style.display = "none";});
  var master = document.createElement("div"); master.setAttribute("class", masterContainer);
   var table = document.createElement("div"); table.setAttribute("class", optionsContainerc); master.appendChild(table);
   var searchButtonContainer = document.createElement("div"); searchButtonContainer.setAttribute("class", rowContainer); master.appendChild(searchButtonContainer);
    var searchButton =  document.createElement("input"); searchButton.setAttribute("type", "button"); searchButton.setAttribute("class", searchButtonc); searchButton.setAttribute("name", "submit"); searchButton.setAttribute("value", searchButtonText); searchButtonContainer.appendChild(searchButton);
    var form = document.createElement("form"); form.setAttribute("method", "post"); table.appendChild(form);
     var subtitleRow = document.createElement("div"); subtitleRow.setAttribute("class", rowContainer); form.appendChild(subtitleRow);
      var subtitle = document.createElement("i"); subtitle.innerText = subtitleText; subtitleRow.appendChild(subtitle);
     for (var i = 0; i < choices.length; i++) {
       var group = document.createElement("div"); group.setAttribute("class", highRowContainer); form.appendChild(group);
        var groupTitle = document.createElement("div"); groupTitle.setAttribute("class", choiceGroupName); group.appendChild(groupTitle);
         var groupTitleText = document.createElement("b"); groupTitleText.innerText = choices[i][0]; groupTitle.appendChild(groupTitleText);
        var optionsContainer = document.createElement("div"); optionsContainer.setAttribute("class", choiceOptionsContainer); group.appendChild(optionsContainer);
         for (var j = 1; j < choices[i].length; j++) {
           var optionContainer = document.createElement("div"); optionContainer.setAttribute("class", choiceOptionContainer); optionsContainer.appendChild(optionContainer);
            var buttonContainer = document.createElement("label"); buttonContainer.setAttribute("class", choiceOptionButtonContainer); optionContainer.appendChild(buttonContainer);
             var button = document.createElement("input"); button.setAttribute("type", "radio"); button.setAttribute("class", choiceOptionButton); 
              button.setAttribute("id", "choice"+(i+1)+"-"+j); button.setAttribute("name", "choice"+(i+1)); button.setAttribute("value", (i+1)*100+j); buttonContainer.appendChild(button);
             var buttonText = document.createElement("span"); buttonText.setAttribute("class", choiceOptionButtonLabel); 
              buttonText.innerText = choices[i][j]; buttonContainer.appendChild(buttonText);
         }
     }
     var clrButton = document.createElement("div"); clrButton.setAttribute("class", choiceClearButton); form.appendChild(clrButton);
      var clrButtonb = document.createElement("a"); clrButtonb.setAttribute("href", "javascript:void(0);"); clrButtonb.setAttribute("class", choiceClearButtonLabel); clrButtonb.innerText = clearButtonText; clrButton.appendChild(clrButtonb);
  parent.appendChild(master);
	
	
	
	
	
	
	
  setTimeout(()=>{$(".submit_form").click(function(){
    var options = [];
    for (var i = 0; i < choices.length; i++) {
      options.push(parseInt($("input[name=\"choice"+(i+1)+"\"]:checked").val()));
    }
    console.log(options);
	
	  document.getElementsByClassName('summary-title').forEach((e) => {
		const record = e.parentNode.parentNode;
		record.style.display = "unset";
		var cat_data = database[e.children[0].href.substring(39)];
		options.forEach((i) => { if (!isNaN(i) && !cat_data.contains(i)) record.style.display = "none";});
	  });
  });
  $(".clr_btn_link").click(function(){ $('.radio-button__input').prop('checked', false); }); }, 1000);
}



document.addEventListener('DOMContentLoaded', function() {
	
var coll = document.getElementsByClassName("sqs-gallery-meta-container");
for (var i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.style.aspectRatio = "auto";
  });
}
	
$(document).ready(function(){
$(".click_div").click(function(){
    generate(document.getElementsByClassName("click_div")[0]);
});});});
