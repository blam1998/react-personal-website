/*
        "ProjectName": "template",
        "Date": "template",
        "Summary": "template",
        "Image": "./test.jpg",
        "Id": "template1",
        "ShortDescription": ["template2"]
*/

const Inprogress = [
    {
        "ProjectName": "Personal Website (React)",
        "Date": "10/28/2022 - 11/3/2022",
        "Summary": "Made a new personal website using React.",
        "Image": "./test.jpg",
        "Id": "00",
        "ShortDescription": ["Made a personal website to showcase my work as a software developer.",
         "Although the core of the website is done, I'm planning on adding more to the website in the future, which is why it's still in this section.",
        ]
    }
];


const Completed = [
    {
        "ProjectName": "Discord Bot",
        "Date": "06/2022 - 06/2022",
        "Summary": "Made a multipurpose discord bot using Python, Amazon S3, Amazon Athena, and Discord API.",
        "Image": "./DiscordBot.jpg",
        "Id": "10",
        "ShortDescription": ["The Discord bot has 3 primary features: Playing audio from youtube videos, New World 'Best in Slot' calculator, and a color roulette game.",
        "The Youtube audio feature allows the user to type commands for the Bot and the Bot will respond according to the command that it was given. " +
        "The Bot can join your current channel, play an audio from Youtube, skip the audio, or leave the current channel.",
        "The 'Best in Slot' calculator is for an online game called New World. This calculator allows the user to type a command in discord chat and the " +
        "Bot will reply with the requested information.",
        "Color roulette game is a gambling system that uses fake virtual currency. The user can place a bet and choose a color to start the roulette. After the" + 
        " command is entered through discord chat, the bot will run its algorithm and tell you if you win or not. If you win it will update your data to Amazon S3" + 
        " through Amazon Athena."]
    },
    {
        "ProjectName": "Food Nutrition Search Engine",
        "Date": "07/2022 - 07/2022",
        "Summary": "Made a Food nutrition search engine that tell you the nutritional facts of the search query. This website was created using HTML, CSS, Node.js, Jquery, and Ajax.",
        "Image": "./Nutrition.jpg",
        "Id": "11",
        "ShortDescription": ["The website has one search bar that allows you to type search the desired food.",
        "Once you submit your search query, the website will communicate with an online API and returns the said information.",
        "This website was made for the sole purpose of learning, so the design was quite simple."]
    },
    {
        "ProjectName": "Personal Website (Old)",
        "Date": "07/2022 - 07/2022",
        "Summary": "Made a personal website to showcase my experience as a software developer. This website was created using HTML, CSS, Node.js, Jquery, and Ajax.",
        "Image": "./OldWebsite.jpg",
        "Id": "12",
        "ShortDescription": ["This website was made in conjunction with the Food Nutrition Search Engine.",
        "The purpose of making this website was to learn HTML, CSS and other frameworks.",
        "The website contains a section that displays my past projects.",
        "The website contains a section that displays my skills and my social media links."]
    },
    {
        "ProjectName": "Exploit Linux Vulnerabilities for Root Access",
        "Date": "09/2021 - 09/2021",
        "Summary": "Used old Linux images to gain root access as a normal user.",
        "Image": "./Exploit.jpg",
        "Id": "13",
        "ShortDescription": ["Used use-after-free and list vulnerability to gain root access.",
        "View kernel properties and identify possible weaknesses and create an exploit to gain root access to a user's device.",
        "This was a school project and it is done on old Linux images, no one was hacked in the process of doing this project."]
    },
    {
        "ProjectName": "Artificial Intelligent Model for 8-Tile Puzzle Game",
        "Date": "05/2021 - 06/2021",
        "Summary": "A School project made with C++ to familiarize myself with the concept of artificial intelligence.",
        "Image": "./Ai.jpg",
        "Id": "14",
        "ShortDescription": ["Applied A* path finding algorithm with different heuristics to solve the 8-tile puzzle.",
        "Applied a brute force algorithm to solve the problem and compare the differences between the artificial intelligence model and the 'bad' solution."]
    },
    {
        "ProjectName": "Mini-Language interpreter (Bison)",
        "Date": "09/2020 - 01/2020",
        "Summary": "Created a lexical analyzer, syntax parser, and run-time code interpreter to read in mini-language files and convert to mini-language intermediate code.",
        "Image": "./Bison.jpg",
        "Id": "15",
        "ShortDescription": ["Created a Lexical Analyzer to ﬁlter out invalid variable declarations.",
        "Used regex to ﬁlter out invalid syntax from given mini-language ﬁle.",
        "Used Bison to create a parser to check for grammatical errors within the mini-language ﬁle.",
        "Used the syntactically correct grammar mini-language ﬁle and translated it into intermediate code, which was then given to"+
        "mini-language compiler to produce its output.",
        "This project was a school project and was created using C++."]
    }
]

export {Inprogress as Inprogress, Completed as Completed}