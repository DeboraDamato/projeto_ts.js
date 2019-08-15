<template>
    <div>
        <step1/>
        <step2/>
        <step3/>
        <step4/>
        <step5/>
    </div>

</template>

<script>
import step1 from './../cadPessoa/step1'
import step2 from './../cadPessoa/step2'
import step3 from './../cadPessoa/step3'
import step4 from './../cadPessoa/step4'
import step5 from './../cadPessoa/step5'



    export default {
        name: 'steps',
        components: {
        step1,
        step2,
        step3,
        step4,
        step5,
   },
}

</script>

<style lang="scss">

</style>
