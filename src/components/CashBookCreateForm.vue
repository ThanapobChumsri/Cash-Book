<template>
  <div>
      ป้อนข้อมูล
      <div>
          <div>
              <label for="name_en">รายรับ: </label>
              <input type="text" v-model="form.name.income">
          </div>
          <div>
              <label for="name_jp">รายจ่าย: </label>
              <input type="text" v-model="form.name.expense">
          </div>
          <div>
              <label for="type">รายละเอียด </label>
              <input type="text" v-model="form.name.detail">
          </div>
          <div>
              <label for="type">วัน เดือน ปี </label>
              <input type="text" v-model="form.date">
          </div>
          <div>
              <button @click="addData">Add</button>
          </div>
      </div>
  </div>
</template>

<script>
import CashBookStore from '@/store/CashBook'
export default {
    data(){
        return {
            form:{
                name:{
                    income:'',
                    expense:'',
                    detail: ''
                },
                date: ''
            }
        }
    },
    methods:{
        clearForm(){
            this.form ={
                 name:{
                    income:'',
                    expense:'',
                    detail: ''
                },
                date: ''
            }
        },
        addData(){
            let payload = {
                name: this.form.name,
                date: this.form.date.split(',').map(
                    (item) =>item.trim()
                ),
            }
            CashBookStore.dispatch('addData', payload)
            this.clearForm()
        }
    }

}
</script>

<style>

</style>