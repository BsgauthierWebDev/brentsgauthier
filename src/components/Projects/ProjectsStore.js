import brewpub from '../../images/brewpub-locater-screenshot.jpg';
import kitchenCommunity from '../../images/kitchen-community-screenshot.jpg';
import makeAplanApi from '../../images/make-a-plan-api-screenshot.jpg';
import makeAplan from '../../images/make-a-plan-screenshot.jpg';

export default [
    {
        name: 'Make A Plan',
        url: 'https://make-a-plan-bsgauthierwebdev.vercel.app/',
        github: 'https://github.com/BsgauthierWebDev/make-a-plan',
        img: {makeAplan},
        skills: ['React.js', 'JavaScript', 'CSS', 'JWT'],
        summary: 'This app is designed to walk the user through all stages of a project, from the gathering of the materials to the implementation of all steps. Along the way, users can keep track of their progress by checking off items as they are acquired and steps as they are completed.'
    },

    {
        name: 'Kitchen Community',
        url: 'https://kitchen-community.vercel.app/',
        github: 'https://github.com/BsgauthierWebDev/kitchen-community',
        img: {kitchenCommunity},
        skills: ['React.js', 'JavaScript', 'CSS', 'Node.js', 'PostgreSQL'],
        summary: 'This is a user-sourced app to share recipes and kitchen hacks. Kitchen Community is designed as a space for home cooks to trade ideas without the pressure of Instagram and celebrity chefs.'
    },

    {
        name: 'Brewery Locater',
        url: 'https://bsgauthierwebdev.github.io/Brewpub-Locater-API-Project/',
        github: 'https://github.com/BsgauthierWebDev/Brewpub-Locater-API-Project',
        img: {brewpub},
        skills: ['JavaScript', 'jQuery', 'CSS'],
        summary: 'This app finds breweries and brewpubs in a user-specified search area using city and/or state. Once the list is populated, the user can select one location and the others are then sorted based on proximity to the selected location.'
    },

    {
        name: 'Make A Plan API',
        url: null,
        github: 'https://github.com/BsgauthierWebDev/make-a-plan-api',
        img: {makeAplanApi},
        skills: ['Express', 'Node.js', 'PostgreSQL', 'Knex', 'JWT'],
        summary: 'This is the API for the Make A Plan app. The API required related tables in order to store the Users, Projects, Materials and Steps information.'
    }
]