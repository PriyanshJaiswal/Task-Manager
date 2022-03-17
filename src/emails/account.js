const sgMail=require('@sendgrid/mail');

const sendgridAPIkey="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";

sgMail.setApiKey(sendgridAPIkey);

// sgMail.send({
//     to:'priyanshjaiswal2320@gmail.com',
//     from:'priyanshjaiswal2310@gmail.com',
//     subject:'This is my first creation',
//     text:'I hope this one actually goes to you.'
// })

const sendWelcomeEmail=(email,name)=>{
    sgMail.send({
    to:email,
    from:'priyanshjaiswal2320@gmail.com',
    subject:'Thanks for joining in!',
    text:`Welcome to the app ,${name}. Let me know how you get along with the app.`
    })
}

const sendCancellationEmail=(email,name)=>{
    sgMail.send({
    to:email,
    from:'priyanshjaiswal2320@gmail.com',
    subject:'Sorry to see you go!',
    text:`Goodbye ${name}. I hope to see you back sometime soon.`
    })
}

module.exports={
    sendWelcomeEmail
}