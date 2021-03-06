require 'sinatra'
require 'sendgrid-ruby'
include SendGrid

get '/home' do

	erb :home
end


get '/contact' do
@name = params[:email]

	erb :contact
end

get '/product' do
	erb :product
end


get '/about' do
	erb :about
end



post '/toserver' do


	@name = params[:email]
	@message = params[:message]
	@subject = params[:subject]

	p @name
	from = Email.new(email: @name)
	to = Email.new(email: 'ianzolitor@gmail.com')
	subject = @subject
	content = Content.new(type: 'text/plain', value: @message)
	mail = Mail.new(from, subject, to, content)

	sg = SendGrid::API.new(api_key: ENV['SENDGRID_API_KEY'])
	response = sg.client.mail._('send').post(request_body: mail.to_json)
	puts response.status_code
	puts response.body
	puts response.headers

redirect "/contact?email=#{@name}"
# erb :contact
end
