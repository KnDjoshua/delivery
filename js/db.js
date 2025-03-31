function registerVendor(vendorData) {
    db.collection("vendors").doc(vendorData.ownerId).set(vendorData)
      .then(() => {
        window.location.href = "dashboard.html"; // Go to vendor dashboard
      })
      .catch((error) => {
        alert("Error: " + error.message);
      });
  }



  function addMenuItem(vendorId, itemData) {
    db.collection("vendors").doc(vendorId).collection("menu").add(itemData)
      .then(() => {
        alert("Menu item added!");
      })
      .catch((error) => {
        alert("Error: " + error.message);
      });
  }



  function getAllVendors(callback) {
    db.collection("vendors").get()
      .then((querySnapshot) => {
        const vendors = [];
        querySnapshot.forEach((doc) => {
          vendors.push({ id: doc.id, ...doc.data() });
        });
        callback(vendors); // Pass data to callback function
      })
      .catch((error) => {
        console.error("Error loading vendors:", error);
      });
  }