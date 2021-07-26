<template>
    <div>
        <h1>Cash Book</h1>
        <cash-book-create-form></cash-book-create-form>
        <cash-book-table></cash-book-table>

    </div>
</template>

<script>
import CashBookTable from '@/components/CashBookTable'
import CashBookCreateForm from '@/components/CashBookCreateForm'
export default {
    components: {
        CashBookTable,
        CashBookCreateForm
    }
}
</script>

<style>

</style>