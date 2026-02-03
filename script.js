let main = document.getElementById("main");
let title = document.getElementById("title");
let btn = document.getElementById("btn");
let root = document.documentElement;
let fontSize = 1;
const btns = [
    document.querySelector('.nav-links a[href="#home"]'),
    document.querySelector('.nav-links a[href="#about"]'),
    document.querySelector('.nav-links a[href="#skills"]'),
    document.querySelector('.nav-links a[href="#projects"]'),
    document.querySelector('.nav-links a[href="#hobbies"]'),
    document.querySelector('.nav-links a[href="#contact"]'),
    document.querySelector('.nav-links a[href="#privacy"]')
];

for(let i = 0; i < btns.length; i++){
btns[i].addEventListener('click', () => func(i));
}

const sections = {
    0: { title: "The Life of<br>Ralph Pangan", content: "Hi, I'm <strong>Ralph Pangan</strong>! I'm a programmer and game developer exploring web, Java, and C projects. On this site, you'll find my <em>projects</em>, <em>skills</em>, and a bit about myself."},
    1: { title: "About Me", content: "Here is a short about me section. My name is Ralph Lauren Del Valle Pangan, i am 16 years old and i enjoy programming and making apps and games. I started my programming journey back in late 2024 when i started making websites for fun. This is when i discovered how much i enjoyed being creative and building my imagination into existence when people don't give me the same opportunity in real life. People call me an idiot, underestimates me and other stuffs because i am not good at school, so i started calling myself Josep Calleja whenever i'm programming because as this helps me ignore the distractions and focus on my tasks, which is why you will see on the footer Familia de Calleja :)" },
    2: { title: "Skills", content: "I am familiar with these programming languages: HTML/CSS/JS, Python, Java, C#, C, C++, x86-64 Assembly. These languages gave me knowledge about system programming and how programming languages differ from each other. I also know SQL which isn't a programming language but it is useful for making websites. Outside of programming i am also nice at Digital arts(specifically Pixel arts), i have some basketball skills, and i am also conversational in Spanish. and i also enjoy writing stories and poems."},
    3: { title: "Projects", content: "I made many projects, including: Shindo, Asset Alchemy, Yandi II, Golden Pages, BlessPad, ShellShocked, ect... some of them could be at my github repository"},
    4: { title: "Hobbies", content: "My hobbies are Programming, Basketball, Digital Arts and writing short fiction stories"},
    5: { title: "Contact", content: "My mom told me not to talk to strangers, sorry..."},
    6: { title: "Privacy Policy", content: "I won't steal your personal information and sell it to advertisers in china trust."}
};

function func(i){
    title.innerHTML = sections[i].title;
    main.innerHTML = sections[i].content;
}


let fontSizes = ['24px', '48px', '72px'];


btn.addEventListener('click', () => {
    if(fontSize == 1){
        fontSize = 2;
        root.style.setProperty('--font', fontSizes[fontSize]);
        btn.innerHTML = 'Large';
    }
    else if(fontSize == 2){
        fontSize = 0;
        root.style.setProperty('--font', fontSizes[fontSize]);
        btn.innerHTML = 'Small';
    }
    else{
        fontSize = 1;
        root.style.setProperty('--font', fontSizes[fontSize]);
        btn.innerHTML = 'Medium';
    }
});