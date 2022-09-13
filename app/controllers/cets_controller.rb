class CetsController < ApplicationController

    def index
        render json: Cet.all
      end

      # def show
      #   if current_cet
      #     render json: cet, status: :ok
      #   else
      #     render json: { errors: "No CET Data" }, status: :unauthorized
      #   end
      # end

end
