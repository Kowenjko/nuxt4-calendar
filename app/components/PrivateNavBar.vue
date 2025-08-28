<script setup lang="ts">
const isActive = (route: string) => {
	const currentRoute = useRoute().path
	return currentRoute === route
}
</script>

<template>
	<nav class="flex justify-between items-center fixed z-50 w-full h-28 bg-gray-200 px-10 gap-4 shadow-2xl mb-28">
		<nuxt-link to="/events" class="flex items-center gap-1 hover:scale-150 duration-500">
			<img src="/assets/logo.svg" width="60" height="60" alt="Let's talk" />
		</nuxt-link>

		<section class="sticky top-0 flex justify-between text-black">
			<div class="flex flex-1 max-sm:gap-0 sm:gap-6">
				<nuxt-link
					v-for="item in PrivateNavLinks"
					:key="item.label"
					:to="item.route"
					class="flex gap-4 items-center p-4 rounded-lg justify-start hover:scale-150 duration-300"
					:class="isActive(item.route) ? 'bg-blue-100 rounded-3xl' : ''"
				>
					<img :src="item.imgURL" :alt="item.label" width="30" height="30" />
					<p class="text-lg font-semibold max-lg:hidden">{{ item.label }}</p>
				</nuxt-link>
			</div>
		</section>
		<div class="hover:scale-150 duration-500">
			<SignedIn>
				<UserButton />
			</SignedIn>
		</div>
	</nav>
</template>
