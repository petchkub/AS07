import { ref } from "vue";
import { defineStore } from "pinia";

export const useCourseStore = defineStore('Course', ()=>{
    const allcourse = ref([]);

    const addcourse = (cn,cc,ds,hr,inst) => {
        const cnt = {
            coursename:cn,
            coursecode:cc,
            description:ds,
            hours:hr,
            instructor:inst,
        };
        allcourse.value.push(cnt);
    };

    const dropcourse = (n) =>{
        allcourse.value.splice(n,1)
    };

    return {allcourse,addcourse,dropcourse};
});