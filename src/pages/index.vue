<template>
</template>

<script setup>
import router from '../router';
import { TOKEN, UID } from '../main';

if (!TOKEN || !UID) {
    router.push("/welcome");
}
if (TOKEN === "" || UID === "") {
    router.push("/welcome");
}

router.push("/panel");
</script>
