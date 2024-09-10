const emails = [
    {
      sender: "john.doe@example.com",
      recipient: "jane.smith@example.com",
      text: "Hey Jane, how have you been? Let's catch up soon!",
      isDraft: false
    },
    {
      sender: "jane.smith@example.com",
      recipient: "john.doe@example.com",
      text: "Hi John, I'm doing well. How about we meet next week?",
      isDraft: false
    },
    {
      sender: "boss@example.com",
      recipient: "john.doe@example.com",
      text: "John, please send me the project report by tomorrow.",
      isDraft: false
    },
    {
      sender: "newsletter@company.com",
      recipient: "jane.smith@example.com",
      text: "Check out our latest updates and offers!",
      isDraft: false
    },
    {
      sender: "john.doe@example.com",
      recipient: "support@example.com",
      text: "I'm having trouble logging into my account. Can you help?",
      isDraft: true
    },
    {
      sender: "jane.smith@example.com",
      recipient: "support@example.com",
      text: "I need assistance with my recent order.",
      isDraft: false
    },
    {
      sender: "teamlead@example.com",
      recipient: "john.doe@example.com",
      text: "John, the meeting is scheduled for tomorrow at 10 AM.",
      isDraft: false
    },
    {
      sender: "notifications@social.com",
      recipient: "jane.smith@example.com",
      text: "You have a new friend request from Mike.",
      isDraft: true
    },
    {
      sender: "john.doe@example.com",
      recipient: "jane.smith@example.com",
      text: "Don't forget about the event this weekend!",
      isDraft: false
    },
    {
      sender: "admin@example.com",
      recipient: "john.doe@example.com",
      text: "Your account has been successfully updated.",
      isDraft: false
    }
  ];

let displaymail = (mail)=>{
    let maildiv = document.createElement("div");
    let mailp = document.createElement("p");
    maildiv.className = "mail"; 
    mailp.textContent ="sender:"+ mail.sender +
    "recipient:" + mail.recipient+
    mail.text;
    maildiv.appendChild(mailp);
    return maildiv;
} 


let rendermails = (mailarr)=>{
    let emailsdiv = document.querySelector("#emails-area");
    emailsdiv.innerHTML = "";
    mailarr.forEach(element => {
        emailsdiv.appendChild(displaymail(element))
    });
}
let homepagerender = (mailarr)=>{
    rendermails(mailarr.filter((element)=>element.sender != "john.doe@example.com" && !element.isDraft))
}
homepagerender(emails)


document.querySelector("#inbox").addEventListener("click",()=>{
    homepagerender(emails)
})
document.querySelector("#sent").addEventListener("click",()=>{
    rendermails(emails.filter((element)=>element.sender == "john.doe@example.com" && !element.isDraft ))
})

document.querySelector("#drafts").addEventListener("click",()=>{
    rendermails(emails.filter((element)=> element.isDraft ))
})
document.querySelector("#add-email").addEventListener("click",()=>{    
    const formemail = document.querySelector("#new-email-form");
    formemail.style.display = "flex";
})

document.querySelector("#send").addEventListener("click",()=>{
    let nptrec = document.querySelector("#email-recipient");
    const formemail = document.querySelector("#new-email-form");
    let txtmail = document.querySelector("#email-body");
    let newemail = {
        sender :"john.doe@example.com",
        recipient : nptrec.value,
        text : txtmail.value,
        isDraft : false
    }
    emails.push(newemail);
    formemail.style.display = "none";
    rendermails(emails.filter((element)=>element.sender == "john.doe@example.com" && !element.isDraft ))  
})