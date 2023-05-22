export default{
    setOpenstate(state){
        state.isOpen= true;
      },

      NewDoNotSendNotification(state,payload){
                state.setDonNotSendNotification =payload;
      }
}