export default {
    template: `
    <form @submit.prevent="add">
        <div class="border border-gray-600 text-black flex mt-4">
            <input v-model="newAssignment" placeholder="New Assignment..." class="p-2  w-full" />
            <button type="submit" class="bg-white p-2 border-l">Add</button>
        </div>
    </form>   
    `,
    props: {
        assignments: Array
    },

    data() {
        return {
            newAssignment: ''
        }
    },

    methods: {
        add() {
            // e.preventDefault();
            // alert(this.newAssignment);
            this.$emit('add', this.newAssignment);

            this.newAssignment = '';
        }
    },
}