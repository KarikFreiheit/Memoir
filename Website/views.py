from datetime import date
from flask import Blueprint, current_app, render_template
from flask import Blueprint, render_template, request, flash, jsonify
from flask_login import login_required, current_user
from .models import Note
from . import db
views = Blueprint('views', __name__)
import json

#Creates New Page, With url defined in views.route, when going to the url the home() function runs
@views.route('/', methods=['GET', 'POST'])
@login_required
def home():
    if request.method == 'POST':
        note = request.form.get('note') 
        date1 = request.form.get('date')
        body1 = request.form.get('body')

        if len(note) < 1:
            flash('Note  is too short!', category='error')
        else:
            new_note = Note(body = body1, date = date1, data=note, user_id=current_user.id)
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



