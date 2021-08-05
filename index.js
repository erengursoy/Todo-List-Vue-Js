
new Vue({
  el: "#app",
  data: {
    task: "",
    taskList: [],
    error:'',
    isTrue:false,
    

  },
  methods: {
    ekle: function () {
      if (!this.task) {
        this.error = 'Please enter your name'
        return;
      }

      else {

        this.taskList.push({ 'name': this.task });
        console.log(this.taskList);
        this.task = '';

      }

    },
    allDelete(){
      
      this.taskList=[];
      
    },
    deleteBy (item) {
      this.taskList.splice(this.taskList.indexOf(item),1);
    },
    toggleActive: function(item) {
      if(item.active=="undefined"){
      item.active!=false
      }
      
      console.log(item.active)
    	item.active = !item.active;
      console.log(item);
    },
    

  },
  
  
 



})












