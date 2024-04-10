export default {
    template: `
        <button 
        :class="{
            'border rounded px-5 py-2 ' : true,
            'bg-blue-200 hover:bg-blue-600' : type === 'primary',
            'bg-purple-200 hover:bg-purple-600' : type === 'secondary',
            'bg-gray-200 hover:bg-gray-600' : type === 'muted',
            'is_loading' : processing,
        }"
        :disabled="processing"
        >
            <slot />
        </button> 
    `,

    props: {
        type: {
            type: String,
            default: 'primary',
        },
        processing: {
            type: Boolean,
            default: true,
        }
    },

    
}