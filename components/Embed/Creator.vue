<template>
  <div class="p-4">
    <form>
      <div class="flex flex-col space-y-4">
        <div
          class="
            flex flex-col
            lg:flex-row
            justify-between
            space-y-4
            lg:space-x-4 lg:space-y-0
          "
        >
          <div class="flex flex-col items-center w-full">
            <label for="in_author" class="font-semibold p-2">Author Name</label>
            <input
              id="in_author"
              v-model="author"
              class="
                bg-discortics-quote
                border-gray-500
                p-2
                border
                rounded-md
                w-full
                h-12
              "
              maxlength="256"
            />
          </div>
          <div class="flex flex-col items-center w-full">
            <label for="in_avatar" class="font-semibold p-2"
              >Author Avatar</label
            >
            <input
              id="in_avatar"
              v-model="author_image"
              class="
                bg-discortics-quote
                border-gray-500
                p-2
                border
                rounded-md
                w-full
                h-12
              "
              maxlength="256"
            />
          </div>
        </div>
        <div class="flex flex-col items-center w-full">
          <label for="in_title" class="font-semibold p-2">Title</label>
          <input
            id="in_title"
            v-model="title"
            class="
              bg-discortics-quote
              border-gray-500
              p-2
              border
              rounded-md
              w-full
              h-12
            "
            maxlength="256"
          />
        </div>
        <div class="flex flex-col items-center w-full">
          <label for="in_banner" class="font-semibold p-2">Banner Image</label>
          <input
            id="in_banner"
            v-model="banner"
            class="
              bg-discortics-quote
              border-gray-500
              p-2
              border
              rounded-md
              w-full
              h-12
            "
            maxlength="256"
          />
          <div class="flex flex-col items-center w-full">
            <label for="in_thumbnail" class="font-semibold p-2"
              >Thumbnail</label
            >
            <input
              id="in_thumbnail"
              v-model="thumbnail"
              class="
                bg-discortics-quote
                border-gray-500
                p-2
                border
                rounded-md
                w-full
                h-12
              "
              maxlength="256"
            />
          </div>
        </div>
        <div class="flex flex-row justify-center space-x-4">
          <div class="flex flex-col items-center w-full">
            <label for="in_color" class="font-semibold p-2">Color</label>
            <input
            v-model = "color"
              id="in_color"
              type="color"
              class="
                bg-discortics-quote
                border-gray-500
                p-2
                border
                rounded-md
                h-12
              "
            />
          </div>
          <div class="flex flex-col items-center w-full">
            <label for="in_channel" class="font-semibold p-2">Channel</label>
            <select
              id="in_channel"
              v-model = "channel"
              class="
                bg-discortics-quote
                border-gray-500
                p-2
                appearance-none
                border
                rounded-md
                h-12
              "
              data-live-search="true"
              tabindex="-98"
            >
              <option v-if="$fetchState.pending" value="" selected>Disabled</option>
              <option v-else v-for="channelObj in channels" :key = "channelObj.id" :value = "channelObj.id" :disabled="!channelObj.accessible">{{channelObj.name}}</option>
            </select>
          </div>
        </div>
        <div class="flex flex-col items-center w-full">
          <label for="in_description" class="font-semibold p-2"
            >Description</label
          >
          <textarea
            id="in_description"
            v-model="description"
            class="
              bg-discortics-quote
              border-gray-500
              p-2
              border
              rounded-md
              w-full
              h-12
            "
            maxlength="4000"
          />
        </div>
        <div class="flex flex-col items-center w-full">
          <span class="text-lg font-semibold">Fields</span>
          <div
            v-for="field in fields"
            :key="fields.indexOf(field)"
            class="w-full p-2"
          >
            <div
              class="
                border-maid-border border-opacity-50
                p-2
                border
                flex flex-col
                items-center
                w-full
              "
            >
              <div
                class="
                  flex flex-col
                  lg:flex-row
                  justify-between
                  items-center
                  space-y-4
                  w-full
                  lg:space-x-4 lg:space-y-0
                "
              >
                <div class="flex flex-col items-center w-full">
                  <label for="field_name" class="font-semibold p-2">Name</label>
                  <input
                    id="field_name"
                    v-model="field.name"
                    class="
                      bg-discortics-quote
                      border-gray-500
                      p-2
                      border
                      rounded-md
                      w-full
                      h-12
                    "
                    maxlength="256"
                  />
                </div>
                <div class="flex flex-col items-center w-full">
                  <label for="field_value" class="font-semibold p-2"
                    >Value</label
                  >
                  <textarea
                    id="field_value"
                    v-model="field.value"
                    class="
                      bg-discortics-quote
                      border-gray-500
                      p-2
                      border
                      rounded-md
                      w-full
                      h-12
                    "
                    maxlength="1024"
                  />
                </div>
                <div class="flex flex-col block items-center justify-start">
                  <label for="field_inline" class="font-semibold p-2"
                    >Inline</label
                  >
                  <input
                    id="field_inline"
                    v-model="field.inline"
                    type="checkbox"
                    class="
                      bg-discortics-quote
                      border-gray-500
                      p-2
                      border
                      rounded-full
                      w-12
                      h-12
                      appearance-none
                      checked:bg-discortics-link
                    "
                    maxlength="1024"
                  />
                </div>
              </div>
            </div>
          </div>
          <div class="p-4" @click="addField">
            <InputDefaultButton
              text="Add Field"
              v-if="fields.length < 25 && !validateLength()"
            />
          </div>
        </div>
        <div
          class="
            flex flex-col
            lg:flex-row
            justify-between
            space-y-4
            lg:space-x-4 lg:space-y-0
          "
        >
          <div class="flex flex-col items-center w-full">
            <label for="in_footer" class="font-semibold p-2">Footer Text</label>
            <input
              id="in_footer"
              v-model="footer"
              class="
                bg-discortics-quote
                border-gray-500
                p-2
                border
                rounded-md
                w-full
                h-12
              "
              maxlength="256"
            />
          </div>
          <div class="flex flex-col items-center w-full">
            <label for="in_icon" class="font-semibold p-2">Footer Icon</label>
            <input
              id="in_icon"
              v-model="icon"
              class="
                bg-discortics-quote
                border-gray-500
                p-2
                border
                rounded-md
                w-full
                h-12
              "
              maxlength="256"
            />
          </div>
          <div class="flex flex-col items-center w-full">
            <label for="in_timestamp" class="font-semibold p-2"
              >Timestamp</label
            >
            <input
              id="in_timestamp"
              type="date"
              v-model="timestamp"
              class="
                bg-discortics-quote
                border-gray-500
                p-2
                border
                rounded-md
                w-full
                h-12
              "
              maxlength="256"
            />
          </div>
        </div>
        <div class="flex flex-col items-center w-full">
          <div class="p-4" @click="createEmbed">
            <InputDefaultButton text="Create Embed" />
          </div>
        </div>
      </div>
    </form>
    <div class="text-lg">
      <!--      {{ timestamp ? new Date(timestamp).getTime() : '' }} -->
    </div>
  </div>
