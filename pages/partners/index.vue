<script>
import PartnerList from '@/data/PartnerList'
export default {
  data() {
    return {
      PartnerList,
    }
  },
}
</script>
<template>

  <div id="content" class="main-content">
    <div class="">
      <div
        class="container ftco-animate fadeInUp ftco-animated"
        style="
          align-items: center !important;
          justify-content: center !important;
        "
      >
        <div data-aos="fade-up" class="p-8 text-center mx-auto">
          <h1 style="font-size: 52px" class="leading-2">Our Partners</h1>
          <p>The organisations/servers partnered with Discortics™</p>
        </div>
      </div>
    </div>

    <div class="max-w-6xl mx-auto">
      <div class="bg-discortics-container py-4 px-16">
        <h2 class="display-4 mb-3 text-4xl font-semibold mt-4">
          <a href="htttps://madsen.store">Madsen Hosting</a>
        </h2>
        <p class="lead mt-3" style="margin-bottom: 0px !important">
          Providing both free and paid plans for Server hosting, with a
          community built around Minecraft development & hosting. With
          everything from Dedicated Servers to shared cloud plans (VPS) for
          specific software, with native support for Minecraft servers, we are
          certain we can help you build your own network. Supports EU, NA and
          Asia Hosting.
        </p>
        <br />
        <p class="p-2">
          <a
            class="
              px-4
              py-2
              block
              text-sm
              bg-discortics-200
              w-28
              rounded-md
              transform
              transition
              duration-700
              ease-in-out
              hover:-translate-y-1
              hover:bg-discortics-300
            "
            href="https://madsen.store"
            role="button"
            >Learn More</a
          >
        </p>
        <div class="py-4">
          <blockquote
            class="
              px-2
              bg-discortics-quote
              border-l-8
              rounded-md
              border-green-600
              w-full
              mx-auto
            "
          >
            <div class="flex p-4">
              <div class="px-2 py-2 hidden md:block">
                <img
                  alt="avatar"
                  src="/img/joshua.jpg"
                  class="min-w-full rounded-full w-24 my-auto"
                />
              </div>
              <div class="p-2 my-auto">
                <p class="text-left">
                  Discortics is hosted on
                  <a href="https://nmadsen.dk">Madsen Hosting</a>. We haven't
                  experienced downtime since Day 1. We recommend them if you're
                  looking for cheap lag-free hosting providers.
                </p>
              </div>
            </div>
            <div class="text-right p-2 text-gray-300 text-sm">
              Joshua | Rem-Chan
              <cite
                title="Discortics™ is a highly efficient modern Discord Bot for almost all your Needs! Being completely free, Discortics™ brings many Premium Features right at your fingertips. What are you waiting for?"
                >Owner, Discortics™</cite
              >
            </div>
          </blockquote>
        </div>
      </div>
    </div>

    <div class="" style="padding: 0 0px !important">
      <div class="container" data-aos="fade-up">
        <div class="grid grid-cols-1 md:grid-cols-3 justify-between mx-auto">
          <div v-for="partner in PartnerList" :key="partner.title" class="p-2">
            <CardsPartner
              :title="partner.title"
              :description="partner.description"
              :link="partner.link"
              :linkname="partner.linkName"
              :icon="partner.icon"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
