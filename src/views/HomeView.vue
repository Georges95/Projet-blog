<script setup>
import moment from 'moment';
import { ref, reactive, onMounted } from 'vue';
import { usePostStore } from '../router/post';
import { storeToRefs } from 'pinia';

const store = usePostStore();
const { posts, loadind, error, posts_count } = storeToRefs(store);
const { getPosts } = store;
getPosts();



</script>

<template>
   <div class="page-wrapper">
        <div class="container-xl">
          <!-- Page title -->
          <div class="page-header d-print-none">
            <div class="row g-2 align-items-center">
              <div class="col">
                <h2 class="page-title">
                  Gallery
                </h2>
                <div class="text-muted mt-1">1-12 of 241 photos</div>
              </div>
              <!-- Page title actions -->
              <div class="col-12 col-md-auto ms-auto d-print-none">
                <div class="d-flex">
                  <div class="me-3">
                    <div class="input-icon">
                      <input type="text" value="" class="form-control" placeholder="Search…">
                      <span class="input-icon-addon">
                        <!-- Download SVG icon from http://tabler-icons.io/i/search -->
                        <svg xmlns="http://www.w3.org/2000/svg" class="icon" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><circle cx="10" cy="10" r="7" /><line x1="21" y1="21" x2="15" y2="15" /></svg>
                      </span>
                    </div>
                  </div>
                  <a href="#" class="btn btn-primary">
                    <!-- Download SVG icon from http://tabler-icons.io/i/plus -->
                    <svg xmlns="http://www.w3.org/2000/svg" class="icon" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><line x1="12" y1="5" x2="12" y2="19" /><line x1="5" y1="12" x2="19" y2="12" /></svg>
                    Add event
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="page-body">
          <div class="container-xl">
            <div class="row row-cards">

              <p v-if="loading">Chargement des posts... </p>
              <p v-if="error"> {{ error.message }} </p>

            
              <div 
              v-if="posts.length"  v-for="post in posts" :key="post.id"
              
              class="col-sm-6 col-lg-4">
                <div class="card card-sm">
                  
                  <a href="#" class="d-block">
                    <img :src="post.photo.thumbnail_url" :alt="post.title" class="card-img-top">
                  </a>
                  
                  <div class="card-body">
                    <div class="d-flex align-items-center">
                      <span v-if="post.user?.avatar?.length" 
                      class="avatar me-3 rounded" 
                      :style="{ backgroundImage: 'url('+post.user.avatar.thumbnail_url+ ') '}">
                      </span>
                      <div>
                        <div>{{ post.user.name }}</div>
                        <div class="text-muted">
                          {{ moment(post.created_at).fromNow() }}
                        </div>
                        <div>Catégorie : {{ post.category.name }}</div>
                      </div>
                      <div class="ms-auto">
                        <a href="#" class="text-muted">
                          <!-- Download SVG icon from http://tabler-icons.io/i/eye -->
                          <svg xmlns="http://www.w3.org/2000/svg" class="icon" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><circle cx="12" cy="12" r="2" /><path d="M22 12c-2.667 4.667 -6 7 -10 7s-7.333 -2.333 -10 -7c2.667 -4.667 6 -7 10 -7s7.333 2.333 10 7" /></svg>
                          467
                        </a>
                        <a href="#" class="ms-3 text-muted">
                          <!-- Download SVG icon from http://tabler-icons.io/i/heart -->
                          <svg xmlns="http://www.w3.org/2000/svg" class="icon" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M19.5 12.572l-7.5 7.428l-7.5 -7.428m0 0a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572" /></svg>
                          67
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

  
            </div>
            <div class="d-flex">
              <ul class="pagination ms-auto">
                <li class="page-item disabled">
                  <a class="page-link" href="#" tabindex="-1" aria-disabled="true">
                    <!-- Download SVG icon from http://tabler-icons.io/i/chevron-left -->
                    <svg xmlns="http://www.w3.org/2000/svg" class="icon" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><polyline points="15 6 9 12 15 18" /></svg>
                    prev
                  </a>
                </li>
                <li class="page-item"><a class="page-link" href="#">1</a></li>
                <li class="page-item active"><a class="page-link" href="#">2</a></li>
                <li class="page-item"><a class="page-link" href="#">3</a></li>
                <li class="page-item"><a class="page-link" href="#">4</a></li>
                <li class="page-item"><a class="page-link" href="#">5</a></li>
                <li class="page-item">
                  <a class="page-link" href="#">
                    next <!-- Download SVG icon from http://tabler-icons.io/i/chevron-right -->
                    <svg xmlns="http://www.w3.org/2000/svg" class="icon" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><polyline points="9 6 15 12 9 18" /></svg>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
      </div>
</template>
