// search index for WYSIWYG Web Builder
var database_length = 0;

function SearchPage(url, title, keywords, description)
{
   this.url = url;
   this.title = title;
   this.keywords = keywords;
   this.description = description;
   return this;
}

function SearchDatabase()
{
   database_length = 0;
   this[database_length++] = new SearchPage("index.html", "ПРОФFORUM", "ПРОФFORUM   ", "Сайт «ПРОФFORUM» поможет выбрать учебное заведение, получить необходимую информацию о поступлении в вуз через портал Госуслуги, ознакомится с актуальными вакансиями Глазовского района. В рубрике «Наш чат» абитуриенты могут задавать вопросы и создавать темы для обсуждений, студенты могут поделиться своим опытом поступлений.");
   this[database_length++] = new SearchPage("chat.html", "Наш чат", " ", "");
   this[database_length++] = new SearchPage("u_zavedenie.html", "Учебные заведения", " ", "");
   this[database_length++] = new SearchPage("postupi.html", "Поступи-онлайн", " ", "");
   this[database_length++] = new SearchPage("vakansii.html", "Вакансии", " ", "");
   this[database_length++] = new SearchPage("yandex_94700453beac3f3c.html", "yandex_94700453beac3f3c", " ", "");
   this[database_length++] = new SearchPage("u_zavedenie_v_advokat.html", "Учебные заведения Профессия виртуальный адвокат", " ", "");
   this[database_length++] = new SearchPage("u_zavedenie_v_telemed.html", "Учебные заведения Профессия виртуальный адвокат", " ", "");
   return this;
}
