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
        "Summary": "Made a personal website using React.",
        "Image": "./test.jpg",
        "Id": "00",
        "ShortDescription": ["Made a personal website to showcase my work as a software developer.",
         "Although the core of the website is done, I'm planning on adding more to the website in the future, which is why it's still in this section.",
        ]
    },
    {
        "ProjectName": "template",
        "Date": "template",
        "Summary": "template",
        "Image": "./test2.jpg",
        "Id": "01",
        "ShortDescription": ["template2"]
    }
];


const Completed = [
    {
        "ProjectName": "Discord Bot",
        "Date": "06/2022 - 06/2022",
        "Summary": "Made a multipurpose discord bot using Python, Amazon S3, Amazon Athena, and Discord API.",
        "Image": "./test3.jpg",
        "Id": "10",
        "ShortDescription": ["The Discord bot has 3 primary features: Playing audio from youtube videos, New World 'Best in Slot' calculator, and a color roulette game.",
        "The Youtube audio feature allows the user to type commands for the Bot and the Bot will respond according to the command that it was given. " +
        "The Bot can join your current channel, play an audio from Youtube, skip the audio, or leave the current channel.",
        "The 'Best in Slot' calculator is for an online game called New World. This calculator allows the user to type a command in discord chat and the " +
        "Bot will reply with the requested information."    ]
    },
]

export {Inprogress as Inprogress, Completed as Completed}