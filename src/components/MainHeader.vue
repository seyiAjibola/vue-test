<script setup>
</script>

<template>
    <header class="bg-white bd-header py-3 d-flex align-items-stretch border-bottom border-light">
    <div class="container-fluid d-flex">
            <h1 class="d-flex align-items-center fs-4 text-dark mb-0 w-25">
            <img src="/assets/img/logo.png" width="38" height="38" class="me-3" alt="Bootstrap">
            Adilo
            </h1>

            <!--Start navigation-->
            <ul class="top-nav nav w-50 justify-content-center">
            <li class="nav-item">
                <RouterLink to="/projects" class="nav-link" aria-current="page">Projects</RouterLink>
            </li>
            <li class="nav-item dropdown">
                <RouterLink to="/" class="nav-link active dropdown-toggle" data-bs-toggle="dropdown" role="button" aria-expanded="false">Tools & App</RouterLink>
                <ul class="dropdown-menu">
                <li><RouterLink class="dropdown-item active" to="/">Snapbyte recoder</RouterLink></li>
                <li><hr class="dropdown-divider"></li>
                <li><a class="dropdown-item" href="#">AudioBounce</a></li>
                <li><hr class="dropdown-divider"></li>
                <li><a class="dropdown-item" href="#">Sugar Voice</a></li>
                </ul>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">Channels</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">Contacts</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">Analytics</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">Settings</a>
            </li>
            </ul>
            <!--end navigation-->

            <!--start avartar / help region-->
            <div class="d-flex flex-row-reverse w-25 pe-5 avatar pt-2">
            <span  style="font-size: 10px !important;" class="ps-2 border-dark border-start">
                <a href="#" class="fs-6">
                <img src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img (31).webp" class="rounded mx-auto"
                    height="30" alt="Avatar" loading="lazy" />
                <strong class="ps-1">Cody Fisher</strong>
                </a>
            </span>
            <span><a href="#" class="ms-auto link-dark pe-2">Help</a></span>
            </div>
            <!--end avatar region-->

        </div>
    </header>
</template>
