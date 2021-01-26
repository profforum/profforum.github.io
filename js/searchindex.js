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
   this[database_length++] = new SearchPage("index.html", "ПРОФFORUM", " ", "");
   this[database_length++] = new SearchPage("chat.html", "Наш чат", " ", "");
   this[database_length++] = new SearchPage("zavedenie.html", "Учебные заведения", " ", "");
   this[database_length++] = new SearchPage("postupi.html", "Поступи-онлайн", " ", "");
   this[database_length++] = new SearchPage("vakansii.html", "Вакансии", " ", "");
   this[database_length++] = new SearchPage("yandex_94700453beac3f3c.html", "yandex_94700453beac3f3c", " ", "");
   return this;
}
