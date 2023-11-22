<script setup>
import { useUserStore } from '@/stores/user';
const user = useUserStore();

</script>

<template>
    <div>
        <h1>
            {{ user.getUser.email }}
        </h1>
</div>
    
</template>

