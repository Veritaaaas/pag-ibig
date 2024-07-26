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
        data['memberFormData'].get('pagIbigMID', ''),
        data['memberFormData'].get('occupationalStatus', ''),
        data['memberFormData'].get('membershipCategory', ''),
        data['memberFormData'].get('membershipSubCategory', ''),
        data['personalFormData'].get('fullName', ''),
        data['personalFormData'].get('fathersName', ''),
        data['personalFormData'].get('mothersName', ''),
        data['personalFormData'].get('spouseName', ''),
        data['personalFormData'].get('birthDate', ''),
        data['personalFormData'].get('birthPlace', ''),
        data['personalFormData'].get('maritalStatus', ''),
        data['personalFormData'].get('citizenship', ''),
        data['personalFormData'].get('sex', ''),
        float(data['personalFormData'].get('height', 0)),
        int(data['personalFormData'].get('weight', 0)),
        data['personalFormData'].get('prominentDistinguishingMarks', ''),
        data['personalFormData'].get('paymentFrequency', ''),
        data['personalFormData'].get('TIN', ''),
        data['personalFormData'].get('SSS', ''),
        data['personalFormData'].get('serialBadgeNo', ''),
        data['personalFormData'].get('divisionStationCode', ''),
        data['addressContactFormData'].get('permAddress', ''),
        data['addressContactFormData'].get('currAddress', ''),
        data['addressContactFormData'].get('mailAddress', ''),
        data['addressContactFormData'].get('homeCode', ''),
        data['addressContactFormData'].get('cellNum', ''),
        data['addressContactFormData'].get('businessDirectLine', ''),
        data['addressContactFormData'].get('businessTrunkLine', ''),
        data['addressContactFormData'].get('emailAddress', ''),
        data['personalFormData'].get('companyCode', ''),
    )
    
    placeholders = ', '.join(['%s'] * len(values)) 
    query = f"INSERT INTO members VALUES ({placeholders})"
    cursor.execute(query, values)
    cnx.commit()
    
    values = (
        data['personalFormData'].get('companyCode', ''),
        data['presentEmpFormData'].get('occupation', ''),
        data['presentEmpFormData'].get('employmentStatus', ''),
        data['presentEmpFormData'].get('typeofWork', ''),
        data['presentEmpFormData'].get('employer/BusinessName', ''),
        data['presentEmpFormData'].get('monthlyIncome', ''),
        data['presentEmpFormData'].get('employer/BusinessAddress', ''),
        data['presentEmpFormData'].get('officeAssignment', ''),
        data['presentEmpFormData'].get('employmentDate', None),
    )
    
    placeholders = ', '.join(['%s'] * len(values)) 
    query = f"INSERT INTO presentemployers VALUES ({placeholders})"
    cursor.execute(query, values)
    cnx.commit()
    
    for prevEmp in data['prevEmpFormData']:
        values = (
            prevEmp['prevCompCode'],
            prevEmp['employerName'],
            prevEmp['employerAddress'],
        )
        
        placeholders = ', '.join(['%s'] * len(values)) 
        query = f"INSERT INTO prevemployers VALUES ({placeholders})"
        cursor.execute(query, values)
        cnx.commit()
        
        values = (
            prevEmp['prevCompCode'],
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
            heir['heirID'],
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
    return jsonify({'message': 'Member added successfully'}), 200

@app.route('/delete-member', methods=['POST'])
def delete():
    data = request.json
    print(data)
    
    try:
        cursor = cnx.cursor(dictionary=True)
        if data['type'] == 'member':
            cursor.execute("DELETE FROM members WHERE PI_MID = %s", (data['PI_MID'],))
            cnx.commit()
            return jsonify({'message': 'Member deleted successfully'}), 200
        elif data['type'] == 'PresentEmp':
            cursor.execute("DELETE FROM presentemployers WHERE CompanyCode = %s", (data['id'],))
            cnx.commit()
            return jsonify({'message': 'Present Employer deleted successfully'}), 200
        
        elif data['type'] == 'PrevEmployment':
            cursor.execute("DELETE FROM prevemployment WHERE PrevCompCode = %s AND PI_MID = %s", (data['id'], data['PI_MID']))
            cnx.commit()
            return jsonify({'message': 'Previous Employment deleted successfully'}), 200
        elif data['type'] == 'PrevEmployer':
            cursor.execute("DELETE FROM prevemployers WHERE PrevCompCode = %s", (data['id'],))
            cnx.commit()
            return jsonify({'message': 'Previous Employer deleted successfully'}), 200
        elif data['type'] == 'Heir':
            cursor.execute("DELETE FROM heirs WHERE HeirID = %s", (data['id'],))
            cnx.commit()
            return jsonify({'message': 'Heir deleted successfully'}), 200
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
            return (jsonify({'message': 'Previous Employment updated successfully'}), 200)
        
        elif (data['type'] == 'PrevEmployer'):
            columns = [
                'PrevEmpName', 'PrevEmpAddress'
            ]
            set_clause = ', '.join([f"{col} = %s" for col in columns])
            values = tuple(data['data'][col] for col in columns) + (data['data']['PrevCompCode'],)
            cursor.execute(f"UPDATE prevemployers SET {set_clause} WHERE PrevCompCode = %s", values)
            cnx.commit()
            return (jsonify({'message': 'Previous Employer updated successfully'}), 200)
        
        elif (data['type'] == 'Heir'):
            columns = [
                'HeirName', 'HeirBirthDate', 'HeirRelationship'
            ]
            set_clause = ', '.join([f"{col} = %s" for col in columns])
            values = tuple(data['data'][col] for col in columns) + (data['data']['HeirID'],)
            cursor.execute(f"UPDATE heirs SET {set_clause} WHERE HeirID = %s", values)
            cnx.commit()
            return (jsonify({'message': 'Heir updated successfully'}), 200)
        
    finally:
        cursor.close()

@app.route('/search/<string:search>', methods=['GET'])
def search(search):
    print(search)
    cursor = cnx.cursor(dictionary=True)
    cursor.execute("SELECT * FROM members WHERE PI_MID LIKE %s", (f"%{search}%",))
    member = cursor.fetchall()

    cursor.execute("SELECT * FROM presentemployers WHERE CompanyCode LIKE %s", (member[0]['CompanyCode'],))
    emp = cursor.fetchall()
    
    cursor.execute("SELECT * FROM prevemployment WHERE PI_MID LIKE %s", (f"%{search}%",))
    prevemployment = cursor.fetchall()
    
    prevemployer = []
    
    for prevEmp in prevemployment:
        cursor.execute("SELECT * FROM prevemployers WHERE PrevCompCode LIKE %s", (prevEmp['PrevCompCode'],))
        prevemployer.append(cursor.fetchall())
        
    cursor.execute("SELECT * FROM heirs WHERE PI_MID LIKE %s", (f"%{search}%",))
    heirs = cursor.fetchall()
        

    return (jsonify({'member': member, 'emp': emp, 'prevemployment': prevemployment, 'prevemployer': prevemployer, 'heirs': heirs, 'message': 'Success'}), 200)

@app.route('/queries/<int:num>', methods=['GET'])
def queries(num):
    cursor = cnx.cursor(dictionary=True)
    print(num)
    result = None
    queries = [
        """SELECT Name FROM members
            WHERE (TIMESTAMPDIFF(year, BirthDate, CURDATE()) > 20
            AND PernAddress LIKE '%Manila%')
            OR Sex = 'Male'
            ORDER BY Name DESC;""",
        """SELECT Name, BirthPlace, CurrAddress FROM members
            WHERE  CurrAddress LIKE '%Manila%'
            AND BirthPlace LIKE '%Manila%'
            ORDER BY Name, BirthPlace DESC;""",
        """SELECT Name, PaymentFrequency FROM members
            WHERE MaritalStatus = 'Married'
            AND TIMESTAMPDIFF(year, BirthDate, CURDATE()) > 40
            OR Membership_subcategory = 'Government'
            ORDER BY Name;""",
        """SELECT PresentEmpStatus, AVG(MonthlyIncome_Total) as Average_Income FROM presentemployers
            WHERE PresentOfficeAssignment = 'Head Office'
            GROUP BY PresentEmpStatus
            HAVING Average_Income > 50000
            ORDER BY Average_Income ASC;""",
        """SELECT Occupation, MonthlyIncome_Total, COUNT(*) as Num_members FROM presentemployers
            WHERE MonthlyIncome_Total > 50000 
            GROUP BY Occupation, MonthlyIncome_Total;""",
        """SELECT Occupational_Status, Membership_category, COUNT(*) as Num_members FROM members
            WHERE TIMESTAMPDIFF(year, BirthDate, CURDATE()) > 20
            AND Sex = 'Male'AND Height > 170
            OR Sex = 'Female'
            GROUP BY Occupational_Status, Membership_category
            ORDER BY Num_members ASC;""",
        """SELECT Occupation, COUNT(Occupation) as Num_members FROM presentemployers
            WHERE TIMESTAMPDIFF(year, PresentDateEmployed, CURDATE()) > 1
            OR PresentEmpStatus = 'Contractual'
            GROUP BY Occupation
            ORDER BY Num_members, Occupation;""",
        """SELECT Membership_category, Membership_subcategory, AVG(MonthlyIncome_Total) as Average_MonthlyIncome
            FROM members m, presentemployers p
            WHERE m.CompanyCode = p.CompanyCode
            AND Membership_subcategory = 'Private'
            GROUP BY Membership_category;""",
        """SELECT Name, COUNT(*) as NumHeirs 
            FROM members m, heirs h
            WHERE m.PI_MID = h.PI_MID
            GROUP BY Name
            HAVING NumHeirs > 1
            ORDER BY NumHeirs DESC;""",
        """SELECT Name, MonthlyIncome_Total, COUNT(*) as NumEmployment
            FROM members m, presentemployers pres, prevemployment prev
            WHERE m.CompanyCode= pres.CompanyCode
            AND m.PI_MID = prev.PI_MID
            GROUP BY Name, MonthlyIncome_Total
            HAVING NumEmployment > 2
            ORDER BY MonthlyIncome_Total DESC;"""
    ]
    
    try:
        if num == 0:
            cursor.execute(queries[0])
            result = cursor.fetchall()
        elif num == 1:
            cursor.execute(queries[1])
            result = cursor.fetchall()
        elif num == 2:
            cursor.execute(queries[2])
            result = cursor.fetchall()
        elif num == 3:
            cursor.execute(queries[3])
            result = cursor.fetchall()
        elif num == 4:
            cursor.execute(queries[4])
            result = cursor.fetchall()
        elif num == 5:
            cursor.execute(queries[5])
            result = cursor.fetchall()
        elif num == 6:
            cursor.execute(queries[6])
            result = cursor.fetchall()
        elif num == 7:
            cursor.execute(queries[7])
            result = cursor.fetchall()
        elif num == 8:
            cursor.execute(queries[8])
            result = cursor.fetchall()
        elif num == 9:
            cursor.execute(queries[9])
            result = cursor.fetchall()
    finally:
        cursor.close()
        
    return jsonify(result)

if __name__ == '__main__':
    app.run(debug=True)
