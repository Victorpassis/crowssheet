<template lang="html">
	<div class="class-room">
		<a :href="'/classroom/'+courseId" class="btn btn-black">Voltar</a>

		<h4 class="title">{{classData.title}}</h4>
		<div class="class-room__video">
			<youtube-component 
				v-if="classData.video.length > 0" 
				:url="classData.video"
			></youtube-component>
			<p v-else>Nenhuma vídeo aula cadastrada</p>
		</div>

		<div class="class-room__content">
			<p class="content" v-html="classData.description"></p>
			<p class="content" v-html="classData.content"></p>
		</div>
		<div class="well">
			<a v-if="classData.file" download target="_blank" :href="classData.file"> 
				Download do conteúdo da disciplina 
			</a>
		</div>
		<div class="class-room__controller">
			<a v-if="classData.test" :href="'/classroom/test/'+courseId+'/'+classData.key+'?userId='+user.uid" class="btn btn-default btn-test">Realizar a prova</a>
		</div>
		<chat :class-data="classData"></chat>
	</div>
</template>
<script>
	import axios from "axios"
	import growl from "growl-alert"
	import classService from '_service/class'
	import validator from '_helpers/validator'
	import TestForm from '_components/includes/form/TestForm.vue'
	import YoutubeComponent from '_components/includes/video.vue'
	import Chat from '_components/includes/chat.vue'

	export default {
		computed: {
			user: function () {
				return this.$store.state.Session
			},
			classData: function() {
				return this.$store.state.Class
			},
			courseId: function() {
				return this.$store.state.Class.courseId
			}
		},
		components:  {
			YoutubeComponent,
			Chat
		}
	}
</script>

<style lang="sass" scoped>
	@import "~_config/_vars.scss";
	@import "~_config/_commons.scss";
	.class-room {
		width: 100%;
		max-width: 700px;
		padding: 10px;

		.title {
			font-size: 20px;
			display: flex;

			&:before {
				content: '';
				display: block;
				margin-right: 5px;
				width: 10px;
				height: 10px;
				background-color: $orange-base;
				border-radius: 50%;
				margin-top: 9px;
				opacity: 0.35;
			}
		}

		.class-room__video {
			display: flex;
			justify-content: center;

			iframe {
				height: 350px;
				width: 550px;

				@media screen and(max-width: $screen-sm) {
					width: 100%;
				}
			}
		}

		.class-room__content {
			padding: 10px;
			max-width: 750px;
		}

		.class-room__controller {
			margin-top: 40px;
			display: flex;
			justify-content: flex-end;
			padding: 10px;

			.btn {
				min-width: 100px;
				color: white;
				font-weight: bold;
				margin-left: auto;

				@media screen and(max-width: $screen-sm) {
					width: 100%;
				}
			}

			.btn-test {
				background-color: $red-base;

				&:hover {
					background-color: lighten($red-base,15);
				}
			}
		}


	}
</style>
