<template>
    <div>
        <step1/>
        <step2/>
        <step3/>
    </div>

</template>

<script>
import step1 from './../cadEmpresa/step1'
import step2 from './../cadEmpresa/step2'
import step3 from './../cadEmpresa/step3'

    export default {
        name: 'steps',
        components: {
        step1,
        step2,
        step3,
   },
}

</script>

<style lang="scss">


</style>
