<template>
  <div class="w-full">
    <SVGNewAppsCovered
      v-if="name.toLowerCase() == 'appscovered'"
      :size="size"
    />
    <SVGNewCommandCovered
      v-if="name.toLowerCase() == 'commandcovered'"
      :size="size"
    />
    <SVGNewCustomCovered
      v-if="name.toLowerCase() == 'customcovered'"
      :size="size"
    />
    <SVGNewEconomyCovered
      v-if="name.toLowerCase() == 'economycovered'"
      :size="size"
    />
    <SVGNewEmbedCovered
      v-if="name.toLowerCase() == 'embedcovered'"
      :size="size"
    />
    <SVGNewGiveawayCovered
      v-if="name.toLowerCase() == 'giveawaycovered'"
      :size="size"
    />
    <SVGNewLevelCovered
      v-if="name.toLowerCase() == 'levelcovered'"
      :size="size"
    />
    <SVGNewModCovered v-if="name.toLowerCase() == 'modcovered'" :size="size" />
    <SVGNewNotificationCovered
      v-if="name.toLowerCase() == 'notificationcovered'"
      :size="size"
    />
    <SVGNewPremiumCovered
      v-if="name.toLowerCase() == 'premiumcovered'"
      :size="size"
    />
    <SVGNewScoreboardCovered
      v-if="name.toLowerCase() == 'scoreboardcovered'"
      :size="size"
    />
    <SVGNewStatsCovered
      v-if="name.toLowerCase() == 'statscovered'"
      :size="size"
    />
    <SVGNewTagsCovered
      v-if="name.toLowerCase() == 'tagscovered'"
      :size="size"
    />
    <SVGNewTicketCovered
      v-if="name.toLowerCase() == 'ticketcovered'"
      :size="size"
    />
    <SVGNewVerificationCovered
      v-if="name.toLowerCase() == 'verificationcovered'"
      :size="size"
    />
    <SVGNewWelcomeCovered
      v-if="name.toLowerCase() == 'welcomecovered'"
      :size="size"
    />
    <SVGNewPreApps v-if="name.toLowerCase() == 'preapps'" :size="size" />
    <SVGNewPreCommands
      v-if="name.toLowerCase() == 'precommands'"
      :size="size"
    />
    <SVGNewPreCustom v-if="name.toLowerCase() == 'precustom'" :size="size" />
    <SVGNewPreDocs v-if="name.toLowerCase() == 'predocs'" :size="size" />
    <SVGNewPreEconomy v-if="name.toLowerCase() == 'preeconomy'" :size="size" />
    <SVGNewPreEmbed v-if="name.toLowerCase() == 'preembed'" :size="size" />
    <SVGNewPreGeneral v-if="name.toLowerCase() == 'pregeneral'" :size="size" />
    <SVGNewPreGiveaway
      v-if="name.toLowerCase() == 'pregiveaway'"
      :size="size"
    />
    <SVGNewPreHome v-if="name.toLowerCase() == 'prehome'" :size="size" />
    <SVGNewPreLeaderboard
      v-if="name.toLowerCase() == 'preleaderboard'"
      :size="size"
    />
    <SVGNewPreLevels v-if="name.toLowerCase() == 'prelevels'" :size="size" />
    <SVGNewPreLogout v-if="name.toLowerCase() == 'prelogout'" :size="size" />
    <SVGNewPreMod v-if="name.toLowerCase() == 'premod'" :size="size" />
    <SVGNewPreNotify v-if="name.toLowerCase() == 'prenotify'" :size="size" />
    <SVGNewPrePremium v-if="name.toLowerCase() == 'prepremium'" :size="size" />
    <SVGNewPreServers v-if="name.toLowerCase() == 'preservers'" :size="size" />
    <SVGNewPreStats v-if="name.toLowerCase() == 'prestats'" :size="size" />
    <SVGNewPreStats1 v-if="name.toLowerCase() == 'prestats1'" :size="size" />
    <SVGNewPreSupport v-if="name.toLowerCase() == 'presupport'" :size="size" />
    <SVGNewPreTags v-if="name.toLowerCase() == 'pretags'" :size="size" />
    <SVGNewPreTick v-if="name.toLowerCase() == 'pretick'" :size="size" />
    <SVGNewPreTicket v-if="name.toLowerCase() == 'preticket'" :size="size" />
    <SVGNewPreVerify v-if="name.toLowerCase() == 'preverify'" :size="size" />
    <SVGNewPreWelcome v-if="name.toLowerCase() == 'prewelcome'" :size="size" />
  </div>
</template>
<script>
export default {
  props: {
    name: {
      type: String,
      default: null,
    },
    size: {
      type: String,
      default() {
        return '48'
      },
    },
  },
}
</script>