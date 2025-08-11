from flask import Flask, render_template, make_response, jsonify, request, redirect, flash, url_for
import bcrypt
import pymongo
import jwt
import datetime
from flask_cors import CORS

app = Flask(__name__)

CORS(app, resources={r"/*": {"origins": "*"}})

# MongoDB Connection
myclient = pymongo.MongoClient("mongodb://localhost:27017/")
dblist = myclient.list_database_names()

if "User" not in dblist:
    mydb = myclient["User"]
    mytable = mydb["User_data_table"]
else:
    mydb = myclient["User"]
    mytable = mydb["User_data_table"]

app.secret_key = "secretkey"
jwt_secret = "jwtsecretkey"

# Home route
@app.route("/home")

@app.route("/")
def home():
    return jsonify({"message": "Welcome to the Home Page!"})

# Register route
@app.route("/register", methods=["POST"])
def register():
    data = request.get_json()
    name = data.get("name")
    email = data.get("email")
    password = data.get("password")
    confirm_password = data.get("confirmPassword")

    if not name or not email or not password or not confirm_password:
        return make_response(jsonify({"error": "Name, Email, Password and Confirm Password are required"}), 400)
    
    if password != confirm_password:
        return make_response(jsonify({"error": "Password and ConfirmPassword do not match"}), 400)

    hashed_password = bcrypt.hashpw(password.encode("utf-8"), bcrypt.gensalt())

    if mytable.find_one({"Email": email}):
        return make_response(jsonify({"error": "Email already exists"}), 400)

    try:
        mytable.insert_one({
            "Name": name,
            "Email": email,
            "Password": hashed_password.decode("utf-8")
        })
        return make_response(jsonify({"message": "User signed up successfully"}), 201)
    except Exception as e:
        print(f"Error while inserting user data: {e}")
        return make_response(jsonify({"error": "Failed to sign up user"}), 500)

# Login route
@app.route("/login", methods=["POST"])
def login():
    data = request.get_json()
    print("jwttbhnjmk",data)
    email = data.get("email")
    password = data.get("password")

    if not email or not password:
        return make_response(jsonify({"error": "Email and Password are required"}), 400)

    user = mytable.find_one({"Email": email})
    if user:
        # Check if the password matches
        if bcrypt.checkpw(password.encode("utf-8"), user["Password"].encode("utf-8")):
            payload = {
                "email": email,
                "exp": datetime.datetime.utcnow() + datetime.timedelta(hours=24)
            }
            token = jwt.encode(payload, jwt_secret, algorithm="HS256")
            return jsonify({"message": "Logged in successfully!", "access_token": token})
        else:
            return make_response(jsonify({"error": "Incorrect password"}), 401)
    else:
        return make_response(jsonify({"error": "Email not found"}), 404)


@app.route("/protected", methods=["GET"])
def protected():
    token = request.headers.get("Authorization")
    if not token:
        return jsonify({"error": "Missing token"}), 401

    try:
        decoded = jwt.decode(token, jwt_secret, algorithms=["HS256"])
        return jsonify({"message": "Access granted", "email": decoded["email"]})
    except jwt.ExpiredSignatureError:
        return jsonify({"error": "Token has expired"}), 401
    except jwt.InvalidTokenError:
        return jsonify({"error": "Invalid token"}), 401

if __name__ == "__main__":
    app.run(debug=True)