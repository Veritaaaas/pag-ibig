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

@app.route('/prevEmployment', methods=['GET'])
def get_prevEmployment():
    cursor = cnx.cursor(dictionary=True)
    cursor.execute("SELECT * FROM prevemployment")
    employers = cursor.fetchall()
    cursor.close()
    return jsonify(employers)

@app.route('/prevEmployer', methods=['GET'])
def get_prevEmployer():
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
    cursor = cnx.cursor(dictionary=True)
    
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
    
    placeholders = ', '.join(['%s'] * len(values)) 
    query = f"INSERT INTO members VALUES ({placeholders})"
    cursor.execute(query, values)
    cnx.commit()
    
    values = (
        data['personalFormData']['companyCode'],
        data['presentEmpFormData']['occupation'],
        data['presentEmpFormData']['employmentStatus'],
        data['presentEmpFormData']['typeofWork'],
        data['presentEmpFormData']['employer/BusinessName'],
        data['presentEmpFormData']['monthlyIncome'],
        data['presentEmpFormData']['employer/BusinessAddress'],
        data['presentEmpFormData']['officeAssignment'],
        data['presentEmpFormData']['employmentDate'],
    )
    
    placeholders = ', '.join(['%s'] * len(values)) 
    query = f"INSERT INTO presentemployers VALUES ({placeholders})"
    cursor.execute(query, values)
    cnx.commit()
    
    for prevEmp in data['prevEmpFormData']:
        values = (
            None,
            prevEmp['employerName'],
            prevEmp['employerAddress'],
        )
        
        placeholders = ', '.join(['%s'] * len(values)) 
        query = f"INSERT INTO prevemployers VALUES ({placeholders})"
        cursor.execute(query, values)
        cnx.commit()
        
        values = (
            None,
            data['memberFormData']['pagIbigMID'],
            prevEmp['officeAssignment'],
            prevEmp['fromDate'],
            prevEmp['toDate'],
        )
        
        placeholders = ', '.join(['%s'] * len(values))
        query = f"INSERT INTO prevemployment VALUES ({placeholders})"
        cursor.execute(query, values)
        cnx.commit()
        
    for heir in data['heirFormData']:
        values = (
            None,
            data['memberFormData']['pagIbigMID'],
            heir['heirName'],
            heir['birth_date'],
            heir['relationship'],
        )
        
        placeholders = ', '.join(['%s'] * len(values))
        query = f"INSERT INTO heirs VALUES ({placeholders})"
        cursor.execute(query, values)
        cnx.commit()
    
    cursor.close()
    return 'Member added successfully', 200

@app.route('/delete-member', methods=['POST'])
def delete():
    data = request.json
    print(data)
    
    try:
        cursor = cnx.cursor(dictionary=True)
        if data['type'] == 'member':
            cursor.execute("DELETE FROM members WHERE PI_MID = %s", (data['PI_MID'],))
            cnx.commit()
            return 'Member deleted successfully', 200
        elif data['type'] == 'PresentEmp':
            cursor.execute("DELETE FROM presentemployers WHERE CompanyCode = %s", (data['id'],))
            cnx.commit()
            return 'Present Employer deleted successfully', 200
        elif data['type'] == 'PrevEmployment':
            cursor.execute("DELETE FROM prevemployment WHERE PrevCompCode = %s AND PI_MID = %s", (data['id'], data['PI_MID']))
            cnx.commit()
            return 'Previous Employer deleted successfully', 200
    finally:
        cursor.close()

@app.route('/update-member', methods=['POST'])
def update_member():
    data = request.json
    
    try:
        cursor = cnx.cursor(dictionary=True)
        if (data['type'] == 'member'):
            columns = [
                'Occupational_Status', 'Membership_category', 'Membership_subcategory',
                'Name', 'FatherName', 'MotherName', 'SpouseName', 'BirthDate',
                'BirthPlace', 'MaritalStatus', 'Citizenship', 'Sex', 'Height', 'Weight',
                'ProminentFeatures', 'PaymentFrequency', 'TIN', 'SSS', 'SerialBadge',
                'DivStationCode', 'PernAddress', 'CurrAddress', 'MailAddress',
                'HomeCode', 'CellNum', 'BusinessDirectLine', 'BusinessTrunkLine',
                'EmailAddress', 'CompanyCode'
            ]
            set_clause = ', '.join([f"{col} = %s" for col in columns])
            values = tuple(data['memberFormData'][col] for col in columns) + (data['memberFormData']['PI_MID'],)
            
            query = f"UPDATE members SET {set_clause} WHERE PI_MID = %s"
            cursor.execute(query, values)
            cnx.commit()
            return (jsonify({'message': 'Member updated successfully'}), 200)
        
        elif (data['type'] == 'PresentEmp'):
            columns = [
                'Occupation', 'PresentEmpStatus', 'OFW_TypeOfWork', 'PresentEmpName',
                'MonthlyIncome_Total', 'PresentEmpAddress', 'PresentOfficeAssignment', 'PresentDateEmployed'
            ]
            set_clause = ', '.join([f"{col} = %s" for col in columns])
            values = tuple(data['data'][col] for col in columns) + (data['data']['CompanyCode'],)
            
            query = f"UPDATE presentemployers SET {set_clause} WHERE CompanyCode = %s"
            cursor.execute(query, values)
            cnx.commit()
            return (jsonify({'message': 'Present Employer updated successfully'}), 200)
        
        elif (data['type'] == 'PrevEmployment'):
            columns = [
                'PrevEmpOfficeAssignment', 'FromDate', 'ToDate'
            ]
            set_clause = ', '.join([f"{col} = %s" for col in columns])
            values = tuple(data['data'][col] for col in columns) + (data['data']['PrevCompCode'], data['data']['PI_MID'])
            cursor.execute(f"UPDATE prevemployment SET {set_clause} WHERE PrevCompCode = %s AND PI_MID = %s", values)
            cnx.commit()
        
    finally:
        cursor.close()


if __name__ == '__main__':
    app.run(debug=True)
