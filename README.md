# README

# Repository

This only works for rails 5.1.4 or higher. If you want to use this template for you own project you have to run in cmd `bundle install` inside project location to update de dependecies of the workflow.

This Enviroment Contains:

* Autenthication with Devise gem
* Messaging Smtp with Mailgun Support
* Cloudinary Support
* PostregSQL support with heroku add on

# Support

If you want to add more strong auth you have to add more variables to schema database into `schema.rb`. Before run `rails db:migrate` check more in [Link to Devise](https://github.com/plataformatec/devise). Use the new fields  in the form on `views/devise/sesions` or for registration `views/devise/registrations/new...`. 

If you want use you mailgun settings you have to edit the *email.rb* in `config/initializers/email.rb` and put your credentials that mailgun offers you. 

If you want to personalize your mail form you have to edit on `views/user_mailer/welcome_email.erb` go to the controllers and edit the functionalities that you want in `mailers/` 

If you want to add more stuff with cloudinary functions go to `controllers/photos_controller.erb` and edit more stuff remember wen you add resources routes in *route.rb* rails create by default the scaffolding routes. Look more cloudinary power in [link to cloudinary] (https://cloudinary.com/documentation/rails_integration#rails_getting_started_guide).

To Link your postreg database go to `config/database.yml` and put the credentials that heroku offers you or if you want to use digital ocean or another cloud make sure those credential keep the same struct

# Acknowledgment

*Eduardo Escobar  for help me to construct this enviroment

