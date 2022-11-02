from datetime import date
from flask import Blueprint, current_app, redirect, render_template
from flask import Blueprint, render_template, request, flash, jsonify
from flask_login import login_required, current_user
from .models import Note
from . import db
views = Blueprint('views', __name__)
import json
import requests


api_key = "5b101d50a4a8b0a8d7de8b42e62f76d7"
lat = "47.740082"
lon = "-121.983292"
url = "https://api.openweathermap.org/data/2.5/onecall?lat=%s&lon=%s&appid=%s&units=metric" % (lat, lon, api_key)


#Creates New Page, With url defined in views.route, when going to the url the home() function runs
@views.route('/', methods=['GET', 'POST'])
@login_required
def home():

    """ 
    response = requests.get(url)
    data = json.loads(response.text)
    temp = data["current"]["temp"]
    print(temp)
    x"""     
    
    if request.method == 'POST':
        
        note = request.form.get('note') 
        date1 = request.form.get('date')
        body1 = request.form.get('body')
        checked = request.form.get('remember')

        selected = bool(checked)
    
        if len(note) < 1:
            flash('Note  is too short!', category='error')
        else:
            new_note = Note(body = body1, date = date1, data=note, remember=selected, user_id=current_user.id)
            db.session.add(new_note)
            db.session.commit()




    return render_template("home.html", user=current_user)

       

@views.route('/delete-note', methods=['POST'])
def delete_note():
    note = json.loads(request.data)
    noteId = note['noteId']
    note = Note.query.get(noteId)
    if note:
        if note.user_id == current_user.id:
            db.session.delete(note)
            db.session.commit()
    return jsonify({})


@views.route('/sort', methods=['POST'])
def sort():
    sort = request.form.get('sort', type=str)
    if(sort == "True"):
        sort = True
    elif (sort == "False"):
        sort = False
    else:
        sort = None
    
    return render_template("home.html", user=current_user, sort=sort)

