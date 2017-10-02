class PhotosController < ApplicationController
    def create 
        Cloudinary::Uploader.upload(params[:file])
        flash[:notice] = "Your photo was loaded in cloudinary"
        redirect_to new_photo_path
    end
  end