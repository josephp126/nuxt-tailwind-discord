<template>
  <div class="py-8">
    <div
      class="
        flex flex-col
        md:flex-row
        justify-between
        items-cente
        space-y-4
        mx-auto
        md:max-w-4xl 
        md:space-x-4 md:space-y-0
      "
    >
      <div class="p-4 bg-discortics-dashboard bg-opacity-70 border-maid-border border-opacity-50 border block rounded-md w-full">
        <div class="widget widget-chart-three">
          <div class="widget-heading">
            <div style="margin: auto">
              <span
                class="font-semibold text-lg text-center mx-auto w-full block"
                >Embed Generator</span
              >
            </div>
          </div>

          <EmbedCreator />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'dashboard',
}
</script>