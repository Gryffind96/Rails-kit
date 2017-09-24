ActionMailer::Base.delivery_method = :smtp
ActionMailer::Base.smtp_settings = {
    :authentication => :plain,
    :address => "smtp.mailgun.org",
    :port => 587,
    :domain => "sandboxd1095956e8224e98a3f1fef215c2f485.mailgun.org",
    :user_name => "postmaster@sandboxd1095956e8224e98a3f1fef215c2f485.mailgun.org",
    :password => "1e5d19cfc45705ed4e6c54d89baa3f48"
  }