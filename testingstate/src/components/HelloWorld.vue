<template>
  <button
    type="button"
    class="btn btn-primary"
    data-bs-toggle="modal"
    data-bs-target="#exampleModal"
  >
    Launch demo modal
  </button>

  <div
    class="modal fade"
    id="exampleModal"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="exampleModalLabel">
            Select Contacts options
          </h1>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <h2>hey</h2>
          <div>
            <div>
              <h1>lsit :{{ contactInfo }}</h1>
            </div>
          </div>
          <div class="form-check">
            <input
              class="form-check-input"
              type="checkbox"
              value="value01"
              name="tx1"
              v-model="contactInfo"
              id="flexCheckDefault"
            />
            <label class="form-check-label" for="flexCheckDefault">
              214-333-4564
            </label>
          </div>
          <div class="form-check">
            <input
              class="form-check-input"
              type="checkbox"
              value="DoNotSend"
              name="tx1"
              v-model="contactInfo"
              id="flexCheckDefault"
            />
            <label class="form-check-label" for="flexCheckChecked">
              Do not send alerts notifications
            </label>
          </div>
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-secondary"
            data-bs-dismiss="modal"
          >
            Close
          </button>
          <button
            type="button"
            class="btn btn-primary"
            @click="checkAlertsInfo()"
          >
            Save changes
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import areyousure from "./areyousure.vue";
import loader from "./loader.vue";

export default {
  name: "HelloWorld",
  props: ["test"],
  data() {
    return {
      contactInfo: [],
      DoNotSendNotification: this.$store.state.DoNotSendNotification,
      checkAlertsClicked:false,
    };
  },
  components: {
    areyousure,
    loader,
  },
  computed: {
    openState() {
      return $store.state.isOpen;
    },
    
  },
  created(){
console.log(this.DoNotSendNotification)
  },
  methods: {
    getInfor() {
      if (!this.openState) {
        this.$store.commit("setOpenstate");
      }
    },
    checkAlertsInfo() {
    
      const deafultcheckval = "DoNotSend";
      const selectedVal = document
        .getElementsByName("tx1")
        .forEach((selected) => {
          if (selected.checked) {
            //console.log(selected.value);

            if (selected.value == deafultcheckval) {
              console.log("the value entered matches out value");
              this.$store.dispatch('setDonNotSendNotification',true);
              this.checkAlertsClicked=true;
            }
          }
        });
     
     

    }
  },
  watch:{

  
  }
};
</script>

<style scoped></style>
