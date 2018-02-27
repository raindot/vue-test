<template>
  <div>
    Order
   {{this.orderId}}
   {{this.storeId}}
   
  </div>
</template>

<script>
import FirebaseManager from "@/utils/FirebaseManager";

export default {
  props: ["orderId", "storeId"],
  created() {
    FirebaseManager.database
      .ref("order")
      // .child("menus")
      .once("value")
      .then(snapshot => {
        console.log(snapshot.val());
      });
  }
};
</script>