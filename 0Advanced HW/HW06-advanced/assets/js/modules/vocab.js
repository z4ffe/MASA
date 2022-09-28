const vocabArr = ['ария', 'розетка', 'роза', 'корт', 'крот', 'коза', 'кета', 'рота', 'теза', 'затор', 'тора', 'терка', 'катер', 'карт', 'трек', 'река', 'актер', 'азот', 'энциклопедия', 'плед', 'полдник', 'полиция', 'полк', 'плод', 'пион', 'пеон', 'пинок', 'пилон', 'подлец', 'депо', 'дикция', 'линия', 'лекция', 'лицо', 'японец', 'ялик', 'клип', 'кино', 'клоп', 'конец', 'клон', 'клин', 'копия', 'кондиция', 'опция', 'циклоп', 'цикл', 'циклон', 'циник', 'идол', 'преодоление', 'реле', 'ирод', 'период', 'предел', 'подол', 'продление', 'продол', 'плеер', 'перо', 'полено', 'пионер', 'пеон', 'прение', 'поле', 'пони', 'пение', 'деление', 'дело', 'доплер', 'доение', 'донор', 'дрон', 'оперение', 'одоление', 'ореол', 'лидер', 'аккредитация', 'тире', 'традиция', 'итерация', 'идея', 'ядрица', 'кредит', 'ката', 'кара', 'карета', 'карта', 'кедр', 'китаец', 'кредитка', 'каретка', 'крик', 'кирка', 'карате', 'критик', 'акация', 'акция', 'акарицид', 'арка', 'редакция', 'реакция', 'радиация', 'ракета', 'дата', 'дирекция', 'драка', 'диарея', 'тирада', 'терция', 'триада', 'цирк', 'цитра', 'цикада', 'дитя', 'диета'];

const palindromesArr = ['level', 'Anna', 'racecar', 'madam', 'mom', 'noon', 'radar', 'kayak', 'wow', "Don't nod", "my gym", 'I did, did I?', 'Red rum, sir, is murder', 'Step on no pets', 'Was it a cat I saw?', 'Eva, can I see bees in a cave?', 'no melon, no lemon', 'never odd or even', 'A nut for a jar of tuna.', 'Amore, Roma!', 'Borrow or rob?', "King, are you glad you are king?", 'Was it a car or a cat I saw?', 'Dennis, Nell, Edna, Leon, Nedra, Anita, Rolf, Nora, Alice, Carol, Leo, Jane, Reed, Dena, Dale, Basil, Rae, Penny, Lana, Dave, Denny, Lena, Ida, Bernadette, Ben, Ray, Lila, Nina, Jo, Ira, Mara, Sara, Mario, Jan, Ina, Lily, Arne, Bette, Dan, Reba, Diane, Lynn, Ed, Eva, Dana, Lynne, Pearl, Isabel, Ada, Ned, Dee, Rena, Joel, Lora, Cecil, Aaron, Flora, Tina, Arden, Noel, and Ellen sinned.', "Madam, in Eden, I’m Adam.", 'Murder for a jar of red rum', 'רק פושטק עלוב בולע קטשופ קר', 'מחר קר? חם!', 'מי אמר שיש רמאים?', 'ילד כותב בתוך דלי'];

const quotesArr = ["\"Dude, suckin' at something is the first step at being sorta good at something.\"<br>-  Jake <small><em>(Adventure Time)</em></small>", "\"Either I will find a way, or I will make one.\"<br> - Philip Sidney", "\"Our greatest weakness lies in giving up. The most certain way to succeed is always to try just one more time.\"<br>- Thomas A. Edison", "\"You are never too old to set another goal or to dream a new dream.\"<br>- C.S Lewis", "\"If you can dream it, you can do it.\"<br>- Walt Disney", "\"Never give up, for that is just the place and time that the tide will turn.\"<br>- Harriet Beecher Stowe", "\"I know where I'm going and I know the truth, and I don't have to be what you want me to be. I'm free to be what I want.\"<br>- Muhammad Ali", "\"If you always put limit on everything you do, physical or anything else. It will spread into your work and into your life. There are no limits. There are only plateaus, and you must not stay there, you must go beyond them.\"<br>- Bruce Lee"];

const anagramsArr = ['аванс',
	'австриец',
	'автопарк',
	'автор',
	'адрес',
	'азбука',
	'акварелист',
	'акростих',
	'актёр',
	'алкаш',
	'альбом',
	'амплуа',
	'ампула',
	'анаконда',
	'аорта',
	'апельсин',
	'апломб',
	'аптечка',
	'арак',
	'арка',
	'артистка',
	'арфа',
	'архаизм',
	'аскет',
	'базука',
	'банка',
	'баня',
	'бар',
	'барак',
	'барк',
	'барка',
	'барокко',
	'барон',
	'барс',
	'барство',
	'барыня',
	'баян',
	'бейсбол',
	'белорус',
	'бобслей',
	'бра',
	'брак',
	'брас',
	'втора',
	'кабан',
	'кавалерист',
	'канонада',
	'каратист',
	'коробка',
	'краб',
	'лесоруб',
	'мольба',
	'набор',
	'отара',
	'отвар',
	'отправка',
	'печатка',
	'пломба',
	'раб',
	'рабство',
	'рабыня',
	'саван',
	'секта',
	'сетка',
	'спаниель',
	'среда',
	'тавро',
	'тёрка',
	'фара',
	'харизма',
	'хористка',
	'царствие',
	'шакал'];

const hebrewAlphabet = [
	{
		letter: 'א',
		result: 1
	},
	{
		letter: 'ב',
		result: 2
	},
	{
		letter: 'ג',
		result: 3
	},
	{
		letter: 'ד',
		result: 4
	},
	{
		letter: 'ה',
		result: 5
	},
	{
		letter: 'ו',
		result: 6
	},
	{
		letter: 'ז',
		result: 7
	},
	{
		letter: 'ח',
		result: 8
	},
	{
		letter: 'ט',
		result: 9
	},
	{
		letter: 'י',
		result: 10
	},
	{
		letter: 'כ',
		result: 20
	},
	{
		letter: 'ל',
		result: 30
	},
	{
		letter: 'מ',
		result: 40
	},
	{
		letter: 'נ',
		result: 50
	},
	{
		letter: 'ס',
		result: 60
	},
	{
		letter: 'ע',
		result: 70
	},
	{
		letter: 'פ',
		result: 80
	},
	{
		letter: 'צ',
		result: 90
	},
	{
		letter: 'ק',
		result: 100
	},
	{
		letter: 'ר',
		result: 200
	},
	{
		letter: 'ש',
		result: 300
	},
	{
		letter: 'ת',
		result: 400
	},
	{
		letter: 'ך',
		result: 500
	},
	{
		letter: 'ם',
		result: 600
	},
	{
		letter: 'ן',
		result: 700
	},
	{
		letter: 'ף',
		result: 800
	},
	{
		letter: 'ץ',
		result: 900
	},
]

export {vocabArr, anagramsArr, quotesArr, palindromesArr, hebrewAlphabet}



