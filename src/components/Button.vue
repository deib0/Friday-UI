<template>
    <div>        
        <button :class="`them-${theme}`">
            <slot/>
        </button>
    </div>
</template>

<script lang="ts">
export default {
    props:{theme:{type:String,
    default:'button'
    }},
    name:"Button",
    setup(props) {
        const x =undefined
        return {x}
    }
}
</script>
