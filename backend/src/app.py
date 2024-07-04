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

@app.route('/heirs', methods=['GET'])
def get_heirs():
    cursor = cnx.cursor(dictionary=True)
    cursor.execute("SELECT * FROM heirs")
    heirs = cursor.fetchall()
    cursor.close()
    return jsonify(heirs)

@app.route('/add-member', methods=['POST'])
def add_member():
    data = request.json
    values = (
        data['memberFormData']['pagIbigMID'],
        data['memberFormData']['occupationalStatus'],
        data['memberFormData']['membershipCategory'],
        data['memberFormData']['membershipSubCategory'],
        data['personalFormData']['fullName'],
        data['personalFormData']['fathersName'],
        data['personalFormData']['mothersName'],
        data['personalFormData']['spouseName'],
        data['personalFormData']['birthDate'],
        data['personalFormData']['birthPlace'],
        data['personalFormData']['maritalStatus'],
        data['personalFormData']['citizenship'],
        data['personalFormData']['sex'],
        float(data['personalFormData']['height']),
        int(data['personalFormData']['weight']),
        data['personalFormData']['prominentDistinguishingMarks'],
        data['personalFormData']['paymentFrequency'],
        data['personalFormData']['TIN'],
        data['personalFormData']['SSS'],
        data['personalFormData']['serialBadgeNo'],
        data['personalFormData']['divisionStationCode'],
        data['addressContactFormData']['permAddress'],
        data['addressContactFormData']['currAddress'],
        data['addressContactFormData']['mailAddress'],
        data['addressContactFormData']['homeCode'],
        data['addressContactFormData']['cellNum'],
        data['addressContactFormData']['businessDirectLine'],
        data['addressContactFormData']['businessTrunkLine'],
        data['addressContactFormData']['emailAddress'],
        data['personalFormData']['companyCode'],
    )
    cursor = cnx.cursor(dictionary=True)
    placeholders = ', '.join(['%s'] * len(values)) 
    query = f"INSERT INTO members VALUES ({placeholders})"
    cursor.execute(query, values)
    cnx.commit()
    cursor.close()
    return 'Member added successfully', 200

if __name__ == '__main__':
    app.run(debug=True)
