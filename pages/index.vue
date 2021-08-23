<template>
<div id="content" class="main-content">
	<div class="layout-px-spacing">
		<div
			class="pb-4"
			style="align-items: center !important;justify-content: center !important;"
		>
			<div
				data-aos="fade-up"
				class="col-md-10 text-center align-items-center justify-content-center"
				style="text-align: center !important;margin: auto;padding-top: 7%;"
			>
				<div class="text-center text-5xl typewrite">
					<p class="p-1">Why Discortics™?</p>
					<span class="text-4xl text-white font-semibold wrap p-1">{toWrite}</span>
					<span class="invisible">.</span>
				</div>
				<p class = "max-w-2xl mx-auto p-4">
					Discortics™ is a highly efficient modern Discord Bot for almost all your Needs! Being
					completely free, Discortics™ brings many Premium Features right at your fingertips. What
					are you waiting for?
				</p>
				<p class = "flex justify-center gap-4">
                    <button
					on:click={fireSwal}
					class="flex rounded-md border border-white block transition duration-500 ease-in-out transform hover:-translate-y-1 p-2 bg-gradient-to-r from-red-400 to-red-600"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="24"
							height="24"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							stroke-width="2"
							stroke-linecap="round"
							stroke-linejoin="round"
							class="feather feather-send"
							><line x1="22" y1="2" x2="11" y2="13" /><polygon
								points="22 2 15 22 11 13 2 9 22 2"
							/></svg
						> Invite Bot</button
					>
					<a
						id="dash3"
						href="https://discord.com/api/oauth2/authorize?client_id=739735540483752006&redirect_uri=https%3A%2F%2Fdiscortics.com%2Fcallback.html&response_type=token&scope=identify%20guilds "
						><button
							class="flex rounded-md border border-white block transition duration-500 ease-in-out transform hover:-translate-y-1 p-2 bg-gradient-to-r from-gray-700 to-gray-900"
							><svg
								xmlns="http://www.w3.org/2000/svg"
								width="24"
								height="24"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								stroke-width="2"
								stroke-linecap="round"
								stroke-linejoin="round"
								class="feather feather-sliders"
								><line x1="4" y1="21" x2="4" y2="14" /><line x1="4" y1="10" x2="4" y2="3" /><line
									x1="12"
									y1="21"
									x2="12"
									y2="12"
								/><line x1="12" y1="8" x2="12" y2="3" /><line
									x1="20"
									y1="21"
									x2="20"
									y2="16"
								/><line x1="20" y1="12" x2="20" y2="3" /><line x1="1" y1="14" x2="7" y2="14" /><line
									x1="9"
									y1="8"
									x2="15"
									y2="8"
								/><line x1="17" y1="16" x2="23" y2="16" /></svg
							> Dashboard</button
						></a
					>
				</p>
			</div>
		</div>
		<div
			class="items-center justify-center"
			data-aos="fade-up"
		>
			<div
				data-aos="fade-up"
				class="col-md-10 text-center min-h-200 block items-center m-auto max-w-4xl justify-center text-center"
			>
				<div class="flex flex-wrap m-auto relative -mx-2">
					<div class="flex w-full px-2 relative">
						<div id="headerWrapper" class="hero-img mx-auto">
							<img alt="header-left" class="header-left max-w-full h-auto object-cover" src="/img/dashboard_left.png" />
							<img
								alt="header-right"
								class="header-right max-w-full h-auto object-cover"
								src="/img/dashboard_right.png"
							/>
							<img
								alt="header-center"
								class="header-center max-w-full h-auto object-cover"
								src="/img/dashboard_full_1.png"
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
	<div class="p-2 pt-30x">
		<div class="max-w-6xl mx-auto" data-aos="fade-up">
			<div class="mx-auto flex flex-wrap justify-center">
        <div v-for = "feature in features" :key = "feature.name">
          <CardsFeature :name = "feature.name" :description = "feature.description" />
        </div>
			</div>
		</div>
		<div
			data-aos="fade-up"
			class="container"
			style="align-items: center !important;justify-content: center !important;"
		>
			<div class="text-center flex justify-between mx-auto p-8 md:max-w-6xl">
				<p class="text-5xl">Build the Server of <span class="font-bold">your Dreams</span></p>
				<button
					on:click={fireSwal}
					class="flex text-white rounded-md border-2 border-white block transition duration-500 ease-in-out transform hover:-translate-y-1 p-2 bg-gradient-to-r from-red-400 to-red-600"
					><svg
						xmlns="http://www.w3.org/2000/svg"
						width="24"
						height="24"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
						class="feather feather-send"
						><line x1="22" y1="2" x2="11" y2="13" /><polygon
							points="22 2 15 22 11 13 2 9 22 2"
						/></svg
					> <span >Invite Bot</span></button
				>
			</div>
		</div>
		<div
			class="container"
			style="align-items: center !important;justify-content: center !important;"
		>
			<div
				class="col-md-10 text-center align-items-center justify-content-center"
				style="text-align: center !important;margin: auto;padding-top: 8%;padding-bottom: 50px;"
			>
				<div class="simple--counter-container">
					<Counter values={counters} duration="5000" random="false" minspeed="20" let:counterResult>
						<div id="counters" data-aos-id="counter" data-aos="fade-up" class="counter-container">
							<div class="counter-content" style="border: 0px;">
								<h1 id="servercount" class="s-counter2 s-counter" style="font-weight: 800;">
									{counterResult.servers || '--'}
								</h1>
							</div>
							<p class="s-counter-text">Dependent Servers</p>
						</div>

						<div data-aos="fade-up" class="counter-container">
							<div class="counter-content" style="border: 0px;">
								<h1 id="membercount" class="s-counter3 s-counter" style="font-weight: 800;">
									{counterResult.users || '--'}
								</h1>
							</div>
							<p class="s-counter-text">Happy Users</p>
						</div>

						<div data-aos="fade-up" class="counter-container">
							<div class="counter-content" style="border: 0px;">
								<h1 id="pingss" class="s-counter4 s-counter" style="font-weight: 800;">
									{counterResult.ping || '--'}
								</h1>
							</div>
							<p class="s-counter-text">Average Ping</p>
						</div>
					</Counter>
				</div>
			</div>
		</div>
	</div>
</div>

</template>

<script>
import Features from '@/data/Features'
export default {
  name: "Home",
  data() {
    return {
      features: Features
    }
  }
}
</script>
<style scoped src = '@/static/css/mainImage.css' />
