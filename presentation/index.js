// Import React
import React from "react";

// Import Spectacle Core tags
import {
	BlockQuote,
	Code,
	Deck,
	Heading,
	ListItem,
	List,
	Quote,
	Slide,
	Link,
	Image,
	CodePane,
	Text
} from "spectacle";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";

import CodeSlide from 'spectacle-code-slide';

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");


const images = {
	city: require("../assets/city.jpg"),
	kat: require("../assets/kat.png"),
	logo: require("../assets/formidable-logo.svg"),
	markdown: require("../assets/markdown.png")
};

preloader(images);

const theme = createTheme({
	primary: "#fff",
	secondary: "#2d2d2d",
	tertiary: "#03A9FC",
	quartenary: "#CECECE"
}, {
	primary: "Montserrat",
	secondary: "Helvetica"
});

const prototypicalInheritance = `
function Person(name) {
  this.name = name;
}

Person.prototype.introduce = function() {
  console.log('Привіт, мене звати ' + this.name)
};

var mathTeacher = new Person('Марія Іванівна')

mathTeacher.introduce() // "Привіт, мене звати Марія Іванівна"
`;

const classesInheritance = `
class Person {

  constructor(name){
    this.name = name;
  }

  introduce(){
    console.log('Привіт, мене звати ' + this.name)
  }

}

var mathTeacher = new Person('Марія Іванівна')

mathTeacher.introduce();
`;

const gettersSetters = `
class Person {
	constructor(age) {
		this.age = age;
	}


	get age() {
		return this._age;

	}

	set age(value) {
		this._age = value;
	}

}

const Alex = new Person(20);

console.log(Alex.age);

`;


