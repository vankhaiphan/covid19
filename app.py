import sys
import requests
from flask import Flask, jsonify, render_template, request
from flask_flatpages import FlatPages
from flask_frozen import Freezer

import numpy as np
import matplotlib.pyplot as plt 

app = Flask(__name__)
pages = FlatPages(app)
freezer = Freezer(app)

@app.route("/")
def index():  
    # return render_template("index.html")
    return '<h1>Chay duoc khong day</h1>'

@app.route("/info", methods=["POST"])
def info():
    res = requests.get("https://code.junookyo.xyz/api/ncov-moh/")
    if res.status_code != 200:
        return jsonify({"success": False})
    data = res.json()
    if "global" not in data["data"] or "vietnam" not in data["data"]:
        return jsonify({"success": False}) 
    return jsonify(data)

if __name__ == "__main__":
    if len(sys.argv) > 1 and sys.argv[1] == "build":
        freezer.freeze()
    else:
        app.run(debug=True)    