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

if __name__ == '__main__':
    app.run(debug=True)
