echo "Deploying donealo to heroku"
npm install 
git add . 
git commit -m "Deploying donealo to heroku"
git push heroku master
heroku open 
echo "DONE"