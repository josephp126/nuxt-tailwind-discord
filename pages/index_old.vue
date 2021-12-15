<template>
  <div id="content" class="main-content">
    <div class="layout-px-spacing">
      <div
        class="pb-4"
        style="
          align-items: center !important;
          justify-content: center !important;
        "
      >
        <div
          data-aos="fade-up"
          class="
            col-md-10
            text-center
            align-items-center
            justify-content-center
          "
          style="text-align: center !important; margin: auto; padding-top: 7%"
        >
          <div class="text-center text-5xl typewrite">
            <p class="p-1">Why Discortics™?</p>
            <span class="text-4xl text-white font-semibold wrap p-1"
              >{{reasons[Math.floor(Math.random() * reasons.length)]}}</span
            >
            <span class="invisible">.</span>
          </div>
          <p class="max-w-2xl mx-auto p-4">
            Discortics™ is a highly efficient modern Discord Bot for almost all
            your Needs! Being completely free, Discortics™ brings many Premium
            Features right at your fingertips. What are you waiting for?
          </p>
          <p class="flex justify-center gap-4">
            <button
              @click="fireSwal"
              class="
                flex
                rounded-md
                border border-white
                block
                transition
                duration-500
                ease-in-out
                transform
                hover:-translate-y-1
                p-2
                bg-gradient-to-r
                from-red-400
                to-red-600
              "
            >
              <SVGSend size="20" /> <span class="px-2">Invite Bot</span>
            </button>
            <a
              id="dash3"
              href="https://discord.com/api/oauth2/authorize?client_id=739735540483752006&redirect_uri=https%3A%2F%2Fdiscortics.com%2Fcallback.html&response_type=token&scope=identify%20guilds "
              ><button
                class="
                  flex
                  rounded-md
                  border border-white
                  block
                  transition
                  duration-500
                  ease-in-out
                  transform
                  hover:-translate-y-1
                  p-2
                  bg-gradient-to-r
                  from-gray-700
                  to-gray-900
                "
              >
                <SVGSliders size="20" /> <span class="px-2">Dashboard</span>
              </button></a
            >
          </p>
        </div>
      </div>
      <div class="items-center justify-center" data-aos="fade-up">
        <div
          data-aos="fade-up"
          class="
            col-md-10
            text-center
            min-h-200
            block
            items-center
            m-auto
            max-w-4xl
            justify-center
            text-center
          "
        >
          <div class="flex flex-wrap m-auto relative -mx-2">
            <div class="flex w-full px-2 relative">
              <div id="headerWrapper" class="hero-img mx-auto">
                <img
                  alt="header-left"
                  class="header-left max-w-full h-auto object-cover"
                  src="/img/dashboard_left.png"
                />
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
      <div class="max-w-md sm:max-w-6xl mx-auto w-full" data-aos="fade-up">
        <div class="mx-auto flex flex-col md:flex-row md:flex-wrap justify-center w-full">
          <div v-for="feature in features" :key="feature.name">
            <CardsFeature
              :name="feature.name"
              :description="feature.description"
              :svg="feature.icon"
            />
          </div>
        </div>
      </div>
      <div
        data-aos="fade-up"
        class="container"
        style="
          align-items: center !important;
          justify-content: center !important;
        "
      >
        <div class="text-center flex justify-between mx-auto p-8 md:max-w-6xl">
          <p class="text-5xl">
            Build the Server of <span class="font-bold">your Dreams</span>
          </p>
          <button
            @click="fireSwal"
            class="
              flex
              text-white
              rounded-md
              border-2 border-white
              block
              transition
              duration-500
              ease-in-out
              transform
              hover:-translate-y-1
              p-2
              bg-gradient-to-r
              from-red-400
              to-red-600
            "
          >
            <SVGSend size = "20" />
            <span class="px-2">Invite Bot</span>
          </button>
        </div>
      </div>
      <div
        class="container"
        style="
          align-items: center !important;
          justify-content: center !important;
        "
      >
        <div
          class="
            col-md-10
            text-center
            align-items-center
            justify-content-center
          "
          style="
            text-align: center !important;
            margin: auto;
            padding-top: 8%;
            padding-bottom: 50px;
          "
        >
          <div
            class="
              flex flex-col
              md:flex-row
              items-center
              justify-center
              md:space-x-14
              text-xl
              md:text-4xl
            "
          >
            <div
              id="counters"
              data-aos-id="counter"
              data-aos="fade-up"
              class="counter-container"
            >
              <div class="counter-content" style="border: 0px">
                <h1
                  id="servercount"
                  class="s-counter2 text-discortics-link"
                  style="font-weight: 800"
                >
                  {{ pingResult.servers || '--' }}
                </h1>
              </div>
              <p class="text-sm">Dependent Servers</p>
            </div>

            <div data-aos="fade-up" class="counter-container">
              <div class="counter-content" style="border: 0px">
                <h1
                  id="membercount"
                  class="s-counter3 text-discortics-link"
                  style="font-weight: 800"
                >
                  {{ pingResult.users || '--' }}
                </h1>
              </div>
              <p class="text-sm">Happy Users</p>
            </div>

            <div data-aos="fade-up" class="counter-container">
              <div class="counter-content" style="border: 0px">
                <h1
                  id="pingss"
                  class="s-counter4 text-discortics-link"
                  style="font-weight: 800"
                >
                  {{ pingResult.ping || '--' }}
                </h1>
              </div>
              <p class="text-sm">Average Ping</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Features from '@/data/Features'
import Reasons from '@/data/Reasons'
const SwalOptions = {
  title: '<u>Invite Bot</u>',
  html: 'Here are different ways to invite Discortics',
  showCloseButton: true,
  showDenyButton: true,
  focusConfirm: false,
  background: "0e1726",
  buttonsStyling: false,
  confirmButtonText:
    '<a class = "bg-discortics-200 rounded-md p-4 text-white" href="https://discord.com/api/oauth2/authorize?client_id=739735540483752006&permissions=8&scope=bot%20applications.commands"> Invite with Admin Permission</a>',
  denyButtonText:
    '<a class =  "bg-discortics-200 rounded-md p-4 text-white" href="https://discord.com/api/oauth2/authorize?client_id=739735540483752006&permissions=2081287414&redirect_uri=https%3A%2F%2Fdiscortics.com%2Fcallback.html&scope=bot%20applications.commands"> Invite with Normal Permissions</a>',
  padding: '2rem',
  customClass: {
    confirmButton: 'p-4',
    denyButton: 'p-4',
    container: 'bg-discortics-dashboard',
    popup: 'bg-discortics-dashboard'
  }
}
export default {
  name: 'Home',
  async asyncData({ $axios }) {
    try {
      const result = await $axios.$get('/api/ping')
      return {
        features: Features,
        reasons: Reasons,
        pingResult: {
          users: result.members
            .toString()
            .replace(/\B(?=(\d{3})+(?!\d))/g, ','),
          servers: result.guilds
            .toString()
            .replace(/\B(?=(\d{3})+(?!\d))/g, ','),
          ping: 20,
        },
      }
    } catch (e) {
      console.error(e)
      return {
        features: Features,
        reasons: Reasons,
        pingResult: {
          users: e,
          servers: null,
          ping: 20,
        },
      }
    }
  },
  methods: {
    fireSwal() {
      this.$swal.fire(SwalOptions)
    }
  }
}
</script>
<style scoped src = '@/static/css/mainImage.css' />
