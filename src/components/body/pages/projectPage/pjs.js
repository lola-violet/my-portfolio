import byoBackpackImg from '../../../../images/byo_backpack.png';
import inspoJeopImg from '../../../../images/inspo-jeopardy.png';
import mongoSocialImg from '../../../../images/mongo_social_api.png';
import teamProfImg from '../../../../images/team_profile_gen.png';


const pjs = [
    {
        name: 'BYO Backpack',
        image: byoBackpackImg,
        imgalt: 'Bring Your Own Backpack Logo',
        technology: 'JavaScript, Node.js, Handlebars, MySQL, Cloudinary',
        description: 'A full-stack web application designed to provide users with a collaborative event management system.',
        applink: 'https://byo-backpack.herokuapp.com/',
        repo: 'https://github.com/lola-violet/byo-backpack'
    },
    {
        name: 'Inspirational Jeopardy',
        image: inspoJeopImg,
        imgalt: 'Inspirational Jeopardy Logo',
        technology: 'HTML, CSS, JavaScript, Third-Party API',
        description: 'A front-end group project using a combination of server-side APIs to create a Jeopardy-style trivia quiz.',
        applink: 'https://lola-violet.github.io/inspirational-jeopardy/',
        repo: 'https://github.com/lola-violet/inspirational-jeopardy'    
    },
    {
        name: 'Social Network API',
        image: mongoSocialImg,
        imgalt: 'Mongo DB Social Network API Graphic',
        technology: 'JavaScript, Node.js, MongoDB, Mongoose',
        description: 'A back-end database application modeled for a social networking site.',
        applink: null,
        repo: 'https://github.com/lola-violet/nosql-social-network-api'
    },
    {
        name: 'Team Profile Generator',
        image: teamProfImg,
        imgalt: 'Team Profile Generator Graphic',
        technology: 'JavaScript, Node.js, HTML, CSS',
        description: 'A command-line application which generates a front-end web page to manage team contacts.',
        applink: null,
        repo: 'https://github.com/lola-violet/team-profile-generator'
    }
]

export default pjs;