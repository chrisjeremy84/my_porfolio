import ai from '../photo/Skills/AI.jpg'
import mobile from '../photo/Skills/mobile.jpg'
import planning from '../photo/Skills/planning.jpg'
import web from '../photo/Skills/web.jpg'
import devops from '../photo/Skills/devops.jpg'

const SkillsInfo = [ //In this file is the Skills info
    //a bit more creativity has to be added like the date, statitics values and more
{
id: 0,
image:web ,
SkillName: 'Web development',
description: 'This section mostly involve the development of websites(Front-end), which can range from single statis web page to a web application, In this section you will find tools and skills used for that pupose.',
skills : ['Web design', 'UI & UX Design', 'Graphic design'],
Tools: ['Git', 'VS code', 'Node', 'HTML', 'CSS', 'React(17.0.1)', 'Redux' ,'Bootstrap(3,4,5)', 'tailwindCSS', 'webpack']
}, {

id: 1,
image:mobile ,
SkillName: 'Mobile App development',
description: 'In this section you will find tools and skills used in the development of mobile applications, more specifically for IOS and Android.',
skills : ['Mobile UI & UX Design', 'Graphic Design'],
Tools: ['Git', 'Node', 'React Native', 'Expo']
}, {

id: 2,
image:planning,
SkillName: 'Project Design',
description: 'In this section, is a brief view of the techniques I use to prepare and maintain different projects.',
skills : ['Task managment', 'Team player', 'Quality management', 'Project Design'],
Tools: ['Github','Agile', 'Jira', 'Confluence' ,'Microsoft Outlook', 'Microsoft Teams', 'Figma', 'Framer']
}, {

id: 3,
image:ai ,
SkillName: 'Backend development',
description: 'The manipultion and security of data is important, In this section you can find a brief overview of tools used to manage data.',
skills : ['Data analysis', 'API managment', 'Deep learning', 'Data manipulation'],
Tools: ['Git', 'REST' ,'Python', 'C#', '.NET', 'Django', 'Pytorch', 'Panda', 'openCV', 'webRTC', 'mongoDB', 'sqlite3']
},{

id: 4,
image:devops ,
SkillName: 'Other',
description: 'Other skills worth mentioning.',
skills : ['Language(English & French)', 'Linux Administration','Time management', 'Critical thinking', 'Communication'],
Tools: []
}

]
export default SkillsInfo;