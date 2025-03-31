function signUp(email, password, isVendor = false) {
    auth.createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // Add user to Firestore 'users' collection
        db.collection("users").doc(userCredential.user.uid).set({
          email: email,
          isVendor: isVendor, // false = customer, true = vendor
          createdAt: firebase.firestore.FieldValue.serverTimestamp()
        });
  
        if (isVendor) {
          window.location.href = "/vendor/register.html"; // Vendor completes profile
        } else {
          window.location.href = "/customer/menu.html";   // Customer goes to menu
        }
      })
      .catch((error) => {
        alert("Error: " + error.message);
      });
  }


  function signIn(email, password) {
    auth.signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // Check if user is a vendor
        db.collection("users").doc(userCredential.user.uid).get()
          .then((doc) => {
            if (doc.exists && doc.data().isVendor) {
              window.location.href = "/vendor/dashboard.html"; // Vendor dashboard
            } else {
              window.location.href = "/customer/menu.html";    // Customer menu
            }
          });
      })
      .catch((error) => {
        alert("Error: " + error.message);
      });
  }


  function signOut() {
    auth.signOut().then(() => {
      window.location.href = "/index.html"; // Redirect to homepage
    });
  }