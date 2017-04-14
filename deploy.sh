echo "Deploying donealo to heroku"
cd admin
npm install 
cd ../home
npm install 
cd ..
git add . 
git commit -m "Deploying donealo to heroku"
git push heroku master
heroku open 
echo "DONE"