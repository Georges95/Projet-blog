<script setup>
import { useUserStore } from '@/stores/user';
const user = useUserStore();

</script>

<template>
    <div>
        <h1>
            {{ user.getUser.name }}
        </h1>
</div>
    
</template>

