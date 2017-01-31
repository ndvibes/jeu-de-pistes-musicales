from flask import Flask
from flask import render_template
import json
import os


app = Flask(__name__)


@app.route("/")
def hello():
    message = "Hello !"
    return render_template(
        'hello.html',
        message=message)


@app.route("/game-won")
def game_won():
    message = "You won !"
    return render_template('game_won.html', message=message)


if __name__ == "__main__":
    app.run()
