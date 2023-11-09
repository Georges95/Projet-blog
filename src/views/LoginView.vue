<script setup>
import TheInput from '@/components/TheInput.vue';
import { reactive } from 'vue';

    const form = reactive({
        email: '',
        password: '',
    })
</script>

<template>
    <div class="page page-center">
      <div class="container-tight py-4">
        <div class="text-center mb-4">
          <a href="." class="navbar-brand navbar-brand-autodark"><img src="@/assets/static/logo.svg" height="36" alt=""></a>
        </div>
        <form class="card card-md" action="." method="post">
          <div class="card-body">
            <h2 class="card-title text-center mb-4">Connexion</h2>
            
            <div class="mb-3">
                <TheInput
                v-model="form.email"
                label="Email address"
                type="email"
                />
            </div>

            <div class="mb-3">
                <TheInput
                v-model="form.password"
                label="Password"
                type="password"
                />
            </div>
            
            <div class="form-footer">
              <button type="submit" class="btn btn-primary w-100">Login</button>
            </div>
          </div>
        </form>
        <div class="text-center text-muted mt-3">
          You don't have account yet? <router-link to="/register">Register</router-link>
          
        </div>
      </div>
    </div>
</template>

<style scoped>

</style>