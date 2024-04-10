export default {
    template: `
        <div class="flex gap-2">
            <button
                @click="$emit('update:currentTag', tag)"
                v-for="tag in tags"
                class="border rounded px-1 py-px text-xs"
                :class="{
                    'border-blue-500 text-blue-500': tag === currentTag
                }"
                >
                {{ tag }}
            </button>
        </div>
        `,

    props: {
        initialTags: Array,
        currentTag: String
    },

    // data() {
    //     return {
    //         currentTag : 'All'
    //     }
    // },

    computed: {
        tags() {
            // Print all with other tags (...) used to destructure sets and used Sets to uniquely display the same tags uniquely!
            return ['All', ...new Set(this.initialTags)];
        }
    }
}