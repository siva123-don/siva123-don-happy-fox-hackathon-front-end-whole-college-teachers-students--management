import { initializeApp } from "firebase/app";
import { getFirestore, doc, setDoc, getDoc } from "firebase/firestore";
import { getAuth, signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";

// 🔹 Firebase Config
const firebaseConfig = {
  apiKey: "AIzaSyCwjmYgFRe3i-6uEysNVDYbk2xe-OeNKjg",
  authDomain: "acadex-efefa.firebaseapp.com",
  projectId: "acadex-efefa",
  storageBucket: "acadex-efefa.appspot.com",
  messagingSenderId: "175625880958",
  appId: "1:175625880958:web:9a054de3dc728be171df2f",
  measurementId: "G-SWV87SZ17V",
};

// 🔹 Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

/**
 * 🔹 Store logged-in user in Firestore
 * Ensures role is saved and prevents overwriting existing data
 */
async function storeUserInFirestore(user) {
  try {
    const userRef = doc(db, "users", user.uid);
    await setDoc(
      userRef,
      {
        email: user.email,
        uid: user.uid,
        role: localStorage.getItem("userRole") || "student", // Default to student if not set
        timestamp: new Date(),
      },
      { merge: true } // 🔹 Updates user without overwriting other fields
    );
    console.log("User stored successfully in Firestore!");
  } catch (error) {
    console.error("Error storing user:", error);
  }
}

/**
 * 🔹 Handle user login with authentication and Firestore storage
 */
function handleLogin(email, password) {
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      alert("Login Successful");

      // 🔹 Store user in Firestore after login
      storeUserInFirestore(user);

      // 🔹 Redirect based on stored role
      const selectedRole = localStorage.getItem("userRole");
      if (selectedRole === "teacher") {
        window.location.href = "teacher-dashboard.html";
      } else {
        window.location.href = "student-dashboard.html";
      }
    })
    .catch((error) => {
      alert("Login Failed: " + error.message);
      console.error("Login Error:", error);
    });
}

/**
 * 🔹 Update student details in Firestore
 */
async function updateStudentDetails() {
  const name = document.getElementById("name").value;
  const studentClass = document.getElementById("class").value;
  const cgpa = document.getElementById("cgpa").value;
  const teacherName = document.getElementById("teacherName").value;

  try {
    await setDoc(doc(db, "students", "student1"), {
      name,
      class: studentClass,
      cgpa,
      teacherName,
    });
    alert("Details updated successfully!");
    loadStudentDetails(); // Reload after update
  } catch (error) {
    console.error("Error updating details: ", error);
  }
}

/**
 * 🔹 Load student details from Firestore
 */
async function loadStudentDetails() {
  const studentRef = doc(db, "students", "student1");
  const studentSnap = await getDoc(studentRef);

  if (studentSnap.exists()) {
    const data = studentSnap.data();
    document.getElementById("displayName").textContent = data.name || "Student";
    document.getElementById("displayCGPA").textContent = data.cgpa || "N/A";
    document.getElementById("displayClass").textContent = data.class || "N/A";
    document.getElementById("displayTeacher").textContent =
      data.teacherName || "N/A";
  } else {
    console.log("No student data found!");
  }
}

/**
 * 🔹 Automatically store every logged-in user in Firestore
 */
onAuthStateChanged(auth, (user) => {
  if (user) {
    storeUserInFirestore(user);
  }
});

export { db, auth, handleLogin, updateStudentDetails, loadStudentDetails };
