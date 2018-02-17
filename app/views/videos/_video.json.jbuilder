json.extract! video, :id, :name, :url, :duration, :created_at, :updated_at
json.url video_url(video, format: :json)
