import nodemailer from "nodemailer";

var transporter=nodemailer.createTransport({
    service: "gmail",
    auth:{
        user:"waronboard2378@gmail.com",
        pass:"epxn jkac syob gndt"
    }
});

var mailOptions={
    from:"imt_2022038@iiitm.ac.in",
to:"malhotrakhushi507@gmail.com",
subject:"Sending A test Email",
html:` <!DOCTYPE html>
<html>
<head>
  <title>Request for <Recipe Name></title>
</head>
<body style="font-family: 'Poppins', sans-serif; background-color: #f7f0e3; margin: 0; padding: 0;">
  <div style="width: 80%; margin: 20px auto; background-color: #fffdd0; padding: 20px; border-radius: 5px; box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2); color: #5e4c5a;">
    <h1 style="color: #4d2600; text-align: center;">Request for <Recipe Name></h1>
    <p style="line-height: 1.6;">Dear [Cook's Name],</p>
    <p style="line-height: 1.6;">I hope this message finds you well. I wanted to inform you that someone has requested the <Recipe Name> from one of our patrons. They are eager to experience your culinary expertise with this delightful dish.</p>
    
    <div class="contact-details" style="margin-top: 20px;">
      <p style="margin-bottom: 5px;">Here are the contact details:</p>
      <p style="margin-bottom: 5px;">- <strong>Name: [Patron's Name]</strong></p>
      <p style="margin-bottom: 5px;">- <strong>Contact Number: [Phone Number]</strong></p>
      <p style="margin-bottom: 5px;">- <strong>Email Address: [Email Address]</strong></p>
    </div>
    
    <!-- Updated image link -->
    <img src="https://source.unsplash.com/600x400/?" alt="Recipe Image" style="max-width: 100%; height: auto; display: block; margin: 20px 0; border-radius: 5px; box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);">
    
    <p style="line-height: 1.6;">Your exceptional culinary skills have always delighted our guests, and I'm confident that this <Recipe Name> will be no exception. Your expertise and dedication in the kitchen continue to elevate the dining experience for everyone.</p>
    
    <p style="line-height: 1.6;">If you require any additional information or assistance in preparing this dish, please don't hesitate to reach out. We greatly appreciate your efforts in making our menu so special.</p>
    
    <p style="line-height: 1.6;">Thank you for your attention to this request. We look forward to savoring the <Recipe Name> prepared by your talented hands.</p>
    
    <p style="font-size: 14px; text-align: center; margin-top: 20px; color: #7d6608;">Best regards,<br>[Your Name]<br>[Your Position]<br>[Restaurant/Hotel Name]<br>[Contact Information]</p>
  </div>
</body>
</html>

` }

transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });