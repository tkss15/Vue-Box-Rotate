let vm = Vue.createApp({
    data(){
        return {
            perspective: 100,
            rotateX: 180,
            rotateY: 180,
            rotateZ: 180,
        }
    },
    methods: {
        resetbox()
        {
            this.perspective = 100;
            this.rotateX = 180;
            this.rotateY = 180;
            this.rotateZ = 180;
        },
        copytoclip()
        {
            console.log('hey its working')
            navigator.clipboard.writeText(`${this.getPerspective}\n${this.getRotate3D}`);
        }
    },
    computed: {
        getPerspective() {
            return `perspective: ${this.perspective}px`;
        },
        getRotate3D() {
            return `transform: rotateX(${this.rotateX}deg) rotateY(${this.rotateY}deg) rotateZ(${this.rotateZ}deg)`
        },      
    },
}).mount('#app');

