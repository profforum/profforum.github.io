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
   this[database_length++] = new SearchPage("u_zavedenie_v_telemed.html", "Учебные заведения Профессия врач телемедицины", " ", "");
   this[database_length++] = new SearchPage("u_zavedenie_v_dizayn.html", "Учебные заведения Профессия графический дизайнер", " ", "");
   this[database_length++] = new SearchPage("u_zavedenie_v_inzhener.html", "Учебные заведения Профессия инженер-разработчик в области Интернета вещей", " ", "");
   this[database_length++] = new SearchPage("u_zavedenie_v_geron.html", "Учебные заведения Профессия геронтоконсультант", " ", "");
   this[database_length++] = new SearchPage("u_zavedenie_v_kouching.html", "Учебные заведения Профессия коучинг", " ", "");
   this[database_length++] = new SearchPage("str1.html", "ПРОФFORUM", "ПРОФFORUM   ", "");
   this[database_length++] = new SearchPage("str2.html", "ПРОФFORUM", "ПРОФFORUM   ", "");
   this[database_length++] = new SearchPage("str3.html", "ПРОФFORUM", "ПРОФFORUM   ", "");
   this[database_length++] = new SearchPage("str4.html", "ПРОФFORUM", "ПРОФFORUM   ", "");
   this[database_length++] = new SearchPage("str5.html", "ПРОФFORUM", "ПРОФFORUM   ", "");
   this[database_length++] = new SearchPage("str6.html", "ПРОФFORUM", "ПРОФFORUM   ", "");
   this[database_length++] = new SearchPage("str7.html", "ПРОФFORUM", "ПРОФFORUM   ", "");
   this[database_length++] = new SearchPage("str8.html", "ПРОФFORUM", "ПРОФFORUM   ", "");
   this[database_length++] = new SearchPage("str9.html", "ПРОФFORUM", "ПРОФFORUM   ", "");
   this[database_length++] = new SearchPage("str10.html", "ПРОФFORUM", "ПРОФFORUM   ", "");
   this[database_length++] = new SearchPage("str11.html", "ПРОФFORUM", "ПРОФFORUM   ", "");
   this[database_length++] = new SearchPage("str12.html", "ПРОФFORUM", "ПРОФFORUM   ", "");
   this[database_length++] = new SearchPage("str13.html", "ПРОФFORUM", "ПРОФFORUM   ", "");
   return this;
}
