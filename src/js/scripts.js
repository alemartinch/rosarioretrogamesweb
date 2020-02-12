  // db.collection("users")
  //   .add({
  //     first: "Ada",
  //     last: "Lovelace",
  //     born: 1815
  //   })
  //   .then(function(docRef) {
  //     console.log("Document written with ID: ", docRef.id);
  //   })
  //   .catch(function(error) {
  //     console.error("Error adding document: ", error);
  //   });

  // const mail = document.getElementById("mail").value;
  // const passw = document.getElementById("passw").value;

  // firebase
  //   .auth()
  //   .createUserWithEmailAndPassword(mail, passw)
  //   .catch(function(error) {
  //     // Handle Errors here.
  //     var errorCode = error.code;
  //     var errorMessage = error.message;
  //     console.log(errorCode);
  //     console.log(errorMessage);
  //     // ...
  //   });

  // firebase
  //   .auth()
  //   .signInWithEmailAndPassword(mail, passw)
  //   .catch(function(error) {
  //     // Handle Errors here.
  //     var errorCode = error.code;
  //     var errorMessage = error.message;
  //     console.log(errorCode);
  //     console.log(errorMessage);
  //     // ...
  //   });

$(function() {
  $("#container1").beforeAfter({
    showFullLinks: false,
    introPosition: 0.4,
    dividerColor: "#BB281F"
  });
  $("#container2").beforeAfter({
    showFullLinks: false,
    dividerColor: "#BB281F"
  });
  $("#container3").beforeAfter({
    showFullLinks: false,
    dividerColor: "#BB281F"
  });
  $("#container4").beforeAfter({
    showFullLinks: false,
    dividerColor: "#BB281F"
  });
});

// SCROLL SUAVE
// $(document).ready(function() {
//     $('a[href^="#"]').click(function() {
//       var destino = $(this.hash);
//       if (destino.length == 0) {
//         destino = $('a[name="' + this.hash.substr(1) + '"]');
//       }
//       if (destino.length == 0) {
//         destino = $('html');
//       }
//       $('html, body').animate({ scrollTop: destino.offset().top }, 500);
//       return false;
//     });
//   });
