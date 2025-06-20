from flask import Flask, render_template, request, redirect, url_for, flash, session
from flask_sqlalchemy import SQLAlchemy
from werkzeug.security import generate_password_hash, check_password_hash

app = Flask(__name__)
app.config['SECRET_KEY'] = 'your-secret-key'  # Change this to a secure secret key
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///campus_connect.db'
db = SQLAlchemy(app)

# Database Models
class Student(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password_hash = db.Column(db.String(200), nullable=False)
    courses = db.relationship('Course', secondary='student_courses')

class Course(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False)

class StudentCourse(db.Model):
    __tablename__ = 'student_courses'
    student_id = db.Column(db.Integer, db.ForeignKey('student.id'), primary_key=True)
    course_id = db.Column(db.Integer, db.ForeignKey('course.id'), primary_key=True)
    progress = db.Column(db.Integer, default=0)

class Event(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False)
    date = db.Column(db.DateTime, nullable=False)

# Routes for static pages
@app.route('/')
@app.route('/index.html')
def index():
    return render_template('index.html')

@app.route('/features.html')
def features():
    return render_template('features.html')

@app.route('/events.html')
def events():
    return render_template('events.html')

@app.route('/career.html')
def career():
    return render_template('career.html')

@app.route('/contact.html')
def contact():
    return render_template('contact.html')

# Login and dashboard routes
@app.route('/login', methods=['GET', 'POST'])
def login():
    # Redirect to dashboard if already logged in
    if 'student_id' in session:
        return redirect(url_for('dashboard'))

    if request.method == 'POST':
        email = request.form.get('email')
        password = request.form.get('password')
        
        student = Student.query.filter_by(email=email).first()
        if student and check_password_hash(student.password_hash, password):
            session['student_id'] = student.id
            flash('Login successful!', 'success')
            return redirect(url_for('dashboard'))
        else:
            flash('Invalid email or password', 'error')
            return redirect(url_for('login'))
    
    return render_template('login.html')

@app.route('/dashboard')
def dashboard():
    if 'student_id' not in session:
        flash('Please login first', 'error')
        return redirect(url_for('login'))
    
    student = Student.query.get(session['student_id'])
    courses = student.courses
    events = Event.query.all()
    
    progress_data = []
    for course in courses:
        student_course = StudentCourse.query.filter_by(
            student_id=student.id, 
            course_id=course.id
        ).first()
        progress_data.append({
            'course': course.name,
            'percentage': student_course.progress
        })
    
    return render_template('student_dashboard.html',
                         student_name=student.name,
                         courses=courses,
                         events=events,
                         progress_data=progress_data)

@app.route('/logout')
def logout():
    session.pop('student_id', None)
    flash('You have been logged out', 'success')
    return redirect(url_for('index'))

# Add some test data
def add_test_data():
    with app.app_context():
        # Create test student if not exists
        if not Student.query.filter_by(email='test@example.com').first():
            test_student = Student(
                name='Test Student',
                email='test@example.com',
                password_hash=generate_password_hash('password123')
            )
            db.session.add(test_student)
            
            # Add some test courses
            courses = [
                Course(name='Python Programming'),
                Course(name='Web Development'),
                Course(name='Data Science')
            ]
            for course in courses:
                db.session.add(course)
            
            db.session.commit()
            
            # Link courses to student
            for course in courses:
                student_course = StudentCourse(
                    student_id=test_student.id,
                    course_id=course.id,
                    progress=50
                )
                db.session.add(student_course)
            
            db.session.commit()

if __name__ == '__main__':
    with app.app_context():
        db.create_all()
        add_test_data()
    app.run(debug=True) 