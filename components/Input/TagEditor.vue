<template>
<div class = "p-2">
    <div class = "text-lg font-semibold">Tag Settings</div>
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
        <div class="flex flex-row justify-center space-x-4">
          <div class="flex flex-col items-center w-full">
            <label for="in_color" class="font-semibold p-2">Color</label>
            <input
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
              <option value="" selected>Disabled</option>
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
            class="w-full"
          >
            <div class="flex flex-col items-center w-full">
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
      </div>
    </form>
    <div class="text-lg">
      <!--      {{ timestamp ? new Date(timestamp).getTime() : '' }} -->
    </div>
  </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
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
}
</script>