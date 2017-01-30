from flask import Flask
app = Flask(__name__)


@app.route("/")
def hello():
    return "Jeu de pistes musicales !"


@app.route("/game-won")
def game_won():
    return "Game won !"


if __name__ == "__main__":
    app.run()
