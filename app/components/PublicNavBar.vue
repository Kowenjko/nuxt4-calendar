<script setup lang="ts">
import { Button } from '../../components/ui/button'
</script>

<template>
	<nav class="flex justify-between items-center fixed z-50 w-full h-28 bg-gray-300 px-10 gap-4 shadow-2xl">
		<nuxt-link to="/login" class="flex items-center gap-1 hover:scale-150 duration-500">
			<img src="/assets/logo.svg" width="60" height="60" alt="calendra logo"
		/></nuxt-link>

		<section class="sticky top-0 flex justify-between">
			<div class="flex flex-1 max-sm:gap-0 sm:gap-6">
				<SignInButton>
					<Button
						class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 cursor-pointer hover:scale-150 duration-500 rounded-2xl shadow-2xl"
					>
						Login
					</Button>
				</SignInButton>
				<SignUpButton>
					<Button
						class="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 cursor-pointer hover:scale-150 duration-500 rounded-2xl shadow-2xl"
					>
						Register
					</Button>
				</SignUpButton>
			</div>
		</section>
	</nav>
</template>
