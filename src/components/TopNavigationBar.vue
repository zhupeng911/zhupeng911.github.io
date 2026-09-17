<script setup lang="ts">
import { useLocale } from '@/composables/useLocale'

const { toggleLocale, locale } = useLocale()
</script>

<template>
	<v-app-bar
	:border=10
	class="d-none d-md-block">
		<template #default>
			<v-spacer></v-spacer>
			<v-btn
			to="/#card-overview"
			class="mr-4 ml-4"
			rounded="0"
			variant="flat"
			:active="false"
			style="display: flex; align-items: center; height: 100%">
				<span style="font-size: 20px;">{{ $t('nav.name') }}</span>
			</v-btn>
			<v-divider vertical class="mr-8"></v-divider>
			<v-btn
			to="/#card-overview"
			class="mr-4"
			prepend-icon="mdi-home"
			:active="false"
			>
				{{ $t('nav.home') }}
			</v-btn>
			<v-btn
				to="/#card-education"
			class="mr-4"
			prepend-icon="mdi-school"
			:active="false"
			>
				{{ $t('nav.education') }}
			</v-btn>
			<v-btn
			to="/#card-work"
			class="mr-4"
			prepend-icon="mdi-briefcase"
			:active="false"
			>
				{{ $t('nav.work') }}
			</v-btn>
			<v-btn
			to="/#card-paper"
			class="mr-4"
			prepend-icon="mdi-bookshelf"
			:active="false"
			>
				{{ $t('nav.paper') }}
			</v-btn>
			<v-btn
			to="/#card-project"
			class="mr-4"
			prepend-icon="mdi-hammer-screwdriver"
			:active="false"
			>
				{{ $t('nav.project') }}
			</v-btn>
			<v-btn
			class="mr-4"
			variant="text"
			prepend-icon="mdi-translate"
			@click="toggleLocale"
			>
         {{ locale === 'zh' ? 'English Mode' : '中文模式' }}
			</v-btn>
			<v-spacer></v-spacer>
		</template>
	</v-app-bar>
</template>