export default class Presentation extends React.Component {
	render() {
		return (
			<Deck transition={["zoom", "slide"]} transitionDuration={500} theme={theme}>
				{/*Intro */}
				<Slide transition={["zoom"]} bgColor="primary">
					<Heading size={1} fit caps lineHeight={1} textColor="secondary">
						JavaScript vol. 2
					</Heading>
				</Slide>
				<Slide transition={["zoom"]} bgColor="primary">
					<Heading size={2}>@komarnitskyi</Heading>
					<Text>---</Text>
					<Text>JavaScript developer at ASD</Text>
					<Text>Nodeschool Chernivtsi</Text>
					<Text>ChernivtsiJS</Text>
				</Slide>
				<Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
					<Heading size={6} textColor="secondary" caps>План лекції</Heading>
					<List>
						<ListItem>Наслідування та класи</ListItem>
						<ListItem>Модулі</ListItem>
						<ListItem>Symbols</ListItem>
						<ListItem>Ітератори та генератори</ListItem>
						<ListItem>Promises</ListItem>
						<ListItem>async/await</ListItem>
					</List>
				</Slide>
				{/*Intro End*/}


				<Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
					<Heading size={3}>Класи - синтаксичний цукор над звичайним прототипним наслідуванням</Heading>
				</Slide>
				<Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
					<Heading size={1}>Прототипне наслідування</Heading>
				</Slide>
				<Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
					<Heading size={2}>prototype</Heading>
					<Text>
						об'єкт який містить у собі методи та властиості які будуть доступні для всіх нащадків
					</Text>
					<Heading size={2}>__proto__</Heading>
					<Text>
						посилання на prototype
					</Text>
				</Slide>
				<CodeSlide

					transition={['fade']}
					lang="js"
					code={prototypicalInheritance}
					ranges={[
						{loc: [0, 4], note: "Створимо конструктор Person"},
						{loc: [5, 8], note: "У його прототип додамо метод introduce"},
						{loc: [9, 10], note: "Створимо новий екземпляр Person"},
						{loc: [11, 12], note: "Викликаємо метод introduce"},
					]}/>
				<Slide transition={["fade"]} bgColor="secondary" textColor="primary">
					<Heading size={2} textColor="tertiary">Classes</Heading>
					<Text textColor="primary">Напишемо те ж саме, але із синтаксисом класів</Text>
				</Slide>
				<CodeSlide
					transition={['fade']}
					lang="js"
					code={classesInheritance}
					ranges={[
						{loc: [1, 2], title: "Синтаксис звичний із інших мов"},
						{loc: [3, 6], note: "Власне сама ф-я конструктор"},
						{loc: [7, 10], note: "Метод introduce"},
						{loc: [13, 16], note: "Створення нового екземпляру і виклик методу - таке ж"},
					]}/>
				<Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
					<Heading size={1}>Getters / Setters in Classes</Heading>
				</Slide>
				<CodeSlide
					transition={['fade']}
					lang="js"
					code={gettersSetters}
					ranges={[
						{loc: [0, 5], note: "Запишемо значення у властивість"},
						{loc: [7, 11], note: "Getter"},
						{loc: [12, 16], note: "Setter"}
					]}/>
				<Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
					<Heading size={1}>super / extends </Heading>
				</Slide>
				<CodeSlide
					transition={['fade']}
					lang="js"
					code={require('!raw-loader!./examples/superExample')}
					ranges={[
						{loc: [0, 11], note: "Class Animal"},
						{loc: [11, 21], note: "Class Rabbit що наслідується від Animal"},
						{loc: [22, 29], note: "Створюємо новий екземпляр та викликаємо метод"}
					]}/>
				<Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
					<Image src={'https://media0.giphy.com/media/BQAk13taTaKYw/giphy.gif'} width={450}
						   height={250}></Image>
					<Heading size={1}>modules</Heading>
				</Slide>
				<CodeSlide
					transition={['fade']}
					lang="js"
					code={require('!raw-loader!./examples/exportExample')}
					ranges={[
						{loc: [0, 4]},
						{loc: [5, 9]},
						{loc: [10, 17]},
						{loc: [24, 30]},
						{loc: [18, 22]}
					]}/>
				<Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
					<Text> Всі методи, змінні, класи які ми експортуємо мають бути визначеними</Text>

				</Slide>
				<CodeSlide
					transition={['fade']}
					lang="js"
					code={require('!raw-loader!./examples/importExample')}
					ranges={[
						{loc: [0, 1]},
						{loc: [2, 3]},
						{loc: [4, 5]}
					]}/>
				<Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
					<Text>export/import default</Text>
				</Slide>
				<CodeSlide
					transition={['fade']}
					lang="js"
					code={require('!raw-loader!./examples/exportDefaultExample')}
					ranges={[
						{loc: [0, 3]},
						{loc: [4, 9]},
						{loc: [10, 15]},
						{loc: [16, 22]},
					]}/>
				<Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
					<Text><Link
						href={'https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Statements/import'}>MDN:
						imports</Link></Text>
					<Text><Link
						href={'https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Statements/export'}>MDN:
						exports</Link></Text>
					<Text><Link href={'https://understandinges6.denysdovhan.com/manuscript/13-Modules.html'}>Understanding
						ES6: Модулі</Link></Text>
				</Slide>


				<Slide transition={["fade"]} bgColor="secondary" textColor="tertiary">
					<Heading>Symbols</Heading>
				</Slide>

				<Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
					<Text>Нове примітивне значення яке додене в ES6</Text>
					<Text>Немає літерала</Text>
				</Slide>

				<CodeSlide
					transition={['fade']}
					lang="js"
					code={require('!raw-loader!./examples/symbols')}
					ranges={[
						{loc: [0, 5]},
						{loc: [6, 8]},
						{loc: [13, 16]},
					]}/>

				<Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
					<Text>Ідентифікувати символ можна за допомогою:</Text>
					<Code textColor="secondary">typeof symbol // 'symbol'</Code>
				</Slide>

				<Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
					<Text>Глобальний реєстр символів</Text>
					<Code textColor="secondary">const uidSymbol = Symbol.for('uid')</Code>
				</Slide>

				<Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
					<Text>Отримання всіх символьних властивостей об'єкта</Text>
					<Code textColor="secondary">Object.getOwnPropertySymbols()</Code>
				</Slide>

				<Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
					<Heading size={1}>Well known symbols</Heading>
					<Text><Link href={'https://developer.mozilla.org/uk/docs/Web/JavaScript/Reference/Global_Objects/Symbol#Well-known_symbols'}>Well known symbols - </Link> позначення внутрішніх методів рушія JS</Text>
					<Text></Text>
				</Slide>


				<Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
					<Heading size={1}>Ітератори та генератори</Heading>
				</Slide>

				<Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
					<Text>Ітератори є простими об’єктами з певним інтерфейсом для ітерування.</Text>
				</Slide>
				<Slide transition={["fade"]} bgColor="secondary" textColor="tertiary">
					<CodePane
						textSize={'20px'}
						lang={'javascript'}
						source={require('!raw-loader!./examples/iteratorExample.js')}
					/>
				</Slide>
				<Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
					<Text>Генератор - це функція що повертає ітератор</Text>
				</Slide>


				<CodeSlide
					transition={['fade']}
					lang="js"
					code={require('!raw-loader!./examples/generatorExample')}
					ranges={[
						{loc: [0, 6]},
						{loc: [7, 9]},
						{loc: [10, 13]}
					]}/>

				<Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
					<Text>Ключове слово yield може використовуватись лише всередині генераторів.</Text>
					<Text>Використання yield
						будь–де, включаючи функції всередині генераторів, призведе до синтаксичної помилки</Text>
					<CodePane
						textSize={'20px'}
						lang={'javascript'}
						source={require('!raw-loader!./examples/wrongYield')}
					/>

				</Slide>

				<Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
					<Text>return в середині ітератора встановлює done в true і value буде рівним тому що повертає
						return</Text>
				</Slide>
				<Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
					<Text>Об’єкти, що були задані розробниками, не є ітерабельними за замовчуванням, але ви можете
						зробити їх такими через створення властивості Symbol.iterator, що містить генератор.</Text>
				</Slide>

				<Slide transition={["fade"]} bgColor="secondary" textColor="tertiary">
					<Heading size={1}>Ітерабельні об`єкти</Heading>
					<Text textColor="primary">
						Це об’єкти з властивістю Symbol.iterator.
					</Text>
					<Text textColor="primary">Добревідомий символ Symbol.iterator задає функцію, що повертає ітератор
						для даного об’єкту</Text>
				</Slide>

				<CodeSlide
					transition={['fade']}
					lang="js"
					code={require('!raw-loader!./examples/ownIterable')}
					ranges={[
						{loc: [0, 8]},
						{loc: [9, 12]},
						{loc: [13, 16]},
					]}/>

				<Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
					<Text>
						Також функція next може приймати параметр, який буде використаний як значення що повернув
						попередній yield
					</Text>
				</Slide>
				<Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
					<Text>
						Посилання:
					</Text>
					<Text><Link
						href={'https://developer.mozilla.org/ru/docs/Web/JavaScript/Guide/Iterators_and_Generators'}>MDN:
						Iterators & Generators</Link></Text>

					<Text><Link
						href={'https://understandinges6.denysdovhan.com/manuscript/08-Iterators-And-Generators.html'}>Understanding
						ES6: Ітератори та генератори</Link></Text>
				</Slide>

				<Slide transition={["fade"]} bgColor="secondary" textColor="tertiary">
					<Image src={'https://media3.giphy.com/media/Lopx9eUi34rbq/giphy.gif'} width={450}
						   height={250}></Image>
					<Heading size={1}>Callbacks hell</Heading>
				</Slide>

				<Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
					<Heading size={1}>Життєвий цикл промісів</Heading>

					<List ordered start={1} type="-">
						<ListItem>pending</ListItem>
						<ListItem>fulfilled</ListItem>
						<ListItem>rejected</ListItem>
					</List>

				</Slide>

				<CodeSlide
					transition={['fade']}
					lang="js"
					code={require('!raw-loader!./examples/promises')}
					ranges={[
						{loc: [0, 7]}
					]}/>

				<Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
					<Heading size={1}>Конструктор промісів</Heading>
				</Slide>

				<Slide transition={["fade"]} bgColor="secondary" textColor="tertiary">
					<CodePane
						textSize={'20px'}
						lang={'javascript'}
						source={require('!raw-loader!./examples/newPromise.js')}
					/>
				</Slide>


				<Slide transition={["fade"]} bgColor="secondary" textColor="tertiary">
					<Heading size={3} textColor={'tertiary'}>Помилка виконавця</Heading>
					<CodePane
						textSize={'20px'}
						lang={'javascript'}
						source={require('!raw-loader!./examples/throwErrorPromise.js')}
					/>
				</Slide>

				<Slide transition={["fade"]} bgColor="secondary" textColor="tertiary">
					<Heading size={3} textColor={'tertiary'}>Ланцюжки промісів (chaining)</Heading>
				</Slide>

				<CodeSlide
					transition={['fade']}
					lang="js"
					code={require('!raw-loader!./examples/promiseChaining')}
					ranges={[
						{loc: [0, 14]},
						{loc: [16, 22]}
					]}/>


				<Slide transition={["fade"]} bgColor="secondary" textColor="tertiary">
					<Heading size={3} textColor={'tertiary'}>async / await</Heading>
				</Slide>
				<Slide transition={["fade"]} bgColor="secondary" textColor="tertiary">
					<CodePane
						textSize={'20px'}
						lang={'javascript'}
						source={require('!raw-loader!./examples/asyncAwait.js')}
					/>
				</Slide>

			</Deck>
		);
	}
}
