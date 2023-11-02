const randomColor = () => {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
    const color = `rgb( ${red}, ${green}, ${blue} )`;
    return color;
}
const UserAccount = [
    {
        name: 'Vaishnavi dhage',
        email: 'vaishnavi@gmail.com',
        status: 'LoggedIn',
        color : randomColor(),
    }
];
const ContactContent = [
    
    {
        color : randomColor(),
        name : 'Vaishnavi Dhage',
        interest : 'Interested',
        event : 'Followup call @ Tommorow, 10:00 AM',
        time : 'Today, 6:14 PM',
        contact : 9422686346,
    },
    {
        color : randomColor(),
        name : 'Sakshi Donadkar',
        interest : 'Interested',
        event : 'Followup call @ Tommorow, 10:00 AM',
        time : 'Today, 6:14 PM',
        contact : 9422686346,
    },
    {
        color : randomColor(),
        name : 'Varun Sharma',
        interest : 'Interested',
        event : 'Followup call @ Tommorow, 10:00 AM',
        time : 'Today, 6:14 PM',
        contact : 9422686346,
    },
    {
        color : randomColor(),
        name : 'Viplao Itankar',
        interest : 'Interested',
        event : 'Followup call @ Tommorow, 10:00 AM',
        time : 'Today, 6:14 PM',
        contact : 9422686346,
    },
    {
        color : randomColor(),
        name : 'Yash Chhenniya',
        interest : 'Interested',
        event : 'Followup call @ Tommorow, 10:00 AM',
        time : 'Today, 6:14 PM',
        contact : 9422686346,
    },
    {
        color : randomColor(),
        name : 'Yash Kawle',
        interest : 'Interested',
        event : 'Followup call @ Tommorow, 10:00 AM',
        time : 'Today, 6:14 PM',
        contact : 9422686346,
    },
];

export {ContactContent, UserAccount}