<template>
  <div>
    Order
   
  </div>
</template>

<script>
import FirebaseManager from "@/utils/FirebaseManager";

export default {
  created() {
    FirebaseManager.database
      .ref("order")
      .once("value")
      .then(snapshot => {
        console.log(snapshot.val());
      });
  }
};
</script>