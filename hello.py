from flask import Flask
from flask import render_template
from flask import jsonify
from flask import request
import json
import os

APP_DIR = os.path.dirname(
    os.path.abspath(__file__)
)

app = Flask(__name__)


@app.route("/")
def hello():
    return render_template('hello.html')


@app.route("/game-won")
def game_won():
    return render_template('game_won.html')


@app.route("/state", methods=['GET', 'POST'])
def process_state():
    state_filepath = os.path.join(
        APP_DIR,
        "state.json")
    if request.method == 'GET':
        state = []
        with open(state_filepath) as f:
            state = json.load(f)
        return jsonify(state)
    else:
        new_state = request.get_json(force=True)['state']
        print(new_state)
        print(json.dumps(new_state))
        with open(state_filepath, 'w') as f:
            f.write(json.dumps(new_state))
        return jsonify(new_state)


if __name__ == "__main__":
    app.run(
        host="0.0.0.0",
        port=int("5000")
    )
