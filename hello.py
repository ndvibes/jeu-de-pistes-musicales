from flask import Flask
from flask import render_template
app = Flask(__name__)


@app.route("/")
def hello():
    return render_template('hello.html')


@app.route("/game-won")
def game_won():
    return render_template('game_won.html')


if __name__ == "__main__":
    app.run()