</template>

<script>
export default {
  async fetch() {
let channels = await this.$api.request({
      url: `/channels?id=${localStorage.getItem('guildID')}`,
      method: 'get',
      headers: {
        Authorization: `Bearer ${localStorage.getItem('sessionToken')}`,
      },
    })
console.info("api")
channels = channels.data
const channelX = Object.keys(channels)
const channelList = channelX.map(x => ({id: x, name: channels[x][0], accessible: channels[x][1]}))
this.channels = channelList
console.log(channelList)
  },
  data() {
    return {
      channels: [],
      author: '',
      author_image: '',
      title: '',
      color: '',
      channel: '',
      url: '',
      description: '',
      fields: [{ name: '', value: '', inline: false }],
      thumbnail: '',
      banner: '',
      footer: '',
      timestamp: '',
      icon: '',
    }
  },
  methods: {
    async createEmbed() {
      const response = await this.$api.request({
        url: `/embed?id=${localStorage.getItem('guildID')}`,
        method: 'post',
        data: {
          cid: this.channel,
          title: this.title,
          url: this.url,
          color: this.color,
          description: this.description,
          fields: this.fields,
          thumbnail: {
            url: this.thumbnail,
          },
          timestamp: new Date(this.timestamp).getTime(),
          image: {
            url: this.banner,
          },
          footer: {
            text: this.footer,
            icon_url: this.icon,
          },
          author: {
            name: this.author,
            icon_url: this.author_image,
          },
        },
        headers: {
          Authorization: `Bearer ${localStorage.getItem('sessionToken')}`,
        },
      })
      if (response.status === 200)
        this.$toast.success('Successfully posted embed!')
      else this.$toast.error('Successfully updated prefix!')
    },
    validateLength() {
      const validated = this.totalLength() >= 6000
      if (validated) this.$toast.global.embedLimit()
      return validated
    },
    totalLength() {
      return (
        this.author.length +
        this.title.length +
        this.description.length +
        this.fields.map((x) => x.name + x.value).join('').length +
        this.footer.length
      )
    },
    addField() {
      this.fields.push({ name: '', value: '', inline: false })
    },
    validateAll() {
      if (this.validateLength) return true
      return false
    },
  },
}
</script>