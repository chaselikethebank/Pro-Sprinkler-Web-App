class SessionsController < ApplicationController

 

    # POST '/login'
    def create
      user = User.find_by(email: params[:email])
      if user&.authenticate(params[:password])
        session[:user_id] = user.id
        render json: user, status: :ok
      else
        render json: { errors: 'Invalid credentials' }, status: :unauthorized
      end
    end
  
    # DELETE '/logout'
    def destroy
      byebug
      current_user = User.find_by(id: session[:user_id])
      if current_user
        session.clear
      else
        render json: { errors: "No active session" }, status: :unauthorized
      end
    end
  
  
  end
  