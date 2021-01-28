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
   this[database_length++] = new SearchPage("zavedenie.html", "Учебные заведения", " ", "");
   this[database_length++] = new SearchPage("postupi.html", "Поступи-онлайн", " ", "");
   this[database_length++] = new SearchPage("vakansii.html", "Вакансии", " ", "");
   this[database_length++] = new SearchPage("politika.html", "Политика конфиденциальности", "Политика конфиденциальности персональных данных Настоящая Политика конфиденциальности персональных данных  далее - Политика конфиденциальности  действует в отношении всей информации, которую сайт «ПРОФFORUM»,  далее - Сайт  расположенный на доменном имени   а также его субдоменах , может получить о Пользователе во время использования сайта   а также его субдоменов , его программ и его продуктов.  1. Определение терминов 1.1 В настоящей Политике конфиденциальности используются следующие термины  1.1.1. «Администрация сайта»  далее - Администрация  - уполномоченные сотрудники на управление сайтом «ПРОФFORUM», которые организуют и  или  осуществляют обработку персональных данных, а также определяет цели обработки персональных данных, состав персональных данных, подлежащих обработке, действия  операции , совершаемые с персональными данными. 1.1.2. «Персональные данные» - любая информация, относящаяся к прямо или косвенно определенному, или определяемому физическому лицу  субъекту персональных данных . 1.1.3. «Обработка персональных данных» - любое действие  операция  или совокупность действий  операций , совершаемых с использованием средств автоматизации или без использования таких средств с персональными данными, включая сбор, запись, систематизацию, накопление, хранение, уточнение  обновление, изменение , извлечение, использование, передачу  распространение, предоставление, доступ , обезличивание, блокирование, удаление, уничтожение персональных данных. 1.1.4. «Конфиденциальность персональных данных» - обязательное для соблюдения Оператором или иным получившим доступ к персональным данным лицом требование не допускать их распространения без согласия субъекта персональных данных или наличия иного законного основания. 1.1.5. Сайт «ПРОФFORUM» - это совокупность связанных между собой веб-страниц, размещенных в сети Интернет по уникальному адресу  URL    а также его субдоменах. 1.1.6. «Субдомены» - это страницы или совокупность страниц, расположенные на доменах третьего уровня, принадлежащие сайту «ПРОФFORUM», а также другие временные страницы, внизу который указана контактная информация Администрации 1.1.5. «Пользователь сайта «ПРОФFORUM»»  далее Пользователь  - лицо, имеющее доступ к сайту «ПРОФFORUM», посредством сети Интернет и использующее информацию, материалы и продукты сайта «ПРОФFORUM». 1.1.7. «Cookies» - небольшой фрагмент данных, отправленный веб-сервером и хранимый на компьютере пользователя, который веб-клиент или веб-браузер каждый раз пересылает веб-серверу в HTTPS-запросе при попытке открыть страницу соответствующего сайта. 1.1.8. «IP-адрес» - уникальный сетевой адрес узла в компьютерной сети, через который Пользователь получает доступ на Сайт.  2. Общие положения 2.1. Использование сайта «ПРОФFORUM» Пользователем означает согласие с настоящей Политикой конфиденциальности и условиями обработки персональных данных Пользователя. 2.2. В случае несогласия с условиями Политики конфиденциальности Пользователь должен прекратить использование сайта «ПРОФFORUM». 2.3. Настоящая Политика конфиденциальности применяется к сайту «ПРОФFORUM». Сайт не контролирует и не несет ответственность за сайты третьих лиц, на которые Пользователь может перейти по ссылкам, доступным на сайте «ПРОФFORUM». 2.4. Администрация не проверяет достоверность персональных данных, предоставляемых Пользователем.  3. Предмет политики конфиденциальности 3.1. Настоящая Политика конфиденциальности устанавливает обязательства Администрации по неразглашению и обеспечению режима защиты конфиденциальности персональных данных, которые Пользователь предоставляет по запросу Администрации при регистрации на сайте «ПРОФFORUM» или при подписке на информационную e-mail рассылку. 3.2. Персональные данные, разрешённые к обработке в рамках настоящей Политики конфиденциальности, предоставляются Пользователем путём заполнения форм на сайте «ПРОФFORUM» и включают в себя следующую информацию  3.2.1. фамилию, имя, отчество Пользователя  3.2.2. контактный телефон Пользователя  3.2.3. адрес электронной почты  e-mail  3.2.4. место жительство Пользователя  при необходимости  3.2.5. фотографию  при необходимости  3.3. Сайт защищает Данные, которые автоматически передаются при посещении страниц  - IP адрес  - информация из cookies  - информация о браузере - время доступа  - реферер  адрес предыдущей страницы . 3.3.1. Отключение cookies может повлечь невозможность доступа к частям сайта , требующим авторизации. 3.3.2. Сайт осуществляет сбор статистики об IP-адресах своих посетителей. Данная информация используется с целью предотвращения, выявления и решения технических проблем. 3.4. Любая иная персональная информация неоговоренная выше  история посещения, используемые браузеры, операционные системы и т.д.  подлежит надежному хранению и нераспространению, за исключением случаев, предусмотренных в п.п. 5.2. настоящей Политики конфиденциальности.  4. Цели сбора персональной информации пользователя 4.1. Персональные данные Пользователя Администрация может использовать в целях  4.1.1. Идентификации Пользователя, зарегистрированного на сайте «ПРОФFORUM» для его дальнейшей авторизации. 4.1.2. Предоставления Пользователю доступа к персонализированным данным сайта «ПРОФFORUM». 4.1.3. Установления с Пользователем обратной связи, включая направление уведомлений, запросов, касающихся использования сайта «ПРОФFORUM», обработки запросов и заявок от Пользователя. 4.1.4. Определения места нахождения Пользователя для обеспечения безопасности, предотвращения мошенничества. 4.1.5. Подтверждения достоверности и полноты персональных данных, предоставленных Пользователем. 4.1.6. Создания учетной записи для использования частей сайта «ПРОФFORUM», если Пользователь дал согласие на создание учетной записи. 4.1.7. Уведомления Пользователя по электронной почте. 4.1.8. Предоставления Пользователю эффективной технической поддержки при возникновении проблем, связанных с использованием сайта «ПРОФFORUM». 4.1.9. Предоставления Пользователю с его согласия специальных предложений, новостной рассылки и иных сведений от имени сайта «ПРОФFORUM».  5. Способы и сроки обработки персональной информации 5.1. Обработка персональных данных Пользователя осуществляется без ограничения срока, любым законным способом, в том числе в информационных системах персональных данных с использованием средств автоматизации или без использования таких средств. 5.2. Персональные данные Пользователя могут быть переданы уполномоченным органам государственной власти Российской Федерации только по основаниям и в порядке, установленным законодательством Российской Федерации. 5.3. При утрате или разглашении персональных данных Администрация вправе не информировать Пользователя об утрате или разглашении персональных данных. 5.4. Администрация принимает необходимые организационные и технические меры для защиты персональной информации Пользователя от неправомерного или случайного доступа, уничтожения, изменения, блокирования, копирования, распространения, а также от иных неправомерных действий третьих лиц. 5.5. Администрация совместно с Пользователем принимает все необходимые меры по предотвращению убытков или иных отрицательных последствий, вызванных утратой или разглашением персональных данных Пользователя.  6. Права и обязанности сторон 6.1. Пользователь вправе  6.1.1. Принимать свободное решение о предоставлении своих персональных данных, необходимых для использования сайта «ПРОФFORUM», и давать согласие на их обработку. 6.1.2. Обновить, дополнить предоставленную информацию о персональных данных в случае изменения данной информации. 6.1.3. Пользователь имеет право на получение у Администрации информации, касающейся обработки его персональных данных, если такое право не ограничено в соответствии с федеральными законами. Пользователь вправе требовать от Администрации уточнения его персональных данных, их блокирования или уничтожения в случае, если персональные данные являются неполными, устаревшими, неточными, незаконно полученными или не являются необходимыми для заявленной цели обработки, а также принимать предусмотренные законом меры по защите своих прав. Для этого достаточно уведомить Администрацию по указаному E-mail адресу. 6.2. Администрация обязана  6.2.1. Использовать полученную информацию исключительно для целей, указанных в п. 4 настоящей Политики конфиденциальности. 6.2.2. Обеспечить хранение конфиденциальной информации в тайне, не разглашать без предварительного письменного разрешения Пользователя, а также не осуществлять продажу, обмен, опубликование, либо разглашение иными возможными способами переданных персональных данных Пользователя, за исключением п.п. 5.2. настоящей Политики Конфиденциальности. 6.2.3. Принимать меры предосторожности для защиты конфиденциальности персональных данных Пользователя согласно порядку, обычно используемого для защиты такого рода информации в существующем деловом обороте. 6.2.4. Осуществить блокирование персональных данных, относящихся к соответствующему Пользователю, с момента обращения или запроса Пользователя, или его законного представителя либо уполномоченного органа по защите прав субъектов персональных данных на период проверки, в случае выявления недостоверных персональных данных или неправомерных действий.  7. Ответственность сторон 7.1. Администрация, не исполнившая свои обязательства, несёт ответственность за убытки, понесённые Пользователем в связи с неправомерным использованием персональных данных, в соответствии с законодательством Российской Федерации, за исключением случаев, предусмотренных п.п. 5.2. и 7.2. настоящей Политики Конфиденциальности. 7.2. В случае утраты или разглашения Конфиденциальной информации Администрация не несёт ответственность, если данная конфиденциальная информация  7.2.1. Стала публичным достоянием до её утраты или разглашения. 7.2.2. Была получена от третьей стороны до момента её получения Администрацией Ресурса. 7.2.3. Была разглашена с согласия Пользователя. 7.3. Пользователь несет полную ответственность за соблюдение требований законодательства РФ, в том числе законов о рекламе, о защите авторских и смежных прав, об охране товарных знаков и знаков обслуживания, но не ограничиваясь перечисленным, включая полную ответственность за содержание и форму материалов. 7.4. Пользователь признает, что ответственность за любую информацию  в том числе, но не ограничиваясь  файлы с данными, тексты и т. д. , к которой он может иметь доступ как к части сайта «ПРОФFORUM», несет лицо, предоставившее такую информацию. 7.5. Пользователь соглашается, что информация, предоставленная ему как часть сайта «ПРОФFORUM», может являться объектом интеллектуальной собственности, права на который защищены и принадлежат другим Пользователям, партнерам или рекламодателям, которые размещают такую информацию на сайте «ПРОФFORUM». Пользователь не вправе вносить изменения, передавать в аренду, передавать на условиях займа, продавать, распространять или создавать производные работы на основе такого Содержания  полностью или в части , за исключением случаев, когда такие действия были письменно прямо разрешены собственниками такого Содержания в соответствии с условиями отдельного соглашения. 7.6. В отношение текстовых материалов  статей, публикаций, находящихся в свободном публичном доступе на сайте «ПРОФFORUM»  допускается их распространение при условии, что будет дана ссылка на Сайт. 7.7. Администрация не несет ответственности перед Пользователем за любой убыток или ущерб, понесенный Пользователем в результате удаления, сбоя или невозможности сохранения какого-либо Содержания и иных коммуникационных данных, содержащихся на сайте «ПРОФFORUM» или передаваемых через него. 7.8. Администрация не несет ответственности за любые прямые или косвенные убытки, произошедшие из-за  использования либо невозможности использования сайта, либо отдельных сервисов  несанкционированного доступа к коммуникациям Пользователя  заявления или поведение любого третьего лица на сайте. 7.9. Администрация не несет ответственность за какую-либо информацию, размещенную пользователем на сайте «ПРОФFORUM», включая, но не ограничиваясь  информацию, защищенную авторским правом, без прямого согласия владельца авторского права.  8. Разрешение споров 8.1. До обращения в суд с иском по спорам, возникающим из отношений между Пользователем и Администрацией, обязательным является предъявление претензии  письменного предложения или предложения в электронном виде о добровольном урегулировании спора . 8.2. Получатель претензии в течение 30 календарных дней со дня получения претензии, письменно или в электронном виде уведомляет заявителя претензии о результатах рассмотрения претензии. 8.3. При не достижении соглашения спор будет передан на рассмотрение Арбитражного суда г. Глазов. 8.4. К настоящей Политике конфиденциальности и отношениям между Пользователем и Администрацией применяется действующее законодательство Российской Федерации.  9. Дополнительные условия 9.1. Администрация вправе вносить изменения в настоящую Политику конфиденциальности без согласия Пользователя. 9.2. Новая Политика конфиденциальности вступает в силу с момента ее размещения на сайте «ПРОФFORUM», если иное не предусмотрено новой редакцией Политики конфиденциальности. 9.3. Все предложения или вопросы касательно настоящей Политики конфиденциальности следует сообщать по адресу  9.4. Действующая Политика конфиденциальности размещена на странице по адресу https //profforum.github.io/politika  Обновлено  февраль 2021 года  г. Глазов, Муниципальное учреждение культуры \"Глазовская районная централизованная библиотечная система\" муниципального образования \"Глазовский район\" ОГРН1021800589821   ", "");
   this[database_length++] = new SearchPage("yandex_94700453beac3f3c.html", "yandex_94700453beac3f3c", " ", "");
   return this;
}
