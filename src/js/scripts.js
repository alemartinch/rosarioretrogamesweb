const db = firebase.firestore();

const bt = document.getElementById("boton");

const miniPrice16 = document.getElementById("miniPrice16");

bt.addEventListener("click", () => {
  const miniPrice16 = document.getElementById("miniPrice16");
  const miniPrice32 = document.getElementById("miniPrice32");
  const miniPrice64 = document.getElementById("miniPrice64");
  const twoJoysPrice16 = document.getElementById("twoJoysPrice16");
  const twoJoysPrice32 = document.getElementById("twoJoysPrice32");
  const twoJoysPrice64 = document.getElementById("twoJoysPrice64");
  const bartopPriceSt = document.getElementById("bartopPriceSt");
  const bartopPriceXl = document.getElementById("bartopPriceXl");
  const joystickPrice = document.getElementById("joystickPrice");
  const arcadePrice = document.getElementById("arcadePrice");
  console.log(twoJoysPrice32);
  miniPrice16.innerHTML = twoJoysPrice32.value;

  arcadePrice.value = twoJoysPrice32.value;
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
});

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
