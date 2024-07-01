from flask import Flask, request, jsonify
import mysql.connector as my
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

# MySQL configurations
cnx = my.connect(
    host="localhost",
    user="root",
    password="mysql",
    database="pag-ibig"
)

@app.route('/members', methods=['GET'])
def get_employees():
    cursor = cnx.cursor(dictionary=True)
    cursor.execute("SELECT * FROM members")
    employees = cursor.fetchall()
    cursor.close()
    return jsonify(employees)

@app.route('/presentEmp', methods=['GET'])
def get_presentEmp():
    cursor = cnx.cursor(dictionary=True)
    cursor.execute("SELECT * FROM presentemployers")
    employers = cursor.fetchall()
    cursor.close()
    return jsonify(employers)

@app.route('/prevEmp', methods=['GET'])
def get_prevEmp():
    cursor = cnx.cursor(dictionary=True)
    cursor.execute("SELECT * FROM prevemployers")
    employers = cursor.fetchall()
    cursor.close()
    return jsonify(employers)

if __name__ == '__main__':
    app.run(debug=True)
