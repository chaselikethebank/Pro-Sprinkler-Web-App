class UsersController < ApplicationController
  skip_before_action :authorized


    def index
      render json: User.all
    end
  #add stuf fhere 
  
    # GET '/me'
    def show
      user = User.find_by(id: params[:id])
      if user
        render json: user, serializer: UserSerializer
      else
        render json: { error: "Not authorized" }, status: :unauthorized
      end
    end
  
    # POST '/signup'
    def create
      user = User.create(user_params)
      if user.valid?(params[:password])
        session[:user_id] = user.id
        render json: user, status: :created
      else
        render json: { errors: user.errors.full_messages }, status: :unprocessable_entity
      end
    end

    def delete
      user = User.destroy!(user_params)
      session[:user_id] = user.id
      render json: user, status: :created
    end
  
    private
  
    def user_params
      params.permit(:cet, :email, :password)
    end
  end
  