<template>
  <div>
      <h1>Total {{ result }}</h1>
      <table>
          <thead>
              <tr>
                  <th>ลำดับ</th>
                  <th>รายรับ</th>
                  <th>รายจ่าย</th>
                  <th>รายละเอียด</th>
                  <th>วัน เดือน ปี</th>
                  <th>แก้ไข</th>
              </tr>
          </thead>
          <tr v-for="(cash, index) in pokemons" :key="index">
              <td>{{ index +1}}</td>
              <td v-if="index != editIndex">{{cash.name.income}}</td>
              <td v-if="index == editIndex">
                  <input type="text" v-model="form.name.income">
              </td>
              <td v-if="index != editIndex">{{cash.name.expense}}</td>
              <td v-if="index == editIndex">
                   <input type="text" v-model="form.name.expense">
              </td>
              <td v-if="index != editIndex">{{cash.name.detail}}</td>
              <td v-if="index == editIndex">
                   <input type="text" v-model="form.name.detail">
              </td>
              <td v-if="index != editIndex">{{cash.date}}</td>
              <td v-if="index == editIndex">
                   <input type="text" v-model="form.date">
              </td>
              <td v-if="index != editIndex">
                  <button @click="openForm(index, cash)">Edit</button>
              </td>
              <td v-if="index == editIndex">
                  <button @click="editCashBook()">Update</button>
                  <button @click="closeForm()">Cancel</button>
              </td>
          </tr>
          <tbody>
          </tbody>
      </table>
  </div>
</template>

<script>
import CashBookStore from '@/store/CashBook'
export default {
    data(){
        return {
            pokemons: [],
            editIndex: -1,
            form: {
                name: {
                    income:'',
                    expense:'',
                    detail:''

                },
                date: ''
            }
        }
    },
    computed: {
    result: function() {
      let x = 0;
      let y = 0;
      for (let acc of this.pokemons) {
        x += parseFloat(acc.name.income);
        y += parseFloat(acc.name.expense);
      }
      return x - y;
    },
  },
    created() {
        this.fetchPokemon()
    },
    methods:{
        fetchPokemon(){
            CashBookStore.dispatch('fetchPokemon')
            this.pokemons = CashBookStore.getters.pokemons
        },
        openForm(index, cash){
            this.editIndex = index
            let cloned = JSON.parse(JSON.stringify(cash))
            this.form.name = cloned.name
            this.form.date = cloned.date.join(',')
        },
        closeForm() {
            this.editIndex = -1
            this.form = {
                name: {
                    income: '',
                    expense: '',
                    detail: '' ,
                },
                date: ''
            }
        },
        editCashBook(){
            let payload = {
                index: this.editIndex,
                name: this.form.name,
                date: this.form.date.split(', ').map(
                    (item) =>item.trim()
                ),
            }
            console.log(payload)
            CashBookStore.dispatch('editCashBook', payload)
            this.closeForm()
        }
    }
}
</script>

<style>
    table {
  border-collapse: collapse;
  width: 100%;
}

th, td {
  padding: 8px;
  text-align: left;
  border-bottom: 1px solid #ddd;
}
</style>>