const choicesLang = {'ru': [
  ["Язык консультирования:", "украинский", "русский"],
  ["Предпочтительное время:", "утро (9-12)", "день (12-17)", "вечер (17-21)"],
  ["Пол:", "мужчина", "женщина"],
      ],
		 'en': [
   ["Language of counseling:", "Ukrainian", "Russian"],
   ["Preferred time:", "morning (9-12)", "afternoon (12-17)", "evening (17-21)"],
   ["Gender:", "male", "female"],
       ],
		 'ua': [
   ["Мова консультування:", "українська", "російська"],
   ["Переважний час:", "ранок (9-12)", "день (12-17)", "вечір (17-21)"],
   ["Стать:", "чоловік", "жінка"],
       ],
		 'fr': [
   ["Langue du conseil:", "Ukrainien", "Russe"],
   ["Heure préférée:", "matin (9-12)", "après-midi (12-17)", "soir (17-21)"],
   ["Genre:", "Homme", "Femme"],
       ],
		};
const subtitleTextLang = {'en': "Long cursive subtitle here...", 'ru':".", 'ua':".", 'fr':"."};
const searchButtonTextLang = {'en': "Search", 'ru':".", 'ua':".", 'fr':"."};
const clearButtonTextLang = {'en': "Clear", 'ru':".", 'ua':".", 'fr':"."};

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
	var choices = choicesLang.get(language);
	var subtitleText = subtitleTextLang.get(language);
	var searchButtonText = searchButtonTextLang.get(language);
	var clearButtonText = clearButtonTextLang.get(language);
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
         var groupTitleText = document.createElement("h4"); groupTitleText.innerText = choices[i][0]; groupTitle.appendChild(groupTitleText);
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
	
	  document.getElementsByClassName('summary-metadata-item--tags').forEach((e) => {
		e.parentNode.parentNode.parentNode.parentNode.style.display = "unset";
		var cat_data = JSON.parse(e.children[0].innerText);
		options.forEach((i) => { if (!isNaN(i) && !cat_data.contains(i)) e.parentNode.parentNode.parentNode.parentNode.style.display = "none";});
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
