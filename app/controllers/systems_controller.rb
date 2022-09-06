class SystemsController < ApplicationController

    def index 
        render json: System.all
    end
end
