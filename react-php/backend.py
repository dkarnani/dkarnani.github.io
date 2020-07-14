from flask import Flask, render_template, request
from werkzeug.utils import secure_filename
from flask_cors import CORS
import machupX as MX
from shutil import copyfile
import uuid
import json
import os

app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": "*"}})

@app.route('/uploader', methods = ['GET', 'POST'])
def upload_file():
   a = str(uuid.uuid1())
   filename = a + ".json"
   filedata = a + "_data" + ".json"
   if request.method == 'POST':
      f = request.files['file']
      f.save(secure_filename(filedata))
      copyfile("traditional_input.json", filename)
      jsondata = open(filename, "r")
      json_object = json.load(jsondata)
      jsondata.close()
      json_object['scene']['aircraft']['traditional_airplane']['file'] = filedata
      jsondata = open(filename, "w")
      json.dump(json_object, jsondata)
      jsondata.close()
      my_scene = MX.Scene(filename)
      FM_results = my_scene.solve_forces()
      os.remove(filename)
      os.remove(filedata)
      return json.dumps(FM_results["traditional_airplane"]["total"], indent=4)

if __name__ == '__main__':
   app.run(debug = True)