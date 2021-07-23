<template>
  <teleport to="body">
    <div class="fixed top-0 bottom-0 right-0 left-0 flex items-center justify-center bg-popup-gray" :class="{'opacity-100 z-9000':isActive, 'opacity-0 -z-1':!isActive}">
      <div class="px-4  popup center absolute w-full max-w-112.5 z-2 transform scale-25 opacity-0 transition-all duration-500 ease-in-out" :class="{'opacity-100 top-1/2 scale-100 -translate-y-1/2':isActive, '-top-full ':!isActive}">
      <div class="shadow-popup bg-white rounded-lg p-6 w-full box-border text-center ">
        <div class="icon my-1.5 w-14 h-14 text-center inline-block text-6xl opacity-100" v-html="icon">
        </div>
        <h1 class="title mt-2.5 m-1 font-Abel text-3xl">
          {{ title }}
        </h1>
        <p class="description p-1 mt-1 font-TT text-text-popup">
          {{ message }}
        </p>
<!--        <button id="dismiss-popup-btn"  class="btn solid" @click.prevent="isActive = !isActive">-->
<!--&lt;!&ndash;          <i class="fas fa-spinner fa-spin del"></i>&ndash;&gt;-->
<!--          <span class="text">Закрыть</span>-->
<!--        </button>-->

        <button class="my-3 focus:outline-none text-black font-Abel w-27.5 h-11 cursor-pointer flex-shrink-0 rounded-full uppercase font-semibold my-2.5 cursor-pointer hover:bg-none bg-120 from-medium-blue to-light-blue text-black transition duration-300 ease-in-out border-2 hover:border-black border-white" @click.prevent="isActive = !isActive">
          <!--          <i class="fas fa-spinner fa-spin del"></i>-->
          Закрыть
        </button>
<!--        <button class="my-2.5 focus:outline-none text-text-dark font-Abel w-27.5 h-12.5 cursor-pointer flex-shrink-0 rounded-full uppercase font-semibold my-2.5 cursor-pointer hover:bg-none bg-120 from-medium-blue to-light-blue text-text-dark transition duration-300 ease-in-out border-2 hover:border-text-dark border-white" @click.prevent="isActive = !isActive">-->
<!--          &lt;!&ndash;          <i class="fas fa-spinner fa-spin del"></i>&ndash;&gt;-->
<!--          Закрыть-->
<!--        </button>-->
      </div>
      </div>
      </div>

  </teleport>
</template>

<script>
export default {
  name: "Popup",
  data() {
    return {
        isActive: false,
        status: "info",
        message: "тестовое сообщение",
      header: ""
    }},
// props: {
//   active: {type: Boolean, default: false},
//   status: { type: String },
//   message: { type: String },
//   header: { type: String, default: "" },
// },
  computed: {
    // isActive(){
    //   return this.active
    // },
     title(){
       if (this.header) return this.header;
       switch(this.status){
         case "info": return "Информация";
         case "warning": return "Предупреждение";
         case "success": return "Успех!";
         case "error":
         default: return "Ошибка!";
       }
    },
    icon(){
      switch(this.status){
        case "info": return "<svg class=\"text-blue-500\" aria-hidden=\"true\" focusable=\"false\" data-prefix=\"fas\" data-icon=\"info-circle\" role=\"img\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 512 512\"><path fill=\"currentColor\" d=\"M256 8C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm0 110c23.196 0 42 18.804 42 42s-18.804 42-42 42-42-18.804-42-42 18.804-42 42-42zm56 254c0 6.627-5.373 12-12 12h-88c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h12v-64h-12c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h64c6.627 0 12 5.373 12 12v100h12c6.627 0 12 5.373 12 12v24z\" class=\"\"></path></svg>";
        case "warning": return "<svg class=\"text-popup-orange\" aria-hidden=\"true\" focusable=\"false\" data-prefix=\"fas\" data-icon=\"exclamation-triangle\" role=\"img\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 576 512\" ><path fill=\"currentColor\" d=\"M569.517 440.013C587.975 472.007 564.806 512 527.94 512H48.054c-36.937 0-59.999-40.055-41.577-71.987L246.423 23.985c18.467-32.009 64.72-31.951 83.154 0l239.94 416.028zM288 354c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z\" class=\"\"></path></svg>";
        case "success": return "<svg class=\"text-popup-green\" aria-hidden=\"true\" focusable=\"false\" data-prefix=\"fas\" data-icon=\"check-circle\" role=\"img\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 512 512\" ><path fill=\"currentColor\" d=\"M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z\" class=\"\"></path></svg>";
        case "error":
        default: return "<svg class=\"text-red-500\" aria-hidden=\"true\" focusable=\"false\" data-prefix=\"fas\" data-icon=\"times-circle\" role=\"img\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 512 512\" ><path fill=\"currentColor\" d=\"M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm121.6 313.1c4.7 4.7 4.7 12.3 0 17L338 377.6c-4.7 4.7-12.3 4.7-17 0L256 312l-65.1 65.6c-4.7 4.7-12.3 4.7-17 0L134.4 338c-4.7-4.7-4.7-12.3 0-17l65.6-65-65.6-65.1c-4.7-4.7-4.7-12.3 0-17l39.6-39.6c4.7-4.7 12.3-4.7 17 0l65 65.7 65.1-65.6c4.7-4.7 12.3-4.7 17 0l39.6 39.6c4.7 4.7 4.7 12.3 0 17L312 256l65.6 65.1z\" class=\"\"></path></svg>";
      }
    }
  },
  methods: {
    show(message, status = "warning",  header=""){
      this.status = status;
      this.message = message;
      this.header = header;
      this.isActive = true;
    }
  }
}
</script>

