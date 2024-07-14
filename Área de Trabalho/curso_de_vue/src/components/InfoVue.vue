<template>
    <div>
        <p v-if="esta_trabalhando"> Sou do job. </p>
        <p v-else> Quero ser do job. </p>
        <p> Atualmente estou estudando: </p>
        <details>
            <summary>Back-End</summary>
            <ul>
                <li v-for="backend in backends" :key="backend.id"> {{ backend.language }} </li>
            </ul>
        </details>
        <details>
            <summary>Front-End</summary>
            <ul>
                <li v-for="frontend in frontends" :key="frontend.id"> {{ frontend.language }} </li>
            </ul>
        </details>
        <div>
            <button @click="showEmail">{{ textoBotao }}</button>
        </div>
        <p v-show="mostrar_email"> Enviar email do job para: {{ email }} </p>
        <p> Acesse meu GitHub: <a :href="meu_github">clique aqui</a> </p>
    </div>
    <PictureVue />
</template>

<script>
import PictureVue from './PictureVue.vue';

export default {
    name: 'InfoVue',
    components: {
        PictureVue
    },
    data() {
        return{
            esta_trabalhando: false,
            mostrar_email: false,
            email: 'allanqueiroz.eng@gmail.com',
            meu_github: 'https://github.com/mallan007'  ,
            textoBotao: 'Mostrar e-mail',
            frontends: [
                {id: 1, language: 'JavaScript'}, {id: 2, language: 'Typescript'}, {id: 3, language: 'HTML 5'}, {id: 4, language: 'CSS 3'}, {id: 5, language: 'Tailwind'}
            ],
            backends: [
                { id: 1, language: 'C'}, {id: 2, language: 'C++'}, {id: 3, language: 'Java'}
            ]
        }
    },
    methods:{
        showEmail(){
            this.mostrar_email = !this.mostrar_email
            if (this.mostrar_email == false){
                this.textoBotao = 'Mostrar e-mail'
            } else{
                this.textoBotao = 'Esconder e-mail'
            }
        } 
    }
}
</script>
<style>

</style>