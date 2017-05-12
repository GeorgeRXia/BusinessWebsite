require 'sinatra'

get '/home' do

	erb :home
end


get '/contact' do

	erb :contact
end

get '/product' do
	erb :product


end


get '/about' do
	erb :about
end