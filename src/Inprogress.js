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
        "ProjectName": "Online Connect 4",
        "Date": "11/12/2022 - ",
        "Summary": "I'm currently making a 2 player connect 4 online game.",
        "Image": "https://cdn-icons-png.flaticon.com/512/1707/1707222.png",
        "Id": "00",
        "ShortDescription": ["I will be making a multiplayer connect 4 game online that has a login system to save your Win/Lose statistics.",
        "The login system will link with your google account.",
        "Users will be able to make a private game and invite their friends using a generated link.",
        "The game will have the same rules as the original connect 4."],
        "Github": "#",
        "Languages": ["React", "Javascript", "CSS", "MongoDB"],
        "Readme": "#",
        "VideoSrc": "#",
        "VideoTitle": "#",
    }
    //00
];


const Completed = [
    {
        "ProjectName": "Personal Website (This Website)",
        "Date": "10/28/2022 - 11/9/2022",
        "Summary": "Made a new personal website using React.",
        "Image": "./ReactWebsite.jpg",
        "Id": "10",
        "ShortDescription": ["Made a temporary personal website to introduce myself and showcase my work as a software developer.",
         "Video is added directly via <video> tag instead of embedded within an Iframe for better user experience with my current website design.",
         "Although the core of the website is done, I'm planning on adding more features to the website in the future.",
        ],
        "Github": "https://github.com/blam1998/react-personal-website",
        "Languages": ["React", "Javascript", "CSS"],
        "Readme": "#",
        "VideoSrc": "#",
        "VideoTitle": "Demo of Website",
    },
    {
        "ProjectName": "Discord Bot",
        "Date": "06/2022 - 06/2022",
        "Summary": "Made a multipurpose discord bot using Python, Amazon S3, Amazon Athena, and Discord API.",
        "Image": "./DiscordBot.jpg",
        "Id": "11",
        "ShortDescription": ["The Discord bot has 3 primary features: Playing audio from youtube videos, New World 'Best in Slot' calculator, and a color roulette game.",
        "The Youtube audio feature allows the user to type commands for the Bot and the Bot will respond according to the command that it was given. " +
        "The Bot can join your current channel, play an audio from Youtube, skip the audio, or leave the current channel.",
        "The 'Best in Slot' calculator is for an online game called New World. This calculator allows the user to type a command in discord chat and the " +
        "Bot will reply with the requested information.",
        "Color roulette game is a gambling system that uses fake virtual currency. The user can place a bet and choose a color to start the roulette. After the" + 
        " command is entered through discord chat, the bot will run its algorithm and tell you if you win or not. If you win your new balance will be updated to Amazon S3" + 
        " through Amazon Athena."],
        "Github": "https://github.com/blam1998/Corgi-Bot",
        "Languages": ["Python", "Amazon Athena", "Amazon S3", "SQL"],
        "Readme": "./DiscordBot.pdf",
        "VideoSrc": "./DiscordBot.mp4",
        "VideoTitle": "Demo of Music Player",
    },
    {
        "ProjectName": "Artificial Intelligent Model for 8-Tile Puzzle Game",
        "Date": "05/2021 - 06/2021",
        "Summary": "A School project made with C++ to familiarize myself with the concept of artificial intelligence.",
        "Image": "./Ai.jpg",
        "Id": "12",
        "ShortDescription": ["Applied A* path finding algorithm with different heuristics to solve the 8-tile puzzle.",
        "Applied a brute force algorithm to solve the problem and compare the differences between the artificial intelligence model and the 'bad' solution."],
        "Github": "https://github.com/blam1998/8-Tile-Puzzle",
        "Languages": ["C++"],
        "Readme": "#",
        "VideoSrc": "./8Tile.mp4",
        "VideoTitle": "Demo of 8-Tile Puzzle",
    },
    {
        "ProjectName": "Food Nutrition Search Engine",
        "Date": "07/2022 - 07/2022",
        "Summary": "Made a Food nutrition search engine that tell you the nutritional facts of the search query.",
        "Image": "./Nutrition.jpg",
        "Id": "13",
        "ShortDescription": ["The website has one search bar that allows you to type search the desired food.",
        "Once you submit your search query, the website will communicate with an online API and returns the said information.",
        "This website was made for the sole purpose of learning, so the design was quite simple."],
        "Github": "https://github.com/blam1998/Personal-Website",
        "Languages": ["Javascript", "Jquery", "Ajax", "ExpressJS","Pug", "CSS", "HTML"],
        "Readme": "#",
        "VideoSrc": "./NutritionalFact.mp4",
        "VideoTitle": "Demo of Nutritional Fact Search Engine",
    },
    {
        "ProjectName": "Exploit Linux Vulnerabilities for Root Access",
        "Date": "09/2021 - 09/2021",
        "Summary": "Used old Linux images to gain root access as a normal user.",
        "Image": "./Exploit.jpg",
        "Id": "14",
        "ShortDescription": ["Used use-after-free and list vulnerability to gain root access.",
        "View kernel properties and identify possible weaknesses and create an exploit to gain root access to a user's device.",
        "This was a school project and it is done on old Linux images, no one was hacked in the process of doing this project."],
        "Github": "#",
        "Languages": ["C++"],
        "Readme": "#",
        "VideoSrc": "#",
        "VideoTitle": "Demo of Website",
    },
    //14
]

export {Inprogress as Inprogress, Completed as Completed}