<style scoped>

/*.bg-modal-popup{*/
/*  visibility: hidden;*/
/*  opacity: 0;*/
/*  z-index: -1;*/

/*  position: fixed;*/
/*  top: 0;*/
/*  right: 0;*/
/*  bottom: 0;*/
/*  left: 0;*/

/*  display: flex;*/
/*  align-items: center;*/
/*  justify-content: center;*/
/*  background-color: rgba(12,13,14,0.5);*/
/*}*/

/*.popup-modal-visible{*/
/*  visibility: visible;*/
/*  opacity: 1;*/
/*  z-index: 9000;*/
/*}*/

/*.popup {*/
/*  width:450px;*/
/*  box-sizing:border-box;*/
/*  z-index:2;*/
/*  text-align:center;*/
/*  opacity:0;*/
/*  top:-200%;*/
/*  transform:scale(0.5);*/
/*  transition: opacity 300ms ease-in-out,*/
/*  top 1000ms ease-in-out,*/
/*  transform 1000ms ease-in-out;*/

/*  padding: 24px;*/
/*  border-radius: 7px;*/
/*  background-color: #FFF;*/
/*  box-shadow: 0 1px 4px rgba(0 ,0 ,0,0.09), 0 3px 8px rgba(0, 0, 0 , 0.09), 0 4px 13px rgba(0,0,0,0.13);*/

/*}*/
/*.popup.active {*/
/*  opacity:1;*/
/*  top:50%;*/
/*  transform: scale(1);*/
/*  transition: transform 300ms cubic-bezier(0.18,0.89,0.43,1.19);*/
/*}*/
/*.popup .icon {*/
/*  margin:5px 0px;*/
/*  width:50px;*/
/*  height:50px;*/
/*  text-align:center;*/
/*  display:inline-block;*/

/*}*/
/*.popup .icon {*/
/*  font-size: 3.5rem;*/
/*  color: #a1c4fd;*/
/*}*/
/*.popup .title {*/
/*  margin: 10px 5px 0px;*/
/*  font-family: Abel;*/
/*  font-size: 1.7rem;*/
/*}*/
/*.popup .description {*/

/*  padding:5px;*/
/*  margin-top: 5px;*/
/*  font-family: TT;*/
/*  color: #686666;*/
/*}*/

/*.popup .del{*/
/*  display: none;*/
/*}*/
/*.popup .fa-spin{*/
/*  color: black;*/
/*}*/
/*.popup .btn {*/
/*  font-family: Abel;*/
/*  width: 110px;*/
/*  flex-shrink: 0;*/
/*  !*background-color: #5995fd;*!*/
/*  border: none;*/
/*  outline: none;*/
/*  height: 40px;*/
/*  border-radius: 49px;*/
/*  color: #fff;*/
/*  text-transform: uppercase;*/
/*  font-weight: 600;*/
/*  cursor: pointer;*/
/*  transition: 0.5s;*/
/*  margin-bottom: 10px;*/
/*}*/
/*.popup .btn.solid{*/
/*  background: linear-gradient(120deg, #a1c4fd 0%, #c2e9fb 100%);*/
/*  color: #000;*/
/*}*/
/*.popup .btn.solid:hover,.btn.solid.load{*/
/*  !*background: var(--skyh);*!*/
/*  border: 2px solid black;*/
/*  background: none;*/

/*}*/

/*.popup > div {*/
/*  position:relative;*/
/*  top:10px;*/
/*  opacity:0;*/
/*}*/
/*.popup.active > div {*/
/*  top:0px;*/
/*  opacity:1;*/
/*}*/
/*.popup.active .icon {*/
/*  transition: all 300ms ease-in-out 250ms;*/
/*}*/
/*.popup.active .title {*/
/*  transition: all 300ms ease-in-out 300ms;*/
/*}*/
/*.popup.active .description {*/
/*  transition: all 300ms ease-in-out 350ms;*/
/*}*/
/*!*.popup.active .dismiss-btn {*!*/
/*!*  transition: all 300ms ease-in-out 400ms;*!*/
/*!*}*!*/

</style>
