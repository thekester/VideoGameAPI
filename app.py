from flask import Flask, render_template
from videoGame import VideoGame
import json,sys
from werkzeug.exceptions import abort

app = Flask(__name__)

def get_videoGame(videoGame_id):
    with open('templates/jeux.json') as j:
            dictData = json.load(j)
            theVideoGame=dictData[videoGame_id]
    if theVideoGame is None:
        abort(404)
    return theVideoGame

@app.route('/')
def index():
    return render_template('index.html')
def documentation():
    return render_template('documentation.html')

@app.route('/jeux.json')
def jeux():
    return render_template('jeux.json')

@app.route('/documentation')
def documentation():
    return render_template('documentation.html')

@app.route('/about')
def about():
    return render_template('about.html')

@app.route("/getVideoGamesList") #Rame trop
def getVideoGamesList():
    try:
        with open('http://127.0.0.1:5000/jeux.json') as j:
            dictData = json.load(j)
            print(type(dictData))
            videoGames=json.dumps(dictData)
        #https://codehandbook.org/working-with-json-in-python-flask/
    except:
        print ("error", sys.exc_info()[0])

    return render_template('index.html',len=len(videoGames),videoGames=videoGames)

@app.route('/id=<int:videoGame_id>')
def videoGame(videoGame_id):
    videoGame = get_videoGame(videoGame_id)
    return render_template('videoGame.html', videoGame=videoGame)

if __name__ == "__main__":
    app.run(debug = True)

    #https://www.digitalocean.com/community/tutorials/how-to-make-a-web-application-using-flask-in-python-3