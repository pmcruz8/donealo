echo "Deploying donealo to heroku"
cd donealo/admin
npm install 
cd ../home
npm install 
git add . 
git commit -m "Deploying donealo to heroku"
git push heroku master
heroku open 
echo "DONE"