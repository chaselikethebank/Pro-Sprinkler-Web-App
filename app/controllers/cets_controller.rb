class CetsController < ApplicationController

    def index
        render json: Cet.all
      end

end
